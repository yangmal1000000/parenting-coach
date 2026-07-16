import { NextRequest } from "next/server";
import { rateLimit } from "@/lib/rateLimit";
import { Language } from "@/lib/i18n";

interface SessionRequest {
  childProfile?: {
    name?: string;
    age?: string;
    temperament?: string[];
    notes?: string;
  };
  language?: Language;
  recentTopics?: string[];
}

const VOICE_SYSTEM_INSTRUCTION = (profile: SessionRequest["childProfile"], lang: Language) => {
  const childName = profile?.name || "your child";
  const childAge = profile?.age || "unknown age";
  const temperament = profile?.temperament?.length ? profile.temperament.join(", ") : "unknown";
  const notes = profile?.notes || "none";

  const base = lang === "ko"
    ? `당신은 ParentKin Voice입니다 — 실시간 육아 코치입니다.

이 부모에 대한 정보:
- 아이: ${childName}, ${childAge}
- 성향: ${temperament}
- 메모: ${notes}
- 언어: 한국어

당신의 역할:
- 공감적으로 듣고, 감정을 인정해주세요
- 부모가 구체적인 문제를 설명하면 get_parenting_advice를 호출하세요
- 반환된 증거 기반 전략을 자연스럽게 대화에 활용하세요
- 출처를 자연스럽게 언급하세요 ("~에 따르면...")
- 음성 대화이므로 간결하게 말하세요 — 후속 질문은 2-3문장
- 부모의 감정 톤에 맞추세요
- 의학적 조언을 하지 마세요 — 소아과 의사를 추천하세요`
    : `You are ParentKin Voice — a real-time parenting coach.

Context about this parent's child:
- Child: ${childName}, ${childAge}
- Temperament: ${temperament}
- Notes: ${notes}
- Language: English

Your role:
- Listen actively, show empathy, validate feelings
- When the parent describes a specific challenge, CALL get_parenting_advice with a clear summary of their question
- Use the returned evidence-based strategies in your spoken response
- Cite sources naturally ("According to...")
- Keep responses concise for voice — 2-3 sentences for follow-ups, longer only when giving specific techniques
- Match the parent's emotional tone
- Never give medical advice — suggest seeing a pediatrician
- Speak naturally, not in lists — this is voice, not text
- One key technique at a time, don't overwhelm
- Ask if they want to try it or want another approach`;

  return base;
};

export async function POST(request: NextRequest) {
  const limited = await rateLimit(request, { limit: 10, windowSeconds: 60 });
  if (limited) return limited;

  try {
    const body: SessionRequest = await request.json();
    const apiKey = process.env.GEMINI_API_KEY;

    if (!apiKey) {
      return Response.json(
        { error: "Gemini API key not configured" },
        { status: 500 }
      );
    }

    const systemInstruction = VOICE_SYSTEM_INSTRUCTION(body.childProfile, body.language || "en");

    // Tool declarations for Gemini Live
    const tools = [{
      functionDeclarations: [{
        name: "get_parenting_advice",
        description: "Retrieve evidence-based parenting strategies from the knowledge base of published parenting books. Call this when the parent describes a specific behavioural challenge and you need concrete techniques grounded in research.",
        parameters: {
          type: "object",
          properties: {
            query: {
              type: "string",
              description: "A clear summary of the parenting question, e.g. '3 year old having tantrums at bedtime'"
            },
            category: {
              type: "string",
              enum: ["tantrums", "sleep", "eating", "screen-time", "sibling", "discipline", "emotional", "general"],
              description: "Best guess category of the challenge"
            }
          },
          required: ["query"]
        }
      }]
    }];

    return Response.json({
      systemInstruction,
      tools,
      model: "models/gemini-2.5-flash-native-audio-latest",
      voiceName: body.language === "ko" ? "Aoede" : "Puck",
      apiKey: process.env.GEMINI_API_KEY || "",
      apiKeyPresent: !!process.env.GEMINI_API_KEY,
    });
  } catch (error) {
    console.error("[voice-session] Error:", error);
    return Response.json(
      { error: "Failed to create voice session config" },
      { status: 500 }
    );
  }
}
