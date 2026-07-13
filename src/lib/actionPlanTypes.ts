// Action Plan Types

export interface PlanDay {
  day: number;
  title: string;
  steps: string[];
  tip: string;
}

export interface ActionPlan {
  id: string;
  title: string;
  subtitle: string;
  icon: string;
  category: string;          // topic ID from TOPIC_CATEGORIES
  durationDays: number;
  ageRange: [number, number]; // years
  description: string;
  days: PlanDay[];
  premium: boolean;
}

export interface PlanProgress {
  planId: string;
  startedAt: number;
  completedDays: number[];
  currentDay: number;
  finished: boolean;
}

export function createBlankProgress(planId: string): PlanProgress {
  return { planId, startedAt: Date.now(), completedDays: [], currentDay: 1, finished: false };
}
