import { NextRequest } from "next/server";
import { generateAdviceStream, CoachingRequest } from "@/lib/coaching";

export async function POST(request: NextRequest) {
  try {
    const body: CoachingRequest = await request.json();

    if (!body.query || body.query.trim().length < 5) {
      return Response.json(
        { error: "Please describe your situation in more detail." },
        { status: 400 }
      );
    }

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
