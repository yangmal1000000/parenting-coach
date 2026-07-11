"use client";

import { useState, useEffect, useCallback } from "react";

interface QueryLog {
  id: string;
  query: string;
  language: string;
  childAge?: string;
  topicCategory?: string;
  sources?: string[];
  advice?: string;
  responseMs?: number;
  device?: string;
  userId?: string;
  timestamp: number;
}
interface FeedbackLog {
  queryId: string;
  query: string;
  rating: "up" | "down";
  feedbackText?: string;
  language: string;
  timestamp: number;
}
interface Analytics {
  totalQueries: number;
  recentCount: number;
  uniqueUsers: number;
  daily: Record<string, number>;
  languages: Record<string, number>;
  topics: Record<string, number>;
  devices: Record<string, number>;
  avgResponseMs: number | null;
  followUpRate: number | null;
  queries: QueryLog[];
  feedback: FeedbackLog[];
  feedbackSummary: { up: number; down: number; total: number };
}

export default function AdminPage() {
  const [authed, setAuthed] = useState(false);
  const [password, setPassword] = useState("");
  const [data, setData] = useState<Analytics | null>(null);
  const [loading, setLoading] = useState(false);
  const [days, setDays] = useState(7);
  const [error, setError] = useState("");

  // Check if already authed in sessionStorage
  useEffect(() => {
    const saved = sessionStorage.getItem("admin_auth");
    if (saved) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setAuthed(true);
      setPassword(saved);
    }
  }, []);

  const fetchData = useCallback(async (d: number) => {
    setLoading(true);
    setError("");
    try {
      const res = await fetch(`/api/admin?days=${d}`, {
        headers: { Authorization: `Bearer ${password}` },
      });
      if (!res.ok) throw new Error("Failed");
      const json = await res.json();
      setData(json);
    } catch {
      setError("Failed to load analytics");
    } finally {
      setLoading(false);
    }
  }, [password]);

  // Fetch data when authed
  useEffect(() => {
    if (!authed) return;
    // eslint-disable-next-line react-hooks/set-state-in-effect
    fetchData(days);
  }, [authed, days, fetchData]);

  function handleLogin(e: React.FormEvent) {
    e.preventDefault();
    if (password) {
      sessionStorage.setItem("admin_auth", password);
      setAuthed(true);
    }
  }

  // Login screen
  if (!authed) {
    return (
      <div className="min-h-screen flex items-center justify-center p-6" style={{ background: "#0a0a0a" }}>
        <form onSubmit={handleLogin} className="max-w-sm w-full">
          <h1 className="text-xl font-bold mb-4 text-white">🔒 Admin Dashboard</h1>
          <input
            type="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            placeholder="Password"
            className="w-full px-4 py-3 rounded-xl text-sm bg-zinc-900 border border-zinc-700 text-white mb-3 focus:outline-none"
            autoFocus
          />
          <button type="submit" className="w-full py-3 rounded-xl bg-emerald-600 text-white font-medium text-sm">
            Login
          </button>
        </form>
      </div>
    );
  }

  // Dashboard
  return (
    <div className="min-h-screen p-6" style={{ background: "#0a0a0a", color: "#fff" }}>
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-bold">📊 Calm Parent — Dashboard</h1>
          <div className="flex gap-2">
            {[1, 7, 30].map(d => (
              <button
                key={d}
                onClick={() => setDays(d)}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${days === d ? "bg-emerald-600 text-white" : "bg-zinc-800 text-zinc-400"}`}
              >
                {d === 1 ? "24h" : `${d}d`}
              </button>
            ))}
            <button onClick={() => { sessionStorage.removeItem("admin_auth"); setAuthed(false); setPassword(""); }} className="px-3 py-1.5 rounded-lg text-xs bg-zinc-800 text-zinc-400">
              Logout
            </button>
          </div>
        </div>

        {loading && <p className="text-zinc-500 py-8">Loading...</p>}
        {error && <p className="text-red-400 py-8">{error}</p>}

        {data && !loading && (
          <>
            {/* Stats cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
              <div className="rounded-2xl bg-zinc-900 border border-zinc-800 p-4">
                <p className="text-xs text-zinc-500 mb-1">Total Queries</p>
                <p className="text-2xl font-bold text-emerald-400">{data.totalQueries}</p>
              </div>
              <div className="rounded-2xl bg-zinc-900 border border-zinc-800 p-4">
                <p className="text-xs text-zinc-500 mb-1">Unique Users</p>
                <p className="text-2xl font-bold text-white">{data.uniqueUsers ?? "—"}</p>
              </div>
              <div className="rounded-2xl bg-zinc-900 border border-zinc-800 p-4">
                <p className="text-xs text-zinc-500 mb-1">Recent ({days}d)</p>
                <p className="text-2xl font-bold text-white">{data.recentCount}</p>
              </div>
              <div className="rounded-2xl bg-zinc-900 border border-zinc-800 p-4">
                <p className="text-xs text-zinc-500 mb-1">Avg Response</p>
                <p className="text-2xl font-bold text-white">{data.avgResponseMs ? `${(data.avgResponseMs / 1000).toFixed(1)}s` : "—"}</p>
              </div>
            </div>

            {/* Secondary stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
              <div className="rounded-2xl bg-zinc-900 border border-zinc-800 p-4">
                <p className="text-xs text-zinc-500 mb-1">👍 Positive</p>
                <p className="text-2xl font-bold text-emerald-400">{data.feedbackSummary.up}</p>
              </div>
              <div className="rounded-2xl bg-zinc-900 border border-zinc-800 p-4">
                <p className="text-xs text-zinc-500 mb-1">👎 Negative</p>
                <p className="text-2xl font-bold text-red-400">{data.feedbackSummary.down}</p>
              </div>
              <div className="rounded-2xl bg-zinc-900 border border-zinc-800 p-4">
                <p className="text-xs text-zinc-500 mb-1">🔄 Follow-up Rate</p>
                <p className="text-2xl font-bold text-white">{data.followUpRate !== null ? `${data.followUpRate}%` : "—"}</p>
              </div>
              <div className="rounded-2xl bg-zinc-900 border border-zinc-800 p-4">
                <p className="text-xs text-zinc-500 mb-1">📱 Devices</p>
                <div className="flex gap-2 mt-1">
                  {Object.entries(data.devices).map(([d, count]) => (
                    <span key={d} className="text-xs text-zinc-400">{d === "mobile" ? "📱" : d === "tablet" ? "📋" : "💻"} {count}</span>
                  ))}
                  {Object.keys(data.devices).length === 0 && <span className="text-xs text-zinc-600">—</span>}
                </div>
              </div>
            </div>

            {/* Language breakdown */}
            <div className="rounded-2xl bg-zinc-900 border border-zinc-800 p-5 mb-6">
              <h2 className="text-sm font-semibold mb-3">🌐 Languages</h2>
              <div className="flex gap-3">
                {Object.entries(data.languages).map(([lang, count]) => (
                  <div key={lang} className="flex items-center gap-2">
                    <span className="text-lg">{lang === "ko" ? "🇰🇷" : "🇬🇧"}</span>
                    <span className="text-sm text-zinc-400">{lang}</span>
                    <span className="text-sm font-bold text-white">{count}</span>
                  </div>
                ))}
                {Object.keys(data.languages).length === 0 && (
                  <span className="text-xs text-zinc-600">No data yet</span>
                )}
              </div>
            </div>

            {/* Daily chart */}
            {Object.keys(data.daily).length > 0 && (
              <div className="rounded-2xl bg-zinc-900 border border-zinc-800 p-5 mb-6">
                <h2 className="text-sm font-semibold mb-3">📈 Daily Queries</h2>
                <div className="flex items-end gap-1 h-24">
                  {Object.entries(data.daily).sort().map(([day, count]) => {
                    const max = Math.max(...Object.values(data.daily), 1);
                    const height = (count / max) * 100;
                    return (
                      <div key={day} className="flex-1 flex flex-col items-center gap-1" title={`${day}: ${count}`}>
                        <span className="text-xs text-zinc-500">{count}</span>
                        <div className="w-full rounded-t bg-emerald-600" style={{ height: `${height}%`, minHeight: "4px" }} />
                        <span className="text-xs text-zinc-600">{day.slice(5)}</span>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            {/* Topics */}
            {Object.keys(data.topics).length > 0 && (
              <div className="rounded-2xl bg-zinc-900 border border-zinc-800 p-5 mb-6">
                <h2 className="text-sm font-semibold mb-3">📚 Topics</h2>
                <div className="space-y-1.5">
                  {Object.entries(data.topics).sort((a, b) => b[1] - a[1]).map(([topic, count]) => (
                    <div key={topic} className="flex items-center gap-2">
                      <span className="text-sm text-zinc-400 w-32">{topic}</span>
                      <div className="flex-1 bg-zinc-800 rounded-full h-2">
                        <div className="bg-emerald-600 rounded-full h-2" style={{ width: `${(count / data.recentCount) * 100}%` }} />
                      </div>
                      <span className="text-sm font-bold text-white w-6 text-right">{count}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Recent queries */}
            <div className="rounded-2xl bg-zinc-900 border border-zinc-800 p-5 mb-6">
              <h2 className="text-sm font-semibold mb-3">🔍 Recent Queries ({data.queries.length})</h2>
              <div className="space-y-2 max-h-96 overflow-y-auto">
                {data.queries.length === 0 && <p className="text-xs text-zinc-600">No queries yet</p>}
                {data.queries.map((q, i) => (
                  <div key={i} className="rounded-xl bg-zinc-800/50 p-3">
                    <div className="flex items-start justify-between gap-2 mb-1">
                      <p className="text-sm text-white flex-1 break-words">{q.query}</p>
                      <div className="flex items-center gap-1 shrink-0">
                        <span className="text-xs">{q.language === "ko" ? "🇰🇷" : "🇬🇧"}</span>
                        {q.device && <span className="text-xs">{q.device === "mobile" ? "📱" : q.device === "tablet" ? "📋" : "💻"}</span>}
                        {q.childAge && <span className="text-xs text-zinc-500">👶 {q.childAge}</span>}
                        {q.responseMs && <span className="text-xs text-zinc-500">⏱ {(q.responseMs / 1000).toFixed(1)}s</span>}
                      </div>
                    </div>
                    {q.topicCategory && (
                      <span className="inline-block text-xs px-1.5 py-0.5 rounded bg-zinc-700 text-zinc-300 mb-1">{q.topicCategory}</span>
                    )}
                    {q.advice && (
                      <details className="mt-1">
                        <summary className="text-xs text-zinc-500 cursor-pointer hover:text-zinc-400">View advice →</summary>
                        <p className="text-xs text-zinc-400 mt-1 whitespace-pre-wrap">{q.advice}</p>
                      </details>
                    )}
                    <p className="text-xs text-zinc-600">
                      {new Date(q.timestamp).toLocaleString("en-GB", { timeZone: "Europe/London" })}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Recent feedback */}
            {data.feedback.length > 0 && (
              <div className="rounded-2xl bg-zinc-900 border border-zinc-800 p-5 mb-6">
                <h2 className="text-sm font-semibold mb-3">💬 Recent Feedback</h2>
                <div className="space-y-2 max-h-64 overflow-y-auto">
                  {data.feedback.map((f, i) => (
                    <div key={i} className="rounded-xl bg-zinc-800/50 p-3">
                      <div className="flex items-start gap-2">
                        <span className="text-lg">{f.rating === "up" ? "👍" : "👎"}</span>
                        <div className="flex-1">
                          <p className="text-sm text-zinc-300">{f.query.slice(0, 100)}</p>
                          {f.feedbackText && <p className="text-xs text-zinc-500 mt-1 italic">&ldquo;{f.feedbackText}&rdquo;</p>}
                          <p className="text-xs text-zinc-600 mt-1">{new Date(f.timestamp).toLocaleString("en-GB", { timeZone: "Europe/London" })}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}
