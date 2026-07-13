"use client";

import { useState } from "react";
import type { Language } from "@/lib/i18n";
import type { ProactiveContent } from "@/lib/proactive";

interface ProactiveContentCardProps {
  content: ProactiveContent;
  lang: Language;
  onTopicSelect?: (topicId: string, query?: string) => void;
}

const strings = {
  en: {
    weeklyTip: "Tip of the Week",
    milestone: "At This Age",
    seasonal: "Right Now",
    actionable: "Try this",
    redFlags: "Worth discussing with a professional:",
    relatedTopics: "Get advice",
  },
  ko: {
    weeklyTip: "이번 주의 팁",
    milestone: "이 시기의 발달",
    seasonal: "지금 이맘때",
    actionable: "해보세요",
    redFlags: "전문가 상담을 고려해 보세요:",
    relatedTopics: "조언 받기",
  },
};

export default function ProactiveContentCard({ content, lang, onTopicSelect }: ProactiveContentCardProps) {
  const t = lang === "ko" ? strings.ko : strings.en;
  const [dismissed, setDismissed] = useState<Record<string, boolean>>({});

  const dismiss = (id: string) => setDismissed(prev => ({ ...prev, [id]: true }));

  const cards: React.ReactNode[] = [];

  // Seasonal alert
  const seasonal = content.seasonalAlert;
  if (seasonal && !dismissed[seasonal.id]) {
    cards.push(
      <div
        key={seasonal.id}
        className="rounded-2xl p-4 mb-3 elevation-2"
        style={{ background: "var(--surface)", border: "1px solid var(--accent)" }}
      >
        <div className="flex items-start justify-between gap-2 mb-2">
          <span className="text-xs font-semibold px-2 py-0.5 rounded-full" style={{ background: "var(--accent)", color: "#fff" }}>
            {t.seasonal}
          </span>
          <button onClick={() => dismiss(seasonal.id)} className="p-1.5 -m-1.5 rounded-lg transition-colors hover:bg-black/5" style={{ color: "var(--text-muted)", minWidth: "32px", minHeight: "32px", display: "flex", alignItems: "center", justifyContent: "center" }} aria-label="Dismiss">✕</button>
        </div>
        <h3 className="text-sm font-semibold mb-1 font-display" style={{ color: "var(--text)" }}>{seasonal.title}</h3>
        <p className="text-xs mb-2" style={{ color: "var(--text-muted)" }}>{seasonal.body}</p>
        <div className="flex items-center gap-2">
          <p className="text-xs font-medium flex-1" style={{ color: "var(--accent)" }}>✨ {seasonal.actionable}</p>
          {seasonal.suggestedTopic && onTopicSelect && (
            <button
              onClick={() => onTopicSelect(seasonal.suggestedTopic!)}
              className="text-xs px-3 py-1.5 rounded-lg font-medium"
              style={{ background: "var(--accent)", color: "#fff" }}
            >
              {t.relatedTopics} →
            </button>
          )}
        </div>
      </div>
    );
  }

  // Milestone alert
  const milestone = content.milestoneAlert;
  if (milestone && !dismissed[milestone.id]) {
    cards.push(
      <div
        key={milestone.id}
        className="rounded-2xl p-4 mb-3 elevation-2"
        style={{ background: "var(--surface)", border: "1px solid var(--primary)" }}
      >
        <div className="flex items-start justify-between gap-2 mb-2">
          <span className="text-xs font-semibold px-2 py-0.5 rounded-full" style={{ background: "var(--primary)", color: "#fff" }}>
            {t.milestone}
          </span>
          <button onClick={() => dismiss(milestone.id)} className="p-1.5 -m-1.5 rounded-lg transition-colors hover:bg-black/5" style={{ color: "var(--text-muted)", minWidth: "32px", minHeight: "32px", display: "flex", alignItems: "center", justifyContent: "center" }} aria-label="Dismiss">✕</button>
        </div>
        <h3 className="text-sm font-semibold mb-1 font-display" style={{ color: "var(--text)" }}>{milestone.title}</h3>
        <p className="text-xs mb-2" style={{ color: "var(--text-muted)" }}>{milestone.description}</p>
        {milestone.redFlags.length > 0 && (
          <div className="mb-2">
            <p className="text-xs font-medium mb-1" style={{ color: "var(--text-muted)" }}>{t.redFlags}</p>
            <ul className="space-y-0.5">
              {milestone.redFlags.map((flag, i) => (
                <li key={i} className="text-xs" style={{ color: "var(--text-muted)" }}>• {flag}</li>
              ))}
            </ul>
          </div>
        )}
        {milestone.suggestedTopics.length > 0 && onTopicSelect && (
          <div className="flex flex-wrap gap-1.5 mt-2">
            {milestone.suggestedTopics.slice(0, 3).map(topicId => (
              <button
                key={topicId}
                onClick={() => onTopicSelect(topicId)}
                className="px-2.5 py-1 rounded-full text-xs font-medium"
                style={{ border: "1px solid var(--border)", color: "var(--primary)" }}
              >
                {topicId}
              </button>
            ))}
          </div>
        )}
      </div>
    );
  }

  // Weekly tip
  const tip = content.weeklyTip;
  if (tip && !dismissed[tip.id]) {
    cards.push(
      <div
        key={tip.id}
        className="rounded-2xl p-4 mb-3 elevation-2"
        style={{ background: "var(--emerald-50)", border: "1px solid var(--success)" }}
      >
        <div className="flex items-start justify-between gap-2 mb-2">
          <span className="text-xs font-semibold px-2 py-0.5 rounded-full" style={{ background: "var(--success)", color: "#fff" }}>
            {t.weeklyTip}
          </span>
          <button onClick={() => dismiss(tip.id)} className="p-1.5 -m-1.5 rounded-lg transition-colors hover:bg-black/5" style={{ color: "var(--text-muted)", minWidth: "32px", minHeight: "32px", display: "flex", alignItems: "center", justifyContent: "center" }} aria-label="Dismiss">✕</button>
        </div>
        <h3 className="text-sm font-semibold mb-1 font-display" style={{ color: "var(--text)" }}>{tip.title}</h3>
        <p className="text-xs mb-2" style={{ color: "var(--text-muted)" }}>{tip.body}</p>
        <p className="text-xs font-medium" style={{ color: "var(--success)" }}>
          💪 {t.actionable}: {tip.actionable}
        </p>
      </div>
    );
  }

  // Show at most 2 cards to avoid clutter
  if (cards.length === 0) return null;

  return (
    <div className="mb-2 slide-in-right">
      {cards.slice(0, 2)}
    </div>
  );
}
