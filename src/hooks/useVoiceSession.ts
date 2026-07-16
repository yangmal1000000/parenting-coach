"use client";

import { useRef, useState, useCallback, useEffect } from "react";

// Gemini Live API constants
const GEMINI_LIVE_URL =
  "wss://generativelanguage.googleapis.com/ws/google.ai.generativelanguage.v1alpha.GenerativeService.BidiGenerateContent";
const MODEL = "gemini-2.5-flash-preview-native-audio-dialog";
const SAMPLE_RATE = 16000; // 16kHz PCM

interface VoiceSessionConfig {
  systemInstruction: string;
  tools: unknown[];
  voiceName: string;
  apiKey: string;
}

interface UseVoiceSessionOptions {
  onTranscript?: (text: string, isUser: boolean) => void;
  onToolCall?: (toolName: string, args: unknown) => void;
  onToolResult?: (result: unknown) => void;
  onStateChange?: (state: VoiceState) => void;
  onError?: (error: string) => void;
}

export type VoiceState = "idle" | "connecting" | "listening" | "thinking" | "speaking" | "error";

export function useVoiceSession(opts: UseVoiceSessionOptions = {}) {
  const [state, setState] = useState<VoiceState>("idle");
  const [transcript, setTranscript] = useState<{ role: "user" | "ai"; text: string }[]>([]);
  const [activeSources, setActiveSources] = useState<string[]>([]);
  const [errorMsg, setErrorMsg] = useState<string>("");

  const wsRef = useRef<WebSocket | null>(null);
  const audioCtxRef = useRef<AudioContext | null>(null);
  const streamRef = useRef<MediaStream | null>(null);
  const workletNodeRef = useRef<AudioWorkletNode | null>(null);
  const playbackQueueRef = useRef<AudioBuffer[]>([]);
  const isPlayingRef = useRef(false);
  const sessionConfigRef = useRef<VoiceSessionConfig | null>(null);

  const updateState = useCallback((s: VoiceState) => {
    setState(s);
    opts.onStateChange?.(s);
  }, [opts]);

  const addTranscript = useCallback((text: string, isUser: boolean) => {
    setTranscript(prev => [...prev, { role: isUser ? "user" : "ai", text }]);
    opts.onTranscript?.(text, isUser);
  }, [opts]);

  // Playback queue processor
  const processPlaybackQueue = useCallback(() => {
    if (isPlayingRef.current) return;
    const buffer = playbackQueueRef.current.shift();
    if (!buffer || !audioCtxRef.current) return;

    isPlayingRef.current = true;
    updateState("speaking");

    const src = audioCtxRef.current.createBufferSource();
    src.buffer = buffer;
    src.connect(audioCtxRef.current.destination);
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

  // Handle incoming WebSocket messages
  const handleWsMessage = useCallback(async (event: MessageEvent) => {
    if (typeof event.data === "string") {
      try {
        const msg = JSON.parse(event.data);

        // Tool call — Gemini wants to call get_parenting_advice
        if (msg.toolCall) {
          updateState("thinking");
          for (const tc of msg.toolCall.functionCalls || []) {
            opts.onToolCall?.(tc.name, tc.args);
            try {
              const result = await fetch("/api/voice-tools", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ tool: tc.name, args: tc.args }),
              });
              const data = await result.json();
              opts.onToolResult?.(data);

              if (data.strategies) {
                setActiveSources(data.strategies.map((s: { source: string }) => s.source));
              }

              // Send tool response back to Gemini
              const toolResponse = {
                toolResponse: {
                  functionResponses: [{
                    id: tc.id,
                    name: tc.name,
                    response: { result: JSON.stringify(data) },
                  }],
                },
              };
              wsRef.current?.send(JSON.stringify(toolResponse));
            } catch (e) {
              console.error("[voice] Tool call failed:", e);
            }
          }
        }

        // Transcript — text from Gemini
        if (msg.serverContent?.outputTranscription?.text) {
          addTranscript(msg.serverContent.outputTranscription.text, false);
        }
        if (msg.serverContent?.inputTranscription?.text) {
          addTranscript(msg.serverContent.inputTranscription.text, true);
        }

        // Turn complete
        if (msg.serverContent?.turnComplete) {
          if (!isPlayingRef.current) {
            updateState("listening");
          }
        }

        // Interrupted (user barge-in)
        if (msg.serverContent?.interrupted) {
          playbackQueueRef.current = [];
          isPlayingRef.current = false;
          updateState("listening");
        }
      } catch (e) {
        console.error("[voice] WS parse error:", e);
      }
    } else if (event.data instanceof Blob) {
      // Audio response from Gemini — PCM data
      try {
        const arrayBuffer = await event.data.arrayBuffer();
        const pcmData = new Int16Array(arrayBuffer);
        const float32 = new Float32Array(pcmData.length);
        for (let i = 0; i < pcmData.length; i++) {
          float32[i] = pcmData[i] / 32768;
        }

        if (!audioCtxRef.current) return;
        const audioBuffer = audioCtxRef.current.createBuffer(1, float32.length, 24000);
        audioBuffer.copyToChannel(float32, 0);
        playbackQueueRef.current.push(audioBuffer);
        processPlaybackQueue();
      } catch (e) {
        console.error("[voice] Audio decode error:", e);
      }
    }
  }, [addTranscript, opts, processPlaybackQueue, updateState]);

  // Start session
  const startSession = useCallback(async (childProfile?: {
    name?: string; age?: string; temperament?: string[]; notes?: string;
  }, language?: string) => {
    if (wsRef.current) return;

    updateState("connecting");
    setErrorMsg("");

    try {
      // 1. Get session config from our API
      const res = await fetch("/api/voice-session", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ childProfile, language }),
      });
      const config = await res.json();
      if (config.error) throw new Error(config.error);

      const apiKey = process.env.NEXT_PUBLIC_GEMINI_API_KEY || "";
      if (!apiKey) {
        throw new Error("Gemini API key not available. Set NEXT_PUBLIC_GEMINI_API_KEY");
      }

      sessionConfigRef.current = { ...config, apiKey };

      // 2. Open WebSocket to Gemini Live
      const wsUrl = `${GEMINI_LIVE_URL}?key=${apiKey}`;
      const ws = new WebSocket(wsUrl);
      wsRef.current = ws;

      ws.onopen = () => {
        // Send setup/initialization message
        const setup = {
          setup: {
            model: MODEL,
            systemInstruction: { parts: [{ text: config.systemInstruction }] },
            generationConfig: {
              responseModalities: ["AUDIO"],
              speechConfig: {
                voiceConfig: { prebuiltVoiceConfig: { voiceName: config.voiceName } },
              },
            },
            tools: config.tools,
          },
        };
        ws.send(JSON.stringify(setup));

        // Start audio capture
        startAudioCapture();
      };

      ws.onmessage = handleWsMessage;

      ws.onerror = (e) => {
        console.error("[voice] WS error:", e);
        setErrorMsg("Connection error");
        updateState("error");
      };

      ws.onclose = () => {
        stopAudioCapture();
        wsRef.current = null;
        if (state !== "error") updateState("idle");
      };
    } catch (e) {
      const msg = e instanceof Error ? e.message : "Failed to start voice session";
      setErrorMsg(msg);
      updateState("error");
      opts.onError?.(msg);
    }
  }, [handleWsMessage, opts, state, updateState]);

  // Audio capture — mic → PCM → WebSocket
  const startAudioCapture = useCallback(async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        audio: {
          channelCount: 1,
          sampleRate: SAMPLE_RATE,
          echoCancellation: true,
          noiseSuppression: true,
        },
      });
      streamRef.current = stream;

      const audioCtx = new AudioContext({ sampleRate: SAMPLE_RATE });
      audioCtxRef.current = audioCtx;

      // Create audio worklet for PCM capture
      const workletCode = `
        class PCMProcessor extends AudioWorkletProcessor {
          process(inputs) {
            const input = inputs[0];
            if (input && input[0]) {
              const float32 = input[0];
              const int16 = new Int16Array(float32.length);
              for (let i = 0; i < float32.length; i++) {
                const s = Math.max(-1, Math.min(1, float32[i]));
                int16[i] = s < 0 ? s * 0x8000 : s * 0x7FFF;
              }
              this.port.postMessage(int16.buffer);
            }
            return true;
          }
        }
        registerProcessor('pcm-processor', PCMProcessor);
      `;

      const blob = new Blob([workletCode], { type: "application/javascript" });
      const workletUrl = URL.createObjectURL(blob);
      await audioCtx.audioWorklet.addModule(workletUrl);
      URL.revokeObjectURL(workletUrl);

      const source = audioCtx.createMediaStreamSource(stream);
      const workletNode = new AudioWorkletNode(audioCtx, "pcm-processor");

      workletNode.port.onmessage = (e) => {
        if (wsRef.current?.readyState === WebSocket.OPEN) {
          // Send raw PCM as ArrayBuffer
          wsRef.current.send(e.data);
        }
      };

      source.connect(workletNode);
      // Don't connect workletNode to destination — we don't want to hear ourselves
      workletNodeRef.current = workletNode;

      updateState("listening");
    } catch (e) {
      console.error("[voice] Audio capture failed:", e);
      setErrorMsg(e instanceof Error ? e.message : "Microphone access failed");
      updateState("error");
    }
  }, [updateState]);

  const stopAudioCapture = useCallback(() => {
    if (workletNodeRef.current) {
      workletNodeRef.current.disconnect();
      workletNodeRef.current = null;
    }
    if (streamRef.current) {
      streamRef.current.getTracks().forEach(t => t.stop());
      streamRef.current = null;
    }
    if (audioCtxRef.current) {
      audioCtxRef.current.close().catch(() => {});
      audioCtxRef.current = null;
    }
    playbackQueueRef.current = [];
    isPlayingRef.current = false;
  }, []);

  // Stop session
  const stopSession = useCallback(() => {
    if (wsRef.current) {
      wsRef.current.close();
      wsRef.current = null;
    }
    stopAudioCapture();
    updateState("idle");
  }, [stopAudioCapture, updateState]);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (wsRef.current) wsRef.current.close();
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
