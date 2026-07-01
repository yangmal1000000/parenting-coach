"use client";

import { useState, useRef, useEffect, use } from "react";
import { useRouter } from "next/navigation";
import { TOPIC_CATEGORIES } from "@/lib/topics";
import { UI, LANGUAGES, TOPIC_LABELS, TOPIC_EXAMPLES_I18N, type Language } from "@/lib/i18n";

// === Types ===
interface AdviceSection {
  situation?: string;
  dos: string[];
  donts: string[];
  why: string;
  source: string;
}
interface Session {
  id: string;
  query: string;
  advice: string;
  sources: string[];
  topicCategory: string;
  rating?: "up" | "down";
  bookmarked?: boolean;
  feedbackText?: string;
  createdAt: number;
  childName?: string;
  childAge?: string;
  language?: Language;
}
interface ChildProfile {
  name: string;
  age: string;
  notes: string;
}

// === Helpers ===
function parseAdvice(raw: string): AdviceSection {
  const section: AdviceSection = { dos: [], donts: [], why: "", source: "" };

  // Extract situation — match Korean "상황" or English "SITUATION"
  const sitMatch = raw.match(/📋\s*(?:상황|SITUATION):?\s*([\s\S]*?)(?=✅|❌|🧠|📖|$)/i);
  if (sitMatch) section.situation = sitMatch[1].trim();

  // Extract DOs — match Korean "하세요" or English "DO"
  const doMatch = raw.match(/✅\s*(?:하세요|DO):?\s*([\s\S]*?)(?=❌|🧠|📖|$)/i);
  if (doMatch) {
    section.dos = doMatch[1].split("\n").map(l => l.replace(/^[•\-\*]\s*/, "").trim()).filter(Boolean);
  }

  // Extract DON'Ts — match Korean "하지 마세요" or English "DON'T"
  const dontMatch = raw.match(/❌\s*(?:하지\s*마세요|DON'?T):?\s*([\s\S]*?)(?=🧠|📖|$)/i);
  if (dontMatch) {
    section.donts = dontMatch[1].split("\n").map(l => l.replace(/^[•\-\*]\s*/, "").trim()).filter(Boolean);
  }

  // Extract WHY — match Korean "이렇게 하는 이유" or English "WHY"
  const whyMatch = raw.match(/🧠\s*(?:(?:이렇게\s*하는\s*이유|WHY(?:\s+THIS\s+WORKS)?)\:?\s*)?([\s\S]*?)(?=📖|$)/i);
  if (whyMatch) section.why = whyMatch[1].trim();

  // Extract SOURCE — match Korean "출처" or English "SOURCE"
  const srcMatch = raw.match(/📖\s*(?:출처|SOURCE):?\s*([\s\S]*?)$/i);
  if (srcMatch) section.source = srcMatch[1].trim();

  // Fallback: if parsing failed, show raw
  if (!section.dos.length && !section.donts.length && !section.why) {
    section.why = raw;
  }
  return section;
}

function loadFromStorage<T>(key: string, fallback: T): T {
  if (typeof window === "undefined") return fallback;
  try {
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) : fallback;
  } catch { return fallback; }
}

function saveToStorage(key: string, value: unknown) {
  if (typeof window === "undefined") return;
  try { localStorage.setItem(key, JSON.stringify(value)); } catch {}
}

// === Tab type ===
type Tab = "home" | "history" | "saved" | "profile";

// === Main Component ===
export default function Home({ params }: { params: Promise<{ locale: string }> }) {
  const router = useRouter();
  const { locale } = use(params);
  const initialLang: Language = locale === "ko" ? "ko" : "en";

  // Language
  const [lang, setLang] = useState<Language>(initialLang);
  const t = UI[lang];
  const topicLabels = TOPIC_LABELS[lang];
  const topicExamples = TOPIC_EXAMPLES_I18N[lang];

  // State
  const [tab, setTab] = useState<Tab>("home");
  const [query, setQuery] = useState("");
  const [profile, setProfile] = useState<ChildProfile>({ name: "", age: "", notes: "" });
  const [profileSaved, setProfileSaved] = useState(false);
  const [loading, setLoading] = useState(false);
  const [streamingAdvice, setStreamingAdvice] = useState("");
  const [advice, setAdvice] = useState<AdviceSection | null>(null);
  const [currentSources, setCurrentSources] = useState<string[]>([]);
  const [currentQuery, setCurrentQuery] = useState("");
  const [error, setError] = useState("");
  const [feedbackGiven, setFeedbackGiven] = useState<"up" | "down" | null>(null);
  const [feedbackText, setFeedbackText] = useState("");
  const [currentSessionId, setCurrentSessionId] = useState<string | null>(null);
  const [streamError, setStreamError] = useState(false);
  const abortControllerRef = useRef<AbortController | null>(null);

  // Voice
  const [isRecording, setIsRecording] = useState(false);
  const [isTranscribing, setIsTranscribing] = useState(false);
  const [recordingTime, setRecordingTime] = useState(0);
  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const audioChunksRef = useRef<Blob[]>([]);
  const recordingTimerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  // Data
  const [sessions, setSessions] = useState<Session[]>([]);
  const [showOnboarding, setShowOnboarding] = useState(false);
  const [showInfo, setShowInfo] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  // Load from storage on mount
  useEffect(() => {
    const savedProfile = loadFromStorage<ChildProfile | null>("pc_profile", null);
    if (savedProfile) { setProfile(savedProfile); setProfileSaved(true); }
    const savedSessions = loadFromStorage<Session[]>("pc_sessions", []);
    setSessions(savedSessions);
    const onboarded = loadFromStorage("pc_onboarded", false);
    if (!onboarded) {
      setShowOnboarding(true);
      // Show How It Works on first visit after onboarding
    }
    const dm = loadFromStorage("pc_darkmode", false);
    setDarkMode(dm);
    // Save current language preference from URL
    saveToStorage("pc_lang", initialLang);
  }, []);

  // Dark mode toggle
  useEffect(() => {
    document.documentElement.style.colorScheme = darkMode ? "dark" : "light";
    saveToStorage("pc_darkmode", darkMode);
  }, [darkMode]);

  // Save sessions when changed
  useEffect(() => { saveToStorage("pc_sessions", sessions); }, [sessions]);

  // Save language when changed
  useEffect(() => { saveToStorage("pc_lang", lang); }, [lang]);

  // Switch language by navigating to new locale path
  function switchLanguage(newLang: Language) {
    setLang(newLang);
    saveToStorage("pc_lang", newLang);
    router.push(`/${newLang}`);
  }

  // Cleanup
  useEffect(() => {
    return () => { if (recordingTimerRef.current) clearInterval(recordingTimerRef.current); };
  }, []);

  // === Submit (streaming) ===
  async function handleSubmit(e?: React.FormEvent) {
    e?.preventDefault();
    if (!query.trim()) return;

    setLoading(true);
    setError("");
    setAdvice(null);
    setStreamingAdvice("");
    setFeedbackGiven(null);
    setFeedbackText("");
    setCurrentQuery(query.trim());
    setTab("home");

    const startTime = Date.now();

    // Get or create anonymous user ID
    let userId = loadFromStorage<string>("pc_uid", "");
    if (!userId) {
      userId = `u${Date.now()}${Math.random().toString(36).slice(2, 8)}`;
      saveToStorage("pc_uid", userId);
    }

    try {
      const res = await fetch("/api/coach", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          query: query.trim(),
          childName: profile.name || undefined,
          childAge: profile.age || undefined,
          childNotes: profile.notes || undefined,
          language: lang,
          userId,
        }),
      });

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || "Something went wrong");
      }

      const reader = res.body?.getReader();
      const decoder = new TextDecoder();
      let fullAdvice = "";
      let metaSources: string[] = [];
      let metaCategory = "general";
      let trackedQueryId = "";

      while (reader) {
        const { done, value } = await reader.read();
        if (done) break;
        const text = decoder.decode(value);
        const lines = text.split("\n");
        for (const line of lines) {
          if (!line.startsWith("data: ")) continue;
          try {
            const data = JSON.parse(line.slice(6));
            if (data.type === "queryId") {
              trackedQueryId = data.queryId;
            } else if (data.type === "meta") {
              metaSources = data.sources || [];
              metaCategory = data.topicCategory || "general";
              setCurrentSources(metaSources);
            } else if (data.type === "token") {
              fullAdvice += data.text;
              setStreamingAdvice(fullAdvice);
            } else if (data.type === "done") {
              fullAdvice = data.advice || fullAdvice;
              const parsed = parseAdvice(fullAdvice);
              setAdvice(parsed);
              setStreamingAdvice("");

              const responseMs = Date.now() - startTime;

              // Log completion data (advice text, topic, sources, response time)
              fetch("/api/log-complete", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                  queryId: trackedQueryId,
                  advice: fullAdvice.slice(0, 2000),
                  topicCategory: metaCategory,
                  sources: metaSources,
                  responseMs,
                }),
              }).catch(() => {});

              // Save session
              const newSession: Session = {
                id: `s${Date.now()}`,
                query: query.trim(),
                advice: fullAdvice,
                sources: metaSources,
                topicCategory: metaCategory,
                createdAt: Date.now(),
                childName: profile.name || undefined,
                childAge: profile.age || undefined,
                language: lang,
              };
              setSessions(prev => [newSession, ...prev].slice(0, 100));
              setCurrentSessionId(newSession.id);
            } else if (data.type === "error") {
              throw new Error(data.error);
            }
          } catch {}
        }
      }
    } catch (err) {
      if (err instanceof Error && err.name === "AbortError") return;
      setError(err instanceof Error ? err.message : "Something went wrong");
      setStreamError(true);
    } finally {
      setLoading(false);
      abortControllerRef.current = null;
    }
  }

  // === Voice ===
  async function startRecording() {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      const mr = new MediaRecorder(stream, {
        mimeType: MediaRecorder.isTypeSupported("audio/webm") ? "audio/webm" : "audio/mp4",
      });
      audioChunksRef.current = [];
      mr.ondataavailable = (e) => { if (e.data.size > 0) audioChunksRef.current.push(e.data); };
      mr.onstop = async () => {
        stream.getTracks().forEach(t => t.stop());
        await transcribeAudio(new Blob(audioChunksRef.current, { type: mr.mimeType }));
      };
      mediaRecorderRef.current = mr;
      mr.start();
      setIsRecording(true);
      setRecordingTime(0);
      recordingTimerRef.current = setInterval(() => {
        setRecordingTime(p => { if (p >= 60) { stopRecording(); return p; } return p + 1; });
      }, 1000);
    } catch { setError(lang === "ko" ? "마이크에 접근할 수 없습니다." : "Could not access microphone."); }
  }

  function stopRecording() {
    if (mediaRecorderRef.current && isRecording) {
      mediaRecorderRef.current.stop();
      setIsRecording(false);
      if (recordingTimerRef.current) { clearInterval(recordingTimerRef.current); recordingTimerRef.current = null; }
    }
  }

  async function transcribeAudio(blob: Blob) {
    setIsTranscribing(true);
    try {
      const fd = new FormData();
      fd.append("audio", blob, "recording.webm");
      const res = await fetch("/api/transcribe", { method: "POST", body: fd });
      if (!res.ok) throw new Error();
      const data = await res.json();
      if (data.text?.trim()) setQuery(data.text);
      else setError(lang === "ko" ? "잘 들리지 않았어요. 다시 시도하거나 입력해 주세요." : "Didn't catch that. Try again or type.");
    } catch { setError(lang === "ko" ? "변환에 실패했습니다. 입력해 주세요." : "Couldn't transcribe. Try typing."); }
    finally { setIsTranscribing(false); }
  }

  // === Profile ===
  function saveProfile() {
    saveToStorage("pc_profile", profile);
    setProfileSaved(true);
  }

  // === Sessions ===
  function rateSession(sessionId: string, rating: "up" | "down") {
    const sid = sessionId || currentSessionId;
    if (!sid) return;
    setSessions(prev => prev.map(s => s.id === sid ? { ...s, rating, feedbackText: feedbackText || undefined } : s));
    setFeedbackGiven(rating);
    // Log feedback to server (fire and forget)
    fetch("/api/feedback", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        queryId: sid,
        query: currentQuery,
        rating,
        language: lang,
      }),
    }).catch(() => {});
  }

  function toggleBookmark(sessionId: string) {
    const sid = sessionId || currentSessionId;
    if (!sid) return;
    setSessions(prev => prev.map(s => s.id === sid ? { ...s, bookmarked: !s.bookmarked } : s));
  }

  function deleteSession(sessionId: string) {
    setSessions(prev => prev.filter(s => s.id !== sessionId));
  }

  function newSession() {
    abortControllerRef.current?.abort();
    setQuery(""); setAdvice(null); setStreamingAdvice("");
    setFeedbackGiven(null); setFeedbackText("");
    setCurrentSessionId(null);
  }

  function loadSession(s: Session) {
    abortControllerRef.current?.abort();
    setQuery(s.query);
    setAdvice(parseAdvice(s.advice));
    setCurrentSources(s.sources);
    setCurrentQuery(s.query);
    setFeedbackGiven(s.rating || null);
    setFeedbackText(s.feedbackText || "");
    setCurrentSessionId(s.id);
    setTab("home");
  }

  // === Onboarding ===
  function completeOnboarding() {
    saveToStorage("pc_onboarded", true);
    setShowOnboarding(false);
    // Show How It Works panel after onboarding
    setTimeout(() => setShowInfo(true), 300);
  }

  // === Share ===
  async function shareAdvice() {
    if (!advice) return;
    const text = `📋 ${advice.situation || currentQuery}\n\n✅ ${advice.dos.join(" ")}\n❌ ${advice.donts.join(" ")}\n\n📖 ${advice.source}\n\n— ${t.appName} 🧠`;
    try {
      if (navigator.share) {
        await navigator.share({ title: t.appName, text });
      } else {
        await navigator.clipboard.writeText(text);
        alert(lang === "ko" ? "클립보드에 복사되었습니다!" : "Copied to clipboard!");
      }
    } catch {}
  }

  // === Render ===
  return (
    <div className="min-h-screen" style={{ background: "var(--bg)" }}>
      {/* Onboarding */}
      {showOnboarding && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-6" style={{ background: "rgba(0,0,0,0.5)" }}>
          <div className="rounded-2xl p-8 max-w-sm w-full slide-up" style={{ background: "var(--surface)" }}>
            <div className="text-center mb-6">
              <div className="text-5xl mb-3">🧠</div>
              <h2 className="text-xl font-bold mb-2" style={{ color: "var(--text)" }}>{t.onboardingTitle}</h2>
              <p className="text-sm" style={{ color: "var(--text-muted)" }}>{t.onboardingSubtitle}</p>
            </div>
            <div className="space-y-3 mb-6">
              <div className="flex items-start gap-3">
                <span className="text-xl">🎤</span>
                <div><p className="text-sm font-medium" style={{ color: "var(--text)" }}>{t.onboardingSpeak}</p><p className="text-xs" style={{ color: "var(--text-muted)" }}>{t.onboardingSpeakDesc}</p></div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-xl">📚</span>
                <div><p className="text-sm font-medium" style={{ color: "var(--text)" }}>{t.onboardingEvidence}</p><p className="text-xs" style={{ color: "var(--text-muted)" }}>{t.onboardingEvidenceDesc}</p></div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-xl">⚡</span>
                <div><p className="text-sm font-medium" style={{ color: "var(--text)" }}>{t.onboardingInstant}</p><p className="text-xs" style={{ color: "var(--text-muted)" }}>{t.onboardingInstantDesc}</p></div>
              </div>
            </div>
            <button onClick={completeOnboarding} className="w-full py-3 rounded-xl font-medium text-white" style={{ background: "var(--primary)" }}>
              {t.getStarted}
            </button>
          </div>
        </div>
      )}

      {/* How It Works Modal */}
      {showInfo && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto" style={{ background: "rgba(0,0,0,0.5)" }} onClick={() => setShowInfo(false)}>
          <div
            className="rounded-2xl max-w-lg w-full my-8 slide-up overflow-y-auto"
            style={{ background: "var(--surface)", maxHeight: "85vh" }}
            onClick={e => e.stopPropagation()}
          >
            {/* Header */}
            <div className="sticky top-0 z-10 px-6 pt-6 pb-4" style={{ background: "var(--surface)", borderBottom: "1px solid var(--border)" }}>
              <div className="flex items-start justify-between gap-3">
                <div>
                  <h2 className="text-lg font-bold mb-1" style={{ color: "var(--text)" }}>{t.howItWorksTitle}</h2>
                  <p className="text-xs" style={{ color: "var(--text-muted)" }}>{t.howItWorksSubtitle}</p>
                </div>
                <button onClick={() => setShowInfo(false)} className="p-2 rounded-lg shrink-0" style={{ color: "var(--text-muted)" }}>✕</button>
              </div>
            </div>

            <div className="px-6 py-5 space-y-5">
              {/* Pipeline diagram */}
              <div className="space-y-3">
                {/* Step 1 */}
                <div className="flex gap-3 items-start">
                  <div className="shrink-0 w-10 h-10 rounded-full flex items-center justify-center text-lg" style={{ background: "var(--primary)", color: "white" }}>1</div>
                  <div className="flex-1 pt-1">
                    <p className="text-sm font-semibold" style={{ color: "var(--text)" }}>{t.step1Title}</p>
                    <p className="text-xs mt-0.5" style={{ color: "var(--text-muted)" }}>{t.step1Desc}</p>
                  </div>
                </div>
                {/* Arrow */}
                <div className="ml-5 h-5 w-px" style={{ background: "var(--border)" }} />
                {/* Step 2 */}
                <div className="flex gap-3 items-start">
                  <div className="shrink-0 w-10 h-10 rounded-full flex items-center justify-center text-lg" style={{ background: "var(--primary)", color: "white" }}>2</div>
                  <div className="flex-1 pt-1">
                    <p className="text-sm font-semibold" style={{ color: "var(--text)" }}>{t.step2Title}</p>
                    <p className="text-xs mt-0.5" style={{ color: "var(--text-muted)" }}>{t.step2Desc}</p>
                  </div>
                </div>
                {/* Arrow */}
                <div className="ml-5 h-5 w-px" style={{ background: "var(--border)" }} />
                {/* Step 3 */}
                <div className="flex gap-3 items-start">
                  <div className="shrink-0 w-10 h-10 rounded-full flex items-center justify-center text-lg" style={{ background: "var(--primary)", color: "white" }}>3</div>
                  <div className="flex-1 pt-1">
                    <p className="text-sm font-semibold" style={{ color: "var(--text)" }}>{t.step3Title}</p>
                    <p className="text-xs mt-0.5" style={{ color: "var(--text-muted)" }}>{t.step3Desc}</p>
                  </div>
                </div>
                {/* Arrow */}
                <div className="ml-5 h-5 w-px" style={{ background: "var(--border)" }} />
                {/* Step 4 */}
                <div className="flex gap-3 items-start">
                  <div className="shrink-0 w-10 h-10 rounded-full flex items-center justify-center text-lg" style={{ background: "var(--emerald-600)", color: "white" }}>4</div>
                  <div className="flex-1 pt-1">
                    <p className="text-sm font-semibold" style={{ color: "var(--text)" }}>{t.step4Title}</p>
                    <p className="text-xs mt-0.5" style={{ color: "var(--text-muted)" }}>{t.step4Desc}</p>
                  </div>
                </div>
              </div>

              {/* Comparison table */}
              <div>
                <p className="text-sm font-semibold mb-3" style={{ color: "var(--text)" }}>{t.vsGenericTitle}</p>
                <div className="space-y-2">
                  {/* Sources */}
                  <div className="rounded-xl p-3" style={{ background: "var(--bg)", border: "1px solid var(--border)" }}>
                    <p className="text-xs font-semibold mb-1.5" style={{ color: "var(--text)" }}>{t.cmpSources}</p>
                    <div className="grid grid-cols-2 gap-2 text-xs">
                      <div>
                        <p className="font-medium mb-0.5" style={{ color: "var(--red-700)" }}>{t.vsGeneric}</p>
                        <p style={{ color: "var(--text-muted)" }}>{t.cmpSourcesGeneric}</p>
                      </div>
                      <div>
                        <p className="font-medium mb-0.5" style={{ color: "var(--emerald-700)" }}>{t.vsCalmParent}</p>
                        <p style={{ color: "var(--text-muted)" }}>{t.cmpSourcesCalm}</p>
                      </div>
                    </div>
                  </div>
                  {/* Structure */}
                  <div className="rounded-xl p-3" style={{ background: "var(--bg)", border: "1px solid var(--border)" }}>
                    <p className="text-xs font-semibold mb-1.5" style={{ color: "var(--text)" }}>{t.cmpStructure}</p>
                    <div className="grid grid-cols-2 gap-2 text-xs">
                      <div>
                        <p className="font-medium mb-0.5" style={{ color: "var(--red-700)" }}>{t.vsGeneric}</p>
                        <p style={{ color: "var(--text-muted)" }}>{t.cmpStructureGeneric}</p>
                      </div>
                      <div>
                        <p className="font-medium mb-0.5" style={{ color: "var(--emerald-700)" }}>{t.vsCalmParent}</p>
                        <p style={{ color: "var(--text-muted)" }}>{t.cmpStructureCalm}</p>
                      </div>
                    </div>
                  </div>
                  {/* Safety */}
                  <div className="rounded-xl p-3" style={{ background: "var(--bg)", border: "1px solid var(--border)" }}>
                    <p className="text-xs font-semibold mb-1.5" style={{ color: "var(--text)" }}>{t.cmpHallucination}</p>
                    <div className="grid grid-cols-2 gap-2 text-xs">
                      <div>
                        <p className="font-medium mb-0.5" style={{ color: "var(--red-700)" }}>{t.vsGeneric}</p>
                        <p style={{ color: "var(--text-muted)" }}>{t.cmpHallucinationGeneric}</p>
                      </div>
                      <div>
                        <p className="font-medium mb-0.5" style={{ color: "var(--emerald-700)" }}>{t.vsCalmParent}</p>
                        <p style={{ color: "var(--text-muted)" }}>{t.cmpHallucinationCalm}</p>
                      </div>
                    </div>
                  </div>
                  {/* Crisis */}
                  <div className="rounded-xl p-3" style={{ background: "var(--bg)", border: "1px solid var(--border)" }}>
                    <p className="text-xs font-semibold mb-1.5" style={{ color: "var(--text)" }}>{t.cmpSafety}</p>
                    <div className="grid grid-cols-2 gap-2 text-xs">
                      <div>
                        <p className="font-medium mb-0.5" style={{ color: "var(--red-700)" }}>{t.vsGeneric}</p>
                        <p style={{ color: "var(--text-muted)" }}>{t.cmpSafetyGeneric}</p>
                      </div>
                      <div>
                        <p className="font-medium mb-0.5" style={{ color: "var(--emerald-700)" }}>{t.vsCalmParent}</p>
                        <p style={{ color: "var(--text-muted)" }}>{t.cmpSafetyCalm}</p>
                      </div>
                    </div>
                  </div>
                </div>
                <p className="text-xs mt-3" style={{ color: "var(--text-muted)", opacity: 0.7 }}>{t.cmpSourcesFootnote}</p>
              </div>

              {/* Close button */}
              <button onClick={() => setShowInfo(false)} className="w-full py-3 rounded-xl font-medium text-white text-sm" style={{ background: "var(--primary)" }}>
                {t.closeInfo}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Header */}
      <header className="sticky top-0 z-30 safe-top" style={{ background: "var(--surface)", borderBottom: "1px solid var(--border)" }}>
        <div className="max-w-2xl mx-auto px-4 py-3 flex items-center justify-between">
          <button onClick={() => { setTab("home"); newSession(); }} className="flex items-center gap-2">
            <span className="text-xl">🧠</span>
            <span className="font-semibold text-sm" style={{ color: "var(--text)" }}>{t.appName}</span>
          </button>
          <div className="flex items-center gap-1">
            {/* Info button */}
            <button onClick={() => setShowInfo(true)} className="p-2 rounded-lg text-sm font-medium pulse-glow" style={{ color: "var(--primary)" }} title={t.howItWorks}>
              ℹ️
            </button>
            {/* Language selector */}
            {LANGUAGES.map((l) => (
              <button
                key={l.code}
                onClick={() => switchLanguage(l.code)}
                className="px-2 py-1 rounded-lg text-base transition-all"
                style={{
                  opacity: lang === l.code ? 1 : 0.4,
                  background: lang === l.code ? "var(--bg)" : "transparent",
                }}
                title={l.label}
              >
                {l.flag}
              </button>
            ))}
            <button onClick={() => setDarkMode(!darkMode)} className="p-2 rounded-lg" style={{ color: "var(--text-muted)" }}>
              {darkMode ? "☀️" : "🌙"}
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-2xl mx-auto px-4 pt-4 pb-24 safe-bottom">

        {/* === HOME TAB === */}
        {tab === "home" && (
          <>
            {/* Profile chip */}
            {profileSaved && profile.name && (
              <div className="flex items-center gap-2 mb-4 text-xs" style={{ color: "var(--text-muted)" }}>
                <span className="px-2 py-1 rounded-full" style={{ background: "var(--surface)", border: "1px solid var(--border)" }}>
                  👶 {profile.name}, {profile.age}
                </span>
              </div>
            )}

            {/* Voice + Input */}
            {!advice && !loading && (
              <div className="text-center mb-6">
                <h2 className="text-lg font-semibold mb-1" style={{ color: "var(--text)" }}>{t.whatsHappening}</h2>
                <p className="text-xs mb-2" style={{ color: "var(--text-muted)" }}>{t.speakOrType}</p>
                <button onClick={() => setShowInfo(true)} className="text-xs font-medium underline" style={{ color: "var(--primary)" }}>
                  {t.howItWorks} →
                </button>
              </div>
            )}

            {/* Voice Button */}
            <div className="flex justify-center mb-4">
              {isRecording ? (
                <button onClick={stopRecording} className="flex items-center gap-3 px-6 py-4 rounded-full text-white font-medium shadow-lg" style={{ background: "#dc2626" }}>
                  <div className="flex items-end gap-0.5 h-5">
                    {[0,1,2,3,4].map(i => (
                      <div key={i} className="wave-bar w-1 bg-white rounded-full" style={{ height: "100%", animationDelay: `${i * 0.1}s` }} />
                    ))}
                  </div>
                  {recordingTime}s — {t.tapToStop}
                </button>
              ) : (
                <button
                  onClick={startRecording}
                  disabled={isTranscribing || loading}
                  className="flex items-center gap-2 px-7 py-4 rounded-full text-white font-medium shadow-md transition-all hover:scale-105 disabled:opacity-50 pulse-glow"
                  style={{ background: "var(--primary)" }}
                >
                  {isTranscribing ? (
                    <><span className="breathe">◌</span> {t.transcribing}</>
                  ) : (
                    <><span className="text-lg">🎤</span> {t.tapToSpeak}</>
                  )}
                </button>
              )}
            </div>

            {/* Divider */}
            {!advice && !loading && (
              <div className="flex items-center gap-3 mb-4">
                <div className="flex-1 h-px" style={{ background: "var(--border)" }} />
                <span className="text-xs" style={{ color: "var(--text-muted)" }}>{t.orType}</span>
                <div className="flex-1 h-px" style={{ background: "var(--border)" }} />
              </div>
            )}

            {/* Text Input */}
            {!advice && !loading && (
              <form onSubmit={handleSubmit} className="mb-6">
                <textarea
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder={t.inputPlaceholder}
                  rows={3}
                  className="w-full px-4 py-3 rounded-2xl text-sm resize-none focus:outline-none focus:ring-2"
                  style={{ background: "var(--surface)", border: "1px solid var(--border)", color: "var(--text)" }}
                  disabled={isRecording || isTranscribing}
                />
                {query.trim() && (
                  <button type="submit" className="w-full mt-3 py-3 rounded-2xl text-white font-medium text-sm transition-colors" style={{ background: "var(--primary)" }}>
                    {t.getAdvice}
                  </button>
                )}
              </form>
            )}

            {/* Quick Topics */}
            {!advice && !loading && !query.trim() && (
              <div className="mb-6">
                <p className="text-xs mb-3" style={{ color: "var(--text-muted)" }}>{t.quickExamples}</p>
                <div className="grid grid-cols-2 gap-2">
                  {TOPIC_CATEGORIES.slice(0, 8).map((topic) => (
                    <button
                      key={topic.id}
                      onClick={() => setQuery(topicExamples[topic.id] || "")}
                      className="px-3 py-2.5 rounded-xl text-left text-xs transition-colors"
                      style={{ background: "var(--surface)", border: "1px solid var(--border)", color: "var(--text)" }}
                    >
                      {topicLabels[topic.id]?.label || topic.label}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Loading / Breathing Circle — stays until advice is parsed */}
            {loading && (
              <div className="text-center py-16">
                <div className="inline-block breathe w-16 h-16 rounded-full mb-4" style={{ background: "var(--primary)", opacity: 0.3 }} />
                <p className="text-sm" style={{ color: "var(--text-muted)" }}>{t.findingBest}</p>
              </div>
            )}

            {/* Streaming Advice — hidden, only used to track progress internally */}
            {loading && streamingAdvice && null}

            {/* Error */}
            {error && (
              <div className="rounded-2xl p-4 mb-4" style={{ background: "var(--red-50)", border: "1px solid var(--error)" }}>
                <p className="text-sm" style={{ color: "var(--red-700)" }}>{error}</p>
              </div>
            )}

            {/* Parsed Advice Display */}
            {advice && !loading && (
              <div className="space-y-3 slide-up">
                {/* Situation */}
                {advice.situation && (
                  <div className="rounded-2xl p-4" style={{ background: "var(--surface)", border: "1px solid var(--border)" }}>
                    <p className="text-xs font-medium mb-1" style={{ color: "var(--text-muted)" }}>{t.situation}</p>
                    <p className="text-sm" style={{ color: "var(--text)" }}>{advice.situation}</p>
                  </div>
                )}

                {/* DO */}
                {advice.dos.length > 0 && (
                  <div className="rounded-2xl p-4" style={{ background: "var(--emerald-50)", border: "1px solid var(--success)" }}>
                    <p className="text-xs font-medium mb-2" style={{ color: "var(--emerald-700)" }}>{t.do}</p>
                    <ul className="space-y-1.5">
                      {advice.dos.map((d, i) => (
                        <li key={i} className="text-sm flex gap-2" style={{ color: "var(--text)" }}>
                          <span style={{ color: "var(--emerald-700)" }}>•</span>
                          <span>{d}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* DON'T */}
                {advice.donts.length > 0 && (
                  <div className="rounded-2xl p-4" style={{ background: "var(--red-50)", border: "1px solid var(--error)" }}>
                    <p className="text-xs font-medium mb-2" style={{ color: "var(--red-700)" }}>{t.dont}</p>
                    <ul className="space-y-1.5">
                      {advice.donts.map((d, i) => (
                        <li key={i} className="text-sm flex gap-2" style={{ color: "var(--text)" }}>
                          <span style={{ color: "var(--red-700)" }}>•</span>
                          <span>{d}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* WHY */}
                {advice.why && (
                  <div className="rounded-2xl p-4" style={{ background: "var(--amber-50)", border: "1px solid var(--accent)" }}>
                    <p className="text-xs font-medium mb-1" style={{ color: "var(--accent)" }}>{t.whyThisWorks}</p>
                    <p className="text-sm" style={{ color: "var(--text)" }}>{advice.why}</p>
                  </div>
                )}

                {/* SOURCE */}
                {advice.source && (
                  <div className="rounded-xl px-4 py-3 flex items-center gap-2" style={{ background: "var(--surface)", border: "1px solid var(--border)" }}>
                    <span className="text-xs" style={{ color: "var(--text-muted)" }}>📖</span>
                    <span className="text-xs" style={{ color: "var(--text-muted)" }}>{advice.source}</span>
                  </div>
                )}

                {/* All Sources */}
                {currentSources.length > 1 && (
                  <div className="flex flex-wrap gap-1.5 px-1">
                    {currentSources.map((s, i) => (
                      <span key={i} className="px-2 py-0.5 rounded-md text-xs" style={{ background: "var(--surface)", border: "1px solid var(--border)", color: "var(--text-muted)" }}>{s}</span>
                    ))}
                  </div>
                )}

                {/* Feedback */}
                {!feedbackGiven && (
                  <div className="rounded-2xl p-4" style={{ background: "var(--surface)", border: "1px solid var(--border)" }}>
                    <p className="text-sm mb-3" style={{ color: "var(--text)" }}>{t.wasThisHelpful}</p>
                    <div className="flex gap-3">
                      <button onClick={() => rateSession(currentSessionId || "", "up")} className="flex-1 py-2.5 rounded-xl text-sm font-medium transition-colors" style={{ border: "1px solid var(--border)", color: "var(--text)" }}>
                        {t.yes}
                      </button>
                      <button onClick={() => rateSession(currentSessionId || "", "down")} className="flex-1 py-2.5 rounded-xl text-sm font-medium transition-colors" style={{ border: "1px solid var(--border)", color: "var(--text)" }}>
                        {t.notReally}
                      </button>
                    </div>
                  </div>
                )}

                {/* Feedback detail for thumbs down */}
                {feedbackGiven === "down" && (
                  <div className="rounded-2xl p-4 slide-up" style={{ background: "var(--surface)", border: "1px solid var(--border)" }}>
                    <p className="text-sm mb-2" style={{ color: "var(--text)" }}>{t.whatWouldHelp}</p>
                    <textarea
                      value={feedbackText}
                      onChange={(e) => setFeedbackText(e.target.value)}
                      placeholder={t.feedbackPlaceholder}
                      rows={2}
                      className="w-full px-3 py-2 rounded-xl text-xs resize-none focus:outline-none"
                      style={{ background: "var(--bg)", border: "1px solid var(--border)", color: "var(--text)" }}
                    />
                  </div>
                )}

                {feedbackGiven === "up" && (
                  <p className="text-xs text-center" style={{ color: "var(--text-muted)" }}>{t.gladHelped}</p>
                )}

                {/* Actions */}
                <div className="flex gap-2">
                  <button onClick={shareAdvice} className="flex-1 py-2.5 rounded-xl text-sm font-medium" style={{ border: "1px solid var(--border)", color: "var(--text)" }}>
                    {t.share}
                  </button>
                  <button onClick={() => currentSessionId && toggleBookmark(currentSessionId)} className="flex-1 py-2.5 rounded-xl text-sm font-medium" style={{ border: "1px solid var(--border)", color: "var(--text)" }}>
                    {sessions.find(s => s.id === currentSessionId)?.bookmarked ? t.saved : t.save}
                  </button>
                  <button onClick={newSession} className="flex-1 py-2.5 rounded-xl text-sm font-medium" style={{ border: "1px solid var(--border)", color: "var(--text)" }}>
                    {t.newAdvice}
                  </button>
                </div>

                {/* Disclaimer */}
                <p className="text-xs text-center pt-2" style={{ color: "var(--text-muted)", opacity: 0.6 }}>
                  {t.disclaimer}
                </p>
              </div>
            )}
          </>
        )}

        {/* === HISTORY TAB === */}
        {tab === "history" && (
          <div>
            <h2 className="text-lg font-semibold mb-4" style={{ color: "var(--text)" }}>{t.recentSessions}</h2>
            {sessions.length === 0 ? (
              <p className="text-sm text-center py-12" style={{ color: "var(--text-muted)" }}>{t.noSessions}</p>
            ) : (
              <div className="space-y-2">
                {sessions.map(s => (
                  <button key={s.id} onClick={() => loadSession(s)} className="w-full text-left rounded-2xl p-4 transition-colors" style={{ background: "var(--surface)", border: "1px solid var(--border)" }}>
                    <div className="flex items-start justify-between gap-2 mb-1">
                      <p className="text-sm font-medium flex-1" style={{ color: "var(--text)" }}>{s.query}</p>
                      <div className="flex items-center gap-1 shrink-0">
                        {s.rating === "up" && <span className="text-xs">👍</span>}
                        {s.rating === "down" && <span className="text-xs">👎</span>}
                        {s.bookmarked && <span className="text-xs">★</span>}
                      </div>
                    </div>
                    <p className="text-xs" style={{ color: "var(--text-muted)" }}>
                      {new Date(s.createdAt).toLocaleDateString()} · {s.sources[0] || "General"}
                    </p>
                  </button>
                ))}
                {sessions.length > 0 && (
                  <button onClick={() => { if (confirm(t.clearHistoryConfirm)) setSessions([]); }} className="w-full py-2 text-xs" style={{ color: "var(--error)" }}>
                    {t.clearHistory}
                  </button>
                )}
              </div>
            )}
          </div>
        )}

        {/* === SAVED TAB === */}
        {tab === "saved" && (
          <div>
            <h2 className="text-lg font-semibold mb-4" style={{ color: "var(--text)" }}>{t.savedAdvice}</h2>
            {sessions.filter(s => s.bookmarked).length === 0 ? (
              <p className="text-sm text-center py-12" style={{ color: "var(--text-muted)" }}>{t.noSaved}</p>
            ) : (
              <div className="space-y-2">
                {sessions.filter(s => s.bookmarked).map(s => (
                  <div key={s.id} className="rounded-2xl p-4" style={{ background: "var(--surface)", border: "1px solid var(--border)" }}>
                    <div className="flex items-start justify-between gap-2 mb-2">
                      <p className="text-sm font-medium flex-1" style={{ color: "var(--text)" }}>{s.query}</p>
                      <button onClick={() => toggleBookmark(s.id)} className="text-xs" style={{ color: "var(--accent)" }}>★</button>
                    </div>
                    <div className="text-xs space-y-1" style={{ color: "var(--text-muted)" }}>
                      {parseAdvice(s.advice).dos.slice(0, 2).map((d, i) => <p key={i}>✅ {d}</p>)}
                    </div>
                    <p className="text-xs mt-2" style={{ color: "var(--text-muted)" }}>📖 {parseAdvice(s.advice).source}</p>
                    <button onClick={() => loadSession(s)} className="text-xs mt-2" style={{ color: "var(--primary)" }}>{t.viewFull}</button>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* === PROFILE TAB === */}
        {tab === "profile" && (
          <div>
            <h2 className="text-lg font-semibold mb-4" style={{ color: "var(--text)" }}>{t.childProfile}</h2>
            <div className="rounded-2xl p-5 mb-4" style={{ background: "var(--surface)", border: "1px solid var(--border)" }}>
              <label className="text-xs font-medium mb-1 block" style={{ color: "var(--text-muted)" }}>{t.childName}</label>
              <input value={profile.name} onChange={e => { setProfile({...profile, name: e.target.value}); setProfileSaved(false); }} placeholder={lang === "ko" ? "예: 민지" : "e.g., Theo"} className="w-full px-3 py-2.5 rounded-xl text-sm mb-3 focus:outline-none" style={{ border: "1px solid var(--border)" }} />
              <label className="text-xs font-medium mb-1 block" style={{ color: "var(--text-muted)" }}>{t.childAge}</label>
              <input value={profile.age} onChange={e => { setProfile({...profile, age: e.target.value}); setProfileSaved(false); }} placeholder={lang === "ko" ? "예: 3살" : "e.g., 3 years"} className="w-full px-3 py-2.5 rounded-xl text-sm mb-3 focus:outline-none" style={{ border: "1px solid var(--border)" }} />
              <label className="text-xs font-medium mb-1 block" style={{ color: "var(--text-muted)" }}>{t.childNotes}</label>
              <input value={profile.notes} onChange={e => { setProfile({...profile, notes: e.target.value}); setProfileSaved(false); }} placeholder={t.childNotesPlaceholder} className="w-full px-3 py-2.5 rounded-xl text-sm mb-3 focus:outline-none" style={{ border: "1px solid var(--border)" }} />
              <button onClick={saveProfile} className="w-full py-2.5 rounded-xl text-white font-medium text-sm" style={{ background: "var(--primary)" }}>
                {profileSaved ? t.profileSaved : t.saveProfile}
              </button>
            </div>

            {/* Topic Browser */}
            <h3 className="text-sm font-semibold mb-3" style={{ color: "var(--text)" }}>{t.browseTopics}</h3>
            <div className="space-y-2 mb-4">
              {TOPIC_CATEGORIES.map(topic => (
                <button key={topic.id} onClick={() => { setQuery(topicExamples[topic.id] || ""); setTab("home"); }} className="w-full text-left rounded-xl p-3" style={{ background: "var(--surface)", border: "1px solid var(--border)" }}>
                  <p className="text-sm font-medium" style={{ color: "var(--text)" }}>{topicLabels[topic.id]?.label || topic.label}</p>
                  <p className="text-xs" style={{ color: "var(--text-muted)" }}>{topicLabels[topic.id]?.description || topic.description}</p>
                </button>
              ))}
            </div>
          </div>
        )}
      </main>

      {/* Bottom Nav */}
      <nav className="fixed bottom-0 left-0 right-0 z-30 safe-bottom" style={{ background: "var(--surface)", borderTop: "1px solid var(--border)" }}>
        <div className="max-w-2xl mx-auto flex items-center justify-around px-2 py-2">
          {([
            { id: "home", icon: "🏠", label: t.tabHome },
            { id: "history", icon: "📋", label: t.tabHistory },
            { id: "saved", icon: "⭐", label: t.tabSaved },
            { id: "profile", icon: "👤", label: t.tabProfile },
          ] as const).map(item => (
            <button key={item.id} onClick={() => setTab(item.id)} className="flex flex-col items-center gap-0.5 px-4 py-1.5 rounded-lg transition-colors" style={{ opacity: tab === item.id ? 1 : 0.5 }}>
              <span className="text-lg">{item.icon}</span>
              <span className="text-xs font-medium" style={{ color: "var(--text)" }}>{item.label}</span>
            </button>
          ))}
        </div>
      </nav>
    </div>
  );
}
