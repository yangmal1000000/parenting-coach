import { NextRequest } from "next/server";
import { getAnalytics } from "@/lib/analytics";

// Admin password — MUST be set via env var, no insecure fallback
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD;
if (!ADMIN_PASSWORD && process.env.NODE_ENV === "production") {
  console.warn("[ADMIN] ADMIN_PASSWORD env var not set — admin dashboard will be inaccessible");
}

export async function GET(request: NextRequest) {
  try {
    const auth = request.headers.get("authorization");
    const password = auth?.replace("Bearer ", "");

    if (password !== ADMIN_PASSWORD) {
      return Response.json({ error: "Unauthorized" }, { status: 401 });
    }

    const days = parseInt(new URL(request.url).searchParams.get("days") || "7");
    const data = await getAnalytics(days);

    if (!data) {
      return Response.json({ error: "Failed to fetch analytics" }, { status: 500 });
    }

    return Response.json(data);
  } catch (error) {
    console.error("[API] Admin error:", error);
    return Response.json({ error: "Server error" }, { status: 500 });
  }
}
