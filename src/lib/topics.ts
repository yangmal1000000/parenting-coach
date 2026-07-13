// Client-safe topic categories only — no knowledge chunks
// The actual knowledge base stays server-side in knowledge-base.ts

export interface TopicCategory {
  id: string;
  label: string;
  labelKo: string;
  description: string;
  // Age range in years. Topics are shown if child age falls within range.
  // null means all ages.
  ageRange?: [number, number] | null;
}

// Age ranges are in years. null = all ages.
export const TOPIC_CATEGORIES: TopicCategory[] = [
  { id: "tantrums", label: "😤 Tantrums & Meltdowns", labelKo: "😤 떼쓰기와 오열", description: "Screaming, crying, public meltdowns, emotional outbursts", ageRange: [1, 8] },
  { id: "sleep", label: "😴 Sleep Issues", labelKo: "😴 수면 문제", description: "Won't go to bed, night waking, bedtime resistance", ageRange: [0, 12] },
  { id: "eating", label: "🍽️ Eating Problems", labelKo: "🍽️ 식사 문제", description: "Picky eating, food refusal, mealtime battles", ageRange: [1, 12] },
  { id: "behavior", label: "🎯 Behavior & Discipline", labelKo: "🎯 행동과 훈육", description: "Not listening, defiance, hitting, lying", ageRange: [2, 17] },
  { id: "sibling", label: "👥 Sibling Conflict", labelKo: "👥 형제 갈등", description: "Fighting, hitting, sharing disputes", ageRange: null },
  { id: "emotional", label: "💙 Emotional Regulation", labelKo: "💙 감정 조절", description: "Anxiety, fears, big feelings, crying", ageRange: [2, 17] },
  { id: "routines", label: "🔄 Daily Routines", labelKo: "🔄 일상 루틴", description: "Morning chaos, homework battles, chores", ageRange: [3, 17] },
  { id: "screen", label: "📱 Screen Time", labelKo: "📱 스크린 타임", description: "Screen time disputes, turning off devices", ageRange: [2, 17] },
  { id: "school", label: "🏫 School & Learning", labelKo: "🏫 학교와 학습", description: "School refusal, homework, teacher conflicts", ageRange: [4, 17] },
  { id: "social", label: "🤝 Social Skills", labelKo: "🤝 사회성", description: "Sharing, making friends, bullying", ageRange: [2, 17] },
  { id: "transition", label: "🌱 Big Transitions", labelKo: "🌱 큰 변화", description: "New sibling, moving, divorce, grief", ageRange: null },
  { id: "confidence", label: "💪 Confidence & Self-Esteem", labelKo: "💪 자신감", description: "Self-worth, perfectionism, encouragement", ageRange: [4, 17] },
  { id: "anger", label: "😡 Anger & Aggression", labelKo: "😡 분노와 공격성", description: "Hitting, biting, throwing, violent outbursts", ageRange: [1, 16] },
  { id: "teen", label: "🎤 Teenagers", labelKo: "🎤 청소년", description: "Backtalk, independence, risky behavior, communication", ageRange: [12, 17] },
  { id: "parent", label: "🧑‍🧒 Parent Self-Care", labelKo: "🧑‍🧒 부모 자기관리", description: "Parental burnout, anger management, self-compassion", ageRange: null },
  { id: "toilet", label: "🚽 Toilet Training", labelKo: "🚽 배변 훈련", description: "Potty training resistance, regression, accidents", ageRange: [1, 5] },
  { id: "fears", label: "😱 Fears & Worries", labelKo: "😱 공포와 걱정", description: "Monsters, dark, doctors, storms, separation", ageRange: [2, 12] },
  { id: "honest", label: "💬 Hard Conversations", labelKo: "💬 어려운 대화", description: "Sex, death, money, racism, news events", ageRange: [3, 17] },
  { id: "co-parent", label: "👨‍👩‍👧 Co-Parenting", labelKo: "👨‍👩‍👧 공동 육아", description: "Disagreeing on discipline, consistency, teamwork", ageRange: null },
];

export function getTopicLabel(topic: TopicCategory, lang: "en" | "ko"): string {
  return lang === "ko" ? topic.labelKo : topic.label;
}

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
