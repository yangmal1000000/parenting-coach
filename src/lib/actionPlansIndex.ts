import type { ActionPlan, PlanProgress } from "./actionPlanTypes";
import { BEDTIME_RESET, SCREEN_TIME_WEAN } from "./actionPlansA";
import { TANTRUM_TOOLKIT, SIBLING_HARMONY, CONFIDENCE_BUILDER } from "./actionPlansB";

export const ALL_PLANS: ActionPlan[] = [
  BEDTIME_RESET,
  SCREEN_TIME_WEAN,
  TANTRUM_TOOLKIT,
  SIBLING_HARMONY,
  CONFIDENCE_BUILDER,
];

export function getPlansForAge(ageYears: number | null): ActionPlan[] {
  if (ageYears === null) return ALL_PLANS;
  return ALL_PLANS.filter(p => ageYears >= p.ageRange[0] && ageYears <= p.ageRange[1]);
}

export function getPlanById(id: string): ActionPlan | null {
  return ALL_PLANS.find(p => p.id === id) || null;
}

export function getActiveDay(plan: ActionPlan, progress: PlanProgress): number {
  if (progress.finished) return plan.days.length;
  const elapsed = Math.floor((Date.now() - progress.startedAt) / (24 * 60 * 60 * 1000)) + 1;
  // Active day = the further of time-elapsed or completed-days+1
  const completedCount = new Set(progress.completedDays).size;
  return Math.min(Math.max(elapsed, completedCount + 1), plan.days.length);
}

export function getProgressPct(plan: ActionPlan, progress: PlanProgress): number {
  const unique = new Set(progress.completedDays.filter(d => d >= 1 && d <= plan.days.length)).size;
  return Math.round((unique / plan.days.length) * 100);
}
