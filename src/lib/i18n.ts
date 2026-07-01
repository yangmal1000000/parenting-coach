// === Internationalization ===

export type Language = "en" | "ko";

export const LANGUAGES: { code: Language; label: string; nativeLabel: string; flag: string }[] = [
  { code: "en", label: "English", nativeLabel: "English", flag: "🇬🇧" },
  { code: "ko", label: "Korean", nativeLabel: "한국어", flag: "🇰🇷" },
];

export interface UIStrings {
  // Header
  appName: string;
  // Home
  whatsHappening: string;
  speakOrType: string;
  // Voice
  tapToSpeak: string;
  transcribing: string;
  tapToStop: string;
  // Input
  orType: string;
  inputPlaceholder: string;
  getAdvice: string;
  quickExamples: string;
  // Loading
  findingBest: string;
  // Advice sections
  situation: string;
  do: string;
  dont: string;
  whyThisWorks: string;
  source: string;
  // Feedback
  wasThisHelpful: string;
  yes: string;
  notReally: string;
  whatWouldHelp: string;
  feedbackPlaceholder: string;
  gladHelped: string;
  // Actions
  share: string;
  save: string;
  saved: string;
  newAdvice: string;
  // Disclaimer
  disclaimer: string;
  // Onboarding
  onboardingTitle: string;
  onboardingSubtitle: string;
  onboardingSpeak: string;
  onboardingSpeakDesc: string;
  onboardingEvidence: string;
  onboardingEvidenceDesc: string;
  onboardingInstant: string;
  onboardingInstantDesc: string;
  getStarted: string;
  // Tabs
  tabHome: string;
  tabHistory: string;
  tabSaved: string;
  tabProfile: string;
  // History
  recentSessions: string;
  noSessions: string;
  clearHistory: string;
  clearHistoryConfirm: string;
  // Saved
  savedAdvice: string;
  noSaved: string;
  viewFull: string;
  // Profile
  childProfile: string;
  childName: string;
  childAge: string;
  childNotes: string;
  childNotesPlaceholder: string;
  saveProfile: string;
  profileSaved: string;
  browseTopics: string;
  // Misc
  deleteAllHistory: string;
  // How It Works
  howItWorks: string;
  howItWorksTitle: string;
  howItWorksSubtitle: string;
  // Step cards
  step1Title: string;
  step1Desc: string;
  step2Title: string;
  step2Desc: string;
  step3Title: string;
  step3Desc: string;
  step4Title: string;
  step4Desc: string;
  // Comparison
  vsGeneric: string;
  vsGenericTitle: string;
  vsCalmParent: string;
  // Comparison rows
  cmpSources: string;
  cmpSourcesGeneric: string;
  cmpSourcesCalm: string;
  cmpStructure: string;
  cmpStructureGeneric: string;
  cmpStructureCalm: string;
  cmpHallucination: string;
  cmpHallucinationGeneric: string;
  cmpHallucinationCalm: string;
  cmpSafety: string;
  cmpSafetyGeneric: string;
  cmpSafetyCalm: string;
  cmpSourcesFootnote: string;
  closeInfo: string;
}

export const UI: Record<Language, UIStrings> = {
  en: {
    appName: "Calm Parent",
    whatsHappening: "What's happening?",
    speakOrType: "Speak or type — get evidence-based advice in seconds",
    tapToSpeak: "Tap to Speak",
    transcribing: "Transcribing...",
    tapToStop: "tap to stop",
    orType: "or type",
    inputPlaceholder: "Describe the situation... e.g., 'My 3-year-old is having a meltdown because I turned off the TV'",
    getAdvice: "Get Advice →",
    quickExamples: "Quick examples — tap to try:",
    findingBest: "Finding the best approach...",
    situation: "📋 SITUATION",
    do: "✅ DO",
    dont: "❌ DON'T",
    whyThisWorks: "🧠 WHY THIS WORKS",
    source: "📖 SOURCE",
    wasThisHelpful: "Was this helpful?",
    yes: "👍 Yes",
    notReally: "👎 Not really",
    whatWouldHelp: "What would have been more helpful?",
    feedbackPlaceholder: "e.g., too generic, didn't match my situation, advice didn't work...",
    gladHelped: "Glad it helped! 💚",
    share: "📤 Share",
    save: "☆ Save",
    saved: "★ Saved",
    newAdvice: "↩ New",
    disclaimer: "Educational guidance based on international research. Adapt to your family's cultural context. Always consult your pediatrician for medical concerns.",
    onboardingTitle: "Instant Parenting Help",
    onboardingSubtitle: "Evidence-based advice in seconds. Just speak or type what's happening.",
    onboardingSpeak: "Tap to speak",
    onboardingSpeakDesc: "Describe what's happening — hands-free",
    onboardingEvidence: "Evidence-based",
    onboardingEvidenceDesc: "Every tip is backed by real research",
    onboardingInstant: "Instant answers",
    onboardingInstantDesc: "Structured advice in under 5 seconds",
    getStarted: "Get Started",
    tabHome: "Home",
    tabHistory: "History",
    tabSaved: "Saved",
    tabProfile: "Profile",
    recentSessions: "Recent Sessions",
    noSessions: "No sessions yet. Ask for advice to get started!",
    clearHistory: "Clear all history",
    clearHistoryConfirm: "Delete all history?",
    savedAdvice: "Saved Advice",
    noSaved: "No saved advice yet. Tap ☆ on advice you want to keep.",
    viewFull: "View full advice →",
    childProfile: "Child Profile",
    childName: "Name / Nickname",
    childAge: "Age",
    childNotes: "Notes (optional)",
    childNotesPlaceholder: "Allergies, conditions, context...",
    saveProfile: "Save Profile",
    profileSaved: "✓ Saved",
    browseTopics: "Browse Topics",
    deleteAllHistory: "Clear all history",
    // How It Works
    howItWorks: "How It Works",
    howItWorksTitle: "Grounded in real research. Not just another chatbot.",
    howItWorksSubtitle: "Every answer is backed by published, evidence-based parenting sources — not made up from scratch.",
    step1Title: "🎤 You describe the situation",
    step1Desc: "Speak or type what's happening. Takes 5 seconds.",
    step2Title: "📚 We search our knowledge base",
    step2Desc: "675+ passages from 100+ vetted sources — books, paediatric guidelines, and proven programs.",
    step3Title: "🧠 AI crafts personalised advice",
    step3Desc: "Only grounded in retrieved evidence — not hallucinated opinions.",
    step4Title: "⚡ You get structured, actionable steps",
    step4Desc: "Clear DO / DON'T / WHY format with cited sources. Every time.",
    vsGeneric: "❌ Generic AI Chat",
    vsCalmParent: "✅ Calm Parent",
    vsGenericTitle: "What's the difference?",
    cmpSources: "📚 Sources",
    cmpSourcesGeneric: "Trained on the whole internet — no source citation, may include blogs & opinions",
    cmpSourcesCalm: "675+ evidence-based passages from vetted books & paediatric guidelines",
    cmpStructure: "🎯 Structure",
    cmpStructureGeneric: "Long paragraphs, inconsistent format",
    cmpStructureCalm: "Clear DO / DON'T / WHY / SOURCE every single time",
    cmpHallucination: "🛡️ Safety",
    cmpHallucinationGeneric: "Can make up advice that sounds right but isn't",
    cmpHallucinationCalm: "Grounded in retrieved evidence — won't invent unsupported techniques",
    cmpSafety: "⚠️ Crisis handling",
    cmpSafetyGeneric: "Inconsistent — may miss medical or safety concerns",
    cmpSafetyCalm: "Built-in medical triage & crisis resource routing",
    cmpSourcesFootnote: "Sources include AAP, NHS, CDC, WHO, and 40+ evidence-based parenting books.",
    closeInfo: "Got it",
  },
  ko: {
    appName: "다독",
    whatsHappening: "무슨 일이세요?",
    speakOrType: "말하거나 입력하세요 — 몇 초 안에 과학적 육아 조언을 받으세요",
    tapToSpeak: "눌러서 말하기",
    transcribing: "변환 중...",
    tapToStop: "눌러서 멈춤",
    orType: "또는 입력",
    inputPlaceholder: "상황을 설명하세요... 예: 'TV를 껐더니 3살 아이가 meltdown을 일으켜요'",
    getAdvice: "조언 받기 →",
    quickExamples: "빠른 예시 — 탭해서 시도해 보세요:",
    findingBest: "최선의 방법을 찾는 중...",
    situation: "📋 상황",
    do: "✅ 하세요",
    dont: "❌ 하지 마세요",
    whyThisWorks: "🧠 이렇게 하는 이유",
    source: "📖 출처",
    wasThisHelpful: "도움이 되었나요?",
    yes: "👍 네",
    notReally: "👎 별로요",
    whatWouldHelp: "어떤 것이 더 도움이 되었을까요?",
    feedbackPlaceholder: "예: 너무 일반적이에요, 상황에 맞지 않아요, 효과가 없어요...",
    gladHelped: "도움이 되어 다행이에요! 💚",
    share: "📤 공유",
    save: "☆ 저장",
    saved: "★ 저장됨",
    newAdvice: "↩ 새로운 질문",
    disclaimer: "국제 연구를 기반으로 한 교육 자료입니다. 가족의 문화적 상황에 맞게 활용하세요. 의학적 문제는 소아과 의사에게 문의하세요.",
    onboardingTitle: "즉각적인 육아 도움",
    onboardingSubtitle: "몇 초 안이면 과학적 조언을 받으세요. 상황을 말하거나 입력하세요.",
    onboardingSpeak: "눌러서 말하기",
    onboardingSpeakDesc: "무슨 일인지 말로 설명하세요 — 손을 자유롭게",
    onboardingEvidence: "과학적 근거",
    onboardingEvidenceDesc: "모든 팁은 실제 연구로 뒷받침됩니다",
    onboardingInstant: "즉시 답변",
    onboardingInstantDesc: "5초 안에 구조화된 조언",
    getStarted: "시작하기",
    tabHome: "홈",
    tabHistory: "기록",
    tabSaved: "저장",
    tabProfile: "프로필",
    recentSessions: "최근 기록",
    noSessions: "아직 기록이 없습니다. 조언을 요청해 보세요!",
    clearHistory: "기록 전체 삭제",
    clearHistoryConfirm: "모든 기록을 삭제하시겠어요?",
    savedAdvice: "저장된 조언",
    noSaved: "저장된 조언이 없습니다. 유용한 조언에 ☆을 눌러 저장하세요.",
    viewFull: "전체 조언 보기 →",
    childProfile: "아이 프로필",
    childName: "이름 / 별명",
    childAge: "나이",
    childNotes: "메모 (선택)",
    childNotesPlaceholder: "알레르기, 상태, 기타 정보...",
    saveProfile: "프로필 저장",
    profileSaved: "✓ 저장됨",
    browseTopics: "주제별 보기",
    deleteAllHistory: "기록 전체 삭제",
    // How It Works
    howItWorks: "이용 방법",
    howItWorksTitle: "실제 연구에 기반합니다. 그냥 챗봇이 아니에요.",
    howItWorksSubtitle: "모든 답변은 출판된 과학적 육아 자료에 근거합니다 — 임의로 지어내지 않아요.",
    step1Title: "🎤 상황을 설명하세요",
    step1Desc: "말하거나 입력하세요. 5초면 충분합니다.",
    step2Title: "📚 지식 베이스를 검색합니다",
    step2Desc: "검증된 100개 이상의 출처에서 675개 이상의 문장 — 책, 소아과 가이드라인, 검증된 프로그램.",
    step3Title: "🧠 AI가 맞춤 조언을 작성합니다",
    step3Desc: "검색된 근거에만 기반하여 조언 — 근거 없는 의견을 만들지 않습니다.",
    step4Title: "⚡ 구조화된 실행 가능한 단계를 받습니다",
    step4Desc: "명확한 하세요 / 하지 마세요 / 이유 / 출처 형식. 매번 동일하게.",
    vsGeneric: "❌ 일반 AI 챗",
    vsCalmParent: "✅ 다독",
    vsGenericTitle: "무엇이 다른가요?",
    cmpSources: "📚 출처",
    cmpSourcesGeneric: "인터넷 전체로 학습 — 출처 없음, 블로그나 개인 의견 포함 가능",
    cmpSourcesCalm: "검증된 책과 소아과 가이드라인에서 675개 이상의 근거 기반 문장",
    cmpStructure: "🎯 구조",
    cmpStructureGeneric: "긴 단락, 일관성 없는 형식",
    cmpStructureCalm: "매번 명확한 하세요 / 하지 마세요 / 이유 / 출처",
    cmpHallucination: "🛡️ 안전",
    cmpHallucinationGeneric: "그럴듯하지만 근거 없는 조언을 만들어낼 수 있음",
    cmpHallucinationCalm: "검색된 근거에 기반 — 지원되지 않는 기법을 지어내지 않음",
    cmpSafety: "⚠️ 위기 대응",
    cmpSafetyGeneric: "일관성 없음 — 의학적 문제나 안전 문제를 놓칠 수 있음",
    cmpSafetyCalm: "내장된 의학적 판별 및 위기 리소스 안내",
    cmpSourcesFootnote: "출처: AAP, NHS, CDC, WHO 및 40개 이상의 근거 기반 육아 책.",
    closeInfo: "확인했어요",
  },
};

// Topic labels per language
export const TOPIC_LABELS: Record<Language, Record<string, { label: string; description: string }>> = {
  en: {
    tantrums: { label: "😤 Tantrums & Meltdowns", description: "Screaming, crying, public meltdowns, emotional outbursts" },
    sleep: { label: "😴 Sleep Issues", description: "Won't go to bed, night waking, bedtime resistance" },
    eating: { label: "🍽️ Eating Problems", description: "Picky eating, food refusal, mealtime battles" },
    behavior: { label: "🎯 Behavior & Discipline", description: "Not listening, defiance, hitting, lying" },
    sibling: { label: "👥 Sibling Conflict", description: "Fighting, hitting, sharing disputes" },
    emotional: { label: "💙 Emotional Regulation", description: "Anxiety, fears, big feelings, crying" },
    routines: { label: "🔄 Daily Routines", description: "Morning chaos, homework battles, chores" },
    screen: { label: "📱 Screen Time", description: "Screen time disputes, turning off devices" },
    school: { label: "🏫 School & Learning", description: "School refusal, homework, teacher conflicts" },
    social: { label: "🤝 Social Skills", description: "Sharing, making friends, bullying" },
    transition: { label: "🌱 Big Transitions", description: "New sibling, moving, divorce, grief" },
    confidence: { label: "💪 Confidence & Self-Esteem", description: "Self-worth, perfectionism, encouragement" },
    anger: { label: "😡 Anger & Aggression", description: "Hitting, biting, throwing, violent outbursts" },
    teen: { label: "🎤 Teenagers", description: "Backtalk, independence, risky behavior, communication" },
    parent: { label: "🧑‍🧒 Parent Self-Care", description: "Parental burnout, anger management, self-compassion" },
    toilet: { label: "🚽 Toilet Training", description: "Potty training resistance, regression, accidents" },
    fears: { label: "😱 Fears & Worries", description: "Monsters, dark, doctors, storms, separation" },
    honest: { label: "💬 Hard Conversations", description: "Sex, death, money, racism, news events" },
    "co-parent": { label: "👨‍👩‍👧 Co-Parenting", description: "Disagreeing on discipline, consistency, teamwork" },
  },
  ko: {
    tantrums: { label: "😤 tantrum & 감정 폭발", description: "울음, 고성, 공공장소 meltdown, 감정 폭발" },
    sleep: { label: "😴 수면 문제", description: "안 자려 함, 밤에 깨임, 취침 거부" },
    eating: { label: "🍽️ 식사 문제", description: "편식, 식사 거부, 밥 먹기 전쟁" },
    behavior: { label: "🎯 행동 & 훈육", description: "말 안 듣기, 반항, 때리기, 거짓말" },
    sibling: { label: "👥 형제 갈등", description: "싸움, 때리기, 장난감 다툼" },
    emotional: { label: "💙 감정 조절", description: "불안, 두려움, 큰 감정, 울음" },
    routines: { label: "🔄 일상 루틴", description: "아침 혼란, 숙제 전쟁, 집안일" },
    screen: { label: "📱 화면 시간", description: "화면 시간 다툼, 기기 끄기" },
    school: { label: "🏫 학교 & 학습", description: "학교 거부, 숙제, 선생님 갈등" },
    social: { label: "🤝 사회성", description: "나누기, 친구 사귀기, 따돌림" },
    transition: { label: "🌱 큰 변화", description: "새로운 형제, 이사, 이혼, 슬픔" },
    confidence: { label: "💪 자신감 & 자존감", description: "자아, 완벽주의, 응원" },
    anger: { label: "😡 분노 & 공격성", description: "때리기, 물기, 던지기, 폭력" },
    teen: { label: "🎤 청소년", description: "말대꾸, 독립, 위험 행동, 대화" },
    parent: { label: "🧑‍🧒 부모 자기관리", description: "번아웃, 분노 관리, 자기 자비" },
    toilet: { label: "🚽 배변 훈련", description: "변기 거부, 퇴행, 사고" },
    fears: { label: "😱 두려움 & 걱정", description: "괴물, 어둠, 의사, 폭풍, 분리불안" },
    honest: { label: "💬 어려운 대화", description: "성, 죽음, 돈, 인종차별, 뉴스" },
    "co-parent": { label: "👨‍👩‍👧 공동 육아", description: "훈육 의견 차이, 일관성, 팀워크" },
  },
};

// Quick example scenarios per language
export const TOPIC_EXAMPLES_I18N: Record<Language, Record<string, string>> = {
  en: {
    tantrums: "My child is screaming in the shop because I said no to sweets",
    sleep: "My child won't stay in bed and keeps coming out of their room",
    eating: "My toddler refuses to eat anything except bread and crackers",
    behavior: "My child won't listen when I ask them to clean up their toys",
    sibling: "My kids keep hitting each other over toys",
    emotional: "My child gets really anxious when I drop them off at school",
    routines: "Every morning is a battle to get my child ready for school",
    screen: "My child has a meltdown every time I turn off the iPad",
    school: "My child doesn't want to go to school anymore",
    social: "My child is struggling to make friends",
    transition: "We're moving house and my child is upset about it",
    confidence: "My child says 'I can't do anything right'",
    anger: "My child keeps hitting other kids at nursery",
    teen: "My teenager keeps talking back and won't listen",
    parent: "I keep losing my temper and yelling at my kids",
    toilet: "My toddler refuses to sit on the potty",
    fears: "My child is terrified of the dark",
    honest: "My 6-year-old asked where babies come from",
    "co-parent": "My partner and I disagree on discipline",
  },
  ko: {
    tantrums: "마트에서 사탕을 안 사준다고 아이가 울면서 소리를 질러요",
    sleep: "아이가 자꾸 방에서 나오고 침대에 눕지 않으려 해요",
    eating: "우리 아이는 빵과 크래커만 먹으려고 해요",
    behavior: "장난감을 치우라고 하면 아이가 말을 안 들어요",
    sibling: "아이들이 장난감 때문에 자꾸 서로 때려요",
    emotional: "등하원 시간에 아이가 너무 불안해해요",
    routines: "매일 아침 아이를 학교 보낼 때가 전쟁이에요",
    screen: "아이패드를 끄면 아이가 매번 meltdown을 일으켜요",
    school: "아이가 학교에 가기 싫다고 해요",
    social: "아이가 친구 사귀기를 어려워해요",
    transition: "이사를 가게 되어 아이가 힘들어해요",
    confidence: "아이가 '나는 아무것도 못 해'라고 해요",
    anger: "아이가 어린이집에서 다른 아이들을 자꾸 때려요",
    teen: "사춘기 자녀가 말대꾸만 하고 말을 안 들어요",
    parent: "자꾸 아이에게 화를 내고 소리를 질러요",
    toilet: "아이가 변기에 앉으려고 하지 않아요",
    fears: "아이가 어둠을 너무 무서워해요",
    honest: "6살 아이가 아기는 어디서 오냐고 물어봤어요",
    "co-parent": "배우자와 훈육 방식에 대해 의견이 달라요",
  },
};
