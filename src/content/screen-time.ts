import type { TopicContent } from './types';

const screenTime: TopicContent = {
  tldr:
    'Screen time is not one thing — a video call with a grandparent, a puzzle app, and an autoplaying short-form video feed affect children\'s brains very differently. Rather than counting minutes, focus on content quality, co-engagement, and what screens displace (sleep, outdoor play, face-to-face conversation). The AAP recommends zero screen time under 18 months (except video chatting), limited high-quality content ages 2-5, and consistent boundaries for school-age children. Parents who watch with their children, talk about what they see, and model healthy phone habits themselves raise children who use screens as tools rather than becoming tools of screens.',
  scenario:
    'You\'ve just finished a long workday and your eight-year-old is on the couch with the iPad. Again. When you ask what she\'s watching, she says "just stuff" — and you realise you don\'t actually know. She\'s been there ninety minutes. When you say it\'s time to turn it off, she melts down: crying, negotiating, promising "just five more minutes." You\'re exhausted, and part of you thinks it\'s easier to just let her keep watching so you can have ten minutes of peace. But you\'ve also noticed she\'s been moodier, sleeping later, and hasn\'t picked up a book in weeks. You\'re not sure if you should be worried, or if this is just how childhood works now.',
  ageRange: '2-17',
  strategies: [
    {
      title: 'Co-View and Narrate — Don\'t Just Hand Over the Device',
      what:
        'When your child is using a screen, sit with them for at least part of the time and talk about what they\'re seeing. Ask questions, point out things you find interesting, and connect the content to real life. This transforms passive consumption into an active, language-rich experience that builds comprehension and critical thinking.',
      script:
        '"That character looks frustrated — why do you think she\'s upset? What would you do if that happened to you? ... Oh, I didn\'t know that! I learned something new from your show."',
      why:
        'The Art of Screen Time (Kamenetz) reviews research showing that co-viewing dramatically increases the educational value of screen content. Children learn more from a mediocre show watched with an engaged adult than from an excellent show watched alone. The AAP guidelines specifically recommend co-viewing as the single most important factor in making screen time beneficial for young children.',
    },
    {
      title: 'Create a Family Media Plan — Together',
      what:
        'Rather than imposing rules unilaterally, sit down as a family and agree on screen-free zones (bedrooms, dinner table) and screen-free times (first hour after waking, one hour before bed, during homework). Write it down, post it visibly, and have everyone — including adults — sign it. Children who help create rules are far more likely to follow them.',
      script:
        '"Let\'s figure out our family screen rules together. I\'ll go first: I\'m going to keep my phone in the kitchen during dinner so I can actually pay attention to you. What rule do you think we should have?"',
      why:
        'The AAP explicitly recommends creating a family media plan and involving children in the process. Kamenetz notes that when children participate in rule-making, compliance goes up significantly because they understand the reasoning and feel ownership. A plan also removes the need to negotiate every single time — the rule is already agreed.',
    },
    {
      title: 'Protect the Hour Before Bed',
      what:
        'All screens go off at least one hour before the target bedtime — no exceptions. The blue light from screens suppresses melatonin production, delaying sleep onset and reducing sleep quality. Replace screen time with a wind-down routine: reading, a bath, quiet conversation, or listening to an audiobook.',
      script:
        '"Screens go off at 7:30. That gives us time to read together before lights out at 8:30. You can pick the book — or we can listen to an audiobook if you\'d rather draw while we listen."',
      why:
        'Reset Your Child\'s Brain (Dunckley) documents the impact of screen light on the circadian rhythm and presents clinical evidence that removing screens before bed improves sleep, mood, and attention within weeks. The AAP recommends screen-free bedrooms specifically because devices in bedrooms are associated with shorter sleep duration and poorer sleep quality in children of all ages.',
    },
    {
      title: 'Curate Content, Don\'t Just Limit Time',
      what:
        'Not all screen time is equal. Prioritise content that is interactive (requires engagement rather than passive watching), age-appropriate, and has a clear purpose (learning, creating, connecting). Avoid apps designed with manipulative mechanics — autoplay, variable reward schedules, and in-app purchases — that are engineered to be addictive.',
      script:
        '"Let\'s look at what\'s on your iPad together. This drawing app where you\'re making art? That\'s a great use of screen time. These videos that just play one after another automatically — let\'s turn off autoplay so you\'re choosing what to watch instead of the app choosing for you."',
      why:
        'Glow Kids (Kardaras) argues that the design of many children\'s apps mirrors the variable-ratio reinforcement schedules used in slot machines, triggering dopamine loops that mimic behavioural addiction. Dunckley distinguishes between "interactive" screen use (which engages the brain) and "passive" use (which can dysregulate the nervous system). The AAP guidelines emphasise content quality over total minutes.',
    },
    {
      title: 'Model the Behaviour You Want to See',
      what:
        'Children are extraordinarily sensitive to hypocrisy. If you\'re checking your phone during dinner, scrolling at stoplights, or bringing it to bed, your children will internalise that this is normal adult behaviour. Audit your own screen use first, and narrate your choices out loud.',
      script:
        '"I\'m going to put my phone on the charger in the other room while we play this game. I want to give you my full attention. ... Oh, I heard it buzz, but my focus is on you right now. It can wait."',
      why:
        'Kamenetz reviews studies showing that parental phone use is the single strongest predictor of children\'s screen habits. Children whose parents are "phubbing" (phone snubbing) them show increased behavioural problems and reduced emotional resilience. The AAP family media plan includes adult guidelines specifically because children model what they see, not what they\'re told.',
    },
    {
      title: 'Use a Visual Transition Buffer',
      what:
        'Meltdowns at screen-off time usually happen because the transition is abrupt and the child\'s brain is in a dopamine loop. Build in a visual countdown and a bridge activity — something appealing they\'ll do immediately after the screen goes off. Give a 5-minute warning, then a 1-minute warning, then turn it off and immediately engage in the bridge activity.',
      script:
        '"Five more minutes on the iPad, then we\'re building the Lego spaceship. [Set a visual timer.] One more minute! Okay, screens off — let\'s go find the instruction book. I\'ll get the pieces, you find the book."',
      why:
        'Dunckley explains that screen time elevates dopamine and suppresses the prefrontal cortex\'s ability to self-regulate transitions. A visual timer makes the abstract concept of time concrete, and a bridge activity gives the brain something to activate toward rather than experiencing the screen-off moment as pure loss. Kardaras similarly recommends structured transitions to prevent the "extinction burst" — the intense reaction when a stimulating activity is abruptly removed.',
    },
  ],
  avoid: [
    {
      mistake: 'Using screen time as a reward or punishment',
      whyBackfires:
        'When you use screen time as a reward for good behaviour or remove it as punishment, you signal that screens are highly valuable — the ultimate prize. This increases the child\'s desire for screen time and makes it the centre of their motivational system. It also turns every negotiation into a high-stakes power struggle.',
      instead:
        'Treat screens like any other daily activity. Say: "Screen time happens after lunch and before the park. It\'s not something you earn or lose — it\'s just part of our day." If behaviour is a problem, address the behaviour directly rather than using screen time as leverage.',
    },
    {
      mistake: 'Counting all screen minutes equally',
      whyBackfires:
        'A FaceTime call with a grandparent, a coding game, a nature documentary, and an hour of autoplay short-form videos are all "screen time" — but they have vastly different effects on a child\'s brain. Treating them as equivalent wastes an opportunity to teach discernment and pushes you toward a rigid minutes-based system that is hard to maintain and teaches nothing about media literacy.',
      instead:
        'Categorise screen use: creating (drawing apps, coding, video making), connecting (video calls, messaging family), consuming (watching shows, reading), and grazing (scrolling, autoplay). Prioritise creating and connecting, allow moderate consuming, and minimise grazing. Talk to your child about these categories so they learn to self-assess.',
    },
    {
      mistake: 'Allowing screens in the bedroom overnight',
      whyBackfires:
        'Devices in bedrooms are the single most reliable predictor of sleep problems in children. Children will use them — at night, when you\'re asleep, when willpower is at its lowest. The blue light suppresses melatonin, the content keeps the brain aroused, and the notifications (even on silent) create anticipation. Even "just reading on a tablet" is problematic compared to a physical book.',
      instead:
        'Establish a family charging station outside all bedrooms — including yours. Say: "All devices charge in the kitchen overnight. This is a family rule, not just a kid rule. Grown-ups need better sleep too." Provide alternatives for bedtime: physical books, a journal, an audiobook on a non-screen device.',
    },
    {
      mistake: 'Giving in to the "everyone else has a phone/tablet" argument out of guilt',
      whyBackfires:
        'Succumbing to peer-pressure-based requests sets the precedent that persistence and comparison are effective negotiation strategies. It also often results in giving a child a device before they have the maturity to manage it, leading to conflicts and problems you\'re then forced to manage reactively.',
      instead:
        'Acknowledge the social pressure without dismissing it: "I hear that a lot of kids in your class have phones. That must feel frustrating. We\'ll give you a phone when we believe you\'re ready, not when everyone else has one. Let\'s talk about what \'ready\' looks like." Define specific criteria: age, responsibility behaviours, and a plan for usage.',
    },
  ],
  ageGuidance: [
    {
      age: 'Ages 2-5',
      advice:
        'The AAP recommends limiting screen time to one hour per day of high-quality, age-appropriate content, always co-viewed with an adult. Avoid solo screen use entirely at this age — a two-year-old watching alone gets almost no educational benefit and is more likely to show language delays. Choose content that is slow-paced (Mr. Rogers-style, not rapid-cut), interactive, and free of advertising. Kamenetz notes that children under five cannot distinguish between ads and content, making ad-supported platforms particularly problematic. Prioritise video calls with family — these are the one screen activity the AAP explicitly endorses even for children under two.',
    },
    {
      age: 'Ages 6-9',
      advice:
        'Introduce the concept of screen categories (creating, connecting, consuming, grazing) and begin involving your child in planning their own screen use. At this age, children can understand a simple media plan and enjoy having agency over their schedule. Introduce the first device — a shared family iPad or a basic kids\' tablet — with clear rules about where and when it can be used (common areas only, not bedrooms). Start teaching media literacy: "This ad is trying to make us want that toy. What do you think they\'re doing to make it look fun?" Markham and Kamenetz both recommend delaying a personal smartphone until at least age 10-12.',
    },
    {
      age: 'Ages 10-13',
      advice:
        'This is the highest-risk window for screen issues. Children are getting personal devices, social pressure peaks, and the prefrontal cortex is still years from mature impulse control. If you give a smartphone, use a graduated approach: start with a basic phone or smartwatch (calls and texts only), then a phone with limited apps, then more freedom as they demonstrate responsibility. Use parental controls as scaffolding, not surveillance — tell your child what you\'re monitoring and why. Discuss online safety explicitly: cyberbullying, inappropriate content, and the permanence of digital footprints. Dunckley recommends a 3-4 week "screen fast" if you notice significant mood, sleep, or attention changes — a reset period with only essential screen use to recalibrate the nervous system.',
    },
    {
      age: 'Ages 14-17',
      advice:
        'Shift from external controls to coaching. Teenagers need to develop self-regulation before they leave home, and over-monitoring at this age can backfire by breeding secrecy rather than good habits. Have ongoing conversations about algorithms, attention economics, and how platforms are designed to keep them scrolling. Kamenetz recommends teaching teens to notice their own usage patterns: "Do you feel better or worse after an hour on that app?" Respect their privacy in digital communication with friends, but maintain clear expectations about safety (location sharing, not meeting strangers, reporting harassment). The AAP recommends continuing to enforce screen-free bedrooms and screen-free dinner, even with teens — these boundaries protect sleep and family connection.',
    },
  ],
  whenToSeekHelp: [
    'Your child becomes extremely distressed — panic attacks, aggression, or threats of self-harm — when screen time is limited or removed. This level of reaction may indicate a screen-use pattern that has crossed into problematic territory and may require professional support to address safely.',
    'Screen use is significantly displacing sleep, and your child is sleeping less than the recommended amount for their age (8-10 hours for teens, 9-12 for school-age children) on a regular basis, with visible effects on mood, concentration, or academic performance.',
    'You observe a sharp decline in your child\'s mood, social withdrawal from in-person friendships, or loss of interest in previously enjoyed activities that coincides with increased screen use. Dunckley identifies this cluster as a possible sign of Electronic Screen Syndrome, which may require a structured intervention.',
    'Your child is accessing content that is causing distress — violent material, self-harm content, or content promoting eating disorders — or is being targeted by cyberbullying. These situations may require the involvement of a mental health professional, school counsellor, or in serious cases, law enforcement.',
  ],
  faqs: [
    {
      q: 'How much screen time is too much?',
      a:
        'There is no magic number that applies to all children. The AAP abandoned rigid time limits for school-age children in favour of a quality-based approach. That said, research reviewed by Kamenetz suggests that problems begin to appear when screen time exceeds about two hours per day of recreational use (excluding schoolwork) for children aged 6-12, and when it begins to displace sleep, physical activity, or face-to-face interaction. The more important question is not "how much?" but "what is it replacing?" If screen time is crowding out sleep, outdoor play, reading, or family conversation, it\'s too much — regardless of the number.',
    },
    {
      q: 'Are video games bad for my child?',
      a:
        'Not inherently. Research reviewed by Kamenetz shows that moderate video game play (under about one hour per day) is associated with improved visual-spatial skills, problem-solving ability, and even social connection when games are played with others. The concerns arise with excessive play (over three hours daily), games with manipulative monetisation (loot boxes, pay-to-win), and games that become a child\'s only social outlet. Look at what your child is playing, play it with them sometimes, and watch for signs that gaming is displacing sleep, physical activity, or in-person relationships.',
    },
    {
      q: 'Should I let my toddler use an educational app?',
      a:
        'The AAP recommends against any screen time for children under 18 months (except video chatting). For children 18-24 months, only high-quality educational content co-viewed with an adult. For ages 2-5, limit to one hour daily of high-quality content. Kardaras is more cautious, arguing that the "educational app" label is largely unregulated and that many apps marketed as educational offer little developmental value. If you choose to introduce an app to a toddler, pick one that is slow-paced, interactive (requiring the child to make choices, not just watch), and ad-free. Use it with your child, not as a solo babysitter.',
    },
    {
      q: 'What do I do if my child is addicted to their phone?',
      a:
        'The word "addiction" is used loosely, but if your child shows signs of compulsive use — inability to stop, distress when separated, lying about usage, withdrawal from other activities — Dunckley recommends a structured "electronic fast" of 3-4 weeks with only essential screen use (schoolwork). This allows the dopamine system to recalibrate. During the fast, fill the time with high-connection, high-physical-activity alternatives. After the fast, reintroduce screens gradually with clear boundaries. If the compulsive behaviour returns quickly or if the initial removal triggers severe distress, consult a child psychologist with experience in problematic technology use.',
    },
    {
      q: 'Is watching TV with the family better than solo tablet use?',
      a:
        'Generally yes. Family TV watching tends to be more moderate because it\'s a shared, time-limited activity with natural stopping points (the show ends). Solo tablet use is more likely to be open-ended, autoplay-driven, and resistant to transition. TV watching also invites conversation and shared experience, which builds connection. However, the content matters: a family watching a nature documentary together is getting more value than a family watching four hours of reality TV. Kamenetz describes family movie night as one of the healthiest screen traditions because it combines screen time with bonding and has a clear beginning and end.',
    },
    {
      q: 'At what age should my child get a smartphone?',
      a:
        'The research consensus, reviewed by both Kamenetz and the AAP, points to delaying personal smartphone ownership as long as possible — ideally until age 13 or later. Before that, if your child needs to communicate with you, a basic phone (calls and texts only) or a smartwatch with calling capability meets the safety need without introducing the risks of internet access, social media, and app-based dopamine loops. When you do introduce a smartphone, do it gradually: start with a limited app set, clear rules about where and when it can be used, and regular check-ins about what they\'re encountering.',
    },
  ],
  sources: [
    {
      title: 'American Academy of Pediatrics Screen Time Guidelines',
      author: 'AAP Council on Communications and Media',
      details: '2016 policy statement "Media and Young Minds" (ages 0-5) and 2016 statement "Media Use in School-Aged Children and Adolescents" (ages 5-18). Recommends the Family Media Use Plan tool at HealthyChildren.org.',
    },
    {
      title: 'The Art of Screen Time: How Your Family Can Balance Digital Media and Real Life',
      author: 'Anya Kamenetz',
      details: 'Chapters 1-5: reviews the research on screen time effects, co-viewing benefits, and the "enjoy screens, not too much, mostly with others" framework. Includes age-by-age guidance.',
    },
    {
      title: 'Glow Kids: How Screen Addiction Is Hijacking Our Kids — and How to Break the Trance',
      author: 'Dr. Nicholas Kardaras',
      details: 'Chapters 3-6: examines the neuroscience of screen-based dopamine loops, the manipulative design of children\'s apps, and clinical parallels between screen compulsions and substance addiction.',
    },
    {
      title: 'Reset Your Child\'s Brain: A Four-Week Plan to End Meltdowns, Raise Grades, and Boost Social Skills by Reversing the Effects of Electronic Screen-Time',
      author: 'Dr. Victoria L. Dunckley',
      details: 'Chapters 1-4 and the Fast Protocol: presents the concept of Electronic Screen Syndrome, the impact of screens on sleep and mood, and the structured electronic fast intervention.',
    },
    {
      title: 'Peaceful Parent, Happy Kids: How to Stop Yelling and Start Connecting',
      author: 'Dr. Laura Markham',
      details: 'Referenced for the role of parental connection and self-regulation in managing all behaviour challenges, including screen-time transitions and conflicts.',
    },
  ],
};

export default screenTime;
