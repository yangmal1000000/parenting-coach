"use client";

import { useState, useCallback } from "react";

interface Example {
  situation: string;
  dos: string[];
  donts: string[];
  why: string;
  source: string;
}

export function ExampleCarousel({ examples }: { examples: Example[] }) {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const go = useCallback((dir: number) => {
    setDirection(dir);
    setIndex((prev) => {
      const next = prev + dir;
      if (next < 0) return examples.length - 1;
      if (next >= examples.length) return 0;
      return next;
    });
  }, [examples.length]);

  const ex = examples[index];

  return (
    <div style={{ position: "relative" }}>
      {/* Card */}
      <div
        key={index}
        style={{
          background: "var(--surface)",
          border: "1px solid var(--border)",
          borderRadius: 24,
          padding: 0,
          boxShadow: "0 12px 40px rgba(0,0,0,0.06)",
          overflow: "hidden",
          animation: direction !== 0 ? `slideIn${direction > 0 ? "Right" : "Left"} 0.3s ease-out` : undefined,
        }}
      >
        {/* Header bar */}
        <div style={{
          padding: "14px 24px",
          borderBottom: "1px solid var(--border)",
          background: "var(--bg)",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}>
          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <div style={{ width: 10, height: 10, borderRadius: "50%", background: "#e88b7b" }} />
            <div style={{ width: 10, height: 10, borderRadius: "50%", background: "#f4a340" }} />
            <div style={{ width: 10, height: 10, borderRadius: "50%", background: "#7ec9a3" }} />
            <span style={{ fontSize: 12, color: "var(--text-muted)", marginLeft: 8 }}>
              Example {index + 1} of {examples.length}
            </span>
          </div>
          {/* Scenario tag */}
          <span style={{
            fontSize: 11,
            fontWeight: 600,
            color: "var(--primary)",
            background: "var(--emerald-50)",
            padding: "3px 10px",
            borderRadius: 999,
          }}>
            Real scenario
          </span>
        </div>

        <div style={{ padding: "28px" }}>
          <div style={{ marginBottom: 24 }}>
            <p style={{ fontSize: 11, fontWeight: 700, color: "var(--primary)", marginBottom: 6, textTransform: "uppercase", letterSpacing: 0.5 }}>Situation</p>
            <p style={{ fontSize: 14, lineHeight: 1.6 }}>{ex.situation}</p>
          </div>
          <div style={{ marginBottom: 24 }}>
            <p style={{ fontSize: 11, fontWeight: 700, color: "var(--primary)", marginBottom: 6, textTransform: "uppercase", letterSpacing: 0.5 }}>Do</p>
            {ex.dos.map((d, i) => (
              <p key={i} style={{ fontSize: 14, lineHeight: 1.6, marginTop: i > 0 ? 4 : 0 }}>• {d}</p>
            ))}
          </div>
          <div style={{ marginBottom: 24 }}>
            <p style={{ fontSize: 11, fontWeight: 700, color: "var(--error)", marginBottom: 6, textTransform: "uppercase", letterSpacing: 0.5 }}>Don&apos;t</p>
            {ex.donts.map((d, i) => (
              <p key={i} style={{ fontSize: 14, lineHeight: 1.6, marginTop: i > 0 ? 4 : 0 }}>• {d}</p>
            ))}
          </div>
          <div style={{ marginBottom: 24 }}>
            <p style={{ fontSize: 11, fontWeight: 700, color: "var(--accent)", marginBottom: 6, textTransform: "uppercase", letterSpacing: 0.5 }}>Why this works</p>
            <p style={{ fontSize: 14, lineHeight: 1.6 }}>{ex.why}</p>
          </div>
          <div style={{
            paddingTop: 16,
            borderTop: "1px solid var(--border)",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}>
            <p style={{ fontSize: 12, color: "var(--text-muted)", margin: 0 }}>{ex.source}</p>
            <span style={{
              fontSize: 11,
              fontWeight: 600,
              color: "var(--primary)",
              background: "var(--emerald-50)",
              padding: "4px 10px",
              borderRadius: 999,
            }}>
              Cited
            </span>
          </div>
        </div>
      </div>

      {/* Controls */}
      <div style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: 16,
        marginTop: 20,
      }}>
        <button
          onClick={() => go(-1)}
          aria-label="Previous example"
          style={{
            width: 40,
            height: 40,
            borderRadius: "50%",
            border: "1px solid var(--border)",
            background: "var(--surface)",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: 18,
            color: "var(--text)",
            transition: "all 0.15s",
          }}
        >
          ‹
        </button>

        {/* Dots */}
        <div style={{ display: "flex", gap: 6 }}>
          {examples.map((_, i) => (
            <button
              key={i}
              onClick={() => {
                setDirection(i > index ? 1 : -1);
                setIndex(i);
              }}
              aria-label={`Go to example ${i + 1}`}
              style={{
                width: 8,
                height: 8,
                borderRadius: 4,
                border: "none",
                padding: 0,
                background: i === index ? "var(--primary)" : "var(--border)",
                transition: "background 0.2s",
                cursor: "pointer",
              }}
            />
          ))}
        </div>

        <button
          onClick={() => go(1)}
          aria-label="Next example"
          style={{
            width: 40,
            height: 40,
            borderRadius: "50%",
            border: "1px solid var(--border)",
            background: "var(--surface)",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: 18,
            color: "var(--text)",
            transition: "all 0.15s",
          }}
        >
          ›
        </button>
      </div>

      <style>{`
        @keyframes slideInRight {
          from { opacity: 0; transform: translateX(20px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes slideInLeft {
          from { opacity: 0; transform: translateX(-20px); }
          to { opacity: 1; transform: translateX(0); }
        }
      `}</style>
    </div>
  );
}
