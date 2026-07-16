// Family management functions — web
import { supabase as supabaseClient, getCurrentUser } from "./supabase";
import type { Family, FamilyMember, FamilyInvite, FamilyInfo, FamilyRole } from "./familyTypes";

const supabase = supabaseClient!;

// Get the current user's family info
export async function getMyFamily(): Promise<FamilyInfo | null> {
  const user = await getCurrentUser();
  if (!user) return null;

  const { data, error } = await supabase.rpc("get_user_family");
  if (error || !data || data.length === 0) return null;

  const row = data[0];
  return {
    family_id: row.family_id,
    family_name: row.family_name,
    role: row.role,
    member_count: row.member_count,
  };
}

// Get all members of the user's family
export async function getFamilyMembers(familyId: string): Promise<FamilyMember[]> {
  const { data, error } = await supabase
    .from("family_members")
    .select("*")
    .eq("family_id", familyId)
    .eq("status", "accepted")
    .order("joined_at", { ascending: true });

  if (error || !data) return [];

  // Fetch display names from profiles
  const userIds = data.filter((m: FamilyMember) => m.user_id).map((m: FamilyMember) => m.user_id) as string[];
  let profileMap: Record<string, { display_name?: string; child_name?: string }> = {};

  if (userIds.length > 0) {
    const { data: profiles } = await supabase
      .from("profiles")
      .select("id, display_name, child_name")
      .in("id", userIds);
    if (profiles) {
      profileMap = Object.fromEntries(profiles.map((p: { id: string; display_name?: string; child_name?: string }) => [p.id, p]));
    }
  }

  return data.map((m: FamilyMember) => ({
    ...m,
    display_name: m.user_id ? profileMap[m.user_id]?.display_name : undefined,
    child_name: m.user_id ? profileMap[m.user_id]?.child_name : undefined,
  }));
}

// Invite a co-parent by email
export async function inviteCoParent(
  familyId: string,
  email: string,
  role: FamilyRole = "co-parent"
): Promise<{ inviteCode: string | null; error: string | null }> {
  const user = await getCurrentUser();
  if (!user) return { inviteCode: null, error: "Not authenticated" };

  const { data, error } = await supabase
    .from("family_invites")
    .insert({
      family_id: familyId,
      invited_by: user.id,
      invited_email: email,
      role,
      status: "active",
    })
    .select("invite_code")
    .single();

  if (error) return { inviteCode: null, error: error.message };
  return { inviteCode: data.invite_code, error: null };
}

// Accept an invite by code
export async function acceptInvite(
  inviteCode: string
): Promise<{ success: boolean; error: string | null }> {
  const user = await getCurrentUser();
  if (!user) return { success: false, error: "Not authenticated" };

  // Fetch the invite
  const { data: invite, error: inviteError } = await supabase
    .from("family_invites")
    .select("*")
    .eq("invite_code", inviteCode)
    .eq("status", "active")
    .single();

  if (inviteError || !invite) {
    return { success: false, error: "Invalid or expired invite code" };
  }

  if (new Date(invite.expires_at) < new Date()) {
    return { success: false, error: "This invite has expired" };
  }

  // Check if already a member of this family
  const { data: existing } = await supabase
    .from("family_members")
    .select("id")
    .eq("family_id", invite.family_id)
    .eq("user_id", user.id)
    .single();

  if (existing) {
    return { success: false, error: "You are already a member of this family" };
  }

  // Add as family member
  const { error: memberError } = await supabase.from("family_members").insert({
    family_id: invite.family_id,
    user_id: user.id,
    role: invite.role,
    invited_by: invite.invited_by,
    invited_email: invite.invited_email,
    status: "accepted",
    joined_at: new Date().toISOString(),
  });

  if (memberError) return { success: false, error: memberError.message };

  // Mark invite as accepted
  await supabase
    .from("family_invites")
    .update({ status: "accepted" })
    .eq("id", invite.id);

  // Link user's profile to the family
  await supabase
    .from("profiles")
    .update({ family_id: invite.family_id })
    .eq("id", user.id);

  return { success: true, error: null };
}

// Get pending invites sent by the user
export async function getPendingInvites(familyId: string): Promise<FamilyInvite[]> {
  const { data, error } = await supabase
    .from("family_invites")
    .select("*")
    .eq("family_id", familyId)
    .eq("status", "active")
    .order("created_at", { ascending: false });

  if (error || !data) return [];
  return data;
}

// Revoke an invite
export async function revokeInvite(inviteId: string): Promise<void> {
  await supabase
    .from("family_invites")
    .update({ status: "revoked" })
    .eq("id", inviteId);
}

// Remove a family member
export async function removeFamilyMember(memberId: string): Promise<void> {
  await supabase.from("family_members").delete().eq("id", memberId);
}

// Leave a family
export async function leaveFamily(familyId: string): Promise<void> {
  const user = await getCurrentUser();
  if (!user) return;
  await supabase
    .from("family_members")
    .delete()
    .eq("family_id", familyId)
    .eq("user_id", user.id);
}

// Get shared sessions from family members
export async function getSharedSessions(familyId: string): Promise<Array<{ id: string; user_id?: string; query?: string; topic_category?: string; created_at: string; [key: string]: unknown }>> {
  const { data, error } = await supabase
    .from("sessions")
    .select("*")
    .eq("family_id", familyId)
    .eq("is_shared", true)
    .order("created_at", { ascending: false })
    .limit(50);

  if (error || !data) return [];
  return data;
}

// Share a session with family
export async function shareSession(sessionId: string, familyId: string): Promise<void> {
  await supabase
    .from("sessions")
    .update({ family_id: familyId, is_shared: true })
    .eq("id", sessionId);
}

// Unshare a session
export async function unshareSession(sessionId: string): Promise<void> {
  await supabase
    .from("sessions")
    .update({ is_shared: false })
    .eq("id", sessionId);
}
