// Milestone & Development Tracker
// Age-based developmental milestones for tracking

export type MilestoneCategory = "motor" | "language" | "social" | "cognitive" | "selfcare";

export interface Milestone {
  id: string;
  category: MilestoneCategory;
  ageMonths: number;     // expected age in months
  ageRange: [number, number]; // acceptable range [min, max] months
  titleEn: string;
  titleKo: string;
  descEn: string;
  descKo: string;
}

export interface MilestoneRecord {
  milestoneId: string;
  status: "pending" | "achieved" | "concern";
  achievedAt: number | null; // timestamp
  notes: string;
}

export const CATEGORY_META: Record<MilestoneCategory, { icon: string; labelEn: string; labelKo: string; color: string }> = {
  motor: { icon: "Activity", labelEn: "Motor Skills", labelKo: "운동 능력", color: "#f97316" },
  language: { icon: "MessageSquare", labelEn: "Language", labelKo: "언어 능력", color: "#3b82f6" },
  social: { icon: "Users", labelEn: "Social & Emotional", labelKo: "사회성·감정", color: "#ec4899" },
  cognitive: { icon: "Puzzle", labelEn: "Cognitive", labelKo: "인지 능력", color: "#8b5cf6" },
  selfcare: { icon: "Baby", labelEn: "Self-Care", labelKo: "자기 관리", color: "#14b8a6" },
};

export const MILESTONES: Milestone[] = [
  // 0-6 months
  { id: "m-0-1", category: "motor", ageMonths: 2, ageRange: [1, 4], titleEn: "Holds head up", titleKo: "머리 가누기", descEn: "Can hold head up during tummy time", descKo: "엎드렸을 때 머리를 들어 올릴 수 있습니다" },
  { id: "m-0-2", category: "social", ageMonths: 2, ageRange: [1, 4], titleEn: "Social smile", titleKo: "사회적 미소", descEn: "Smiles in response to faces/voices", descKo: "얼굴이나 목소리에 반응하여 웃습니다" },
  { id: "m-0-3", category: "language", ageMonths: 3, ageRange: [2, 5], titleEn: "Coos and babbles", titleKo: "옹알이", descEn: "Makes vowel sounds like 'aah', 'ooh'", descKo: "'아', '오' 등 모음 소리를 냅니다" },
  { id: "m-0-4", category: "motor", ageMonths: 4, ageRange: [3, 6], titleEn: "Rolls over", titleKo: "뒤집기", descEn: "Rolls from tummy to back or vice versa", descKo: "엎드린 상태에서 뒤집을 수 있습니다" },
  { id: "m-0-5", category: "cognitive", ageMonths: 4, ageRange: [3, 6], titleEn: "Reaches for objects", titleKo: "물건 잡기", descEn: "Reaches for and grabs toys", descKo: "장난감에 손을 뻗어 잡습니다" },
  { id: "m-0-6", category: "social", ageMonths: 5, ageRange: [4, 7], titleEn: "Recognizes familiar faces", titleKo: "익숙한 얼굴 인식", descEn: "Shows recognition of parents/family", descKo: "부모나 가족을 알아봅니다" },

  // 6-12 months
  { id: "m-1-1", category: "motor", ageMonths: 7, ageRange: [6, 9], titleEn: "Sits without support", titleKo: "혼자 앉기", descEn: "Sits independently for several minutes", descKo: "지원 없이 몇 분간 앉아 있습니다" },
  { id: "m-1-2", category: "language", ageMonths: 8, ageRange: [7, 11], titleEn: "Babbles consonants", titleKo: "자음 옹알이", descEn: "Says 'ba-ba', 'da-da', 'ma-ma'", descKo: "'바바', '다다', '마마' 등의 소리를 냅니다" },
  { id: "m-1-3", category: "cognitive", ageMonths: 9, ageRange: [8, 11], titleEn: "Object permanence", titleKo: "대상 영속성", descEn: "Looks for hidden objects", descKo: "숨겨진 물건을 찾습니다" },
  { id: "m-1-4", category: "motor", ageMonths: 10, ageRange: [9, 13], titleEn: "Crawls or scoots", titleKo: "기어가기", descEn: "Moves around by crawling or scooting", descKo: "기어가거나 밀어서 이동합니다" },
  { id: "m-1-5", category: "social", ageMonths: 10, ageRange: [8, 12], titleEn: "Separation anxiety", titleKo: "분리 불안", descEn: "Shows distress when parent leaves", descKo: "부모가 떠나면 불안해합니다" },
  { id: "m-1-6", category: "language", ageMonths: 11, ageRange: [10, 14], titleEn: "First words", titleKo: "첫 단어", descEn: "Says first meaningful word (mama, dada)", descKo: "처음으로 의미 있는 단어를 말합니다" },
  { id: "m-1-7", category: "selfcare", ageMonths: 12, ageRange: [10, 15], titleEn: "Finger feeds self", titleKo: "손으로 먹기", descEn: "Picks up food and feeds self with fingers", descKo: "음식을 집어 스스로 먹습니다" },

  // 12-24 months
  { id: "m-2-1", category: "motor", ageMonths: 13, ageRange: [11, 16], titleEn: "First steps", titleKo: "첫 걸음", descEn: "Takes first independent steps", descKo: "처음으로 혼자 걷습니다" },
  { id: "m-2-2", category: "language", ageMonths: 15, ageRange: [13, 18], titleEn: "5-10 words", titleKo: "5-10개 단어", descEn: "Uses 5-10 meaningful words", descKo: "5-10개의 의미 있는 단어를 사용합니다" },
  { id: "m-2-3", category: "cognitive", ageMonths: 16, ageRange: [14, 20], titleEn: "Uses objects correctly", titleKo: "물건 올바른 사용", descEn: "Uses cup, brush, phone correctly", descKo: "컵, 빗, 전화기를 올바르게 사용합니다" },
  { id: "m-2-4", category: "social", ageMonths: 17, ageRange: [15, 21], titleEn: "Points at objects", titleKo: "손가락으로 가리키기", descEn: "Points to show interest", descKo: "관심을 보이기 위해 손가락으로 가리킵니다" },
  { id: "m-2-5", category: "motor", ageMonths: 18, ageRange: [15, 22], titleEn: "Walks well", titleKo: "잘 걷기", descEn: "Walks steadily, may run", descKo: "안정적으로 걷고 뛸 수 있습니다" },
  { id: "m-2-6", category: "language", ageMonths: 20, ageRange: [18, 24], titleEn: "Two-word phrases", titleKo: "두 단어 문장", descEn: "Combines words like 'more milk'", descKo: "'더 주' 등 두 단어를 결합합니다" },
  { id: "m-2-7", category: "selfcare", ageMonths: 20, ageRange: [18, 26], titleEn: "Uses spoon", titleKo: "숟가락 사용", descEn: "Tries to use spoon independently", descKo: "스스로 숟가락을 사용하려 합니다" },
  { id: "m-2-8", category: "cognitive", ageMonths: 22, ageRange: [20, 26], titleEn: "Sorts by shape/color", titleKo: "모양·색깔 분류", descEn: "Sorts objects by shape or color", descKo: "물건을 모양이나 색으로 분류합니다" },

  // 2-3 years
  { id: "m-3-1", category: "motor", ageMonths: 26, ageRange: [24, 30], titleEn: "Jumps in place", titleKo: "제자리뛰기", descEn: "Jumps with both feet", descKo: "두 발로 제자리에 뜁니다" },
  { id: "m-3-2", category: "language", ageMonths: 28, ageRange: [24, 32], titleEn: "Three-word sentences", titleKo: "세 단어 문장", descEn: "Speaks in 3-word sentences", descKo: "세 단어로 문장을 만듭니다" },
  { id: "m-3-3", category: "social", ageMonths: 30, ageRange: [26, 36], titleEn: "Plays alongside others", titleKo: "옆에서 놀기", descEn: "Parallel play with other children", descKo: "다른 아이 옆에서 놉니다" },
  { id: "m-3-4", category: "selfcare", ageMonths: 30, ageRange: [26, 36], titleEn: "Dresses with help", titleKo: "옷 입기(도움)", descEn: "Helps with dressing, pulls up pants", descKo: "옷 입는 것을 도우며 바지를 올립니다" },
  { id: "m-3-5", category: "cognitive", ageMonths: 32, ageRange: [28, 38], titleEn: "Counts to 3", titleKo: "3까지 세기", descEn: "Counts objects 1-3", descKo: "물건을 1부터 3까지 셉니다" },

  // 3-5 years
  { id: "m-4-1", category: "motor", ageMonths: 38, ageRange: [34, 44], titleEn: "Pedals tricycle", titleKo: "세발 자전거", descEn: "Pedals a tricycle for short distances", descKo: "세발 자전거를 짧은 거리를 탑니다" },
  { id: "m-4-2", category: "language", ageMonths: 40, ageRange: [36, 48], titleEn: "Tells simple stories", titleKo: "간단한 이야기", descEn: "Tells stories with a beginning and end", descKo: "처음과 끝이 있는 이야기를 합니다" },
  { id: "m-4-3", category: "social", ageMonths: 42, ageRange: [38, 50], titleEn: "Cooperative play", titleKo: "협력 놀이", descEn: "Plays cooperatively with other children", descKo: "다른 아이들과 협력하여 놉니다" },
  { id: "m-4-4", category: "selfcare", ageMonths: 44, ageRange: [40, 52], titleEn: "Dresses independently", titleKo: "혼자 옷 입기", descEn: "Dresses and undresses with minimal help", descKo: "거의 도움 없이 옷을 입고 벗습니다" },
  { id: "m-4-5", category: "cognitive", ageMonths: 48, ageRange: [44, 56], titleEn: "Names colors", titleKo: "색깔 말하기", descEn: "Correctly names 4+ colors", descKo: "4개 이상의 색깔을 맞게 말합니다" },
  { id: "m-4-6", category: "language", ageMonths: 50, ageRange: [46, 58], titleEn: "Speaks in full sentences", titleKo: "완전한 문장", descEn: "Uses complex, grammatical sentences", descKo: "복잡하고 문법적인 문장을 사용합니다" },

  // 5-8 years
  { id: "m-5-1", category: "motor", ageMonths: 60, ageRange: [56, 68], titleEn: "Skips", titleKo: "건너뛰기", descEn: "Skips with alternating feet", descKo: "발을 번갈아가며 건너뜁니다" },
  { id: "m-5-2", category: "cognitive", ageMonths: 62, ageRange: [58, 70], titleEn: "Counts to 20+", titleKo: "20 이상 세기", descEn: "Counts to 20 or higher", descKo: "20 이상까지 셉니다" },
  { id: "m-5-3", category: "social", ageMonths: 66, ageRange: [60, 74], titleEn: "Has best friends", titleKo: "가장 친한 친구", descEn: "Names a best friend, prefers certain peers", descKo: "가장 친한 친구의 이름을 말합니다" },
  { id: "m-5-4", category: "language", ageMonths: 70, ageRange: [66, 80], titleEn: "Reads simple words", titleKo: "간단한 단어 읽기", descEn: "Reads basic sight words", descKo: "기본적인 단어를 읽습니다" },
  { id: "m-5-5", category: "selfcare", ageMonths: 72, ageRange: [68, 84], titleEn: "Ties shoes", titleKo: "신발 끈 묶기", descEn: "Ties shoelaces independently", descKo: "스스로 신발 끈을 묶습니다" },

  // 8-12 years
  { id: "m-6-1", category: "cognitive", ageMonths: 96, ageRange: [90, 108], titleEn: "Reads chapter books", titleKo: "챕터북 읽기", descEn: "Reads and comprehends chapter books", descKo: "챕터북을 읽고 이해합니다" },
  { id: "m-6-2", category: "social", ageMonths: 102, ageRange: [96, 114], titleEn: "Understands rules", titleKo: "규칙 이해", descEn: "Follows and debates rules in games", descKo: "게임 규칙을 따르고 토론합니다" },
  { id: "m-6-3", category: "selfcare", ageMonths: 108, ageRange: [102, 120], titleEn: "Manages homework", titleKo: "숙제 관리", descEn: "Tracks and completes homework with minimal help", descKo: "최소한의 도움으로 숙제를 추적하고 완수합니다" },
];

// Get milestones appropriate for a child's age
export function getMilestonesForAge(ageMonths: number): Milestone[] {
  // Show milestones in a range: 3 months before to 6 months after current age
  return MILESTONES.filter(m => m.ageRange[1] >= ageMonths - 3 && m.ageRange[0] <= ageMonths + 6)
    .sort((a, b) => a.ageMonths - b.ageMonths);
}

// Get milestones that are "due" (expected around now)
export function getDueMilestones(ageMonths: number): Milestone[] {
  return MILESTONES.filter(m => ageMonths >= m.ageRange[0] && ageMonths <= m.ageRange[1])
    .sort((a, b) => a.ageMonths - b.ageMonths);
}

// Get milestones that should have been achieved by now
export function getExpectedAchieved(ageMonths: number): Milestone[] {
  return MILESTONES.filter(m => m.ageRange[1] < ageMonths)
    .sort((a, b) => a.ageMonths - b.ageMonths);
}

// Calculate development progress percentage
export function getMilestoneProgress(records: Record<string, MilestoneRecord>, ageMonths: number): {
  achieved: number;
  total: number;
  percent: number;
  byCategory: Record<MilestoneCategory, { achieved: number; total: number }>;
} {
  const expected = getExpectedAchieved(ageMonths);
  const byCategory: Record<MilestoneCategory, { achieved: number; total: number }> = {
    motor: { achieved: 0, total: 0 },
    language: { achieved: 0, total: 0 },
    social: { achieved: 0, total: 0 },
    cognitive: { achieved: 0, total: 0 },
    selfcare: { achieved: 0, total: 0 },
  };

  let achieved = 0;
  for (const m of expected) {
    byCategory[m.category].total++;
    const rec = records[m.id];
    if (rec?.status === "achieved") {
      achieved++;
      byCategory[m.category].achieved++;
    }
  }

  const total = expected.length;
  const percent = total > 0 ? Math.round((achieved / total) * 100) : 0;

  return { achieved, total, percent, byCategory };
}
