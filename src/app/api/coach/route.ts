import { NextRequest } from "next/server";
import { generateAdviceStream, CoachingRequest } from "@/lib/coaching";
import { logQuery } from "@/lib/analytics";

function detectDevice(ua: string): string {
  if (/tablet|ipad/i.test(ua)) return "tablet";
  if (/mobile|iphone|android/i.test(ua)) return "mobile";
  return "desktop";
}

export async function POST(request: NextRequest) {
  try {
    const body: CoachingRequest = await request.json();

    if (!body.query || body.query.trim().length < 5) {
      return Response.json(
        { error: "Please describe your situation in more detail." },
        { status: 400 }
      );
    }

    // Generate a query ID for tracking
    const queryId = `q${Date.now()}`;
    const device = detectDevice(request.headers.get("user-agent") || "");

    // Log the query (fire and forget, don't block response)
    logQuery({
      id: queryId,
      query: body.query.trim().slice(0, 500),
      language: body.language || "en",
      childAge: body.childAge,
      device,
      userId: body.userId,
    }).catch(() => {});

    const stream = await generateAdviceStream(body);

    // Inject queryId into the stream metadata
    const encoder = new TextEncoder();
    const wrapperStream = new ReadableStream({
      async start(controller) {
        // Send queryId first
        controller.enqueue(
          encoder.encode(`data: ${JSON.stringify({ type: "queryId", queryId })}\n\n`)
        );
        // Pipe the rest
        const reader = stream.getReader();
        try {
          while (true) {
            const { done, value } = await reader.read();
            if (done) break;
            controller.enqueue(value);
          }
        } catch (e) {
          controller.error(e);
          return;
        }
        controller.close();
      },
    });

    return new Response(wrapperStream, {
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
