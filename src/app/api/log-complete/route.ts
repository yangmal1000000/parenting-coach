import { NextRequest } from "next/server";
import { updateQuery } from "@/lib/analytics";

// Called by the client after the streaming response completes
// Logs advice text, topic category, sources, and response time
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { queryId, advice, topicCategory, sources, responseMs } = body;

    if (!queryId) {
      return Response.json({ error: "Missing queryId" }, { status: 400 });
    }

    await updateQuery(queryId, {
      advice: advice?.slice(0, 2000),
      topicCategory,
      sources,
      responseMs,
    });

    return Response.json({ ok: true });
  } catch (error) {
    console.error("[API] Log-complete error:", error);
    return Response.json({ error: "Failed" }, { status: 500 });
  }
}
