import { Redis } from "@upstash/redis";

const redis = new Redis({
  url: process.env.UPSTASH_REDIS_REST_URL || "",
  token: process.env.UPSTASH_REDIS_REST_TOKEN || "",
});

export interface QueryLog {
  id: string;
  query: string;
  language: string;
  childAge?: string;
  topicCategory?: string;
  sources?: string[];
  timestamp: number;
}

export interface FeedbackLog {
  queryId: string;
  query: string;
  rating: "up" | "down";
  feedbackText?: string;
  language: string;
  timestamp: number;
}

// Log a query when a user asks for advice
export async function logQuery(log: Omit<QueryLog, "id" | "timestamp">) {
  const id = `q${Date.now()}`;
  const entry: QueryLog = { ...log, id, timestamp: Date.now() };
  try {
    // Push to a list
    await redis.lpush("queries", JSON.stringify(entry));
    // Also keep a count
    await redis.incr("total_queries");
    // Track by language
    await redis.hincrby("stats", `lang_${log.language}`, 1);
    // Track by topic
    if (log.topicCategory) {
      await redis.hincrby("stats", `topic_${log.topicCategory}`, 1);
    }
  } catch (e) {
    console.error("[analytics] Failed to log query:", e);
  }
}

// Log feedback (thumbs up/down)
export async function logFeedback(log: Omit<FeedbackLog, "timestamp">) {
  const entry: FeedbackLog = { ...log, timestamp: Date.now() };
  try {
    await redis.lpush("feedback", JSON.stringify(entry));
    await redis.hincrby("stats", `feedback_${log.rating}`, 1);
  } catch (e) {
    console.error("[analytics] Failed to log feedback:", e);
  }
}

// Get analytics data for admin dashboard
export async function getAnalytics(days = 7) {
  try {
    const [totalQueries, rawStats, recentQueries, recentFeedback] = await Promise.all([
      redis.get<number>("total_queries") || 0,
      redis.hgetall<Record<string, number>>("stats") || {},
      redis.lrange<string>("queries", 0, 199),
      redis.lrange<string>("feedback", 0, 49),
    ]);

    const queries: QueryLog[] = recentQueries.map(s => {
      try { return JSON.parse(s); } catch { return null; }
    }).filter(Boolean);

    const feedback: FeedbackLog[] = recentFeedback.map(s => {
      try { return JSON.parse(s); } catch { return null; }
    }).filter(Boolean);

    // Filter queries by date range
    const cutoff = Date.now() - days * 24 * 60 * 60 * 1000;
    const recentInPeriod = queries.filter(q => q.timestamp >= cutoff);

    // Daily breakdown
    const daily: Record<string, number> = {};
    for (const q of recentInPeriod) {
      const day = new Date(q.timestamp).toISOString().split("T")[0];
      daily[day] = (daily[day] || 0) + 1;
    }

    // Language breakdown
    const languages: Record<string, number> = {};
    for (const q of recentInPeriod) {
      languages[q.language] = (languages[q.language] || 0) + 1;
    }

    // Topic breakdown
    const topics: Record<string, number> = {};
    for (const q of recentInPeriod) {
      if (q.topicCategory) {
        topics[q.topicCategory] = (topics[q.topicCategory] || 0) + 1;
      }
    }

    // Feedback summary
    const upCount = feedback.filter(f => f.rating === "up").length;
    const downCount = feedback.filter(f => f.rating === "down").length;

    return {
      totalQueries,
      recentCount: recentInPeriod.length,
      daily,
      languages,
      topics,
      queries: recentInPeriod.reverse(),
      feedback: feedback.reverse(),
      feedbackSummary: { up: upCount, down: downCount, total: upCount + downCount },
    };
  } catch (e) {
    console.error("[analytics] Failed to get analytics:", e);
    return null;
  }
}
