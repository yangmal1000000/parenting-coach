import { TopicContent } from './types';

const toddlerTantrums: TopicContent = {
  tldr:
    'Toddler tantrums are normal bursts of emotional overload, not deliberate misbehavior. A young child\'s prefrontal cortex—the brain region that regulates emotion—is still developing, so big feelings overwhelm their capacity to cope. The most effective response combines staying calm yourself, validating the emotion ("You\'re upset because the iPad turned off"), naming the feeling, holding a firm boundary, and reconnecting once the storm passes. Avoid reasoning, punishing, or giving in mid-meltdown—all three prolong the episode. Frequent, intense tantrums lasting beyond age 5 may signal an underlying issue worth discussing with your pediatrician.',
  scenario:
    'You\'re at the grocery store. Your three-year-old grabs a candy bar from the checkout rack. You say, "Not today, sweetie." Within seconds, she\'s on the floor screaming, kicking the tile, and drawing stares from every shopper in line. You feel your own face flush. Part of you wants to just buy the candy to make it stop. Another part wants to carry her out kicking and screaming. Neither instinct is quite right. What you do in the next ninety seconds will either help her learn to manage disappointment—or teach her that meltdowns are the fastest way to get what she wants.',
  ageRange: '1–6 years',
  strategies: [
    {
      title: 'Regulate Yourself First',
      what: 'Before you respond to your child, check your own emotional state. A dysregulated adult cannot calm a dysregulated child. Take a slow breath, lower your voice, and consciously relax your shoulders. Your nervous system co-regulates with your child\'s—your calm signals safety to their brain.',
      script:
        '(To yourself, silently): "I\'m okay. This is just a tantrum. It\'s not an emergency." (Then, out loud, quietly): "I\'m right here. I can see you\'re really upset."',
      why:
        'Siegel and Bryson call this the "connect and redirect" approach. Mirror neurons mean your child subconsciously mirrors your emotional state. When you stay calm, you literally help calm their nervous system through co-regulation (The Whole-Brain Child, Ch. 3; No-Drama Discipline, Ch. 2).',
    },
    {
      title: 'Name It to Tame It',
      what: 'Put words to the emotion your child is feeling. Don\'t try to fix, reason, or explain yet—just accurately label the feeling. This engages the left hemisphere of the brain, which helps organize and calm the right hemisphere\'s flood of emotion.',
      script:
        '"You\'re really angry that we can\'t buy the candy. You wanted it so badly. It\'s so frustrating when you can\'t have what you want."',
      why:
        'Siegel and Bryson describe this as "name it to tame it"—naming an emotion reduces activity in the amygdala (the brain\'s alarm system) and engages the prefrontal cortex. Research shows that labeling emotions measurably decreases emotional intensity (The Whole-Brain Child, Ch. 2).',
    },
    {
      title: 'Hold the Boundary With Empathy',
      what: 'You can validate the feeling without changing the rule. Hold your limit firmly but warmly. Do not negotiate, explain at length, or give in. Children need to learn that all feelings are acceptable but not all behaviors are.',
      script:
        '"I know it\'s really hard to leave without the candy. And we\'re still not buying it today. You can be mad about that."',
      why:
        'Hershberg emphasizes that consistent boundaries actually make children feel safer. When parents give in after a tantrum, they accidentally teach the child that tantrums are an effective tool—making future tantrums more likely (The Tantrum Survival Guide, Ch. 5). Phelan\'s 1-2-3 Magic similarly stresses saying the rule once and holding it without emotional engagement (1-2-3 Magic, Ch. 3).',
    },
    {
      title: 'Offer a Controlled Choice',
      what: 'Once the intensity begins to drop, offer two acceptable options. This gives your child a sense of control and autonomy, which reduces resistance. Never offer a choice you aren\'t willing to follow through on.',
      script:
        '"The candy isn\'t an option. But you can choose: do you want to help me put the apples in the bag, or do you want to hold the shopping list for me?"',
      why:
        'Kurcinka highlights that spirited children have a high need for autonomy. Offering structured choices meets that need within boundaries you control, reducing power struggles (Raising Your Spirited Child, Ch. 8). Faber and Mazlish also stress that giving children agency through choices fosters cooperation (How to Talk So Kids Will Listen, Ch. 3).',
    },
    {
      title: 'Reconnect After the Storm',
      what: 'Once the tantrum has fully passed—not during the cooldown, but after—reconnect physically and emotionally. This is not the time for a lecture. A brief, warm reconnection repairs the relationship and teaches that your love isn\'t conditional on good behavior.',
      script:
        '(Hug or sit beside them.) "That was a really big feeling. I\'m glad you\'re feeling calmer now. I love you no matter what."',
      why:
        'Siegel and Bryson stress that the aftermath of a tantrum is a window for integration—wiring the brain to handle the same situation better next time. Reconnection also repairs any rupture in the attachment relationship (No-Drama Discipline, Ch. 4). Glasser\'s Nurtured Heart Approach similarly emphasizes positively reinforcing the child\'s return to self-regulation (Transforming the Difficult Child, Ch. 6).',
    },
    {
      title: 'Identify and Preempt Triggers',
      what: 'Track when tantrums happen. Common triggers: hunger, fatigue, transitions, overstimulation, denied requests. Once you see the pattern, you can adjust the environment or prepare your child before the trigger hits.',
      script:
        '"I noticed you had a hard time at the store last week when you were tired. Today we\'re going after your nap. And here\'s the plan: we\'re buying groceries, not toys. If you see something you want, you can tell me and I\'ll put it on your wish list."',
      why:
        'Greene\'s Collaborative & Proactive Solutions model emphasizes identifying lagging skills and unsolved problems that set the stage for explosive episodes, then solving them proactively rather than reacting after the fact (The Explosive Child, Ch. 4). Hershberg also stresses that prevention is more effective than reaction (The Tantrum Survival Guide, Ch. 7).',
    },
  ],
  avoid: [
    {
      mistake: 'Trying to reason during the meltdown',
      whyBackfires:
        'During a tantrum, the child\'s right hemisphere (emotional) has essentially hijacked the left hemisphere (logical). Language processing is impaired. Your explanations literally cannot get through. Reasoning mid-tantrum often escalates the child because they feel unheard.',
      instead:
        'Save the lesson for later. In the moment, focus solely on connection and safety. Twenty minutes later, when everyone is calm, you can revisit: "Earlier at the store, you got really upset. What happened? What could we do differently next time?"',
    },
    {
      mistake: 'Giving in to stop the tantrum',
      whyBackfires:
        'If a tantrum successfully produces the desired outcome even occasionally, you\'ve reinforced the behavior on an intermittent schedule—the most powerful reinforcement pattern in behavioral science. The child learns that persistence pays off, and tantrums will increase in frequency and intensity.',
      instead:
        'Hold the boundary calmly and consistently. If you\'ve said no, the answer stays no—even if it\'s embarrassing, even if it\'s inconvenient. Your consistency today prevents a harder battle tomorrow.',
    },
    {
      mistake: 'Matching their volume with your own',
      whyBackfires:
        'Yelling or getting visibly angry escalates the child\'s distress. It models the very loss of control you\'re asking them to regain. It also triggers their fight-or-flight response, deepening the meltdown and extending its duration.',
      instead:
        'Lower your voice below your normal speaking volume. This forces the child to quiet down slightly to hear you, and it models the regulation you want them to learn. Get on their eye level physically—kneel or sit down.',
    },
    {
      mistake: 'Threatening consequences you won\'t follow through on',
      whyBackfires:
        'Empty threats teach children that your words don\'t mean anything. Over time, they stop taking your limits seriously, which leads to more testing and more conflict. It also erodes trust.',
      instead:
        'Only state consequences you\'re prepared to enforce immediately. Better yet, skip consequences during a tantrum entirely—focus on calming first. Address behavior choices later when everyone is regulated: "Next time we\'re at the store and you\'re feeling really upset, what can we do?"',
    },
  ],
  ageGuidance: [
    {
      age: '12–18 months',
      advice:
        'Tantrums at this age are almost entirely physiological—hunger, fatigue, overstimulation, or illness. Your job is basic triage: Is it naptime? Is there a dirty diaper? Is the environment too loud? Distract and redirect rather than reasoning. Hold them close, speak softly, and remove them from overstimulating environments. Boundaries should be physical and gentle (moving them away from danger), not verbal.',
    },
    {
      age: '18 months–3 years',
      advice:
        'This is peak tantrum season. Autonomy is surging ("I do it!") but skills lag behind desire. Offer controlled choices throughout the day to head off power struggles. Keep language simple: "I see you\'re mad. No hitting." Don\'t expect them to articulate emotions yet—label feelings for them. Expect 1–3 tantrums per day as developmentally normal.',
    },
    {
      age: '3–5 years',
      advice:
        'Tantrums should be decreasing in frequency but may increase in intensity. Children this age can start learning emotion vocabulary and simple coping skills: belly breathing, squeezing a pillow, going to a calm-down space. Begin collaborative problem-solving after the tantrum: "What could we try next time?" Preschoolers understand fairness, so be consistent and explain the "why" behind rules—just not during the meltdown.',
    },
    {
      age: '5–6 years',
      advice:
        'By kindergarten, most children have developed enough self-regulation that full-blown tantrums are rare. If they\'re still happening frequently (more than a few times per week), investigate lagging skills, transitions stress, or underlying issues. At this age, tantrums that include aggression, destruction of property, or last longer than 15 minutes warrant a conversation with your pediatrician.',
    },
  ],
  whenToSeekHelp: [
    'Tantrums involve self-injury (biting themselves, banging head hard) or injury to others that you cannot safely redirect.',
    'Tantrums occur 5+ times per day on most days, or regularly last longer than 25 minutes, well beyond the typical range for your child\'s age.',
    'Your child is age 5 or older and is still having frequent, intense meltdowns that interfere with school, friendships, or family life.',
    'You feel afraid of your child\'s reactions, or you\'re altering your family\'s entire routine to avoid triggering an episode. This pattern may indicate an underlying anxiety, sensory processing, or behavioral issue that a professional can help assess.',
  ],
  faqs: [
    {
      q: 'Are tantrums normal, or is something wrong with my child?',
      a: 'Tantrums are completely normal between ages 1 and 4. Research shows that 75–90% of toddlers have tantrums regularly. They\'re a sign of normal brain development—a child whose emotional capacity outpaces their ability to regulate. Tantrums become a concern only when they\'re exceptionally frequent, intense, or persist beyond age 5.',
    },
    {
      q: 'Should I ignore my child during a tantrum?',
      a: 'Complete ignoring can backfire because it abandons the child emotionally at the moment they\'re most overwhelmed. Instead, stay nearby and available. You don\'t need to talk much—just your calm presence helps. If your child screams "Go away," you can say, "I\'ll give you space, but I\'m right here if you need me." The key is being present without rewarding the behavior with excessive attention.',
    },
    {
      q: 'What if the tantrum happens in public and people are staring?',
      a: 'Most onlookers are parents who\'ve been there—and most non-parents don\'t care. Your child\'s emotional growth matters more than strangers\' opinions. Stay calm, keep your child safe, and hold your boundary. If needed, calmly leave your cart and walk outside with your child. Do not let social pressure push you into giving in—that teaches a lesson you\'ll regret later.',
    },
    {
      q: 'Is it okay to use a timeout during a tantrum?',
      a: 'Timeouts can work for children 3 and up, but they should be brief (1 minute per year of age) and framed as a calm-down tool, not a punishment. Avoid using timeout in anger. Say, "You need a few minutes to calm your body. I\'ll set the timer." If your child sees timeout as rejection, it will escalate rather than calm them. In that case, try "time-in"—sitting together quietly.',
    },
    {
      q: 'How long should a typical tantrum last?',
      a: 'Most toddler tantrums last 3–10 minutes. A tantrum lasting 20–25 minutes or more is on the longer end and may indicate the child is stuck in a stress cycle they can\'t exit on their own. If your child regularly has tantrums lasting over 25 minutes, or if you notice they\'re unable to self-soothe at all, consult your pediatrician.',
    },
    {
      q: 'My child only has tantrums with me, not at daycare. Is that normal?',
      a:
        'Yes—and it\'s actually a compliment. Children "hold it together" in less safe environments and release their big emotions with the person they trust most. It\'s called "after-school restraint collapse" or safe-base behavior. It doesn\'t mean you\'re doing anything wrong. It means your child feels safe enough with you to fall apart. What helps: offer a snack, minimize questions right after pickup, and build in a calm transition before demands.',
    },
  ],
  sources: [
    {
      title: 'The Whole-Brain Child',
      author: 'Daniel J. Siegel & Tina Payne Bryson',
      details: 'Ch. 2 (Name It to Tame It); Ch. 3 (Engage, Don\'t Enrage)',
    },
    {
      title: 'No-Drama Discipline',
      author: 'Daniel J. Siegel & Tina Payne Bryson',
      details: 'Ch. 2 (Connect and Redirect); Ch. 4 (From Tantrum to Tranquility)',
    },
    {
      title: 'The Explosive Child',
      author: 'Ross W. Greene',
      details: 'Ch. 4 (Collaborative & Proactive Solutions); Ch. 7 (Lagging Skills)',
    },
    {
      title: '1-2-3 Magic',
      author: 'Thomas W. Phelan',
      details: 'Ch. 3 (Counting Tantrums); Ch. 5 (Stop Behaviors)',
    },
    {
      title: 'How to Talk So Kids Will Listen & Listen So Kids Will Talk',
      author: 'Adele Faber & Elaine Mazlish',
      details: 'Ch. 3 (Alternatives to Punishment); Ch. 4 (Encouraging Autonomy)',
    },
    {
      title: 'The Tantrum Survival Guide',
      author: 'Rebecca Schrag Hershberg',
      details: 'Ch. 5 (Holding Boundaries); Ch. 7 (Prevention Strategies)',
    },
    {
      title: 'Raising Your Spirited Child',
      author: 'Mary Sheedy Kurcinka',
      details: 'Ch. 8 (Autonomy and Choices); Ch. 5 (Intensity)',
    },
    {
      title: 'Transforming the Difficult Child',
      author: 'Howard Glasser',
      details: 'Ch. 6 (Nurtured Heart Approach); Ch. 4 (Energetic Reset)',
    },
  ],
};

export default toddlerTantrums;
