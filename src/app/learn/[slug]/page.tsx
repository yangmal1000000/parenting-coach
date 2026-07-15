import { notFound } from "next/navigation";
import Link from "next/link";
import { LEARN_TOPICS, getTopic, getRelatedTopics } from "@/lib/learn-topics";
import { DynamicIcon } from "@/lib/DynamicIcon";
import {
  CtaBlock, Breadcrumb, RelatedTopics,
  SourcesList, FaqSection, ArticleSchema,
} from "@/components/LearnComponents";
import type { TopicContent } from "@/content/types";

// ── Generate static params for all topics ──
export function generateStaticParams() {
  return LEARN_TOPICS.map((t) => ({ slug: t.slug }));
}

// ── Dynamic metadata ──
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const topic = getTopic(slug);
  if (!topic) return { title: "Not found" };

  return {
    title: topic.metaTitle,
    description: topic.metaDescription,
    openGraph: {
      title: topic.metaTitle,
      description: topic.metaDescription,
      type: "article",
      url: `https://parentkin.com/learn/${topic.slug}`,
      images: ["/parentkin-hero.png"],
    },
  };
}

// ── Topic content loader ──
async function loadTopicContent(slug: string): Promise<TopicContent | null> {
  try {
    const mod = await import(`@/content/${slug}`);
    return mod.default as TopicContent;
  } catch {
    return null;
  }
}

export default async function TopicPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const topic = getTopic(slug);
  if (!topic) notFound();

  const content = await loadTopicContent(slug);
  if (!content) {
    return (
      <div className="min-h-screen" style={{ background: "var(--bg)", color: "var(--text)", display: "flex", alignItems: "center", justifyContent: "center" }}>
        <div style={{ textAlign: "center" }}>
          <p style={{ fontSize: 48, marginBottom: 16 }}>📝</p>
          <p style={{ fontSize: 16, color: "var(--text-muted)" }}>This guide is being written. Check back soon!</p>
          <Link href="/learn" style={{ color: "var(--primary)", textDecoration: "none", fontSize: 14, marginTop: 12, display: "inline-block" }}>
            ← Back to all guides
          </Link>
        </div>
      </div>
    );
  }

  const related = getRelatedTopics(slug);
  const readingTime = Math.ceil((content.tldr + content.scenario + content.strategies.join("") + content.avoid.join("")).length / 1000);

  return (
    <div className="min-h-screen" style={{
      background: "var(--bg)",
      color: "var(--text)",
      fontFamily: "var(--font-geist-sans), -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
    }}>
      <ArticleSchema topic={topic} faqs={content.faqs} />

      {/* Nav */}
      <nav style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "20px 24px",
        maxWidth: 760,
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

      {/* Article */}
      <article style={{
        maxWidth: 760,
        margin: "0 auto",
        padding: "0 24px 60px",
      }}>
        <Breadcrumb topic={topic} />

        {/* Header */}
        <header style={{ marginBottom: 32 }}>
          <div style={{ marginBottom: 12 }}><DynamicIcon name={topic.icon} size={40} color="var(--primary)" /></div>
          <h1 style={{
            fontSize: "clamp(26px, 5vw, 36px)",
            fontWeight: 700,
            letterSpacing: -0.8,
            lineHeight: 1.2,
            marginBottom: 12,
          }}>
            {topic.h1}
          </h1>
          <div style={{
            display: "flex",
            gap: 12,
            fontSize: 13,
            color: "var(--text-muted)",
          }}>
            <span>Research-backed</span>
            <span>·</span>
            <span>{readingTime} min read</span>
            <span>·</span>
            <span>Ages {topic.ageRange}</span>
          </div>
        </header>

        {/* TL;DR */}
        <section style={{
          padding: "20px 24px",
          background: "var(--surface)",
          border: "1px solid var(--border)",
          borderLeft: "4px solid var(--primary)",
          borderRadius: 12,
          marginBottom: 32,
        }}>
          <div style={{ fontSize: 12, fontWeight: 600, color: "var(--primary)", textTransform: "uppercase", letterSpacing: 0.5, marginBottom: 8 }}>
            Quick answer
          </div>
          <p style={{ fontSize: 15, lineHeight: 1.6 }}>{content.tldr}</p>
        </section>

        {/* Scenario */}
        <section style={{ marginBottom: 32 }}>
          <h2 style={{ fontSize: 20, fontWeight: 700, marginBottom: 12 }}>
            The situation
          </h2>
          <p style={{ fontSize: 15, lineHeight: 1.7, color: "var(--text-muted)" }}>
            {content.scenario}
          </p>
          <div style={{
            display: "inline-block",
            marginTop: 8,
            padding: "4px 12px",
            borderRadius: 999,
            background: "var(--surface)",
            border: "1px solid var(--border)",
            fontSize: 12,
            color: "var(--text-muted)",
          }}>
            Common ages: {content.ageRange}
          </div>
        </section>

        {/* Strategies */}
        <section style={{ marginBottom: 32 }}>
          <h2 style={{ fontSize: 22, fontWeight: 700, marginBottom: 20 }}>
            What to do: evidence-based strategies
          </h2>
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            {content.strategies.map((s, i) => (
              <div key={i} style={{
                padding: "20px 22px",
                background: "var(--surface)",
                border: "1px solid var(--border)",
                borderRadius: 16,
              }}>
                <h3 style={{ fontSize: 16, fontWeight: 600, marginBottom: 8 }}>
                  {i + 1}. {s.title}
                </h3>
                <p style={{ fontSize: 14, lineHeight: 1.6, marginBottom: 12 }}>{s.what}</p>
                <div style={{
                  padding: "12px 16px",
                  background: "var(--bg)",
                  borderRadius: 10,
                  border: "1px solid var(--border)",
                  marginBottom: 10,
                }}>
                  <span style={{ fontSize: 12, fontWeight: 600, color: "var(--primary)" }}>Try saying: </span>
                  <span style={{ fontSize: 14, fontStyle: "italic" }}>{s.script}</span>
                </div>
                <p style={{ fontSize: 13, color: "var(--text-muted)", lineHeight: 1.5 }}>
                  <strong>Why it works:</strong> {s.why}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* What to avoid */}
        <section style={{ marginBottom: 32 }}>
          <h2 style={{ fontSize: 22, fontWeight: 700, marginBottom: 20 }}>
            Common mistakes to avoid
          </h2>
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            {content.avoid.map((a, i) => (
              <div key={i} style={{
                padding: "16px 20px",
                background: "var(--surface)",
                border: "1px solid var(--border)",
                borderRadius: 14,
              }}>
                <h3 style={{ fontSize: 15, fontWeight: 600, marginBottom: 6, color: "var(--error)" }}>
                  {a.mistake}
                </h3>
                <p style={{ fontSize: 13, lineHeight: 1.5, color: "var(--text-muted)", marginBottom: 8 }}>
                  {a.whyBackfires}
                </p>
                <p style={{ fontSize: 13, lineHeight: 1.5 }}>
                  <strong style={{ color: "var(--primary)" }}>Instead: </strong>{a.instead}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Mid-page CTA */}
        <CtaBlock variant="mid" />

        {/* Age-by-age guidance */}
        <section style={{ marginBottom: 32 }}>
          <h2 style={{ fontSize: 22, fontWeight: 700, marginBottom: 20 }}>
            Age-by-age guidance
          </h2>
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            {content.ageGuidance.map((g, i) => (
              <div key={i} style={{
                display: "flex",
                gap: 16,
                padding: "16px 20px",
                background: "var(--surface)",
                border: "1px solid var(--border)",
                borderRadius: 14,
              }}>
                <div style={{
                  flexShrink: 0,
                  width: 80,
                  fontSize: 13,
                  fontWeight: 600,
                  color: "var(--primary)",
                }}>
                  {g.age}
                </div>
                <div style={{ fontSize: 14, lineHeight: 1.6, color: "var(--text-muted)" }}>
                  {g.advice}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* When to seek help */}
        <section style={{
          marginBottom: 32,
          padding: "20px 24px",
          background: "var(--amber-50, #fffbeb)",
          border: "1px solid var(--accent)",
          borderRadius: 16,
        }}>
          <h2 style={{ fontSize: 18, fontWeight: 700, marginBottom: 12 }}>
            When to seek professional help
          </h2>
          <ul style={{ margin: 0, paddingLeft: 20, display: "flex", flexDirection: "column", gap: 6 }}>
            {content.whenToSeekHelp.map((item, i) => (
              <li key={i} style={{ fontSize: 14, lineHeight: 1.6, color: "var(--text)" }}>{item}</li>
            ))}
          </ul>
          <p style={{ fontSize: 12, color: "var(--text-muted)", marginTop: 12 }}>
            These are general guidelines. Always consult your pediatrician for your child&apos;s specific needs.
          </p>
        </section>

        {/* FAQ */}
        <FaqSection faqs={content.faqs} />

        {/* Sources */}
        <SourcesList sources={content.sources} />

        {/* Related topics */}
        <RelatedTopics topics={related} />

        {/* End CTA */}
        <CtaBlock variant="end" />
      </article>

      {/* Footer */}
      <footer style={{
        padding: "32px 24px",
        borderTop: "1px solid var(--border)",
        textAlign: "center",
      }}>
        <p style={{ fontSize: 12, color: "var(--text-muted)", marginBottom: 4 }}>
          ParentKin — Educational guidance, not medical advice.
        </p>
        <p style={{ fontSize: 11, color: "var(--text-muted)", opacity: 0.6 }}>
          <Link href="/privacy" style={{ color: "var(--text-muted)", textDecoration: "none" }}>Privacy Policy</Link> · <Link href="/learn" style={{ color: "var(--text-muted)", textDecoration: "none" }}>All guides</Link> · © 2026 ParentKin.
        </p>
      </footer>
    </div>
  );
}
