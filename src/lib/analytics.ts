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
  advice?: string;          // NEW: actual advice text
  responseMs?: number;      // NEW: time to generate
  device?: string;          // NEW: mobile/desktop/tablet
  userId?: string;          // for follow-up tracking
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
export async function logQuery(log: Omit<QueryLog, "timestamp"> & { id: string }) {
  const entry: QueryLog = { ...log, timestamp: Date.now() };
  try {
    await redis.lpush("queries", JSON.stringify(entry));
    await redis.incr("total_queries");
    await redis.hincrby("stats", `lang_${log.language}`, 1);
    if (log.topicCategory) {
      await redis.hincrby("stats", `topic_${log.topicCategory}`, 1);
    }
    if (log.device) {
      await redis.hincrby("stats", `device_${log.device}`, 1);
    }
    // Track unique users
    if (log.userId) {
      await redis.sadd("users", log.userId);
    }
  } catch (e) {
    console.error("[analytics] Failed to log query:", e);
  }
}

// Update a query with advice text, topic, sources, and response time after stream completes
export async function updateQuery(queryId: string, updates: Partial<Pick<QueryLog, "advice" | "topicCategory" | "sources" | "responseMs">>) {
  try {
    // Get recent queries, find and update the one matching queryId
    const recent = await redis.lrange<string>("queries", 0, 10);
    for (const s of recent) {
      const entry: QueryLog = typeof s === "string" ? JSON.parse(s) : s;
      if (entry.id === queryId) {
        const updated = { ...entry, ...updates };
        // Can't update in-place in a list, so we just log a companion record
        await redis.lpush("query_details", JSON.stringify(updated));
        break;
      }
    }
  } catch (e) {
    console.error("[analytics] Failed to update query:", e);
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
    const [totalQueries, , recentQueries, recentFeedback, recentDetails, uniqueUsers] = await Promise.all([
      redis.get<number>("total_queries") ?? 0,
      (await redis.hgetall<Record<string, number>>("stats")) ?? {},
      redis.lrange<string>("queries", 0, 199),
      redis.lrange<string>("feedback", 0, 49),
      redis.lrange<string>("query_details", 0, 199),
      redis.scard("users"),
    ]);

    // Parse queries
    const queries: QueryLog[] = recentQueries.map(s => {
      try { return typeof s === "string" ? JSON.parse(s) : s; } catch { return null; }
    }).filter(Boolean);

    // Parse details (advice text, response time, etc.)
    const detailsMap = new Map<string, QueryLog>();
    for (const s of recentDetails) {
      try {
        const d: QueryLog = typeof s === "string" ? JSON.parse(s) : s;
        if (d.id) detailsMap.set(d.id, d);
      } catch {}
    }

    // Merge details into queries
    const mergedQueries = queries.map(q => {
      const detail = detailsMap.get(q.id);
      return detail ? { ...q, ...detail } : q;
    });

    const feedback: FeedbackLog[] = recentFeedback.map(s => {
      try { return typeof s === "string" ? JSON.parse(s) : s; } catch { return null; }
    }).filter(Boolean);

    // Filter by date range
    const cutoff = Date.now() - days * 24 * 60 * 60 * 1000;
    const recentInPeriod = mergedQueries.filter(q => q.timestamp >= cutoff);

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

    // Device breakdown
    const devices: Record<string, number> = {};
    for (const q of recentInPeriod) {
      if (q.device) {
        devices[q.device] = (devices[q.device] || 0) + 1;
      }
    }

    // Response time stats
    const responseTimes = recentInPeriod
      .filter(q => q.responseMs)
      .map(q => q.responseMs as number);
    const avgResponseMs = responseTimes.length > 0
      ? Math.round(responseTimes.reduce((a, b) => a + b, 0) / responseTimes.length)
      : null;

    // Follow-up rate: users who asked >1 query within 10 min
    const userQueryTimes: Record<string, number[]> = {};
    for (const q of recentInPeriod) {
      if (q.userId) {
        if (!userQueryTimes[q.userId]) userQueryTimes[q.userId] = [];
        userQueryTimes[q.userId].push(q.timestamp);
      }
    }
    let followUpUsers = 0;
    let totalUsersWithId = 0;
    for (const [, times] of Object.entries(userQueryTimes)) {
      if (times.length < 2) continue;
      totalUsersWithId++;
      times.sort((a, b) => a - b);
      for (let i = 1; i < times.length; i++) {
        if (times[i] - times[i - 1] < 10 * 60 * 1000) {
          followUpUsers++;
          break;
        }
      }
    }
    const followUpRate = totalUsersWithId > 0 ? Math.round((followUpUsers / totalUsersWithId) * 100) : null;

    // Feedback summary
    const upCount = feedback.filter(f => f.rating === "up").length;
    const downCount = feedback.filter(f => f.rating === "down").length;

    return {
      totalQueries,
      recentCount: recentInPeriod.length,
      uniqueUsers,
      daily,
      languages,
      topics,
      devices,
      avgResponseMs,
      followUpRate,
      queries: recentInPeriod.reverse(),
      feedback: feedback.reverse(),
      feedbackSummary: { up: upCount, down: downCount, total: upCount + downCount },
    };
  } catch (e) {
    console.error("[analytics] Failed to get analytics:", e);
    return null;
  }
}
