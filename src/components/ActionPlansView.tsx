"use client";

import { useState } from "react";
import type { Language } from "@/lib/i18n";
import type { PlanProgress } from "@/lib/actionPlanTypes";
import { ALL_PLANS, getPlansForAge, getPlanById, getActiveDay, getProgressPct } from "@/lib/actionPlansIndex";
import { createBlankProgress } from "@/lib/actionPlanTypes";

interface Props {
  lang: Language;
  childAgeYears: number | null;
  onStartPlan?: (planId: string) => void;
}

const en = {
  title: "🎯 Action Plans",
  subtitle: "Guided multi-day programs",
  startPlan: "Start Plan",
  day: "Day",
  of: "of",
  today: "Today",
  complete: "Complete",
  completed: "Completed",
  hide: "← All Plans",
  noPlans: "No plans available for this age yet.",
  tip: "Today's tip",
  progress: "Progress",
  finished: "🎉 Plan Complete!",
  finishedDesc: "You've completed all days. Keep using what you've learned!",
  markDone: "Mark Day Complete →",
};

const ko = {
  title: "🎯 액션 플랜",
  subtitle: "단계별 프로그램",
  startPlan: "시작하기",
  day: "",
  of: "/",
  today: "오늘",
  complete: "완료",
  completed: "완료됨",
  hide: "← 전체 플랜",
  noPlans: "이 연령대의 플랜이 아직 없습니다.",
  tip: "오늘의 팁",
  progress: "진행 상황",
  finished: "🎉 플랜 완료!",
  finishedDesc: "모든 날짜를 완료했어요. 배운 것을 계속 실천해 보세요!",
  markDone: "오늘 완료 →",
};

function saveProgress(progress: PlanProgress) {
  if (typeof window === "undefined") return;
  localStorage.setItem(`pc_plan_${progress.planId}`, JSON.stringify(progress));
}

export default function ActionPlansView({ lang, childAgeYears }: Props) {
  const t = lang === "ko" ? ko : en;
  const [selectedPlanId, setSelectedPlanId] = useState<string | null>(null);
  const [progressMap, setProgressMap] = useState<Record<string, PlanProgress>>(() => {
    // Initialize from localStorage synchronously (avoid setState-in-effect)
    if (typeof window === "undefined") return {};
    const map: Record<string, PlanProgress> = {};
    for (const plan of ALL_PLANS) {
      const raw = localStorage.getItem(`pc_plan_${plan.id}`);
      if (raw) { try { map[plan.id] = JSON.parse(raw); } catch {} }
    }
    return map;
  });

  const plans = getPlansForAge(childAgeYears);
  const selectedPlan = selectedPlanId ? getPlanById(selectedPlanId) : null;
  const selectedProgress = selectedPlanId ? progressMap[selectedPlanId] : null;

  function startPlan(planId: string) {
    const p = createBlankProgress(planId);
    saveProgress(p);
    setProgressMap(prev => ({ ...prev, [planId]: p }));
    setSelectedPlanId(planId);
  }

  function completeDay(planId: string, day: number) {
    const existing = progressMap[planId];
    if (!existing) return;
    const updated: PlanProgress = {
      ...existing,
      completedDays: [...new Set([...existing.completedDays, day])],
      currentDay: day + 1,
      finished: day >= (getPlanById(planId)?.days.length || 0),
    };
    saveProgress(updated);
    setProgressMap(prev => ({ ...prev, [planId]: updated }));
  }

  // === Plan Detail View ===
  if (selectedPlan && selectedProgress) {
    const activeDay = getActiveDay(selectedPlan, selectedProgress);
    const pct = getProgressPct(selectedPlan, selectedProgress);
    const todayData = selectedPlan.days.find(d => d.day === activeDay) || selectedPlan.days[0];
    const dayDone = selectedProgress.completedDays.includes(todayData.day);

    return (
      <div>
        <button onClick={() => setSelectedPlanId(null)} className="text-xs mb-3" style={{ color: "var(--primary)" }}>
          {t.hide}
        </button>

        {/* Header */}
        <div className="rounded-2xl p-4 mb-4" style={{ background: "var(--surface)", border: "1px solid var(--border)" }}>
          <div className="flex items-center gap-3 mb-2">
            <span className="text-3xl">{selectedPlan.icon}</span>
            <div>
              <h2 className="text-base font-bold font-display" style={{ color: "var(--text)" }}>{selectedPlan.title}</h2>
              <p className="text-xs" style={{ color: "var(--text-muted)" }}>{selectedPlan.subtitle}</p>
            </div>
          </div>
          {/* Progress bar */}
          <div className="h-2 rounded-full overflow-hidden mb-1" style={{ background: "var(--bg)" }}>
            <div className="h-full rounded-full transition-all" style={{ width: `${pct}%`, background: "var(--primary)" }} />
          </div>
          <p className="text-xs" style={{ color: "var(--text-muted)" }}>{pct}% · {selectedProgress.completedDays.length} / {selectedPlan.days.length} {lang === "ko" ? "일" : "days"}</p>
        </div>

        {selectedProgress.finished ? (
          <div className="rounded-2xl p-6 text-center" style={{ background: "var(--emerald-50)", border: "1px solid var(--success)" }}>
            <div className="text-3xl mb-2">🎉</div>
            <p className="text-sm font-semibold mb-1" style={{ color: "var(--success)" }}>{t.finished}</p>
            <p className="text-xs" style={{ color: "var(--text-muted)" }}>{t.finishedDesc}</p>
          </div>
        ) : (
          <>
            {/* Today's card */}
            <div className="rounded-2xl p-4 mb-3" style={{ background: "var(--emerald-50)", border: "1px solid var(--success)" }}>
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-semibold px-2 py-0.5 rounded-full text-white" style={{ background: "var(--primary)" }}>
                  {t.day} {todayData.day}
                </span>
                <span className="text-xs" style={{ color: "var(--text-muted)" }}>{t.today}</span>
              </div>
              <h3 className="text-sm font-semibold mb-2 font-display" style={{ color: "var(--text)" }}>{todayData.title}</h3>
              <ul className="space-y-2.5 mb-3">
                {todayData.steps.map((step, i) => (
                  <li key={i} className="text-xs flex gap-2" style={{ color: "var(--text)" }}>
                    <span style={{ color: "var(--success)" }}>•</span>
                    <span>{step}</span>
                  </li>
                ))}
              </ul>
              <div className="rounded-xl p-3 mb-3" style={{ background: "var(--surface)", border: "1px solid var(--border)" }}>
                <p className="text-xs font-medium mb-1" style={{ color: "var(--text-muted)" }}>💡 {t.tip}</p>
                <p className="text-xs italic" style={{ color: "var(--text)" }}>{todayData.tip}</p>
              </div>
              {dayDone ? (
                <p className="text-xs text-center font-medium" style={{ color: "var(--success)" }}>✓ {t.completed}</p>
              ) : (
                <button onClick={() => completeDay(selectedPlan.id, todayData.day)} className="w-full py-2.5 rounded-xl text-white font-medium text-sm" style={{ background: "var(--primary)" }}>
                  {t.markDone}
                </button>
              )}
            </div>

            {/* Day overview */}
            <div className="rounded-2xl p-4" style={{ background: "var(--surface)", border: "1px solid var(--border)" }}>
              <p className="text-xs font-semibold mb-3" style={{ color: "var(--text)" }}>{selectedPlan.durationDays} {lang === "ko" ? "일" : "days"}</p>
              <div className="space-y-1.5">
                {selectedPlan.days.map(d => {
                  const done = selectedProgress.completedDays.includes(d.day);
                  const isToday = d.day === activeDay;
                  return (
                    <div key={d.day} className="flex items-center gap-2">
                      <span className="text-xs" style={{ color: done ? "var(--success)" : isToday ? "var(--primary)" : "var(--text-muted)" }}>
                        {done ? "✓" : isToday ? "●" : "○"}
                      </span>
                      <span className="text-xs" style={{ color: done ? "var(--success)" : isToday ? "var(--text)" : "var(--text-muted)", fontWeight: isToday ? 600 : 400 }}>
                        {t.day} {d.day}: {d.title}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          </>
        )}
      </div>
    );
  }

  // === Plan List View ===
  return (
    <div>
      <h2 className="text-lg font-semibold mb-1 font-display" style={{ color: "var(--text)" }}>{t.title}</h2>
      <p className="text-xs mb-4" style={{ color: "var(--text-muted)" }}>{t.subtitle}</p>

      {plans.length === 0 ? (
        <p className="text-sm text-center py-8" style={{ color: "var(--text-muted)" }}>{t.noPlans}</p>
      ) : (
        <div className="space-y-3">
          {plans.map(plan => {
            const progress = progressMap[plan.id];
            const pct = progress ? getProgressPct(plan, progress) : 0;
            const activeDay = progress && !progress.finished ? getActiveDay(plan, progress) : 0;
            return (
              <button key={plan.id} onClick={() => progress ? setSelectedPlanId(plan.id) : startPlan(plan.id)}
                className="w-full text-left rounded-2xl p-5 transition-colors"
                style={{ background: "var(--surface)", border: "1px solid var(--border)" }}>
                <div className="flex items-start gap-4">
                  <span className="text-4xl leading-none mt-0.5">{plan.icon}</span>
                  <div className="flex-1">
                    <div className="flex items-center justify-between gap-2 mb-1">
                      <h3 className="text-sm font-bold font-display" style={{ color: "var(--text)" }}>{plan.title}</h3>
                      {progress && !progress.finished && (
                        <span className="text-xs px-2 py-0.5 rounded-full text-white" style={{ background: "var(--primary)" }}>
                          {t.day} {activeDay}
                        </span>
                      )}
                      {progress?.finished && (
                        <span className="text-xs px-2 py-0.5 rounded-full" style={{ background: "var(--emerald-50)", color: "var(--success)" }}>✓</span>
                      )}
                    </div>
                    <p className="text-xs mb-3" style={{ color: "var(--text-muted)" }}>{plan.description}</p>
                    <div className="flex items-center gap-2">
                      <span className="text-xs" style={{ color: "var(--text-muted)" }}>{plan.durationDays} days</span>
                      {progress && (
                        <div className="flex-1 h-1.5 rounded-full overflow-hidden" style={{ background: "var(--bg)" }}>
                          <div className="h-full rounded-full" style={{ width: `${pct}%`, background: "var(--primary)" }} />
                        </div>
                      )}
                    </div>
                  </div>
                </div>
                {!progress && (
                  <div className="mt-3 py-2.5 rounded-xl text-center text-white font-semibold text-sm" style={{ background: "var(--primary)" }}>
                    {t.startPlan} →
                  </div>
                )}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}
