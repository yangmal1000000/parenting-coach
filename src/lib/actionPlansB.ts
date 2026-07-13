import type { ActionPlan } from "./actionPlanTypes";

export const TANTRUM_TOOLKIT: ActionPlan = {
  id: "tantrum-toolkit",
  title: "Tantrum Toolkit",
  subtitle: "7 days to fewer meltdowns",
  icon: "😤",
  category: "tantrums",
  durationDays: 7,
  ageRange: [1, 8],
  premium: false,
  description: "A week of building your toolkit so you can handle meltdowns with confidence instead of panic.",
  days: [
    { day: 1, title: "Map the Triggers", tip: "Meltdowns have patterns. Find them.", steps: [
      "Today, note every tantrum: time, place, what happened right before",
      "Look for patterns: hunger? transitions? tiredness? overstimulation?",
      "Don't try to change anything yet — gather data",
    ]},
    { day: 2, title: "The Calm-First Rule", tip: "A dysregulated adult cannot regulate a child.", steps: [
      "Before responding to a meltdown today: stop, breathe 3 times",
      "Lower your voice and slow your movements on purpose",
      "Remember: their behaviour is not about you",
    ]},
    { day: 3, title: "Name It to Tame It", tip: "Naming an emotion halves its intensity.", steps: [
      "During or after a meltdown, name the emotion: 'You were really frustrated'",
      "Don't add 'but' or a lesson — just the name",
      "Let the name do the work",
    ]},
    { day: 4, title: "Prevent, Don't React", tip: "The best tantrum strategy is preventing it.", steps: [
      "Using your Day 1 trigger map, anticipate one trigger today",
      "Set up ahead: snack before the shop, warning before transition",
      "Watch what happens when you get ahead of it",
    ]},
    { day: 5, title: "The Connection Deposit", tip: "Full attention cups don't overflow.", steps: [
      "Give 10 minutes of uninterrupted, child-led play today",
      "No phone, no teaching, no correcting — follow their lead",
      "Notice if today's meltdowns are calmer",
    ]},
    { day: 6, title: "The Post-Meltdown Repair", tip: "The repair matters more than the meltdown.", steps: [
      "After today's meltdown, wait until everyone is calm (could be 30 min later)",
      "Sit close, offer a cuddle, say: 'That was really hard. I love you'",
      "Don't re-litigate what happened — just reconnect",
    ]},
    { day: 7, title: "Your Toolkit Review", tip: "You've built real skills this week.", steps: [
      "Review the week — which day's strategy worked best?",
      "Write down your top 3 go-to responses",
      "Commit to using your toolkit for the next meltdown — you've got this",
    ]},
  ],
};

export const SIBLING_HARMONY: ActionPlan = {
  id: "sibling-harmony",
  title: "Sibling Harmony",
  subtitle: "14 days to less fighting",
  icon: "👥",
  category: "sibling",
  durationDays: 14,
  ageRange: [2, 13],
  premium: false,
  description: "A two-week program to reduce sibling conflict by teaching conflict resolution rather than imposing peace.",
  days: [
    { day: 1, title: "Stop Being the Judge", tip: "Referee parents make worse fights.", steps: [
      "Today, when siblings fight, do NOT take sides or assign blame",
      "Say: 'I see two kids who need help. I'll be in the kitchen when you're ready'",
      "Only intervene if someone is being physically hurt",
    ]},
    { day: 2, title: "Acknowledge Both Sides", tip: "Fair doesn't mean equal.", steps: [
      "When fighting: 'You're both upset. You want the truck, and you had it first'",
      "Name both feelings without deciding who's right",
      "Let them sit with the conflict — don't rush to fix it",
    ]},
    { day: 3, title: "The 'Problem to Solve'", tip: "Kids solve what they own.", steps: [
      "Instead of solving it, ask: 'What could you both do that would work?'",
      "If they're stuck, offer 2 options — both of which are acceptable to you",
      "Praise whatever solution they reach, even if imperfect",
    ]},
    { day: 4, title: "1:1 Time Split", tip: "Sibling rivalry often = competition for you.", steps: [
      "Give each child 10 minutes of 1:1 time today — separately",
      "Child-led, no phone, no siblings interrupting",
      "Notice if competition drops for the rest of the day",
    ]},
    { day: 5, title: "Team Building", tip: "Shared goals build bonds.", steps: [
      "Create a task they must do together today (build a fort, set the table)",
      "Frame it: 'You two are a team — I know you can do it'",
      "Don't help unless asked — let them figure out roles",
    ]},
    { day: 6, title: "The 'No Forced Sorry' Rule", tip: "Forced apologies teach lying.", steps: [
      "Today, ban forced 'sorry's. Instead, model apologizing yourself",
      "If your child hurts a sibling, focus on repair: 'How can we help them feel better?'",
      "Repair might be: getting ice, offering a toy, sitting nearby",
    ]},
    { day: 7, title: "Catch Them Being Good", tip: "What you pay attention to grows.", steps: [
      "Today, actively look for moments when siblings are kind to each other",
      "Name it specifically: 'I noticed you let your sister go first — that was really kind'",
      "Aim for 3 positive observations today",
    ]},
    { day: 8, title: "The Feelings Check-In", tip: "Unspoken feelings become behaviour.", steps: [
      "At dinner, ask: 'What made you happy today? What made you frustrated?'",
      "Everyone shares — including parents",
      "No fixing, no commenting — just listening",
    ]},
    { day: 9, title: "Personal Space Rules", tip: "Everyone needs a place to retreat.", steps: [
      "Establish: 'You can say no to being touched or bothered in your room'",
      "Help each child create a small 'calm corner' — a cushion, a book, a toy",
      "When tempers rise, suggest: 'Do you need some calm-corner time?'",
    ]},
    { day: 10, title: "The Sharing Alternative", tip: "Sharing isn't always the right lesson.", steps: [
      "Introduce 'special toys' that don't have to be shared — each child picks 2-3",
      "Everything else uses a timer: '5 minutes each, then switch'",
      "Let them operate the timer themselves",
    ]},
    { day: 11, title: "Conflict Role-Play", tip: "Practice when calm, use when stressed.", steps: [
      "When everyone is happy, role-play a typical fight with toys or stuffed animals",
      "Practice the script: 'Stop. I don't like that. What can we do?'",
      "Make it silly and fun — this builds the neural pathway",
    ]},
    { day: 12, title: "The Friendship Date", tip: "Siblings need to like each other, not just coexist.", steps: [
      "Plan a fun activity that both children enjoy (movie night, baking, park)",
      "Frame it as 'sibling time' — something special just for them",
      "Take a photo — start building positive shared memories",
    ]},
    { day: 13, title: "Family Meeting", tip: "Kids buy into rules they help create.", steps: [
      "Hold a 10-minute family meeting: 'What's working? What's not?'",
      "Let the kids suggest one new rule for the house",
      "Write it down and put it on the fridge",
    ]},
    { day: 14, title: "Celebrate the Shift", tip: "Name the growth you've all made.", steps: [
      "At dinner, tell each child one thing you've noticed that's improved",
      "Acknowledge your own growth too: 'I've been shouting less'",
      "Commit to the 'be a team' mindset — this is now your family culture",
    ]},
  ],
};

export const CONFIDENCE_BUILDER: ActionPlan = {
  id: "confidence-builder",
  title: "Confidence Builder",
  subtitle: "7 days to stronger self-esteem",
  icon: "💪",
  category: "confidence",
  durationDays: 7,
  ageRange: [4, 14],
  premium: false,
  description: "A focused week of shifting from outcome-praise to effort-praise, building genuine resilience.",
  days: [
    { day: 1, title: "Audit Your Praise", tip: "Awareness comes first.", steps: [
      "Today, notice: are you praising the person ('you're so smart') or the effort ('you worked hard')?",
      "Count how many times you say 'good job' — it's usually more than you think",
      "Don't change anything yet — just notice",
    ]},
    { day: 2, title: "Switch to Process Praise", tip: "Effort praise builds growth mindset.", steps: [
      "Today, praise the strategy, effort, or persistence — not the outcome",
      "'You really stuck with that puzzle' instead of 'you're so clever'",
      "Aim for 3 specific process praises",
    ]},
    { day: 3, title: "The Power of 'Yet'", tip: "One word changes everything.", steps: [
      "When your child says 'I can't do it', add: '...yet'",
      "'You can't tie your shoes yet. You're learning'",
      "This small word teaches that ability grows",
    ]},
    { day: 4, title: "Let Them Struggle", tip: "Rescue-free zones build confidence.", steps: [
      "Today, when your child is struggling with something (age-appropriate), resist helping immediately",
      "Wait. Watch. Say: 'I can see you're working hard on that'",
      "Only help if they ask AND have tried at least 2 approaches",
    ]},
    { day: 5, title: "Ask, Don't Tell", tip: "Their ideas build their confidence.", steps: [
      "Instead of 'do it this way', ask: 'What do you think you could try?'",
      "When they answer, let them try their idea — even if you know a better way",
      "Their confidence grows from their ideas working (or not)",
    ]},
    { day: 6, title: "Responsibility = Confidence", tip: "Kids who contribute feel capable.", steps: [
      "Give your child one real responsibility today (setting the table, feeding the pet, folding laundry)",
      "Don't redo it if it's imperfect — thank them for their contribution",
      "Add a new responsibility each week from now on",
    ]},
    { day: 7, title: "The Strengths Conversation", tip: "Name what you see.", steps: [
      "Tell your child 3 specific strengths you've noticed this week",
      "Not vague 'you're great' — specific: 'I noticed how kind you were to your brother'",
      "Make this a weekly ritual — Sunday dinner is perfect",
    ]},
  ],
};
