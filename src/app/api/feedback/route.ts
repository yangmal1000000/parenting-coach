import { NextRequest } from "next/server";
import { logFeedback } from "@/lib/analytics";
import { rateLimit } from "@/lib/rateLimit";

export async function POST(request: NextRequest) {
  const limited = await rateLimit(request, { limit: 20, windowSeconds: 60 });
  if (limited) return limited;

  try {
    const body = await request.json();
    const { queryId, query, rating, feedbackText, language } = body;

    if (!rating || (rating !== "up" && rating !== "down")) {
      return Response.json({ error: "Invalid rating" }, { status: 400 });
    }

    await logFeedback({
      queryId: queryId || "unknown",
      query: (query || "").slice(0, 500),
      rating,
      feedbackText: feedbackText?.slice(0, 1000),
      language: language || "en",
    });

    return Response.json({ ok: true });
  } catch (error) {
    console.error("[API] Feedback error:", error);
    return Response.json({ error: "Failed to log feedback" }, { status: 500 });
  }
}
