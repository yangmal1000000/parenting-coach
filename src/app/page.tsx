import { Geist } from "next/font/google";
import Link from "next/link";
import { WebOnboarding } from "@/components/WebOnboarding";

const geist = Geist({ subsets: ["latin"], variable: "--font-geist" });

export const metadata = {
  title: "Calm Parent — AI Parenting Coach for Ages 1-8",
  description: "Get practical, research-backed parenting advice for toddlers and young children. Tantrums, sleep, picky eating, behavior — grounded in 1,300+ sources. Free.",
  openGraph: {
    title: "Calm Parent — AI Parenting Coach for Ages 1-8",
    description: "Get practical, research-backed parenting advice for toddlers and young children. Free.",
    type: "website",
    url: "https://parenting-coach-two.vercel.app",
    images: ["/calm-parent-hero.png"],
  },
};

const FAQS = [
  {
    q: "Is Calm Parent free?",
    a: "Yes — completely free. No subscription, no ads, no paywalls. The web app is free to use right now, and the mobile app will also be free."
  },
  {
    q: "Is this advice medically reviewed?",
    a: "Calm Parent provides educational guidance drawn from published parenting books and research. It is not a substitute for professional medical advice. Always consult your pediatrician for your child's specific needs."
  },
  {
    q: "How is this different from asking ChatGPT?",
    a: "Calm Parent is specifically trained on 1,300+ knowledge chunks from 15+ evidence-based parenting books. Every response cites its sources. You also get structured dos, don'ts, and the developmental psychology — not just a wall of text."
  },
  {
    q: "Is my data private?",
    a: "Yes. Your queries stay on your device by default. No account required. Optional cloud sync via Google sign-in if you want to access sessions across devices."
  },
  {
    q: "Does it work offline?",
    a: "The mobile app detects when you're offline and shows a status banner. You can still browse saved advice and history. New queries need an internet connection."
  },
  {
    q: "What languages does it support?",
    a: "English and Korean (한국어). Switch languages anytime in the app or on the web."
  },
];

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
        <div style={{ display: "flex", gap: 16, alignItems: "center" }}>
          <Link href="/learn" style={{
            fontSize: 14,
            fontWeight: 500,
            color: "var(--text-muted)",
            textDecoration: "none",
          }}>
            Learn
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
        </div>
      </nav>

      {/* Hero */}
      <section style={{
        padding: "40px 24px 48px",
        maxWidth: 900,
        margin: "0 auto",
      }}>
        <div style={{
          display: "flex",
          gap: 40,
          alignItems: "center",
          flexWrap: "wrap",
          justifyContent: "center",
        }}>
          {/* Left: copy */}
          <div style={{ flex: "1 1 380px", maxWidth: 480 }}>
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
              📚 1,300+ research sources · Ages 1-8
            </div>
            <h1 style={{
              fontSize: "clamp(28px, 5vw, 42px)",
              fontWeight: 700,
              letterSpacing: -1,
              lineHeight: 1.15,
              marginBottom: 16,
            }}>
              Parenting advice for ages 1-8 that's{" "}
              <span style={{ color: "var(--primary)" }}>actually grounded in research</span>
            </h1>
            <p style={{
              fontSize: 17,
              lineHeight: 1.6,
              color: "var(--text-muted)",
              marginBottom: 28,
            }}>
              Tantrums, sleep struggles, picky eating, behavior issues. Type or speak what's happening right now. Get practical dos, don'ts, and the psychology behind why they work — in seconds.
            </p>
            <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
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
          </div>

          {/* Right: hero image collage */}
          <div style={{
            flex: "1 1 300px",
            maxWidth: 380,
            position: "relative",
            minHeight: 360,
          }}>
            {/* Main image */}
            <img
              src="/calm-parent-hero.png"
              alt="A calm mother embracing her child"
              style={{
                width: "100%",
                maxWidth: 320,
                height: "auto",
                aspectRatio: "1",
                objectFit: "cover",
                borderRadius: 20,
                boxShadow: "0 12px 32px rgba(0,0,0,0.12)",
              }}
            />
            {/* Floating second image */}
            <img
              src="/calm-parent-hero-father.png"
              alt="A calm father playing with his child"
              style={{
                position: "absolute",
                bottom: -20,
                right: -10,
                width: 140,
                height: 140,
                objectFit: "cover",
                borderRadius: 14,
                border: "4px solid var(--bg)",
                boxShadow: "0 8px 20px rgba(0,0,0,0.15)",
              }}
            />
            {/* Floating third image */}
            <img
              src="/calm-parent-community.png"
              alt="Diverse parents in a warm community"
              style={{
                position: "absolute",
                top: -16,
                right: 10,
                width: 110,
                height: 110,
                objectFit: "cover",
                borderRadius: 12,
                border: "4px solid var(--bg)",
                boxShadow: "0 6px 16px rgba(0,0,0,0.12)",
              }}
            />
          </div>
        </div>
      </section>

      {/* Pain points — "Does this sound familiar?" */}
      <section style={{
        padding: "20px 24px 60px",
        maxWidth: 680,
        margin: "0 auto",
      }}>
        <h2 style={{
          fontSize: 16,
          fontWeight: 600,
          color: "var(--text-muted)",
          textTransform: "uppercase",
          letterSpacing: 0.5,
          marginBottom: 20,
          textAlign: "center",
        }}>
          Does this sound familiar?
        </h2>
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
          gap: 12,
        }}>
          {[
            { emoji: "😤", text: "Your toddler is screaming on the supermarket floor because you said no to sweets" },
            { emoji: "😴", text: "Bedtime is a daily battle — they keep coming out of their room" },
            { emoji: "🍽️", text: "Your child refuses everything except bread and crackers" },
            { emoji: "😡", text: "Your child hits or bites when they don't get their way" },
            { emoji: "📱", text: "Every time you turn off the iPad, it's a meltdown" },
            { emoji: "👥", text: "Your kids fight over every single toy" },
          ].map((item, i) => (
            <div key={i} style={{
              padding: "16px 18px",
              background: "var(--surface)",
              border: "1px solid var(--border)",
              borderRadius: 14,
              display: "flex",
              gap: 10,
              alignItems: "flex-start",
            }}>
              <span style={{ fontSize: 20, flexShrink: 0 }}>{item.emoji}</span>
              <p style={{ fontSize: 13, lineHeight: 1.5, color: "var(--text-muted)", margin: 0 }}>
                {item.text}
              </p>
            </div>
          ))}
        </div>
        <p style={{
          textAlign: "center",
          fontSize: 15,
          color: "var(--text)",
          marginTop: 28,
          fontWeight: 500,
        }}>
          You're not failing. You just need the right strategies.
        </p>
      </section>

      {/* How it works */}
      <section style={{
        padding: "20px 24px 60px",
        maxWidth: 800,
        margin: "0 auto",
      }}>
        <h2 style={{
          fontSize: 22,
          fontWeight: 700,
          textAlign: "center",
          marginBottom: 28,
        }}>
          How it works
        </h2>
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
          gap: 16,
        }}>
          {[
            { icon: "💬", title: "Describe the situation", body: "Type or speak. \"My 3-year-old is having a meltdown in the shop.\"" },
            { icon: "🧠", title: "Get evidence-based advice", body: "Practical dos, don'ts, and the developmental psychology — cited from real books." },
            { icon: "🔬", title: "Go deeper when you need to", body: "Deep Dive gives you a 750-word personalized report with reflective exercises." },
            { icon: "💬", title: "Ask follow-ups", body: "\"What if she does this at bedtime?\" The conversation keeps context naturally." },
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
        padding: "20px 24px 60px",
        maxWidth: 600,
        margin: "0 auto",
      }}>
        <h2 style={{
          fontSize: 22,
          fontWeight: 700,
          textAlign: "center",
          marginBottom: 28,
        }}>
          What you get back
        </h2>
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
            <p style={{ fontSize: 14, lineHeight: 1.6, marginTop: 4 }}>• Name the feeling: "You're frustrated because you wanted them so badly."</p>
          </div>
          <div style={{ marginBottom: 20 }}>
            <p style={{ fontSize: 12, fontWeight: 600, color: "var(--error)", marginBottom: 4 }}>❌ DON'T</p>
            <p style={{ fontSize: 14, lineHeight: 1.6 }}>• Don't give in to stop the crying — this teaches that meltdowns work.</p>
            <p style={{ fontSize: 14, lineHeight: 1.6, marginTop: 4 }}>• Don't try to reason mid-tantrum — their logical brain is offline.</p>
          </div>
          <div>
            <p style={{ fontSize: 12, fontWeight: 600, color: "var(--accent)", marginBottom: 4 }}>🧠 WHY THIS WORKS</p>
            <p style={{ fontSize: 14, lineHeight: 1.6 }}>At 3, your child's prefrontal cortex — the brain region that controls impulses — is still developing. They literally cannot regulate disappointment on their own. By naming the emotion, you activate their left hemisphere, which helps calm the emotional right brain. This is called "name it to tame it."</p>
          </div>
          <div style={{ marginTop: 20, paddingTop: 16, borderTop: "1px solid var(--border)" }}>
            <p style={{ fontSize: 12, color: "var(--text-muted)" }}>📖 Source: The Whole-Brain Child (Siegel & Bryson), Ch. 3</p>
          </div>
        </div>
      </section>

      {/* Features */}
      <section style={{
        padding: "20px 24px 60px",
        maxWidth: 800,
        margin: "0 auto",
      }}>
        <h2 style={{
          fontSize: 22,
          fontWeight: 700,
          textAlign: "center",
          marginBottom: 28,
        }}>
          Everything you need
        </h2>
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
          gap: 12,
        }}>
          {[
            { icon: "🎤", title: "Speak or type", body: "Voice input for when your hands are full. Just tap and speak." },
            { icon: "👶", title: "Multi-child profiles", body: "Add each child's age, temperament, and conditions for personalised advice." },
            { icon: "💬", title: "Conversation mode", body: "Ask follow-ups. The thread keeps context so you can go deeper." },
            { icon: "🔔", title: "Daily parenting tips", body: "A gentle, evidence-based tip each morning. Opt in anytime." },
            { icon: "🔒", title: "Private by default", body: "No account needed. Your data stays on your device." },
            { icon: "🌍", title: "Bilingual", body: "English and 한국어. Switch anytime." },
            { icon: "📴", title: "Works offline", body: "Browse saved advice even without internet." },
            { icon: "🌙", title: "Dark mode", body: "Easy on the eyes during those 3am wake-ups." },
          ].map((item) => (
            <div key={item.title} style={{
              padding: "16px 18px",
              background: "var(--surface)",
              border: "1px solid var(--border)",
              borderRadius: 14,
            }}>
              <div style={{ fontSize: 24, marginBottom: 8 }}>{item.icon}</div>
              <h3 style={{ fontSize: 14, fontWeight: 600, marginBottom: 4 }}>{item.title}</h3>
              <p style={{ fontSize: 13, lineHeight: 1.5, color: "var(--text-muted)" }}>{item.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Sources */}
      <section style={{
        padding: "20px 24px 60px",
        maxWidth: 700,
        margin: "0 auto",
        textAlign: "center",
      }}>
        <h2 style={{ fontSize: 22, fontWeight: 700, marginBottom: 12 }}>
          Grounded in trusted sources
        </h2>
        <p style={{ fontSize: 14, color: "var(--text-muted)", marginBottom: 24 }}>
          Every response cites real books and research — not generic AI text.
        </p>
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
        <div style={{ marginTop: 20 }}>
          <Link href="/learn" style={{
            display: "inline-block",
            padding: "10px 24px",
            borderRadius: 999,
            background: "var(--surface)",
            border: "1px solid var(--border)",
            color: "var(--text)",
            fontSize: 14,
            fontWeight: 600,
            textDecoration: "none",
          }}>
            Read our free guides →
          </Link>
        </div>
      </section>

      {/* Final CTA */}
      <section style={{
        textAlign: "center",
        padding: "48px 24px 32px",
        maxWidth: 600,
        margin: "0 auto",
      }}>
        <div style={{
          background: "var(--primary)",
          borderRadius: 24,
          padding: "48px 32px",
        }}>
          <h2 style={{ fontSize: 28, fontWeight: 700, letterSpacing: -0.5, marginBottom: 12, color: "#fff" }}>
            You don't have to figure it out alone
          </h2>
          <p style={{ fontSize: 16, color: "rgba(255,255,255,0.85)", marginBottom: 28 }}>
            Free. Private. Built for parents of children ages 1-8. Available when you need it — even at 7am.
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
            Try Calm Parent Free →
          </Link>
        </div>
      </section>

      {/* FAQ */}
      <section style={{
        padding: "20px 24px 60px",
        maxWidth: 680,
        margin: "0 auto",
      }}>
        <h2 style={{
          fontSize: 22,
          fontWeight: 700,
          textAlign: "center",
          marginBottom: 28,
        }}>
          Frequently asked questions
        </h2>
        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          {FAQS.map((faq) => (
            <div key={faq.q} style={{
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

      {/* Email capture */}
      <section style={{
        textAlign: "center",
        padding: "20px 24px 60px",
        maxWidth: 500,
        margin: "0 auto",
      }}>
        <p style={{ fontSize: 14, color: "var(--text-muted)", marginBottom: 12 }}>
          📬 Get notified about the mobile app launch
        </p>
        <form action="https://formspree.io/f/xyzplaceholder" method="POST" style={{ display: "flex", gap: 8, justifyContent: "center", flexWrap: "wrap" }}>
          <input
            type="email"
            name="email"
            placeholder="your@email.com"
            required
            style={{
              padding: "12px 16px",
              borderRadius: 999,
              border: "1px solid var(--border)",
              background: "var(--surface)",
              color: "var(--text)",
              fontSize: 14,
              minWidth: 220,
              outline: "none",
            }}
          />
          <button type="submit" style={{
            padding: "12px 20px",
            borderRadius: 999,
            background: "var(--primary)",
            color: "#fff",
            fontSize: 14,
            fontWeight: 600,
            border: "none",
            cursor: "pointer",
          }}>
            Notify Me
          </button>
        </form>
      </section>

      {/* Footer */}
      <footer style={{
        padding: "32px 24px",
        borderTop: "1px solid var(--border)",
        textAlign: "center",
      }}>
        <div style={{ marginBottom: 12 }}>
          <Link href="/" style={{ textDecoration: "none", display: "inline-flex", alignItems: "center", gap: 6 }}>
            <span style={{ fontSize: 18 }}>🌿</span>
            <span style={{ fontWeight: 600, fontSize: 15, color: "var(--text)" }}>Calm Parent</span>
          </Link>
        </div>
        <div style={{ display: "flex", gap: 16, justifyContent: "center", marginBottom: 16, flexWrap: "wrap" }}>
          <Link href="/learn" style={{ fontSize: 13, color: "var(--text-muted)", textDecoration: "none" }}>Learn</Link>
          <Link href="/en" style={{ fontSize: 13, color: "var(--text-muted)", textDecoration: "none" }}>Try Free</Link>
          <Link href="/privacy" style={{ fontSize: 13, color: "var(--text-muted)", textDecoration: "none" }}>Privacy</Link>
          <Link href="/ko" style={{ fontSize: 13, color: "var(--text-muted)", textDecoration: "none" }}>한국어</Link>
        </div>
        <p style={{ fontSize: 12, color: "var(--text-muted)", marginBottom: 4 }}>
          Educational guidance, not medical advice. Always consult your pediatrician.
        </p>
        <p style={{ fontSize: 11, color: "var(--text-muted)", opacity: 0.6 }}>
          © 2026 Calm Parent. Grounded in 1,300+ research sources.
        </p>
      </footer>

      {/* FAQ Schema */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: FAQS.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: { "@type": "Answer", text: f.a },
        })),
      })}} />
    </div>
    </>
  );
}
