"use client";

import { useRef, useState, useCallback, useEffect } from "react";

const GEMINI_LIVE_URL =
  "wss://generativelanguage.googleapis.com/ws/google.ai.generativelanguage.v1beta.GenerativeService.BidiGenerateContent";
const MODEL = "models/gemini-2.5-flash-native-audio-latest";
const INPUT_SAMPLE_RATE = 16000;
const GEMINI_OUTPUT_RATE = 24000;

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

// Minimal ring buffer worklet — uses actual AudioContext sampleRate
const OUTPUT_WORKLET_CODE = `
class PlaybackProcessor extends AudioWorkletProcessor {
  constructor() {
    super();
    this._sr = sampleRate;
    this._bufSize = this._sr * 10;
    this._buf = new Float32Array(this._bufSize);
    this._w = 0;
    this._r = 0;
    this._started = false;
    this._silenceFrames = 0;
    this._preBuffer = this._sr * 0.4; // 400ms pre-buffer
    this._drainSilence = this._sr * 1.0; // 1s silence = drained
    this.port.postMessage({ type: 'init', sampleRate: this._sr });

    this.port.onmessage = (e) => {
      const m = e.data;
      if (m.type === 'audio') {
        const s = m.samples;
        for (let i = 0; i < s.length; i++) {
          this._buf[this._w] = s[i];
          this._w = (this._w + 1) % this._buf.length;
        }
        this._silenceFrames = 0;
      } else if (m.type === 'clear') {
        this._w = 0; this._r = 0; this._started = false; this._silenceFrames = 0;
      }
    };
  }
  _avail() {
    return this._w >= this._r ? this._w - this._r : this._buf.length - this._r + this._w;
  }
  process(inputs, outputs) {
    const out = outputs[0];
    if (!out || !out[0]) return true;
    const ch = out[0];
    const len = ch.length;
    const avail = this._avail();

    if (!this._started) {
      if (avail >= this._preBuffer) {
        this._started = true;
        this.port.postMessage({ type: 'playing', sampleRate: this._sr });
      }
      for (let i = 0; i < len; i++) ch[i] = 0;
      return true;
    }

    const toRead = Math.min(len, avail);
    for (let i = 0; i < toRead; i++) {
      ch[i] = this._buf[this._r];
      this._r = (this._r + 1) % this._buf.length;
    }
    for (let i = toRead; i < len; i++) ch[i] = 0;

    if (toRead > 0) { this._silenceFrames = 0; }
    else { this._silenceFrames += len; }

    if (this._silenceFrames > this._drainSilence) {
      this.port.postMessage({ type: 'drained' });
      this._started = false;
      this._silenceFrames = 0;
    }
    return true;
  }
}
registerProcessor('playback-processor', PlaybackProcessor);
`;

export function useVoiceSession(opts: UseVoiceSessionOptions = {}) {
  const [state, setState] = useState<VoiceState>("idle");
  const [transcript, setTranscript] = useState<TranscriptEntry[]>([]);
  const [activeSources, setActiveSources] = useState<string[]>([]);
  const [errorMsg, setErrorMsg] = useState<string>("");
  const [diag, setDiag] = useState<string>("");

  const wsRef = useRef<WebSocket | null>(null);
  const inputAudioCtxRef = useRef<AudioContext | null>(null);
  const outputAudioCtxRef = useRef<AudioContext | null>(null);
  const streamRef = useRef<MediaStream | null>(null);
  const workletNodeRef = useRef<AudioWorkletNode | null>(null);
  const outputWorkletRef = useRef<AudioWorkletNode | null>(null);
  const isSetupDoneRef = useRef(false);
  const stateRef = useRef<VoiceState>("idle");

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
    if (isUser) transcriptBatchRef.current.user += text;
    else transcriptBatchRef.current.ai += text;
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

  // ─── Resample to match actual AudioContext sample rate ───
  const resample = useCallback((float32: Float32Array, sourceRate: number, targetRate: number): Float32Array => {
    if (sourceRate === targetRate) return float32;
    const ratio = targetRate / sourceRate;
    const newLen = Math.round(float32.length * ratio);
    const out = new Float32Array(newLen);
    for (let i = 0; i < newLen; i++) {
      const srcIdx = i / ratio;
      const idx0 = Math.floor(srcIdx);
      const frac = srcIdx - idx0;
      out[i] = idx0 + 1 < float32.length
        ? float32[idx0] * (1 - frac) + float32[idx0 + 1] * frac
        : (float32[idx0] || 0);
    }
    return out;
  }, []);

  // ─── Push PCM to output worklet ───
  const pushPcmToWorklet = useCallback((float32: Float32Array, sourceRate: number) => {
    const node = outputWorkletRef.current;
    const ctx = outputAudioCtxRef.current;
    if (!node || !ctx) return;
    const audio = resample(float32, sourceRate, ctx.sampleRate);
    node.port.postMessage({ type: "audio", samples: audio }, [audio.buffer]);
  }, [resample]);

  // ─── Handle WebSocket messages ───
  const handleWsMessage = useCallback(async (event: MessageEvent) => {
    let dataStr: string | null = null;

    if (typeof event.data === "string") {
      dataStr = event.data;
    } else if (event.data instanceof ArrayBuffer) {
      try {
        const decoded = new TextDecoder().decode(event.data);
        if (decoded.startsWith("{") || decoded.startsWith("[")) dataStr = decoded;
      } catch {}
    } else if (event.data instanceof Blob) {
      try {
        const text = await event.data.text();
        if (text.startsWith("{") || text.startsWith("[")) dataStr = text;
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
                setActiveSources(data.strategies.map((s: { source: string }) => s.source));
              }
              wsRef.current?.send(JSON.stringify({
                toolResponse: {
                  functionResponses: [{ id: tc.id, name: tc.name, response: { output: JSON.stringify(data) } }],
                },
              }));
            } catch (e) {
              console.error("[voice] Tool call failed:", e);
              wsRef.current?.send(JSON.stringify({
                toolResponse: {
                  functionResponses: [{ id: tc.id, name: tc.name, response: { error: "Tool execution failed" } }],
                },
              }));
            }
          }
        }

        if (msg.serverContent?.outputTranscription?.text) {
          addTranscript(msg.serverContent.outputTranscription.text, false);
        }
        if (msg.serverContent?.inputTranscription?.text) {
          addTranscript(msg.serverContent.inputTranscription.text, true);
        }

        // Extract audio from modelTurn
        const parts = msg.serverContent?.modelTurn?.parts;
        if (parts && Array.isArray(parts)) {
          for (const part of parts) {
            if (part.inlineData?.data) {
              try {
                const base64 = part.inlineData.data;
                const mimeType = part.inlineData.mimeType || "audio/pcm;rate=24000";
                const sourceRate = mimeType.includes("24000") ? 24000 : 16000;

                // Sync base64 decode
                const binary = atob(base64);
                const bytes = new Uint8Array(binary.length);
                for (let i = 0; i < binary.length; i++) bytes[i] = binary.charCodeAt(i);
                const pcmData = new Int16Array(bytes.buffer);
                const float32 = new Float32Array(pcmData.length);
                for (let i = 0; i < pcmData.length; i++) float32[i] = pcmData[i] / 32768;

                pushPcmToWorklet(float32, sourceRate);
              } catch (e) {
                console.error("[voice] Audio extraction failed:", e);
              }
            }
          }
        }

        if (msg.serverContent?.turnComplete) {
          // Let worklet drain naturally
        }

        if (msg.serverContent?.interrupted) {
          outputWorkletRef.current?.port.postMessage({ type: "clear" });
          updateState("listening");
        }
      } catch {}
      return;
    }

    // Binary audio
    if (event.data instanceof ArrayBuffer) {
      if (new TextDecoder().decode(event.data.slice(0, 4)).startsWith("{")) return;
      try {
        const pcmData = new Int16Array(event.data);
        if (pcmData.length === 0) return;
        const float32 = new Float32Array(pcmData.length);
        for (let i = 0; i < pcmData.length; i++) float32[i] = pcmData[i] / 32768;
        pushPcmToWorklet(float32, GEMINI_OUTPUT_RATE);
      } catch (e) {
        console.error("[voice] Audio decode error:", e);
      }
    } else if (event.data instanceof Blob) {
      try {
        const arrayBuffer = await event.data.arrayBuffer();
        const pcmData = new Int16Array(arrayBuffer);
        if (pcmData.length === 0) return;
        const float32 = new Float32Array(pcmData.length);
        for (let i = 0; i < pcmData.length; i++) float32[i] = pcmData[i] / 32768;
        pushPcmToWorklet(float32, GEMINI_OUTPUT_RATE);
      } catch (e) {
        console.error("[voice] Audio decode error:", e);
      }
    }
  }, [addTranscript, opts, pushPcmToWorklet, updateState]);

  // ─── Audio setup ───
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

      // Don't force output sample rate — let the browser choose
      const outputCtx = new AudioContext();
      if (outputCtx.state === "suspended") await outputCtx.resume();
      outputAudioCtxRef.current = outputCtx;

      setDiag(`ctx=${outputCtx.sampleRate}Hz`);

      // Input worklet
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

      const chunks: Uint8Array[] = [];
      let chunksTotalLen = 0;
      const BATCH_BYTES = 2048;

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

      // Output worklet
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

      outputNode.port.onmessage = (e: MessageEvent) => {
        const data = e.data;
        if (data.type === "init") {
          setDiag(`worklet=${data.sampleRate}Hz ctx=${outputCtx.sampleRate}Hz`);
        } else if (data.type === "playing") {
          setDiag(`playing sr=${data.sampleRate}Hz`);
          if (stateRef.current !== "speaking" && stateRef.current !== "error") {
            updateState("speaking");
          }
        } else if (data.type === "drained") {
          if (stateRef.current === "speaking") updateState("listening");
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

  const stopAudioCapture = useCallback(() => {
    if (workletNodeRef.current) { try { workletNodeRef.current.disconnect(); } catch {} workletNodeRef.current = null; }
    if (outputWorkletRef.current) {
      try { outputWorkletRef.current.port.postMessage({ type: "clear" }); } catch {}
      try { outputWorkletRef.current.disconnect(); } catch {}
      outputWorkletRef.current = null;
    }
    if (streamRef.current) { streamRef.current.getTracks().forEach(t => t.stop()); streamRef.current = null; }
    if (inputAudioCtxRef.current) { inputAudioCtxRef.current.close().catch(() => {}); inputAudioCtxRef.current = null; }
    if (outputAudioCtxRef.current) { outputAudioCtxRef.current.close().catch(() => {}); outputAudioCtxRef.current = null; }
    isSetupDoneRef.current = false;
    if (transcriptFlushTimerRef.current !== null) {
      clearTimeout(transcriptFlushTimerRef.current);
      transcriptFlushTimerRef.current = null;
      flushTranscript();
    }
  }, [flushTranscript]);

  const startSession = useCallback(async (childProfile?: {
    name?: string; age?: string; temperament?: string[]; notes?: string;
  }, language?: string) => {
    if (wsRef.current) return;
    updateState("connecting");
    setErrorMsg("");
    setTranscript([]);
    setActiveSources([]);
    setDiag("");
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
              speechConfig: { voiceConfig: { prebuiltVoiceConfig: { voiceName: config.voiceName } } },
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
      ws.onerror = () => { setErrorMsg("Connection error — please try again"); updateState("error"); };
      ws.onclose = () => {
        stopAudioCapture();
        wsRef.current = null;
        if (stateRef.current !== "error" && stateRef.current !== "idle") updateState("idle");
      };
    } catch (e) {
      const msg = e instanceof Error ? e.message : "Failed to start voice session";
      setErrorMsg(msg);
      updateState("error");
      opts.onError?.(msg);
    }
  }, [handleWsMessage, opts, startAudioCapture, stopAudioCapture, updateState]);

  const stopSession = useCallback(() => {
    if (wsRef.current) { try { wsRef.current.close(1000, "User ended session"); } catch {} wsRef.current = null; }
    stopAudioCapture();
    updateState("idle");
  }, [stopAudioCapture, updateState]);

  useEffect(() => {
    return () => {
      if (wsRef.current) { try { wsRef.current.close(); } catch {} wsRef.current = null; }
      stopAudioCapture();
    };
  }, [stopAudioCapture]);

  return { state, transcript, activeSources, errorMsg, diag, startSession, stopSession };
}
