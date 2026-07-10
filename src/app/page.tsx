import { Geist } from "next/font/google";
import Link from "next/link";
import { WebOnboarding } from "@/components/WebOnboarding";

const geist = Geist({ subsets: ["latin"], variable: "--font-geist" });

export const metadata = {
  title: "Calm Parent — Evidence-Based AI Parenting Coach",
  description: "Get practical, research-backed parenting advice in seconds. Grounded in 1,300+ sources from 15+ expert books. Speak or type what's happening. Free.",
  openGraph: {
    title: "Calm Parent — Evidence-Based AI Parenting Coach",
    description: "Get practical, research-backed parenting advice in seconds. Free.",
    type: "website",
    url: "https://parenting-coach-two.vercel.app",
    images: ["/calm-parent-hero.png"],
  },
};

export default function LandingPage() {
  return (
    <>
    <WebOnboarding />
    <div className={`${geist.variable} min-h-screen`} style={{
      background: "var(--bg)",
      color: "var(--text)",
      fontFamily: "var(--font-geist), -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
    }}>
      {/* Nav */}
      <nav style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "20px 24px",
        maxWidth: 900,
        margin: "0 auto",
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <span style={{ fontSize: 22 }}>🌿</span>
          <span style={{ fontWeight: 600, fontSize: 17, letterSpacing: -0.3 }}>Calm Parent</span>
        </div>
        <Link href="/en" style={{
          padding: "8px 20px",
          borderRadius: 999,
          background: "var(--primary)",
          color: "#fff",
          fontSize: 14,
          fontWeight: 600,
          textDecoration: "none",
        }}>
          Try Free →
        </Link>
      </nav>

      {/* Hero */}
      <section style={{
        textAlign: "center",
        padding: "60px 24px 60px",
        maxWidth: 680,
        margin: "0 auto",
      }}>
        {/* Hero illustrations */}
        <div style={{
          display: "flex",
          gap: 12,
          justifyContent: "center",
          marginBottom: 32,
          flexWrap: "wrap",
        }}>
          <img
            src="/calm-parent-hero.png"
            alt="A calm mother embracing her child"
            style={{ width: 200, height: 200, objectFit: "cover", borderRadius: 16 }}
          />
          <img
            src="/calm-parent-community.png"
            alt="Diverse parents in a warm community"
            style={{ width: 280, height: 200, objectFit: "cover", borderRadius: 16 }}
          />
          <img
            src="/calm-parent-hero-father.png"
            alt="A calm father playing with his child"
            style={{ width: 200, height: 200, objectFit: "cover", borderRadius: 16 }}
          />
        </div>
        <div style={{
          display: "inline-block",
          padding: "6px 14px",
          borderRadius: 999,
          background: "var(--surface)",
          border: "1px solid var(--border)",
          fontSize: 12,
          fontWeight: 600,
          color: "var(--text-muted)",
          marginBottom: 24,
          letterSpacing: 0.3,
          textTransform: "uppercase",
        }}>
          📚 1,300+ research sources
        </div>
        <h1 style={{
          fontSize: "clamp(32px, 6vw, 48px)",
          fontWeight: 700,
          letterSpacing: -1,
          lineHeight: 1.1,
          marginBottom: 20,
        }}>
          Parenting advice that's{" "}
          <span style={{ color: "var(--primary)" }}>actually grounded in research</span>
        </h1>
        <p style={{
          fontSize: 18,
          lineHeight: 1.6,
          color: "var(--text-muted)",
          maxWidth: 520,
          margin: "0 auto 36px",
        }}>
          Type or speak what's happening right now. Get practical dos, don'ts, and the psychology behind why they work — in seconds.
        </p>
        <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
          <Link href="/en" style={{
            padding: "14px 32px",
            borderRadius: 999,
            background: "var(--primary)",
            color: "#fff",
            fontSize: 16,
            fontWeight: 600,
            textDecoration: "none",
            boxShadow: "0 4px 12px rgba(0,0,0,0.12)",
          }}>
            Get Advice Now →
          </Link>
          <Link href="/ko" style={{
            padding: "14px 32px",
            borderRadius: 999,
            background: "var(--surface)",
            color: "var(--text)",
            fontSize: 16,
            fontWeight: 600,
            textDecoration: "none",
            border: "1px solid var(--border)",
          }}>
            🇰🇷 한국어
          </Link>
        </div>
      </section>

      {/* How it works */}
      <section style={{
        padding: "40px 24px 80px",
        maxWidth: 800,
        margin: "0 auto",
      }}>
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
          gap: 16,
        }}>
          {[
            { icon: "💬", title: "Describe the situation", body: "Type or speak. \"My 3-year-old is having a meltdown in the shop.\"" },
            { icon: "🧠", title: "Get evidence-based advice", body: "Practical dos, don'ts, and the developmental psychology — cited from real books." },
            { icon: "🔬", title: "Go deeper when you need to", body: "Deep Dive gives you a 750-word personalized report with reflective exercises." },
          ].map((item) => (
            <div key={item.title} style={{
              background: "var(--surface)",
              border: "1px solid var(--border)",
              borderRadius: 18,
              padding: 24,
            }}>
              <div style={{ fontSize: 32, marginBottom: 12 }}>{item.icon}</div>
              <h3 style={{ fontSize: 16, fontWeight: 600, marginBottom: 6 }}>{item.title}</h3>
              <p style={{ fontSize: 14, lineHeight: 1.5, color: "var(--text-muted)" }}>{item.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Example */}
      <section style={{
        padding: "40px 24px 80px",
        maxWidth: 600,
        margin: "0 auto",
      }}>
        <div style={{
          background: "var(--surface)",
          border: "1px solid var(--border)",
          borderRadius: 24,
          padding: 32,
          boxShadow: "0 8px 24px rgba(0,0,0,0.06)",
        }}>
          <p style={{ fontSize: 12, fontWeight: 600, color: "var(--text-muted)", textTransform: "uppercase", letterSpacing: 0.3, marginBottom: 16 }}>
            Example response
          </p>
          <div style={{ marginBottom: 20 }}>
            <p style={{ fontSize: 12, fontWeight: 600, color: "var(--primary)", marginBottom: 4 }}>📋 SITUATION</p>
            <p style={{ fontSize: 14, lineHeight: 1.6 }}>Your 3-year-old wants sweets and is screaming in the shop.</p>
          </div>
          <div style={{ marginBottom: 20 }}>
            <p style={{ fontSize: 12, fontWeight: 600, color: "var(--primary)", marginBottom: 4 }}>✅ DO</p>
            <p style={{ fontSize: 14, lineHeight: 1.6 }}>• Get down to their eye level. Try: "I see you really want the sweets. We're not buying them today."</p>
          </div>
          <div style={{ marginBottom: 20 }}>
            <p style={{ fontSize: 12, fontWeight: 600, color: "var(--error)", marginBottom: 4 }}>❌ DON'T</p>
            <p style={{ fontSize: 14, lineHeight: 1.6 }}>• Don't give in to stop the crying — this teaches that meltdowns work.</p>
          </div>
          <div>
            <p style={{ fontSize: 12, fontWeight: 600, color: "var(--accent)", marginBottom: 4 }}>🧠 WHY THIS WORKS</p>
            <p style={{ fontSize: 14, lineHeight: 1.6 }}>At 3, your child's prefrontal cortex is still developing impulse control...</p>
          </div>
          <div style={{ marginTop: 20, paddingTop: 16, borderTop: "1px solid var(--border)" }}>
            <p style={{ fontSize: 12, color: "var(--text-muted)" }}>📖 Source: How to Talk So Kids Will Listen — Ch. 4</p>
          </div>
        </div>
      </section>

      {/* Sources */}
      <section style={{
        padding: "20px 24px 80px",
        maxWidth: 700,
        margin: "0 auto",
        textAlign: "center",
      }}>
        <h2 style={{ fontSize: 14, fontWeight: 600, color: "var(--text-muted)", textTransform: "uppercase", letterSpacing: 0.5, marginBottom: 24 }}>
          Grounded in trusted sources
        </h2>
        <div style={{
          display: "flex",
          flexWrap: "wrap",
          gap: 8,
          justifyContent: "center",
        }}>
          {[
            "How to Talk So Kids Will Listen",
            "The Whole-Brain Child",
            "No-Drama Discipline",
            "Peaceful Parent, Happy Kids",
            "1-2-3 Magic",
            "The Explosive Child",
            "Parenting from the Inside Out",
            "Raising Good Humans",
          ].map((book) => (
            <span key={book} style={{
              padding: "6px 14px",
              borderRadius: 999,
              background: "var(--surface)",
              border: "1px solid var(--border)",
              fontSize: 12,
              color: "var(--text-muted)",
            }}>
              {book}
            </span>
          ))}
        </div>
        <p style={{ fontSize: 12, color: "var(--text-muted)", marginTop: 16 }}>
          + 15 more books and programs · 1,300+ knowledge chunks
        </p>
      </section>

      {/* Final CTA */}
      <section style={{
        textAlign: "center",
        padding: "60px 24px 80px",
        maxWidth: 600,
        margin: "0 auto",
      }}>
        <h2 style={{ fontSize: 28, fontWeight: 700, letterSpacing: -0.5, marginBottom: 12 }}>
          You don't have to figure it out alone
        </h2>
        <p style={{ fontSize: 16, color: "var(--text-muted)", marginBottom: 32 }}>
          Free. Private. Available when you need it — even at 7am.
        </p>
        <Link href="/en" style={{
          display: "inline-block",
          padding: "16px 40px",
          borderRadius: 999,
          background: "var(--primary)",
          color: "#fff",
          fontSize: 17,
          fontWeight: 600,
          textDecoration: "none",
          boxShadow: "0 4px 12px rgba(0,0,0,0.12)",
        }}>
          Try Calm Parent Free →
        </Link>
      </section>

      {/* Footer */}
      <footer style={{
        padding: "32px 24px",
        borderTop: "1px solid var(--border)",
        textAlign: "center",
      }}>
        <p style={{ fontSize: 12, color: "var(--text-muted)", marginBottom: 4 }}>
          🌿 Calm Parent — Educational guidance, not medical advice.
        </p>
        <p style={{ fontSize: 11, color: "var(--text-muted)", opacity: 0.6 }}>
          Always consult your pediatrician. © 2026 Calm Parent.
        </p>
      </footer>
    </div>
    </>
  );
}
