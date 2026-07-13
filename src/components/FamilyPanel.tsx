"use client";

import React, { useState, useEffect, useCallback } from "react";
import { Users, Mail, Copy, Check, X, UserPlus, LogOut } from "lucide-react";
import type { Language } from "@/lib/i18n";
import type { FamilyInfo, FamilyMember, FamilyInvite, FamilyRole } from "@/lib/familyTypes";
import { ROLE_LABELS } from "@/lib/familyTypes";
import {
  getMyFamily,
  getFamilyMembers,
  inviteCoParent,
  acceptInvite,
  getPendingInvites,
  revokeInvite,
  removeFamilyMember,
  leaveFamily,
} from "@/lib/family";

const s = {
  title: "Family Access",
  subtitle: "Share sessions, child profiles, and action plans",
  members: "Members",
  invite: "Invite Co-Parent",
  invitePlaceholder: "their@email.com",
  sendInvite: "Send Invite",
  pendingInvites: "Pending Invites",
  acceptInvite: "Accept Invite",
  acceptInvitePlaceholder: "Enter invite code",
  accept: "Accept",
  revoke: "Revoke",
  remove: "Remove",
  leaveFamily: "Leave Family",
  noMembers: "No family members yet",
  noInvites: "No pending invites",
  inviteSent: "Invite sent! Share this code:",
  inviteError: "Failed to send invite",
  accepted: "Joined family successfully!",
  acceptError: "Failed to accept invite",
  confirmRemove: "Remove this family member?",
  confirmLeave: "Leave this family? You'll lose access to shared data.",
  you: "You",
  loading: "Loading...",
  copy: "Copy",
  copied: "Copied!",
  role: "Role",
};

const ko = {
  title: "가족 공유",
  subtitle: "상담 기록, 아이 프로필, 실행 계획 공유",
  members: "구성원",
  invite: "공동 양육자 초대",
  invitePlaceholder: "their@email.com",
  sendInvite: "초대 보내기",
  pendingInvites: "대기 중인 초대",
  acceptInvite: "초대 수락",
  acceptInvitePlaceholder: "초대 코드 입력",
  accept: "수락",
  revoke: "취소",
  remove: "제거",
  leaveFamily: "가족 나가기",
  noMembers: "아직 가족 구성원이 없습니다",
  noInvites: "대기 중인 초대가 없습니다",
  inviteSent: "초대 완료! 이 코드를 공유하세요:",
  inviteError: "초대 실패",
  accepted: "가족에 참여했습니다!",
  acceptError: "초대 수락 실패",
  confirmRemove: "이 구성원을 제거하시겠습니까?",
  confirmLeave: "가족을 나가시겠습니까? 공유 데이터 접근이 제한됩니다.",
  you: "나",
  loading: "로딩 중...",
  copy: "복사",
  copied: "복사됨!",
  role: "역할",
};

interface Props {
  lang: Language;
}

export default function FamilyPanel({ lang }: Props) {
  const str = lang === "ko" ? ko : s;
  const [family, setFamily] = useState<FamilyInfo | null>(null);
  const [members, setMembers] = useState<FamilyMember[]>([]);
  const [invites, setInvites] = useState<FamilyInvite[]>([]);
  const [loading, setLoading] = useState(true);
  const [inviteEmail, setInviteEmail] = useState("");
  const [inviteRole, setInviteRole] = useState<FamilyRole>("co-parent");
  const [inviteCode, setInviteCode] = useState<string | null>(null);
  const [inviteCodeInput, setInviteCodeInput] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [copied, setCopied] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const loadData = useCallback(async () => {
    setLoading(true);
    const f = await getMyFamily();
    setFamily(f);
    if (f) {
      const [m, inv] = await Promise.all([
        getFamilyMembers(f.family_id),
        getPendingInvites(f.family_id),
      ]);
      setMembers(m);
      setInvites(inv);
    }
    setLoading(false);
  }, []);

  useEffect(() => {
    loadData();
  }, [loadData]);

  async function handleInvite() {
    if (!family || !inviteEmail.trim()) return;
    setSubmitting(true);
    setError(null);
    const { inviteCode: code, error: err } = await inviteCoParent(
      family.family_id,
      inviteEmail.trim(),
      inviteRole
    );
    if (err) {
      setError(err);
    } else if (code) {
      setInviteCode(code);
      setInviteEmail("");
      await loadData();
    }
    setSubmitting(false);
  }

  async function handleAcceptInvite() {
    if (!inviteCodeInput.trim()) return;
    setSubmitting(true);
    setError(null);
    const { success, error: err } = await acceptInvite(inviteCodeInput.trim());
    if (err) {
      setError(err);
    } else {
      setInviteCodeInput("");
      await loadData();
    }
    setSubmitting(false);
  }

  async function handleRevoke(inviteId: string) {
    await revokeInvite(inviteId);
    await loadData();
  }

  async function handleRemove(memberId: string) {
    if (!confirm(str.confirmRemove)) return;
    await removeFamilyMember(memberId);
    await loadData();
  }

  async function handleLeave() {
    if (!family || !confirm(str.confirmLeave)) return;
    await leaveFamily(family.family_id);
    setFamily(null);
    setMembers([]);
    setInvites([]);
  }

  function copyCode(code: string) {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  if (loading) {
    return (
      <div className="flex items-center justify-center py-12">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2" style={{ borderColor: "var(--primary)" }} />
        <span className="ml-3 text-sm" style={{ color: "var(--text-muted)" }}>{str.loading}</span>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto space-y-6">
      {/* Header */}
      <div>
        <h2 className="text-xl font-bold flex items-center gap-2" style={{ color: "var(--text)" }}>
          <Users size={20} /> {str.title}
        </h2>
        <p className="text-sm mt-1" style={{ color: "var(--text-muted)" }}>{str.subtitle}</p>
      </div>

      {error && (
        <div className="rounded-lg p-3 text-sm" style={{ background: "#fef2f2", color: "#dc2626", border: "1px solid #fecaca" }}>
          {error}
        </div>
      )}

      {/* Family info */}
      {family && (
        <div className="rounded-xl p-4 flex items-center justify-between" style={{ background: "var(--card)", border: "1px solid var(--border)" }}>
          <div>
            <p className="font-bold text-sm" style={{ color: "var(--text)" }}>{family.family_name}</p>
            <p className="text-xs mt-1" style={{ color: "var(--text-muted)" }}>
              {family.member_count} {str.members} · {ROLE_LABELS[family.role][lang]}
            </p>
          </div>
          <button
            onClick={handleLeave}
            className="text-xs flex items-center gap-1 px-3 py-1.5 rounded-lg hover:opacity-80"
            style={{ color: "#dc2626", background: "#fef2f2" }}
          >
            <LogOut size={12} /> {str.leaveFamily}
          </button>
        </div>
      )}

      {/* Members */}
      <div>
        <h3 className="text-sm font-semibold mb-2" style={{ color: "var(--text)" }}>{str.members}</h3>
        {members.length === 0 ? (
          <p className="text-sm" style={{ color: "var(--text-muted)" }}>{str.noMembers}</p>
        ) : (
          <div className="space-y-2">
            {members.map((m) => (
              <div key={m.id} className="rounded-lg p-3 flex items-center justify-between" style={{ background: "var(--card)", border: "1px solid var(--border)" }}>
                <div>
                  <p className="text-sm font-medium" style={{ color: "var(--text)" }}>
                    {m.display_name || m.invited_email || str.you}
                  </p>
                  <p className="text-xs mt-0.5" style={{ color: "var(--text-muted)" }}>
                    {ROLE_LABELS[m.role][lang]}
                  </p>
                </div>
                {m.role !== "parent" && (
                  <button onClick={() => handleRemove(m.id)} className="text-xs hover:opacity-70" style={{ color: "#dc2626" }}>
                    <X size={16} />
                  </button>
                )}
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Invite co-parent */}
      {family && (
        <div className="rounded-xl p-4" style={{ background: "var(--card)", border: "1px solid var(--border)" }}>
          <h3 className="text-sm font-semibold mb-3 flex items-center gap-2" style={{ color: "var(--text)" }}>
            <UserPlus size={16} /> {str.invite}
          </h3>
          <input
            type="email"
            value={inviteEmail}
            onChange={(e) => setInviteEmail(e.target.value)}
            placeholder={str.invitePlaceholder}
            className="w-full rounded-lg px-3 py-2 text-sm mb-3 outline-none"
            style={{ background: "var(--bg)", border: "1px solid var(--border)", color: "var(--text)" }}
          />
          <div className="flex gap-2 mb-3">
            {(["co-parent", "caregiver"] as FamilyRole[]).map((r) => (
              <button
                key={r}
                onClick={() => setInviteRole(r)}
                className="flex-1 py-2 rounded-lg text-xs font-medium transition"
                style={{
                  background: inviteRole === r ? "var(--primary)" : "var(--bg)",
                  color: inviteRole === r ? "#fff" : "var(--text-muted)",
                  border: `1px solid ${inviteRole === r ? "var(--primary)" : "var(--border)"}`,
                }}
              >
                {ROLE_LABELS[r][lang]}
              </button>
            ))}
          </div>
          <button
            onClick={handleInvite}
            disabled={submitting || !inviteEmail.trim()}
            className="w-full py-2.5 rounded-lg text-sm font-semibold text-white transition disabled:opacity-50"
            style={{ background: "var(--primary)" }}
          >
            {str.sendInvite}
          </button>

          {inviteCode && (
            <div className="mt-3 rounded-lg p-3" style={{ background: "#f0fdf4", border: "1px solid #86efac" }}>
              <p className="text-xs mb-2" style={{ color: "#16a34a" }}>{str.inviteSent}</p>
              <div className="flex items-center justify-between">
                <code className="text-lg font-bold tracking-widest" style={{ color: "var(--text)" }}>{inviteCode}</code>
                <button onClick={() => copyCode(inviteCode)} className="text-xs flex items-center gap-1" style={{ color: "var(--primary)" }}>
                  {copied ? <><Check size={12} /> {str.copied}</> : <><Copy size={12} /> {str.copy}</>}
                </button>
              </div>
            </div>
          )}
        </div>
      )}

      {/* Pending invites */}
      {family && invites.length > 0 && (
        <div>
          <h3 className="text-sm font-semibold mb-2" style={{ color: "var(--text)" }}>{str.pendingInvites}</h3>
          <div className="space-y-2">
            {invites.map((inv) => (
              <div key={inv.id} className="rounded-lg p-3 flex items-center justify-between" style={{ background: "var(--card)", border: "1px solid var(--border)" }}>
                <div>
                  <p className="text-xs" style={{ color: "var(--text)" }}>{inv.invited_email || "—"}</p>
                  <p className="text-xs mt-0.5" style={{ color: "var(--text-muted)" }}>
                    {ROLE_LABELS[inv.role][lang]} · {inv.invite_code}
                  </p>
                </div>
                <button onClick={() => handleRevoke(inv.id)} className="text-xs hover:opacity-70" style={{ color: "#dc2626" }}>
                  {str.revoke}
                </button>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Accept invite by code */}
      {!family && (
        <div className="rounded-xl p-4" style={{ background: "var(--card)", border: "1px solid var(--border)" }}>
          <h3 className="text-sm font-semibold mb-3 flex items-center gap-2" style={{ color: "var(--text)" }}>
            <Mail size={16} /> {str.acceptInvite}
          </h3>
          <input
            type="text"
            value={inviteCodeInput}
            onChange={(e) => setInviteCodeInput(e.target.value)}
            placeholder={str.acceptInvitePlaceholder}
            className="w-full rounded-lg px-3 py-2 text-sm mb-3 outline-none"
            style={{ background: "var(--bg)", border: "1px solid var(--border)", color: "var(--text)" }}
          />
          <button
            onClick={handleAcceptInvite}
            disabled={submitting || !inviteCodeInput.trim()}
            className="w-full py-2.5 rounded-lg text-sm font-semibold text-white transition disabled:opacity-50"
            style={{ background: "var(--primary)" }}
          >
            {str.accept}
          </button>
        </div>
      )}
    </div>
  );
}
