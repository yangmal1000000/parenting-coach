import { NextRequest } from "next/server";
import { rateLimit } from "@/lib/rateLimit";

// Simple in-memory store for email signups
// In production, this would go to Supabase or a mailing list service
const emailSignups = new Set<string>();

export async function POST(request: NextRequest) {
  const limited = await rateLimit(request, { limit: 5, windowSeconds: 60 });
  if (limited) return limited;

  try {
    const { email } = await request.json();

    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return Response.json({ error: "Valid email required" }, { status: 400 });
    }

    // Store email (deduped)
    emailSignups.add(email.toLowerCase());

    // TODO: integrate with Supabase notifications table or mailing list
    console.log(`[notify] New signup: ${email}`);

    return Response.json({ ok: true, message: "You're on the list!" });
  } catch {
    return Response.json({ error: "Something went wrong" }, { status: 500 });
  }
}
