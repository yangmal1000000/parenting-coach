// Reusable components for /learn pages

import Link from "next/link";
import type { LearnTopic } from "@/lib/learn-topics";
import { DynamicIcon } from "@/lib/DynamicIcon";

// ── CTA Block ──
export function CtaBlock({ variant = "mid" }: { variant?: "mid" | "end" }) {
  if (variant === "mid") {
    return (
      <div style={{
        margin: "40px 0",
        padding: "24px 28px",
        background: "var(--surface)",
        border: "1px solid var(--border)",
        borderRadius: 20,
        textAlign: "center",
      }}>
        <p style={{ fontSize: 16, fontWeight: 600, marginBottom: 8 }}>
          Get advice tailored to your child&apos;s age and situation
        </p>
        <p style={{ fontSize: 14, color: "var(--text-muted)", marginBottom: 16 }}>
          Type what&apos;s happening right now. Get personalised guidance in seconds.
        </p>
        <Link href="/en" style={{
          display: "inline-block",
          padding: "12px 28px",
          borderRadius: 999,
          background: "var(--primary)",
          color: "#fff",
          fontSize: 15,
          fontWeight: 600,
          textDecoration: "none",
        }}>
          Try ParentKin Free →
        </Link>
      </div>
    );
  }

  return (
    <div style={{
      margin: "48px 0 24px",
      padding: "40px 28px",
      background: "var(--primary)",
      borderRadius: 24,
      textAlign: "center",
    }}>
      <h2 style={{
        fontSize: 24,
        fontWeight: 700,
        color: "#fff",
        marginBottom: 12,
        letterSpacing: -0.5,
      }}>
        You don&apos;t have to figure it out alone
      </h2>
      <p style={{ fontSize: 16, color: "rgba(255,255,255,0.85)", marginBottom: 24 }}>
        Free. Private. Available when you need it — even at 7am.
      </p>
      <Link href="/en" style={{
        display: "inline-block",
        padding: "16px 40px",
        borderRadius: 999,
        background: "#fff",
        color: "var(--primary)",
        fontSize: 17,
        fontWeight: 700,
        textDecoration: "none",
      }}>
        Try ParentKin Free →
      </Link>
    </div>
  );
}

// ── Breadcrumb ──
export function Breadcrumb({ topic }: { topic: LearnTopic }) {
  const items = [
    { label: "Home", href: "/" },
    { label: "Learn", href: "/learn" },
    { label: topic.title, href: `/learn/${topic.slug}` },
  ];
  return (
    <nav style={{
      display: "flex",
      gap: 6,
      alignItems: "center",
      flexWrap: "wrap",
      fontSize: 13,
      color: "var(--text-muted)",
      marginBottom: 24,
    }}>
      {items.map((item, i) => (
        <span key={item.href} style={{ display: "flex", gap: 6, alignItems: "center" }}>
          {i > 0 && <span>›</span>}
          {i < items.length - 1 ? (
            <Link href={item.href} style={{ color: "var(--text-muted)", textDecoration: "none" }}>
              {item.label}
            </Link>
          ) : (
            <span style={{ color: "var(--text)" }}>{item.label}</span>
          )}
        </span>
      ))}
    </nav>
  );
}

// ── Related Topics ──
export function RelatedTopics({ topics }: { topics: LearnTopic[] }) {
  if (topics.length === 0) return null;
  return (
    <section style={{ margin: "40px 0" }}>
      <h2 style={{ fontSize: 16, fontWeight: 600, marginBottom: 16 }}>
        Related guides
      </h2>
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
        gap: 12,
      }}>
        {topics.map((t) => (
          <Link
            key={t.slug}
            href={`/learn/${t.slug}`}
            style={{
              display: "block",
              padding: "16px 18px",
              background: "var(--surface)",
              border: "1px solid var(--border)",
              borderRadius: 14,
              textDecoration: "none",
            }}
          >
            <div style={{ fontSize: 24, marginBottom: 6 }}><DynamicIcon name={t.icon} size={24} color="var(--primary)" /></div>
            <div style={{ fontSize: 14, fontWeight: 600, color: "var(--text)", marginBottom: 2 }}>
              {t.title}
            </div>
            <div style={{ fontSize: 12, color: "var(--text-muted)" }}>
              {t.blurb}
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}

// ── Sources List ──
export function SourcesList({ sources }: { sources: { title: string; author: string; details?: string }[] }) {
  return (
    <section style={{ margin: "40px 0" }}>
      <h2 style={{ fontSize: 16, fontWeight: 600, marginBottom: 16 }}>
        Sources & further reading
      </h2>
      <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 8 }}>
        {sources.map((s, i) => (
          <li key={i} style={{
            padding: "12px 16px",
            background: "var(--surface)",
            border: "1px solid var(--border)",
            borderRadius: 12,
            fontSize: 14,
          }}>
            <strong style={{ color: "var(--text)" }}>{s.title}</strong>
            <span style={{ color: "var(--text-muted)" }}> — {s.author}</span>
            {s.details && (
              <div style={{ fontSize: 12, color: "var(--text-muted)", marginTop: 2 }}>{s.details}</div>
            )}
          </li>
        ))}
      </ul>
    </section>
  );
}

// ── FAQ Section ──
export function FaqSection({ faqs }: { faqs: { q: string; a: string }[] }) {
  return (
    <section style={{ margin: "40px 0" }}>
      <h2 style={{ fontSize: 22, fontWeight: 700, marginBottom: 20 }}>
        Frequently asked questions
      </h2>
      <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
        {faqs.map((faq, i) => (
          <div key={i} style={{
            padding: "20px 22px",
            background: "var(--surface)",
            border: "1px solid var(--border)",
            borderRadius: 16,
          }}>
            <h3 style={{ fontSize: 15, fontWeight: 600, marginBottom: 8 }}>
              {faq.q}
            </h3>
            <p style={{ fontSize: 14, lineHeight: 1.6, color: "var(--text-muted)" }}>
              {faq.a}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

// ── JSON-LD Schema ──
export function ArticleSchema({ topic, faqs }: { topic: LearnTopic; faqs: { q: string; a: string }[] }) {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: topic.h1,
    description: topic.metaDescription,
    author: { "@type": "Organization", name: "ParentKin" },
    publisher: {
      "@type": "Organization",
      name: "ParentKin",
      url: "https://parentkin.com",
    },
    mainEntityOfPage: `https://parentkin.com/learn/${topic.slug}`,
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://parentkin.com" },
      { "@type": "ListItem", position: 2, name: "Learn", item: "https://parentkin.com/learn" },
      { "@type": "ListItem", position: 3, name: topic.title, item: `https://parentkin.com/learn/${topic.slug}` },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
    </>
  );
}
