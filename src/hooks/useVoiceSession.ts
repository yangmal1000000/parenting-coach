"use client";

import { useRef, useState, useCallback, useEffect } from "react";

// Gemini Live API constants
const GEMINI_LIVE_URL =
  "wss://generativelanguage.googleapis.com/ws/google.ai.generativelanguage.v1beta.GenerativeService.BidiGenerateContent";
const MODEL = "models/gemini-2.5-flash-native-audio-latest";
const INPUT_SAMPLE_RATE = 16000;  // Mic capture rate
const OUTPUT_SAMPLE_RATE = 24000; // Gemini audio output rate
const MAX_PLAYBACK_QUEUE = 30;    // Cap to prevent memory growth
const PCM_ACCUM_TARGET = 12000;   // ~0.5s of 24kHz audio before scheduling a buffer

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
  const nextStartTimeRef = useRef(0);
  const isSetupDoneRef = useRef(false);
  const stateRef = useRef<VoiceState>("idle");

  // PCM accumulator: merge tiny chunks into larger buffers for smooth playback
  const pcmAccumRef = useRef<Float32Array[]>([]);
  const pcmAccumLenRef = useRef(0);

  // ─── Transcript batching (avoid re-render per chunk) ───
  const transcriptBatchRef = useRef<{ user: string; ai: string }>({ user: "", ai: "" });
  const transcriptFlushTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const flushTranscript = useCallback(() => {
    transcriptFlushTimerRef.current = null;
    const batch = transcriptBatchRef.current;
    if (!batch.user && !batch.ai) return;

    setTranscript(prev => {
      let updated = prev;
      if (batch.ai) {
        const last = updated[updated.length - 1];
        if (last && last.role === "ai") {
          updated = [...updated.slice(0, -1), { role: "ai" as const, text: last.text + batch.ai }];
        } else {
          updated = [...updated, { role: "ai" as const, text: batch.ai }];
        }
      }
      if (batch.user) {
        const last = updated[updated.length - 1];
        if (last && last.role === "user") {
          updated = [...updated.slice(0, -1), { role: "user" as const, text: last.text + batch.user }];
        } else {
          updated = [...updated, { role: "user" as const, text: batch.user }];
        }
      }
      return updated.length > 50 ? updated.slice(-50) : updated;
    });

    transcriptBatchRef.current = { user: "", ai: "" };
  }, []);

  const addTranscript = useCallback((text: string, isUser: boolean) => {
    if (isUser) {
      transcriptBatchRef.current.user += text;
    } else {
      transcriptBatchRef.current.ai += text;
    }
    if (transcriptFlushTimerRef.current === null) {
      transcriptFlushTimerRef.current = setTimeout(flushTranscript, 200);
    }
    opts.onTranscript?.(text, isUser);
  }, [flushTranscript, opts]);

  // Keep stateRef in sync
  const updateState = useCallback((s: VoiceState) => {
    stateRef.current = s;
    setState(s);
    opts.onStateChange?.(s);
  }, [opts]);

  // ─── Playback queue processor (gapless scheduling) ───
  const processPlaybackQueue = useCallback(() => {
    if (!outputAudioCtxRef.current) return;
    if (playbackQueueRef.current.length === 0) return;

    // Schedule all queued buffers back-to-back with no gaps
    while (playbackQueueRef.current.length > 0) {
      const buffer = playbackQueueRef.current.shift()!;
      const ctx = outputAudioCtxRef.current;
      const now = ctx.currentTime;

      const startTime = Math.max(now, nextStartTimeRef.current);
      if (nextStartTimeRef.current <= now) {
        updateState("speaking");
      }

      const src = ctx.createBufferSource();
      src.buffer = buffer;
      src.connect(ctx.destination);
      src.onended = () => {
        if (nextStartTimeRef.current <= ctx.currentTime + 0.05 && playbackQueueRef.current.length === 0) {
          isPlayingRef.current = false;
          nextStartTimeRef.current = 0;
          if (stateRef.current === "speaking") updateState("listening");
        }
      };
      src.start(startTime);
      nextStartTimeRef.current = startTime + buffer.duration;
      isPlayingRef.current = true;
    }
  }, [updateState]);

  // ─── PCM accumulator: merge tiny chunks → larger buffers → playback queue ───
  const flushPcmAccumulator = useCallback(() => {
    if (pcmAccumLenRef.current === 0 || !outputAudioCtxRef.current) return;

    const ctx = outputAudioCtxRef.current;
    const merged = new Float32Array(pcmAccumLenRef.current);
    let offset = 0;
    for (const chunk of pcmAccumRef.current) {
      merged.set(chunk, offset);
      offset += chunk.length;
    }

    const audioBuffer = ctx.createBuffer(1, merged.length, OUTPUT_SAMPLE_RATE);
    audioBuffer.copyToChannel(merged, 0);

    if (playbackQueueRef.current.length >= MAX_PLAYBACK_QUEUE) {
      playbackQueueRef.current.shift();
    }
    playbackQueueRef.current.push(audioBuffer);

    pcmAccumRef.current = [];
    pcmAccumLenRef.current = 0;

    processPlaybackQueue();
  }, [processPlaybackQueue]);

  const pushPcmAudio = useCallback((float32: Float32Array, sampleRate: number) => {
    // Resample if needed (Gemini sends 24kHz, our output ctx is 24kHz so usually no-op)
    let audio = float32;
    if (sampleRate !== OUTPUT_SAMPLE_RATE) {
      const ratio = OUTPUT_SAMPLE_RATE / sampleRate;
      const newLen = Math.round(float32.length * ratio);
      audio = new Float32Array(newLen);
      for (let i = 0; i < newLen; i++) {
        const srcIdx = i / ratio;
        const idx0 = Math.floor(srcIdx);
        const frac = srcIdx - idx0;
        if (idx0 + 1 < float32.length) {
          audio[i] = float32[idx0] * (1 - frac) + float32[idx0 + 1] * frac;
        } else {
          audio[i] = float32[idx0] || 0;
        }
      }
    }

    pcmAccumRef.current.push(audio);
    pcmAccumLenRef.current += audio.length;

    // Once we have ~0.5s of audio, flush to playback queue
    if (pcmAccumLenRef.current >= PCM_ACCUM_TARGET) {
      flushPcmAccumulator();
    }
  }, [flushPcmAccumulator]);

  // ─── Handle incoming WebSocket messages ───
  const handleWsMessage = useCallback(async (event: MessageEvent) => {
    // ── Text messages (JSON control messages) ──
    let dataStr: string | null = null;

    if (typeof event.data === "string") {
      dataStr = event.data;
    } else if (event.data instanceof ArrayBuffer) {
      try {
        const decoded = new TextDecoder().decode(event.data);
        if (decoded.startsWith("{") || decoded.startsWith("[")) {
          dataStr = decoded;
        }
      } catch {
        // Not text
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

        if (msg.setupComplete) {
          isSetupDoneRef.current = true;
          updateState("listening");
          return;
        }

        if (msg.toolCall?.functionCalls) {
          updateState("thinking");
          for (const tc of msg.toolCall.functionCalls) {
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
                const sources = data.strategies.map((s: { source: string }) => s.source);
                setActiveSources(sources);
              }

              wsRef.current?.send(JSON.stringify({
                toolResponse: {
                  functionResponses: [{
                    id: tc.id,
                    name: tc.name,
                    response: { output: JSON.stringify(data) },
                  }],
                },
              }));
            } catch (e) {
              console.error("[voice] Tool call failed:", e);
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

        // AI transcript
        if (msg.serverContent?.outputTranscription?.text) {
          addTranscript(msg.serverContent.outputTranscription.text, false);
        }

        // User transcript
        if (msg.serverContent?.inputTranscription?.text) {
          addTranscript(msg.serverContent.inputTranscription.text, true);
        }

        // ─── Extract audio from modelTurn ───
        const parts = msg.serverContent?.modelTurn?.parts;
        if (parts && Array.isArray(parts)) {
          for (const part of parts) {
            if (part.inlineData?.data) {
              try {
                const base64 = part.inlineData.data;
                const mimeType = part.inlineData.mimeType || "audio/pcm;rate=24000";
                const sampleRate = mimeType.includes("24000") ? 24000 : 16000;

                // base64 → ArrayBuffer (faster than atob loop)
                const resp = await fetch(`data:application/octet-stream;base64,${base64}`);
                const arrBuf = await resp.arrayBuffer();
                const pcmData = new Int16Array(arrBuf);

                // Int16 PCM → Float32
                const float32 = new Float32Array(pcmData.length);
                for (let i = 0; i < pcmData.length; i++) {
                  float32[i] = pcmData[i] / 32768;
                }

                pushPcmAudio(float32, sampleRate);
              } catch (e) {
                console.error("[voice] Audio extraction failed:", e);
              }
            }
          }
        }

        // Turn complete — flush any remaining PCM
        if (msg.serverContent?.turnComplete) {
          flushPcmAccumulator();
          if (!isPlayingRef.current && playbackQueueRef.current.length === 0) {
            updateState("listening");
          }
        }

        // Interrupted (user barge-in)
        if (msg.serverContent?.interrupted) {
          playbackQueueRef.current = [];
          isPlayingRef.current = false;
          nextStartTimeRef.current = 0;
          pcmAccumRef.current = [];
          pcmAccumLenRef.current = 0;
          updateState("listening");
        }
      } catch {
        // Non-JSON
      }
      return;
    }

    // ── Binary messages (audio from Gemini) ──
    if (event.data instanceof ArrayBuffer) {
      const testStr = new TextDecoder().decode(event.data.slice(0, 4));
      if (testStr.startsWith("{")) return;

      try {
        const pcmData = new Int16Array(event.data);
        if (pcmData.length === 0) return;

        const float32 = new Float32Array(pcmData.length);
        for (let i = 0; i < pcmData.length; i++) {
          float32[i] = pcmData[i] / 32768;
        }

        pushPcmAudio(float32, OUTPUT_SAMPLE_RATE);
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

        pushPcmAudio(float32, OUTPUT_SAMPLE_RATE);
      } catch (e) {
        console.error("[voice] Audio decode error:", e);
      }
    }
  }, [addTranscript, flushPcmAccumulator, opts, processPlaybackQueue, pushPcmAudio, updateState]);

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

      const inputCtx = new AudioContext({ sampleRate: INPUT_SAMPLE_RATE });
      if (inputCtx.state === "suspended") await inputCtx.resume();
      inputAudioCtxRef.current = inputCtx;

      const outputCtx = new AudioContext({ sampleRate: OUTPUT_SAMPLE_RATE });
      if (outputCtx.state === "suspended") await outputCtx.resume();
      outputAudioCtxRef.current = outputCtx;

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
              this.port.postMessage(int16.buffer, [int16.buffer]);
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

      // Batch audio using Uint8Array chunks (not number[] — avoids GC pressure)
      const chunks: Uint8Array[] = [];
      let chunksTotalLen = 0;
      const BATCH_BYTES = 2048; // ~64ms at 16kHz Int16

      workletNode.port.onmessage = (e: MessageEvent) => {
        if (wsRef.current?.readyState === WebSocket.OPEN && isSetupDoneRef.current) {
          const chunk = new Uint8Array(e.data as ArrayBuffer);
          chunks.push(chunk);
          chunksTotalLen += chunk.length;

          if (chunksTotalLen >= BATCH_BYTES) {
            const merged = new Uint8Array(chunksTotalLen);
            let off = 0;
            for (const c of chunks) { merged.set(c, off); off += c.length; }

            let binary = "";
            for (let i = 0; i < merged.length; i += 8192) {
              binary += String.fromCharCode.apply(null, Array.from(merged.subarray(i, i + 8192)) as unknown as number[]);
            }
            wsRef.current.send(JSON.stringify({
              realtimeInput: { audio: { data: btoa(binary), mimeType: "audio/pcm;rate=16000" } },
            }));

            chunks.length = 0;
            chunksTotalLen = 0;
          }
        }
      };
      source.connect(workletNode);
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
    nextStartTimeRef.current = 0;
    pcmAccumRef.current = [];
    pcmAccumLenRef.current = 0;
    if (transcriptFlushTimerRef.current !== null) {
      clearTimeout(transcriptFlushTimerRef.current);
      transcriptFlushTimerRef.current = null;
      flushTranscript();
    }
  }, [flushTranscript]);

  // ─── Start session ───
  const startSession = useCallback(async (childProfile?: {
    name?: string; age?: string; temperament?: string[]; notes?: string;
  }, language?: string) => {
    if (wsRef.current) return;

    updateState("connecting");
    setErrorMsg("");
    setTranscript([]);
    setActiveSources([]);
    transcriptBatchRef.current = { user: "", ai: "" };

    try {
      const res = await fetch("/api/voice-session", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ childProfile, language }),
      });
      const config = await res.json();
      if (config.error) throw new Error(config.error);

      const apiKey = config.apiKey;
      if (!apiKey) throw new Error("Gemini API key not configured");

      const wsUrl = `${GEMINI_LIVE_URL}?key=${apiKey}`;
      const ws = new WebSocket(wsUrl);
      ws.binaryType = "arraybuffer";
      wsRef.current = ws;

      ws.onopen = () => {
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
            inputAudioTranscription: {},
            outputAudioTranscription: {},
          },
        };
        ws.send(JSON.stringify(setup));
        startAudioCapture();
      };

      ws.onmessage = handleWsMessage;

      ws.onerror = () => {
        setErrorMsg("Connection error — please try again");
        updateState("error");
      };

      ws.onclose = () => {
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
