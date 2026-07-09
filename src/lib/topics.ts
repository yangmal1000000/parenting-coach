// Client-safe topic categories only — no knowledge chunks
// The actual knowledge base stays server-side in knowledge-base.ts

export interface TopicCategory {
  id: string;
  label: string;
  description: string;
  // Age range in years. Topics are shown if child age falls within range.
  // null means all ages.
  ageRange?: [number, number] | null;
}

// Age ranges are in years. null = all ages.
export const TOPIC_CATEGORIES: TopicCategory[] = [
  { id: "tantrums", label: "😤 Tantrums & Meltdowns", description: "Screaming, crying, public meltdowns, emotional outbursts", ageRange: [1, 8] },
  { id: "sleep", label: "😴 Sleep Issues", description: "Won't go to bed, night waking, bedtime resistance", ageRange: [0, 12] },
  { id: "eating", label: "🍽️ Eating Problems", description: "Picky eating, food refusal, mealtime battles", ageRange: [1, 12] },
  { id: "behavior", label: "🎯 Behavior & Discipline", description: "Not listening, defiance, hitting, lying", ageRange: [2, 17] },
  { id: "sibling", label: "👥 Sibling Conflict", description: "Fighting, hitting, sharing disputes", ageRange: null },
  { id: "emotional", label: "💙 Emotional Regulation", description: "Anxiety, fears, big feelings, crying", ageRange: [2, 17] },
  { id: "routines", label: "🔄 Daily Routines", description: "Morning chaos, homework battles, chores", ageRange: [3, 17] },
  { id: "screen", label: "📱 Screen Time", description: "Screen time disputes, turning off devices", ageRange: [2, 17] },
  { id: "school", label: "🏫 School & Learning", description: "School refusal, homework, teacher conflicts", ageRange: [4, 17] },
  { id: "social", label: "🤝 Social Skills", description: "Sharing, making friends, bullying", ageRange: [2, 17] },
  { id: "transition", label: "🌱 Big Transitions", description: "New sibling, moving, divorce, grief", ageRange: null },
  { id: "confidence", label: "💪 Confidence & Self-Esteem", description: "Self-worth, perfectionism, encouragement", ageRange: [4, 17] },
  { id: "anger", label: "😡 Anger & Aggression", description: "Hitting, biting, throwing, violent outbursts", ageRange: [1, 16] },
  { id: "teen", label: "🎤 Teenagers", description: "Backtalk, independence, risky behavior, communication", ageRange: [12, 17] },
  { id: "parent", label: "🧑‍🧒 Parent Self-Care", description: "Parental burnout, anger management, self-compassion", ageRange: null },
  { id: "toilet", label: "🚽 Toilet Training", description: "Potty training resistance, regression, accidents", ageRange: [1, 5] },
  { id: "fears", label: "😱 Fears & Worries", description: "Monsters, dark, doctors, storms, separation", ageRange: [2, 12] },
  { id: "honest", label: "💬 Hard Conversations", description: "Sex, death, money, racism, news events", ageRange: [3, 17] },
  { id: "co-parent", label: "👨‍👩‍👧 Co-Parenting", description: "Disagreeing on discipline, consistency, teamwork", ageRange: null },
];

// Parse a free-text age string (e.g. "3 years", "18 months", "14") into years (number).
// Returns null if unparseable.
export function parseAgeYears(ageStr: string): number | null {
  if (!ageStr) return null;
  const s = ageStr.toLowerCase().trim();

  // months
  const monthMatch = s.match(/(\d+)\s*mo/);
  if (monthMatch) return parseInt(monthMatch[1]) / 12;

  // years
  const yearMatch = s.match(/(\d+)/);
  if (yearMatch) return parseInt(yearMatch[1]);

  return null;
}

// Filter topics by child age. If age is null/unknown, show all.
export function topicsForAge(topics: TopicCategory[], ageYears: number | null): TopicCategory[] {
  if (ageYears === null) return topics;
  return topics.filter(t => !t.ageRange || (ageYears >= t.ageRange[0] && ageYears <= t.ageRange[1]));
}
