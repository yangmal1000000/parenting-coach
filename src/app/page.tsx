import { Geist } from "next/font/google";
import Link from "next/link";
import { WebOnboarding } from "@/components/WebOnboarding";
import ScrollGrowLogo from "@/components/ScrollGrowLogo";

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

const PAIN_POINTS = [
  { emoji: "😤", text: "Your toddler is screaming on the supermarket floor because you said no to sweets" },
  { emoji: "😴", text: "Bedtime is a daily battle — they keep coming out of their room" },
  { emoji: "🍽️", text: "Your child refuses everything except bread and crackers" },
  { emoji: "😡", text: "Your child hits or bites when they don't get their way" },
  { emoji: "📱", text: "Every time you turn off the iPad, it's a meltdown" },
  { emoji: "👥", text: "Your kids fight over every single toy" },
];

const FEATURES = [
  { icon: "🎤", title: "Speak or type", body: "Voice input for when your hands are full. Just tap and speak." },
  { icon: "👶", title: "Multi-child profiles", body: "Add each child's age, temperament, and conditions for personalised advice." },
  { icon: "💬", title: "Conversation mode", body: "Ask follow-ups. The thread keeps context so you can go deeper." },
  { icon: "🔔", title: "Daily parenting tips", body: "A gentle, evidence-based tip each morning. Opt in anytime." },
  { icon: "🔒", title: "Private by default", body: "No account needed. Your data stays on your device." },
  { icon: "🌍", title: "Bilingual", body: "English and 한국어. Switch anytime." },
  { icon: "📴", title: "Works offline", body: "Browse saved advice even without internet." },
  { icon: "🌙", title: "Dark mode", body: "Easy on the eyes during those 3am wake-ups." },
];

const SOURCES = [
  "How to Talk So Kids Will Listen",
  "The Whole-Brain Child",
  "No-Drama Discipline",
  "Peaceful Parent, Happy Kids",
  "1-2-3 Magic",
  "The Explosive Child",
  "Parenting from the Inside Out",
  "Raising Good Humans",
];

export default function LandingPage() {
  return (
    <>
    <WebOnboarding />
    <ScrollGrowLogo />
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
        padding: "18px 24px",
        maxWidth: 960,
        margin: "0 auto",
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <img src="/logo/logo-original.jpg" alt="Calm Parent logo" style={{ height: 28, width: "auto", borderRadius: 4 }} />
          <span style={{ fontWeight: 600, fontSize: 17, letterSpacing: -0.3 }}>Calm Parent</span>
        </div>
        <div style={{ display: "flex", gap: 20, alignItems: "center" }}>
          <Link href="/learn" style={{
            fontSize: 14,
            fontWeight: 500,
            color: "var(--text-muted)",
            textDecoration: "none",
          }}>
            Learn
          </Link>
          <Link href="/en" style={{
            padding: "9px 22px",
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

      {/* Hero — split layout with refined image treatment */}
      <section style={{
        padding: "32px 24px 56px",
        maxWidth: 960,
        margin: "0 auto",
      }}>
        <div style={{
          display: "flex",
          gap: 48,
          alignItems: "center",
          flexWrap: "wrap",
          justifyContent: "center",
        }}>
          {/* Left: copy */}
          <div style={{ flex: "1 1 400px", maxWidth: 500 }}>
            <div style={{
              display: "inline-block",
              padding: "5px 14px",
              borderRadius: 999,
              background: "var(--surface)",
              border: "1px solid var(--border)",
              fontSize: 11,
              fontWeight: 600,
              color: "var(--text-muted)",
              marginBottom: 20,
              letterSpacing: 0.5,
              textTransform: "uppercase",
            }}>
              📚 1,300+ research sources · Ages 1-8
            </div>
            <h1 style={{
              fontSize: "clamp(28px, 5vw, 42px)",
              fontWeight: 700,
              letterSpacing: -1,
              lineHeight: 1.12,
              marginBottom: 16,
            }}>
              Parenting advice for ages 1-8 that&apos;s{" "}
              <span style={{ color: "var(--primary)" }}>actually grounded in research</span>
            </h1>
            <p style={{
              fontSize: 17,
              lineHeight: 1.6,
              color: "var(--text-muted)",
              marginBottom: 28,
            }}>
              Tantrums, sleep struggles, picky eating, behavior issues. Type or speak what&apos;s happening right now. Get practical dos, don&apos;ts, and the psychology behind why they work — in seconds.
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
                boxShadow: "0 4px 14px rgba(91, 140, 123, 0.25)",
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

          {/* Right: hero image — single, clean, framed */}
          <div style={{
            flex: "1 1 320px",
            maxWidth: 400,
            position: "relative",
          }}>
            <div style={{
              position: "relative",
              borderRadius: 24,
              overflow: "hidden",
              boxShadow: "0 20px 60px rgba(0, 0, 0, 0.12)",
            }}>
              <img
                src="/calm-parent-hero.png"
                alt="A calm mother embracing her child"
                style={{
                  width: "100%",
                  height: "auto",
                  display: "block",
                  aspectRatio: "3 / 2",
                  objectFit: "cover",
                }}
              />
              {/* Gradient overlay for text legibility */}
              <div style={{
                position: "absolute",
                bottom: 0,
                left: 0,
                right: 0,
                height: "50%",
                background: "linear-gradient(to top, rgba(0,0,0,0.6), transparent)",
              }} />
              {/* Caption on image */}
              <div style={{
                position: "absolute",
                bottom: 20,
                left: 24,
                right: 24,
              }}>
                <p style={{
                  color: "#fff",
                  fontSize: 14,
                  fontWeight: 600,
                  margin: 0,
                  textShadow: "0 1px 8px rgba(0,0,0,0.3)",
                }}>
                  Evidence-based strategies
                </p>
                <p style={{
                  color: "rgba(255,255,255,0.8)",
                  fontSize: 12,
                  margin: "4px 0 0 0",
                }}>
                  For the moments you need it most
                </p>
              </div>
            </div>

            {/* Floating stat badge */}
            <div style={{
              position: "absolute",
              top: -16,
              right: -12,
              background: "var(--surface)",
              border: "1px solid var(--border)",
              borderRadius: 16,
              padding: "12px 16px",
              boxShadow: "0 8px 24px rgba(0,0,0,0.08)",
              textAlign: "center",
            }}>
              <div style={{ fontSize: 22, fontWeight: 700, color: "var(--primary)", lineHeight: 1 }}>
                15+
              </div>
              <div style={{ fontSize: 10, color: "var(--text-muted)", marginTop: 2, fontWeight: 500 }}>
                Expert books
              </div>
            </div>

            {/* Floating second badge */}
            <div style={{
              position: "absolute",
              bottom: -16,
              left: -12,
              background: "var(--surface)",
              border: "1px solid var(--border)",
              borderRadius: 16,
              padding: "12px 16px",
              boxShadow: "0 8px 24px rgba(0,0,0,0.08)",
              textAlign: "center",
            }}>
              <div style={{ fontSize: 22, fontWeight: 700, color: "var(--accent)", lineHeight: 1 }}>
                ∼3s
              </div>
              <div style={{ fontSize: 10, color: "var(--text-muted)", marginTop: 2, fontWeight: 500 }}>
                To advice
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust bar */}
      <section style={{
        padding: "0 24px 48px",
        maxWidth: 800,
        margin: "0 auto",
      }}>
        <div style={{
          display: "flex",
          justifyContent: "center",
          gap: 32,
          flexWrap: "wrap",
          padding: "16px 0",
          borderTop: "1px solid var(--border)",
          borderBottom: "1px solid var(--border)",
        }}>
          {[
            { stat: "1,300+", label: "Research sources" },
            { stat: "15+", label: "Expert books" },
            { stat: "2", label: "Languages" },
            { stat: "100%", label: "Free" },
          ].map((item) => (
            <div key={item.label} style={{ textAlign: "center" }}>
              <div style={{ fontSize: 20, fontWeight: 700, color: "var(--text)" }}>
                {item.stat}
              </div>
              <div style={{ fontSize: 11, color: "var(--text-muted)", marginTop: 2, textTransform: "uppercase", letterSpacing: 0.3 }}>
                {item.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Pain points */}
      <section style={{
        padding: "32px 24px 56px",
        maxWidth: 760,
        margin: "0 auto",
      }}>
        <h2 style={{
          fontSize: 13,
          fontWeight: 600,
          color: "var(--text-muted)",
          textTransform: "uppercase",
          letterSpacing: 0.8,
          marginBottom: 20,
          textAlign: "center",
        }}>
          Does this sound familiar?
        </h2>
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
          gap: 12,
        }}>
          {PAIN_POINTS.map((item, i) => (
            <div key={i} style={{
              padding: "18px 20px",
              background: "var(--surface)",
              border: "1px solid var(--border)",
              borderRadius: 16,
              display: "flex",
              gap: 12,
              alignItems: "flex-start",
            }}>
              <span style={{ fontSize: 22, flexShrink: 0, lineHeight: 1.2 }}>{item.emoji}</span>
              <p style={{ fontSize: 13, lineHeight: 1.5, color: "var(--text-muted)", margin: 0 }}>
                {item.text}
              </p>
            </div>
          ))}
        </div>
        <p style={{
          textAlign: "center",
          fontSize: 16,
          color: "var(--text)",
          marginTop: 32,
          fontWeight: 600,
        }}>
          You&apos;re not failing. You just need the right strategies.
        </p>
      </section>

      {/* How it works */}
      <section style={{
        padding: "24px 24px 64px",
        maxWidth: 840,
        margin: "0 auto",
      }}>
        <h2 style={{
          fontSize: 24,
          fontWeight: 700,
          textAlign: "center",
          marginBottom: 8,
        }}>
          How it works
        </h2>
        <p style={{
          fontSize: 15,
          color: "var(--text-muted)",
          textAlign: "center",
          marginBottom: 32,
        }}>
          Three steps to better strategies — in under 10 seconds.
        </p>
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
          gap: 16,
        }}>
          {[
            { step: "1", icon: "💬", title: "Describe the situation", body: "Type or speak. \"My 3-year-old is having a meltdown in the shop.\"" },
            { step: "2", icon: "🧠", title: "Get evidence-based advice", body: "Practical dos, don'ts, and the developmental psychology — cited from real books." },
            { step: "3", icon: "🔬", title: "Go deeper when you need to", body: "Deep Dive gives you a 750-word personalized report with reflective exercises." },
          ].map((item) => (
            <div key={item.title} style={{
              background: "var(--surface)",
              border: "1px solid var(--border)",
              borderRadius: 20,
              padding: 28,
              position: "relative",
            }}>
              <div style={{
                position: "absolute",
                top: 20,
                right: 20,
                fontSize: 28,
                fontWeight: 800,
                color: "var(--border)",
                lineHeight: 1,
              }}>
                {item.step}
              </div>
              <div style={{ fontSize: 32, marginBottom: 14 }}>{item.icon}</div>
              <h3 style={{ fontSize: 16, fontWeight: 600, marginBottom: 6 }}>{item.title}</h3>
              <p style={{ fontSize: 14, lineHeight: 1.5, color: "var(--text-muted)" }}>{item.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Example card — premium treatment */}
      <section style={{
        padding: "24px 24px 64px",
        maxWidth: 620,
        margin: "0 auto",
      }}>
        <h2 style={{
          fontSize: 24,
          fontWeight: 700,
          textAlign: "center",
          marginBottom: 8,
        }}>
          What you get back
        </h2>
        <p style={{
          fontSize: 15,
          color: "var(--text-muted)",
          textAlign: "center",
          marginBottom: 32,
        }}>
          Not a wall of text. Structured, actionable guidance.
        </p>
        <div style={{
          background: "var(--surface)",
          border: "1px solid var(--border)",
          borderRadius: 24,
          padding: 0,
          boxShadow: "0 12px 40px rgba(0,0,0,0.06)",
          overflow: "hidden",
        }}>
          {/* Header bar */}
          <div style={{
            padding: "14px 24px",
            borderBottom: "1px solid var(--border)",
            background: "var(--bg)",
            display: "flex",
            alignItems: "center",
            gap: 8,
          }}>
            <div style={{ width: 10, height: 10, borderRadius: "50%", background: "#e88b7b" }} />
            <div style={{ width: 10, height: 10, borderRadius: "50%", background: "#f4a340" }} />
            <div style={{ width: 10, height: 10, borderRadius: "50%", background: "#7ec9a3" }} />
            <span style={{ fontSize: 12, color: "var(--text-muted)", marginLeft: 8 }}>Example response</span>
          </div>

          <div style={{ padding: "28px" }}>
            <div style={{ marginBottom: 24 }}>
              <p style={{ fontSize: 11, fontWeight: 700, color: "var(--primary)", marginBottom: 6, textTransform: "uppercase", letterSpacing: 0.5 }}>📋 Situation</p>
              <p style={{ fontSize: 14, lineHeight: 1.6 }}>Your 3-year-old wants sweets and is screaming in the shop.</p>
            </div>
            <div style={{ marginBottom: 24 }}>
              <p style={{ fontSize: 11, fontWeight: 700, color: "var(--primary)", marginBottom: 6, textTransform: "uppercase", letterSpacing: 0.5 }}>✅ Do</p>
              <p style={{ fontSize: 14, lineHeight: 1.6 }}>• Get down to their eye level. Try: &ldquo;I see you really want the sweets. We&apos;re not buying them today.&rdquo;</p>
              <p style={{ fontSize: 14, lineHeight: 1.6, marginTop: 4 }}>• Name the feeling: &ldquo;You&apos;re frustrated because you wanted them so badly.&rdquo;</p>
            </div>
            <div style={{ marginBottom: 24 }}>
              <p style={{ fontSize: 11, fontWeight: 700, color: "var(--error)", marginBottom: 6, textTransform: "uppercase", letterSpacing: 0.5 }}>❌ Don&apos;t</p>
              <p style={{ fontSize: 14, lineHeight: 1.6 }}>• Don&apos;t give in to stop the crying — this teaches that meltdowns work.</p>
              <p style={{ fontSize: 14, lineHeight: 1.6, marginTop: 4 }}>• Don&apos;t try to reason mid-tantrum — their logical brain is offline.</p>
            </div>
            <div style={{ marginBottom: 24 }}>
              <p style={{ fontSize: 11, fontWeight: 700, color: "var(--accent)", marginBottom: 6, textTransform: "uppercase", letterSpacing: 0.5 }}>🧠 Why this works</p>
              <p style={{ fontSize: 14, lineHeight: 1.6 }}>At 3, your child&apos;s prefrontal cortex — the brain region that controls impulses — is still developing. They literally cannot regulate disappointment on their own. By naming the emotion, you activate their left hemisphere, which helps calm the emotional right brain. This is called &ldquo;name it to tame it.&rdquo;</p>
            </div>
            <div style={{
              paddingTop: 16,
              borderTop: "1px solid var(--border)",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}>
              <p style={{ fontSize: 12, color: "var(--text-muted)", margin: 0 }}>📖 The Whole-Brain Child (Siegel & Bryson), Ch. 3</p>
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
      </section>

      {/* Features */}
      <section style={{
        padding: "24px 24px 64px",
        maxWidth: 840,
        margin: "0 auto",
      }}>
        <h2 style={{
          fontSize: 24,
          fontWeight: 700,
          textAlign: "center",
          marginBottom: 8,
        }}>
          Everything you need
        </h2>
        <p style={{
          fontSize: 15,
          color: "var(--text-muted)",
          textAlign: "center",
          marginBottom: 32,
        }}>
          Designed for real parenting moments — not theory.
        </p>
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
          gap: 12,
        }}>
          {FEATURES.map((item) => (
            <div key={item.title} style={{
              padding: "20px 22px",
              background: "var(--surface)",
              border: "1px solid var(--border)",
              borderRadius: 16,
            }}>
              <div style={{ fontSize: 26, marginBottom: 10 }}>{item.icon}</div>
              <h3 style={{ fontSize: 14, fontWeight: 600, marginBottom: 4 }}>{item.title}</h3>
              <p style={{ fontSize: 13, lineHeight: 1.5, color: "var(--text-muted)" }}>{item.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Sources */}
      <section style={{
        padding: "24px 24px 56px",
        maxWidth: 700,
        margin: "0 auto",
        textAlign: "center",
      }}>
        <h2 style={{ fontSize: 24, fontWeight: 700, marginBottom: 8 }}>
          Grounded in trusted sources
        </h2>
        <p style={{ fontSize: 15, color: "var(--text-muted)", marginBottom: 28 }}>
          Every response cites real books and research — not generic AI text.
        </p>
        <div style={{
          display: "flex",
          flexWrap: "wrap",
          gap: 8,
          justifyContent: "center",
        }}>
          {SOURCES.map((book) => (
            <span key={book} style={{
              padding: "7px 16px",
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
        <div style={{ marginTop: 24 }}>
          <Link href="/learn" style={{
            display: "inline-block",
            padding: "12px 28px",
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

      {/* Final CTA — premium card */}
      <section style={{
        padding: "24px 24px 32px",
        maxWidth: 620,
        margin: "0 auto",
      }}>
        <div style={{
          background: "linear-gradient(135deg, var(--primary) 0%, #4a7a69 100%)",
          borderRadius: 28,
          padding: "56px 40px",
          textAlign: "center",
          boxShadow: "0 20px 60px rgba(91, 140, 123, 0.2)",
        }}>
          <div style={{ fontSize: 40, marginBottom: 16 }}>🌿</div>
          <h2 style={{ fontSize: 28, fontWeight: 700, letterSpacing: -0.5, marginBottom: 12, color: "#fff" }}>
            You don&apos;t have to figure it out alone
          </h2>
          <p style={{ fontSize: 16, color: "rgba(255,255,255,0.85)", marginBottom: 32, maxWidth: 400, margin: "0 auto 32px" }}>
            Free. Private. Built for parents of children ages 1-8. Available when you need it — even at 7am.
          </p>
          <Link href="/en" style={{
            display: "inline-block",
            padding: "16px 44px",
            borderRadius: 999,
            background: "#fff",
            color: "var(--primary)",
            fontSize: 17,
            fontWeight: 700,
            textDecoration: "none",
            boxShadow: "0 4px 16px rgba(0,0,0,0.1)",
          }}>
            Try Calm Parent Free →
          </Link>
        </div>
      </section>

      {/* FAQ */}
      <section style={{
        padding: "24px 24px 56px",
        maxWidth: 680,
        margin: "0 auto",
      }}>
        <h2 style={{
          fontSize: 24,
          fontWeight: 700,
          textAlign: "center",
          marginBottom: 32,
        }}>
          Frequently asked questions
        </h2>
        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          {FAQS.map((faq) => (
            <div key={faq.q} style={{
              padding: "20px 24px",
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
        padding: "16px 24px 56px",
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
              padding: "12px 18px",
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
            padding: "12px 22px",
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
        padding: "36px 24px",
        borderTop: "1px solid var(--border)",
        textAlign: "center",
      }}>
        <div style={{ marginBottom: 16 }}>
          <Link href="/" style={{ textDecoration: "none", display: "inline-flex", alignItems: "center", gap: 6 }}>
            <img src="/logo/logo-original.jpg" alt="Calm Parent logo" style={{ height: 18, width: "auto", borderRadius: 3 }} />
            <span style={{ fontWeight: 600, fontSize: 15, color: "var(--text)" }}>Calm Parent</span>
          </Link>
        </div>
        <div style={{ display: "flex", gap: 20, justifyContent: "center", marginBottom: 16, flexWrap: "wrap" }}>
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
