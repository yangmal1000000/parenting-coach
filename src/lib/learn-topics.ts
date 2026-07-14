// Learning hub data — topic metadata for /learn pages

export interface LearnTopic {
  slug: string;
  category: string; // matches knowledge-base category
  title: string;
  titleKo: string;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  h1Ko: string;
  icon: string;
  blurb: string;
  blurbKo: string;
  searchIntent: string;
  ageRange: string;
  relatedSlugs: string[];
}

export const LEARN_TOPICS: LearnTopic[] = [
  {
    slug: "toddler-tantrums",
    category: "tantrums",
    title: "How to Handle Toddler Tantrums",
    titleKo: "유아 떼쓰기 대처법",
    metaTitle: "Toddler Tantrums: 6 Evidence-Based Strategies That Work | ParentKin",
    metaDescription: "Practical, research-backed strategies for handling toddler tantrums. Learn why they happen, what to do in the moment, and when to seek help.",
    h1: "How to Handle Toddler Tantrums: Evidence-Based Strategies",
    h1Ko: "유아 떼쓰기 대처법: 증거 기반 전략",
    icon: "Flame",
    blurb: "Why tantrums happen, what to do in the moment, and how to prevent them.",
    blurbKo: "떼쓰기의 원인과 대처법, 예방 방법을 알아보세요.",
    searchIntent: "toddler tantrums what to do",
    ageRange: "1-6",
    relatedSlugs: ["child-anger-aggression", "emotional-regulation", "behavior-discipline"],
  },
  {
    slug: "child-sleep-issues",
    category: "sleep",
    title: "Child Sleep Issues: Getting Kids to Stay in Bed",
    titleKo: "아이 수면 문제: 잠자리에 들게 하는 방법",
    metaTitle: "Child Sleep Problems: Evidence-Based Solutions | ParentKin",
    metaDescription: "Solutions for bedtime resistance, night waking, and sleep anxiety in children. Grounded in pediatric sleep research.",
    h1: "Child Sleep Issues: Evidence-Based Solutions for Bedtime & Night Waking",
    h1Ko: "아이 수면 문제: 잠자리 및 야간 각성을 위한 증거 기반 해결책",
    icon: "Moon",
    blurb: "Bedtime battles, night waking, and early rising — solved with research.",
    blurbKo: "잠자리 싸움, 야간 각성, 이른 기상 — 연구 기반 해결책.",
    searchIntent: "child won't sleep stay in bed",
    ageRange: "0-12",
    relatedSlugs: ["daily-routines", "emotional-regulation"],
  },
  {
    slug: "picky-eating",
    category: "eating",
    title: "Picky Eating: Getting Children to Try New Foods",
    titleKo: "편식: 아이가 새 음식을 시도하게 하는 방법",
    metaTitle: "Picky Eating in Children: Evidence-Based Strategies | ParentKin",
    metaDescription: "Help your picky eater try new foods. Research-backed strategies for mealtime battles, food refusal, and sensory sensitivities.",
    h1: "Picky Eating: Evidence-Based Strategies to Help Children Try New Foods",
    h1Ko: "편식: 아이가 새 음식을 시도하게 돕는 증거 기반 전략",
    icon: "Utensils",
    blurb: "End mealtime battles with strategies backed by feeding research.",
    blurbKo: "식사 시간 싸움을 끝내는 섭식 연구 기반 전략.",
    searchIntent: "toddler picky eater won't eat",
    ageRange: "1-10",
    relatedSlugs: ["behavior-discipline", "daily-routines"],
  },
  {
    slug: "behavior-discipline",
    category: "behavior",
    title: "Child Behavior & Discipline: What Actually Works",
    titleKo: "아이 행동과 훈육: 실제로 효과적인 방법",
    metaTitle: "Child Discipline: Evidence-Based Approaches | ParentKin",
    metaDescription: "Discipline strategies grounded in developmental psychology. Learn what works, what doesn't, and why common approaches backfire.",
    h1: "Child Behavior & Discipline: Evidence-Based Approaches That Work",
    h1Ko: "아이 행동과 훈육: 효과적인 증거 기반 접근법",
    icon: "Target",
    blurb: "What developmental science says about discipline that actually works.",
    blurbKo: "발달 과학이 말하는 실제 효과 있는 훈육법.",
    searchIntent: "child discipline strategies that work",
    ageRange: "2-16",
    relatedSlugs: ["toddler-tantrums", "child-anger-aggression", "daily-routines"],
  },
  {
    slug: "sibling-conflict",
    category: "sibling",
    title: "Sibling Conflict: Stopping the Fighting",
    titleKo: "형제 갈등: 싸움 멈추기",
    metaTitle: "Sibling Rivalry & Fighting: Evidence-Based Solutions | ParentKin",
    metaDescription: "Reduce sibling fighting with research-backed strategies. Learn why siblings fight and how to foster a positive sibling relationship.",
    h1: "Sibling Conflict: Evidence-Based Strategies to Reduce Fighting",
    h1Ko: "형제 갈등: 싸움을 줄이는 증거 기반 전략",
    icon: "Users",
    blurb: "Why siblings fight and how to build a positive bond.",
    blurbKo: "형제가 싸우는 이유와 긍정적인 관계를 만드는 방법.",
    searchIntent: "siblings fighting what to do",
    ageRange: "3-16",
    relatedSlugs: ["behavior-discipline", "child-anger-aggression", "emotional-regulation"],
  },
  {
    slug: "screen-time",
    category: "screen",
    title: "Screen Time: Evidence-Based Guidance",
    titleKo: "스크린 타임: 증거 기반 가이드",
    metaTitle: "Screen Time for Kids: What the Research Says | ParentKin",
    metaDescription: "Evidence-based screen time guidance. Learn how to set limits, reduce meltdowns, and choose quality content.",
    h1: "Screen Time: What the Research Actually Says",
    h1Ko: "스크린 타임: 연구가 실제로 말하는 것",
    icon: "Smartphone",
    blurb: "Cut through the noise — what science says about kids and screens.",
    blurbKo: "소음을 걷어내고 과학이 말하는 아이와 스크린의 관계.",
    searchIntent: "screen time children how much",
    ageRange: "2-17",
    relatedSlugs: ["behavior-discipline", "daily-routines", "toddler-tantrums"],
  },
  {
    slug: "emotional-regulation",
    category: "emotional",
    title: "Helping Children with Emotional Regulation",
    titleKo: "아이 감정 조절 돕기",
    metaTitle: "Emotional Regulation in Children: Evidence-Based Strategies | ParentKin",
    metaDescription: "Help your child manage big feelings. Research-backed strategies for anxiety, fears, and emotional meltdowns in children.",
    h1: "Helping Children with Emotional Regulation: Evidence-Based Strategies",
    h1Ko: "아이 감정 조절 돕기: 증거 기반 전략",
    icon: "Heart",
    blurb: "Tools to help your child understand and manage big feelings.",
    blurbKo: "아이가 큰 감정을 이해하고 조절하도록 돕는 도구.",
    searchIntent: "child emotional regulation strategies",
    ageRange: "2-17",
    relatedSlugs: ["toddler-tantrums", "child-anger-aggression", "behavior-discipline"],
  },
  {
    slug: "child-anger-aggression",
    category: "anger",
    title: "Child Anger & Aggression: Hitting, Biting, Throwing",
    titleKo: "아이 분노와 공격성: 때리기, 깨물기, 던지기",
    metaTitle: "Child Aggression: Evidence-Based Strategies | ParentKin",
    metaDescription: "When your child hits, bites, or throws things. Research-backed strategies to reduce aggressive behaviour in children.",
    h1: "Child Anger & Aggression: Evidence-Based Strategies That Help",
    h1Ko: "아이 분노와 공격성: 도움이 되는 증거 기반 전략",
    icon: "Angry",
    blurb: "Why kids lash out and how to reduce aggression — gently.",
    blurbKo: "아이가 공격적인 이유와 부드럽게 줄이는 방법.",
    searchIntent: "toddler hitting biting aggressive",
    ageRange: "1-12",
    relatedSlugs: ["toddler-tantrums", "behavior-discipline", "emotional-regulation"],
  },
];

export function getTopic(slug: string): LearnTopic | undefined {
  return LEARN_TOPICS.find((t) => t.slug === slug);
}

export function getRelatedTopics(slug: string): LearnTopic[] {
  const topic = getTopic(slug);
  if (!topic) return [];
  return topic.relatedSlugs
    .map((s) => getTopic(s))
    .filter((t): t is LearnTopic => t !== undefined);
}
