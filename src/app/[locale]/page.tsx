"use client";
import { buildChildContext } from '@/lib/childProfile';
import { calcAge, getStage, STAGE_LABELS, TEMPERAMENT_TAGS, CONDITION_TAGS, createBlankChild } from '@/lib/childProfile';
import type { ChildProfile as ChildProfileFull } from '@/lib/childProfile';

import { useState, useRef, useEffect, use } from "react";
import { useRouter } from "next/navigation";
import { TOPIC_CATEGORIES, parseAgeYears, topicsForAge } from "@/lib/topics";
import { UI, LANGUAGES, TOPIC_LABELS, TOPIC_EXAMPLES_I18N, type Language } from "@/lib/i18n";
import {
  supabase,
  signUp,
  signIn,
  signInWithGoogle,
  signInWithMagicLink,
  signOut,
  syncProfile,
  loadProfile,
  syncSession,
  loadCloudSessions,
} from "@/lib/supabase";
import type { User } from "@supabase/supabase-js";

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
  _synced?: boolean;
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

// === Conversation turn for follow-up memory ===
interface ConversationTurn {
  role: "user" | "assistant";
  content: string;
}

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
  const [webChildren, setWebChildren] = useState<ChildProfileFull[]>([]);
  const [activeChildId, setActiveChildId] = useState<string | null>(null);
  const [editingChild, setEditingChild] = useState<ChildProfileFull | null>(null);

  // Age-filtered topics based on child profile
  const childAgeYears = parseAgeYears(profile.age);
  const visibleTopics = topicsForAge(TOPIC_CATEGORIES, childAgeYears);
  const [loading, setLoading] = useState(false);
  const [streamingAdvice, setStreamingAdvice] = useState("");
  const [advice, setAdvice] = useState<AdviceSection | null>(null);
  const [currentSources, setCurrentSources] = useState<string[]>([]);
  const [currentQuery, setCurrentQuery] = useState("");
  const [error, setError] = useState("");
  const [feedbackGiven, setFeedbackGiven] = useState<"up" | "down" | null>(null);
  const [feedbackText, setFeedbackText] = useState("");
  const [feedbackReasons, setFeedbackReasons] = useState<string[]>([]);
  const [feedbackSubmitted, setFeedbackSubmitted] = useState(false);
  const [currentSessionId, setCurrentSessionId] = useState<string | null>(null);
  const [, setStreamError] = useState(false);
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
  const [conversationThread, setConversationThread] = useState<ConversationTurn[]>([]);
  const [showOnboarding, setShowOnboarding] = useState(false);
  const [showInfo, setShowInfo] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  // Auth state
  const [user, setUser] = useState<User | null>(null);
  const [authMode, setAuthMode] = useState<"none" | "login" | "signup">("none");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [authError, setAuthError] = useState("");
  const [authLoading, setAuthLoading] = useState(false);
  const [magicLinkSent, setMagicLinkSent] = useState(false);

  // Load from storage on mount
  useEffect(() => {
    const savedProfile = loadFromStorage<ChildProfile | null>("pc_profile", null);
    // eslint-disable-next-line react-hooks/set-state-in-effect
    if (savedProfile) { setProfile(savedProfile); setProfileSaved(true); }
    // Load children
    const savedChildren = loadFromStorage<ChildProfileFull[]>("pc_children", []);
    if (savedChildren.length > 0) {
      setWebChildren(savedChildren);
      const savedActive = loadFromStorage<string | null>("pc_active_child", null);
      setActiveChildId(savedActive || savedChildren[0]?.id || null);
    } else if (savedProfile && (savedProfile.name || savedProfile.age)) {
      // Migrate old profile
      const migrated = { id: `child_${Date.now()}`, name: savedProfile.name, ageLabel: savedProfile.age, temperament: [], conditions: [], notes: savedProfile.notes, createdAt: Date.now() };
      setWebChildren([migrated]);
      setActiveChildId(migrated.id);
      saveToStorage("pc_children", [migrated]);
      saveToStorage("pc_active_child", migrated.id);
    }
    const savedSessions = loadFromStorage<Session[]>("pc_sessions", []);
    setSessions(savedSessions);
    const onboarded = loadFromStorage("pc_onboarded", false);
    if (!onboarded) {
      setShowOnboarding(true);
    }
    const dm = loadFromStorage("pc_darkmode", false);
    setDarkMode(dm);
    saveToStorage("pc_lang", initialLang);

    // Init Supabase auth
    if (supabase) {
      supabase.auth.getSession().then(({ data: { session } }) => {
        if (session?.user) {
          setUser(session.user);
          loadProfile().then(p => {
            if (p?.child_name || p?.child_age) {
              setProfile({ name: p.child_name || "", age: p.child_age || "", notes: p.child_notes || "" });
              setProfileSaved(true);
            }
          });
          loadCloudSessions().then(cloud => {
            if (cloud.length > 0) {
              const mapped: Session[] = cloud.map(c => ({
                id: c.id, query: c.query, advice: c.advice, sources: c.sources || [],
                topicCategory: c.topic_category || "general", rating: c.rating,
                bookmarked: c.bookmarked, feedbackText: c.feedback_text,
                createdAt: c.created_at, childName: c.child_name, childAge: c.child_age,
                language: (c.language as Language) || "en",
              }));
              setSessions(prev => {
                const cloudIds = new Set(mapped.map(s => s.id));
                return [...mapped, ...prev.filter(s => !cloudIds.has(s.id))].slice(0, 100);
              });
            }
          });
        }
      });
      const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
        setUser(session?.user ?? null);
      });
      updateStreak();
      return () => subscription.unsubscribe();
    }
    updateStreak();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Dark mode toggle
  useEffect(() => {
    document.documentElement.style.colorScheme = darkMode ? "dark" : "light";
    saveToStorage("pc_darkmode", darkMode);
  }, [darkMode]);

  // Save sessions when changed
  useEffect(() => {
    saveToStorage("pc_sessions", sessions);
    // Sync to cloud if logged in
    if (user) {
      const latest = sessions[0];
      if (latest && !latest._synced) {
        syncSession({
          id: latest.id,
          query: latest.query,
          advice: latest.advice,
          sources: latest.sources,
          topic_category: latest.topicCategory,
          rating: latest.rating,
          bookmarked: latest.bookmarked,
          feedback_text: latest.feedbackText,
          language: latest.language,
          child_name: latest.childName,
          child_age: latest.childAge,
          created_at: latest.createdAt,
        }).then(() => {
          // Mark as synced to avoid re-syncing
          setSessions(prev => prev.map((s, i) => i === 0 ? { ...s, _synced: true } : s));
        });
      }
    }
  }, [sessions, user]);

  // Sync profile when it changes
  useEffect(() => {
    if (user && profileSaved) {
      syncProfile({
        child_name: profile.name,
        child_age: profile.age,
        child_notes: profile.notes,
        preferred_language: lang,
      });
    }
  }, [profile, profileSaved, user, lang]);

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
  async function handleSubmit(e?: React.FormEvent, overrideQuery?: string, deepDive = false) {
    e?.preventDefault();
    const q = (overrideQuery ?? query).trim();
    if (!q) return;
    if (overrideQuery) setQuery(overrideQuery);

    setLoading(true);
    setError("");
    setAdvice(null);
    setStreamingAdvice("");
    setFeedbackGiven(null);
    setFeedbackText("");
    setCurrentQuery(q);
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
          query: q,
          childContext: (() => {
            const ac = webChildren.find(c => c.id === activeChildId);
            return ac ? buildChildContext(ac) : buildChildContext({ id: "web", name: profile.name, ageLabel: profile.age, temperament: [], conditions: [], notes: profile.notes, createdAt: 0 });
          })(),
          childName: (() => { const ac = webChildren.find(c => c.id === activeChildId); return ac?.name || profile.name || undefined; })(),
          childAge: (() => { const ac = webChildren.find(c => c.id === activeChildId); return (ac ? (calcAge(ac.birthDate)?.label || ac.ageLabel) : profile.age) || undefined; })(),
          childNotes: profile.notes || undefined,
          language: lang,
          deepDive,
          userId,
          conversationHistory: conversationThread.length > 0 ? conversationThread : undefined,
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
                query: q,
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

              // Add to conversation thread for follow-up memory
              setConversationThread(prev => [
                ...prev,
                { role: "user", content: q },
                { role: "assistant", content: fullAdvice.slice(0, 1500) },
              ]);
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
  // === Auth ===
  async function handleAuth(e: React.FormEvent) {
    e.preventDefault();
    setAuthLoading(true);
    setAuthError("");
    try {
      if (authMode === "signup") {
        const { error } = await signUp(email, password);
        if (error) throw error;
        setAuthMode("none");
      } else if (authMode === "login") {
        const { error } = await signIn(email, password);
        if (error) throw error;
        setAuthMode("none");
      }
    } catch (err) {
      setAuthError(err instanceof Error ? err.message : "Authentication failed");
    } finally {
      setAuthLoading(false);
    }
  }

  async function handleMagicLink(e: React.FormEvent) {
    e.preventDefault();
    setAuthLoading(true);
    setAuthError("");
    try {
      const { error } = await signInWithMagicLink(email);
      if (error) throw error;
      setMagicLinkSent(true);
    } catch (err) {
      setAuthError(err instanceof Error ? err.message : "Failed to send magic link");
    } finally {
      setAuthLoading(false);
    }
  }

  async function handleSignOut() {
    await signOut();
    setUser(null);
    setAuthMode("none");
  }

  // === Sessions ===
  function rateSession(sessionId: string, rating: "up" | "down") {
    const sid = sessionId || currentSessionId;
    if (!sid) return;
    setSessions(prev => prev.map(s => s.id === sid ? { ...s, rating, _synced: false } : s));
    setFeedbackGiven(rating);
    setFeedbackReasons([]);
    setFeedbackText("");
    setFeedbackSubmitted(false);
  }

  function toggleReason(reason: string) {
    setFeedbackReasons(prev => prev.includes(reason) ? prev.filter(r => r !== reason) : [...prev, reason]);
  }

  function submitFeedback() {
    const sid = currentSessionId;
    if (!sid) return;
    const reasons = feedbackReasons.join(", ");
    const fullFeedback = [reasons, feedbackText].filter(Boolean).join(" — ");
    setSessions(prev => prev.map(s => s.id === sid ? { ...s, feedbackText: fullFeedback || undefined, _synced: false } : s));
    setFeedbackSubmitted(true);
    // Log feedback to server with reasons
    fetch("/api/feedback", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        queryId: sid,
        query: currentQuery,
        rating: feedbackGiven,
        feedbackText: fullFeedback || undefined,
        language: lang,
      }),
    }).catch(() => {});
  }

  function toggleBookmark(sessionId: string) {
    const sid = sessionId || currentSessionId;
    if (!sid) return;
    setSessions(prev => prev.map(s => s.id === sid ? { ...s, bookmarked: !s.bookmarked, _synced: false } : s));
  }

  function newSession() {
    abortControllerRef.current?.abort();
    setQuery(""); setAdvice(null); setStreamingAdvice("");
    setFeedbackGiven(null); setFeedbackText(""); setFeedbackReasons([]); setFeedbackSubmitted(false);
    setCurrentSessionId(null);
    setConversationThread([]);
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
    setTimeout(() => setShowInfo(true), 300);
  }

  // === Streak tracking ===
  function updateStreak() {
    const today = new Date().toISOString().split("T")[0];
    const streak = loadFromStorage<{lastActive: string; count: number}>("pc_streak", { lastActive: "", count: 0 });
    if (streak.lastActive === today) return; // already counted today
    const yesterday = new Date(Date.now() - 86400000).toISOString().split("T")[0];
    const newCount = streak.lastActive === yesterday ? streak.count + 1 : 1;
    saveToStorage("pc_streak", { lastActive: today, count: newCount });
  }

  const currentStreak = loadFromStorage<{lastActive: string; count: number}>("pc_streak", { lastActive: "", count: 0 });

  // === Share ===
  async function shareAdvice() {
    if (!advice) return;
    const lines: string[] = [
      `🧠 ${t.appName}`,
      ``,
      `📋 ${advice.situation || currentQuery}`,
      ``,
    ];
    if (advice.dos.length > 0) {
      lines.push("✅ " + (lang === "ko" ? "하세요:" : "DO:"));
      advice.dos.forEach(d => lines.push(`  • ${d}`));
      lines.push("");
    }
    if (advice.donts.length > 0) {
      lines.push("❌ " + (lang === "ko" ? "하지 마세요:" : "DON'T:"));
      advice.donts.forEach(d => lines.push(`  • ${d}`));
      lines.push("");
    }
    if (advice.why) {
      lines.push("🧠 " + (lang === "ko" ? "이유:" : "WHY:"));
      lines.push(`  ${advice.why.slice(0, 200)}${advice.why.length > 200 ? "..." : ""}`);
      lines.push("");
    }
    if (advice.source) lines.push(`📖 ${advice.source}`);
    lines.push(``, `— ${t.appName}`);
    const text = lines.join("\n");
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
                        <p className="font-medium mb-0.5" style={{ color: "var(--emerald-700)" }}>{t.vsApp}</p>
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
                        <p className="font-medium mb-0.5" style={{ color: "var(--emerald-700)" }}>{t.vsApp}</p>
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
                        <p className="font-medium mb-0.5" style={{ color: "var(--emerald-700)" }}>{t.vsApp}</p>
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
                        <p className="font-medium mb-0.5" style={{ color: "var(--emerald-700)" }}>{t.vsApp}</p>
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
            {/* Telegram button */}
            <a href="https://t.me/CalmParent1Bot" target="_blank" rel="noopener" className="p-2 rounded-lg flex items-center justify-center" style={{ color: "#0088cc" }} title="Telegram">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M9.78 18.65l.28-4.23 7.68-6.92c.34-.31-.07-.46-.52-.19L7.74 13.3 3.64 12c-.88-.25-.89-.86.2-1.3l15.97-6.16c.73-.33 1.43.18 1.15 1.3l-2.72 12.81c-.19.91-.74 1.13-1.5.71L12.6 16.3l-1.99 1.93c-.23.23-.42.42-.83.42z"/></svg>
            </a>
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
            {/* Profile chip + streak */}
            <div className="flex items-center gap-2 mb-4 text-xs flex-wrap" style={{ color: "var(--text-muted)" }}>
              {(() => {
                const ac = webChildren.find(c => c.id === activeChildId);
                const name = ac?.name || (profileSaved ? profile.name : "");
                const age = ac ? (calcAge(ac.birthDate)?.label || ac.ageLabel) : profile.age;
                if (!name) return null;
                return (
                  <span className="px-2 py-1 rounded-full" style={{ background: "var(--surface)", border: "1px solid var(--border)" }}>
                    👶 {name}, {age}
                  </span>
                );
              })()}
              {currentStreak.count >= 2 && (
                <span className="px-2 py-1 rounded-full" style={{ background: "var(--surface)", border: "1px solid var(--border)", color: "var(--accent)" }}>
                  🔥 {currentStreak.count} {lang === "ko" ? "일 연속" : "day streak"}
                </span>
              )}
            </div>

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
                  {visibleTopics.slice(0, 8).map((topic) => (
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
                {streamingAdvice && (
                  <p className="text-xs mt-2 max-w-md mx-auto" style={{ color: "var(--text-muted)", opacity: 0.6 }}>
                    {streamingAdvice.slice(-100)}
                  </p>
                )}
              </div>
            )}

            {/* Streaming Advice — hidden, only used to track progress internally */}
            {loading && streamingAdvice && null}

            {/* Error */}
            {error && (
              <div className="rounded-2xl p-4 mb-4" style={{ background: "var(--red-50)", border: "1px solid var(--error)" }}>
                <p className="text-sm" style={{ color: "var(--red-700)" }}>{error}</p>
                <button onClick={() => { setError(""); setStreamError(false); handleSubmit(); }} className="mt-2 text-xs font-medium" style={{ color: "var(--primary)" }}>
                  {lang === "ko" ? "다시 시도" : "Try again"}
                </button>
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

                {/* Go Deeper & Ask Follow-up */}
                {!feedbackGiven && (
                  <div className="flex gap-3">
                    <button
                      onClick={() => handleSubmit(undefined, currentQuery || query, true)}
                      className="flex-1 py-3 rounded-xl text-sm font-medium transition-colors"
                      style={{ background: "var(--primary)", color: "white" }}
                    >
                      🔍 Go Deeper
                    </button>
                    <button
                      onClick={() => {
                        const input = document.getElementById('followup-input');
                        if (input) input.focus();
                      }}
                      className="flex-1 py-3 rounded-xl text-sm font-medium transition-colors"
                      style={{ border: "1px solid var(--primary)", color: "var(--primary)" }}
                    >
                      💬 Ask Follow-up
                    </button>
                  </div>
                )}

                {/* Conversation thread history */}
                {!feedbackGiven && conversationThread.length > 0 && (
                  <div className="rounded-2xl p-3 mb-2 space-y-2" style={{ background: "var(--bg)", border: "1px solid var(--border)" }}>
                    <p className="text-xs font-medium mb-1" style={{ color: "var(--text-muted)" }}>💬 {lang === "ko" ? "대화 기록" : "Conversation"}</p>
                    {conversationThread.map((turn, i) => (
                      <div key={i} className="text-xs" style={{
                        paddingLeft: turn.role === "user" ? "0" : "12px",
                        borderLeft: turn.role === "assistant" ? "2px solid var(--border)" : "none",
                      }}>
                        <span style={{ color: turn.role === "user" ? "var(--primary)" : "var(--text-muted)", fontWeight: 500 }}>
                          {turn.role === "user" ? (lang === "ko" ? "질문" : "You") : (lang === "ko" ? "코치" : "Coach")}:
                        </span>{" "}
                        <span style={{ color: "var(--text)" }}>
                          {turn.role === "user" ? turn.content : turn.content.slice(0, 120) + (turn.content.length > 120 ? "..." : "")}
                        </span>
                      </div>
                    ))}
                  </div>
                )}

                {/* Follow-up input */}
                {!feedbackGiven && (
                  <>
                  <input
                    id="followup-input"
                    type="text"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    onKeyDown={(e) => { if (e.key === 'Enter' && query.trim()) handleSubmit(e as unknown as React.FormEvent); }}
                    placeholder={lang === "ko" ? "추가 질문을 입력하세요..." : "Type a follow-up question..."}
                    className="w-full px-4 py-3 rounded-xl text-sm focus:outline-none focus:ring-2"
                    style={{ background: "var(--surface)", border: "1px solid var(--border)", color: "var(--text)" }}
                  />
                  </>
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

                {/* Feedback panel — after rating, before submit */}
                {feedbackGiven && !feedbackSubmitted && (
                  <div className="rounded-2xl p-4 slide-up" style={{ background: "var(--surface)", border: "1px solid var(--border)" }}>
                    <p className="text-sm font-medium mb-3" style={{ color: "var(--text)" }}>
                      {feedbackGiven === "up" ? "👍 " + t.fbUpTitle : "👎 " + t.fbDownTitle}
                    </p>
                    {/* Reason chips */}
                    <div className="flex flex-wrap gap-2 mb-3">
                      {(feedbackGiven === "up"
                        ? [t.fbReasonSpecific, t.fbReasonPractical, t.fbReasonGentle, t.fbReasonFast, t.fbReasonClear]
                        : [t.fbReasonGeneric, t.fbReasonConfusing, t.fbReasonUnsafe, t.fbReasonConflict, t.fbReasonNotRelevant, t.fbReasonTooLong]
                      ).map(reason => (
                        <button
                          key={reason}
                          onClick={() => toggleReason(reason)}
                          className="px-3 py-1.5 rounded-full text-xs font-medium transition-all"
                          style={{
                            border: "1px solid var(--border)",
                            background: feedbackReasons.includes(reason) ? "var(--primary)" : "transparent",
                            color: feedbackReasons.includes(reason) ? "white" : "var(--text)",
                          }}
                        >
                          {reason}
                        </button>
                      ))}
                    </div>
                    {/* Optional text */}
                    <textarea
                      value={feedbackText}
                      onChange={(e) => setFeedbackText(e.target.value)}
                      placeholder={t.feedbackPlaceholder}
                      rows={2}
                      className="w-full px-3 py-2 rounded-xl text-xs resize-none focus:outline-none mb-3"
                      style={{ background: "var(--bg)", border: "1px solid var(--border)", color: "var(--text)" }}
                    />
                    <div className="flex gap-2">
                      <button onClick={submitFeedback} className="flex-1 py-2.5 rounded-xl text-white font-medium text-sm" style={{ background: "var(--primary)" }}>
                        {t.fbSubmit}
                      </button>
                      <button onClick={() => { setFeedbackSubmitted(true); }} className="px-4 py-2.5 rounded-xl text-sm font-medium" style={{ border: "1px solid var(--border)", color: "var(--text-muted)" }}>
                        {t.fbSkip}
                      </button>
                    </div>
                  </div>
                )}

                {/* After submit */}
                {feedbackGiven && feedbackSubmitted && (
                  <p className="text-xs text-center" style={{ color: "var(--text-muted)" }}>{t.fbThanks}</p>
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

                {/* Related topics */}
                {(() => {
                  const currentCat = sessions.find(s => s.id === currentSessionId)?.topicCategory;
                  if (!currentCat) return null;
                  const related = visibleTopics
                    .filter(t => t.id !== currentCat)
                    .slice(0, 4);
                  if (related.length === 0) return null;
                  return (
                    <div className="rounded-2xl p-4" style={{ background: "var(--surface)", border: "1px solid var(--border)" }}>
                      <p className="text-xs font-medium mb-2" style={{ color: "var(--text-muted)" }}>
                        {lang === "ko" ? "관련 주제" : "Related topics"}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {related.map(t => (
                          <button
                            key={t.id}
                            onClick={() => { setQuery(topicExamples[t.id] || ""); setTab("home"); newSession(); }}
                            className="px-3 py-1.5 rounded-full text-xs font-medium transition-all"
                            style={{ border: "1px solid var(--border)", color: "var(--text)" }}
                          >
                            {(lang === "ko" ? topicLabels[t.id]?.label : topicLabels[t.id]?.label) || t.label}
                          </button>
                        ))}
                      </div>
                    </div>
                  );
                })()}

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
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-semibold" style={{ color: "var(--text)" }}>{t.recentSessions}</h2>
              {sessions.length > 0 && (
                <span className="text-xs px-2 py-1 rounded-full" style={{ background: "var(--surface)", border: "1px solid var(--border)", color: "var(--text-muted)" }}>
                  {sessions.length} {lang === "ko" ? "개" : "total"}
                </span>
              )}
            </div>
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
            {/* Auth section */}
            {user ? (
              <div className="rounded-2xl p-4 mb-4" style={{ background: "var(--surface)", border: "1px solid var(--border)" }}>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium" style={{ color: "var(--text)" }}>
                      {t.signedInAs || "Signed in"}
                    </p>
                    <p className="text-xs" style={{ color: "var(--text-muted)" }}>{user.email}</p>
                  </div>
                  <button onClick={handleSignOut} className="px-3 py-1.5 rounded-lg text-xs font-medium" style={{ border: "1px solid var(--border)", color: "var(--text)" }}>
                    {t.signOut || "Sign Out"}
                  </button>
                </div>
                <p className="text-xs mt-2" style={{ color: "var(--emerald-700)" }}>☁️ {t.cloudSync || "Your advice is synced across devices"}</p>
              </div>
            ) : authMode !== "none" ? (
              <div className="rounded-2xl p-5 mb-4" style={{ background: "var(--surface)", border: "1px solid var(--border)" }}>
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-sm font-semibold" style={{ color: "var(--text)" }}>
                    {authMode === "login" ? (t.login || "Log In") : (t.createAccount || "Create Account")}
                  </h3>
                  <button onClick={() => setAuthMode("none")} className="text-xs" style={{ color: "var(--text-muted)" }}>✕</button>
                </div>
                {magicLinkSent ? (
                  <p className="text-sm text-center py-4" style={{ color: "var(--text)" }}>✉️ {t.checkEmail || "Check your email for a sign-in link!"}</p>
                ) : (
                  <form onSubmit={authMode === "login" ? handleMagicLink : handleAuth} className="space-y-3">
                    <input
                      type="email"
                      value={email}
                      onChange={e => setEmail(e.target.value)}
                      placeholder="email@example.com"
                      required
                      className="w-full px-3 py-2.5 rounded-xl text-sm focus:outline-none"
                      style={{ border: "1px solid var(--border)", background: "var(--bg)", color: "var(--text)" }}
                    />
                    {authMode === "signup" && (
                      <input
                        type="password"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        placeholder={t.password || "Password (min 6 chars)"}
                        required
                        minLength={6}
                        className="w-full px-3 py-2.5 rounded-xl text-sm focus:outline-none"
                        style={{ border: "1px solid var(--border)", background: "var(--bg)", color: "var(--text)" }}
                      />
                    )}
                    {authError && <p className="text-xs" style={{ color: "var(--error)" }}>{authError}</p>}
                    <button type="submit" disabled={authLoading} className="w-full py-2.5 rounded-xl text-white font-medium text-sm disabled:opacity-50" style={{ background: "var(--primary)" }}>
                      {authLoading ? "..." : authMode === "login" ? (t.sendLink || "Send Magic Link") : (t.signUp || "Sign Up")}
                    </button>
                    {authMode === "login" && (
                      <button type="button" onClick={() => setAuthMode("signup")} className="w-full text-xs" style={{ color: "var(--primary)" }}>
                        {t.noAccount || "No account? Sign up →"}
                      </button>
                    )}
                    {authMode === "signup" && (
                      <button type="button" onClick={() => setAuthMode("login")} className="w-full text-xs" style={{ color: "var(--primary)" }}>
                        {t.haveAccount || "Already have an account? Log in →"}
                      </button>
                    )}
                  </form>
                )}
              </div>
            ) : (
              <div className="rounded-2xl p-4 mb-4" style={{ background: "var(--surface)", border: "1px solid var(--border)" }}>
                <p className="text-sm mb-3" style={{ color: "var(--text-muted)" }}>{t.syncDesc || "Create an account to sync your saved advice across devices"}</p>
                {/* Google OAuth */}
                <button onClick={() => signInWithGoogle()} className="w-full py-2.5 rounded-xl text-sm font-medium mb-3 flex items-center justify-center gap-2" style={{ border: "1px solid var(--border)", background: "#fff", color: "#3c4043" }}>
                  <svg width="18" height="18" viewBox="0 0 24 24"><path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/><path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/><path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/><path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/></svg>
                  {lang === "ko" ? "Google로 계속하기" : "Continue with Google"}
                </button>
                {/* Divider */}
                <div className="flex items-center gap-3 mb-3">
                  <div className="flex-1 h-px" style={{ background: "var(--border)" }} />
                  <span className="text-xs" style={{ color: "var(--text-muted)" }}>{lang === "ko" ? "또는" : "or"}</span>
                  <div className="flex-1 h-px" style={{ background: "var(--border)" }} />
                </div>
                <div className="flex gap-2">
                  <button onClick={() => setAuthMode("signup")} className="flex-1 py-2.5 rounded-xl text-white font-medium text-sm" style={{ background: "var(--primary)" }}>
                    {t.createAccount || "Create Account"}
                  </button>
                  <button onClick={() => setAuthMode("login")} className="flex-1 py-2.5 rounded-xl text-sm font-medium" style={{ border: "1px solid var(--border)", color: "var(--text)" }}>
                    {t.login || "Log In"}
                  </button>
                </div>
              </div>
            )}

            <h2 className="text-lg font-semibold mb-4" style={{ color: "var(--text)" }}>{lang === "ko" ? "👶 아이 프로필" : "👶 Children"}</h2>

            {/* Child list */}
            {!editingChild && (
              <div className="space-y-2 mb-4">
                {webChildren.map((child) => {
                  const age = calcAge(child.birthDate);
                  const stage = getStage(child.birthDate, child.ageLabel);
                  return (
                    <button key={child.id} onClick={() => setEditingChild({ ...child })}
                      className="w-full text-left rounded-2xl p-4 transition-colors"
                      style={{
                        background: activeChildId === child.id ? "var(--emerald-50)" : "var(--surface)",
                        border: `1px solid ${activeChildId === child.id ? "var(--success)" : "var(--border)"}`,
                      }}>
                      <div className="flex justify-between items-center">
                        <div>
                          <p className="text-sm font-semibold" style={{ color: "var(--text)" }}>{child.name || "Unnamed"}</p>
                          <p className="text-xs" style={{ color: "var(--text-muted)" }}>
                            {age?.label || child.ageLabel || "—"}{stage ? ` · ${STAGE_LABELS[stage]}` : ""}
                          </p>
                          {child.temperament?.length > 0 && (
                            <p className="text-xs mt-1" style={{ color: "var(--text-muted)" }}>{child.temperament.join(", ")}</p>
                          )}
                        </div>
                        {activeChildId === child.id && <span className="text-xs font-semibold" style={{ color: "var(--primary)" }}>● ACTIVE</span>}
                      </div>
                    </button>
                  );
                })}
                <button onClick={() => setEditingChild(createBlankChild())}
                  className="w-full rounded-2xl py-3 text-sm font-semibold transition-colors"
                  style={{ border: `2px dashed var(--success)`, background: "var(--emerald-50)", color: "var(--primary)" }}>
                  {lang === "ko" ? "+ 아이 추가" : "+ Add Child"}
                </button>
              </div>
            )}

            {/* Edit/Add child form */}
            {editingChild && (
              <div className="rounded-2xl p-5 mb-4 space-y-3" style={{ background: "var(--surface)", border: "1px solid var(--border)" }}>
                <label className="text-xs font-medium block" style={{ color: "var(--text-muted)" }}>{t.childName}</label>
                <input value={editingChild.name || ""} onChange={e => setEditingChild({...editingChild, name: e.target.value})}
                  placeholder={lang === "ko" ? "예: 민지" : "e.g., Theo"}
                  className="w-full px-3 py-2.5 rounded-xl text-sm focus:outline-none" style={{ border: "1px solid var(--border)" }} />

                <label className="text-xs font-medium block" style={{ color: "var(--text-muted)" }}>{lang === "ko" ? "생년월일 (선택)" : "Birth Date (optional)"}</label>
                <input type="date" value={editingChild.birthDate || ""} onChange={e => setEditingChild({...editingChild, birthDate: e.target.value})}
                  className="w-full px-3 py-2.5 rounded-xl text-sm focus:outline-none" style={{ border: "1px solid var(--border)" }} />
                {editingChild.birthDate && (
                  <p className="text-xs" style={{ color: "var(--primary)" }}>{calcAge(editingChild.birthDate)?.label}{getStage(editingChild.birthDate) ? ` · ${STAGE_LABELS[getStage(editingChild.birthDate)!]}` : ""}</p>
                )}

                {!editingChild.birthDate && (
                  <>
                    <label className="text-xs font-medium block" style={{ color: "var(--text-muted)" }}>{lang === "ko" ? "나이" : "Age"}</label>
                    <input value={editingChild.ageLabel || ""} onChange={e => setEditingChild({...editingChild, ageLabel: e.target.value})}
                      placeholder={lang === "ko" ? "예: 3살" : "e.g., 3 years"}
                      className="w-full px-3 py-2.5 rounded-xl text-sm focus:outline-none" style={{ border: "1px solid var(--border)" }} />
                  </>
                )}

                {/* Temperament tags */}
                <label className="text-xs font-medium block mt-2" style={{ color: "var(--text-muted)" }}>{lang === "ko" ? "성향" : "Temperament"}</label>
                <div className="flex flex-wrap gap-1.5">
                  {TEMPERAMENT_TAGS.map(tag => {
                    const sel = editingChild.temperament?.includes(tag.id);
                    return (
                      <button key={tag.id} onClick={() => {
                        const tags = editingChild.temperament || [];
                        setEditingChild({...editingChild, temperament: sel ? tags.filter((t: string) => t !== tag.id) : [...tags, tag.id]});
                      }}
                        className="px-3 py-1.5 rounded-lg text-xs font-medium transition-colors"
                        style={{ background: sel ? "var(--primary)" : "transparent", color: sel ? "#fff" : "var(--text)", border: `1px solid ${sel ? "var(--primary)" : "var(--border)"}` }}>
                        {tag.label}
                      </button>
                    );
                  })}
                </div>

                {/* Conditions */}
                <label className="text-xs font-medium block mt-2" style={{ color: "var(--text-muted)" }}>{lang === "ko" ? "관련 상황 (선택)" : "Conditions (optional)"}</label>
                <div className="flex flex-wrap gap-1.5">
                  {CONDITION_TAGS.map(tag => {
                    const sel = editingChild.conditions?.includes(tag.id);
                    return (
                      <button key={tag.id} onClick={() => {
                        const tags = editingChild.conditions || [];
                        setEditingChild({...editingChild, conditions: sel ? tags.filter((t: string) => t !== tag.id) : [...tags, tag.id]});
                      }}
                        className="px-3 py-1.5 rounded-lg text-xs font-medium transition-colors"
                        style={{ background: sel ? "var(--primary)" : "transparent", color: sel ? "#fff" : "var(--text)", border: `1px solid ${sel ? "var(--primary)" : "var(--border)"}` }}>
                        {tag.label}
                      </button>
                    );
                  })}
                </div>

                <label className="text-xs font-medium block mt-2" style={{ color: "var(--text-muted)" }}>{t.childNotes}</label>
                <input value={editingChild.notes || ""} onChange={e => setEditingChild({...editingChild, notes: e.target.value})}
                  placeholder={t.childNotesPlaceholder}
                  className="w-full px-3 py-2.5 rounded-xl text-sm focus:outline-none" style={{ border: "1px solid var(--border)" }} />

                <div className="flex gap-2 pt-2">
                  <button onClick={() => {
                    const exists = webChildren.find(c => c.id === editingChild.id);
                    let updated;
                    if (exists) {
                      updated = webChildren.map(c => c.id === editingChild.id ? editingChild : c);
                    } else {
                      updated = [...webChildren, editingChild];
                    }
                    setWebChildren(updated);
                    saveToStorage("pc_children", updated);
                    if (!activeChildId && updated.length === 1) {
                      setActiveChildId(editingChild.id);
                      saveToStorage("pc_active_child", editingChild.id);
                    }
                    setEditingChild(null);
                  }} className="flex-1 py-2.5 rounded-xl text-white font-medium text-sm" style={{ background: "var(--primary)" }}>
                    {lang === "ko" ? "저장" : "Save"}
                  </button>
                  {editingChild.id !== activeChildId && webChildren.find(c => c.id === editingChild.id) && (
                    <button onClick={() => { setActiveChildId(editingChild.id); saveToStorage("pc_active_child", editingChild.id); }} className="px-4 py-2.5 rounded-xl text-sm font-medium" style={{ border: "1px solid var(--success)", background: "var(--emerald-50)", color: "var(--primary)" }}>
                      Set Active
                    </button>
                  )}
                </div>
                {webChildren.find(c => c.id === editingChild.id) && (
                  <button onClick={() => {
                    const updated = webChildren.filter(c => c.id !== editingChild.id);
                    setWebChildren(updated);
                    saveToStorage("pc_children", updated);
                    if (activeChildId === editingChild.id) {
                      setActiveChildId(updated[0]?.id || null);
                      saveToStorage("pc_active_child", updated[0]?.id || null);
                    }
                    setEditingChild(null);
                  }} className="w-full py-2 text-xs" style={{ color: "var(--error)" }}>
                    {lang === "ko" ? "🗑 삭제" : "🗑 Delete Child"}
                  </button>
                )}
                <button onClick={() => setEditingChild(null)} className="w-full py-2 text-xs" style={{ color: "var(--text-muted)" }}>
                  {lang === "ko" ? "취소" : "Cancel"}
                </button>
              </div>
            )}

            {/* Topic Browser */}
            <h3 className="text-sm font-semibold mb-3" style={{ color: "var(--text)" }}>{t.browseTopics}</h3>
            <div className="space-y-2 mb-4">
              {visibleTopics.map(topic => (
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
