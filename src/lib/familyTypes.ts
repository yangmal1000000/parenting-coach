// Family / Co-Parent shared types
// Used by both web and mobile

export type FamilyRole = "parent" | "co-parent" | "caregiver";
export type MemberStatus = "pending" | "accepted" | "declined";
export type InviteStatus = "active" | "accepted" | "expired" | "revoked";

export interface Family {
  id: string;
  name: string;
  created_by: string;
  created_at: string;
  updated_at: string;
}

export interface FamilyMember {
  id: string;
  family_id: string;
  user_id: string | null;
  role: FamilyRole;
  invited_by: string;
  invited_email: string | null;
  status: MemberStatus;
  joined_at: string | null;
  created_at: string;
  display_name?: string;
  child_name?: string;
}

export interface FamilyInvite {
  id: string;
  family_id: string;
  invited_by: string;
  invited_email: string | null;
  invite_code: string;
  role: FamilyRole;
  status: InviteStatus;
  expires_at: string;
  created_at: string;
}

export interface FamilyInfo {
  family_id: string;
  family_name: string;
  role: FamilyRole;
  member_count: number;
}

export const ROLE_LABELS: Record<FamilyRole, { en: string; ko: string }> = {
  parent: { en: "Parent", ko: "부모" },
  "co-parent": { en: "Co-Parent", ko: "공동 양육자" },
  caregiver: { en: "Caregiver", ko: "돌보미" },
};
