import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || "";
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "";

// Only create client if env vars are present (avoids build-time crash during prerender)
export const supabase = supabaseUrl && supabaseAnonKey
  ? createClient(supabaseUrl, supabaseAnonKey, {
      auth: {
        persistSession: true,
        autoRefreshToken: true,
      },
    })
  : null;

// === Types ===
export interface Profile {
  id?: string;
  display_name?: string;
  child_name?: string;
  child_age?: string;
  child_notes?: string;
  preferred_language?: string;
}

export interface CloudSession {
  id: string;
  user_id?: string;
  query: string;
  advice: string;
  sources?: string[];
  topic_category?: string;
  rating?: "up" | "down";
  bookmarked?: boolean;
  feedback_text?: string;
  language?: string;
  child_name?: string;
  child_age?: string;
  created_at: number;
}

// === Auth helpers ===
export async function signUp(email: string, password: string) {
  if (!supabase) return { data: null, error: { message: "Not configured" } as any };
  const { data, error } = await supabase.auth.signUp({ email, password });
  return { data, error };
}

export async function signIn(email: string, password: string) {
  if (!supabase) return { data: null, error: { message: "Not configured" } as any };
  const { data, error } = await supabase.auth.signInWithPassword({ email, password });
  return { data, error };
}

export async function signInWithGoogle() {
  if (!supabase) return;
  await supabase.auth.signInWithOAuth({
    provider: "google",
    options: { redirectTo: window.location.origin },
  });
}

export async function signInWithMagicLink(email: string) {
  if (!supabase) return { data: null, error: { message: "Not configured" } as any };
  const { data, error } = await supabase.auth.signInWithOtp({
    email,
    options: { emailRedirectTo: window.location.origin },
  });
  return { data, error };
}

export async function signOut() {
  if (supabase) await supabase.auth.signOut();
}

export async function getCurrentUser() {
  if (!supabase) return null;
  const { data: { user } } = await supabase.auth.getUser();
  return user;
}

// === Profile sync ===
export async function syncProfile(profile: Profile) {
  if (!supabase) return;
  const user = await getCurrentUser();
  if (!user) return;

  const { error } = await supabase
    .from("profiles")
    .upsert({
      id: user.id,
      child_name: profile.child_name,
      child_age: profile.child_age,
      child_notes: profile.child_notes,
      preferred_language: profile.preferred_language,
    });

  if (error) console.error("[supabase] Profile sync error:", error);
}

export async function loadProfile(): Promise<Profile | null> {
  if (!supabase) return null;
  const user = await getCurrentUser();
  if (!user) return null;

  const { data, error } = await supabase
    .from("profiles")
    .select("*")
    .eq("id", user.id)
    .single();

  if (error) return null;
  return data;
}

// === Session sync ===
export async function syncSession(session: CloudSession) {
  if (!supabase) return;
  const user = await getCurrentUser();
  if (!user) return;

  const { error } = await supabase.from("sessions").upsert({
    ...session,
    user_id: user.id,
    synced_at: new Date().toISOString(),
  });

  if (error) console.error("[supabase] Session sync error:", error);
}

export async function loadCloudSessions(): Promise<CloudSession[]> {
  if (!supabase) return [];
  const user = await getCurrentUser();
  if (!user) return [];

  const { data, error } = await supabase
    .from("sessions")
    .select("*")
    .eq("user_id", user.id)
    .order("created_at", { ascending: false })
    .limit(100);

  if (error) return [];
  return data || [];
}

export async function deleteCloudSession(sessionId: string) {
  if (!supabase) return;
  const user = await getCurrentUser();
  if (!user) return;

  await supabase.from("sessions").delete().eq("id", sessionId).eq("user_id", user.id);
}
