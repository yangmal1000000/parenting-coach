import { NextRequest } from "next/server";
import { generateAdviceStream, CoachingRequest } from "@/lib/coaching";
import { logQuery } from "@/lib/analytics";

export async function POST(request: NextRequest) {
  try {
    const body: CoachingRequest = await request.json();

    if (!body.query || body.query.trim().length < 5) {
      return Response.json(
        { error: "Please describe your situation in more detail." },
        { status: 400 }
      );
    }

    // Log the query (fire and forget, don't block response)
    logQuery({
      query: body.query.trim().slice(0, 500),
      language: body.language || "en",
      childAge: body.childAge,
    }).catch(() => {});

    const stream = await generateAdviceStream(body);
    return new Response(stream, {
      headers: {
        "Content-Type": "text/event-stream",
        "Cache-Control": "no-cache",
        Connection: "keep-alive",
      },
    });
  } catch (error) {
    console.error("[API] Coaching error:", error);
    return Response.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}
