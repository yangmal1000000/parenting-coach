"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

const STORAGE_KEY = "pc_onboarded";

const SLIDES = [
  {
    emoji: "🌿",
    title: "Welcome to ParentKin",
    body: "Evidence-based parenting support in your pocket. Grounded in 1,300+ research sources.",
  },
  {
    emoji: "💬",
    title: "Ask anything",
    body: "Type or speak. Get practical dos and don'ts, with the psychology behind why they work.",
  },
  {
    emoji: "🔬",
    title: "Go deeper",
    body: "When you need more than quick tips, Deep Dive gives you a personalised report.",
  },
];

export function WebOnboarding() {
  const router = useRouter();
  const [step, setStep] = useState(0);
  const [childName, setChildName] = useState("");
  const [childAge, setChildAge] = useState("");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
  }, []);

  // Don't render during SSR
  if (!mounted) return null;

  // Check if already onboarded
  if (typeof window !== "undefined" && localStorage.getItem(STORAGE_KEY)) {
    return null;
  }

  const isProfileStep = step === SLIDES.length;
  const isDark = window.matchMedia?.("(prefers-color-scheme: dark)").matches ?? false;

  function complete() {
    // Save profile
    if (childName || childAge) {
      try {
        const existing = JSON.parse(localStorage.getItem("pc_profile") || "{}");
        localStorage.setItem("pc_profile", JSON.stringify({
          ...existing,
          name: childName,
          age: childAge,
        }));
      } catch {}
    }
    localStorage.setItem(STORAGE_KEY, "true");
    router.push("/en");
  }

  function skip() {
    localStorage.setItem(STORAGE_KEY, "true");
    router.push("/en");
  }

  function next() {
    if (step < SLIDES.length) {
      setStep(step + 1);
    } else {
      complete();
    }
  }

  const bg = isDark ? "#1A1612" : "#FAF6F0";
  const card = isDark ? "#28231E" : "#FFFFFF";
  const text = isDark ? "#F5EFE8" : "#1F1814";
  const textMuted = isDark ? "#7A6E62" : "#6B5D52";
  const border = isDark ? "#3D342E" : "#EDE5DA";
  const primary = isDark ? "#6BA889" : "#4A7C6A";

  return (
    <div style={{
      position: "fixed",
      inset: 0,
      zIndex: 9999,
      background: bg,
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      padding: 24,
      fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
    }}>
      {/* Skip */}
      <button
        onClick={skip}
        style={{
          position: "absolute",
          top: 20,
          right: 24,
          background: "none",
          border: "none",
          color: textMuted,
          fontSize: 14,
          fontWeight: 500,
          cursor: "pointer",
        }}
      >
        Skip
      </button>

      {/* Slide content */}
      <div style={{ textAlign: "center", maxWidth: 420 }}>
        {!isProfileStep ? (
          <>
            {/* Hero image on first slide */}
            {step === 0 && (
              <img
                src="/parentkin-community.png"
                alt="Diverse parents community"
                style={{
                  width: "100%",
                  maxWidth: 340,
                  height: "auto",
                  borderRadius: 20,
                  marginBottom: 24,
                }}
              />
            )}
            <div style={{ fontSize: 56, marginBottom: 20 }}>
              {SLIDES[step].emoji}
            </div>
            <h1 style={{
              fontSize: 28,
              fontWeight: 700,
              letterSpacing: -0.5,
              color: text,
              marginBottom: 12,
            }}>
              {SLIDES[step].title}
            </h1>
            <p style={{
              fontSize: 16,
              lineHeight: 1.6,
              color: textMuted,
              maxWidth: 360,
              margin: "0 auto 32px",
            }}>
              {SLIDES[step].body}
            </p>
          </>
        ) : (
          /* Profile setup */
          <div style={{ width: "100%", maxWidth: 320 }}>
            <div style={{ fontSize: 48, marginBottom: 16 }}>👶</div>
            <h1 style={{
              fontSize: 26,
              fontWeight: 700,
              letterSpacing: -0.5,
              color: text,
              marginBottom: 8,
            }}>
              Tell us about your child
            </h1>
            <p style={{
              fontSize: 14,
              lineHeight: 1.5,
              color: textMuted,
              marginBottom: 24,
            }}>
              This helps us give age-appropriate advice. You can change this later.
            </p>

            <div style={{ textAlign: "left" }}>
              <label style={{
                display: "block",
                fontSize: 12,
                fontWeight: 600,
                color: textMuted,
                marginBottom: 6,
              }}>
                Name / Nickname
              </label>
              <input
                type="text"
                value={childName}
                onChange={(e) => setChildName(e.target.value)}
                placeholder="e.g., Theo"
                style={{
                  width: "100%",
                  padding: "12px 14px",
                  borderRadius: 12,
                  border: `1px solid ${border}`,
                  background: card,
                  color: text,
                  fontSize: 16,
                  marginBottom: 16,
                  outline: "none",
                }}
              />

              <label style={{
                display: "block",
                fontSize: 12,
                fontWeight: 600,
                color: textMuted,
                marginBottom: 6,
              }}>
                Age
              </label>
              <input
                type="text"
                value={childAge}
                onChange={(e) => setChildAge(e.target.value)}
                placeholder="e.g., 3 years"
                style={{
                  width: "100%",
                  padding: "12px 14px",
                  borderRadius: 12,
                  border: `1px solid ${border}`,
                  background: card,
                  color: text,
                  fontSize: 16,
                  marginBottom: 24,
                  outline: "none",
                }}
              />
            </div>
          </div>
        )}

        {/* Progress dots */}
        <div style={{
          display: "flex",
          gap: 6,
          justifyContent: "center",
          marginBottom: 32,
        }}>
          {SLIDES.map((_, i) => (
            <div key={i} style={{
              width: 8,
              height: 8,
              borderRadius: 4,
              background: i === step ? primary : border,
              transition: "background 0.2s",
            }} />
          ))}
          <div style={{
            width: 8,
            height: 8,
            borderRadius: 4,
            background: isProfileStep ? primary : border,
          }} />
        </div>

        {/* CTA */}
        <button
          onClick={next}
          style={{
            padding: "14px 40px",
            borderRadius: 999,
            background: primary,
            color: "#fff",
            fontSize: 16,
            fontWeight: 600,
            border: "none",
            cursor: "pointer",
            boxShadow: "0 4px 12px rgba(0,0,0,0.12)",
          }}
        >
          {isProfileStep ? "Get Started" : step === SLIDES.length - 1 ? "Continue" : "Next"}
        </button>

        {/* Language links */}
        {step === 0 && (
          <div style={{ marginTop: 20 }}>
            <Link
              href="/ko"
              style={{
                fontSize: 13,
                color: textMuted,
                textDecoration: "none",
              }}
              onClick={() => localStorage.setItem(STORAGE_KEY, "true")}
            >
              🇰🇷 한국어로 보기
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
