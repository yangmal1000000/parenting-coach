"use client";

import { useEffect, useState } from "react";
import { Mic, MicOff, X, BookOpen, Loader2, Volume2 } from "lucide-react";
import { useVoiceSession, type VoiceState } from "@/hooks/useVoiceSession";
import type { Language } from "@/lib/i18n";

interface VoiceModeOverlayProps {
  visible: boolean;
  onClose: () => void;
  childProfile?: {
    name?: string;
    age?: string;
    temperament?: string[];
    notes?: string;
  };
  lang: Language;
}

const STATE_LABELS: Record<VoiceState, { en: string; ko: string }> = {
  idle: { en: "Tap to start", ko: "탭하여 시작" },
  connecting: { en: "Connecting…", ko: "연결 중…" },
  listening: { en: "Listening…", ko: "듣고 있어요…" },
  thinking: { en: "Thinking…", ko: "생각 중…" },
  speaking: { en: "Speaking…", ko: "말하는 중…" },
  error: { en: "Error", ko: "오류" },
};

export function VoiceModeOverlay({ visible, onClose, childProfile, lang }: VoiceModeOverlayProps) {
  const [sources, setSources] = useState<string[]>([]);
  const isKo = lang === "ko";

  const {
    state,
    transcript,
    activeSources,
    errorMsg,
    startSession,
    stopSession,
  } = useVoiceSession({
    onToolResult: (result) => {
      if (result && typeof result === "object" && "strategies" in result) {
        const data = result as { strategies: { source: string }[] };
        setSources(data.strategies.map((s) => s.source));
      }
    },
  });

  // Auto-start session when overlay opens
  useEffect(() => {
    if (visible && state === "idle") {
      startSession(childProfile, lang);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [visible]);

  // Cleanup on close
  useEffect(() => {
    if (!visible && state !== "idle") {
      stopSession();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [visible]);

  if (!visible) return null;

  const stateLabel = STATE_LABELS[state]?.[lang] || state;
  const isActive = state === "listening" || state === "speaking" || state === "thinking";

  // Breathing orb animation size based on state
  const orbSize = state === "speaking" ? 140 : state === "listening" ? 120 : state === "thinking" ? 100 : 80;
  const orbColor = state === "error" ? "#ef4444" : state === "speaking" ? "#7BA896" : state === "listening" ? "#4A7C6A" : "#9C8F84";
  const pulseDuration = state === "speaking" ? "1s" : state === "listening" ? "2s" : "3s";

  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-between p-6" style={{ background: "var(--bg)" }}>
      {/* Top bar */}
      <div className="w-full flex items-center justify-between pt-4">
        <div className="flex items-center gap-2">
          <Volume2 size={18} style={{ color: "var(--text-muted)" }} />
          <span className="text-sm font-medium" style={{ color: "var(--text)" }}>
            {isKo ? "음성 모드" : "Voice Mode"}
          </span>
        </div>
        <button
          onClick={() => {
            stopSession();
            onClose();
          }}
          className="p-2 rounded-full transition-opacity hover:opacity-70"
          style={{ background: "var(--surface)", border: "1px solid var(--border)" }}
          aria-label="Close voice mode"
        >
          <X size={20} style={{ color: "var(--text)" }} />
        </button>
      </div>

      {/* Center — breathing orb + status */}
      <div className="flex flex-col items-center gap-6">
        <div className="relative flex items-center justify-center" style={{ width: 200, height: 200 }}>
          {/* Outer pulse ring */}
          {isActive && (
            <div
              className="absolute rounded-full"
              style={{
                width: orbSize + 60,
                height: orbSize + 60,
                border: `2px solid ${orbColor}40`,
                animation: `voicePulse ${pulseDuration} ease-in-out infinite`,
              }}
            />
          )}
          {/* Main orb */}
          <div
            className="rounded-full flex items-center justify-center transition-all duration-500"
            style={{
              width: orbSize,
              height: orbSize,
              background: `radial-gradient(circle at 40% 40%, ${orbColor}, ${orbColor}88)`,
              boxShadow: `0 0 40px ${orbColor}44`,
              animation: isActive ? `voiceBreathe ${pulseDuration} ease-in-out infinite` : "none",
            }}
          >
            {state === "thinking" && (
              <Loader2 size={28} className="animate-spin" color="#fff" />
            )}
            {state === "connecting" && (
              <Loader2 size={28} className="animate-spin" color="#fff" />
            )}
            {(state === "listening" || state === "speaking") && (
              <Mic size={28} color="#fff" />
            )}
            {state === "idle" && (
              <MicOff size={24} color="#fff" />
            )}
          </div>
        </div>

        {/* Status text */}
        <div className="text-center">
          <p className="text-lg font-semibold" style={{ color: "var(--text)" }}>
            {stateLabel}
          </p>
          {errorMsg && (
            <p className="text-sm mt-1" style={{ color: "var(--error)" }}>{errorMsg}</p>
          )}
        </div>

        {/* Active sources */}
        {(activeSources.length > 0 || sources.length > 0) && (
          <div className="max-w-md flex flex-wrap gap-2 justify-center">
            {(sources.length > 0 ? sources : activeSources).map((src, i) => (
              <span
                key={i}
                className="text-xs px-2 py-1 rounded-lg flex items-center gap-1"
                style={{ background: "var(--surface)", border: "1px solid var(--border)", color: "var(--text-muted)" }}
              >
                <BookOpen size={11} />
                {src}
              </span>
            ))}
          </div>
        )}
      </div>

      {/* Bottom — live transcript */}
      <div className="w-full max-w-lg" style={{ maxHeight: 200, overflow: "auto" }}>
        {transcript.length > 0 && (
          <div className="space-y-2 mb-4">
            {transcript.slice(-4).map((entry, i) => (
              <div
                key={i}
                className="text-sm rounded-xl p-3"
                style={{
                  background: entry.role === "user" ? "var(--surface)" : "var(--primary-light)",
                  border: `1px solid ${entry.role === "user" ? "var(--border)" : "var(--primary-border)"}`,
                }}
              >
                <span
                  className="text-xs font-medium block mb-1"
                  style={{ color: entry.role === "user" ? "var(--text-muted)" : "var(--primary)" }}
                >
                  {entry.role === "user" ? (isKo ? "나" : "You") : "ParentKin"}
                </span>
                <span style={{ color: "var(--text)" }}>{entry.text}</span>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Inline styles for animations */}
      <style jsx>{`
        @keyframes voiceBreathe {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.08); }
        }
        @keyframes voicePulse {
          0%, 100% { transform: scale(1); opacity: 0.6; }
          50% { transform: scale(1.15); opacity: 0.2; }
        }
      `}</style>
    </div>
  );
}
