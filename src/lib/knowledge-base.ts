// Knowledge base chunks — evidence-based parenting content
// These will be embedded and stored in a simple in-memory vector store for Phase 0
// In production, these move to Pinecone/pgvector

export interface KnowledgeChunk {
  id: string;
  source: string;
  sourceDetails: string;
  category: string;
  text: string;
}

export const KNOWLEDGE_BASE: KnowledgeChunk[] = [
  // === TANTRUMS / MELTDOWNS ===
  {
    id: "wb-1",
    source: "The Whole-Brain Child",
    sourceDetails: "Siegel & Bryson, Ch. 3 — Connect and Redirect",
    category: "tantrums",
    text: "When a child is having a tantrum, their right brain (emotional) has taken over and their left brain (logical) is offline. Trying to reason with them mid-tantrum won't work. Instead, first CONNECT with their right brain: get down to their eye level, use a soothing tone, and name their feeling ('You're really frustrated right now'). This is called 'name it to tame it' — naming an emotion activates the prefrontal cortex and helps the child begin to regulate. Only AFTER the emotional storm has passed should you redirect with logic or consequences.",
  },
  {
    id: "wb-2",
    source: "The Whole-Brain Child",
    sourceDetails: "Siegel & Bryson, Ch. 1 — Integration of Left and Right Brain",
    category: "tantrums",
    text: "There are two types of tantrums: upper-brain (the child is in control, making demands, negotiating) and lower-brain (the child is genuinely overwhelmed emotionally and has lost control). For upper-brain tantrums, hold firm boundaries and don't negotiate. For lower-brain tantrums, the child needs comfort and co-regulation first — they literally cannot control themselves. Distinguishing between the two is critical. A lower-brain tantrum requires nurturing, not discipline.",
  },
  {
    id: "ndd-1",
    source: "No-Drama Discipline",
    sourceDetails: "Siegel & Bryson — Connect and Redirect",
    category: "tantrums",
    text: "The 'connect and redirect' approach: First, connect emotionally by validating the child's feeling. Get physically close, use a gentle voice, and show you understand. Say something like 'I can see you're really upset about this.' Do NOT try to teach, correct, or problem-solve while the child is dysregulated. Once the child has calmed down (which may take several minutes), then redirect by discussing what happened and what could be done differently next time. The order matters: always connect before you correct.",
  },
  {
    id: "123-1",
    source: "1-2-3 Magic",
    sourceDetails: "Thomas Phelan — Counting Method",
    category: "tantrums",
    text: "For stop behaviors (tantrums, whining, arguing, hitting), use the counting method: Say 'That's one' in a calm, neutral voice. Wait 5 seconds. If behavior continues, 'That's two.' If it continues to three, the consequence is applied (e.g., time-out, loss of privilege). Key principles: no emotion, no explanation, no discussion during counting. The lack of emotional reaction from the parent is what makes it effective. Counting should be matter-of-fact, not angry.",
  },
  {
    id: "htf-1",
    source: "How to Talk So Kids Will Listen",
    sourceDetails: "Faber & Mazlish — Engaging Cooperation",
    category: "tantrums",
    text: "Instead of blaming, accusing, or threatening when a child is misbehaving, try: 1) Describe the problem ('I see toys on the floor') rather than attacking ('You never clean up'). 2) Give information ('Toys can break if stepped on') rather than lecturing. 3) Say it with a word ('Toys') rather than a long speech. 4) Talk about your feelings ('I feel frustrated when...') rather than attacking character. 5) Write a note. These approaches engage cooperation without triggering defensiveness.",
  },

  // === SLEEP ===
  {
    id: "sleep-1",
    source: "AAP Healthy Sleep Habits",
    sourceDetails: "American Academy of Pediatrics — Sleep Guidelines",
    category: "sleep",
    text: "Consistent bedtime routines are the single most effective intervention for childhood sleep problems. A routine should: be the same every night, last 20-30 minutes, include calming activities (bath, book, song), and end in the room where the child sleeps. Screen time should end at least 1 hour before bed. The routine acts as a cue to the child's brain that sleep is coming, making the transition easier.",
  },
  {
    id: "sleep-2",
    source: "Solve Your Child's Sleep Problems",
    sourceDetails: "Richard Ferber — Sleep Training",
    category: "sleep",
    text: "Graduated extinction (checking method): Put the child to bed awake. If they cry, wait a short interval (3-5 minutes) before checking. Check briefly (1-2 minutes) to reassure without picking up. Gradually increase the interval between checks (5, 10, 15 minutes). This teaches the child to self-soothe while providing reassurance that the parent hasn't abandoned them. Consistency is critical — it typically takes 3-7 nights to see improvement.",
  },
  {
    id: "sleep-3",
    source: "The No-Cry Sleep Solution",
    sourceDetails: "Elizabeth Pantley — Gentle Sleep Training",
    category: "sleep",
    text: "Gentle alternatives to cry-it-out: 1) Gradual withdrawal — sit next to the crib, then move further away each night. 2) The Pantley Pull-Off — remove pacifier/breast just before the child falls asleep so they learn to transition without it. 3) Wake-to-sleep — gently rouse the child slightly before they would naturally wake, to reset their sleep cycle. These methods take longer (2-4 weeks) but avoid leaving the child to cry alone.",
  },

  // === EATING ===
  {
    id: "eat-1",
    source: "Child of Mine",
    sourceDetails: "Ellyn Satter — Division of Responsibility",
    category: "eating",
    text: "The Division of Responsibility in feeding: The PARENT decides what food is served, when it's served, and where. The CHILD decides whether they eat and how much. This approach eliminates power struggles. Never force a child to eat, never use food as reward/punishment, and don't short-order cook (making a special meal if they refuse). Offer one new food alongside familiar foods. It can take 10-15 exposures before a child accepts a new food. Pressuring a child to eat makes them eat less, not more.",
  },
  {
    id: "eat-2",
    source: "Solid Starts Approach",
    sourceDetails: "Solid Starts — Baby-Led Weaning",
    category: "eating",
    text: "For toddlers refusing food: 1) Don't react emotionally to refusal — stay neutral. 2) Keep offering rejected foods — familiarity builds acceptance. 3) Serve small portions (large portions can overwhelm). 4) Let them see you eating the same food (modeling). 5) Never pressure, bribe, or beg them to eat. 6) Trust their appetite — healthy children will not starve themselves. If a child skips a meal, they'll be hungrier at the next one.",
  },

  // === BEHAVIOR / DISCIPLINE ===
  {
    id: "disc-1",
    source: "Triple P (Positive Parenting Program)",
    sourceDetails: "Triple P — Positive Parenting Program",
    category: "behavior",
    text: "Core Triple P principles: 1) Provide a safe, interesting environment. 2) Create a positive learning environment (praise specific behaviors). 3) Use assertive discipline (clear rules, consistent consequences, quiet time). 4) Have realistic expectations (children develop at different rates). 5) Take care of yourself as a parent. Key technique: Describe the behavior you WANT, not what you don't want. 'Please walk' instead of 'Stop running.' Positive attention increases desired behavior; ignoring minor misbehavior reduces it.",
  },
  {
    id: "disc-2",
    source: "Peaceful Parent, Happy Kids",
    sourceDetails: "Dr. Laura Markham — Connection-Based Discipline",
    category: "behavior",
    text: "All misbehavior is a request for connection. When a child acts out, they're expressing an unmet need. Before correcting behavior: 1) Regulate yourself (take a breath, calm your own nervous system). 2) Connect with the child (hug, eye contact, empathy). 3) Coach them to better behavior. Time-ins (sitting WITH the child) are more effective than time-outs (isolating the child) because connection enables learning. Punishment creates fear; coaching creates growth.",
  },
  {
    id: "disc-3",
    source: "The Explosive Child",
    sourceDetails: "Ross Greene — Collaborative Problem Solving",
    category: "behavior",
    text: "For behaviorally challenging children: Children do well if they can, not if they want to. Misbehavior is a sign of lagging skills, not lack of motivation. Use Collaborative Problem Solving: 1) Identify the specific problem situation. 2) Share your concern with the child. 3) Invite the child to propose a solution. 4) Work together to find a mutually satisfactory solution. This teaches problem-solving skills rather than enforcing compliance through power.",
  },

  // === SIBLING CONFLICT ===
  {
    id: "sib-1",
    source: "Siblings Without Rivalry",
    sourceDetails: "Adele Faber & Elaine Mazlish",
    category: "sibling",
    text: "When children fight: 1) Acknowledge both children's feelings ('I see two angry kids'). 2) Show you understand each child's perspective. 3) Describe the problem objectively. 4) Express confidence in their ability to work it out. 5) Leave the room. Avoid: taking sides, determining who started it, comparing children, or solving the problem for them. Teach them to express feelings with words: 'I'm mad because...' instead of hitting.",
  },
  {
    id: "sib-2",
    source: "How to Talk So Kids Will Listen",
    sourceDetails: "Faber & Mazlish — Sibling Conflict",
    category: "sibling",
    text: "Instead of intervening in every sibling fight, teach children to resolve conflicts themselves. When you must intervene: 1) Don't compare ('Why can't you be more like your sister?'). 2) Treat each child as an individual, never as a pair. 3) Avoid roles ('the smart one,' 'the difficult one'). 4) Acknowledge the difficulty of sharing parents. Give each child separate, individual attention whenever possible.",
  },

  // === EMOTIONAL REGULATION ===
  {
    id: "emo-1",
    source: "The Whole-Brain Child",
    sourceDetails: "Siegel & Bryson — Name It to Tame It",
    category: "emotional",
    text: "When a child is experiencing big emotions, help them tell the story of what happened. Narrating the experience integrates the left brain (logic, language) with the right brain (emotion), which helps process and calm the emotional response. Ask: 'What happened?' and listen without correcting. Say back what you hear. This 'name it to tame it' process activates the prefrontal cortex and reduces amygdala reactivity. Even very young children benefit from this — you can narrate for them.",
  },
  {
    id: "emo-2",
    source: "Raising Good Humans",
    sourceDetails: "Hunter Clarke-Fields — Mindful Parenting",
    category: "emotional",
    text: "When your child has big emotions: 1) PAUSE before reacting — take 3 breaths. 2) Get curious, not furious — ask 'What's going on for my child right now?' 3) Name the emotion for them ('It seems like you're feeling really frustrated'). 4) Offer presence, not solutions — just being there calmly is more powerful than fixing. 5) Your calm nervous system co-regulates theirs. A parent who stays calm literally helps the child's brain calm down.",
  },

  // === ROUTINES ===
  {
    id: "rout-1",
    source: "Triple P (Positive Parenting Program)",
    sourceDetails: "Triple P — Routines and Transitions",
    category: "routines",
    text: "For morning/homework/bedtime battles: 1) Establish a predictable routine with visual charts (pictures for young kids, checklists for older ones). 2) Give transition warnings ('In 5 minutes we're starting our bedtime routine'). 3) Use 'when/then' statements ('When your shoes are on, then we can go outside'). 4) Build in choices within the routine ('Do you want to brush teeth first or put on pajamas first?'). 5) Praise specific cooperation ('I noticed you got dressed all by yourself this morning!'). Routines reduce decision fatigue and power struggles.",
  },

  // === SCREEN TIME ===
  {
    id: "screen-1",
    source: "AAP Media Guidelines",
    sourceDetails: "American Academy of Pediatrics — Media Use",
    category: "screen",
    text: "AAP guidelines: No screen time under 18 months (except video calls). 18-24 months: only high-quality programming watched WITH a parent. 2-5 years: max 1 hour/day of high-quality content. 6+ years: consistent limits, screen-free zones (bedrooms, meal times), and co-viewing. When transitioning off screens, give warnings ('5 more minutes'), use a visual timer, and have a planned next activity. Resistance to turning off screens is normal — stay calm but firm. 'I know it's hard to stop watching. It's time for dinner now.'",
  },

  // === SEPARATION ANXIETY ===
  {
    id: "sep-1",
    source: "Zero to Three",
    sourceDetails: "ZERO TO THREE — Separation Anxiety",
    category: "emotional",
    text: "For separation anxiety at drop-off: 1) Create a consistent goodbye ritual (special handshake, hug-kiss-wave). 2) Keep it brief — lingering prolongs distress. 3) Never sneak out — this breaks trust. 4) Validate the feeling ('I know you miss mommy'). 5) Reassure about return ('I'll be back after nap time'). 6) Connect with the caregiver/teacher first so the child sees you trust them. Most children calm within 5-10 minutes of the parent leaving. Practice separations at home (peek-a-boo, short departures) to build confidence.",
  },

  // === EXPANDED KNOWLEDGE BASE ===
  // === EXPANDED KNOWLEDGE BASE ===

// --- TANTRUMS (additional) ---
  {
    id: "wb-3",
    source: "The Whole-Brain Child",
    sourceDetails: "Siegel & Bryson, Ch. 6 — Rewiring Memories",
    category: "tantrums",
    text: "After a tantrum has resolved, help the child process what happened by retelling the story together. 'Remember when you got really upset at the shop because you wanted the toy?' This narrative integration helps the child make sense of their experience and builds emotional resilience for next time. Don't lecture or moralize — just help them tell the story and acknowledge how they felt. This retraces the memory and wires it differently.",
  },
  {
    id: "ndd-2",
    source: "No-Drama Discipline",
    sourceDetails: "Siegel & Bryson — Emotion Coaching",
    category: "tantrums",
    text: "When a child is dysregulated, your first job is to help them regulate, not to teach a lesson. A dysregulated brain cannot learn. Techniques: 1) Get physically close (proximity releases oxytocin). 2) Match their energy level slightly then gradually bring it down (this is called 'co-regulation'). 3) Use a calm, slow voice. 4) Offer a hug or gentle touch if they're receptive. 5) Breathe audibly so they can hear you breathing calmly. Your calm nervous system literally helps regulate theirs through mirror neurons.",
  },
  {
    id: "123-2",
    source: "1-2-3 Magic",
    sourceDetails: "Thomas Phelan — Start Behaviors",
    category: "tantrums",
    text: "For start behaviors (eating, homework, chores, getting ready), use a different approach than counting. Use: 1) Positive reinforcement (specific praise). 2) Timer or stopwatch ('Let's see if you can get dressed before the timer goes off'). 3) Natural consequences (if you don't get dressed now, we'll be late and miss the beginning). 4) Task breakdown (break big tasks into small steps). 5) Choice-giving within the task. Avoid nagging, reminding multiple times, or doing it for them.",
  },
  {
    id: "ppp-1",
    source: "Triple P (Positive Parenting Program)",
    sourceDetails: "Triple P — Managing Tantrums",
    category: "tantrums",
    text: "For tantrums in public: 1) Stay calm yourself — your reaction models emotional control. 2) Briefly acknowledge the feeling ('I know you want the toy'). 3) Hold the boundary firmly but gently ('We're not buying toys today'). 4) Ignore onlookers — their judgment doesn't matter. 5) If the tantrum escalates and you can't manage safely, leave the situation (go to the car, leave the shop). 6) Do NOT give in to the demand during a tantrum — this teaches that tantrums work. Consistency is what eventually reduces tantrum frequency.",
  },

// --- SLEEP (additional) ---
  {
    id: "sleep-4",
    source: "AAP Healthy Sleep Habits",
    sourceDetails: "American Academy of Pediatrics — Sleep Associations",
    category: "sleep",
    text: "Sleep associations are the conditions a child needs to fall asleep — being rocked, fed, held, or having a parent present. When they wake in the night, they need the same conditions to fall back asleep. To improve sleep: help the child develop independent sleep associations (comfort object, white noise, self-soothing). Put the child to bed drowsy but awake so they learn to transition to sleep on their own. This is the single most effective change for night waking.",
  },
  {
    id: "sleep-5",
    source: "The No-Cry Sleep Solution",
    sourceDetails: "Elizabeth Pantley — Night Wakings",
    category: "sleep",
    text: "For frequent night waking: 1) Check the sleep environment (dark, cool, quiet, white noise helps). 2) Ensure adequate daytime sleep (overtired children wake MORE, not less). 3) Gradually reduce your involvement in night wakings (less talking, less picking up, shorter interactions). 4) Use a dream feed (feed just before YOU go to bed) to extend the longest sleep stretch. 5) Be consistent — changes take 2-4 weeks to show results. Night waking is developmentally normal; the goal is reducing frequency and duration, not eliminating it.",
  },
  {
    id: "sleep-6",
    source: "Healthy Sleep Habits, Happy Child",
    sourceDetails: "Marc Weissbluth — Sleep Windows",
    category: "sleep",
    text: "Children have optimal 'sleep windows' — periods when falling asleep is easiest. Missing the sleep window makes children overtired, which releases cortisol and adrenaline, making it HARDER to fall asleep. Signs of the sleep window: decreased activity, slower movements, yawning, rubbing eyes, slight fussiness. Put the child to bed at the FIRST sign of tiredness, not when they're obviously exhausted. Early bedtimes (6-7pm for young children) produce better sleep than late bedtimes.",
  },

// --- EATING (additional) ---
  {
    id: "eat-3",
    source: "Child of Mine",
    sourceDetails: "Ellyn Satter — Picky Eating Phases",
    category: "eating",
    text: "Picky eating is developmentally normal between ages 1-5. Children's growth slows, their appetite decreases, and they become naturally cautious about new foods (neophobia). Do NOT: pressure, beg, bribe, threaten, hide vegetables, cook separate meals, or express anxiety about eating. DO: offer family meals with at least one accepted food alongside new foods, eat together, model enjoying a variety of foods, keep mealtimes pleasant and low-pressure, and trust that healthy children will not starve themselves. This phase passes if not turned into a power struggle.",
  },
  {
    id: "eat-4",
    source: "Solid Starts Approach",
    sourceDetails: "Solid Starts — Food Environment",
    category: "eating",
    text: "To create a positive food environment: 1) Eat with your child (they eat 80% more variety when eating with others). 2) Serve meals family-style so children can choose what to put on their plate. 3) Never use dessert as a reward for eating vegetables (this teaches vegetables are punishment). 4) Talk about food neutrally ('This is broccoli. It's crunchy') rather than 'Eat your greens, they're healthy.' 5) Involve children in meal prep — they're more likely to try food they helped make. 6) Accept that food play and mess is part of learning.",
  },
  {
    id: "eat-5",
    source: "How to Talk So Kids Will Listen",
    sourceDetails: "Faber & Mazlish — Mealtime Battles",
    category: "eating",
    text: "Instead of forcing food, try: 1) Give a choice ('Would you like carrots or cucumber?'). 2) Make food fun (cut into shapes, colorful plates). 3) Don't comment on how much or how little they eat — remove all pressure. 4) If they say 'I don't like it' before tasting, respond 'You haven't tried it yet. You can spit it out if you don't like it.' 5) End the meal calmly even if they ate nothing. Children's appetites vary day to day — trust their hunger signals.",
  },

// --- BEHAVIOR & DISCIPLINE (additional) ---
  {
    id: "disc-4",
    source: "Triple P (Positive Parenting Program)",
    sourceDetails: "Triple P — Encouraging Desirable Behavior",
    category: "behavior",
    text: "To increase desirable behavior: 1) Give specific, descriptive praise ('I noticed you shared your truck with your sister' rather than 'Good job'). 2) Provide attention for positive behavior, not just negative. 3) Use 'when/then' statements ('When you put your shoes on, then we can go outside'). 4) Create simple, clear rules (3-5 rules, age-appropriate, stated positively). 5) Spend brief, frequent one-on-one time with each child daily ('special time' for 10-15 minutes improves compliance dramatically).",
  },
  {
    id: "disc-5",
    source: "Peaceful Parent, Happy Kids",
    sourceDetails: "Dr. Laura Markham — Special Time",
    category: "behavior",
    text: "Special Time: Spend 15 minutes daily with each child, one-on-one, doing whatever THEY choose. No phones, no siblings, no agenda. This fills the child's 'connection cup' and dramatically reduces misbehavior. Children act out when they feel disconnected. Connection is the foundation of cooperation. Do this BEFORE problems arise, not as a reward. After Special Time is established, you'll see fewer power struggles and more natural cooperation.",
  },
  {
    id: "disc-6",
    source: "The Explosive Child",
    sourceDetails: "Ross Greene — Plan B Conversation",
    category: "behavior",
    text: "Plan B (Collaborative Problem Solving) for chronic behavior problems: Step 1 — Empathy: 'I've noticed that [specific behavior]. What's up with that?' Listen without judging or correcting. Step 2 — Define the problem: 'My concern is [specific concern].' Step 3 — Invitation: 'Let's figure this out together. Do you have any ideas?' Let the child propose first. Work toward a solution that addresses BOTH concerns. Avoid Plan A (imposing your will) and Plan C (dropping the expectation entirely).",
  },
  {
    id: "disc-7",
    source: "How to Talk So Kids Will Listen",
    sourceDetails: "Faber & Mazlish — Alternatives to Punishment",
    category: "behavior",
    text: "Alternatives to punishment: 1) Point out a way to be helpful ('Your sister is upset — can you help her feel better?'). 2) Express strong disapproval without attacking character ('I don't like seeing books thrown — books are for reading'). 3) State your expectations ('I expect you to treat the cat gently'). 4) Show the child how to make amends ('Let's fix the tower you knocked down'). 5) Give a choice ('You can play gently with the cat or play in your room — what do you choose?'). 6) Take action (remove the child or object calmly).",
  },

// --- SIBLING CONFLICT (additional) ---
  {
    id: "sib-3",
    source: "Siblings Without Rivalry",
    sourceDetails: "Adele Faber — Fairness",
    category: "sibling",
    text: "Instead of trying to treat children equally, treat them uniquely. 'Equal' means same amount of everything; 'fair' means each child gets what they need. When a child says 'That's not fair!' respond: 'I don't try to be fair. I try to give each of you what you need. You needed new shoes because yours were too small. Your brother didn't need shoes, so I didn't buy him any.' Also: never compare ('Why can't you sit still like your sister?'), never label ('the difficult one,' 'the smart one'), and don't require them to share everything — some things should be theirs alone.",
  },
  {
    id: "sib-4",
    source: "Peaceful Parent, Happy Kids",
    sourceDetails: "Dr. Laura Markham — Sibling Conflict Prevention",
    category: "sibling",
    text: "Prevent sibling conflict by: 1) Ensuring each child gets adequate one-on-one time with each parent. 2) Teaching children words for their feelings ('I'm frustrated' instead of hitting). 3) Acknowledging the older child's feelings about the younger ('It can be hard to share mom'). 4) Never allowing hitting or hurtful behavior (intervene physically, calmly). 5) Coaching them through conflict rather than solving it for them. 6) Modeling respectful disagreement with your partner — children copy what they see.",
  },

// --- EMOTIONAL REGULATION (additional) ---
  {
    id: "emo-3",
    source: "The Whole-Brain Child",
    sourceDetails: "Siegel & Bryson — Remember to Remember",
    category: "emotional",
    text: "Help children develop emotional intelligence by asking them to recall and describe their feelings about past events. 'How did you feel when your friend didn't want to play with you?' This builds their emotional vocabulary and their ability to reflect. Don't rush to fix the feeling — just listen and validate. Then ask what helped them feel better, building their sense of agency. Emotional intelligence is built through practice, not lecture.",
  },
  {
    id: "emo-4",
    source: "Raising Good Humans",
    sourceDetails: "Hunter Clarke-Fields — Responding vs Reacting",
    category: "emotional",
    text: "There's a difference between reacting (automatic, emotional, fast) and responding (deliberate, thoughtful, slow). When your child triggers you, you have about 0.25 seconds before your amygdala hijacks your response. Practice the PAUSE: 1) Notice the trigger in your body (tight chest, clenched jaw). 2) Take one breath. 3) Name what you're feeling. 4) Choose your response. This pause prevents yelling and models emotional regulation for your child, who is ALWAYS watching how you handle big feelings.",
  },
  {
    id: "emo-5",
    source: "Untangled",
    sourceDetails: "Lisa Damour — Anxiety in Children",
    category: "emotional",
    text: "Anxiety is not something to eliminate — it's something to manage. When a child is anxious: 1) Don't dismiss it ('There's nothing to worry about'). 2) Don't accommodate it excessively (letting them avoid all triggers). 3) Validate the feeling ('Worry makes sense here'). 4) Help them tolerate the discomfort ('You can feel anxious AND still go to the party'). 5) Gradual exposure works better than avoidance. 6) Praise brave behavior specifically. If anxiety significantly impairs daily functioning, consult a mental health professional.",
  },

// --- ROUTINES (additional) ---
  {
    id: "rout-2",
    source: "Triple P (Positive Parenting Program)",
    sourceDetails: "Triple P — Morning Routines",
    category: "routines",
    text: "For morning chaos: 1) Do as much as possible the night before (clothes out, bags packed, lunch made). 2) Wake up 15 minutes before the children. 3) Use a visual schedule for young children (pictures of each step). 4) Use a timer for each step ('5 minutes to get dressed'). 5) Build in a reward for finishing on time (reading a book together, listening to a favorite song). 6) Stay calm — your stress is contagious. If mornings are consistently chaotic, the routine needs simplifying.",
  },
  {
    id: "rout-3",
    source: "How to Talk So Kids Will Listen",
    sourceDetails: "Faber & Mazlish — Homework Battles",
    category: "routines",
    text: "For homework resistance: 1) Create a consistent time and place for homework. 2) Break large assignments into small chunks. 3) Sit nearby offering quiet support, not hovering. 4) Praise effort, not results ('I can see you worked hard on that problem'). 5) Let natural consequences occur (if homework isn't done, the teacher handles it). 6) Don't do the work for them. 7) If homework consistently takes too long or causes tears, talk to the teacher — it may be too much.",
  },

// --- SCREEN TIME (additional) ---
  {
    id: "screen-2",
    source: "AAP Media Guidelines",
    sourceDetails: "American Academy of Pediatrics — Screen Time Transitions",
    category: "screen",
    text: "Transitioning OFF screens is the hardest part. Strategies: 1) Give warnings ('5 more minutes', 'This is the last episode'). 2) Use a visual timer they can see. 3) Have a planned next activity (snack, outdoor time, a toy they love). 4) Use a transition object ('Can you bring me the iPad when you're done?'). 5) Validate the feeling ('I know it's hard to stop watching'). 6) Hold the boundary calmly but firmly. 7) Avoid using screen time as a reward/punishment — this makes it MORE desirable. Resistance to turning off screens is normal and does not mean the child is 'addicted.'",
  },
  {
    id: "screen-3",
    source: "Dopamine Nation",
    sourceDetails: "Anna Lembke — Screen Time and Dopamine",
    category: "screen",
    text: "Screens trigger dopamine release, and the brain defends against excess dopamine with a compensatory 'come-down' — irritability, boredom, and craving. This is why children are cranky after screen time, not during it. Strategies: 1) Keep sessions short (shorter sessions = smaller crash). 2) Always follow screen time with a physical or outdoor activity. 3) Make the first activity after screens something connecting (snack together, read a book). 4) Avoid screens in the morning before school (disrupts focus). 5) Be aware that the meltdowns after screen time are chemical, not behavioral.",
  },

// --- SCHOOL & LEARNING (new category) ---
  {
    id: "school-1",
    source: "How to Talk So Kids Will Listen",
    sourceDetails: "Faber & Mazlish — School Refusal",
    category: "school",
    text: "For school refusal or resistance: 1) Validate the feeling ('School feels hard right now'). 2) Don't debate or lecture about the importance of school. 3) Investigate gently — is it academic, social, or anxiety-related? 4) Talk to the teacher to understand what's happening at school. 5) Create a predictable, calm morning routine. 6) Don't let staying home become a reward (no screens, regular bedtime, schoolwork at home). 7) If refusal is persistent, consult school counselor or child psychologist — it may indicate bullying, learning difficulties, or anxiety disorder.",
  },
  {
    id: "school-2",
    source: "Mindset",
    sourceDetails: "Carol Dweck — Growth Mindset for Learning",
    category: "school",
    text: "Praise EFFORT, not ability. Saying 'You're so smart' makes children afraid of failing (because if failing means you're not smart, better not try). Saying 'I can see you worked really hard on that' teaches that effort leads to growth. Children with a growth mindset (believing abilities can be developed) are more resilient, take on challenges, and recover from setbacks better. When a child says 'I can't do this,' add the word YET: 'You can't do this YET.' It changes the meaning entirely.",
  },
  {
    id: "school-3",
    source: "The Whole-Brain Child",
    sourceDetails: "Siegel & Bryson — Learning Frustration",
    category: "school",
    text: "When a child is frustrated with learning: 1) Acknowledge the frustration ('This is really hard'). 2) Normalize struggle ('Lots of people find this difficult at first'). 3) Break the task into smaller steps. 4) Ask 'What's one thing you DO understand?' to build confidence. 5) Resist the urge to do it for them (this sends the message they can't). 6) Model problem-solving aloud ('Hmm, let me think about this...'). 7) Celebrate small progress, not just the final result.",
  },

// --- SOCIAL SKILLS (new category) ---
  {
    id: "social-1",
    source: "Siblings Without Rivalry",
    sourceDetails: "Adele Faber — Teaching Sharing",
    category: "social",
    text: "For sharing conflicts: 1) Don't force sharing ('You must share!') — it builds resentment, not generosity. 2) Use timers for turn-taking ('You get 5 minutes, then it's your brother's turn'). 3) Acknowledge both children's feelings. 4) Teach the concept of 'special things' that don't have to be shared. 5) Model generous behavior yourself. 6) Use 'sportscasting' ('I see two children who both want the truck. Let's figure this out.') rather than judging. Children learn to share through experience, not force.",
  },
  {
    id: "social-2",
    source: "Raising Good Humans",
    sourceDetails: "Hunter Clarke-Fields — Friendship Skills",
    category: "social",
    text: "To help children develop social skills: 1) Arrange one-on-one playdates (group settings can overwhelm). 2) Role-play social situations at home ('What could you say if you want to join their game?'). 3) Don't force apologies — model them instead ('I'm sorry I was grumpy earlier'). 4) Teach specific phrases: 'Can I play?', 'My turn?', 'I don't like that.' 5) Read books about friendship. 6) Accept that social mistakes are part of learning — coach after, not during.",
  },
  {
    id: "social-3",
    source: "Untangled",
    sourceDetails: "Lisa Damour — Bullying Response",
    category: "social",
    text: "If your child is being bullied: 1) Listen fully without interrupting. 2) Don't minimize ('Just ignore them') or overreact. 3) Validate ('That sounds really hard and unfair'). 4) Ask what they want to do about it (empowers them). 5) Help them identify safe adults at school. 6) Contact the school if the bullying is persistent or physical. 7) Teach specific responses: 'Stop,' 'I don't like that,' walking away, and telling an adult. 8) Build confidence through activities outside school where they feel successful.",
  },

// --- BIG TRANSITIONS (new category) ---
  {
    id: "trans-1",
    source: "The Whole-Brain Child",
    sourceDetails: "Siegel & Bryson — New Sibling",
    category: "transition",
    text: "For new sibling transition: 1) Acknowledge the older child's mixed feelings ('It can be hard to share attention with a new baby'). 2) Maintain one-on-one time with the older child. 3) Let them help with the baby in age-appropriate ways (fetching diapers, singing). 4) Don't blame the baby ('I can't play, the baby needs me') — instead own your own limits ('I need to feed the baby now, then we'll play'). 5) Expect regression (toilet training, sleep, speech) — it's normal and temporary. 6) Read books about being a big sibling together.",
  },
  {
    id: "trans-2",
    source: "Two Homes, One Childhood",
    sourceDetails: "Robert Emery — Divorce Co-Parenting",
    category: "transition",
    text: "For separation/divorce: 1) Reassure children: 'Both parents still love you, this is not your fault.' 2) Maintain routines and consistency across both homes when possible. 3) Never criticize the other parent in front of the child. 4) Don't use the child as a messenger or spy. 5) Allow the child to express all feelings about the change, including anger and sadness. 6) Create a visual calendar so children know which parent they'll be with. 7) Expect behavioral changes for 6-12 months as they adjust. 8) Consider family therapy if adjustment is prolonged.",
  },
  {
    id: "trans-3",
    source: "Zero to Three",
    sourceDetails: "ZERO TO THREE — Moving House",
    category: "transition",
    text: "For moving house: 1) Talk about it in simple, positive terms ('We're going to live in a new house with a bigger garden!'). 2) Let the child help pack their room and decorate their new room. 3) Keep familiar objects (bedding, toys, nightlight) the same in the new house. 4) Maintain bedtime and meal routines throughout the move. 5) Expect behavioral regression for a few weeks. 6) Explore the new neighborhood together before moving. 7) Acknowledge sadness about the old house ('It's OK to miss our old home').",
  },
  {
    id: "trans-4",
    source: "The Grief Recovery Handbook",
    sourceDetails: "John James & Russell Friedman — Grief in Children",
    category: "transition",
    text: "When talking to children about death: 1) Use clear, honest words ('Grandpa died') not euphemisms ('Grandpa went to sleep' — this can make children afraid of sleeping). 2) Answer questions honestly at their level — don't over-explain. 3) It's OK to say 'I don't know' when they ask difficult questions. 4) Let them see you sad — it models that grief is normal. 5) Don't rush them through grief — children process in waves, not linearly. 6) Maintain routines for security. 7) Books help: 'The Invisible String,' 'I Miss You.'",
  },

// --- CONFIDENCE & SELF-ESTEEM (new category) ---
  {
    id: "conf-1",
    source: "Mindset",
    sourceDetails: "Carol Dweck — Building Resilience",
    category: "confidence",
    text: "To build genuine self-esteem: 1) Praise specific effort and strategy, not intelligence or talent. 2) Encourage risk-taking ('Trying something new is brave'). 3) Model self-compassion ('I made a mistake, that's how we learn'). 4) Celebrate mistakes as learning opportunities ('What did we learn from this?'). 5) Let them struggle and solve problems independently (rescuing teaches helplessness). 6) Focus on improvement, not comparison to others. 7) Give responsibilities (chores build self-worth through contribution).",
  },
  {
    id: "conf-2",
    source: "How to Talk So Kids Will Listen",
    sourceDetails: "Faber & Mazlish — Encouraging Autonomy",
    category: "confidence",
    text: "To foster independence and confidence: 1) Let children make choices ('Do you want to wear the red or blue shirt?'). 2) Respect their struggle ('That looks tricky — do you want help or do you want to try alone?'). 3) Don't ask too many questions (let them share when ready). 4) Don't rush to answer their questions ('What do YOU think?'). 5) Encourage them to use outside resources (teachers, librarians). 6) Don't take away their hope ('You want to be an astronaut? That's a big dream!') — let them dream.",
  },
  {
    id: "conf-3",
    source: "The Whole-Brain Child",
    sourceDetails: "Siegel & Bryson — The Wheel of Awareness",
    category: "confidence",
    text: "Help children develop a rich emotional vocabulary. Instead of just 'good' and 'bad,' teach words like frustrated, disappointed, jealous, proud, overwhelmed, content, anxious, excited, lonely, grateful. Children who can name their feelings accurately have better emotional regulation and higher self-awareness. Use a feelings chart. When they're upset, offer options: 'Are you feeling frustrated, or maybe disappointed?' This builds their emotional intelligence and self-understanding.",
  },

// --- SAFETY / MEDICAL REDIRECTS ---
  {
    id: "safe-1",
    source: "AAP Safety Guidelines",
    sourceDetails: "American Academy of Pediatrics — When to Call the Doctor",
    category: "behavior",
    text: "Seek immediate medical attention for: fever in infants under 3 months (38°C/100.4°F or higher), difficulty breathing, persistent vomiting, dehydration signs (no wet diaper for 6-8 hours), lethargy or unresponsiveness, head injury with vomiting or confusion, suspected poisoning, severe allergic reactions, or any situation that feels medically urgent. Trust your instincts — if something seems wrong with your child medically, contact your pediatrician or emergency services immediately. This app does NOT provide medical advice.",
  },

// --- ADDITIONAL DISCIPLINE / DEFIANCE ---
  {
    id: "disc-8",
    source: "1-2-3 Magic",
    sourceDetails: "Thomas Phelan — Lying in Children",
    category: "behavior",
    text: "Young children (under 6) often blur fantasy and reality — their 'lies' are often not intentional deception. For older children: 1) Don't set traps ('Did you break this?' when you know they did). 2) Don't overreact to lying — excessive punishment increases lying. 3) Focus on the behavior, not the lie ('I see the lamp is broken. Let's clean it up.'). 4) Praise honesty ('Thank you for telling me the truth, that was brave'). 5) Model honesty yourself, including admitting your own mistakes. 6) Understand that lying often comes from fear of your reaction — if you stay calm, they'll be more honest.",
  },
  {
    id: "disc-9",
    source: "Peaceful Parent, Happy Kids",
    sourceDetails: "Dr. Laura Markham — Defiance",
    category: "behavior",
    text: "Defiance is a symptom of disconnection. When a child says 'No!' or refuses to cooperate, they're saying 'I don't feel connected enough to want to cooperate with you right now.' Before addressing the defiance: 1) Reconnect (hug, eye contact, playfulness). 2) Get curious about what's underneath (tiredness, hunger, feeling unheard, school stress). 3) Offer choices within limits ('You need to get dressed — do you want to start with shirt or pants?'). 4) Use playfulness ('Oh no, those socks are NOT going on those feet! Oh wait, they ARE!') to defuse power struggles. Defiance decreases dramatically when the relationship is strong.",
  },
  {
    id: "disc-10",
    source: "No-Drama Discipline",
    sourceDetails: "Siegel & Bryson — Time-Ins vs Time-Outs",
    category: "behavior",
    text: "Traditional time-outs (isolating the child as punishment) can activate abandonment fears and don't teach the child how to regulate. Consider 'time-ins' instead: sit WITH the child in a calm space while they regulate. This provides co-regulation (your calm presence helps their nervous system settle) while maintaining the boundary that the behavior stops. Once calm, discuss what happened and what to try next time. Time-ins teach emotional regulation skills; time-outs teach children to suppress emotions.",
  },

// --- ADDITIONAL SLEEP ---
  {
    id: "sleep-7",
    source: "AAP Healthy Sleep Habits",
    sourceDetails: "American Academy of Pediatrics — Bedtime Resistance",
    category: "sleep",
    text: "For bedtime resistance (child keeps getting out of bed): 1) Use the 'bedtime pass' technique — give the child one pass per night they can use for one request (water, hug, bathroom). After the pass is used, gently return them to bed without engagement. 2) The 'silent return' — each time they get up, calmly walk them back to bed with minimal interaction (no eye contact, no talking, no anger). This is boring and consistent. It may take 20-50 returns the first night but typically resolves within 3-5 nights. 3) Ensure the bedtime is not too early (not tired) or too late (overtired).",
  },

// --- ANGER & AGGRESSION (new category) ---
  {
    id: "anger-1",
    source: "The Explosive Child",
    sourceDetails: "Ross Greene — Hitting and Physical Aggression",
    category: "anger",
    text: "When a child hits: 1) Immediately and physically separate the children (block with your body, not force). 2) 'I won't let you hit. Hitting hurts people.' 3) Don't demand an apology mid-escalation — their rational brain is offline. 4) Help them regulate (sit with them, offer a calm space). 5) After they're calm, problem-solve: 'You were really angry. What happened? What could you do differently next time?' 6) Teach alternative expressions of anger: squeezing a pillow, using words ('I'm MAD'), running to a safe space. Hitting is communication — figure out what they're trying to communicate.",
  },
  {
    id: "anger-2",
    source: "Peaceful Parent, Happy Kids",
    sourceDetails: "Dr. Laura Markham — Aggression as Distress Signal",
    category: "anger",
    text: "Aggression in children is a distress signal, not malice. Children hit when they feel powerless, disconnected, overwhelmed, or scared. Prevention: 1) Ensure adequate connection time daily. 2) Watch for escalation triggers (hunger, tiredness, transitions). 3) Teach emotional vocabulary early. 4) Roughhousing play (chasing, wrestling in a safe way) actually helps children release pent-up aggressive energy safely. 5) Laughter releases oxytocin which reduces aggression. If a child is frequently aggressive, investigate underlying causes: sensory processing, unmet needs, anxiety, or exposure to aggressive media.",
  },
  {
    id: "anger-3",
    source: "No-Drama Discipline",
    sourceDetails: "Siegel & Bryson — Biting",
    category: "anger",
    text: "For biting (especially toddlers/preschoolers): 1) Firmly and calmly say 'No biting. Biting hurts.' 2) Check on the bitten child first (models empathy). 3) Don't bite back (models the behavior you're trying to stop). 4) Look for patterns — biting often happens during transitions, when overtired, or when overwhelmed. 5) Offer alternatives: 'If you feel angry, you can bite this teether / pillow.' 6) Shadow the child in high-risk situations to intervene before biting occurs. 7) Biting phases typically last 2-4 weeks with consistent response. If persistent beyond that, consult a pediatrician or occupational therapist.",
  },
  {
    id: "anger-4",
    source: "Triple P (Positive Parenting Program)",
    sourceDetails: "Triple P — Throwing and Destructive Behavior",
    category: "anger",
    text: "For throwing objects or destructive behavior: 1) Ensure everyone's safety first. 2) Calmly remove dangerous objects. 3) 'I can see you're very angry. I won't let you break things.' 4) Provide acceptable alternatives for the impulse: 'You can throw these soft balls outside.' 5) Don't overreact emotionally — big reactions can reinforce the behavior (attention is attention). 6) After calm, natural consequences: help clean up what was thrown/broken. 7) For older children, discuss what triggered the urge. 8) Consistent, calm responses reduce frequency over time.",
  },

// --- TOILET TRAINING (new category) ---
  {
    id: "toilet-1",
    source: "AAP Toilet Training Guide",
    sourceDetails: "American Academy of Pediatrics — Readiness Signs",
    category: "toilet",
    text: "Toilet training readiness signs: 1) Stays dry for 2+ hours. 2) Shows interest in the bathroom. 3) Can follow simple instructions. 4) Can pull pants up and down. 5) Communicates when they've gone. 6) Shows discomfort with dirty diapers. Most children show readiness between 18-30 months, but every child is different. Starting before readiness leads to longer training and more resistance. DO NOT pressure, shame, or punish for accidents. DO celebrate successes casually ('You did it on the potty!'). Regression after initial success is normal during stress, illness, or transitions.",
  },
  {
    id: "toilet-2",
    source: "Oh Crap! Potty Training",
    sourceDetails: "Jamie Glowacki — The Block Method",
    category: "toilet",
    text: "The 'Oh Crap' method: Day 1-2 — Child is naked from waist down at home. Watch closely for cues (pausing, squirming). Rush them to the potty. Day 3+ — Add loose pants (no underwear yet). Gradually add clothing layers. Key principles: 1) Don't ask 'Do you need to go?' — instead narrate what you see ('I see you wiggling, let's try the potty'). 2) Accidents are data, not failure. 3) Stay home for the first 3 days. 4) Don't use charts or rewards initially — intrinsic motivation is more powerful. 5) Night training often comes months later than day training — that's normal.",
  },
  {
    id: "toilet-3",
    source: "AAP Toilet Training Guide",
    sourceDetails: "American Academy of Pediatrics — Regression",
    category: "toilet",
    text: "Toileting regression (accidents after being trained) is common and normal. Triggers: new sibling, starting school, moving, illness, family stress, or developmental leaps. Response: 1) Don't shame or punish ('You're a big kid, you should know better'). 2) Don't overreact — stay neutral. 3) 'Oops, you had an accident. Let's clean up together.' 4) Increase connection time. 5) Return to basics (reminders, easy-access clothing). 6) Address the underlying cause, not the symptom. 7) Regression typically resolves in 2-6 weeks with calm, consistent support. If persistent, check for UTI or constipation.",
  },

// --- TEENAGERS (new category) ---
  {
    id: "teen-1",
    source: "Untangled",
    sourceDetails: "Lisa Damour — Teenage Communication",
    category: "teen",
    text: "For communicating with teenagers: 1) Car rides are the best conversation setting — side-by-side, no eye contact pressure. 2) Listen 80%, talk 20%. 3) Don't solve their problems unless asked — ask 'Do you want advice or do you want me to just listen?' 4) Validate before advising ('That sounds really frustrating'). 5) Avoid lecturing — if you talk for more than 30 seconds, you've lost them. 6) Late evening (after 9pm) is often when teens open up — be available. 7) Show interest in their world without judgment (music, games, friends). Connection before correction.",
  },
  {
    id: "teen-2",
    source: "How to Talk So Teens Will Listen",
    sourceDetails: "Adele Faber & Elaine Mazlish — Teen Backtalk",
    category: "teen",
    text: "For teenage backtalk and disrespect: 1) Don't take it personally — it's developmental, not about you. 2) Don't respond with equal disrespect (you're the adult). 3) Acknowledge the feeling underneath: 'You seem really frustrated about this.' 4) Set the boundary: 'I want to hear what you have to say, but I need you to speak to me respectfully.' 5) Walk away if it escalates: 'We can talk about this when we're both calmer.' 6) Return to the conversation later when emotions have cooled. 7) Model respectful disagreement — teens learn how to handle conflict by watching you.",
  },
  {
    id: "teen-3",
    source: "Untangled",
    sourceDetails: "Lisa Damour — Teen Independence",
    category: "teen",
    text: "Balancing teen independence and safety: 1) Distinguish between permanent consequences (drug addiction, pregnancy, serious injury) and temporary ones (a bad grade, a broken phone, embarrassment). 2) Hold firm on permanent-consequence issues. 3) Let natural consequences play out for temporary ones. 4) Give increasing autonomy as they demonstrate responsibility. 5) Know where they are and who they're with — this is the single strongest predictor of teen safety. 6) 'I trust you, and I also need to know where you are because I'm responsible for your safety.' 7) Negotiate rules together when possible — teens comply better with rules they helped create.",
  },
  {
    id: "teen-4",
    source: "Raising Good Humans",
    sourceDetails: "Hunter Clarke-Fields — Teen Screens",
    category: "teen",
    text: "Teen screen time management: 1) Create a family media plan TOGETHER — teens comply better with rules they helped create. 2) Tech-free zones: bedrooms, meal times, car rides (these are connection times). 3) Tech-free times: first hour after waking, one hour before bed. 4) Discuss content, not just time — what they're watching matters more than how long. 5) Watch their content sometimes — understand their world. 6) Watch for signs of problematic use: declining grades, social withdrawal, sleep disruption, anxiety after use. 7) Model healthy phone use yourself — teens spot hypocrisy instantly.",
  },

// --- PARENT SELF-CARE (new category) ---
  {
    id: "parent-1",
    source: "Raising Good Humans",
    sourceDetails: "Hunter Clarke-Fields — Parental Burnout",
    category: "parent",
    text: "Signs of parental burnout: chronic exhaustion, feeling emotionally distant from your children, feeling like parenting is a burden, irritability, brain fog, crying easily, sleep problems, feeling trapped. Response: 1) Acknowledge it — burnout is real, not weakness. 2) Identify what's draining you most (sleep deprivation, no breaks, work stress, lack of support). 3) Ask for help SPECIFICALLY ('Can you take the kids Saturday morning?'). 4) Lower your standards temporarily (fed is enough, clean enough is fine). 5) Protect 15 minutes daily that are just for you. 6) Connect with other parents — isolation amplifies burnout. 7) If persistent, consult your GP — postnatal depression and parental depression are common and treatable.",
  },
  {
    id: "parent-2",
    source: "Peaceful Parent, Happy Kids",
    sourceDetails: "Dr. Laura Markham — When You Lose Your Temper",
    category: "parent",
    text: "When you yell at your child: 1) STOP — walk away if you need to. 2) Breathe. 3) REPAIR — go back and apologize: 'I'm sorry I yelled. I was feeling frustrated and I handled it badly. I love you. Let me try again.' 4) This repair is powerful — it teaches your child that mistakes happen, relationships can be fixed, and adults take responsibility. 5) Investigate YOUR trigger — were you hungry, tired, stressed about work? Address the root cause. 6) Prevention: 10 minutes of daily self-care reduces yelling frequency dramatically. 7) No parent is perfect. The goal isn't never yelling — it's repairing when you do.",
  },
  {
    id: "parent-3",
    source: "Self-Compassion: The Proven Power of Being Kind to Yourself",
    sourceDetails: "Dr. Kristin Neff — Parent Self-Compassion",
    category: "parent",
    text: "Parental self-compassion: 1) Notice when you're being harsh with yourself ('I'm a terrible parent'). 2) Replace with self-compassion ('This is really hard. Every parent struggles. I'm doing my best with what I have'). 3) The research is clear: parents who practice self-compassion are MORE patient with their children, not less. 4) Self-compassion is not lowering standards — it's giving yourself the same grace you'd give a friend. 5) Practice: put your hand on your heart and say 'This is hard. I'm not alone. May I be kind to myself.' 6) Children learn self-compassion by watching you model it.",
  },
  {
    id: "parent-4",
    source: "Triple P (Positive Parenting Program)",
    sourceDetails: "Triple P — Taking Care of Yourself",
    category: "parent",
    text: "Taking care of yourself as a parent is not selfish — it's essential. A depleted parent cannot give patience, attention, or emotional regulation. Strategies: 1) Identify activities that recharge you (walking, reading, seeing friends, exercise). 2) Schedule them like appointments. 3) Communicate your needs clearly: 'I need 30 minutes to recharge, then I'll be fully available.' 4) Tag-team with your partner — each parent gets protected downtime. 5) Accept help — from family, friends, childcare. 6) Reduce non-essential commitments. 7) Sleep is not a luxury — it's a biological necessity. Protect your sleep.",
  },

// --- ADDITIONAL: DEEPER COVERAGE ---

// Sensory / Neurodivergent considerations
  {
    id: "sensory-1",
    source: "The Out-of-Sync Child",
    sourceDetails: "Carol Kranowitz — Sensory Processing",
    category: "behavior",
    text: "Some children have sensory processing differences — they're over- or under-responsive to sounds, textures, lights, or movement. Signs: covering ears, avoiding certain clothes/textures, meltdowns in noisy/bright environments, seeking constant movement, resistance to tooth-brushing/hair-washing. These meltdowns are NOT behavioral — they're neurological. Response: 1) Reduce sensory triggers (noise-cancelling headphones, dim lighting, soft clothing). 2) Provide sensory breaks (quiet space, deep pressure, weighted blanket). 3) Establish predictable routines (surprise is overwhelming). 4) If you suspect sensory processing issues, consult a pediatric occupational therapist for evaluation.",
  },

// ADHD-specific
  {
    id: "adhd-1",
    source: "Taking Charge of ADHD",
    sourceDetails: "Russell Barkley — ADHD Behavior Management",
    category: "behavior",
    text: "For children with ADHD: 1) Traditional discipline strategies often don't work — their brains process rewards and consequences differently. 2) Use immediate, frequent feedback (not delayed consequences). 3) Break tasks into very small steps with checkpoints. 4) Use visual timers and schedules. 5) Provide frequent movement breaks. 6) Give instructions one at a time, make eye contact first. 7) Use token economy systems with immediate rewards. 8) Reduce distractibility in the environment. 9) Celebrate effort, not just outcomes. 10) ADHD is a neurodevelopmental condition, not a behavior choice. Punishment doesn't teach skills — coaching does.",
  },

// Nightmares / Night terrors
  {
    id: "sleep-8",
    source: "AAP Healthy Sleep Habits",
    sourceDetails: "American Academy of Pediatrics — Nightmares vs Night Terrors",
    category: "sleep",
    text: "Nightmares (child wakes up scared, remembers the dream): Comfort and reassure. 'It was a dream, it's not real, you're safe.' Avoid scary content before bed. Night terrors (child appears awake but isn't, screams, doesn't respond, doesn't remember): DO NOT wake them. Stay nearby to ensure safety. They typically last 5-15 minutes and the child falls back asleep. Night terrors happen in deep sleep (first third of night); nightmares happen in REM (last third). Both are common in ages 3-8 and usually outgrown.",
  },

// Chores and contribution
  {
    id: "chore-1",
    source: "How to Talk So Kids Will Listen",
    sourceDetails: "Faber & Mazlish — Getting Kids to Help",
    category: "routines",
    text: "To encourage children to help with household tasks: 1) Make it collaborative, not a command ('Let's clean up together' vs 'Clean your room'). 2) Make it specific and small ('Can you put all the blue blocks in this bin?'). 3) Show appreciation for effort, not perfection ('Thanks for helping with the dishes — you did a great job with the plates'). 4) Don't redo their work (if you fix it after, they learn their effort doesn't matter). 5) Make it playful (race against a timer, make it a game). 6) Create a visual checklist they can manage themselves. 7) Start young — even toddlers can put toys in a basket.",
  },

// Jealousy and envy
  {
    id: "emo-6",
    source: "Siblings Without Rivalry",
    sourceDetails: "Adele Faber — Jealousy",
    category: "emotional",
    text: "When a child expresses jealousy ('It's not fair, she gets everything'): 1) Acknowledge the feeling without dismissing it ('You feel like things aren't fair sometimes'). 2) Don't argue about facts ('But we bought you a bike last month!'). 3) Don't make them feel guilty for feeling jealous — it's a normal human emotion. 4) Spend individual time with them. 5) Give them a way to express it: 'You can tell me when you're feeling left out.' 6) Check if there's a real imbalance that needs addressing. Jealousy often signals a need for more connection.",
  },

// Car seat / travel meltdowns
  {
    id: "rout-4",
    source: "Triple P (Positive Parenting Program)",
    sourceDetails: "Triple P — Car Travel",
    category: "routines",
    text: "For car seat meltdowns: 1) Validate ('I know you don't want to get in your car seat'). 2) Make it non-negotiable but kind ('Car seats keep you safe. We can't drive until you're buckled'). 3) Offer choices within the constraint ('Do you want to climb in yourself or do you want help?'). 4) Distract with a song, toy, or game ('Can you spot a red car while I buckle you?'). 5) If they're physically resisting, wait calmly without engaging until they tire. 6) Never drive with an unbuckled child. 7) For older kids, explain the plan ('First we drive to the shops, then we get ice cream').",
  },

// --- FEARS & WORRIES (new category) ---
  {
    id: "fear-1",
    source: "The Whole-Brain Child",
    sourceDetails: "Siegel & Bryson — Fear and the Brain",
    category: "fears",
    text: "When a child is scared, their amygdala (threat detection) is activated and their prefrontal cortex (logic) shuts down. NEVER dismiss fears as irrational — to the child's brain, the threat feels real. Response: 1) Validate ('I can see you're really scared'). 2) Don't minimize ('There's nothing to be afraid of') — this teaches them their feelings are wrong. 3) Provide physical safety (hug, hold, stay close). 4) Help name the fear specifically ('You're scared of the dark in your room?'). 5) Problem-solve together ('What would help you feel safe? A nightlight? Me checking on you?'). 6) Gradual exposure at the child's pace, never forced.",
  },
  {
    id: "fear-2",
    source: "Helping Your Anxious Child",
    sourceDetails: "Cognitive Behavioral Therapy — Fear Ladder",
    category: "fears",
    text: "For specific fears (monsters, dark, dogs, doctors): Build a 'fear ladder' together. Step 1: Talk about the fear. Step 2: Look at pictures. Step 3: Watch from far away. Step 4: Stand closer. Step 5: Touch or interact. Each step is the child's choice. Reward brave behavior at each step with specific praise ('You looked at the dog from across the park — that was brave!'). Never force a step. If a step is too hard, go back to the previous one. Most childhood fears resolve within months with this approach. If fear causes significant distress or avoidance, consult a child psychologist.",
  },
  {
    id: "fear-3",
    source: "Zero to Three",
    sourceDetails: "ZERO TO THREE — Fear of the Dark",
    category: "fears",
    text: "For fear of the dark: 1) Acknowledge ('The dark can feel scary because we can't see'). 2) Use a dim nightlight (warm color, not blue). 3) Do 'monster checks' together before bed (checking under the bed and in the closet — this provides logical reassurance). 4) Give the child a 'magic' comfort object that 'protects' them. 5) Read positive books about the dark ('The Dark' by Lemony Snicket). 6) Keep the bedtime routine calm and predictable. 7) Don't lock the child in alone — an open door with a hallway light helps. 8) Fear of the dark is developmentally normal from ages 2-6.",
  },
  {
    id: "fear-4",
    source: "Zero to Three",
    sourceDetails: "ZERO TO THREE — Doctor/Dentist Fears",
    category: "fears",
    text: "For fear of doctors/dentists: 1) Play 'doctor' at home with a toy kit — let the child be the doctor. 2) Read books about going to the doctor. 3) Bring a comfort object. 4) Tell the child what will happen in simple terms ('The doctor will look in your ears and listen to your heart'). 5) Don't lie ('It won't hurt') — instead be honest ('You might feel a quick pinch, then it's done'). 6) Bring a favorite snack for after. 7) Stay calm yourself — children read your anxiety. 8) Choose pediatric providers who are experienced with anxious children.",
  },
  {
    id: "fear-5",
    source: "Untangled",
    sourceDetails: "Lisa Damour — Childhood Anxiety vs Normal Worry",
    category: "fears",
    text: "Normal worry: brief, situational, child can be distracted or reassured. Problematic anxiety: persistent, interferes with daily activities (school, friendships, sleep, eating), causes physical symptoms (stomach aches, headaches), or leads to significant avoidance. If anxiety is impacting daily functioning for more than 2-4 weeks, consult your pediatrician or a child mental health professional. Early intervention for anxiety is highly effective. Don't wait hoping it will resolve on its own if it's significantly impacting your child's life.",
  },

// --- HARD CONVERSATIONS (new category) ---
  {
    id: "hard-1",
    source: "The Whole-Brain Child",
    sourceDetails: "Siegel & Bryson — Answering Difficult Questions",
    category: "honest",
    text: "When children ask hard questions (death, sex, violence, scary news): 1) Find out what they already know first ('What have you heard about that?'). 2) Answer at their developmental level — simple, honest, brief. 3) Don't over-explain — stop when they're satisfied. 4) It's OK to say 'I don't know, let me think about that.' 5) Follow their lead — if they change the subject, they've heard enough. 6) Check back later ('You asked about X earlier — do you have more questions?'). 7) Avoid euphemisms that cause confusion. 8) Reassure safety ('You're safe. I'm here. We're OK.')",
  },
  {
    id: "hard-2",
    source: "Human Sexuality Education Guidelines",
    sourceDetails: "Sexuality Information and Education Council of the US (SIECUS)",
    category: "honest",
    text: "For questions about bodies and sex: 1) Use correct anatomical terms from toddlerhood (penis, vulva, vagina) — this protects children from abuse (predators avoid kids who know correct terms). 2) Answer only what's asked — a 4-year-old asking 'where do babies come from?' usually means 'was I in your tummy?' not a full sex education. 3) Keep it simple and factual. 4) 'That's a great question. A sperm from daddy and an egg from mommy joined together and grew in mommy's uterus.' 5) If you're uncomfortable, it's OK to say 'I want to answer that properly — let me think about the best way.' 6) Use age-appropriate books: 'It's Not the Stork' (ages 4-8), 'It's So Amazing' (ages 7-10).",
  },
  {
    id: "hard-3",
    source: "The Grief Recovery Handbook",
    sourceDetails: "John James & Russell Friedman — Talking About Death",
    category: "honest",
    text: "When talking to children about death: 1) Be clear and direct ('Grandpa died. His body stopped working'). 2) Avoid euphemisms: NOT 'went to sleep' (fear of sleep), NOT 'went away' (waiting for return), NOT 'lost' (let's find them!). 3) Children may ask the same question repeatedly — this is processing, not forgetting. Answer patiently each time. 4) Children grieve in waves — they may cry then play 5 minutes later. This is normal. 5) Let them see you grieve — hiding tears teaches emotions are shameful. 6) Maintain routines for security. 7) Involve them in memorial activities at their comfort level. 8) Books: 'The Invisible String,' 'Lifetimes,' 'I Miss You.'",
  },
  {
    id: "hard-4",
    source: "Raising White Kids",
    sourceDetails: "Jennifer Harvey — Talking About Race and Difference",
    category: "honest",
    text: "For questions about race, difference, and discrimination: 1) Don't shush the question or say 'we don't see color' — this shuts down important development. 2) Answer honestly and simply ('People come in all different skin colors, just like different hair colors'). 3) Acknowledge unfairness when children notice it ('You're right, that IS unfair'). 4) Read diverse books and watch diverse media. 5) Expose children to diverse environments. 6) For older children, discuss historical and current injustice at their level. 7) Model inclusive behavior — children copy what you DO more than what you say.",
  },
  {
    id: "hard-5",
    source: "Zero to Three",
    sourceDetails: "ZERO TO THREE — Talking About Scary News",
    category: "honest",
    text: "When children are exposed to scary news events: 1) Limit exposure (turn off the news when children are present). 2) If they've heard about something, ask what they know. 3) Reassure personal safety ('You are safe. Our family is safe.'). 4) Keep it simple — one or two sentences, not a detailed explanation. 5) Maintain normal routines (routine = safety). 6) Expect behavioral changes (sleep issues, clinginess, regression) and respond with extra comfort. 7) Avoid graphic details. 8) For older children, watch or read the news together and discuss their feelings.",
  },

// --- CO-PARENTING (new category) ---
  {
    id: "cop-1",
    source: "The Whole-Brain Child",
    sourceDetails: "Siegel & Bryson — Consistency Across Caregivers",
    category: "co-parent",
    text: "Children thrive on consistency, but perfect consistency between co-parents isn't realistic. Focus on: 1) Shared core values (kindness, respect, safety) even if methods differ. 2) Don't undermine the other parent in front of the child ('Dad lets me do it' → 'That's dad's house rule; at my house the rule is...'). 3) Never make the child the messenger. 4) Discuss disagreements privately, not in front of the child. 5) If rules differ significantly between homes, explain it neutrally ('Different places have different rules, just like school and home'). 6) Children are remarkably adaptable to different environments if both feel safe and loving.",
  },
  {
    id: "cop-2",
    source: "Two Homes, One Childhood",
    sourceDetails: "Robert Emery — Co-Parenting Conflict",
    category: "co-parent",
    text: "When co-parents disagree on discipline: 1) Differentiate between safety issues (non-negotiable: car seats, no hitting) and preference issues (bedtime, screen time, food). 2) For safety issues, communicate firmly with your co-parent. 3) For preference issues, accept that different homes can have different rules. 4) Don't use discipline as a battleground — the child loses. 5) If your co-parent is genuinely unsafe, that's a legal/custody issue, not a parenting strategy issue. 6) 'I can't control what happens at the other house, but I can make THIS house safe, consistent, and loving.' 7) Parallel parenting (minimal communication, separate routines) may be necessary in high-conflict situations.",
  },
  {
    id: "cop-3",
    source: "How to Talk So Kids Will Listen",
    sourceDetails: "Faber & Mazlish — United Front",
    category: "co-parent",
    text: "For maintaining a united parenting front: 1) Discuss and agree on 3-5 core family rules. 2) Support your partner in the moment even if you disagree — discuss it later privately. 3) 'Mom and I have talked about this, and the rule is...' shows the child you're a team. 4) If your partner is being too harsh, step in calmly: 'Let me take this one for a minute.' 5) Regular parent-only check-ins to align on approach. 6) It's OK for children to see you disagree respectfully and resolve it — this models healthy conflict resolution. 7) Don't play good cop / bad cop — it damages both parent-child relationships.",
  },

// --- DEEPER: BABY-SPECIFIC (0-18 months) ---
  {
    id: "baby-1",
    source: "The Wonder Weeks",
    sourceDetails: "Hetty van de Rijt — Mental Leaps",
    category: "tantrums",
    text: "Babies go through predictable 'mental leaps' — periods of rapid brain development around specific ages (5, 8, 12, 15, 19, 23, 26, 31, 37, 46, 55 weeks). Before each leap, babies become fussy, clingy, and cry more. This is NOT colic or illness — it's brain growth. Signs: increased crying, wanting to be held constantly, poor sleep, feeding changes. Response: 1) Offer extra comfort and carrying. 2) Reduce stimulation. 3) Know it will pass in 1-2 weeks. 4) After the leap, the baby will have new skills (smiling, reaching, grasping). The Wonder Weeks app tracks these leaps.",
  },
  {
    id: "baby-2",
    source: "Happiest Baby on the Block",
    sourceDetails: "Dr. Harvey Karp — The 5 S's",
    category: "tantrums",
    text: "For crying babies (0-3 months), the 5 S's activate the calming reflex: 1) SWADDLE — snug wrapping recreates the womb. 2) SIDE or STOMACH position — only for calming, never for sleep (back sleeping for sleep). 3) SHUSH — loud white noise ('shhhhh' close to ear, or white noise machine). 4) SWING — small, jiggly movements (NOT shaking). Support the head. 5) SUCK — pacifier or breast. Works best when all 5 are done together. Most effective in the first 3 months (the 'fourth trimester').",
  },

// --- DEEPER: PERFECTIONISM ---
  {
    id: "perf-1",
    source: "Mindset",
    sourceDetails: "Carol Dweck — Perfectionism in Children",
    category: "confidence",
    text: "Perfectionist children avoid challenges, fear mistakes, and melt down when things aren't perfect. This is NOT healthy ambition — it's anxiety. Response: 1) Model making mistakes openly ('Oops, I burned the dinner. Oh well, we'll try again tomorrow!'). 2) Celebrate effort and improvement over flawless results. 3) Share stories of famous failures (athletes, scientists, inventors who failed repeatedly). 4) Praise the word YET: 'You can't do it perfectly YET.' 5) Reduce pressure language ('You should be getting A's' → 'I love seeing you work hard'). 6) Watch for signs perfectionism is causing distress (refusing to try, erasing work repeatedly, tears over small errors) — if so, consider speaking with a school counselor.",
  },

// --- DEEPER: WHINING ---
  {
    id: "whine-1",
    source: "How to Talk So Kids Will Listen",
    sourceDetails: "Faber & Mazlish — Whining",
    category: "behavior",
    text: "For chronic whining: 1) Don't respond to the whine itself — respond to the content once they use a normal voice. 2) 'I want to help you, but I can't understand whining. Can you use your regular voice?' 3) Don't mock or mimic the whining (humiliating). 4) Check for underlying causes (hunger, tiredness, needing connection). 5) Teach the difference: 'This is your whining voice [demonstrate]. This is your regular voice. Which one helps you get what you want?' 6) Praise normal voice usage specifically ('I love how you asked for that in your regular voice'). 7) Be consistent — giving in to whining even once teaches it works eventually.",
  },

// --- DEEPER: TRANSITION DIFFICULTIES ---
  {
    id: "trans-5",
    source: "No-Drama Discipline",
    sourceDetails: "Siegel & Bryson — Transition Meltdowns",
    category: "routines",
    text: "Children struggle with transitions (stopping play to leave, switching activities, going to bed). Their brains have difficulty shifting attention. Strategies: 1) Advance warnings ('In 5 minutes we're leaving' → '2 minutes' → '1 minute'). 2) Use a visual timer they can SEE. 3) Give a specific task for the transition ('Can you be the one to push the elevator button when we leave?'). 4) Acknowledge the difficulty ('I know it's hard to stop playing — you were having so much fun'). 5) Create transition rituals (a goodbye song for the playground, a special handshake before school). 6) Use 'first/then' language ('First shoes, then playground'). 7) Allow a transitional object ('Let's bring one toy to the car').",
  },

// --- DEEPER: TANTRUM RECOVERY ---
  {
    id: "recover-1",
    source: "Peaceful Parent, Happy Kids",
    sourceDetails: "Dr. Laura Markham — After the Meltdown",
    category: "tantrums",
    text: "After a big meltdown, children are emotionally exhausted and often feel shame. Response: 1) Reconnect physically (hug, hold, gentle touch). 2) Don't rehash the misbehavior immediately — their brain is still recovering. 3) Name what happened gently ('You had some really big feelings earlier'). 4) Validate the feeling, not the behavior ('It's OK to feel angry. It's not OK to hit'). 5) Problem-solve together when everyone is calm ('What could we do differently next time you feel that angry?'). 6) Forgive and move on — don't hold grudges or bring it up later as ammunition. Children who feel forgiven learn to forgive themselves.",
  },

// --- DEEPER: EMOTIONAL COACHING ---
  {
    id: "emo-7",
    source: "Raising an Emotionally Intelligent Child",
    sourceDetails: "John Gottman — Emotion Coaching Steps",
    category: "emotional",
    text: "Gottman's 5 steps of emotion coaching: 1) BE AWARE of the child's emotion. 2) RECOGNIZE it as an opportunity for intimacy and teaching (not an inconvenience). 3) LISTEN empathetically, validating the feeling. 4) HELP LABEL the emotion with words ('It sounds like you feel disappointed'). 5) SET LIMITS while problem-solving ('It's OK to feel angry, but it's not OK to hit. What else can you do when you're angry?'). Parents who emotion-coach raise children with better academic performance, better health, and stronger relationships.",
  },

// --- EXPAND THIN CATEGORIES ---

// === CO-PARENTING (3 → 7) ===
  {
    id: "cop-4",
    source: "Two Homes, One Childhood",
    sourceDetails: "Robert Emery — Parallel Parenting",
    category: "co-parent",
    text: "In high-conflict co-parenting situations, parallel parenting may be necessary: 1) Minimize direct contact (use text/email, not calls). 2) Use a shared digital calendar for schedules. 3) Keep communication strictly about logistics, not emotions or past grievances. 4) Don't attend events together if it causes tension. 5) Each parent follows their own rules at their own house. 6) Children can adapt to two different households if both are peaceful. 7) Over time, as conflict decreases, you may transition to more cooperative co-parenting. The goal isn't friendship — it's peaceful parallel operation.",
  },
  {
    id: "cop-5",
    source: "How to Talk So Kids Will Listen",
    sourceDetails: "Faber & Mazlish — Stepparent Dynamics",
    category: "co-parent",
    text: "For stepparent/blend-parent situations: 1) The biological parent should be the primary disciplinarian initially. 2) The stepparent builds connection FIRST through shared activities, not authority. 3) Don't rush the 'parent' role — let the child set the pace. 4) Never speak negatively about the absent parent. 5) Create new family traditions while respecting old ones. 6) The child may feel loyalty conflicts ('If I like my stepmom, I'm betraying mom'). Acknowledge this: 'It's OK to love both.' 7) Expect 2-4 years for genuine blending. Patience wins.",
  },
  {
    id: "cop-6",
    source: "Peaceful Parent, Happy Kids",
    sourceDetails: "Dr. Laura Markham — Grandparent Boundaries",
    category: "co-parent",
    text: "When grandparents undermine your parenting (giving sweets when you said no, contradicting rules, buying excessive gifts): 1) Assume good intentions — they love the child. 2) Have the conversation privately, not in front of the child. 3) Be specific: 'We're limiting sugar before dinner. Can you help us with that?' 4) Give them a role they CAN control ('You're the best at bedtime stories'). 5) For safety issues (car seats, medication), be firm. For preference issues (extra treats), consider letting it go. 6) 'Different houses, different rules' is OK for grandparents if core safety is maintained.",
  },
  {
    id: "cop-7",
    source: "Triple P (Positive Parenting Program)",
    sourceDetails: "Triple P — Consistent Caregivers",
    category: "co-parent",
    text: "When multiple caregivers are involved (nanny, grandparents, daycare): 1) Write down 3-5 core rules that ALL caregivers follow (safety, kindness, no hitting). 2) Accept that style differences are OK as long as core values align. 3) Communicate expectations clearly in writing for nannies/childminders. 4) Don't micromanage how others care for your child — if they're safe and loving, minor differences are fine. 5) Debrief regularly ('How did today go? Anything challenging?'). 6) Children are adaptable — they learn different people have different styles, just like school vs home.",
  },

// === SCHOOL & LEARNING (3 → 7) ===
  {
    id: "school-4",
    source: "How to Talk So Kids Will Listen",
    sourceDetails: "Faber & Mazlish — Teacher Conflicts",
    category: "school",
    text: "When your child has a conflict with a teacher: 1) Listen to your child's perspective without immediately judging either side. 2) Don't criticize the teacher in front of the child ('Your teacher is wrong') — this undermines their school experience. 3) Schedule a meeting with the teacher — approach as a collaborator, not an adversary ('I wanted to understand what's happening'). 4) Share what you see at home ('She's been anxious about school on Sundays'). 5) Ask what they see in class. 6) Co-create a plan together. 7) If the situation doesn't improve after reasonable attempts, consider speaking with the head teacher or exploring other options.",
  },
  {
    id: "school-5",
    source: "Mindset",
    sourceDetails: "Carol Dweck — Math Anxiety and Learning Blocks",
    category: "school",
    text: "When a child says 'I'm bad at [subject]' or 'I can't do math': 1) Reframe: 'You can't do it YET. Math is a skill you build, not a talent you're born with.' 2) Investigate whether there's a specific gap (fractions, times tables) vs a general belief. 3) Reduce pressure — anxiety blocks learning. 4) Find the child's learning style (visual, hands-on, verbal). 5) Consider tutoring if the gap is large — falling behind compounds. 6) Praise the PROCESS: 'I saw you try three different ways to solve that — that's smart thinking.' 7) Share that brains grow like muscles — effort literally creates new neural pathways.",
  },
  {
    id: "school-6",
    source: "Untangled",
    sourceDetails: "Lisa Damour — Academic Pressure",
    category: "school",
    text: "For children overwhelmed by academic pressure: 1) Distinguish between healthy challenge and harmful stress. Healthy challenge = hard but manageable. Harmful stress = chronic anxiety, sleep loss, tears. 2) Help them prioritize — not every grade matters equally. 3) Ensure adequate sleep (sleep deprivation destroys academic performance). 4) Reduce extracurricular overload. 5) If they're perfectionist about grades, explicitly lower the stakes: 'I care about you, not your grades.' 6) Watch for signs of burnout: apathy, procrastination, cheating, school refusal. 7) Consider whether the school environment is the right fit.",
  },
  {
    id: "school-7",
    source: "Raising Good Humans",
    sourceDetails: "Hunter Clarke-Fields — School Anxiety",
    category: "school",
    text: "For Sunday night anxiety / Monday morning stomach aches about school: 1) Validate ('I can see Sundays feel hard for you'). 2) Investigate gently — is it academic, social, or general anxiety? 3) Make mornings calm and predictable (clothes out Sunday night, easy breakfast). 4) Give something to look forward to ('After school Tuesday, we're going to the park'). 5) Don't let avoidance become a pattern — the more school they miss, the harder it is to return. 6) Work with the school counselor. 7) If physical symptoms persist, check with pediatrician to rule out medical issues, then treat as anxiety.",
  },

// === SCREEN TIME (3 → 7) ===
  {
    id: "screen-4",
    source: "AAP Media Guidelines",
    sourceDetails: "American Academy of Pediatrics — Content Quality",
    category: "screen",
    text: "Content matters more than duration. Guidelines: 1) Choose high-quality, age-appropriate, ad-free content (Common Sense Media for reviews). 2) Avoid fast-paced content (rapid scene changes overstimulate young brains). 3) Avoid content with commercials (advertising to children under 8 is manipulative and unhealthy). 4) Co-view when possible — talk about what you're watching ('Why do you think that character did that?'). 5) Prefer interactive content (apps that require engagement) over passive viewing. 6) Avoid background TV — it disrupts play and language development. 7) Content with emotional depth (Daniel Tiger, Bluey) can teach real skills.",
  },
  {
    id: "screen-5",
    source: "Dopamine Nation",
    sourceDetails: "Anna Lembke — Screen Dependency",
    category: "screen",
    text: "Signs that screen use may be problematic: 1) Child loses interest in ALL other activities. 2) Meltdowns happen EVERY time screens are removed (not just sometimes). 3) Screen time is increasing over time (tolerance). 4) Child sneaks screens or lies about usage. 5) Sleep, schoolwork, or friendships are suffering. 6) Child becomes aggressive when denied screens. Response: 1) Don't panic — this is common and fixable. 2) Gradually reduce, don't go cold turkey. 3) Fill the gap with high-connection activities (outdoor time, cooking together, reading). 4) Create tech-free zones and stick to them. 5) Expect 1-2 weeks of protest — it WILL pass. 6) Model healthy use yourself.",
  },
  {
    id: "screen-6",
    source: "Peaceful Parent, Happy Kids",
    sourceDetails: "Dr. Laura Markham — Gaming and Boys",
    category: "screen",
    text: "For children obsessed with video games: 1) Understand that gaming provides achievement, social connection, and escape — real needs. 2) Don't make gaming the enemy — make it a negotiated part of life. 3) Set clear time limits BEFORE they start playing ('You have 30 minutes'). 4) Use a timer they can see. 5) Give a 5-minute warning. 6) Have a compelling next activity ready. 7) Validate the loss ('I know you wanted to finish that level — that's frustrating'). 8) Connect with them about the game ('Show me what you built in Minecraft') — this builds trust and makes transitions easier.",
  },
  {
    id: "screen-7",
    source: "AAP Media Guidelines",
    sourceDetails: "American Academy of Pediatrics — Social Media",
    category: "screen",
    text: "For pre-teens/teens and social media: 1) Wait as long as possible before allowing social media (ideally 13+, per platform rules). 2) Know the platforms they use and how they work. 3) Create a family agreement: no phones in bedrooms overnight, no phones at meals, open-password policy. 4) Talk about what they see ('What's the best thing you saw today? The worst?'). 5) Watch for signs of negative impact: mood changes after use, comparison/anxiety, sleep disruption, FOMO. 6) Discuss digital footprint and online safety explicitly. 7) Follow them on platforms (don't comment, just monitor). 8) Model healthy phone habits yourself.",
  },

// === SOCIAL SKILLS (3 → 7) ===
  {
    id: "social-4",
    source: "How to Talk So Kids Will Listen",
    sourceDetails: "Faber & Mazlish — Making Friends",
    category: "social",
    text: "For children struggling to make friends: 1) Don't label them as shy ('She's shy') — this becomes a self-fulfilling identity. Instead: 'She likes to watch before she joins in.' 2) Arrange one-on-one playdates in your home where the child feels confident. 3) Practice social scripts at home: 'Hi, can I play?', 'That looks fun!', 'My turn?' 4) Arrive early to social settings so the child adjusts before others arrive. 5) Don't force interaction — parallel play is developmentally normal. 6) Find activities aligned with their interests (Lego club, art class) where friendships form naturally. 7) Read books about friendship ('Making Friends Is an Art', 'The Invisible Boy').",
  },
  {
    id: "social-5",
    source: "Siblings Without Rivalry",
    sourceDetails: "Adele Faber — When Your Child Is Excluded",
    category: "social",
    text: "When your child is excluded or left out: 1) Validate the pain ('That really hurts — I understand'). 2) Don't minimize ('They're not worth your time anyway'). 3) Don't call other parents to fix it (unless there's bullying). 4) Help them identify what happened ('What do you think was going on?'). 5) Brainstorm responses ('What could you say or do next time?'). 6) Build confidence through other friendships and activities. 7) If exclusion is persistent and targeted, talk to the school — it may be relational bullying. 8) Ensure they have at least ONE good friend — that's more protective than being popular.",
  },
  {
    id: "social-6",
    source: "Raising Good Humans",
    sourceDetails: "Hunter Clarke-Fields — Empathy Development",
    category: "social",
    text: "To develop empathy in children: 1) Model empathy openly ('I wonder how that made her feel'). 2) Point out emotions in others ('Look at that baby's face — she looks happy'). 3) Read books and discuss characters' feelings ('How do you think the Gruffalo felt?'). 4) Use real moments ('When you shared your toy, your brother felt so loved'). 5) Don't force apologies ('Say sorry!') — instead guide: 'Your sister is crying. How do you think she feels? What could make it better?' 6) Practice gratitude together daily. 7) Get a pet or involve them in caring for others.",
  },
  {
    id: "social-7",
    source: "Untangled",
    sourceDetails: "Lisa Damour — Girl Friendships and Drama",
    category: "social",
    text: "For girls and friendship drama (common ages 8-14): 1) Listen fully before advising. 2) Don't overreact or call other parents immediately. 3) Help her distinguish between a real conflict and a misunderstanding. 4) Teach direct communication ('Can you tell her how you felt when she said that?'). 5) Role-play what to say. 6) Don't try to be her friend's parent — guide YOUR child. 7) Know that girls' friendship drama is developmental — they're learning to navigate relationships. 8) If there's systematic exclusion, rumors, or cyberbullying, involve the school.",
  },

// === TOILET TRAINING (3 → 7) ===
  {
    id: "toilet-4",
    source: "AAP Toilet Training Guide",
    sourceDetails: "American Academy of Pediatrics — Night Training",
    category: "toilet",
    text: "Nighttime dryness is neurological, not behavioral — the child must produce enough anti-diuretic hormone to concentrate urine overnight. This typically happens between ages 3-7. Do NOT: wake a child to toilet (disrupts sleep and doesn't speed up development), restrict fluids excessively, or punish for wet nights. DO: use training pants at night, protect the mattress, have the child help with morning cleanup (not as punishment — as responsibility). If a child who was dry at night starts wetting again, check for UTI, constipation, or emotional stressors. Night wetting after age 7 may warrant evaluation.",
  },
  {
    id: "toilet-5",
    source: "Oh Crap! Potty Training",
    sourceDetails: "Jamie Glowacki — Resistance and Refusal",
    category: "toilet",
    text: "For children who refuse the potty: 1) Check that they're truly ready (see readiness signs). 2) Remove pressure entirely — stop asking, stop reminding, stop rewarding. 3) Leave the potty visible and available without comment. 4) Let them see you or siblings use the toilet (modeling). 5) Address constipation — painful pooping makes children avoid the potty. If needed, consult pediatrician about stool softeners. 6) Try a different potty (some kids prefer the big toilet with a seat insert). 7) Take a break for 2-4 weeks and try again with zero pressure. Resistance often melts when the power struggle disappears.",
  },
  {
    id: "toilet-6",
    source: "AAP Toilet Training Guide",
    sourceDetails: "American Academy of Pediatrics — Constipation and Holding",
       category: "toilet",
    text: "If a child is holding their poop: THIS IS A MEDICAL ISSUE. Holding causes stool to build up, stretch the colon, and become painful to pass. This creates a vicious cycle: hold → harder stool → more painful → hold more. Signs: crossing legs, stiffening, hiding to poop, skid marks in underwear, large painful poops. Response: 1) Consult your pediatrician — this may require stool softeners (Miralax/Movicol). 2) Do NOT punish or shame. 3) Increase fiber and fluids. 4) Regular toilet-sitting times (after meals, when the gastrocolic reflex is active). 5) Use a foot stool so knees are above hips (better position). 6) This takes weeks to resolve — be patient.",
  },
  {
    id: "toilet-7",
    source: "Oh Crap! Potty Training",
    sourceDetails: "Jamie Glowacki — Potty Training While at Daycare",
    category: "toilet",
    text: "For potty training while in daycare/school: 1) Communicate with caregivers — they need to know you're training and what method you're using. 2) Send multiple changes of clothes. 3) Dress the child in easy-to-remove clothes (elastic waists, no onesies, no overalls). 4. Ask them to take the child at regular intervals. 5) Be consistent between home and daycare — same language ('potty' vs 'toilet'), same approach. 6) Expect more accidents at daycare than at home (more distractions, more transitions). 7. Don't revert to nappies on daycare days — consistency matters.",
  },

// === SCALE TO 10: ANGER (4 → 10) ===
  {
    id: "anger-5",
    source: "No-Drama Discipline",
    sourceDetails: "Siegel & Bryson — Verbal Aggression",
    category: "anger",
    text: "When a child uses hurtful words ('I hate you!', 'You're the worst mom!'): 1) Don't take it personally — it's their distress speaking, not their true feelings. 2) Don't punish the words — that teaches them to suppress rather than express. 3) Reflect the underlying emotion: 'You're really angry at me right now.' 4) Set limits on actions, not feelings: 'It's OK to be angry. It's not OK to hit or call names.' 5) After they calm down: 'You said some angry words earlier. Can you tell me what you were really feeling?' 6) Teach alternative expressions: 'When I'm angry, I say I need a break.'",
  },
  {
    id: "anger-6",
    source: "The Explosive Child",
    sourceDetails: "Ross Greene — Meltdown Prevention",
    category: "anger",
    text: "Preventing aggressive meltdowns: 1) Identify triggers (transitions, hunger, demanding tasks, sensory overload). 2) Track patterns for 1-2 weeks. 3) Proactively address known triggers before they escalate. 4) Teach the child warning signs: 'When I feel my body getting tight, I need a break.' 5) Create a calm-down space the child chooses to use (not sent to). 6) Teach relaxation: deep breaths, counting, squeezing a pillow. 7) Catch them coping well and praise specifically. 8) For chronic aggression, work with a child psychologist — it's a skill deficit, not a character flaw.",
  },
  {
    id: "anger-7",
    source: "Peaceful Parent, Happy Kids",
    sourceDetails: "Dr. Laura Markham — Sibling Violence",
    category: "anger",
    text: "When one sibling is repeatedly aggressive toward another: 1) Treat it as a safety issue — separate them immediately and consistently. 2) Don't force apologies — they breed resentment. 3) Spend individual time with the aggressive child — aggression often signals disconnection. 4) Investigate the trigger: is the younger sibling invading their space? Taking their things? 5) Teach the older one to ask for help instead of lashing out. 6) Create protected spaces/belongings for each child. 7) Supervise closely during high-risk times (tired, hungry, transitions). 8) If aggression is severe or persistent, seek professional support.",
  },
  {
    id: "anger-8",
    source: "Triple P (Positive Parenting Program)",
    sourceDetails: "Triple P — Teaching Anger Management",
    category: "anger",
    text: "Teaching children to manage anger: 1) Help them recognize body signals (clenched fists, hot face, fast heartbeat). 2) Create an 'anger thermometer' together (1=annoyed, 5=furious). 3) Teach coping strategies at each level: 1-2 = take deep breaths, 3 = squeeze a pillow, 4 = go to calm space, 5 = ask for help. 4) Practice when NOT angry — role-play scenarios. 5) Model your own anger management aloud ('I'm feeling frustrated, I'm going to take a deep breath'). 6) Praise anger management efforts: 'I noticed you stopped and took a breath — that was excellent.'",
  },
  {
    id: "anger-9",
    source: "Raising Good Humans",
    sourceDetails: "Hunter Clarke-Fields — Destructive Play",
    category: "anger",
    text: "Channel aggressive energy safely: 1) Roughhousing — supervised wrestling, chasing, pillow fights releases physical energy and builds connection. 2) Tearing paper or cardboard. 3) Pounding play-dough or clay. 4) Throwing safe objects at targets (balls into a bucket). 5) Running laps or jumping on a trampoline. 6) Punching a pillow or punching bag. 7) 'Anger drawing' — scribbling hard with crayons. These aren't rewards for aggression — they're teaching that big energy is acceptable when expressed safely.",
  },
  {
    id: "anger-10",
    source: "How to Talk So Kids Will Listen",
    sourceDetails: "Faber & Mazlish — When Anger Is Aimed at You",
    category: "anger",
    text: "When your child is angry AT you specifically: 1) Listen without defending yourself ('You're really angry that I said no'). 2) Don't counter-attack ('Well, you made me angry too!'). 3) Don't withdraw love as punishment — this is terrifying for children. 4) Hold the boundary calmly: 'I understand you're furious. The answer is still no.' 5) Offer a way to express it: 'You can be mad at me. You can draw an angry picture. You can't hit.' 6) After the storm: reconnect. 'I love you even when you're angry at me. Always.'",
  },

// === SCALE TO 10: CONFIDENCE (4 → 10) ===
  {
    id: "conf-4",
    source: "How to Talk So Kids Will Listen",
    sourceDetails: "Faber & Mazlish — Overcoming Fear of Failure",
    category: "confidence",
    text: "For children afraid to try new things: 1) Normalize the fear ('Lots of people feel nervous before trying something new'). 2) Break it into tiny steps ('Let's just go watch the swimming lesson today — you don't have to get in'). 3) Share your own experiences ('I was scared to start my new job, but I tried and it got easier'). 4) Don't push — let them watch until they're ready. 5) Celebrate ANY attempt, no matter how small. 6) Avoid 'You'll be fine!' (dismisses feelings) — instead 'I can see you're nervous. I'll be right here.' 7) Confidence comes from overcoming challenges, not from avoiding them.",
  },
  {
    id: "conf-5",
    source: "Mindset",
    sourceDetails: "Carol Dweck — Resilience After Failure",
    category: "confidence",
    text: "When a child experiences failure or rejection (didn't make the team, failed a test): 1) Validate the disappointment ('That's really hard. I can see how much you wanted it'). 2) Don't immediately reframe ('It's their loss!') — let them feel the feeling first. 3) After they've processed: 'What did you learn from this?' 4) Share failure stories from your own life. 5) 'What would you do differently next time?' 6) Don't blame others or the system (teaches victim mentality). 7) Remind them that one failure doesn't define them. 8) Help them find the next opportunity to try.",
  },
  {
    id: "conf-6",
    source: "Peaceful Parent, Happy Kids",
    sourceDetails: "Dr. Laura Markham — Comparison and Self-Worth",
    category: "confidence",
    text: "When a child compares themselves negatively to others ('Everyone is better than me'): 1) Validate ('It can feel like everyone else is doing better'). 2) Don't dismiss ('That's not true, you're great!'). 3) Help them identify their own strengths ('What do YOU think you're good at?'). 4) Reduce competitive environments if possible. 5) Celebrate individual progress, not comparison ('You ran faster today than last month — that's what matters'). 6) Limit social media exposure for older kids. 7) Model self-acceptance — don't compare yourself to other parents in front of them.",
  },
  {
    id: "conf-7",
    source: "Raising Good Humans",
    sourceDetails: "Hunter Clarke-Fields — Body Positivity",
    category: "confidence",
    text: "For building positive body image: 1) Never comment negatively on your own body in front of your child ('I look fat in this'). 2) Don't comment on their body size, even positively ('You're so skinny!' is also problematic). 3) Focus on what bodies DO ('Your legs are so strong for running!'). 4) Don't label foods as 'good' or 'bad' — all foods fit. 5) Expose them to diverse body types in media. 6) For older children, discuss media manipulation and filters. 7) Teach that worth is not tied to appearance. 8) Watch for signs of body image distress, especially in pre-teens.",
  },
  {
    id: "conf-8",
    source: "How to Talk So Kids Will Listen",
    sourceDetails: "Faber & Mazlish — Giving Genuine Recognition",
    category: "confidence",
    text: "Effective praise that builds real confidence: 1) Describe what you SEE, not what you think ('I see you used three different colors in that painting' not 'It's beautiful!'). 2) Describe the effort ('You worked on that puzzle for 20 minutes without giving up'). 3. Describe the impact ('Your sister smiled when you shared your snack'). 4) Ask questions ('How did you figure that out?'). 5) Use 'I' statements ('I noticed...' 'I appreciate...'). 6) Avoid global labels ('You're amazing!' — creates pressure). Specific, descriptive recognition builds genuine self-awareness.",
  },
  {
    id: "conf-9",
    source: "Mindset",
    sourceDetails: "Carol Dweck — Confidence Through Contribution",
    category: "confidence",
    text: "Children build confidence through meaningful contribution. Strategies: 1) Give real responsibilities (not fake jobs) — feeding pets, setting the table, helping cook. 2) Let them solve real problems ('The laundry basket is too heavy — how could we solve this?'). 3) Ask their opinion on family decisions ('Where should we go this weekend?'). 4) Let them teach you something ('Show me how to play that game'). 5) Give them a leadership role with younger siblings or pets. 6) Celebrate their contribution to the family ('When you set the table, it helps the whole family'). Confidence = 'I matter. I'm capable. I contribute.'",
  },
  {
    id: "conf-10",
    source: "The Whole-Brain Child",
    sourceDetails: "Siegel & Bryson — Reframing Negative Self-Talk",
    category: "confidence",
    text: "When a child says 'I'm stupid' or 'I can't do anything right': 1) Don't argue ('No you're not!') — this dismisses their feeling. 2) Get curious: 'What happened that made you feel that way?' 3) Help them reframe: 'You're having a hard time with this math problem. That doesn't mean you're stupid. It means this is a challenge right now.' 4) Teach the power of 'yet' ('You can't do it YET'). 5) Remind them of past successes ('Remember when you couldn't tie your shoes, and now you can?'). 6) Model positive self-talk aloud ('I'm frustrated with this recipe, but I'll figure it out').",
  },

// === SCALE TO 10: PARENT SELF-CARE (4 → 10) ===
  {
    id: "parent-5",
    source: "Peaceful Parent, Happy Kids",
    sourceDetails: "Dr. Laura Markham — Daily Recharging",
    category: "parent",
    text: "Practical daily recharging for parents: 1) The 10-minute rule — spend 10 minutes daily on something just for you (tea, music, stretching). 2) Transition rituals — 5 minutes in the car before going inside, or changing clothes before parenting mode. 3) Micro-breaks — 3 deep breaths before responding to a child's call. 4) The 'good enough' principle — 70% effort is sufficient. Perfection is the enemy of presence. 5) Connection over correction — when you feel yourself getting angry, reconnect with your child first. 6) Sleep is non-negotiable — everything is harder when you're exhausted.",
  },
  {
    id: "parent-6",
    source: "Raising Good Humans",
    sourceDetails: "Hunter Clarke-Fields — Mindful Parenting",
    category: "parent",
    text: "Mindfulness for parents in the moment: 1) S.T.O.P. — Stop what you're doing. Take a breath. Observe what's happening in your body. Proceed with awareness. 2) When triggered, notice your body: jaw clenched, chest tight, fists balled. This physical awareness is your early warning system. 3) Name your emotion: 'I'm feeling frustrated right now.' Saying it aloud models emotional awareness for your child. 4) One conscious breath changes your response. 5) You don't have to fix everything right now. 6) Parenting is the hardest job and the most important one. Give yourself grace.",
  },
  {
    id: "parent-7",
    source: "Self-Compassion",
    sourceDetails: "Dr. Kristin Neff — Guilt vs Compassion",
    category: "parent",
    text: "Parental guilt is universal but often misplaced. There's a difference between: LEARNING guilt ('I yelled and I want to do better') which leads to growth, and SHAME guilt ('I'm a terrible parent') which leads to despair. Transform shame into learning: 1) Notice the shame ('I'm having the thought that I'm a bad parent'). 2) Recognize you're not alone — every parent feels this. 3) Ask 'What would I say to a friend in this situation?' 4) Say that to yourself. 5) Make a repair plan. 6) Move forward. Guilt without growth is just suffering.",
  },
  {
    id: "parent-8",
    source: "Triple P (Positive Parenting Program)",
    sourceDetails: "Triple P — Relationship Maintenance",
    category: "parent",
    text: "Maintaining your relationship with your partner while parenting: 1) Protect couple time — even 15 minutes daily without kids/screens. 2) Don't make your partner the villain ('Your father said no, talk to him'). 3) Divvy up tasks based on strengths, not default gender roles. 4) Check in weekly: 'How are YOU doing? Not the kids — you.' 5) Don't keep score on who does more. 6) Present a united front to the kids, resolve disagreements privately. 7) Your relationship is the model your children will carry into their own future relationships. Nurture it.",
  },
  {
    id: "parent-9",
    source: "Peaceful Parent, Happy Kids",
    sourceDetails: "Dr. Laura Markham — Recognizing Postnatal Depression",
    category: "parent",
    text: "Signs of postnatal depression (beyond 'baby blues'): persistent low mood lasting more than 2 weeks, inability to feel joy, disconnect from baby, excessive anxiety about baby's health, intrusive scary thoughts, exhaustion beyond normal tiredness, feeling worthless or guilty, difficulty bonding. This affects up to 1 in 5 mothers and 1 in 10 fathers. It is NOT weakness and NOT your fault. Response: 1) Contact your GP, health visitor, or midwife TODAY. 2) Tell someone you trust. 3) Accept help with baby care. 4) It's highly treatable — therapy, medication, or both. 5) In crisis: call 111 (UK) or 988 (US).",
  },
  {
    id: "parent-10",
    source: "How to Talk So Kids Will Listen",
    sourceDetails: "Faber & Mazlish — Apologizing to Your Child",
    category: "parent",
    text: "How to genuinely apologize to your child: 1) Name what happened specifically ('I yelled at you earlier when you spilled the milk'). 2) Own it without excuses ('I was frustrated, but yelling wasn't fair to you'). 3) Don't add a 'but' that blames them ('...but you shouldn't have spilled it'). 4) Express genuine regret ('I'm sorry. You didn't deserve to be yelled at'). 5) State how you'll try to handle it differently. 6) Ask: 'Do you want to talk about how it felt?' 7) Reconnect physically (hug, hand on shoulder). This models accountability and repairs trust.",
  },

// === SCALE TO 10: SIBLING (4 → 10) ===
  {
    id: "sib-5",
    source: "Siblings Without Rivalry",
    sourceDetails: "Adele Faber — Age Gap Dynamics",
    category: "sibling",
    text: "Managing different age gaps: SMALL GAP (under 2 years): They're developmentally similar but compete intensely for the same things. Give separate one-on-one time and individual possessions. MEDIUM GAP (2-4 years): Older child may feel displaced. Acknowledge their feelings ('It's hard when the baby needs so much attention'). LARGE GAP (5+ years): Different worlds, less direct conflict but older may feel burdened by responsibility. Don't make the older one a third parent. Each gap has benefits — close in age means built-in playmate; large gap means older child has space to be themselves.",
  },
  {
    id: "sib-6",
    source: "Peaceful Parent, Happy Kids",
    sourceDetails: "Dr. Laura Markham — Shared Rooms",
    category: "sibling",
    text: "When siblings share a room: 1) Give each child defined personal space (their bed, their shelf, their drawer). 2) Respect different sleep needs — younger children may need earlier bedtimes. 3) Use white noise to reduce disturbances. 4) Create a 'privacy please' signal (a sock on the door). 5) Don't make the older child responsible for the younger one's sleep. 6. If room sharing causes significant conflict or sleep problems, consider alternative arrangements, even temporary ones.",
  },
  {
    id: "sib-7",
    source: "How to Talk So Kids Will Listen",
    sourceDetails: "Faber & Mazlish — Teaching Conflict Resolution",
    category: "sibling",
    text: "Step-by-step conflict coaching for siblings: 1) Sportscast: 'I see two kids who both want the blue car.' 2) Acknowledge each perspective separately. 3) Express confidence: 'I know you two can work this out.' 4) Offer a timer for turn-taking if needed. 5) If physical: intervene immediately ('No hitting. Let me help you use words'). 6) Later, teach negotiation: trading, taking turns, finding something else. 7) With practice, children learn to do this themselves. Your goal is to coach, not referee.",
  },
  {
    id: "sib-8",
    source: "Siblings Without Rivalry",
    sourceDetails: "Adele Faber — When to Intervene",
    category: "sibling",
    text: "When to intervene in sibling conflict: ALWAYS if there's physical aggression, if one child is significantly younger/smaller, or if there's a pattern of bullying. DON'T intervene for minor bickering — let them practice resolving it. When you do intervene: 1) Separate first if needed. 2) Wait until both are calm. 3) Hear each side without interrupting. 4) Reflect each child's perspective. 5) Ask for their solutions. 6) Only suggest if they're stuck. 7) Follow up: 'How is that working?'",
  },
  {
    id: "sib-9",
    source: "Peaceful Parent, Happy Kids",
    sourceDetails: "Dr. Laura Markham — Birth Order Effects",
    category: "sibling",
    text: "Birth order affects personality but isn't destiny. Eldest children: often responsible, achievement-oriented, may feel dethroned by siblings. Middle children: peacemakers, feel squeezed, may act out for attention. Youngest: often babied, may feel they can't measure up. Only children: mature, self-sufficient, may be hard on themselves. Response: 1) Give each child individual identity outside their birth order. 2) Don't assign roles ('the responsible one,' 'the baby'). 3) Give the youngest real responsibilities. 4) Give the middle child special one-on-one time. 5) Let the eldest be a kid, not a third parent.",
  },
  {
    id: "sib-10",
    source: "Siblings Without Rivalry",
    sourceDetails: "Adele Faber — Individual Identity",
    category: "sibling",
    text: "Protecting each child's individuality: 1) Never compare ('Why can't you be more like your sister?'). 2) Don't label ('the smart one,' 'the athletic one,' 'the difficult one'). 3) Spend one-on-one time with each child doing what THEY love. 4) Photograph them individually, not always together. 5) Celebrate individual milestones separately. 6) Give each child private space and private belongings. 7) Allow separate friend groups and activities. 8) Each child should feel they are your favorite — for completely different reasons.",
  },

// === SCALE TO 10: TEENAGERS (4 → 10) ===
  {
    id: "teen-5",
    source: "Untangled",
    sourceDetails: "Lisa Damour — Teen Sleep",
    category: "teen",
    text: "Teenagers' circadian rhythms naturally shift 2 hours later — they biologically can't fall asleep early AND need 8-10 hours. This isn't laziness; it's biology. Strategies: 1) Advocate for later school start times. 2) No screens 1 hour before bed (blue light suppresses melatonin). 3) Consistent wake time, even on weekends (variation should be <2 hours). 4) Morning sunlight exposure helps reset the clock. 5) Avoid caffeine after noon. 6) Let them nap on weekends (max 30 min). 7) Sleep deprivation in teens mimics ADHD symptoms and depression. If mood/academic issues arise, check sleep first.",
  },
  {
    id: "teen-6",
    source: "How to Talk So Teens Will Listen",
    sourceDetails: "Faber & Mazlish — Teen Friendships",
    category: "teen",
    text: "When you don't like your teen's friends: 1) Don't ban the friendship — it will make it more appealing (Romeo and Juliet effect). 2) Welcome the friend into your home — observe and influence the environment. 3) Ask curious, not judgmental, questions: 'What do you like about hanging out with them?' 4) Address specific behaviors, not the person: 'I'm concerned about the drinking when you're out.' 5) If the friend is genuinely dangerous (criminal activity, violence), that's different — set hard boundaries. 6) Trust that if your relationship is strong, your values will ultimately win out. 7) Keep the door open — 'If you ever need me, I'll come, no questions asked.'",
  },
  {
    id: "teen-7",
    source: "Untangled",
    sourceDetails: "Lisa Damour — Teen Mental Health",
    category: "teen",
    text: "Signs your teen needs professional support: 1) Persistent sadness or irritability lasting more than 2 weeks. 2) Withdrawal from friends and activities they used to love. 3) Major changes in eating or sleeping habits. 4) Declining grades that don't bounce back. 5) Talk of self-harm, death, or 'not wanting to be here.' 6) Substance use that affects daily life. 7) Extreme mood swings beyond normal teen drama. 8) Unexplained physical complaints (headaches, stomach aches). Response: Contact your GP or a child psychologist. Early intervention works. Teens rarely ask for help directly — take changes seriously.",
  },
  {
    id: "teen-8",
    source: "How to Talk So Teens Will Listen",
    sourceDetails: "Faber & Mazlish — Teen Rebellion",
    category: "teen",
    text: "Teen rebellion is developmental — they're building a separate identity. Healthy rebellion: different clothes, music, opinions, pushing boundaries. Unhealthy rebellion: risky behaviors, self-harm, breaking safety rules. Response to healthy rebellion: 1) Pick your battles — hair grows back, piercings close. 2) Be curious, not critical ('Tell me about this band'). 3) Maintain safety boundaries: no drugs, no dangerous situations, always know where they are. 4) Understand that rejecting your values temporarily is how they figure out their OWN values. 5) Stay connected even when they push you away. 6) They almost always come back to your values in their 20s.",
  },
  {
    id: "teen-9",
    source: "Raising Good Humans",
    sourceDetails: "Hunter Clarke-Fields — Teen Trust",
    category: "teen",
    text: "Building and maintaining trust with your teenager: 1) Keep their confessions confidential (unless safety risk). If you tell their secrets to other adults, they'll stop sharing. 2) Don't overreact to what they tell you — if you freak out, they won't tell you next time. 3. When they come to you with a problem: ask 'Do you want me to help, or just listen?' 4) Respect their privacy — knock before entering their room. 5) Follow through on your promises. 6) Admit when you're wrong. 7) Trust must be mutual — show them you trust them by giving appropriate freedom.",
  },
  {
    id: "teen-10",
    source: "Untangled",
    sourceDetails: "Lisa Damour — Teen Romantic Relationships",
    category: "teen",
    text: "When your teen starts dating: 1) Stay calm — your reaction sets the tone for future communication. 2) Welcome the partner into your home. 3) Talk about consent and respect explicitly ('How do you know if someone wants to kiss you?'). 4) Discuss digital safety (nude photos are illegal for minors, even consensual). 5) Keep the conversation ongoing, not one big talk. 6) Watch for red flags: controlling behavior, isolation from friends, extreme jealousy, unexplained bruises. 7) Ensure they know: 'You can always call me, any time, no judgment, no lecture — I'll just come get you.'",
  },

// === SCALE TO 10: TRANSITIONS (4 → 10) ===
  {
    id: "trans-6",
    source: "Zero to Three",
    sourceDetails: "ZERO TO THREE — Starting School",
    category: "transition",
    text: "For starting school/nursery: 1) Visit the school together before the first day. 2) Read books about starting school ('The Kissing Hand,' 'Llama Llama Misses Mama'). 3) Practice the morning routine for a week before. 4) Let them choose their backpack/lunchbox. 5) On the first day: keep goodbye short, confident, and warm. Don't linger. 6) Expect exhaustion and moodiness for the first few weeks — they're processing so much. 7) Don't schedule after-school activities initially — they need downtime. 8. Ask specific questions: 'Who did you sit with at lunch?' not 'How was school?'",
  },
  {
    id: "trans-7",
    source: "The Whole-Brain Child",
    sourceDetails: "Siegel & Bryson — Welcoming a New Sibling",
    category: "transition",
    text: "Preparing a child for a new sibling: 1) Tell them when you're showing (around 12 weeks). 2) Read books about becoming a big brother/sister. 3) Let them help prepare ('Which blanket should we get for the baby?'). 4) Give them a 'big sibling gift' when the baby arrives. 5) Ensure each parent has one-on-one time with the older child daily. 6) Don't blame the baby ('The baby needs me') — own your limits ('I need to rest right now'). 7) Expect regression (toileting, sleep, speech) — it's normal and temporary. 8) Let them express negative feelings ('Sometimes the baby is really annoying, isn't it?').",
  },
  {
    id: "trans-8",
    source: "Two Homes, One Childhood",
    sourceDetails: "Robert Emery — Children and Remarriage",
    category: "transition",
    text: "When remarrying/blending families: 1) Take it slowly — children need time to adjust to a new person. 2) The biological parent should be primary disciplinarian for at least a year. 3) Create new traditions while respecting old ones. 4) Don't expect instant love — respectful coexistence is the first goal. 5) Each child processes differently based on age, temperament, and history. 6) Family counseling during the transition can help enormously. 7) Expect 2-4 years for genuine family integration. 8) Children may have loyalty conflicts ('If I like my stepdad, am I betraying Dad?'). Normalize and acknowledge these.",
  },
  {
    id: "trans-9",
    source: "Zero to Three",
    sourceDetails: "ZERO TO THREE — Loss of a Pet",
    category: "transition",
    text: "When a family pet dies: 1) Be honest ('Fluffy died. Her body stopped working'). Don't say 'went to sleep' or 'ran away.' 2) Let them see you grieve — it models healthy mourning. 3) Don't replace the pet immediately — children need to process the loss. 4) Create a small memorial (draw pictures, share memories, plant something). 5) Expect questions about death to come up repeatedly over weeks. 6) Regression (sleep, toileting) is normal. 7) Books: 'The Tenth Good Thing About Barney,' 'I'll Always Love You.' 8) For older children, involve them in decisions about burial or memorials.",
  },
  {
    id: "trans-10",
    source: "Untangled",
    sourceDetails: "Lisa Damour — Transition to Secondary School",
    category: "transition",
    text: "For the move to secondary school (age 11): 1) This is one of the most stressful transitions in childhood — bigger school, multiple teachers, older peers, more homework. 2) Acknowledge the challenge ('Secondary school is a big change — how are you feeling about it?'). 3) Help with organization (planners, locker practice, packing the night before). 4) Expect tiredness and mood swings for the first term. 5. Keep weekends low-pressure initially. 6) If they're struggling socially, help them identify one or two friends to connect with. 7) Communicate with form tutors early if there are concerns. 8) It typically takes a full term to settle in.",
  },
  {
    id: "trans-11",
    source: "How to Talk So Kids Will Listen",
    sourceDetails: "Faber & Mazlish — Moving to a New School",
    category: "transition",
    text: "When changing schools mid-year: 1) Acknowledge the loss ('It's hard to leave your friends and start over'). 2) Involve them in choosing the new school if possible. 3) Ask the school to assign a buddy. 4) Connect with other parents before they start. 5. Keep familiar routines (bedtime, meals, weekend activities). 6) Expect an adjustment period of 6-8 weeks. 7) Check in regularly without pressure: 'What was the best part of today? The hardest part?' 8) If they're being bullied at the new school, act quickly and firmly.",
  },

// === SCALE TO 10: EATING (5 → 10) ===
  {
    id: "eat-6",
    source: "Child of Mine",
    sourceDetails: "Ellyn Satter — Food Jags",
    category: "eating",
    text: "Food jags (eating only one food for days/weeks) are normal in toddlers and preschoolers. Response: 1) Don't panic — it won't last. 2) Continue offering the jag food alongside other foods. 3) Don't make a big deal — no commenting, no pressure. 4) Keep serving family meals with variety. 5) The jag food will eventually fall out of favor and a new one will emerge. 6) Ensure the jag food has some nutritional value (if they only want bananas, that's fine; if they only want chocolate, that's different). 7) If a child is eating fewer than 5-10 foods total or losing weight, consult a feeding specialist.",
  },
  {
    id: "eat-7",
    source: "Solid Starts Approach",
    sourceDetails: "Solid Starts — Sensory Food Aversion",
    category: "eating",
    text: "Some children have genuine sensory aversions to food textures, smells, or colors. Signs: gagging on certain textures, only eating specific brands/packaging, distress when foods touch on plate, refusing entire food groups. This is NOT picky eating — it's sensory. Response: 1) Don't force — it makes aversion worse. 2) Offer new foods in a no-pressure way (just present, don't demand tasting). 3. Respect their sensory experience ('I know the feeling of mushy bananas bothers you'). 4) Consult a pediatric occupational therapist for evaluation if it significantly limits nutrition. 5) Nutritional deficiency is rare in children who eat across categories, even if variety is limited.",
  },
  {
    id: "eat-8",
    source: "How to Talk So Kids Will Listen",
    sourceDetails: "Faber & Mazlish — Restaurant Behavior",
    category: "eating",
    text: "For restaurant meltdowns and eating out: 1) Choose family-friendly restaurants initially. 2) Bring one small toy/activity (not a screen). 3) Order quickly — hunger + waiting = meltdown. 4) Bring a small snack for immediate hunger. 5) Set expectations before arriving ('We'll sit at the table, use inside voices'). 6) Take a brief walk if they get restless. 7) If a full meltdown starts, one adult takes the child outside until calm. 8) Praise restaurant behavior specifically ('I loved how you stayed in your seat'). Practice builds tolerance.",
  },
  {
    id: "eat-9",
    source: "Child of Mine",
    sourceDetails: "Ellyn Satter — Family Meals",
    category: "eating",
    text: "Family meals are the single most effective intervention for children's eating, behavior, AND academic outcomes. Research shows children who eat with their family 3+ times per week have: better nutrition, lower obesity rates, better vocabulary, higher self-esteem, lower rates of depression, and lower substance use in teens. Make it happen even if: meals are simple, it's only 20 minutes, the TV is off, phones are away. Start with 3 nights a week if daily isn't possible. The CONNECTION matters more than the food.",
  },
  {
    id: "eat-10",
    source: "AAP Nutrition Guidelines",
    sourceDetails: "American Academy of Pediatrics — Sugar and Treats",
    category: "eating",
    text: "Approach to sugar and treats: 1) Don't make sweets forbidden — restricted foods become MORE desirable. 2) Don't use dessert as a reward for eating vegetables — this teaches vegetables are punishment. 3) Ellyn Satter approach: serve a small dessert WITH the meal (not after) — when dessert isn't a prize, children eat it in moderation. 4) Teach 'sometimes foods' vs 'everyday foods' rather than 'good' vs 'bad.' 5) Model balanced eating yourself. 6) Involve children in cooking and food prep. 7) Avoid sugary drinks (juice, soda) — water and milk are sufficient.",
  },

// === SCALE TO 10: FEARS (5 → 10) ===
  {
    id: "fear-6",
    source: "The Whole-Brain Child",
    sourceDetails: "Siegel & Bryson — Separation Fear",
    category: "fears",
    text: "For separation fear (beyond normal separation anxiety): 1) Create a 'connection token' — a small object (bracelet, sticker) that connects parent and child. 'When you miss me, hold this and know I'm thinking about you.' 2) Draw a heart on their hand and yours — 'When you see it, I see mine too.' 3) Teach a coping script: 'Mommy always comes back.' 4) Use a visual schedule showing when you'll return (pictures of the day's events). 5) Practice short separations and build up. 6) Never sneak out — it breaks trust. 7) Keep goodbyes short and confident — your anxiety amplifies theirs.",
  },
  {
    id: "fear-7",
    source: "Zero to Three",
    sourceDetails: "ZERO TO THREE — Fear of Baths",
    category: "fears",
    text: "For fear of baths/water: 1) Check water temperature (too hot or too cold). 2) Try a different bath setup (sink, shower, bath together). 3) Use a non-slip mat (fear of slipping). 4) Bring favorite toys. 5) Make it brief initially — even 3 minutes is success. 6) Don't force submersion — let them control what gets wet. 7) Use a washcloth for face (water in eyes is a common trigger). 8) For intense fear, try 'sponge baths' for a while and gradually reintroduce the bath. 9) Never use bath time as punishment or force.",
  },
  {
    id: "fear-8",
    source: "Helping Your Anxious Child",
    sourceDetails: "CBT Techniques — Fear of Storms",
    category: "fears",
    text: "For fear of storms/weather: 1) Explain storms scientifically at their level ('Lightning is electricity in the clouds'). 2) Create a 'storm kit' together (torch, snacks, games, blankets). 3) Make storms an event ('Storm party!'). 4) Use a weather app to predict storms and prepare. 5) Don't dismiss ('It's just thunder') — validate ('Thunder can be really loud and scary'). 6) Model calm ('I don't love storms either, but we're safe inside'). 7) For older children, teach breathing exercises. 8) Severe weather phobia may need professional support.",
  },
  {
    id: "fear-9",
    source: "Untangled",
    sourceDetails: "Lisa Damour — Fear of Failure/School",
    category: "fears",
    text: "For fear of failure or school-related anxiety: 1) Identify specific fears (tests, presentations, social, being called on). 2) Practice the scary thing in small doses (practice presentations at home). 3) Teach that anxiety and excitement feel similar physically — reframe as excitement. 4) Don't let avoidance grow — the more they avoid, the bigger the fear. 5) Work with teachers to create a safe classroom experience. 6) Celebrate brave moments. 7) If school refusal develops, treat as urgent — the longer they're out, the harder it is to return.",
  },
  {
    id: "fear-10",
    source: "Raising Good Humans",
    sourceDetails: "Hunter Clarke-Fields — Nighttime Fears",
    category: "fears",
    text: "For nighttime fears (monsters, burglars, bad dreams): 1) Take them seriously — to their brain, the threat feels real. 2) Do a 'safety check' together before bed (windows locked, door closed). 3) Use 'monster spray' (water in a spray bottle) — it works because it gives the child agency. 4) A comfort object (teddy, blanket) that 'protects' them. 5) Leave the door slightly open with hallway light. 6) If they wake scared: comfort first, don't interrogate. 7) Avoid scary content (even 'family' movies can have scary elements for young children). 8. Nightmares decrease as children develop better emotional regulation.",
  },

// === SCALE TO 10: HARD CONVERSATIONS (5 → 10) ===
  {
    id: "hard-6",
    source: "The Whole-Brain Child",
    sourceDetails: "Siegel & Bryson — Talking About Money",
    category: "honest",
    text: "When children ask about money: 1) Be age-appropriate. Young children: 'Money is how we buy things like food and toys.' Older children can understand budgeting. 2) Don't transfer financial anxiety ('We can't afford that' when you can) — instead 'That's not in our budget right now.' 3) Differentiate between needs and wants. 4) Give older children allowance and let them make spending mistakes. 5) Don't use money to guilt ('I work so hard to buy you things'). 6) If experiencing genuine financial hardship, be honest but reassuring: 'We have enough for everything we need. We're making choices about extras.'",
  },
  {
    id: "hard-7",
    source: "How to Talk So Kids Will Listen",
    sourceDetails: "Faber & Mazlish — Answering 'Why' Questions",
    category: "honest",
    text: "When children ask persistent 'why' questions: 1) The 'why' stage (ages 3-5) is a developmental milestone — they're building causal understanding. 2) Answer briefly and accurately. 3) It's OK to say 'That's a great question — I don't know. Let's find out together.' 4. Turn it back: 'What do YOU think?' 5) Don't dismiss ('Because I said so') — this shuts down curiosity. 6) If it feels endless, redirect: 'You sure have a lot of great questions! Let's write them down and look them up.' 7) 'Why' questions are sometimes bids for connection disguised as curiosity.",
  },
  {
    id: "hard-8",
    source: "Zero to Three",
    sourceDetails: "ZERO TO THREE — Divorce Explanation",
    category: "honest",
    text: "Explaining divorce/separation to children: 1) Tell them together if possible. 2) Keep it simple: 'Mommy and Daddy are going to live in different houses. We both still love you very much. This is not your fault.' 3) Reassure: 'You will still see both of us. Things will change, but our love for you won't.' 4) Don't blame ('Your father/mother...'). 5) Expect the same questions repeatedly — answer patiently. 6) Young children may think they caused it. Explicitly say: 'This is an adult decision. Nothing you did caused this.' 7) Books: 'Two Homes' (ages 3-5), 'Dinosaurs Divorce' (ages 4-8).",
  },
  {
    id: "hard-9",
    source: "Raising Good Humans",
    sourceDetails: "Hunter Clarke-Fields — Body Safety",
    category: "honest",
    text: "Teaching body safety (ages 2+): 1) Use correct anatomical terms for ALL body parts. 2) Teach the 'underwear rule' — parts covered by underwear are private. 3) 'Your body belongs to YOU. No one should touch your private parts or ask you to touch theirs.' 4) Teach consent early: ask before tickling, stop when they say stop. 5) Identify 'safe adults' they can tell anything to. 6) 'Secrets that make you feel bad or scared should never be kept.' 7) Practice: 'What would you do if someone asked you to keep a secret about touching?' 8) Books: 'Some Parts Are Not for Sharing,' 'Amazing You.'",
  },
  {
    id: "hard-10",
    source: "How to Talk So Kids Will Listen",
    sourceDetails: "Faber & Mazlish — When Children See Conflict",
    category: "honest",
    text: "When children witness parents arguing: 1) Some disagreement in front of children is HEALTHY — it models respectful conflict resolution. 2. Fighting that is scary (yelling, name-calling, throwing, threats) is damaging. 3) If children witnessed a bad fight: repair. 'You saw Mommy and Daddy arguing earlier. We were frustrated, but we shouldn't have yelled. We're OK. We love each other and we love you.' 4) Never make children take sides. 5) Never make them messengers. 6) If conflict is frequent and hostile, seek couples counseling — the home environment is the child's foundation.",
  },

// === SCALE TO 10: ROUTINES (6 → 10) ===
  {
    id: "rout-5",
    source: "Triple P (Positive Parenting Program)",
    sourceDetails: "Triple P — Evening Routine",
    category: "routines",
    text: "For evening/after-work chaos: 1) Create a decompression buffer — 10 minutes when you get home before engaging fully (change clothes, wash face, breathe). 2) Involve children in dinner prep (even toddlers can stir or wash vegetables). 3) Use visual routine charts (pictures of each step: dinner, bath, story, sleep). 4) Batch cook on weekends to reduce weeknight stress. 5) Accept 'good enough' dinners on busy nights (beans on toast is fine). 6) Connect before correcting — greet each child with a hug before addressing behavior. 7) End the day with 5 minutes of one-on-one time per child.",
  },
  {
    id: "rout-6",
    source: "How to Talk So Kids Will Listen",
    sourceDetails: "Faber & Mazlish — Getting Out the Door",
    category: "routines",
    text: "For 'we're going to be late' battles: 1) Build in a 10-minute buffer (if you need to leave at 8:30, aim for 8:20). 2) Use 'beat the timer' as a game. 3) Give one instruction at a time ('Shoes first' not 'Get ready'). 4) Use music: 'When this song ends, we need to be in the car.' 5) Check your own stress — children sense urgency and resist more. 6) Have a 'launch pad' by the door (bags, shoes, coats ready the night before). 7) If consistently late, the routine needs restructuring, not more rushing.",
  },
  {
    id: "rout-7",
    source: "Triple P (Positive Parenting Program)",
    sourceDetails: "Triple P — Bath Time Battles",
    category: "routines",
    text: "For bath time resistance: 1) Check for sensory issues (water temperature, echoey bathroom, soap in eyes). 2) Make bath time playful (toys, bubbles, colored bath drops). 3) Keep it brief — 5-10 minutes is fine. 4. Give choices ('Bath before or after dinner?'). 5) Use a visor or washcloth to keep water out of eyes. 6) Don't make bath conditional on behavior ('No bath if you're naughty' makes bath a reward). 7) If resistance is intense, try showers or sponge baths for a while. 8) Bath fear is common ages 1-3 and usually passes.",
  },
  {
    id: "rout-8",
    source: "Peaceful Parent, Happy Kids",
    sourceDetails: "Dr. Laura Markham — Weekend Structure",
    category: "routines",
    text: "For weekend routine that balances rest and activity: 1) Don't over-schedule weekends — children need downtime. 2) One structured activity max per day. 3) Morning: active (park, swimming, outing). Afternoon: rest (movie, reading, free play). 4) Protect at least one full family day per week with no commitments. 5) Sunday afternoon prep for the week (lunches, clothes, schedule review) reduces Monday chaos. 6) Build in 'boredom time' — unstructured play develops creativity. 7) Connection over activities — a morning building a fort beats an expensive outing.",
  },

// === SCALE TO 10: CO-PARENT (7 → 10) ===
  {
    id: "cop-8",
    source: "Two Homes, One Childhood",
    sourceDetails: "Robert Emery — Holiday Schedules",
    category: "co-parent",
    text: "Managing holidays across two households: 1) Plan holiday schedules well in advance (months, not days). 2. Alternate major holidays (Christmas with mom one year, dad the next) OR share the day (morning/afternoon split). 3) Create NEW traditions in each home rather than competing over old ones. 4) Don't make children choose ('Where do YOU want to go?'). 5. Accept that holidays will feel different and possibly sad — don't overcompensate with excessive gifts. 6) Children remember the FEELING of holidays more than the gifts. Peaceful and calm beats extravagant and tense.",
  },
  {
    id: "cop-9",
    source: "How to Talk So Kids Will Listen",
    sourceDetails: "Faber & Mazlish — New Partner Introduction",
    category: "co-parent",
    text: "Introducing a new partner to children: 1) Wait until the relationship is serious and stable (at least 6 months). 2) Tell the other parent BEFORE telling the children. 3) First meeting: casual, brief, neutral territory (park, cafe). 4) Don't expect immediate bonding — let it develop naturally. 5) Don't have sleepovers while children are home initially. 6) Don't criticize the other parent's dating life to the children. 7) Reassure: 'This person is my friend. They don't replace Mom/Dad.' 8) Children may have many feelings — acknowledge all of them.",
  },
  {
    id: "cop-10",
    source: "Peaceful Parent, Happy Kids",
    sourceDetails: "Dr. Laura Markham — Consistent Rules",
    category: "co-parent",
    text: "For establishing consistent rules across households: 1) Agree on 3 non-negotiable safety rules (car seats, no hitting, medication safety). 2) Beyond that, accept that your house has your rules and their house has theirs. 3) Don't interrogate the child about the other house ('What did you eat? Did Dad let you stay up late?'). 4) If the other parent's choices are annoying but not unsafe (more screen time, different food), let it go. 5) Children are remarkably adaptable to different environments if both feel safe and loving. 6) Your influence is in YOUR home — make it solid.",
  },

// === SCALE TO 10: SCHOOL (7 → 10) ===
  {
    id: "school-8",
    source: "Mindset",
    sourceDetails: "Carol Dweck — Bright But Disorganized",
    category: "school",
    text: "For bright children who are disorganized or underperforming: 1) Don't assume laziness — executive function develops at different rates and can lag significantly behind intelligence. 2) Teach organization as a SKILL, not a character trait. Use checklists, planners, color-coded folders. 3) Break long-term projects into chunks with intermediate deadlines. 4) Create a dedicated homework space (consistent location, supplies ready). 5) Use timers for focus (Pomodoro: 20 min work, 5 min break). 6) Check in regularly without micromanaging. 7) Praise effort and strategy, not intelligence. 8) Consider an educational psychologist evaluation for learning differences if underperformance persists.",
  },
  {
    id: "school-9",
    source: "How to Talk So Kids Will Listen",
    sourceDetails: "Faber & Mazlish — Preventing Bullying",
    category: "school",
    text: "To build resilience against bullying: 1) Teach the difference between mean behavior, conflict, and bullying (repeated, intentional, power imbalance). 2) Practice assertive responses at home: stand tall, look them in the eye, say 'Stop' firmly. 3) Identify safe adults at school. 4) Encourage at least one solid friendship — social isolation is the biggest risk factor. 5) Build confidence through competence (sports, arts, hobbies outside school). 6) Monitor mood changes, especially after school. 7) If bullying is happening: document everything, contact the school in writing, and follow up. 8. Cyberbullying: monitor devices without snooping.",
  },
  {
    id: "school-10",
    source: "Untangled",
    sourceDetails: "Lisa Damour — Exam Stress",
    category: "school",
    text: "For exam stress and test anxiety: 1) Some stress improves performance — the goal is management, not elimination. 2. Teach revision planning (spaced repetition beats cramming). 3. Practice relaxation: box breathing (in 4, hold 4, out 4, hold 4). 4. Reframe anxiety as readiness ('Your body is getting ready to focus'). 5. Ensure sleep before exams — an hour of sleep is worth more than an hour of cramming. 6. After the exam: debrief briefly then move on. Don't dwell. 7. If anxiety is severe (panic attacks, refusal), consult school counselor or psychologist.",
  },

// === SCALE TO 10: SCREEN (7 → 10) ===
  {
    id: "screen-8",
    source: "AAP Media Guidelines",
    sourceDetails: "American Academy of Pediatrics — Toddlers and Screens",
    category: "screen",
    text: "For toddlers (1-3) and screens: 1) Under 18 months: avoid screens entirely (except video calls with family). 2) 18-24 months: ONLY high-quality content watched WITH a parent who talks about it. 3) 2-3 years: max 1 hour/day of high-quality content. 4) No background TV — it disrupts play and language. 5) No screens during meals (meals are for connection). 6) No screens 1 hour before bed (suppresses melatonin). 7) Choose slow-paced shows (Daniel Tiger, Trash Truck, Bluey) over fast-paced (Cocomelon). 8) Young children cannot learn from screens the way older children can — their brains need 3D interaction.",
  },
  {
    id: "screen-9",
    source: "Dopamine Nation",
    sourceDetails: "Anna Lembke — Dopamine Fasting",
    category: "screen",
    text: "For resetting screen habits (dopamine reset): 1) Pick one day per week as a 'low-screen day' — outdoor activities, cooking, board games, reading. 2) Expect complaints and boredom for the first 2-3 low-screen days — this is withdrawal, not failure. 3) By week 3, children start self-regulating better. 4. Replace screen time with high-connection activities, not just 'go play' — children need direction. 5) Model participation — no phone for parents either. 6) The goal isn't zero screens, it's screens as an occasional activity, not a default state. 7) Break the habit loop: trigger (bored) → routine (screen) → reward (dopamine). Insert new routines.",
  },
  {
    id: "screen-10",
    source: "Peaceful Parent, Happy Kids",
    sourceDetails: "Dr. Laura Markham — Family Media Plan",
    category: "screen",
    text: "Creating a family media plan together: 1) Hold a family meeting (include children age 4+). 2) Discuss values: 'What do we want our family time to look like?' 3) Set tech-free zones: bedrooms, meal times, car rides (these are connection times). 4) Set tech-free times: first hour of morning, one hour before bed, homework time. 5) Agree on daily time limits by age. 6) Create a 'parking lot' (basket by the door where all phones go). 7) Write it down and post it. 8) Review monthly. 9) Children follow rules they helped create far better than imposed ones.",
  },

// === SCALE TO 10: SOCIAL (7 → 10) ===
  {
    id: "social-8",
    source: "How to Talk So Kids Will Listen",
    sourceDetails: "Faber & Mazlish — Apologizing",
    category: "social",
    text: "Teaching children to apologize genuinely: 1) Don't force apologies ('Say sorry!') — forced apologies are empty and breed resentment. 2) Instead, guide: 'Your sister is hurt. How do you think she feels? What could you do to help her feel better?' 3) Model apologizing yourself — frequently and genuinely. 4) Teach the components of a good apology: name what happened, express regret, offer to fix it. 5) A hug, drawing, or kind action IS an apology for young children. 6) Follow up later: 'Did you have a chance to make things right?' 7) Children who apologize voluntarily are children who've been apologized TO.",
  },
  {
    id: "social-9",
    source: "Raising Good Humans",
    sourceDetails: "Hunter Clarke-Fields — Personal Space",
    category: "social",
    text: "For children who struggle with personal space and boundaries: 1) Teach 'arm's length' — practice standing the right distance from others. 2) Teach 'reading the room' — are they backing away? Is the other child looking uncomfortable? 3) Practice asking before touching ('Can I have a hug?' 'Can I play with you?'). 4) Some children have sensory processing differences that make personal space hard — consider OT evaluation. 5) Role-play common scenarios at home. 6) Teach that 'no' means 'no' for everyone — their own boundaries AND others'. 7) Read: 'Personal Space Camp' by Julia Cook.",
  },
  {
    id: "social-10",
    source: "Siblings Without Rivalry",
    sourceDetails: "Adele Faber — Different Social Temperaments",
    category: "social",
    text: "For children with different social temperaments: 1) Some children are extroverts who recharge socially; others are introverts who need solitude. Both are normal. 2) Don't label ('She's shy,' 'He's the social one'). 3) Introverted children need downtime after social events — don't schedule back-to-back activities. 4) Extroverted children need social outlets — don't isolate them. 5) Respect your child's temperament even if it differs from yours. 6) An introverted child doesn't need 'fixing' — they need acceptance and gentle social opportunities at their pace. 7. Books: 'Quiet Kids' by Susan Cain.",
  },

// === SCALE TO 10: TOILET (7 → 10) ===
  {
    id: "toilet-8",
    source: "Oh Crap! Potty Training",
    sourceDetails: "Jamie Glowacki — Public Toilets",
    category: "toilet",
    text: "For newly trained children and public toilets: 1) Always carry a change of clothes and wipes. 2) Take them to the toilet BEFORE they ask when arriving somewhere new. 3) Bring a portable seat insert (some children fear big toilets). 4) Use the disabled/family toilet when available (more space, no gap under doors). 5) Hold them on the seat if they're small (they may fear falling in). 6) Don't make a big deal about accidents in public — clean up, change, move on. 7. Create a consistent 'public toilet routine' (wipe, flush, wash hands) just like at home.",
  },
  {
    id: "toilet-9",
    source: "AAP Toilet Training Guide",
    sourceDetails: "American Academy of Pediatrics — School Readiness",
    category: "toilet",
    text: "For toilet training requirements for nursery/school: 1) Check the policy — most UK nurseries expect children to be trained by age 3, but they should still be accepting. 2. Communicate with staff about where your child is in training. 3) Send extra clothes (labeled). 4) Dress in easy-pull-up clothes. 5) Practice using unfamiliar toilets (public toilets, friend's houses). 6) Don't rush training to meet a school deadline — an unready child will have more accidents and more shame. 7) If the child genuinely isn't ready, look for nurseries that accept nappies — many do. 8. Children with SEND may get exemptions.",
  },
  {
    id: "toilet-10",
    source: "Oh Crap! Potty Training",
    sourceDetails: "Jamie Glowacki — Travel and Disruption",
    category: "toilet",
    text: "Maintaining toilet training during travel or routine disruption: 1) Bring the home potty if possible (familiarity matters). 2) Stop for toilet breaks every 1-2 hours during long drives. 3) Accept that travel causes more accidents — routine is disrupted. 4) Stick to regular sitting times (after meals) even when traveling. 5) Use pull-ups for long journeys (explain: 'This is just for the car, not forever'). 6. Return to the normal routine as soon as you arrive. 7) Regression during/after travel is normal and temporary. 8) Don't restart training from scratch after a disruption — just resume the routine.",
  },

// === NEW BOOKS ===

// --- SIMPLICITY PARENTING (Kim John Payne) ---
  {
    id: "sp-1",
    source: "Simplicity Parenting",
    sourceDetails: "Kim John Payne — The Soul of Discipline",
    category: "behavior",
    text: "Kim John Payne's simplicity approach identifies four pillars of an overloaded childhood: too much stuff, too many choices, too much information, and too much speed. When children are overwhelmed by clutter, activities, and adult-level information, they respond with behavioral issues that look like ADHD, anxiety, or defiance. The solution isn't better discipline — it's simplifying the environment. Start by reducing physical clutter in the child's room (keep only what they actively play with), limiting scheduled activities to one or two per week, and filtering adult conversations and news away from young ears. Simplification creates space for calm, creativity, and connection.",
  },
  {
    id: "sp-2",
    source: "Simplicity Parenting",
    sourceDetails: "Kim John Payne — Toy Decluttering",
    category: "routines",
    text: "Simplify the toy environment: Put away 70-80% of your child's toys in storage. Keep out only open-ended, imaginative toys (blocks, art supplies, dolls, simple vehicles). Remove toys that do the playing FOR the child (loud, battery-operated, single-function toys). Don't ask the child's permission — just quietly reduce. The result: deeper play, more creativity, less mess, and surprisingly, fewer complaints. Rotate toys monthly (put some away, bring others out). Children overwhelmed by too many toys actually play LESS, not more. Fewer, better toys produce richer imaginative play.",
  },
  {
    id: "sp-3",
    source: "Simplicity Parenting",
    sourceDetails: "Kim John Payne — Rhythm and Predictability",
    category: "routines",
    text: "Establish family rhythms (not rigid schedules). A rhythm is a predictable flow to the day that the child can anticipate. Key rhythm points: a consistent morning ritual, family meal, and bedtime routine. The child's nervous system relaxes when they know what comes next. You don't need a minute-by-minute schedule — just a reliable sequence. 'First we eat breakfast, then we get dressed, then we go out.' Repeat the same songs, verses, or rituals daily. Predictability is a form of love — it tells the child 'you are safe here.' Rhythm is more important than clock time.",
  },
  {
    id: "sp-4",
    source: "Simplicity Parenting",
    sourceDetails: "Kim John Payne — Scheduling Pressure",
    category: "parent",
    text: "Overscheduled children are stressed children. Signs your child is doing too much: resistance to going to activities, increased meltdowns, trouble sleeping, complaining of stomach aches or headaches, loss of creative play. Payne recommends: no more than one extracurricular activity per week for children under 7, two max for under-10s. Protect large blocks of unstructured time — boredom is the birthplace of creativity. Children need downtime the way adults do. Saying 'no' to another activity is saying 'yes' to rest, play, and family connection.",
  },
  {
    id: "sp-5",
    source: "Simplicity Parenting",
    sourceDetails: "Kim John Payne — Filtering the Adult World",
    category: "behavior",
    text: "Children are like sponges — they absorb adult stress, adult news, and adult conversations they can't process. Protect childhood by filtering what enters your home: 1) No news radio/TV when children are present. 2) Save adult conversations (finances, work stress, relationship issues, health worries) for after bedtime. 3) Limit phone use around children — they experience it as rejection. 4) Monitor overheard content (children listen even when they seem not to). 5) Don't discuss the child's behavior with other adults in front of them. The cumulative effect of adult stress entering a child's world is anxiety and behavioral dysregulation.",
  },
  {
    id: "sp-6",
    source: "Simplicity Parenting",
    sourceDetails: "Kim John Payne — The Simplified Meal",
    category: "eating",
    text: "Simplify family meals: establish a weekly meal rhythm (e.g., Monday is pasta night, Tuesday is rice and beans, Wednesday is soup). This reduces decision fatigue for parents and creates anticipation for children. Repetition is comforting to children — they don't need novelty at every meal, they need reliability. Serve the same basic structure with small variations. Involve children in simple meal prep. Keep meals unhurried — 20 minutes of calm eating together beats an hour of stress and negotiation.",
  },

// --- THE MONTESSORI TODDLER (Simone Davies) ---
  {
    id: "mt-1",
    source: "The Montessori Toddler",
    sourceDetails: "Simone Davies — Prepared Environment",
    category: "routines",
    text: "Create a 'prepared environment' at child-height: low hooks for coats, a step stool at the sink, low shelves with a few carefully chosen activities, child-sized furniture, snacks accessible at their level. The goal is independence — when children can do things for themselves, they feel capable and cooperative. Avoid toy boxes (encourage dumping) — use low open shelves with each activity on its own tray or small basket. Rotate activities every 1-2 weeks. A prepared environment reduces parental intervention, power struggles, and frustration for everyone.",
  },
  {
    id: "mt-2",
    source: "The Montessori Toddler",
    sourceDetails: "Simone Davies — Following the Child",
    category: "behavior",
    text: "'Follow the child' is a core Montessori principle. Observe your child without directing — what are they naturally drawn to? What skills are they working on? Rather than forcing activities, provide opportunities that match their current interest. If they're obsessed with pouring water, set up a pouring station. If they're climbing everything, provide safe climbing opportunities. The child's interests are their curriculum. Trust their developmental timeline — pushing skills before they're ready creates frustration. Observe, prepare the environment, then step back and let them explore independently.",
  },
  {
    id: "mt-3",
    source: "The Montessori Toddler",
    sourceDetails: "Simone Davies — Practical Life Activities",
    category: "confidence",
    text: "Involve toddlers in real, meaningful work (Montessori 'practical life' activities): sweeping, wiping tables, watering plants, folding napkins, peeling bananas, transferring objects with tongs. Use real, child-sized tools (small broom, tiny watering can). These activities build concentration, fine motor skills, independence, and self-esteem. Don't redo their work — if they wipe the table imperfectly, it's their contribution. Avoid fake plastic versions of adult tools — children want the REAL thing. Meaningful participation in family life is more engaging than any toy.",
  },
  {
    id: "mt-4",
    source: "The Montessori Toddler",
    sourceDetails: "Simone Davies — Respectful Communication",
    category: "emotional",
    text: "Montessori communication principles: 1) Get down to the child's eye level before speaking. 2) Use a normal voice, not baby talk. 3) Give the child real choices ('Would you like the red cup or the blue cup?'). 4) Say what you MEAN — be clear and direct ('It's time to put shoes on' not 'Shall we put shoes on?'). 5) Avoid 'good job' — instead describe what you see ('You poured all the water by yourself'). 6) Give undivided attention when possible. 7) Ask for their opinion and truly listen. Children who feel respected cooperate more willingly.",
  },
  {
    id: "mt-5",
    source: "The Montessori Toddler",
    sourceDetails: "Simone Davies — Managing Tantrums the Montessori Way",
    category: "tantrums",
    text: "When a toddler has a meltdown: 1) Stay calm and present — your stillness helps them regulate. 2) Don't talk too much — a dysregulated brain can't process words. 3) Offer a hug but don't force it. 4) Name the emotion simply ('You're frustrated'). 5) After the storm, help them return to their activity or transition calmly. 6) Reflect later: what unmet need triggered this? (hunger, tiredness, needing autonomy, overstimulation). Prevention through a prepared environment, predictable routines, and appropriate choices dramatically reduces tantrum frequency.",
  },
  {
    id: "mt-6",
    source: "The Montessori Toddler",
    sourceDetails: "Simone Davies — Encouraging Independence",
    category: "confidence",
    text: "Montessori independence by age: 12-18 months: help set the table, wipe spills, feed self with spoon. 18 months-2 years: dress self (lay clothes out in order), wash hands, brush teeth (parent finishes). 2-3 years: pour own drink from small pitcher, put on shoes (Velcro first), tidy one activity before getting another, help cook (stir, wash vegetables). 3-4 years: dress independently, make simple snacks, fold laundry. Every time you do something for a child that they can do themselves, you steal their opportunity for growth. 'Help me to do it myself' is the child's silent request.",
  },

// --- HOW CHILDREN SUCCEED (Paul Tough) ---
  {
    id: "hcs-1",
    source: "How Children Succeed",
    sourceDetails: "Paul Tough — Grit and Perseverance",
    category: "confidence",
    text: "Grit — defined as sustained passion and perseverance toward long-term goals — is a stronger predictor of success than IQ. Children develop grit when they: 1) Find something they care about (passion can't be forced). 2) Practice deliberately through difficulty. 3) Connect their effort to a larger purpose. Parents foster grit by allowing children to struggle and fail WITHOUT rescuing them. When a child hits a wall, ask 'What's your plan?' not 'Here, let me fix it.' Children who never experience failure don't develop the resilience to keep going when things get hard.",
  },
  {
    id: "hcs-2",
    source: "How Children Succeed",
    sourceDetails: "Paul Tough — Character Strengths",
    category: "confidence",
    text: "Tough identifies key character strengths that predict success better than test scores: grit, self-control, zest (enthusiasm), social intelligence, gratitude, optimism, and curiosity. These are teachable, not innate. Develop them by: 1) Modeling them yourself. 2) Praising specific character strengths ('That took real perseverance'). 3) Creating challenges that require these traits. 4) Letting children experience and recover from failure. 5) Avoiding overprotection — struggle builds character. Schools that explicitly teach character strengths see significant improvements in academic outcomes.",
  },
  {
    id: "hcs-3",
    source: "How Children Succeed",
    sourceDetails: "Paul Tough — Adversity and Resilience",
    category: "emotional",
    text: "Children who face moderate, manageable adversity develop MORE resilience than children who are overprotected. 'The opposite of privilege is not deprivation — it's challenge.' However, severe or chronic adversity (abuse, neglect, poverty) without adequate adult support damages the developing brain. The key is the presence of at least one stable, supportive adult relationship. If a child experiences a setback (losing a game, failing a test, being left out), resist the urge to shield them. Instead, help them process it: 'That was really hard. What did you learn? What will you try next time?'",
  },
  {
    id: "hcs-4",
    source: "How Children Succeed",
    sourceDetails: "Paul Tough — Self-Control as Learned Skill",
    category: "behavior",
    text: "Self-control (the marshmallow test) is not an innate trait — it's a skill that can be taught and practiced. Strategies to develop self-control: 1) Teach delaying gratification in small ways (wait 5 minutes for a snack). 2) Practice stopping and thinking before acting ('What's your plan before you respond?'). 3) Create consistent routines that build the habit of follow-through. 4) Encourage activities that require sustained attention (music lessons, building projects, sports). 5) Model self-control aloud ('I really want that cake, but I'm going to wait until after dinner'). Self-control predicts academic and life success more strongly than IQ.",
  },
  {
    id: "hcs-5",
    source: "How Children Succeed",
    sourceDetails: "Paul Tough — Learning from Failure",
    category: "school",
    text: "Many high-achieving children never learn to fail because they've never been allowed to. When they finally hit real difficulty (university, first job), they collapse. To prevent this: 1) Let children experience natural consequences of their choices (forgot homework? experience the teacher's response). 2) Don't fix every problem — coach them through it. 3) Praise the RECOVERY from failure, not just the success. 4) Share your own failures openly. 5) Reframe mistakes as data: 'What did this teach you?' 6) Don't treat failure as something to avoid — treat it as something to learn from. Resilience = falling down 7 times, getting up 8.",
  },

// --- THE POWER OF SHOWING UP (Siegel & Bryson) ---
  {
    id: "psu-1",
    source: "The Power of Showing Up",
    sourceDetails: "Siegel & Bryson — The 4 S's",
    category: "emotional",
    text: "The 4 S's of secure attachment: 1) SAFE — protect from harm, be a haven. 2) SEEN — understand their inner world, not just their behavior. 3) SOOTHED — help them regulate when distressed. 4) SECURE — the result of Safe, Seen, and Soothed; the child develops a sense of relational security. You don't need to do this perfectly — you need to do it reliably. 'Good enough' parenting (showing up most of the time, repairing when you don't) builds secure attachment. Secure children are more confident, empathic, and resilient throughout life.",
  },
  {
    id: "psu-2",
    source: "The Power of Showing Up",
    sourceDetails: "Siegel & Bryson — Being Safe",
    category: "behavior",
    text: "Creating safety means more than physical protection. A child must feel emotionally safe at home — free from ridicule, unpredictable anger, and rejection. Ways to create emotional safety: 1) Don't yell or use sarcasm. 2) Be consistent — unpredictable parents create anxious children. 3) Own your mistakes and repair. 4) Never threaten to leave or withdraw love. 5) Be approachable when they've done something wrong ('I'm glad you told me'). If a child fears your reaction, they'll start hiding things. Safety means: 'No matter what you do, I will love you and help you.'",
  },
  {
    id: "psu-3",
    source: "The Power of Showing Up",
    sourceDetails: "Siegel & Bryson — Being Seen",
    category: "emotional",
    text: "Being seen means attuning to the child's inner world. Practice: 1) When they speak, put down your phone and make eye contact. 2) Reflect what you see ('You seem quieter than usual today'). 3) Get curious about their perspective without correcting it. 4) Remember details about their world (friend names, current interests, fears). 5) Show up for their emotions, not just their achievements. 6) Ask 'What was the best part of your day? The hardest part?' and truly listen. Being seen is the deepest form of love. Children who feel seen don't need to act out to get attention.",
  },
  {
    id: "psu-4",
    source: "The Power of Showing Up",
    sourceDetails: "Siegel & Bryson — Soothing",
    category: "tantrums",
    text: "Soothing is teaching the brain to regulate. When a child is upset: 1) Your calm presence IS the soothing — don't rush to fix. 2) Physical contact (hand on shoulder, hug) regulates the nervous system. 3) Name the emotion to tame it ('You're really sad about this'). 4) Breathe slowly and audibly — they'll match your breath. 5) Reduce stimulation (dim lights, quiet voice, move to a calmer space). Over time, the child internalizes your soothing and learns to self-soothe. This is co-regulation → self-regulation. A child who was never soothed cannot soothe themselves.",
  },
  {
    id: "psu-5",
    source: "The Power of Showing Up",
    sourceDetails: "Siegel & Bryson — Disruption and Repair",
    category: "parent",
    text: "All parents disrupt the connection — we yell, dismiss, lose patience. What matters is the REPAIR. The science of attachment shows that ruptures are inevitable; secure attachment comes from consistent repair. Steps: 1) Notice the rupture ('I snapped at you earlier'). 2) Take responsibility without excuse ('I was stressed, but it wasn't OK to speak to you that way'). 3) Reconnect physically (hug, touch). 4) Ask what they need. 5) Do better next time. Children who experience repeated rupture AND repair develop MORE resilience than children who never experience conflict. The repair IS the attachment.",
  },

// --- BETWEEN PARENT AND CHILD (Haim Ginott) ---
  {
    id: "bpc-1",
    source: "Between Parent and Child",
    sourceDetails: "Haim Ginott — Validation Before Correction",
    category: "emotional",
    text: "Haim Ginott's foundational principle: all feelings are acceptable; not all behaviors are. Before correcting behavior, validate the emotion behind it. 'You're very angry at your brother. I can see that. But hitting is not allowed.' The sequence matters: validate FIRST, correct SECOND. When children feel understood, their defensiveness drops and they become more open to guidance. Dismissing feelings ('Don't cry,' 'That's nothing to be upset about') teaches children their emotions are wrong and that they can't trust their own experience. This is the foundation of all modern gentle parenting.",
  },
  {
    id: "bpc-2",
    source: "Between Parent and Child",
    sourceDetails: "Haim Ginott — Communication That Works",
    category: "behavior",
    text: "Ginott's communication principles: 1) Don't attack the child's character ('You're so lazy') — address the behavior ('The dishes need to be done'). 2) Don't lecture — state the principle briefly. 3) Don't label ('the difficult one,' 'the smart one') — labels become self-fulfilling prophecies. 4) Don't use sarcasm — children take it literally. 5) Instead of 'What is WRONG with you?' ask 'What happened?' 6) Give information, not commands ('Milk goes in the fridge' not 'Put the milk away'). 7) For destructive behavior: state your values firmly ('I don't like to see books thrown') and offer an alternative ('Books are for reading; you can throw this ball outside').",
  },
  {
    id: "bpc-3",
    source: "Between Parent and Child",
    sourceDetails: "Haim Ginott — Praise That Helps",
    category: "confidence",
    text: "Ginott revolutionized how we praise: instead of evaluating ('You're wonderful!'), DESCRIBE what you see and let the child evaluate themselves. 'I notice you used lots of colors and the sky goes all the way to the top' — the child thinks 'I'm a good painter!' Evaluative praise creates dependency on external approval. Descriptive praise builds internal self-awareness and genuine self-esteem. Avoid: 'Good boy/girl!' Instead: 'You helped your sister tie her shoes. That was kind.' Show the child the IMPACT of their actions and let them draw their own conclusions about themselves.",
  },
  {
    id: "bpc-4",
    source: "Between Parent and Child",
    sourceDetails: "Haim Ginott — Anger Management for Parents",
    category: "parent",
    text: "Ginott on parental anger: It's OK to be angry — it's what you DO with it that matters. Express anger in small doses BEFORE it builds to explosion: 'I'm starting to feel frustrated with the mess.' Don't suppress until you explode. When angry: 1) Name your feeling aloud ('I am very frustrated right now'). 2) Describe what you see without attacking ('There are toys all over the floor'). 3) State what needs to happen ('Toys need to be picked up before screen time'). 4) Take a break if needed ('I'm going to take a few breaths in the other room'). Model emotional expression without harm.",
  },
  {
    id: "bpc-5",
    source: "Between Parent and Child",
    sourceDetails: "Haim Ginott — After the Storm",
    category: "emotional",
    text: "After an emotional incident (tantrum, fight, crying spell), Ginott advises: don't immediately rehash or lecture. The child is emotionally spent. Instead: 1) Reconnect with warmth (a snack, a hug, a quiet activity together). 2) If needed, briefly acknowledge what happened ('That was a hard moment'). 3) Much later, when calm and connected, revisit the issue: 'Earlier today, you got really upset about the toy. Can we talk about what happened?' 4) Problem-solve together. 5) End on a note of connection, not correction. Children learn more from how you help them recover than from the lecture you give.",
  },

// --- PLAYFUL PARENTING (Lawrence Cohen) ---
  {
    id: "pp-1",
    source: "Playful Parenting",
    sourceDetails: "Lawrence Cohen — The Power of Play",
    category: "behavior",
    text: "Play is a child's primary language and their way of processing the world. When a child is resisting, defiant, or stuck in a pattern, play can break through where words fail. Instead of nagging a child to get dressed, turn it into a game: 'Oh no, these pants are ALIVE! They're trying to escape!' Playfulness defuses tension, restores connection, and shifts the dynamic from power struggle to cooperation. Laughter releases oxytocin (bonding hormone) and reduces cortisol (stress hormone). A laughing child is a connected child, and a connected child is a cooperative child.",
  },
  {
    id: "pp-2",
    source: "Playful Parenting",
    sourceDetails: "Lawrence Cohen — Roughhousing",
    category: "confidence",
    text: "Roughhousing (wrestling, chasing, pillow fighting) is essential for children's development. Benefits: 1) Builds physical confidence and body awareness. 2) Releases pent-up energy and aggression safely. 3) Creates deep connection between parent and child. 4) Teaches self-regulation (stop when someone says stop). 5) Boosts emotional intelligence through physical play. Rules of safe roughhousing: everyone must be having fun, stop immediately if someone says stop, prevent real hurt, and make sure the child 'wins' sometimes. Roughhousing is especially powerful for children who struggle with aggression — it channels the energy productively.",
  },
  {
    id: "pp-3",
    source: "Playful Parenting",
    sourceDetails: "Lawrence Cohen — Healing Through Play",
    category: "emotional",
    text: "Children use play to process difficult experiences. If a child has had a medical procedure, you might see them 'playing doctor' with their toys for weeks after. If they witnessed conflict, they might stage fights between dolls. This 'play therapy' is healing — don't interrupt or correct it. Join in: 'Oh no, the doll is scared of the needle. What should we do to help her?' Through play, children: 1) Regain a sense of control. 2) Process fear in a safe context. 3) Integrate the experience. Reenactment through play is one of the most powerful tools children have for processing life's challenges.",
  },
  {
    id: "pp-4",
    source: "Playful Parenting",
    sourceDetails: "Lawrence Cohen — Reversing Power",
    category: "tantrums",
    text: "When a child is stuck in a power struggle, reverse the power dynamic playfully. The parent becomes the 'helpless' one and the child becomes the 'powerful' one. 'Oh no, I can't remember how to put on my own shoes! Can you help me?' This is not weakness — it's strategic. Children spend all day being told what to do. Playful power reversal lets them feel competent and in control, which dissolves the need to fight for power through misbehavior. Key: it must be genuinely playful, not sarcastic. The child should feel strong, not mocked.",
  },
  {
    id: "pp-5",
    source: "Playful Parenting",
    sourceDetails: "Lawrence Cohen — The Connection Gap",
    category: "parent",
    text: "Most behavior problems are connection problems. Cohen's formula: misbehavior = disconnection. When your child is acting out, instead of asking 'How do I stop this behavior?' ask 'How do I reconnect with this child?' Fill their 'connection cup' daily through: 1) Special Time (10-15 min of child-led play daily). 2) Physical play (roughhousing, chasing, tickling). 3) Laughter. 4) Listening to their interests without judgment. 5) Eye contact and presence. Children who feel deeply connected rarely misbehave, because they have no NEED to — their core needs are met.",
  },

// --- THE 5 LOVE LANGUAGES OF CHILDREN (Gary Chapman) ---
  {
    id: "llc-1",
    source: "The 5 Love Languages of Children",
    sourceDetails: "Gary Chapman — Five Love Languages",
    category: "emotional",
    text: "Children express and receive love in five 'languages': 1) Physical touch (hugs, high-fives, cuddling). 2) Words of affirmation ('I'm proud of you,' 'I love you'). 3) Quality time (undivided attention, playing together). 4) Gifts (thoughtful tokens, not expensive — it's about being known). 5) Acts of service (making their lunch, fixing a broken toy). Observe how YOUR child expresses love (how they treat YOU reveals what they value) and how they respond to different expressions. Speak their primary love language, not yours. A child who needs quality time won't feel loved by gifts alone.",
  },
  {
    id: "llc-2",
    source: "The 5 Love Languages of Children",
    sourceDetails: "Gary Chapman — Quality Time",
    category: "parent",
    text: "If your child's love language is quality time: 1) Give undivided attention daily (phone away, eye contact). 2) Create one-on-one rituals (Saturday morning breakfast, bedtime chat). 3) Include them in your activities (cooking, errands — make them feel wanted, not tolerated). 4) Prioritize being present over being perfect. 5) Children know when you're physically there but mentally absent. Quality time doesn't mean hours — 15 focused minutes is more powerful than 2 distracted hours. The message: 'You matter enough that I stop everything for you.'",
  },
  {
    id: "llc-3",
    source: "The 5 Love Languages of Children",
    sourceDetails: "Gary Chapman — Words of Affirmation",
    category: "confidence",
    text: "If your child's love language is words of affirmation: 1) Be specific ('I noticed how kind you were to your friend today'). 2) Leave notes in their lunchbox. 3) Express love unprompted ('I was just thinking about how much I love you'). 4) Praise effort and character, not just outcomes. 5) Avoid harsh words — children with this love language are deeply wounded by criticism and name-calling. 6) Say 'I love you' multiple times daily. 7) Acknowledge their feelings with words ('I can see how hard you worked on this'). Words build or break these children — choose yours carefully.",
  },
  {
    id: "llc-4",
    source: "The 5 Love Languages of Children",
    sourceDetails: "Gary Chapman — Physical Touch",
    category: "emotional",
    text: "If your child's love language is physical touch: 1) Offer hugs frequently (morning, bedtime, after school). 2) Use high-fives, fist bumps, pats on the back. 3) Cuddle while reading or watching TV. 4) Hold hands walking. 5) Brush their hair, give back rubs. 6) Physical play (wrestling, tickling — for some kids this fills the same need). 7) Never withhold physical affection as punishment — this devastates a touch-oriented child. Note: respect bodily autonomy — if they don't want a hug, offer an alternative (high-five, wave). They still need connection, just in a way they're comfortable with.",
  },
  {
    id: "llc-5",
    source: "The 5 Love Languages of Children",
    sourceDetails: "Gary Chapman — Discipline and Love Languages",
    category: "behavior",
    text: "Understanding love languages transforms discipline: A child whose love language is gifts experiences having a toy taken away as deeper rejection than another child would. A child whose love language is quality time experiences being sent to their room alone as emotional exile. Adjust consequences accordingly: 1) Use natural and logical consequences, not withdrawal of love. 2) Never use the child's love language against them. 3) After any discipline, reconnect in their love language. 4) Children whose love 'tank' is full behave better — fill the tank BEFORE problems arise, not just after.",
  },

// --- BRINGING UP BÉBÉ (Pamela Druckerman) ---
  {
    id: "bb-1",
    source: "Bringing Up Bébé",
    sourceDetails: "Pamela Druckerman — The Pause",
    category: "sleep",
    text: "The French 'pause': when a baby stirs or cries in the night, WAIT before responding (2-5 minutes). Babies make noise in their sleep — crying doesn't always mean awake. By pausing, you give the baby a chance to connect sleep cycles and self-soothe. Rushing in immediately can actually WAKE them fully and teach them they need you to fall back asleep. This is not cry-it-out — it's observation first, response second. Over time, the pause teaches babies they're capable of settling themselves, which leads to sleeping through the night earlier. Always trust your instincts — if the cry sounds distressed or is escalating, go to them.",
  },
  {
    id: "bb-2",
    source: "Bringing Up Bébé",
    sourceDetails: "Pamela Druckerman — Food Education",
    category: "eating",
    text: "French approach to food: 1) Children eat what adults eat — no separate kids' menus. 2) Vegetables are introduced first (before sweet foods). 3) Meals are structured: no snacking between meals (children arrive hungry). 4) Food is discussed positively ('This is delicious!' not 'Eat your vegetables'). 5) Children are expected to try everything at least once ('You don't have to finish it, but you must taste it'). 6) Meals are social occasions, not just fuel. 7) Patience: it takes repeated exposure. The French don't expect children to love everything immediately — they expect them to LEARN to enjoy a variety of foods.",
  },
  {
    id: "bb-3",
    source: "Bringing Up Bébé",
    sourceDetails: "Pamela Druckerman — Autonomy and Boundaries",
    category: "behavior",
    text: "French parenting emphasizes a 'cadre' (framework) — firm boundaries with complete freedom WITHIN them. Set a few non-negotiable rules (safety, respect, meal times) and then let children make choices within that frame. The parent is authoritative, not authoritarian — children have real autonomy but know the limits. French parents say 'no' firmly and mean it, without long explanations or negotiation. They also allow children to play independently without hovering. The message: 'I trust you within this frame.' Children with clear, firm boundaries and freedom within them develop self-regulation faster than children with either too many rules or too few.",
  },

// --- THE DANISH WAY OF PARENTING (Jessica Alexander) ---
  {
    id: "dwp-1",
    source: "The Danish Way of Parenting",
    sourceDetails: "Jessica Alexander — Hygge and Togetherness",
    category: "parent",
    text: "Hygge (coziness and togetherness) is central to Danish family life: Create daily moments of warmth and connection — candles at dinner, blankets and books, family game nights. Key principles: 1) Screens off during family time. 2) Focus on being together, not doing. 3) Create a warm atmosphere (lighting, food, comfort). 4) Include everyone. 5) No complaining or lecturing during hygge time. This practice builds deep family bonds and gives children a sense of belonging. Hygge is a deliberate CHOICE to prioritize connection over productivity. Even 30 minutes of daily hygge can transform family dynamics.",
  },
  {
    id: "dwp-2",
    source: "The Danish Way of Parenting",
    sourceDetails: "Jessica Alexander — Teaching Empathy",
    category: "social",
    text: "Danish parents actively teach empathy: 1) Model empathy in daily interactions (helping neighbors, speaking kindly about others). 2) Discuss feelings openly — all feelings are valid. 3) Read stories and discuss characters' emotions. 4) Praise children for being helpful and kind, not just for achievements. 5) Reframe negative behavior: 'She's not mean — maybe she's having a hard day.' 6) Teach that we're all connected and responsible for each other. 7) Avoid labeling others as 'bad.' Denmark consistently ranks as one of the happiest countries, and this cultural emphasis on empathy is a primary reason.",
  },
  {
    id: "dwp-3",
    source: "The Danish Way of Parenting",
    sourceDetails: "Jessica Alexander — Authentic Praise and Resilience",
    category: "confidence",
    text: "Danish parents avoid overpraising. Instead of 'You're the best!' or 'You're so smart!' they give process-focused feedback: 'I can see you worked hard on that drawing' or 'How do YOU feel about your project?' This builds intrinsic motivation and realistic self-assessment. Children who are overpraised develop inflated self-images that collapse under real challenge. Danish parents also emphasize that making mistakes is normal and valuable — they don't shield children from all difficulty. Authentic, honest feedback (given kindly) builds genuine confidence and resilience.",
  },

// --- UNCONDITIONAL PARENTING (Alfie Kohn) ---
  {
    id: "up-1",
    source: "Unconditional Parenting",
    sourceDetails: "Alfie Kohn — Beyond Rewards and Punishments",
    category: "behavior",
    text: "Alfie Kohn argues that rewards and punishments are two sides of the same coin — both are conditional love. Rewards ('If you clean your room, you get screen time') and punishments ('If you don't clean your room, no screen time') both teach the child: 'I am loved/valued only when I comply.' Instead: 1) Work WITH children to solve problems ('The room needs cleaning — when can you do it?'). 2) Give reasons for requests ('We need the floor clear so no one trips'). 3) Let children experience natural consequences, not imposed ones. 4) Accept all emotions. 5) Love unconditionally — even when behavior is unacceptable. Children who feel unconditionally loved behave better, not worse.",
  },
  {
    id: "up-2",
    source: "Unconditional Parenting",
    sourceDetails: "Alfie Kohn — The Problem with Praise",
    category: "confidence",
    text: "Kohn challenges conventional praise: saying 'Good job!' is actually a judgment, not encouragement. It teaches the child to seek approval rather than develop internal motivation. Alternatives: 1) Say nothing — just be present and interested. 2) Ask questions ('How did you figure that out?'). 3) Comment on what you observe ('You used so many colors here'). 4) Focus on their experience, not your evaluation ('You look really proud of that tower!'). The goal: children who do things because they're intrinsically rewarding, not because someone will say 'good job.' Internal motivation is more durable and more powerful than external validation.",
  },
  {
    id: "up-3",
    source: "Unconditional Parenting",
    sourceDetails: "Alfie Kohn — Time-Outs Reconsidered",
    category: "behavior",
    text: "Kohn argues that time-outs are a form of love withdrawal — they communicate 'When you misbehave, I reject you.' Instead of time-outs, use 'time-ins': stay WITH the child, help them regulate, and address the problem together. If you need space (understandable), say so honestly: 'I need a few minutes to calm down, then I'll come back and we'll figure this out.' This models self-regulation without abandonment. The goal isn't to make the child suffer for their mistake — it's to help them develop the skills to do better next time. Connection enables learning; isolation prevents it.",
  },
  {
    id: "up-4",
    source: "Unconditional Parenting",
    sourceDetails: "Alfie Kohn — Working WITH, Not Doing TO",
    category: "behavior",
    text: "Kohn's framework: 'working with' vs 'doing to.' Doing TO: punishments, rewards, lectures, consequences imposed from above. Working WITH: collaborative problem-solving, explaining reasons, listening to the child's perspective. When a child misbehaves: 1) Don't ask 'What consequence should I impose?' 2) Ask 'What does my child need, and what's getting in the way?' 3) Involve the child in solving the problem. 4) Address the root cause (tiredness, skill deficit, unmet need), not the symptom. This approach takes longer in the moment but builds better long-term behavior because the child develops internal motivation, not just compliance.",
  },
  {
    id: "up-5",
    source: "Unconditional Parenting",
    sourceDetails: "Alfie Kohn — Choice and Autonomy",
    category: "confidence",
    text: "Children need real autonomy to develop self-regulation. Give meaningful choices: 1) Let them choose how to spend free time (not just which structured activity). 2) Let them choose their own clothes (even if it clashes). 3) Let them negotiate rules and explain their reasoning (this builds critical thinking, not defiance). 4) Let them make mistakes and learn from them. 5) When you must decide, explain your reasoning. Children who have no autonomy either become rebellious or passively compliant. Children who have appropriate autonomy become responsible decision-makers. Autonomy = 'You trust me to learn.'",
  },

// --- THE GARDENER AND THE CARPENTER (Alison Gopnik) ---
  {
    id: "gac-1",
    source: "The Gardener and the Carpenter",
    sourceDetails: "Alison Gopnik — Gardener vs Carpenter Parenting",
    category: "parent",
    text: "Gopnik's metaphor: The carpenter parent has a blueprint — they know exactly what they want to build and work to shape the child into that image. The gardener parent creates a rich, supportive environment and lets the child grow into their own unique shape. Gardener principles: 1) Provide fertile soil (love, safety, nutrition, stimulation). 2) Don't control the outcome — a garden is unpredictable. 3) Prune gently (set safety limits) but don't try to control the shape. 4) Accept that your child may be very different from what you envisioned. 5) Celebrate the unique person emerging. Research shows gardener-parented children are more creative, resilient, and self-aware.",
  },
  {
    id: "gac-2",
    source: "The Gardener and the Carpenter",
    sourceDetails: "Alison Gopnik — The Role of Play",
    category: "confidence",
    text: "Gopnik's research shows that play is not a break from learning — it IS learning. Unstructured, child-led play (not adult-directed activities) is how children: 1) Test hypotheses about the physical world. 2) Practice social roles and empathy. 3) Develop creativity and problem-solving. 4) Process emotions. 5) Build executive function. The more 'educational' an activity is (flashcards, apps, structured lessons), the LESS children actually learn. The best learning happens through open-ended exploration. Provide materials, time, and freedom. Don't turn play into work. Children are scientists — their play is their research.",
  },
  {
    id: "gac-3",
    source: "The Gardener and the Carpenter",
    sourceDetails: "Alison Gopnik — Learning Through Observation",
    category: "behavior",
    text: "Gopnik's research reveals that children learn primarily through OBSERVATION and IMITATION, not instruction. They watch what you do far more than they listen to what you say. Implications: 1) If you want a kind child, model kindness. 2) If you want a reader, let them see you reading. 3) If you want an emotionally regulated child, model emotional regulation. 4) Children also absorb your stress, your conflicts, and your phone habits. 5) 'Do as I say, not as I do' doesn't work — children's brains are wired to copy behavior. Your example is the most powerful teaching tool you have. Use it wisely.",
  },

// --- DECODING YOUR CHILD (Dr. Queennie) ---
  {
    id: "dyc-1",
    source: "Decoding Your Child",
    sourceDetails: "Dr. Queennie — Behavior as Communication",
    category: "behavior",
    text: "All behavior is communication. When a child misbehaves, they're expressing a need they can't articulate: 1) Attention-seeking = connection-seeking. 2) Control-seeking = autonomy-seeking. 3) Avoidance = anxiety or skill deficit. 4) Disruption = sensory overload or dysregulation. Instead of 'How do I stop this behavior?' ask 'What is my child trying to tell me?' and 'What need is unmet?' Once you address the underlying need, the behavior often resolves naturally. This reframes misbehavior from a problem to eliminate into a message to decode. Children aren't giving you a hard time — they're HAVING a hard time.",
  },
  {
    id: "dyc-2",
    source: "Decoding Your Child",
    sourceDetails: "Dr. Queennie — Patterns and Triggers",
    category: "emotional",
    text: "To decode behavior patterns: Keep a simple log for 1-2 weeks noting WHAT happened, WHEN, WHERE, WHO was present, and WHAT preceded it. Look for patterns: Does the meltdown always happen before dinner? (Hunger.) Always at transitions? (Difficulty shifting.) Always when you're on your phone? (Connection need.) Always with a particular friend? (Social stress.) Once you see the pattern, you can prevent the trigger rather than just reacting to the behavior. Prevention is more effective than reaction. A predictable trigger is an actionable insight.",
  },
  {
    id: "dyc-3",
    source: "Decoding Your Child",
    sourceDetails: "Dr. Queennie — Developmental vs Behavioral",
    category: "emotional",
    text: "Distinguish between developmental behavior (normal for the age/stage) and behavioral issues (require intervention). Developmental: toddler saying 'no' to everything (autonomy development), preschooler struggling to share (theory of mind still developing), teen pulling away (identity formation). These will resolve with patience and gentle guidance. Behavioral issues that need attention: persistent aggression, chronic anxiety, significant regression, self-harm, extreme non-compliance that disrupts daily life. When in doubt, consult a pediatrician or child psychologist — early assessment and support is always better than waiting.",
  },

// --- BRIGHT FROM THE START (Dr. Jill Stamm) ---
  {
    id: "bfs-1",
    source: "Bright From the Start",
    sourceDetails: "Dr. Jill Stamm — The ABCs of Brain Development",
    category: "confidence",
    text: "Dr. Stamm identifies three pillars of early brain development: A = Attention (face-to-face interaction, not screens). B = Bonding (secure attachment through responsive caregiving). C = Communication (talking, singing, reading — language exposure builds brain architecture). These three pillars are more important than any toy, class, or app. Practical application: 1) Get face-to-face and make eye contact daily. 2) Respond consistently to your baby's cries (builds trust and brain wiring). 3) Talk constantly about what you're doing ('Now I'm chopping carrots...'). 4) Read together daily from birth. 5) No screens before 18 months.",
  },
  {
    id: "bfs-2",
    source: "Bright From the Start",
    sourceDetails: "Dr. Jill Stamm — Attention and Focus",
    category: "school",
    text: "Attention is the foundation of all learning. To develop attention in young children: 1) Follow their lead — when they're focused on something, don't redirect ('Look at THIS instead!'). Let them explore at their own pace. 2) Reduce background noise and visual clutter. 3) Limit screen time — screens train the brain for rapid scene changes, destroying sustained attention. 4) Provide open-ended materials (blocks, art supplies) that can hold attention for long periods. 5) Protect their focus — don't interrupt deep play for snacks, photos, or schedules. A child who can sustain attention at 3 will learn better at 7, 11, and 16.",
  },
  {
    id: "bfs-3",
    source: "Bright From the Start",
    sourceDetails: "Dr. Jill Stamm — Stress and the Young Brain",
    category: "emotional",
    text: "Chronic stress damages the developing brain. In the first three years, the brain is laying down foundational architecture. Toxic stress (abuse, neglect, household dysfunction, parental depression) floods the brain with cortisol, which impairs brain development. Protective factors: 1) At least one stable, responsive adult relationship. 2) A safe, predictable home environment. 3) Adequate nutrition and sleep. 4) Access to support services. If you're struggling with depression, anxiety, or domestic stress, seeking help for YOURSELF is one of the most important things you can do for your child's brain.",
  },

// --- NURTURESHOCK (Po Bronson & Ashley Merryman) ---
  {
    id: "ns-1",
    source: "NurtureShock",
    sourceDetails: "Bronson & Merryman — The Inverse Power of Praise",
    category: "confidence",
    text: "Research shows that praising intelligence ('You're so smart') actually makes children LESS likely to take on challenges. They develop a fixed mindset: 'If I'm smart, I shouldn't have to try hard. If I fail, maybe I'm not smart.' Instead, praise specific effort and strategy: 'I noticed you tried three different ways to solve that problem before you figured it out.' Children praised for effort choose harder tasks and persist longer. This aligns with Carol Dweck's growth mindset research. The key finding: the TYPE of praise matters more than the AMOUNT. Effort praise builds resilient learners; intelligence praise creates fragile perfectionists.",
  },
  {
    id: "ns-2",
    source: "NurtureShock",
    sourceDetails: "Bronson & Merryman — Sleep and Learning",
    category: "sleep",
    text: "NurtureShock reveals that children today get an hour less sleep than they did 30 years ago, and the consequences are severe. Missing just one hour of sleep reduces a child's cognitive performance equivalent to two grade levels. Sleep deprivation in children is linked to: lower IQ scores, ADHD-like symptoms, obesity, weakened immune system, emotional dysregulation, and lower academic performance. Teenagers need 8-10 hours; school-age children need 9-11 hours; toddlers need 11-14 hours. Protect sleep like you protect nutrition. Earlier bedtimes consistently produce better outcomes than later ones across every measure.",
  },
  {
    id: "ns-3",
    source: "NurtureShock",
    sourceDetails: "Bronson & Merryman — Lying and Honesty",
    category: "behavior",
    text: "Research shows that 96% of children lie to their parents. Lying is a developmental milestone (it requires theory of mind — understanding that you don't know what they know). Children lie primarily to avoid getting in trouble — and harsh punishment for lying INCREASES lying (they learn to lie better). To encourage honesty: 1) Don't set traps ('Did you break this?' when you know they did). 2) Offer a 'confession window': 'I'm going to ask you something, and if you tell me the truth, I promise I won't be angry.' 3) Praise honesty even when it's uncomfortable. 4) Reduce the fear factor — children who aren't afraid of explosions tell the truth more readily.",
  },
  {
    id: "ns-4",
    source: "NurtureShock",
    sourceDetails: "Bronson & Merryman — Sibling Relationships",
    category: "sibling",
    text: "NurtureShock research: sibling conflict is the #1 source of childhood stress, and children fight on average every 17 minutes when together. Key findings: 1) Siblings don't naturally learn conflict resolution — they learn to WIN. 2) Parents intervening to determine 'who started it' makes things worse. 3) The best predictor of a good sibling relationship is the child's relationship with their BEST FRIEND — if they've learned to manage a friend's feelings, they'll manage their sibling's. 4) Reading books and watching shows about siblings resolving conflict actually helps. 5) Don't force them to play together — positive shared experiences build the relationship better than forced proximity.",
  },
  {
    id: "ns-5",
    source: "NurtureShock",
    sourceDetails: "Bronson & Merryman — Teen Rebellion and Brain Science",
    category: "teen",
    text: "Brain research shows that teen risk-taking isn't about poor judgment — it's about the reward center of the brain being hyperactive while the prefrontal cortex (inhibition) is still developing. Teens genuinely perceive risk accurately; they just value the social reward of risk-taking more than adults do. Implications: 1) Lectures about risk don't work — the teen brain already knows the risks. 2) What works: helping them develop their OWN reasons to avoid dangerous behavior. 3) Peer influence is enormous — know their friends. 4) Negotiated rules (created WITH the teen) work better than imposed rules. 5) Sleep is critical — sleep-deprived teens take significantly more risks.",
  },

// --- THE CONSCIOUS PARENT (Dr. Shefali Tsabary) ---
  {
    id: "cp-1",
    source: "The Conscious Parent",
    sourceDetails: "Dr. Shefali Tsabary — The Parent's Triggers",
    category: "parent",
    text: "Dr. Shefali's core insight: your child's behavior triggers YOUR unresolved issues from childhood. When you react intensely to something minor (a messy room, a back-talk), it's not about the child — it's about you. The child is your mirror. Practice: 1) When triggered, PAUSE and ask: 'Why am I reacting so strongly to this?' 2) 'What does this remind me of from my own childhood?' 3) 'What am I really afraid of?' 4) Separate your emotional baggage from your child's behavior. 5) Respond to the CHILD in front of you, not the ghost of your own past. Parenting is the most powerful personal growth journey available.",
  },
  {
    id: "cp-2",
    source: "The Conscious Parent",
    sourceDetails: "Dr. Shefali Tsabary — Letting Go of Ego",
    category: "behavior",
    text: "The egoic parent seeks to control: 'My child must behave perfectly so I look like a good parent.' This leads to anxiety, micromanagement, and pressure on the child. The conscious parent asks: 'What does my child need in this moment?' rather than 'What looks good to others?' Signs of ego-driven parenting: being more concerned with appearances than connection, comparing your child to others, feeling embarrassed by your child's normal behavior in public, needing your child to achieve to feel worthy. Practice releasing ego: your child is not a reflection of you — they are their own person on their own journey.",
  },
  {
    id: "cp-3",
    source: "The Conscious Parent",
    sourceDetails: "Dr. Shefali Tsabary — Accepting the Present Moment",
    category: "emotional",
    text: "Conscious parenting means accepting the present moment without trying to change it. When your child is having a meltdown, instead of 'How do I make this stop?' try 'I am here with you in this moment. I accept your feelings.' This doesn't mean accepting harmful behavior — it means accepting the EMOTION beneath it. Presence is more powerful than any technique. Your child will not remember what you SAID during their hardest moments — they'll remember that you STAYED. Being fully present (not planning your response, not scrolling your phone, not wishing the moment away) is the deepest form of love.",
  },
  {
    id: "cp-4",
    source: "The Conscious Parent",
    sourceDetails: "Dr. Shefali Tsabary — Partnership Not Hierarchy",
    category: "confidence",
    text: "Dr. Shefali reframes parenting from a hierarchy (parent above child) to a partnership (two souls growing together). The parent has more life experience, but the child has wisdom too — they are fully formed spirits, not incomplete adults. When you treat your child as a partner: 1) You listen more than you direct. 2) You ask 'What do you think?' before deciding. 3) You admit when you're wrong. 4) You apologize sincerely. 5) You respect their preferences (food, clothing, activities). 6) You don't use physical size or power to coerce. Partnership creates respectful, confident children who expect to be treated with dignity.",
  },
  {
    id: "cp-5",
    source: "The Conscious Parent",
    sourceDetails: "Dr. Shefali Tsabary — Discomfort as Growth",
    category: "parent",
    text: "Conscious parenting embraces discomfort as a signal for growth — for BOTH parent and child. When your child is struggling, your instinct is to remove the discomfort. But sometimes sitting WITH them in difficulty (while staying supportive) is more valuable than fixing it. When YOUR child's behavior makes you uncomfortable, lean into that discomfort rather than suppressing it with anger. Ask: 'What is this trying to teach me?' Parenting will bring up every insecurity, fear, and wound you've ever had. This is the work. Your child is your greatest teacher — if you're willing to learn.",
  },

// --- A GOOD ENOUGH PARENT (Bruno Bettelheim) ---
  {
    id: "gep-1",
    source: "A Good Enough Parent",
    sourceDetails: "Bruno Bettelheim — Accepting Imperfection",
    category: "parent",
    text: "Bettelheim's Winnicott-inspired principle: the 'good enough' parent is exactly what children need. Perfection in parenting is both impossible and undesirable. Children need to see that mistakes happen and can be repaired. They need a parent who is real, not a saint. Being 'good enough' means: 1) Meeting the child's needs most of the time. 2) Making mistakes and modeling repair. 3) Being emotionally available, not perfect. 4) Setting boundaries without rigidity. 5) Forgiving yourself for not doing it all. Children of 'perfect' parents grow up with anxiety and perfectionism. Children of 'good enough' parents grow up resilient.",
  },
  {
    id: "gep-2",
    source: "A Good Enough Parent",
    sourceDetails: "Bruno Bettelheim — Meaning-Making in Childhood",
    category: "emotional",
    text: "Children are constantly making meaning from their experiences. They ask (implicitly): 'Am I loved? Am I safe? Am I capable? Do I matter?' Every interaction answers these questions. When you delight in your child's presence (not just their achievements), you answer 'Yes, you matter.' When you listen with full attention, you answer 'Yes, you're worth listening to.' When you help them through hard feelings, you answer 'Yes, all of you is welcome here.' The accumulation of these daily micro-moments builds the child's core self-concept. You don't need special techniques — you need consistent loving attention.",
  },
  {
    id: "gep-3",
    source: "A Good Enough Parent",
    sourceDetails: "Bruno Bettelheim — Discipline as Teaching",
    category: "behavior",
    text: "Bettelheim viewed discipline not as punishment but as teaching. The word comes from 'disciple' — a learner. Effective discipline: 1) Focus on what the child should DO, not what they did wrong. 2) Use mistakes as teaching moments, not punishment opportunities. 3) Ensure the 'consequence' is related to the behavior (natural or logical, not arbitrary). 4) Never discipline from anger — wait until you're calm. 5) Keep the relationship intact: 'I love you AND the behavior needs to change.' 6) Remember that children want to do well — if they're not, something is getting in the way.",
  },

// --- KIDS ARE WORTH IT! (Barbara Coloroso) ---
  {
    id: "kiw-1",
    source: "Kids Are Worth It!",
    sourceDetails: "Barbara Coloroso — Three Types of Families",
    category: "behavior",
    text: "Coloroso identifies three parenting styles: 1) BRICKWALL (authoritarian): rigid rules, obedience demanded, punishment-based, children's feelings dismissed. Produces rebellious or fear-driven children. 2) JELLYFISH (permissive): few rules, no boundaries, children run the show. Produces anxious, entitled children who lack self-discipline. 3) BACKBONE (authoritative): firm boundaries with warmth, rules with reasons, mistakes are teaching opportunities, children's voices heard. Produces responsible, capable, empathetic children. The goal is backbone parenting: structure AND warmth, limits AND empathy, accountability AND unconditional love.",
  },
  {
    id: "kiw-2",
    source: "Kids Are Worth It!",
    sourceDetails: "Barbara Coloroso — Discipline with Dignity",
    category: "behavior",
    text: "Coloroso's principles of discipline with dignity: 1) Show the child respect even when correcting them. 2) Never humiliate, shame, or use sarcasm. 3) If the mistake was a thinking error, teach the correct thinking. 4) If it was a skill error, teach the skill. 5) Use 'restitution' — the child makes amends rather than being punished. 'You broke the window. How will you help fix it?' 6) Separate the deed from the doer: 'I love you. That behavior is not acceptable.' 7) Give children the opportunity to reconcile. Children who maintain their dignity through mistakes learn faster and repeat the behavior less.",
  },
  {
    id: "kiw-3",
    source: "Kids Are Worth It!",
    sourceDetails: "Barbara Coloroso — The Three R's of Discipline",
    category: "behavior",
    text: "Coloroso's three R's for effective consequences: 1) RELATED — the consequence must be connected to the behavior (if you make a mess, you clean it up — not, you made a mess so no TV). 2) RESPECTFUL — delivered calmly, without humiliation or blame. 3) REASONABLE — proportional and age-appropriate. Arbitrary consequences (arbitrary loss of privileges for an unrelated misdeed) don't teach — they just cause resentment. Natural consequences (you forgot your coat, you'll be cold) are the best teacher when safe. Logical consequences (you spilled juice, here's a cloth to clean it) when natural ones aren't practical.",
  },
  {
    id: "kiw-4",
    source: "Kids Are Worth It!",
    sourceDetails: "Barbara Coloroso — Empowering Kids",
    category: "confidence",
    text: "To empower children: 1) Give them real responsibilities from a young age (family contributions, not chores). 2) Let them solve their own problems (with support, not rescue). 3) Teach them critical thinking: 'Is this safe? Is it fair? Does it show respect?' 4) Encourage them to stand up for themselves and others. 5) Model assertiveness (not aggression, not passivity). 6) Teach them that their voice matters: in the family, at school, in the world. 7) Don't do for them what they can do for themselves. Empowered children become adults who advocate for themselves and contribute to their communities.",
  },

// === PUBLIC HEALTH SOURCES ===

// --- NHS PARENTING RESOURCES ---
  {
    id: "nhs-1",
    source: "NHS Parenting Guide",
    sourceDetails: "NHS — Child Development 0-5 Years",
    category: "confidence",
    text: "NHS developmental milestones: By 6 months: rolls over, reaches for objects, responds to name. By 12 months: crawls or shuffles, stands holding on, says first words, uses pincer grip. By 18 months: walks independently, says 6-20 words, points at objects. By 2 years: runs, uses 2-word phrases, copies you doing chores. By 3 years: climbs well, speaks in short sentences, engages in pretend play. By 4 years: hops on one foot, tells stories, dresses with help. By 5 years: draws a person, counts to 10, plays cooperatively. IMPORTANT: Every child develops at their own pace. These are averages, not deadlines. If concerned about development, contact your health visitor or GP.",
  },
  {
    id: "nhs-2",
    source: "NHS Parenting Guide",
    sourceDetails: "NHS — Sleep Guidance by Age",
    category: "sleep",
    text: "NHS sleep guidelines: Newborns (0-3 months): 14-17 hours in 2-4 hour blocks. Infants (4-12 months): 12-16 hours including naps. Toddlers (1-2 years): 11-14 hours including 1-2 naps. Preschoolers (3-5 years): 10-13 hours, most stop napping by age 4. School age (6-12 years): 9-12 hours. Teenagers (13-18): 8-10 hours. Signs of adequate sleep: child wakes naturally, has energy during the day, doesn't need excessive caffeine (for teens). Signs of insufficient sleep: irritability, difficulty concentrating, hyperactivity (sleep deprivation mimics ADHD), frequent illness, weight gain. Consistent bedtime routines are the single most effective intervention for sleep problems.",
  },
  {
    id: "nhs-3",
    source: "NHS Parenting Guide",
    sourceDetails: "NHS — Managing Common Behaviour Problems",
    category: "behavior",
    text: "NHS advice for common behavior issues: 1) Ignore minor attention-seeking behavior — giving attention (even negative) reinforces it. 2) Praise the behavior you want to see more of — be specific ('Thank you for putting your shoes away'). 3) Set clear, simple rules — children respond to consistency. 4) Use 'time-in' rather than 'time-out' for under-5s — sit with them while they calm down. 5) For tantrums: stay calm, ensure safety, don't give in, wait for it to pass. 6) Be consistent between caregivers — mixed messages confuse children. 7) Lead by example — if you want respectful children, model respectful behavior. If behavior concerns persist, contact your health visitor or GP.",
  },
  {
    id: "nhs-4",
    source: "NHS Parenting Guide",
    sourceDetails: "NHS — Healthy Eating for Children",
    category: "eating",
    text: "NHS healthy eating for children: 1) The Eatwell Guide applies to children over 2: at least 5 portions of fruit/vegetables daily, whole grains, protein (fish, beans, eggs, meat), dairy or fortified alternatives. 2) Limit sugar — under 4s should avoid added sugar entirely; water and milk are the best drinks. 3) Limit fruit juice (even unsweetened) to 150ml/day and only with meals. 4) Children under 5 need vitamin drops (vitamins A, C, D) daily. 5) Family meals matter — eat together when possible. 6) Portion sizes: a child's portion is roughly the size of their fist. 7) Don't use food as reward or punishment. 8) Encourage children to listen to their own hunger and fullness.",
  },
  {
    id: "nhs-5",
    source: "NHS Parenting Guide",
    sourceDetails: "NHS — Fever and Common Illnesses",
    category: "parent",
    text: "NHS guidance on fever: A normal temperature is around 36.4°C. A fever is 38°C or above. For children over 3 months: offer regular fluids, keep them comfortable (light clothing), give paracetamol or ibuprofen if distressed. URGENT medical help (call 999 or go to A&E): your child stops breathing, won't wake up, has a rash that doesn't fade under glass, has a seizure, or has difficulty breathing. Contact 111 or your GP if: fever lasts more than 5 days, child is under 3 months with fever, child is getting worse, you're worried. Trust your instincts — parents know their child. Never give aspirin to under-16s.",
  },
  {
    id: "nhs-6",
    source: "NHS Parenting Guide",
    sourceDetails: "NHS — Toilet Training Advice",
    category: "toilet",
    text: "NHS toilet training advice: 1) Wait until your child shows signs of readiness (dry for 1-2 hours, interested in toilet, can follow instructions). Most children are ready between 18 months and 3 years. 2) Start by letting them sit on the potty fully clothed to get used to it. 3) Use a potty or toilet with a child seat and footstool. 4) Encourage sitting on the potty after meals. 5) Dress them in clothes they can easily remove. 6) Praise effort, not just success. 7) Stay calm about accidents — they're part of learning. 8) Nighttime dryness comes later (usually ages 3-5). If your child is over 4 and not making progress, or if toilet training was going well and has regressed significantly, speak to your health visitor or GP.",
  },
  {
    id: "nhs-7",
    source: "NHS Mental Health",
    sourceDetails: "NHS — Children's Mental Health",
    category: "emotional",
    text: "NHS children's mental health: 1 in 6 children aged 5-16 has a probable mental health disorder. Signs to watch for: persistent sadness (more than 2 weeks), withdrawal from friends and activities, significant changes in eating or sleeping, frequent physical complaints (tummy ache, headache), intense worry or fear, repeated disobedience or aggression, talking about self-harm or suicide. Response: 1) Talk openly — ask how they're feeling. 2) Don't dismiss concerns ('it's just a phase'). 3) Contact your GP or school nurse. 4) In England, every school has a mental health lead. 5) YoungMinds helpline: 0808 802 5544. 6) In crisis: call 111 or go to A&E. Early support makes a significant difference.",
  },
  {
    id: "nhs-8",
    source: "NHS Parenting Guide",
    sourceDetails: "NHS — Screen Time Recommendations",
    category: "screen",
    text: "NHS screen time advice: 1) Children under 2 should have no screen time except video calls. 2) Ages 2-5: maximum 1 hour per day of high-quality content, ideally with a parent. 3) Ages 5+: consistent limits based on family rules. 4) Create screen-free zones: bedrooms, meal times, and 1 hour before bed. 5) Talk about what they're watching. 6) Choose high-quality, age-appropriate content (check Common Sense Media). 7) Balance screen time with physical activity, social interaction, and sleep. 8) Model healthy screen habits yourself. 9) Watch for signs of problematic use: mood changes, sleep disruption, withdrawal from activities. Remember: screen quality matters as much as screen quantity.",
  },
  {
    id: "nhs-9",
    source: "NHS Parenting Guide",
    sourceDetails: "NHS — Vaccination Schedule",
    category: "parent",
    text: "NHS childhood vaccination schedule: 8 weeks: 6-in-1 vaccine, MenB, rotavirus. 12-13 weeks: 6-in-1 second dose, PCV, rotavirus second dose. 16 weeks: 6-in-1 third dose, MenB second dose. 1 year: MMR, Hib/MenC, PCV, MenB third dose. 2-4 years: annual flu nasal spray. 3 years 4 months: MMR second dose, 4-in-1 pre-school booster. 12-13 years: HPV (2 doses). 14 years: 3-in-1 teenage booster, MenACWY. Vaccines protect your child AND vulnerable community members. They are extensively tested for safety. If you have concerns, discuss with your GP — don't delay. Delaying vaccines leaves your child vulnerable to serious, preventable diseases.",
  },
  {
    id: "nhs-10",
    source: "NHS Parenting Guide",
    sourceDetails: "NHS — Dental Health for Children",
    category: "routines",
    text: "NHS children's dental health: 1) Start brushing as soon as the first tooth appears — twice daily with fluoride toothpaste. 2) Under 3: use a smear of toothpaste (1000ppm fluoride). 3) 3-6 years: pea-sized amount (1000ppm+). 4) 7+: standard family fluoride toothpaste (1350-1500ppm). 5) Spit, don't rinse (leaves fluoride protecting teeth). 6) Supervise brushing until age 7. 7) First dental visit by age 1, then every 6 months (free on NHS for children). 8) Limit sugary foods and drinks. 9) Only water or milk between meals. 10) Don't add sugar to baby food. Good dental habits in childhood prevent lifelong problems.",
  },
  {
    id: "nhs-11",
    source: "NHS Parenting Guide",
    sourceDetails: "NHS — Postnatal Depression and Maternal Mental Health",
    category: "parent",
    text: "NHS guidance on postnatal mental health: Baby blues (common, days 3-10): tearfulness, anxiety, mood swings — usually passes within 2 weeks. Postnatal depression (affects 1 in 10 women within a year of birth): persistent low mood, lack of enjoyment, negative thoughts, difficulty bonding, exhaustion, anxiety about the baby. Postpartum psychosis (rare, 2 in 1000): hallucinations, delusions, extreme confusion — EMERGENCY. Perinatal mental health services are available on the NHS. Talk to your GP, health visitor, or midwife. Treatment options: talking therapy (CBT), medication (some are safe for breastfeeding), peer support. Fathers can get postnatal depression too. This is not weakness — it's a medical condition. Help is available and effective.",
  },

// --- CDC CHILD DEVELOPMENT GUIDELINES ---
  {
    id: "cdc-1",
    source: "CDC Child Development",
    sourceDetails: "CDC — Milestones 2 Months",
    category: "confidence",
    text: "CDC milestones at 2 months: SOCIAL/EMOTIONAL: calms down when spoken to or picked up, looks at your face, seems happy to see you when you walk up, smiles when you talk. LANGUAGE/COMMUNICATION: makes sounds other than crying. COGNITIVE: watches you as you move, looks at a toy for several seconds. MOVEMENT: holds head up when on tummy, moves both arms and both legs, opens hands briefly. These milestones are guidelines, not strict deadlines. If your child isn't meeting several milestones, or you have concerns, talk to your pediatrician. Early intervention services are free and highly effective when needed. Trust your instincts — parents are usually the first to notice when something seems different.",
  },
  {
    id: "cdc-2",
    source: "CDC Child Development",
    sourceDetails: "CDC — Positive Parenting Tips (Infants)",
    category: "parent",
    text: "CDC positive parenting tips for infants: 1) Talk, read, and sing to your baby daily — language exposure builds brain architecture. 2) Respond to your baby's cries — you cannot spoil a baby. Responsive caregiving builds secure attachment. 3) Provide tummy time when awake and supervised — builds neck and shoulder muscles. 4) Use a rear-facing car seat in the back seat. 5) Put baby to sleep ALONE, on their BACK, in a CRIB (ABC of safe sleep) — no pillows, blankets, or toys. 6) Keep up with well-baby visits and vaccinations. 7) Limit visitors when baby is very young. 8) Take care of yourself — a healthy parent means a healthy baby.",
  },
  {
    id: "cdc-3",
    source: "CDC Child Development",
    sourceDetails: "CDC — Milestones and Concerns (Toddlers)",
    category: "behavior",
    text: "CDC milestones at 18 months: SOCIAL/EMOTIONAL: moves away from you but looks back to make sure you're close, points to show you something interesting, copies you doing chores, shows affection with hugs and cuddles. LANGUAGE: tries to say 3 or more words besides 'mama' and 'dada.' COGNITIVE: copies you doing chores, plays with toys in a simple way (pushing a car). MOVEMENT: walks alone, scribbles, drinks from a cup without a lid as you hold it. RED FLAGS: no words by 15 months, doesn't show objects to others, doesn't walk, loses skills they once had. Contact early intervention if concerned.",
  },
  {
    id: "cdc-4",
    source: "CDC Child Development",
    sourceDetails: "CDC — Milestones (Preschool 3-4 Years)",
    category: "social",
    text: "CDC milestones at 3 years: SOCIAL/EMOTIONAL: notices other children and joins them to play, takes turns, dresses self with help. LANGUAGE: talks with you in conversation using at least two back-and-forth exchanges, asks 'who,' 'what,' 'where,' 'why' questions. COGNITIVE: draws a circle when shown how, avoids touching hot objects. MOVEMENT: strings items together, puts on some clothes by self, uses a fork. At 4: catches a large ball, serves themselves food, uses scissors, names a few colors. If your child isn't meeting milestones, don't wait — early intervention before age 5 makes a dramatic difference. Contact your pediatrician.",
  },
  {
    id: "cdc-5",
    source: "CDC Child Development",
    sourceDetails: "CDC — Positive Parenting Tips (Preschoolers)",
    category: "behavior",
    text: "CDC positive parenting for preschoolers (3-5 years): 1) Continue reading together daily — let them choose books. 2) Play counting games and sort objects by color/shape. 3) Provide opportunities to play with other children. 4) Give simple choices ('Red cup or blue cup?'). 5) Set clear, consistent limits — follow through calmly. 6) Help them name their emotions ('You seem frustrated'). 7) Encourage independence in dressing, toileting, helping. 8) Limit screen time to 1 hour of high-quality content. 9) Ensure 10-13 hours of sleep. 10) Keep up with well-child visits and dental checkups. 11) Praise effort and persistence, not just outcomes.",
  },
  {
    id: "cdc-6",
    source: "CDC Child Development",
    sourceDetails: "CDC — ADHD in Children",
    category: "behavior",
    text: "CDC on ADHD: Symptoms include daydreaming a lot, forgetting or losing things frequently, squirming or fidgeting, excessive talking, making careless mistakes, difficulty taking turns, difficulty getting along with others. Diagnosis requires symptoms in more than one setting (home AND school) lasting at least 6 months, present before age 12. Treatment may include: behavioral therapy (first line for under 6), parent training, school accommodations, and sometimes medication. ADHD is neurodevelopmental, not caused by poor parenting, too much sugar, or laziness. With proper support, children with ADHD thrive. Contact your pediatrician if you suspect ADHD.",
  },
  {
    id: "cdc-7",
    source: "CDC Child Development",
    sourceDetails: "CDC — Autism Spectrum Disorder",
    category: "behavior",
    text: "CDC early signs of autism: By 9 months: no back-and-forth sharing of sounds, smiles, or facial expressions. By 12 months: no babbling, no back-and-forth gestures (pointing, waving), no response to name. By 16 months: no words. By 24 months: no meaningful two-word phrases. Also: restricted/repetitive behaviors, intense interests, sensory sensitivities (lights, sounds, textures), delayed language skills, delayed motor skills. Autism can be reliably diagnosed by 18-24 months. If you notice these signs: 1) Don't wait — contact your pediatrician for screening. 2) Early intervention dramatically improves outcomes. 3) Autism is a spectrum — presentation varies widely. 4) Autistic children can lead rich, fulfilling lives with appropriate support.",
  },
  {
    id: "cdc-8",
    source: "CDC Essentials for Childhood",
    sourceDetails: "CDC — Preventing Adverse Childhood Experiences",
    category: "parent",
    text: "CDC strategies for creating safe, stable, nurturing relationships: 1) Ensure economic support for families (financial stress is a major risk factor for abuse and neglect). 2) Provide quality childcare and early education. 3) Parenting skill programs (Triple P, Incredible Years). 4) Intervene to prevent violence and abuse. 5) Connect families to community resources. At the family level: 1) Build a support network — isolation is dangerous. 2) Learn about child development — realistic expectations prevent frustration. 3) Manage parental stress. 4) Never shake a baby — shaken baby syndrome causes permanent brain damage or death. If overwhelmed: put the crying baby in a safe place and step outside for 5 minutes. Call someone. This is not failure — it's safe parenting.",
  },
  {
    id: "cdc-9",
    source: "CDC Child Development",
    sourceDetails: "CDC — Developmental Screening",
    category: "confidence",
    text: "CDC recommends developmental screening at 9 months, 18 months, and 24-30 months (or whenever there's a concern). Screening uses validated tools like the Ages and Stages Questionnaire (ASQ) or M-CHAT (autism screening at 18 and 24 months). These are quick, non-invasive check-ups for development — just like height and weight checks for physical health. Early identification of developmental delays leads to dramatically better outcomes. Early intervention services (available free in the US through IDEA Part C, and through local authorities in the UK) can address speech delays, motor delays, social-emotional challenges, and cognitive delays. Don't wait and see — act early.",
  },
  {
    id: "cdc-10",
    source: "CDC Child Development",
    sourceDetails: "CDC — Middle Childhood (6-11 Years)",
    category: "school",
    text: "CDC on middle childhood (6-11 years): This is a critical period for developing self-confidence, friendships, and academic skills. Children this age: want more independence, spend more time with friends, face academic challenges, begin comparing themselves to peers. Parenting strategies: 1) Show affection — they still need it even if they act cool. 2) Praise effort and progress. 3) Establish homework routines. 4) Know their friends and their friends' families. 5) Set clear rules and consequences — involve them in rule-making. 6) Limit screen time and monitor content. 7) Encourage physical activity (at least 1 hour daily). 8) Ensure adequate sleep (9-12 hours). 9) Talk about bullying, online safety, and body changes.",
  },

// --- WHO CHILD HEALTH GUIDELINES ---
  {
    id: "who-1",
    source: "WHO Child Health",
    sourceDetails: "WHO — Breastfeeding Recommendations",
    category: "eating",
    text: "WHO breastfeeding guidance: Exclusive breastfeeding is recommended for the first 6 months of life. At 6 months, introduce safe, appropriate complementary (solid) foods while continuing breastfeeding for up to 2 years or beyond. Benefits of breastfeeding: optimal nutrition, antibodies that protect against infections, reduced risk of diarrhea, respiratory infections, and ear infections; lower risk of SIDS, type 1 diabetes, and obesity; promotes mother-baby bonding. If breastfeeding is challenging: seek support from a lactation consultant. If breastfeeding isn't possible or chosen: formula provides adequate nutrition. The parent's mental health matters more than the feeding method. Fed is best. Never pressure or shame a mother about feeding choices.",
  },
  {
    id: "who-2",
    source: "WHO Child Health",
    sourceDetails: "WHO — Physical Activity for Children",
    category: "routines",
    text: "WHO physical activity guidelines: Children under 1: physically active several times daily (floor play, tummy time). Children 1-2 years: at least 180 minutes (3 hours) of physical activity daily — any intensity, spread throughout the day. Children 3-4 years: at least 180 minutes, of which 60 minutes should be moderate-to-vigorous. Children 5-17 years: at least 60 minutes of moderate-to-vigorous activity daily, plus muscle and bone-strengthening activities 3 times per week. Limit sedentary screen time (under 2s: none; 2-4s: max 1 hour). Physical activity improves motor skills, cognitive development, bone health, and emotional wellbeing. Outdoor play is the easiest way to meet these targets.",
  },
  {
    id: "who-3",
    source: "WHO Child Health",
    sourceDetails: "WHO — Mental Health and Psychosocial Wellbeing",
    category: "emotional",
    text: "WHO on children's mental health: Half of all mental health conditions start by age 14. Promoting psychosocial wellbeing starts in early childhood: 1) Responsive caregiving (warm, consistent, attuned). 2) Opportunities for play and exploration. 3) Safe, stable environments. 4) Protection from violence, abuse, and neglect. 5) Emotional regulation coaching. 6) Social connection. Risk factors: family conflict, parental mental illness, poverty, bullying, chronic illness. If concerned about your child's mental health: seek professional help early. Stigma prevents many families from seeking support. Mental health conditions in children are real, common, and treatable. Contact your healthcare provider, school counselor, or local mental health services.",
  },
  {
    id: "who-4",
    source: "WHO Child Health",
    sourceDetails: "WHO — Screen Time and Sedentary Behaviour",
    category: "screen",
    text: "WHO screen time guidelines align with AAP and NHS: Under 2 years: no screens (except video calls). 2-4 years: maximum 1 hour daily, less is better — high-quality content co-viewed with a parent. The WHO emphasizes that young children need ACTIVE play, not passive screen consumption. Sedentary screen time displaces crucial developmental activities: physical movement, face-to-face interaction, hands-on play, and sleep. For school-age children and teens: the WHO focuses less on time limits and more on content quality, sleep protection, and balancing screens with physical activity, social interaction, and schoolwork. Screen-free meals and bedrooms are recommended for all ages.",
  },
  {
    id: "who-5",
    source: "WHO Child Health",
    sourceDetails: "WHO — Immunization and Child Survival",
    category: "parent",
    text: "WHO on childhood immunization: Vaccines prevent 2-3 million deaths every year. Key vaccines include: BCG, polio, DTP, hepatitis B, Hib, pneumococcal, rotavirus, measles (MMR), and HPV. Herd immunity protects vulnerable community members who can't be vaccinated (newborns, immunocompromised). Delaying or refusing vaccines puts your child AND others at risk. Vaccine safety: vaccines are among the most thoroughly tested medical products. Side effects are usually mild (fever, soreness). Serious adverse reactions are extremely rare. The disease a vaccine prevents is always more dangerous than the vaccine. If you have concerns, discuss them with a healthcare provider — not social media.",
  },

// --- NSPCC / CHILDLINE RESOURCES ---
  {
    id: "nspcc-1",
    source: "NSPCC",
    sourceDetails: "NSPCC — Body Safety and Abuse Prevention",
    category: "honest",
    text: "NSPCC body safety guidance (teach from age 2-3): 1) Use correct anatomical terms for body parts (penis, vulva, vagina, bottom). Children who know correct terms are statistically less likely to be targeted by abusers. 2) Teach 'PANTS rule': Privates are private. Always remember your body belongs to you. No means no. Talk about secrets that upset you. Speak up, someone can help. 3) Explain that no one should ask to see or touch their private parts, or ask them to touch anyone else's. 4) No secrets that feel wrong or scary. 5) Identify 3-5 trusted adults they can tell anything to. 6) NSPCC Helpline: 0808 800 5000. Childline: 0800 1111.",
  },
  {
    id: "nspcc-2",
    source: "NSPCC",
    sourceDetails: "NSPCC — Online Safety",
    category: "screen",
    text: "NSPCC online safety: 1) Talk about online safety early and often (from age 4-5). 2) Set up parental controls on devices, apps, and wifi. 3) Keep devices in shared family spaces (not bedrooms). 4) Teach children: never share personal information, photos, or location online. 5) Discuss what to do if they see something upsetting online (close the device, tell an adult). 6) Know the games, apps, and platforms they use. 7) Talk about online strangers — people may not be who they say they are. 8) For teens: discuss sexting risks (illegal under 18, can be shared), grooming, and digital footprint. 9) Report concerns to CEOP (Child Exploitation and Online Protection). 10) NSPCC Net Aware provides reviews of apps and games from a safety perspective.",
  },
  {
    id: "nspcc-3",
    source: "NSPCC",
    sourceDetails: "NSPCC — Recognizing Signs of Abuse",
    category: "parent",
    text: "NSPCC signs a child may be experiencing abuse: PHYSICAL: unexplained bruises, burns, or injuries; frequent injuries with vague explanations; flinching when approached. EMOTIONAL: extreme aggression or withdrawal, fear of going home, delayed development, self-harm. SEXUAL: sexual knowledge inappropriate for age, sudden changes in behavior, avoiding specific people, pain or discomfort in genital area, sexually transmitted infections. NEGLECT: consistently dirty or hungry, inappropriate clothing for weather, unaddressed medical needs, frequently unsupervised. If you suspect ANY child is being abused: call the NSPCC Helpline (0808 800 5000) or police (999). You don't need proof — professionals will investigate. Reporting could save a child's life.",
  },
  {
    id: "nspcc-4",
    source: "NSPCC",
    sourceDetails: "NSPCC — Positive Parenting to Prevent Abuse",
    category: "behavior",
    text: "NSPCC guidance on positive discipline vs abuse: Physical punishment (smacking, hitting) is illegal in Scotland and Wales, and strongly discouraged across the UK and by the AAP. Physical punishment damages the parent-child relationship, models violence as problem-solving, and is associated with increased aggression, mental health problems, and lower IQ. Alternatives that work better: 1) Set clear expectations in advance. 2) Use natural and logical consequences. 3) Time-in (sitting WITH the child). 4) Redirection for young children. 5) Problem-solving together. 6) Take a parent time-out if you feel you might hit your child: put the child somewhere safe and step away. Call someone. Never shake a baby.",
  },
  {
    id: "nspcc-5",
    source: "NSPCC",
    sourceDetails: "NSPCC — Bullying Prevention and Response",
    category: "social",
    text: "NSPCC on bullying: 1) Take bullying seriously — it can have long-lasting mental health effects. 2) Types: physical, verbal, social (exclusion, rumors), and cyberbullying. 3) If your child is being bullied: listen, don't blame them ('What did you do to provoke it?'), document everything, contact the school in writing, follow up. 4) Teach assertive responses: 'Stop,' 'Leave me alone,' walking away. 5) Build confidence through activities outside school. 6) If your child IS the bully: investigate what's driving it (insecurity, home life, peer pressure), teach empathy, set clear expectations, work with the school. 7) Childline: 0800 1111 (free, confidential). 8) Severe or persistent bullying may require changing schools.",
  },

// --- HEALTHYCHILDREN.ORG (AAP ADDITIONAL) ---
  {
    id: "aap-1",
    source: "HealthyChildren.org (AAP)",
    sourceDetails: "AAP — Temperament Understanding",
    category: "emotional",
    text: "AAP on temperament: Children are born with distinct temperaments — 'easy' (cheerful, regular, adaptable), 'difficult'/'spirited' (intense, sensitive, irregular, slow to adapt), and 'slow-to-warm-up' (mild, cautious, needs time). These are neurological, not behavioral choices. Parenting approach should MATCH the child's temperament: A spirited child needs more advance warning for transitions and more help with emotional regulation. A slow-to-warm-up child needs gentle exposure to new situations, not pushing. An 'easy' child still needs all the same love and attention. Don't compare siblings with different temperaments. Honoring temperament reduces conflict and helps children feel accepted for who they are.",
  },
  {
    id: "aap-2",
    source: "HealthyChildren.org (AAP)",
    sourceDetails: "AAP — Toddler Aggression Guidance",
    category: "anger",
    text: "AAP guidance on toddler aggression (hitting, biting, pushing): Toddlers have big feelings and limited impulse control. Their prefrontal cortex (which governs self-control) is still developing. Effective response: 1) Immediately stop the behavior ('I won't let you hit'). 2) Comfort the child who was hurt first. 3) Remove the aggressive toddler from the situation briefly. 4) Don't demand an apology in the moment — they can't access empathy mid-meltdown. 5) Later: 'You were angry. What can you do instead of hitting when you're angry?' 6) Teach alternative behaviors (stomping feet, using words, asking for help). 7) Consistency is key — every single time. Aggression decreases as language and self-regulation improve, usually by age 3-4.",
  },
  {
    id: "aap-3",
    source: "HealthyChildren.org (AAP)",
    sourceDetails: "AAP — Managing Parental Anger",
    category: "parent",
    text: "AAP advice for managing parental anger: 1) Recognize your triggers (whining, not listening, mess, defiance). 2) Notice physical warning signs (heart racing, clenched jaw, heat in your face). 3) When triggered: STOP — put the child in a safe place, step away, take 10 deep breaths. 4) Use a mantra: 'This is not an emergency. My child is not giving me a hard time — they're having a hard time.' 5) Never discipline when furious — wait 15 minutes. 6) Lower your voice instead of raising it — whispering is more powerful than shouting. 7) If you lose control: repair. Apologize. Explain what you'll do differently. 8) Seek professional support if anger feels uncontrollable. Parenting classes, therapy, and anger management are not shameful — they're responsible.",
  },
  {
    id: "aap-4",
    source: "HealthyChildren.org (AAP)",
    sourceDetails: "AAP — Sleep Associations and Healthy Sleep Habits",
    category: "sleep",
    text: "AAP on establishing healthy sleep habits: 1) Consistent bedtime and wake time (even on weekends — variation should be <1 hour). 2) Bedtime routine: bath, brush teeth, book, bed — same order every night. 3) Put child to bed DROWSY BUT AWAKE so they learn to self-soothe. 4) No screens 1 hour before bed. 5) Dark, cool (18-20°C), quiet room. 6) Avoid caffeine (cola, chocolate, tea) in the afternoon/evening. 7) No TVs, tablets, or phones in the bedroom. 8) White noise machines can help. 9) Comfort objects (blanket, teddy — safe for over 1s) provide security. 10) If child wakes: respond calmly and briefly, don't create a party at 3am. Sleep is foundational to every aspect of health and development.",
  },
  {
    id: "aap-5",
    source: "HealthyChildren.org (AAP)",
    sourceDetails: "AAP — Reading Aloud and Language Development",
    category: "school",
    text: "AAP guidance on reading aloud: Reading to children from BIRTH is one of the most powerful interventions for cognitive development, language skills, and school readiness. Benefits: builds vocabulary (children's books contain more diverse vocabulary than everyday conversation), strengthens parent-child bonding, develops listening skills and attention span, expands imagination, and prepares them for literacy. Guidelines: newborns-6 months: read daily (even briefly); 6-12 months: point to and name pictures; 1-3 years: ask questions about the story ('Where's the cat?'); 3-5 years: let them 'read' to you, discuss the story. The AAP recommends reading aloud daily from birth through at least kindergarten.",
  },

// --- ADDITIONAL CHUNKS TO REACH 120+ ---

  {
    id: "sp-7",
    source: "Simplicity Parenting",
    sourceDetails: "Kim John Payne — Boredom as a Gift",
    category: "confidence",
    text: "Boredom is not a problem to solve — it's a developmental necessity. When children say 'I'm bored,' they're on the edge of creativity. Instead of providing entertainment, respond: 'I'm sure you'll find something to do.' Boredom leads to: creative play, problem-solving, self-reflection, and independence. Children who are constantly entertained (by screens, activities, or parents) lose the ability to entertain themselves. Keep a 'boredom jar' with activity ideas they can choose from independently — but don't jump in too fast. The discomfort of boredom is the birthplace of imagination. Trust your child to find their way through it.",
  },
  {
    id: "mt-7",
    source: "The Montessori Toddler",
    sourceDetails: "Simone Davies — The Absorbent Mind",
    category: "emotional",
    text: "Children under 6 have what Montessori calls an 'absorbent mind' — they absorb everything from their environment effortlessly, like a sponge. This includes language, behaviors, emotional responses, manners, and attitudes. They don't filter — they absorb. Implications for parenting: 1) Model the behavior you want to see — they will copy it. 2) Be mindful of tone, body language, and reactions — they absorb these too. 3) The environment IS the teacher — create spaces of beauty, order, and calm. 4) Don't expect them to 'do as I say, not as I do' — they can't help but absorb what you DO. 5) This also means they absorb kindness, love, beauty, and joy — surround them with these.",
  },
  {
    id: "hcs-6",
    source: "How Children Succeed",
    sourceDetails: "Paul Tough — Curiosity as a Predictor",
    category: "school",
    text: "Paul Tough identifies curiosity as a stronger predictor of lifelong learning and success than test scores. Children who ask 'Why?' and 'How does that work?' are building the foundation for scientific thinking and creative problem-solving. To nurture curiosity: 1) Answer questions seriously, even if they seem silly. 2) Don't rush to answer — ask 'What do YOU think?' first. 3) Explore together ('I don't know — let's find out!'). 4) Provide open-ended materials (blocks, art supplies, nature items). 5) Value questions over answers. 6) Don't kill curiosity with worksheets and flashcards. 7) Curiosity-driven learning is self-sustaining; test-driven learning stops when the test is over.",
  },
  {
    id: "pp-6",
    source: "Playful Parenting",
    sourceDetails: "Lawrence Cohen — Cry Time and Healing",
    category: "emotional",
    text: "Cohen's insight on crying: tears are healing, not manipulation. When a child cries after a minor bump or disappointment, they may be releasing accumulated emotional tension from other stressors. Don't rush to stop the crying ('Don't cry, you're fine!'). Instead: 1) Stay close and present. 2) Offer a safe lap or shoulder. 3) Let the tears flow fully. 4) Don't distract or minimize. 5) When the crying ends naturally, the child is lighter, calmer, and more cooperative. This is 'cry time' — a natural emotional reset. Children who are allowed to cry fully and feel heard become MORE emotionally resilient, not less. Stifled tears don't disappear — they accumulate.",
  },
  {
    id: "up-6",
    source: "Unconditional Parenting",
    sourceDetails: "Alfie Kohn — Homework and Coercion",
    category: "school",
    text: "Kohn challenges the value of homework for young children. Research shows minimal academic benefit before middle school, yet homework causes significant family stress. Kohn suggests: 1) Advocate for reduced or eliminated homework in primary school. 2) Don't turn homework into a battleground. 3) If homework is required, make it collaborative, not coercive ('Let's look at this together' not 'Sit there until it's done'). 4) Protect family time — it's as important as academic time. 5) If your child is overwhelmed, talk to the teacher. 6) Prioritize reading for pleasure over worksheets. 7) The love of learning matters more than completing every assignment. Children who learn because they WANT to outperform those who learn because they HAVE to.",
  },
  {
    id: "nhs-12",
    source: "NHS Parenting Guide",
    sourceDetails: "NHS — Weaning and Solid Foods",
    category: "eating",
    text: "NHS weaning guidance: Start solid foods at around 6 months (not before 17 weeks, and never before 4 months). Signs of readiness: can stay in a sitting position and hold their head steady, coordinate their eyes, hands and mouth to look at food, pick it up and put it in their mouth, swallow food rather than push it back out. Start with single vegetables (broccoli, cauliflower, carrot) — not sweet foods. Progress to mashed and finger foods. Include allergenic foods early (peanut, egg, dairy) — early introduction REDUCES allergy risk. Avoid: honey under 12 months (botulism risk), whole nuts (choking — use nut butters instead), added salt and sugar. Continue breast milk or formula (at least 500-600ml/day until 12 months). Food before one is just for fun — milk remains the main nutrition source.",
  },
  {
    id: "cdc-11",
    source: "CDC Child Development",
    sourceDetails: "CDC — Safe Sleep Practices",
    category: "sleep",
    text: "CDC safe sleep recommendations (reduce SIDS risk): 1) Always place baby on their BACK to sleep (every sleep, every nap). 2) Use a firm, flat sleep surface covered by a fitted sheet. 3) Baby sleeps ALONE in a crib, bassinet, or portable crib — no bed-sharing with adults. 4) No soft objects, pillows, blankets, bumpers, or toys in the sleep area. 5) Dress baby in a sleep sack or one layer more than you're wearing — don't overheat. 6) Room-share (baby sleeps in YOUR room) for at least the first 6 months — but not bed-share. 7) Avoid smoking during pregnancy and after birth. 8) Breastfeeding reduces SIDS risk. 9) Use a pacifier at nap and bedtime (after breastfeeding is established). 10) Follow these guidelines every time, even for short naps.",
  },
  {
    id: "who-6",
    source: "WHO Child Health",
    sourceDetails: "WHO — Discipline and Child Rights",
    category: "behavior",
    text: "WHO position on discipline: Physical punishment and psychological aggression violate children's rights and have NO positive developmental benefit. Research consistently shows that physical punishment is associated with increased aggression, antisocial behavior, mental health problems, and damaged parent-child relationships. The WHO recommends: 1) Legal prohibition of all violent punishment of children. 2) Public education about positive, non-violent discipline. 3) Support for parents to develop non-violent approaches. 4) Universal parenting programs. Positive discipline approaches that work: setting clear expectations, natural and logical consequences, emotional coaching, problem-solving together, and age-appropriate autonomy. Countries that have banned smacking show NO increase in youth misbehavior — in fact, they show improvements in child wellbeing.",
  },
  {
    id: "nspcc-6",
    source: "NSPCC",
    sourceDetails: "NSPCC — Talking PANTS and Body Safety",
    category: "fears",
    text: "NSPCC 'Talk PANTS' campaign (age-appropriate body safety conversations): P = Privates are private (underwear zone is private). A = Always remember your body belongs to you (no one has the right to make you do something that feels wrong). N = No means no (you have the right to say no to unwanted touch, even from family). T = Talk about secrets that upset you (good secrets = birthday surprises that feel nice; bad secrets = anything that feels scary or uncomfortable). S = Speak up, someone can help (identify trusted adults: parents, teachers, Childline 0800 1111). Start these conversations from age 3-4, keep them ongoing, and make them as normal as teaching road safety. Don't make it scary — make it empowering.",
  },
  {
    id: "aap-6",
    source: "HealthyChildren.org (AAP)",
    sourceDetails: "AAP — Choking Prevention and Food Safety",
    category: "eating",
    text: "AAP choking prevention: Children under 4 are at highest risk because their airway is small and they're still learning to chew. High-risk foods to modify or avoid: whole grapes (quarter them lengthwise), hot dogs/sausages (quarter lengthwise then dice), nuts and seeds (avoid whole; nut butters are fine), popcorn, hard/round sweets, raw carrots/apples (cook or grate until age 4), cherry tomatoes (quarter them). Other safety tips: children should sit upright while eating, never eat while running or playing, always supervise meals. Learn infant/child CPR and choking first aid (back blows and chest thrusts for under 1; Heimlich for over 1). If a child is choking but coughing, encourage them to keep coughing. If they can't cough, cry, or breathe — act immediately.",
  },
  {
    id: "bb-4",
    source: "Bringing Up Bébé",
    sourceDetails: "Pamela Druckerman — Saying No Calmly",
    category: "behavior",
    text: "The French approach to saying 'no': French parents are comfortable saying 'no' firmly, calmly, and without lengthy explanation or guilt. They believe children need boundaries to feel secure — a firm 'no' IS a form of love. The French 'no' principles: 1) Say it like you mean it — no hesitation, no apologizing. 2) Don't over-explain — 'Because I said so' is sometimes sufficient (children can't process a lecture when they're upset). 3) Be consistent — if 'no' sometimes means 'maybe' or 'ask again in 5 minutes,' children learn to keep pushing. 4) Follow through immediately — don't issue empty threats. 5) Don't negotiate with bad behavior. 6) After enforcing the 'no,' move on warmly — don't hold a grudge.",
  },

  // === DEEPENED: 1-2-3 Magic (Thomas Phelan) ===
  {
    id: "deep-1",
    source: "1-2-3 Magic",
    sourceDetails: "Thomas Phelan — The Three Counting Errors",
    category: "behavior",
    text: "Parents undermine the counting method by making three common errors: 1) Explaining or talking too much — after you count, stop talking. Explanations should happen at neutral times, not during discipline. 2) Getting emotional — if you sound angry, frustrated, or sarcastic, the child focuses on your emotion rather than the count. Your calm neutral voice is the consequence. 3) Inconsistency — counting sometimes but not other times teaches the child that behavior is sometimes acceptable. Count every time the behavior occurs. Correct these errors and the system typically works within a week.",
  },
  {
    id: "deep-2",
    source: "1-2-3 Magic",
    sourceDetails: "Thomas Phelan — Time-Out Alternatives",
    category: "behavior",
    text: "When a child reaches three, the standard consequence is a time-out: one minute per year of age in a designated boring room (usually a bedroom). If the child refuses, add one minute to the timer. If they come out, return them without talking and reset the timer. Alternative consequences for older children: loss of screen time, loss of a privilege, or an extra chore. The key is that the consequence is automatic and predictable — the child knows exactly what happens at three. No lecturing during or after time-out. When it's over, the incident is done.",
  },
  {
    id: "deep-3",
    source: "1-2-3 Magic",
    sourceDetails: "Thomas Phelan — Sibling Fighting and Counting",
    category: "sibling",
    text: "For sibling conflicts, count both children if both are misbehaving. Don't try to figure out 'who started it' — that interrogation never works. Say 'That's one for both of you.' If one child is clearly the aggressor and the other is defending, count the aggressor. For chronic fighting, use the 'cut it out or go to separate rooms' approach: give one warning, then if it continues, both children go to different rooms for a quiet period. Don't mediate every dispute — children need practice resolving conflicts without a referee.",
  },
  {
    id: "deep-4",
    source: "1-2-3 Magic",
    sourceDetails: "Thomas Phelan — Bedtime and Morning Routines",
    category: "routines",
    text: "For bedtime resistance, use the counting method for stop behaviors (getting out of bed, calling out, arguing). Do NOT count for start behaviors like getting pajamas on or brushing teeth — instead use positive reinforcement, timers, and task breakdown for those. Establish a consistent bedtime routine that starts at the same time each night. For morning dawdling, use the 'beat the clock' game: set a timer and if the child is dressed and ready before it goes off, they earn a small reward or privilege. Avoid morning nagging — it sets a negative tone for the entire day.",
  },
  {
    id: "deep-5",
    source: "1-2-3 Magic",
    sourceDetails: "Thomas Phelan — Homework Without Battles",
    category: "school",
    text: "For homework completion, use start-behavior strategies: 1) Establish a regular homework time and place. 2) Break large assignments into small steps with short breaks between. 3) Use a timer for short work intervals (15-20 minutes for elementary, 30-45 for older kids). 4) Check completed work and give specific praise. 5) Use 'grandma's rule' — first work, then play. 6) If the child refuses, count the defiance as a stop behavior. 7) Communicate with teachers if homework consistently takes longer than expected. Never do homework for the child — it teaches dependency.",
  },
  {
    id: "deep-6",
    source: "1-2-3 Magic",
    sourceDetails: "Thomas Phelan — Public Misbehavior",
    category: "behavior",
    text: "For tantrums or misbehavior in public, count the same way you would at home. If the child reaches three in a store or restaurant, take them to the car or a quiet area for time-out. If time-out isn't possible, note the consequence for later ('That was three — no iPad after dinner'). Don't give in because you're embarrassed — giving in once teaches the child that public misbehavior works. Before outings, explain expectations: 'We're going to the store. You stay in the cart and use inside voices.' Bring small distractions for younger children.",
  },
  {
    id: "deep-7",
    source: "1-2-3 Magic",
    sourceDetails: "Thomas Phelan — The Six Kinds of Stop Behaviors",
    category: "behavior",
    text: "Counting works for six types of stop behaviors: 1) Whining — the most common and most irritating. 2) Arguing — including 'but WHY?' loops. 3) Teasing and name-calling between siblings. 4) Begging and repeated requests after being told no. 5) Yelling and screaming. 6) General aggravation — provoking, annoying, getting into things. Do NOT count for: normal developmental behavior, genuine distress or fear, or behaviors that require a different approach (like learning disabilities). Counting is for behaviors the child can control and is choosing to do.",
  },
  {
    id: "deep-8",
    source: "1-2-3 Magic",
    sourceDetails: "Thomas Phelan — Charts and Positive Reinforcement",
    category: "routines",
    text: "For start behaviors (chores, homework, getting ready), combine counting with positive reinforcement systems. Simple sticker charts work well for ages 3-8: define 2-3 target behaviors, give a sticker for completion, and offer a small reward for earning 5-10 stickers. Keep charts simple — complex point systems fail. Review the chart daily with enthusiasm. For ages 9+, use privilege-based reinforcement: completing tasks earns screen time, later bedtime on weekends, or outings with friends. Fade charts gradually once habits are established.",
  },
  {
    id: "deep-9",
    source: "1-2-3 Magic",
    sourceDetails: "Thomas Phelan — Separation Anxiety at School Drop-Off",
    category: "transition",
    text: "For school drop-off separation anxiety: 1) Do not count crying at drop-off — it's genuine distress, not manipulation. 2) Create a brief, consistent goodbye ritual (special handshake, 'see you at 3'). 3) Keep it short — lingering makes it worse. 4) Never sneak out — it breaks trust. 5) Don't promise treats for going to school — it reinforces that school is something bad to be endured. 6) If clinginess persists, talk to the teacher about a transition plan. Most children calm down within 5-10 minutes of parent leaving.",
  },
  {
    id: "deep-10",
    source: "1-2-3 Magic",
    sourceDetails: "Thomas Phelan — Teenager Adaptations",
    category: "teen",
    text: "For teenagers, counting evolves into a request-and-consequence system. Instead of 'That's one,' say 'This is your first warning. If you continue, [specific consequence].' Use larger consequences for teens: loss of phone privileges, earlier curfew, extra chores, or loss of social plans. Key adaptations: 1) Discuss rules and consequences during calm times, not in the heat of the moment. 2) Involve teens in setting household rules — they're more likely to follow rules they helped create. 3) Never physically force compliance with a teen. 4) Pick your battles — focus on safety and respect, let go of minor issues.",
  },

  // === DEEPENED: The Explosive Child (Ross Greene) ===
  {
    id: "deep-11",
    source: "The Explosive Child",
    sourceDetails: "Ross Greene — Identifying Lagging Skills",
    category: "behavior",
    text: "Explosive children often have lagging skills in specific areas: difficulty handling transitions, difficulty doing things in a logical sequence, difficulty managing frustration, inflexible thinking, black-and-white reasoning, difficulty considering others' perspectives, and poor problem-solving skills. Use the ALSUP (Assessment of Lagging Skills and Unsolved Problems) tool to identify which skills are lagging. This shifts the lens from 'this child is manipulative' to 'this child lacks the skills to meet this expectation.' Once you know the lagging skills, you know which problems to solve collaboratively.",
  },
  {
    id: "deep-12",
    source: "The Explosive Child",
    sourceDetails: "Ross Greene — Plan A vs Plan B vs Plan C",
    category: "behavior",
    text: "Three response plans: Plan A — imposing adult will ('You have to do this because I said so'). This causes explosions in inflexible children. Use sparingly, only for true safety issues. Plan B — Collaborative Problem Solving. The preferred approach for chronic problems. Involves empathy, defining concerns, and collaborative solution-finding. Plan C — setting aside the expectation for now. Used strategically to reduce overall tension. You can't solve every problem at once. Prioritize: which problems are most critical? Use Plan B on the top 1-2, set others aside with Plan C temporarily, then gradually address more as skills improve.",
  },
  {
    id: "deep-13",
    source: "The Explosive Child",
    sourceDetails: "Ross Greene — The Empathy Step",
    category: "emotional",
    text: "The first step of Plan B is gathering information from the child using empathetic inquiry. Say: 'I've noticed that [specific problem]. What's the hardest part about that for you?' Then STOP and listen. Don't correct their perception, don't offer solutions yet, don't argue. Use reflective listening: 'So it sounds like...' or 'I'm hearing that...' If the child says 'I don't know,' offer multiple choice: 'Do you think it's because it's too hard, or because it takes too long, or something else?' Getting the child's genuine perspective is essential — adults are often wrong about what's actually driving the behavior.",
  },
  {
    id: "deep-14",
    source: "The Explosive Child",
    sourceDetails: "Ross Greene — The Define Concerns Step",
    category: "emotional",
    text: "After the empathy step, share YOUR concern using specific, non-judgmental language: 'My concern is that when you [specific behavior], [specific consequence or problem results].' For example: 'My concern is that when homework isn't done, you fall behind in class and get stressed on Mondays.' Avoid general concerns like 'you need to learn responsibility' — be concrete about what's actually at stake. The goal is to put both concerns on the table so the solution can address both, not just the adult's perspective.",
  },
  {
    id: "deep-15",
    source: "The Explosive Child",
    sourceDetails: "Ross Greene — The Invitation Step",
    category: "behavior",
    text: "The invitation step: 'Let's figure this out together. Do you have any ideas?' The child should propose first — this gives them ownership and reveals their thinking. If the solution only addresses the adult's concern, it's not Plan B — it's Plan A in disguise. A real solution addresses both: e.g., the child's concern is 'homework is too long' and the adult's concern is 'you're falling behind.' A viable solution might be breaking homework into 10-minute chunks with breaks. Test solutions, evaluate, and adjust. Solutions should be realistic and durable, not quick fixes.",
  },
  {
    id: "deep-16",
    source: "The Explosive Child",
    sourceDetails: "Ross Greene — Emergency Meltdown Management",
    category: "tantrums",
    text: "During an active meltdown: 1) Do NOT try to problem-solve or teach — the child's rational brain is completely offline. 2) Ensure safety — remove dangerous objects, keep others at a distance. 3) Minimize verbal input — saying less is more. 4) Don't escalate to match their energy — your calm is their anchor. 5) Reduce sensory input (dim lights, quiet room). 6) Wait it out. 7) After the meltdown, don't immediately debrief — wait at least 30 minutes to an hour. 8) Later, use Plan B to address what triggered it. Debrief during calm time only.",
  },
  {
    id: "deep-17",
    source: "The Explosive Child",
    sourceDetails: "Ross Greene — Prioritizing Unsolved Problems",
    category: "parent",
    text: "You can't solve every problem at once. List all unsolved problems, then prioritize using three criteria: 1) Safety — problems involving physical danger come first. 2) Frequency — daily problems before weekly ones. 3) Impact — problems significantly affecting the child's life or family functioning. Choose ONE problem to work on with Plan B. Once that's solved, move to the next. Trying to fix everything simultaneously overwhelms both parent and child. Track progress in a simple journal: the problem, the Plan B conversation, the agreed solution, and whether it worked.",
  },

  // === DEEPENED: Child of Mine (Ellyn Satter) ===
  {
    id: "deep-18",
    source: "Child of Mine",
    sourceDetails: "Ellyn Satter — Trust Your Child's Appetite",
    category: "eating",
    text: "Children come with built-in appetite regulation. A child who eats very little at one meal will naturally eat more at the next. Parents who try to override this by pressuring ('just three more bites') disrupt the child's internal hunger cues. Research shows that pressuring children to eat makes them eat LESS over time, not more. Trust that your child will eat what their body needs, as long as you're offering a variety of nutritious foods at predictable meal and snack times. Appetite varies day to day — this is normal.",
  },
  {
    id: "deep-19",
    source: "Child of Mine",
    sourceDetails: "Ellyn Satter — Structured Meal and Snack Times",
    category: "eating",
    text: "Establish predictable meal and snack times: 3 meals and 2-3 snacks per day, spaced 2-3 hours apart. Between eating times, only water is available — no grazing. This structure ensures the child comes to the table hungry and ready to eat. Grazing throughout the day kills appetite at meals and creates a power struggle. Sit down together for meals — no standing, no screens, no toys. End the meal after 20-30 minutes; if the child hasn't eaten by then, they're not hungry. The next eating time is the next scheduled meal or snack.",
  },
  {
    id: "deep-20",
    source: "Child of Mine",
    sourceDetails: "Ellyn Satter — Introducing New Foods",
    category: "eating",
    text: "Children are naturally neophobic (wary of new foods) — this is an evolutionary survival mechanism. To help them accept new foods: 1) Always include at least one familiar food at every meal. 2) Offer the new food alongside familiar foods without pressure. 3) Let the child see you eating and enjoying the food. 4) Talk about the food's properties ('this is crunchy') not whether they'll eat it. 5) It takes 10-15 exposures before a child may try a new food, and more before they accept it. 6) 'Exposure' includes touching, smelling, licking, or just having it on the plate. Never force a bite.",
  },
  {
    id: "deep-21",
    source: "Child of Mine",
    sourceDetails: "Ellyn Satter — Emotional Feeding vs Responsive Feeding",
    category: "eating",
    text: "Distinguish between emotional hunger and physical hunger. If a child asks for food shortly after eating or when upset, offer comfort instead of food: 'You just ate, so your tummy isn't hungry. Are you feeling sad? Let's read a book together.' Using food to soothe emotions teaches the child to eat for comfort throughout life. However, never withhold food from a genuinely hungry child. The test: is it meal/snack time? If yes, offer food. If no, offer comfort activities instead. This prevents both food-as-reward and food-as-emotion-management patterns.",
  },
  {
    id: "deep-22",
    source: "Child of Mine",
    sourceDetails: "Ellyn Satter — The Toddler Food Strike",
    category: "eating",
    text: "Around age 2, food acceptance often narrows dramatically — this is normal. Toddlers may eat only 5-10 foods and refuse everything else. Do not become a short-order cook. Continue offering family meals with at least one food the child currently accepts. Don't draw attention to what they eat or don't eat. Don't keep a running commentary ('Look, you didn't eat your carrots!'). Food strikes pass most quickly when parents stay calm and don't make food a battle. Offer previously rejected foods periodically — acceptance returns as the phase passes.",
  },
  {
    id: "deep-23",
    source: "Child of Mine",
    sourceDetails: "Ellyn Satter — Sweet Foods and Treats",
    category: "eating",
    text: "Don't ban sweets entirely — forbidden foods become obsession foods. Include small portions of dessert alongside regular meals. If dessert is served with the meal (not as a reward for finishing vegetables), children learn to incorporate it normally rather than bingeing. Offer one serving of dessert on the plate with everything else. If they want more, they wait until the next meal. Don't use sweets as rewards ('If you eat your broccoli, you get ice cream') — this teaches that broccoli is the price and ice cream is the prize, making broccoli undesirable.",
  },

  // === DEEPENED: Dopamine Nation (Anna Lembke) ===
  {
    id: "deep-24",
    source: "Dopamine Nation",
    sourceDetails: "Anna Lembke — The Dopamine Reward Treadmill",
    category: "screen",
    text: "The brain maintains dopamine homeostasis. When we flood it with high-dopamine stimuli (video games, social media, short-form video), the brain reduces dopamine receptors to compensate. This means everyday activities (playing outside, reading, face-to-face conversation) feel boring by comparison. Children's brains are especially vulnerable because their frontal lobes (which regulate dopamine) are still developing. The solution is not total abstinence but managing the 'dopamine budget' — balancing high-stimulation activities with low-stimulation ones to keep the baseline healthy.",
  },
  {
    id: "deep-25",
    source: "Dopamine Nation",
    sourceDetails: "Anna Lembke — Recognizing Screen Addiction Signs",
    category: "screen",
    text: "Warning signs that screen use has become problematic for children: 1) Withdrawal symptoms — irritability, anxiety, or aggression when devices are removed. 2) Tolerance — needing more screen time to feel satisfied. 3) Loss of interest in previously enjoyed non-screen activities. 4) Lying about or hiding screen use. 5) Screen use interfering with sleep, school, or friendships. 6) Using screens as the primary (or only) emotion regulation tool. If 3+ signs are present, a structured digital detox (1-2 weeks of significant reduction) can reset the dopamine baseline. Consult a professional if withdrawal is severe.",
  },
  {
    id: "deep-26",
    source: "Dopamine Nation",
    sourceDetails: "Anna Lembke — The 30-Day Reset",
    category: "screen",
    text: "For children deeply embedded in screens, a structured reset can help: Choose one type of media (e.g., video games) and abstain for a set period (even one week for young children, up to 30 days for teens). Expect an 'extinction burst' — the first 3-5 days will be worse behavior, not better. The child will be irritable, bored, and may escalate demands. Hold firm. By day 5-7, the child will rediscover other activities. After the reset, reintroduce the media in much smaller, structured doses. Document the rules: when, how long, and under what conditions the media is allowed going forward.",
  },
  {
    id: "deep-27",
    source: "Dopamine Nation",
    sourceDetails: "Anna Lembke — Intentional Boredom",
    category: "emotional",
    text: "Boredom is not a problem to be solved — it's a necessary mental state. Children who are never bored (constantly entertained by screens) lose the ability to self-entertain, create, and reflect. Boredom triggers creativity and self-directed play. Allow your child to be bored without rushing to fill the void. When they say 'I'm bored,' respond with 'That's great! Your brain is getting ready to do something creative' or 'I can't wait to see what you come up with.' Resist the urge to hand them a device. Boredom tolerance is a skill that must be practiced.",
  },
  {
    id: "deep-28",
    source: "Dopamine Nation",
    sourceDetails: "Anna Lembke — Dopamine Plateau Rule",
    category: "screen",
    text: "A practical rule for families: ensure that high-dopamine activities are never the dominant activity of the day. For every hour of high-stimulation screen time, balance it with an hour of low-dopamine activity (outdoor play, reading, chores, face-to-face social time). Avoid starting the day with screens — morning screen use sets a high dopamine baseline that makes the rest of the day feel dull. Instead, start with physical activity, breakfast together, and getting dressed before any screen access. Evening screen cutoff should be at least 90 minutes before bedtime.",
  },

  // === DEEPENED: The No-Cry Sleep Solution (Elizabeth Pantley) ===
  {
    id: "deep-29",
    source: "The No-Cry Sleep Solution",
    sourceDetails: "Elizabeth Pantley — Establishing Sleep Associations",
    category: "sleep",
    text: "Sleep associations are the conditions a child needs to fall asleep. If the association requires a parent (rocking, nursing, patting), the child will need it every time they wake at night. Pantley's approach: gradually introduce new sleep associations that don't require parental involvement — a lovey (for children over 12 months), white noise, a specific lullaby. Make the new association part of the bedtime routine while the parent is still actively helping, then gradually fade the parental help. This takes 2-4 weeks but creates independent sleep without tears.",
  },
  {
    id: "deep-30",
    source: "The No-Cry Sleep Solution",
    sourceDetails: "Elizabeth Pantley — The Gentle Removal Plan",
    category: "sleep",
    text: "For children who fall asleep nursing or with a bottle: When the child is drowsy but not fully asleep, gently break the latch or remove the bottle. If they protest, let them relatch briefly, then try again. Repeat 5-10 times per session if needed. Over 3-7 nights, the child learns to fall asleep without the sucking association. This is the core of the Pantley Pull-Off technique. Track progress — even small improvements (3 pull-offs instead of 10) are steps forward. Combine with a consistent bedtime routine so other cues signal sleep.",
  },
  {
    id: "deep-31",
    source: "The No-Cry Sleep Solution",
    sourceDetails: "Elizabeth Pantley — Night Weaning Gradually",
    category: "sleep",
    text: "To gently reduce night feedings: 1) Track which feedings the child actually needs vs comfort feedings. 2) Reduce the duration of each feeding by 1-2 minutes every 2-3 nights. 3) Substitute with another soothing method (patting, shushing) when you shorten the feed. 4) Drop one feeding at a time, waiting 5-7 days before dropping the next. 5) The first-morning feeding is usually the last to go. 6) Ensure the child gets more calories during the day to compensate. If the child is under 6 months or not growing well, consult a pediatrician before night weaning.",
  },
  {
    id: "deep-32",
    source: "The No-Cry Sleep Solution",
    sourceDetails: "Elizabeth Pantley — Early Morning Wakings",
    category: "sleep",
    text: "For children waking too early (before 6 AM): 1) Check environmental factors — light leaking in (use blackout curtains), temperature (cooler is better), noise (use white noise). 2) Ensure total daily sleep is adequate — overtired children wake earlier. 3) Use a 'time-to-wake' clock that lights up at the target time (green means go). 4) For children who can't tell time, place a sticker on a digital clock next to the number they're allowed to get up. 5) When they wake early, respond minimally — don't start the day with play or food. 6) Gradually shift the wake time 10-15 minutes later every few days.",
  },
  {
    id: "deep-33",
    source: "The No-Cry Sleep Solution",
    sourceDetails: "Elizabeth Pantley — Nap Transitions",
    category: "sleep",
    text: "Signs a child is ready to drop a nap: 1) Takes longer than 30 minutes to fall asleep at naptime. 2) Skips the nap several days per week without mood or behavior consequences. 3) Resists bedtime when they've napped. Transition gradually: alternate nap and no-nap days for 2-3 weeks. Move bedtime 30-60 minutes earlier during the transition. The transition from 2 to 1 nap usually happens between 12-18 months. From 1 to 0 naps between 3-4 years. Don't rush dropping naps — a tired child behaves worse, not better.",
  },

  // === DEEPENED: Solve Your Child's Sleep Problems (Richard Ferber) ===
  {
    id: "deep-34",
    source: "Solve Your Child's Sleep Problems",
    sourceDetails: "Richard Ferber — Sleep Associations and Self-Soothing",
    category: "sleep",
    text: "The core principle: a child who falls asleep under certain conditions (rocked, nursed, held) will need those same conditions to fall back asleep during normal night wakings. Every child wakes 4-6 times per night — the question is whether they can put themselves back to sleep. To change sleep associations: put the child to bed drowsy but awake. If they cry, use graduated extinction (check at increasing intervals). Within 3-7 nights, the child learns to fall asleep independently and night wakings typically decrease dramatically.",
  },
  {
    id: "deep-35",
    source: "Solve Your Child's Sleep Problems",
    sourceDetails: "Richard Ferber — Sleep Schedule and Circadian Rhythms",
    category: "sleep",
    text: "Children have biological sleep windows — times when their body naturally produces melatonin and sleep comes easily. Missing the sleep window causes a cortisol surge that makes it harder to fall asleep and stay asleep. Signs of the sleep window: yawning, rubbing eyes, decreased activity, glazed stare. For infants 4-12 months, the morning nap window is typically 8:30-9:30 AM, afternoon nap 12:30-1:30 PM, bedtime 6:30-7:30 PM. Putting a child to bed during their sleep window results in less crying and more restful sleep.",
  },
  {
    id: "deep-36",
    source: "Solve Your Child's Sleep Problems",
    sourceDetails: "Richard Ferber — Night Terrors vs Nightmares",
    category: "sleep",
    text: "Night terrors occur in deep sleep (first 1-3 hours of the night) — the child appears terrified, may scream or thrash, but is not fully awake and has no memory of it. Do NOT wake a child from a night terror — it will disorient them further. Ensure they're safe, speak calmly, and wait it out (usually 5-15 minutes). Nightmares occur in REM sleep (later in the night) — the child wakes fully and remembers the dream. Comfort them and help them go back to sleep. Night terrors often run in families and decrease with age.",
  },
  {
    id: "deep-37",
    source: "Solve Your Child's Sleep Problems",
    sourceDetails: "Richard Ferber — Bedtime Resistance Protocol",
    category: "sleep",
    text: "For children who stall or resist bedtime: 1) Set an appropriate bedtime based on total sleep needs (3-5 years: 10-13 hours, 6-12 years: 9-12 hours). 2) Use a visual bedtime chart with specific steps (bath, pajamas, brush teeth, story, sleep). 3) Give a 10-minute and 5-minute warning before the routine starts. 4) Keep the routine under 30 minutes. 5) Use a gate at the bedroom door if the child repeatedly comes out — this is safer and less isolating than a locked door. 6) Return the child to bed silently each time they get up — no conversation, no eye contact after the first time.",
  },
  {
    id: "deep-38",
    source: "Solve Your Child's Sleep Problems",
    sourceDetails: "Richard Ferber — Sleep Regression Causes",
    category: "sleep",
    text: "Common causes of sudden sleep deterioration: 1) Developmental milestones (crawling, walking, talking) — the brain practices new skills at night. 2) Illness or teething. 3) Changes in routine (travel, new sibling, starting school). 4) Need for a schedule adjustment (dropping a nap). 5) Separation anxiety peaks (around 8-10 months and 18 months). Rule out medical causes first: sleep apnea (snoring, mouth breathing), reflux, or allergies. Most regressions resolve in 1-3 weeks if parents maintain consistency. Don't create new sleep associations (like co-sleeping) to survive a regression — you'll have to undo them later.",
  },

  // === DEEPENED: The Wonder Weeks (van de Rijt) ===
  {
    id: "deep-39",
    source: "The Wonder Weeks",
    sourceDetails: "van de Rijt & Plooij — Leap 1: The World of Patterns",
    category: "transition",
    text: "Around 5 weeks, babies enter their first mental leap. They begin perceiving patterns in the world — changes in light, sound, and texture. Signs: increased crying, wanting to be held more, feeding changes, and being more alert. Parents can support this leap by: providing visual variety (black and white images, faces), talking to the baby during alert periods, and offering tummy time. The fussy period typically lasts 1-2 weeks. This is NOT colic — it's a sign of neurological development.",
  },
  {
    id: "deep-40",
    source: "The Wonder Weeks",
    sourceDetails: "van de Rijt & Plooij — Leap 3: The World of Smooth Transitions",
    category: "transition",
    text: "Around 12 weeks, babies learn to perceive smooth transitions — how a voice rises and falls, how a hand moves from one place to another. This leap brings more coordinated movements and the beginning of social smiling. Signs of the leap: increased clinginess, changed sleep patterns, and sometimes a temporary loss of appetite. Support development by: narrating your actions in a sing-song voice, moving toys slowly across their field of vision, and encouraging reaching and swiping. After the leap, many babies sleep longer stretches.",
  },
  {
    id: "deep-41",
    source: "The Wonder Weeks",
    sourceDetails: "van de Rijt & Plooij — Leap 6: The World of Categories",
    category: "transition",
    text: "Around 37 weeks (8-9 months), babies begin categorizing the world — understanding that a dog is different from a cat, that blocks stack but balls roll. This is a major cognitive shift. Signs: increased crying, clinginess, sleep disruption, and sometimes refusal of previously accepted foods. The fussy period can last 2-4 weeks. Support learning by: naming objects, sorting games, pointing out differences ('This is big, this is small'), and reading books with clear pictures. Separation anxiety often peaks during this leap.",
  },
  {
    id: "deep-42",
    source: "The Wonder Weeks",
    sourceDetails: "van de Rijt & Plooij — Leap 10: The World of Systems",
    category: "transition",
    text: "Around 75 weeks (17-18 months), toddlers begin understanding systems — how things connect and interact. They start grasping concepts like 'mine,' 'yours,' routines, and simple cause-and-effect. This leap is accompanied by the toddler's growing sense of self, which often manifests as asserting independence ('me do it!'). Signs: mood swings, increased tantrums, clinginess alternating with independence, and disrupted sleep. Support by: offering limited choices ('red cup or blue cup?'), maintaining consistent routines, and allowing safe independence.",
  },
  {
    id: "deep-43",
    source: "The Wonder Weeks",
    sourceDetails: "van de Rijt & Plooij — The Three C's of Leaps",
    category: "parent",
    text: "Every mental leap is signaled by the three C's: Crying, Clinginess, and Crankiness. These are neurological signs, not behavioral problems. During leaps, babies and toddlers: cry more, want to be held constantly, sleep poorly, eat less or more than usual, and may seem to 'regress' in skills they previously mastered. This is normal — the brain is rewiring. The key for parents: don't try to 'fix' the behavior. Offer extra comfort, lower expectations, and trust that after the leap, the child will emerge with new abilities. Track leaps using a Wonder Weeks app to anticipate fussy periods.",
  },

  // === DEEPENED: The Out-of-Sync Child (Carol Kranowitz) ===
  {
    id: "deep-44",
    source: "The Out-of-Sync Child",
    sourceDetails: "Carol Kranowitz — Sensory Seeking vs Sensory Avoiding",
    category: "emotional",
    text: "Children with sensory processing differences fall broadly into two categories. Sensory SEEKERS crave intense input — they crash into things, spin constantly, prefer loud noises, eat spicy foods, and seem to have no sense of physical boundaries. Sensory AVOIDERS are easily overwhelmed — they cover their ears, hate clothing tags, refuse messy foods, and melt down in crowded or noisy places. Many children are mixed — seeking some sensations and avoiding others. Understanding your child's sensory profile explains behaviors that look like defiance but are actually neurological responses.",
  },
  {
    id: "deep-45",
    source: "The Out-of-Sync Child",
    sourceDetails: "Carol Kranowitz — Sensory Diet",
    category: "behavior",
    text: "A sensory diet is a personalized schedule of sensory activities throughout the day — like meals, but for the nervous system. For seekers: heavy work (carrying groceries, pushing a loaded wagon), crashing into pillows, jumping on a trampoline, chewing crunchy foods. For avoiders: quiet breaks in a dim room, noise-canceling headphones, weighted blanket, deep pressure massage. Work with an occupational therapist to design a sensory diet. Consistency is key — a sensory diet works preventively, not just reactively. A child who gets their sensory needs met throughout the day is more regulated and less likely to melt down.",
  },
  {
    id: "deep-46",
    source: "The Out-of-Sync Child",
    sourceDetails: "Carol Kranowitz — Clothing and Sensory Sensitivities",
    category: "routines",
    text: "For children who refuse certain clothing (tags, seams, tight waistbands, specific fabrics): 1) This is a real neurological response, not pickiness. 2) Remove tags, turn socks inside out, buy seamless socks and tagless shirts. 3) Wash new clothes multiple times before wearing. 4) Let the child choose from a small selection of pre-approved clothing. 5) Don't force a child to wear something that causes distress — the distress is genuine. 6) Gradually introduce new textures through play (playing with fabric scraps, sensory bins). 7) Consult an occupational therapist if clothing sensitivities interfere with daily life.",
  },
  {
    id: "deep-47",
    source: "The Out-of-Sync Child",
    sourceDetails: "Carol Krunowitz — Meltdowns vs Tantrums",
    category: "tantrums",
    text: "A sensory meltdown is NOT a tantrum. A tantrum has a goal (get a toy, avoid a task) and stops when the goal is met or the audience leaves. A sensory meltdown has no goal — it's a neurological overload response. The child can't stop it just because they got what they wanted. Signs of sensory overload: covering ears, squinting or averting eyes, withdrawing, becoming very still, then exploding. Response: reduce ALL sensory input immediately (dim lights, quiet, clear the room). Don't talk or try to reason. Deep pressure (a tight hug, weighted blanket) can help regulate the nervous system. After recovery, identify and prevent the overload trigger.",
  },

  // === DEEPENED: Taking Charge of ADHD (Russell Barkley) ===
  {
    id: "deep-48",
    source: "Taking Charge of ADHD",
    sourceDetails: "Russell Barkley — Executive Function Deficits",
    category: "behavior",
    text: "ADHD is not primarily an attention problem — it's an executive function deficit. Children with ADHD have difficulty with: working memory (forgetting instructions), time management (can't feel future time), emotional regulation (bigger reactions), motivation (difficulty starting non-preferred tasks), and impulse control (acting before thinking). These are neurological, not behavioral choices. Consequences alone won't work because the child literally can't connect future outcomes to present actions the way neurotypical children can. Interventions must include external structure: visual schedules, timers, immediate consequences, and frequent check-ins.",
  },
  {
    id: "deep-49",
    source: "Taking Charge of ADHD",
    sourceDetails: "Russell Barkley — The 80/20 Rule for Instructions",
    category: "behavior",
    text: "Children with ADHD need instructions delivered differently: 1) Get within 3 feet and make eye contact before speaking. 2) Say the child's name and wait for them to look. 3) Give one instruction at a time — not a list. 4) Keep it short and specific ('Put your shoes by the door') not vague ('Get ready'). 5) Ask the child to repeat it back. 6) Praise compliance immediately and specifically. 7) Give 80% positive feedback for every 20% correction. Children with ADHD receive far more criticism than typical children — actively work to shift this ratio.",
  },
  {
    id: "deep-50",
    source: "Taking Charge of ADHD",
    sourceDetails: "Russell Barkley — Token Economy Systems",
    category: "routines",
    text: "Children with ADHD need more powerful, immediate, and frequent reinforcement than typical children. A token economy works well: 1) Define 3-5 specific target behaviors. 2) Give tokens (chips, stickers, points) IMMEDIATELY after the behavior — not at end of day. 3) Tokens can be exchanged for privileges (screen time, special outings, choosing dinner). 4) Never remove tokens as punishment — research shows this destroys motivation. 5) Review and refresh the system every 2-3 weeks to maintain interest. 6) Fade to natural reinforcement as habits form. Keep the system simple enough to maintain consistently.",
  },
  {
    id: "deep-51",
    source: "Taking Charge of ADHD",
    sourceDetails: "Russell Barkley — Home and School Collaboration",
    category: "school",
    text: "ADHD children need consistency between home and school. Use a daily report card: the teacher rates 3-4 target behaviors (completed work, stayed in seat, raised hand) each day. The child brings it home and earns home-based rewards for meeting goals. This creates a bridge between school effort and home reinforcement. Meet with teachers at the start of the year to agree on: seating (front of class, away from windows and doors), instruction delivery (visual + verbal), assignment modifications (shorter, broken into chunks), and a signal system for when the child needs a movement break.",
  },
  {
    id: "deep-52",
    source: "Taking Charge of ADHD",
    sourceDetails: "Russell Barkley — Time Blindness and Externalizing Time",
    category: "routines",
    text: "Children with ADHD are 'time blind' — they can't feel how much time has passed or estimate how long a task will take. Externalize time: use visual timers (Time Timer shows red disappearing), set alarms for transitions, and break long tasks into 10-15 minute chunks. Use 'when-then' language: 'When your homework is done, then it's iPad time.' Give transition warnings: '5 minutes until we leave' — then show the timer. Post visual schedules with clocks for each activity. For older children, teach them to set their own timers and alarms as a lifelong skill.",
  },

  // === DEEPENED: Raising an Emotionally Intelligent Child (John Gottman) ===
  {
    id: "deep-53",
    source: "Raising an Emotionally Intelligent Child",
    sourceDetails: "John Gottman — The Five Steps of Emotion Coaching",
    category: "emotional",
    text: "Gottman's five steps: 1) Be aware of your child's emotions (tune into subtle cues, not just big ones). 2) Recognize emotion as an opportunity for intimacy and teaching — don't avoid or dismiss the feeling. 3) Listen empathetically and validate the feeling (don't try to fix or minimize). 4) Help the child label the emotion with words ('frustrated,' 'disappointed,' 'jealous'). 5) Set limits while problem-solving (all feelings are okay, all behaviors are not). Research shows that emotion-coached children have better academic performance, fewer behavior problems, and better physical health.",
  },
  {
    id: "deep-54",
    source: "Raising an Emotionally Intelligent Child",
    sourceDetails: "John Gottman — Emotion Dismissing vs Emotion Coaching",
    category: "emotional",
    text: "Many parents are emotion-dismissing without realizing it: 'You're fine,' 'Don't cry,' 'It's not a big deal,' 'Big kids don't cry.' These messages teach children that their feelings are wrong or unimportant. Emotion coaching instead says: 'I can see you're really upset,' 'That makes sense,' 'I'd feel sad too.' Dismissing emotions doesn't make them go away — it makes children hide them and lose trust in their own emotional experience. Children whose emotions are consistently validated learn to identify, express, and manage feelings effectively.",
  },
  {
    id: "deep-55",
    source: "Raising an Emotionally Intelligent Child",
    sourceDetails: "John Gottman — Anger as a Teaching Opportunity",
    category: "anger",
    text: "Anger is often a secondary emotion — it covers sadness, fear, embarrassment, or frustration. When a child is angry: 1) Don't match their intensity — stay calm. 2) Help them identify the underlying feeling: 'You seem angry. Are you also feeling hurt that your friend didn't include you?' 3) Validate the feeling, not the behavior: 'It makes sense that you're angry, AND it's not okay to hit.' 4) Problem-solve after the intensity decreases. 5) Model healthy anger expression yourself — narrate your own emotions: 'I'm feeling frustrated right now. I'm going to take a deep breath.'",
  },
  {
    id: "deep-56",
    source: "Raising an Emotionally Intelligent Child",
    sourceDetails: "John Gottman — Fear and Anxiety Coaching",
    category: "fears",
    text: "When a child is afraid: 1) Take the fear seriously, even if it seems irrational to you. 2) Avoid saying 'There's nothing to be afraid of' — instead say 'I can see you're worried about that.' 3) Help them identify what specifically scares them ('What's the scariest part?'). 4) Provide information — often fear comes from misunderstanding. 5) Help them develop a coping plan: 'If you start feeling scared at the party, what could you do?' 6) Gradual exposure — break the feared situation into tiny, manageable steps. 7) Praise brave behavior specifically ('I noticed how you stayed calm when the dog barked').",
  },

  // === DEEPENED: Healthy Sleep Habits, Happy Child (Marc Weissbluth) ===
  {
    id: "deep-57",
    source: "Healthy Sleep Habits, Happy Child",
    sourceDetails: "Marc Weissbluth — Overtiredness Spiral",
    category: "sleep",
    text: "When children miss their sleep window, their body produces cortisol and adrenaline to stay awake. This makes it harder to fall asleep, leads to more night wakings, and causes earlier morning waking — creating a vicious cycle. Paradoxically, an overtired child sleeps LESS, not more. Signs of overtiredness: hyperactivity (not sleepiness), crankiness, clumsiness, rubbing eyes, and fighting sleep. The solution: move bedtime EARLIER by 30-60 minutes. Most children need bedtime between 6:00-7:30 PM. An earlier bedtime almost always results in MORE total sleep, not less.",
  },
  {
    id: "deep-58",
    source: "Healthy Sleep Habits, Happy Child",
    sourceDetails: "Marc Weissbluth — Sleep Duration by Age",
    category: "sleep",
    text: "Total daily sleep needs: Newborns: 16-17 hours. 4-12 months: 14-15 hours. 1-3 years: 12-14 hours. 3-5 years: 11-13 hours. 6-12 years: 10-11 hours. Teenagers: 9-9.5 hours. These are totals including naps. Chronic sleep deprivation — even mild — accumulates into a 'sleep debt' that affects mood, attention, learning, immune function, and growth. Most modern children get 30-60 minutes less sleep than they need. Prioritize sleep by setting a non-negotiable bedtime and protecting nap times.",
  },
  {
    id: "deep-59",
    source: "Healthy Sleep Habits, Happy Child",
    sourceDetails: "Marc Weissbluth — The Clock Change and Travel",
    category: "sleep",
    text: "Daylight saving time changes and travel disrupt children's circadian rhythms more than adults'. Prepare for clock changes: shift the child's schedule by 15 minutes per day for 4 days before the change. After traveling across time zones: expose the child to natural sunlight in the morning of the new time zone to reset their clock. Expect 1 day of adjustment per hour of time difference. Don't let travel blow up good sleep habits — maintain the bedtime routine even in new environments. If sleep derails on vacation, return to the normal schedule immediately upon returning home.",
  },
  {
    id: "deep-60",
    source: "Healthy Sleep Habits, Happy Child",
    sourceDetails: "Marc Weissbluth — Crying It Out Variations",
    category: "sleep",
    text: "Weissbluth distinguishes between types of crying: Protest crying (the child is angry and wants to be picked up) versus distress crying (genuine suffering). For sleep training, he argues that limited protest crying is acceptable if it leads to better overall sleep. Options range from: 1) Extinction (no checks) — fastest, typically 3-5 nights, but hardest on parents. 2) Graduated extinction (Ferber-style checks) — 7-10 nights. 3) Gradual withdrawal — 2-4 weeks. 4) No cry — 4-8 weeks. Choose the method your family can sustain consistently. Inconsistency is worse than any single method.",
  },

  // === DEEPENED: Happiest Baby on the Block (Harvey Karp) ===
  {
    id: "deep-61",
    source: "Happiest Baby on the Block",
    sourceDetails: "Dr. Harvey Karp — The Fourth Trimester",
    category: "transition",
    text: "Human babies are born neurologically premature compared to other mammals — they need a 'fourth trimester' of womb-like conditions. This explains why newborns are fussy: the outside world is too stimulating. The goal is to recreate womb conditions: continuous holding/rhythical motion, swaddling (confinement), white noise (whooshing sounds), and frequent feeding. This concept reframes newborn crying not as manipulation or colic but as a legitimate need for a less stimulating environment. The fourth trimester concept applies from birth to roughly 3-4 months.",
  },
  {
    id: "deep-62",
    source: "Happiest Baby on the Block",
    sourceDetails: "Dr. Harvey Karp — Swaddling Technique",
    category: "transition",
    text: "Proper swaddling is the foundation of the 5 S's because it prevents the startle reflex from waking the baby and provides the confinement they experienced in the womb. Key points: 1) Use a large, lightweight blanket (muslin works well). 2) Swaddle snugly but with room for hip movement (hips should be able to flex). 3) Always place swaddled babies on their BACK to sleep. 4) Stop swaddling when the baby shows signs of rolling (typically 3-4 months) or use a transition sleep sack. 5) Swaddling alone may not calm a crying baby — combine with the other S's for maximum effect.",
  },
  {
    id: "deep-63",
    source: "Happiest Baby on the Block",
    sourceDetails: "Dr. Harvey Karp — Side/Stomach Position and Shushing",
    category: "transition",
    text: "After swaddling, use side or stomach position to calm a crying baby — but ONLY while awake and supervised. The back is the only safe position for sleep, but it triggers the falling reflex that makes babies cry more. For shushing: make a continuous 'shhhhhh' sound as loud as the baby's cry, then gradually reduce volume as they calm. White noise apps or machines can substitute for live shushing. The sound mimics the whooshing of blood flow in the womb. Combine side/stomach positioning with shushing and swaying for the fastest calming effect.",
  },
  {
    id: "deep-64",
    source: "Happiest Baby on the Block",
    sourceDetails: "Dr. Harvey Karp — The Cuddle Cure",
    category: "transition",
    text: "When all five S's (swaddle, side/stomach, shush, swing, suck) are combined correctly, they trigger the calming reflex — an almost automatic switch that turns off crying. This is the 'Cuddle Cure.' Technique: Swaddle the baby, hold them on their side or stomach, shush loudly into their ear, jiggle (small, fast movements — not large swings), and offer a pacifier or breast. The jiggle should be small and fast (like buzzing), roughly 1-2 inches in range. If the baby continues crying, check: are you doing all five? Is the swaddle tight enough? Is the shush loud enough? Most failures are due to executing the S's too gently.",
  },

  // === DEEPENED: The Grief Recovery Handbook ===
  {
    id: "deep-65",
    source: "The Grief Recovery Handbook",
    sourceDetails: "James & Friedman — Children's Understanding of Death by Age",
    category: "transition",
    text: "Children understand death differently at different ages: Ages 0-5: Death is reversible or temporary — they may ask when the person is coming back. Ages 5-9: Death is real but often personified (a 'bad guy' or 'angel'). Ages 9-12: Death is permanent and happens to everyone. Teenagers: Full adult understanding but may struggle with the emotional weight. Use clear, concrete language: 'Died means their body stopped working and can't be fixed.' Avoid euphemisms ('passed away,' 'lost,' 'went to sleep') — these confuse children and can cause fears (e.g., fear of sleeping). Let the child's questions guide how much detail to share.",
  },
  {
    id: "deep-66",
    source: "The Grief Recovery Handbook",
    sourceDetails: "James & Friedman — Grief Is Not Linear",
    category: "emotional",
    text: "Children's grief doesn't follow stages — it comes in waves. A child may cry intensely for 10 minutes, then play happily as if nothing happened. This is normal, not denial. Young children can't sustain heavy emotions for long periods. Don't interpret play as 'not caring' — it's how children process. Grief may resurface at milestones: birthdays, holidays, first day of school, puberty. Let the child grieve at their own pace. Provide multiple outlets: drawing, storytelling, looking at photos, visiting meaningful places. Don't force grief conversations, but don't shut them down either.",
  },
  {
    id: "deep-67",
    source: "The Grief Recovery Handbook",
    sourceDetails: "James & Friedman — Things Not to Say",
    category: "emotional",
    text: "Common phrases that harm grieving children: 'Be strong for your mother' (burdens the child with adult responsibility). 'Don't cry' (teaches suppression). 'At least he's in a better place' (children want him HERE, not in a better place). 'I know how you feel' (you don't — everyone's grief is unique). 'You should be over this by now' (grief has no timeline). Instead say: 'I'm here for you.' 'I don't know why this happened.' 'It's okay to feel whatever you're feeling.' 'Would you like to talk about it?' 'I loved them too.' Honest presence matters more than the right words.",
  },

  // === DEEPENED: Helping Your Anxious Child (CBT) ===
  {
    id: "deep-68",
    source: "Helping Your Anxious Child",
    sourceDetails: "CBT Techniques — Cognitive Restructuring for Kids",
    category: "fears",
    text: "Help children identify and challenge anxious thoughts. Step 1: Catch the thought — 'What was going through your mind when you felt scared?' Step 2: Examine the evidence — 'Has a dog ever actually bitten you? How often do dogs hurt people?' Step 3: Generate alternative thoughts — 'Maybe the dog is just excited, not mean.' Step 4: Test it out gradually (behavioral experiment). Use child-friendly language: 'The worry bug is telling you X, but what does the brave part of you say?' Practice this during calm moments so the skill is available when anxiety hits. Younger children may need to draw their worries rather than verbalize them.",
  },
  {
    id: "deep-69",
    source: "Helping Your Anxious Child",
    sourceDetails: "CBT Techniques — Relaxation Skills",
    category: "emotional",
    text: "Teach relaxation skills during calm times so children can use them when anxious: 1) Belly breathing — place a stuffed animal on the belly and watch it rise and fall. Practice 5 slow breaths. 2) Progressive muscle relaxation — tense and release each muscle group ('squeeze your hands like you're squishing a lemon, now let go'). 3) Guided imagery — describe a safe, happy place in vivid sensory detail. 4) Grounding — name 5 things you can see, 4 you can touch, 3 you can hear, 2 you can smell, 1 you can taste. Practice daily for a week before expecting the child to use skills independently during anxiety.",
  },
  {
    id: "deep-70",
    source: "Helping Your Anxious Child",
    sourceDetails: "CBT Techniques — Avoiding the Accommodation Trap",
    category: "fears",
    text: "Anxious children often demand that parents accommodate their anxiety: 'Check the closet three times,' 'Don't leave me alone,' 'Don't make me go to the party.' Accommodation reduces anxiety short-term but reinforces it long-term. The parent becomes part of the anxiety system. To break the cycle: 1) Acknowledge the fear ('I know this is scary'). 2) Refuse to accommodate ('I'm not going to check the closet because I know it's safe'). 3) Support the child through the distress (stay nearby, offer coping tools). 4) Praise brave behavior. Expect an initial increase in anxiety before it improves — this is the extinction burst.",
  },
  {
    id: "deep-71",
    source: "Helping Your Anxious Child",
    sourceDetails: "CBT Techniques — School Refusion Protocol",
    category: "school",
    text: "For children refusing school due to anxiety: 1) Rule out bullying or academic struggles as the trigger. 2) Identify the specific fear (separation, social anxiety, fear of vomiting, fear of failure). 3) Create a gradual return plan: start with partial days, build to full days. 4) Coordinate with school staff on a plan (safe person, check-in system, quiet space). 5) Do NOT let the child stay home — avoidance makes anxiety stronger. 6) Address the morning routine: keep it calm and predictable. 7) Have a coping plan for midday: who to go to, what to do. 8) Seek professional help if refusal persists beyond 2 weeks.",
  },

  // === DEEPENED: Raising White Kids (Jennifer Harvey) ===
  {
    id: "deep-72",
    source: "Raising White Kids",
    sourceDetails: "Jennifer Harvey — Color-Aware vs Color-Blind Approaches",
    category: "honest",
    text: "Research shows that 'color-blind' approaches ('we don't see color,' 'everyone is the same') actually increase racial bias in children. Children naturally notice differences — when adults avoid the topic, children fill in the gaps with societal messages, which are often biased. Instead, use a color-aware approach: acknowledge differences openly and positively ('People have different skin colors, and that's one of the things that makes the world interesting'). Start these conversations early — by age 3, children already notice race. Silence teaches that race is a taboo topic, not that it doesn't matter.",
  },
  {
    id: "deep-73",
    source: "Raising White Kids",
    sourceDetails: "Jennifer Harvey — Handling Racial Questions in Public",
    category: "honest",
    text: "When children ask questions about race in public ('Why is that man's skin brown?'): 1) Don't shush — shushing teaches shame about the topic. 2) Answer simply and directly: 'People have different amounts of melanin in their skin, which makes it different colors.' 3) If you don't know what to say, say 'That's a great question — let's talk about it at home' and then actually follow up. 4) Don't overcorrect or make it a lecture — brief, matter-of-fact answers work best. 5) Read diverse books together so conversations about difference feel natural. 6) If someone is offended, apologize sincerely and use it as a learning moment for your child.",
  },
  {
    id: "deep-74",
    source: "Raising White Kids",
    sourceDetails: "Jennifer Harvey — Moving Beyond Kindness to Justice",
    category: "honest",
    text: "Teaching children 'be kind to everyone' is necessary but insufficient for addressing racism. Kindness focuses on individual behavior; justice focuses on systems and fairness. Age-appropriate justice conversations: Preschoolers — 'Is it fair that some people are treated differently because of their skin color?' Elementary — Discuss historical facts in age-appropriate ways (segregation, civil rights). Middle school — Discuss current events and media literacy ('Why might this news story show people differently?'). High school — Discuss systemic issues, privilege, and allyship. Encourage children to speak up when they witness unfairness.",
  },

  // === DEEPENED: NurtureShock (Po Bronson) ===
  {
    id: "deep-75",
    source: "NurtureShock",
    sourceDetails: "Bronson & Merryman — The Brain Science of Teen Rebellion",
    category: "teen",
    text: "Teen brains undergo massive remodeling — the prefrontal cortex (responsible for judgment, impulse control, and long-term planning) is temporarily weakened while the limbic system (emotions and reward-seeking) is hyperactive. This is why teens take risks that baffle adults. Strategies that backfire: lectures, scare tactics, and zero-tolerance rules. What works: 1) Involve teens in rule-making. 2) Explain the 'why' behind rules. 3) Give them practice making decisions (with guidance). 4) Monitor peer influence (teens are most susceptible to peer pressure when with friends). 5) Protect their sleep — teen brains need 9+ hours.",
  },
  {
    id: "deep-76",
    source: "NurtureShock",
    sourceDetails: "Bronson & Merryman — The Science of Self-Control",
    category: "behavior",
    text: "Self-control is a better predictor of success than IQ. The famous marshmallow test showed that children who could delay gratification at age 4 had better outcomes decades later. But self-control can be taught. Key strategies: 1) Distract the child from the temptation rather than asking them to 'just resist.' 2) Teach the 'cool it' technique — imagine the temptation as a picture rather than real. 3) Practice with small, daily delays ('wait 5 minutes before snack'). 4) Model self-control yourself and narrate it ('I really want this cookie, but I'm going to wait until after dinner'). 5) Don't make forbidden items more tempting by over-restricting them.",
  },
  {
    id: "deep-77",
    source: "NurtureShock",
    sourceDetails: "Bronson & Merryman — Language Development and Baby Einstein",
    category: "screen",
    text: "Research shows that baby videos (Baby Einstein, etc.) actually DELAY language development. Children under 2 learn language from face-to-face interaction, not screens. The key variable is responsive interaction — the adult responds to the child's sounds and gestures. Tips for language development: 1) Narrate your day to your baby ('I'm putting on my shoes'). 2) Respond to babbling as if it's conversation. 3) Read interactively — point, ask questions, let the child turn pages. 4) Sing songs and nursery rhymes. 5) Limit screen time before age 2. The quality of interaction matters far more than the quantity of words.",
  },
  {
    id: "deep-78",
    source: "NurtureShock",
    sourceDetails: "Bronson & Merryman — Aggression from Siblings",
    category: "sibling",
    text: "Sibling conflict shapes social skills more than peer relationships do. Siblings fight an average of every 15 minutes when together. Rather than eliminating conflict (impossible), teach conflict resolution skills: 1) Help them identify what each wants. 2) Teach 'I statements' ('I feel mad when you take my toy'). 3) Introduce the concept of compromise ('Can you both think of a way that works for both of you?'). 4) Don't compare siblings ('Why can't you be more like your sister?') — this fuels resentment and conflict. 5) Notice and praise moments of cooperation. Siblings who learn to resolve conflicts at home carry these skills to friendships.",
  },

  // === DEEPENED: Playful Parenting (Lawrence Cohen) ===
  {
    id: "deep-79",
    source: "Playful Parenting",
    sourceDetails: "Lawrence Cohen — Play as Discipline Alternative",
    category: "behavior",
    text: "Play is the most effective way to teach young children — far more effective than lectures. When a child resists getting dressed, turn it into a game ('Can we get dressed before this song ends?' or 'I bet you can't put your socks on before I count to 10!'). When children giggle, they release tension and reconnect. Humor defuses power struggles better than authority. For recurring conflicts, create a silly ritual around it. The key insight: resistance often comes from disconnection, and play reconnects. If your child keeps resisting, check your connection first — they may need 15 minutes of undivided playful attention.",
  },
  {
    id: "deep-80",
    source: "Playful Parenting",
    sourceDetails: "Lawrence Cohen — Healing Through Replay",
    category: "emotional",
    text: "Children process difficult experiences through play. If your child was scared at the doctor, they'll likely play 'doctor' — but THEY need to be the doctor and YOU the patient. This role reversal gives them control over the scary experience. Don't correct the play ('That's not how it happened') — let them direct it. They may exaggerate, repeat, or modify the scenario. This is how they process fear. Join the play as a willing participant. If the play gets stuck in a loop, introduce a small change that moves toward resolution ('What if the doctor gives you a sticker at the end?').",
  },
  {
    id: "deep-81",
    source: "Playful Parenting",
    sourceDetails: "Lawrence Cohen — The Body Connection Game",
    category: "confidence",
    text: "Physical play builds confidence and connection: pillow fights, wrestling, chase games, and 'roughhousing.' Rules for healthy roughhousing: 1) Stop immediately if someone says 'stop' or 'no' — this teaches body boundaries and consent. 2) Match the child's intensity slightly below their level so they feel powerful. 3) Let them win sometimes (but not always). 4) Laugh a lot — laughter releases oxytocin, the bonding hormone. 5) Don't tickle to the point of distress — laughter during tickling is often a reflex, not joy. Roughhousing increases emotional intelligence, physical confidence, and trust between parent and child.",
  },
  {
    id: "deep-82",
    source: "Playful Parenting",
    sourceDetails: "Lawrence Cohen — When Play Doesn't Work",
    category: "tantrums",
    text: "Sometimes playful approaches fail because the child is too disconnected or overwhelmed. Signs that play won't work right now: the child rejects all suggestions, they're in a full meltdown, or they're in 'fight or flight' mode. In these moments: 1) Stop trying to be playful — it will feel dismissive of their feelings. 2) Simply be present — sit nearby, stay calm. 3) Offer gentle connection without demands ('I'm right here when you're ready'). 4) After the storm passes, the child may cry — this is healing. Let them cry without rushing to fix it. 5) Only after emotional release is complete will play re-enter naturally. Connection before correction, presence before play.",
  },

  // === DEEPENED: Unconditional Parenting (Alfie Kohn) ===
  {
    id: "deep-83",
    source: "Unconditional Parenting",
    sourceDetails: "Alfie Kohn — Rewards Kill Motivation",
    category: "behavior",
    text: "Decades of research show that rewards (including sticker charts, praise, and bribes) undermine intrinsic motivation. When children are rewarded for an activity, they conclude the activity itself isn't worth doing — otherwise, why would they need a reward? Over time, rewarded children do LESS of the activity, not more, once the reward is removed. Alternative: focus on the intrinsic value of the behavior. Instead of 'If you read 20 minutes, you get a sticker,' try 'Let's read this book together — I love hearing you read!' Help children discover the joy in the activity itself.",
  },
  {
    id: "deep-84",
    source: "Unconditional Parenting",
    sourceDetails: "Alfie Kohn — Punishment vs Consequences",
    category: "behavior",
    text: "Kohn argues that 'natural consequences' imposed by parents are often just punishments in disguise. If you let a child go hungry because they refused dinner, that's a punishment. True natural consequences happen without parental orchestration. Instead of engineering consequences, Kohn advocates: 1) Problem-solving together ('What happened? How can we fix this?'). 2) Restitution ('Your brother is sad you broke his tower. How can we make it right?'). 3) Addressing the underlying need. 4) Examining whether the expectation is developmentally appropriate. The goal is learning, not suffering.",
  },
  {
    id: "deep-85",
    source: "Unconditional Parenting",
    sourceDetails: "Alfie Kohn — Unconditional Love Regardless of Behavior",
    category: "confidence",
    text: "Children need to know that their parents' love is not contingent on good behavior, grades, compliance, or achievements. Conditional love ('I love you WHEN you're a good boy') creates anxiety, people-pleasing, and low self-worth. Practices that communicate unconditional love: 1) Separate the child from the behavior ('I love you AND I won't let you hit'). 2) Never withdraw affection as punishment (no silent treatment, no 'go away until you can behave'). 3) Show love during difficult moments — hugs during a tantrum, calm presence during failure. 4) Avoid saying 'good boy/girl' — instead describe the behavior ('You shared your toy — that was generous').",
  },

  // === DEEPENED: The Conscious Parent (Dr. Shefali) ===
  {
    id: "deep-86",
    source: "The Conscious Parent",
    sourceDetails: "Dr. Shefali Tsabary — The Mirror of Parenting",
    category: "parent",
    text: "Children act as mirrors, reflecting back the parent's unresolved issues. When a parent reacts disproportionately to a child's behavior (intense anger over a minor issue), it's often because the child has triggered an old wound. Instead of asking 'Why is my child doing this?' ask 'Why am I reacting this strongly?' The child's behavior is the trigger, not the cause. This requires radical self-honesty. When you notice an outsized reaction: 1) Pause before responding. 2) Notice the physical sensation in your body. 3) Ask 'What does this remind me of from my own childhood?' 4) Process your own feelings separately, not on the child.",
  },
  {
    id: "deep-87",
    source: "The Conscious Parent",
    sourceDetails: "Dr. Shefali Tsabary — Responding vs Reacting",
    category: "parent",
    text: "There's a crucial difference between responding and reacting. Reacting is automatic, emotional, and driven by the past. Responding is deliberate, present, and aligned with your values. The gap between trigger and response is where conscious parenting happens. To widen this gap: 1) Create a 'pause habit' — take one breath before speaking. 2) Have a go-to phrase for triggered moments ('I need a moment'). 3) Notice your body's stress signals (tight jaw, raised shoulders) as early warning. 4) If you do react poorly, repair afterward: 'I shouldn't have yelled. I was feeling stressed, but that's not an excuse. I'm sorry.' Modeling repair teaches children that mistakes are recoverable.",
  },
  {
    id: "deep-88",
    source: "The Conscious Parent",
    sourceDetails: "Dr. Shefali Tsabary — Letting Go of the Idealized Child",
    category: "parent",
    text: "Parents often hold an image of the child they expected (sporty, academic, outgoing, compliant) and struggle when their actual child differs. This gap between expectation and reality causes suffering for both parent and child. Practice accepting your child as they are, not as you wished they would be. This means: 1) Recognize and grieve the fantasy child. 2) Notice when you're comparing your child to siblings, friends' children, or societal norms. 3) Focus on your child's unique strengths rather than perceived deficits. 4) Advocate for their learning style and temperament. 5) Trust that their path may look nothing like yours — and that's good.",
  },

  // === DEEPENED: Between Parent and Child (Haim Ginott) ===
  {
    id: "deep-89",
    source: "Between Parent and Child",
    sourceDetails: "Haim Ginott — The Power of Naming Feelings",
    category: "emotional",
    text: "Ginott's cardinal rule: all feelings are acceptable, but not all behaviors are. When a child says 'I hate my sister,' don't correct the feeling ('You don't really hate her'). Instead, name it: 'You're feeling very angry at your sister right now.' The act of naming a feeling helps the child process it. Children who can name their feelings have better emotional regulation throughout life. Avoid: dismissing ('don't be silly'), fixing ('let's make it better'), or lecturing ('you should appreciate your sister'). Instead: acknowledge, accept, and support.",
  },
  {
    id: "deep-90",
    source: "Between Parent and Child",
    sourceDetails: "Haim Ginott — Constructive Criticism",
    category: "behavior",
    text: "Ginott's approach to correction: describe the problem, not the child's character. Instead of 'You're so careless' (attack on character), say 'The milk spilled — here's a cloth' (describe the problem and solution). Avoid labels: 'lazy,' 'messy,' 'shy.' Labels become self-fulfilling prophecies — children live up to (or down to) the identity parents assign. For recurring problems, describe the pattern neutrally: 'I've noticed the toys are often still out after dinner. What do you think we should do about that?' This invites cooperation rather than defensiveness. Criticism should never be delivered in anger.",
  },
  {
    id: "deep-91",
    source: "Between Parent and Child",
    sourceDetails: "Haim Ginott — Permission to Feel Angry",
    category: "anger",
    text: "Children need to know that anger is a normal, acceptable emotion. The message should be: 'You can be angry AND you can't hurt people or property.' Ginott suggests giving children acceptable outlets for anger: 1) Tear up scrap paper. 2) Draw an angry picture. 3) Punch a pillow. 4) Run around the yard. 5) Use words: 'I'm furious!' The goal isn't to suppress anger but to channel it appropriately. When parents show that they can handle their own anger calmly, children learn by example. Never punish a child for feeling angry — only address how the anger is expressed.",
  },
  {
    id: "deep-92",
    source: "Between Parent and Child",
    sourceDetails: "Haim Ginott — The Art of Conversation with Children",
    category: "social",
 text: "Children open up when they feel safe, not when they're interrogated. To encourage conversation: 1) Use 'door openers' like 'Hmm,' 'I see,' and 'Tell me more' instead of questions. 2) Don't correct their story mid-telling — let them finish. 3) Resist the urge to turn every conversation into a lesson. 4) Share your own age-appropriate stories ('When I was your age, something similar happened to me...'). 5) Car conversations are often easier than face-to-face — children talk more freely in the car or during a walk. 6) Bedtime is a prime talking time — children delay sleep by talking, and that's when their deepest worries surface.",
  },

  // === DEEPENED: Additional Dopamine Nation ===
  {
    id: "deep-93",
    source: "Dopamine Nation",
    sourceDetails: "Anna Lembke — Gamification and Variable Rewards",
    category: "screen",
    text: "Video games and social media use variable reward schedules — the same psychology as slot machines. When rewards are unpredictable (sometimes you get a rare item, sometimes you don't), the dopamine response is maximized. This is why children prefer video games to predictable rewards (like stickers). Parents can use this knowledge: 1) Make screen time predictable, not random — scheduled times, not earned unpredictably. 2) Understand that variable rewards are what make screens so hard to put down — it's not a lack of willpower. 3) Provide real-world variable rewards (surprise outings, mystery activities) to compete with digital ones. 4) For older children, explain the psychology so they understand their own reactions.",
  },

  // === DEEPENED: Additional The Explosive Child ===
  {
    id: "deep-94",
    source: "The Explosive Child",
    sourceDetails: "Ross Greene — When Plan B Doesn't Work",
    category: "behavior",
    text: "If Plan B isn't working, common reasons: 1) You're doing Plan A disguised as Plan B (dictating the solution). 2) You haven't identified the real unsolved problem (too vague: 'homework' vs specific: 'starting writing assignments'). 3) The solution doesn't address both concerns. 4) The solution is unrealistic or the child can't execute it. 5) You're trying to solve too many problems at once. Fix: get more specific about the problem, make sure you've truly listened in the empathy step, ensure the solution was collaborative (not imposed), and test the solution for at least a few days before adjusting.",
  },
  {
    id: "deep-95",
    source: "The Explosive Child",
    sourceDetails: "Ross Greene — Proactive vs Reactive Plan B",
    category: "behavior",
    text: "Proactive Plan B (discussing a problem during a calm time) is far more effective than Emergency Plan B (trying to problem-solve mid-meltdown). Schedule Plan B conversations during neutral moments: after a meal, during a walk, or before bed. Example opener: 'Remember this morning when you got really upset about getting dressed? I wanted to understand more about what was hard for you.' Never attempt Plan B when the child is actively dysregulated — that's a Plan C moment (reduce expectations, ensure safety, wait for calm).",
  },

  // === DEEPENED: Additional 1-2-3 Magic ===
  {
    id: "deep-96",
    source: "1-2-3 Magic",
    sourceDetails: "Thomas Phelan — Testing and Tantrum Phase",
    category: "tantrums",
    text: "When you start counting, expect the behavior to get WORSE for 3-7 days. This is the 'testing phase' — the child is checking if you'll really follow through. They may escalate tantrums, try new tactics, or push harder than ever. Hold firm. Don't explain the system during a count — explanations are for calm times. By the end of week one, the child will understand the system is real. By week two, you'll be counting much less. By week three, the home will be calmer. The testing phase is the hardest part — most parents who quit do so during week one.",
  },

  // === DEEPENED: Additional Child of Mine ===
  {
    id: "deep-97",
    source: "Child of Mine",
    sourceDetails: "Ellyn Satter — Preventing Food Power Struggles",
    category: "eating",
    text: "If meals have become battlegrounds, reset the dynamic: 1) Stop all pressure — no coaxing, bribing, or negotiating. 2) Serve family-style meals where the child chooses what and how much to put on their plate. 3) Always include at least one 'safe' food the child reliably eats. 4) Let the child serve themselves (even young children can use serving spoons). 5) Don't monitor or comment on what they eat. 6) If they don't eat, calmly end the meal after 20-30 minutes. 7) Avoid 'You need to eat your X before Y' (food chaining creates resistance). It takes 2-4 weeks for tension to dissipate after pressure stops.",
  },

  // === DEEPENED: Additional Sleep Books ===
  {
    id: "deep-98",
    source: "Healthy Sleep Habits, Happy Child",
    sourceDetails: "Marc Weissbluth — Naps and Sleep Consolidation",
    category: "sleep",
 text: "Naps are not optional — they're biologically essential for young children. Naps consolidate learning, support emotional regulation, and actually IMPROVE nighttime sleep. Dropping naps too early (before age 3-4) leads to afternoon crankiness, behavior problems, and paradoxically WORSE night sleep. Signs a child still needs a nap: falls asleep in the car, gets cranky in the late afternoon, or sleeps more than usual at night when they do nap. Protect naps as fiercely as bedtime. If the child resists naps, institute 'quiet time' — 45-60 minutes in their room with books and quiet toys, even if they don't sleep.",
  },
  {
    id: "deep-99",
    source: "Solve Your Child's Sleep Problems",
    sourceDetails: "Richard Ferber — Scheduled Awakenings",
    category: "sleep",
    text: "For night terrors that occur at predictable times: use scheduled awakenings. Note the time the night terror usually occurs (e.g., 1.5 hours after falling asleep). Then, every night, gently rouse the child 15-30 minutes BEFORE that time — just enough to open their eyes or stir, but not fully wake them. This interrupts the deep sleep cycle that triggers night terrors. After several nights of scheduled awakenings, the night terrors typically stop. Gradually reduce the awakenings over a week. This technique has a high success rate for night terrors but is not useful for regular nightmares.",
  },

  // === DEEPENED: Additional Playful Parenting ===
  {
    id: "deep-100",
    source: "Playful Parenting",
    sourceDetails: "Lawrence Cohen — Reconnecting After Work/School Separation",
    category: "parent",
    text: "Reconnection rituals ease transitions and prevent behavior issues. After school or work, before asking about homework or chores, spend 10-15 minutes in child-directed play: 1) Let the child choose the activity. 2) Follow their lead without directing. 3) Be fully present (phone away). 4) Don't teach, correct, or turn it into a lesson. 5) Resist asking a barrage of questions about their day — let them share when ready. This 'filling the cup' approach means the child gets their connection needs met early, reducing the likelihood of attention-seeking behavior later in the evening. Children who get regular special time show improved cooperation and fewer behavior problems.",
  },

  // === DEEPENED: Additional Taking Charge of ADHD ===
  {
    id: "deep-101",
    source: "Taking Charge of ADHD",
    sourceDetails: "Russell Barkley — Medication and Parenting",
    category: "behavior",
    text: "ADHD medication is effective for 70-80% of children and is the single most effective treatment for core ADHD symptoms. But medication doesn't teach skills — it creates the conditions for learning. Children still need: explicit instruction in executive function skills, behavior modification systems at home and school, accommodations for learning challenges, and help with social skills. Parents often feel guilt about medication, but untreated ADHD leads to worse outcomes: school failure, low self-esteem, accidents, and substance abuse. The decision should be made with a pediatrician or child psychiatrist, weighing benefits and side effects.",
  },
  {
    id: "deep-102",
    source: "Taking Charge of ADHD",
    sourceDetails: "Russell Barkley — Sibling Dynamics with ADHD",
    category: "sibling",
    text: "When one child has ADHD, sibling dynamics get complicated. The ADHD child may receive more attention (for misbehavior), leaving siblings feeling ignored. Strategies: 1) Spend 1:1 time with each child daily, even if brief. 2) Don't make siblings the 'easy' or 'good' comparison ('Why can't you be more like your sister?'). 3) Explain ADHD to siblings in age-appropriate terms ('Your brother's brain works differently — he's not doing it on purpose'). 4) Protect siblings' belongings from impulsive destruction. 5) Acknowledge siblings' frustration ('It's hard when your brother interrupts — I understand'). 6) Ensure siblings aren't taking on excessive caregiving responsibility.",
  },

  // === DEEPENED: Additional Unconditional Parenting ===
  {
    id: "deep-103",
    source: "Unconditional Parenting",
    sourceDetails: "Alfie Kohn — The Problem with Time-Out",
    category: "behavior",
    text: "Kohn argues that time-out is a form of love withdrawal — it teaches children that parental acceptance is conditional on good behavior. Instead of time-out, Kohn suggests: 1) 'Time-in' — sitting WITH the child while they calm down. 2) Creating a cozy calming space the child can CHOOSE to use (not a punishment corner). 3) Addressing the root cause of the behavior rather than isolating the child. 4) If safety is an issue, separate the child physically but stay present ('I'm going to hold you until you're safe'). Critics argue time-out can be used compassionately, but Kohn's core point — that children need connection, not isolation, when struggling — is well-supported.",
  },

  // === DEEPENED: Additional Raising Emotionally Intelligent Child ===
  {
    id: "deep-104",
    source: "Raising an Emotionally Intelligent Child",
    sourceDetails: "John Gottman — Parental Self-Regulation First",
    category: "parent",
    text: "You can't emotion-coach your child if you're emotionally dysregulated yourself. If you grew up in an emotion-dismissing household, you'll default to that under stress. Steps: 1) Notice your own emotional triggers ('When my child cries, I feel anxious'). 2) Practice your own emotion regulation (breathing, pausing, naming your feelings). 3) Reflect on your childhood — what messages did you receive about emotions? 4) Forgive yourself for imperfection — emotion coaching is a practice, not a destination. 5) Use a repair script after losing your temper: 'I yelled because I was frustrated, not because of you. I'm working on staying calm. Let's try again.' Modeling emotional regulation is the most powerful teaching tool.",
  },

  // === DEEPENED: Additional Between Parent and Child ===
  {
    id: "deep-105",
    source: "Between Parent and Child",
    sourceDetails: "Haim Ginott — When Parents Lose Control",
    category: "parent",
    text: "Even the best parents lose their temper. Ginott's guidance for after you've yelled or reacted poorly: 1) Acknowledge what happened without making excuses: 'I lost my temper and I shouldn't have yelled.' 2) Don't add 'but if you had just...' — this shifts blame to the child. 3) Describe what you wish you had done: 'I wish I had taken a breath and spoken calmly.' 4) Ask how it felt to the child: 'How did it feel when I yelled?' 5) Make a plan together: 'Next time I'm getting frustrated, I'm going to step into the kitchen for one minute.' 6) Repair quickly — don't let guilt prevent you from addressing the rupture. Repairs build trust.",
  },

  // === DEEPENED: Additional NurtureShock ===
  {
    id: "deep-106",
    source: "NurtureShock",
    sourceDetails: "Bronson & Merryman — Obesity and Sleep Connection",
    category: "sleep",
    text: "Research shows a strong link between inadequate sleep and childhood obesity. Sleep deprivation disrupts two key hormones: ghrelin (hunger) increases and leptin (fullness) decreases. Children who sleep less eat more, especially high-calorie foods. Additionally, tired children are less physically active. The correlation holds even after controlling for socioeconomic factors. Practical implication: if a child is gaining excess weight, check sleep before restricting food. Increasing sleep by just 30-60 minutes per night can improve eating habits and activity levels. This is one reason bedtime is a health intervention, not just a parenting preference.",
  },

  // === DEEPENED: Additional Out-of-Sync Child ===
  {
    id: "deep-107",
    source: "The Out-of-Sync Child",
    sourceDetails: "Carol Kranowitz — Food Texture Sensitivities",
    category: "eating",
    text: "Sensory processing issues often manifest as extreme food selectivity. A child may refuse foods based on texture (mushy, crunchy, mixed), temperature, or smell — not taste. This is neurological, not behavioral. Signs: eating only specific brands, refusing mixed textures (like casseroles), preferring either very bland or very intense flavors. Strategies: 1) Don't force foods — it increases sensory defensiveness. 2) Offer new foods in a no-pressure way (on a separate plate, to explore with hands). 3) Gradually introduce texture variations (smooth puree to slightly lumpy to chunks). 4) Consult an occupational therapist for severe food selectivity. 5) Ensure nutritional needs are met with accepted foods and supplements if necessary.",
  },

  // === DEEPENED: Additional Conscious Parent ===
  {
    id: "deep-108",
    source: "The Conscious Parent",
    sourceDetails: "Dr. Shefali Tsabary — Expectations as Suffering",
    category: "confidence",
    text: "Much of parenting suffering comes from unmet expectations — the child won't eat, won't sleep, won't behave as expected. The practice is to separate what IS happening from what you THINK should be happening. When your toddler has a tantrum, the suffering isn't the tantrum — it's your belief that they shouldn't be having one. Reframe: 'My child is having a hard time. This is what children do. How can I help?' This doesn't mean accepting all behavior — it means accepting reality before responding to it. Children absorb their parents' emotional states; a calm parent creates a calm child.",
  },

  // ============================================================
  // === EXPANDED: MORE BOOKS (mb-1 through mb-104) =============
  // ============================================================

  // --- RAISING AN ADULT (Julie Lythcott-Haims) ---
  {
    id: "mb-1",
    source: "Raising an Adult",
    sourceDetails: "Julie Lythcott-Haims — The Overparenting Epidemic",
    category: "parent",
    text: "Overparenting (helicopter parenting) stems from love but damages children's competence and confidence. Signs you're overparenting: you do things for your child they can do themselves, you micromanage their homework, you intervene in every social conflict, you're more invested in their achievements than they are. Overparented children arrive at university unable to do laundry, manage schedules, or advocate for themselves. The antidote: before doing something for your child, ask 'Is this something they can do, or almost do, for themselves?' If yes, step back. Let them struggle, let them be imperfect, let them learn through trying.",
  },
  {
    id: "mb-2",
    source: "Raising an Adult",
    sourceDetails: "Julie Lythcott-Haims — Chores Build Capability",
    category: "routines",
    text: "Chores are the single greatest predictor of adult success, according to the Harvard Grant Study. Children who do chores from age 3-4 develop a 'pitch-in' mindset and a sense of contribution. Age-appropriate chores: 3-4 years: put toys away, put clothes in hamper, feed pets. 5-6 years: make bed, set table, water plants. 7-9 years: load dishwasher, sweep, pack own lunch. 10-12 years: do laundry, cook simple meals, clean bathroom. 13+: manage own homework schedule, budget allowance, handle appointments. Don't tie chores to allowance — chores are family contribution, not paid work. The life skill matters more than the quality of the result.",
  },
  {
    id: "mb-3",
    source: "Raising an Adult",
    sourceDetails: "Julie Lythcott-Haims — Life Skills Checklist",
    category: "confidence",
    text: "By age 18, every young person should be able to: make a doctor's appointment, manage a bank account, cook several basic meals, do laundry properly, read and understand a lease or contract, navigate public transport, advocate for themselves with authority figures, manage their own schedule, resolve conflicts without a parent mediator, and budget for groceries. If your teenager can't do these things, start teaching now. Break each skill into steps, teach explicitly, practice together, then step back. It's never too late — but it's much harder to learn these at 22 than at 14.",
  },
  {
    id: "mb-4",
    source: "Raising an Adult",
    sourceDetails: "Julie Lythcott-Haims — Letting Them Make Mistakes",
    category: "behavior",
    text: "Parents who shield children from all consequences raise fragile adults. When your child forgets their homework, don't drive it to school. When they oversleep, let them face the tardy. When they break something, they help replace it. Natural consequences teach more than any lecture. Before rescuing, ask yourself: 'What will they learn if I fix this? What will they learn if I don't?' Short-term discomfort (a bad grade, a missed practice) teaches long-term responsibility. The goal isn't to abandon them — it's to be a supportive consultant, not a fixer. 'That sounds really stressful. What's your plan?'",
  },
  {
    id: "mb-5",
    source: "Raising an Adult",
    sourceDetails: "Julie Lythcott-Haims — Helicopter vs Lighthouse Parenting",
    category: "parent",
    text: "Helicopter parents hover, monitoring and controlling every aspect of the child's life. Lighthouse parents are stable, grounded guides — they stand tall, shine a light on the path, and let the child navigate their own waters. They're available when the child needs guidance but don't chase after them. To shift from helicopter to lighthouse: 1) Stop checking grades daily — check weekly or less. 2) Let the child communicate directly with teachers and coaches. 3) Don't text them constantly at college. 4) When they call with a problem, ask 'What do you think you should do?' before offering advice. 5) Accept that your child's path will differ from the one you envisioned.",
  },
  {
    id: "mb-6",
    source: "Raising an Adult",
    sourceDetails: "Julie Lythcott-Haims — The College Admissions Pressure Cooker",
    category: "school",
    text: "The intense focus on getting into a 'good' college is damaging children's mental health and killing their love of learning. Parents transmit anxiety through constant grade monitoring, test prep pressure, and resume-building activities. Lythcott-Haims (former Stanford dean) notes: there are hundreds of excellent colleges, and where you go matters far less than what you do when you get there. Reframe: 'What kind of person is my child becoming?' not 'What college will they get into?' Let them pursue activities they genuinely enjoy, not ones that 'look good.' A teenager who is authentic, curious, and hard-working will thrive anywhere.",
  },
  {
    id: "mb-7",
    source: "Raising an Adult",
    sourceDetails: "Julie Lythcott-Haims — Becoming a Consultant Parent",
    category: "teen",
    text: "As children become teenagers, parents must shift from manager to consultant. The manager tells the child what to do, when, and how. The consultant offers expertise when asked but respects the client's autonomy. Signs you're still managing a teen: you wake them up, you track every assignment, you argue about every grade. Shift to consulting: 1) Let them manage their own alarm clock. 2) Let them communicate with teachers themselves. 3) Offer advice only when asked (or when safety is at stake). 4) Accept that they will make mistakes — that's how they learn. 5) Be available, not intrusive. The transition is hard for parents who derive identity from managing their child's life.",
  },

  // --- THE GIFT OF FAILURE (Jessica Lahey) ---
  {
    id: "mb-8",
    source: "The Gift of Failure",
    sourceDetails: "Jessica Lahey — Autonomy-Supportive Parenting",
    category: "confidence",
    text: "Lahey's research shows that autonomy-supportive parenting produces more motivated, resilient children than controlling parenting. Autonomy support means: 1) Acknowledging the child's perspective ('I know you don't want to do homework right now'). 2) Giving rationale for rules ('We ask you to do homework before screens because your brain is fresher'). 3) Allowing choice within structure ('Do you want to start with math or reading?'). 4) Minimizing pressure and control. 5) Encouraging self-initiation. Children with autonomy-supportive parents have higher intrinsic motivation, better academic performance, and lower anxiety than children whose parents control them through rewards, threats, or guilt.",
  },
  {
    id: "mb-9",
    source: "The Gift of Failure",
    sourceDetails: "Jessica Lahey — Letting Kids Experience Academic Failure",
    category: "school",
    text: "When parents rescue children from academic failure (doing their homework, emailing teachers to change grades, requesting extensions), they steal the opportunity to learn resilience. Instead: 1) Let them get a zero on a missed assignment — the natural consequence teaches time management. 2) If they fail a test, ask 'What's your plan to improve?' not 'I'll email the teacher.' 3) Help them develop study skills rather than studying for them. 4) Let them experience the discomfort of a bad grade before fixing it. 5) Praise the recovery: 'You figured out what went wrong and made a plan — that's impressive.' Children who never fail academically don't develop the academic resilience needed for higher education.",
  },
  {
    id: "mb-10",
    source: "The Gift of Failure",
    sourceDetails: "Jessica Lahey — Intrinsic vs Extrinsic Motivation",
    category: "behavior",
    text: "Rewards (stickers, treats, money for grades) create extrinsic motivation — the child works for the prize, not the learning. Research shows extrinsic motivation actually REDUCES intrinsic motivation over time. To build intrinsic motivation: 1) Help the child see the relevance of what they're learning ('Math helps you build things you're interested in'). 2) Praise effort and strategy, not outcomes. 3) Let them pursue their own interests, even if those interests don't seem 'productive.' 4) Model lifelong learning — let them see you reading, learning, struggling with new skills. 5) Avoid making everything about grades. The child who reads because they love stories will outperform the child who reads for AR points.",
  },
  {
    id: "mb-11",
    source: "The Gift of Failure",
    sourceDetails: "Jessica Lahey — Homework Boundaries",
    category: "school",
    text: "Parents should NOT sit with children during homework. This creates dependency and sends the message 'you can't do this alone.' Instead: 1) Set up a homework space and routine. 2) Be available for questions, but don't hover. 3) When they ask for help, ask 'What have you tried so far?' 4) Don't correct their mistakes — let the teacher see what they don't understand. 5) If homework takes hours, investigate whether the workload is appropriate (talk to the teacher) or whether there's an underlying learning gap. 6) Teach them to use planners and break projects into chunks. 7) The goal is independent learning, not perfect homework.",
  },
  {
    id: "mb-12",
    source: "The Gift of Failure",
    sourceDetails: "Jessica Lahey — Social Failure as Learning",
    category: "social",
    text: "When a child loses a friend, isn't invited to a party, or gets rejected from a team, the impulse is to fix it. Instead: 1) Validate the pain without minimizing ('That really hurts'). 2) Don't call other parents to intervene (unless there's bullying or safety concerns). 3) Ask 'What do you think happened?' and 'What could you do differently next time?' 4) Share your own social failures. 5) Help them identify what they value in friendships. 6) Recognize that social pain is real pain — brain imaging shows social rejection activates the same areas as physical pain. 7) After processing, help them find new social connections rather than ruminating on the loss.",
  },
  {
    id: "mb-13",
    source: "The Gift of Failure",
    sourceDetails: "Jessica Lahey — Household Responsibilities as Competence Building",
    category: "routines",
    text: "Children who don't do household tasks grow into adults who can't care for themselves. Lahey advocates: by age 10, children should be doing meaningful household work regularly — cooking meals, doing their own laundry, cleaning bathrooms. Not as punishment, but as participation in family life. Start young: a 3-year-old can sort socks, a 5-year-old can feed the dog, a 7-year-old can empty the dishwasher. Expect imperfection — if you redo their work, they learn their contribution doesn't matter. Say 'Thank you for doing the dishes' not 'You missed a spot.' Contribution builds belonging and competence.",
  },

  // --- QUEEN BEES AND WANNABES (Rosalind Wiseman) ---
  {
    id: "mb-14",
    source: "Queen Bees and Wannabes",
    sourceDetails: "Rosalind Wiseman — Girl Social Hierarchies",
    category: "social",
    text: "Girls' social groups often have a hidden structure: the Queen Bee (controls the group through popularity and fear), the Sidekick (enforces the Queen Bee's rules), the Banker (collects and trades secrets), the Messenger (relays information between groups), the Wannabe (seeks approval from the Queen Bee), and the Torn Bystander (knows it's wrong but fears exclusion). Understanding these roles helps parents decode girl drama. Your daughter may cycle through roles. Don't label her — help her recognize the dynamics. Ask: 'Do you feel like you can be yourself in this friendship?' If the answer is no, the friendship needs examination.",
  },
  {
    id: "mb-15",
    source: "Queen Bees and Wannabes",
    sourceDetails: "Rosalind Wiseman — Relational Aggression",
    category: "social",
    text: "Relational aggression is the primary form of bullying among girls: using relationships as weapons. It includes exclusion, rumor-spreading, eye-rolling, silent treatment, and manipulative friendship ('I won't be your friend unless...'). This is often invisible to adults because it happens through glances, texts, and whispers. If your daughter is experiencing relational aggression: 1) Listen without immediately calling the school or other parents. 2) Help her identify specific behaviors ('What exactly did she do?'). 3) Role-play responses ('I don't like it when you exclude me'). 4) Distinguish between one-time meanness and a pattern. 5) If it's persistent and targeted, involve the school — document specifics.",
  },
  {
    id: "mb-16",
    source: "Queen Bees and Wannabes",
    sourceDetails: "Rosalind Wiseman — When Your Daughter Is the Queen Bee",
    category: "social",
    text: "If your daughter is the one excluding or controlling others: 1) Don't jump to defense ('She would never do that'). 2) Investigate calmly — ask what happened from her perspective. 3) Address the behavior directly: 'Excluding someone to punish them is cruel. We don't treat people that way in our family.' 4) Explore why she feels the need to control others — often it comes from insecurity or fear of being excluded herself. 5) Teach empathy by asking 'How would you feel if someone did that to you?' 6) Connect her with diverse social groups outside school. 7) If she persists, consider whether her social media needs monitoring. 8) Reward inclusive behavior when you see it.",
  },
  {
    id: "mb-17",
    source: "Queen Bees and Wannabes",
    sourceDetails: "Rosalind Wiseman — Decoding Girl Drama",
    category: "teen",
    text: "When your teenage daughter comes home upset about friend drama: 1) DON'T try to fix it, dismiss it ('It's not a big deal'), or share it with other parents. 2) DO listen fully, even if it seems trivial. To her, it's everything. 3) Ask 'Do you want advice or do you just need to vent?' Respect her answer. 4) Don't catastrophize ('Maybe she's not a real friend') — adolescent friendships are complex and shifting. 5) Help her distinguish between feelings and facts ('I feel excluded' vs 'She excluded me'). 6) Share (briefly) your own friendship experiences. 7) Remember: girl drama peaks around ages 11-14 and generally improves as they develop better communication skills.",
  },
  {
    id: "mb-18",
    source: "Queen Bees and Wannabes",
    sourceDetails: "Rosalind Wiseman — Technology and Girl Bullying",
    category: "screen",
    text: "Girls use technology for relational aggression more than boys: group chats that exclude someone, screenshots shared to humiliate, social media posts designed to send messages ('hanging with my REAL friends'). Responses: 1) Know what apps your daughter uses and how they work. 2) Discuss 'digital citizenship': 'Before you post, ask: Is it true? Is it kind? Is it necessary?' 3) Teach the 24-hour rule — don't respond to anything emotional online for 24 hours. 4) Collect phones at night (charging in the kitchen, not bedrooms). 5) If she's being cyberbullied: screenshot everything, report to the platform, involve the school if peers are involved. 6) If she's the aggressor: immediate consequences (loss of phone privileges).",
  },

  // --- MASTERMINDS AND WINGMEN (Rosalind Wiseman) ---
    {
    id: "mb-19",
    source: "Masterminds and Wingmen",
    sourceDetails: "Rosalind Wiseman — Boy Friendship Structures",
    category: "social",
    text: "Boys' friendships are structured differently than girls'. Boys tend to organize around shared activities (gaming, sports) rather than emotional intimacy. The Mastermind is the idea guy who decides what the group does, the Wingman is the loyal enforcer, the Associate is included sometimes but not always, and the Isolated boy is on the outside. Boys often hide friendship problems because expressing emotional pain violates the 'boy code' (don't show weakness). Parents can help by asking indirect questions: 'How are the guys?' rather than 'Are you and Jake still friends?' Watch for withdrawal, irritability, or sudden changes in who he hangs out with — these signal friendship issues he may not verbalize.",
  },
  {
    id: "mb-20",
    source: "Masterminds and Wingmen",
    sourceDetails: "Rosalind Wiseman — The Boy Code and Emotional Suppression",
    category: "emotional",
    text: "The 'boy code' teaches boys that vulnerability, sadness, and fear are weaknesses — only anger is an acceptable emotion. This emotional suppression leads to anxiety, aggression, and isolation. To counter it: 1) Create regular one-on-one time (car rides, walks, cooking together) where boys naturally open up. 2) Ask 'How are you feeling about that?' not 'What happened?' — focus on emotions, not just events. 3) Model emotional expression yourself: 'I felt disappointed today when...' 4) Don't use gendered language like 'man up,' 'boys don't cry,' 'don't be a girl.' 5) Validate all emotions, including the messy ones. 6) Read books and watch films with male characters who show a range of emotions.",
  },
  {
    id: "mb-21",
    source: "Masterminds and Wingmen",
    sourceDetails: "Rosalind Wiseman — When Boys Get Teased",
    category: "social",
    text: "Boy teasing is often brutal and masquerades as humor. Boys tease to establish hierarchy, test boundaries, and bond. The line between teasing and bullying: teasing is occasional, balanced (both give and take), and both boys find it funny. Bullying is one-sided, persistent, and the target isn't laughing. If your son is being teased: 1) Don't tell him to 'man up' or 'just ignore them.' 2) Help him assess: 'Is this teasing or bullying?' 3) Teach assertive responses: direct eye contact, firm voice, 'Stop. That's not funny.' 4) Teach the 'shrug and walk' — show it doesn't bother him. 5) If the teasing targets race, sexuality, disability, or body — this is harassment, not teasing. Involve the school immediately.",
  },
  {
    id: "mb-22",
    source: "Masterminds and Wingmen",
    sourceDetails: "Rosalind Wiseman — Gaming and Boy Friendships",
    category: "screen",
    text: "For many boys, gaming IS their social life — it's how they connect, compete, and communicate. Dismissing gaming as 'a waste of time' dismisses his friendships. Instead: 1) Understand that gaming builds real social skills (teamwork, strategy, communication). 2) Set reasonable limits rather than banning gaming entirely. 3) Ask him to teach you about his games — this shows you value his world. 4) Know who he games with online. 5) Watch for signs gaming has become unhealthy: declining grades, no in-person friends, rage when forced to stop, choosing gaming over sleep. 6) Distinguish between gaming as social connection (healthy) and gaming as escape from problems (concerning).",
  },
  {
    id: "mb-23",
    source: "Masterminds and Wingmen",
    sourceDetails: "Rosalind Wiseman — Talking with Boys",
    category: "teen",
    text: "Boys communicate differently than girls — they open up through side-by-side activities rather than face-to-face conversations. Strategies: 1) Car conversations — boys talk more freely in the car (no eye contact required). 2) Activity-based check-ins (while shooting hoops, building Lego, cooking). 3) Brief but regular check-ins beat long intense talks. 4) Use his interests as conversation starters ('Tell me about that game'). 5) Don't interrogate — one or two genuine questions, then let silence do the work. 6) If he's upset, don't force him to talk immediately. Say 'I'm here when you're ready' and wait. 7) Bedtime is prime talking time for boys — the dark and tiredness lower defenses.",
  },

  // --- BOYS ADRIFT (Leonard Sax) ---
  {
    id: "mb-24",
    source: "Boys Adrift",
    sourceDetails: "Leonard Sax — The Motivation Gap in Boys",
    category: "school",
    text: "Sax identifies a growing epidemic of unmotivated boys and young men. Factors include: changes in early education that favor girls' developmental timeline (expecting 5-year-old boys to sit still and write when fine motor skills lag 12-18 months behind girls), video games that provide instant achievement without real-world effort, and a culture that often dismisses boys' need for purpose. Signs of the motivation gap: declining grades, excessive gaming, no extracurricular interests, lack of direction after secondary school. Response: 1) Ensure the school environment is boy-friendly (movement breaks, hands-on learning, competition). 2) Limit screen time — gaming provides false achievement. 3) Connect schoolwork to real-world purpose. 4) Provide male role models who value learning. 5) Don't shame boys for being unmotivated — investigate the cause.",
  },
  {
    id: "mb-25",
    source: "Boys Adrift",
    sourceDetails: "Leonard Sax — School Readiness and Gender Differences",
    category: "school",
    text: "Boys' brains develop differently from girls' — particularly in language and fine motor skills, where boys are typically 12-18 months behind girls in early childhood. Forcing boys to read and write before they're developmentally ready creates a sense of failure that can last throughout their education. Sax recommends: 1) Don't push early formal academics for boys — play-based learning in preschool is better than formal instruction. 2) Ensure kindergarten expectations match developmental reality. 3) For boys who struggle with writing, try typing, dictation, or oral presentations. 4) Competitive, kinesthetic learning engages boys better than sitting and listening. 5) Don't hold boys back a year just for academics — consider social and emotional factors too.",
  },
  {
    id: "mb-26",
    source: "Boys Adrift",
    sourceDetails: "Leonard Sax — Video Games and Boy Disengagement",
    category: "screen",
    text: "Sax argues that excessive video gaming creates a 'false competence' that replaces real-world achievement. Boys who spend 3+ hours daily gaming often show: declining academic performance, reduced interest in real-world activities, social withdrawal, and difficulty with face-to-face communication. Gaming provides the dopamine reward of achievement without the effort or risk. Sax's recommendations: 1) No more than 40 minutes of gaming on weekdays, 1 hour on weekends. 2) Gaming comes AFTER homework and chores, never before. 3) No gaming in bedrooms — only in shared spaces. 4) Know which games your son plays and what they involve. 5) If gaming is interfering with school, sleep, or friendships, it's an addiction that needs addressing — don't minimize it.",
  },
  {
    id: "mb-27",
    source: "Boys Adrift",
    sourceDetails: "Leonard Sax — Environmental Factors and Boy Development",
    category: "behavior",
    text: "Sax explores environmental factors that may be affecting boys disproportionately: 1) Endocrine disruptors (BPA, phthalates in plastics) may be accelerating puberty in girls while delaying it in boys. 2) Changes in the food supply and decreased physical activity affect testosterone levels and motivation. 3) Sleep deprivation hits boys particularly hard — they need 9+ hours but often get 6-7. 4) Medication for ADHD is prescribed to boys at 2-3 times the rate of girls — ensure proper diagnosis before medicating. While some of Sax's claims are debated, his core message is sound: boys' developmental environment matters, and schools/parents must adapt to boys' needs rather than expecting boys to adapt to systems designed for girls.",
  },
  {
    id: "mb-28",
    source: "Boys Adrift",
    sourceDetails: "Leonard Sax — Purpose and Meaning for Boys",
    category: "confidence",
    text: "Boys need to feel their life has purpose and direction. Without it, they disengage. Ways to build purpose: 1) Give real responsibility — a pet they care for, a household system they manage. 2) Connect them with positive male role models (coaches, uncles, mentors). 3) Competition can be healthy and motivating for boys — don't eliminate it entirely, but teach good sportsmanship. 4) Physical challenges (hiking, martial arts, adventure activities) build confidence and purpose. 5) Community service helps boys see themselves as contributors. 6) Apprenticeships and real-world projects beat theoretical learning for many boys. A boy with purpose is resilient; a boy without purpose is adrift.",
  },

  // --- THE PRICE OF PRIVILEGE (Madeline Levine) ---
  {
    id: "mb-29",
    source: "The Price of Privilege",
    sourceDetails: "Madeline Levine — Affluent Teen Depression",
    category: "teen",
    text: "Levine's research reveals that affluent teenagers have higher rates of depression, anxiety, and self-harm than any other demographic — including teens in poverty. The causes: excessive achievement pressure, emotional isolation from busy parents who prioritize success over connection, and a sense that their value is conditional on performance. These teens have everything material but lack the authentic connection and unconditional acceptance they need. Warning signs in affluent teens: perfectionism, emptiness despite achievement, substance use, cutting, eating disorders. Response: 1) Prioritize your relationship over their resume. 2) Monitor your own achievement-anxiety. 3) Ensure they have unstructured downtime. 4) Value character over accomplishment. 5) Seek therapy if you see warning signs — early intervention is critical.",
  },
  {
    id: "mb-30",
    source: "The Price of Privilege",
    sourceDetails: "Madeline Levine — The Mothering Gap",
    category: "parent",
    text: "Levine identifies a common pattern in affluent families: mothers are physically present but emotionally absent. They manage their children's lives (schedules, activities, college planning) but don't know what their children are actually feeling. This 'controlling but not connecting' dynamic leaves children emotionally starved. The fix: 1) Shift from managing to listening. 2) Ask 'How are you?' and wait for the real answer. 3) Spend time doing nothing together (no agenda, no activity). 4) Let them see you as a real person with feelings, not just a productivity machine. 5) Know their friends, their fears, what makes them laugh. 6) Connection is the antidote to the achievement pressure cooker.",
  },
  {
    id: "mb-31",
    source: "The Price of Privilege",
    sourceDetails: "Madeline Levine — Healthy vs Unhealthy Pressure",
    category: "school",
    text: "Distinguishing healthy challenge from toxic pressure: Healthy challenge says 'This is hard, but I believe you can do it, and I'm here to help.' Toxic pressure says 'You must get an A or you're a disappointment.' Signs of toxic pressure: child cries over homework regularly, child fears bringing home anything less than an A, child cheats to maintain grades, child has no free time, child defines self-worth entirely through grades. Response: 1) Explicitly tell your child 'I love you regardless of your grades.' 2) Celebrate effort, curiosity, and improvement, not just outcomes. 3) If the school culture is unhealthy, consider alternatives. 4) Model balance — don't discuss work stress constantly. 5) Protect sleep, family meals, and downtime as non-negotiable.",
  },
  {
    id: "mb-32",
    source: "The Price of Privilege",
    sourceDetails: "Madeline Levine — Materialism and Child Wellbeing",
    category: "confidence",
    text: "Research consistently shows that materialism is correlated with lower life satisfaction and higher depression in children. Children who are given excessive material goods score lower on measures of happiness and generosity. To counter materialism: 1) Limit gifts to holidays and birthdays, not every outing. 2) Involve children in charitable giving and volunteering. 3) Teach budgeting and delayed gratification. 4) Talk about advertising and media messages critically. 5) Focus on experiences rather than things (a camping trip builds more happiness than a new toy). 6) Model non-materialistic values yourself. Children who derive self-worth from internal qualities (character, kindness, effort) are more resilient than those who derive it from external markers (brands, grades, possessions).",
  },

  // --- AGE OF OPPORTUNITY (Laurence Steinberg) ---
  {
    id: "mb-33",
    source: "Age of Opportunity",
    sourceDetails: "Laurence Steinberg — Adolescent Brain Plasticity",
    category: "teen",
    text: "Steinberg's research reveals that adolescence (ages 12-24) is a period of extraordinary brain plasticity — second only to the first three years of life. The adolescent brain is highly malleable, which means this is a crucial window for both positive and negative development. Skills and habits formed during adolescence become deeply wired. This means: 1) This is the BEST time to learn languages, music, sports, and creativity. 2) This is also when mental illness, addiction, and risky patterns can take root. 3) What teenagers do repeatedly becomes their brain's default. 4) Sleep, nutrition, and exercise during adolescence have outsized impact on lifelong brain health. 5) Parents should leverage this plasticity for positive development — encourage challenges, new skills, and healthy habits NOW.",
  },
  {
    id: "mb-34",
    source: "Age of Opportunity",
    sourceDetails: "Laurence Steinberg — Risk-Taking as Brain Development",
    category: "teen",
    text: "Teen risk-taking isn't a character flaw — it's neurologically driven. The adolescent brain's reward center (striatum) is hyperactive, while the prefrontal cortex (self-control) is still developing. This creates an asymmetry: high drive for reward + low ability to resist = risk-taking. Steinberg explains: 1) Teens take MORE risks when with peers than alone (peer presence activates the reward system). 2) Risk-taking peaks around ages 15-17. 3) This same brain flexibility makes adolescents incredible learners and adapters. 4) Rather than trying to eliminate risk-taking, channel it: sports, adventure activities, creative challenges, entrepreneurship. 5) Supervision matters — know where they are and who they're with. 6) The prefrontal cortex matures around age 25 — full judgment comes later than you think.",
  },
  {
    id: "mb-35",
    source: "Age of Opportunity",
    sourceDetails: "Laurence Steinberg — Self-Regulation as the Master Skill",
    category: "behavior",
    text: "Steinberg identifies self-regulation as the single most important skill for adolescent success — more predictive than IQ or grades. Self-regulation includes: managing impulses, delaying gratification, regulating emotions, sustaining attention, and planning. Ways to develop it: 1) Encourage activities that require sustained effort (music, sports, art). 2) Let teens practice managing their own time and experiencing the consequences. 3) Teach mindfulness and stress management. 4) Ensure adequate sleep — sleep deprivation destroys self-regulation. 5) Model self-regulation yourself. 6) The brain's self-regulation systems are still developing through age 25 — scaffold them with external structure (curfews, check-ins) while teaching internal regulation skills.",
  },
  {
    id: "mb-36",
    source: "Age of Opportunity",
    sourceDetails: "Laurence Steinberg — Parenting Style for Adolescence",
    category: "teen",
    text: "Steinberg's research identifies authoritative parenting (warm + demanding) as optimal for adolescent development. Authoritative parents: 1) Are warm and involved but set clear expectations. 2) Encourage independence within boundaries. 3) Explain the reasons behind rules. 4) Listen to their teen's perspective (even if they disagree). 5) Adjust rules as the teen demonstrates responsibility. This contrasts with authoritarian (demanding but not warm), permissive (warm but not demanding), and neglectful (neither). Authoritative parenting produces teens with better academic performance, lower rates of depression and substance use, and stronger social skills. The key balance: hold high expectations WHILE showing warmth and acceptance.",
  },
  {
    id: "mb-37",
    source: "Age of Opportunity",
    sourceDetails: "Laurence Steinberg — Sleep and Adolescent Brain Development",
    category: "sleep",
    text: "Adolescent brains undergo a circadian shift — melatonin is released 2 hours later than in adults, making teens genuinely unable to fall asleep before 11 PM. Yet they need 8-10 hours. When school starts at 8 AM, teens are chronically sleep-deprived. This impairs: memory consolidation, emotional regulation, impulse control, immune function, and academic performance. Steinberg advocates for later school start times (after 8:30 AM). At home: 1) Enforce a tech curfew 1-2 hours before bed. 2) Keep wake times consistent on weekends (within 2 hours of school days). 3) No caffeine after noon. 4) Morning sunlight helps reset the clock. 5) Treat sleep as a health priority, not a luxury.",
  },

  // --- THE TEENAGE BRAIN (Frances Jensen) ---
  {
    id: "mb-38",
    source: "The Teenage Brain",
    sourceDetails: "Frances Jensen — Prefrontal Cortex Under Construction",
    category: "teen",
    text: "Jensen (a neuroscientist) explains that the teenage prefrontal cortex — responsible for planning, judgment, impulse control, and decision-making — is still under construction until about age 25. The brain builds from back to front, so the emotional/motivational centers (limbic system) are fully operational while the braking system (prefrontal cortex) is incomplete. This is why teenagers can be mature one moment and reckless the next. Implications: 1) Don't assume your teen has adult judgment — they literally don't have the brain hardware yet. 2) Provide external structure (curfews, check-ins) while their internal structure develops. 3) Explain risks calmly — the teen brain CAN process information, it just prioritizes reward differently. 4) Patience — they're not being deliberately difficult; their brain is remodeling.",
  },
  {
    id: "mb-39",
    source: "The Teenage Brain",
    sourceDetails: "Frances Jensen — Why Teens Are Impulsive",
    category: "behavior",
    text: "Teen impulsivity comes from an asymmetry in brain development: the nucleus accumbens (reward-seeking center) is highly active by early adolescence, while the prefrontal cortex (braking system) lags behind by a decade. This means teens get a bigger dopamine hit from rewards and risks than adults do, and they have less ability to inhibit the impulse. Jensen's advice: 1) Understand that impulsivity is biological, not character-driven. 2) Create structures that reduce the need for willpower (phones out of bedrooms at night, limited access to cars, curfews). 3) Practice scenarios: 'What will you do if someone offers you a drink?' 4) Peer presence amplifies risk-taking — know who they're with. 5) This same brain flexibility makes teens phenomenal learners — encourage positive risks (trying new activities, public speaking, creative projects).",
  },
  {
    id: "mb-40",
    source: "The Teenage Brain",
    sourceDetails: "Frances Jensen — Substance Use and the Teen Brain",
    category: "teen",
    text: "The adolescent brain is far more vulnerable to substances than the adult brain. Because teen brains are highly plastic, substances cause more damage and create stronger addiction pathways. Key facts: 1) Teens who start drinking before 15 are 4x more likely to develop alcohol dependence than those who start at 21. 2) Marijuana affects memory, attention, and learning more in teens — and the effects can be long-lasting. 3) Nicotine is more addictive in adolescence — vaping is particularly dangerous. 4) The teen brain builds tolerance faster, meaning they need more for the same effect. Discuss these facts with teens — not with scare tactics but with brain science. 'Your brain is literally building its permanent wiring right now. Substances alter that wiring.'",
  },
  {
    id: "mb-41",
    source: "The Teenage Brain",
    sourceDetails: "Frances Jensen — Learning and Memory in Adolescence",
    category: "school",
    text: "The adolescent brain is optimized for learning — synapses are being pruned and strengthened based on use. What teens practice becomes permanent. Jensen's advice for academic success: 1) Spaced repetition beats cramming — studying 30 minutes daily is more effective than 3 hours the night before. 2) Sleep is when learning consolidates — studying right before sleep can improve retention. 3) Exercise boosts brain-derived neurotrophic factor (BDNF), which helps learning — physical activity improves academic performance. 4) Multitasking is a myth — the brain switches between tasks, reducing performance on both. 5) Stress impairs memory — chronic exam stress literally blocks the hippocampus from forming memories. 6) Cramming pulls all-nighters is the worst thing a teen can do for learning.",
  },
  {
    id: "mb-42",
    source: "The Teenage Brain",
    sourceDetails: "Frances Jensen — Sleep and Teen Brain Health",
    category: "sleep",
    text: "Sleep is critical for the adolescent brain — it's when synaptic pruning (eliminating weak connections), memory consolidation, and emotional processing happen. Teens need 8-10 hours but average 6-7. The circadian shift means their bodies naturally want to sleep from about 11 PM to 8 AM. Consequences of teen sleep deprivation: impaired academic performance, weakened immune system, mood disturbances, increased risk-taking, weight gain, and even stunted growth. Jensen recommends: 1) No screens in bedrooms at night (blue light suppresses melatonin). 2) Consistent sleep schedule (even weekends — sleeping in disrupts the clock). 3) Advocate for later school start times. 4) Treat sleep as a non-negotiable health behavior, like nutrition.",
  },

  // --- NO BAD KIDS (Janet Lansbury) ---
  {
    id: "mb-43",
    source: "No Bad Kids",
    sourceDetails: "Janet Lansbury — RIE Approach to Discipline",
    category: "behavior",
    text: "Lansbury's RIE (Resources for Infant Educarers) approach treats even the youngest children as capable, whole people deserving of respect. Core discipline principles: 1) Children are innately good — misbehavior is a request for help, not manipulation. 2) Set clear, calm boundaries without anger. 3) 'I won't let you hit' (physically block the behavior gently but firmly) — don't just say 'no hitting.' 4) Don't use punishments or rewards — they create external control instead of internal regulation. 5) Acknowledge feelings AND hold the boundary: 'You're angry. I won't let you throw the block.' 6) Use a calm, confident voice — children read our anxiety and uncertainty as instability. 7) Less talking is more — keep corrections brief and clear.",
  },
  {
    id: "mb-44",
    source: "No Bad Kids",
    sourceDetails: "Janet Lansbury — Toddler Hitting and Aggression",
    category: "anger",
    text: "When a toddler hits, bites, or pushes: 1) Stay calm — your emotional reaction amplifies theirs. 2) Physically block the behavior: gently catch the hand mid-hit and say 'I won't let you hit. That hurts.' 3) Don't demand an apology — toddlers can't access empathy in a dysregulated state. 4) Check for underlying causes: tiredness, hunger, overstimulation, teething, or a new skill they're processing. 5) Don't label the child ('aggressive,' 'mean') — label the behavior. 6) Provide safe outlets: pillows to punch, play-dough to pound, running outside. 7) Supervise closely during high-risk times andredirect before it escalates. 8) Aggression is developmentally normal from 18-36 months — it decreases as language develops.",
  },
  {
    id: "mb-45",
    source: "No Bad Kids",
    sourceDetails: "Janet Lansbury — Tantrums as Emotional Release",
    category: "tantrums",
    text: "Lansbury views tantrums as healthy emotional release, not manipulation. When a toddler has a tantrum: 1) Create a safe space (remove hard objects, cushion falls). 2) Stay nearby as a calm presence — don't leave them alone. 3) Don't try to distract ('Look at this toy!') or fix the problem immediately. 4) Don't reason or explain — their rational brain is offline. 5) If they want to be held, hold them; if they want space, give it while staying present. 6) Wait until the storm fully passes before redirecting. 7) After: 'You had some big feelings. You're feeling calmer now.' Tantrums that are allowed to run their course fully tend to decrease in frequency — the child learns that big emotions are safe to feel and will pass.",
  },
  {
    id: "mb-46",
    source: "No Bad Kids",
    sourceDetails: "Janet Lansbury — Respectful Limits with Toddlers",
    category: "behavior",
    text: "Setting limits respectfully means being clear and firm without anger or over-explaining. Lansbury's approach: 1) State the limit simply: 'Books are for reading, not for throwing.' 2) If the behavior continues, physically redirect: 'I'm going to take the book away now.' 3) If the child protests, acknowledge: 'You're upset that I put the book away. You wanted to throw it.' 4) Don't waver — consistency creates security. 5) Don't ask toddlers permission ('Can we clean up now?') when there's no real choice. 6) Give real choices when possible ('Do you want the red cup or the blue cup?'). 7) Your calm confidence IS the discipline — toddlers need to feel you're in charge to feel safe.",
  },
  {
    id: "mb-47",
    source: "No Bad Kids",
    sourceDetails: "Janet Lansbury — The 'Sportscasting' Technique",
    category: "emotional",
    text: "When two children are having a conflict, 'sportscast' rather than intervene: narrate what you see neutrally, like a sports commentator. 'You both want the truck. You're pulling on it. Now Sarah has it and Tom is crying.' This helps children understand the situation without feeling judged. Guidelines: 1) Don't assign blame ('Who had it first?'). 2) Don't solve it for them — give them a chance to work it out. 3) If someone gets hurt, attend to the hurt child first. 4) Block physical aggression ('I won't let you push') while continuing to narrate. 5) Trust that children can resolve many conflicts if given the space. Sportscasting builds conflict resolution skills and emotional vocabulary.",
  },
  {
    id: "mb-48",
    source: "No Bad Kids",
    sourceDetails: "Janet Lansbury — Unstructured Play and Independence",
    category: "confidence",
    text: "RIE emphasizes independent, self-directed play from infancy. Principles: 1) Place babies on their back on a flat surface with a few simple objects — let them explore freely. 2) Don't interrupt a focused baby — their concentration is valuable. 3) Don't 'teach' them how to play — trust them to figure it out. 4) Provide open-ended objects (blocks, scarves, bowls) rather than toys that do things. 5) Allow boredom — it leads to creativity. 6) Observe rather than direct. Children who engage in regular independent play develop longer attention spans, more creativity, and greater self-reliance. Avoid the urge to constantly entertain — children do best when trusted to explore on their own.",
  },

  // --- ELEVATING CHILD CARE (Janet Lansbury) ---
  {
    id: "mb-49",
    source: "Elevating Child Care",
    sourceDetails: "Janet Lansbury — Caregiving as Connection",
    category: "parent",
    text: "Lansbury transforms routine caregiving (diapering, feeding, dressing) into connection opportunities. Instead of rushing through caregiving tasks, slow down and engage the child: make eye contact during diaper changes, narrate what you're doing ('I'm putting your left arm in the sleeve'), wait for the child's cooperation rather than forcing ('Can you give me your hand?'). These everyday moments are the foundation of attachment. Children who are treated with respect during caregiving develop trust, body autonomy, and cooperation. Avoid treating caregiving as something to get through quickly — it's where the relationship is built, meal by meal, change by change, day by day.",
  },
  {
    id: "mb-50",
    source: "Elevating Child Care",
    sourceDetails: "Janet Lansbury — The Benefits of NOT Fixing",
    category: "confidence",
    text: "When a child struggles (building a tower, putting on shoes, solving a puzzle), resist the urge to immediately fix it. Lansbury advises: 1) Wait — give them time to problem-solve. 2) Narrate the struggle neutrally: 'You're trying to get the piece to fit. It's not going in.' 3) Ask 'Do you want help, or do you want to keep trying?' 4) If they want help, guide rather than do it for them ('What if you turn it this way?'). 5) Accept imperfect results — a wobbly tower the child built themselves is better than a perfect one you built. 6) Frustration is part of learning. 7) Children who are allowed to struggle develop persistence, problem-solving, and genuine confidence. Every time you fix something for them, you say 'You can't do this.'",
  },
  {
    id: "mb-51",
    source: "Elevating Child Care",
    sourceDetails: "Janet Lansbury — Transitions and Warnings",
    category: "transition",
    text: "Transitions are hard for toddlers because they live fully in the present moment. Lansbury's approach: 1) Always give warnings: 'In five minutes, it's time to clean up.' 2) Use a timer the child can see/hear. 3) Acknowledge the difficulty: 'I know it's hard to stop playing. You were having so much fun.' 4) Make the transition concrete: 'After we put the blocks in the basket, we'll go to the car.' 5) Don't rush unnecessarily — if you're not actually in a hurry, let them finish. 6) Create transition rituals: a goodbye song for the park, a special handshake before school. 7) If a transition causes a meltdown, hold the boundary calmly — the child learns that transitions are part of life, even when they're hard.",
  },
  {
    id: "mb-52",
    source: "Elevating Child Care",
    sourceDetails: "Janet Lansbury — Setting Up the Environment",
    category: "routines",
    text: "Much toddler misbehavior can be prevented through the environment. Lansbury recommends: 1) Baby-proof thoroughly so you can say 'yes' more often (fewer 'don't touch' moments). 2) Keep only a few toys accessible at a time — rotate them. 3) Create 'yes spaces' where the child can explore freely without constant correction. 4) Keep dangerous or precious items out of reach rather than teaching a toddler not to touch them. 5) Have consistent places for everything — children thrive on order and predictability. 6) Minimize visual clutter. A well-prepared environment reduces frustration for both parent and child, enabling more exploration and fewer power struggles.",
  },
  {
    id: "mb-53",
    source: "Elevating Child Care",
    sourceDetails: "Janet Lansbury — Body Autonomy from the Start",
    category: "honest",
    text: "Teach body autonomy from infancy: 1) Ask before picking up a baby ('I'm going to pick you up now'). 2) Narrate caregiving that involves their body ('I'm going to wipe your nose now'). 3) Let them decide when to stop being tickled — stop immediately when they say stop. 4) Don't force hugs or kisses with relatives ('Would you like to give Grandma a hug, a high-five, or a wave?'). 5) Teach them they can say 'no' to unwanted touch, even from parents. 6) Use correct anatomical terms for body parts. 7) Children who learn body autonomy from the start are better equipped to recognize and resist inappropriate touch later.",
  },

  // --- TOUCHPOINTS (T. Berry Brazelton) ---
  {
    id: "mb-54",
    source: "Touchpoints",
    sourceDetails: "T. Berry Brazelton — Developmental Touchpoints",
    category: "transition",
    text: "Brazelton identified 'touchpoints' — predictable periods just before a developmental burst when the child temporarily regresses. At these points, behavior often worsens (sleep disruption, clinginess, feeding changes) right before a new skill emerges. Common touchpoints occur at: 3 weeks, 6-8 weeks, 4 months, 7 months, 9 months, 12 months, 15 months, 18 months, 2 years, 3 years. For example, right before learning to walk, a baby may start waking at night and refusing food. Understanding touchpoints prevents parental panic: 'My baby is broken!' Instead: 'A touchpoint is coming — this is progress in disguise.' Wait it out with patience. The new skill will emerge within 2-3 weeks.",
  },
  {
    id: "mb-55",
    source: "Touchpoints",
    sourceDetails: "T. Berry Brazelton — Regression Before Progress",
    category: "emotional",
    text: "Regression is not a setback — it's the brain reorganizing for a developmental leap. Examples: a toilet-trained child starts having accidents when a new sibling arrives; a verbal toddler becomes quiet and clingy before a language explosion; a sleeping-through-the-night baby suddenly wakes every 2 hours before learning to crawl. Brazelton's guidance: 1) Don't panic — regression is temporary (usually 2-4 weeks). 2) Don't punish or shame — the child isn't doing it on purpose. 3) Provide extra comfort and predictability. 4) Don't try to 'fix' the regression aggressively (e.g., restarting toilet training during stress). 5) Once the new skill is mastered, the old behavior usually disappears on its own. 6) If regression lasts more than a month or is severe, check for medical causes.",
  },
  {
    id: "mb-56",
    source: "Touchpoints",
    sourceDetails: "T. Berry Brazelton — The 9-Month Touchpoint",
    category: "transition",
    text: "Around 9 months, babies experience a major touchpoint: separation anxiety peaks, stranger anxiety intensifies, and previously sleeping babies may start waking. This coincides with cognitive leaps — object permanence (understanding things exist when out of sight) and stronger attachment. The baby now knows you exist when you leave, and they're not sure you'll come back. Response: 1) Play peek-a-boo to reinforce object permanence. 2) Always say goodbye (never sneak out) — keep it brief. 3) Practice short separations and return cheerfully. 4) Maintain bedtime routines even through night-waking. 5) Avoid introducing new stressors (new daycare, weaning) during this sensitive period if possible. This phase passes — usually by 12 months.",
  },
  {
    id: "mb-57",
    source: "Touchpoints",
    sourceDetails: "T. Berry Brazelton — Feeding Touchpoints",
    category: "eating",
    text: "Brazelton identified specific feeding touchpoints where eating habits temporarily change: 4 months (increased interest in solids, but coordination isn't ready), 7-8 months (desire to self-feed but messy), 12 months (appetite drops dramatically as growth slows — this is normal, not a problem), 18 months (food refusal, only wants specific foods). At each touchpoint, the parent's job is to offer nutritious food calmly and let the child decide how much to eat. Don't interpret temporary changes as permanent problems. Growth charts (not daily intake) are the best measure of whether a child is getting enough. Appetite fluctuates — trust the child's internal regulation.",
  },
  {
    id: "mb-58",
    source: "Touchpoints",
    sourceDetails: "T. Berry Brazelton — Reading the Child's Cues",
    category: "parent",
    text: "Brazelton emphasized observing and responding to the child's individual cues rather than following generic schedules. Every child communicates their needs through behavior: a baby who turns away is full or overstimulated; a toddler who pushes you away may need autonomy, not rejection; a child who suddenly becomes clingy may be fighting off an illness. Before reacting to behavior, observe: What is the child telling me? What changed recently? Are they about to reach a new milestone? Brazelton's approach empowers parents to trust their knowledge of their own child. You are the expert on your child — don't let any book or expert override what you observe.",
  },

  // --- THE ATTACHMENT PARENTING BOOK (Sears) ---
  {
    id: "mb-59",
    source: "The Attachment Parenting Book",
    sourceDetails: "William & Martha Sears — The Seven Baby B's",
    category: "parent",
    text: "The Sears' attachment parenting approach centers on seven tools (the 'Baby B's'): 1) Birth bonding — skin-to-skin contact in the first hours and weeks. 2) Breastfeeding — for nutrition, comfort, and bonding (while respecting that formula is a valid choice). 3) Babywearing — carrying the baby close in a sling/carrier. 4) Bedding close to baby — room-sharing (not necessarily bed-sharing) for easier night care. 5) Belief in baby's cry — responding promptly to cries builds trust. 6) Beware of baby trainers — rigid schedules and cry-it-out contradict responsive parenting. 7) Balance — meeting the baby's needs while also caring for yourself. You don't have to do all seven — pick what works for your family. The core principle is responsive, attuned caregiving.",
  },
  {
    id: "mb-60",
    source: "The Attachment Parenting Book",
    sourceDetails: "Sears — Responding to Cries",
    category: "emotional",
    text: "The Sears emphasize that a baby's cry is communication, not manipulation. Crying is the baby's only way to express hunger, pain, fear, or loneliness. Responding promptly to crying: 1) Builds trust — the baby learns the world is safe and responsive. 2) Reduces overall crying over time (research backs this — responsive parents have babies who cry LESS, not more). 3) Strengthens attachment through consistent, reliable care. 4) Does NOT spoil a baby — you cannot spoil a child under 12 months. The debate between 'schedule-based' and 'demand-based' feeding/sleeping need not be absolute. Follow your instincts and your baby's cues. A parent who responds sensitively builds a secure child.",
  },
  {
    id: "mb-61",
    source: "The Attachment Parenting Book",
    sourceDetails: "Sears — Babywearing Benefits",
    category: "parent",
    text: "Babywearing (carrying baby in a sling or carrier) provides: 1) Reduced crying — studies show carried babies cry 43% less. 2) Enhanced bonding — proximity enables constant communication and responsiveness. 3) Better cognitive development — the baby sees the world from adult eye level and participates in conversations. 4) Easier transitions — a baby in a carrier transitions between environments smoothly. 5) Freedom for parents — hands-free caregiving. Tips: choose an ergonomic carrier that supports baby's hips in the 'M position,' alternate positions as baby grows, and ensure chin isn't pressed to chest (airway safety). Babywearing isn't all-or-nothing — even an hour a day provides benefits.",
  },
  {
    id: "mb-62",
    source: "The Attachment Parenting Book",
    sourceDetails: "Sears — Secure Attachment Beyond Infancy",
    category: "confidence",
    text: "Attachment parenting doesn't end when breastfeeding or babywearing stops. Secure attachment is built through consistent responsiveness throughout childhood: 1) Being emotionally available when the child is distressed. 2) Reparing ruptures (apologizing when you lose patience). 3) Creating reunion rituals (greeting your child warmly after separation). 4) Being a 'safe base' — the child explores knowing they can return. 5) Noticing and reflecting the child's inner world. Children with secure attachment: have higher self-esteem, better relationships, more emotional regulation, and greater resilience. Attachment is not about being perfect — it's about being 'good enough' and repairing when you're not.",
  },
  {
    id: "mb-63",
    source: "The Attachment Parenting Book",
    sourceDetails: "Sears — Nighttime Parenting",
    category: "sleep",
    text: "The Sears advocate responsive nighttime parenting rather than sleep training. Their approach: 1) Room-sharing for easy night care. 2) Responding to night waking promptly. 3) Bed-sharing only if following safe sleep guidelines (firm mattress, no pillows/blankets, no smoking, no alcohol/medication, breastfeeding mother only). 4) Accepting that night waking is normal for the first 1-2 years. 5) Using nighttime as a connection opportunity. 6) If sleep deprivation is overwhelming, consider gentle alternatives (partner does some night care, sidecar crib) rather than cry-it-out. Critically: the Sears also say that if their approach is causing parental depression or relationship breakdown, a different approach is needed. Parental mental health matters.",
  },

  // --- STRONG FATHERS, STRONG DAUGHTERS (Meg Meeker) ---
  {
    id: "mb-64",
    source: "Strong Fathers, Strong Daughters",
    sourceDetails: "Meg Meeker — The Father's Unique Role",
    category: "parent",
    text: "A father's influence on his daughter is profound and distinct. Research shows that daughters with involved, loving fathers have: higher self-esteem, better academic performance, lower rates of teen pregnancy and eating disorders, healthier relationships with men, and greater career success. A father teaches his daughter what to expect from men by how he treats her and how he treats women. Meeker's key advice: 1) Be present — quality time matters but so does quantity. 2) Show affection — tell her she's beautiful inside and out (don't only praise achievements). 3) Listen without fixing — she often just wants to be heard. 4) Set boundaries — she needs your protection and guidance, even when she resists. 5) Model the man you'd want her to marry.",
  },
  {
    id: "mb-65",
    source: "Strong Fathers, Strong Daughters",
    sourceDetails: "Meg Meeker — Fathers and Teen Daughters",
    category: "teen",
    text: "As daughters become teenagers, fathers often pull back — afraid of 'awkwardness' or feeling unnecessary. This is exactly when daughters need fathers MOST. During adolescence: 1) Keep spending one-on-one time together (breakfast dates, walks, driving lessons). 2) Don't withdraw physically — teenage girls still need hugs. 3) Be interested in her world (music, friends, activities) without being intrusive. 4) Set clear expectations about dating and behavior — she secretly WANTS boundaries, even while fighting them. 5) Don't overreact to her mood swings — be her stable anchor. 6) Tell her regularly 'I love you exactly as you are' — this counters the media message that she needs to be different.",
  },
  {
    id: "mb-66",
    source: "Strong Fathers, Strong Daughters",
    sourceDetails: "Meg Meeker — Protecting Without Smothering",
    category: "behavior",
    text: "Fathers often struggle to balance protection with allowing independence. Meeker's guidelines: 1) Know her friends and their families — this is reasonable supervision, not helicopter parenting. 2) Monitor technology (especially social media) — teenage girls are vulnerable to online predators and comparison culture. 3) Set curfews and enforce them. 4) Teach her to recognize red flags in relationships (possessiveness, pressure, disrespect). 5) Encourage her to call you ANYTIME, no questions asked, if she's in an unsafe situation. 6) Gradually increase freedom as she demonstrates responsibility — don't lock her down OR let her run free. 7) Model respect for women — she's watching how you talk about and treat women.",
  },
  {
    id: "mb-67",
    source: "Strong Fathers, Strong Daughters",
    sourceDetails: "Meg Meeker — Fathers Teaching Self-Worth",
    category: "confidence",
    text: "A father's words about his daughter's worth become her inner voice. Meeker advises fathers to: 1) Praise her character, not just her appearance ('You're incredibly kind' alongside 'You look beautiful'). 2) Don't make jokes about her weight, looks, or intelligence — even 'teasing' cuts deep. 3) Show interest in her opinions ('What do you think about that?'). 4) Attend her events (games, concerts, presentations) — your presence tells her she matters. 5) Write her notes — a card or letter from Dad is a treasure she'll keep for decades. 6) Protect her from media that devalues women — discuss what you see together. 7) Be the first man to show her she's valuable for who she IS, not what she does. This sets the standard for every man who follows.",
  },
  {
    id: "mb-68",
    source: "Strong Fathers, Strong Daughters",
    sourceDetails: "Meg Meeker — When Father Isn't Present",
    category: "parent",
    text: "When a father is absent (physically or emotionally), daughters still need positive male role models. Mothers can: 1) Identify trusted male figures (uncles, grandfathers, coaches, teachers, mentors). 2) Facilitate these relationships without forcing them. 3) Not speak negatively about the absent father — this damages the daughter's sense of identity. 4) Acknowledge the gap: 'I know you wish Dad were here.' 5) Seek out programs like Big Brothers/Big Sisters. 6) For girls whose fathers ARE present but emotionally absent: encourage them to reach out ('Dad, I'd love to spend time with you'). 7) A father who reconnects after absence should start small — consistency matters more than grand gestures.",
  },

  // --- BRINGING UP BOYS / Gender-Specific Parenting ---
  {
    id: "mb-69",
    source: "Bringing Up Boys",
    sourceDetails: "Gender-Specific Parenting — Boys and Emotional Literacy",
    category: "emotional",
    text: "Boys are often socialized to suppress emotions other than anger, leading to what researchers call 'normative male alexithymia' — difficulty identifying and expressing feelings. To raise emotionally literate boys: 1) Use a wide feelings vocabulary from toddlerhood ('frustrated,' 'disappointed,' 'excited,' 'worried'). 2) Don't shut down their tears — crying is a healthy stress release regardless of gender. 3) Model emotional expression yourself, especially if you're a father. 4) Read books where male characters express various emotions. 5) Don't use phrases like 'man up,' 'big boys don't cry,' or 'stop acting like a girl.' 6) Validate vulnerability: 'It takes courage to tell me that.' Boys who can express emotions have better mental health, stronger relationships, and lower rates of aggression.",
  },
  {
    id: "mb-70",
    source: "Bringing Up Boys",
    sourceDetails: "Gender-Specific Parenting — Boys and Physical Needs",
    category: "behavior",
    text: "Boys, on average, have higher physical activity needs than girls. Their bodies and brains thrive on movement. When boys are required to sit still for long periods, behavior deteriorates. Strategies: 1) Provide daily vigorous physical activity (running, climbing, sports). 2) Incorporate movement into learning (acting out stories, counting while jumping). 3) Break sedentary tasks into chunks with movement breaks. 4) Provide safe spaces for roughhousing and physical play. 5) Don't interpret high energy as misbehavior — it's a biological need. 6) Advocate for recess and PE at school — boys who get physical activity behave and learn better. 7) Outdoor time in nature is especially regulating for active boys. When a boy is acting out, ask: 'Has he moved his body enough today?'",
  },
  {
    id: "mb-71",
    source: "Bringing Up Boys",
    sourceDetails: "Gender-Specific Parenting — Boys and Reading",
    category: "school",
    text: "Boys often lag behind girls in reading — partly due to developmental differences and partly due to a lack of boy-friendly reading materials. To foster reading in boys: 1) Offer nonfiction (dinosaurs, space, sports, how things work). 2) Don't disparage comic books and graphic novels — they ARE reading. 3) Let them read below their level if it builds confidence. 4) Read aloud together even after they can read independently. 5) Let them see male reading role models (fathers, older brothers, male teachers). 6) Don't force 'literary' books if they prefer action, humor, or facts. 7) Connect reading to their interests. 8) Audiobooks count as reading. The goal is to create a lifelong reader, not to check curriculum boxes.",
  },
  {
    id: "mb-72",
    source: "Bringing Up Boys",
    sourceDetails: "Gender-Specific Parenting — Discipline That Works for Boys",
    category: "behavior",
    text: "Boys often respond better to clear, direct discipline than to lengthy explanations. Effective approaches: 1) Keep corrections brief — boys tune out long lectures. 2) Use visual cues (charts, checklists) rather than verbal reminders. 3) Provide physical outlets before and after difficult tasks. 4) Use natural consequences that are immediately relevant. 5) Avoid shaming — boys are particularly vulnerable to shame-based discipline. 6) Emphasize what TO do, not just what NOT to do. 7) Give warnings before transitions. 8) Rough-and-tumble play after discipline can repair the connection. 9) Praise specifically and genuinely — boys who feel competent behave better.",
  },

  // --- SIBLINGS: YOU'RE STUCK WITH EACH OTHER (James Forit) ---
  {
    id: "mb-73",
    source: "Siblings: You're Stuck with Each Other",
    sourceDetails: "James Forit — The Sibling Bond as Practice",
    category: "sibling",
    text: "Sibling relationships are a child's first experience with long-term, unavoidable relationships. This makes them perfect practice for future relationships, conflicts, and compromises. Forit's approach: 1) Reframe fighting as 'relationship practice' rather than a problem to eliminate. 2) Teach negotiation skills: taking turns, trading, sharing timers, finding third options. 3) Don't keep a 'fairness ledger' — equal treatment is impossible and trying creates resentment. 4) Focus on each child's individual needs rather than equal outcomes. 5) Create family rules for conflict (no hitting, no name-calling, use words). 6) Model how adults disagree respectfully — siblings learn by watching. 7) Acknowledge that sibling conflict is normal and healthy — it's how children learn to navigate relationships.",
  },
  {
    id: "mb-74",
    source: "Siblings: You're Stuck with Each Other",
    sourceDetails: "James Forit — Shared vs Individual Spaces",
    category: "sibling",
    text: "Balancing shared and individual space reduces sibling friction: 1) Each child needs a space that's truly theirs (a shelf, a drawer, a corner) where siblings cannot intrude. 2) 'Special toys' that aren't for sharing should be allowed and respected. 3) Create rules for shared spaces (clean up together, rotate who chooses the movie/show). 4) Use visual dividers or room arrangements to create boundaries in shared rooms. 5) Don't force sharing — teach negotiation instead ('Can you ask your brother when he'll be done?'). 6) Respect 'alone time' — sometimes siblings need a break from each other, and that's healthy. 7) Separate playdates occasionally so each child gets social time without their sibling.",
  },
  {
    id: "mb-75",
    source: "Siblings: You're Stuck with Each Other",
    sourceDetails: "James Forit — Managing Sibling Jealousy",
    category: "sibling",
    text: "Sibling jealousy is rooted in the fear of losing parental love and attention. Forit's strategies: 1) Never compare siblings ('Your sister got an A, why can't you?'). 2) Spend 1:1 time with each child daily, even if just 10 minutes. 3) Don't make the older child responsible for the younger ('Watch your sister'). 4) Acknowledge jealousy openly: 'Sometimes it's hard when the baby needs so much attention.' 5) Give each child a unique role in the family ('You're our family's artist,' 'You're our family's comedian') — but make sure it's a positive identity they chose. 6) Celebrate each child's milestones separately. 7) Avoid labels ('the smart one,' 'the athletic one') which create rigid roles.",
  },
  {
    id: "mb-76",
    source: "Siblings: You're Stuck with Each Other",
    sourceDetails: "James Forit — When Sibling Fighting Crosses the Line",
    category: "sibling",
    text: "Normal sibling bickering doesn't require adult intervention, but these situations do: 1) Physical violence (hitting, kicking, scratching) — intervene immediately. 2) One child is consistently dominating or bullying the other — this creates long-term damage. 3) The fighting involves identity-based attacks (body shaming, racial slurs, homophobia). 4) One child seems genuinely afraid of the other. 5) The conflict is disrupting the entire household regularly. In these cases: 1) Separate the children physically. 2) Address the power imbalance — ensure the targeted child is safe. 3) Seek family therapy if the pattern is entrenched. 4) Don't force reconciliation — respect that they may need time apart. 5) Address the root cause — what's driving the aggression?",
  },

  // --- WHAT TO EXPECT: THE TODDLER YEARS (Murkoff) ---
  {
    id: "mb-77",
    source: "What to Expect: The Toddler Years",
    sourceDetails: "Murkoff — Toddler Development 12-18 Months",
    category: "confidence",
    text: "Toddler milestones 12-18 months: WALKING independently (first steps to confident walking), 2-20 words by 18 months, pointing to communicate, using a spoon (messily), stacking 2-4 blocks, following simple instructions ('bring me the ball'), becoming attached to a comfort object, experiencing separation anxiety. Cognitive leaps: object permanence is solid, they understand cause and effect (drop spoon = you pick it up), they begin imitating adults (sweeping, talking on phone). To support development: provide push toys for early walkers, name everything (building vocabulary), offer choices ('red cup or blue?'), read daily, and provide safe spaces for exploration. Every child's timeline is unique — ranges are wide and normal.",
  },
  {
    id: "mb-78",
    source: "What to Expect: The Toddler Years",
    sourceDetails: "Murkoff — Toddler Development 18-24 Months",
    category: "behavior",
    text: "18-24 months brings explosive language growth (50+ words, starting 2-word phrases), running and climbing, asserting independence ('me do it!'), and the emergence of tantrums. Toddlers this age: understand more than they can say, begin to show empathy (patting a crying friend), engage in parallel play (alongside but not with peers), and are developing a sense of self ('mine!'). Tantrums peak between 18-24 months as the desire for autonomy outpaces ability. Support development by: offering limited choices, providing words for emotions, maintaining consistent routines, and accepting that 'no' is a developmentally appropriate word — not defiance. Patience and humor are your best tools.",
  },
  {
    id: "mb-79",
    source: "What to Expect: The Toddler Years",
    sourceDetails: "Murkoff — Toddler Sleep 12-36 Months",
    category: "sleep",
    text: "Toddler sleep needs: 12-14 hours per 24 (including 1-2 naps). Common sleep challenges: bedtime resistance (peaks around 18 months), night waking (often due to developmental milestones, teething, or illness), early waking, and nap resistance. Sleep strategies: 1) Maintain consistent bedtime (6:30-7:30 PM is ideal). 2) Bedtime routine: bath, brush teeth, book, bed — same order nightly. 3) Use a toddler clock that lights up when it's OK to get up. 4) If they climb out of the crib, transition to a toddler bed with a safety gate at the door. 5) Drop the morning nap first (around 15-18 months), then the afternoon nap (around 3-4 years). 6) Avoid bottles in bed (tooth decay risk).",
  },
  {
    id: "mb-80",
    source: "What to Expect: The Toddler Years",
    sourceDetails: "Murkoff — Toddler Feeding 12-36 Months",
    category: "eating",
    text: "Toddler nutrition: appetite naturally decreases around 12 months (growth slows). Offer 3 meals and 2-3 snacks daily from all food groups. Toddlers need less food than parents often expect — about ¼ to ½ cup per serving. Common challenges: food refusal (normal neophobia), preference for one food for days (food jag), throwing food, refusing to sit at the table. Strategies: 1) Serve small portions (less overwhelming). 2) Always include one accepted food. 3) Let them feed themselves (mess is learning). 4) Don't bargain ('one more bite'). 5) Limit milk to 16-24 oz/day (too much milk suppresses appetite for solid foods). 6) Whole milk until age 2, then semi-skimmed if desired. 7) Avoid choking hazards (whole grapes, nuts, hard candies).",
  },
  {
    id: "mb-81",
    source: "What to Expect: The Toddler Years",
    sourceDetails: "Murkoff — Toddler Safety and Childproofing",
    category: "parent",
    text: "Toddler safety essentials as mobility increases: 1) Stair gates at top and bottom. 2) Furniture and TVs anchored to walls (tip-over risk is real and fatal). 3) Window locks (windows opened no more than 4 inches). 4) Kitchen: pot handles turned inward, sharp items out of reach, cleaners locked away. 5) Bathroom: never leave a toddler alone near water (drowning risk in just inches), toilet locks. 6) Electrical outlet covers. 7) Cordless window blinds (strangulation risk). 8) Car seat: rear-facing until at least 2 years old (or longer, per height/weight limits). 9) Poison control number saved: 999/111 (UK) or 1-800-222-1222 (US). 10) Learn toddler CPR and choking first aid. Supervision is the best safety device — no childproofing replaces active watching.",
  },

  // --- THE SENSORY SENSITIVE CHILD (Karen Smith) ---
  {
    id: "mb-82",
    source: "The Sensory Sensitive Child",
    sourceDetails: "Karen Smith — Recognizing Sensory Processing Issues",
    category: "emotional",
    text: "Sensory processing issues affect how the brain receives and responds to information from the senses. Signs your child may have sensory processing differences: OVER-RESPONSIVE: covers ears at normal sounds, hates clothing tags/seams, gags on certain textures, avoids messy play (glue, sand, paint), fears movement (swings, escalators), distressed by loud environments. UNDER-RESPONSIVE: doesn't notice when face is dirty, seems unaware of pain, constantly seeks movement, crashes into things, high pain tolerance. SEEKING: constantly touches everything, puts objects in mouth, spins, rocks, needs intense flavors. These are neurological differences, not behavioral choices. An occupational therapist can provide a comprehensive evaluation and treatment plan.",
  },
  {
    id: "mb-83",
    source: "The Sensory Sensitive Child",
    sourceDetails: "Karen Smith — Sensory Issues at School",
    category: "school",
    text: "School is a sensory minefield for sensitive children: fluorescent lights buzz, cafeterias echo, fire alarms are deafening, classroom materials vary in texture, and PE is overwhelming. Strategies: 1) Advocate for sensory accommodations: noise-canceling headphones, preferential seating (away from doors/windows), a quiet lunch space, movement breaks. 2) Create a 'sensory toolkit' for school: headphones, fidget tool, sunglasses, chewelry. 3) Educate teachers about your child's sensory needs — they may never have encountered them before. 4) Watch for school avoidance as a sign of sensory overload, not behavioral issues. 5) Consider an IEP or 504 plan (US) or EHCP (UK) for formal accommodations. 6) Ensure the child has a regulated after-school environment (quiet, low-demand) to decompress.",
  },
  {
    id: "mb-84",
    source: "The Sensory Sensitive Child",
    sourceDetails: "Karen Smith — Hair, Teeth, and Nail Care",
    category: "routines",
    text: "Daily care tasks can be agonizing for sensory-sensitive children. Hair brushing: use detangler, start from ends and work up, try a wet brush or Tangle Teezer, brush in front of a screen for distraction. Teeth brushing: try different toothpaste flavors/textures (some children can't tolerate mint — try fruit flavors or unflavored), use a soft brush or silicone finger brush, try an electric toothbrush (vibration can be organizing). Nail cutting: soak nails in warm water first (softens them), cut after a bath when relaxed, use baby nail clippers or a file instead of clippers, try one nail per day. These are not behavior problems — they are genuine sensory pain responses. Patience and accommodation are essential.",
  },
  {
    id: "mb-85",
    source: "The Sensory Sensitive Child",
    sourceDetails: "Karen Smith — Clothing and Dressing",
    category: "behavior",
    text: "Sensory-based clothing issues are real and distressing. The feeling of a tag or seam can cause genuine physical pain. Strategies: 1) Remove all tags (inside seams too if needed). 2) Buy seamless socks (SmartKnit, Silish). 3) Choose soft, natural fabrics (cotton, bamboo). 4) Let the child wear what works — don't fight over a school uniform if it causes daily meltdowns (explore sensory-friendly alternatives). 5) Wash new clothes multiple times before wearing. 6) For children who need deep pressure: compression shirts, weighted vests, tight-fitting clothing. 7) For children who can't tolerate tight clothing: loose, soft, seamless options. 8) Shop together online to reduce the stress of store shopping. Never force a child to wear something that causes sensory distress.",
  },
  {
    id: "mb-86",
    source: "The Sensory Sensitive Child",
    sourceDetails: "Karen Smith — Creating a Sensory-Friendly Home",
    category: "parent",
    text: "Make your home sensory-friendly: 1) Create a 'calm corner' — a quiet space with soft lighting, pillows, noise-canceling headphones, and fidget tools. 2) Reduce visual clutter (bins, closed storage). 3) Use warm lighting instead of harsh fluorescents. 4) Have a sensory swing or trampoline for movement seekers. 5) Reduce household noise (felt pads on furniture legs, quiet appliances). 6) Establish 'quiet hours' when the TV/music is off. 7) Keep sensory tools accessible (chewelry, weighted lap pad, fidgets). 8) Post a visual schedule to reduce anxiety from unpredictability. 9) Create predictable transitions (warnings, timers). A sensory-friendly home reduces meltdowns for ALL children, not just those with identified sensory issues.",
  },

  // --- LOST AT SCHOOL (Ross Greene) ---
  {
    id: "mb-87",
    source: "Lost at School",
    sourceDetails: "Ross Greene — Challenging Kids at School",
    category: "school",
    text: "Children with behavioral challenges at school are not choosing to be difficult — they lack the skills to meet the demands. Greene's Collaborative Problem Solving (CPS) approach applies to school: 1) Identify the specific lagging skill (flexibility, frustration tolerance, problem-solving). 2) Identify the specific unsolved problem ('difficulty transitioning from recess to math'). 3) Use Plan B (collaborative conversation) with the student: 'I've noticed [problem]. What's hard about that for you?' 4) Work together to find a realistic solution that addresses both the student's and teacher's concerns. 5) This replaces Plan A (teacher imposes solution — causes more explosions) and Plan C (dropping the expectation — temporary only). Schools using CPS see significant reductions in disciplinary incidents and suspensions.",
  },
  {
    id: "mb-88",
    source: "Lost at School",
    sourceDetails: "Ross Greene — School Discipline Reform",
    category: "school",
    text: "Traditional school discipline (detentions, suspensions) doesn't work for behaviorally challenged students — it actually makes things worse. Suspensions remove the child from the environment where they need to learn skills. Greene's alternative: 1) Replace punishment with problem-solving. 2) Use the Assessment of Lagging Skills and Unsolved Problems (ALSUP) to identify what's driving the behavior. 3) Address one unsolved problem at a time with Plan B. 4) Create a school-wide culture of 'kids do well if they can' rather than 'kids do well if they wanna.' 5) Train all staff in CPS, not just counselors. 6) Track which interventions work and adjust. 7) Involve parents as partners, not as recipients of complaints. Schools that shift from punitive to collaborative see dramatic improvements in behavior, attendance, and academic outcomes.",
  },
  {
    id: "mb-89",
    source: "Lost at School",
    sourceDetails: "Ross Greene — Advocating for Your Behaviorally Challenged Child",
    category: "parent",
    text: "If your child is struggling behaviorally at school: 1) Request a meeting with teachers and SENCO (UK) or special education coordinator (US). 2) Approach as a collaborator: 'I want to understand what's happening and help.' 3) Share what works at home: 'When he gets stuck, we've found that [strategy] helps.' 4) Ask the school to use CPS: 'Have you tried asking him what's hard about [situation]?' 5) Document everything — meetings, incidents, agreed plans. 6) If the school is using suspensions or detentions and behavior isn't improving, request a functional behavior assessment. 7) Ensure any IEP or behavior plan addresses lagging skills, not just provides consequences. 8) Remember: your child is not giving the school a hard time — they're having a hard time.",
  },
  {
    id: "mb-90",
    source: "Lost at School",
    sourceDetails: "Ross Greene — The ALSUP for School",
    category: "behavior",
    text: "The Assessment of Lagging Skills and Unsolved Problems (ALSUP) is a tool for identifying WHY a child struggles at school. Lagging skills might include: difficulty handling transitions, difficulty doing things in a logical sequence, difficulty managing frustration, difficulty maintaining focus, difficulty considering multiple perspectives, inflexible thinking. The ALSUP shifts the conversation from 'What consequence should we impose?' to 'What skill does this child need to build?' Once lagging skills are identified, choose ONE unsolved problem to address with Plan B. Example: 'Difficulty transitioning from recess to math → what's hard about that?' The child's answer guides the solution. This is assessment FOR intervention, not just diagnosis.",
  },

  // --- DARING GREATLY / GIFTS OF IMPERFECT PARENTING (Brené Brown) ---
  {
    id: "mb-91",
    source: "Daring Greatly",
    sourceDetails: "Brené Brown — Vulnerability in Parenting",
    category: "parent",
    text: "Brown's research shows that vulnerability — showing up authentically, even when you can't control the outcome — is the birthplace of connection, courage, and belonging. Applied to parenting: 1) It's OK to say 'I don't know' or 'I made a mistake' — this models authenticity. 2) Apologizing to your children is one of the most powerful things you can do — it teaches accountability and repair. 3) Don't pretend you have it all together — children learn resilience from watching you struggle and recover. 4) Vulnerability isn't oversharing — it's age-appropriate honesty ('I'm having a hard day, but I'm going to take care of myself and us'). 5) Connection with your children happens in vulnerable moments, not perfect ones. Perfectionism kills connection.",
  },
  {
    id: "mb-92",
    source: "Daring Greatly",
    sourceDetails: "Brené Brown — Shame vs Guilt in Parenting",
    category: "behavior",
    text: "Brown's critical distinction: GUILT = 'I did something bad' (leads to change). SHAME = 'I am bad' (leads to hiding and disconnection). Applied to discipline: Instead of 'What is wrong with you?' (shame), say 'That behavior was not OK — what happened?' (guilt). Shame-based discipline ('You should be embarrassed,' 'You're a bad kid') damages self-worth and increases behavior problems long-term. Guilt-based accountability ('You made a poor choice, let's fix it') preserves self-worth while changing behavior. To avoid shame: 1) Never label the child ('lazy,' 'bad,' 'mean'). 2) Address the behavior, not the identity. 3) Avoid public humiliation. 4) Use empathetic body language (get down to their level, don't loom). 5) Maintain the relationship even while correcting.",
  },
  {
    id: "mb-93",
    source: "Daring Greatly",
    sourceDetails: "Brené Brown — Raising Shame-Resilient Children",
    category: "confidence",
    text: "To raise children who can resist shame and develop healthy self-worth: 1) Model shame resilience — when you feel shame, name it ('I'm feeling embarrassed because I made a mistake'). 2) Create a home where all feelings are accepted — no emotion is 'wrong.' 3) Practice self-compassion aloud ('That didn't go as I hoped, but I tried my best'). 4) Don't use love withdrawal (silent treatment, 'I'm disappointed in you' as a weapon). 5) Teach children to recognize shame ('When someone says you're not good enough, that's about them, not you'). 6) Help them develop a 'shame resilience' network — people they can talk to when they feel 'not enough.' 7) Celebrate courage over perfection: 'I'm proud of you for trying, even though it didn't work out.'",
  },
  {
    id: "mb-94",
    source: "Daring Greatly",
    sourceDetails: "Brené Brown — Wholehearted Parenting",
    category: "parent",
    text: "Brown defines 'wholehearted parenting' as raising children with the knowledge that they are worthy of love and belonging exactly as they are. Practices: 1) Love your children for WHO they are, not what they achieve. 2) Don't use your children to fulfill your own unmet dreams. 3) Let them see you take risks and fail — and recover. 4) Model boundaries: saying no, respecting your own needs, asking for help. 5) Practice gratitude together daily ('What are three good things today?'). 6) Forgive yourself for parenting mistakes — perfection isn't possible and trying models unhealthy standards. 7) Know that your children absorb your self-talk — if you criticize your own body, they'll criticize theirs. 8) Connection over perfection, always.",
  },
  {
    id: "mb-95",
    source: "The Gifts of Imperfect Parenting",
    sourceDetails: "Brené Brown — Permission to Be Imperfect",
    category: "parent",
    text: "Brown's MANIFESTO for parenting: 'Above all else, I want you to know that you are loved and lovable. You will learn this from my words and actions — the way I speak to you, about you, and about myself.' Key principles: 1) Don't let perfectionism drive your parenting — 'good enough' is good enough. 2) Break the cycle of YOUR childhood wounds — you can't give what you didn't receive, but you can learn. 3) Cultivate joy — don't wait for everything to be perfect to be happy. 4) Let your children struggle — rescuing them from discomfort deprives them of growth. 5) Your job is not to make your children happy — it's to raise wholehearted adults. 6) Self-compassion for yourself is a parenting tool: 'I'm doing the best I can, and my best is enough.'",
  },
  {
    id: "mb-96",
    source: "The Gifts of Imperfect Parenting",
    sourceDetails: "Brené Brown — Belonging vs Fitting In",
    category: "social",
    text: "Brown distinguishes BELONGING (being accepted for who you truly are) from FITTING IN (changing yourself to be accepted). This distinction is crucial for children and teens. Help your child understand: 'Belonging doesn't require you to change who you are. If you have to change to fit in, that's not belonging.' Strategies: 1) Celebrate what makes your child unique rather than pushing conformity. 2) Don't say 'just be yourself and they'll like you' — instead say 'Be yourself, and you'll find YOUR people.' 3) If a friend group requires your child to hide who they are, it's not a healthy group. 4) Model belonging at home — family is where children first learn they're loved as they are. 5) Discuss peer pressure openly and help them develop their own values compass.",
  },

  // --- ADDITIONAL CHUNKS TO EXCEED 100 ---

  // --- More RAISING AN ADULT ---
  {
    id: "mb-97",
    source: "Raising an Adult",
    sourceDetails: "Julie Lythcott-Haims — The Checklisted Childhood",
    category: "teen",
    text: "Lythcott-Haims describes the 'checklisted childhood' — a phenomenon where children's lives are overscheduled with activities chosen to build the perfect college application. The child becomes a project, not a person. Signs: your child has no free time, every activity is strategic, you're more focused on their resume than their happiness, they show signs of anxiety or depression despite 'having everything.' The antidote: 1) Reduce activities to ones the child genuinely loves. 2) Protect unstructured time. 3) Ask 'Who is this child becoming?' not 'What will this look like on an application?' 4) Let them choose activities for joy, not strategy. 5) Family time matters more than extracurriculars. 6) A fulfilled, authentic child becomes a successful adult — not the other way around.",
  },

  // --- More GIFT OF FAILURE ---
  {
    id: "mb-98",
    source: "The Gift of Failure",
    sourceDetails: "Jessica Lahey — The Anxiety-Protective Parent",
    category: "emotional",
    text: "Anxious parents raise anxious children — not through genetics alone, but through behavior. Overprotective behaviors that transmit anxiety: 1) Hovering during play ('Be careful!' every 30 seconds). 2) Preventing age-appropriate risks (climbing trees, using tools, walking to school). 3) Constantly checking in via text. 4) Problem-solving for the child before they try. 5) Projecting worst-case scenarios ('What if you get hurt?'). Instead: 1) Assess real risk vs perceived risk. 2) Let them climb, explore, and get minor injuries — this builds risk assessment skills. 3) Replace 'Be careful' with 'How can you be safe doing that?' 4) Model calm assessment of risk. 5) Tolerate your own discomfort — their growth requires it. Children who take appropriate risks develop confidence and judgment.",
  },

  // --- More QUEEN BEES ---
  {
    id: "mb-99",
    source: "Queen Bees and Wannabes",
    sourceDetails: "Rosalind Wiseman — Building Girl Confidence",
    category: "confidence",
    text: "To help girls resist social manipulation: 1) Teach media literacy — discuss how images are manipulated and how social media distorts reality. 2) Build a 'personal Bill of Rights' together: 'I have the right to be treated with respect, to change my mind, to say no without guilt, to be angry.' 3) Practice assertive communication through role-play: have her practice saying 'I don't like that' or 'Stop' in a firm voice. 4) Encourage activities that build competence outside the social hierarchy (sports, art, music, volunteering). 5) Celebrate when she stands up for herself or others. 6) Connect her with strong female role models. 7) Read and discuss books about girls who challenge the status quo. Girls who feel competent and worthy are less vulnerable to social manipulation.",
  },

  // --- More AGE OF OPPORTUNITY ---
  {
    id: "mb-100",
    source: "Age of Opportunity",
    sourceDetails: "Laurence Steinberg — The Extended Adolescence",
    category: "teen",
    text: "Adolescence now extends to age 24-25 — longer than any previous generation. This is partly biological (brain development continues until 25) and partly social (later independence, longer education). Implications for parenting: 1) Don't expect full adult responsibility from an 18-year-old — their brain is still developing. 2) Maintain a supportive (not controlling) relationship into their early 20s. 3) Gradually shift from parent to consultant: more advice-giving-on-request, less rule-setting. 4) Understand that emerging adults still need guidance on big decisions (career, relationships, finances). 5) Respect their autonomy while being available. 6) Don't compare their timeline to yours at that age — the world has changed. 7) The plasticity of this extended adolescence is an opportunity — positive interventions still have enormous impact.",
  },

  // --- More NO BAD KIDS ---
  {
    id: "mb-101",
    source: "No Bad Kids",
    sourceDetails: "Janet Lansbury — Natural Consequences for Toddlers",
    category: "behavior",
    text: "Lansbury advocates letting toddlers experience natural consequences (when safe) rather than imposing arbitrary ones. Examples: if they throw their food, mealtime is over ('You're showing me you're done. I'll take the plate'). If they throw a toy, the toy is placed out of reach ('I won't let you throw the block. It could hurt someone. I'm putting it away'). If they refuse a jacket, they feel cold (carry it for them — don't say 'I told you so'). Natural consequences teach cause-and-effect without parental anger. The key: 1) Be immediate (don't wait). 2) Be calm (don't punish). 3) Be consistent (every time). 4) Be brief (minimal words). 5) Be kind (the consequence teaches; you don't need to add shame).",
  },

  // --- More TOUCHPOINTS ---
  {
    id: "mb-102",
    source: "Touchpoints",
    sourceDetails: "T. Berry Brazelton — The 2-Year Touchpoint",
    category: "behavior",
    text: "Around age 2, Brazelton identifies a major touchpoint: the child's sense of self emerges forcefully. 'No!', 'Mine!', and 'I do it!' are declarations of autonomy, not defiance. This touchpoint often brings: tantrums, food refusal, sleep disruption, and increased clinginess alternating with pushing away. Parents may worry the child is 'becoming difficult.' In reality, the child is developing a sense of self — a critical developmental task. Response: 1) Offer limited choices to satisfy the need for autonomy ('Red cup or blue?'). 2) Pick your battles — safety yes, preferences often no. 3) Maintain routines for security. 4) Expect and accept tantrums — they're age-appropriate. 5) This phase passes by around 3 as language and self-regulation improve.",
  },

  // --- More DARING GREATLY ---
  {
    id: "mb-103",
    source: "Daring Greatly",
    sourceDetails: "Brené Brown — Modeling Imperfect Mothering/Fathering",
    category: "parent",
    text: "Brown's most powerful parenting insight: children learn more from who you ARE than what you TEACH. If you want to raise brave, kind, resilient children, you must model those qualities — including the messy, imperfect versions. This means: 1) Let your children see you try hard things and sometimes fail. 2) Let them see you apologize and make amends. 3) Let them see you take care of yourself (exercise, friendships, rest) without guilt. 4) Let them see you disagree with your partner respectfully and repair after. 5) Let them see you set boundaries and say no. 6) Let them see you laugh at your mistakes. 7) Your messy, authentic, vulnerable life is the greatest curriculum your children will ever have. Perfect parenting isn't possible — present parenting is.",
  },

  // --- Bonus: SENSIbillITY for sensory needs at mealtimes ---
  {
    id: "mb-104",
    source: "The Sensory Sensitive Child",
    sourceDetails: "Karen Smith — Sensory-Friendly Mealtimes",
    category: "eating",
    text: "For sensory-sensitive children, mealtimes can be overwhelming. Strategies: 1) Reduce sensory input — dim lights, quiet music (not loud TV), comfortable seating with feet supported. 2) Use sectioned plates so foods don't touch (a real distress for many sensory children). 3) Serve foods at the temperature and texture the child prefers. 4) Allow utensils or fingers — whichever the child tolerates. 5) Keep a 'safe food' on the plate always. 6) Don't comment on what or how much they eat — reduce all pressure. 7) Gradually introduce new foods through play (food art, cooking together, touching and smelling before tasting). 8) Consult an OT who specializes in feeding if the child eats fewer than 10 foods, gags frequently, or shows signs of oral motor difficulty. Sensory-friendly mealtimes transform eating from battleground to safe exploration.",
  },

  // === AGE-SPECIFIC VARIANTS (av-1 through av-150) ===

  // --- BABY (0-18 months): Crying/Colic ---
  {
    id: "av-1",
    source: "The Happiest Baby on the Block",
    sourceDetails: "Harvey Karp — 5 S's for colic (0-18 months)",
    category: "tantrums",
    text: "For babies 0-18 months with colic or persistent crying: Use the 5 S's to activate the calming reflex. 1) Swaddle snugly (arms down, hips loose). 2) Stomach/Side position (only for soothing, never for sleep — always place on back to sleep). 3) Shush loudly and continuously (match the volume of the baby's cry). 4) Swing with small, fast jiggly movements (never shake). 5) Suck — offer a pacifier or breast. Colic crying typically peaks at 6 weeks and resolves by 3-4 months. Remember: you cannot spoil a baby this young by responding to their cries. Prompt, consistent responses build secure attachment.",
  },

  // --- BABY: Sleep regression ---
  {
    id: "av-2",
    source: "Wonder Weeks",
    sourceDetails: "Hetty van de Rijt — Sleep regression at developmental leaps (0-18 months)",
    category: "sleep",
    text: "For babies 0-18 months experiencing sleep regression: Sleep disruptions often coincide with developmental leaps (around weeks 5, 8, 12, 19, 26, 37, 46, 55, 64, and 75). During these leaps, the baby's brain is rewiring, and sleep temporarily deteriorates. Expect more night waking, shorter naps, and increased fussiness for 1-3 weeks. Response: maintain your bedtime routine consistently, avoid creating new sleep associations you don't want long-term (like rocking to sleep every time), and offer extra comfort without panic. This is temporary — sleep will improve once the leap passes. Track leaps using the Wonder Weeks app to anticipate regressions.",
  },

  // --- BABY: Feeding refusal ---
  {
    id: "av-3",
    source: "Child of Mine",
    sourceDetails: "Ellyn Satter — Division of Responsibility for babies (0-18 months)",
    category: "eating",
    text: "For babies 0-18 months refusing milk or solids: First, rule out medical causes (reflux, ear infection, teething pain, sore throat). If medically fine, apply the Division of Responsibility at the baby level: you decide what and when to offer; the baby decides whether and how much. For bottle or breast refusal, try feeding in a quiet, dimly lit room with minimal distraction. For solid food refusal (6+ months), offer foods at family mealtimes so the baby sees others eating. Never force-feed or hold the baby's head. Accept that babies' appetites vary day to day — a baby who eats well one day may eat little the next. Trust their internal hunger cues.",
  },

  // --- BABY: Separation anxiety ---
  {
    id: "av-4",
    source: "Touchpoints",
    sourceDetails: "T. Berry Brazelton — Separation anxiety onset (0-18 months)",
    category: "emotional",
    text: "For babies 0-18 months experiencing separation anxiety: This typically emerges around 8-10 months and peaks at 14-18 months. The baby has learned that they and their caregiver are separate beings, and they become distressed when the caregiver leaves. Strategies: 1) Always say goodbye — never sneak out. 2) Keep departures short and confident (your anxiety transfers to the baby). 3) Use a consistent goodbye ritual (a special wave, a kiss on the palm). 4) Leave a worn t-shirt that smells like you. 5) Play peekaboo regularly — it builds object permanence and teaches the baby that things that disappear come back. 6) This is a sign of healthy attachment, not a problem to fix.",
  },

  // --- BABY: Teething ---
  {
    id: "av-5",
    source: "AAP HealthyChildren.org",
    sourceDetails: "American Academy of Pediatrics — Teething management (0-18 months)",
    category: "behavior",
    text: "For babies 0-18 months who are teething: Teething can cause drooling, gum rubbing, irritability, and mild temperature elevation (but not true fever above 38°C/100.4°F). Safe relief strategies: 1) Offer a clean, chilled (not frozen) teething ring. 2) Gently massage the gums with a clean finger. 3) Give a cold, damp washcloth to chew on. 4) For babies over 6 months, offer hard foods like cold carrot sticks (supervised closely). Avoid: teething gels containing benzocaine (FDA warns against these), amber teething necklaces (choking/strangulation risk), and homeopathic teething tablets. If crying seems disproportionate to teething, check for other causes. Acetaminophen (2+ months) or ibuprofen (6+ months) can help at night — consult your pediatrician for dosing.",
  },

  // --- BABY: Stranger anxiety ---
  {
    id: "av-6",
    source: "Touchpoints",
    sourceDetails: "T. Berry Brazelton — Stranger anxiety (0-18 months)",
    category: "fears",
    text: "For babies 0-18 months showing stranger anxiety: Around 7-9 months, babies may cry, cling, or look terrified when approached by someone unfamiliar. This is a normal developmental milestone showing the baby can distinguish familiar from unfamiliar people. Strategies: 1) Don't force the baby to go to someone they don't recognize — respect their signals. 2) Hold the baby securely while greeting the new person warmly, showing them you trust this person. 3) Give the baby time to observe from the safety of your arms before expecting interaction. 4) Brief the visitor: 'She needs a few minutes to warm up — let her watch us talk first.' 5) Never label the baby 'shy' — this becomes a self-fulfilling identity. 6) Stranger anxiety typically fades by 18-24 months as social confidence grows.",
  },

  // --- BABY: Car seat crying ---
  {
    id: "av-7",
    source: "AAP Car Safety",
    sourceDetails: "American Academy of Pediatrics — Car seat crying (0-18 months)",
    category: "behavior",
    text: "For babies 0-18 months who scream in the car seat: Car seat crying is extremely common and stressful for parents. Strategies: 1) Ensure the seat fit is correct — straps should be at or below shoulder level for rear-facing, with no twists. 2) Check for physical comfort: is the harness too tight, is a strap pinching, is the sun in their eyes? Use a removable shade. 3) Offer a pacifier (the sucking motion is calming). 4) Play white noise or calm music. 5) Hang a baby-safe mirror (secured, not loose) so they can see you. 6) Time drives around naptime when possible. 7) Keep trips short when you can. Never take the baby out of the seat while the car is moving — safety always comes first. Pull over safely if you need to comfort them.",
  },

  // --- BABY: Developmental leaps/fussiness ---
  {
    id: "av-8",
    source: "Wonder Weeks",
    sourceDetails: "Hetty van de Rijt — Leap-related fussiness (0-18 months)",
    category: "emotional",
    text: "For babies 0-18 months going through developmental leaps: Each leap brings a fussy period lasting 1-6 weeks, during which the baby may cry more, cling more, sleep poorly, and eat less. Signs a leap is happening: increased clinginess, more crying, changes in sleep and appetite, and a sudden desire to practice new skills. During leaps: 1) Offer extra physical closeness (baby-wearing helps). 2) Lower expectations for routine — flexibility is key. 3) Provide opportunities to practice the new skill the leap brings (e.g., if they're learning to grasp, offer varied textures). 4) Take care of yourself — fussy periods are exhausting. 5) Remember that after the fussy period, you'll notice a new ability emerge. The frustration is the baby working hard to wire new brain circuits.",
  },

  // --- BABY: Vaccine distress ---
  {
    id: "av-9",
    source: "CDC Vaccine Communication",
    sourceDetails: "CDC — Managing baby vaccine distress (0-18 months)",
    category: "emotional",
    text: "For babies 0-18 months receiving vaccinations: Before the appointment, give infant acetaminophen only if your pediatrician recommends it (some evidence suggests prophylactic analgesics may slightly reduce vaccine immune response, so discuss first). During the shot: 1) Breastfeed immediately before, during, or after — the comfort and sugar intake reduce pain perception. 2) If not breastfeeding, offer a pacifier dipped in a tiny amount of sugar water. 3) Hold the baby skin-to-skin. 4) Use a calm, soothing voice — your tension transfers to the baby. After: expect fussiness for 24-48 hours, possible low-grade fever, and soreness at the injection site. Extra cuddles, fluids, and patience. If crying is continuous for 3+ hours or fever exceeds 38°C/100.4°F, call your doctor.",
  },

  // --- BABY: Rolling/crawling keeps them awake ---
  {
    id: "av-10",
    source: "AAP Healthy Sleep Habits",
    sourceDetails: "AAP — Motor milestones disrupting sleep (0-18 months)",
    category: "sleep",
    text: "For babies 0-18 months whose rolling or crawling disrupts sleep: When babies learn a new motor skill, they often practice it in their sleep, waking themselves up. This is sometimes called the 'rolling milestone sleep regression.' Strategies: 1) Don't rush in at every sound — give the baby 2-3 minutes to self-settle. 2) If they've rolled onto their tummy and are upset, flip them back once, but know they'll likely flip again soon. Once a baby can roll both ways independently, it is safe for them to sleep on their tummy — the risk has passed. 3) Give plenty of supervised practice time during the day so the novelty wears off. 4) Be patient — this phase typically lasts 1-2 weeks. 5) Avoid sleep positioners or wedges — these are not safe. Maintain your sleep routine and this will pass.",
  },

  // --- BABY: Milk transition ---
  {
    id: "av-11",
    source: "AAP Nutrition",
    sourceDetails: "American Academy of Pediatrics — Milk transition (0-18 months)",
    category: "eating",
    text: "For babies 0-18 months transitioning milks: The transition from breast milk or formula to cow's milk typically happens around 12 months. Guidelines: 1) Whole cow's milk (not low-fat) until age 2 — babies need the fat for brain development. 2) Limit to 16-24 oz (480-720 ml) per day — more than this can cause iron-deficiency anemia and reduce appetite for solids. 3) Transition gradually: mix 25% cow's milk with formula/breast milk for a few days, then 50%, then 75%, then 100%. 4) Offer milk in a sippy or open cup, not a bottle, to protect developing teeth. 5) If there's a dairy allergy, consult a pediatrician about fortified plant milks (soy or pea protein are closest nutritionally). Never give honey before 12 months (botulism risk).",
  },

  // --- BABY: Nap transitions ---
  {
    id: "av-12",
    source: "Healthy Sleep Habits, Happy Child",
    sourceDetails: "Marc Weissbluth — Nap transitions (0-18 months)",
    category: "sleep",
    text: "For babies 0-18 months going through nap transitions: Nap needs change rapidly in the first 18 months. Typical schedule: 0-3 months: 4-5 naps/day (irregular). 3-6 months: 3 naps/day. 6-14 months: 2 naps/day. 14-18 months: transition to 1 nap. Signs your baby is ready to drop a nap: 1) They consistently take 30+ minutes to fall asleep at one nap. 2) They skip a nap several days in a row without crankiness. 3) The later nap pushes bedtime too late. 4) They wake earlier in the morning. Transition gradually: every other day, offer one nap instead of two, for 1-2 weeks before fully committing. Protect the remaining nap(s) fiercely — missed naps lead to overtiredness, which causes worse sleep, not better. Never drop a nap during other major changes (moving, new sibling).",
  },

  // --- BABY: Bedtime routine establishment ---
  {
    id: "av-13",
    source: "AAP Healthy Sleep Habits",
    sourceDetails: "AAP — Establishing bedtime routines for babies (0-18 months)",
    category: "routines",
    text: "For babies 0-18 months, establishing a bedtime routine: Start a consistent routine as early as 6-8 weeks, though it solidifies around 3-4 months. An effective baby bedtime routine: 1) Bath (warm water signals relaxation). 2) Massage with lotion. 3) Pajamas and sleep sack. 4) Final feed in a dim, quiet room. 5) Book or lullaby. 6) Place in crib drowsy but awake (this is key — if they fall asleep in your arms, they'll need you to fall back asleep at 2 AM). The routine should take 20-30 minutes and happen in the same order every night. Keep the room dark (blackout curtains), cool (18-20°C/65-68°F), and use white noise. Consistency is more important than the specific activities.",
  },

  // --- BABY: Overstimulation ---
  {
    id: "av-14",
    source: "Zero to Three",
    sourceDetails: "Zero to Three — Managing overstimulation in babies (0-18 months)",
    category: "emotional",
    text: "For babies 0-18 months experiencing overstimulation: Babies have limited capacity to process sensory input and can easily become overwhelmed. Signs of overstimulation: looking away, arching back, extended crying that doesn't respond to comfort, hiccups, clenched fists, and sudden pallor or flushing. When you see these signs: 1) Remove the baby from the stimulating environment to a quiet, dim space. 2) Reduce noise, lights, and visitors. 3) Hold the baby firmly against your chest (deep pressure is calming). 4) Speak softly or go silent — let them hear your heartbeat. 5) Avoid passing the baby around at gatherings — limit handlers to 1-2 familiar people. 6) Build in quiet time after outings. A baby who seems 'cranky' at family events is often simply overstimulated.",
  },

  // --- BABY: Growth spurts ---
  {
    id: "av-15",
    source: "La Leche League / AAP",
    sourceDetails: "La Leche League International — Growth spurt behavior (0-18 months)",
    category: "eating",
    text: "For babies 0-18 months going through growth spurts: Growth spurts typically occur around 7-14 days, 3-6 weeks, 3 months, 6 months, and 9 months. During a spurt (lasting 2-7 days), the baby may: feed much more frequently (cluster feeding), seem hungrier than usual, wake more at night for feeds, and be fussier. For breastfeeding mothers: feed on demand — your milk supply will adjust within 2-3 days. Do NOT supplement with formula during a growth spurt unless advised by a doctor — frequent nursing is how supply increases. For formula-fed babies: offer slightly larger or more frequent feeds. Trust the process — the spurt ends and normal feeding resumes. If increased feeding lasts more than a week, consult your pediatrician.",
  },

  // --- BABY: Crying/colic (additional) ---
  {
    id: "av-16",
    source: "Zero to Three",
    sourceDetails: "Zero to Three — Purple crying period (0-18 months)",
    category: "tantrums",
    text: "For babies 0-18 months in the Period of PURPLE Crying: PURPLE crying is a normal developmental phase peaking at 2 months and ending by 4-5 months. PURPLE stands for: Peak of crying (peaks at 2 months), Unexpected (can come and go without reason), Resists soothing (may not respond to any comfort), Pain-like face (looks like they're in pain even when healthy), Long-lasting (can cry 5+ hours/day), Evening (worst in late afternoon/evening). This is NOT colic or illness — it's a normal developmental stage. Critical safety message: if you feel overwhelmed by crying, put the baby in a safe place (crib) and step away for 10 minutes. The baby is safe crying alone for a few minutes. Never shake a baby — it can cause brain damage or death.",
  },

  // --- BABY: Sleep regression (additional) ---
  {
    id: "av-17",
    source: "Happiest Baby on the Block",
    sourceDetails: "Harvey Karp — 4-month sleep regression (0-18 months)",
    category: "sleep",
    text: "For babies 0-18 months, especially around 4 months: The 4-month sleep regression is the most disruptive because the baby's sleep cycles permanently mature from newborn (50-min cycle) to adult-like (90-min cycle). The baby now wakes briefly between cycles and may not know how to connect them. If they were rocked or fed to sleep, they need that same condition to fall back asleep — every 90 minutes. Solution: teach independent sleep. Put the baby down drowsy but awake so they learn to fall asleep in their own space. Use the 5 S's (swaddle, side/stomach hold, shush, swing, suck) for soothing before putting down. This regression is actually a permanent brain development step — once through it, sleep typically stabilizes. Consistency for 2-3 weeks resolves it.",
  },

  // --- BABY: Feeding refusal (additional) ---
  {
    id: "av-18",
    source: "Solid Starts",
    sourceDetails: "Solid Starts — Baby-led weaning refusal (0-18 months)",
    category: "eating",
    text: "For babies 6-18 months refusing solid foods: If the baby rejects solids, don't revert to purees if you've started baby-led weaning. Strategies: 1) Eat together — babies learn by watching you eat. Make exaggerated 'mmm' sounds and visible enjoyment. 2) Offer finger foods in stick/shard shapes that are easy to grasp (babies use a palmar grasp before developing pincer grip around 9 months). 3) Put just 2-3 pieces on the tray — too many can overwhelm. 4) Let them explore with all senses — squishing, smelling, and throwing are part of learning. 5) Don't wipe their face mid-meal — it's intrusive and creates negative associations. 6) Offer the rejected food again in 2-3 days with no pressure. Some babies need 15+ exposures. 7) If gagging occurs, stay calm — gagging is a normal reflex and different from choking. Take an infant CPR course to feel confident.",
  },

  // --- BABY: Separation anxiety at sleep ---
  {
    id: "av-19",
    source: "The No-Cry Sleep Solution",
    sourceDetails: "Elizabeth Pantley — Separation anxiety at night (0-18 months)",
    category: "sleep",
    text: "For babies 0-18 months whose separation anxiety disrupts sleep: When separation anxiety peaks (8-18 months), babies may suddenly resist bedtime or wake more frequently crying for you. Strategies: 1) Play disappearance games during the day (peekaboo, hide-and-seek with toys) to reinforce that you always come back. 2) Use a lovey or comfort object (for babies 12+ months — not before due to SIDS risk). 3) Practice brief separations during the day ('Mama's going to the kitchen, I'll be right back') and always return promptly. 4) At bedtime, use a consistent phrase ('I love you, time to sleep, I'll see you in the morning') so the baby learns this means you're leaving but will return. 5) Avoid introducing new sleep habits you don't want to maintain (like co-sleeping if you don't normally). Instead, offer verbal reassurance and gentle back patting.",
  },

  // --- BABY: Teething sleep disruption ---
  {
    id: "av-20",
    source: "NHS Guidance",
    sourceDetails: "NHS — Teething and sleep (0-18 months)",
    category: "sleep",
    text: "For babies 0-18 months whose teething pain disrupts sleep: Teething often worsens at night because there are fewer distractions. Signs it's teething (not illness): excessive drooling, red or swollen gums, chewing on everything, pulling at ears, and mild irritability. If you suspect teething is causing night waking: 1) Offer a chilled teething ring before bed. 2) Gently massage the gum with a clean finger. 3) Ask your pharmacist about sugar-free teething gel for temporary gum numbing. 4) If pain seems significant, age-appropriate acetaminophen or ibuprofen (per pediatrician dosing) can provide relief — give it 30 minutes before bedtime. 5) Resist the urge to feed to soothe every time — this can create a feed-to-sleep association that persists. Offer comfort, then help them resettle. If symptoms include true fever (38°C+), diarrhea, or vomiting, it's likely illness, not teething.",
  },

  // --- BABY: Stranger anxiety at childcare ---
  {
    id: "av-21",
    source: "Zero to Three",
    sourceDetails: "Zero to Three — Childcare drop-off for babies (0-18 months)",
    category: "transition",
    text: "For babies 0-18 months starting childcare: The transition to childcare can be especially hard for babies due to their limited ability to understand explanations. Strategies: 1) Do gradual introduction: stay with the baby at childcare for 1-2 hours the first day, then a short solo stay day two, building up over 1-2 weeks. 2) Bring a comfort item that smells like you (a worn scarf, a small blanket for 12+ months). 3) Always say goodbye — even young babies recognize your pattern and learn that departures are followed by returns. 4) Keep the goodbye short and warm — lingering prolongs distress. 5. Share the baby's routine, feeding schedule, and sleep cues with caregivers. 6) Expect some sleep and feeding disruption for 1-2 weeks as they adjust. 7) Be prepared for 'rejection' at pickup — some babies cry when they see you because they've been holding it together all day. This is actually a sign of secure attachment.",
  },

  // --- BABY: Car seat crying (additional) ---
  {
    id: "av-22",
    source: "Zero to Three",
    sourceDetails: "Zero to Three — Sensory comfort in car seats (0-18 months)",
    category: "emotional",
    text: "For babies 0-18 months distressed in the car: Beyond physical comfort checks, consider sensory strategies: 1) White noise or a heartbeat sound played in the car can be remarkably effective — it mimics womb sounds. 2) Ensure clothing isn't bunched under the harness. 3) Check that the chest clip is at armpit level, not too low (which can be uncomfortable). 4) Avoid heavy layers in the car seat — use a blanket OVER the harness, not a snowsuit under it. 5) Time car trips after a feed and nap when possible. 6) If the baby has reflux, ask your pediatrician if a slightly more upright car seat insert is appropriate. 7) For older babies (10+ months), soft toys with no loose parts attached to the seat straps can provide distraction. Remember: crying in the car is stressful but not harmful. Safety always comes before comfort.",
  },

  // --- BABY: Developmental leap sleep disruption ---
  {
    id: "av-23",
    source: "Wonder Weeks",
    sourceDetails: "Wonder Weeks — Leap 5-8 sleep impact (0-18 months)",
    category: "sleep",
    text: "For babies 0-18 months in later leaps (weeks 26-75): As babies become more mobile and aware, sleep disruptions during leaps become more pronounced. The baby may suddenly stand in the crib, practice crawling at 2 AM, or resist naps because the world is too interesting. During these leaps: 1) Offer plenty of physical practice during waking hours to reduce the urge to practice at night. 2) Use a sleep sack to limit mobility slightly (it's safe and reduces standing in the crib). 3) If the baby stands and can't get back down, gently help them lie down once, then leave. 4) Resist the urge to change the sleep schedule drastically — temporary disruptions should not become permanent habit changes. 5) Darken the room further to reduce visual stimulation. Each leap lasts 3-6 weeks, with sleep normalizing between leaps.",
  },

  // --- BABY: Vaccine aftercare fussiness ---
  {
    id: "av-24",
    source: "CDC Vaccine Side Effects",
    sourceDetails: "CDC — Post-vaccine fussiness management (0-18 months)",
    category: "behavior",
    text: "For babies 0-18 months fussy after vaccinations: It's normal for babies to be irritable, sleepy, or slightly feverish for 24-48 hours after vaccines. Management: 1) Offer extra feeds (breast, bottle, or water for 6+ months) — hydration helps process the immune response. 2) Use age-appropriate acetaminophen (2+ months) or ibuprofen (6+ months) for fever or pain, following pediatrician dosing. 3) Apply a cool, damp cloth to the injection site for redness/swelling. 4) Expect changes in sleep — the baby may sleep more or less than usual. Both are normal. 5) Give extra cuddles and patience. 6) Avoid scheduling vaccines right before major events or travel. 7) If the baby cries continuously for 3+ hours, has a fever above 40°C/104°F, or shows unusual lethargy, contact your doctor immediately. These reactions are rare but should be evaluated.",
  },

  // --- BABY: Rolling during sleep ---
  {
    id: "av-25",
    source: "Safe to Sleep Campaign",
    sourceDetails: "NIH Safe to Sleep — Rolling during sleep (0-18 months)",
    category: "sleep",
    text: "For babies 0-18 months who roll during sleep: The safe sleep guidance changes once a baby can roll both directions independently (usually 4-6 months). Before this milestone: always place on back to sleep, and if they roll onto their side/tummy, flip them back. After consistent bidirectional rolling: it is safe to leave them on their tummy if they roll there themselves — their brain and muscles are now strong enough to reposition if needed. However, continue to ALWAYS place them on their back at the start of sleep. Ensure the crib is bare (no bumpers, loose blankets, pillows, or toys), use a fitted sheet, and consider a sleep sack instead of loose bedding. If the baby gets stuck in a position and cries, help them, but don't worry about every position change.",
  },

  // --- BABY: Milk allergy/intolerance transition ---
  {
    id: "av-26",
    source: "AAP Nutrition",
    sourceDetails: "AAP — Cow's milk protein allergy (0-18 months)",
    category: "eating",
    text: "For babies 0-18 months with suspected milk allergy: Cow's milk protein allergy (CMPA) affects 2-3% of babies. Symptoms include: blood or mucus in stool, eczema, vomiting, persistent colic, poor weight gain, and chronic congestion. If you suspect CMPA: 1) Consult your pediatrician — do not self-diagnose. 2) For breastfeeding mothers, the doctor may recommend eliminating dairy from your diet for 2-4 weeks to see if symptoms improve. 3) For formula-fed babies, the doctor may prescribe extensively hydrolyzed formula (e.g., Alimentum) or amino acid formula. 4) Most babies outgrow CMPA by 12-18 months. Reintroduction should be guided by your doctor. 5) Do not switch to plant-based milks before 12 months as a primary milk source — they lack necessary nutrition. 6) Ensure adequate calcium and vitamin D through alternatives once transition is made.",
  },

  // --- BABY: Dropping to one nap ---
  {
    id: "av-27",
    source: "Healthy Sleep Habits, Happy Child",
    sourceDetails: "Marc Weissbluth — One-nap transition (0-18 months)",
    category: "routines",
    text: "For babies 14-18 months transitioning to one nap: The move from two naps to one can be tricky. Signs of readiness: the baby consistently refuses the second nap for 1-2 weeks, the morning nap gets later and longer, or the second nap pushes bedtime too late. Strategy: 1) Gradually push the morning nap later by 15 minutes every 2-3 days until it lands around 12:00-12:30 PM. 2) The single nap will initially be long (2-3 hours) — protect it. 3) Move bedtime earlier (6:30-7:00 PM) during the transition to prevent overtiredness. 4. Expect a 2-4 week adjustment period with some cranky afternoons. 5. Offer a calm quiet time mid-afternoon if they're struggling. 6) Avoid dropping the nap during other transitions (moving, new sibling). Once stable, the schedule is typically: wake 6:30-7 AM, nap 12:30-2:30 PM, bed 7-7:30 PM.",
  },

  // --- BABY: Establishing morning routine ---
  {
    id: "av-28",
    source: "Zero to Three",
    sourceDetails: "Zero to Three — Morning routines for babies (0-18 months)",
    category: "routines",
    text: "For babies 0-18 months, establishing a morning routine: Predictable morning routines help babies feel secure and set the tone for the day. A baby-friendly morning routine: 1) Greet with a smile and eye contact ('Good morning!'). 2) Diaper change. 3) First feed in a calm environment. 4) Playtime or tummy time (when alert and content). 5) Get dressed. 6) Outing or activity (walk, baby group, errands). Tips: keep the order consistent every day, use the same greeting phrase, and don't rush — babies sense parental stress. If mornings are chaotic, do prep the night before (pack the diaper bag, lay out clothes). A baby who knows what comes next develops trust and security in their daily rhythm.",
  },

  // --- BABY: Sensory overload at gatherings ---
  {
    id: "av-29",
    source: "Touchpoints",
    sourceDetails: "T. Berry Brazelton — Holiday overload (0-18 months)",
    category: "fears",
    text: "For babies 0-18 months at family gatherings or holidays: Large gatherings can overwhelm babies with noise, unfamiliar faces, and disrupted routines. Strategies: 1) Create a 'quiet zone' — a room where you can take the baby away from the crowd. 2) Limit the number of people who hold the baby — politely say 'She's a bit overwhelmed, so I'm going to hold her for now.' 3) Stick to feeding and sleep schedules as much as possible. 4) Use a baby carrier — it provides a safe 'bubble' and discourages unsolicited holding. 5) Watch for overload cues (looking away, crying, arching). Leave early if needed — a tired, overstimulated baby is not 'being difficult.' 6) Accept that holidays with a baby look different — lower your expectations for socializing and enjoy your baby.",
  },

  // --- BABY: Cluster feeding during growth spurts ---
  {
    id: "av-30",
    source: "La Leche League International",
    sourceDetails: "La Leche League — Cluster feeding reassurance (0-18 months)",
    category: "eating",
    text: "For babies 0-18 months cluster feeding: Cluster feeding (multiple short feeds close together, often in the evening) is normal during growth spurts and developmental leaps. For breastfeeding mothers: this is how your baby signals your body to make more milk. It is NOT a sign of low supply. Strategies: 1) Set up a comfortable feeding station with water, snacks, phone charger, and entertainment. 2) Accept help with household tasks — feeding is your primary job during cluster periods. 3) Remember these phases last 2-5 days. 4) Avoid supplementing with formula 'just this once' — it disrupts the supply-and-demand cycle. 5) If cluster feeding continues for more than a week, or the baby seems unsatisfied after feeds, consult a lactation specialist. 6) For formula-fed babies, cluster feeding may mean offering slightly smaller amounts more frequently. This phase passes.",
  },

  // === TODDLER (18mo-3yr) ===

  // --- TODDLER: Tantrums (limited verbal) ---
  {
    id: "av-31",
    source: "No-Drama Discipline",
    sourceDetails: "Siegel & Bryson — Toddler tantrums with limited language (18mo-3yr)",
    category: "tantrums",
    text: "For toddlers 18-36 months with limited verbal skills: Tantrums in this age group often stem from the gap between what they want and their ability to express it. Their emotional experience is huge; their vocabulary is tiny. Strategies: 1) Name the feeling simply: 'You're MAD. You wanted the cookie.' This helps build their emotional vocabulary. 2) Get low and slow — kneel down, lower your voice, slow your movements. 3) Offer a non-verbal outlet: stomp feet together, hit a pillow, squeeze a toy. 4) Use sign language for common needs (more, all done, help, eat) — this dramatically reduces frustration. 5) Don't try to reason — their left brain is essentially offline. 6) After calm, redirect to a simple choice ('Want water or milk?'). Expect 1-3 tantrums per day at this age. They are developmentally normal, not a sign of poor parenting.",
  },

  // --- TODDLER: Biting at nursery ---
  {
    id: "av-32",
    source: "No Bad Kids",
    sourceDetails: "Janet Lansbury — Biting at nursery (18mo-3yr)",
    category: "anger",
    text: "For toddlers 18-36 months biting at nursery/daycare: Biting is extremely common in this age group — it peaks around 18-24 months. Toddlers bite to communicate frustration, teething discomfort, excitement, or sensory seeking — not malice. Response: 1) React calmly but firmly: 'I won't let you bite. Biting hurts.' No long lectures — keep it to 5 words. 2) Shadow the child during high-risk times (transitions, toy disputes) and intervene physically before the bite happens. 3) Offer appropriate things to bite: teething toys, crunchy snacks, chewelry. 4) Don't bite back — this teaches that biting is acceptable when you're frustrated. 5) Acknowledge the bitten child first, not the biter — don't give biting attention power. 6) Work with nursery staff on a consistent plan. 7) This phase typically resolves within 2-3 months as language develops. If biting is frequent and injurious, consult a pediatric OT about sensory needs.",
  },

  // --- TODDLER: Food throwing ---
  {
    id: "av-33",
    source: "Child of Mine",
    sourceDetails: "Ellyn Satter — Food throwing (18mo-3yr)",
    category: "eating",
    text: "For toddlers 18-36 months throwing food: Food throwing is part experimentation (gravity is fascinating!) and part communication ('I'm done' or 'I want attention'). Response: 1) When the first piece is thrown, say calmly: 'Food stays on the tray. If you throw it, mealtime is over.' 2) When the second piece is thrown: 'You're showing me you're done. Let's clean up.' End the meal — no anger, just follow-through. 3) Give smaller portions — a full plate is overwhelming and invites play. 4) Put only what you expect them to eat on the tray. 5) Praise appropriate mealtime behavior specifically: 'You're using your spoon so well!' 6) Ensure they're getting enough attention outside mealtimes — sometimes throwing is bid for connection. 7) Don't laugh at food throwing one day and punish it the next — consistency is what teaches. 8) This phase passes within a few weeks of consistent response.",
  },

  // --- TODDLER: Crib-to-bed transition ---
  {
    id: "av-34",
    source: "AAP Sleep Safety",
    sourceDetails: "AAP — Crib to bed transition (18mo-3yr)",
    category: "transition",
    text: "For toddlers 18-36 months transitioning from crib to bed: The ideal time is between 2.5 and 3 years — moving earlier increases the risk of the child wandering at night. Before transitioning, the child should be able to understand 'stay in your bed' and follow simple safety rules. Preparation: 1) Read books about big-kid beds together. 2) Let the child pick out bedding. 3) Set up the room as a safe zone (secure furniture to walls, cover outlets, use a baby gate at the door). 4) Use a toddler bed rail or place the mattress directly on the floor initially. 5) Maintain the exact same bedtime routine. 6) Use a 'bedtime pass' — one pass to get up for a specific reason (water, hug), then bed. If they get out, calmly walk them back with minimal interaction. The first few nights may involve 20+ walk-backs. Stay consistent. Childproof the entire room, as they now have free access.",
  },

  // --- TODDLER: Potty resistance ---
  {
    id: "av-35",
    source: "Touchpoints",
    sourceDetails: "T. Berry Brazelton — Toilet training resistance (18mo-3yr)",
    category: "toilet",
    text: "For toddlers 18-36 months resisting potty training: Brazelton's child-oriented approach emphasizes waiting for signs of readiness (staying dry 2+ hours, interest in the toilet, ability to pull pants up/down, discomfort with soiled diapers) — which may not appear until 24-30 months. If the child resists: 1) STOP and back off entirely for 2-4 weeks. Resistance means they're not ready or feel pressured. 2) Remove all pressure and talk about the potty casually. 3) Let them watch you or siblings use the toilet. 4) Keep the potty chair accessible but don't mention it. 5) When they show interest again, let them sit fully clothed on the potty first. 6) Celebrate successes mildly ('You did it!') and never react to accidents — they're part of learning. 7) Never force a child to sit on the potty or use food as a reward — this creates power struggles and anxiety. 8) Some children train at 18 months; many aren't ready until 3+. Both are normal.",
  },

  // --- TODDLER: "No!" phase ---
  {
    id: "av-36",
    source: "Touchpoints",
    sourceDetails: "T. Berry Brazelton — Autonomy and 'No!' (18mo-3yr)",
    category: "behavior",
    text: "For toddlers 18-36 months in the 'No!' phase: 'No' is a developmental milestone — it's the toddler exercising their first independent will. This is healthy autonomy, not defiance. Strategies: 1) Offer limited choices ('Red shirt or blue shirt?' 'Apple or banana?') — this channels the need for control into acceptable options. 2) Avoid yes/no questions when you need compliance: instead of 'Do you want to get dressed?' say 'Time to get dressed — do you want to pick your shirt or should I?' 3) Use 'first/then' language: 'First shoes, then playground.' 4) Pick your battles — safety is non-negotiable; many other things don't matter. 5) Model saying 'yes' and show that you respect THEIR 'no' when it's safe to do so. 6) Remember: a toddler who can say 'no' is practicing assertiveness — a life skill. This phase eases as language improves around 2.5-3 years.",
  },

  // --- TODDLER: Running off ---
  {
    id: "av-37",
    source: "Triple P",
    sourceDetails: "Triple P — Safety with runners (18mo-3yr)",
    category: "behavior",
    text: "For toddlers 18-36 months who run off: Toddlers are impulsive and have no sense of danger — running off is not defiance, it's exploration without brakes. Strategies: 1) In parking lots and crowded areas, use a hand-on-car rule (their hand stays on the car while you unload). 2) Use a wrist link or harness backpack in high-risk areas — this is safety, not punishment. 3) Make a game: 'You need to hold my hand, or I carry you. Your choice.' Follow through immediately. 4) Practice 'stop' as a game in safe areas: run together, shout 'STOP!' and freeze. Make it fun. Reward stopping with praise. 5) Be consistent — never let them walk without holding hands in a parking lot, even once. Mixed messages confuse toddlers. 6) In stores, use the cart strap or bring a carrier. 7) This impulse control develops gradually from 3+ years — until then, physical management is necessary.",
  },

  // --- TODDLER: Hitting pets ---
  {
    id: "av-38",
    source: "No Bad Kids",
    sourceDetails: "Janet Lansbury — Toddlers and pets (18mo-3yr)",
    category: "behavior",
    text: "For toddlers 18-36 months hitting or bothering pets: Toddlers don't have the impulse control to be gentle consistently — supervision is always required. Response: 1) Block the hit physically before it lands: 'I won't let you hit the dog. That hurts.' 2) Show the gentle alternative: take their hand and demonstrate soft strokes. 'We pet the doggy gently.' 3) Create safe zones where the pet can retreat away from the toddler (baby gates, high places). 4) Never leave a toddler and pet unsupervised — even for 10 seconds. 5) Teach the toddler to read pet body language: 'See the dog's tail tucked? She's scared. Let's give her space.' 6) Involve the toddler in pet care (helping pour food, filling water) to build connection. 7) If the toddler is repeatedly rough, they may be seeking sensory input — offer alternatives like playdough or sensory bins. Consistency and supervision are key.",
  },

  // --- TODDLER: Screaming ---
  {
    id: "av-39",
    source: "1-2-3 Magic",
    sourceDetails: "Thomas Phelan — Screaming (18mo-3yr)",
    category: "tantrums",
    text: "For toddlers 18-36 months who scream: Screaming is often an experiment with vocal power — toddlers discover they can make a huge sound and find it fascinating. It can also express frustration, excitement, or fatigue. Response: 1) Don't scream back — this reinforces that loud is how we communicate. 2) Get close and whisper: the contrast often makes the toddler curious and they quiet down to hear. 3) Teach volume control through games: 'Let's use our outdoor voices! Now our indoor whispers.' 4) Acknowledge the feeling: 'You're frustrated! Let's use words. Say: help please.' 5) If screaming is attention-seeking, briefly remove attention (turn away, count to 5) and return when quiet, praising the quiet voice. 6) Ensure the toddler isn't overstimulated or overtired — screaming often signals a need for calm downtime. 7) For persistent high-pitched screaming, check hearing and communication delays with your pediatrician.",
  },

  // --- TODDLER: Sharing battles ---
  {
    id: "av-40",
    source: "How to Talk So Kids Will Listen",
    sourceDetails: "Faber & Mazlish — Toddler sharing (18mo-3yr)",
    category: "social",
    text: "For toddlers 18-36 months fighting over sharing: Toddlers are developmentally egocentric — 'mine' is one of their first words. True sharing (willingly giving up a toy) doesn't emerge until 3.5-4 years. For now: 1) Use turn-taking with a timer: 'You can have it for 2 minutes, then it's Maya's turn.' Set a sand timer they can see. 2) Don't force sharing of special comfort items — every child should have 'safe' toys that don't have to be shared. 3) Narrate: 'You really want that car. Sam is playing with it now. You can have a turn next.' 4) Offer alternatives: 'While we wait, do you want the train or the blocks?' 5) Model sharing yourself: 'I'm sharing my apple with you — here's a piece.' 6) Praise any proto-sharing attempt: 'You gave her the block! That was so kind.' 7) Don't label the child as 'selfish' — this is developmental, not characterological.",
  },

  // --- TODDLER: Nap refusal ---
  {
    id: "av-41",
    source: "Healthy Sleep Habits, Happy Child",
    sourceDetails: "Marc Weissbluth — Toddler nap refusal (18mo-3yr)",
    category: "sleep",
    text: "For toddlers 18-36 months refusing naps: Most toddlers need a nap until at least 3 years old — dropping it too early causes afternoon meltdowns and early waking. If your toddler refuses the nap: 1) Make the room very dark — light is the #1 enemy of daytime sleep. 2) Use white noise to block household sounds. 3) Establish a mini nap routine (shorter than bedtime: diaper change, book, sleep sack, song). 4) If they resist, implement 'quiet time' in the crib/bed — they don't have to sleep, but they must rest quietly for 45 minutes. Many toddlers fall asleep once the pressure is off. 5) Check timing — morning wake time to nap should be 5-6 hours. If nap is too early or too late, resistance increases. 6) Avoid screens before nap — blue light suppresses melatonin. 7) If a 3-year-old consistently skips naps for 2+ weeks, they may be dropping it. Move bedtime 30-45 minutes earlier.",
  },

  // --- TODDLER: Mealtime chaos ---
  {
    id: "av-42",
    source: "Child of Mine",
    sourceDetails: "Ellyn Satter — Toddler mealtime chaos (18mo-3yr)",
    category: "routines",
    text: "For toddlers 18-36 months causing mealtime chaos: Toddlers are wired to test limits, and mealtimes are prime territory. Create structure: 1) Sit together at the table for all meals — no walking around with food. 2) Use a booster seat or high chair so they're at table height with feet supported. 3) Meals should last 15-20 minutes max — set a visual timer. When time's up, calmly remove the food. 4) Include at least one food they usually accept at every meal. 5) Let them serve themselves (pre-scoop onto their plate) to build autonomy. 6) Ignore dropped food, thrown utensils, and mess — reacting gives it power. 7) End the meal the moment behavior escalates (standing, throwing, screaming): 'Mealtime is over. You can try again at snack time.' 8) No screens during meals — ever. Family meals build language, social skills, and healthy eating habits.",
  },

  // --- TODDLER: Bath refusal ---
  {
    id: "av-43",
    source: "Zero to Three",
    sourceDetails: "Zero to Three — Bath refusal (18mo-3yr)",
    category: "fears",
    text: "For toddlers 18-36 months refusing baths: Sudden bath refusal is very common and may stem from a specific fear (slipping, water in eyes, temperature, or a recent scary experience). Strategies: 1) Don't force the bath — this reinforces fear. 2) Offer alternatives: a sponge bath, standing in shallow water, or washing with a washcloth at the sink. 3) Make baths fun again: add bubbles, bath crayons, or new toys. 4) Let them wash a toy first — 'Let's give Mr. Bear a bath!' 5) Check water temperature together using a bath thermometer — toddlers love tools. 6) Use a non-slip mat and a bath spout cover. 7) Let them get in and out on their terms (with you right there). 8) Keep baths short (5-10 minutes) until confidence returns. 9) Never pour water over their head without warning — use a visor or tilt head back gently. Fear of water on the face is primal and real.",
  },

  // --- TODDLER: Getting dressed battles ---
  {
    id: "av-44",
    source: "How to Talk So Kids Will Listen",
    sourceDetails: "Faber & Mazlish — Getting dressed (18mo-3yr)",
    category: "routines",
    text: "For toddlers 18-36 months battling over getting dressed: Dressing is a prime battleground because toddlers want autonomy but lack the skills for full independence. Strategies: 1) Offer two acceptable choices: 'Stripes or dots?' 'Blue pants or grey pants?' 2) Lay clothes out the night before — fewer decisions in the morning rush. 3) Make it a race: 'Can you get your shirt on before I count to 10?' 4) Use 'first/then': 'First we put on shoes, then we go to the park.' 5) Let them try first, then help: 'You put your arms in, I'll do the button.' 6) Don't fight over mismatched clothes — if it's weather-appropriate, let it go. 7) Use visual routines: pictures of each step (underwear, pants, shirt, socks, shoes). 8) Sing a getting-dressed song to make it fun. The battle is about control — give them some, and the battle often disappears.",
  },

  // --- TODDLER: Transitions between activities ---
  {
    id: "av-45",
    source: "No-Drama Discipline",
    sourceDetails: "Siegel & Bryson — Transition difficulty (18mo-3yr)",
    category: "transition",
    text: "For toddlers 18-36 months struggling with transitions: Toddlers live entirely in the present moment — switching activities is genuinely hard for them. Strategies: 1) Give warnings: 'Five more minutes, then we clean up.' Use a visual timer. Repeat at 2 minutes and 1 minute. 2) Use transition objects: 'Let's bring your teddy to see the car.' 3) Make transitions playful: 'Can you hop like a bunny to the bath?' or 'Let's fly like an airplane to the car!' 4) Sing the same transition song for each daily switch (clean-up song, hand-washing song). 5) Use 'first/then' consistently. 6) Acknowledge the difficulty: 'I know you love the playground. It's hard to leave. We'll come back tomorrow.' 7) Avoid abrupt transitions whenever possible. 8) Build in buffer time — everything takes twice as long with a toddler. Rushing creates resistance.",
  },

  // --- TODDLER: Tantrums in public (additional) ---
  {
    id: "av-46",
    source: "1-2-3 Magic",
    sourceDetails: "Thomas Phelan — Public tantrums (18mo-3yr)",
    category: "tantrums",
    text: "For toddlers 18-36 months having public tantrums: Public tantrums are especially stressful because of perceived judgment from others. Key mindset: most onlookers are sympathetic parents who've been there, not judging you. Response: 1) If possible, move to a quieter spot (the car, a bathroom, outside). 2) Get down to their level and stay calm — your emotional state regulates theirs. 3) Use the 'name it to tame it' technique: 'You're so upset. You wanted that toy.' 4) Don't give in to the demand — this teaches that public tantrums work. 5) If safety allows, you can wait it out nearby. 6) If the tantrum escalates and you can't safely stay, pick the child up calmly and leave. 7) Don't threaten consequences you won't follow through on. 8) Plan ahead: shop after naps and meals, bring snacks and a favorite toy, keep trips short.",
  },

  // --- TODDLER: Biting siblings (additional) ---
  {
    id: "av-47",
    source: "No Bad Kids",
    sourceDetails: "Janet Lansbury — Sibling biting (18mo-3yr)",
    category: "sibling",
    text: "For toddlers 18-36 months biting siblings: Sibling biting is common because siblings are always present and emotions run high. Response: 1) Attend to the bitten child first — this deprives the biter of attention for the behavior. 2) Then calmly address the biter: 'I won't let you bite your brother. Biting hurts.' 3) Separate them briefly if needed: 'You need to play over here now.' 4) Look for patterns — biting often happens when the toddler is hungry, tired, or feeling displaced by the sibling. Address the underlying need. 5) Give the toddler alternative ways to express frustration: 'You can say NO or stomp your feet, but no biting.' 6) Provide one-on-one time with the biter — sometimes biting is about feeling unseen. 7) Don't demand an apology — a toddler isn't developmentally capable of genuine remorse. Model the apology: 'I'm sorry he hurt you. We're working on gentle hands.'",
  },

  // --- TODDLER: Throwing utensils ---
  {
    id: "av-48",
    source: "Zero to Three",
    sourceDetails: "Zero to Three — Throwing at meals (18mo-3yr)",
    category: "behavior",
    text: "For toddlers 18-36 months throwing utensils and plates: This is a physics experiment combined with boundary testing. Response: 1) Use non-breakable, suction-bottom plates and bowls. 2) When the first throw happens, take the item calmly: 'Spoons are for eating, not throwing. If you throw it, I'll take it.' Hand it back once. 3) Second throw: it's gone for the rest of the meal. Let them eat with fingers. 4) Don't react with big emotions — neutrality is your superpower. 5) Acknowledge the impulse: 'You want to see it fly! Let's throw balls outside after lunch.' 6) Praise proper utensil use: 'You're using your fork so well!' 7) Ensure the toddler is actually hungry at mealtime — snacking too close to meals leads to food play. 8) Keep meals to 20 minutes — bored toddlers invent entertainment.",
  },

  // --- TODDLER: Bedtime stalling with new freedom ---
  {
    id: "av-49",
    source: "Healthy Sleep Habits, Happy Child",
    sourceDetails: "Marc Weissbluth — Bedtime stalling in toddler beds (18mo-3yr)",
    category: "sleep",
    text: "For toddlers 18-36 months in a big-kid bed who stall at bedtime: The newfound freedom of getting out of bed is exhilarating. Strategies: 1) Use a bedtime pass — one card they can 'spend' for one legitimate request (water, extra hug, bathroom). After it's used, it's lights out. 2) Use the 'silent return' technique: every time they get out, walk them back with zero talking, no eye contact, no engagement. The first night might be 30+ returns. The second night: 15. By night 5: usually 2-3. Consistency is everything. 3) A tot clock (changes color when it's OK to get up) gives a visual boundary. 4) Ensure the routine ends in their room, not in the living room. 5) Make the bedroom boring — no toys that light up or make noise within reach. 6) Check that bedtime isn't too early (they're not tired) or too late (overtired).",
  },

  // --- TODDLER: Potty training power struggles ---
  {
    id: "av-50",
    source: "Touchpoints",
    sourceDetails: "T. Berry Brazelton — Potty power struggles (18mo-3yr)",
    category: "toilet",
    text: "For toddlers 18-36 months in potty training power struggles: If potty training has become a battleground, stop entirely. A child who is in a power struggle about toileting will hold stool (leading to constipation and painful movements that make things worse). Recovery steps: 1) Put the child back in diapers with zero commentary. 'We're taking a break from the potty for a while.' 2) For 2-4 weeks, don't mention the potty at all. 3. Watch for constipation — if the child is holding stool, increase water, fiber, and physical activity. Consult your pediatrician if needed. 4) When reintroducing, make it entirely child-led: leave the potty out, let them choose to sit, celebrate without fanfare. 5) Never punish accidents or over-reward success — both create pressure. 6) Some children need to feel the discomfort of a wet diaper to motivate using the potty. Switch to cloth training pants for feedback. Power struggles around toileting can create lasting anxiety — always choose relationship over compliance.",
  },

  // --- TODDLER: Defiance as autonomy (additional) ---
  {
    id: "av-51",
    source: "Peaceful Parent, Happy Kids",
    sourceDetails: "Laura Markham — Reframing defiance (18mo-3yr)",
    category: "behavior",
    text: "For toddlers 18-36 months showing defiance: Reframe defiance as the toddler practicing autonomy — a critical developmental task. Instead of 'My child is being defiant,' think 'My child is learning to have opinions and preferences.' Strategies: 1) Connect before you correct: get to their level, make eye contact, touch their shoulder gently. A dysregulated toddler cannot hear logic. 2) Use play to gain cooperation: 'Oh no, the shoe-eating monster is coming! Quick, get your shoes on!' Playfulness defuses resistance. 3) Give them 'yes' outlets for their 'no' energy: 'You don't want to leave? Let's take one more slide, then we go.' 4) Acknowledge their perspective even when you can't agree: 'You wish we could stay all day. I get it.' 5) Your calm is their calm — if you escalate, they escalate.",
  },

  // --- TODDLER: Running away in stores ---
  {
    id: "av-52",
    source: "Triple P",
    sourceDetails: "Triple P — Shopping with toddlers (18mo-3yr)",
    category: "routines",
    text: "For toddlers 18-36 months who run off in stores: Prevention is the best strategy. Before going in: 1) State the rule simply: 'In the store, you hold my hand or ride in the cart.' 2) Give them a 'job': 'You're in charge of holding the apples.' 3) Bring snacks and a small toy — a hungry, bored toddler is a running toddler. 4) Keep trips under 30 minutes — toddlers have limited patience. 5) Use the cart strap consistently — don't let them out mid-trip. 6) If they run, catch them calmly and put them in the cart: 'You ran, so you ride. We'll try walking again next time.' 7) Shop during low-energy times if possible, or use pickup/grocery delivery when you can. 8) Acknowledge good behavior: 'You stayed right next to me — thank you for being a great helper.'",
  },

  // --- TODDLER: Gentle hands with animals ---
  {
    id: "av-53",
    source: "Zero to Three",
    sourceDetails: "Zero to Three — Empathy development with pets (18mo-3yr)",
    category: "social",
    text: "For toddlers 18-36 months learning gentle touch with animals: Empathy is taught through direct experience and coaching. Strategies: 1) Narrate the pet's feelings: 'Look, the cat's ears are back — she's scared. Let's give her space.' This builds early empathy. 2) Model gentleness yourself — let the toddler see you petting softly and speaking kindly to animals. 3) Praise gentle behavior specifically: 'You're petting the cat so softly. She loves that!' 4) Use 'gentle hands' as a cue phrase: before approaching the pet, say 'Gentle hands!' as a reminder. 5) Read books about kindness to animals (e.g., 'Tails Are Not for Pulling'). 6) If the toddler hurts the pet, address the pet's distress in front of the toddler: 'Ouch, that hurt Fluffy. She's crying. We need to be gentle.' Don't shame — teach. Empathy develops slowly from 18 months onward with consistent coaching.",
  },

  // --- TODDLER: High-pitched screaming for fun ---
  {
    id: "av-54",
    source: "No Bad Kids",
    sourceDetails: "Janet Lansbury — Experimental screaming (18mo-3yr)",
    category: "behavior",
    text: "For toddlers 18-36 months who screech at high pitch for fun: This is sensory exploration — they've discovered their voice has impressive range. It's not misbehavior; it's science. Response: 1) Don't overreact — big reactions (even negative) reinforce the behavior. 2) In the moment, redirect: 'That's a loud voice! Let's use loud voices outside. Inside, we use quiet voices.' Then move outside briefly if possible. 3) Offer acceptable loud outlets: sing loudly, play drums, make animal sounds together. 4) Teach the 'mouse voice' game: practice alternating between loud lion roars and tiny mouse whispers. This builds volume control. 5) If screaming escalates in crowded places, the toddler may be overwhelmed — check for overstimulation rather than punishing. 6. This phase usually fades within weeks if it doesn't get a big reaction.",
  },

  // --- TODDLER: Sharing at playground ---
  {
    id: "av-55",
    source: "How to Talk So Kids Will Listen",
    sourceDetails: "Faber & Mazlish — Playground sharing (18mo-3yr)",
    category: "social",
    text: "For toddlers 18-36 months at the playground struggling with sharing: Public sharing is harder because everything is unfamiliar and the toddler feels less secure. Strategies: 1) Bring your own bucket and spade — having their own equipment reduces conflict. 2) Before arriving, briefly set expectations: 'At the playground, we take turns on the swing.' 3) If another child takes their toy: don't force them to 'be nice and share.' It's OK to say 'He's playing with that right now.' You're modeling that their boundaries matter too. 4) Coach turn-taking: 'You can have a turn when she's done. Let's go on the slide while we wait.' 5) If your toddler takes another child's toy, gently intervene: 'I see you want that, but it's hers right now. Let's find something else.' Don't snatch it back roughly. 6) Keep playdates short (1-1.5 hours) — fatigue makes everything harder.",
  },

  // --- TODDLER: Fighting nap routine ---
  {
    id: "av-56",
    source: "The No-Cry Sleep Solution",
    sourceDetails: "Elizabeth Pantley — Nap fighting (18mo-3yr)",
    category: "sleep",
    text: "For toddlers 18-36 months fighting the nap routine: If your toddler has started resisting the nap routine itself (running away at diaper change, refusing sleep sack, etc.), the issue may be that they need more autonomy in the process. Strategies: 1) Give them jobs: 'Can you pull out your sleep sack?' 'Which book — this one or that one?' 2) Make the routine a story: 'First we change your diaper, then we read the sleepy book, then we sing our song, then it's sleep time.' Use the same words every day. 3) Check timing — if the nap is too late, they get a second wind and fight it. Try moving it 15-30 minutes earlier. 4) Use 'rest time' language instead of 'nap time': 'You don't have to sleep, but your body needs to rest.' Many toddlers fall asleep once the pressure is removed. 5) If the nap is truly gone, protect a 45-minute quiet time in their room instead.",
  },

  // --- TODDLER: Throwing food for attention ---
  {
    id: "av-57",
    source: "Zero to Three",
    sourceDetails: "Zero to Three — Attention-seeking food throwing (18mo-3yr)",
    category: "eating",
    text: "For toddlers 18-36 months who throw food for attention: If the food-throwing escalates when you're on the phone or talking to another adult, it's a bid for connection. Strategies: 1) Give focused attention at the start of the meal — sit with them, chat about the food, make eye contact. 2) When throwing starts, don't make eye contact or react. Calmly remove the food without a word. 3) Re-engage with positive attention when they eat properly: 'Mmm, you're enjoying your carrots!' 4) Ensure they're getting plenty of one-on-one time outside meals — 10-15 minutes of child-led play daily reduces attention-seeking behaviors dramatically. 5) If throwing continues, end the meal neutrally: 'Mealtime is over. You must not be hungry.' Don't offer alternatives — they'll eat at the next meal. 6) Check that meals aren't too long — 15 minutes is plenty for a toddler.",
  },

  // --- TODDLER: Hair washing battles ---
  {
    id: "av-58",
    source: "NHS Guidance",
    sourceDetails: "NHS — Hair washing resistance (18mo-3yr)",
    category: "routines",
    text: "For toddlers 18-36 months who hate hair washing: The sensation of water running over the face triggers a startle reflex that many toddlers find genuinely terrifying. Solutions: 1) Use a visor or hair-washing shield. 2) Have them look up at the ceiling and practice pouring water on the back of their head only. 3) Let them hold a dry towel to wipe their face immediately if water gets there. 4) Use tear-free shampoo and let them help squeeze it out. 5) Count down: 'Here comes the water in 3, 2, 1...' so they're prepared. 6) Make it silly: 'Is there a bird on your head? Let me wash it off!' 7) Reduce frequency — toddlers don't need their hair washed daily; 1-2 times per week is fine unless there's food or sand. 8) Consider a shower attachment they can control — autonomy reduces resistance.",
  },

  // --- TODDLER: Coat and shoes battles (additional) ---
  {
    id: "av-59",
    source: "Peaceful Parent, Happy Kids",
    sourceDetails: "Laura Markham — Morning cooperation (18mo-3yr)",
    category: "routines",
    text: "For toddlers 18-36 months who refuse coats and shoes: Mornings are high-pressure, which makes toddlers dig in. Strategies: 1) Connect first: before issuing commands, spend 2 minutes of cuddle time. 'I'm so happy to see you this morning!' Connection before direction. 2) Turn it into play: 'Can you put your shoes on before I finish counting to five? Ready, set, go!' 3) Use the 'silly mistake' technique: put their coat on YOUR arm and say 'There! Oh wait, that's not right...' The toddler will eagerly correct you. 4) Let them 'race' you: 'I'm putting on MY shoes — can you beat me?' 5) Offer the illusion of choice: 'Do you want to put your left shoe on first, or your right shoe?' 6) Build in buffer time — if you're not rushed, you won't escalate, and neither will they. Playfulness is the secret weapon of toddler parenting.",
  },

  // --- TODDLER: Leaving the park (additional) ---
  {
    id: "av-60",
    source: "How to Talk So Kids Will Listen",
    sourceDetails: "Faber & Mazlish — Leaving fun places (18mo-3yr)",
    category: "transition",
    text: "For toddlers 18-36 months who melt down when leaving: Leaving a fun place is a transition from joy to less-joy, which feels like loss. Strategies: 1) Give a concrete warning with a visual: 'Two more trips down the slide, then we go.' Count them out loud. 2) Acknowledge the feeling: 'You're having so much fun. It's hard to leave. I understand.' 3) Give a reason (briefly): 'We need to go home to make dinner.' 4) Offer something to look forward to: 'When we get home, we can read your favorite book.' 5) Let them 'be in charge' of leaving: 'Can you push the elevator button?' or 'Do you want to walk to the car or ride on my shoulders?' 6) If a meltdown happens, hold the boundary calmly: 'I know it's hard. It's time to go.' Carry them if needed, with empathy. 7) Don't negotiate or bribe — this teaches that meltdowns earn rewards.",
  },

  // === PRESCHOOLER (3-5 years) ===

  // --- PRESCHOOLER: Lying/fantasy ---
  {
    id: "av-61",
    source: "Touchpoints",
    sourceDetails: "T. Berry Brazelton — Preschooler lying and fantasy (3-5yr)",
    category: "honest",
    text: "For preschoolers 3-5 years old who tell lies or tall tales: At this age, the line between fantasy and reality is genuinely blurry. 'Lying' is often not intentional deception — it's imagination, wishful thinking, or confusion about what really happened. Response: 1) Don't label it 'lying' or call the child a liar — this creates shame without teaching. 2) Gently distinguish fantasy from reality: 'That's a great story! Is that what really happened, or is that your imagination?' 3) If they lie to avoid trouble, focus on the behavior, not the lie: 'I see the lamp is broken. Let's talk about what happened. I won't be angry if you tell me the truth.' 4) Model honesty yourself — if they catch you in a 'white lie,' address it. 5) Praise honesty: 'Thank you for telling me the truth. That took courage.' 6) By age 4-5, they begin to understand that lies are wrong — gradually shift to teaching honesty as a value.",
  },

  // --- PRESCHOOLER: Monster fears ---
  {
    id: "av-62",
    source: "Zero to Three",
    sourceDetails: "Zero to Three — Monster fears and nightmares (3-5yr)",
    category: "fears",
    text: "For preschoolers 3-5 years afraid of monsters: This is the peak age for monster fears because imagination is exploding while reality-testing is still developing. They genuinely believe the monster could be real. Response: 1) Don't dismiss ('There's no such thing as monsters') — this doesn't help because to them, the fear IS real. 2) Don't confirm ('Let me check under the bed') — this validates that monsters might exist. 3) Instead, empower the child: make 'monster spray' (water with lavender in a spray bottle) and let them spray the room. Create a 'monster shield' (a picture they draw and hang on the door). 4) Use a nightlight and keep the door slightly open. 5) Read books about overcoming fears (e.g., 'Go Away, Big Green Monster'). 6) Establish a comforting bedtime routine that ends with the child feeling safe. 7) Most monster fears resolve by age 5-6 as reality-testing improves.",
  },

  // --- PRESCHOOLER: New sibling jealousy ---
  {
    id: "av-63",
    source: "Peaceful Parent, Happy Kids",
    sourceDetails: "Laura Markham — Sibling jealousy (3-5yr)",
    category: "sibling",
    text: "For preschoolers 3-5 years adjusting to a new sibling: Regression (potty accidents, baby talk, clinginess) is normal and temporary. Strategies: 1) Acknowledge feelings: 'It's hard to share Mommy and Daddy. You might feel sad or mad about the new baby, and that's OK.' 2) Avoid 'big kid' comparisons: 'You're the big brother now' can feel like pressure, not a compliment. 3) Protect one-on-one time: 10-15 minutes daily of child-led play with just the parent, no baby. Call it 'special time.' 4) Let them help with the baby in age-appropriate ways (getting a diaper, singing a song) — but never force it. 5) Don't punish regression — it's grief, not misbehavior. Gently support them back to their previous skills. 6) Have a stash of 'busy activities' for feeding times. 7) Read books about new siblings (e.g., 'The New Small Person'). 8) Expect the adjustment to take 3-6 months. Patience is essential.",
  },

  // --- PRESCHOOLER: Preschool drop-off ---
  {
    id: "av-64",
    source: "How to Talk So Kids Will Listen",
    sourceDetails: "Faber & Mazlish — Preschool separation (3-5yr)",
    category: "transition",
    text: "For preschoolers 3-5 years struggling with drop-off: Separation anxiety often resurfaces at preschool age due to new environments. Strategies: 1) Visit the school together before the first day — meet the teacher, explore the classroom. 2) Create a goodbye ritual: a special handshake, a kiss on the palm that stays all day ('The Kissing Hand'). 3) Keep goodbyes short — 30 seconds max. Lingering prolongs distress. 4) Never sneak out — always say goodbye. 5) Use a concrete time cue: 'I'll pick you up after snack time.' Preschoolers can't tell time but can sequence events. 6) Bring a family photo or small comfort object if the school allows. 7) Validate the feeling but project confidence: 'I know it's hard to say goodbye. You're going to have a great day. I love you and I'll be back.' 8) Talk to the teacher — they're experts at distraction after you leave. Most children stop crying within 5 minutes of the parent leaving.",
  },

  // --- PRESCHOOLER: Endless "why" ---
  {
    id: "av-65",
    source: "Mindset",
    sourceDetails: "Carol Dweck — Nurturing curiosity (3-5yr)",
    category: "behavior",
    text: "For preschoolers 3-5 years who ask 'why' endlessly: This is a sign of healthy cognitive development — the child is building causal reasoning and trying to understand their world. Strategies: 1) Answer briefly and accurately. If you don't know, say 'Great question — let's look it up together!' This models curiosity and learning. 2) Turn it back: 'That's a great question. What do YOU think?' This encourages independent thinking. 3) Praise the question, not just the answer: 'I love how curious you are!' 4) It's OK to say 'I've answered a lot of questions and my brain needs a rest. Let's have quiet time for a bit.' 5) Connect 'why' questions to growth mindset: 'You're really thinking hard about that — that's how scientists learn!' 6) Don't shut down questions with 'Because I said so' (except when genuinely necessary). Curiosity is the engine of learning — protect it.",
  },

  // --- PRESCHOOLER: Boundary testing ---
  {
    id: "av-66",
    source: "Triple P",
    sourceDetails: "Triple P — Boundary testing (3-5yr)",
    category: "behavior",
    text: "For preschoolers 3-5 years testing boundaries: Boundary testing is developmental — the child is mapping out the rules of their world. Consistency is the most important tool. Strategies: 1) Set 3-5 clear family rules stated in positive terms ('We use gentle hands,' 'We walk inside'). Review them regularly. 2) Use logical consequences directly tied to the behavior: if they draw on the wall, they help clean it. If they throw a toy, the toy goes away for the day. 3) Follow through every single time — inconsistent consequences are worse than no consequences because they teach the child to gamble. 4) Use 'when/then' phrasing: 'When toys are picked up, then we watch a show.' 5) Praise compliance specifically: 'You stopped running when I asked — thank you for listening.' 6) Avoid empty threats — never threaten a consequence you won't actually implement.",
  },

  // --- PRESCHOOLER: Picky eating ---
  {
    id: "av-67",
    source: "Child of Mine",
    sourceDetails: "Ellyn Satter — Preschool picky eating (3-5yr)",
    category: "eating",
    text: "For preschoolers 3-5 years who are picky eaters: Picky eating often peaks at this age as children assert independence and develop strong food preferences. Division of Responsibility remains key: parent decides what, when, where; child decides whether and how much. Strategies: 1) Always include a 'safe food' (something they reliably eat) at every meal. 2) Offer new foods in tiny portions — a single pea-sized piece is less intimidating. 3) Let them serve themselves from shared dishes when possible. 4) Don't negotiate, bribe ('Two more bites and you get dessert'), or beg. This creates unhealthy food relationships. 5) Involve them in meal prep — children who help cook are more likely to taste. 6) Keep mealtimes pleasant — talk about the day, not about what they're eating. 7) It can take 15-20 exposures for acceptance. Stay calm and keep offering.",
  },

  // --- PRESCHOOLER: Screen meltdowns ---
  {
    id: "av-68",
    source: "AAP Media Guidelines",
    sourceDetails: "AAP — Screen time transitions (3-5yr)",
    category: "screen",
    text: "For preschoolers 3-5 years who melt down when screen time ends: Screens provide intense dopamine stimulation that young brains struggle to transition away from. Prevention: 1) Set a visual timer BEFORE the screen goes on: 'You can watch until the timer beeps.' 2) Give a 5-minute and 1-minute warning. 3) Use a transition activity: 'When the show is over, we're going to build a fort!' Give them something to move toward, not just away from. 4) Make the transition physical — turn off the screen and immediately offer a snack, a hug, or an active game. 5) Don't negotiate for 'one more episode' — ever. Consistency teaches acceptance. 6) If a meltdown occurs, validate but hold firm: 'I know it's hard to stop watching. Screen time is over.' Use the same phrase every time. 7) Limit total screen time to 1 hour/day of high-quality content for this age. Less is better.",
  },

  // --- PRESCHOOLER: Aggression ---
  {
    id: "av-69",
    source: "The Explosive Child",
    sourceDetails: "Ross Greene — Preschool aggression (3-5yr)",
    category: "anger",
    text: "For preschoolers 3-5 years showing aggression (hitting, kicking, pushing): Greene's Collaborative & Proactive Solutions model: First identify the lagging skill. Preschool aggression usually signals problems with: frustration tolerance, impulse control, or expressing needs verbally. Response: 1) In the moment: ensure safety. Stop the hitting physically and calmly: 'I won't let you hit. Hitting hurts.' 2) Don't demand an explanation mid-meltdown — they can't process. 3) After calm, use Collaborative Problem Solving: 'I noticed you got really mad when he took your toy. What was going on for you? What could we do differently next time?' 4) Teach replacement behaviors: 'When you're mad, you can say STOP, stomp your feet, or come get me.' 5) Look for triggers (hunger, fatigue, transitions) and proactively address them. 6) If aggression is frequent/severe, consult a child psychologist — early intervention is highly effective.",
  },

  // --- PRESCHOOLER: Imaginary friends ---
  {
    id: "av-70",
    source: "Touchpoints",
    sourceDetails: "T. Berry Brazelton — Imaginary friends (3-5yr)",
    category: "emotional",
    text: "For preschoolers 3-5 years with imaginary friends: Imaginary friends are a sign of rich imagination and healthy social-emotional development — not loneliness or psychological problems. About 65% of children have them. Benefits: they practice social skills, process emotions, and explore scenarios in a safe way. Response: 1) Don't belittle or dismiss the imaginary friend. 2) Don't use the friend to manipulate ('Your friend says you should eat your vegetables'). 3) Welcome the friend into daily life within reason ('Sure, your friend can sit at the table'). 4) Notice what the friend reveals — if the child says 'Mr. Bear is scared of the dark,' the child may be expressing their own fear. 5) Set limits when needed: 'Your friend can come, but it's time for bed now.' 6) Imaginary friends typically fade by age 6-7 as real friendships take precedence. They are nothing to worry about.",
  },

  // --- PRESCHOOLER: Bedtime stalling ---
  {
    id: "av-71",
    source: "1-2-3 Magic",
    sourceDetails: "Thomas Phelan — Bedtime stalling (3-5yr)",
    category: "sleep",
    text: "For preschoolers 3-5 years who stall at bedtime ('one more drink,' 'one more story,' 'I need to potty'): This is a classic bid for connection and boundary testing. The 1-2-3 approach: 1) Establish a set bedtime routine (3-4 steps, 20-30 minutes) and post it as pictures. 2) After the routine, say 'Bedtime is done. Goodnight.' 3) Any stall = count. 'That's one.' If they stall again: 'That's two.' At three: a consequence (door closed for 2 minutes, then reopened for a fresh start). 4) Use a 'bedtime pass' — one physical card they can use for one legitimate request. When it's spent, it's gone. 5) Make the routine genuinely connection-filled so they don't need to stall for attention. 6) Ensure daytime includes enough physical activity and one-on-one time. 7) Keep the routine identical every night. Predictability is calming.",
  },

  // --- PRESCHOOLER: Morning dawdling ---
  {
    id: "av-72",
    source: "Triple P",
    sourceDetails: "Triple P — Morning dawdling (3-5yr)",
    category: "routines",
    text: "For preschoolers 3-5 years who dawdle in the morning: Preschoolers have no sense of urgency — adults impose the clock, which conflicts with the child's natural pace. Strategies: 1) Use a visual morning chart (pictures: potty, dressed, breakfast, teeth, shoes, coat, go). Let them check off each step. 2) Build in 'beat the timer' games for each step: 'Can you get dressed before this song ends?' 3) Do as much as possible the night before (clothes laid out, lunch packed, bag ready). 4) Get up 15 minutes earlier than you think you need — rushing creates stress, which creates resistance. 5) Give focused attention before giving directions: a 2-minute cuddle before 'time to get dressed' works wonders. 6) Use playful challenges: 'I bet you can't put your socks on before me!' 7) Praise completion: 'You got ready so fast today — we have time for an extra story!'",
  },

  // --- PRESCHOOLER: Car seat battles ---
  {
    id: "av-73",
    source: "Zero to Three",
    sourceDetails: "Zero to Three — Car seat resistance (3-5yr)",
    category: "behavior",
    text: "For preschoolers 3-5 years who fight the car seat: At this age, they want control over their bodies, and the car seat is a restriction they resent. Strategies: 1) Give age-appropriate control: 'Do you want to climb in yourself or shall I lift you?' 'Which side does the buckle go on first?' 2) Make a car-seat rules chart with pictures and review it before leaving. 3) Use 'first/then': 'First buckles, then we drive to the toy store.' 4) Don't negotiate safety — ever. 'The car doesn't move until everyone is buckled. That's the rule.' Turn off the engine and wait calmly. 5) Play games in the car to make it enjoyable ('I Spy,' audio stories, sing-alongs). 6) Give them a 'job': 'You're in charge of checking that everyone is buckled.' 7. If they arch and scream, wait calmly until they settle. Don't force the buckle during a full meltdown if you can wait — but don't give in and drive without it.",
  },

  // --- PRESCHOOLER: Toy sharing with friends ---
  {
    id: "av-74",
    source: "How to Talk So Kids Will Listen",
    sourceDetails: "Faber & Mazlish — Playdate sharing (3-5yr)",
    category: "social",
    text: "For preschoolers 3-5 years fighting over toys with friends: Playdates are where social skills are built, and conflict is part of the curriculum. Before the playdate: 1) Put away 'special' toys that your child can't bear to share — this is respectful, not selfish. 2) Set up shared activities (blocks, playdough, art supplies) that naturally encourage cooperation over ownership. During conflicts: 3) Don't jump in immediately — give them 30 seconds to work it out. 4) If intervention is needed: 'You both want the truck. Hmm, this is tricky. What can we do?' Let them brainstorm. 5) Offer solutions if they're stuck: timer turns, find a different truck, play something else together. 6) Praise problem-solving: 'You figured out a way to share — that's really thoughtful!' 7) After the playdate, debrief: 'What was fun today? What was hard?' This builds social awareness.",
  },

  // --- PRESCHOOLER: Emotional outbursts ---
  {
    id: "av-75",
    source: "The Whole-Brain Child",
    sourceDetails: "Siegel & Bryson — Preschooler emotional outbursts (3-5yr)",
    category: "emotional",
    text: "For preschoolers 3-5 years having emotional outbursts: Preschoolers have BIG feelings and still-developing regulation skills. The Whole-Brain approach: 1) 'Name it to tame it': Help them label the emotion specifically. Not just 'mad' but 'frustrated,' 'disappointed,' 'embarrassed.' This builds emotional granularity. 2) 'Move it or lose it': Big emotions live in the body. Have them jump, shake, do 'animal walks,' or push against a wall. Physical release helps regulate the nervous system. 3) 'Remember to remember': After the storm passes, help them tell the story of what happened. 'You were really upset because your tower fell. That was so frustrating. Then we took deep breaths together.' Storytelling integrates the experience. 4) Teach breathing: 'Smell the flower, blow out the candle.' 5) Model your own regulation: 'I'm feeling frustrated. I'm going to take three deep breaths.'",
  },

  // --- PRESCHOOLER: Lying to avoid trouble (additional) ---
  {
    id: "av-76",
    source: "NHS Guidance",
    sourceDetails: "NHS — Honesty development (3-5yr)",
    category: "honest",
    text: "For preschoolers 3-5 years who lie to avoid consequences: At this age, lying to avoid trouble is a sign that they understand cause and effect — they know certain actions lead to consequences. It's actually a cognitive milestone. Response: 1) Don't trap them in a lie ('Did you spill this?' when you know they did). Instead, state what you see: 'I see milk on the floor. Let's clean it up together.' 2) Reduce the need to lie: if you respond calmly to mistakes, they're less likely to hide them. 3) When they do tell the truth about a mistake, react positively: 'Thank you for telling me. Let's fix it together.' 4) Avoid asking 'Why did you do that?' — preschoolers often don't know why. Instead: 'What happened?' 5) Read books about honesty (e.g., 'The Boy Who Cried Wolf' adapted for this age). 6. Model admitting your own mistakes: 'I spilled the coffee. I need to clean it up.' They learn by watching you.",
  },

  // --- PRESCHOOLER: Nightmares and night terrors ---
  {
    id: "av-77",
    source: "AAP Sleep",
    sourceDetails: "AAP — Nightmares vs night terrors (3-5yr)",
    category: "sleep",
    text: "For preschoolers 3-5 years having nightmares or night terrors: These are different and need different responses. NIGHTMARES: the child wakes fully, remembers the dream, and is scared. Comfort them, reassure them it was a dream, and help them resettle. Avoid detailed discussion in the night — keep it brief and calming. NIGHT TERRORS: the child appears awake but is actually in deep sleep — eyes open, screaming, sweating, doesn't recognize you. Do NOT wake them. Sit nearby to ensure safety, speak softly, and let it pass (10-30 minutes). They won't remember it in the morning. Night terrors are more common in 3-5 year-olds and are linked to overtiredness. Prevention for both: consistent sleep schedule, adequate total sleep, and a calming bedtime routine. If night terrors are frequent, try 'scheduled awakenings' — wake the child gently 15 minutes before the typical terror time for a week.",
  },

  // --- PRESCHOOLER: Sibling rivalry with new baby (additional) ---
  {
    id: "av-78",
    source: "Siblings Without Rivalry",
    sourceDetails: "Adele Faber — Sibling adjustment (3-5yr)",
    category: "sibling",
    text: "For preschoolers 3-5 years with a new baby sibling: Beyond the initial adjustment, ongoing strategies from Faber's approach: 1) Don't compare: never say 'Why can't you be quiet like the baby?' or 'The baby doesn't throw food.' Comparisons breed resentment. 2) Acknowledge mixed feelings: 'Sometimes you love the baby, and sometimes you wish he'd go away. Both are OK.' 3) Protect the older child's space and possessions — don't let the baby 'take over' everything. 4) Carve out daily one-on-one time — even 10 minutes is enough if it's consistent and child-led. 5) Don't make the baby the reason for limits: not 'Be quiet, the baby's sleeping' but 'It's quiet time now.' 6) Let the preschooler express negative feelings through play, drawing, or stories. 7) Give the older child a role: 'Can you choose the baby's outfit today?' Optional, not forced.",
  },

  // --- PRESCHOOLER: School refusal (additional) ---
  {
    id: "av-79",
    source: "Zero to Three",
    sourceDetails: "Zero to Three — Persistent preschool drop-off difficulty (3-5yr)",
    category: "transition",
    text: "For preschoolers 3-5 years with persistent school drop-off distress (lasting more than 2-3 weeks): 1) Rule out a specific problem — talk to the teacher about bullying, a difficult peer, academic frustration, or sensory overload in the classroom. 2) Check your own anxiety — children absorb parental worry about separation. Project confidence in the school. 3) Create a 'connection object': trace your hand on a piece of paper they keep in their pocket. 'Whenever you feel sad, press the hand and I'll feel it.' 4) Use a visual schedule so they can see the day's sequence and know exactly when pickup happens. 5) Arrange a playdate with a classmate to build a friendship connection at school. 6) Keep your own goodbye consistent and brief. 7) If distress is severe (vomiting, panic, prolonged crying), consult a child psychologist — early intervention prevents school refusal patterns.",
  },

  // --- PRESCHOOLER: Disruptive questioning at inappropriate times ---
  {
    id: "av-80",
    source: "How to Talk So Kids Will Listen",
    sourceDetails: "Faber & Mazlish — Big questions at tough moments (3-5yr)",
    category: "behavior",
    text: "For preschoolers 3-5 years who ask challenging questions at difficult times ('Why does that man have no hair?' in a loud voice): Preschoolers have zero social filter — this is developmental, not rudeness. Response: 1) In the moment, keep it brief and redirect: 'That's an interesting question — let's talk about it later.' 2) Don't shush them with shame ('That's rude!'). They don't understand why yet. 3) Follow up privately: 'Earlier you noticed the man with no hair. Some people lose their hair because of medicine, age, or they just shave it. Isn't it interesting how people look different?' 4) Teach the 'wonder box': 'You have lots of great questions. Let's save that one for the car ride home.' 5) Model noticing without judging — instead of 'That lady is very tall,' say 'I see someone tall.' Neutral language teaches the child to observe without evaluating. 6. By age 5-6, social filtering develops naturally.",
  },

  // --- PRESCHOOLER: Boundary testing with different caregivers ---
  {
    id: "av-81",
    source: "Triple P",
    sourceDetails: "Triple P — Consistency across caregivers (3-5yr)",
    category: "co-parent",
    text: "For preschoolers 3-5 years who test different boundaries with different caregivers: Preschoolers are brilliant detectives — they quickly learn which parent says yes to what. Strategies for consistency: 1) Hold a 'parent summit' — agree on 3-5 core rules and the consequences for breaking them. Write them down. 2) Support each other in the moment. If your partner said no and the child comes to you, say 'Dad/Mom said no, and I agree.' Don't undermine. 3) If you disagree with your partner's decision, discuss it privately, not in front of the child. 4) Be honest if you don't know: 'Let me check with Mom/Dad.' 5) Expect the child to try to divide and conquer — this is normal, not manipulative. Consistency over time teaches them it doesn't work. 6) If co-parenting across households, aim for core rule consistency even if details differ. The child adapts to each home's rules if both are consistent within themselves.",
  },

  // --- PRESCHOOLER: Sensory-based picky eating ---
  {
    id: "av-82",
    source: "The Sensory Sensitive Child",
    sourceDetails: "Karen Smith — Sensory food selectivity (3-5yr)",
    category: "eating",
    text: "For preschoolers 3-5 years with extreme food selectivity (eating fewer than 10 foods): This may indicate sensory processing differences rather than typical picky eating. Signs of sensory-based food avoidance: gagging at food smells, refusing entire food groups by texture, distress when foods touch, insistence on specific brands/packaging. Strategies: 1) Don't pressure or sneak foods — this breaks trust. 2) Build a 'food hierarchy': list accepted foods and slowly introduce foods with similar properties (if they eat chicken nuggets, try homemade breaded fish). 3) Use food chaining: if they eat plain pasta, add butter, then a mild sauce, then small pieces of cheese. One small change at a time. 4) Food play outside mealtimes: paint with yogurt, sort pasta shapes, cook together without pressure to eat. 5) Consult a pediatric OT for a feeding evaluation if selectivity limits nutrition or causes mealtime distress. Early sensory support is highly effective.",
  },

  // --- PRESCHOOLER: Screen time negotiation (additional) ---
  {
    id: "av-83",
    source: "AAP Media Guidelines",
    sourceDetails: "AAP — Screen time rules for preschoolers (3-5yr)",
    category: "screen",
    text: "For preschoolers 3-5 years, establishing healthy screen habits: AAP recommends max 1 hour/day of high-quality, age-appropriate content, co-viewed with an adult. Practical implementation: 1) Choose educational, calm content (e.g., Sesame Street, Daniel Tiger) over fast-paced, stimulating shows. Avoid content with rapid scene changes, which overstimulate young brains. 2) No screens during meals, in the car (except long trips), or within 1 hour of bedtime. 3) Use screen time intentionally — not as background. Turn off when the show is over. 4) Talk about what you watch: 'How did Daniel Tiger feel when he was scared? What did he do?' This builds emotional literacy. 5) Create a 'screen time' visual schedule so the child knows when to expect it and when it ends. 6. Model healthy phone use — your preschooler notices if you're always on your phone. 7. Create tech-free zones and times for the whole family.",
  },

  // --- PRESCHOOLER: Hitting when frustrated (additional) ---
  {
    id: "av-84",
    source: "No-Drama Discipline",
    sourceDetails: "Siegel & Bryson — Hitting at preschool (3-5yr)",
    category: "anger",
    text: "For preschoolers 3-5 years hitting peers at preschool: This is common in the 3-4 year-old range as social demands outpace impulse control. Response: 1) Work with the teacher on a consistent plan across home and school. 2) Teach the 'stop and think' routine: when they feel mad, hands go on their head and they take a breath. Practice this when calm so it becomes automatic. 3) Role-play scenarios at home: 'Oh no, someone took your toy! What can you do instead of hitting?' Practice saying 'Stop!' with a strong voice, coming to get a teacher, or finding a different toy. 4) Read books about managing anger (e.g., 'Hands Are Not for Hitting'). 5) Ensure adequate sleep and regular meals — tired/hungry preschoolers hit more. 6) Give extra attention on high-hitting days — sometimes hitting is a bid for connection. 7) Track patterns: time of day, antecedents, peers involved. This data guides intervention.",
  },

  // --- PRESCHOOLER: Separation anxiety recurring (additional) ---
  {
    id: "av-85",
    source: "Touchpoints",
    sourceDetails: "T. Berry Brazelton — Recurring separation anxiety (3-5yr)",
    category: "fears",
    text: "For preschoolers 3-5 years with recurring separation anxiety (regression after being fine at school): Regression is normal and often triggered by: illness, a move, a new sibling, family stress, or even a growth spurt. When a previously settled child suddenly clings at drop-off: 1) Don't overreact or show alarm — this signals to the child that something is wrong. 2) Return to the basics of your original goodbye routine. 3) Acknowledge it: 'You're feeling a bit worried today. That's OK. I'll be back after story time.' 4) Talk to the teacher to see if something happened at school. 5) Check for life changes or stressors at home that might be causing it. 6) Give extra connection time before school and at pickup. 7) Usually passes within 1-2 weeks with consistent reassurance. If it persists beyond 3 weeks or includes panic symptoms, consult your pediatrician.",
  },

  // --- PRESCHOOLER: Perfectionism emerging ---
  {
    id: "av-86",
    source: "Mindset",
    sourceDetails: "Carol Dweck — Preschooler perfectionism (3-5yr)",
    category: "confidence",
    text: "For preschoolers 3-5 years showing early perfectionism ('It's not right!' 'Do it for me!' meltdowns over mistakes): This age is when fixed-mindset thinking can take root. Strategies: 1) Praise EFFORT and STRATEGY, not the outcome: instead of 'You're so smart!' say 'You worked really hard on that drawing!' or 'I love how you tried different ways to build that tower.' 2) Model making mistakes: 'Oh no, I messed up the recipe! Oh well, let's figure out how to fix it.' Make mistakes normal. 3) Add the word 'yet': 'You can't do it... yet. Let's practice together.' 4) Don't immediately fix things for them — guide them to problem-solve. 5) Celebrate failures: 'That didn't work — what did we learn?' 6) Avoid perfectionist language yourself ('It has to be perfect'). 7) Focus on the process: 'I loved watching you concentrate on that puzzle.' Growth mindset planted at this age bears fruit for life.",
  },

  // --- PRESCHOOLER: Morning routine independence (additional) ---
  {
    id: "av-87",
    source: "Triple P",
    sourceDetails: "Triple P — Building morning independence (3-5yr)",
    category: "routines",
    text: "For preschoolers 3-5 years developing morning independence: Preschoolers are capable of more than we often expect, and building independence now pays off for years. Skills to develop: 1) Dressing independently (lay clothes out the night before, initially choose between 2 outfits). 2) Brushing teeth (parent does a 'check' after). 3) Putting on shoes (Velcro is your friend at this age). 4) Packing their bag (use a picture checklist). 5) Making simple breakfast choices (between two cereals). Teach these one at a time over weeks, not all at once. Use backward chaining: do all but the last step, then let them finish. Gradually hand over more steps. Praise effort and specific improvements: 'You put your socks on all by yourself — amazing!' Expect imperfection — a backward shirt is a win if they did it themselves.",
  },

  // --- PRESCHOOLER: Big transitions (moving, starting school) ---
  {
    id: "av-88",
    source: "Touchpoints",
    sourceDetails: "T. Berry Brazelton — Big life transitions (3-5yr)",
    category: "transition",
    text: "For preschoolers 3-5 years going through major transitions (moving house, starting school, parental separation): Preschoolers process big changes through behavior, not words. Expect regression (sleep, potty, separation), increased clinginess, and behavioral changes for 4-8 weeks. Strategies: 1) Maintain as many routines as possible — familiar rhythms provide an anchor during chaos. 2) Acknowledge the change: 'This is a big change for our family. It's OK to feel sad/mad/confused.' 3) Use simple, concrete explanations — avoid abstract concepts. 'We're moving to a new house. Your toys are coming too.' 4) Let them make small decisions (which toys to pack first, which color for their new room). 5) Read books about the transition. 6) Expect setbacks even after things seem settled — grief comes in waves. 7) Don't introduce other changes (potty training, new bed) during a major transition. 8) Seek extra support (preschool teacher, counselor) if regression lasts beyond 2 months.",
  },

  // --- PRESCHOOLER: Building friendships (additional) ---
  {
    id: "av-89",
    source: "How to Talk So Kids Will Listen",
    sourceDetails: "Faber & Mazlish — Friendship skills (3-5yr)",
    category: "social",
    text: "For preschoolers 3-5 years learning to make and keep friends: Friendship skills at this age are primitive but foundational. Teach: 1) How to join play: 'Can I play?' or simply starting to play nearby (parallel play often leads to cooperative play). 2) How to invite: 'Do you want to build with me?' 3) How to take turns: use the timer or 'my turn/your turn' language. 4) How to express feelings: 'I don't like that' instead of hitting. 5) How to apologize: 'I'm sorry I knocked your tower' — model this language at home. 6) How to accept differences: 'Some kids like different games, and that's OK.' 7) Arrange regular playdates with 1-2 children — large groups are overwhelming at this age. 8) If your child is consistently rejected or excluded, talk to the preschool teacher — they can facilitate connections and observe dynamics.",
  },

  // --- PRESCHOOLER: Emotional regulation during illness ---
  {
    id: "av-90",
    source: "NHS Guidance",
    sourceDetails: "NHS — Managing sick-child emotions (3-5yr)",
    category: "emotional",
    text: "For preschoolers 3-5 years who are sick and emotionally dysregulated: Illness reduces a child's already limited capacity for self-regulation. Expect regression, clinginess, and meltdowns when sick. Strategies: 1) Lower all expectations — academic worksheets, perfect manners, and clean rooms can wait. 2) Offer extra physical comfort (cuddling, back rubs, sleeping nearby if comforting). 3) Use 'sick day' as a special quiet time: movies, books, soup, calm activities. 4) Don't worry about screen time rules during acute illness — flexibility is healthy. 5) Give medicine with honesty: 'This medicine will help you feel better. It might taste yucky. You can have a juice chaser.' Don't lie about taste. 6) Explain what's happening: 'Your body is fighting germs. That's why you feel hot and tired. Your body is working hard.' 7) Call your doctor if: high fever (39°C+), lethargy, breathing difficulty, or symptoms lasting beyond expected duration.",
  },

  // === SCHOOL-AGE (6-11 years) ===

  // --- SCHOOL-AGE: Homework battles ---
  {
    id: "av-91",
    source: "The Gift of Failure",
    sourceDetails: "Jessica Lahey — Homework autonomy (6-11yr)",
    category: "school",
    text: "For school-age children 6-11 years fighting over homework: The goal is to build independent work habits, not to micromanage every assignment. Strategies: 1) Set up a designated homework space (well-lit, stocked with supplies, away from screens and noise). 2) Establish a consistent homework time — after a snack and brief break, before screens. 3) Use a timer: 15-20 minutes of focused work, then a 5-minute break (Pomodoro method). 4) Let them struggle — don't immediately rescue. Ask guiding questions: 'What have you tried?' 'Where could you find the answer?' 5) If genuinely stuck, help them formulate a question for the teacher — this builds self-advocacy. 6) Praise effort and persistence, not grades or being 'smart.' 7) If homework regularly takes longer than 10 minutes per grade level (10 min for grade 1, 50 for grade 5), talk to the teacher. 8) Your job is consultant, not manager. Step back gradually.",
  },

  // --- SCHOOL-AGE: Friendship drama ---
  {
    id: "av-92",
    source: "Queen Bees and Wannabes",
    sourceDetails: "Rosalind Wiseman — School-age friendship drama (6-11yr)",
    category: "social",
    text: "For school-age children 6-11 years dealing with friendship drama: School-age friendships are intense and volatile — this is normal social learning. When your child comes home upset about a friend: 1) Listen first without fixing. 'That sounds really hard. Tell me more.' 2) Don't call the other parent (yet). Let your child try to handle it first. 3) Help them distinguish between a bad day and a pattern. One argument = normal; ongoing exclusion or meanness = needs adult help. 4) Role-play responses: 'What could you say if she says that again?' Practice specific scripts. 5) Avoid demonizing the other child — children's friendships shift constantly, and today's enemy is tomorrow's best friend. 6) If your child is consistently excluded or bullied, contact the school. 7) Build confidence outside the friendship (activities, hobbies, family time). 8) Teach the difference between assertive ('I don't like that') and aggressive ('You're mean').",
  },

  // --- SCHOOL-AGE: Lying about school ---
  {
    id: "av-93",
    source: "How to Talk So Kids Will Listen",
    sourceDetails: "Faber & Mazlish — Honesty about school (6-11yr)",
    category: "honest",
    text: "For school-age children 6-11 years lying about schoolwork or grades: Lying at this age usually stems from fear of disappointing parents or avoiding punishment. Response: 1) Examine your reaction — if you blow up at bad news, your child will hide it. Create a 'no-yelling zone' for discussing school. 2) When you discover a lie, stay calm: 'I see your planner shows missing assignments. Let's talk about what's going on.' 3) Focus on the problem, not the lie: 'It seems like math is hard right now. How can I help?' 4) Share your own mistakes: 'When I was your age, I once didn't turn in a project. I was so scared. Here's what I learned.' 5) Praise honesty: 'I know it was hard to tell me you failed the test. Thank you for being honest. Now we can figure out what to do.' 6) Reduce the pressure — if your child feels their worth is tied to grades, they'll lie to protect it. 7) If lying is chronic, consider whether there's an underlying issue (ADHD, learning disability, anxiety).",
  },

  // --- SCHOOL-AGE: Screen negotiation ---
  {
    id: "av-94",
    source: "AAP Media Guidelines",
    sourceDetails: "AAP — Screen time for school-age children (6-11yr)",
    category: "screen",
    text: "For school-age children 6-11 years negotiating screen time: At this age, children lobby hard for devices and games. Establish clear family policies: 1) Create a written family media plan (AAP has a template at HealthyChildren.org). Include: daily limits, device-free times (meals, before school, bedtime), and content rules. 2) Involve the child in creating the plan — they're more likely to follow rules they helped make. 3) No screens in bedrooms — charge devices in a common area overnight. 4) Homework first, then screens. 5) Require physical activity and chores before screen time. 6) Play their games with them sometimes — understanding their digital world builds connection. 7) Teach digital citizenship: online safety, cyberbullying, critical thinking about content. 8) Model your own healthy phone habits — children notice hypocrisy. Consistency is more effective than occasional crackdowns.",
  },

  // --- SCHOOL-AGE: Bullying ---
  {
    id: "av-95",
    source: "CDC Bullying Prevention",
    sourceDetails: "CDC — Bullying response for school-age (6-11yr)",
    category: "school",
    text: "For school-age children 6-11 years experiencing bullying: Bullying is repeated, intentional harm involving a power imbalance. If your child is being bullied: 1) Listen and validate: 'That's not OK. You don't deserve that. I'm going to help.' 2) Don't blame: avoid 'What did you do to provoke them?' or 'Just ignore them.' 3) Document specifics: who, what, when, where. 4) Contact the teacher and school administration — in writing. Request a meeting and ask for the school's anti-bullying policy. 5) Help your child build a friend group — even one close friend significantly reduces bullying's impact. 6) Teach assertive responses: strong posture, direct eye contact, 'Stop' in a firm voice. 7) If the bullying involves physical threats or cyberbullying, escalate to the school board or police if needed. 8) Watch for signs of impact: school refusal, sleep changes, stomachaches, mood drops. If you see these, consult a child therapist.",
  },

  // --- SCHOOL-AGE: Test anxiety ---
  {
    id: "av-96",
    source: "Mindset",
    sourceDetails: "Carol Dweck — Test anxiety (6-11yr)",
    category: "emotional",
    text: "For school-age children 6-11 years with test anxiety: Test anxiety often reflects a fixed mindset — the child believes a test measures their worth, not their current skill level. Strategies: 1) Reframe tests: 'A test is just information about what you know right now. It doesn't measure how smart you are.' 2) Praise the process: 'I'm proud of how hard you studied' not 'I'm proud you got an A.' 3) Teach test-prep strategies: practice tests, spaced repetition, breaking material into chunks. Confidence comes from preparation. 4) Teach relaxation techniques: box breathing (in 4, hold 4, out 4, hold 4), positive self-talk ('I've practiced this'). 5) Ensure adequate sleep the night before and a good breakfast. 6) Don't add pressure: avoid 'I know you can do better than last time.' Instead: 'You've worked hard. Just do your best.' 7) If anxiety includes physical symptoms (nausea, panic attacks), consult the school about accommodations (extra time, quiet room).",
  },

  // --- SCHOOL-AGE: Sibling fights ---
  {
    id: "av-97",
    source: "Siblings Without Rivalry",
    sourceDetails: "Adele Faber — School-age sibling fights (6-11yr)",
    category: "sibling",
    text: "For school-age children 6-11 years fighting with siblings constantly: At this age, children are more verbal but also more strategic in their conflicts. Strategies from Faber: 1) Don't compare: 'Why can't you get ready as fast as your sister?' breeds lifelong resentment. 2) Don't take sides: 'I don't know who started it. I know how it ends — no one plays until it's resolved.' 3) Put them in the same boat: 'You both need to clean this up. Figure out how to divide it.' 4) Acknowledge both perspectives privately: 'You feel she always gets her way. And she feels you boss her around.' 5) Teach conflict resolution: 'Use I-statements. Tell her how you feel, not what she did wrong.' 6. Create one-on-one time with each child — rivalry often reflects competition for attention. 7) Don't force 'say sorry' — have them state what they'll do differently. 8) Separate them when things escalate: 'You both need a break in separate rooms.'",
  },

  // --- SCHOOL-AGE: Talking back ---
  {
    id: "av-98",
    source: "1-2-3 Magic",
    sourceDetails: "Thomas Phelan — Talking back (6-11yr)",
    category: "behavior",
    text: "For school-age children 6-11 years who talk back or roll eyes: Backtalk is a child testing boundaries and expressing frustration, often in the only way they know how in the moment. Response: 1) Don't take it personally — it's not about you, it's about their big feelings. 2) Don't engage in a power struggle. Stay calm: 'I can see you're upset. I'm going to step away and we'll talk when we're both calm.' 3) Use counting for stop behaviors: backtalk = 'That's one.' 4) When calm, address it: 'When you spoke to me that way, it was disrespectful. In this family, we speak respectfully to each other.' 5) Model respectful disagreement: 'I disagree with that, and here's why' instead of 'That's ridiculous.' 6) Look underneath the backtalk — is it hunger? Fatigue? School stress? Social problems? 7) Praise respectful communication: 'I really appreciate how you told me you were frustrated without yelling.' 8) If backtalk includes profanity or threats, set an immediate firm boundary.",
  },

  // --- SCHOOL-AGE: Chores resistance ---
  {
    id: "av-99",
    source: "Triple P",
    sourceDetails: "Triple P — Chores for school-age (6-11yr)",
    category: "routines",
    text: "For school-age children 6-11 years who resist chores: Chores build responsibility, competence, and family contribution. Implementation: 1) Start with age-appropriate tasks: 6-7 year-olds can set the table, feed pets, put away laundry. 8-9 year-olds can load dishwasher, sweep, pack lunch. 10-11 year-olds can do laundry, clean bathroom, simple cooking. 2) Use a visual chore chart and rotate tasks weekly. 3) Give clear instructions: 'Your job is to put all clean clothes in your drawers before dinner.' 4) Connect to family functioning: 'When everyone helps, we all have more time for fun.' 5) Consider an allowance tied to chores (some experts prefer allowance as separate from chores — family contribution is expected, allowance teaches money skills). 6) Don't redo their work — accept imperfect effort. 7) Use 'when/then': 'When chores are done, then screen time.' 8) Praise effort, not just completion: 'You really scrubbed that table — thank you.'",
  },

  // --- SCHOOL-AGE: Body image ---
  {
    id: "av-100",
    source: "Daring Greatly",
    sourceDetails: "Brené Brown — Body image in school-age children (6-11yr)",
    category: "confidence",
    text: "For school-age children 6-11 years developing body image concerns: Body dissatisfaction can start as early as 6-7. Prevention strategies: 1) Never comment on your child's body size, even positively ('You're so skinny!' is not a compliment — it ties worth to appearance). Focus on what their body can DO: 'Your legs are so strong on the soccer field!' 2) Don't comment on your own body negatively ('I look fat in this'). Children absorb this. 3) Avoid labeling foods as 'good' or 'bad' — use 'sometimes foods' and 'everyday foods.' 4) Discuss media literacy: 'That photo has been edited. Nobody looks like that naturally.' 5) If your child says they're 'fat,' explore: 'What made you think that? Who said something?' Don't dismiss it — understand it. 6. Promote activities that feel good, not just look good. 7. If body image concerns are affecting eating, mood, or social life, consult a professional — early eating disorder intervention is critical.",
  },

  // --- SCHOOL-AGE: Sports pressure ---
  {
    id: "av-101",
    source: "The Gift of Failure",
    sourceDetails: "Jessica Lahey — Sports and pressure (6-11yr)",
    category: "confidence",
    text: "For school-age children 6-11 years feeling pressure in sports: Sports should build confidence, character, and physical health — not anxiety. Signs of unhealthy pressure: the child dreads practices/games, complains of physical symptoms (stomachaches before games), says they 'don't want to play anymore,' or the parent is more emotionally invested than the child. Response: 1) Ask: 'Are you having fun? That's the most important thing.' 2) Separate your dreams from theirs — if they play for your approval, resentment builds. 3) On the car ride home, say only: 'I loved watching you play.' Nothing else. No critique. 4) Let them quit at the end of a season (not mid-season — teaches commitment) if they truly don't enjoy it. 5) Encourage unstructured physical play alongside organized sports. 6) Model good sportsmanship from the sidelines — don't coach from the stands. 7) If a coach is verbally abusive or belittling, advocate for your child. 8) Remember: 70% of children quit organized sports by age 13 — prioritize enjoyment over achievement.",
  },

  // --- SCHOOL-AGE: Perfectionism ---
  {
    id: "av-102",
    source: "Mindset",
    sourceDetails: "Carol Dweck — School-age perfectionism (6-11yr)",
    category: "emotional",
    text: "For school-age children 6-11 years who are perfectionists: Perfectionism in school-age children often looks like: erasing holes in homework, refusing to try new things, meltdowns over minor mistakes, procrastination (because if you don't start, you can't fail). Root causes include fear of disappointing parents, a fixed mindset ('If I'm not perfect, I'm not smart'), or modeling perfectionist parents. Strategies: 1) Share the growth mindset: 'Your brain grows when you make mistakes and learn from them. Mistakes are brain food.' 2) Tell stories of famous failures (Michael Jordan was cut from his high school team; J.K. Rowling was rejected by 12 publishers). 3) Set 'good enough' benchmarks for tasks. Not everything needs to be perfect. 4) Model making mistakes and recovering gracefully. 5) Praise the process: effort, strategy, and improvement. 6) Reduce pressure: 'I love you no matter what grade you get.' 7) If perfectionism causes significant anxiety, consider therapy — it's easier to address at 8 than at 18.",
  },

  // --- SCHOOL-AGE: Screen addiction signs ---
  {
    id: "av-103",
    source: "AAP Media Guidelines",
    sourceDetails: "AAP — Problematic screen use (6-11yr)",
    category: "screen",
    text: "For school-age children 6-11 years showing signs of screen addiction: Warning signs: withdrawal symptoms when screens are removed (rage, tears, physical aggression), losing interest in all non-screen activities, lying about screen use, declining grades, sleep disruption, and choosing screens over friends. Response: 1) Don't go cold turkey — this causes extreme distress and rarely works. Gradually reduce screen time over weeks. 2) Replace screen time with engaging alternatives — you can't just remove a habit; you must fill the gap. Sports, art, cooking, board games, outdoor adventures. 3) Create a 'screen detox' weekend: no screens for 2 days, with planned fun activities. Notice mood changes together. 4. Set firm boundaries: no screens before school, during meals, or in bedrooms. 5) Use parental controls to enforce limits. 6) Have open conversations: 'What do you love about this game? What do you feel like when you have to stop?' 7) If screen use is truly addictive (interfering with basic functioning), consult a child psychologist. Internet gaming disorder is now a recognized condition.",
  },

  // --- SCHOOL-AGE: Sleep resistance ---
  {
    id: "av-104",
    source: "AAP Healthy Sleep",
    sourceDetails: "AAP — Sleep needs for school-age (6-11yr)",
    category: "sleep",
    text: "For school-age children 6-11 years resisting bedtime: School-age children need 9-12 hours of sleep. Sleep deprivation symptoms: morning crankiness, teachers reporting inattention, falling asleep in the car, weekend catch-up sleeping. Common causes of resistance: FOMO (fear of missing out), screens suppressing melatonin, over-scheduling, or anxiety (racing thoughts at night). Strategies: 1) Set a consistent bedtime 10-11 hours before wake time. 2) Screens off 1-2 hours before bed — blue light delays melatonin by 30-60 minutes. 3) Create a wind-down routine: bath, reading, quiet talk. 4) Address anxiety: 'What's on your mind?' Keep a worry journal where they write or draw concerns before bed. 5) Avoid caffeine (sodas, chocolate, tea) after 3 PM. 6) Use a tot clock or alarm that signals when it's OK to get up. 7) Ensure physical activity during the day — but not within 2 hours of bedtime.",
  },

  // --- SCHOOL-AGE: Food preferences and independence ---
  {
    id: "av-105",
    source: "Child of Mine",
    sourceDetails: "Ellyn Satter — School-age eating (6-11yr)",
    category: "eating",
    text: "For school-age children 6-11 years with strong food preferences: School-age children have more control over their eating — school lunches, friends' houses, allowance spending. The Division of Responsibility evolves: parents still decide family meal content, but the child navigates more choices independently. Strategies: 1) Teach nutrition simply: 'Food gives us energy and helps us grow. Different foods do different jobs.' Avoid moralizing food. 2) Involve them in meal planning: 'Pick one dinner for this week.' Take them grocery shopping. 3) Teach basic cooking skills: by 8-9, they can make simple meals (scrambled eggs, pasta, sandwiches). This builds food confidence. 4) Don't police school lunch — let them choose. If they come home hungry, provide a healthy snack. 5. Talk about media and food: 'Ads make junk food look amazing, but your body feels better when you eat well.' 6) Model balanced eating without restriction or bingeing. 7) Watch for signs of disordered eating — extreme restriction, food hiding, excessive concern about calories.",
  },

  // --- SCHOOL-AGE: Homework battles (additional) ---
  {
    id: "av-106",
    source: "The Gift of Failure",
    sourceDetails: "Jessica Lahey — Over-involved parenting at homework (6-11yr)",
    text: "For school-age children 6-11 years whose parents over-help with homework: If you're checking every answer, redoing their work, or doing their projects, you're teaching helplessness. Your child's teacher needs to see what the CHILD can do, not what the parent can produce. Letting children turn in imperfect work is painful but necessary. The teacher can only help if they see where the child actually is. Strategies: 1) Set a timer for how long you'll help (10 minutes max). After that, they're on their own. 2) Resist the urge to 'fix' mistakes — circle them and say 'Take another look at number 3.' 3) When they get a poor grade, ask: 'What could you do differently next time?' Don't rescue. 4) Let natural consequences teach: a zero on a missing assignment is more instructive than a parent rescuing the grade. 5) Your child's self-worth should not depend on grades — make sure they know this. Competence comes from doing, not from being done-for.",
    category: "school",
  },

  // --- SCHOOL-AGE: Social exclusion at school ---
  {
    id: "av-107",
    source: "Queen Bees and Wannabes",
    sourceDetails: "Rosalind Wiseman — Social exclusion (6-11yr)",
    category: "social",
    text: "For school-age children 6-11 years experiencing social exclusion: Social exclusion ('no one will play with me,' 'they said I can't sit with them') is painful and common at this age. Response: 1) Validate the pain: 'That sounds heartbreaking. I'm so sorry that happened.' Don't minimize with 'They're just jealous.' 2) Get specifics: Is it one child or a whole group? Is it every day or occasionally? Patterns matter. 3) Teach ' acquaintance vs friend' distinction: 'Not everyone will be your friend, but you can be polite to acquaintances. Focus your energy on finding YOUR people.' 4) Encourage multiple friend groups (sports, neighbors, cousins, clubs) so one group's exclusion doesn't devastate. 5) Role-play joining a game or conversation: 'Can I join?' or simply starting to play alongside. 6) If exclusion is systematic (based on race, disability, religion), involve the school immediately. 7) Build confidence through competence: activities where they feel capable are the best antidote to social pain.",
  },

  // --- SCHOOL-AGE: Digital honesty ---
  {
    id: "av-108",
    source: "AAP Media Guidelines",
    sourceDetails: "AAP — Digital honesty and safety (6-11yr)",
    category: "honest",
    text: "For school-age children 6-11 years hiding digital activity: Children may hide browser history, create secret accounts, or lie about who they're talking to online. Response: 1) Establish that device use is a privilege, not a right, and that parents have the right to check devices until they're mature enough for full privacy (typically 14-16). 2) Be transparent: 'I'm not spying on you. I'm checking that you're safe, the same way I check who's at the door.' 3) Use parental controls openly, not secretly — explain: 'These are training wheels for digital life.' 4) Teach: personal information (full name, address, school) is never shared online. Ever. 5) Discuss grooming and online predators in age-appropriate terms: 'If anyone online asks you to keep a secret from me, tell me immediately. That's a red flag.' 6) Create a 'no-trouble' policy: 'If something online makes you uncomfortable, tell me and you will NEVER be in trouble.' 7. Keep devices in common areas. No screens in bedrooms.",
  },

  // --- SCHOOL-AGE: Video game limits ---
  {
    id: "av-109",
    source: "AAP Media Guidelines",
    sourceDetails: "AAP — Video game management (6-11yr)",
    category: "screen",
    text: "For school-age children 6-11 years who obsess over video games: Video games are designed to be highly engaging with reward loops, leveling systems, and social features. Managing them: 1) Set daily limits before the game starts (30-60 minutes on school days, longer on weekends). Use a timer that the child can see. 2) Give 10-minute and 2-minute warnings before time is up — pulling the plug mid-level causes rage. 3) Don't use video game time as the ONLY reward/punishment — this makes games more valuable. 4) Know what games they're playing — play together sometimes. Check ESRB ratings. 5) Online gaming with voice chat needs supervision — teach them to report/block toxic players and tell you about inappropriate behavior. 6) Ensure games don't replace physical activity, face-to-face socializing, or sleep. 7) If the child can't transition off games without meltdowns, the games may need a temporary break entirely. 8) Keep consoles in common areas, not bedrooms.",
  },

  // --- SCHOOL-AGE: Cyberbullying ---
  {
    id: "av-110",
    source: "CDC Bullying Prevention",
    sourceDetails: "CDC — Cyberbullying response (6-11yr)",
    category: "social",
    text: "For school-age children 6-11 years experiencing cyberbullying: Cyberbullying is particularly painful because it's 24/7, public, and permanent. Response: 1) Do NOT respond to the bully online — this fuels them. 2) Screenshot and document everything. 3) Block the bully on all platforms. 4) Report to the school — most schools have anti-cyberbullying policies, even for off-campus incidents that affect school. 5) Report to the platform (most have reporting tools). 6) If threats of violence, report to police. 7) Support your child: 'This is not your fault. The person doing this is wrong.' 8) Consider a temporary digital detox while things settle. 9) Monitor for signs of depression, self-harm, or school refusal — cyberbullying victims are at higher risk. 10) Advocate for digital citizenship education at your child's school. Prevention is the best intervention.",
  },

  // --- SCHOOL-AGE: Test anxiety (additional) ---
  {
    id: "av-111",
    source: "NHS Guidance",
    sourceDetails: "NHS — Managing school stress (6-11yr)",
    category: "emotional",
    text: "For school-age children 6-11 years showing physical symptoms of school stress: Stress in school-age children often manifests physically — frequent stomachaches, headaches, or nausea with no medical cause, especially on school mornings. Response: 1) First, rule out medical issues with your pediatrician. Don't assume it's 'just anxiety.' 2) Once medical causes are ruled out, treat it as communication: 'Your body is telling me you're worried about something. What's going on at school?' 3) Don't let them stay home without a plan — prolonged avoidance makes anxiety worse. Work with the school on a gradual return plan if needed. 4) Teach somatic regulation: 'Let's try squeezing your fists tight, then letting them go floppy.' Progressive muscle relaxation for kids. 5) Address the root: is it tests? A bully? Learning difficulty? Friendship problem? 6) Build in daily decompression time — unstructured play, physical activity, or quiet reading after school. 7. If symptoms persist, request a school evaluation for potential learning disabilities or anxiety disorders.",
  },

  // --- SCHOOL-AGE: Sibling physical fighting ---
  {
    id: "av-112",
    source: "Siblings Without Rivalry",
    sourceDetails: "Adele Faber — Physical sibling fights (6-11yr)",
    category: "sibling",
    text: "For school-age children 6-11 years whose sibling fights become physical: Physical fighting requires immediate, consistent intervention. Response: 1) Safety first: separate them immediately and firmly. 'No hitting in this house. Separate now.' 2) Don't ask who started it — both are responsible for the escalation. 'I don't care who started it. You both need to calm down.' 3) After 10-15 minutes of cooling off, bring them together: 'What happened, and what can you each do differently next time?' 4) If one is consistently the aggressor, they need more supervision and possibly individual support. 5) Teach conflict de-escalation: 'When you feel like hitting, leave the room and come get me.' 6) Ensure personal space — children need their own space (even a designated corner) where siblings can't touch their things. 7) Family meetings to address recurring patterns: 'The fighting between you two is hurting the whole family. What rules do we need?' 8) Model conflict resolution in your own relationships.",
  },

  // --- SCHOOL-AGE: Disrespectful communication (additional) ---
  {
    id: "av-113",
    source: "How to Talk So Kids Will Listen",
    sourceDetails: "Faber & Mazlish — Teaching respectful disagreement (6-11yr)",
    category: "behavior",
    text: "For school-age children 6-11 years who communicate disrespectfully: Children learn respectful communication by being spoken to respectfully. If you yell, they yell. If you use sarcasm, they use sarcasm. Strategies: 1) When they're rude, respond with respect: 'I want to hear what you're saying, but I can't listen when you use that tone. Let's try again.' 2) Teach the respectful version: instead of 'You're so unfair!' coach them to say 'I disagree with this rule and I'd like to explain why.' 3) Allow disagreement — a child who's allowed to say 'I think you're wrong' (respectfully) learns that authority figures can be questioned, which is an important life skill. 4) Hold family meetings where everyone, including children, can raise issues and be heard. 5) Apologize when YOU communicate poorly: 'I shouldn't have yelled. I was frustrated, but that's no excuse. I'm sorry.' This models accountability.",
  },

  // --- SCHOOL-AGE: Chore system design (additional) ---
  {
    id: "av-114",
    source: "Triple P",
    sourceDetails: "Triple P — Allowance and chores (6-11yr)",
    category: "routines",
    text: "For school-age children 6-11 years, designing an effective chore and allowance system: Two camps exist: chores-as-family-contribution (no pay) and chores-for-allowance. Research supports a hybrid: 1) Basic contributions (making bed, putting away laundry) are expected as family members — no pay. 2) Extra jobs (washing the car, mowing lawn, cleaning garage) can earn money. This teaches both responsibility and financial literacy. Guidelines: 3) Set a weekly allowance of roughly $1 per year of age. 4) Pay consistently on the same day. 5) Let them make spending mistakes — buying something impulsively and regretting it is a valuable lesson. 6) Introduce the 3-jar system: Save, Spend, Give. 7) Don't dock allowance for not doing basic chores — use natural consequences instead ('Your laundry wasn't in the basket, so it didn't get washed'). 8) Review and upgrade the system each birthday.",
  },

  // --- SCHOOL-AGE: Healthy body image (additional) ---
  {
    id: "av-115",
    source: "NHS Guidance",
    sourceDetails: "NHS — Body confidence for school-age (6-11yr)",
    category: "confidence",
    text: "For school-age children 6-11 years, proactively building body confidence: Body image develops early and is influenced by family, peers, and media. Proactive strategies: 1) Focus on health behaviors, not appearance: 'Let's go for a walk because moving our bodies feels good' not 'Let's exercise to stay thin.' 2) Compliment character and actions, not looks: 'You were so kind to share with your friend' instead of 'You look pretty today.' 3) Eat meals together as a family — research shows family meals protect against disordered eating. 4) Serve family-style meals where everyone (including parents) eats the same food — no 'diet' plates for Mom and 'regular' food for kids. 5) Watch for peers or relatives who make body comments and redirect: 'In our family, we don't comment on people's bodies.' 6) Teach media literacy early: 'That influencer's photo has been filtered and edited.' 7) If you struggled with body image, break the cycle — get support for yourself.",
  },

  // --- SCHOOL-AGE: Academic burnout prevention ---
  {
    id: "av-116",
    source: "The Gift of Failure",
    sourceDetails: "Jessica Lahey — Academic pressure management (6-11yr)",
    category: "school",
    text: "For school-age children 6-11 years showing signs of academic burnout: Burnout in children looks like: loss of interest in learning, chronic fatigue, irritability about school, physical symptoms (headaches, stomachaches), and declining performance despite effort. Causes: over-scheduling, excessive homework, parental pressure, perfectionism, or lack of downtime. Response: 1) Audit the child's schedule — they need at least 1 hour of unstructured downtime daily. 2) Reduce extracurriculars to 1-2 activities they genuinely enjoy. 3) Examine your messaging: are you praising grades or effort? 4) Ensure 9-11 hours of sleep. 5) Protect weekends — not every moment needs to be productive. 6) Talk to the teacher if homework load is excessive. 7) Reconnect with the joy of learning: visit museums, read together, do science experiments at home — no grades attached. 8) Model balance — if you're always working and never resting, they learn that's normal.",
  },

  // --- SCHOOL-AGE: Refusing to go to school (additional) ---
  {
    id: "av-117",
    source: "The Explosive Child",
    sourceDetails: "Ross Greene — School refusal (6-11yr)",
    category: "school",
    text: "For school-age children 6-11 years refusing to go to school: School refusal is a symptom, not a behavior. Use Collaborative & Proactive Solutions: 1) Identify the specific challenge. Is it academic (struggling in a subject)? Social (bullying)? Emotional (separation anxiety)? Sensory (overwhelming environment)? Or physiological (exhaustion, undiagnosed learning issue)? 2) Validate: 'I can see school is really hard for you right now. I'm going to help figure this out.' 3) Work WITH the child and school to create a plan: accommodations, counseling, gradual return, or a different setting. 4) Don't force attendance without addressing the cause — trauma from forced attendance can last years. 5) Maintain routines at home — get up at school time, do academic work at home, maintain bedtime. 6) Get professional help: school psychologist, child therapist, or educational consultant. 7) If there's a specific trigger (a bully, a difficult subject), address it directly rather than forcing the child to endure it.",
  },

  // --- SCHOOL-AGE: Social skills coaching (additional) ---
  {
    id: "av-118",
    source: "How to Talk So Kids Will Listen",
    sourceDetails: "Faber & Mazlish — Social skills for school-age (6-11yr)",
    category: "social",
    text: "For school-age children 6-11 years who struggle socially: Some children need explicit social skills coaching. Skills to teach: 1) Reading social cues: 'When your friend looked away and crossed their arms, how do you think they felt?' 2) Conversation skills: ask one question, then share something, then ask another. Practice with role-play. 3) Joining a group: watch what they're doing for a minute, then make a relevant comment, then ask to join. 4) Handling rejection: 'Sometimes people don't want to play, and that stings. It doesn't mean there's anything wrong with you.' 5) Self-advocacy: 'I don't like being teased about my glasses. Please stop.' 6) Repairing relationships: 'I'm sorry I said that. Can we try again?' Practice scripts at home. 7) If social challenges are significant (autism spectrum, ADHD, anxiety), social skills groups led by therapists are very effective. 8) Encourage structured social settings (clubs, sports, scouts) where interactions have built-in structure.",
  },

  // --- SCHOOL-AGE: Perfectionism at school (additional) ---
  {
    id: "av-119",
    source: "Mindset",
    sourceDetails: "Carol Dweck — Reframing grades (6-11yr)",
    category: "confidence",
    text: "For school-age children 6-11 years whose self-worth is tied to grades: When a child believes their worth is measured by grades, every test becomes a judgment of their identity. Shift the framing: 1) Talk about grades as feedback, not judgment: 'A grade tells you what you understood and what you still need to work on. It's information, not a label.' 2) De-emphasize grades at home. Ask 'What did you learn today?' instead of 'What did you get on the test?' 3) Celebrate improvement: 'You went from a 60 to a 75 on these quizzes — that shows your effort is working!' 4) Normalize struggle: 'Math is supposed to be hard sometimes. If it were easy, your brain wouldn't grow.' 5) Share stories of late bloomers (Albert Einstein didn't speak until 4; Charles Darwin was considered a slow learner). 6) Separate love from performance: 'I'm proud of you for who you are, not your report card.' 7) If the child is gifted, be careful not to make giftedness their identity — gifted children who struggle later often experience identity crises.",
  },

  // --- SCHOOL-AGE: Bedtime worries and anxiety (additional) ---
  {
    id: "av-120",
    source: "Zero to Three",
    sourceDetails: "Zero to Three — Bedtime anxiety in school-age (6-11yr)",
    category: "sleep",
    text: "For school-age children 6-11 years with bedtime anxiety: School-age children have rich inner lives and real worries — about school, friends, family issues, the news, and existential questions ('What happens when we die?'). At bedtime, distractions fall away and worries surface. Strategies: 1) Build 'talk time' into the bedtime routine: 'What was the best part of today? What was the hardest? What's on your mind?' 2) Keep a worry journal by the bed — writing worries down 'removes' them from the mind. 3) Teach grounding: 'Name 3 things you can see, 2 you can hear, 1 you can feel.' 4) Use progressive muscle relaxation: 'Tighten your toes like a fist... now let them be floppy. Now your legs...' 5) Avoid scary news or media within 2 hours of bedtime. 6) If anxiety is persistent and interfering with sleep, consult a child therapist — anxiety is highly treatable with early intervention. 7) Validate rather than dismiss: 'That's a big worry. Let's think about it together.'",
  },

  // === TEEN (12-18 years) ===

  // --- TEEN: Disrespect/eye-rolling ---
  {
    id: "av-121",
    source: "How to Talk So Teens Will Listen",
    sourceDetails: "Faber & Mazlish — Teen disrespect (12-18yr)",
    category: "teen",
    text: "For teens 12-18 years who roll eyes, sigh dramatically, or speak disrespectfully: Teen disdain is often a developmental shield — they're separating from you and sometimes that separation looks like contempt. Response: 1) Don't match their tone. If you escalate, they escalate further. Stay measured. 2) Name the behavior neutrally: 'When you roll your eyes while I'm talking, it feels dismissive. Can we try this conversation again?' 3) Pick your battles — not every eye roll needs addressing. Address patterns, not every instance. 4) Check your own communication: are you lecturing? Nagging? Giving unsolicited advice? Teens respect being respected. 5) Ask for what you want: 'I'd like us to be able to talk without sarcasm. Can we agree to try?' 6. Connect outside of conflict — shared activities build a foundation that makes disrespect less frequent. 7) Remember: rudeness is often fatigue, stress, or emotional turmoil being displaced onto the safest target (you). It's not personal, even when it feels personal.",
  },

  // --- TEEN: Dating ---
  {
    id: "av-122",
    source: "Age of Opportunity",
    sourceDetails: "Laurence Steinberg — Teen dating guidance (12-18yr)",
    category: "teen",
    text: "For teens 12-18 years navigating romantic relationships: Teen dating is developmentally normal and an important part of learning intimacy. Parent approach: 1) Stay calm and curious — not panicked. 'Tell me about them! How did you meet?' Panic drives teens into secrecy. 2) Know the person — invite them to dinner, make your home welcoming. Teens whose partners are welcomed into the family are less likely to engage in risky behavior. 3) Discuss consent explicitly and early: 'Consent means both people freely agree. Either person can change their mind at any time. If someone is drunk, they cannot consent.' 4) Talk about healthy relationships: respect, trust, equality. Name red flags: jealousy disguised as love, checking phones, isolation from friends, pressure. 5) Discuss safe sex without judgment — regardless of your values, your teen needs accurate health information. 6) Set age-appropriate dating rules (group dates at 13-14, one-on-one dates at 15-16, curfews). 7) If you suspect abuse (emotional or physical), contact a domestic violence helpline for teens.",
  },

  // --- TEEN: Social media ---
  {
    id: "av-123",
    source: "AAP Media Guidelines",
    sourceDetails: "AAP — Teen social media (12-18yr)",
    category: "screen",
    text: "For teens 12-18 years on social media: Social media is central to teen social life — banning it entirely creates secrecy and isolation. Instead, teach healthy use: 1) Know which platforms they use — have your own account and follow/friend them (don't comment on their posts, just monitor for safety). 2) Discuss the comparison trap: 'People post their highlight reel, not their behind-the-scenes. Don't compare your real life to someone's curated feed.' 3. Set phone-free zones: meals, after 10 PM (phones charge in kitchen/living room), and during homework (unless needed). 4) Teach digital footprint awareness: 'Colleges and employers look at social media. Assume everything you post could be seen by anyone.' 5) Discuss cyberbullying and being an upstander (reporting/blocking, not piling on). 6) Watch for signs of social media addiction or mental health impact: anxiety after phone use, sleep loss, FOMO, body image issues. 7) Instagram and TikTok can amplify eating disorders and self-harm — monitor and seek professional help if concerned.",
  },

  // --- TEEN: School skipping ---
  {
    id: "av-124",
    source: "The Explosive Child",
    sourceDetails: "Ross Greene — Teen school avoidance (12-18yr)",
    category: "school",
    text: "For teens 12-18 years skipping school: Unlike younger children, teens have more autonomy and can physically remove themselves from school. Approach with Collaborative & Proactive Solutions: 1) Identify the unsolved problem through collaborative conversation: 'I've noticed you've been missing school. What's getting in the way?' Listen without interrupting. 2) Common causes: undiagnosed learning disability, social anxiety, bullying, depression, academic overwhelm, substance use, or sleep deprivation. 3) Don't immediately punish — punishment without solving the underlying problem increases avoidance. 4) Work with the school: request an evaluation for learning disabilities, mental health support, or an alternative program. 5) Create a gradual re-entry plan if the teen has been out for an extended period. 6) Address mental health: school avoidance in teens is strongly linked to anxiety and depression. A therapist is essential. 7) Consider alternative education options (online school, vocational programs, GED) if traditional school is not working. The goal is education, not attendance at a specific building.",
  },

  // --- TEEN: Substance concerns ---
  {
    id: "av-125",
    source: "CDC Teen Health",
    sourceDetails: "CDC — Teen substance use response (12-18yr)",
    category: "teen",
    text: "For teens 12-18 years showing signs of substance use: Warning signs include: sudden grade drop, changing friend groups, secrecy, money disappearing, smell of alcohol/weed, finding paraphernalia, slurred speech, bloodshot eyes, and mood swings. Response: 1) Don't panic or rage — this shuts down communication. 2) Have a direct, calm conversation: 'I've noticed X, Y, Z. I'm concerned about your safety. What's going on?' 3) Listen more than you talk. 4) Be clear about your values and expectations: 'I don't want you using substances. Your developing brain is vulnerable, and this is a safety issue.' 5) If use is confirmed, get professional help — a substance abuse counselor who specializes in adolescents. 6) Consider random drug testing if trust has been broken (controversial but sometimes necessary). 7) Address underlying causes: teens often self-medicate for anxiety, depression, ADHD, or trauma. 8) Naloxone should be in the home if any opioid use is suspected. 9) Lock up prescription medications and alcohol. 10) This is a medical issue, not a moral failing.",
  },

  // --- TEEN: Sleep chaos ---
  {
    id: "av-126",
    source: "AAP Healthy Sleep",
    sourceDetails: "AAP — Teen sleep biology (12-18yr)",
    category: "sleep",
    text: "For teens 12-18 years with chaotic sleep schedules: Teen sleep is biologically different — their circadian rhythm shifts 2 hours later, meaning they genuinely don't feel tired until 11 PM-midnight. Combined with early school start times, this creates chronic sleep deprivation (teens need 8-10 hours; most get 6-7). Strategies: 1) Acknowledge biology: 'Your body naturally wants to stay up late. That's real.' 2) Negotiate reasonable boundaries: phones off by 10:30 PM (or charge in another room — blue light delays sleep further). 3) Encourage consistent wake times, even on weekends — sleeping until noon on Saturday destroys the schedule. Allow a maximum 1-2 hour weekend shift. 4) Advocate for later school start times in your district — research is overwhelming on this issue. 5) No caffeine after 2 PM. 6) Talk about sleep as mental health: 'Sleep affects your mood, memory, athletic performance, and skin.' 7) If insomnia persists despite good habits, consider evaluation for anxiety, depression, or sleep disorders.",
  },

  // --- TEEN: Academic burnout ---
  {
    id: "av-127",
    source: "Raising an Adult",
    sourceDetails: "Julie Lythcott-Haims — Teen academic burnout (12-18yr)",
    category: "teen",
    text: "For teens 12-18 years experiencing academic burnout: Signs: extreme fatigue, loss of interest in previously enjoyed activities, saying 'what's the point?' declining grades, irritability, sleep problems, and somatic complaints. Burnout often stems from the checklisted childhood — too many AP classes, extracurriculars, and pressure to build a perfect college application. Response: 1) Audit their schedule together. Cut back to core academics plus 1-2 activities they genuinely enjoy. 2) Examine your messaging: are you talking about college constantly? Back off. 3) Ensure 8-10 hours of sleep — sleep deprivation causes or worsens burnout. 4) Protect downtime — unstructured time is when creativity and self-discovery happen. 5) Reconnect with their actual interests, not strategic ones: 'What do you actually LIKE doing?' 6) If burnout includes depression or anxiety, seek therapy immediately. 7) Consider that your teen may need a gap year, a lighter course load, or a different path than the one you envisioned. 8) Your teen's mental health is more important than their GPA.",
  },

  // --- TEEN: Friendship breakups ---
  {
    id: "av-128",
    source: "Queen Bees and Wannabes",
    sourceDetails: "Rosalind Wiseman — Teen friendship breakups (12-18yr)",
    category: "social",
    text: "For teens 12-18 years going through a friendship breakup: Teen friendship breakups can be as painful as romantic ones — sometimes more. They involve identity loss ('Who am I without this friend?'), social reshuffling, and often public humiliation (if played out on social media). Response: 1) Take it seriously — don't minimize with 'You'll make new friends.' 2) Listen and validate: 'Losing a best friend is devastating. I'm so sorry.' 3) Don't contact the other family — this makes it worse and undermines your teen's autonomy. 4) Help them process: 'What happened? How are you feeling? What do you need?' 5) Encourage multiple social connections — clubs, sports, youth groups, part-time jobs. 6) Watch for social isolation or depression after a major friendship loss. 7) If the breakup involved bullying or public humiliation, discuss whether school involvement is needed. 8) Share your own friendship loss stories — it helps them feel less alone. 9. Time is the real healer — resist the urge to fix it.",
  },

  // --- TEEN: Privacy and trust ---
  {
    id: "av-129",
    source: "Age of Opportunity",
    sourceDetails: "Laurence Steinberg — Privacy and trust (12-18yr)",
    category: "teen",
    text: "For teens 12-18 years around privacy and trust: Teens need increasing privacy as they develop autonomy — this is developmental, not suspicious. Balancing safety and autonomy: 1) Don't read diaries, texts, or search browser history without cause. Trust is the foundation of your relationship. 2) 'Cause' means: evidence of danger (substance use, self-harm, eating disorder, criminal activity, or a sudden major behavior change). 3) If you must check, be transparent: 'I'm checking your phone because I'm concerned about your safety. This isn't a punishment — it's my job.' 4) Knock before entering their room. Always. Even if they're 'just on their phone.' 5) Gradually expand privacy as they demonstrate responsibility. 6) Distinguish privacy from secrecy: privacy is a closed door; secrecy is hiding something harmful. 7) If trust is broken, create a path to rebuild it — not permanent suspicion. 8) Your relationship with your teen is more important than knowing everything. An untrusted teen hides everything.",
  },

  // --- TEEN: Future anxiety ---
  {
    id: "av-130",
    source: "Mindset",
    sourceDetails: "Carol Dweck — Teen future anxiety (12-18yr)",
    category: "emotional",
    text: "For teens 12-18 years anxious about the future (college, career, life): Today's teens face unprecedented pressure about their future. Response: 1) Broaden the definition of success: 'There are many paths to a fulfilling life. College is one path, not the only path.' 2) Share growth mindset language: 'You don't need to have it all figured out at 16. Your brain is still developing. You'll grow into your interests.' 3) Reduce college talk: not every conversation needs to be about SATs, GPAs, or applications. 4) Share stories of people who found their path late or took non-traditional routes. 5. Help them focus on what they can control (today's choices, building skills, exploring interests) rather than what they can't (admissions decisions, job market). 6) If anxiety is severe (panic attacks, insomnia, depression), professional support is essential. 7) Model acceptance of uncertainty in your own life. 8) Ask: 'What sounds interesting to you right now?' rather than 'What do you want to do with your life?' The first question opens doors; the second closes them.",
  },

  // --- TEEN: Curfew battles ---
  {
    id: "av-131",
    source: "Triple P",
    sourceDetails: "Triple P — Teen curfew negotiation (12-18yr)",
    category: "teen",
    text: "For teens 12-18 years negotiating curfews: Curfews should be age-appropriate and negotiated in advance. Guidelines: 12-13: home by 8-9 PM. 14-15: 9-10 PM. 16-17: 10-11 PM. 18: case-by-case. Negotiation strategies: 1) Set the curfew together during a calm time, not mid-argument: 'Let's agree on a time that works for both of us.' 2) Build in a 15-minute grace period for transit delays — rigid zero-tolerance creates lying. 3) Require location sharing (Find My Friends, Life360) as a safety measure, not surveillance — frame it as 'I need to know you're safe, not what you're doing every second.' 4) If they miss curfew without communication, the natural consequence is an earlier curfew next time: 'You showed me you're not ready for a 10 PM curfew. Next weekend it's 9 PM.' 5) Praise responsibility: 'You texted me when plans changed — that's exactly what I needed. Thank you.' 6. Be flexible for special events (prom, concerts) with pre-arranged agreements.",
  },

  // --- TEEN: Driving ---
  {
    id: "av-132",
    source: "CDC Teen Driving",
    sourceDetails: "CDC — Teen driving safety (12-18yr)",
    category: "teen",
    text: "For teens 12-18 years learning to drive: Driving is the most dangerous activity teens engage in — car crashes are the leading cause of teen death. Safety approach: 1) Model good driving — no phone use, no speeding, seatbelt always. Teens learn by watching you for years before they drive. 2) Use graduated driver licensing (GDL) principles: no passengers for the first 6 months (peer passengers dramatically increase crash risk), no night driving for the first 6 months, no phone use ever (not even hands-free). 3) Create a written family driving agreement — include rules, consequences, and the fact that driving is a privilege. 4. Practice extensively: teens need 50-100 hours of supervised driving in varied conditions (rain, highway, city, night). 5) Be honest about risks: 'The first 6 months of driving are the most dangerous period of your life. These rules exist because teens die without them.' 6) If they break rules (speeding, phone use), revoke driving privileges immediately. Cars are lethal weapons. 7) Consider apps that monitor driving speed and phone use. Some insurance companies offer them at a discount.",
  },

  // --- TEEN: Money management ---
  {
    id: "av-133",
    source: "Raising an Adult",
    sourceDetails: "Julie Lythcott-Haims — Teen financial literacy (12-18yr)",
    category: "teen",
    text: "For teens 12-18 years learning money management: Financial literacy is an essential life skill that schools rarely teach. Strategies: 1) By 12-13, give a monthly allowance for discretionary spending (clothes beyond basics, entertainment, snacks) — let them budget. If they run out, they wait until next month. No bailouts. 2) Help them open a bank account with a debit card (no credit cards yet). Review statements together monthly. 3) By 15-16, encourage a part-time job or regular babysitting/lawn care — earning their own money changes spending habits dramatically. 4) Teach the 50/30/20 rule: 50% needs, 30% wants, 20% savings. 5) Discuss family finances transparently at an age-appropriate level: 'Here's how much groceries cost. Here's what electricity costs. Here's how we budget.' 6) Introduce investing basics at 16-17: open a custodial account, explain index funds, compound interest. 7. Warn about credit card traps: 'Credit cards are not free money. The interest can trap you for years.' 8. Let them make small financial mistakes now — $50 mistakes at 15 teach more than $5,000 mistakes at 25.",
  },

  // --- TEEN: Appearance and clothing battles ---
  {
    id: "av-134",
    source: "Peaceful Parent, Happy Kids",
    sourceDetails: "Laura Markham — Teen appearance battles (12-18yr)",
    category: "teen",
    text: "For teens 12-18 years whose appearance choices concern you (hair, clothing, piercings): Teens use appearance to express identity and autonomy — it's developmental. Choosing battles: 1) Hair color, style, and clothing are almost always not worth fighting. These are temporary, self-expressive, and developmentally appropriate. State your preference if asked, but let them choose. 2) Safety concerns ARE worth addressing: piercings from unlicensed shops (infection risk), extreme dieting for body modification (health risk), or clothing inappropriate for the setting (e.g., beachwear to a funeral). 3) When you disapprove, use curiosity not criticism: 'Tell me about this style — what do you love about it?' rather than 'You look ridiculous.' 4) Remember how you dressed as a teen — empathy builds connection. 5) Don't let grandparents or other relatives undermine your teen's autonomy with comments — advocate for your teen. 6) If appearance changes are sudden and accompanied by mood changes, withdrawal, or self-harm marks, investigate for underlying mental health issues. 7) Expressing identity through appearance is safer than many alternatives.",
  },

  // --- TEEN: Family time refusal ---
  {
    id: "av-135",
    source: "Age of Opportunity",
    sourceDetails: "Laurence Steinberg — Teen family connection (12-18yr)",
    category: "teen",
    text: "For teens 12-18 years who refuse to spend time with family: Teens pulling away from family is developmentally normal — they're building peer connections and independence. However, complete disconnection is a concern. Strategies: 1) Make family time appealing — not forced board games or lectures. Ask what THEY want to do: 'What would make you actually want to come to dinner?' Pizza and a movie they choose works better than mandatory family night. 2) Require one family ritual (e.g., Sunday dinner or a weekly walk) that's non-negotiable but short (30-60 minutes). 3) Keep it light — don't use family time to interrogate about school or friends. 4. Connect in their world: watch their favorite show with them (without commentary), play their video game, ask them to teach you something. 5) Eat together when possible — research shows regular family meals are the strongest predictor of teen well-being. 6) Accept that they'll prioritize friends — that's healthy. 7) Brief, positive interactions (a hug, a 'love you,' a text checking in) build connection without demanding time. 8) If a previously engaged teen completely withdraws from family AND friends, screen for depression.",
  },

  // --- TEEN: Disrespect (additional) ---
  {
    id: "av-136",
    source: "No-Drama Discipline",
    sourceDetails: "Siegel & Bryson — Teen emotional storms (12-18yr)",
    category: "teen",
    text: "For teens 12-18 years who have angry outbursts or are verbally harsh: The teen brain is under major renovation — the prefrontal cortex (responsible for impulse control, empathy, and rational thinking) is being rewired, while the amygdala (emotional center) is highly active. This means teens literally have less impulse control than they did at 10. Response: 1) During an outburst, DON'T engage. Say: 'I can see you're really upset. I'm going to give you space. I'm here when you're ready to talk.' 2) Never match their volume or aggression. De-escalate through calm. 3) After the storm (which may take hours), reconnect: 'That seemed really hard. What's going on?' 4) Address the behavior when calm, not during the storm: 'When you slammed the door and yelled, that scared me. In our family, we don't speak to each other that way.' 5) Teach them about their own brain: 'Your brain is literally rebuilding itself. You might feel emotions more intensely right now. That's normal, but it's not an excuse for treating people poorly.'",
  },

  // --- TEEN: Dating safety (additional) ---
  {
    id: "av-137",
    source: "CDC Teen Dating Violence",
    sourceDetails: "CDC — Teen dating violence prevention (12-18yr)",
    category: "teen",
    text: "For teens 12-18 years, teaching dating safety: 1 in 3 teens experiences dating abuse (physical, emotional, or sexual). Prevention: 1) Start early — before they're dating, discuss what healthy relationships look like: mutual respect, trust, honesty, separate friendships and interests, comfortable pace. 2) Name red flags clearly: extreme jealousy, constant checking of phone/location, isolating from friends/family, explosive temper, pressure for sex, controlling what they wear, threats, hitting/belittling. 3) Teach that 'If you loved me, you would...' is manipulation, not love. 4) Create a safety plan: 'You can ALWAYS call me for a ride, no questions asked, no consequences, no matter what.' 5. Discuss the role of alcohol in dating violence — impaired judgment affects both parties. 6. Monitor for signs of abuse: unexplained bruises, sudden isolation, dropping activities, constant anxiety about partner's reactions, grades dropping. 7. If you suspect abuse, contact loveisrespect.org or the National Dating Abuse Helpline.",
  },

  // --- TEEN: Social media and mental health (additional) ---
  {
    id: "av-138",
    source: "AAP Media Guidelines",
    sourceDetails: "AAP — Social media and teen mental health (12-18yr)",
    category: "screen",
    text: "For teens 12-18 years showing mental health effects from social media: Research links heavy social media use (3+ hours/day) to increased teen anxiety, depression, and self-harm, especially in girls. Action steps: 1) If your teen seems anxious or down after phone use, ask: 'How do you feel when you spend a lot of time on Instagram/TikTok? Does it make you feel better or worse?' Help them notice the correlation themselves. 2) Suggest a 'social media cleanse' for 3 days — many teens are shocked by how much better they feel. 3) Encourage 'active' use (creating content, messaging close friends) over 'passive' use (mindless scrolling). Passive use is more strongly linked to depression. 4) Set phone-free times (meals, first hour after school for decompression, last hour before bed). 5) If social media use is accompanied by eating disorder signs, self-harm, or suicidal ideation, treat it as a mental health emergency. Remove phone access and seek immediate professional help. 6. Advocate for phone-free policies at school.",
  },

  // --- TEEN: School motivation ---
  {
    id: "av-139",
    source: "Mindset",
    sourceDetails: "Carol Dweck — Teen motivation (12-18yr)",
    category: "school",
    text: "For teens 12-18 years who have lost motivation in school: Teen demotivation often stems from a fixed mindset ('I'm just not a math person'), feeling overwhelmed, or seeing no relevance to their life. Strategies: 1) Shift to growth mindset language: 'You're not bad at science — you haven't mastered this YET. Your brain grows when things are hard.' 2) Connect school to their interests: Love gaming? Game design requires math, art, storytelling. Love sports? Physics explains the perfect shot. 3) Break overwhelming tasks into small steps. A failing grade feels hopeless; 'improve by one letter grade this term' feels achievable. 4) Ask: 'What would make school more interesting?' If they have ideas (a specific class, a club, a mentor), help make it happen. 5) Consider learning differences — undiagnosed ADHD, dyslexia, or processing disorders can masquerade as laziness. Request an evaluation. 6) Praise effort and improvement specifically. 7) Avoid lectures about 'your future' — teens tune these out. Instead, help them discover their own reasons to learn.",
  },

  // --- TEEN: Vaping and substance use (additional) ---
  {
    id: "av-140",
    source: "CDC Teen Health",
    sourceDetails: "CDC — Vaping and teen substance use (12-18yr)",
    category: "teen",
    text: "For teens 12-18 years around vaping and substance use: Vaping is the most common teen substance issue — nicotine is highly addictive and adolescent brains are especially vulnerable. Prevention and response: 1) Discuss vaping early (age 11-12) — companies market fruit and candy flavors directly to youth. Explain: 'Vaping delivers nicotine, which changes your brain. It affects memory, attention, and impulse control — all things you need for school and sports.' 2) If you discover vaping: stay calm. 'I found this. I'm worried because I care about your health. Let's talk about what's going on.' 3) Nicotine addiction is real — your teen may need support to quit (patches, counseling, apps). Don't treat it as a moral failing. 4) Discuss marijuana openly: 'Marijuana potency today is much higher than in the past. Regular teen use affects memory, motivation, and brain development that continues until age 25.' 5) Lock up alcohol and prescription medications. 6) Be the safe house: 'If you're ever in a situation where someone is using and you're uncomfortable, call me. No questions asked.'",
  },

  // --- TEEN: Sleep and mental health (additional) ---
  {
    id: "av-141",
    source: "AAP Healthy Sleep",
    sourceDetails: "AAP — Teen sleep and mental health (12-18yr)",
    category: "sleep",
    text: "For teens 12-18 years whose sleep is affecting mental health: Chronic sleep deprivation in teens is linked to depression, anxiety, irritability, weakened immune system, poor decision-making, and increased risk of car accidents. The phone is the #1 sleep thief. Strategies: 1) Have an honest conversation: 'When you don't get enough sleep, your brain can't regulate emotions properly. You might feel more anxious or down purely from lack of sleep.' 2) Negotiate a phone-charging location outside the bedroom: 'Your phone charges in the kitchen overnight. This isn't about control — it's about protecting your sleep.' If they resist, explain the science: notifications wake them, blue light suppresses melatonin, and the temptation to scroll at 2 AM is too strong for anyone's willpower. 3) If they need their phone as an alarm, buy a $10 alarm clock. 4) Model this yourself — charge your phone outside the bedroom too. 5. If insomnia persists without phone use, consult a doctor about anxiety, depression, or sleep disorders.",
  },

  // --- TEEN: College pressure and identity (additional) ---
  {
    id: "av-142",
    source: "Raising an Adult",
    sourceDetails: "Julie Lythcott-Haims — Beyond college admissions (12-18yr)",
    category: "confidence",
    text: "For teens 12-18 years crushed by college admissions pressure: The college admissions race has created a generation of anxious teens who feel their worth is determined by an acceptance letter. Parent strategies: 1) Say explicitly and often: 'Where you go to college does not determine your life. Successful, happy people come from all kinds of schools — or no school at all.' 2) Stop talking about selective colleges. Talk about FIT instead: 'What kind of learning environment will help YOU thrive? Big or small? Urban or rural? Hands-on or theoretical?' 3) Don't attend college rankings events or obsess over them at home. 4) Celebrate non-academic milestones equally: getting a driver's license, first job, learning to cook, being a good friend. 5) Point out successful adults who didn't go to selective colleges. 6) If they get rejected, hold space for disappointment without adding your own. 'I know this hurts. I also know this will not determine your future. You will.' 7) Your teen needs to know they are more than their transcript.",
  },

  // --- TEEN: Peer pressure and decision-making ---
  {
    id: "av-143",
    source: "Age of Opportunity",
    sourceDetails: "Laurence Steinberg — Teen decision-making (12-18yr)",
    category: "social",
    text: "For teens 12-18 years facing peer pressure and risky decisions: The teen brain's reward center is hyperactive while the self-control center is still developing — meaning teens genuinely weigh risks differently than adults. They're not being reckless; their brains prioritize social reward over safety. Strategies: 1) Discuss specific scenarios before they happen: 'What would you do if the driver has been drinking?' 'What if someone brings alcohol to the party?' Planning in advance (when calm) beats in-the-moment decisions (when emotional). 2) Create escape scripts: 'If you need to leave, text me the letter X and I'll call you with a 'family emergency' to pick you up. No questions asked.' 3) Discuss the science: 'Your brain is wired to care what peers think. That's normal. But it can lead you to do things you wouldn't normally do. Being aware of this is your superpower.' 4) Role-play saying no: 'No thanks, I'm good' should be practiced until it's automatic. 5) Know their friends' parents — create a network. 6) Praise good decisions: 'You called me for a ride instead of getting in that car. That took real maturity.'",
  },

  // --- TEEN: Trust rebuilding ---
  {
    id: "av-144",
    source: "How to Talk So Teens Will Listen",
    sourceDetails: "Faber & Mazlish — Rebuilding trust (12-18yr)",
    category: "teen",
    text: "For teens 12-18 years who have broken trust (lying, sneaking out, substance use) and need to rebuild it: Trust is rebuilt through consistent behavior over time — not through promises. Framework: 1) Have a calm conversation (not during conflict) about what happened: 'Trust was broken. Here's what I need to see to start rebuilding it.' Be specific. 2) Create a written agreement together — what the teen will do (check in at agreed times, be where they say, no phone at night) and what the parent will do (knock before entering, reduce monitoring as trust builds). 3) Start with close supervision and gradually expand freedom as trust is demonstrated. 'I need to know where you are for the next month. After that, we'll review.' 4) Don't bring up past mistakes during unrelated arguments. 5) Acknowledge progress: 'You've been honest and checking in consistently. I'm starting to trust you more. Let's talk about giving you a bit more freedom.' 6) If trust is broken again, restart the process without shame: 'We had an agreement and it wasn't kept. We're starting over.'",
  },

  // --- TEEN: Independence and life skills ---
  {
    id: "av-145",
    source: "Raising an Adult",
    sourceDetails: "Julie Lythcott-Haims — Teen life skills checklist (12-18yr)",
    category: "routines",
    text: "For teens 12-18 years, building independence and life skills: Many teens arrive at college unable to do laundry, cook a meal, or make a doctor's appointment. By 18, your teen should be able to: 1) Cook 3-5 simple meals. 2) Do their own laundry (start teaching at 12). 3) Make phone calls for appointments, prescriptions, and services. 4) Manage their own homework and deadlines without parental reminders. 5) Navigate public transportation. 6) Budget discretionary spending. 7) Basic home maintenance (change a lightbulb, plunge a toilet, use basic tools). 8) Open a bank account and manage a debit card. 9. Register to vote at 18. Teaching method: each year from 12-18, add 2-3 new responsibilities. Don't do for them what they can do for themselves — even if they do it imperfectly. Your job is to work yourself out of a job, and the transition should be gradual, not a cliff at 18.",
  },

  // --- TEEN: Emotional support for academic stress (additional) ---
  {
    id: "av-146",
    source: "The Gift of Failure",
    sourceDetails: "Jessica Lahey — Supporting stressed teens academically (12-18yr)",
    category: "school",
    text: "For teens 12-18 years overwhelmed by academic stress: When your teen is drowning in schoolwork, your role shifts from coach to supporter. Strategies: 1) Help them break tasks into micro-steps: 'What's due first? Let's make a list for tonight.' A planner with color-coded deadlines helps visual learners. 2) Teach time management: Pomodoro technique (25 min work, 5 min break), tackling the hardest task first, or starting with something easy for momentum. 3) Ensure they're eating, sleeping, and exercising — a stressed brain needs physical care more than ever. 4) Let them vent without problem-solving: sometimes they just need to say 'I'm so stressed' and hear 'That makes sense. This is a lot.' 5) Advocate for them if the workload is genuinely unreasonable — email the teacher or counselor. 6) Normalize getting help: tutoring, study groups, office hours. Asking for help is a life skill. 7) Watch for signs that stress has become clinical anxiety or depression: persistent hopelessness, withdrawal, self-harm talk. Academic stress can tip vulnerable teens into crisis.",
  },

  // --- TEEN: Social drama and resilience (additional) ---
  {
    id: "av-147",
    source: "Queen Bees and Wannabes",
    sourceDetails: "Rosalind Wiseman — Teen social media drama (12-18yr)",
    category: "social",
    text: "For teens 12-18 years caught in social media drama: Teen social conflict now plays out publicly online — screenshots, group chats, subtweeting, and viral call-outs amplify every disagreement. Response: 1) When drama happens, don't confiscate the phone as a first response — this isolates them from their support network and punishes them for confiding in you. 2) Help them assess: Is this a misunderstanding? Is someone being intentionally cruel? Is your teen the target or a participant? 3) Teach 'pause before posting': 'Write your response in your notes app. Wait 24 hours. If you still want to send it, send it.' 4) Suggest direct communication: 'Texting makes everything worse. Can you talk in person tomorrow?' 5) If they're being targeted: screenshot evidence, block accounts, report to school if it crosses into bullying. 6) If they targeted someone: hold them accountable — 'What you posted was hurtful. How are you going to make this right?' 7) Build offline connections to balance online social stress.",
  },

  // --- TEEN: Privacy vs monitoring (additional) ---
  {
    id: "av-148",
    source: "AAP Media Guidelines",
    sourceDetails: "AAP — Monitoring teen digital life (12-18yr)",
    category: "screen",
    text: "For teens 12-18 years, balancing digital privacy with safety: Monitoring should be age-appropriate and transparent. Age-based approach: Ages 12-13: Full device monitoring. Parent has passwords, checks messages weekly, uses filtering software. Explain: 'These are training wheels.' Ages 14-15: Spot checks. Parent has passwords but checks less frequently (every 1-2 weeks). Focus on who they're talking to, not the content of every message. Ages 16-17: Trust-based. Parent checks only if there's a specific concern. Passwords shared but not routinely used. Shift to conversations about digital citizenship. Age 18: Full autonomy, with ongoing conversations about online safety. Throughout: be transparent about what you check and why. Secret monitoring that's discovered destroys trust permanently. If you find something concerning (predator contact, self-harm, drug dealing), increase monitoring and seek professional support immediately.",
  },

  // --- TEEN: Emotional regulation and mental health (additional) ---
  {
    id: "av-149",
    source: "NHS Guidance",
    sourceDetails: "NHS — Teen mental health support (12-18yr)",
    category: "emotional",
    text: "For teens 12-18 years struggling with emotional regulation or mental health: 1 in 5 teens has a diagnosable mental health condition. Warning signs that go beyond typical teen moodiness: persistent sadness (2+ weeks), withdrawal from friends and activities, sleep or appetite changes, self-harm, talk of hopelessness, substance use, or sudden personality changes. Response: 1) Ask directly: 'I've noticed you seem really down lately. Are you OK? I'm here to talk.' 2) Don't minimize: avoid 'Everyone feels that way' or 'You have so much to be grateful for.' Instead: 'That sounds really hard. I'm glad you told me.' 3) Ask about self-harm and suicide directly — asking does NOT plant the idea. 'Sometimes when people feel really overwhelmed, they think about hurting themselves. Have you had those thoughts?' 4) If yes, stay calm and seek immediate help — call your GP, a crisis line, or take them to A&E. 5) Find a therapist who specializes in adolescents — the therapeutic relationship matters more than the modality. 6. Be patient with the process — therapy takes time. 7. Take care of your own mental health too.",
  },

  // --- TEEN: Family relationship maintenance (additional) ---
  {
    id: "av-150",
    source: "Peaceful Parent, Happy Kids",
    sourceDetails: "Laura Markham — Staying connected with teens (12-18yr)",
    category: "parent",
    text: "For parents of teens 12-18 years, maintaining a strong relationship through the teen years: The teen years are when your relationship investment pays off — or reveals gaps. Connection strategies: 1) Listen more than you talk. When your teen talks, put down your phone, make eye contact, and resist the urge to give advice unless asked. The phrase 'Do you want my advice, or do you just need me to listen?' is gold. 2) Find shared activities — even small ones. Coffee runs, watching a show together, walking the dog, cooking. The activity is the vehicle for connection. 3. Use car time — teens open up in the car because there's no eye contact and it feels low-pressure. 4) Send texts: 'Thinking of you. Hope the test goes well.' or just a funny meme. No response needed — it's a connection ping. 5) Apologize when you mess up — 'I was too harsh earlier. I was stressed about work, but that's not an excuse. I'm sorry.' This models vulnerability and repair. 6) Remember: your teen still needs you, even when they push you away. The push-pull is the definition of adolescence. Stay steady. Your calm, consistent presence is their anchor.",
  },

  // === SOCIAL COMPARISON, PEER PRESSURE, MATERIAL ENVY ===

  {
    id: "sc-1",
    source: "The Whole-Brain Child",
    sourceDetails: "Siegel & Bryson, Ch. 4 — The Uses of Nostalgia and Integration of Memory",
    category: "social",
    text: "Around ages 8-11, children become increasingly aware of social hierarchies and material differences between families. This is a normal developmental shift — their brain is developing 'theory of mind' and social cognition, allowing them to compare themselves to peers. When a child expresses embarrassment about their home, car, clothes, or possessions, this is not vanity — it's their developing social brain trying to understand where they fit. Parents should validate the feeling ('I can see this bothers you') without dismissing ('You should be grateful') or over-accommodating ('We'll buy a bigger car'). The goal is to help the child develop intrinsic self-worth that isn't tied to possessions, while acknowledging that social comparison pain is real. Use questions: 'What do you think makes someone a good friend?' or 'What do you like about yourself that has nothing to do with stuff?'",
  },
  {
    id: "sc-2",
    source: "Untangled: Guiding Teenage Girls Through the Seven Transitions into Adulthood",
    sourceDetails: "Lisa Damour, Ch. 1 — Parting with Childhood",
    category: "social",
    text: "Children aged 9-13 often experience acute sensitivity to social comparison as they transition into preadolescence. Their identity is shifting from family-centered to peer-centered, and material possessions become social currency. When a child complains about what the family has or doesn't have, they are often actually asking: 'Am I normal? Do I fit in? Will I be accepted?' The most effective parental response is NOT to compare ('Other people have less') or defend ('Our car is fine'). Instead: 1) Name the underlying feeling: 'It's hard when you feel different from your friends.' 2) Separate worth from possessions: 'What makes you a good person has nothing to do with what car we drive.' 3) Acknowledge the social reality: 'I know kids at school talk about this stuff. That pressure is real.' 4) Avoid shame: never make the child feel guilty for noticing inequality — it's developmentally appropriate.",
  },
  {
    id: "sc-3",
    source: "How to Talk So Kids Will Listen and Listen So Kids Will Want to Talk",
    sourceDetails: "Faber & Mazlish, Ch. 3 — Alternatives to Punishment (adapted for social comparison)",
    category: "social",
    text: "When a child expresses envy or embarrassment about family possessions compared to peers, use reflective listening rather than lectures about gratitude. Instead of: 'You should be thankful for what you have!' try: 'You're feeling embarrassed when friends have bigger houses. That makes sense — it's hard to feel different.' Once the feeling is acknowledged, the child is more open to perspective-shifting. Avoid: comparing to those less fortunate (creates guilt, not gratitude), buying things to 'keep up' (reinforces materialism), or dismissing the concern ('material things don't matter' — they DO matter to a child navigating peer status). Instead, help the child identify what genuinely brings them joy and confidence independent of possessions: skills, friendships, kindness, creativity.",
  },
  {
    id: "sc-4",
    source: "Raising An Emotionally Intelligent Child",
    sourceDetails: "John Gottman, Ch. 5 — Emotion-Coaching Strategies for Older Children",
    category: "social",
    text: "For children 8-12 experiencing peer comparison and material envy, emotion-coaching involves three steps: 1) Awareness — recognize that the child's complaint ('everyone has a bigger house') is actually an emotional signal of belonging anxiety, not greed. 2) Labeling — help the child name what they're really feeling: 'It sounds like you're worried about fitting in. Is that right?' This helps shift from vague distress to a named, manageable emotion. 3) Problem-solving — once the emotion is processed, brainstorm together: 'What could you say if someone comments on our car?' or 'What are the things that make you feel confident that have nothing to do with stuff?' Research shows that children whose parents emotion-coach rather than dismiss have better peer relationships, higher self-esteem, and lower rates of anxiety in adolescence.",
  },
  {
    id: "sc-5",
    source: "The Gift of Failure",
    sourceDetails: "Jessica Lahey, Ch. 6 — Praise, Reward, and Material Motivation",
    category: "social",
    text: "Material envy in preteens (ages 9-12) is closely linked to how children have been praised and rewarded. Children who receive excessive material rewards or are praised for outcomes rather than effort develop stronger material comparison behaviors. To counteract comparison-driven envy: 1) Praise process, not possessions or achievements — 'I noticed how hard you worked on that project' rather than 'You're the smartest.' 2) Avoid using purchases as emotional band-aids — when a child is upset, don't reflexively buy something to cheer them up. This teaches them that shopping regulates emotions. 3) Model contentment — children watch how parents talk about what others have. If parents complain about neighbors' renovations or friends' holidays, children learn to compare. Instead, narrate gratitude openly: 'I really enjoyed our walk today — that cost nothing and it was the best part of my weekend.' 4) Give children meaningful responsibilities (not just chores) — contribution builds intrinsic self-worth.",
  },
  {
    id: "sc-6",
    source: "Building Resilience in Children and Teens",
    sourceDetails: "Kenneth Ginsburg, Ch. 4 — Competence and Confidence (social comparison resilience)",
    category: "social",
    text: "To build resilience against social comparison and peer pressure in children aged 8-14, focus on developing the '7 Cs': Competence (recognizing what they're good at), Confidence (believing in themselves), Connection (strong relationships that aren't based on status), Character (knowing their values), Contribution (making a difference), Coping (healthy strategies for difficult emotions), and Control (understanding what they can and can't change). When a child says 'everyone else has X,' respond with curiosity, not defensiveness: 'Tell me more about that. What do you think having X would change?' Often the child reveals that what they really want is belonging, not the object itself. Help them find belonging through shared interests, teamwork, and authentic friendships rather than material sameness.",
  },
  {
    id: "sc-7",
    source: "Mindset: The New Psychology of Success",
    sourceDetails: "Carol Dweck, Ch. 7 — Growth Mindset in Parenting (applied to material comparison)",
    category: "confidence",
    text: "Children with a fixed mindset are more vulnerable to social comparison because they believe their worth is determined by external validation — grades, looks, possessions. Children with a growth mindset understand that abilities and worth develop through effort, learning, and character. To help a child who is distressed about material comparison: 1) Reframe the narrative — 'What matters isn't what you HAVE, it's what you can DO and who you ARE.' 2) Help them identify their 'growth areas' — 'You're getting better at piano every week. That's something nobody can buy.' 3) Normalize different paths — 'Every family makes different choices about how to spend money. That doesn't mean one family is better than another.' 4) Avoid labeling — don't say 'we're not rich' or 'we can't afford that' as identity statements. Instead: 'That's not how we choose to spend our money right now. We prioritize X, Y, and Z.' This frames financial decisions as choices, not deficits.",
  },
  {
    id: "sc-8",
    source: "Triple P — Positive Parenting Program",
    sourceDetails: "Triple P Level 4 — Helping children cope with peer pressure (ages 8-14)",
    category: "social",
    text: "For children experiencing peer pressure related to material possessions or social status (ages 8-14), Triple P recommends: 1) Keep communication open — ask 'What happened at school today?' not 'Are you being picked on?' Let the child lead. 2) Teach assertiveness scripts — practice what to say when peers comment on possessions: 'Yeah, our car's not the newest, but it gets us where we need to go.' or 'I don't really care about that stuff.' 3) Build a counter-narrative — regularly talk about your family values: 'In our family, we care more about kindness than having the newest things.' 4) Connect with like-minded families — children are less vulnerable to comparison when they have friends whose families share similar values. 5) Monitor media consumption — social media and advertising amplify comparison. Discuss advertising critically: 'Why do you think that ad makes it seem like you NEED that brand?' 6) Don't rescue immediately — let the child sit with the discomfort and develop their own coping strategies, while remaining emotionally available.",
  },
  {
    id: "sc-9",
    source: "Gratitude Works!",
    sourceDetails: "Robert Emmons — Research on gratitude practices in families",
    category: "confidence",
    text: "Research on gratitude by Robert Emmons shows that practicing gratitude actively counteracts material envy and social comparison. For children aged 8-14: 1) Family gratitude rituals — at dinner, have everyone share one thing they're grateful for. Keep it specific ('I'm grateful that my friend helped me with math') rather than generic. 2) Gratitude journaling — studies show children who write 3 things they're grateful for, 3 times per week, show measurable increases in life satisfaction and decreases in materialism within 3 weeks. 3) Model gratitude aloud — 'I'm so glad we got to walk in the park today. I felt really happy.' Children whose parents express gratitude regularly are more grateful themselves. 4) Experiences over things — research consistently shows that experiences (trips, activities, time together) produce more lasting happiness than material purchases. Frame family choices accordingly: 'Instead of buying X, let's go to the beach together.' 5) Volunteering — children who volunteer show reduced materialistic values and increased empathy. Even monthly volunteering has measurable effects.",
  },
  {
    id: "sc-10",
    source: "Peers: The Powerful Influence of Kids on Each Other",
    sourceDetails: "Judith Rich Harris — Developmental psychology on peer influence (ages 8-15)",
    category: "social",
    text: "Peer influence peaks between ages 10-15, and material comparison is one of its primary expressions. Research shows that children are most susceptible to peer comparison when they lack a strong sense of identity outside their peer group. Parents can reduce comparison vulnerability by: 1) Supporting identity-building activities — sports, arts, music, hobbies where the child defines themselves by what they do, not what they own. 2) Creating a 'home base' of acceptance — the child needs at least one context (usually family) where they feel completely accepted regardless of status. 3) Avoiding parental comparison — if parents compare their child to siblings or peers ('Why can't you be more like...'), the child internalizes comparison as normal. 4) Talking about peer pressure explicitly — 'I know it feels like everyone has the latest phone. What do you think would actually happen if you didn't have one?' Let the child think it through rather than lecturing.",
  },
  {
    id: "sc-11",
    source: "NurtureShock: New Thinking About Children",
    sourceDetails: "Po Bronson & Ashley Merryman, Ch. 1 — Inverse Power of Praise (material comparison research)",
    category: "confidence",
    text: "Research on children and materialism reveals a counterintuitive finding: children who are frequently praised for being 'special' or 'smart' are MORE likely to become materialistic, not less. This is because excessive praise creates an external validation dependency — the child needs constant reinforcement of their worth, and possessions become one way to signal worth. To raise a child who is resilient against material comparison: 1) Praise specific efforts, not global traits — 'You worked really hard on that drawing' not 'You're so talented.' 2) Don't overpraise — children know when praise is inflated and it makes them distrust their own abilities. 3) Let them experience normal disappointments without rescue — a child who learns to handle 'I didn't get the award' builds resilience that transfers to 'My family doesn't have the biggest house.' 4) Talk about values explicitly and regularly — children whose families have clear non-material values (community, creativity, faith, kindness) show 40% lower rates of material comparison behavior.",
  },
  {
    id: "sc-12",
    source: "AAP HealthyChildren.org",
    sourceDetails: "American Academy of Pediatrics — Materialism and self-esteem in school-age children",
    category: "social",
    text: "The AAP advises that when school-age children (7-12 years) express concerns about family possessions or social comparison, parents should: 1) Take it seriously — don't dismiss it as shallow. Social comparison is a normal developmental task. 2) Ask open questions — 'What made you think about that?' or 'Did something happen at school?' There may be a specific incident (teasing, exclusion) behind the complaint. 3) Address bullying if present — if a child is being mocked for family possessions, that's bullying and should be addressed with the school. 4) Focus on what the family DOES have and DO together — shared experiences, traditions, skills. 5) Monitor for signs that material comparison is affecting mental health — withdrawal, sadness, refusing to bring friends home, or obsessing over brands may indicate deeper distress that warrants professional support. 6) Be honest about finances age-appropriately — 'We choose to spend our money on experiences rather than things because that's what our family values.'",
  },





  // === DIGITAL LIFE & SCREENS ===
{
    id: "dl-1",
    source: "American Academy of Pediatrics (AAP)",
    sourceDetails: "AAP Media Use Guidelines for School-Aged Children and Adolescents",
    category: "screen",
    text: "The AAP recommends creating a personalized Family Media Plan rather than applying one-size-fits-all screen time limits. For children under 18 months, avoid screen media other than video chatting. Between 18-24 months, only high-quality programming co-viewed with an adult. For ages 2-5, limit screen use to one hour per day of high-quality content, watched together. For school-aged children and teens, consistent limits should ensure screen time doesn't displace adequate sleep (8-12 hours depending on age), physical activity (at least one hour daily), and schoolwork. The AAP emphasizes screen-free zones, particularly at the dinner table and in bedrooms, as one of the most impactful steps families can take. Parents should also designate tech-free times, especially the hour before bed. The quality of content matters as much as quantity: educational programming, creative apps, and video calls with family carry different developmental value than passive scrolling or fast-paced entertainment. Regular conversations about digital citizenship, online safety, and responsible behavior should begin early and continue through adolescence.",
  },
  {
    id: "dl-2",
    source: "Jonathan Haidt, 'The Anxious Generation'",
    sourceDetails: "Part I: The Surge of Suffering, and the Great Rewiring",
    category: "screen",
    text: "Jonathan Haidt argues that the sharp rise in adolescent mental illness beginning around 2012 is directly linked to the transition from flip phones to smartphones with front-facing cameras and always-on internet access. He identifies 2010-2015 as 'the Great Rewiring of Childhood' — the period when childhood shifted from play-based, outdoor, and community-anchored to phone-based, indoor, and individually isolated. Haidt presents four key norms to reverse the trend: no smartphones before high school (age 14), no social media before age 16, phone-free schools, and far more independence and unsupervised play for children and teens. He argues that social media, particularly Instagram and TikTok, function as 'experience blockers' that displace sleep, in-person interaction, and physical activity. Girls are disproportionately harmed by visual social comparison on Instagram, while boys are more affected by gaming, pornography, and YouTube algorithmic rabbit holes. Haidt's research suggests delaying smartphone access by even one or two years can significantly reduce anxiety and depression risk.",
  },
  {
    id: "dl-3",
    source: "Jean Twenge, 'iGen'",
    sourceDetails: "Chapters on Screen Time, Mental Health, and the Smartphone Generation",
    category: "screen",
    text: "Jean Twenge's research on the generation born after 1995 — dubbed 'iGen' — found that teens who spend three or more hours per day on electronic devices are 35% more likely to have at least one suicide risk factor. Her analysis of large national datasets shows that adolescent happiness and life satisfaction plummeted after 2012, exactly when smartphone ownership crossed the 50% threshold. Twenge found that eighth-graders who spend ten or more hours per week on social media are 56% more likely to report being unhappy than those who spend less time. Critically, she found that any amount of screen time beyond two hours daily is associated with lower psychological well-being for teens, and the relationship is dose-dependent — each additional hour of screen time predicts lower well-being. Twenge notes that the displacement of sleep is a primary mechanism: teens who sleep less than seven hours per night because of phone use show dramatically worse mental health. She recommends no more than two hours of recreational screen time per day for teens and keeping devices out of bedrooms overnight.",
  },
  {
    id: "dl-4",
    source: "Common Sense Media",
    sourceDetails: "The Common Sense Census: Media Use by Tweens and Teens",
    category: "screen",
    text: "Common Sense Media's comprehensive census research found that US teens (ages 13-18) average over seven hours of entertainment media per day, while tweens (ages 8-12) average nearly five hours — and these figures exclude time spent on schoolwork. More than half of teens say they are 'addicted' to their phones, and nearly three-quarters say they feel distracted by their device while doing homework. The research reveals significant socioeconomic disparities: children from lower-income families spend significantly more time with screen media than their higher-income peers. Common Sense Media offers practical guidance: use screen time settings and parental controls not as punishment but as scaffolding for healthy habits. They recommend co-viewing media with younger children, discussing what you watch, and establishing device-free zones and times. Their research consistently shows that content quality matters enormously — an hour spent creating digital art or video chatting with a grandparent carries very different developmental value than an hour of algorithmic short-form video scrolling. Parents should focus on content, context, and individual child needs rather than fixating on raw hours.",
  },
  {
    id: "dl-5",
    source: "Sherry Turkle, 'Alone Together'",
    sourceDetails: "Part II: The Robotic Moment and Networked Life",
    category: "screen",
    text: "MIT professor Sherry Turkle argues that digital technology has created a paradoxical state of being 'alone together' — physically present with others while psychologically absorbed in our devices. Her research, based on decades of interviews, shows that children and teens increasingly prefer screen-mediated communication to face-to-face conversation because it allows them to curate their presentation, edit their words, and avoid the vulnerability of real-time interaction. Turkle warns that this preference stunts the development of empathy, the ability to read nonverbal cues, and the capacity for deep, sustained attention — all critical social-emotional skills. Parents should actively model face-to-face conversation and create deliberate spaces for it: family meals without phones, car rides where conversation replaces earbuds, and one-on-one time where the phone is visibly put away. Turkle emphasizes that children learn more from what parents do than what they say — a parent who constantly checks their own phone teaches that the device outranks the child. She recommends establishing 'sacred spaces' in family life where devices are never present, and being intentional about reclaiming the art of conversation.",
  },
  {
    id: "dl-6",
    source: "Devorah Heitner, 'Screenwise'",
    sourceDetails: "Chapters on Mentoring vs. Monitoring and Digital Citizenship",
    category: "screen",
    text: "Devorah Heitner advocates for a shift from monitoring children's digital lives to mentoring them. Rather than relying on surveillance apps and restrictive filters, Heitner argues that parents should focus on understanding what their kids are actually doing online, asking curious questions, and helping them develop their own internal judgment. She stresses that digital literacy is not just about safety — it's about helping kids become thoughtful creators, critical consumers of information, and kind digital citizens. Heitner recommends discussing the concept of a 'digital footprint' early, helping children understand that anything shared online can be permanent and forwarded. She encourages parents to ask their children to teach them about their favorite apps and games — this builds the child's confidence and the parent's understanding simultaneously. When conflicts arise (such as a child seeing inappropriate content or having an online argument), Heitner advises treating these as learning opportunities rather than occasions for punishment. Children who fear having their devices confiscated will simply hide problems rather than seek help. The goal is raising kids who make good digital choices even when no adult is watching.",
  },
  {
    id: "dl-7",
    source: "World Health Organization (WHO)",
    sourceDetails: "WHO Guidelines on Physical Activity, Sedentary Behaviour and Sleep for Children Under 5",
    category: "screen",
    text: "The WHO guidelines state that children under one year should have no screen time at all. For children aged two to four, sedentary screen time should be no more than one hour per day, with less being better. The guidelines situate screen time within a broader framework of healthy 24-hour movement behaviors: infants need at least 30 minutes of tummy time and interactive floor play daily; children three to four need at least 180 minutes of physical activity per day. WHO frames these recommendations not as anti-technology but as pro-development — young children learn best through physical play, hands-on exploration, and face-to-face interaction with caring adults. Screen time displaces these essential developmental activities. WHO also emphasizes the importance of adequate, good-quality sleep: 14-17 hours per day for infants (including naps), 11-14 hours for ages one to two, and 10-13 hours for ages three to four. Screens in the sleep environment, especially in the hour before bedtime, are strongly discouraged because blue light suppresses melatonin and interactive content increases cognitive arousal, both of which delay sleep onset and reduce sleep quality.",
  },
  {
    id: "dl-8",
    source: "American Academy of Pediatrics (AAP)",
    sourceDetails: "AAP Cyberbullying and Online Harassment Guidance",
    category: "screen",
    text: "The AAP advises that parents should respond to cyberbullying calmly and systematically. First, do not confiscate the device immediately — this can make the child feel punished and discourage them from reporting future incidents. Instead, document the bullying: take screenshots, save messages, and record dates and times. Block the person responsible and report the behavior to the platform. If the bullying involves threats of violence, explicit images of minors, or harassment based on protected characteristics, report it to law enforcement. If it involves a classmate, contact the school — most schools have anti-bullying policies that cover online behavior, even when it occurs off-campus. The AAP stresses the importance of regular, non-judgmental conversations about online experiences. Children should know they can come to a parent without fear of losing device access. Parents should watch for warning signs: sudden withdrawal from friends or activities, changes in mood or appetite, reluctance to go to school, hiding the screen when adults approach, or unusual distress after using a device. Mental health support should be sought if a child shows signs of anxiety, depression, or self-harm related to online harassment.",
  },
  {
    id: "dl-9",
    source: "NHS Digital Wellbeing Guidance",
    sourceDetails: "NHS advice on Children's Screen Time and Digital Health",
    category: "screen",
    text: "NHS guidance emphasizes that while screen time is a normal part of modern childhood, the key to digital wellbeing is balance, boundaries, and content quality. Parents should ensure that screen use does not crowd out the three pillars of child health: adequate sleep, physical activity, and face-to-face social interaction. The NHS recommends keeping all screens out of children's bedrooms overnight — devices should be charged in a communal area. This single step dramatically improves both the quantity and quality of children's sleep. For sleep hygiene specifically, the NHS advises no screen use in the 60-90 minutes before bed, as blue light from devices suppresses melatonin production by up to 22% and interactive content keeps the brain in an alert state. Parents should use the built-in screen time monitoring tools available on iOS (Screen Time) and Android (Digital Wellbeing) not to spy on children but to start conversations about digital habits. The NHS also highlights the importance of parental modeling: children whose parents are constantly on their phones are more likely to develop problematic screen habits themselves. Lead by example.",
  },
  {
    id: "dl-10",
    source: "World Health Organization (WHO)",
    sourceDetails: "WHO International Classification of Diseases (ICD-11): Gaming Disorder",
    category: "screen",
    text: "In 2019, the WHO officially recognized 'Gaming Disorder' as a mental health condition in the ICD-11. Diagnosis requires a pattern of gaming behavior (digital or video gaming) that is severe enough to cause significant impairment in personal, family, social, educational, or occupational functioning, persisting for at least 12 months. Key symptoms include: inability to control gaming, prioritizing gaming over other daily activities and interests, and continuing to game despite negative consequences. While the majority of young people who play video games do not develop the disorder, parents should be alert to warning signs: a child who loses track of time while gaming, becomes irritable or aggressive when prevented from playing, neglects basic needs like eating or sleeping to continue gaming, lies about how much time is spent gaming, or withdraws from friends and activities they previously enjoyed. If gaming disorder is suspected, seek help from a mental health professional experienced in behavioral addictions. Parents can promote healthy gaming by setting clear time limits, encouraging offline activities, keeping gaming equipment in shared family spaces, and understanding the games their children play.",
  },
  {
    id: "dl-11",
    source: "Common Sense Media",
    sourceDetails: "When Should Kids Get a Phone? Research Review and Parent Guidance",
    category: "screen",
    text: "Common Sense Media reports that the average age a child gets their first smartphone in the US is now 11, with 53% of children owning one by age 11 and nearly 70% by age 12. However, age alone should not determine phone readiness. Parents should consider five factors: maturity level, ability to follow rules, the specific need (safety, logistics, communication), the child's ability to handle social media emotionally, and their willingness to report problems to a parent. A basic phone or smartwatch with calling and texting — but no apps or internet browser — can meet communication needs without the risks of a full smartphone. If a smartphone is given, parents should establish a written agreement covering: which apps are allowed, time limits, device-free zones and times, expectations about kind communication, and the parent's right to periodically check the device. Common Sense Media strongly recommends disabling in-app purchases, setting up content restrictions through the device's parental controls, and having ongoing conversations rather than one-time lectures about digital responsibility. The first phone is not a one-time milestone but the beginning of a multi-year coaching relationship.",
  },
  {
    id: "dl-12",
    source: "American Academy of Pediatrics (AAP)",
    sourceDetails: "AAP Digital Citizenship and Online Safety Guidelines",
    category: "screen",
    text: "The AAP defines digital citizenship as the responsible, ethical, and safe use of technology. Key competencies for children include: understanding digital permanence (anything posted online can be screenshotted, shared, and remain accessible indefinitely), protecting personal privacy (never sharing full name, address, school, or location data with strangers), recognizing and reporting inappropriate content or contact, and treating others with respect in all online interactions. Parents should begin teaching digital citizenship as soon as a child first interacts with a device, long before they have independent access. The AAP recommends age-appropriate conversations about online predators, scams, and misinformation starting around age 8-10, when children begin independently navigating digital spaces. Parents should teach children the 'T-H-I-N-K' test for digital communication: is it True, Helpful, Inspiring, Necessary, Kind? If not, don't post it. The AAP also stresses teaching children to question information they encounter online, look for credible sources, and recognize sponsored content, clickbait, and deepfakes. Digital citizenship is an ongoing conversation, not a single talk — it should evolve as the child grows and as technology changes.",
  },


  // === MENTAL HEALTH ===
{
    id: "mh-1",
    source: "The Anxious Generation",
    sourceDetails: "Jonathan Haidt, Part I: The Tidal Wave",
    category: "emotional",
    text: "Children experience anxiety as a normal part of development — separation anxiety in preschoolers, fear of the dark in early primary school, social worries in pre-teens. The key distinction is whether anxiety interferes with daily functioning. An anxiety disorder is likely when fear persists for weeks or months, avoids normal activities like school or socialising, causes physical symptoms such as stomachaches or headaches with no medical cause, or produces disproportionate distress relative to the actual threat. The rise of smartphone-based childhood has sharply increased anxiety rates since around 2012, particularly in girls aged 10-14. If a child's worry feels constant, invisible, or disproportionate, or if they are restructuring their life to avoid triggers, seek a GP or CAMHS assessment. Early intervention prevents anxiety from becoming entrenched. Do not dismiss persistent anxiety as 'just a phase' — children rarely grow out of clinical anxiety without support.",
  },
  {
    id: "mh-2",
    source: "NIMH Child Mental Health",
    sourceDetails: "National Institute of Mental Health, Children and Mental Health",
    category: "emotional",
    text: "Depression in children looks different from adult depression. Younger children may appear irritable rather than sad, lose interest in play, complain of physical pains, regress in behaviour, or cling to parents. Teenagers more typically show classic signs: persistent low mood, withdrawal from friends, changes in sleep or appetite, declining school performance, expressions of worthlessness, and loss of interest in activities they once enjoyed. For both age groups, symptoms must persist for at least two weeks to meet diagnostic criteria. A critical mistake is interpreting irritability in young children as naughtiness rather than a possible mental health signal. If a child's mood or behaviour shifts noticeably for more than a fortnight — especially with sleep disruption, social withdrawal, or talk of self-blame — consult a GP for a mental health assessment. Depression is treatable, particularly when identified early. Waiting for a child to 'snap out of it' only deepens the episode.",
  },
  {
    id: "mh-3",
    source: "NHS CAMHS",
    sourceDetails: "NHS Child and Adolescent Mental Health Services, Getting Help",
    category: "emotional",
    text: "Knowing when to seek professional help can feel daunting, but the threshold is straightforward: seek help from a GP or school counsellor when emotional or behavioural difficulties persist for more than a few weeks, interfere with daily life, or cause significant distress to the child or family. Specific red flags warrant immediate attention: any mention of self-harm or suicidal thoughts, sudden drastic personality changes, eating disorder symptoms, or complete social withdrawal. You do not need a formal diagnosis to begin accessing support. Schools can provide initial counselling referrals, and GPs can route to CAMHS for specialist assessment. In a crisis, A&E departments accept mental health emergencies. Parents often delay seeking help, hoping things will improve — but early intervention consistently produces better outcomes. Trust your instinct: if something feels wrong with your child's emotional state, a professional opinion is always appropriate and never an overreaction.",
  },
  {
    id: "mh-4",
    source: "Raising An Emotionally Intelligent Child",
    sourceDetails: "John Gottman, Chapter 4: Emotion-Coaching Strategies",
    category: "emotional",
    text: "Different therapeutic approaches suit different children and presenting problems. Cognitive Behavioural Therapy (CBT) is the most evidence-backed approach for anxiety and depression in children over eight. It helps children identify and reframe unhelpful thought patterns and gradually face feared situations. Play therapy is ideal for younger children (ages 5-10) who lack the verbal skills for traditional talk therapy — it uses play as a natural language for processing emotions. Family therapy addresses dynamics that may be contributing to a child's difficulties and is especially effective for behavioural problems, family transitions like divorce, or when one child's mental health is affecting the whole household. The right therapy depends on the child's age, temperament, and specific challenges. A qualified child therapist will recommend the best fit after an initial assessment. Avoid forcing a reluctant teen into therapy — engagement and rapport with the therapist predict outcomes more strongly than the specific modality used.",
  },
  {
    id: "mh-5",
    source: "Untangled",
    sourceDetails: "Lisa Damour, Chapter 6: Drinking, Drugs, and Other Dangerous Terrain",
    category: "emotional",
    text: "Bullying can have devastating mental health consequences that persist into adulthood. The psychological impact includes anxiety, depression, damaged self-worth, and in severe cases, suicidal ideation. Parents should be alert to indirect signs: unexplained reluctance to attend school, damaged or missing belongings, sudden withdrawal from friendships, disrupted sleep, or unexplained mood swings after using devices. If you suspect bullying, listen without immediately problem-solving. Validate your child's feelings first — 'That sounds really hard, and I believe you.' Then work together on a response plan: document incidents, contact the school, and insist on their anti-bullying protocol. For cyberbullying, use app-blocking tools but avoid confiscating devices entirely, as this can isolate the child further from their social world. If bullying symptoms — anxiety, low mood, withdrawal — persist for more than two weeks after the bullying stops, seek professional support. Children who feel believed and supported by at least one adult recover significantly better.",
  },
  {
    id: "mh-6",
    source: "Raising An Emotionally Intelligent Child",
    sourceDetails: "John Gottman, Chapter 5: The Five Steps of Emotion Coaching",
    category: "emotional",
    text: "Emotional resilience is not innate — it is built through experiencing manageable difficulty and learning to cope with the feelings that arise. Parents build resilience by allowing children to encounter age-appropriate frustration rather than removing every obstacle. When a child is upset, resist the urge to immediately fix the problem or dismiss the emotion. Instead, label the feeling ('You seem really frustrated'), validate it ('That makes sense — that was really hard'), and then help the child brainstorm a response. This three-step pattern — label, validate, problem-solve — builds the neural pathways for emotional regulation. Children also build resilience through predictable routines, consistent boundaries, and at least one secure attachment relationship. Crucially, parents should model resilient behaviour out loud: narrating their own coping ('I felt worried about that meeting, so I prepared carefully'). Children learn more from watching how adults handle adversity than from anything they are told.",
  },
  {
    id: "mh-7",
    source: "AAP Mental Health Guidance",
    sourceDetails: "American Academy of Pediatrics, Mental Health and Sleep",
    category: "emotional",
    text: "Sleep and mental health are bidirectionally linked in children and adolescents. Poor sleep directly worsens anxiety, depression, irritability, and emotional reactivity. Conversely, mental health difficulties often disrupt sleep — anxious children cannot switch off at night, and depressed teens may oversleep or have fragmented sleep. School-age children (6-12) need 9-12 hours; teenagers need 8-10. Chronic sleep deprivation, extremely common in secondary school students, produces symptoms that mimic or amplify mental health conditions. Before pursuing therapy or screening for disorders, address sleep hygiene: consistent bedtimes, no screens for at least an hour before sleep, cool dark bedrooms, and reduced caffeine intake. If a child's mental health symptoms improve significantly with better sleep, the primary issue may have been sleep deprivation rather than a mood disorder. However, if a child cannot fall asleep due to racing thoughts or persistent worry, this is itself a signal to investigate underlying anxiety.",
  },
  {
    id: "mh-8",
    source: "Untangled",
    sourceDetails: "Lisa Damour, Chapter 3: Contending with Adult Authority",
    category: "emotional",
    text: "Perfectionism in children is often mistaken for healthy ambition, but it frequently masks significant anxiety. Perfectionist children set impossibly high standards for themselves, become distressed by minor mistakes, avoid tasks where they might not excel, and tie their self-worth entirely to achievement. This pattern is strongly linked to generalised anxiety and, in adolescence, to eating disorders and depression. Parents unintentionally reinforce perfectionism by over-praising results rather than effort, expressing disappointment at lower grades, or conveying that success equals love. To counteract this, praise specific effort and strategy ('I noticed how long you worked on that — your persistence was impressive'), normalise mistakes by sharing your own, and avoid re-doing a child's work to make it 'better.' Emphasise that the learning process matters more than the outcome. If a child's perfectionism causes meltdowns over homework, avoidance of new activities, or sleep disruption from worry about performance, it has crossed into clinical territory and warrants professional support.",
  },
  {
    id: "mh-9",
    source: "NHS CAMHS",
    sourceDetails: "NHS Child and Adolescent Mental Health Services, School Avoidance",
    category: "emotional",
    text: "School refusal — persistent reluctance to attend school that goes beyond normal truancy — is a serious mental health signal rather than behavioural defiance. It typically stems from underlying anxiety: separation anxiety in younger children, social anxiety or fear of bullying in pre-teens, or overwhelming academic pressure in teenagers. Physical symptoms are common, especially morning stomachaches, nausea, or headaches that resolve once the child is allowed to stay home. The longer school avoidance continues, the harder it becomes to reverse, so early intervention is critical. Do not treat school refusal as a discipline problem. Instead, work with the school's pastoral team or SENCO to identify the trigger, develop a graded return plan, and address the underlying anxiety — often through CBT. Maintain a calm, firm, and supportive stance: the goal is always a return to school, but the approach must acknowledge the genuine distress the child feels. Untreated school refusal can lead to long-term social and academic consequences.",
  },
  {
    id: "mh-10",
    source: "NIMH Child Mental Health",
    sourceDetails: "National Institute of Mental Health, Warning Signs of Self-Harm",
    category: "emotional",
    text: "Self-harm — deliberately injuring oneself, typically through cutting, scratching, or burning — is most common in adolescents aged 12-17 and is usually a coping mechanism for overwhelming emotional distress rather than a suicide attempt. Warning signs include unexplained or frequent injuries (especially on arms, thighs, or stomach), wearing long sleeves or trousers in warm weather, keeping sharp objects in their room, withdrawing from activities, sudden mood changes, and spending excessive time alone. If you discover your child is self-harming, stay calm. Reacting with shock, anger, or punishment deepens shame and makes them less likely to seek help. Say: 'I can see you're in a lot of pain, and I want to help you through this.' Remove access to means but do not frame it as punishment. Seek professional help immediately — contact your GP for a CAMHS referral. Self-harm is treatable, but it requires professional intervention to address the underlying emotional pain and develop healthier coping strategies.",
  },
  {
    id: "mh-11",
    source: "How to Talk So Kids Will Listen & Listen So Kids Will Talk",
    sourceDetails: "Faber & Mazlish, Chapter 6: Engaging Cooperation",
    category: "emotional",
    text: "Children experiencing grief — whether from the death of a loved one, parental separation, or other significant loss — need honest, age-appropriate information and permission to feel whatever they feel. Young children (5-8) may not grasp the permanence of death and may show grief through play, regression, or behavioural changes rather than tears. Pre-teens understand death but may feel responsible or fear their own mortality. Teenagers may grieve more privately and may express distress through irritability or risk-taking. Do not use euphemisms ('gone to sleep') which can confuse young children. Instead, use clear language ('Grandma died, which means her body stopped working'). Maintain routines as much as possible — predictability is deeply comforting to grieving children. Answer questions honestly, including 'I don't know' when appropriate. If grief significantly disrupts daily functioning for more than a few months, or if a child expresses a wish to join the deceased person, seek professional bereavement support or CAMHS assessment.",
  },
  {
    id: "mh-12",
    source: "The Whole-Brain Child",
    sourceDetails: "Siegel & Bryson, Chapter 2: Two Halves of the Brain",
    category: "emotional",
    text: "A parent's mental health directly shapes their child's emotional development. Children are exquisitely sensitive to parental stress, anxiety, and depression — they detect it even when adults try to hide it. Parental depression increases a child's risk of mental health difficulties by roughly two to three times. Parental anxiety teaches children, through observational learning, that the world is dangerous. This is not about blame; it is about recognising that caring for yourself is caring for your child. If you are struggling with persistent low mood, overwhelming anxiety, or chronic exhaustion, seeking treatment is one of the most powerful interventions you can make for your child's wellbeing. Be honest with children in age-appropriate ways: 'Mummy is feeling a bit low at the moment, so I'm getting some help — it's not your fault, and I love you.' Children need to know that mental health difficulties are real, treatable, and nothing to be ashamed of — and they learn that from watching you.",
  },


  // === NEURODIVERGENCE ===
{
    id: "nd-1",
    source: "Driven to Distraction (Hallowell & Ratey)",
    sourceDetails: "Chapter 2: Diagnosis and Assessment of ADHD",
    category: "behavior",
    text: "ADHD is one of the most researched conditions in child psychiatry, yet diagnosis requires careful evaluation by a qualified professional. According to AAP guidelines and DSM-5 criteria, a child must show six or more symptoms of inattention or hyperactivity-impulsivity that persist for at least six months, appear before age 12, and cause significant impairment in two or more settings (such as home and school). Diagnosis is never made from a single observation or checklist—it requires comprehensive history-taking, input from parents and teachers, and ruling out other causes such as sleep disorders, anxiety, hearing problems, or thyroid conditions. Many bright children with ADHD mask their difficulties in early years, only to struggle when academic demands increase around third or fourth grade. Parents who suspect ADHD should document specific behaviors across settings, request a psychoeducational evaluation through their school district, and consult a pediatrician or child psychiatrist. Early identification matters: untreated ADHD increases risk for academic failure, low self-esteem, injuries, and later substance use. The good news is that with proper diagnosis, ADHD is highly manageable through behavioral strategies, educational support, and, when appropriate, medication.",
  },
  {
    id: "nd-2",
    source: "American Academy of Pediatrics (AAP) ADHD Guidelines",
    sourceDetails: "AAP Clinical Practice Guideline for ADHD (2019 Update)",
    category: "behavior",
    text: "The AAP recommends a multimodal approach to ADHD treatment, meaning the most effective plans combine multiple strategies rather than relying on one. For children aged 4-5, first-line treatment is behavioral parent training and classroom interventions; medication is reserved for cases where behavioral approaches alone do not produce sufficient improvement. For children 6 and older, the AAP recommends a combination of FDA-approved medication (typically stimulants such as methylphenidate or amphetamine-based formulations) plus behavioral therapy, with ongoing monitoring and dose adjustments. Parent training programs like Parent-Child Interaction Therapy (PCIT) and Triple P have strong evidence for reducing disruptive behaviors in young children with ADHD. The AAP emphasizes that treatment should be individualized—what works for one child may not work for another—and that clinicians should regularly reassess effectiveness, side effects, and growth. Follow-up visits every 3-6 months are recommended. Parents should understand that ADHD is a chronic condition requiring long-term management, not a one-time fix, and that treatment plans will evolve as the child grows and demands change.",
  },
  {
    id: "nd-3",
    source: "Smart but Scattered (Dawson & Guare)",
    sourceDetails: "Chapters 3-5: Executive Skills Assessment and Intervention",
    category: "behavior",
    text: "Executive function challenges are the hidden engine behind many ADHD struggles. These are the brain-based skills that allow us to plan, organize, initiate tasks, sustain attention, manage time, and regulate emotions. Dawson and Guare identify eleven core executive skills including response inhibition, working memory, emotional control, flexibility, sustained attention, task initiation, planning and prioritization, organization, time management, goal-directed persistence, and metacognition. Children are not born with these skills—they develop gradually through childhood and into the mid-twenties, with the prefrontal cortex maturing last. When a child has weak executive skills, parents often misread the behavior as laziness or defiance. The most effective interventions follow a sequence: first, modify the environment (create structure, reduce distractions, establish routines); second, teach the skill directly (break tasks into steps, use visual checklists); third, provide practice with fading support. External scaffolding—planners, timer apps, body-doubling, visual schedules—works far better than simply telling a child to 'try harder.' The goal is gradual transfer of responsibility: the parent provides heavy support initially, then systematically fades it as the child builds competence and independence.",
  },
  {
    id: "nd-4",
    source: "Uniquely Human (Barry Prizant)",
    sourceDetails: "Chapter 1: Understanding Autism as a Different Way of Being",
    category: "behavior",
    text: "Dr. Barry Prizant reframes autism not as a checklist of deficits to be corrected, but as a different way of experiencing and interacting with the world. This neurodiversity-affirming perspective recognizes that autistic behaviors—repetitive movements, intense special interests, sensitivity to sensory input, need for routine—are not problems to eliminate but strategies the child uses to cope, communicate, and find meaning. The key question shifts from 'How do we stop this behavior?' to 'What is this behavior telling us about what the child needs?' Prizant emphasizes that so-called challenging behaviors often arise when the child is overwhelmed, anxious, or unable to communicate effectively. By focusing on understanding the underlying trigger rather than suppressing the behavior, parents can address root causes. Building on strengths is central: an autistic child's deep interest in trains or dinosaurs can be a pathway to learning, social connection, and even future career paths. Early intervention matters, but the best programs build on the child's natural motivations rather than imposing external agendas. Acceptance does not mean giving up on growth—it means growing from a foundation of respect rather than correction.",
  },
  {
    id: "nd-5",
    source: "The Out-of-Sync Child (Carol Kranowitz)",
    sourceDetails: "Part One: Recognizing Sensory Processing Disorder",
    category: "behavior",
    text: "Sensory Processing Disorder (SPD) occurs when the brain has difficulty receiving and responding to information coming through the senses. A child with SPD may be over-responsive—finding normal sounds painfully loud, clothing tags unbearable, or certain food textures intolerable—or under-responsive, seeming not to notice pain, temperature, or their own body position. Some children are sensory-seeking, craving intense movement, deep pressure, or strong flavors. These differences are neurological, not behavioral choices. A child who melts down in a noisy grocery store is not being difficult—their nervous system is genuinely overwhelmed. Common signs include clumsy movements, resistance to messy activities, extreme reactions to transitions, unusually high or low activity levels, and difficulty with fine or gross motor tasks. SPD frequently co-occurs with ADHD and autism but can also exist independently. Occupational therapy with a sensory integration approach is the primary treatment, helping the child's nervous system process sensory input more adaptively through carefully designed activities. Parents can help by identifying triggers, creating sensory-friendly environments at home, building in 'sensory diet' activities throughout the day (e.g., jumping on a trampoline, using weighted blankets), and advocating for accommodations at school.",
  },
  {
    id: "nd-6",
    source: "The Explosive Child (Ross Greene)",
    sourceDetails: "Chapter 2: Meltdowns vs. Tantrums and the CPS Model",
    category: "behavior",
    text: "A critical distinction for parents of neurodivergent children: a tantrum is goal-directed behavior—a child wants something and uses behavior to get it. A meltdown is a neurological overload response—the child's brain is overwhelmed by unmet demands exceeding their capacity to cope, and the behavior is not purposeful. This distinction changes everything about how we respond. Dr. Ross Greene's Collaborative & Proactive Solutions (CPS) model starts from the premise that 'kids do well if they can,' not 'kids do well if they wanna.' When a neurodivergent child melts down, they lack the skills—flexibility, frustration tolerance, problem-solving—to handle the situation, not the motivation to behave. Greene's approach involves three steps: first, identify the specific unsolved problems (not vague labels like 'defiant'); second, gather the child's perspective through empathic conversation; third, collaborate on a realistic solution that addresses both the child's and adult's concerns. Punishment, exclusion, and consequences do not build missing skills and often escalate the situation. Prevention through proactive problem-solving—identifying and addressing lagging skills before they trigger crises—is far more effective than reactive discipline after a meltdown has begun.",
  },
  {
    id: "nd-7",
    source: "CDC Developmental Disabilities Resources / CHADD Guidance",
    sourceDetails: "School Accommodations: IEPs and 504 Plans",
    category: "behavior",
    text: "For neurodivergent children, appropriate school accommodations can be the difference between thriving and failing—not because the child cannot learn, but because standard classroom demands may not match their neurological profile. In the United States, two primary legal frameworks provide support. A 504 Plan (under the Rehabilitation Act) provides accommodations for students whose disability substantially limits learning but who do not require specialized instruction—examples include extended time on tests, preferential seating, movement breaks, reduced homework volume, and assistive technology. An IEP (Individualized Education Program, under IDEA) provides specialized instruction and related services tailored to the child's specific needs, with annual goals and regular progress monitoring. IEPs are more comprehensive and legally enforceable. Parents are equal members of the IEP team and should come prepared with documentation, specific goals, and data. Common accommodations for ADHD include extended time, chunked assignments, fidget tools, and check-in systems. For autism, accommodations might include visual schedules, social narratives, a quiet break space, and paraprofessional support. Requesting evaluations in writing triggers legal timelines schools must follow. Parents should know their rights, bring an advocate if needed, and review the plan at least annually.",
  },
  {
    id: "nd-8",
    source: "Driven to Distraction (Hallowell & Ratey) / AAP Guidelines",
    sourceDetails: "Chapter 9: Medication and Treatment Decisions",
    category: "behavior",
    text: "The decision to medicate a child for ADHD is deeply personal and should be made collaboratively by parents, the child's physician, and—when age-appropriate—the child themselves. Stimulant medications (such as methylphenidate-based Concerta, Ritalin, or amphetamine-based Vyvanse, Adderall) have the strongest evidence base of any treatment in child psychiatry, with response rates of 70-80%. They work by increasing dopamine and norepinephrine availability in the prefrontal cortex, improving focus, impulse control, and working memory. Non-stimulant options (atomoxetine, guanfacine, clonidine) may be preferred when stimulants cause side effects or if the child has co-occurring anxiety or tics. Common side effects include appetite suppression, sleep disruption, and mild growth concerns—all of which should be monitored. The AAP emphasizes starting with the lowest effective dose and titrating carefully. Importantly, medication does not cure ADHD; it manages symptoms while the child builds skills and compensatory strategies. Many families combine medication with behavioral therapy, school accommodations, and parent training for best results. Parents should avoid the extremes of either rejecting medication out of fear or viewing it as a standalone solution. Regular follow-up with the prescribing physician is essential, especially during growth spurts, school transitions, and adolescence.",
  },
  {
    id: "nd-9",
    source: "Uniquely Human (Prizant) / The Whole-Brain Child (Siegel & Bryson)",
    sourceDetails: "Social Skills and Connection for Neurodivergent Children",
    category: "behavior",
    text: "Social skills development for neurodivergent children should not be about forcing neurotypical behavior, but about building genuine connection and communication competence. Autistic children, for example, often socialize differently—preferring parallel play, connecting over shared interests, and communicating more comfortably in predictable, low-demand settings. Prizant warns against social skills programs that train 'normalcy' (mandatory eye contact, scripted conversations) which can increase anxiety and mask the child's authentic self. Instead, effective approaches build on the child's natural motivation: using special interests as bridges to peer connection, practicing social scenarios through role-play or video modeling, and providing structured social opportunities with clearly defined expectations. Siegel and Bryson's whole-brain approach complements this by emphasizing 'name it to tame it'—helping children identify and articulate their emotions as a foundation for social problem-solving. For children with ADHD, social challenges often stem from impulsivity (interrupting, difficulty waiting turns) rather than a lack of social understanding. Explicit coaching, immediate feedback, and small-group practice settings are most effective. Peer mentoring programs, where a socially skilled peer is paired with a neurodivergent child, also show promising results. The goal is meaningful relationships on the child's terms, not performance of neurotypical social norms.",
  },
  {
    id: "nd-10",
    source: "The Whole-Brain Child (Siegel & Bryson) / CHADD Family Resources",
    sourceDetails: "Sibling Dynamics in Neurodivergent Families",
    category: "behavior",
    text: "When one child is neurodivergent, sibling relationships require intentional attention. Typically developing siblings often experience a complex mix of feelings: love and protectiveness alongside resentment (over attention imbalance), embarrassment (especially in adolescence), guilt (for having negative feelings), and anxiety about their sibling's future. Siegel and Bryson emphasize acknowledging all feelings rather than dismissing them—siblings need permission to feel frustrated without being labeled as unsupportive. Parents can help by carving out one-on-one time with each sibling, explaining the neurodivergent child's condition in age-appropriate language, and avoiding the trap of making the sibling a 'third parent.' CHADD recommends being explicit about fairness versus equality: 'Fair doesn't mean everyone gets the same thing—it means everyone gets what they need.' Sibling support groups and camps can be invaluable, providing a space where children connect with peers who share similar family experiences. Parents should also be honest about challenges rather than presenting a perfect-family image. When siblings understand that challenging behaviors stem from neurological differences—not from being unloved—they develop greater empathy and resilience. Open, ongoing family communication about the neurodivergent child's needs—updated as siblings mature cognitively and emotionally—is protective for the entire family system.",
  },
  {
    id: "nd-11",
    source: "Smart but Scattered (Dawson & Guare) / Driven to Distraction (Hallowell)",
    sourceDetails: "Twice-Exceptional (2e): Giftedness and ADHD",
    category: "behavior",
    text: "Twice-exceptional (2e) children are those who are gifted in one or more areas while also having a learning, attention, or processing difference such as ADHD. These children are frequently misunderstood because their strengths mask their challenges and their challenges mask their strengths. A 2e child might read three grade levels ahead but cannot organize a backpack or complete a worksheet. They may solve complex math problems mentally but forget to write down homework. Teachers may see a 'lazy but smart' student; parents see a frustrated, underperforming child. Hallowell notes that undiagnosed 2e children are at high risk for depression and low self-esteem because they internalize the gap between their obvious intelligence and their inconsistent performance as personal failure. Key strategies: pursue comprehensive psychoeducational assessment to identify both giftedness and deficits; advocate for dual differentiation at school (enrichment plus accommodations); explicitly teach executive function skills rather than assuming giftedness transfers to organization; and address the emotional toll of asynchronous development—the child who discusses black holes at dinner but cannot tie their shoes. Dawson and Guare stress that 2e children need both challenge and support: reducing expectations without enrichment leads to boredom and underachievement, while pushing for high performance without scaffolding leads to burnout and meltdowns.",
  },
  {
    id: "nd-12",
    source: "The Explosive Child (Ross Greene) / The Out-of-Sync Child (Kranowitz)",
    sourceDetails: "Preventing and Managing Sensory-Driven Meltdowns",
    category: "behavior",
    text: "For children with sensory processing differences and ADHD, meltdowns are often predictable and therefore preventable. The first step is building a behavioral and sensory inventory: what are the specific triggers—crowded hallways, unexpected transitions, loud cafeterias, itchy clothing tags, hunger, sleep disruption? Most parents discover a pattern once they begin tracking antecedents rather than focusing only on the meltdown itself. Greene's CPS approach recommends proactively solving these predictable problems before they escalate. Practical prevention strategies include: giving advance warning of transitions with visual timers or countdown warnings; creating a sensory-friendly morning routine (laying out clothes the night before, reducing auditory clutter); building sensory breaks into the day (heavy work activities like carrying books, wall pushes, or movement breaks every 60-90 minutes); and teaching the child to recognize and communicate their own escalation signs ('My body feels buzzy') using a 5-point emotional scale. During an active meltdown, the goal is not teaching or discipline—it is regulation. Reduce sensory input (quiet space, dimmed lights), avoid verbal overload (use short phrases, not lectures), offer deep pressure if the child seeks it, and wait for the nervous system to reset. Post-meltdown, when the child is calm, is the time for collaborative problem-solving about what happened and what to try differently next time.",
  },


  // === FAMILY DIVERSITY ===
{
    id: "fs-1",
    source: "Two Homes, One Childhood",
    sourceDetails: "Robert Emery, Chapter 2: Two Homes, One Life",
    category: "co-parent",
    text: "Children adjust to divorce best when parents establish a predictable rhythm between two households rather than striving for exact equality. Research consistently shows that it is not the 50/50 schedule itself that matters, but the quality of the child's relationships in each home and the absence of conflict between parents. Children need to know that both homes are truly theirs — not that one is 'real' and the other is a visit. Give children a dedicated space in each home, even if modest. Avoid the language of 'visiting' a parent; instead, say 'living with Mom' and 'living with Dad.' Children who feel they belong in both homes show better emotional regulation and fewer anxiety symptoms. When transitions are handled calmly and on time, children internalize that the family is still intact, just reorganized. The goal is not perfection but reliability: consistent routines, clear expectations, and the repeated message that neither parent is going anywhere.",
  },
  {
    id: "fs-2",
    source: "The Co-Parenting Handbook",
    sourceDetails: "Mager & Deer, Chapter 4: The Transition Plan",
    category: "co-parent",
    text: "Effective co-parenting across two households requires a detailed parenting plan that anticipates everyday decisions and conflict points. Cover specifics: drop-off times and locations, how sick days are handled, who attends school events, how new partners will be introduced, and what happens on holidays that fall on non-scheduled days. The most resilient plans include a dispute-resolution clause — using a mediator or parenting coordinator before returning to court. Research from the American Academy of Matrimonial Lawyers shows that vague plans are the leading cause of repeated litigation. Children caught in ongoing scheduling disputes score higher on measures of stress and behavioral problems. Keep communication with your co-parent businesslike: brief, factual, and child-focused. Use shared calendars and parenting apps rather than texting arguments. Never use your child as a messenger; studies show children in messenger roles develop increased anxiety and resentment toward both parents. The plan should be reviewed annually and adjusted as developmental needs change.",
  },
  {
    id: "fs-3",
    source: "Peaceful Parent, Happy Kids",
    sourceDetails: "Laura Markham, Chapter 7: Connecting Through Change",
    category: "co-parent",
    text: "Helping children adjust to divorce begins with managing your own nervous system. Children are exquisitely attuned to their parents' emotional states; a dysregulated parent cannot calm a dysregulated child. Before telling children about the separation, process your own grief with a therapist or support system so you can deliver the news with steadiness. Use age-appropriate, blame-free language: 'Mom and Dad have decided to live in separate homes, but we both love you exactly the same.' Reassure children that the divorce is not their fault — this is the single most common fear among children of separating parents and persists across developmental stages. Expect regression: younger children may return to bedwetting or clinginess, older children may withdraw or act out. Meet these behaviors with connection rather than correction. Maintain existing bedtime and mealtime routines as much as possible during the first months. Consistency in daily rhythms provides the scaffolding children need to process larger structural changes without becoming overwhelmed.",
  },
  {
    id: "fs-4",
    source: "The Whole-Brain Child",
    sourceDetails: "Siegel & Bryson, Chapter 5: The United States of Me",
    category: "co-parent",
    text: "When introducing a new partner to children after divorce, timing and pacing are critical. Wait until the relationship is stable and likely long-term — typically at least six months of exclusivity. Research indicates that rapid introductions of multiple partners correlate with increased anxiety and behavioral regression in children. Start with brief, low-stakes encounters in neutral settings: meeting at a park or community event where the focus is the activity, not the introduction. Do not expect or force immediate warmth. Children may feel loyalty conflicts — being kind to a new partner can feel like betraying their other parent. Name this explicitly: 'You don't have to choose between anyone. It's okay to have mixed feelings.' Avoid overnight stays with a new partner during the first year of integration, as this is consistently linked to children's adjustment difficulties. Communicate with your co-parent before the introduction; surprise introductions undermine trust and co-parenting cooperation. The child's comfort level should drive the pace, not the adults' relationship timeline.",
  },
  {
    id: "fs-5",
    source: "Two Homes, One Childhood",
    sourceDetails: "Robert Emery, Chapter 6: Siblings and New Families",
    category: "co-parent",
    text: "Blended family sibling dynamics require patience and deliberate structuring. Do not expect stepsiblings to love each other immediately — forced affection creates resistance and resentment. Instead, create shared low-pressure activities: cooking together, board games, or outdoor adventures where interaction is natural but not forced. Give each child private space and alone time with their biological parent; losing exclusive access to a parent is a primary grief in blended families. Research on stepfamily integration shows that it typically takes two to four years for a blended family to develop genuine cohesion. During the early period, let the biological parent handle primary discipline while the stepparent builds connection through shared activities and emotional support. Stepparents who attempt to enforce rules before establishing relational trust consistently meet resistance. Validate all the children's feelings, including jealousy and frustration, without rushing to fix them. Family meetings where everyone can voice concerns — with ground rules of respect — help blended families negotiate shared space and norms collaboratively.",
  },
  {
    id: "fs-6",
    source: "AAP Guidance on Family Structure",
    sourceDetails: "American Academy of Pediatrics, Promoting Healthy Families",
    category: "co-parent",
    text: "Talking to children about family differences starts with your own grounded framing. Children notice early that families look different; by age four or five, most children compare their family to peers'. Rather than waiting for a difficult moment, proactively use books and everyday conversations to normalize diversity: 'Some kids live with their mom and dad, some live with grandparents, some have two moms, and every family is built on love.' Research from the AAP confirms that family structure itself — single parent, same-sex parents, adoptive, blended — is far less predictive of children's wellbeing than family stability, warmth, and the absence of chronic conflict. When children encounter questions or teasing, role-play responses at home: 'My family is my family, and families come in all kinds.' Avoid defensiveness; model calm confidence. If a child comes home upset about a comment, validate the hurt and explore it together rather than rushing to resolve it. Children whose parents handle these conversations with openness show stronger identity development and peer confidence.",
  },
  {
    id: "fs-7",
    source: "Family Process Journal Research",
    sourceDetails: "Family Process, Vol. 58: Adoptive Identity Development",
    category: "co-parent",
    text: "Adoptive children's identity development depends on honest, age-appropriate disclosure of their adoption story from the earliest years. Research published in Family Process shows that children who learn of their adoption after age seven show significantly higher rates of identity distress and trust issues. Make adoption a normal part of family narrative from toddlerhood: 'You grew in someone else's tummy, and then you came to be our child.' Use the child's actual adoption story, not a sanitized version. As children grow, their questions evolve — from 'Why didn't she keep me?' to 'Do I look like my birth parents?' to identity questions in adolescence. Answer honestly, acknowledging what you don't know. Maintain birth culture connections for transracial and international adoptions: food, language, community, and cultural mentors. Studies consistently show that transracial adoptees with strong cultural socialization show higher self-esteem and lower depression rates. Avoid framing adoption as rescue or charity; this places an unhealthy burden on the child. The healthiest narrative is one of love and belonging, not debt.",
  },
  {
    id: "fs-8",
    source: "AAP Guidance on Family Structure",
    sourceDetails: "American Academy of Pediatrics, Children of Same-Sex Parents",
    category: "co-parent",
    text: "Decades of research reviewed by the AAP and major psychological associations confirm that children raised by same-sex parents show social, emotional, and cognitive outcomes equivalent to those raised by different-sex parents. What matters is not the parents' gender configuration but the presence of stable, warm, responsive caregiving. Children of same-sex families typically demonstrate strong empathy and acceptance of diversity, likely reflecting their early exposure to navigating difference. However, these families should not be treated as symbols or political arguments — the children are simply children. Same-sex parents should proactively connect with affirming community networks, as social isolation and exposure to stigma are the primary risk factors, not anything about the family structure itself. Prepare children for potential questions from peers by practicing simple, confident explanations: 'I have two dads. That's just how my family is.' When children encounter exclusionary language from peers or adults, process it together: validate the hurt, reinforce that their family is whole and valid, and decide together whether to respond or let it go.",
  },
  {
    id: "fs-9",
    source: "Peaceful Parent, Happy Kids",
    sourceDetails: "Laura Markham, Chapter 9: Culture, Language, and Belonging",
    category: "co-parent",
    text: "Multicultural and bilingual families thrive when both cultures are given genuine, lived presence rather than symbolic acknowledgment. Research shows that children in bilingual homes where both languages are actively used develop stronger executive function and metalinguistic awareness. Assign languages thoughtfully — the 'one parent, one language' approach works well, but any consistent system is effective as long as each language gets sufficient daily exposure. Celebrate both cultural traditions meaningfully: not just food and holidays, but values, communication styles, and family roles. Children who feel pressure to choose one identity over the other show increased anxiety and lower self-esteem. Name the complexity openly: 'You get to be both, and that's a gift.' When extended family members criticize the bicultural approach — pressuring assimilation or rejecting the second language — present a unified front as parents. Children need to see that both parents value both cultures. Connect with other multicultural families for community support; isolation magnifies the challenges of navigating cultural differences within a single household.",
  },
  {
    id: "fs-10",
    source: "The Co-Parenting Handbook",
    sourceDetails: "Mager & Deer, Chapter 8: Extended Family Boundaries",
    category: "co-parent",
    text: "Managing extended family boundaries is one of the most under-discussed challenges in diverse family structures. Grandparents, aunts, and uncles may hold strong opinions about divorce, same-sex parenting, adoption, or blended families — and their commentary can undermine children's security. Set clear boundaries early and enforce them consistently: 'In our family, we don't speak negatively about other family members in front of the children. If you can't respect that, visits will be shorter.' Children who hear extended family criticize their family structure internalize that their family is somehow wrong or lesser. Research shows that perceived family stigma from relatives is associated with increased child anxiety and lower family cohesion. Conversely, supportive extended family is a powerful protective factor. Distinguish between family members who need education and those who are persistently undermining. For the first group, a calm conversation about your family's values can shift behavior. For the second, limit children's exposure. Your job is to protect your child's sense of home and belonging, not to manage everyone else's comfort.",
  },
  {
    id: "fs-11",
    source: "Dinosaurs Divorce",
    sourceDetails: "Marc Brown & Laurie Krasny Brown, A Guide for Changing Families",
    category: "co-parent",
    text: "Helping children handle questions about their family structure requires giving them concrete, developmentally appropriate language. Children as young as five can learn to say, 'My parents are divorced, so I have two houses' or 'I was adopted, which means my parents chose me.' The key is brief, factual statements that don't over-explain or invite debate. Practice through role-play before birthday parties, school events, or new friendships where questions may arise. Children who have rehearsed responses feel confident rather than caught off guard. If a peer asks an intrusive question, teach your child that it's okay to say 'That's private' or simply change the subject. Not every question deserves an answer. Monitor for signs that questions are turning into teasing or bullying: withdrawal, school refusal, or sudden behavioral changes. In those cases, involve teachers and school counselors proactively. Children whose parents equip them with both language and permission to decline questions show significantly greater confidence in navigating social situations about family differences.",
  },
  {
    id: "fs-12",
    source: "Two Homes, One Childhood",
    sourceDetails: "Robert Emery, Chapter 4: Consistency Without Rigidity",
    category: "co-parent",
    text: "Maintaining consistency across two households does not mean identical rules. It means shared core values and coordinated expectations on the issues that matter most: homework completion, bedtime range, screen time limits, and behavioral standards. Research shows that children adapt readily to household differences in meals, chores, and weekend routines — these are experienced as variety, not instability. What children struggle with is contradictory messaging about values: one parent enforcing kindness and respect while the other models hostility toward the co-parent. Align on three to five core family rules and communicate them to both homes. Let go of micro-managing the other household; attempting to control what happens during the other parent's time is the single greatest source of co-parenting conflict. When disagreements about rules arise, discuss them privately, never in front of the children. Use the phrase 'In our house, we...' rather than 'Your mom/dad is wrong.' Children who experience their parents as a cooperative team — even across distance — show better academic performance, stronger peer relationships, and lower anxiety than those living in ongoing conflict.",
  },


  // === FINANCIAL STRESS ===
{
    id: "fc-1",
    source: "Scarcity",
    sourceDetails: "Mullainathan & Shafir, Chapters 1-3",
    category: "parent",
    text: "Financial stress creates a 'cognitive tax' — research shows that worrying about money consumes mental bandwidth equivalent to losing roughly 13 IQ points. This helps explain why parents under financial strain may snap at their children, forget appointments, or struggle with patience. Recognizing this is not personal failure; it's a documented psychological response to scarcity. The first step is self-compassion. Build 'slack' into your day wherever possible: prepare meals in advance, lay out clothes the night before, create simple routines that reduce decision fatigue. When you feel overwhelm rising, name it internally: 'I'm under stress, this isn't about my child.' Taking a brief pause — even 30 seconds of deep breathing — can interrupt the stress cycle. Tag-team with a partner, friend, or neighbor when you need a reset moment. Your child doesn't need a perfect parent; they need one who can mostly regulate their nervous system, even under pressure. Protecting your own emotional capacity is not selfish — it's the foundation of effective parenting under scarcity.",
  },
  {
    id: "fc-2",
    source: "How to Talk So Kids Will Listen",
    sourceDetails: "Faber & Mazlish, Chapter 6",
    category: "parent",
    text: "Children are perceptive. They notice when parents argue about money, when groceries are different, when activities are declined. Rather than hiding financial reality, reframe it age-appropriately. For children under 6, keep it simple: 'We're choosing to spend our money on what we need most right now, like food and our home.' For ages 7-11, be more specific but reassuring: 'Money is a bit tight this month, so we can't do that activity, but we always have what we need.' Avoid burdening children with adult-level details — they cannot process mortgage stress or debt. Instead of 'We can't afford that,' try 'That's not in our budget this month,' which frames it as a choice rather than a deprivation. Never use phrases like 'You're costing us too much' — children will internalize that they are a burden. The goal is honesty without anxiety: acknowledge reality, model problem-solving, and always reassure them that the family is safe and will be okay.",
  },
  {
    id: "fc-3",
    source: "American Academy of Pediatrics",
    sourceDetails: "AAP Policy Statement: Child Poverty and Toxic Stress",
    category: "parent",
    text: "Food insecurity affects roughly 1 in 6 children in many developed nations, and its developmental impact is significant. Children who experience consistent hunger or inadequate nutrition show higher rates of behavioral problems, anxiety, and difficulty concentrating in school. Iron deficiency alone, common in food-insecure households, is linked to lasting cognitive deficits. If your family is facing food insecurity, accessing support is not a sign of failure — it is an act of good parenting. Programs like SNAP, WIC, school meal programs, food banks, and community pantries exist precisely for this purpose. Prioritize nutrient-dense foods when possible: beans, eggs, frozen vegetables, and whole grains are affordable staples. If your child complains of being hungry at school, speak with administrators about free meal programs — many schools offer them without requiring visible stigma. Protecting your child's access to adequate nutrition is one of the most powerful interventions for their long-term cognitive and emotional development.",
  },
  {
    id: "fc-4",
    source: "American Journal of Public Health",
    sourceDetails: "Housing Instability and Child Wellbeing Research",
    category: "parent",
    text: "Housing instability — frequent moves, overcrowding, eviction threats, or living in substandard conditions — is associated with elevated rates of childhood anxiety, depression, and academic disruption. Each school change mid-year can set a child back academically by months. If your family is facing housing uncertainty, focus on what you can control: maintaining routines, keeping familiar objects (a blanket, books, toys) with you, and preserving bedtime rituals even in temporary living situations. Children's security comes more from relational stability than from the physical house. Be honest in age-appropriate terms: 'We're going to stay with Grandma for a little while so we can figure out our living situation. We're safe, and we're together.' Maintain school enrollment if at all possible — consistency in education is a powerful protective factor. Connect with school counselors who can provide additional support and may know of resources. If you rent, familiarize yourself with tenant rights; many communities have legal aid services that help families facing wrongful eviction at no cost.",
  },
  {
    id: "fc-5",
    source: "Peaceful Parent, Happy Kids",
    sourceDetails: "Markham, Section on Emotional Regulation",
    category: "parent",
    text: "When parents carry financial anxiety, it often leaks out as irritability, impatience, or emotional distance — and children absorb it. Research on Adverse Childhood Experiences (ACEs) shows that chronic parental stress is one of the most significant risk factors for long-term child health outcomes. This means managing your own stress is not a luxury; it's a parenting intervention. Free stress-regulation practices are effective: 5 minutes of deep breathing daily, walking outdoors, journaling, or talking with a trusted friend. Many communities offer free or sliding-scale counseling through community mental health centers, faith-based organizations, or university training clinics. Online resources like 7 Cups, Crisis Text Line, or local warmlines provide free emotional support. Sleep is critical — sleep deprivation dramatically reduces emotional resilience. If financial worries are keeping you awake, try a 'worry dump' before bed: write down every concern, then close the notebook. Tomorrow's you can address them; tonight's you needs rest to parent well.",
  },
  {
    id: "fc-6",
    source: "Mindset",
    sourceDetails: "Dweck, Chapters 5-7",
    category: "parent",
    text: "Children's self-worth should never be tied to material wealth. Research on growth mindset shows that children who base their identity on effort, character, and relationships — rather than possessions or social status — are more resilient and emotionally secure. To build this foundation, praise what children control: 'I noticed how hard you worked on that drawing,' 'You were really kind to your sister today,' 'You didn't give up on that math problem.' Avoid equating gifts with love. Instead of 'I bought this because I love you,' try 'I love spending time with you.' Normalize non-material expressions of value: family game nights, nature walks, cooking together, telling stories. When your child compares themselves to wealthier peers, validate the feeling first: 'It can feel hard when friends have things we don't.' Then redirect: 'What makes you proud of who you are that has nothing to do with money?' Help them name their strengths — loyalty, creativity, humor, kindness. These are identity anchors that material scarcity cannot shake.",
  },
  {
    id: "fc-7",
    source: "The Gift of Failure",
    sourceDetails: "Lahey, Chapters on Resilience and Overprotection",
    category: "parent",
    text: "Some of the most meaningful enrichment activities for children cost nothing. Research consistently shows that unstructured play, time in nature, and family connection build cognitive and emotional skills more effectively than expensive programs. Public libraries offer free books, audiobooks, movie rentals, story times, and STEM activities. Most museums have free or 'pay-what-you-wish' days. National and local parks provide free outdoor education. Cooking together teaches math, science, and life skills. Gardening — even in containers on a windowsill — teaches patience, biology, and responsibility. Community centers, Boys & Girls Clubs, YMCA financial assistance programs, and local recreation departments often offer sports and arts at reduced or no cost. Free online resources like Khan Academy, Code.org, and PBS Kids provide high-quality educational content. The goal isn't to replicate what wealthier families purchase — it's to provide rich, engaging experiences that foster curiosity. Children remember how they felt during activities far more than what those activities cost.",
  },
  {
    id: "fc-8",
    source: "How to Talk So Kids Will Listen",
    sourceDetails: "Faber & Mazlish, Chapter 4",
    category: "parent",
    text: "Birthdays and holidays can trigger enormous financial pressure, but children's memories are shaped by emotion, not expense. Research on memory formation shows that novelty, surprise, and connection — not cost — create lasting positive memories. For birthdays, make the day feel special through ritual rather than spending: breakfast in bed, a 'yes day' with free activities, a handwritten letter describing what you love about them, a special homemade cake. For holidays, focus on traditions — movie nights, light tours in the neighborhood, homemade decorations, cookie baking. If your child wants a specific gift that's beyond budget, be honest: 'I know you really want that. It's not something we can do this year, but I've been thinking about something I think you'll really enjoy.' Talk to extended family about pooling resources or contributing experiences rather than multiple gifts. Avoid going into debt for holidays — the stress of that debt harms the family far more than a smaller celebration. Children feel loved through presence, not presents.",
  },
  {
    id: "fc-9",
    source: "American Academy of Pediatrics",
    sourceDetails: "AAP Guidance: School Readiness and Peer Dynamics",
    category: "parent",
    text: "School costs — supplies, field trips, uniforms, technology, class parties — can create intense budget pressure and feelings of inadequacy for both parents and children. Talk with teachers and school administrators early; many schools have discretionary funds, supply closets, or fee waivers that are offered confidentially. Never let embarrassment prevent you from asking — schools expect these requests and handle them discreetly. For peer pressure around brands, technology, or experiences, help your child develop language: 'That's cool, but I'm happy with what I have.' Validate the challenge: 'It can feel hard when friends have things we don't. That's real.' Then refocus on values: 'In our family, we care more about being kind and curious than about having the newest stuff.' Encourage friendships with children from diverse economic backgrounds. Teach critical thinking about advertising and social media — help them understand that companies profit from making people feel they need things they don't. Media literacy is a protective skill that lasts a lifetime.",
  },
  {
    id: "fc-10",
    source: "The Price of Inequality",
    sourceDetails: "Stiglitz, research on social safety nets",
    category: "parent",
    text: "Government assistance and community resources are not charity — they are public investments in families and children that yield documented societal returns. Every dollar spent on early childhood nutrition, for example, returns an estimated $3-10 in long-term outcomes. If your family is struggling, access every resource available without shame: SNAP/WIC for nutrition, Medicaid/CHIP for healthcare, LIHEAP for energy costs, Head Start for early education, Section 8 or public housing waitlists, TANF for temporary cash assistance, EITC at tax time (many eligible families don't claim it), school free/reduced meal programs, and local 211 helplines that connect families to resources. Community organizations — food banks, faith communities, diaper banks, clothing closets, mutual aid networks — fill gaps that government programs don't reach. Keep a list of resources on your phone. Share information with other parents; many families don't access programs simply because they don't know about them. Using these resources is using systems your tax dollars (and community) have built. It is not failure — it is accessing infrastructure designed to support families.",
  },
  {
    id: "fc-11",
    source: "Scarcity",
    sourceDetails: "Mullainathan & Shafir, Chapters 5-6 on Scarcity Mindset",
    category: "parent",
    text: "Scarcity mindset — the constant mental tunneling that comes from not having enough — can become a self-reinforcing cycle that passes between generations. When parents are consumed by survival decisions, they may unconsciously transmit anxiety about money to children, who then carry scarcity beliefs into adulthood. Breaking this cycle starts with awareness. Notice language: instead of 'We'll never have enough,' try 'We're working on our situation, and we have what we need right now.' Instead of 'Money is evil,' try 'Money is a tool we're learning to manage.' Teach basic financial literacy early and age-appropriately: young children can sort coins and learn saving; older children can help comparison-shop or budget for a family meal. Include them in small financial decisions so money becomes a normal topic, not a source of fear. Model problem-solving: 'We can't afford that right now, so let's think of a creative alternative.' Healing scarcity mindset doesn't require wealth — it requires shifting from fear-based tunnel vision to possibility-based thinking. This is one of the most powerful gifts a parent can give.",
  },
  {
    id: "fc-12",
    source: "CDC",
    sourceDetails: "CDC Adverse Childhood Experiences (ACEs) Research",
    category: "parent",
    text: "CDC research on Adverse Childhood Experiences identifies parental economic hardship as a significant ACE that increases lifetime risk for depression, substance use, chronic disease, and reduced life expectancy. But the research also reveals powerful protective factors. The single most important buffer against ACEs is the presence of at least one stable, caring adult relationship. That relationship doesn't require money — it requires consistency, attunement, and emotional availability. Parents under financial stress who can maintain warmth, routine, and connection are actively protecting their children's long-term health. Other protective factors include community connection (even one trusted neighbor or mentor helps), access to basic services, and children's own sense of competence and agency. If you grew up in poverty yourself, you may carry your own ACEs — be aware that financial stress can trigger intergenerational patterns. Seeking support for your own trauma (through counseling, support groups, or faith communities) is one of the most effective ways to protect your children. Healing yourself is parenting work.",
  },


  // === GIFTED & LEARNING DISABILITIES ===
{
    id: "gd-1",
    source: "Giftedness 101",
    sourceDetails: "Linda Kreger Silverman, Chapter on Characteristics of Gifted Children",
    category: "school",
    text: "Gifted children often show asynchronous development — their cognitive abilities race far ahead of their emotional or physical maturity. A six-year-old might discuss black holes in detail but melt down over a bumped knee or a lost crayon. This uneven growth is the hallmark of giftedness, not a sign something is wrong. Parents should avoid assuming a child's reasoning ability means they can handle emotional situations at the same level. Recognize that your child may need scaffolding in areas where their age peers are fine — emotional regulation, social skills, or fine motor tasks. Silverman emphasizes that the wider the gap between a child's mental age and chronological age, the more support they need, not less. Validate their intense feelings even when they seem disproportionate to the situation. Give them language for their emotions and avoid saying 'you're too smart to act like this.' Intellectual brilliance and emotional vulnerability coexist. Meeting the child where they are — in each domain separately — is far more effective than treating them as a single 'advanced' unit.",
  },

  {
    id: "gd-2",
    source: "NAGC",
    sourceDetails: "National Association for Gifted Children, 'Recognizing Giftedness' Parent Resources",
    category: "school",
    text: "Recognizing giftedness early helps children get appropriate support. Common signs include: unusually large vocabulary and early reading; deep, sustained interest in specific topics; rapid learning with little repetition; keen observation and memory; intense curiosity and persistent questioning; sensitivity to fairness or injustice; advanced sense of humor. Giftedness is not limited to academic ability — it can manifest in creative, artistic, leadership, or athletic domains. Importantly, gifted children from underserved populations, English learners, and children with learning disabilities are frequently overlooked. If you suspect your child is gifted, document specific examples of advanced behaviors and bring them to your child's teacher. Request a formal evaluation through your school district or a private psychologist. Early identification matters because unchallenged gifted children can become bored, disengaged, or begin to underachieve — sometimes masking their abilities entirely to fit in socially.",
  },

  {
    id: "gd-3",
    source: "Mindset",
    sourceDetails: "Carol S. Dweck, Chapter 'The Truth About Ability and Achievement'",
    category: "school",
    text: "Many gifted children tie their identity to being 'the smart one,' which makes perfectionism and fear of failure their biggest barriers. When school always came easily, the first real challenge feels like evidence they're not smart after all. Dweck's research shows that praising intelligence — 'You're so clever!' — actually increases risk avoidance. Children begin to avoid hard tasks because failing would threaten their identity as a smart person. Instead, praise effort, strategy, and persistence: 'I'm impressed by how many different approaches you tried.' Teach your child that the brain grows stronger through struggle, just like a muscle. Normalize mistakes as part of learning — share your own. When a gifted child says 'I can't do this,' add 'yet.' Help them see that easy work isn't a compliment; it means they're not growing. Encourage them to seek out challenges where they might not get an A. A child who learns to value effort over innate ability develops resilience that carries them through college, career, and life far more reliably than raw talent alone.",
  },

  {
    id: "gd-4",
    source: "The Mislabeled Child",
    sourceDetails: "Brock Eide & Fernette Eide, Chapters on Twice-Exceptional Children",
    category: "school",
    text: "Twice-exceptional (2e) children are gifted but also have a learning difference — ADHD, autism, dyslexia, or another condition. Their giftedness can mask their difficulty, and their difficulty can mask their giftedness, leaving them poorly served by both gifted and special education programs. A child might write brilliantly creative stories but be unable to complete a worksheet. Another might solve complex math mentally but crash emotionally over a small transition. The Eides stress that these children are not contradictions — their strengths and challenges come from the same neurological wiring. If your child is gifted but struggling, push for evaluation in both directions: giftedness and learning differences. Avoid the trap of thinking a child is 'smart enough to compensate.' Compensation is exhausting and leads to burnout, anxiety, and underachievement. The goal is to support both sides: provide enrichment for their gifted abilities while giving accommodations for their challenges. These children thrive when adults see the whole child rather than forcing a single label.",
  },

  {
    id: "gd-5",
    source: "Overcoming Dyslexia",
    sourceDetails: "Sally Shaywitz, Chapters on Diagnosis and Intervention",
    category: "school",
    text: "Dyslexia is a neurobiological difference in how the brain processes language — not a sign of low intelligence. With structured literacy instruction, dyslexic children become capable readers. Shaywitz's research confirms that early intervention is critical but improvement is possible at any age. Key strategies: use explicit, systematic phonics instruction (Orton-Gillingham or similar multi-sensory approaches); read aloud to your child daily to build vocabulary and comprehension even while decoding skills catch up; provide audiobooks so your child accesses grade-level content; break reading and writing tasks into smaller steps; reduce timed testing pressure. Advocate for an IEP or 504 plan at school that includes accommodations like extended time, assistive technology, and alternative assessment formats. Most importantly, protect your child's self-esteem. Dyslexic children often feel they're 'stupid' because reading — the one skill the world constantly measures — is hard for them. Remind them that dyslexia comes with real strengths: big-picture thinking, problem-solving, spatial reasoning, and creativity. With the right support, dyslexic children become confident, capable learners.",
  },

  {
    id: "gd-6",
    source: "The Dyslexic Advantage",
    sourceDetails: "Brock Eide & Fernette Eide, Material vs Non-Material Advantages",
    category: "school",
    text: "Dyscalculia is a specific learning disability affecting number sense and mathematical reasoning — the numerical equivalent of dyslexia. Children with dyscalculia may struggle to recognize quantities, memorize math facts, understand place value, or grasp the logic of operations. They are not 'bad at math' due to laziness or low intelligence; their brains process numerical information differently. Effective support includes: concrete, hands-on learning with physical manipulatives before moving to abstract symbols; explicit instruction connecting visual representations to numbers; extra time and untimed assessments; reducing worksheet length to prevent overwhelm; using technology like calculators for computation once concepts are understood; and connecting math to real-world contexts. Avoid timed math drills, which create anxiety and reinforce the belief that the child 'can't do math.' Advocate for formal evaluation through your school if math difficulties persist despite extra help. Pair remediation with accommodation — teach the missing skills while providing tools that allow the child to engage with grade-level math concepts. Like dyslexia, dyscalculia comes with compensating strengths that deserve recognition and development.",
  },

  {
    id: "gd-7",
    source: "Smart but Scattered",
    sourceDetails: "Peg Dawson & Richard Guare, Chapters on Executive Skills and School Engagement",
    category: "school",
    text: "When a gifted child says school is boring, it usually means the work isn't challenging enough — or it's repetitive beyond what their mastery requires. Boredom can quickly slide into disengagement, behavior problems, or learned helplessness. First, validate: 'I hear that this feels too easy. Let's figure out what to do.' Talk with the teacher about differentiation — compacting the curriculum (skip what's mastered), enrichment projects, cluster grouping with other advanced learners, or subject acceleration. At home, feed their passions with books, documentaries, courses, museum visits, and mentorships. Avoid framing schoolwork as something to rush through — instead, help them find depth. Encourage independent projects where they set the pace and topic. If the school cannot or will not accommodate, consider whether a different classroom, program, or grade skip is appropriate. Watch for signs that boredom has become something deeper — anxiety about standing out, fear of trying hard things, or withdrawal. A bored gifted child who stops caring about learning is harder to re-engage the longer it goes unaddressed.",
  },

  {
    id: "gd-8",
    source: "Wrightslaw",
    sourceDetails: "Peter Wright & Pamela Wright, Wrightslaw Special Education Law & Advocacy",
    category: "school",
    text: "Effective advocacy with teachers requires preparation, documentation, and partnership — not confrontation. Start by assuming the teacher wants to help. Bring specific evidence: work samples, test scores, and written observations of your child's behavior. Request meetings in writing and keep records of every conversation. If your child needs an IEP or 504 plan, understand your rights under IDEA and Section 504 before the meeting. Wrightslaw emphasizes: put everything in writing, including follow-up emails after meetings summarizing what was agreed. Don't accept vague promises — request specific accommodations with timelines. If the school resists evaluation, cite the specific legal language requiring them to respond within their state's timeline. Bring a support person to meetings if needed. Frame requests around your child's needs, not what you think the school should do differently. Use 'I' statements: 'I've noticed my child completes math three grades above level but struggles to stay focused in reading — can we discuss options?' If you hit resistance, escalate calmly through the chain of command. You are your child's most important advocate, and persistence pays off.",
  },

  {
    id: "gd-9",
    source: "Raising An Emotionally Intelligent Child",
    sourceDetails: "John Gottman, Chapter on Emotion-Coaching Gifted and Intense Children",
    category: "school",
    text: "Gifted children often experience emotions with unusual depth and intensity — what psychologist Kazimierz Dabrowski called 'overexcitabilities.' They may be emotionally volatile, deeply empathetic, perfectionistic, or overwhelmed by sensory input. These intensities are not pathology; they're part of the gifted profile. Gottman's emotion-coaching approach works especially well: notice the emotion, see it as an opportunity for connection, listen with empathy, help label the feeling, then problem-solve together. Avoid dismissing ('It's not a big deal') or fixing too quickly. A child who cries because a drawing isn't perfect isn't being dramatic — they're experiencing a real, intense frustration. Name it: 'That felt really important to you, and it didn't come out the way you wanted. That's so hard.' Teach calming strategies: deep breathing, movement breaks, journaling. Help your child understand that feeling things deeply is a strength, not a weakness. Over time, intense children who learn to manage their emotions become passionate, driven, empathetic adults. The goal isn't to reduce their intensity — it's to give them tools to channel it.",
  },

  {
    id: "gd-10",
    source: "Giftedness 101",
    sourceDetails: "Linda Kreger Silverman, Chapter on Social and Emotional Needs",
    category: "school",
    text: "Gifted children often face social challenges that adults underestimate. They may struggle to find peers who share their intense interests, feel out of sync with age-mates, or deliberately hide their abilities to fit in — a phenomenon Silverman calls 'passing.' Some gifted kids prefer the company of adults or older children, which is developmentally appropriate for their mental age but can create social friction at school. Help your child find their tribe: gifted programs, online communities, special-interest clubs, summer camps, or mentorships where they can be themselves without masking. Teach social skills explicitly — how to join a game, how to disagree without lecturing, how to let others contribute — without making their natural intensity feel like a problem. Avoid pushing them to 'be normal.' Instead, broaden their social repertoire while honoring who they are. If your child is being bullied or excluded, take it seriously and involve the school. Social isolation is a significant risk for gifted children, and meaningful connection with even one like-minded peer can transform their school experience and wellbeing.",
  },

  {
    id: "gd-11",
    source: "The Whole-Brain Child",
    sourceDetails: "Daniel J. Siegel & Tina Payne Bryson, Chapters on Integration and Creativity",
    category: "school",
    text: "Children drawn to creative and artistic pursuits — music, visual art, theater, writing — need intentional support that goes beyond talent lessons. Siegel's whole-brain approach emphasizes integration: connecting the logical left brain with the creative right brain. Encourage creative children to practice their craft regularly while also developing reflective skills — journaling about their process, articulating what their work means to them, and receiving constructive feedback without crumbling. Arts-magnet and specialized programs can provide rigorous training and like-minded peers, but watch for unhealthy pressure: intense competition, perfectionism, and identity collapse if a performance falls short. Help your child build identity beyond their art: 'You are a musician, and you are also a friend, a reader, a curious person.' Protect unstructured creative time — not every drawing needs to be a portfolio piece. If your child attends an arts-focused school, stay in regular contact with teachers about workload and emotional load. Creative kids thrive when they feel safe to experiment, fail, and try again. The goal is sustaining a lifelong creative practice, not burning out before college.",
  },

  {
    id: "gd-12",
    source: "Mindset",
    sourceDetails: "Carol S. Dweck, Chapters on Giftedness, Pressure, and Healthy Achievement",
    category: "school",
    text: "Gifted and high-achieving children often carry enormous pressure — from parents, teachers, peers, and themselves. Left unchecked, this pressure produces anxiety, perfectionism, sleep deprivation, and sometimes a crisis of identity when they inevitably hit a wall. Balance achievement with wellbeing by modeling it yourself: talk about your own mistakes, show that your love is never contingent on grades or awards, and prioritize sleep, exercise, and family time. Dweck's research underscores that children who develop a growth mindset — valuing learning over performance — are more resilient under pressure. Help your child set goals that focus on improvement, not just outcomes. Celebrate the process: the practice session, the draft, the tutoring session. Watch for warning signs: sudden grade drops, withdrawal from activities they used to love, physical symptoms like headaches or stomachaches, or excessive self-criticism. If you see these, slow down. Consider reducing extracurricular load or seeking counseling. No achievement is worth a child's mental health. The most successful adults aren't the ones who peaked at sixteen — they're the ones who learned to sustain effort and joy over a lifetime.",
  },




  // === PSYCHOLOGICAL THEORIES ===
{
    id: "psy-1",
    source: "Attachment (Bowlby)",
    sourceDetails: "John Bowlby, Attachment and Loss Vol. 1",
    category: "emotional",
    text: "Attachment theory, developed by John Bowlby, proposes that children are biologically predisposed to form a strong emotional bond with a primary caregiver, typically the mother. This attachment relationship serves as a secure base from which the child explores the world and a safe haven to return to in times of distress. Bowlby argued that the quality of this early bond shapes the child's internal working model — a mental blueprint of relationships that influences emotional regulation, self-worth, and social expectations throughout life. When caregivers respond consistently and warmly to a child's needs, the child develops trust and confidence. Inconsistent or absent responses can lead to anxiety, withdrawal, or difficulty forming healthy relationships later. For parents, the practical takeaway is clear: being emotionally available and responsive to your child's signals — crying, reaching, vocalizing — builds the foundation for lifelong emotional security. You don't need to be perfect; you need to be reliably present and attuned. Repairing ruptures in connection, such as after a misunderstanding or conflict, is itself a powerful attachment-building process.",
  },
  {
    id: "psy-2",
    source: "Patterns of Attachment (Ainsworth)",
    sourceDetails: "Mary Ainsworth, Strange Situation research",
    category: "emotional",
    text: "Mary Ainsworth's Strange Situation experiments identified four distinct attachment patterns in children. Secure attachment (Type B) describes children who trust their caregiver as a secure base, show distress during separation, and seek comfort upon reunion, then quickly return to exploration. Anxious-ambivalent attachment (Type C) occurs when caregiving is inconsistent; these children are clingy, intensely distressed by separation, and display anger or resistance upon reunion, struggling to be soothed. Avoidant attachment (Type A) develops when caregivers are emotionally unavailable or rejecting; these children appear indifferent to separation and avoid contact upon reunion, though physiological measures show they are actually stressed. Disorganized attachment (Type D) is seen in children whose caregivers are frightening or frightened, often linked to trauma or abuse; these children show contradictory behaviors like approaching with averted gaze. Parents should understand that secure attachment is not about constant presence but about consistent, attuned responsiveness. Even parents with difficult childhoods can raise securely attached children through mindful, reparative parenting — the relationship can be healed and rewired at any age.",
  },
  {
    id: "psy-3",
    source: "Patterns of Attachment (Ainsworth)",
    sourceDetails: "Ainsworth, Maternal Sensitivity Scale",
    category: "emotional",
    text: "Ainsworth identified maternal sensitivity — the ability to accurately perceive and respond to the child's signals — as the most important factor in building secure attachment. The Sensitivity Scale measures four dimensions: awareness of the child's signals, accurate interpretation of those signals, appropriate and prompt response, and the quality of the response. Crucially, Ainsworth found that caregivers need not be flawless; it is the overall pattern of responsiveness that matters, not occasional missteps. Research has shown that parents who engage in serve-and-return interactions — responding warmly and consistently to a child's bids for attention — help build robust neural architecture that underpins emotional and cognitive development. Serving-and-returning mimics a tennis rally: the child initiates through babbling, gesturing, or crying, and the caregiver responds with eye contact, words, or touch. Parents should know that sensitivity is a learnable skill, not an innate trait. Even parents who were not sensitively parented themselves can develop attunement through practice, reflection, and sometimes therapeutic support.",
  },
  {
    id: "psy-4",
    source: "Child Development (Berk)",
    sourceDetails: "Laura Berk, Parenting Styles chapter",
    category: "emotional",
    text: "Diana Baumrind's seminal research identified three primary parenting styles, later expanded to four by Maccoby and Martin. Authoritative parenting — high in warmth and high in structure — is consistently associated with the best child outcomes: academic success, emotional regulation, strong social skills, and high self-esteem. These parents set clear expectations and enforce reasonable limits, but they also explain the reasoning behind rules and are responsive to their children's emotional needs. Authoritarian parenting — high in control but low in warmth — relies on obedience, punishment, and rigid rules. Children raised this way tend to be obedient but anxious, socially withdrawn, and lower in self-esteem, and they may rebel during adolescence. Permissive parenting — high in warmth but low in structure — produces children who struggle with self-control, entitlement, and difficulty handling frustration. Uninvolved parenting — low in both warmth and structure — is associated with the poorest outcomes, including behavioral problems and attachment difficulties. The research is clear: warmth without limits or limits without warmth both fall short. Children thrive when parents are kind AND firm.",
  },
  {
    id: "psy-5",
    source: "Child Development (Berk)",
    sourceDetails: "Laura Berk, Parenting Styles — Authoritative deep dive",
    category: "emotional",
    text: "Among Baumrind's parenting styles, authoritative parenting is the gold standard, supported by decades of cross-cultural research. Authoritative parents create a warm, emotionally supportive environment while maintaining clear, age-appropriate expectations. They use reasoning rather than coercion, encourage independence within safe boundaries, and discipline through natural consequences and discussion rather than punishment. A hallmark of authoritative parenting is the bidirectional communication style: parents listen to the child's perspective, validate feelings, and involve the child in problem-solving. This approach fosters internalized moral reasoning — children behave well because they understand and agree with the values, not because they fear punishment. Longitudinal studies show that children of authoritative parents demonstrate greater emotional resilience, better academic performance, stronger peer relationships, and lower rates of anxiety and depression. Importantly, authoritative parenting adapts to the child's temperament and developmental stage. What looks authoritative with a toddler (redirecting and explaining) differs from what it looks like with a teenager (collaborative rule-setting). The unifying thread is respect: the parent respects the child as a person while maintaining their role as a guide and authority.",
  },
  {
    id: "psy-6",
    source: "Social Learning Theory (Bandura)",
    sourceDetails: "Albert Bandura, Modeling and Observational Learning",
    category: "emotional",
    text: "Albert Bandura's Social Learning Theory revolutionized our understanding of how children learn by demonstrating that much of behavior is acquired through observation and imitation rather than direct reinforcement. The famous Bobo Doll experiment showed that children who watched an adult act aggressively toward an inflatable doll were significantly more likely to replicate that aggressive behavior — even without any reward. This finding has profound implications for parenting. Children are constantly watching and internalizing how their parents handle stress, conflict, disappointment, and relationships. If you want your child to be calm, kind, and resilient, you must model those behaviors yourself. Lecturing children about emotional regulation while yourself yelling in frustration sends a mixed message, and children overwhelmingly learn from what you do, not what you say. Bandura also identified vicarious learning — children learn by observing the consequences of others' behavior. When siblings see one child praised for honesty or sharing, they internalize that prosocial behavior is valued. The practical lesson: you are your child's most powerful teacher, not through instruction, but through the behavior you model every day.",
  },
  {
    id: "psy-7",
    source: "Social Learning Theory (Bandura)",
    sourceDetails: "Bandura, Self-Efficacy and Agency",
    category: "emotional",
    text: "Bandura expanded Social Learning Theory to include the concept of self-efficacy — a person's belief in their ability to succeed in specific situations. For children, self-efficacy develops through four primary pathways: mastering new skills through effort, watching peers succeed at similar tasks (modeling), receiving specific and genuine encouragement from trusted adults, and learning to interpret their physiological states (e.g., butterflies in the stomach as excitement rather than fear). Parents play a crucial role by providing appropriately challenging tasks, celebrating effort and strategy rather than just outcomes, and avoiding comparison with siblings or peers that can undermine confidence. When children develop strong self-efficacy, they approach challenges with persistence rather than avoidance. They bounce back from failures more quickly because they attribute setbacks to specific, fixable factors rather than permanent personal flaws. Parents should focus on mastery experiences — giving children opportunities to struggle productively and succeed through their own effort — while offering scaffolding and support rather than taking over or rescuing. The goal is to help children build a sense of agency: I can figure this out.",
  },
  {
    id: "psy-8",
    source: "Child Development (Berk)",
    sourceDetails: "Erik Erikson, Psychosocial Stages 1-4",
    category: "emotional",
    text: "Erik Erikson's theory of psychosocial development describes eight stages across the lifespan, each defined by a central conflict. Trust vs. Mistrust (0-1 year) centers on whether the world feels safe and predictable; responsive caregiving helps babies develop trust. Autonomy vs. Shame and Doubt (1-3 years) emerges as toddlers assert independence — me do it — and need parents who allow safe exploration without criticism or controlling interference. Initiative vs. Guilt (3-6 years) sees preschoolers planning and initiating activities; parents who encourage curiosity and pretend play foster a sense of purpose, while overly controlling responses breed guilt. Industry vs. Inferiority (6-12 years) involves school-age children developing competence through academics, hobbies, and friendships; success builds confidence, while repeated failure or negative comparisons erode self-worth. Each stage builds on the previous one, so unresolved conflicts can cascade. However, Erikson emphasized that development is lifelong and repair is always possible. Parents who understand these stages can anticipate developmental needs: a toddler needs room to try, a preschooler needs encouragement to dream, and a school-age child needs meaningful opportunities to build real skills.",
  },
  {
    id: "psy-9",
    source: "Child Development (Berk)",
    sourceDetails: "Erik Erikson, Psychosocial Stages 5-8",
    category: "emotional",
    text: "Erikson's later psychosocial stages are deeply relevant for parents of tweens, teens, and young adults — and for parents' own growth. Identity vs. Role Confusion (12-18 years) is the famous adolescent crisis: Who am I? What do I believe? Teens need space to explore values, roles, and identity while knowing their parents remain a stable anchor. Overly rigid parenting during this stage can push teens toward rebellion or conformity without genuine self-knowledge. Intimacy vs. Isolation (18-40 years) involves the ability to form deep, committed relationships, which depends on having a stable sense of identity. Generativity vs. Stagnation (40-65 years) is about contributing to the next generation — for parents, this is the core of the parenting mission. Generative parents mentor, guide, and invest in their children's future. Integrity vs. Despair (65+ years) involves reflecting on a life well-lived. For parents, understanding these stages normalizes the push-pull of adolescence and highlights the importance of supporting exploration rather than control. It also reminds parents that their own psychological growth is intertwined with their children's.",
  },
  {
    id: "psy-10",
    source: "Child Development (Berk)",
    sourceDetails: "Jean Piaget, Cognitive Development Stages",
    category: "emotional",
    text: "Jean Piaget's theory of cognitive development describes how children construct knowledge through active exploration. The Sensorimotor stage (0-2 years) involves learning through senses and motor actions; babies discover object permanence — that things continue to exist even when out of sight — a milestone that underlies separation anxiety. The Preoperational stage (2-7 years) is marked by symbolic thinking and language, but also by egocentrism — the child genuinely cannot see another's perspective. This explains why a four-year-old may genuinely believe you know what happened at preschool without being told. The Concrete Operational stage (7-11 years) brings logical thinking about concrete events, conservation understanding, and the ability to take others' perspectives. The Formal Operational stage (11+ years) enables abstract, hypothetical reasoning. For parents, Piaget's theory underscores the importance of matching expectations to developmental capacity. A toddler is not being selfish when they can't share — they genuinely cannot yet conceptualize another child's feelings. Understanding cognitive stages helps parents respond with patience and design age-appropriate learning experiences rather than expecting reasoning abilities beyond the child's current stage.",
  },
  {
    id: "psy-11",
    source: "Child Development (Berk)",
    sourceDetails: "Lev Vygotsky, Zone of Proximal Development",
    category: "emotional",
    text: "Lev Vygotsky's Sociocultural Theory emphasizes that cognitive development is fundamentally shaped by social interaction and cultural context. His most influential concept is the Zone of Proximal Development (ZPD): the gap between what a child can do independently and what they can achieve with guidance from a more skilled partner. Learning happens most powerfully in this zone. Vygotsky called the support a knowledgeable person provides scaffolding — gradually fading assistance as the child gains competence. For parents, this means finding the sweet spot between challenge and support. If a task is too easy, the child is bored; too hard, they are frustrated; in the ZPD, they are engaged and growing. Practical applications include breaking complex tasks into manageable steps, offering hints rather than answers, modeling the thinking process aloud, and gradually withdrawing help as the child gains confidence. Vygotsky also emphasized the role of cultural tools — language, symbols, routines — in shaping thought. The way parents talk with children about problems, read together, and share cultural practices directly shapes cognitive development. Learning is inherently social.",
  },
  {
    id: "psy-12",
    source: "Child Development (Berk)",
    sourceDetails: "Murray Bowen, Family Systems Theory",
    category: "emotional",
    text: "Murray Bowen's Family Systems Theory views the family not as a collection of individuals but as an interconnected emotional unit. A core concept is differentiation of self — the ability to maintain one's own emotional balance while staying connected to important others. Parents with low differentiation tend to be emotionally reactive, passing anxiety through the family system. Children in such families may absorb parental anxiety and act it out behaviorally. Bowen also described triangulation, a dysfunctional pattern where tension between two family members (often the parents) is displaced onto a third (often a child), creating a stable but unhealthy dynamic. For example, a parent who is frustrated with a spouse may over-focus on a child's behavior, and the child's problems may intensify as the couple's conflict remains unaddressed. Healthy families maintain open, direct communication and avoid using children as emotional outlets or allies in adult conflicts. The practical lesson for parents: work on your own emotional regulation, address partner conflicts directly, and ensure your child is not carrying the weight of adult emotional burdens. The parent's emotional health is the family's emotional health.",
  },
  {
    id: "psy-13",
    source: "The Whole-Brain Child (Siegel)",
    sourceDetails: "Dan Siegel & Tina Payne Bryson, Integration of Brain Hemispheres",
    category: "emotional",
    text: "Dan Siegel's Whole-Brain Child approach translates neuroscience into practical parenting strategies. A central principle is integration — connecting the logical left hemisphere with the emotional right hemisphere. Young children are often dominated by the right brain: intense emotions, nonverbal expression, and gut reactions. When a child is emotionally flooded, left-brain logic (lectures, reasoning) cannot get through. Siegel recommends the Name It to Tame It strategy: helping the child verbally label their feelings engages the left hemisphere, which begins to calm the emotional right hemisphere. Only after emotional connection has been established should parents attempt problem-solving or correction. Siegel also distinguishes between the upstairs brain (prefrontal cortex — responsible for reasoning, planning, empathy, and emotional regulation) and the downstairs brain (brainstem and limbic system — responsible for survival reactions and strong emotions). In a tantrum, the downstairs brain has hijacked the system. Parents should first connect and soothe, then engage the upstairs brain through questions, choices, and reflection. Building this neural architecture through repeated co-regulation experiences helps children gradually develop the capacity to self-regulate.",
  },
  {
    id: "psy-14",
    source: "Mindset (Dweck)",
    sourceDetails: "Carol Dweck, Growth vs. Fixed Mindset",
    category: "emotional",
    text: "Carol Dweck's research on mindsets identifies two core beliefs about ability. A fixed mindset holds that intelligence, talent, and personality traits are static — you either have them or you don't. A growth mindset holds that abilities can be developed through effort, strategy, and feedback. Decades of research show that children with a growth mindset achieve more, persist longer through difficulties, and view mistakes as learning opportunities rather than evidence of inadequacy. The most well-known parenting application involves praise: praising effort, strategy, and persistence (You worked really hard on that) builds a growth mindset, while praising ability (You're so smart) fosters a fixed mindset. Children praised for intelligence tend to avoid challenges that might reveal they are not smart, while children praised for effort seek out challenges. Dweck also emphasizes the power of the word yet: I can't do this yet transforms a dead end into a journey. Parents can model growth mindset by talking openly about their own learning process, normalizing mistakes, and focusing on improvement rather than comparison. The message children need is: your brain grows when you struggle.",
  },
  {
    id: "psy-15",
    source: "Self-Compassion (Neff)",
    sourceDetails: "Kristin Neff, Three Components of Self-Compassion",
    category: "emotional",
    text: "Kristin Neff's self-compassion framework offers a powerful alternative to self-criticism, and it is especially relevant for parents and children. Self-compassion has three components: self-kindness (treating yourself with the warmth you would offer a friend rather than harsh judgment), common humanity (recognizing that struggle and imperfection are universal human experiences, not personal failings), and mindfulness (holding painful emotions in awareness without suppressing or over-identifying with them). For parents, self-compassion is a protective factor against burnout and is strongly linked to more patient, attuned parenting. Parents who practice self-compassion model emotional resilience for their children. Research shows that self-compassionate parents are less likely to be reactive, dismissive, or guilt-driven, and their children develop higher self-compassion and lower anxiety. Teaching children self-compassion involves helping them notice their inner critic, reframe self-critical thoughts with kindness, and understand that everyone struggles. Instead of What's wrong with me?, a self-compassionate child learns This is hard, and it's okay to be struggling. Self-compassion is not self-pity or lowering standards — it is a sustainable source of motivation that is far more effective than self-criticism.",
  },
  {
    id: "psy-16",
    source: "Child Development and Personality (Thomas & Chess)",
    sourceDetails: "Thomas & Chess, Temperament Theory",
    category: "emotional",
    text: "Alexander Thomas and Stella Chess identified nine temperament traits that are present from birth and remain relatively stable: activity level, rhythmicity (regularity of biological functions), approach/withdrawal to new situations, adaptability, intensity of reaction, threshold of responsiveness, quality of mood, distractibility, and attention span and persistence. These traits cluster into three temperamental patterns: easy (regular, adaptable, positive mood), difficult (irregular, intense, negative reactions to change), and slow-to-warm-up (mild, initially withdrawn but gradually adapting). Crucially, Thomas and Chess introduced the concept of goodness of fit — the match between a child's temperament and the environment's expectations. When parents understand and work with their child's temperament rather than against it, children thrive. A high-intensity, highly active child needs outlets for physical energy, not labels of being bad. A slow-to-warm-up child needs time and patience with transitions, not pressure to be outgoing. Parents should resist comparing siblings or wishing their child had a different temperament. Instead, adapt your parenting to meet the child where they are. Temperament is not destiny — it is a starting point that interacts with parenting and environment to shape personality.",
  },
  {
    id: "psy-17",
    source: "Child Development (Berk)",
    sourceDetails: "Lawrence Kohlberg, Stages of Moral Development",
    category: "emotional",
    text: "Lawrence Kohlberg's theory of moral development describes how moral reasoning progresses through three levels. At the Preconventional level (typically ages 4-10), children obey rules to avoid punishment or earn rewards — morality is about what's in it for me. At the Conventional level (ages 10-adolescence and beyond), individuals follow rules because they value social approval, law, and order — good people follow the rules. At the Postconventional level (reached by some adults), moral reasoning is based on abstract principles such as justice, human rights, and ethical consistency — sometimes laws may be unjust and must be challenged. For parents, this framework is invaluable. A four-year-old who complies with rules only to avoid a time-out is operating within their developmental capacity — this is not a moral failure. Similarly, a teenager preoccupied with peer approval and social norms is at the conventional level, which is age-appropriate. Parents can support moral growth by using moral reasoning in discipline: explaining not just what the rule is but why it matters, how it affects others, and engaging children in discussions about fairness and ethical dilemmas as they mature.",
  },
  {
    id: "psy-18",
    source: "Ordinary Magic (Masten)",
    sourceDetails: "Ann Masten, Resilience Theory",
    category: "emotional",
    text: "Ann Masten's landmark research on resilience reframes it as ordinary magic — not a rare trait of exceptional individuals, but the result of ordinary, adaptive processes that protect development under stress. Resilience is not a fixed characteristic; it is a dynamic process involving the interaction of multiple protective factors. These include secure attachment relationships, positive parenting, cognitive ability and self-regulation, motivation and agency, effective schools, and cultural or community connections. Masten's research demonstrates that the single most powerful protective factor for a child is at least one stable, caring, and committed relationship with an adult — and that adult is often a parent. Resilience is built through ordinary daily interactions: comforting a crying child, helping with homework, setting and enforcing consistent limits, listening to feelings, and modeling coping strategies. Crucially, resilience can be fostered at any age. Even children who have experienced significant adversity can develop resilience when protective factors are strengthened. Parents should not try to eliminate all stress from children's lives — manageable stress, with support, builds coping capacity. The goal is not to shield children from all difficulty but to be the steady presence that helps them navigate it.",
  },
  {
    id: "psy-19",
    source: "Child Development (Berk)",
    sourceDetails: "Deci & Ryan, Self-Determination Theory",
    category: "emotional",
    text: "Self-Determination Theory (SDT), developed by Edward Deci and Richard Ryan, identifies three universal psychological needs that drive motivation and well-being: autonomy (feeling that one's actions are self-chosen and aligned with personal values), competence (feeling effective and capable), and relatedness (feeling connected to and cared about by others). When these needs are met, children are naturally motivated, curious, and engaged. When they are thwarted, children become compliant (doing things only for rewards), resistant, or disengaged. For parenting, SDT offers specific guidance. Support autonomy by offering age-appropriate choices, explaining the reasons behind rules, and allowing children to participate in decision-making — rather than using controlling language like Because I said so. Build competence by providing appropriately challenging tasks, giving specific feedback on effort and strategy, and avoiding doing things for children that they can do themselves. Nurture relatedness through warm, responsive, and unconditional acceptance — making sure children know your love is not contingent on performance or behavior. Research consistently shows that autonomy-supportive parenting produces children who are more self-motivated, academically successful, and emotionally healthy than children raised with controlling or pressuring approaches.",
  },
  {
    id: "psy-20",
    source: "Child Development (Berk)",
    sourceDetails: "James Marcia, Identity Status Theory",
    category: "emotional",
    text: "James Marcia expanded on Erikson's identity stage by describing four identity statuses based on two dimensions: exploration (actively questioning and considering alternatives) and commitment (having made firm decisions about values, beliefs, and goals). Identity Achievement represents the ideal outcome — the person has explored options and made genuine, personal commitments. Moratorium describes active exploration without yet having committed — this is the often messy, experimental phase common in adolescence. Foreclosure occurs when a person has made commitments without genuine exploration, typically adopting parents' or authorities' values wholesale. Identity Diffusion describes a state of neither exploration nor commitment — a sense of drift or apathy. For parents, this framework is a roadmap for supporting adolescent development. Teens in moratorium may experiment with different identities, peer groups, beliefs, and appearances — this is healthy, not alarming. Parents should resist the urge to force foreclosure by pressuring teens to adopt their values or identity prematurely. Instead, facilitate exploration: discuss different perspectives, expose teens to diverse experiences and role models, ask open-ended questions, and allow safe experimentation. Identity achieved through personal exploration is far more durable and internally motivating than identity imposed by external authority.",
  },


  // === PSYCHOLOGICAL THEORIES PART 2 ===
{
    id: "psy2-1",
    source: "Erik Erikson - Childhood and Society",
    sourceDetails: "Erik H. Erikson, Stage 3: Initiative vs. Guilt (ages 3-5)",
    category: "emotional",
    text: "Erikson's psychosocial stage of Initiative vs. Guilt captures children aged three to five as they begin to assert control and power over their environment through play and social interaction. Parents play a pivotal role during this phase. When children are encouraged to plan activities, make up games, and initiate interactions with peers, they develop a sense of initiative and confidence. When adults are overly controlling, dismissive, or critical of these efforts, children may develop pervasive guilt that stifles their natural curiosity. The practical takeaway for parents is to create safe spaces where children can lead. Let them choose which game to play, which outfit to wear, or which book to read. Resist the urge to correct every mistake. If a child builds a wobbly tower out of blocks, celebrate the effort rather than fixing it for them. Mistakes at this age are not failures but essential data-gathering. Overcorrection communicates that their ideas are wrong, breeding self-doubt. Asking open-ended questions like 'What do you think will happen if…?' fosters the planning and problem-solving skills that define this developmental stage. Balance freedom with gentle boundaries so initiative flourishes within a safe structure.",
  },
  {
    id: "psy2-2",
    source: "Diana Baumrind - Parenting Styles Research",
    sourceDetails: "Baumrind, Child Development (1991), Authoritative Parenting Outcomes",
    category: "emotional",
    text: "Baumrind's decades of research consistently identify authoritative parenting as producing the most favorable developmental outcomes. Authoritative parents are warm and responsive, yet they maintain clear expectations and consistent boundaries. Their children tend to demonstrate higher self-esteem, stronger social competence, better academic performance, and lower rates of behavioral problems than children raised under authoritarian, permissive, or neglectful styles. The key distinction is that authoritative parents explain the reasons behind rules rather than demanding blind obedience. They listen to their children's perspectives while still holding firm on non-negotiable values. Research across diverse cultural contexts has largely replicated these findings, though the specific expression of warmth and control may vary by culture. To practice this approach, narrate your reasoning aloud: 'We wear helmets because they protect your brain, and your brain is precious.' When children understand the why behind a rule, they internalize the value rather than merely complying out of fear. Combine this with active warmth, frequent expressions of love, and genuine interest in their world. Authoritative parenting is not about being perfect but about being both loving and limit-setting in consistent measure.",
  },
  {
    id: "psy2-3",
    source: "Lev Vygotsky - Mind in Society",
    sourceDetails: "Vygotsky (1978), Zone of Proximal Development",
    category: "emotional",
    text: "Vygotsky's Zone of Proximal Development (ZPD) describes the sweet spot between what a child can do independently and what they can only achieve with guidance. Learning and growth happen most powerfully within this zone. A child who can zip their jacket with a reminder but not yet on their own is operating in the ZPD for that skill. The parent's role is to provide scaffolding, temporary support that bridges the gap between current ability and potential mastery. Effective scaffolding involves breaking tasks into manageable steps, offering hints rather than solutions, and gradually withdrawing support as competence grows. If your child is learning to read, you might read every other sentence at first, then every other paragraph, then listen without intervening. The art is calibrating the challenge so it stretches without overwhelming. Too much help breeds dependence; too little breeds frustration. Watch your child closely for signs of cognitive strain, such as shutting down or acting out. These signals indicate the task has moved beyond the ZPD into the frustration zone. Back up, simplify, and rebuild momentum. Scaffolding is not about rushing development but about walking alongside it.",
  },
  {
    id: "psy2-4",
    source: "Lawrence Kohlberg - Moral Development Theory",
    sourceDetails: "Kohlberg, Essays on Moral Development, Stages 1-4",
    category: "emotional",
    text: "Kohlberg's theory of moral development traces how children progress from obedience based on punishment avoidance through social conformity and ultimately toward principled ethical reasoning. For parents, the practical application lies in matching moral conversations to the child's developmental stage while gently stretching them toward the next level. Young children operate at the preconventional level, where rules are obeyed to avoid consequences. This is developmentally normal and not a sign of moral deficiency. Rather than shaming a child for being motivated by reward or fear, parents can gradually introduce questions about fairness and empathy: 'How do you think your sister felt when you took her toy?' School-age children move toward conventional morality, where being good means meeting social expectations and maintaining relationships. This is an ideal time to discuss family values, community responsibility, and why honesty matters even when no one is watching. Avoid lecturing. Instead, use real-life dilemmas, stories, and movies as prompts for ethical discussion. Ask 'What would you do?' and genuinely listen. Children who are invited to reason through moral questions rather than being handed answers develop stronger internal moral compasses.",
  },
  {
    id: "psy2-5",
    source: "James Marcia - Identity Status Theory",
    sourceDetails: "Marcia, Developmental Psychology (1966), Identity Statuses",
    category: "emotional",
    text: "Marcia expanded on Erikson's identity stage by describing four statuses that adolescents move through: diffusion, foreclosure, moratorium, and achievement. In diffusion, the teenager has neither explored options nor made commitments regarding values, beliefs, or future direction. Foreclosure occurs when they adopt parental values wholesale without questioning them. Moratorium is an active period of exploration and experimentation. Achievement is the resolution where the young person has explored and personally committed to a coherent identity. Parents often panic during the moratorium stage, when teens try on different personas, friendships, beliefs, and even styles. This exploration is not rebellion but a healthy and necessary process. Research shows that adolescents who are permitted to explore are more likely to reach identity achievement, while those pressured into premature foreclosure often experience identity confusion later in adulthood. Support exploration without judgment. If your teen announces they want to be vegan, study art, or change their name, resist the urge to dismiss it as a phase. Ask curious questions. Share your own values without insisting they adopt them. Identity cannot be handed to a young person; it must be forged through genuine exploration and personal choice.",
  },
  {
    id: "psy2-6",
    source: "Urie Bronfenbrenner - Ecological Systems Theory",
    sourceDetails: "Bronfenbrenner (1979), The Ecology of Human Development",
    category: "emotional",
    text: "Bronfenbrenner's ecological systems theory positions the child at the center of concentric circles of influence. The microsystem is the immediate environment of family, school, and peers. The mesosystem is the interaction between these settings, such as the relationship between home and school. The exosystem includes settings the child never directly enters but which affect them, such as a parent's workplace. The macrosystem is the broader cultural and societal context. For parents, the most actionable insight is the importance of the mesosystem, the connections between the different worlds your child inhabits. When parents and teachers communicate regularly and present a united front, children feel more secure and perform better academically and socially. Conversely, when home and school send contradictory messages, children experience confusion and anxiety. Practical steps include attending school events, building relationships with your child's teachers, coordinating behavioral strategies between home and school, and maintaining consistent routines across settings. Also recognize how exosystem factors like your work stress indirectly impact your child. A demanding job may reduce your emotional availability at home. Naming this dynamic, rather than pretending it does not exist, helps children understand that stress is not their fault.",
  },
  {
    id: "psy2-7",
    source: "Alfred Adler - Individual Psychology",
    sourceDetails: "Adler, Understanding Human Nature; Birth Order Research",
    category: "emotional",
    text: "Adlerian psychology emphasizes that children's position within the family constellation significantly shapes their personality development and behavior. Firstborn children often receive undivided attention early in life and may develop conscientious, responsible traits, but they can also struggle when dethroned by a sibling. Middle children frequently develop strong negotiation and social skills as they navigate between older and younger siblings, sometimes feeling overshadowed. Youngest children may become charming and creative as they find novel ways to gain attention, though they can also become overly dependent. Adler cautioned that these are tendencies, not destinies. The critical parenting lesson is to avoid pigeonholing children into family roles. Labels like 'the responsible one,' 'the peacemaker,' or 'the baby' can become self-fulfilling prophecies that limit a child's sense of possibility. Instead, give each child individual attention that reflects their unique interests and temperament rather than their birth order. Adlerian parent education programs emphasize encouragement over praise, natural consequences over punishment, and family meetings where children participate in collaborative problem-solving. Treating each child as a whole person rather than a position in a lineup fosters healthier self-concept and more balanced sibling dynamics.",
  },
  {
    id: "psy2-8",
    source: "John Gottman - Raising an Emotionally Intelligent Child",
    sourceDetails: "Gottman (1997), Meta-Emotion Philosophy",
    category: "emotional",
    text: "Gottman's research on meta-emotion, how parents feel about feelings, identified three distinct approaches with dramatically different outcomes. Emotion-coaching parents notice emotions as natural opportunities for connection and teaching. They validate the child's experience, help label the emotion, and collaboratively problem-solve while setting behavioral limits. Children raised by emotion-coaching parents show better academic performance, stronger friendships, fewer behavioral problems, and greater emotional resilience. Emotion-dismissing parents tend to ignore, minimize, or distract from negative emotions, sending the message that feelings are unimportant or inconvenient. Emotion-disapproving parents actively criticize or punish emotional expression, teaching children to suppress feelings entirely. Both dismissing and disapproving approaches correlate with higher rates of anxiety, aggression, and difficulty regulating emotion. The path toward emotion coaching begins with self-awareness. Notice your own reflexive response when your child cries or tantrums. Do you rush to fix it, tell them to stop, or sit with them in the feeling? Try simply being present first. Say 'I see you are really frustrated' before moving to solutions. Children who feel understood regulate faster and develop a richer emotional vocabulary over time.",
  },
  {
    id: "psy2-9",
    source: "John Bowlby - Attachment Theory",
    sourceDetails: "Bowlby, Attachment and Loss Vol. 1 (1969), Internal Working Models",
    category: "emotional",
    text: "Bowlby proposed that early attachment experiences create internal working models, cognitive-emotional blueprints that shape a child's expectations about relationships throughout life. A child who consistently receives comfort when distressed develops a model of the world as safe and of themselves as worthy of care. A child who is met with inconsistency or rejection may internalize a model where relationships are unreliable and their needs do not matter. These models are remarkably persistent but not permanent. Every responsive interaction gently revises the blueprint. When a parent repairs a disconnection, returning to their child after losing patience and offering a sincere reconnection, they teach that ruptures can be healed. This is one of the most powerful protective factors in emotional development. Parents do not need to be perfectly attuned; they need to be reliably available and willing to repair. The concept of earned secure attachment, demonstrated in adult attachment research, shows that positive relationship experiences can overwrite negative internal models even later in life. This means that a parent's own insecure attachment history does not doom their child. What matters most is the pattern of showing up, misstepping, and reconnecting again and again over the years.",
  },
  {
    id: "psy2-10",
    source: "Mary Ainsworth - Attachment Research",
    sourceDetails: "Ainsworth, Blehar, Waters & Wall (1978), Strange Situation",
    category: "emotional",
    text: "Ainsworth's Strange Situation procedure revealed distinct attachment patterns by observing how infants responded to brief separations and reunions with their caregivers. Securely attached children explore freely when the parent is present, show distress during separation, and are quickly comforted upon reunion. Anxious-ambivalent children cling to the parent, show extreme distress when separated, and display anger and resistance upon reunion, seemingly unable to be soothed. Avoidant children appear indifferent to the parent's departure and actively avoid contact upon return, though physiological measures reveal hidden distress. Research has linked secure attachment to stronger peer relationships, better emotion regulation, higher self-esteem, and greater resilience across the lifespan. The encouraging finding from intervention studies is that attachment patterns can shift. When parents become more consistent, responsive, and emotionally available, children move toward greater security. The most important predictor of a child's attachment security is not the parent's perfection but their capacity for reflective functioning, the ability to mentally hold the child's inner world in mind. When you wonder what your child is feeling beneath their behavior, you are engaging in exactly the kind of mentalizing that builds secure attachment over time.",
  },
  {
    id: "psy2-11",
    source: "Donald Winnicott - The Maturational Processes",
    sourceDetails: "Winnicott (1960), Good-Enough Mothering; Transitional Objects",
    category: "emotional",
    text: "Winnicott's concept of the good-enough mother revolutionized parenting psychology by arguing that perfect caregiving is neither possible nor desirable. In early infancy, the parent adapts almost completely to the baby's needs, creating an illusion of omnipotence. As the child grows, the parent gradually and tolerably fails to meet every need, introducing the child to frustration and reality in manageable doses. This calibrated failure is what builds frustration tolerance, coping skills, and eventual independence. Winnicott also identified transitional objects, the blankets, stuffed animals, and special items that children use to comfort themselves when the parent is absent. These objects serve as a bridge between dependence and autonomy, allowing the child to internalize a sense of safety that originates from the caregiving relationship. Parents sometimes worry when a child becomes intensely attached to a beloved object, but this is a sign of healthy development, not pathology. Never shame a child for their comfort object or use it as leverage. Respect its importance, bring it along during transitions, and trust that the child will gradually outgrow the need when their internal sense of security is strong enough to stand alone.",
  },
  {
    id: "psy2-12",
    source: "Jean Piaget - Cognitive Development",
    sourceDetails: "Piaget, Concrete Operational Stage (ages 7-11)",
    category: "emotional",
    text: "Piaget's concrete operational stage, spanning roughly ages seven to eleven, marks a dramatic cognitive leap. Children become capable of logical reasoning about concrete events, conservation of quantity, classification by multiple attributes, and perspective-taking that extends beyond egocentrism. However, they still struggle with purely abstract or hypothetical reasoning, which emerges later in the formal operational stage. For parents, this means understanding that a seven-year-old can follow multi-step logical instructions but may become confused by metaphors or abstract moral lectures. When explaining a rule like honesty, use concrete examples and stories rather than philosophical abstractions. Instead of saying 'lying undermines trust,' try 'when you told your friend you would come to their party and then did not show up, how did their face look? How do you think they felt?' Concrete operational thinkers grasp cause and effect best when it is grounded in tangible, observable reality. This is also the stage where children become avid collectors and organizers. Encourage classification hobbies like rock collecting, trading cards, or cataloging insects. These activities exercise the cognitive muscles of categorization, seriation, and logical ordering that define this developmental period. Meet your child where their brain actually is.",
  },
  {
    id: "psy2-13",
    source: "Diana Baumrind - Parenting Styles Research",
    sourceDetails: "Baumrind (2012), Distinguishing Authoritative from Authoritarian Parenting",
    category: "emotional",
    text: "Baumrind drew a sharp distinction between authoritative and authoritarian parenting that is frequently misunderstood. Authoritative parents are high in both warmth and expectations. They set clear standards, enforce boundaries consistently, and explain their reasoning. Critically, they also encourage autonomy and invite the child's input within age-appropriate limits. Authoritarian parents are high in control but low in warmth. They demand obedience, use punishment as a primary tool, and discourage questioning. The developmental outcomes differ dramatically. Children of authoritative parents show higher social competence, emotional regulation, and academic achievement. Children of authoritarian parents may comply superficially but often exhibit higher anxiety, lower self-esteem, and greater aggression toward peers. They also tend to rebel during adolescence when parental surveillance decreases. The practical differentiator is not how many rules you have but how you enforce them. Do you explain the reasoning behind expectations? Do you listen to your child's perspective before deciding? Can you flex when circumstances warrant it? Authoritative does not mean permissive. It means holding high standards while treating your child as a thinking, feeling person whose perspective matters. This balance builds both competence and character in ways that rigid control never can.",
  },
  {
    id: "psy2-14",
    source: "Diana Baumrind & Julie Lythcott-Haims",
    sourceDetails: "Baumrind (1995, Overcontrol); Lythcott-Haims, How to Raise an Adult (2015)",
    category: "emotional",
    text: "Research on overparenting, encompassing both Baumrind's work on excessive control and Lythcott-Haims's analysis of helicopter and snowplow parenting, reveals a paradox: the more parents attempt to smooth their child's path, the worse the developmental outcomes. Overparenting manifests in three common forms. Helicopter parents hover, monitoring every detail of their child's life. Snowplow parents clear obstacles before the child even encounters them. Lawnmower parents mow down challenges retroactively, intervening to fix problems the child could resolve independently. Studies link overparenting to higher rates of anxiety, depression, narcissism, and poor life satisfaction in young adults. Children who never face manageable struggle fail to develop self-efficacy, the belief that they can overcome challenges through their own effort. To counter this tendency, practice the rule of stepping back before stepping in. When your child faces a difficulty, ask yourself whether it is genuinely unsafe or merely uncomfortable. If it is uncomfortable, resist intervening. Let them experience the friction of solving a problem with a friend, completing a forgotten homework assignment, or navigating a disappointment. Resilience is not built by parents who remove every obstacle but by children who learn they can climb over them.",
  },
  {
    id: "psy2-15",
    source: "Albert Bandura - Social Cognitive Theory",
    sourceDetails: "Bandura (1997), Self-Efficacy: The Exercise of Control",
    category: "emotional",
    text: "Bandura defined self-efficacy as a person's belief in their capacity to execute behaviors necessary to achieve specific outcomes. In children, self-efficacy is not built through empty encouragement but through four specific sources. The most powerful is mastery experiences, successfully completing a challenging task. Each time a child perseveres through difficulty and succeeds, their self-efficacy grows. The second source is vicarious experience, seeing someone similar succeed through effort. The third is verbal persuasion, genuine encouragement from credible sources. The fourth is managing physiological and emotional states, because anxiety masquerades as inability. For parents, the strategy is to create a steady diet of appropriately challenging tasks. If tasks are too easy, there is no mastery. If they are too hard, the child experiences failure that erodes confidence. The zone is tasks where success requires genuine effort but remains achievable. When your child says 'I can't do this,' translate it for them: 'You can't do this yet.' Celebrate the process of working hard, not just the outcome. And model your own self-efficacy by narrating how you approach challenges. Children learn enormously from watching adults persist, struggle, and eventually succeed through sustained effort rather than natural talent.",
  },
  {
    id: "psy2-16",
    source: "Edward Deci & Richard Ryan - Self-Determination Theory",
    sourceDetails: "Deci & Ryan (2000), Intrinsic and Extrinsic Motivation",
    category: "emotional",
    text: "Self-Determination Theory identifies three fundamental psychological needs that drive intrinsic motivation: autonomy, competence, and relatedness. When these needs are met, children engage in activities for their inherent satisfaction, showing greater creativity, persistence, and well-being. When these needs are thwarted, motivation must be externally propped up with rewards and punishments, which research consistently shows undermines long-term engagement. The classic studies demonstrate that when you reward a child for something they already enjoy doing, their intrinsic interest actually decreases, a phenomenon called the overjustification effect. This does not mean all rewards are harmful, but they should be used sparingly and never as the primary driver of behavior. To nurture intrinsic motivation, offer choices whenever possible to satisfy autonomy. Ensure tasks are appropriately calibrated to build competence. And maintain a warm, connected relationship so your child feels a sense of belonging. Replace 'If you finish your homework, you can have screen time' with 'What order would you like to tackle your homework and your chores tonight?' The first is a transaction. The second communicates trust in their judgment and feeds all three psychological needs simultaneously.",
  },
  {
    id: "psy2-17",
    source: "Carol Dweck - Mindset Research",
    sourceDetails: "Dweck (2006), Mindset: The New Psychology of Success",
    category: "emotional",
    text: "Dweck's research on growth mindset versus fixed mindset has transformed educational psychology. Children with a fixed mindset believe intelligence and ability are static traits; you either have them or you do not. These children avoid challenges, give up easily when faced with difficulty, and see effort as a sign of inadequacy. Children with a growth mindset believe abilities can be developed through dedication and hard work. They embrace challenges, persist through setbacks, and treat effort as the path to mastery. The most powerful parental lever is the type of praise you use. Process praise, which targets effort, strategy, and perseverance, fosters growth mindset. Person praise, such as 'You're so smart' or 'You're a natural,' fosters fixed mindset. In studies, children praised for intelligence were more likely to lie about their scores and avoid harder tasks afterward, while children praised for effort sought out greater challenges. Make process praise specific: 'I noticed how you tried three different strategies before solving that problem' rather than generic 'Good job.' When your child fails, frame it as data, not verdict. Ask 'What did you learn from this?' Growth mindset is not about false optimism but about treating every experience as fuel for development.",
  },
  {
    id: "psy2-18",
    source: "Julie Lythcott-Haims - How to Raise an Adult",
    sourceDetails: "Lythcott-Haims (2015), Overparenting and Its Consequences",
    category: "emotional",
    text: "Lythcott-Haims, former Dean of Freshmen at Stanford, documented a generation of students who had been parented so intensively that they arrived at college academically qualified but fundamentally unable to manage their own lives. She traces the rise of overparenting to a cultural anxiety that conflates good parenting with constant intervention. The consequences are measurable: increased anxiety, depression, and learned helplessness among young adults who have never had the opportunity to struggle, fail, and recover on their own. Her prescription is a deliberate transfer of responsibility matched to developmental stage. A toddler can put toys in a bin. A young child can pack their own school bag. A middle schooler can manage their own homework deadlines without parental reminders. A teenager can handle their own doctor appointments and travel logistics. Each transferred responsibility is a statement of trust that builds the child's confidence. Parents must tolerate the discomfort of watching their child do things imperfectly, miss deadlines, and experience natural consequences. These are not failures of parenting but essential curriculum. Start asking 'What am I doing for my child that they could do for themselves?' Then stop doing it. The goal is not to raise a child who needs you less but to raise an adult who can thrive without you.",
  },
  {
    id: "psy2-19",
    source: "Carol Dweck & Jennifer Henderlong - Praise Research",
    sourceDetails: "Henderlong & Lepper (2002); Dweck (2006), The Effects of Praise",
    category: "emotional",
    text: "The psychology of praise reveals that not all positive feedback is beneficial. Research consistently identifies several principles for effective praise. First, be specific rather than generic. 'You worked really hard on that drawing' is more impactful than a vague 'Great job.' Second, praise effort, strategy, and progress rather than innate ability. This fosters growth mindset and resilience. Third, praise genuine accomplishments rather than inflating every outcome. Children as young as seven can detect insincere praise and may interpret it as evidence that they lack ability. Fourth, avoid comparison-based praise such as 'You're the best in your class,' which undermines intrinsic motivation and creates anxiety about maintaining rank. Fifth, use praise that encourages the child to internalize standards rather than relying on external validation. Instead of 'I'm so proud of you,' try 'You must be really proud of yourself. You practiced that piece for three weeks.' This subtle shift redirects the child's attention to their own satisfaction and self-assessment. Over time, children who are praised effectively develop an internal compass that guides effort and learning without requiring constant external reward. They become their own source of motivation.",
  },
  {
    id: "psy2-20",
    source: "Jonathan Caspi & Judy Dunn - Sibling Relationships",
    sourceDetails: "Caspi (2012), Sibling Aggression; Dunn (2004), Children's Friendships and Sibling Relationships",
    category: "emotional",
    text: "Sibling relationships are among the longest-lasting and most influential bonds in a person's life, and they serve as a primary training ground for social skills, conflict resolution, and emotional regulation. Research by Caspi and others reveals that the quality of sibling relationships is strongly influenced by parenting behaviors. When parents show differential treatment, consistently favoring one child over another, sibling conflict increases and relationship quality declines. Even perceived favoritism, regardless of the parent's actual behavior, can trigger resentment. To foster positive sibling bonds, avoid comparisons entirely, even positive ones, because they create competitive dynamics. Validate each child's unique strengths without reference to their sibling. When conflicts arise, resist the impulse to immediately intervene as judge. Instead, serve as mediator. Help each child articulate their perspective and coach them through generating solutions together. Over time, this builds sophisticated negotiation skills. Also critically important is the quality of each child's relationship with the parent. Children who feel securely attached and individually valued are more likely to treat their siblings with warmth. Dedicated one-on-one time with each child, even just fifteen minutes a day, dramatically reduces sibling rivalry and builds the emotional security that underpins positive sibling bonds throughout life.",
  },


  // === NEUROSCIENCE ===
{
    id: "neu-1",
    source: "The Whole-Brain Child",
    sourceDetails: "Siegel & Bryson, Chapter 1",
    category: "behavior",
    text: "A child's brain is neither fully built at birth nor simply unfolds on a genetic timetable. The right hemisphere dominates early childhood, processing emotions, bodily sensations, and holistic images, while the left hemisphere — responsible for logic, language, and linear thinking — comes online more gradually. This asymmetry explains why toddlers have intense emotional reactions they cannot verbally articulate: their right brain is flooding them with feelings their left brain lacks the capacity to name or organise. Parents can help by first connecting with the right hemisphere (attuning to the emotion, using soothing tone and body language) and only then redirecting with the left (offering logical explanations or problem-solving). Siegel calls this 'connect and redirect.' Trying to reason with a child mid-meltdown before emotionally attuning almost always fails because the overwhelmed right brain cannot receive logical input. This approach builds horizontal integration between the hemispheres, strengthening the neural pathways that eventually let children name feelings, tell coherent stories about their experiences, and regulate emotional intensity as they grow.",
  },
  {
    id: "neu-2",
    source: "The Whole-Brain Child",
    sourceDetails: "Siegel & Bryson, Chapter 2",
    category: "behavior",
    text: "Beyond horizontal integration between left and right hemispheres, children also need vertical integration — connecting their 'upstairs brain' (cerebral cortex, responsible for higher-order thinking, empathy, and emotional regulation) with their 'downstairs brain' (brainstem and limbic system, responsible for survival reactions and strong emotions). The upstairs brain is under construction well into a person's mid-twenties, which means children are frequently hijacked by their downstairs brain — the fight, flight, or freeze centre. When a child throws a tantrum, the downstairs brain has essentially taken over, temporarily shutting out the upstairs. Punishing or arguing with a child in this state is neurologically futile. Instead, parents should engage the upstairs brain by asking questions, offering choices, and encouraging narrative storytelling, which activates the prefrontal cortex. Building the upstairs brain is like constructing a house: it happens through repeated experiences of problem-solving, perspective-taking, and emotional reflection. Every time you help a child name what they feel and consider what to do about it, you are strengthening neural pathways that make future self-regulation more automatic.",
  },
  {
    id: "neu-3",
    source: "The Body Keeps the Score",
    sourceDetails: "Bessel van der Kolk, Chapter 5",
    category: "behavior",
    text: "Trauma physically reshapes the brain. Neuroimaging studies of traumatised children show three consistent changes: the amygdala — the brain's threat detector — becomes hyperreactive, firing in response to even minor cues of danger; the medial prefrontal cortex, which normally acts as a brake on the amygdala, shows reduced activity, meaning the rational brain cannot calm the alarmed emotional brain; and the anterior cingulate, involved in registering physical and emotional pain, is dampened, leading to emotional numbing or dissociation. This means a traumatised child is not being deliberately difficult when they overreact, shut down, or seem unreachable — their nervous system is stuck in survival mode. The key insight for parenting is that traditional behavioural approaches (rewards, consequences) do not address the underlying dysregulation. What does help is helping the child re-establish a sense of safety in their body. Rhythmic activities — rocking, walking, drumming — and predictable, nurturing routines help recalibrate the nervous system. Van der Kolk emphasises that recovery requires bottom-up processing (body first) before top-down (cognitive) approaches can be effective. Safety, consistency, and somatic awareness are prerequisites for any behavioural change in trauma-affected children.",
  },
  {
    id: "neu-4",
    source: "The Body Keeps the Score",
    sourceDetails: "Bessel van der Kolk, Chapter 13",
    category: "behavior",
    text: "The insula, a region deep within the brain, acts as a map of the body's internal state — registering heartbeat, breathing, hunger, and tension. This interoceptive awareness is the neurological basis of emotional feeling. Children who have experienced neglect or abuse often have disrupted interoception: they cannot accurately read their body's signals, making it hard to know when they are hungry, tired, scared, or angry until the feeling becomes overwhelming. Teaching children to tune into bodily sensations — 'Where do you feel the worry in your body?' — actually strengthens insular pathways and improves emotional regulation. Mindfulness practices, body-scan exercises, and simple somatic check-ins are not just calming; they are rebuilding the brain's capacity for self-awareness. Van der Kolk's research shows that trauma treatment is most effective when it incorporates body-based approaches like yoga, which directly improve interoceptive accuracy. For parents, this means helping children develop a vocabulary for body sensations ('butterflies in my tummy,' 'tight throat') is not a trivial exercise — it is foundational neurological work that builds lifelong emotional resilience and the capacity to self-regulate under stress.",
  },
  {
    id: "neu-5",
    source: "Why We Sleep",
    sourceDetails: "Matthew Walker, Chapters 5-6",
    category: "behavior",
    text: "Sleep is not passive rest — it is the brain's most active period of learning consolidation. During non-REM deep sleep, the brain replays the day's experiences, transferring information from the short-term storage of the hippocampus to the long-term vault of the cortex, where it becomes permanent memory. This process is especially critical in children, whose brains are acquiring new skills, words, and emotional patterns at an extraordinary rate. A child who skips an hour of sleep does not merely lose rest — they lose the neural consolidation of everything they learned that day. REM sleep, the dreaming phase, performs a different function: it processes emotional content, stripping away the visceral charge of difficult experiences so the memory remains without the pain. Walker describes this as 'overnight therapy.' Children who are chronically sleep-deprived show impaired attention, weakened memory, emotional volatility, and reduced capacity to learn. The practical implication: protecting children's sleep — through consistent bedtimes, dark rooms, no screens before bed — is one of the most powerful cognitive and emotional interventions a parent can make. Sleep is not optional; it is biological necessity with measurable neurological effects.",
  },
  {
    id: "neu-6",
    source: "Why We Sleep",
    sourceDetails: "Matthew Walker, Chapter 7",
    category: "behavior",
    text: "The adolescent brain undergoes a dramatic shift in circadian timing. During puberty, the brain's release of melatonin — the hormone that signals sleepiness — is delayed by two to three hours relative to childhood. This means a teenager who used to fall asleep at 9 PM may genuinely not feel tired until 11 PM or midnight. This is biology, not defiance. Yet school schedules typically demand adolescents wake earlier than younger children, creating chronic sleep deprivation at precisely the moment their brains are undergoing massive reorganisation. Walker's research shows that sleep-deprived adolescents show reduced prefrontal cortex function, impaired emotional regulation, heightened amygdala reactivity, and worse academic performance. The link between adolescent sleep loss and mental health crises — including depression, anxiety, and suicidal ideation — is strong and dose-dependent. For parents, this means treating adolescent sleep with utmost seriousness: late-night screen use (which suppresses melatonin further via blue light) should be addressed, but so should advocating for later school start times. Recognising that your teenager's late bedtime is neurologically driven — not laziness or rebellion — changes the conversation from conflict to collaboration about protecting their sleep window.",
  },
  {
    id: "neu-7",
    source: "Behave",
    sourceDetails: "Robert Sapolsky, Chapter 3",
    category: "behavior",
    text: "Sapolsky details how the prefrontal cortex — the brain region responsible for impulse control, long-term planning, empathy, and decision-making — does not fully mature until approximately age 25. This prolonged development is due to myelination, the process by which neurons are coated in a fatty sheath that dramatically speeds signal transmission. Myelination proceeds from the back of the brain forward, meaning the prefrontal cortex is the last region to be fully insulated. Throughout adolescence, a massive wave of synaptic pruning also occurs: the prefrontal cortex loses roughly half of its neural connections, with frequently used pathways being strengthened and unused ones eliminated. This 'use it or lose it' principle means the experiences adolescents have — and don't have — permanently shape their adult brains. A teenager who practices emotional regulation, critical thinking, and empathy is literally hardwiring those capacities. Conversely, chronic stress, substance use, or unrelenting fear during this window can entrench maladaptive patterns. Parents should understand that teenagers are not small adults with bad judgement — they are neurologically different creatures whose prefrontal cortex is under active construction, requiring scaffolding, patience, and repeated opportunities to practice good decision-making.",
  },
  {
    id: "neu-8",
    source: "Behave",
    sourceDetails: "Robert Sapolsky, Chapter 5",
    category: "behavior",
    text: "The amygdala, an almond-shaped cluster deep in the temporal lobe, evolved as a rapid threat-detection system. It can fire in under 100 milliseconds — faster than conscious awareness — triggering the fight-or-flight response before the prefrontal cortex even has time to evaluate whether a threat is real. In children, whose prefrontal cortex is immature, the amygdala is particularly dominant. A child who screams at a loud noise, recoils from a stranger, or melts down over a surprise change is not being irrational — their amygdala has detected a potential threat and mobilised their entire body before their logical brain could intervene. Chronic stress sensitises the amygdala further, making it fire more frequently and intensely. This is why children from unstable or chaotic environments have exaggerated startle responses and emotional volatility. The calming countermeasure is the parent's own regulated nervous system: a calm adult's presence activates the child's ventral vagal complex, which dampens amygdala firing through co-regulation. Over time, repeated experiences of being calmed by a trusted adult build the child's own capacity for amygdala regulation. This is the neurological basis of secure attachment — not a technique, but a biological process of nervous system co-regulation that physically shapes the child's developing brain.",
  },
  {
    id: "neu-9",
    source: "Behave",
    sourceDetails: "Robert Sapolsky, Chapter 7",
    category: "behavior",
    text: "Dopamine is not the pleasure chemical it is often described as — it is the anticipation chemical. Sapolsky's research with monkeys showed dopamine spikes not when a reward is received, but when a cue predicts a reward is coming. The dopamine system drives wanting, seeking, and motivation, not satisfaction. This has profound implications for children's behaviour and screen time. Video games, social media, and many apps are explicitly designed to trigger dopamine through variable reward schedules — the same psychological mechanism that makes slot machines addictive. A child pulling to refresh a feed or playing 'just one more level' is caught in a dopamine loop where anticipation, not enjoyment, drives the behaviour. The problem is that chronic overstimulation of the dopamine system leads to receptor downregulation — the brain reduces its dopamine receptors to protect itself, leaving the child less sensitive to everyday rewards and more dependent on intense stimulation to feel anything. This manifests as boredom, irritability, and difficulty with low-dopamine activities like reading or unstructured play. Parents should understand that managing screen time is not about discipline — it is about protecting a neurochemical system central to motivation, learning, and emotional wellbeing.",
  },
  {
    id: "neu-10",
    source: "Brain Rules for Baby",
    sourceDetails: "John Medina, Chapter 5",
    category: "behavior",
    text: "Medina synthesises decades of developmental neuroscience to show that a child's brain is exquisitely sensitive to the emotional climate of the home. When parents are chronically stressed or in conflict, children's cortisol levels rise, and sustained elevation of cortisol literally damages the brain — shrinking the hippocampus (critical for learning and memory) and impairing prefrontal cortex development. Children raised in high-conflict homes show measurable deficits in working memory, reading comprehension, and social cognition. Conversely, the single greatest predictor of a child's intellectual and emotional outcomes is not income, school quality, or genetics — it is the warmth and responsiveness of the parent-child relationship. Medina describes four parenting styles (authoritative, authoritarian,permissive, and neglectful) and notes that authoritative parenting — high warmth combined with high expectations — consistently produces the best neurological and behavioural outcomes across cultures. The brain is a social organ, shaped by relationships. A child who feels safe, seen, and soothed develops a brain optimised for learning, empathy, and resilience. A child living in chronic stress or emotional neglect develops a brain oriented toward survival, at the cost of everything else.",
  },
  {
    id: "neu-11",
    source: "The Boy Who Was Raised as a Dog",
    sourceDetails: "Bruce Perry, Chapter 3",
    category: "behavior",
    text: "Perry's clinical work with severely neglected children reveals that brain development is hierarchical — it proceeds from the brainstem upward, and each level must be adequately developed before higher levels can function properly. The brainstem, which governs basic regulation (heart rate, breathing, body temperature), is shaped in the first months of life through physical contact, rocking, feeding, and rhythmic movement. When infants experience neglect — being left alone, untouched, or inconsistently cared for — their brainstem does not develop properly, creating a fragile foundation for all higher brain function. Perry describes how children adopted from institutional care, who were fed but not held, show persistent problems with attention, impulse control, and emotional regulation despite years in loving homes. Their brains were shaped by early deprivation in ways that require targeted, brain-based intervention. The principle for all parents: the rhythmic, attuned, physical presence of a caregiver in infancy is not just emotionally nice — it is building the neurological scaffolding that the rest of development depends on. Rocking your baby, maintaining skin-to-skin contact, and responding consistently to cries are acts of brain construction.",
  },
  {
    id: "neu-12",
    source: "What Happened to You?",
    sourceDetails: "Perry & Winfrey, Chapter 2",
    category: "behavior",
    text: "Perry introduces the concept of the 'Three R's' — regulate, relate, reason — as the neurological sequence required for learning and behaviour change. A dysregulated child (elevated heart rate, shallow breathing, amygdala activation) cannot form relationships effectively, and a disconnected child cannot engage higher-order reasoning. Traditional parenting often reverses this sequence, trying to reason with a dysregulated child through lectures or consequences. Neuroscience shows this is ineffective: when the brainstem and limbic system are in alarm mode, the cortex is functionally offline. The practical application is transformative: before addressing behaviour, first help the child regulate (co-regulation through calm voice, slow breathing, physical presence), then relate (re-establish connection through empathy and attunement), and only then reason (explore what happened, problem-solve, teach). This sequence is not coddling — it is working with the brain's architecture rather than against it. Perry's research shows that children who consistently experience the regulate-relate-reason sequence develop stronger prefrontal cortex function, better emotional regulation, and greater resilience. Parents who skip straight to reasoning miss the biological reality that learning and behaviour change require a regulated nervous system as a prerequisite.",
  },
  {
    id: "neu-13",
    source: "Polyvagal Theory",
    sourceDetails: "Stephen Porges, Chapters 1-3",
    category: "behavior",
    text: "Porges' polyvagal theory identifies three branches of the autonomic nervous system that shape behaviour: the ventral vagal complex (social engagement, calm connection), the sympathetic nervous system (fight or flight), and the dorsal vagal complex (shutdown, freeze, dissociation). In children, these states shift rapidly based on environmental cues of safety or danger. When a child feels safe — through warm tone of voice, relaxed facial muscles, and gentle eye contact — the ventral vagal system is active, enabling learning, play, and social connection. When the child perceives threat, the sympathetic system mobilises fight or flight (tantrums, aggression, running away). Under extreme or prolonged stress, the dorsal vagal system triggers shutdown (withdrawal, non-responsiveness, emotional flatness). Crucially, the child's nervous system reads the parent's nervous system: if the parent is dysregulated, the child's threat detection escalates. This is co-regulation — our nervous systems are coupled. Porges calls the mechanism 'neuroception,' the subconscious scanning for safety cues. Parents can deliberately activate a child's ventral vagal system through prosodic voice (warm, melodic speech), soft eye contact, and slow, rhythmic movement. This is not manipulation; it is the biological language of safety that the mammalian nervous system evolved to respond to.",
  },
  {
    id: "neu-14",
    source: "Polyvagal Theory",
    sourceDetails: "Stephen Porges, Chapter 8",
    category: "behavior",
    text: "Porges distinguishes between behaviours that arise from different autonomic states, which has critical implications for discipline. A child in a ventral vagal state (calm, connected) can hear feedback, learn, and adjust behaviour — this is the only state where teaching is neurologically possible. A child in sympathetic activation (fight or flight) is physiologically incapable of processing verbal logic; their body is mobilised for survival. A child in dorsal vagal shutdown appears compliant but is actually dissociated — present in body but absent in mind. Many children labelled 'well-behaved' after punishment are actually in dorsal shutdown, which is a trauma response, not genuine cooperation. Parents can learn to read these states: a flushed face, rapid breathing, and clenched fists indicate sympathetic activation; a pale face, flat affect, and slow movements suggest dorsal shutdown. The appropriate response differs for each state. Sympathetic activation needs physical calming (movement, deep pressure, slow breathing). Dorsal shutdown needs gentle reconnection (soft voice, warm presence, no demands). Only when the child returns to ventral vagal can reasoning, repair, and learning occur. Discipline that ignores nervous system state is not just ineffective — it can compound dysregulation.",
  },
  {
    id: "neu-15",
    source: "Spark",
    sourceDetails: "John Ratey, Chapter 1",
    category: "behavior",
    text: "Ratey presents compelling evidence that physical exercise is the single most effective thing a child can do to improve brain function. Aerobic exercise triggers the release of BDNF (brain-derived neurotrophic factor), a protein Ratey calls 'Miracle-Gro for the brain.' BDNF promotes neurogenesis (the birth of new neurons), strengthens synaptic connections, and enhances neuroplasticity — the brain's ability to rewire itself. Children who exercise regularly show measurable improvements in attention, working memory, reading comprehension, and mathematical ability. Exercise also elevates serotonin, dopamine, and norepinephrine — the same neurotransmitters targeted by ADHD medication — improving focus and mood regulation naturally. A landmark study in which schools increased physical education showed academic performance rising even though less time was spent in class. For parents, this means prioritising daily physical activity is not taking time away from learning — it is the biological foundation of learning. Unstructured active play, running, swimming, cycling, and team sports all deliver BDNF and neurotransmitter benefits. Children who move more learn better, regulate emotions more effectively, and build resilient brains. Sedentary childhood is not just a physical health concern — it is a cognitive and emotional developmental concern.",
  },
  {
    id: "neu-16",
    source: "The Whole-Brain Child",
    sourceDetails: "Siegel & Bryson, Chapter 4",
    category: "behavior",
    text: "Siegel introduces the concept of 'memory integration,' explaining that the brain holds two types of memory: implicit (unconscious, emotional, body-based) and explicit (conscious, narrative, factual). In early childhood, memories are primarily implicit — a child may not remember a specific fall or frightening event, but their body and nervous system encoded the sensory and emotional experience. These implicit memories drive behaviour without the child understanding why. A child who resists bath time after a slip in the tub is not being difficult — their implicit memory has tagged baths as dangerous, and the emotional charge persists even though the child cannot articulate the fear. The solution is memory integration: helping the child move implicit memories into explicit awareness by telling the story of what happened. Siegel calls this 'remembering to tell.' When a child narrates a frightening or painful experience with a calm, attuned adult, the memory moves from the raw, emotional storage of the amygdala into the contextualised, factual storage of the hippocampus. This is why storytelling after difficult events is so powerful — it literally reprocesses memory at a neurological level, reducing its emotional charge and building coherent self-understanding.",
  },
  {
    id: "neu-17",
    source: "Brain Rules for Baby",
    sourceDetails: "John Medina, Chapter 3",
    category: "behavior",
    text: "Medina reviews the neuroscience of empathy and finds that mirror neurons — brain cells that fire both when we perform an action and when we observe someone else performing that same action — are foundational to empathic development. These neurons, concentrated in the premotor cortex and inferior parietal lobule, allow children to internally simulate others' emotional states. This is why a baby cries when hearing another baby cry, and why toddlers visibly wince when a sibling falls. But mirror neurons are just the hardware; the software of empathy is installed through experience. Children develop genuine empathic capacity through repeated exposure to adults who model attunement, name emotions, and respond compassionately to distress. Medina notes that children raised by emotionally available parents show greater mirror neuron system activation and more advanced theory of mind by age four. Conversely, children who experience emotional neglect show dampened mirror neuron responses. The parenting implication is clear: empathy is not taught through lectures about kindness — it is neurologically wired through thousands of micro-moments of being seen, understood, and responded to. When you attune to your child's feelings, you are not just building a relationship; you are building the neural infrastructure for lifelong empathy.",
  },
  {
    id: "neu-18",
    source: "Behave",
    sourceDetails: "Robert Sapolsky, Chapter 9",
    category: "behavior",
    text: "Sapolsky explores the neuroscience of habit formation, showing that repeated behaviours physically rewire the brain through a process called Hebbian learning — 'neurons that fire together wire together.' When a child repeatedly responds to frustration by hitting, the neural pathway from anger to aggression becomes stronger, faster, and more automatic. Conversely, when a child repeatedly practises taking a deep breath or using words when upset, that pathway becomes the default. This is why consistency matters enormously in parenting: occasional practice of a skill is not enough to rewire a brain. Studies of habit formation suggest it takes weeks to months of repetition for a new behaviour to become neurally automatic in children. The basal ganglia, a deep brain structure, eventually takes over habitual behaviours, moving them out of conscious effort and into automaticity. This is both the good and bad news: bad habits are deeply ingrained but so are good ones once established. Parents should focus on helping children practise desired responses to challenging situations repeatedly and consistently, understanding that each repetition is physically strengthening a neural pathway that will eventually become the child's default response. Habits are not personality traits — they are neural pathways built through repetition.",
  },
  {
    id: "neu-19",
    source: "The Boy Who Was Raised as a Dog",
    sourceDetails: "Bruce Perry, Chapter 8",
    category: "behavior",
    text: "Perry describes how play is not a luxury for children — it is a biological imperative. Play activates the prefrontal cortex, strengthens executive function, and builds the neural circuits for social cognition, emotional regulation, and creative problem-solving. Mammals whose young play more show greater adult behavioural flexibility and larger prefrontal cortices. Deprived of play, young mammals — including children — show social deficits, impaired impulse control, and heightened aggression. Perry's clinical observations reveal that traumatised children who are guided through therapeutic play recover faster than those treated with talk therapy alone, because play engages the brain's full range of systems simultaneously: motor, sensory, emotional, and cognitive. Unstructured, child-led play — where the child invents the scenario, negotiates roles, and resolves conflicts — is especially powerful, as it exercises the prefrontal cortex's capacity for planning, flexibility, and self-regulation. The modern decline in free play, replaced by adult-directed activities and screen time, has measurable neurological consequences: research links reduced play to increased anxiety, diminished creativity, and weaker social skills. For parents, protecting time for unstructured, mixed-age, outdoor play is one of the most evidence-based interventions for healthy brain development available.",
  },
  {
    id: "neu-20",
    source: "What Happened to You?",
    sourceDetails: "Perry & Winfrey, Chapter 5",
    category: "behavior",
    text: "Perry details how adverse childhood experiences (ACEs) — abuse, neglect, household dysfunction — create what he calls a 'dose-response' relationship with brain development and lifelong health. The more ACEs a child experiences, the greater the risk of neurological, physical, and psychological problems. The mechanism is the stress response system: when a child is chronically exposed to threat, the hypothalamic-pituitary-adrenal (HPA) axis is repeatedly activated, flooding the developing brain with cortisol. Sustained cortisol exposure damages the hippocampus (impairing memory and learning), disrupts prefrontal cortex development (impairing executive function and impulse control), and sensitises the amygdala (creating heightened fear and anxiety). This is 'toxic stress' — distinct from the normal, manageable stress of everyday challenges. Toxic stress occurs when the stress response is prolonged, severe, and occurs without the buffering presence of a trusted adult. Perry's critical finding is that a stable, attuned caregiver can buffer the child's stress response, preventing cortisol damage even in difficult circumstances. This means the parent-child relationship is not just emotionally important — it is a biological protective factor that literally shields the developing brain from harm. Connection is protection.",
  },


  // === NEUROSCIENCE PART 2 ===
// Neuroscience Knowledge Chunks — Part 2
// Evidence-based brain science relevant to parenting


  {
    id: "neu2-1",
    source: "The Neuroscience of Human Relationships (Cozolino)",
    sourceDetails: "Cozolino, Chapter on Adolescent Brain Development",
    category: "behavior",
    text: "The adolescent brain's reward system undergoes dramatic remodeling, driven by a hyper-responsive striatum that makes teenagers exquisitely sensitive to rewards and novelty. During puberty, dopamine receptor density peaks in the striatum while prefrontal regulatory circuits remain under construction, creating an asymmetry between drive and control. This imbalance explains why adolescents take more risks in the presence of peers — their reward circuitry fires more intensely than an adult's would in identical situations. Brain imaging shows that teenage striatal activation in response to rewards can be nearly double that of adults. Parents should understand that this heightened reward sensitivity is neurobiological, not characterological. Adolescents are not being deliberately reckless; their brains are wired to prioritize reward over risk assessment. Effective parenting channels this drive toward healthy challenges — sports, creative pursuits, meaningful social causes — rather than simply trying to suppress it. Authoritative warmth combined with clear boundaries helps the prefrontal cortex gradually strengthen its regulatory grip over the exuberant striatal response.",
  },
  {
    id: "neu2-2",
    source: "How the Brain Learns (Sousa)",
    sourceDetails: "Sousa, Chapter on Brain Maturation and Gender Differences",
    category: "behavior",
    text: "The corpus callosum, the thick band of nerve fibers connecting the brain's two hemispheres, continues developing well into early adulthood and shows notable individual variation. Research suggests that, on average, females tend to have a slightly larger and more densely connected corpus callosum relative to brain size, which may facilitate more efficient cross-hemispheric communication. This biological difference is subtle and overlaps significantly between individuals, meaning it should never be used to limit a child's expectations. The corpus callosum's maturation supports increasingly sophisticated integration of analytical and creative thinking, emotional regulation, and language processing. During childhood and adolescence, activities that engage both hemispheres — such as learning a musical instrument, practicing art alongside science, or engaging in full-body movement — may strengthen these interhemispheric pathways. Parents should focus on providing diverse, whole-brain stimulation rather than typecasting children by gender. The key insight is that callosal development is experience-dependent: rich, varied activities support robust neural connectivity regardless of gender.",
  },
  {
    id: "neu2-3",
    source: "The Philosophical Baby (Gopnik)",
    sourceDetails: "Gopnik, Chapter on Early Brain Plasticity",
    category: "behavior",
    text: "In the first three years of life, the human brain exhibits what neuroscientists call synaptic exuberance — an explosive overproduction of neural connections far exceeding what will survive into adulthood. A toddler's brain forms approximately one million new synapses per second, creating a dense thicket of possibility that is later pruned based on experience. By age three, a child's brain has roughly twice as many synapses as an adult brain. This overproduction strategy means the young brain is maximally prepared to adapt to whatever environment it encounters. The subsequent pruning process — use it or lose it — is where parenting matters profoundly. Connections that are repeatedly activated through interaction, play, language exposure, and responsive care become permanent; those that go unused wither away. This does not mean parents must provide constant stimulation. The brain also needs quiet rest to consolidate learning. What matters most is predictable, warm, responsive interaction that reliably activates social, language, and emotional circuits. A stressed, chaotic environment prunes the wrong connections, while a nurturing one sculpts a resilient, capable brain.",
  },
  {
    id: "neu2-4",
    source: "Brain Rules for Baby (Medina)",
    sourceDetails: "Medina, Chapter on Music and Cognitive Development",
    category: "behavior",
    text: "Music training changes children's brains in measurable, lasting ways. Longitudinal neuroimaging studies show that children who receive sustained musical instruction develop enhanced auditory cortex development, stronger interhemispheric connectivity through the corpus callosum, and improved executive function networks. A landmark study found that just fifteen months of musical training in young children produced visible structural changes in brain regions governing motor, auditory, and visual-spatial processing. Importantly, the benefits extend beyond music itself: children with musical training show enhanced verbal memory, reading ability, and mathematical reasoning. However, the research is specific — passive listening to Mozart does not make babies smarter, despite the popular myth. The benefits require active engagement: learning an instrument, singing, moving rhythmically. For parents, the practical implication is that musical education is not a luxury but a powerful brain-development tool. Starting early — even with informal singing, clapping games, and rhythmic play in infancy — lays neural groundwork. Formal lessons can begin around age six or seven when children have the attentional capacity for structured practice.",
  },
  {
    id: "neu2-5",
    source: "How the Brain Learns (Sousa)",
    sourceDetails: "Sousa, Chapter on Bilingualism and Brain Plasticity",
    category: "behavior",
    text: "Bilingualism confers demonstrable neurological advantages that extend far beyond knowing two languages. Neuroimaging research consistently reveals that bilingual children develop denser grey matter in the left inferior parietal cortex, a region involved in executive function and cognitive control. The bilingual brain must constantly manage two competing language systems, which strengthens the prefrontal cortex's inhibitory control networks. This enhanced executive function — sometimes called the bilingual advantage — translates into better sustained attention, cognitive flexibility, working memory, and task-switching ability. Bilingual children also show advantages in understanding others' perspectives, likely because navigating two languages heightens awareness that different people use different systems to communicate. Contrary to outdated fears, growing up bilingual does not delay language development or cause confusion. The optimal window for acquiring native-like pronunciation and grammatical intuition is before age seven, when the brain's phonological mapping is most plastic. However, cognitive benefits accrue at any age. Parents should introduce a second language as early as practical, through consistent, meaningful exposure — a fluent caregiver, immersion program, or high-quality bilingual environment.",
  },
  {
    id: "neu2-6",
    source: "AAP Clinical Guidelines on ADHD",
    sourceDetails: "American Academy of Pediatrics, ADHD Management and Neurofeedback",
    category: "behavior",
    text: "Neurofeedback, a form of biofeedback that trains individuals to modulate their own brainwave activity, has garnered significant attention as a non-pharmacological intervention for ADHD. The approach typically uses EEG sensors to monitor brainwave patterns and rewards children for increasing beta waves associated with focused attention while reducing theta waves linked to daydreaming. Meta-analyses show neurofeedback produces moderate effect sizes for improving attention and reducing hyperactivity symptoms in children with ADHD, with benefits that persist months after training ends — unlike medication, which works only while actively taken. The American Academy of Pediatrics recognizes neurofeedback as a treatment with Level 1 (best support) evidence, comparable in efficacy to stimulant medication for some children. However, neurofeedback requires significant time commitment — typically thirty to forty sessions over several months — and results vary between individuals. It is most effective as part of a multimodal approach combining behavioral therapy, parent training, educational support, and, when indicated, medication. Parents considering neurofeedback should seek certified practitioners and maintain realistic expectations. It represents a promising tool, particularly for families seeking non-pharmacological options or whose children do not respond well to stimulant medications.",
  },
  {
    id: "neu2-7",
    source: "Brain Rules for Baby (Medina)",
    sourceDetails: "Medina, Chapter on Exercise and Brain Function",
    category: "behavior",
    text: "Physical exercise is one of the most powerful known enhancers of children's brain development, largely through the action of brain-derived neurotrophic factor, or BDNF. Often described as miracle-gro for the brain, BDNF is a protein released during aerobic exercise that promotes the survival of existing neurons, encourages the growth of new synapses, and supports neurogenesis in the hippocampus — the brain's learning and memory center. Children who engage in regular aerobic exercise show larger hippocampal volumes, improved spatial memory, enhanced attention, and better academic performance. Even single bouts of moderate exercise measurably improve children's executive function and classroom focus. The mechanism is straightforward: exercise increases blood flow to the brain, elevates BDNF and other growth factors, reduces cortisol, and improves mood-regulating neurotransmitter balance. For optimal brain benefits, children need at least sixty minutes of moderate-to-vigorous physical activity daily, ideally including cardiovascular exercise. Crucially, cutting recess or physical education to make room for more academic instruction is counterproductive — the brain learns better when the body moves regularly. Active play, sports, cycling, swimming, and even brisk walking all deliver meaningful cognitive dividends.",
  },
  {
    id: "neu2-8",
    source: "AAP Developmental Nutrition Guidelines",
    sourceDetails: "American Academy of Pediatrics, Nutrition and Brain Development",
    category: "behavior",
    text: "The developing brain has extraordinary nutritional demands, consuming roughly sixty percent of the body's total glucose metabolism during early childhood. Three nutrients are especially critical for optimal neurodevelopment. Omega-3 fatty acids, particularly DHA, constitute a major structural component of neuronal membranes and are essential for synapse formation, myelination, and neurotransmitter function. Children with adequate omega-3 intake show better cognitive performance, attention, and reading ability. Iron is vital for myelination and dopamine synthesis; even mild iron deficiency in infancy can produce lasting cognitive deficits, making iron-rich foods or supplementation crucial during periods of rapid growth. Protein provides the amino acid building blocks for all neurotransmitters and supports overall brain tissue growth — protein malnutrition during critical periods can permanently reduce brain volume and cognitive capacity. Parents should ensure diets rich in fatty fish or algae-based omega-3 sources, iron-rich foods like lean meats, beans, and fortified cereals, and adequate high-quality protein. Breastfeeding provides optimal DHA during infancy. For picky eaters, thoughtful supplementation under pediatric guidance can fill critical gaps without creating mealtime battles.",
  },
  {
    id: "neu2-9",
    source: "The Neuroscience of Human Relationships (Cozolino)",
    sourceDetails: "Cozolino, Chapter on Trauma and the HPA Axis",
    category: "behavior",
    text: "Childhood trauma activates the hypothalamic-pituitary-adrenal (HPA) axis — the body's primary stress response system — in ways that can permanently alter brain architecture when the stress is chronic and unrelenting. Persistent activation floods the developing brain with cortisol, which at sustained high levels is neurotoxic, particularly to the hippocampus, prefrontal cortex, and corpus callosum. Children experiencing ongoing abuse, neglect, household dysfunction, or community violence develop sensitized stress-response systems that keep them in a state of hyperarousal. Their amygdalas become enlarged and hyper-reactive, scanning constantly for threat, while prefrontal regions responsible for emotional regulation and executive function underdevelop. This neurological adaptation helps the child survive danger but impairs learning, social relationships, and physical health across the lifespan. The critical finding for parents and professionals is that a single trusted, stable, attuned caregiver can buffer the HPA axis and protect against much of this damage. Secure attachment relationships literally regulate the child's neurobiology, keeping cortisol in healthy ranges. This is why trauma-informed parenting — emphasizing safety, predictability, and emotional attunement — can rewire stress-response systems and restore healthier brain function even after significant adversity.",
  },
  {
    id: "neu2-10",
    source: "Behave (Sapolsky)",
    sourceDetails: "Sapolsky, Chapter on Poverty, Stress, and the Brain",
    category: "behavior",
    text: "Growing up in poverty reshapes the developing brain through the mechanism of toxic stress — the chronic, unrelenting activation of stress-response systems without adequate buffering from supportive adults. Neuroimaging studies consistently show that children raised in poverty have reduced grey matter volume in the prefrontal cortex and hippocampus, structural differences in the amygdala, and less efficient connectivity between brain regions governing executive function. These are not differences in innate potential but differences in neurological investment: the stressed brain diverts resources from learning and development toward survival. The effects are dose-dependent — the longer and deeper the poverty, the more pronounced the neurological impact. Critically, the mediator is not income itself but the chronic stress that accompanies financial insecurity: food instability, housing transience, neighborhood danger, parental depression, and reduced access to enrichment. However, research also demonstrates remarkable neuroplasticity and resilience. Interventions that reduce family stress, provide consistent early childhood education, and support warm parent-child relationships can normalize stress-hormone levels and support healthy brain development. This evidence underscores why addressing childhood poverty is not merely a social justice issue but a neurodevelopmental imperative with lifelong consequences for cognitive capacity, mental health, and economic productivity.",
  },
  {
    id: "neu2-11",
    source: "The Whole-Brain Child (Siegel)",
    sourceDetails: "Siegel & Bryson, Chapter on Mindfulness and Integration",
    category: "behavior",
    text: "Mindfulness meditation produces measurable changes in children's brains that support emotional regulation, attention, and social-emotional learning. Research with children as young as four shows that brief, age-appropriate mindfulness practices strengthen the prefrontal cortex's regulatory control over the limbic system — the same integration process that distinguishes emotionally resilient children from those who struggle. Brain imaging studies of children and adolescents who practice mindfulness consistently reveal thickening in the anterior cingulate cortex, a region critical for attention and cognitive control, alongside reduced amygdala reactivity to emotional stimuli. Even short daily practices — three to five minutes of focused breathing, body scanning, or mindful listening — delivered over eight weeks produce significant improvements in children's sustained attention, working memory, emotional awareness, and classroom behavior. For parents, the practical approach is to introduce mindfulness as a playful, normal activity rather than a chore. Simple exercises like belly breathing with a stuffed animal, mindful eating with full sensory attention, or noticing sounds in nature build the neural infrastructure of self-regulation. Parents who practice alongside their children doubly benefit, as co-regulation strengthens the child's developing stress-response systems through relational safety.",
  },
  {
    id: "neu2-12",
    source: "Behave (Sapolsky)",
    sourceDetails: "Sapolsky, Chapter on Attention, Default Mode Network, and ADHD",
    category: "behavior",
    text: "The default mode network (DMN) is a constellation of brain regions — including the medial prefrontal cortex, posterior cingulate, and angular gyrus — that activates when the mind wanders, daydreams, or engages in self-referential thinking. In a well-regulated brain, the DMN deactivates when focused attention is required, allowing task-positive networks to take over. In children with ADHD, this switching mechanism is impaired: the DMN remains active during tasks, creating persistent cognitive interference that manifests as distractibility and mind-wandering. Neuroimaging reveals weaker connectivity between the DMN and cognitive control networks in ADHD brains, explaining why affected children struggle to sustain attention even when motivated. This is not laziness or willful inattention — it is a network-level neurological difference. Understanding the DMN also reframes ADHD as not simply a deficit of attention but a difficulty with dynamic network switching. Practical implications for parents include recognizing that children with ADHD may genuinely find it harder to suppress internal thought streams. Environmental modifications — reducing distractions, using external scaffolding like timers and checklists, breaking tasks into shorter segments, and incorporating movement breaks — help compensate for the under-responsive switching between default and task-focused networks.",
  },
  {
    id: "neu2-13",
    source: "Glow Kids (Kardaras)",
    sourceDetails: "Kardaras, Chapter on Screen Addiction and Dopamine",
    category: "behavior",
    text: "Excessive screen time, particularly with interactive digital media and video games, affects children's developing dopamine systems in ways that mirror the neurobiological changes seen in substance addiction. Every notification, level-up, and variable reward triggers dopamine release in the nucleus accumbens, the brain's reward center. Over time, chronic overstimulation leads to dopamine receptor downregulation — the brain reduces its receptor density to protect against overload, creating a tolerance cycle where more screen time is needed to achieve the same satisfaction. Brain imaging studies of children with heavy screen use show reduced dopamine receptor availability comparable to patterns seen in individuals with gambling and substance addictions. The consequences include diminished capacity to find pleasure in slower-paced, non-digital activities, increased irritability when devices are removed, reduced sustained attention for analog tasks, and disrupted sleep from blue-light exposure suppressing melatonin. The developing brain is particularly vulnerable because dopamine circuitry is still maturing through adolescence. Parents should not demonize all technology but must establish evidence-based boundaries: no screens under eighteen months (except video chatting), limited high-quality content for young children, device-free meals and bedrooms, and prioritization of physical play, face-to-face interaction, and unstructured boredom that lets the dopamine system reset.",
  },
  {
    id: "neu2-14",
    source: "The Philosophical Baby (Gopnik)",
    sourceDetails: "Gopnik, Chapter on Play and Neural Development",
    category: "behavior",
    text: "Play is not a break from learning — it is the primary engine of brain construction in childhood. Neuroscience reveals that free, unstructured play activates and integrates more brain regions simultaneously than almost any other activity, engaging motor cortex, prefrontal planning circuits, emotional limbic systems, language areas, and creative networks in coordinated action. During play, children's brains release a cascade of growth-promoting neurochemicals including BDNF, dopamine, and endorphins, which together strengthen synaptic connections and encourage new neural pathway formation. Pretend play in particular exercises the prefrontal cortex's capacity for counterfactual thinking — imagining what is not present, holding multiple possibilities in mind, and flexibly switching between reality and fantasy. These are precisely the executive function skills underlying creativity, problem-solving, and social cognition. Animals deprived of play show lasting deficits in social behavior and prefrontal development, and similar principles apply to children. The research is clear that structured adult-led activities do not substitute for child-directed free play. Parents should protect ample time for unstructured, screen-free, physically active, and imaginative play, understanding that this is not idle time but the most developmentally essential work their child's brain is doing.",
  },
  {
    id: "neu2-15",
    source: "Brain Rules for Baby (Medina)",
    sourceDetails: "Medina, Chapter on Sleep and Adolescent Brain Development",
    category: "behavior",
    text: "Sleep deprivation affects the adolescent brain differently and more severely than the adult brain, with consequences that extend far beyond daytime sleepiness. During puberty, the brain undergoes a dramatic shift in circadian rhythm — melatonin release is delayed by approximately two hours, meaning teenagers naturally feel sleepy around eleven PM rather than nine PM. This biological shift, combined with early school start times, creates chronic sleep deficits. The consequences for the developing brain are profound. Sleep is when the glymphatic system clears metabolic waste products from brain tissue, when memories consolidate from hippocampal short-term storage to cortical long-term networks, and when the brain rehearses motor and cognitive skills learned during the day. The adolescent prefrontal cortex, already under construction, is especially vulnerable to sleep loss: sleep-deprived teens show markedly impaired judgment, impulse control, emotional regulation, and working memory. Brain imaging reveals that sleep-deprived adolescent amygdalas become hyper-reactive to negative emotional stimuli by up to sixty percent compared to rested teens. Chronic teen sleep deprivation is linked to increased rates of depression, anxiety, athletic injuries, and motor vehicle accidents. Parents should advocate for later school start times and enforce consistent sleep schedules.",
  },
  {
    id: "neu2-16",
    source: "How the Brain Learns (Sousa)",
    sourceDetails: "Sousa, Chapter on Myelination and Skill Acquisition",
    category: "behavior",
    text: "Myelination — the process by which nerve fibers are wrapped in a fatty insulating sheath called myelin — is one of the most important and underappreciated mechanisms of brain development. Myelin dramatically increases the speed of electrical signal transmission along axons, sometimes improving conduction velocity by a factor of fifty. This insulation transforms slow, inconsistent neural signals into fast, reliable, well-timed communications between brain regions. Myelination follows a predictable sequence: sensory and motor pathways myelinate first in infancy, language circuits in early childhood, and prefrontal regulatory circuits continue myelinating into the mid-twenties. The crucial insight for parents is that myelination is heavily experience-dependent. Every time a child practices a skill — whether playing piano scales, kicking a soccer ball, or working through math problems — oligodendrocytes wrap additional myelin around the relevant circuits, making those neural pathways faster and more efficient. This is the neuroscience behind the observation that practice makes permanent. Repetition does not just build habits; it physically insulates neural pathways, automating skills so they require less conscious effort. This explains why consistent daily practice, even in short sessions, produces more skill consolidation than occasional marathon sessions.",
  },
  {
    id: "neu2-17",
    source: "The Neuroscience of Human Relationships (Cozolino)",
    sourceDetails: "Cozolino, Chapter on Social Pain and Peer Acceptance",
    category: "behavior",
    text: "Social rejection in childhood activates the anterior cingulate cortex (ACC) — the same brain region that processes physical pain. This is not a metaphor: neuroimaging studies confirm that the neural signature of social exclusion overlaps substantially with the brain's pain matrix, meaning that being left out or bullied literally hurts in neurological terms. Children's brains are exquisitely tuned to social belonging because, from an evolutionary perspective, group acceptance meant survival. The ACC, together with the insula, registers social rejection with intense physiological responses including cortisol spikes, elevated heart rate, and activation of inflammatory pathways. Chronic social rejection sensitizes these circuits, creating a hypervigilant social monitoring system that can lead to anxiety, depression, and defensive aggression. The younger the child, the more global the pain of rejection feels, as their developing brains have not yet compartmentalized social experiences. Parents should never dismiss social pain as trivial or tell children to simply ignore it — the brain cannot distinguish between physical and emotional injury as easily as language suggests. Instead, parents should validate the pain, provide emotional safety, teach social skills explicitly, and intervene decisively against bullying. Warm family relationships buffer social rejection's neurological impact.",
  },
  {
    id: "neu2-18",
    source: "The Neuroscience of Human Relationships (Cozolino)",
    sourceDetails: "Cozolino, Chapter on Interpersonal Neurobiology and Stress Transfer",
    category: "behavior",
    text: "Parental stress neurobiologically transfers to children through multiple pathways, a phenomenon researchers call stress contagion. When a parent is chronically stressed, their elevated cortisol levels, dysregulated nervous system, and altered patterns of speech, touch, and facial expression are detected by the child's social brain networks and translated into the child's own physiological stress response. Even preverbal infants show cortisol elevations that mirror their mothers' stress levels within hours. The mechanism involves mirror neuron systems that automatically simulate observed emotional states, combined with right-brain-to-right-brain communication channels through which parents and children nonconsciously share affective states. Children are extraordinarily sensitive barometers of their parents' internal states — they detect tension that parents believe they are hiding. This is not about parental perfection; brief, regulated stress that is openly discussed and managed actually teaches children healthy coping. The danger lies in chronic, unacknowledged, unregulated parental stress that saturates the family environment. Parents who invest in their own stress management — through social support, therapy, exercise, mindfulness, or adequate sleep — are directly investing in their children's neurological health. Self-care is not selfish; it is a neurobiological prerequisite for effective, attuned parenting that promotes calm, regulated brain development in children.",
  },
  {
    id: "neu2-19",
    source: "Behave (Sapolsky)",
    sourceDetails: "Sapolsky, Chapter on Epigenetics and Gene-Environment Interaction",
    category: "behavior",
    text: "Epigenetics — the study of how environmental factors alter gene expression without changing the DNA sequence itself — reveals that parenting literally shapes which of a child's genes are turned on or off. The most studied example involves the glucocorticoid receptor gene, which governs how efficiently the brain turns off its stress response. Animal research demonstrates that pups raised by highly attentive mothers (frequent licking and grooming) develop more glucocorticoid receptors through epigenetic methylation changes, making them calmer and more stress-resilient throughout life. Pups raised by inattentive mothers show the opposite pattern — fewer receptors and lifelong stress sensitivity. Cross-fostering studies confirm this is caused by parenting quality, not genetics, as pups adopted by attentive mothers develop the resilient profile. Human research parallels these findings: children who experience nurturing care show epigenetic patterns associated with healthy stress regulation, while those who experience neglect or abuse show methylation patterns linked to mental and physical health vulnerability. These epigenetic marks can persist across generations, meaning parenting choices ripple forward in time. This is not meant to induce guilt but to empower — every warm, responsive interaction between parent and child influences gene expression in directions that support lifelong resilience, emotional health, and even the well-being of future generations.",
  },
  {
    id: "neu2-20",
    source: "The Whole-Brain Child (Siegel)",
    sourceDetails: "Siegel & Bryson, Chapter on Attachment and Neurochemistry",
    category: "behavior",
    text: "The parent-child bond is orchestrated by a quartet of neurochemicals sometimes called the DOSE molecules: dopamine, oxytocin, serotonin, and endorphins. Each plays a distinct role in attachment and emotional development. Dopamine drives the reward-seeking motivation that makes babies and parents irresistibly drawn to each other, reinforcing social connection through pleasure circuitry. Oxytocin, released during warm physical contact, eye contact, and responsive caregiving, acts as the molecular glue of attachment — it reduces stress hormones, promotes trust, and strengthens the neural circuits encoding social bonding. Serotonin contributes to feelings of well-being and emotional stability; children with secure attachments show more stable serotonin signaling, supporting better mood regulation. Endorphins, released during playful physical interaction, laughter, and comforting touch, create feelings of safety and joy while also buffering pain and stress. When parents consistently respond to their child with warmth and sensitivity, these four neurochemical systems work in concert to build a neurobiological foundation of security, resilience, and social-emotional competence. Importantly, these same chemicals are released in parents during positive interactions, creating a virtuous cycle of mutual bonding. Practical implication: skin-to-skin contact, playful roughhousing, shared laughter, responsive feeding, and bedtime cuddles are not merely pleasant rituals but neurochemical events that build the brain's architecture of love.",
  },


  // === COGNITIVE BEHAVIOURAL THEORIES ===
{
    id: "cbt-1",
    source: "Cognitive Therapy",
    sourceDetails: "Aaron T. Beck, Foundations of the Cognitive Model",
    category: "emotional",
    text: "The cognitive model, developed by Aaron Beck, states that it is not situations themselves that determine how we feel and behave, but rather the way we interpret them. This is captured in the triangle connecting thoughts, feelings, and behaviors. When a child receives a poor grade, one might think 'I'm stupid' (thought), feel despair (emotion), and give up studying (behavior). Another child in the same situation might think 'I need to study differently next time,' feel motivated, and adjust their approach. For parents, understanding this model is transformative: instead of trying to change the situation or simply comforting the emotion, you can help your child identify and reframe the interpretation that sits between the event and the feeling. Start by gently asking 'What was going through your mind right then?' This teaches children that thoughts are mental events, not facts. Research consistently shows that when children learn to notice and evaluate their automatic thoughts, they gain a durable skill for managing emotions throughout life. This is the foundational insight of all cognitive behavioral approaches.",
  },
  {
    id: "cbt-2",
    source: "Feeling Good",
    sourceDetails: "David Burns, Cognitive Distortions Overview",
    category: "emotional",
    text: "David Burns popularized the concept of cognitive distortions — systematic errors in thinking that fuel negative emotions. Children and teens are especially vulnerable to these because their reasoning skills are still developing. The most common distortions in young people include all-or-nothing thinking ('If I'm not the best, I'm the worst'), overgeneralization ('I failed once, so I always will'), mental filtering (focusing only on the negative), discounting the positive ('That compliment doesn't count'), jumping to conclusions, emotional reasoning ('I feel scared, so it must be dangerous'), and labeling ('I'm a loser'). Parents can help by learning to spot these patterns in their children's self-talk. When your teen says 'Nobody likes me,' that is mind reading and overgeneralization, not a fact. The intervention is not to simply say 'That's not true,' but to collaboratively examine the evidence: 'Let's look at who you interacted with today. Did anyone seem friendly?' Teaching children the names of these distortions — even using playful terms like 'brain tricks' for younger kids — gives them a vocabulary to recognize and challenge distorted thinking as it happens.",
  },
  {
    id: "cbt-3",
    source: "Freeing Your Child from Anxiety",
    sourceDetails: "Tamar Chansky, Catastrophizing in Children",
    category: "emotional",
    text: "Catastrophizing is the cognitive distortion where the mind jumps to the worst possible outcome. In anxious children, this is pervasive: a stomachache means appendicitis, a bad test means never getting into college, a friend not texting back means total rejection. Tamar Chansky recommends teaching children to distinguish between the 'worry brain' and the 'smart brain.' The worry brain specializes in worst-case scenarios, and the smart brain's job is to fact-check. Parents can guide this with a simple three-step process. First, identify the catastrophe: 'What is your worry brain telling you?' Second, generate alternative endings: 'What are three other things that could happen?' Third, identify the most likely outcome based on past evidence. The key is to externalize the worry voice so the child can evaluate it objectively rather than fused with it. With practice, children begin to catch catastrophizing automatically. Research demonstrates that this skill, once learned, significantly reduces anxiety symptoms in children ages seven through adolescence. Consistency matters: repeat the framework every time anxiety appears until the child internalizes the process.",
  },
  {
    id: "cbt-4",
    source: "Mind over Mood",
    sourceDetails: "Greenberger & Padesky, Thought Records",
    category: "emotional",
    text: "Thought records are a core CBT technique adapted from Greenberger and Padesky's structured approach. For children and teens, a simplified thought record is one of the most effective tools for building emotional awareness and cognitive flexibility. The record has five columns: the situation (what happened), the emotion (what you felt and how strongly, rated zero to one hundred), the automatic thought (what went through your mind), evidence for the thought, and evidence against it. A teenager who thinks 'My friend hates me because she didn't sit with me at lunch' writes down the evidence for (she sat elsewhere) and against (she texted me happily this morning, she said she was meeting a new student). The final step is creating a balanced alternative thought: 'She probably had a reason unrelated to me; I can ask her about it.' Studies show that consistent use of thought records over four to six weeks leads to measurable reductions in depressive and anxious symptoms in adolescents. Parents should model the process by doing their own thought records aloud, normalizing the experience of having distorted thoughts and the skill of examining them.",
  },
  {
    id: "cbt-5",
    source: "Learned Optimism",
    sourceDetails: "Martin Seligman, Explanatory Style",
    category: "emotional",
    text: "Martin Seligman's research on learned helplessness revealed that when people — including children — repeatedly experience uncontrollable negative events, they stop trying to change their circumstances even when change becomes possible. The antidote is learned optimism, which depends on what Seligman calls explanatory style: how children habitually explain causes of events. Pessimistic children explain bad events as permanent ('It will always be this way'), pervasive ('It ruins everything'), and personal ('It's all my fault'). Optimistic children see bad events as temporary, specific, and caused by external factors they can influence. Parents shape this directly through their own causal explanations and through how they praise. Process praise — 'You worked really hard on that' — fosters an optimistic, growth-oriented explanatory style. Person praise — 'You're so smart' — can foster fragility and pessimism when the child eventually struggles. If a child says 'I'm bad at math,' a parent can gently reframe: 'You haven't mastered this concept yet. What strategy could we try differently?' This simple linguistic shift, repeated consistently, measurably changes how children interpret setbacks and how quickly they recover from them.",
  },
  {
    id: "cbt-6",
    source: "The CBT Toolbox for Children and Adolescents",
    sourceDetails: "LCSW, Behavioral Activation for Depressed Teens",
    category: "emotional",
    text: "Behavioral activation is an evidence-based intervention for adolescent depression that targets the cycle of withdrawal, inactivity, and worsening mood. Depressed teens stop doing things that bring pleasure or accomplishment, which deepens their depression, leading to even less activity. The intervention is straightforward but powerful: systematically reintroduce rewarding activities. Start by having the teen track their daily activities and rate each for pleasure (zero to ten) and accomplishment (zero to ten). This creates a mood-activity map revealing which behaviors elevate mood. Next, collaboratively plan small, achievable activities — a walk, texting a friend, cooking a meal — and schedule them into the week. The critical principle is that motivation follows action, not the other way around. Depressed teens wait to feel better before doing things; behavioral activation teaches them to act first and let mood follow. Research shows behavioral activation alone is as effective as full CBT for many adolescents with mild to moderate depression. Parents should resist the urge to nag; instead, offer to participate alongside the teen and celebrate effort over outcome.",
  },
  {
    id: "cbt-7",
    source: "Freeing Your Child from Anxiety",
    sourceDetails: "Tamar Chansky, Exposure Therapy Principles for Children",
    category: "emotional",
    text: "Exposure therapy is the gold-standard treatment for childhood anxiety disorders, based on the principle that avoidance maintains fear while controlled, repeated contact with the feared situation extinguishes it. For a child afraid of dogs, avoidance (crossing the street, refusing to visit friends with pets) provides immediate relief but confirms the danger. Exposure works by creating a fear hierarchy: a ranked list from least to most anxiety-provoking situations. The child might start by looking at pictures of dogs, progress to watching videos, then standing near a leashed small dog, and eventually petting one. Each step is repeated until anxiety drops by at least half before moving to the next level. Chansky emphasizes making this collaborative and child-directed: the child chooses the steps and rates their anxiety throughout. Parents must resist accommodating the avoidance — the well-meaning instinct to shield children from distress actually reinforces the anxiety. Instead, parents serve as coaches, acknowledging fear while expressing confidence in the child's ability to cope. Graduated exposure, practiced consistently over weeks, produces significant anxiety reduction in approximately seventy percent of children.",
  },
  {
    id: "cbt-8",
    source: "The Happiness Trap",
    sourceDetails: "Russ Harris, ACT Fundamentals for Parents",
    category: "emotional",
    text: "Acceptance and Commitment Therapy, as adapted by Russ Harris, offers parents a radically different relationship with difficult emotions. Rather than trying to eliminate or control negative feelings — which often backfires, especially under the intense pressure of parenting — ACT teaches six core processes: acceptance (making room for unpleasant feelings), cognitive defusion (stepping back from unhelpful thoughts rather than believing them), being present (focusing on the here and now), self-as-context (recognizing you are the observer, not your thoughts), values (identifying what truly matters to you as a parent), and committed action (taking steps aligned with those values even when it's hard). When a parent feels fury because a toddler won't get dressed, ACT doesn't say 'stop being angry.' It says: notice the anger, make space for it, notice the thought 'I'm a terrible parent,' defuse from it, and ask 'What kind of parent do I want to be in this moment?' Then act on that value. Studies show ACT reduces parental stress, improves emotional flexibility, and models for children that all emotions — not just pleasant ones — can be handled skilfully.",
  },
  {
    id: "cbt-9",
    source: "DBT Skills Training Manual",
    sourceDetails: "Marsha Linehan, Emotional Regulation Skills",
    category: "emotional",
    text: "Marsha Linehan's Dialectical Behavior Therapy provides a structured skills curriculum for emotional regulation that is highly applicable to family life. The four skill modules are mindfulness, distress tolerance, emotion regulation, and interpersonal effectiveness. For children and teens, the most immediately useful is the STOP skill for distress tolerance: Stop what you are doing, Take a step back physically, Observe what is happening inside and outside, and Proceed mindfully rather than reactively. This can be taught to children as young as six. Another core DBT concept is checking the facts: before reacting to an intense emotion, ask whether the emotion's intensity matches the actual situation. A teen whose friend didn't reply to a text might feel fury or devastation. Checking the facts means pausing to ask: Is there another explanation? Does the reaction fit the facts? DBT also teaches opposite action — doing the opposite of what the emotion demands. When depressed and wanting to isolate, the skill says to reach out. When furious and wanting to attack, the skill says to be gentle. These skills require repetition and practice but become automatic over time, giving children a portable toolkit for emotional crises.",
  },
  {
    id: "cbt-10",
    source: "DBT Skills Training Manual",
    sourceDetails: "Marsha Linehan, Distress Tolerance and Radical Acceptance",
    category: "emotional",
    text: "Radical acceptance, a cornerstone of DBT distress tolerance, teaches that fighting reality increases suffering. For families navigating situations that cannot be immediately changed — a divorce, a chronic illness, a disappointing outcome — radical acceptance is not approval or passivity; it is acknowledging facts as they are so that effective action becomes possible. Linehan distinguishes pain (the unavoidable hurt of a difficult situation) from suffering (the additional pain created by refusing to accept the situation). For a teenager whose family is moving cities, radical acceptance means stopping the fight against moving — the protests, the resentment, the fantasies of prevention — and beginning the work of adapting. Parents can model this aloud: 'I don't like that this is happening, and I accept that it is. What can we do to make this work?' The TIPP skill is another essential distress tolerance technique: change body Temperature (cold water on the face), do Intense exercise, use Paced breathing, and Paired muscle relaxation. These physically reset the nervous system within minutes, pulling a teen out of acute emotional flooding so that higher-order coping skills become accessible.",
  },
  {
    id: "cbt-11",
    source: "Feeling Good",
    sourceDetails: "David Burns, REBT and Rational Thinking (Ellis Integration)",
    category: "emotional",
    text: "Rational Emotive Behavior Therapy, developed by Albert Ellis and integrated into popular CBT by Burns, centers on identifying and challenging irrational beliefs — particularly the rigid demands we place on ourselves and others. Ellis categorized these into three destructive 'musts': I must perform perfectly, others must treat me fairly, and life must be comfortable and easy. When these demands are violated, children and adults spiral into anger, anxiety, or depression. For parents, the 'musts' are often directed at children: 'My child must behave well in public' or 'My teenager must respect my rules.' When reality collides with these rigid demands, parental anger escalates far beyond what the situation warrants. The REBT intervention is to convert demands into preferences: 'I would prefer my child behave well, but there is no universal law saying they must.' This isn't lowering standards; it's reducing the emotional charge so you can respond effectively. For children, teaching them to replace 'I must get an A or I'm worthless' with 'I want to do well, but a B is not catastrophic' builds resilience. The technique is simple but requires consistent practice to become habitual.",
  },
  {
    id: "cbt-12",
    source: "Learned Optimism",
    sourceDetails: "Martin Seligman, Cognitive Restructuring for Parental Anger",
    category: "emotional",
    text: "Cognitive restructuring for parental anger applies CBT principles to one of parenting's most universal and distressing challenges. When parents explode in anger, the trigger is rarely just the child's behavior — it is the parent's interpretation of that behavior. A child spilling milk triggers fury because the parent thinks 'He does this on purpose' or 'She never listens' or 'I can't take this anymore.' These automatic thoughts contain distortions: mind reading (assuming intent), overgeneralization (always, never), and emotional reasoning (I feel furious, therefore this is catastrophic). Restructuring begins with the parent catching the thought in the moment, writing it down when possible, examining the evidence, and generating a balanced alternative. 'He never listens' becomes 'He listened carefully yesterday when I explained bedtime. Right now he is distracted.' The physiological component matters too: anger lives in the body. A ninety-second pause — breathing, stepping away, splashing cold water — allows the prefrontal cortex to come back online so cognitive restructuring can happen. Research shows that parents who learn and practice cognitive restructuring report significantly fewer angry outbursts, less guilt, and warmer relationships with their children.",
  },
  {
    id: "cbt-13",
    source: "Mindset (via Cognitive Behavioral Framework)",
    sourceDetails: "Carol Dweck, Growth Mindset Applications in Parenting",
    category: "emotional",
    text: "Carol Dweck's growth mindset research aligns closely with cognitive behavioral principles: both target the causal role of beliefs in shaping emotional and behavioral outcomes. A fixed mindset belief — 'I'm just not a math person' — functions identically to a Beckian automatic thought. It triggers avoidance, reduced effort, and confirmation-seeking. A growth mindset belief — 'I can improve with practice and strategy' — opens possibilities for persistence and learning. For parents, the most powerful intervention is changing how they praise. Dweck's studies show that praising intelligence ('You're so smart') creates a fixed mindset: children become afraid of challenges because failure would mean they're not smart after all. Praising process — effort, strategy, persistence, and improvement — cultivates growth mindset and resilience. When a child fails, parents can reframe it as data: 'What did you learn from this? What will you try next time?' Dweck's research also shows that teaching children about neuroplasticity — that the brain physically grows stronger with practice — significantly boosts motivation and achievement. The phrase 'yet' is a potent tool: 'I can't do this yet' transforms a fixed verdict into a growth trajectory, a single word that carries profound cognitive-behavioral weight.",
  },
  {
    id: "cbt-14",
    source: "The CBT Toolbox for Children and Adolescents",
    sourceDetails: "LCSW, Self-Instruction Training (Meichenbaum)",
    category: "emotional",
    text: "Self-instruction training, developed by Donald Meichenbaum, teaches children to use private speech — internal self-talk — to guide their behavior through challenging situations. Young children naturally talk themselves through tasks aloud ('Be careful on the stairs'), and Meichenbaum built on this by systematically teaching structured self-talk scripts. For an impulsive child, the steps are: define the problem ('I need to wait my turn'), plan ('I'll count to ten first'), self-reinforcement ('I did it, I waited'), and error correction ('I forgot this time, but I'll try again'). Parents and therapists first model the self-talk aloud, then the child repeats it aloud, then whispers it, and finally internalizes it. This graduated fading from external to internal speech is critical. Research shows self-instruction training significantly improves impulse control, academic performance, and frustration tolerance in children with ADHD and behavioral challenges. The technique works because it engages the prefrontal cortex — the brain's planning and regulation center — through language, which is uniquely powerful in humans. For parents, the practical application is narrating your own problem-solving aloud: 'I'm frustrated with this traffic. Let me take a breath and think about the best way to handle this.' Children absorb these scripts through observation.",
  },
  {
    id: "cbt-15",
    source: "The CBT Toolbox for Children and Adolescents",
    sourceDetails: "LCSW, Behavioral Modification and Reinforcement Schedules",
    category: "emotional",
    text: "Behavioral modification, grounded in operant conditioning principles, is one of the most thoroughly researched approaches in child psychology. The core principle is that behaviors followed by reinforcement increase in frequency, while behaviors followed by consequences decrease. For parents, understanding reinforcement schedules is essential. Continuous reinforcement — rewarding every instance of a desired behavior — is best for establishing a new behavior quickly. Intermittent reinforcement — rewarding unpredictably and occasionally — is best for maintaining an established behavior long-term, because the child doesn't come to expect a reward every time. A common parental mistake is accidentally reinforcing negative behavior: giving a child a tablet to stop a tantrum teaches that tantrums produce tablets. The most effective approach combines positive reinforcement for desired behaviors with planned ignoring or natural consequences for undesired ones. Token economies — sticker charts where earned tokens are exchanged for privileges — are effective for ages four through twelve when the target behaviors are specific and the rewards are meaningful. Critical to note: research consistently shows that punishment alone is less effective than reinforcement and teaches children what not to do rather than what to do. Warmth plus clear, consistent boundaries produces the strongest behavioral outcomes.",
  },
  {
    id: "cbt-16",
    source: "Freeing Your Child from Anxiety",
    sourceDetails: "Tamar Chansky, CBT for Childhood Anxiety Disorders",
    category: "emotional",
    text: "CBT for childhood anxiety is the most empirically supported psychosocial intervention in pediatric mental health, with dozens of randomized controlled trials demonstrating its effectiveness. The treatment typically runs twelve to sixteen sessions and integrates psychoeducation, somatic management, cognitive restructuring, and graduated exposure. Children learn that anxiety is a false alarm — their body's danger detection system misfiring — not a signal of real threat. They learn to recognize the physical signs (racing heart, stomachache, tight breathing) and use coping skills: diaphragmatic breathing, progressive muscle relaxation, and positive self-talk. The cognitive component teaches them to identify worry thoughts ('Something bad will happen') and generate brave thoughts ('I've been safe every other time'). The exposure component, described separately, is the active ingredient. Chansky emphasizes that parents are co-therapists in this process. They learn not to accommodate — the subtle patterns of modifying family life to prevent the child's anxiety, such as answering the phone for a socially anxious child or allowing a child with separation anxiety to sleep in the parents' bed. Research shows that when parents stop accommodating, children's anxiety decreases significantly, even without additional treatment changes.",
  },
  {
    id: "cbt-17",
    source: "Brain Lock",
    sourceDetails: "Jeffrey Schwartz, CBT for Childhood OCD",
    category: "emotional",
    text: "Jeffrey Schwartz's Four-Step Method for OCD, originally developed for adults, is adapted for children with obsessive-compulsive disorder and provides a clear, memorable framework. The steps are Relabel, Reattribute, Refocus, and Revalue. A child with contamination OCD who feels compelled to wash their hands for thirty minutes learns to Relabel ('This is my OCD talking, not real danger'), Reattribute ('OCD is a medical condition where my brain sends false alarm signals'), Refocus ('I'm going to do something else for fifteen minutes before washing'), and Revalue ('This thought has no real importance'). The goal is not to eliminate the obsessions — which is nearly impossible and attempts tend to intensify them — but to change the child's relationship with them. Schwartz emphasizes that compulsions feed obsessions; every time a child performs a ritual, the OCD cycle is strengthened. The gold-standard treatment, Exposure and Response Prevention (ERP), systematically exposes the child to triggering situations while preventing the compulsive response. For a child who must check locks, ERP means touching the doorknob once and walking away without checking. This is intensely uncomfortable initially, but anxiety peaks and then naturally declines within thirty to forty-five minutes. Repeated practice rewires the brain, and symptoms often reduce dramatically within twelve to twenty sessions.",
  },
  {
    id: "cbt-18",
    source: "Mindfulness for Beginners",
    sourceDetails: "Jon Kabat-Zinn, Mindfulness-Based Cognitive Techniques for Families",
    category: "emotional",
    text: "Mindfulness-Based Cognitive Therapy integrates Kabat-Zinn's mindfulness practices with CBT to prevent depressive relapse and reduce anxiety in both adults and adolescents. For families, the simplest entry point is the mindful pause: a sixty-second practice of stopping, feeling the feet on the floor, noticing three breaths, and checking in with present-moment sensations. This interrupts the autopilot of reactive parenting and gives the prefrontal cortex a chance to engage. For children, mindfulness can be taught through sensory activities: eating a raisin with full attention to taste, texture, and smell; listening to a bell until the sound disappears; doing a body scan at bedtime. These exercises strengthen the same attentional control networks that underpin emotional regulation. Research shows that family mindfulness practice reduces parental reactivity, improves children's attention and executive function, and strengthens the parent-child relationship through shared present-moment awareness. The mechanism is neurobiological: mindfulness practice increases activity in the prefrontal cortex and reduces amygdala reactivity, effectively giving both parent and child more space between stimulus and response. That space — sometimes just two or three seconds — is where mindful choice replaces automatic reaction, and it grows with practice.",
  },
  {
    id: "cbt-19",
    source: "The CBT Toolbox for Children and Adolescents",
    sourceDetails: "LCSW, Schema Therapy Basics for Family Patterns",
    category: "emotional",
    text: "Schema Therapy, developed by Jeffrey Young, extends CBT by addressing deeply held patterns called early maladaptive schemas — rigid emotional themes formed in childhood from unmet core needs. Common schemas relevant to family life include abandonment (expecting loss), mistrust (expecting betrayal), defectiveness (feeling fundamentally flawed), and unrelenting standards (perfectionism). A parent with an abandonment schema may become excessively anxious when their teen seeks independence, interpreting normal autonomy as rejection. A parent with unrelenting standards may push their child toward perfection, inadvertently installing the same schema. Recognizing these patterns is the first step. Schema therapy helps adults identify which schemas are being triggered in parenting moments, trace them to their origins, and respond from their healthy adult mode rather than their wounded child mode. For children and teens, early schema work involves identifying core beliefs ('I'm unlovable,' 'I'm not good enough') through guided discovery and behavioral experiments that test these beliefs against real-world evidence. While full schema therapy is typically conducted with adults, the principles are invaluable for parents: understanding that your emotional reactions to your child are often shaped by your own early schemas — not just by the child's behavior — allows for more intentional, compassionate parenting.",
  },
  {
    id: "cbt-20",
    source: "The Happiness Trap",
    sourceDetails: "Russ Harris, ACT Values and Committed Action for Parenting",
    category: "emotional",
    text: "In ACT, values clarification is the compass that guides behavior when emotions are pulling you elsewhere. For parents, clarifying values transforms the daily grind of child-rearing from a series of problems to solve into a meaningful life direction. Common parenting values include being patient, fostering independence, creating warmth and connection, modeling resilience, and raising children who are kind. The ACT process asks parents to specify what these values look like in action: if your value is patience, what would a patient parent do right now when the toddler throws food? Values are not goals — goals are endpoints you achieve; values are directions you continually move toward. You never 'arrive' at patience; you practice it moment by moment. The Committed Action component means taking concrete steps aligned with values even in the presence of difficult thoughts and feelings. A parent who values connection but feels rejected by their teenager still reaches out, still shows up, still tries — not because the rejection doesn't hurt, but because connection matters more than comfort. Research on ACT-based parenting programs shows that values clarification reduces burnout, increases parenting confidence, and improves parent-adolescent relationship quality. It reconnects parents to the deeper purpose beneath the exhausting daily surface of family life.",
  },


];

// TOPIC_CATEGORIES moved to topics.ts (client-safe)
// This file is SERVER-SIDE ONLY — do not import from client components