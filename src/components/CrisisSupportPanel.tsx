"use client";

import React, { useState } from "react";
import { Phone, MessageSquare, Globe, LifeBuoy } from "lucide-react";
import type { Language } from "@/lib/i18n";
import { CRISIS_RESOURCES, WARNING_SIGNS, URGENCY_META, type CrisisResource } from "@/lib/crisisResources";

const s = {
  title: "Support & Crisis Resources",
  subtitle: "Professional help, hotlines, and guidance",
  emergency: "Emergency",
  hotlines: "Hotlines & Text Lines",
  findTherapist: "Find a Professional",
  warningTitle: "When to Seek Professional Help",
  warningSubtitle: "These signs warrant attention from a qualified professional:",
  call: "Call",
  visit: "Visit",
  available: "Available",
  disclaimer: "This app provides educational guidance, not medical advice. In a crisis, contact emergency services immediately.",
};

const ko = {
  title: "지원 및 위기 상담",
  subtitle: "전문가 도움, 핫라인, 안내",
  emergency: "응급",
  hotlines: "전화·문자 상담",
  findTherapist: "전문가 찾기",
  warningTitle: "전문가 도움이 필요한 경우",
  warningSubtitle: "다음 증상이 있으면 전문가의 도움을 받으세요:",
  call: "전화",
  visit: "웹사이트",
  available: "이용 가능",
  disclaimer: "이 앱은 교육적 조언을 제공하며 의학적 조언이 아닙니다. 위기 상황에서는 즉시 응급 서비스에 연락하세요.",
};

interface Props { lang: Language; }

export default function CrisisSupportPanel({ lang }: Props) {
  const str = lang === "ko" ? ko : s;
  const [region, setRegion] = useState<"global" | "uk" | "us" | "kr" | "eu">("uk");

  const regions = [
    { id: "uk" as const, label: "🇬🇧 UK" },
    { id: "us" as const, label: "🇺🇸 US" },
    { id: "kr" as const, label: "🇰🇷 한국" },
    { id: "eu" as const, label: "🇪🇺 EU" },
    { id: "global" as const, label: "🌍 All" },
  ];

  const filtered = CRISIS_RESOURCES.filter(r => r.region === region || r.region === "global");
  const emergencies = filtered.filter(r => r.type === "emergency");
  const hotlines = filtered.filter(r => r.type === "hotline" || r.type === "textline");
  const directories = filtered.filter(r => r.type === "directory" || r.type === "online");

  function callNumber(phone: string) { window.location.href = `tel:${phone.replace(/\s/g, "")}`; }
  function openWebsite(url: string) { const full = url.startsWith("http") ? url : `https://${url}`; window.open(full, "_blank"); }

  function ResourceCard({ r }: { r: CrisisResource }) {
    const isEmergency = r.type === "emergency";
    return (
      <div className="rounded-xl p-4 mb-2" style={{
        background: isEmergency ? "#fef2f2" : "var(--surface)",
        border: `1px solid ${isEmergency ? "#dc2626" : "var(--border)"}`,
      }}>
        <p className="text-sm font-bold mb-1" style={{ color: isEmergency ? "#dc2626" : "var(--text)" }}>
          {lang === "ko" ? r.nameKo : r.nameEn}
        </p>
        <p className="text-xs mb-3" style={{ color: "var(--text-muted)" }}>
          {lang === "ko" ? r.descKo : r.descEn}
        </p>
        <div className="flex gap-2 flex-wrap">
          {r.phone && (
            <button onClick={() => callNumber(r.phone!)} className="flex items-center gap-1 px-3 py-1.5 rounded-lg text-xs font-semibold text-white" style={{ background: isEmergency ? "#dc2626" : "var(--primary)" }}>
              <Phone size={12} /> {str.call}: {r.phone}
            </button>
          )}
          {r.text && (
            <button onClick={() => callNumber(r.text!.replace(/[^0-9]/g, ""))} className="flex items-center gap-1 px-3 py-1.5 rounded-lg text-xs font-semibold text-white" style={{ background: "var(--accent, #6b7280)" }}>
              <MessageSquare size={12} /> {r.text}
            </button>
          )}
          {r.website && (
            <button onClick={() => openWebsite(r.website!)} className="flex items-center gap-1 px-3 py-1.5 rounded-lg text-xs font-medium" style={{ background: "var(--surface)", border: "1px solid var(--border)", color: "var(--primary)" }}>
              <Globe size={12} /> {str.visit}
            </button>
          )}
        </div>
        <p className="text-xs mt-2" style={{ color: "var(--text-muted)" }}>{str.available}: {lang === "ko" ? r.availableKo : r.availableEn}</p>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto">
      <div className="mb-6">
        <h2 className="text-xl font-bold flex items-center gap-2" style={{ color: "var(--text)" }}>
          <LifeBuoy size={20} /> {str.title}
        </h2>
        <p className="text-sm mt-1" style={{ color: "var(--text-muted)" }}>{str.subtitle}</p>
      </div>

      {/* Region selector */}
      <div className="flex gap-2 mb-6 flex-wrap">
        {regions.map(r => (
          <button key={r.id} onClick={() => setRegion(r.id)} className="px-3 py-1.5 rounded-lg text-xs font-medium transition" style={{
            background: region === r.id ? "var(--primary)" : "var(--surface)",
            color: region === r.id ? "#fff" : "var(--text-muted)",
            border: `1px solid ${region === r.id ? "var(--primary)" : "var(--border)"}`,
          }}>{r.label}</button>
        ))}
      </div>

      {/* Emergency */}
      {emergencies.length > 0 && (
        <div className="mb-6">
          <h3 className="text-sm font-bold mb-2" style={{ color: "#dc2626" }}>{str.emergency}</h3>
          {emergencies.map(r => <ResourceCard key={r.id} r={r} />)}
        </div>
      )}

      {/* Hotlines */}
      {hotlines.length > 0 && (
        <div className="mb-6">
          <h3 className="text-sm font-semibold mb-2" style={{ color: "var(--text)" }}>{str.hotlines}</h3>
          {hotlines.map(r => <ResourceCard key={r.id} r={r} />)}
        </div>
      )}

      {/* Directories */}
      {directories.length > 0 && (
        <div className="mb-6">
          <h3 className="text-sm font-semibold mb-2" style={{ color: "var(--text)" }}>{str.findTherapist}</h3>
          {directories.map(r => <ResourceCard key={r.id} r={r} />)}
        </div>
      )}

      {/* Warning signs */}
      <div className="rounded-xl p-4 mb-6" style={{ background: "var(--surface)", border: "1px solid var(--border)" }}>
        <h3 className="text-sm font-semibold mb-1" style={{ color: "var(--text)" }}>{str.warningTitle}</h3>
        <p className="text-xs mb-3" style={{ color: "var(--text-muted)" }}>{str.warningSubtitle}</p>
        {WARNING_SIGNS.map(sign => {
          const meta = URGENCY_META[sign.urgency];
          return (
            <div key={sign.id} className="flex items-start gap-2 mb-2.5">
              <span className="text-base">{sign.icon}</span>
              <div className="flex-1">
                <p className="text-xs mb-0.5" style={{ color: "var(--text)" }}>{lang === "ko" ? sign.ko : sign.en}</p>
                <div className="flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full" style={{ background: meta.color }} />
                  <span className="text-xs font-medium" style={{ color: meta.color }}>{lang === "ko" ? meta.labelKo : meta.labelEn}</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Disclaimer */}
      <div className="rounded-xl p-3" style={{ background: "var(--bg)" }}>
        <p className="text-xs text-center leading-relaxed" style={{ color: "var(--text-muted)" }}>{str.disclaimer}</p>
      </div>
    </div>
  );
}
