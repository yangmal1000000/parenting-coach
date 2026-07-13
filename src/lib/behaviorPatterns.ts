// AI Behavior Pattern Insights
// Analyzes session history to detect patterns, correlations, and generate insights

export interface BehaviorPattern {
  type: "trigger" | "correlation" | "streak" | "progress" | "concern" | "timing" | "info";
  severity: "info" | "positive" | "warning";
  titleEn: string;
  titleKo: string;
  descEn: string;
  descKo: string;
  icon: string;
  confidence: number; // 0-1
}

export interface SessionData {
  id: string;
  query: string;
  topicCategory?: string;
  rating?: "up" | "down" | null;
  createdAt: number;
  childAge?: string;
}

// === Pattern detection ===

export function detectBehaviorPatterns(sessions: SessionData[]): BehaviorPattern[] {
  const patterns: BehaviorPattern[] = [];

  if (sessions.length < 3) {
    patterns.push({
      type: "info",
      severity: "info",
      titleEn: "Keep logging to unlock insights",
      titleKo: "더 많은 기록으로 인사이트를 받아보세요",
      descEn: "Record at least 3 sessions to start seeing behavioral patterns.",
      descKo: "최소 3개의 상담 기록이 있으면 행동 패턴을 분석할 수 있습니다.",
      icon: "BarChart3",
      confidence: 1,
    });
    return patterns;
  }

  // 1. Trigger detection — recurring keywords/themes in queries
  const triggerPatterns = detectTriggers(sessions);
  patterns.push(...triggerPatterns);

  // 2. Topic correlation — topics that co-occur
  const correlations = detectCorrelations(sessions);
  patterns.push(...correlations);

  // 3. Activity streak
  const streak = detectStreak(sessions);
  if (streak) patterns.push(streak);

  // 4. Progress — improving topics
  const progress = detectProgress(sessions);
  patterns.push(...progress);

  // 5. Concerns — escalating topics
  const concerns = detectConcerns(sessions);
  patterns.push(...concerns);

  // 6. Timing patterns
  const timing = detectTimingPatterns(sessions);
  patterns.push(...timing);

  // 7. Rating patterns
  const ratingPattern = detectRatingPattern(sessions);
  if (ratingPattern) patterns.push(ratingPattern);

  // Sort by confidence descending
  return patterns.sort((a, b) => b.confidence - a.confidence);
}

// --- Trigger detection ---
function detectTriggers(sessions: SessionData[]): BehaviorPattern[] {
  const patterns: BehaviorPattern[] = [];
  const keywordMap: Record<string, { count: number; topics: Set<string> }> = {};

  const triggerKeywords = [
    "morning", "bedtime", "dinner", "school", "shop", "store", "screen", "ipad", "phone",
    "sibling", "brother", "sister", "no", "stop", "won't", "refuse", "hit", "cry", "scream",
    "transition", "leave", "separation", "tired", "hungry", "overtired",
  ];

  for (const sess of sessions) {
    const text = (sess.query || "").toLowerCase();
    for (const kw of triggerKeywords) {
      if (text.includes(kw)) {
        if (!keywordMap[kw]) keywordMap[kw] = { count: 0, topics: new Set() };
        keywordMap[kw].count++;
        if (sess.topicCategory) keywordMap[kw].topics.add(sess.topicCategory);
      }
    }
  }

  // Find recurring triggers (appears in 3+ sessions)
  const recurring = Object.entries(keywordMap)
    .filter(([, data]) => data.count >= 3)
    .sort((a, b) => b[1].count - a[1].count);

  if (recurring.length > 0) {
    const [topKw, topData] = recurring[0];
    const topicStr = Array.from(topData.topics).slice(0, 2).join(", ");
    patterns.push({
      type: "trigger",
      severity: "warning",
      titleEn: `Recurring trigger: "${topKw}"`,
      titleKo: `반복되는 상황: "${topKw}"`,
      descEn: `This keyword appears in ${topData.count} sessions${topicStr ? `, linked to ${topicStr}` : ""}. Consider preparing a consistent response strategy.`,
      descKo: `이 키워드가 ${topData.count}번의 상담에 나타났습니다${topicStr ? ` (${topicStr} 관련)` : ""}. 일관된 대응 전략을 준비해 보세요.`,
      icon: "RefreshCw",
      confidence: Math.min(topData.count / sessions.length + 0.3, 0.95),
    });
  }

  return patterns;
}

// --- Topic correlation ---
function detectCorrelations(sessions: SessionData[]): BehaviorPattern[] {
  const patterns: BehaviorPattern[] = [];

  // Group sessions by day
  const dayMap: Record<string, Set<string>> = {};
  for (const sess of sessions) {
    if (!sess.topicCategory) continue;
    const day = new Date(sess.createdAt).toISOString().slice(0, 10);
    if (!dayMap[day]) dayMap[day] = new Set();
    dayMap[day].add(sess.topicCategory);
  }

  // Find co-occurring topic pairs
  const pairCount: Record<string, number> = {};
  for (const topics of Object.values(dayMap)) {
    const arr = Array.from(topics);
    for (let i = 0; i < arr.length; i++) {
      for (let j = i + 1; j < arr.length; j++) {
        const pair = [arr[i], arr[j]].sort().join(" + ");
        pairCount[pair] = (pairCount[pair] || 0) + 1;
      }
    }
  }

  const topPairs = Object.entries(pairCount)
    .filter(([, count]) => count >= 2)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 1);

  if (topPairs.length > 0) {
    const [pair, count] = topPairs[0];
    patterns.push({
      type: "correlation",
      severity: "info",
      titleEn: `Topics often appear together: ${pair}`,
      titleKo: `자주 함께 나타나는 주제: ${pair}`,
      descEn: `These topics co-occurred ${count} times on the same day. Addressing one may help with the other.`,
      descKo: `같은 날 ${count}번 함께 나타났습니다. 한 가지를 해결하면 다른 문제도 도움이 될 수 있습니다.`,
      icon: "Link2",
      confidence: 0.7,
    });
  }

  return patterns;
}

// --- Streak detection ---
function detectStreak(sessions: SessionData[]): BehaviorPattern | null {
  if (sessions.length < 2) return null;

  const days = new Set(sessions.map(s => new Date(s.createdAt).toISOString().slice(0, 10)));
  const sortedDays = Array.from(days).sort().reverse();

  // Count consecutive days from today backwards
  let streak = 0;
  const today = new Date().toISOString().slice(0, 10);
  const yesterday = new Date(Date.now() - 86400000).toISOString().slice(0, 10);

  if (days.has(today) || days.has(yesterday)) {
    const cursor = days.has(today) ? new Date() : new Date(Date.now() - 86400000);
    while (true) {
      const dayStr = cursor.toISOString().slice(0, 10);
      if (days.has(dayStr)) {
        streak++;
        cursor.setDate(cursor.getDate() - 1);
      } else {
        break;
      }
    }
  }

  if (streak >= 2) {
    return {
      type: "streak",
      severity: "positive",
      titleEn: `${streak}-day engagement streak! 🔥`,
      titleKo: `${streak}일 연속 기록! 🔥`,
      descEn: streak >= 5
        ? "Consistent tracking helps identify patterns faster. Keep it up!"
        : "You're building a habit. Regular check-ins lead to better insights.",
      descKo: streak >= 5
        ? "꾸준한 기록이 패턴 파악에 도움이 됩니다. 계속해 보세요!"
        : "습관을 만들어가고 있습니다. 정기적인 기록이 더 좋은 인사이트로 이어집니다.",
      icon: "Flame",
      confidence: 0.9,
    };
  }

  return null;
}

// --- Progress detection ---
function detectProgress(sessions: SessionData[]): BehaviorPattern[] {
  const patterns: BehaviorPattern[] = [];
  const now = Date.now();
  const thisMonth = new Date().toISOString().slice(0, 7);
  const lastMonthDate = new Date();
  lastMonthDate.setMonth(lastMonthDate.getMonth() - 1);
  const lastMonth = lastMonthDate.toISOString().slice(0, 7);

  const topicCount: Record<string, { thisM: number; lastM: number }> = {};

  for (const sess of sessions) {
    if (!sess.topicCategory) continue;
    const m = new Date(sess.createdAt).toISOString().slice(0, 7);
    if (!topicCount[sess.topicCategory]) topicCount[sess.topicCategory] = { thisM: 0, lastM: 0 };
    if (m === thisMonth) topicCount[sess.topicCategory].thisM++;
    if (m === lastMonth) topicCount[sess.topicCategory].lastM++;
  }

  const improving = Object.entries(topicCount)
    .filter(([, c]) => c.lastM >= 2 && c.thisM < c.lastM)
    .sort((a, b) => (b[1].lastM - b[1].thisM) - (a[1].lastM - a[1].thisM));

  if (improving.length > 0) {
    const [topic, counts] = improving[0];
    patterns.push({
      type: "progress",
      severity: "positive",
      titleEn: `Improving: fewer "${topic}" sessions`,
      titleKo: `호전: "${topic}" 상담 감소`,
      descEn: `Down from ${counts.lastM} last month to ${counts.thisM} this month. Your strategies may be working!`,
      descKo: `지난달 ${counts.lastM}건에서 이번달 ${counts.thisM}건으로 감소했습니다. 전략이 효과가 있는 것 같아요!`,
      icon: "TrendingUp",
      confidence: 0.8,
    });
  }

  return patterns;
}

// --- Concern detection ---
function detectConcerns(sessions: SessionData[]): BehaviorPattern[] {
  const patterns: BehaviorPattern[] = [];
  const thisMonth = new Date().toISOString().slice(0, 7);
  const lastMonthDate = new Date();
  lastMonthDate.setMonth(lastMonthDate.getMonth() - 1);
  const lastMonth = lastMonthDate.toISOString().slice(0, 7);

  const topicCount: Record<string, { thisM: number; lastM: number }> = {};

  for (const sess of sessions) {
    if (!sess.topicCategory) continue;
    const m = new Date(sess.createdAt).toISOString().slice(0, 7);
    if (!topicCount[sess.topicCategory]) topicCount[sess.topicCategory] = { thisM: 0, lastM: 0 };
    if (m === thisMonth) topicCount[sess.topicCategory].thisM++;
    if (m === lastMonth) topicCount[sess.topicCategory].lastM++;
  }

  const escalating = Object.entries(topicCount)
    .filter(([, c]) => c.lastM >= 1 && c.thisM > c.lastM)
    .sort((a, b) => (b[1].thisM - b[1].lastM) - (a[1].thisM - a[1].lastM));

  if (escalating.length > 0) {
    const [topic, counts] = escalating[0];
    patterns.push({
      type: "concern",
      severity: "warning",
      titleEn: `Increasing: more "${topic}" sessions`,
      titleKo: `주의: "${topic}" 상담 증가`,
      descEn: `Up from ${counts.lastM} last month to ${counts.thisM} this month. Consider exploring new strategies or a deeper dive.`,
      descKo: `지난달 ${counts.lastM}건에서 이번달 ${counts.thisM}건으로 증가했습니다. 새로운 전략이나 심층 분석을 고려해 보세요.`,
      icon: "AlertTriangle",
      confidence: 0.75,
    });
  }

  return patterns;
}

// --- Timing patterns ---
function detectTimingPatterns(sessions: SessionData[]): BehaviorPattern[] {
  const patterns: BehaviorPattern[] = [];

  // Group by hour bucket
  const hourBuckets: Record<string, number> = {
    "early morning (5-8)": 0,
    "morning (8-12)": 0,
    "afternoon (12-17)": 0,
    "evening (17-20)": 0,
    "night (20-24)": 0,
    "late night (0-5)": 0,
  };

  for (const sess of sessions) {
    const h = new Date(sess.createdAt).getHours();
    if (h >= 5 && h < 8) hourBuckets["early morning (5-8)"]++;
    else if (h >= 8 && h < 12) hourBuckets["morning (8-12)"]++;
    else if (h >= 12 && h < 17) hourBuckets["afternoon (12-17)"]++;
    else if (h >= 17 && h < 20) hourBuckets["evening (17-20)"]++;
    else if (h >= 20 && h < 24) hourBuckets["night (20-24)"]++;
    else hourBuckets["late night (0-5)"]++;
  }

  const sorted = Object.entries(hourBuckets).filter(([, c]) => c > 0).sort((a, b) => b[1] - a[1]);

  if (sorted.length > 0 && sorted[0][1] >= 3) {
    const [peak, count] = sorted[0];
    const percent = Math.round((count / sessions.length) * 100);
    if (percent >= 35) {
      patterns.push({
        type: "timing",
        severity: "info",
        titleEn: `Peak time: ${peak}`,
        titleKo: `최다 이용 시간: ${peak}`,
        descEn: `${percent}% of your sessions happen during this time. Consider preparing strategies before your peak window.`,
        descKo: `상담의 ${percent}%가 이 시간대에 집중되어 있습니다. 최다 이용 시간 전에 전략을 준비해 보세요.`,
        icon: "Clock",
        confidence: 0.85,
      });
    }
  }

  return patterns;
}

// --- Rating pattern ---
function detectRatingPattern(sessions: SessionData[]): BehaviorPattern | null {
  const rated = sessions.filter(s => s.rating);
  if (rated.length < 3) return null;

  const positive = rated.filter(s => s.rating === "up").length;
  const rate = Math.round((positive / rated.length) * 100);

  if (rate >= 70) {
    return {
      type: "progress",
      severity: "positive",
      titleEn: `Advice is working: ${rate}% positive`,
      titleKo: `조언이 효과적: ${rate}% 긍정 평가`,
      descEn: "You're finding the advice helpful! Keep applying strategies and tracking results.",
      descKo: "조언이 도움이 되고 있습니다! 전략을 계속 적용하고 결과를 기록하세요.",
      icon: "Heart",
      confidence: 0.9,
    };
  } else if (rate < 40) {
    return {
      type: "concern",
      severity: "warning",
      titleEn: `Low helpfulness: ${rate}% positive`,
      titleKo: `조언 효과 낮음: ${rate}% 긍정 평가`,
      descEn: "Advice hasn't been landing well. Try providing more detail in your queries for better results.",
      descKo: "조언이 큰 도움이 되지 않았습니다. 질문에 더 자세한 내용을 포함해 보세요.",
      icon: "MessageCircle",
      confidence: 0.8,
    };
  }

  return null;
}
