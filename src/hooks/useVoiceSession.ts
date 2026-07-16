"use client";

import { useRef, useState, useCallback, useEffect } from "react";

// Gemini Live API constants
const GEMINI_LIVE_URL =
  "wss://generativelanguage.googleapis.com/ws/google.ai.generativelanguage.v1beta.GenerativeService.BidiGenerateContent";
const MODEL = "models/gemini-2.5-flash-native-audio-latest";
const INPUT_SAMPLE_RATE = 16000;  // Mic capture rate
const OUTPUT_SAMPLE_RATE = 24000; // Gemini audio output rate

export type VoiceState = "idle" | "connecting" | "listening" | "thinking" | "speaking" | "error";

interface UseVoiceSessionOptions {
  onTranscript?: (text: string, isUser: boolean) => void;
  onToolCall?: (toolName: string, args: unknown) => void;
  onToolResult?: (result: unknown) => void;
  onStateChange?: (state: VoiceState) => void;
  onError?: (error: string) => void;
}

interface TranscriptEntry {
  role: "user" | "ai";
  text: string;
}

export function useVoiceSession(opts: UseVoiceSessionOptions = {}) {
  const [state, setState] = useState<VoiceState>("idle");
  const [transcript, setTranscript] = useState<TranscriptEntry[]>([]);
  const [activeSources, setActiveSources] = useState<string[]>([]);
  const [errorMsg, setErrorMsg] = useState<string>("");

  // Refs for everything that callbacks need (avoids stale closures)
  const wsRef = useRef<WebSocket | null>(null);
  const inputAudioCtxRef = useRef<AudioContext | null>(null);
  const outputAudioCtxRef = useRef<AudioContext | null>(null);
  const streamRef = useRef<MediaStream | null>(null);
  const workletNodeRef = useRef<AudioWorkletNode | null>(null);
  const playbackQueueRef = useRef<AudioBuffer[]>([]);
  const isPlayingRef = useRef(false);
  const isSetupDoneRef = useRef(false);
  const stateRef = useRef<VoiceState>("idle");

  // Keep stateRef in sync
  const updateState = useCallback((s: VoiceState) => {
    stateRef.current = s;
    setState(s);
    opts.onStateChange?.(s);
  }, [opts]);

  const addTranscript = useCallback((text: string, isUser: boolean) => {
    setTranscript(prev => {
      const entry: TranscriptEntry = { role: isUser ? "user" : "ai", text };
      const updated = [...prev, entry];
      // Keep last 50 entries
      return updated.length > 50 ? updated.slice(-50) : updated;
    });
    opts.onTranscript?.(text, isUser);
  }, [opts]);

  // ─── Playback queue processor ───
  const processPlaybackQueue = useCallback(() => {
    if (isPlayingRef.current) return;
    const buffer = playbackQueueRef.current.shift();
    if (!buffer || !outputAudioCtxRef.current) {
      // Nothing to play — go back to listening if we were speaking
      if (stateRef.current === "speaking") updateState("listening");
      return;
    }

    isPlayingRef.current = true;
    updateState("speaking");

    const src = outputAudioCtxRef.current.createBufferSource();
    src.buffer = buffer;
    src.connect(outputAudioCtxRef.current.destination);
    src.onended = () => {
      isPlayingRef.current = false;
      if (playbackQueueRef.current.length > 0) {
        processPlaybackQueue();
      } else {
        updateState("listening");
      }
    };
    src.start();
  }, [updateState]);

  // ─── Handle incoming WebSocket messages ───
  const handleWsMessage = useCallback(async (event: MessageEvent) => {
    // ── Text messages (JSON control messages) ──
    let dataStr: string | null = null;

    if (typeof event.data === "string") {
      dataStr = event.data;
    } else if (event.data instanceof ArrayBuffer) {
      // Some browsers deliver text frames as ArrayBuffer — try decoding as UTF-8
      try {
        const decoded = new TextDecoder().decode(event.data);
        if (decoded.startsWith("{") || decoded.startsWith("[")) {
          dataStr = decoded;
        }
      } catch {
        // Not text — it's binary audio
      }
    } else if (event.data instanceof Blob) {
      try {
        const text = await event.data.text();
        if (text.startsWith("{") || text.startsWith("[")) {
          dataStr = text;
        }
      } catch {
        // Not text
      }
    }

    if (dataStr !== null) {
      try {
        const msg = JSON.parse(dataStr);
        console.log("[voice] WS JSON:", msg.setupComplete ? "setupComplete" : msg.toolCall ? "toolCall" : msg.serverContent ? "serverContent" : "unknown");

        // Setup complete — Gemini is ready for audio
        if (msg.setupComplete) {
          isSetupDoneRef.current = true;
          updateState("listening");
          return;
        }

        // Tool call — Gemini wants to call get_parenting_advice
        if (msg.toolCall?.functionCalls) {
          updateState("thinking");
          for (const tc of msg.toolCall.functionCalls) {
            opts.onToolCall?.(tc.name, tc.args);

            // Execute tool via our API
            try {
              const result = await fetch("/api/voice-tools", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ tool: tc.name, args: tc.args }),
              });
              const data = await result.json();
              opts.onToolResult?.(data);

              if (data.strategies) {
                const sources = data.strategies.map((s: { source: string }) => s.source);
                setActiveSources(sources);
              }

              // Send tool response back to Gemini
              const toolResponse = {
                toolResponse: {
                  functionResponses: [{
                    id: tc.id,
                    name: tc.name,
                    response: { output: JSON.stringify(data) },
                  }],
                },
              };
              wsRef.current?.send(JSON.stringify(toolResponse));
            } catch (e) {
              console.error("[voice] Tool call failed:", e);
              // Send error response so Gemini doesn't hang
              wsRef.current?.send(JSON.stringify({
                toolResponse: {
                  functionResponses: [{
                    id: tc.id,
                    name: tc.name,
                    response: { error: "Tool execution failed" },
                  }],
                },
              }));
            }
          }
        }

        // AI transcript (output transcription)
        if (msg.serverContent?.outputTranscription?.text) {
          addTranscript(msg.serverContent.outputTranscription.text, false);
        }

        // User transcript (input transcription)
        if (msg.serverContent?.inputTranscription?.text) {
          addTranscript(msg.serverContent.inputTranscription.text, true);
        }

        // Turn complete
        if (msg.serverContent?.turnComplete) {
          if (!isPlayingRef.current && playbackQueueRef.current.length === 0) {
            updateState("listening");
          }
        }

        // Interrupted (user barge-in)
        if (msg.serverContent?.interrupted) {
          playbackQueueRef.current = [];
          isPlayingRef.current = false;
          updateState("listening");
        }
      } catch {
        // Non-JSON text message — ignore
      }
      return;
    }

    // ── Binary messages (audio from Gemini) ──
    // With binaryType = "arraybuffer", both JSON and audio arrive as ArrayBuffer
    // JSON was already handled above via TextDecoder. Anything reaching here is audio.
    if (event.data instanceof ArrayBuffer) {
      try {
        const pcmData = new Int16Array(event.data);
        if (pcmData.length === 0) return;

        // Convert Int16 PCM → Float32
        const float32 = new Float32Array(pcmData.length);
        for (let i = 0; i < pcmData.length; i++) {
          float32[i] = pcmData[i] / 32768;
        }

        // Use output AudioContext at Gemini's output sample rate
        const ctx = outputAudioCtxRef.current;
        if (!ctx) return;

        const audioBuffer = ctx.createBuffer(1, float32.length, OUTPUT_SAMPLE_RATE);
        audioBuffer.copyToChannel(float32, 0);
        playbackQueueRef.current.push(audioBuffer);
        processPlaybackQueue();
      } catch (e) {
        console.error("[voice] Audio decode error:", e);
      }
    } else if (event.data instanceof Blob) {
      try {
        const arrayBuffer = await event.data.arrayBuffer();
        const pcmData = new Int16Array(arrayBuffer);
        if (pcmData.length === 0) return;

        const float32 = new Float32Array(pcmData.length);
        for (let i = 0; i < pcmData.length; i++) {
          float32[i] = pcmData[i] / 32768;
        }

        const ctx = outputAudioCtxRef.current;
        if (!ctx) return;

        const audioBuffer = ctx.createBuffer(1, float32.length, OUTPUT_SAMPLE_RATE);
        audioBuffer.copyToChannel(float32, 0);
        playbackQueueRef.current.push(audioBuffer);
        processPlaybackQueue();
      } catch (e) {
        console.error("[voice] Audio decode error:", e);
      }
    }
  }, [addTranscript, opts, processPlaybackQueue, updateState]);

  // ─── Audio capture: mic → PCM 16-bit → WebSocket ───
  const startAudioCapture = useCallback(async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        audio: {
          channelCount: 1,
          sampleRate: INPUT_SAMPLE_RATE,
          echoCancellation: true,
          noiseSuppression: true,
          autoGainControl: true,
        },
      });
      streamRef.current = stream;

      // Input context for mic capture
      const inputCtx = new AudioContext({ sampleRate: INPUT_SAMPLE_RATE });
      // Safari starts AudioContext suspended — must resume explicitly
      if (inputCtx.state === "suspended") {
        await inputCtx.resume();
      }
      inputAudioCtxRef.current = inputCtx;

      // Output context for playback (Gemini sends 24kHz audio)
      const outputCtx = new AudioContext({ sampleRate: OUTPUT_SAMPLE_RATE });
      if (outputCtx.state === "suspended") {
        await outputCtx.resume();
      }
      outputAudioCtxRef.current = outputCtx;

      // AudioWorklet for PCM capture
      const workletCode = `
        class PCMProcessor extends AudioWorkletProcessor {
          process(inputs) {
            const input = inputs[0];
            if (input && input[0] && input[0].length > 0) {
              const float32 = input[0];
              const int16 = new Int16Array(float32.length);
              for (let i = 0; i < float32.length; i++) {
                const s = Math.max(-1, Math.min(1, float32[i]));
                int16[i] = s < 0 ? s * 0x8000 : s * 0x7FFF;
              }
              this.port.postMessage(int16.buffer, [int16.buffer.buffer]);
            }
            return true;
          }
        }
        registerProcessor('pcm-capture', PCMProcessor);
      `;

      const blob = new Blob([workletCode], { type: "application/javascript" });
      const workletUrl = URL.createObjectURL(blob);
      await inputCtx.audioWorklet.addModule(workletUrl);
      URL.revokeObjectURL(workletUrl);

      const source = inputCtx.createMediaStreamSource(stream);
      const workletNode = new AudioWorkletNode(inputCtx, "pcm-capture");

      let audioChunkCount = 0;
      workletNode.port.onmessage = (e: MessageEvent) => {
        // Only send audio after setup is confirmed
        if (wsRef.current?.readyState === WebSocket.OPEN && isSetupDoneRef.current) {
          wsRef.current.send(e.data);
          audioChunkCount++;
          if (audioChunkCount % 50 === 0) {
            console.log("[voice] Sent", audioChunkCount, "audio chunks");
          }
        }
      };
      source.connect(workletNode);
      // Don't connect to destination — avoid hearing ourselves
      workletNodeRef.current = workletNode;
    } catch (e) {
      console.error("[voice] Audio capture failed:", e);
      const msg = e instanceof Error ? e.message : "Microphone access failed";
      setErrorMsg(msg);
      updateState("error");
    }
  }, [updateState]);

  // ─── Stop audio capture ───
  const stopAudioCapture = useCallback(() => {
    if (workletNodeRef.current) {
      try { workletNodeRef.current.disconnect(); } catch {}
      workletNodeRef.current = null;
    }
    if (streamRef.current) {
      streamRef.current.getTracks().forEach(t => t.stop());
      streamRef.current = null;
    }
    if (inputAudioCtxRef.current) {
      inputAudioCtxRef.current.close().catch(() => {});
      inputAudioCtxRef.current = null;
    }
    if (outputAudioCtxRef.current) {
      outputAudioCtxRef.current.close().catch(() => {});
      outputAudioCtxRef.current = null;
    }
    playbackQueueRef.current = [];
    isPlayingRef.current = false;
    isSetupDoneRef.current = false;
  }, []);

  // ─── Start session ───
  const startSession = useCallback(async (childProfile?: {
    name?: string; age?: string; temperament?: string[]; notes?: string;
  }, language?: string) => {
    if (wsRef.current) return;

    updateState("connecting");
    setErrorMsg("");
    setTranscript([]);
    setActiveSources([]);

    try {
      // 1. Get session config from our API
      const res = await fetch("/api/voice-session", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ childProfile, language }),
      });
      const config = await res.json();
      if (config.error) throw new Error(config.error);

      const apiKey = config.apiKey;
      if (!apiKey) {
        throw new Error("Gemini API key not configured");
      }

      // 2. Open WebSocket to Gemini Live
      const wsUrl = `${GEMINI_LIVE_URL}?key=${apiKey}`;
      const ws = new WebSocket(wsUrl);
      ws.binaryType = "arraybuffer";
      wsRef.current = ws;

      ws.onopen = () => {
        console.log("[voice] WS opened, sending setup...");
        // Send setup message
        const setup = {
          setup: {
            model: MODEL,
            systemInstruction: {
              parts: [{ text: config.systemInstruction }],
            },
            generationConfig: {
              responseModalities: ["AUDIO"],
              speechConfig: {
                voiceConfig: {
                  prebuiltVoiceConfig: { voiceName: config.voiceName },
                },
              },
            },
            tools: config.tools,
            inputAudioTranscription: {},
            outputAudioTranscription: {},
          },
        };
        ws.send(JSON.stringify(setup));
        console.log("[voice] Setup sent, model:", MODEL);

        // Start mic capture (will only send audio after setupComplete)
        startAudioCapture();
      };

      ws.onmessage = handleWsMessage;

      ws.onerror = (e) => {
        console.error("[voice] WS error:", e);
        setErrorMsg("Connection error — please try again");
        updateState("error");
      };

      ws.onclose = (e) => {
        console.log(`[voice] WS closed: ${e.code} ${e.reason}`);
        stopAudioCapture();
        wsRef.current = null;
        if (stateRef.current !== "error" && stateRef.current !== "idle") {
          updateState("idle");
        }
      };
    } catch (e) {
      const msg = e instanceof Error ? e.message : "Failed to start voice session";
      setErrorMsg(msg);
      updateState("error");
      opts.onError?.(msg);
    }
  }, [handleWsMessage, opts, startAudioCapture, stopAudioCapture, updateState]);

  // ─── Stop session ───
  const stopSession = useCallback(() => {
    if (wsRef.current) {
      try { wsRef.current.close(1000, "User ended session"); } catch {}
      wsRef.current = null;
    }
    stopAudioCapture();
    updateState("idle");
  }, [stopAudioCapture, updateState]);

  // ─── Cleanup on unmount ───
  useEffect(() => {
    return () => {
      if (wsRef.current) {
        try { wsRef.current.close(); } catch {}
        wsRef.current = null;
      }
      stopAudioCapture();
    };
  }, [stopAudioCapture]);

  return {
    state,
    transcript,
    activeSources,
    errorMsg,
    startSession,
    stopSession,
  };
}
