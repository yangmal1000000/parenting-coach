import type { TopicContent } from './types';

const siblingConflict: TopicContent = {
  tldr:
    'Sibling fighting is normal, not a sign of bad parenting. Kids fight to test social skills, compete for attention, and practice negotiation. The most effective approach is to avoid taking sides, resist solving the conflict for them, and instead coach siblings through the problem out loud. Parents who listen to both children without assigning blame, name each child\'s feelings, and then step back to let siblings generate their own solutions see fewer and shorter fights over time. This builds empathy, conflict-resolution skills, and stronger sibling bonds that last into adulthood.',
  scenario:
    'It\'s 4:47 PM. You\'re trying to get dinner started and the two of them are at it again. Seven-year-old Maya is shrieking that her little brother took the iPad she was using, and five-year-old Leo is clinging to it and screaming that she had it "forever." You\'re tired, you\'re hungry, and honestly you just want quiet. The temptation to snatch the iPad, yell at whoever seems most at fault, and send them to separate rooms is overwhelming. Instead, you take a breath at the kitchen doorway and decide to try something different — you\'re going to coach them through this, even though it takes longer.',
  ageRange: '3-16',
  strategies: [
    {
      title: 'Acknowledge Both Sides Without Judging',
      what:
        'Before anyone can solve the problem, each child needs to feel heard. Resist the urge to identify a victim and a perpetrator. Describe what you see and name each child\'s emotion out loud. This mirrors the feelings so each child\'s brain can move from a reactive "fight" state toward a calmer, problem-solving state.',
      script:
        '"Maya, you\'re really frustrated because you were using the iPad and Leo took it. Leo, you\'re upset because you felt like it was your turn and Maya had it for a long time. Am I getting that right?"',
      why:
        'No-Drama Discipline (Siegel & Bryson) calls this "Name it to Tame it." When a child hears their feeling spoken aloud, their amygdala — the brain\'s alarm system — calms down, making it possible to access the prefrontal cortex where reasoning happens. Siblings Without Rivalry (Faber) stresses that accepting feelings is not the same as accepting behaviour; you can validate the emotion while still setting limits on hitting or grabbing.',
    },
    {
      title: 'Step Back and Let Them Problem-Solve',
      what:
        'Once both children feel heard, resist the urge to hand down a verdict. Instead, hand the problem back to them. Children as young as four can generate solutions when an adult holds the space. This shifts the dynamic from "parent vs. child" to "siblings vs. problem" and teaches a skill they will use for life.',
      script:
        '"This is a tough one. You both want the iPad right now, and there\'s only one. I\'m not going to decide for you, but I\'ll stay here while you two figure out a plan that feels fair. What ideas do you have?"',
      why:
        'Siblings Without Rivalry (Faber) identifies the parent-as-judge dynamic as a key driver of sibling rivalry. Every time you pick a winner, the "loser" resents both you and the sibling. Peaceful Parent Happy Siblings (Markham) adds that when children solve their own disputes, they build confidence in their ability to handle interpersonal friction — a skill they carry into friendships, school, and eventually the workplace.',
    },
    {
      title: 'Use Special One-on-One Time to Fill Each Child\'s Cup',
      what:
        'Much sibling conflict is actually a competition for your attention. Dedicate 10-15 minutes of uninterrupted, child-directed one-on-one time with each child daily. No phones, no sibling, no agenda. This deposits into what Markham calls each child\'s "connection account," reducing the jealousy-driven provocations that spark fights.',
      script:
        '"For the next fifteen minutes, it\'s just you and me, Leo. You get to decide what we do. I\'m not going to check my phone or think about anything else. This is your time."',
      why:
        'Peaceful Parent Happy Siblings (Markham) presents evidence that children who feel securely connected to a parent are less threatened by siblings and therefore less aggressive toward them. Siblings Without Rivalry (Faber) similarly notes that a child who feels uniquely valued does not need to diminish a sibling to prove their worth.',
    },
    {
      title: 'Describe the Conflict in Sportscaster Mode',
      what:
        'When you walk into a fight in progress, narrate what you see without assigning blame or giving instructions. This neutral narration helps each child feel that their side is visible, lowers the emotional temperature, and buys you a few seconds to regulate your own response before acting.',
      script:
        '"I see Maya holding the iPad and Leo pulling on her arm. Maya looks angry. Leo looks like he\'s about to cry. Both of you want this device right now."',
      why:
        'How to Talk So Kids Will Listen (Faber & Mazlish) recommends describing the problem rather than attacking the child. Saying "You always grab things from your sister!" puts the child on the defensive. Describing the situation ("I see two kids who both want one iPad") invites cooperation instead of defensiveness.',
    },
    {
      title: 'Create a Family Problem-Solving Meeting',
      what:
        'For recurring conflicts — same fight, different day — hold a short family meeting at a calm time. Name the recurring problem, brainstorm solutions together, write them down, and pick one to try for a week. This gives children agency and turns a battleground into a collaboration zone.',
      script:
        '"We\'ve been fighting about the iPad every single day this week. That\'s a real problem. Let\'s sit down after dinner tonight and brainstorm some solutions. I\'ll write them all down, even the silly ones, and we\'ll pick one to try for a week."',
      why:
        'Siblings Without Rivalry (Faber) recommends collaborative problem-solving as the most durable approach to chronic disputes. The Explosive Child (Greene) formalises this as Plan B: identify the unsolved problem, gather the child\'s concerns, and collaboratively create a solution that addresses both the child\'s needs and the adult\'s expectations.',
    },
    {
      title: 'Avoid Comparing — Even Positive Ones',
      what:
        'Comparisons between siblings, even ones that sound complimentary, create a hierarchy that fuels resentment. Instead of comparing, describe what you see in each child individually. "Maya got dressed so quickly" is fine; "Why can\'t you get dressed as fast as Maya?" is not.',
      script:
        'Instead of "Maya is so good at sharing," try: "Maya, I noticed you offered Leo half your cookie. That was generous." Instead of "Why can\'t you be more patient like your sister?" try: "Leo, you\'re working really hard on waiting your turn. That\'s tough."',
      why:
        'Siblings Without Rivalry (Faber) devotes an entire chapter to the damage caused by comparison. Even positive comparisons ("You\'re my responsible one") lock children into roles and create pressure, while negative comparisons breed resentment. How to Talk So Kids Will Listen (Faber & Mazlish) recommends praising the behaviour, not the child relative to a sibling.',
    },
  ],
  avoid: [
    {
      mistake: 'Demanding "Who started it?"',
      whyBackfires:
        'Asking "who started it?" turns every conflict into a criminal investigation where each child has a strong incentive to frame the other as the instigator. It teaches them to build a case rather than solve a problem, and it forces you into the role of detective and judge — a role that guarantees one child will feel betrayed.',
      instead:
        'Say: "I\'m not interested in who started it. I\'m interested in how you\'re going to solve it." Then coach them through naming feelings and brainstorming solutions.',
    },
    {
      mistake: 'Forcing an immediate apology',
      whyBackfires:
        'A forced apology teaches the child that words can be used as a get-out-of-jail-free card. The apologiser learns to say "sorry" to avoid consequences, and the recipient learns that a verbal ritual is a substitute for genuine repair. It breeds resentment, not empathy.',
      instead:
        'Focus on repair rather than ritual. Say: "Your brother is hurt. What can you do to help him feel better?" If the child isn\'t ready, say: "When you\'re ready to make things right, I\'ll help you figure out how." Real repair may involve bringing a tissue, offering a toy, or simply sitting nearby.',
    },
    {
      mistake: 'Treating both kids identically to be "fair"',
      whyBackfires:
        'Fair does not mean equal. Children have different needs at different ages, and treating a toddler and a ten-year-old identically shortchanges both. Children know this intuitively and the "fairness" argument usually masks a deeper need for attention or recognition.',
      instead:
        'Address needs, not equality. Say: "Leo needs help tying his shoes because he\'s five. When you were five, I helped you tie yours too. Your needs are different because you\'re different ages, and that\'s okay." Siblings Without Rivalry (Faber) advises: give according to need, not according to a formula.',
    },
    {
      mistake: 'Punishing both children for the fight',
      whyBackfires:
        'When you punish both kids ("You\'re both in your rooms!"), the child who was genuinely wronged feels that justice is arbitrary, and the child who started it learns that they can drag their sibling down with them. It also eliminates any incentive for either child to de-escalate, since the outcome is the same regardless.',
      instead:
        'Separate for safety if needed, but then coach each child individually. Focus on what each one can do differently next time. The goal is skill-building, not collective punishment.',
    },
  ],
  ageGuidance: [
    {
      age: 'Ages 3-5',
      advice:
        'At this age, children lack the verbal skills and impulse control to resolve disputes independently. Your primary job is to physically ensure safety (block hitting, redirect grabbing) while narrating feelings in simple language: "You\'re mad because he took your truck." Don\'t expect them to brainstorm solutions yet — offer two choices: "Should we set a timer for five minutes each, or find a different toy to play with?" Keep one-on-one time short and frequent (5-10 minutes, twice a day). According to Siegel & Bryson, the prefrontal cortex is still very much under construction at this age, so external regulation (you) is the primary tool.',
    },
    {
      age: 'Ages 6-9',
      advice:
        'Children this age can start generating solutions with coaching. Introduce the "peace table" — a spot where siblings sit together to talk through a conflict with you as a facilitator, not a judge. Each child gets to state their side uninterrupted. Then you ask: "What could you do differently next time?" Begin family meetings for recurring issues. Markham recommends 10-15 minutes of one-on-one time daily per child. At this age, children can understand the concept of "different needs" vs "equal treatment," so start having explicit conversations about fairness.',
    },
    {
      age: 'Ages 10-13',
      advice:
        'Older children can handle more autonomy in conflict resolution but still need adult scaffolding for big emotions. Teach them to use "I statements": "I felt angry when you went in my room without asking." Respect their growing need for privacy and personal space — a separate bedroom or designated personal shelf can significantly reduce friction. Role-play scenarios in advance of situations likely to trigger conflict (sharing a screen on a road trip, for example). Faber notes that pre-adolescents are especially sensitive to perceived unfairness, so be transparent about your reasoning when you make decisions affecting both kids.',
    },
    {
      age: 'Ages 14-16',
      advice:
        'Teenagers need autonomy, respect, and a parent who listens more than they talk. Resist intervening in every dispute — let them practise navigating conflict, but be available as a sounding board. If a conflict crosses into harassment, bullying, or physical intimidation, step in firmly: "In this family, we don\'t treat each other that way, no matter how angry we are." Acknowledge that the sibling relationship is shifting as teens spend more time with peers. Markham suggests that maintaining one-on-one time matters enormously at this age, even if it\'s just a weekly coffee run. Teens who feel securely connected to a parent are more likely to treat siblings with basic respect.',
    },
  ],
  whenToSeekHelp: [
    'One child consistently targets another with physical aggression (hitting, biting, scratching) that leaves marks or causes injury, and the pattern persists despite consistent coaching over several weeks.',
    'A child expresses fear of their sibling — they avoid being alone with them, lock their door, or show signs of anxiety (sleep disruption, stomach aches, regression) related to sibling interactions.',
    'The conflict involves verbal cruelty that goes beyond typical arguing — name-calling targeting identity or appearance, threats, or manipulation that resembles emotional abuse rather than normal bickering.',
    'You feel unable to maintain your own emotional regulation during sibling conflicts — you\'re yelling, threatening, or using physical force to separate them, and the cycle is not improving despite your efforts.',
  ],
  faqs: [
    {
      q: 'Should I let my kids "work it out" on their own?',
      a:
        'It depends on their ages and the intensity of the conflict. Siegel & Bryson suggest that children under about six generally lack the neurological development to self-regulate during a conflict, so they need active adult coaching. For older children, stepping back can be appropriate — but only if the interaction is not physically or emotionally harmful. "Working it out" does not mean "figure out who\'s stronger." If one child is consistently dominating, or if the conflict escalates to hitting or cruel words, you need to step in. The goal is to gradually hand over conflict-resolution skills so they can handle more on their own as they grow.',
    },
    {
      q: 'Is it normal for siblings to fight every day?',
      a:
        'Yes. Multiple studies cited by Faber in Siblings Without Rivalry found that young siblings conflict an average of 6-10 times per hour during play. This frequency decreases with age but does not disappear. What matters is not whether they fight, but how fights are resolved and whether the overall relationship includes warmth and play alongside the conflict. If the ratio of hostile interactions to positive ones is heavily skewed toward hostility, that\'s worth addressing.',
    },
    {
      q: 'What if one child is always the "aggressor" and the other is always the "victim"?',
      a:
        'This dynamic is a red flag that the parent-child relationship needs attention, not just the sibling relationship. Markham explains that the "aggressor" is often a child who feels disconnected or insufficiently valued, and acts out to get attention — even negative attention. The "victim" may have learned that complaining to a parent is an effective way to receive care. Focus on filling the aggressor\'s connection cup with one-on-one time, and resist the urge to always see the victim\'s side first. Also consider whether the "victim" may be subtly provoking — Faber notes this is common and easy to miss.',
    },
    {
      q: 'Should siblings share a bedroom?',
      a:
        'There is no one-size-fits-all answer. Shared bedrooms can foster closeness but can also be a source of friction, especially for children of different ages or temperaments. If sharing is necessary, create personal space within the shared room — a shelf, a drawer, a designated wall area for their things. Respect each child\'s need for privacy as they enter pre-adolescence (around age 9-10). If conflicts around the bedroom are chronic and unresolvable, explore alternatives like alternating nights in different rooms.',
    },
    {
      q: 'How do I handle it when siblings gang up on one child?',
      a:
        'This is painful to watch and important to address. First, protect the targeted child — separate the group and check in. Second, resist the urge to shame the ganging-up children, which can deepen their alliance against the "favoured" sibling. Instead, address the group dynamic privately: "I noticed that when Leo came in, both of you started making fun of him. I\'m wondering what was going on for you." Faber advises giving each child in the alliance individual attention, as coalitions often form when children feel they need to compete for limited parental resources.',
    },
    {
      q: 'My kids fight constantly but are fiercely protective of each other. Is this normal?',
      a:
        'Yes — this is one of the most common and healthy patterns of sibling relationships. Markham describes this as the "love-hate" dynamic that characterises many close sibling bonds. The fighting and the loyalty are two sides of the same coin: they fight because they feel safe enough with each other to express raw emotion, and they protect each other because the bond is strong. Focus on the quality of repair after fights and the overall warmth of the relationship rather than the frequency of conflict.',
    },
  ],
  sources: [
    {
      title: 'Siblings Without Rivalry: How to Help Your Children Live Together So You Can Live Too',
      author: 'Adele Faber & Elaine Mazlish',
      details: 'Chapters 1-6: focusing on the perils of comparison, the problem with roles, and the power of collaborative problem-solving between siblings.',
    },
    {
      title: 'Peaceful Parent, Happy Siblings: How to Stop the Fighting and Raise Friends for Life',
      author: 'Dr. Laura Markham',
      details: 'Chapters on connection coaching, emotion coaching for siblings, and the role of parental self-regulation in reducing sibling conflict.',
    },
    {
      title: 'No-Drama Discipline: The Whole-Brain Way to Calm the Chaos and Nurture Your Child\'s Developing Mind',
      author: 'Dr. Daniel J. Siegel & Dr. Tina Payne Bryson',
      details: 'Chapters 2-4: "Name it to Tame it," engaging the upstairs brain, and redirecting behaviour without triggering defensiveness.',
    },
    {
      title: 'How to Talk So Kids Will Listen & Listen So Kids Will Talk',
      author: 'Adele Faber & Elaine Mazlish',
      details: 'Chapters 1-3: helping children deal with their feelings, engaging cooperation, and alternatives to punishment — all directly applicable to sibling mediation.',
    },
    {
      title: 'The Explosive Child: A New Approach for Understanding and Parenting Easily Frustrated, Chronically Inflexible Children',
      author: 'Dr. Ross W. Greene',
      details: 'Chapter on Plan B collaborative problem-solving, adapted here for recurring sibling disputes.',
    },
  ],
};

export default siblingConflict;
