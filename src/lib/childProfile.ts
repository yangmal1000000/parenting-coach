// Shared child profile system — mirrors mobile childProfile.ts
export type DevelopmentalStage = "infant" | "toddler" | "preschool" | "school" | "preteen" | "teen";

export interface ChildProfile {
  id: string;
  name: string;
  birthDate?: string;
  ageLabel?: string;
  temperament: string[];
  conditions: string[];
  notes: string;
  createdAt: number;
}

export const TEMPERAMENT_TAGS = [
  { id: "sensitive", label: "😔 Sensitive" },
  { id: "strong-willed", label: "💪 Strong-willed" },
  { id: "easygoing", label: "😌 Easygoing" },
  { id: "intense", label: "🔥 Intense" },
  { id: "shy", label: "🫣 Shy" },
  { id: "energetic", label: "⚡ Energetic" },
  { id: "anxious", label: "😟 Anxious" },
  { id: "curious", label: "🤔 Curious" },
];

export const CONDITION_TAGS = [
  { id: "adhd", label: "ADHD" },
  { id: "asd", label: "Autism (ASD)" },
  { id: "spd", label: "Sensory (SPD)" },
  { id: "anxiety", label: "Anxiety" },
  { id: "odd", label: "ODD" },
  { id: "dyslexia", label: "Dyslexia" },
  { id: "speech-delay", label: "Speech Delay" },
  { id: "premature", label: "Premature Birth" },
];

export function calcAge(birthDate?: string) {
  if (!birthDate) return null;
  const birth = new Date(birthDate);
  if (isNaN(birth.getTime())) return null;
  const now = new Date();
  let years = now.getFullYear() - birth.getFullYear();
  let months = now.getMonth() - birth.getMonth();
  if (months < 0) { years--; months += 12; }
  if (now.getDate() < birth.getDate()) { months--; if (months < 0) { years--; months += 12; } }
  if (years < 0) return null;
  const label = years === 0 ? `${months} month${months !== 1 ? "s" : ""}` : months === 0 ? `${years} year${years !== 1 ? "s" : ""}` : `${years}y ${months}mo`;
  return { years, months, label };
}

export function getStage(birthDate?: string, ageLabel?: string): DevelopmentalStage | null {
  const age = calcAge(birthDate);
  let totalMonths: number;
  if (age) { totalMonths = age.years * 12 + age.months; }
  else if (ageLabel) {
    const y = ageLabel.match(/(\d+)\s*year/i); const m = ageLabel.match(/(\d+)\s*month/i);
    totalMonths = (y ? parseInt(y[1]) * 12 : 0) + (m ? parseInt(m[1]) : 0);
    if (!totalMonths) return null;
  } else return null;
  if (totalMonths < 12) return "infant";
  if (totalMonths < 36) return "toddler";
  if (totalMonths < 60) return "preschool";
  if (totalMonths < 132) return "school";
  if (totalMonths < 156) return "preteen";
  return "teen";
}

export function buildChildContext(child: ChildProfile): string {
  const parts: string[] = [`Child: ${child.name || "unnamed"}`];
  const age = calcAge(child.birthDate);
  if (age) parts.push(`Age: ${age.label}`);
  else if (child.ageLabel) parts.push(`Age: ${child.ageLabel}`);
  const stage = getStage(child.birthDate, child.ageLabel);
  if (stage) parts.push(`Developmental stage: ${stage}`);
  if (child.temperament.length) parts.push(`Temperament: ${child.temperament.join(", ")}`);
  if (child.conditions.length) parts.push(`Relevant conditions: ${child.conditions.join(", ")}`);
  if (child.notes.trim()) parts.push(`Additional context: ${child.notes.trim()}`);
  return parts.join(". ");
}

export function createBlankChild(): ChildProfile {
  return { id: `child_${Date.now()}`, name: "", temperament: [], conditions: [], notes: "", createdAt: Date.now() };
}
