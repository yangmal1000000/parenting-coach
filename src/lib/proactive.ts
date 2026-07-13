// === Proactive Content Engine ===
// Age-aware weekly tips, seasonal suggestions, and milestone alerts
// Deterministic rotation based on week number so all users see the same tip

import type { DevelopmentalStage } from "./childProfile";

// === Types ===

export interface WeeklyTip {
  id: string;
  category: string;
  title: string;
  body: string;
  actionable: string; // "Try this today:" prompt
  ageRange?: [number, number]; // years, null = all ages
  season?: ("spring" | "summer" | "autumn" | "winter")[];
  lang: "en" | "ko";
}

export interface MilestoneAlert {
  id: string;
  stage: DevelopmentalStage;
  ageRange: [number, number]; // years
  title: string;
  description: string;
  redFlags: string[];
  suggestedTopics: string[]; // topic IDs from TOPIC_CATEGORIES
}

export interface SeasonalAlert {
  id: string;
  // Northern hemisphere months when this is relevant (0-11)
  months: number[];
  title: string;
  body: string;
  actionable: string;
  suggestedTopic?: string;
}

// === Weekly Tip Library ===

const WEEKLY_TIPS_EN: WeeklyTip[] = [
  {
    id: "wt-connection-01",
    category: "connection",
    title: "💡 The 10-Minute Power",
    body: "Just 10 minutes of uninterrupted, child-led play each day dramatically reduces behavior problems. No phones, no teaching, no correcting — just follow their lead.",
    actionable: "Set a timer for 10 minutes today and let your child choose the activity.",
    lang: "en",
  },
  {
    id: "wt-emotion-01",
    category: "emotional",
    title: "💙 Name It to Tame It",
    body: "When children can name their emotion, the intensity drops by up to 50%. Before fixing the problem, help them identify: 'It looks like you're feeling frustrated.'",
    actionable: "Today, name the emotion before addressing the behavior.",
    ageRange: [2, 10],
    lang: "en",
  },
  {
    id: "wt-sleep-01",
    category: "sleep",
    title: "😴 The Bedtime Window",
    body: "Overtired children fight sleep harder. The ideal bedtime is when they're drowsy but not asleep — usually 15-20 minutes after the first yawn.",
    actionable: "Tonight, start the wind-down 20 minutes earlier than usual.",
    ageRange: [0, 8],
    lang: "en",
  },
  {
    id: "wt-behavior-01",
    category: "behavior",
    title: "🎯 Catch Them Being Good",
    body: "Children crave attention so strongly they'll take negative attention over none. Shift your focus: praise specific good behavior 3× more than you correct bad behavior.",
    actionable: "Find 3 things to genuinely praise today.",
    ageRange: [2, 12],
    lang: "en",
  },
  {
    id: "wt-tantrum-01",
    category: "tantrums",
    title: "😤 Stay Calm to Co-Regulate",
    body: "A dysregulated adult cannot regulate a dysregulated child. Your calm nervous system is the most powerful tool during a meltdown. Breathe slowly — they'll mirror you.",
    actionable: "During the next meltdown, say nothing for 30 seconds. Just breathe.",
    ageRange: [1, 8],
    lang: "en",
  },
  {
    id: "wt-eating-01",
    category: "eating",
    title: "🍽️ No Pressure, No Power Struggle",
    body: "Research shows children eat significantly more variety when there's zero pressure. Your job: offer healthy food. Their job: decide how much to eat.",
    actionable: "Serve one new food alongside favorites this week — don't comment on whether they eat it.",
    ageRange: [1, 10],
    lang: "en",
  },
  {
    id: "wt-screen-01",
    category: "screen",
    title: "📱 The Transition Warning",
    body: "Screen-time meltdowns usually happen because of abrupt cutoffs. A 5-minute warning + a visual timer reduces resistance dramatically.",
    actionable: "Set a timer 5 minutes before screen time ends today.",
    ageRange: [2, 12],
    lang: "en",
  },
  {
    id: "wt-confidence-01",
    category: "confidence",
    title: "💪 Praise Effort, Not Intelligence",
    body: "Children praised for being 'smart' avoid challenges. Children praised for 'working hard' embrace them. 'You really stuck with that!' builds resilience.",
    actionable: "Today, praise effort or strategy — not the outcome.",
    ageRange: [3, 13],
    lang: "en",
  },
  {
    id: "wt-routines-01",
    category: "routines",
    title: "🔄 Visual Routines Build Independence",
    body: "Children as young as 3 can follow picture-based routines. When the routine is 'done by the chart' not 'told by mom', resistance drops.",
    actionable: "Draw a simple 4-step morning routine with your child this week.",
    ageRange: [3, 10],
    lang: "en",
  },
  {
    id: "wt-sibling-01",
    category: "sibling",
    title: "👥 Don't Be the Judge",
    body: "When siblings fight, parents intervening as judge makes it worse. Instead: 'I see two kids who need help solving a problem. I'll be in the kitchen when you're ready to talk.'",
    actionable: "Next sibling fight, refuse to take sides. Acknowledge both feelings.",
    lang: "en",
  },
  {
    id: "wt-anger-01",
    category: "anger",
    title: "😡 Anger Is a Cover Emotion",
    body: "Anger is almost always masking something else — sadness, embarrassment, fear, or exhaustion. Look past the anger: 'Something underneath is really bothering you.'",
    actionable: "When anger strikes, look for the hidden emotion.",
    ageRange: [3, 16],
    lang: "en",
  },
  {
    id: "wt-parent-01",
    category: "parent",
    title: "🧑🧒 You Can't Pour from an Empty Cup",
    body: "Parental burnout directly causes harsher parenting. 5 minutes of genuine self-care daily isn't selfish — it's the foundation of patient parenting.",
    actionable: "Schedule 5 minutes for yourself today. Guard it.",
    lang: "en",
  },
  {
    id: "wt-transition-01",
    category: "transition",
    title: "🌱 Transitions Need Bridges",
    body: "Big changes (new sibling, moving, new school) are easier with 'transition objects' — something that connects old to new. A familiar item, a shared photo book, or a goodbye ritual.",
    actionable: "Help your child create one 'bridge' for an upcoming change.",
    lang: "en",
  },
  {
    id: "wt-social-01",
    category: "social",
    title: "🤝 Model the Apology",
    body: "Forced apologies teach children to lie to get out of trouble. Instead, model apologizing yourself — 'I'm sorry I yelled. I was frustrated but that wasn't fair to you.' They'll learn by watching.",
    actionable: "Apologize to your child for something genuine today.",
    ageRange: [2, 12],
    lang: "en",
  },
  {
    id: "wt-teen-01",
    category: "teen",
    title: "🎤 Listen 80%, Talk 20%",
    body: "Teens open up most in the car or during activities (side-by-side, not face-to-face). When they talk, just listen. Don't fix, don't lecture. Ask: 'Do you want advice or just want me to listen?'",
    actionable: "Create one side-by-side moment today — drive, walk, or cook together.",
    ageRange: [12, 18],
    lang: "en",
  },
  {
    id: "wt-fears-01",
    category: "fears",
    title: "😱 Validate Before Reassuring",
    body: "'There's nothing under the bed' dismisses the fear. 'You're worried about what's under the bed — let's check together' validates it. Validated fears fade faster.",
    actionable: "Tonight, validate a fear before reassuring.",
    ageRange: [2, 10],
    lang: "en",
  },
];

// Korean tips (key ones translated)
const WEEKLY_TIPS_KO: WeeklyTip[] = [
  {
    id: "wt-connection-01",
    category: "connection",
    title: "💡 10분의 마법",
    body: "매일 단 10분, 아이가 이끄는 놀이에 온전히 참여하면 문제 행동이 크게 줄어듭니다. 휴대폰 없음, 가르치지 않음, 교정하지 않음 — 그저 아이를 따르세요.",
    actionable: "오늘 10분 타이머를 맞추고 아이가 활동을 선택하게 하세요.",
    lang: "ko",
  },
  {
    id: "wt-emotion-01",
    category: "emotional",
    title: "💙 이름을 붙이면 진정돼요",
    body: "아이가 자신의 감정에 이름을 붙이면 감정의 강도가 절반 가까이 줄어듭니다. 문제를 해결하기 전에 '답답한 기분이구나'라고 감정을 먼저 알아주세요.",
    actionable: "오늘, 행동을 지적하기 전에 감정에 먼저 이름을 붙여보세요.",
    ageRange: [2, 10],
    lang: "ko",
  },
  {
    id: "wt-sleep-01",
    category: "sleep",
    title: "😴 잠들기 좋은 시간",
    body: "너무 피곤한 아이가 오히려 잠을 더 거부합니다. 이상적인 취침 시간은 아이가 졸린데 아직 깨어있는 상태 — 보통 첫 하품 후 15-20분.",
    actionable: "오늘 밤, 평소보다 20분 일찍 준비를 시작해 보세요.",
    ageRange: [0, 8],
    lang: "ko",
  },
  {
    id: "wt-behavior-01",
    category: "behavior",
    title: "🎯 잘하는 모습을 발견하기",
    body: "아이는 주의를 갈망해서 부정적인 주의도 없는 것보다 낫다고 생각합니다. 비판보다 구체적인 칭찬을 3배 더 많이 해보세요.",
    actionable: "오늘 진심으로 칭찬할 3가지를 찾아보세요.",
    ageRange: [2, 12],
    lang: "ko",
  },
  {
    id: "wt-tantrum-01",
    category: "tantrums",
    title: "😤 어른이 차분해야 아이도 진정해요",
    body: "흥분한 어른은 흥분한 아이를 진정시킬 수 없습니다. 멜트다운 중에 당신의 차분한 신경계가 가장 강력한 도구입니다. 천천히 숨 쉬세요 — 아이가 따라할 거예요.",
    actionable: "다음 멜트다운 때 30초 동안 아무 말 말고 숨만 쉬어보세요.",
    ageRange: [1, 8],
    lang: "ko",
  },
  {
    id: "wt-eating-01",
    category: "eating",
    title: "🍽️ 압박 없이, 싸우지 않고",
    body: "연구에 따르면 압박이 없을 때 아이가 훨씬 다양한 음식을 먹습니다. 부모의 역할: 건강한 음식 제공. 아이의 역할: 얼마나 먹을지 결정.",
    actionable: "이번 주 좋아하는 음식과 함께 새 음식 하나를 제공해 보세요 — 먹든 안 먹든 언급하지 마세요.",
    ageRange: [1, 10],
    lang: "ko",
  },
  {
    id: "wt-screen-01",
    category: "screen",
    title: "📱 전환 미리 알리기",
    body: "화면 시간 멜트다운은 대개 갑작스러운 중단 때문입니다. 5분 전 경고와 시각적 타이머가 저항을 크게 줄입니다.",
    actionable: "오늘 화면 시간이 끝나기 5분 전에 타이머를 설정하세요.",
    ageRange: [2, 12],
    lang: "ko",
  },
  {
    id: "wt-parent-01",
    category: "parent",
    title: "🧑🧒 빈 잔으로 따를 수 없어요",
    body: "부모 번아웃은 더 거친 양육을 직접적으로 유발합니다. 매일 5분의 진정한 자기 관리는 이기적이지 않습니다 — 인내심 있는 양육의 기초입니다.",
    actionable: "오늘 자신을 위해 5분을 예약하세요. 지키세요.",
    lang: "ko",
  },
  {
    id: "wt-confidence-01",
    category: "confidence",
    title: "💪 결과가 아닌 노력을 칭찬하기",
    body: "'똑똑하다'고 칭찬받은 아이는 도전을 피합니다. '열심히 했네'라고 칭찬받은 아이는 도전을 받아들입니다. '정말 끝까지 했네!'가 회복탄력성을 길러요.",
    actionable: "오늘, 결과가 아닌 노력이나 방법을 칭찬하세요.",
    ageRange: [3, 13],
    lang: "ko",
  },
  {
    id: "wt-teen-01",
    category: "teen",
    title: "🎤 80% 듣고, 20% 말하고",
    body: "청소년은 차 안이나 활동 중에 (마주 보지 않고 옆에 있을 때) 가장 많이 이야기합니다. 아이가 말할 때 그냥 들으세요. 해결하거나 설교하지 마세요.",
    actionable: "오늘 나란히 함께하는 순간을 만들어 보세요 — 운전, 산책, 요리.",
    ageRange: [12, 18],
    lang: "ko",
  },
];

// === Milestone Alerts ===

export const MILESTONE_ALERTS: MilestoneAlert[] = [
  {
    id: "ms-infant-separation",
    stage: "infant",
    ageRange: [0, 1],
    title: "👶 Separation Anxiety Begins",
    description: "Around 8-10 months, your baby may start crying when you leave the room. This is healthy attachment development.",
    redFlags: ["No distress at all when primary caregiver leaves by 12 months", "Doesn't calm when you return"],
    suggestedTopics: ["emotional", "sleep", "fears"],
  },
  {
    id: "ms-toddler-tantrums",
    stage: "toddler",
    ageRange: [1, 3],
    title: "🧒 Tantrum Peak Season",
    description: "Toddlers experience 3-5 tantrums per week on average — this is normal brain development, not bad behavior.",
    redFlags: ["Tantrums lasting 25+ minutes regularly", "Self-harm during meltdowns", "No improvement by age 4"],
    suggestedTopics: ["tantrums", "behavior", "emotional"],
  },
  {
    id: "ms-toddler-language",
    stage: "toddler",
    ageRange: [1, 3],
    title: "💬 Language Explosion",
    description: "Between 18-30 months, vocabulary explodes from ~20 to 200+ words. Frustration when they can't express themselves is the #1 cause of toddler meltdowns.",
    redFlags: ["Fewer than 20 words at 18 months", "No two-word phrases by 24 months", "Loss of previously acquired words"],
    suggestedTopics: ["tantrums", "social", "transition"],
  },
  {
    id: "ms-preschool-social",
    stage: "preschool",
    ageRange: [3, 5],
    title: "🎨 Friendship Building",
    description: "Preschoolers transition from parallel play to cooperative play. Sharing disputes and playground conflicts are how they learn social skills.",
    redFlags: ["No interest in other children by age 4", "Aggressive behavior toward peers persists beyond 2 months"],
    suggestedTopics: ["social", "sibling", "behavior"],
  },
  {
    id: "ms-preschool-fears",
    stage: "preschool",
    ageRange: [3, 5],
    title: "😱 Imagination-Based Fears",
    description: "A vivid imagination brings monsters, dark fears, and nightmares. This is cognitive growth — your child can now imagine things that aren't there.",
    redFlags: ["Fears interfere with daily functioning", "Sleep severely disrupted for weeks"],
    suggestedTopics: ["fears", "sleep", "emotional"],
  },
  {
    id: "ms-school-transition",
    stage: "school",
    ageRange: [4, 6],
    title: "🏫 Starting School",
    description: "Starting school is the biggest transition since walking. Expect regression (bedwetting, clinginess, tantrums) for 6-8 weeks — this is normal.",
    redFlags: ["School refusal lasting beyond first month", "Physical symptoms (stomach aches, headaches) that are school-related"],
    suggestedTopics: ["transition", "school", "emotional", "routines"],
  },
  {
    id: "ms-school-friendship",
    stage: "school",
    ageRange: [6, 11],
    title: "👫 Friendship Drama Era",
    description: "School-age children start navigating complex social hierarchies. Exclusion, cliques, and fairness debates are daily. This builds social intelligence.",
    redFlags: ["Sudden school avoidance", "Persistent sadness about friendships", "Talks about being bullied"],
    suggestedTopics: ["social", "school", "emotional", "confidence"],
  },
  {
    id: "ms-preteen-puberty",
    stage: "preteen",
    ageRange: [10, 13],
    title: "🌱 Pre-Teen Changes",
    description: "Preteens experience hormonal shifts, mood swings, and a drive for independence. They need more privacy but also more emotional safety nets.",
    redFlags: ["Severe mood changes", "Social withdrawal", "Signs of anxiety or depression"],
    suggestedTopics: ["teen", "emotional", "confidence", "parent"],
  },
  {
    id: "ms-teen-independence",
    stage: "teen",
    ageRange: [13, 17],
    title: "🎤 Identity & Independence",
    description: "Teenagers are building their identity — questioning rules, pushing boundaries, and seeking peer approval over parental approval. This is healthy development.",
    redFlags: ["Complete withdrawal from family", "Risk-taking behavior", "Signs of depression or self-harm"],
    suggestedTopics: ["teen", "behavior", "screen", "parent"],
  },
];

// === Seasonal Alerts ===

export const SEASONAL_ALERTS: SeasonalAlert[] = [
  {
    id: "sa-school-start",
    months: [7, 8], // Aug-Sep (UK school year starts)
    title: "🏫 School Starting Soon",
    body: "The transition to school is huge. Start adjusting sleep schedules 2 weeks early and talk positively about what to expect.",
    actionable: "Start the bedtime routine 15 minutes earlier this week.",
    suggestedTopic: "transition",
  },
  {
    id: "sa-halloween",
    months: [9], // October
    title: "🎃 Halloween & Sugar",
    body: "Sugar doesn't actually cause hyperactivity (studies confirm this) — but the excitement, disrupted routines, and late nights do. Keep routines steady.",
    actionable: "Plan a calm wind-down activity after Halloween events.",
    suggestedTopic: "routines",
  },
  {
    id: "sa-holidays",
    months: [10, 11], // Nov-Dec
    title: "🎄 Holiday Overwhelm",
    body: "Holidays bring joy AND meltdowns. Overstimulation, disrupted routines, and gift disappointment are all normal. Lower your expectations and protect sleep.",
    actionable: "Build in one quiet hour each day during holiday season.",
    suggestedTopic: "tantrums",
  },
  {
    id: "sa-new-year",
    months: [0], // January
    title: "✨ Fresh Start Energy",
    body: "January is a natural time to reset family routines. Children respond well to visual routine charts and 'new year, new rules' framing.",
    actionable: "Pick ONE routine to improve this month — not five.",
    suggestedTopic: "routines",
  },
  {
    id: "sa-spring-transition",
    months: [2, 3], // Mar-Apr
    title: "🌱 Spring Energy Surge",
    body: "More daylight means more energy and later bedtimes. Gradually adjust sleep schedules and channel the energy into outdoor play.",
    actionable: "Add 20 minutes of outdoor play this week.",
    suggestedTopic: "sleep",
  },
  {
    id: "sa-summer-screen",
    months: [5, 6, 7], // Jun-Aug
    title: "☀️ Summer Screen Time Creep",
    body: "Without school structure, screen time naturally increases. Set clear boundaries now before it becomes a daily battle.",
    actionable: "Agree on a daily screen-time limit with your child this week.",
    suggestedTopic: "screen",
  },
  {
    id: "sa-back-school-fall",
    months: [8, 9], // Sep-Oct
    title: "📚 Settling Into School",
    body: "The first 6 weeks of school are exhausting. Expect emotional meltdowns after school — 'after-school restraint collapse' is real.",
    actionable: "Keep after-school activities minimal for the first month.",
    suggestedTopic: "school",
  },
];

// === Engine Functions ===

/**
 * Get the current week number (ISO week)
 */
function getWeekNumber(date: Date): number {
  const d = new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()));
  const dayNum = d.getUTCDay() || 7;
  d.setUTCDate(d.getUTCDate() + 4 - dayNum);
  const yearStart = new Date(Date.UTC(d.getUTCFullYear(), 0, 1));
  return Math.ceil((((d.getTime() - yearStart.getTime()) / 86400000) + 1) / 7);
}

/**
 * Get the weekly tip — deterministic based on week number, filtered by age
 */
export function getWeeklyTip(lang: "en" | "ko", childAgeYears?: number): WeeklyTip | null {
  const tips = lang === "ko" ? WEEKLY_TIPS_KO : WEEKLY_TIPS_EN;

  // Filter by age if provided
  const eligible = childAgeYears != null
    ? tips.filter(t => !t.ageRange || (childAgeYears >= t.ageRange[0] && childAgeYears <= t.ageRange[1]))
    : tips;

  if (eligible.length === 0) return null;

  // Deterministic rotation based on week number
  const weekNum = getWeekNumber(new Date());
  const index = weekNum % eligible.length;
  return eligible[index];
}

/**
 * Get seasonal alerts relevant to the current month
 */
export function getCurrentSeasonalAlert(): SeasonalAlert | null {
  const currentMonth = new Date().getMonth();
  const match = SEASONAL_ALERTS.find(a => a.months.includes(currentMonth));
  return match || null;
}

/**
 * Get milestone alerts relevant to the child's age and stage
 */
export function getCurrentMilestoneAlert(
  childAgeYears?: number,
  stage?: DevelopmentalStage | null
): MilestoneAlert | null {
  if (childAgeYears == null) {
    // Fall back to stage if no age
    if (!stage) return null;
    const stageAlerts = MILESTONE_ALERTS.filter(m => m.stage === stage);
    if (stageAlerts.length === 0) return null;
    // Pick based on month for rotation
    const month = new Date().getMonth();
    return stageAlerts[month % stageAlerts.length];
  }

  const eligible = MILESTONE_ALERTS.filter(
    m => childAgeYears >= m.ageRange[0] && childAgeYears <= m.ageRange[1]
  );

  if (eligible.length === 0) {
    // Try stage-based fallback
    if (stage) {
      const stageAlerts = MILESTONE_ALERTS.filter(m => m.stage === stage);
      if (stageAlerts.length > 0) {
        const month = new Date().getMonth();
        return stageAlerts[month % stageAlerts.length];
      }
    }
    return null;
  }

  // If multiple match, pick by month for stability
  const month = new Date().getMonth();
  return eligible[month % eligible.length];
}

/**
 * Get all proactive content for the home screen
 */
export interface ProactiveContent {
  weeklyTip: WeeklyTip | null;
  seasonalAlert: SeasonalAlert | null;
  milestoneAlert: MilestoneAlert | null;
}

export function getProactiveContent(
  lang: "en" | "ko",
  childAgeYears?: number,
  stage?: DevelopmentalStage | null
): ProactiveContent {
  return {
    weeklyTip: getWeeklyTip(lang, childAgeYears),
    seasonalAlert: getCurrentSeasonalAlert(),
    milestoneAlert: getCurrentMilestoneAlert(childAgeYears, stage),
  };
}
