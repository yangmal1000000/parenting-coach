export interface TopicContent {
  tldr: string;
  scenario: string;
  ageRange: string;
  strategies: { title: string; what: string; script: string; why: string }[];
  avoid: { mistake: string; whyBackfires: string; instead: string }[];
  ageGuidance: { age: string; advice: string }[];
  whenToSeekHelp: string[];
  faqs: { q: string; a: string }[];
  sources: { title: string; author: string; details?: string }[];
}
