"use client";

import { useRef, useState, useCallback, useEffect } from "react";

// Gemini Live API constants
const GEMINI_LIVE_URL =
  "wss://generativelanguage.googleapis.com/ws/google.ai.generativelanguage.v1beta.GenerativeService.BidiGenerateContent";
const MODEL = "models/gemini-2.5-flash-native-audio-latest";
const INPUT_SAMPLE_RATE = 16000;  // Mic capture rate
const OUTPUT_SAMPLE_RATE = 24000; // Gemini audio output rate
const RING_BUFFER_SIZE = 24000 * 10; // 10 seconds of audio buffer

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

// Output worklet: reads from a shared ring buffer continuously
const OUTPUT_WORKLET_CODE = `
class PlaybackProcessor extends AudioWorkletProcessor {
  constructor() {
    super();
    this._buffer = new Float32Array(${RING_BUFFER_SIZE});
    this._writePos = 0;
    this._readPos = 0;
    this._hasData = false;

    this.port.onmessage = (e) => {
      const data = e.data;
      if (data.type === 'audio') {
        const samples = data.samples;
        for (let i = 0; i < samples.length; i++) {
          this._buffer[this._writePos] = samples[i];
          this._writePos = (this._writePos + 1) % this._buffer.length;
        }
        this._hasData = true;
        this.port.postMessage({ type: 'added', count: samples.length });
      } else if (data.type === 'clear') {
        this._writePos = 0;
        this._readPos = 0;
        this._hasData = false;
      }
    };
  }

  process(inputs, outputs) {
    const output = outputs[0];
    if (!output || !output[0]) return true;

    const channel = output[0];
    const avail = this._hasData ? this._samplesAvailable() : 0;

    if (avail >= channel.length) {
      for (let i = 0; i < channel.length; i++) {
        channel[i] = this._buffer[this._readPos];
        this._readPos = (this._readPos + 1) % this._buffer.length;
      }
      this.port.postMessage({ type: 'playing' });
    } else if (avail > 0) {
      // Play what we have, silence the rest
      for (let i = 0; i < avail; i++) {
        channel[i] = this._buffer[this._readPos];
        this._readPos = (this._readPos + 1) % this._buffer.length;
      }
      for (let i = avail; i < channel.length; i++) {
        channel[i] = 0;
      }
      this._hasData = false;
      this.port.postMessage({ type: 'underrun' });
    } else {
      // No data — silence
      for (let i = 0; i < channel.length; i++) {
        channel[i] = 0;
      }
    }
    return true;
  }

  _samplesAvailable() {
    if (this._writePos >= this._readPos) {
      return this._writePos - this._readPos;
    }
    return this._buffer.length - this._readPos + this._writePos;
  }
}
registerProcessor('playback-processor', PlaybackProcessor);
`;

export function useVoiceSession(opts: UseVoiceSessionOptions = {}) {
  const [state, setState] = useState<VoiceState>("idle");
  const [transcript, setTranscript] = useState<TranscriptEntry[]>([]);
  const [activeSources, setActiveSources] = useState<string[]>([]);
  const [errorMsg, setErrorMsg] = useState<string>("");

  // Refs
  const wsRef = useRef<WebSocket | null>(null);
  const inputAudioCtxRef = useRef<AudioContext | null>(null);
  const outputAudioCtxRef = useRef<AudioContext | null>(null);
  const streamRef = useRef<MediaStream | null>(null);
  const workletNodeRef = useRef<AudioWorkletNode | null>(null);
  const outputWorkletRef = useRef<AudioWorkletNode | null>(null);
  const isSetupDoneRef = useRef(false);
  const stateRef = useRef<VoiceState>("idle");
  const isSpeakingRef = useRef(false);
  const underrunCountRef = useRef(0);

  // Transcript batching
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

  const updateState = useCallback((s: VoiceState) => {
    stateRef.current = s;
    setState(s);
    opts.onStateChange?.(s);
  }, [opts]);

  // ─── Push PCM audio to output worklet ───
  const pushPcmToWorklet = useCallback((float32: Float32Array) => {
    const node = outputWorkletRef.current;
    if (!node) return;

    // Transfer the Float32Array to the worklet (zero-copy)
    node.port.postMessage({ type: "audio", samples: float32 }, [float32.buffer]);

    if (!isSpeakingRef.current) {
      isSpeakingRef.current = true;
      underrunCountRef.current = 0;
      updateState("speaking");
    }
  }, [updateState]);

  // ─── Handle incoming WebSocket messages ───
  const handleWsMessage = useCallback(async (event: MessageEvent) => {
    let dataStr: string | null = null;

    if (typeof event.data === "string") {
      dataStr = event.data;
    } else if (event.data instanceof ArrayBuffer) {
      try {
        const decoded = new TextDecoder().decode(event.data);
        if (decoded.startsWith("{") || decoded.startsWith("[")) {
          dataStr = decoded;
        }
      } catch {}
    } else if (event.data instanceof Blob) {
      try {
        const text = await event.data.text();
        if (text.startsWith("{") || text.startsWith("[")) {
          dataStr = text;
        }
      } catch {}
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

                // base64 → ArrayBuffer
                const resp = await fetch(`data:application/octet-stream;base64,${base64}`);
                const arrBuf = await resp.arrayBuffer();
                const pcmData = new Int16Array(arrBuf);

                // Int16 PCM → Float32
                const float32 = new Float32Array(pcmData.length);
                for (let i = 0; i < pcmData.length; i++) {
                  float32[i] = pcmData[i] / 32768;
                }

                // Resample if needed
                if (sampleRate !== OUTPUT_SAMPLE_RATE) {
                  const ratio = OUTPUT_SAMPLE_RATE / sampleRate;
                  const newLen = Math.round(float32.length * ratio);
                  const resampled = new Float32Array(newLen);
                  for (let i = 0; i < newLen; i++) {
                    const srcIdx = i / ratio;
                    const idx0 = Math.floor(srcIdx);
                    const frac = srcIdx - idx0;
                    if (idx0 + 1 < float32.length) {
                      resampled[i] = float32[idx0] * (1 - frac) + float32[idx0 + 1] * frac;
                    } else {
                      resampled[i] = float32[idx0] || 0;
                    }
                  }
                  pushPcmToWorklet(resampled);
                } else {
                  pushPcmToWorklet(float32);
                }
              } catch (e) {
                console.error("[voice] Audio extraction failed:", e);
              }
            }
          }
        }

        // Turn complete
        if (msg.serverContent?.turnComplete) {
          // Don't immediately switch to listening — let the worklet drain
          // The worklet's underrun message will trigger state change
        }

        // Interrupted (user barge-in)
        if (msg.serverContent?.interrupted) {
          outputWorkletRef.current?.port.postMessage({ type: "clear" });
          isSpeakingRef.current = false;
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

        pushPcmToWorklet(float32);
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

        pushPcmToWorklet(float32);
      } catch (e) {
        console.error("[voice] Audio decode error:", e);
      }
    }
  }, [addTranscript, opts, pushPcmToWorklet, updateState]);

  // ─── Audio capture + output setup ───
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

      // Input context (mic)
      const inputCtx = new AudioContext({ sampleRate: INPUT_SAMPLE_RATE });
      if (inputCtx.state === "suspended") await inputCtx.resume();
      inputAudioCtxRef.current = inputCtx;

      // Output context (playback)
      const outputCtx = new AudioContext({ sampleRate: OUTPUT_SAMPLE_RATE });
      if (outputCtx.state === "suspended") await outputCtx.resume();
      outputAudioCtxRef.current = outputCtx;

      // ─── Input worklet: mic → PCM 16-bit ───
      const inputWorkletCode = `
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

      const inputBlob = new Blob([inputWorkletCode], { type: "application/javascript" });
      const inputUrl = URL.createObjectURL(inputBlob);
      await inputCtx.audioWorklet.addModule(inputUrl);
      URL.revokeObjectURL(inputUrl);

      const source = inputCtx.createMediaStreamSource(stream);
      const workletNode = new AudioWorkletNode(inputCtx, "pcm-capture");

      // Batch mic audio using Uint8Array chunks
      const chunks: Uint8Array[] = [];
      let chunksTotalLen = 0;
      const BATCH_BYTES = 2048; // ~64ms

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

      // ─── Output worklet: ring buffer → speakers ───
      const outputBlob = new Blob([OUTPUT_WORKLET_CODE], { type: "application/javascript" });
      const outputUrl = URL.createObjectURL(outputBlob);
      await outputCtx.audioWorklet.addModule(outputUrl);
      URL.revokeObjectURL(outputUrl);

      const outputNode = new AudioWorkletNode(outputCtx, "playback-processor", {
        numberOfInputs: 0,
        numberOfOutputs: 1,
        outputChannelCount: [1],
      });
      outputNode.connect(outputCtx.destination);

      // Handle messages from the worklet
      outputNode.port.onmessage = (e: MessageEvent) => {
        const data = e.data;
        if (data.type === "underrun") {
          // Worklet ran out of data — if we were speaking, go back to listening
          underrunCountRef.current++;
          if (underrunCountRef.current >= 2 && isSpeakingRef.current) {
            isSpeakingRef.current = false;
            if (stateRef.current === "speaking") updateState("listening");
          }
        } else if (data.type === "playing") {
          // Reset underrun counter when data is flowing
          underrunCountRef.current = 0;
        }
      };

      outputWorkletRef.current = outputNode;
    } catch (e) {
      console.error("[voice] Audio capture failed:", e);
      const msg = e instanceof Error ? e.message : "Microphone access failed";
      setErrorMsg(msg);
      updateState("error");
    }
  }, [updateState]);

  // ─── Stop everything ───
  const stopAudioCapture = useCallback(() => {
    if (workletNodeRef.current) {
      try { workletNodeRef.current.disconnect(); } catch {}
      workletNodeRef.current = null;
    }
    if (outputWorkletRef.current) {
      try { outputWorkletRef.current.port.postMessage({ type: "clear" }); } catch {}
      try { outputWorkletRef.current.disconnect(); } catch {}
      outputWorkletRef.current = null;
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
    isSetupDoneRef.current = false;
    isSpeakingRef.current = false;
    underrunCountRef.current = 0;
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
