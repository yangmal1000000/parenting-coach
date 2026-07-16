import { Redis } from "@upstash/redis";
import { NextRequest, NextResponse } from "next/server";

// Lazy-init Redis client — only when env vars are present
let _redis: Redis | null = null;
function getRedis(): Redis | null {
  if (_redis) return _redis;
  const url = process.env.UPSTASH_REDIS_REST_URL;
  const token = process.env.UPSTASH_REDIS_REST_TOKEN;
  if (!url || !token) return null;
  _redis = new Redis({ url, token });
  return _redis;
}

export interface RateLimitConfig {
  /** Maximum requests allowed in the window */
  limit: number;
  /** Window duration in seconds */
  windowSeconds: number;
}

/**
 * Fixed-window rate limiter using Upstash Redis.
 * Falls back to allow-all when Redis is not configured (e.g. local dev).
 *
 * @returns `null` if allowed, or a `NextResponse` (429) if rate limit exceeded.
 */
export async function rateLimit(
  request: NextRequest,
  config: RateLimitConfig
): Promise<NextResponse | null> {
  const redis = getRedis();
  if (!redis) return null; // No Redis configured — allow in dev

  // Get IP from headers (Vercel sets these) or fall back to a generic identifier
  const ip =
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    request.headers.get("x-real-ip") ||
    "unknown";

  const key = `rl:${request.nextUrl?.pathname || "api"}:${ip}:${Math.floor(
    Date.now() / (config.windowSeconds * 1000)
  )}`;

  try {
    const count = await redis.incr(key);
    if (count === 1) {
      await redis.expire(key, config.windowSeconds);
    }
    if (count > config.limit) {
      return NextResponse.json(
        { error: "Too many requests. Please try again shortly." },
        {
          status: 429,
          headers: {
            "Retry-After": String(config.windowSeconds),
            "X-RateLimit-Limit": String(config.limit),
            "X-RateLimit-Remaining": "0",
          },
        }
      );
    }
    return null;
  } catch {
    // If Redis fails, allow the request through (fail-open)
    console.error("[rateLimit] Redis error — failing open");
    return null;
  }
}
