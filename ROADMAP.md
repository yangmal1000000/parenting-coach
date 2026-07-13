# ParentKin Feature Roadmap

> Tracking document for Features 1–9. Update status as work progresses.

## Status Legend
- 🔴 Not Started
- 🟡 In Progress
- 🟢 Complete
- ⚫ Blocked / Needs Decision

---

## Feature 1: Progress & Pattern Tracking
**Goal:** Surface trends from existing session data — "tantrums down 60% this month", "bedtime is your hardest time", topic frequency over time.

**Deliverables:**
- [ ] New "Insights" tab in bottom nav
- [ ] Topic frequency chart (last 30/90 days)
- [ ] Time-of-day heatmap from session timestamps
- [ ] Streak + improvement narrative ("You've asked about tantrums 3× less this month")
- [ ] Comparison: this month vs last month summary card
- [ ] Backend: aggregate sessions by topic_category, group by week/month

**Status:** 🟢 Complete (v1)
**Started:** 2026-07-12
**Completed:** 2026-07-12

---

## Feature 2: Daily/Weekly Proactive Content
**Goal:** Don't wait for crises. Push weekly age-specific tips, milestone alerts, seasonal topics.

**Deliverables:**
- [x] Content generation pipeline (age → relevant tip)
- [x] Weekly tip card on home screen ("Tip of the Week")
- [x] Age-aware tip rotation (deterministic by ISO week number)
- [x] Seasonal alerts (school start, holidays, summer screen time, etc.)
- [x] Milestone alerts based on child age/stage with red flags
- [x] Dismissible cards (per-user state)
- [ ] Weekly push notification (needs mobile app / service worker)
- [ ] Email digest pipeline

**Status:** 🟢 Complete (v1)
**Started:** 2026-07-12
**Completed:** 2026-07-12

---

## Feature 3: Co-Parent / Shared Family Access
**Goal:** Both parents see same child profiles, advice history, saved strategies.

**Deliverables:**
- [ ] Family group model (Supabase: `families` table)
- [ ] Invite partner via link/code
- [ ] Shared child profiles
- [ ] Shared session history (read access to partner's sessions for shared children)
- [ ] Shared bookmarks/notes

**Status:** 🔴 Not Started

---

## Feature 4: Behavior Pattern Insights (AI)
**Goal:** AI mines session history for patterns and surfaces them proactively.

**Deliverables:**
- [ ] Pattern detection: time clustering, topic escalation, frequency trends
- [ ] Auto-generated insight cards ("Tantrums cluster around 5-7pm")
- [ ] Escalation alerts ("Hitting queries increasing — here's a focused plan")
- [ ] Correlation engine: topics that co-occur
- [ ] Weekly AI summary: "This week's patterns"

**Status:** 🔴 Not Started
**Depends on:** Feature 1 (data infrastructure)

---

## Feature 5: Action Plans / Multi-Step Programs
**Goal:** Structured 1-2 week programs instead of one-off advice.

**Deliverables:**
- [x] Plan templates: Bedtime Reset (7d), Screen Time Weaning (14d), Sibling Harmony (14d), Tantrum Toolkit (7d), Confidence Builder (7d)
- [x] Day-by-day structured steps with checkmarks
- [x] Progress tracking within a plan (progress bar, day overview)
- [x] Personalized to child age
- [x] Plan completion summary
- [ ] Premium gating (all free for now)
- [ ] Personalized to temperament/conditions (currently age-only)

**Status:** 🟢 Complete (v1)
**Started:** 2026-07-12
**Completed:** 2026-07-12

---

## Feature 6: Milestone & Development Tracker
**Goal:** Age-based developmental expectations, red flags, auto-suggested topics.

**Deliverables:**
- [ ] Milestone database by age/stage (0-18)
- [ ] "What to expect at this age" cards
- [ ] Red flag checklist per stage
- [ ] Auto-suggest relevant topics as child grows
- [ ] Professional evaluation recommendation logic
- [ ] Development timeline view

**Status:** 🔴 Not Started

---

## Feature 7: Crisis & Professional Support Pathway
**Goal:** Safe pathway when queries indicate serious concerns.

**Deliverables:**
- [ ] Crisis keyword detection in coach API
- [ ] Amber alert UI ("This may need professional support")
- [ ] UK/US resource directory (NHS, CAMHS, Samaritans, 988, NSPCC)
- [ ] "Find professional help" directory
- [ ] Optional in-app therapist booking (premium)
- [ ] Safety guardrails in AI responses

**Status:** 🔴 Not Started

---

## Feature 8: Voice Mode (Hands-Free)
**Goal:** Parents can speak during a meltdown and get instant spoken guidance.

**Deliverables:**
- [ ] Extend existing transcribe endpoint to full voice conversation
- [ ] Auto-submit transcribed query → instant advice
- [ ] TTS response playback (Web Speech API or OpenAI TTS)
- [ ] "Hands-free mode" toggle: continuous listen → respond loop
- [ ] Quick voice shortcuts ("tantrum", "bedtime", "hitting")

**Status:** 🔴 Not Started
**Note:** Transcribe endpoint already exists — extend from there.

---

## Feature 9: Calming Audio Content for Kids
**Goal:** In-the-moment audio tools parents can play for/with their child.

**Deliverables:**
- [ ] Breathing exercises (age-appropriate, 1-3 min)
- [ ] Personalized bedtime stories (child name + interests)
- [ ] 2-minute tantrum reset audio
- [ ] Calming soundscapes (rain, ocean, white noise)
- [ ] Audio player component with looping
- [ ] Content generation or licensing pipeline

**Status:** 🔴 Not Started

---

## Build Order
| Phase | Feature | Why First |
|-------|---------|-----------|
| 1 | #1 Progress Tracking | Highest retention impact, uses existing data |
| 1 | #4 Pattern Insights | Builds on #1 data layer, key differentiator |
| 2 | #5 Action Plans | Premium value proposition |
| 2 | #2 Proactive Content | Retention engine |
| 3 | #3 Co-Parent | Table-stakes feature |
| 3 | #6 Milestones | Extends existing stage system |
| 3 | #7 Crisis Pathway | Safety + differentiator |
| 4 | #8 Voice Mode | Already have transcription — extend it |
| 4 | #9 Calming Audio | New content pipeline, highest effort |

---

_Change log:_
- 2026-07-12: Created. Feature 1 started.
