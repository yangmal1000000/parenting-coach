import { NextRequest } from "next/server";
import { retrieveRelevantChunks } from "@/lib/coaching";
import { rateLimit } from "@/lib/rateLimit";

export async function POST(request: NextRequest) {
  const limited = await rateLimit(request, { limit: 20, windowSeconds: 60 });
  if (limited) return limited;

  try {
    const { tool, args } = await request.json();

    if (tool === "get_parenting_advice") {
      const query: string = args?.query || "";
      if (query.trim().length < 3) {
        return Response.json({
          strategies: [],
          summary: "Query too short for meaningful retrieval.",
        });
      }

      const retrieved = await retrieveRelevantChunks(query, 6);

      return Response.json({
        strategies: retrieved.map((r) => ({
          source: r.chunk.source,
          sourceDetails: r.chunk.sourceDetails,
          category: r.chunk.category,
          technique: r.chunk.text,
          relevanceScore: Number(r.score.toFixed(4)),
        })),
        summary: `${retrieved.length} evidence-based strategies retrieved from ${new Set(retrieved.map((r) => r.chunk.source)).size} sources`,
      });
    }

    return Response.json({ error: "Unknown tool" }, { status: 400 });
  } catch (error) {
    console.error("[voice-tools] Error:", error);
    return Response.json(
      { error: "Tool execution failed" },
      { status: 500 }
    );
  }
}
