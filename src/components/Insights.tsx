"use client";

import { useMemo } from "react";
import { BarChart3 } from "lucide-react";
import { DynamicIcon } from "@/lib/DynamicIcon";
import type { Language } from "@/lib/i18n";
import { TOPIC_CATEGORIES, getTopicLabel as getTopicLabelLocalized } from "@/lib/topics";
import { detectBehaviorPatterns } from "@/lib/behaviorPatterns";
import type { BehaviorPattern } from "@/lib/behaviorPatterns";
import type { Session } from "@/lib/types";

// === Types (imported from @/lib/types) ===

interface InsightsProps {
  sessions: Session[];
  lang: Language;
}

// === Helpers ===

function useTopicLabelGetter(lang: Language) {
  return (topicId: string) => {
    const topic = TOPIC_CATEGORIES.find(t => t.id === topicId);
    return topic ? getTopicLabelLocalized(topic, lang) : topicId;
  };
}

function getWeekKey(timestamp: number): string {
  const d = new Date(timestamp);
  const day = d.getDay();
  const diff = d.getDate() - day + (day === 0 ? -6 : 1); // Monday as start
  const monday = new Date(d.setDate(diff));
  return monday.toISOString().split("T")[0];
}

function getMonthKey(timestamp: number): string {
  return new Date(timestamp).toISOString().slice(0, 7);
}

function formatWeekRange(weekKey: string): string {
  const start = new Date(weekKey);
  const end = new Date(start);
  end.setDate(end.getDate() + 6);
  const fmt = (d: Date) => `${d.getDate()}/${d.getMonth() + 1}`;
  return `${fmt(start)} – ${fmt(end)}`;
}

function getHourBin(timestamp: number): number {
  return new Date(timestamp).getHours();
}

// === Main Component ===

export default function Insights({ sessions, lang }: InsightsProps) {
  const t = lang === "ko" ? koStrings : enStrings;
  const getTopicLabel = useTopicLabelGetter(lang);

  const patterns = useMemo(() => {
    return detectBehaviorPatterns(sessions.map(s => ({
      id: s.id,
      query: s.query || "",
      topicCategory: s.topicCategory,
      rating: s.rating,
      createdAt: s.createdAt,
    })));
  }, [sessions]);

  const insights = useMemo(() => computeInsights(sessions), [sessions]);

  if (sessions.length === 0) {
    return (
      <div>
        <h2 className="text-lg font-semibold mb-4" style={{ color: "var(--text)" }}>
          {t.title}
        </h2>
        <div className="rounded-2xl p-8 text-center" style={{ background: "var(--surface)", border: "1px solid var(--border)" }}>
          <div className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4" style={{ background: "rgba(59,130,246,0.1)" }}>
            <BarChart3 size={36} style={{ color: "#3b82f6" }} />
          </div>
          <p className="text-sm" style={{ color: "var(--text-muted)" }}>{t.empty}</p>
        </div>
      </div>
    );
  }

  return (
    <div>
      <h2 className="text-lg font-semibold mb-4 font-display" style={{ color: "var(--text)" }}>
        {t.title}
      </h2>

      {/* Summary Stats Card */}
      <div className="grid grid-cols-3 gap-2 mb-4">
        <div className="stat-card rounded-2xl p-3 text-center elevation-1" style={{ background: "var(--surface)", border: "2px solid var(--border)" }}>
          <p className="text-2xl font-bold" style={{ color: "var(--primary)" }}>{insights.totalSessions}</p>
          <p className="text-xs" style={{ color: "var(--text-muted)" }}>{t.totalQueries}</p>
        </div>
        <div className="stat-card rounded-2xl p-3 text-center elevation-1" style={{ background: "var(--surface)", border: "2px solid var(--border)" }}>
          <p className="text-2xl font-bold" style={{ color: "var(--success)" }}>{insights.topicsCovered}</p>
          <p className="text-xs" style={{ color: "var(--text-muted)" }}>{t.topicsCovered}</p>
        </div>
        <div className="stat-card rounded-2xl p-3 text-center elevation-1" style={{ background: "var(--surface)", border: "2px solid var(--border)" }}>
          <p className="text-2xl font-bold" style={{ color: "var(--accent)" }}>{insights.positiveRate > 0 ? `${insights.positiveRate}%` : "—"}</p>
          <p className="text-xs" style={{ color: "var(--text-muted)" }}>{t.positiveRate}</p>
        </div>
      </div>

      {/* Trend Card — This Month vs Last Month */}
      {insights.trendDirection !== "flat" && (
        <div className="rounded-2xl p-4 mb-4 elevation-2" style={{ background: "var(--surface)", border: "1px solid var(--border)" }}>
          <div className="flex items-center justify-between mb-2">
            <p className="text-sm font-semibold" style={{ color: "var(--text)" }}>{t.trendTitle}</p>
            <span className="text-xs px-2 py-0.5 rounded-full" style={{
              background: insights.trendDirection === "down" ? "var(--emerald-50)" : "var(--surface)",
              color: insights.trendDirection === "down" ? "var(--success)" : "var(--text-muted)",
              border: `1px solid ${insights.trendDirection === "down" ? "var(--success)" : "var(--border)"}`,
            }}>
              {insights.trendDirection === "down" ? "↓" : "↑"} {Math.abs(insights.trendPercent)}%
            </span>
          </div>
          <p className="text-xs" style={{ color: "var(--text-muted)" }}>
            {insights.trendDirection === "down"
              ? t.trendImproving.replace("{this}", String(insights.thisMonth)).replace("{last}", String(insights.lastMonth))
              : t.trendIncreasing.replace("{this}", String(insights.thisMonth)).replace("{last}", String(insights.lastMonth))}
          </p>
        </div>
      )}

      {/* AI Behavior Patterns */}
      {patterns.length > 0 && (
        <div className="mb-4">
          <h3 className="text-sm font-bold mb-2 font-display flex items-center gap-1" style={{ color: "var(--text)" }}>
            {lang === "ko" ? "행동 패턴 인사이트" : "Behavior Pattern Insights"}
          </h3>
          {patterns.map((p: BehaviorPattern, i: number) => {
            const bg = p.severity === "positive" ? "#f0fdf4" : p.severity === "warning" ? "#fffbeb" : "var(--surface)";
            const border = p.severity === "positive" ? "#86efac" : p.severity === "warning" ? "#fcd34d" : "var(--border)";
            const titleColor = p.severity === "positive" ? "#16a34a" : p.severity === "warning" ? "#d97706" : "var(--text)";
            return (
              <div key={i} className="rounded-2xl p-4 mb-2" style={{ background: bg, border: `1px solid ${border}` }}>
                <div className="flex items-start gap-3">
                  <span className="text-xl"><DynamicIcon name={p.icon} size={20} /></span>
                  <div className="flex-1">
                    <p className="text-sm font-semibold mb-1" style={{ color: titleColor }}>
                      {lang === "ko" ? p.titleKo : p.titleEn}
                    </p>
                    <p className="text-xs leading-relaxed" style={{ color: "var(--text-muted)" }}>
                      {lang === "ko" ? p.descKo : p.descEn}
                    </p>
                    <div className="flex items-center gap-2 mt-2">
                      <div className="flex-1 h-1 rounded-full overflow-hidden" style={{ background: "var(--bg)" }}>
                        <div className="h-full rounded-full" style={{ width: `${p.confidence * 100}%`, background: border }} />
                      </div>
                      <span className="text-xs" style={{ color: "var(--text-muted)" }}>{Math.round(p.confidence * 100)}%</span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* Topic Frequency Bar Chart */}
      <div className="rounded-2xl p-4 mb-4 elevation-2" style={{ background: "var(--surface)", border: "1px solid var(--border)" }}>
        <p className="text-sm font-semibold mb-3 font-display" style={{ color: "var(--text)" }}>{t.topTopics}</p>
        {insights.topicFrequency.slice(0, 6).map(({ topic, count, percent }) => (
          <div key={topic} className="mb-2.5 last:mb-0">
            <div className="flex items-center justify-between mb-1">
              <span className="text-xs" style={{ color: "var(--text)" }}>{getTopicLabel(topic)}</span>
              <span className="text-xs font-medium" style={{ color: "var(--text-muted)" }}>{count}</span>
            </div>
            <div className="h-2.5 rounded-full overflow-hidden" style={{ background: "var(--bg)" }}>
              <div
                className="h-full rounded-full transition-all"
                style={{ width: `${percent}%`, background: "var(--primary)" }}
              />
            </div>
          </div>
        ))}
      </div>

      {/* Time of Day Heatmap */}
      {insights.hourBuckets.length > 0 && (
        <div className="rounded-2xl p-4 mb-4 elevation-2" style={{ background: "var(--surface)", border: "1px solid var(--border)" }}>
          <p className="text-sm font-semibold mb-3 font-display" style={{ color: "var(--text)" }}>{t.timeOfDay}</p>
          <div className="grid grid-cols-8 gap-1">
            {HOUR_SLOTS.map(slot => {
              const count = insights.hourBuckets.find(h => h.bin === slot.bin)?.count || 0;
              const maxCount = Math.max(...insights.hourBuckets.map(h => h.count), 1);
              const intensity = count / maxCount;
              return (
                <div key={slot.bin} className="text-center">
                  <div
                    className="rounded-lg aspect-square flex items-center justify-center min-h-[28px]"
                    style={{
                      background: count > 0
                        ? `rgba(16, 185, 129, ${0.2 + intensity * 0.8})`
                        : "var(--bg)",
                      border: "1px solid var(--border)",
                    }}
                  >
                    <span className="text-xs font-medium" style={{
                      color: intensity > 0.5 ? "#fff" : "var(--text-muted)",
                    }}>
                      {count > 0 ? count : ""}
                    </span>
                  </div>
                  <p className="text-xs mt-1" style={{ color: "var(--text-muted)" }}>{slot.label}</p>
                </div>
              );
            })}
          </div>
          {insights.peakHour && (
            <p className="text-xs mt-3" style={{ color: "var(--text-muted)" }}>
              {t.peakTime.replace("{time}", insights.peakHour)}
            </p>
          )}
        </div>
      )}

      {/* Weekly Activity */}
      {insights.weeklyData.length > 3 && (
        <div className="rounded-2xl p-4 mb-4 elevation-2" style={{ background: "var(--surface)", border: "1px solid var(--border)" }}>
          <p className="text-sm font-semibold mb-3 font-display" style={{ color: "var(--text)" }}>{t.weeklyActivity}</p>
          <div className="flex items-end gap-1.5 h-24">
            {insights.weeklyData.map(({ week, count }) => {
              const maxCount = Math.max(...insights.weeklyData.map(w => w.count), 1);
              const height = (count / maxCount) * 100;
              return (
                <div key={week} className="flex-1 flex flex-col items-center gap-1">
                  <div className="w-full flex items-end" style={{ height: "80px" }}>
                    <div
                      className="w-full transition-all"
                      style={{
                        height: `${height}%`,
                        background: "var(--primary)",
                        minHeight: count > 0 ? "4px" : "0",
                        borderTopLeftRadius: "8px",
                        borderTopRightRadius: "8px",
                      }}
                    />
                  </div>
                  <span className="text-xs" style={{ color: "var(--text-muted)" }}>
                    {formatWeekRange(week).split(" – ")[0]}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* Improvement Narrative */}
      {insights.improvingTopics.length > 0 && (
        <div className="rounded-2xl p-4 mb-4" style={{ background: "var(--emerald-50)", border: "1px solid var(--success)" }}>
          <p className="text-sm font-semibold mb-2" style={{ color: "var(--success)" }}>{t.improvingTitle}</p>
          {insights.improvingTopics.map(({ topic, lastMonth, thisMonth }) => (
            <div key={topic} className="flex items-center justify-between py-1.5" style={{ borderTop: "1px solid rgba(16,185,129,0.2)" }}>
              <span className="text-xs" style={{ color: "var(--text)" }}>{getTopicLabel(topic)}</span>
              <span className="text-xs font-medium" style={{ color: "var(--success)" }}>
                {lastMonth} → {thisMonth} ↓
              </span>
            </div>
          ))}
        </div>
      )}

      {/* Escalation Alert */}
      {insights.escalatingTopics.length > 0 && (
        <div className="rounded-2xl p-4 mb-4" style={{ background: "var(--surface)", border: "1px solid var(--warning, #f59e0b)" }}>
          <p className="text-sm font-semibold mb-2" style={{ color: "#f59e0b" }}>{t.escalatingTitle}</p>
          {insights.escalatingTopics.map(({ topic, lastMonth, thisMonth }) => (
            <div key={topic} className="flex items-center justify-between py-1.5" style={{ borderTop: "1px solid rgba(245,158,11,0.2)" }}>
              <span className="text-xs" style={{ color: "var(--text)" }}>{getTopicLabel(topic)}</span>
              <span className="text-xs font-medium" style={{ color: "#f59e0b" }}>
                {lastMonth} → {thisMonth} ↑
              </span>
            </div>
          ))}
          <p className="text-xs mt-2" style={{ color: "var(--text-muted)" }}>{t.escalatingHint}</p>
        </div>
      )}

      {/* Most Used Strategy (top bookmarked) */}
      {insights.favoriteSource && (
        <div className="rounded-2xl p-4 mb-4" style={{ background: "var(--surface)", border: "1px solid var(--border)" }}>
          <p className="text-sm font-semibold mb-1" style={{ color: "var(--text)" }}>{t.favoriteSource}</p>
          <p className="text-xs" style={{ color: "var(--text-muted)" }}>{insights.favoriteSource}</p>
        </div>
      )}

      {/* Footer */}
      <p className="text-xs text-center pb-4" style={{ color: "var(--text-muted)", opacity: 0.6 }}>
        {t.basedOn} {insights.totalSessions} {lang === "ko" ? "건의 상담" : t.sessionsLabel}
      </p>
    </div>
  );
}

// === Hour Slots ===
// 8 slots covering full 24h period in 3-hour bins
const HOUR_SLOTS = [
  { bin: 0, label: "12am" },
  { bin: 3, label: "3am" },
  { bin: 6, label: "6am" },
  { bin: 9, label: "9am" },
  { bin: 12, label: "12pm" },
  { bin: 15, label: "3pm" },
  { bin: 18, label: "6pm" },
  { bin: 21, label: "9pm" },
];

// === Insight Logic ===

interface ComputedInsights {
  totalSessions: number;
  topicsCovered: number;
  positiveRate: number;
  topicFrequency: { topic: string; count: number; percent: number }[];
  hourBuckets: { bin: number; count: number }[];
  peakHour: string | null;
  weeklyData: { week: string; count: number }[];
  trendDirection: "up" | "down" | "flat";
  trendPercent: number;
  thisMonth: number;
  lastMonth: number;
  improvingTopics: { topic: string; lastMonth: number; thisMonth: number }[];
  escalatingTopics: { topic: string; lastMonth: number; thisMonth: number }[];
  favoriteSource: string | null;
}

function computeInsights(sessions: Session[]): ComputedInsights {
  const now = Date.now();
  const thisMonthKey = getMonthKey(now);
  const lastMonthDate = new Date();
  lastMonthDate.setMonth(lastMonthDate.getMonth() - 1);
  const lastMonthKey = getMonthKey(lastMonthDate.getTime());

  // Total sessions
  const totalSessions = sessions.length;

  // Topic frequency
  const topicCount: Record<string, number> = {};
  for (const s of sessions) {
    const topic = s.topicCategory || "general";
    topicCount[topic] = (topicCount[topic] || 0) + 1;
  }
  const topicsCovered = Object.keys(topicCount).length;
  const maxTopic = Math.max(...Object.values(topicCount), 1);
  const topicFrequency = Object.entries(topicCount)
    .map(([topic, count]) => ({ topic, count, percent: Math.round((count / maxTopic) * 100) }))
    .sort((a, b) => b.count - a.count);

  // Hour buckets — group into 3-hour bins
  const hourMap: Record<number, number> = {};
  for (const s of sessions) {
    const hour = getHourBin(s.createdAt);
    const bin = Math.floor(hour / 3) * 3;
    hourMap[bin] = (hourMap[bin] || 0) + 1;
  }
  const hourBuckets = Object.entries(hourMap)
    .map(([bin, count]) => ({ bin: parseInt(bin), count }))
    .sort((a, b) => a.bin - b.bin);

  // Peak hour
  let peakHour: string | null = null;
  if (hourBuckets.length > 0) {
    const peak = hourBuckets.reduce((a, b) => (b.count > a.count ? b : a));
    const startH = peak.bin;
    const endH = peak.bin + 2;
    peakHour = `${formatHour(startH)}–${formatHour(endH)}`;
  }

  // Weekly data — last 8 weeks
  const weekMap: Record<string, number> = {};
  const eightWeeksAgo = new Date();
  eightWeeksAgo.setDate(eightWeeksAgo.getDate() - 56);
  for (const s of sessions) {
    if (s.createdAt < eightWeeksAgo.getTime()) continue;
    const wk = getWeekKey(s.createdAt);
    weekMap[wk] = (weekMap[wk] || 0) + 1;
  }
  // Fill missing weeks (cap at 10 to prevent runaway loop)
  const weeklyData: { week: string; count: number }[] = [];
  const cursor = new Date(eightWeeksAgo);
  // Align to Monday
  const cursorDay = cursor.getDay();
  cursor.setDate(cursor.getDate() - cursorDay + (cursorDay === 0 ? -6 : 1));
  let weekIter = 0;
  while (cursor <= new Date() && weekIter < 10) {
    const wk = cursor.toISOString().split("T")[0];
    weeklyData.push({ week: wk, count: weekMap[wk] || 0 });
    cursor.setDate(cursor.getDate() + 7);
    weekIter++;
  }

  // Monthly trend
  const thisMonthSessions = sessions.filter(s => getMonthKey(s.createdAt) === thisMonthKey).length;
  const lastMonthSessions = sessions.filter(s => getMonthKey(s.createdAt) === lastMonthKey).length;
  let trendDirection: "up" | "down" | "flat" = "flat";
  let trendPercent = 0;
  if (lastMonthSessions > 0) {
    trendPercent = Math.round(((thisMonthSessions - lastMonthSessions) / lastMonthSessions) * 100);
    if (Math.abs(trendPercent) >= 15) {
      trendDirection = trendPercent > 0 ? "up" : "down";
    }
  } else if (thisMonthSessions > 0) {
    trendDirection = "flat"; // No baseline
  }

  // Per-topic monthly trends
  const improvingTopics: { topic: string; lastMonth: number; thisMonth: number }[] = [];
  const escalatingTopics: { topic: string; lastMonth: number; thisMonth: number }[] = [];
  for (const topic of Object.keys(topicCount)) {
    const thisM = sessions.filter(s => s.topicCategory === topic && getMonthKey(s.createdAt) === thisMonthKey).length;
    const lastM = sessions.filter(s => s.topicCategory === topic && getMonthKey(s.createdAt) === lastMonthKey).length;
    if (lastM >= 2 && thisM < lastM) {
      improvingTopics.push({ topic, lastMonth: lastM, thisMonth: thisM });
    } else if (lastM >= 1 && thisM > lastM) {
      escalatingTopics.push({ topic, lastMonth: lastM, thisMonth: thisM });
    }
  }
  improvingTopics.sort((a, b) => (b.lastMonth - b.thisMonth) - (a.lastMonth - a.thisMonth));
  escalatingTopics.sort((a, b) => (b.thisMonth - b.lastMonth) - (a.thisMonth - a.lastMonth));

  // Positive rate
  const rated = sessions.filter(s => s.rating);
  const positive = rated.filter(s => s.rating === "up").length;
  const positiveRate = rated.length > 0 ? Math.round((positive / rated.length) * 100) : 0;

  // Favorite source (most common source)
  const sourceCount: Record<string, number> = {};
  for (const s of sessions) {
    for (const src of s.sources) {
      const cleanSrc = src.replace(/^[\d.\s]+/, "").trim().slice(0, 60);
      if (cleanSrc) sourceCount[cleanSrc] = (sourceCount[cleanSrc] || 0) + 1;
    }
  }
  let favoriteSource: string | null = null;
  if (Object.keys(sourceCount).length > 0) {
    favoriteSource = Object.entries(sourceCount).sort((a, b) => b[1] - a[1])[0][0];
  }

  return {
    totalSessions,
    topicsCovered,
    positiveRate,
    topicFrequency,
    hourBuckets,
    peakHour,
    weeklyData,
    trendDirection,
    trendPercent,
    thisMonth: thisMonthSessions,
    lastMonth: lastMonthSessions,
    improvingTopics: improvingTopics.slice(0, 3),
    escalatingTopics: escalatingTopics.slice(0, 3),
    favoriteSource,
  };
}

function formatHour(h: number): string {
  // Clamp to valid range
  const hour = ((h % 24) + 24) % 24;
  if (hour === 0) return "12am";
  if (hour === 12) return "12pm";
  if (hour > 12) return `${hour - 12}pm`;
  return `${hour}am`;
}

// === i18n ===
const enStrings = {
  title: "Insights",
  empty: "Start asking for advice and you'll see patterns, trends, and progress here.",
  totalQueries: "Queries",
  topicsCovered: "Topics",
  positiveRate: "Helpful",
  trendTitle: "Monthly Trend",
  trendImproving: "↓ {this} this month vs {last} last month — fewer queries may mean things are improving!",
  trendIncreasing: "↑ {this} this month vs {last} last month",
  topTopics: "Top Topics",
  timeOfDay: "When You Ask",
  peakTime: "Peak time: {time}",
  weeklyActivity: "Weekly Activity",
  improvingTitle: "Getting Better",
  escalatingTitle: "Worth Watching",
  escalatingHint: "These topics are coming up more often. Consider a focused approach.",
  favoriteSource: "Most Referenced",
  basedOn: "Based on",
  sessionsLabel: "sessions",
};

const koStrings = {
  title: "인사이트",
  empty: "조언을 요청하면 여기서 패턴, 트렌드, 진행 상황을 볼 수 있습니다.",
  totalQueries: "상담",
  topicsCovered: "주제",
  positiveRate: "도움됨",
  trendTitle: "월간 트렌드",
  trendImproving: "↓ 이번 달 {this}건 vs 지난달 {last}건 — 줄어들고 있어요!",
  trendIncreasing: "↑ 이번 달 {this}건 vs 지난달 {last}건",
  topTopics: "주요 주제",
  timeOfDay: "주로 묻는 시간",
  peakTime: "가장 많은 시간: {time}",
  weeklyActivity: "주간 활동",
  improvingTitle: "호전되고 있어요",
  escalatingTitle: "주의가 필요해요",
  escalatingHint: "이 주제들이 더 자주 나타나고 있어요. 집중적인 접근을 고려해 보세요.",
  favoriteSource: "가장 많이 인용된 자료",
  basedOn: "기준:",
  sessionsLabel: "건",
};
