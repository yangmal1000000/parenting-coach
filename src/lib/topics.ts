// Client-safe topic categories only — no knowledge chunks
// The actual knowledge base stays server-side in knowledge-base.ts

export interface TopicCategory {
  id: string;
  label: string;
  description: string;
}

export const TOPIC_CATEGORIES: TopicCategory[] = [
  { id: "tantrums", label: "😤 Tantrums & Meltdowns", description: "Screaming, crying, public meltdowns, emotional outbursts" },
  { id: "sleep", label: "😴 Sleep Issues", description: "Won't go to bed, night waking, bedtime resistance" },
  { id: "eating", label: "🍽️ Eating Problems", description: "Picky eating, food refusal, mealtime battles" },
  { id: "behavior", label: "🎯 Behavior & Discipline", description: "Not listening, defiance, hitting, lying" },
  { id: "sibling", label: "👥 Sibling Conflict", description: "Fighting, hitting, sharing disputes" },
  { id: "emotional", label: "💙 Emotional Regulation", description: "Anxiety, fears, big feelings, crying" },
  { id: "routines", label: "🔄 Daily Routines", description: "Morning chaos, homework battles, chores" },
  { id: "screen", label: "📱 Screen Time", description: "Screen time disputes, turning off devices" },
  { id: "school", label: "🏫 School & Learning", description: "School refusal, homework, teacher conflicts" },
  { id: "social", label: "🤝 Social Skills", description: "Sharing, making friends, bullying" },
  { id: "transition", label: "🌱 Big Transitions", description: "New sibling, moving, divorce, grief" },
  { id: "confidence", label: "💪 Confidence & Self-Esteem", description: "Self-worth, perfectionism, encouragement" },
  { id: "anger", label: "😡 Anger & Aggression", description: "Hitting, biting, throwing, violent outbursts" },
  { id: "teen", label: "🎤 Teenagers", description: "Backtalk, independence, risky behavior, communication" },
  { id: "parent", label: "🧑‍🧒 Parent Self-Care", description: "Parental burnout, anger management, self-compassion" },
  { id: "toilet", label: "🚽 Toilet Training", description: "Potty training resistance, regression, accidents" },
  { id: "fears", label: "😱 Fears & Worries", description: "Monsters, dark, doctors, storms, separation" },
  { id: "honest", label: "💬 Hard Conversations", description: "Sex, death, money, racism, news events" },
  { id: "co-parent", label: "👨‍👩‍👧 Co-Parenting", description: "Disagreeing on discipline, consistency, teamwork" },
];
