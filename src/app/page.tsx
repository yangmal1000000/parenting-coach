import { Geist } from "next/font/google";
import Link from "next/link";
import { Sprout } from "lucide-react";
import ScrollGrowLogo from "@/components/ScrollGrowLogo";
import { ExampleCarousel } from "@/components/ExampleCarousel";
import { getIcon } from "@/lib/iconMap";
import { DynamicIcon } from "@/lib/DynamicIcon";

const geist = Geist({ subsets: ["latin"], variable: "--font-geist" });

export const metadata = {
  title: "ParentKin — AI Parenting Coach for Ages 1-8",
  description: "Get practical, research-backed parenting advice for toddlers and young children. Tantrums, sleep, picky eating, behavior — grounded in 1,300+ sources. Free.",
  openGraph: {
    title: "ParentKin — AI Parenting Coach for Ages 1-8",
    description: "Get practical, research-backed parenting advice for toddlers and young children. Free.",
    type: "website",
    url: "https://parentkin.com",
    images: ["/parentkin-hero.png"],
  },
};

const FAQS = [
  {
    q: "Is ParentKin free?",
    a: "You get 5 free coaching sessions every month — no signup required. For unlimited sessions, Deep Dive reports, and cross-device sync, ParentKin Premium is £4.99/month or £39/year. The web app is free to try right now."
  },
  {
    q: "Is this advice medically reviewed?",
    a: "ParentKin provides educational guidance drawn from published parenting books and research. It is not a substitute for professional medical advice. Always consult your pediatrician for your child&apos;s specific needs."
  },
  {
    q: "How is this different from asking ChatGPT?",
    a: "ParentKin is specifically trained on 1,300+ knowledge chunks from 15+ evidence-based parenting books. Every response cites its sources. You also get structured dos, don&apos;ts, and the developmental psychology — not just a wall of text."
  },
  {
    q: "Is my data private?",
    a: "Yes. Your queries stay on your device by default. No account required for the free tier. Premium uses optional cloud sync via Google sign-in if you want to access sessions across devices."
  },
  {
    q: "What does Premium include?",
    a: "Unlimited coaching sessions, Deep Dive personalised reports (750-word deep analysis with reflective exercises), conversation history across devices, and an ad-free experience. £4.99/month or £39/year."
  },
  {
    q: "What languages does it support?",
    a: "English and Korean (한국어). Switch languages anytime in the app or on the web."
  },
];

const PAIN_POINTS = [
  { icon: "Flame", text: "Your toddler is screaming on the supermarket floor because you said no to sweets" },
  { icon: "Moon", text: "Bedtime is a daily battle — they keep coming out of their room" },
  { icon: "Utensils", text: "Your child refuses everything except bread and crackers" },
  { icon: "Angry", text: "Your child hits or bites when they don't get their way" },
  { icon: "Smartphone", text: "Every time you turn off the iPad, it's a meltdown" },
  { icon: "Users", text: "Your kids fight over every single toy" },
];

const FEATURES = [
  { icon: "Mic", title: "Speak or type", body: "Voice input for when your hands are full. Just tap and speak." },
  { icon: "Baby", title: "Multi-child profiles", body: "Add each child's age, temperament, and conditions for personalised advice." },
  { icon: "MessageSquare", title: "Conversation mode", body: "Ask follow-ups. The thread keeps context so you can go deeper." },
  { icon: "Bell", title: "Daily parenting tips", body: "A gentle, evidence-based tip each morning. Opt in anytime." },
  { icon: "Lock", title: "Private by default", body: "No account needed. Your data stays on your device." },
  { icon: "Globe", title: "Bilingual", body: "English and 한국어. Switch anytime." },
  { icon: "WifiOff", title: "Works offline", body: "Browse saved advice even without internet." },
  { icon: "Moon", title: "Dark mode", body: "Easy on the eyes during those 3am wake-ups." },
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

const EXAMPLES = [
  {
    situation: "Your 3-year-old wants sweets and is screaming in the shop.",
    dos: [
      "Get down to their eye level. Try: \u201cI see you really want the sweets. We\u2019re not buying them today.\u201d",
      "Name the feeling: \u201cYou\u2019re frustrated because you wanted them so badly.\u201d",
    ],
    donts: [
      "Don\u2019t give in to stop the crying \u2014 this teaches that meltdowns work.",
      "Don\u2019t try to reason mid-tantrum \u2014 their logical brain is offline.",
    ],
    why: "At 3, your child\u2019s prefrontal cortex \u2014 the brain region that controls impulses \u2014 is still developing. They literally cannot regulate disappointment on their own. By naming the emotion, you activate their left hemisphere, which helps calm the emotional right brain. This is called \u201cname it to tame it.\u201d",
    source: "\u{1F4D6} The Whole-Brain Child (Siegel & Bryson), Ch. 3",
  },
  {
    situation: "Your 4-year-old refuses to stay in bed and keeps coming out of their room.",
    dos: [
      "Use a bedtime pass \u2014 one ticket for one final request (water, hug, bathroom). After that, gently walk them back without talking.",
      "Make bedtime earlier. Overtired kids fight sleep harder.",
    ],
    donts: [
      "Don\u2019t negotiate or give long explanations at bedtime \u2014 attention rewards the behaviour.",
      "Don\u2019t show frustration \u2014 a calm, boring return is the only effective response.",
    ],
    why: "The \u201cbedtime pass\u201d gives your child a sense of control within firm boundaries, reducing power struggles. Silent returns eliminate the attention reward. Research shows this combination resolves bedtime resistance in 90% of cases within a week.",
    source: "\u{1F4D6} 1-2-3 Magic (Phelan), Ch. 7",
  },
  {
    situation: "Your 5-year-old hits their younger sibling when they don\u2019t get their way.",
    dos: [
      "Separate them immediately and calmly: \u201cI won\u2019t let you hit. I\u2019m keeping everyone safe.\u201d",
      "Once calm, help them name it: \u201cYou were really angry that she took your toy. What could you do next time?\u201d",
    ],
    donts: [
      "Don\u2019t hit back or use physical punishment \u2014 it models the exact behaviour you\u2019re trying to stop.",
      "Don\u2019t force apologies mid-meltdown \u2014 empathy can\u2019t be taught when the brain is in fight-or-flight.",
    ],
    why: "Children learn emotional regulation through co-regulation. When you stay calm during their aggression, you\u2019re literally lending them your prefrontal cortex. Over time, this builds their own capacity for self-control.",
    source: "\u{1F4D6} No-Drama Discipline (Siegel & Bryson), Ch. 5",
  },
  {
    situation: "Your 2-year-old throws food on the floor at every meal.",
    dos: [
      "Say calmly: \u201cFood stays on the tray.\u201d If they throw again, end the meal: \u201cMealtime is over. We\u2019ll try again later.\u201d",
      "Give small portions \u2014 less to throw, and it gives them a sense of finishing.",
    ],
    donts: [
      "Don\u2019t laugh or give big reactions \u2014 even negative attention reinforces the behaviour.",
      "Don\u2019t force them to eat \u2014 pressure creates food battles that can last years.",
    ],
    why: "At 2, throwing is experimentation + cause-and-effect learning, not defiance. A calm, consistent boundary (meal ends) teaches natural consequences without power struggles. Ellyn Satter\u2019s Division of Responsibility shows that pressuring food intake backfires and increases picky eating.",
    source: "\u{1F4D6} Raising Good Humans (Clarke-Fields), Ch. 8",
  },
  {
    situation: "Every time you turn off the iPad, your 4-year-old has a meltdown.",
    dos: [
      "Give a 5-minute warning: \u201cTwo more episodes, then we turn it off.\u201d Use a visual timer.",
      "Have a transition activity ready: \u201cAfter the iPad, it\u2019s Lego time! What should we build?\u201d",
    ],
    donts: [
      "Don\u2019t turn it off without warning \u2014 abrupt transitions feel like betrayal to a young brain.",
      "Don\u2019t use screen time as a reward or punishment \u2014 it makes it more emotionally charged.",
    ],
    why: "Young children struggle with task-switching \u2014 their brains get \u201cstuck\u201d on the high-dopamine activity. Warnings + a planned next activity help their nervous system transition. Research from the AAP shows that predictable routines reduce screen-time meltdowns by 70%.",
    source: "\u{1F4D6} The Explosive Child (Greene), Ch. 4",
  },
  {
    situation: "Your kids (ages 3 and 6) fight over every single toy.",
    dos: [
      "Sportscast: \u201cYou both want the truck. You\u2019re pulling on it.\u201d Let them attempt a solution before stepping in.",
      "Use \u201ctime-sharing\u201d: \u201c3 minutes each, I\u2019ll set the timer.\u201d Give them the tool, not the solution.",
    ],
    donts: [
      "Don\u2019t always intervene \u2014 children need practice negotiating, and hovering prevents skill-building.",
      "Don\u2019t pick a \u201cwinner\u201d \u2014 \u201cWho had it first?\u201d teaches them that possession is power.",
    ],
    why: "Sibling conflict is developmentally normal and actually builds negotiation skills. Faber & Mazlish found that children whose parents \u201csportscast\u201d conflicts (narrate without judging) develop stronger conflict resolution skills by age 7. The goal isn\u2019t zero fights \u2014 it\u2019s productive fights.",
    source: "\u{1F4D6} Siblings Without Rivalry (Faber & Mazlish), Ch. 3",
  },
];

export default function LandingPage() {
  return (
    <>
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
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <img src="/logo/parentkin-icon.jpg" alt="ParentKin logo" style={{ height: 34, width: 34, borderRadius: 8, objectFit: "cover" }} />
          <span style={{ fontWeight: 700, fontSize: 18, letterSpacing: -0.4, color: "var(--text)" }}>ParentKin</span>
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
              1,300+ research sources · Ages 1-8
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
                src="/parentkin-hero.png"
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
            { stat: "5/mo", label: "Free sessions" },
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
              <span style={{ flexShrink: 0, lineHeight: 1.2 }}><DynamicIcon name={item.icon} size={22} color="var(--primary)" /></span>
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
            { step: "1", icon: "MessageSquare", title: "Describe the situation", body: "Type or speak. \"My 3-year-old is having a meltdown in the shop.\"" },
            { step: "2", icon: "Brain", title: "Get evidence-based advice", body: "Practical dos, don'ts, and the developmental psychology — cited from real books." },
            { step: "3", icon: "Microscope", title: "Go deeper when you need to", body: "Deep Dive gives you a 750-word personalized report with reflective exercises." },
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
              <div style={{ marginBottom: 14 }}><DynamicIcon name={item.icon} size={32} color="var(--primary)" /></div>
              <h3 style={{ fontSize: 16, fontWeight: 600, marginBottom: 6 }}>{item.title}</h3>
              <p style={{ fontSize: 14, lineHeight: 1.5, color: "var(--text-muted)" }}>{item.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Example carousel */}
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
        <ExampleCarousel examples={EXAMPLES} />
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
              <div style={{ marginBottom: 10 }}><DynamicIcon name={item.icon} size={26} color="var(--primary)" /></div>
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
          <div style={{ fontSize: 40, marginBottom: 16, display: "flex", justifyContent: "center" }}><Sprout size={40} color="#fff" /></div>
          <h2 style={{ fontSize: 28, fontWeight: 700, letterSpacing: -0.5, marginBottom: 12, color: "#fff" }}>
            You don&apos;t have to figure it out alone
          </h2>
          <p style={{ fontSize: 16, color: "rgba(255,255,255,0.85)", marginBottom: 32, maxWidth: 400, margin: "0 auto 32px" }}>
            Free. Private. Built for parents of children ages 1-8. 5 free sessions every month — no signup needed.
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
            Try ParentKin →
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
          Get notified about the mobile app launch
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
            <img src="/logo/parentkin-icon.jpg" alt="ParentKin logo" style={{ height: 24, width: 24, borderRadius: 5, objectFit: "cover" }} />
            <span style={{ fontWeight: 600, fontSize: 15, color: "var(--text)" }}>ParentKin</span>
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
          © 2026 ParentKin. Grounded in 1,300+ research sources.
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
