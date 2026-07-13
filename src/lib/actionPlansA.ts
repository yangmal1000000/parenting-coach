import type { ActionPlan } from "./actionPlanTypes";

export const BEDTIME_RESET: ActionPlan = {
  id: "bedtime-reset",
  title: "Bedtime Reset",
  subtitle: "7 days to calmer evenings",
  icon: "😴",
  category: "sleep",
  durationDays: 7,
  ageRange: [1, 10],
  premium: false,
  description: "A structured week-long program to transform bedtime from a battle into a calm, predictable routine.",
  days: [
    { day: 1, title: "Audit & Wind-Down Window", tip: "Tonight is about observation, not change.", steps: [
      "Note what time your child naturally gets drowsy (first yawn, eye-rubbing)",
      "Write down your current bedtime routine start time",
      "Identify the #1 flashpoint (bath? teeth? stories?)",
    ]},
    { day: 2, title: "Shift 20 Minutes Earlier", tip: "Overtired kids fight sleep harder.", steps: [
      "Start the wind-down routine 20 minutes earlier than Day 1",
      "Turn off all screens 60 min before bed",
      "Dim lights in the house to signal 'evening mode'",
    ]},
    { day: 3, title: "Build the Visual Routine", tip: "When the routine drives, not you, resistance drops.", steps: [
      "Together with your child, draw 4-6 simple steps (bath → pyjamas → teeth → story → cuddle → sleep)",
      "Stick the chart where they can see it",
      "Let your child check off each step tonight",
    ]},
    { day: 4, title: "The Choice Trick", tip: "Autonomy reduces resistance.", steps: [
      "Offer 2 acceptable choices within the routine (which pyjamas? which book?)",
      "Never offer a choice about whether to do the routine itself",
      "Praise their choosing: 'Great pick!'",
    ]},
    { day: 5, title: "Calm-Down Bridge", tip: "The brain needs a runway, not a landing.", steps: [
      "Add a 5-minute 'cuddle + breathing' step after stories",
      "Try 'smell the flower, blow out the candle' breathing together",
      "Keep it identical every night",
    ]},
    { day: 6, title: "The 'One More' Rule", tip: "Anticipate the stall; beat it to the punch.", steps: [
      "Before bed, say: 'You can have one more cuddle or one more question — your choice'",
      "After that one more, calmly say 'the routine is done, time to rest'",
      "If they get up, walk them back silently and calmly — no lecturing",
    ]},
    { day: 7, title: "Lock It In", tip: "Consistency is the whole game now.", steps: [
      "Run the full routine exactly as built over Days 3-6",
      "Celebrate with your child in the morning: 'You stayed in bed all night!'",
      "Commit to 14 more days of the same routine — that's how habits cement",
    ]},
  ],
};

export const SCREEN_TIME_WEAN: ActionPlan = {
  id: "screen-time-wean",
  title: "Screen Time Reset",
  subtitle: "14 days to healthier habits",
  icon: "📱",
  category: "screen",
  durationDays: 14,
  ageRange: [2, 13],
  premium: false,
  description: "A gradual two-week program to reduce screen-time dependency and meltdowns without going cold turkey.",
  days: [
    { day: 1, title: "Track Current Usage", tip: "You can't change what you don't measure.", steps: [
      "Write down exactly how much screen time happens today (be honest)",
      "Note when meltdowns about screens happen",
      "Don't change anything yet — just observe",
    ]},
    { day: 2, title: "Set the Visual Timer", tip: "The timer is the bad guy, not you.", steps: [
      "Buy or use a visual timer (hourglass, kitchen timer, phone app)",
      "Show your child: 'When the timer finishes, screen time is done'",
      "Give a 5-minute warning before the timer ends",
    ]},
    { day: 3, title: "Establish Screen-Free Zones", tip: "Boundaries are easier than constant negotiation.", steps: [
      "Pick 1-2 screen-free zones (meals? car? bedroom?)",
      "Communicate the rule simply: 'No screens at the table'",
      "Apply the rule to yourself too — model it",
    ]},
    { day: 4, title: "The Transition Bridge", tip: "Don't cut — bridge.", steps: [
      "When screen time ends, immediately offer a high-interest alternative",
      "Best alternatives: outdoor play, a game together, cooking, building",
      "Have the alternative ready BEFORE the screen goes off",
    ]},
    { day: 5, title: "Reduce by 15 Minutes", tip: "Small cuts stick; big cuts backfire.", steps: [
      "Cut today's total screen time by just 15 minutes",
      "Fill that 15 minutes with 1:1 time together",
      "Acknowledge their frustration: 'I know it feels shorter today'",
    ]},
    { day: 6, title: "Earn, Don't Get", tip: "Earned screen time feels different.", steps: [
      "Introduce a simple 'first X, then screen' routine",
      "E.g., 'First we tidy the toys, then we watch your show'",
      "Keep it to ONE prerequisite — don't make it a bribe chain",
    ]},
    { day: 7, title: "Week 1 Review", tip: "Celebrate progress, however small.", steps: [
      "Compare today's screen time to Day 1 — note the difference",
      "Ask your child what they enjoyed doing this week",
      "Plan one screen-free family activity for tomorrow",
    ]},
    { day: 8, title: "Screen-Free Saturday (or Sunday)", tip: "One screen-free day resets the brain.", steps: [
      "Pick one day this weekend — zero screens all day",
      "Plan 3-4 engaging alternatives (park, cooking, crafts, friends)",
      "Expect pushback in the morning; it passes by afternoon",
    ]},
    { day: 9, title: "Reduce by Another 15 Minutes", tip: "You're building a new normal.", steps: [
      "Cut another 15 minutes from the daily total",
      "Total reduction from Day 1 should now be ~30 minutes",
      "Fill with child-led play or outdoor time",
    ]},
    { day: 10, title: "Tech-Free Mornings", tip: "Morning sets the tone.", steps: [
      "No screens before school or before 10am",
      "Replace with: breakfast together, getting dressed race, a story",
      "Expect resistance for 3-4 days — hold firm and calm",
    ]},
    { day: 11, title: "The Boredom Cure", tip: "Boredom is the birthplace of creativity.", steps: [
      "When your child says 'I'm bored', respond: 'That's great! Your brain is getting ready to create something'",
      "Don't offer a screen or a solution — let them sit with it",
      "Have a 'boredom jar' of activity ideas they can pick from",
    ]},
    { day: 12, title: "Outdoor Replacement", tip: "Nature is the original screen alternative.", steps: [
      "Add 30 minutes of outdoor time to today",
      "It doesn't matter what — walk, park, garden, scooter",
      "Notice the effect on evening behaviour",
    ]},
    { day: 13, title: "Family Media Agreement", tip: "Shared rules stick better than imposed ones.", steps: [
      "Sit together and write a simple family media agreement",
      "Include: when, how much, where, and what's off-limits",
      "Everyone signs it — including parents",
    ]},
    { day: 14, title: "Lock In the New Normal", tip: "You've built the foundation. Now protect it.", steps: [
      "Review your Day 1 vs Day 14 screen time — celebrate the change",
      "Commit to maintaining the new limits for 30 more days",
      "Remember: lapses happen. Just return to the routine without drama",
    ]},
  ],
};
