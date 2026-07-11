import { TopicContent } from './types';

const childSleepIssues: TopicContent = {
  tldr:
    'Sleep issues in children—from frequent night-waking to bedtime resistance—are among the most common concerns parents face. Most stem from mismatched sleep schedules, sleep associations (like rocking or feeding to sleep), or inconsistent routines rather than medical conditions. The fix usually involves an age-appropriate sleep schedule, a consistent wind-down routine, and teaching independent sleep onset. Gentle methods (gradual withdrawal, fading) and structured methods (controlled crying) both work; the best method is the one a family can apply consistently. Persistent snoring, gasping, or extreme daytime sleepiness warrant medical evaluation.',
  scenario:
    'It\'s 8:45 PM. You\'ve been trying to get your two-year-old to sleep for the last hour and a half. You read three books, sang the songs, gave the water cup, found the specific stuffed animal. Just as you tiptoe toward the door, she sits up: "Mommy, one more hug." You give the hug. Ten minutes later, she\'s crying again. By 9:30, she\'s finally asleep—but you know she\'ll be back in your room by 2 AM. You\'re exhausted, your patience is gone, and you\'re starting to dread bedtime. You wonder if this is just how it has to be, or if something can actually change.',
  ageRange: '0–12 years',
  strategies: [
    {
      title: 'Match the Schedule to the Child',
      what: 'Ensure bedtime aligns with your child\'s natural sleep window. Putting a child to bed before they\'re sleepy leads to bedtime resistance; putting them to bed after they\'re overtired leads to harder settling, more night-waking, and earlier morning waking. Use age-appropriate total sleep targets and watch for tired cues rather than the clock alone.',
      script:
        '"I noticed you\'re rubbing your eyes and getting silly—those are your body\'s signs that it\'s time to wind down. Let\'s start our bedtime routine now so your body can get the rest it needs."',
      why:
        'Weissbluth\'s research demonstrates that missing the sleep window raises cortisol and adrenaline, making it harder to fall asleep and stay asleep. Overtired children wake more at night, not less. The AAP recommends 12–16 hours per 24 hours for ages 1–2, 10–13 hours for ages 3–5, and 9–12 hours for ages 6–12 (Healthy Sleep Habits, Happy Child, Ch. 4; AAP Healthy Sleep Habits).',
    },
    {
      title: 'Build a Consistent Wind-Down Routine',
      what: 'A predictable sequence of calming activities signals your child\'s brain that sleep is coming. The routine should be the same every night, take 20–30 minutes, and occur in the room where the child sleeps. Dim lights, no screens, and progressively quieter activities.',
      script:
        '"Bath, pajamas, two books, song, lights out. Same order, every night. I\'ll set a visual timer so you can see when we move to the next step."',
      why:
        'Pantley emphasizes that routines create powerful neural associations—specific cues become linked with sleep onset, so the brain begins preparing for sleep automatically when the routine starts. Consistency matters more than the specific activities chosen (The No-Cry Sleep Solution, Ch. 6). The AAP also recommends a consistent, screen-free bedtime routine.',
    },
    {
      title: 'Teach Independent Sleep Onset',
      what: 'If your child falls asleep while rocking, feeding, or lying next to you, they learn to associate sleep with that condition. When they briefly wake during the night (as everyone does), they need that same condition to fall back asleep. Teaching them to fall asleep independently at bedtime is the single most effective fix for night-waking.',
      script:
        '"I\'m going to put you in your bed awake. I\'ll sit in the chair nearby while you settle. I\'m not leaving you—I\'m right here. You can do this." (Then gradually move the chair closer to the door over several nights.)',
      why:
        'Ferber\'s research established that sleep associations formed at bedtime determine whether a child can self-soothe during normal night-wakings. The key variable is not whether the child cries, but whether they learn to fall asleep without parent-dependent cues (Solve Your Child\'s Sleep Problems, Ch. 4). Obleman\'s Sleep Sense program uses the same principle with gentler methods (The Sleep Sense Program, Module 3).',
    },
    {
      title: 'Use Graduated Checking or Gentle Fading',
      what: 'If your child protests when you change the sleep routine, choose a structured method and apply it consistently. Graduated checking (Ferber method) involves brief, timed check-ins that gradually lengthen. Gentle fading (Pantley) involves slowly reducing your presence over many nights. Pick one approach and commit to it for at least 7–10 nights.',
      script:
        '"I\'m going to step out for one minute, and then I\'ll come check on you. You\'re safe. Goodnight." (Return after 1 min, then 3 min, then 5 min, then 10 min, extending the interval each night.)',
      why:
        'Both methods work when applied consistently. Ferber\'s graduated checking teaches the child that protests don\'t produce the old sleep association, while intermittent reassurance prevents full abandonment distress (Solve Your Child\'s Sleep Problems, Ch. 5). Pantley\'s gentle removal technique—gradually reducing contact over 10–14 nights—works for families who prefer minimal crying (The No-Cry Sleep Solution, Ch. 8).',
    },
    {
      title: 'Address Night Wakings Consistently',
      what: 'When your child wakes at night, respond the same way you want them to eventually self-soothe. If your goal is independent sleep, avoid reverting to old habits (bringing them to bed, feeding) in the middle of the night. Inconsistency confuses the child and reinforces the waking.',
      script:
        '(Quietly, briefly): "You\'re okay. It\'s still nighttime. I\'ll rub your back for one minute, and then I\'m going back to my bed. Goodnight."',
      why:
        'Obleman stresses that night-waking will persist if the child\'s sleep association is parent-dependent. The brain learns "if I cry, Mom comes and rocks me" applies to 2 AM just as it does at 8 PM. Consistency between bedtime and nighttime response is essential for change (The Sleep Sense Program, Module 5). Weissbluth notes that night-wakings typically resolve within 1–2 weeks of consistent independent sleep training (Healthy Sleep Habits, Happy Child, Ch. 7).',
    },
    {
      title: 'Manage Early Morning Wakings',
      what: 'If your child wakes before 5:30 AM, treat it as a night-waking, not morning. Keep lights off, voices low, and interactions minimal. Use a visual cue (a clock that glows green at an acceptable wake time) to teach the child when it\'s okay to start the day. Ensure bedtime isn\'t too early and total sleep needs are met.',
      script:
        '"The clock is still orange, which means it\'s still sleep time. You don\'t have to be asleep, but you need to rest quietly. When it turns green, you can come get me and we\'ll start our day."',
      why:
        'Ferber identifies early morning wakings as one of the most persistent sleep issues, often caused by a too-early bedtime, afternoon naps ending too late, or morning light entering the room. The body\'s circadian rhythm shifts with developmental stages (Solve Your Child\'s Sleep Problems, Ch. 11). Weissbluth notes that overtiredness paradoxically causes early waking, so check that total sleep is adequate (Healthy Sleep Habits, Happy Child, Ch. 9).',
    },
  ],
  avoid: [
    {
      mistake: 'Using screens within an hour of bedtime',
      whyBackfires:
        'Blue light from tablets, phones, and TVs suppresses melatonin production by up to 22%, directly signaling the brain that it\'s daytime. Even "calming" videos work against the biological wind-down. The AAP recommends zero screen time for at least 60 minutes before bed.',
      instead:
        'Replace screens with books, audiobooks, quiet play, or conversation. If a screen is non-negotiable, use blue-light filters and keep it to 15 minutes maximum, ending at least 30 minutes before lights out.',
    },
    {
      mistake: 'Extending naps too late in the day',
      whyBackfires:
        'A nap that ends after 4:00 PM (for children under 3) directly competes with bedtime sleep pressure. The child simply isn\'t tired enough to fall asleep, leading to long bedtime battles and reinforcing the association between bed and frustration.',
      instead:
        'End naps by 3:30 PM at the latest for toddlers. If your child still naps, aim for a midday nap ending by 2:00–3:00 PM. If the nap runs late, cap it—wake your child gently rather than letting them sleep until they naturally wake.',
    },
    {
      mistake: 'Bringing the child to your bed when they wake at night',
      whyBackfires:
        'Co-sleeping as a response to night-waking teaches the child that their bed is only for falling asleep initially, and your bed is the "real" sleep location. This strengthens the night-waking habit rather than resolving it. It can also create safety concerns depending on the child\'s age and your sleep environment.',
      instead:
        'Go to the child\'s room. Comfort them there, briefly and calmly, then return to your own bed. If you\'re in the process of sleep training, keep nighttime responses consistent with your bedtime method so the child isn\'t confused.',
    },
    {
      mistake: 'Inconsistent responses—sometimes rocking, sometimes letting them cry',
      whyBackfires:
        'Intermittent reinforcement is the strongest pattern in behavioral learning. If a child sometimes gets rocked to sleep and sometimes doesn\'t, they learn to persist with crying because it worked before and might work again. This actually increases crying duration compared to a consistent approach.',
      instead:
        'Choose one method and commit to it for at least 7–10 consecutive nights. Tell your partner, "No matter what, we\'re doing the same thing tonight that we did last night." Consistency is harder in the moment but resolves the issue much faster.',
    },
  ],
  ageGuidance: [
    {
      age: '0–4 months',
      advice:
        'Newborns cannot be "sleep trained"—their circadian rhythms are immature and they need to feed around the clock. Focus on establishing day/night distinction (bright days, dark nights), feeding on demand, and beginning a simple bedtime routine. By 2–3 months, begin putting baby down drowsy but awake occasionally. The AAP recommends room-sharing (not bed-sharing) on a separate surface for at least the first 6 months.',
    },
    {
      age: '4–12 months',
      advice:
        'This is the developmental window where sleep training is most effective. By 4–6 months, most healthy babies no longer need overnight feeds. Choose a method—Ferber, full extinction, or gentle fading—and apply it consistently. Establish 2–3 naps per day on a predictable schedule. Most babies this age need 12–15 hours of total sleep per 24 hours. The AAP recommends starting a consistent routine by 4 months.',
    },
    {
      age: '1–3 years',
      advice:
        'Transition from 2 naps to 1 nap typically occurs between 12–18 months. Bedtime resistance often peaks around 18–30 months as autonomy develops. Use a visual bedtime routine chart, offer limited choices (which pajamas, which book), and use a toddler clock for morning wake expectations. Most toddlers need 11–14 hours total sleep. Nightmares may begin around age 2—respond with comfort, but keep it brief.',
    },
    {
      age: '3–12 years',
      advice:
        'Naps end by age 3–4 for most children. Children 3–5 need 10–13 hours; ages 6–12 need 9–12 hours. Common issues shift to bedtime resistance (stalling, "one more" requests), anxiety about the dark, and early waking. Maintain screen-free wind-down time, keep a consistent bedtime even on weekends (within 30 minutes), and ensure the bedroom is cool, dark, and quiet. Watch for signs of sleep-disordered breathing: loud snoring, pauses, gasping, or mouth-breathing—which require medical evaluation.',
    },
  ],
  whenToSeekHelp: [
    'Your child snores loudly, gasps, pauses breathing during sleep, or breathes through their mouth consistently—these may indicate obstructive sleep apnea, which affects 1–5% of children and requires medical evaluation.',
    'Sleep issues persist after 2–3 weeks of consistently applying a structured sleep method, or your child\'s sleep is causing significant family distress, parental depression, or safety concerns (e.g., child climbing out of the crib at night).',
    'Your child experiences frequent night terrors (screaming episodes where they appear asleep and cannot be comforted) more than 1–2 times per week, or the episodes involve sleepwalking that could be dangerous.',
    'Daytime sleepiness is severe enough to affect school performance, mood, or behavior—this may indicate insufficient sleep, poor sleep quality, or an underlying medical issue such as enlarged tonsils, adenoids, or a sleep disorder.',
  ],
  faqs: [
    {
      q: 'Will sleep training harm my child or damage our attachment?',
      a: 'Multiple large studies have found no evidence that graduated sleep training (including controlled crying and full extinction) causes long-term harm to attachment, emotional development, or stress regulation. A 2016 randomized trial published in Pediatrics followed children to age 6 and found no differences in emotional health or parent-child attachment between sleep-trained and non-sleep-trained groups. The harm comes from chronic sleep deprivation—not from teaching independent sleep.',
    },
    {
      q: 'What\'s the difference between the Ferber method and "cry it out"?',
      a: 'Full extinction ("cry it out") means putting the child to bed awake and not returning until morning. Ferber\'s graduated checking involves timed, progressively longer check-ins (e.g., 3 min, 5 min, 10 min) to provide reassurance without reinforcing crying. Both teach independent sleep onset. Ferber is generally preferred by parents who can\'t tolerate unbroken crying. The key to either method is consistency—doing it the same way every night.',
    },
    {
      q: 'My child was sleeping through the night and suddenly stopped. Why?',
      a: 'Sleep regressions are common at 4 months, 8 months, 12 months, 18 months, and 2 years, typically tied to developmental milestones (crawling, walking, language leaps). Illness, teething, travel, or a new sibling can also disrupt sleep. Return to your established routine and method as quickly as possible after the disruption passes. Avoid introducing new sleep habits (like bed-sharing) during regressions—that\'s how temporary setbacks become permanent patterns.',
    },
    {
      q: 'When should I drop my child\'s nap?',
      a: 'Most children drop their second nap around 12–15 months and their final nap between ages 3 and 4. Signs your child is ready: taking 30+ minutes to fall asleep at naptime, skipping naps several days per week without evening meltdowns, or napping late makes bedtime very difficult. Transition gradually by shortening the nap by 15 minutes every few days, then every other day, then dropping it entirely. Move bedtime 30 minutes earlier during the transition.',
    },
    {
      q: 'Is co-sleeping safe?',
      a: 'The AAP recommends room-sharing (baby sleeping in a crib or bassinette in the parents\' room) for at least the first 6 months, but explicitly advises against bed-sharing due to suffocation and SIDS risk. After age 1, the safety risk decreases, but bed-sharing can create persistent sleep associations that are hard to break. If you choose to bed-share, follow safe-sleep guidelines: firm mattress, no gaps, no heavy bedding, no alcohol or sedating medications, and baby on their back.',
    },
    {
      q: 'What if my child says they\'re scared of the dark or monsters?',
      a: 'Take it seriously without feeding the fear. A small nightlight is fine. Avoid "monster spray" or elaborate rituals that confirm monsters are real. Instead: "Your room is safe. I\'ve checked and there\'s nothing here. Let\'s think about something happy while you fall asleep—I\'ll describe a beach day." For persistent fears, teach a relaxation skill: "Smell the flower (breathe in), blow out the candle (breathe out)." If nighttime anxiety is severe or persistent, discuss it with your pediatrician.',
    },
  ],
  sources: [
    {
      title: 'Healthy Sleep Habits, Happy Child',
      author: 'Marc Weissbluth, MD',
      details: 'Ch. 4 (Sleep Windows and Schedules); Ch. 7 (Night Wakings); Ch. 9 (Early Morning Wakings)',
    },
    {
      title: 'Solve Your Child\'s Sleep Problems',
      author: 'Richard Ferber, MD',
      details: 'Ch. 4 (Sleep Associations); Ch. 5 (Graduated Checking); Ch. 11 (Early Morning Wakings)',
    },
    {
      title: 'The No-Cry Sleep Solution',
      author: 'Elizabeth Pantley',
      details: 'Ch. 6 (Bedtime Routines); Ch. 8 (Gentle Removal Technique)',
    },
    {
      title: 'The Sleep Sense Program',
      author: 'Dana Obleman',
      details: 'Module 3 (Independent Sleep Onset); Module 5 (Night Wakings)',
    },
    {
      title: 'AAP Healthy Sleep Habits',
      author: 'American Academy of Pediatrics',
      details: 'Recommended sleep durations by age; screen-time and bedtime routine guidance (HealthyChildren.org)',
    },
  ],
};

export default childSleepIssues;
