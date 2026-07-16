import type { Language } from "@/lib/i18n";

export interface Session {
  id: string;
  query: string;
  advice: string;
  sources: string[];
  topicCategory: string;
  rating?: "up" | "down";
  bookmarked?: boolean;
  feedbackText?: string;
  createdAt: number;
  childName?: string;
  childAge?: string;
  language?: Language;
  _synced?: boolean;
  is_shared?: boolean;
  user_id?: string;
}

export interface ChildProfile {
  name: string;
  age: string;
  notes: string;
}

export interface AdviceSection {
  situation?: string;
  dos: string[];
  donts: string[];
  why: string;
  source: string;
}

export interface ConversationTurn {
  role: "user" | "assistant";
  content: string;
}
