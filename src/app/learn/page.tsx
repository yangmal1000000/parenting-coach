import Link from "next/link";
import { BookOpen } from "lucide-react";
import { LEARN_TOPICS } from "@/lib/learn-topics";
import { DynamicIcon } from "@/lib/DynamicIcon";

export const metadata = {
  title: "Learn — Evidence-Based Parenting Guides | ParentKin",
  description: "Practical, research-backed parenting guides. Strategies for tantrums, sleep, eating, behavior, sibling conflict, screen time, and more.",
  openGraph: {
    title: "Learn — Evidence-Based Parenting Guides | ParentKin",
    description: "Practical, research-backed parenting guides for every challenge.",
    type: "website",
    url: "https://parentkin.com/learn",
  },
};

export default function LearnHubPage() {
  return (
    <div className="min-h-screen" style={{
      background: "var(--bg)",
      color: "var(--text)",
      fontFamily: "var(--font-geist-sans), -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
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
        <Link href="/" style={{ display: "flex", alignItems: "center", gap: 10, textDecoration: "none" }}>
          <img src="/icon.png" alt="ParentKin" style={{ height: 30, width: 30, borderRadius: 6, objectFit: "cover" }} />
          <span style={{ fontWeight: 700, fontSize: 18, color: "var(--text)", letterSpacing: -0.4 }}>ParentKin</span>
        </Link>
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
        padding: "48px 24px 40px",
        maxWidth: 680,
        margin: "0 auto",
      }}>
        <div style={{
          display: "inline-block",
          padding: "6px 14px",
          borderRadius: 999,
          background: "var(--surface)",
          border: "1px solid var(--border)",
          fontSize: 12,
          fontWeight: 600,
          color: "var(--text-muted)",
          marginBottom: 20,
          letterSpacing: 0.3,
          textTransform: "uppercase",
        }}>
          Evidence-Based Guides
        </div>
        <h1 style={{
          fontSize: "clamp(28px, 5vw, 40px)",
          fontWeight: 700,
          letterSpacing: -0.8,
          lineHeight: 1.15,
          marginBottom: 16,
        }}>
          Parenting strategies grounded in{" "}
          <span style={{ color: "var(--primary)" }}>real research</span>
        </h1>
        <p style={{
          fontSize: 17,
          lineHeight: 1.6,
          color: "var(--text-muted)",
          maxWidth: 480,
          margin: "0 auto",
        }}>
          Each guide draws from 15+ expert parenting books and 1,300+ research sources.
          Practical strategies you can use today.
        </p>
      </section>

      {/* Topic grid */}
      <section style={{
        padding: "20px 24px 80px",
        maxWidth: 900,
        margin: "0 auto",
      }}>
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
          gap: 16,
        }}>
          {LEARN_TOPICS.map((topic) => (
            <Link
              key={topic.slug}
              href={`/learn/${topic.slug}`}
              style={{
                display: "block",
                padding: "24px 22px",
                background: "var(--surface)",
                border: "1px solid var(--border)",
                borderRadius: 20,
                textDecoration: "none",
                transition: "transform 0.15s, box-shadow 0.15s",
              }}
            >
              <div style={{ marginBottom: 12 }}><DynamicIcon name={topic.icon} size={36} color="var(--primary)" /></div>
              <h2 style={{
                fontSize: 16,
                fontWeight: 600,
                color: "var(--text)",
                marginBottom: 6,
                letterSpacing: -0.2,
              }}>
                {topic.title}
              </h2>
              <p style={{ fontSize: 13, lineHeight: 1.5, color: "var(--text-muted)" }}>
                {topic.blurb}
              </p>
              <div style={{
                marginTop: 14,
                fontSize: 13,
                fontWeight: 600,
                color: "var(--primary)",
              }}>
                Read guide →
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section style={{
        textAlign: "center",
        padding: "40px 24px 60px",
        maxWidth: 600,
        margin: "0 auto",
      }}>
        <h2 style={{ fontSize: 22, fontWeight: 700, marginBottom: 12 }}>
          Need personalised advice?
        </h2>
        <p style={{ fontSize: 15, color: "var(--text-muted)", marginBottom: 24 }}>
          Describe your situation and get evidence-based guidance in seconds.
        </p>
        <Link href="/en" style={{
          display: "inline-block",
          padding: "14px 32px",
          borderRadius: 999,
          background: "var(--primary)",
          color: "#fff",
          fontSize: 16,
          fontWeight: 600,
          textDecoration: "none",
        }}>
          Try ParentKin Free →
        </Link>
      </section>

      {/* Footer */}
      <footer style={{
        padding: "32px 24px",
        borderTop: "1px solid var(--border)",
        textAlign: "center",
      }}>
        <p style={{ fontSize: 12, color: "var(--text-muted)", marginBottom: 4, display: "flex", alignItems: "center", justifyContent: "center", gap: 6 }}>
          ParentKin — Educational guidance, not medical advice.
        </p>
        <p style={{ fontSize: 11, color: "var(--text-muted)", opacity: 0.6 }}>
          <Link href="/privacy" style={{ color: "var(--text-muted)", textDecoration: "none" }}>Privacy Policy</Link> · © 2026 ParentKin.
        </p>
      </footer>
    </div>
  );
}
