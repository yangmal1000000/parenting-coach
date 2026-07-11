import { TopicContent } from './types';

const pickyEating: TopicContent = {
  tldr:
    'Picky eating is normal child development, not a parenting failure. Between ages 2 and 6, food neophobia (fear of new foods) peaks as a protective evolutionary mechanism. The most effective approach is Ellyn Satter\'s Division of Responsibility: the parent decides what food is served, when, and where—the child decides whether and how much to eat. Repeated, pressure-free exposure to a food (10–15 times) is typically required before a child accepts it. Forcing, bribing, or hiding vegetables backfires long-term. Focus on family meals, variety, and trust in your child\'s internal hunger cues.',
  scenario:
    'Dinner is on the table: roasted chicken, broccoli, and rice. Your four-year-old takes one look, pushes the plate away, and announces: "I\'m not eating that. The green stuff is touching the white stuff." You feel the frustration rising—you spent thirty minutes cooking. Your partner says, "Just eat three bites and you can have dessert." Your child eats exactly three microscopic bites of chicken, holds out their hand for ice cream, and you wonder if they\'re getting enough nutrition. Most nights end in negotiation, and mealtimes have become the most stressful part of your day.',
  ageRange: '1–10 years',
  strategies: [
    {
      title: 'Apply the Division of Responsibility',
      what: 'You control what food is offered, when meals happen, and where your child eats. Your child controls whether they eat and how much. Once you\'ve served the meal, your job is done—step back and let them decide. Don\'t comment on what they\'re eating, how much, or in what order.',
      script:
        '"This is what\'s for dinner tonight. You can eat as much or as little as you want, and you don\'t have to eat anything you don\'t want. Dinner will be done in twenty minutes, and the next food offered is breakfast tomorrow."',
      why:
        'Satter\'s Division of Responsibility is the most extensively validated approach to childhood feeding. Research shows that when parents control intake (forcing bites, restricting portions), children lose the ability to self-regulate hunger and fullness—leading to both picky eating and later eating problems (Child of Mine, Ch. 4; Creating Competent Eaters, Ch. 2).',
    },
    {
      title: 'Offer Repeated, Pressure-Free Exposure',
      what: 'A child may need to see, smell, and touch a new food 10–15 times before tasting it, and taste it many more times before accepting it. Serve a small amount of a new food alongside familiar favorites, with no requirement to try it. Exposure without pressure is the key.',
      script:
        '"There\'s some broccoli on the plate. You don\'t have to eat it. It\'s just there in case you want to try it someday." (If they ask what it is: "That\'s broccoli. It\'s a vegetable that grows in the ground. Feel it—it feels like little trees.")',
      why:
        'Research in feeding psychology shows that pressure to eat ("Just try one bite") significantly decreases children\'s willingness to consume that food. Repeated neutral exposure without pressure is the single most effective way to increase food acceptance (Satter, Child of Mine, Ch. 6). The AAP Nutrition Guidelines also stress that repeated exposure builds familiarity and acceptance.',
    },
    {
      title: 'Serve Family-Style Meals',
      what: 'Place all food components in the center of the table and let each family member serve themselves—even young children. This gives the child autonomy and control over what goes on their plate, which dramatically reduces resistance. Include at least one "safe" food the child generally accepts at every meal.',
      script:
        '"Everything\'s on the table. You can put whatever you want on your plate. There\'s chicken, rice, broccoli, and bread. Serve yourself, and pass the dishes when you\'re done."',
      why:
        'Satter emphasizes that family-style serving builds food competence by giving children practice choosing and portioning. The AAP notes that family meals are associated with better dietary quality, lower obesity risk, and improved psychosocial outcomes (Creating Competent Eaters, Ch. 5). Fernando\'s Picky Eater Project also uses family-style meals as a core strategy (Ch. 4).',
    },
    {
      title: 'Involve Your Child in Food Preparation',
      what: 'Children who help shop for, wash, stir, or plate food are significantly more likely to taste what they\'ve helped prepare. Involvement creates ownership and curiosity. Even a two-year-old can wash vegetables or tear lettuce.',
      script:
        '"I need a helper for dinner tonight. Can you wash these carrots in the bowl? You can also help me stir the rice. You\'re going to be my taste-tester when it\'s done—let me know what you think."',
      why:
        'Fernando\'s research in The Picky Eater Project showed that children who participated in meal preparation ate significantly more vegetables and tried more new foods than those who didn\'t. Food involvement creates a sense of pride and reduces food neophobia (Ch. 5). The AAP also recommends involving children in grocery shopping and cooking as a nutrition strategy.',
    },
    {
      title: 'Eat Together Without Screens',
      what: 'Share at least one meal per day with your child, at a table, with no phones or tablets. Model eating a variety of foods yourself. Children learn what to eat by watching their parents eat—your behavior matters far more than your words.',
      script:
        '(During dinner, no devices.) "Mmm, I really like this chicken. The seasoning is delicious. How\'s your food?" (Eat the same meal as your child. If they see you enjoying vegetables, they\'re more likely to try them eventually.)',
      why:
        'Satter identifies parent modeling as the strongest predictor of children\'s food acceptance—stronger than any direct teaching or pressure technique (Child of Mine, Ch. 7). The AAP reports that children who eat family meals 3+ times per week consume more fruits and vegetables and less fried food and sugary drinks, regardless of household income.',
    },
    {
      title: 'Keep the Mealtime Environment Calm',
      what: 'Don\'t turn meals into negotiations, battles, or teaching moments. If your child refuses to eat, stay neutral. Don\'t offer alternatives, don\'t bribe with dessert, and don\'t express anxiety about their nutrition. End the meal calmly after a reasonable time (20–30 minutes) and wait for the next scheduled meal or snack.',
      script:
        '"Okay, it looks like you\'re not hungry right now. That\'s fine. I\'ll clear your plate. We\'ll have a snack at 3:00—there\'ll be apple slices and cheese then." (Neutral tone, no disappointment, no offering a substitute.)',
      why:
        'Satter emphasizes that emotional tension at the table suppresses appetite and creates negative food associations. Children\'s appetites naturally vary day to day—a child who eats well at one meal may eat almost nothing at the next. Trusting this natural rhythm prevents the anxiety cycle that makes picky eating worse (Creating Competent Eaters, Ch. 3). Fernando also warns against "short-order cooking"—making a separate meal for the picky child, which reinforces selectivity (The Picky Eater Project, Ch. 3).',
    },
  ],
  avoid: [
    {
      mistake: 'Bribing with dessert for eating vegetables',
      whyBackfires:
        '"Eat your broccoli and you can have ice cream" teaches the child that broccoli is the punishment and ice cream is the reward. Research shows this actually decreases preference for the "punishment" food and increases desire for the "reward" food. It also trains children to eat for external rewards rather than internal hunger.',
      instead:
        'Serve dessert occasionally as part of the meal—not as a reward. Put a small portion of dessert on the plate alongside everything else. Let the child eat in any order. If dessert is a rare treat, don\'t tie it to food consumption at all—serve it on a different schedule, unconnected to meals.',
    },
    {
      mistake: 'Making a separate meal for the picky child',
      whyBackfires:
        'Short-order cooking teaches the child that their refusal will be rewarded with a preferred food. It narrows their diet over time because there\'s never a reason to expand. It also creates enormous stress for the parent and makes meals feel like a restaurant service.',
      instead:
        'Always include one "safe" food the child generally eats as part of the family meal (bread, fruit, rice, etc.). The child can eat from what\'s offered. If they choose not to eat, allow them to leave the table and wait for the next scheduled meal or snack. Hunger is a powerful teacher.',
    },
    {
      mistake: 'Pressuring the child to "just try one bite"',
      whyBackfires:
        'Direct pressure to taste a food measurably increases resistance and decreases acceptance. Children experience pressure as a loss of autonomy, which triggers oppositional eating. The food becomes associated with conflict, not pleasure.',
      instead:
        'Offer the food without comment. Let your child observe you eating and enjoying it. If they try it, don\'t make a big deal—"Yep, that\'s what broccoli tastes like." If they don\'t, say nothing. Keep serving it. Patience outperforms pressure.',
    },
    {
      mistake: 'Hiding vegetables in other foods',
      whyBackfires:
        'Sneaking pureed vegetables into sauces or baked goods may increase nutrient intake short-term, but it doesn\'t teach the child to accept or enjoy those foods. When the child eventually discovers the hidden vegetables, they feel deceived and become more suspicious of all food—not less.',
      instead:
        'Serve vegetables openly and visibly alongside other foods. You can prepare them in appealing ways (roasted with olive oil, cut into fun shapes, served with a dip), but don\'t disguise them. The goal is long-term food acceptance, not short-term nutrient sneaking.',
    },
  ],
  ageGuidance: [
    {
      age: '1–2 years',
      advice:
        'Offer a wide variety of flavors and textures now—this is the broadest food acceptance window. Children this age will typically try almost anything. Cut food into safe, small pieces to prevent choking. Expect a dramatic narrowing of accepted foods around 18–24 months as neophobia kicks in—this is normal. Continue offering variety even when acceptance drops. Milk should be limited to 16–24 oz per day so it doesn\'t displace food.',
    },
    {
      age: '2–5 years',
      advice:
        'Food neophobia peaks during this stage. Your child may suddenly refuse foods they loved last week. This is developmentally normal—not a sign of stubbornness. Stick to the Division of Responsibility strictly. Offer 3 meals and 2–3 sit-down snacks per day at consistent times. Avoid "grazing" between meals—an appetite at mealtime is your best tool. Most children this age eat erratically: a huge meal followed by two days of barely eating. Track intake over a week, not a day.',
    },
    {
      age: '5–10 years',
      advice:
        'Picky eating should be gradually improving as peer influence and cognitive development expand food acceptance. Involve children in meal planning and cooking—this age group responds well to "cooking show" style participation. Begin teaching nutrition concepts (food groups, balanced plates) without turning it into a lecture. If picky eating is still severe at this age (eating fewer than 10–15 foods, gagging on textures, or avoiding entire food groups), consider an evaluation for sensory processing differences or ARFID (Avoidant/Restrictive Food Intake Disorder).',
    },
  ],
  whenToSeekHelp: [
    'Your child eats fewer than 10–15 foods total, or has dropped foods steadily without adding new ones for 6+ months. This pattern may indicate ARFID (Avoidant/Restrictive Food Intake Disorder), which affects 3–5% of children and requires professional treatment.',
    'Your child gags, vomits, or shows extreme distress when presented with certain textures, temperatures, or food groups. This may indicate oral-motor delays or sensory processing differences that an occupational therapist or feeding specialist can address.',
    'Your child\'s growth has plateaued or dropped significantly on their growth chart, or you notice signs of nutritional deficiency (persistent fatigue, pale skin, frequent illness). Your pediatrician can check iron, zinc, and other markers.',
    'Mealtimes are causing significant family conflict, parental anxiety, or your child shows signs of food-related anxiety or obsessive behaviors around food. A registered dietitian specializing in pediatric feeding or a child psychologist can help.',
  ],
  faqs: [
    {
      q: 'Is my picky eater getting enough nutrition?',
      a: 'Most typically developing picky eaters get adequate calories and nutrients over the course of a week, even if individual meals seem inadequate. Children\'s appetites naturally fluctuate. The AAP recommends looking at intake over 1–2 weeks, not a single day. If your child is growing along their expected growth curve, has normal energy, and isn\'t losing weight, they\'re likely fine. If you\'re concerned, ask your pediatrician to check growth and run basic nutrient panels.',
    },
    {
      q: 'Should I give my picky child a vitamin supplement?',
      a: 'The AAP states that most children eating a varied diet don\'t need supplements. However, for highly selective eaters, a daily multivitamin can provide insurance for nutrients like iron, zinc, and vitamins D and B12. Treat it as a safety net, not a replacement for food variety. Avoid gummy vitamins if possible—they\'re essentially candy and can damage teeth. Discuss the right supplement and dose with your pediatrician.',
    },
    {
      q: 'How many times do I need to offer a food before my child will eat it?',
      a: 'Research suggests it takes 10–15 exposures (seeing, smelling, touching, or tasting) before a child accepts a new food—and for some children, up to 20. Most parents give up after 3–5 attempts. The key is offering without any pressure to eat. Put a small portion on the plate, say nothing, and clear it away uneaten if needed. Consistency and patience win.',
    },
    {
      q: 'My child will only eat beige food (bread, pasta, crackers). Is that normal?',
      a: 'It\'s extremely common—starchy beige foods are typically mild in flavor, consistent in texture, and visually predictable, which appeals to a neophobic child. Don\'t panic, but don\'t cater to it exclusively. Continue offering colorful foods alongside the safe ones. Try "bridging": if they accept plain pasta, offer pasta with a tiny bit of sauce, then gradually increase. If the diet remains this restricted past age 5, consider a feeding evaluation.',
    },
    {
      q: 'Should I let my child snack between meals if they didn\'t eat dinner?',
      a: 'No—this is one of the most common traps. If a child learns that not eating dinner means they\'ll get a snack in an hour, they have no incentive to eat at mealtime. Stick to a structured schedule: 3 meals and 2–3 snacks at consistent times, sitting at a table. If dinner wasn\'t eaten, the next food offered is the next scheduled snack or meal. An hour or two of hunger won\'t hurt a healthy child, and it teaches them to eat when food is available.',
    },
    {
      q: 'Can picky eating be a sign of autism or sensory issues?',
      a: 'Picky eating alone is not a sign of autism. However, extreme food selectivity—especially when accompanied by rigid food rituals, distress at food being "contaminated" by other foods, strong reactions to textures or smells, or a very narrow food repertoire (under 10 foods)—can be associated with autism spectrum disorder, sensory processing differences, or ARFID. If you notice these patterns alongside other developmental concerns, discuss them with your pediatrician.',
    },
  ],
  sources: [
    {
      title: 'Child of Mine: Feeding with Love and Good Sense',
      author: 'Ellyn Satter, RD, MSW',
      details: 'Ch. 4 (Division of Responsibility); Ch. 6 (Pressure-Free Exposure); Ch. 7 (Parent Modeling)',
    },
    {
      title: 'Creating Competent Eaters',
      author: 'Ellyn Satter, RD, MSW',
      details: 'Ch. 2 (Division of Responsibility); Ch. 3 (Mealtime Environment); Ch. 5 (Family-Style Meals)',
    },
    {
      title: 'The Picky Eater Project',
      author: 'Nimali Fernando, MD, MPH & Melanie Potock, MA, CCC-SLP',
      details: 'Ch. 3 (Short-Order Cooking); Ch. 4 (Family-Style Meals); Ch. 5 (Food Involvement)',
    },
    {
      title: 'AAP Nutrition Guidelines',
      author: 'American Academy of Pediatrics',
      details: 'Pediatric Nutrition Handbook; HealthyChildren.org feeding guidance; family meals research',
    },
  ],
};

export default pickyEating;
