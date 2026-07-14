"use client";

import React, { useState, useEffect, useMemo } from "react";
import { Sprout, Check, AlertTriangle, ChevronLeft } from "lucide-react";
import { DynamicIcon } from "@/lib/DynamicIcon";
import type { Language } from "@/lib/i18n";
import {
  CATEGORY_META,
  getMilestonesForAge,
  getMilestoneProgress,
  type Milestone,
  type MilestoneRecord,
  type MilestoneCategory,
} from "@/lib/milestones";

const s = {
  title: "Milestone Tracker",
  subtitle: "Track your child's development",
  progress: "Progress",
  achieved: "Achieved",
  dueNow: "Due Now",
  upcoming: "Upcoming",
  completed: "Completed",
  markAchieved: "✓ Achieved",
  markConcern: "⚠ Concern",
  addNote: "Add a note...",
  save: "Save",
  noAge: "Set your child's age in Profile to see milestones.",
  back: "List",
};

const ko = {
  title: "발달 추적기",
  subtitle: "아이의 발달을 기록하세요",
  progress: "진행도",
  achieved: "달성",
  dueNow: "지금 확인",
  upcoming: "곧 다가옴",
  completed: "완료됨",
  markAchieved: "✓ 달성",
  markConcern: "⚠ 우려",
  addNote: "메모 추가...",
  save: "저장",
  noAge: "프로필에서 아이의 나이를 설정하세요.",
  back: "목록",
};

interface Props {
  lang: Language;
  childAgeYears: number | null;
}

const STORAGE_KEY = "pc_milestones";

export default function MilestoneTracker({ lang, childAgeYears }: Props) {
  const str = lang === "ko" ? ko : s;
  const [records, setRecords] = useState<Record<string, MilestoneRecord>>({});
  const [loaded, setLoaded] = useState(false);
  const [selectedMilestone, setSelectedMilestone] = useState<Milestone | null>(null);
  const [noteText, setNoteText] = useState("");

  const ageMonths = childAgeYears ? Math.round(childAgeYears * 12) : 0;

  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) setRecords(JSON.parse(saved));
    } catch {}
    setLoaded(true);
  }, []);

  useEffect(() => {
    if (loaded) {
      try { localStorage.setItem(STORAGE_KEY, JSON.stringify(records)); } catch {}
    }
  }, [records, loaded]);

  const milestones = useMemo(() => getMilestonesForAge(ageMonths), [ageMonths]);
  const progress = useMemo(() => getMilestoneProgress(records, ageMonths), [records, ageMonths]);

  const dueMilestones = milestones.filter(m => ageMonths >= m.ageRange[0] && ageMonths <= m.ageRange[1]);
  const upcomingMilestones = milestones.filter(m => m.ageMonths > ageMonths);
  const completedMilestones = milestones.filter(m => records[m.id]?.status === "achieved");

  function setMilestoneStatus(milestoneId: string, status: "achieved" | "concern" | "pending") {
    setRecords(prev => {
      if (status === "pending") {
        const { [milestoneId]: _, ...rest } = prev;
        return rest;
      }
      return {
        ...prev,
        [milestoneId]: {
          milestoneId,
          status,
          achievedAt: status === "achieved" ? Date.now() : null,
          notes: prev[milestoneId]?.notes || "",
        },
      };
    });
  }

  function saveNote() {
    if (!selectedMilestone) return;
    setRecords(prev => ({
      ...prev,
      [selectedMilestone.id]: {
        ...prev[selectedMilestone.id],
        milestoneId: selectedMilestone.id,
        status: prev[selectedMilestone.id]?.status || "pending",
        achievedAt: prev[selectedMilestone.id]?.achievedAt || null,
        notes: noteText,
      },
    }));
    setSelectedMilestone(null);
    setNoteText("");
  }

  if (!loaded) {
    return (
      <div className="flex justify-center py-12">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2" style={{ borderColor: "var(--primary)" }} />
      </div>
    );
  }

  if (!childAgeYears) {
    return (
      <div className="max-w-2xl mx-auto py-12 text-center">
        <p className="text-sm" style={{ color: "var(--text-muted)" }}>{str.noAge}</p>
      </div>
    );
  }

  // Detail view
  if (selectedMilestone) {
    const rec = records[selectedMilestone.id];
    return (
      <div className="max-w-2xl mx-auto">
        <button onClick={() => setSelectedMilestone(null)} className="text-xs mb-4 flex items-center gap-1" style={{ color: "var(--primary)" }}>
          <ChevronLeft size={12} /> {str.back}
        </button>

        <div className="rounded-xl p-4 mb-4" style={{ background: "var(--surface)", border: "1px solid var(--border)" }}>
          <div className="flex items-center gap-3 mb-2">
            <span className="text-2xl"><DynamicIcon name={CATEGORY_META[selectedMilestone.category].icon} size={28} /></span>
            <div>
              <p className="font-bold text-sm" style={{ color: "var(--text)" }}>
                {lang === "ko" ? selectedMilestone.titleKo : selectedMilestone.titleEn}
              </p>
              <p className="text-xs mt-0.5" style={{ color: "var(--text-muted)" }}>
                {lang === "ko" ? CATEGORY_META[selectedMilestone.category].labelKo : CATEGORY_META[selectedMilestone.category].labelEn}
                {" · "}
                {selectedMilestone.ageMonths} {lang === "ko" ? "개월" : "months"}
              </p>
            </div>
          </div>
          <p className="text-sm" style={{ color: "var(--text-muted)" }}>
            {lang === "ko" ? selectedMilestone.descKo : selectedMilestone.descEn}
          </p>
        </div>

        <div className="flex gap-2 mb-4">
          <button
            onClick={() => setMilestoneStatus(selectedMilestone.id, "achieved")}
            className="flex-1 py-3 rounded-xl text-sm font-semibold transition"
            style={{
              background: rec?.status === "achieved" ? "#16a34a" : "var(--surface)",
              color: rec?.status === "achieved" ? "#fff" : "var(--text-muted)",
              border: `1px solid ${rec?.status === "achieved" ? "#16a34a" : "var(--border)"}`,
            }}
          >
            {str.markAchieved}
          </button>
          <button
            onClick={() => setMilestoneStatus(selectedMilestone.id, "concern")}
            className="flex-1 py-3 rounded-xl text-sm font-semibold transition"
            style={{
              background: rec?.status === "concern" ? "#d97706" : "var(--surface)",
              color: rec?.status === "concern" ? "#fff" : "var(--text-muted)",
              border: `1px solid ${rec?.status === "concern" ? "#d97706" : "var(--border)"}`,
            }}
          >
            {str.markConcern}
          </button>
        </div>

        <div className="rounded-xl p-4" style={{ background: "var(--surface)", border: "1px solid var(--border)" }}>
          <p className="text-xs font-semibold mb-2" style={{ color: "var(--text-muted)" }}>{str.addNote}</p>
          <textarea
            value={noteText}
            onChange={(e) => setNoteText(e.target.value)}
            placeholder={str.addNote}
            rows={3}
            className="w-full text-sm outline-none resize-none mb-2"
            style={{ background: "var(--bg)", border: "1px solid var(--border)", color: "var(--text)", borderRadius: 8, padding: 8 }}
          />
          <button
            onClick={saveNote}
            className="w-full py-2.5 rounded-lg text-sm font-semibold text-white"
            style={{ background: "var(--primary)" }}
          >
            {str.save}
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto">
      <div className="mb-6">
        <h2 className="text-xl font-bold flex items-center gap-2" style={{ color: "var(--text)" }}>
          <Sprout size={20} /> {str.title}
        </h2>
        <p className="text-sm mt-1" style={{ color: "var(--text-muted)" }}>{str.subtitle}</p>
      </div>

      {/* Progress overview */}
      <div className="rounded-xl p-4 mb-6" style={{ background: "var(--surface)", border: "1px solid var(--border)" }}>
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm font-semibold" style={{ color: "var(--text)" }}>{str.progress}</span>
          <span className="text-sm font-bold" style={{ color: "var(--primary)" }}>{progress.percent}%</span>
        </div>
        <div className="h-2.5 rounded-full overflow-hidden mb-3" style={{ background: "var(--bg)" }}>
          <div className="h-full rounded-full" style={{ width: `${progress.percent}%`, background: "var(--primary)" }} />
        </div>
        <p className="text-xs" style={{ color: "var(--text-muted)" }}>{progress.achieved} / {progress.total} {str.achieved}</p>

        <div className="flex flex-wrap gap-2 mt-3">
          {(Object.keys(CATEGORY_META) as MilestoneCategory[]).map(cat => {
            const data = progress.byCategory[cat];
            if (data.total === 0) return null;
            const pct = data.total > 0 ? Math.round((data.achieved / data.total) * 100) : 0;
            return (
              <div key={cat} className="rounded-lg p-2" style={{ background: "var(--bg)", minWidth: 80 }}>
                <p className="text-sm"><DynamicIcon name={CATEGORY_META[cat].icon} size={20} /></p>
                <p className="text-xs mt-0.5" style={{ color: "var(--text-muted)" }}>
                  {lang === "ko" ? CATEGORY_META[cat].labelKo : CATEGORY_META[cat].labelEn}
                </p>
                <p className="text-xs font-semibold mt-0.5" style={{ color: "var(--text)" }}>{data.achieved}/{data.total}</p>
                <div className="h-1 rounded-full overflow-hidden mt-1" style={{ background: "var(--border)" }}>
                  <div className="h-full rounded-full" style={{ width: `${pct}%`, background: CATEGORY_META[cat].color }} />
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Due now */}
      {dueMilestones.length > 0 && (
        <div className="mb-6">
          <h3 className="text-sm font-semibold mb-2" style={{ color: "var(--text)" }}>{str.dueNow}</h3>
          <div className="space-y-2">
            {dueMilestones.map(m => {
              const rec = records[m.id];
              return (
                <button
                  key={m.id}
                  onClick={() => { setSelectedMilestone(m); setNoteText(rec?.notes || ""); }}
                  className="w-full text-left rounded-lg p-3 flex items-center gap-3 transition hover:opacity-80"
                  style={{
                    background: "var(--surface)",
                    border: `1px solid ${rec?.status === "achieved" ? "#16a34a" : rec?.status === "concern" ? "#d97706" : "var(--border)"}`,
                  }}
                >
                  <span className="text-xl"><DynamicIcon name={CATEGORY_META[m.category].icon} size={20} /></span>
                  <div className="flex-1">
                    <p className="text-sm font-medium" style={{ color: "var(--text)" }}>{lang === "ko" ? m.titleKo : m.titleEn}</p>
                    <p className="text-xs mt-0.5" style={{ color: "var(--text-muted)" }}>{lang === "ko" ? m.descKo : m.descEn}</p>
                  </div>
                  <span className="text-lg">{rec?.status === "achieved" ? "✅" : rec?.status === "concern" ? "⚠️" : "⏳"}</span>
                </button>
              );
            })}
          </div>
        </div>
      )}

      {/* Upcoming */}
      {upcomingMilestones.length > 0 && (
        <div className="mb-6">
          <h3 className="text-sm font-semibold mb-2" style={{ color: "var(--text)" }}>{str.upcoming}</h3>
          <div className="space-y-2">
            {upcomingMilestones.slice(0, 5).map(m => {
              const rec = records[m.id];
              return (
                <button
                  key={m.id}
                  onClick={() => { setSelectedMilestone(m); setNoteText(rec?.notes || ""); }}
                  className="w-full text-left rounded-lg p-3 flex items-center gap-3 transition hover:opacity-80 opacity-80"
                  style={{ background: "var(--surface)", border: "1px solid var(--border)" }}
                >
                  <span className="text-lg"><DynamicIcon name={CATEGORY_META[m.category].icon} size={18} /></span>
                  <div className="flex-1">
                    <p className="text-sm" style={{ color: "var(--text)" }}>{lang === "ko" ? m.titleKo : m.titleEn}</p>
                    <p className="text-xs" style={{ color: "var(--text-muted)" }}>{m.ageMonths} {lang === "ko" ? "개월" : "months"}</p>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      )}

      {/* Completed */}
      {completedMilestones.length > 0 && (
        <div>
          <h3 className="text-sm font-semibold mb-2" style={{ color: "var(--text)" }}>{str.completed} ({completedMilestones.length})</h3>
          <div className="space-y-1">
            {completedMilestones.map(m => (
              <button
                key={m.id}
                onClick={() => { setSelectedMilestone(m); setNoteText(records[m.id]?.notes || ""); }}
                className="w-full text-left rounded-lg p-2.5 flex items-center gap-2 transition hover:opacity-80"
                style={{ background: "#f0fdf4", border: "1px solid #86efac" }}
              >
                <span className="text-base"><DynamicIcon name={CATEGORY_META[m.category].icon} size={16} /></span>
                <span className="flex-1 text-xs line-through opacity-70" style={{ color: "var(--text)" }}>
                  {lang === "ko" ? m.titleKo : m.titleEn}
                </span>
                <Check size={14} style={{ color: "#16a34a" }} />
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
