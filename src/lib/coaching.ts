import OpenAI from "openai";
import { KNOWLEDGE_BASE, KnowledgeChunk } from "./knowledge-base";
import { Language } from "./i18n";

let _openai: OpenAI | null = null;
function getOpenAI(): OpenAI {
  if (!_openai) {
    _openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });
  }
  return _openai;
}

// In-memory embedding cache (Phase 0 only — move to vector DB in Phase 1)
let chunkEmbeddings: { chunk: KnowledgeChunk; embedding: number[] }[] | null = null;

async function getEmbeddings(text: string): Promise<number[]> {
  const response = await getOpenAI().embeddings.create({
    model: "text-embedding-3-small",
    input: text,
  });
  return response.data[0].embedding;
}

async function ensureKnowledgeBaseEmbedded() {
  if (chunkEmbeddings) return chunkEmbeddings;

  console.log(`[RAG] Embedding ${KNOWLEDGE_BASE.length} knowledge chunks...`);
  const results = await Promise.all(
    KNOWLEDGE_BASE.map(async (chunk) => ({
      chunk,
      embedding: await getEmbeddings(chunk.text),
    }))
  );
  chunkEmbeddings = results;
  console.log(`[RAG] Done. Cached ${results.length} embeddings.`);
  return results;
}

function cosineSimilarity(a: number[], b: number[]): number {
  let dot = 0;
  let normA = 0;
  let normB = 0;
  for (let i = 0; i < a.length; i++) {
    dot += a[i] * b[i];
    normA += a[i] * a[i];
    normB += b[i] * b[i];
  }
  return dot / (Math.sqrt(normA) * Math.sqrt(normB));
}

export async function retrieveRelevantChunks(query: string, topK: number = 5) {
  const embedded = await ensureKnowledgeBaseEmbedded();
  const queryEmbedding = await getEmbeddings(query);

  const scored = embedded.map(({ chunk, embedding }) => ({
    chunk,
    score: cosineSimilarity(queryEmbedding, embedding),
  }));

  scored.sort((a, b) => b.score - a.score);
  return scored.slice(0, topK);
}

const SYSTEM_PROMPTS: Record<Language, string> = {
  en: `You are an expert parenting coach providing real-time, situation-based advice to an overwhelmed parent.

Your role:
- Provide practical, actionable guidance for a specific parenting situation
- Base ALL advice on evidence-based, published parenting resources
- Cite your sources clearly in every response

RESPONSE FORMAT — you MUST follow this exact structure:

📋 SITUATION: [one-line summary of what the parent described]

✅ DO:
• [specific action 1]
• [specific action 2]
• [specific action 3, if applicable]

❌ DON'T:
• [what to avoid 1]
• [what to avoid 2]

🧠 WHY THIS WORKS:
[2-3 sentences explaining the reasoning, referencing child development science]

📖 SOURCE: [Book/program name and chapter/section]

RULES:
1. Keep each bullet to ONE sentence. Maximum 15 words per bullet.
2. Maximum 3 DO bullets and 2 DON'T bullets.
3. Use simple, direct language — the parent may be stressed and reading fast.
4. Be warm but not patronizing. Never shame or judge the parent.
5. Use "try" and "consider" language, not "you must" commands.
6. ALWAYS cite at least one source from the provided context.
7. If the situation involves medical concerns (fever, injury, illness), respond with: "⚠️ This sounds like it may be a medical concern. Please contact your pediatrician or call 111 (UK) / your doctor (US). I'm not able to provide medical advice."
8. If the situation suggests the parent is in crisis or the child is in danger, respond with crisis resources.
9. Tailor advice to the child's age if provided.
10. Do NOT recommend physical punishment under any circumstances.
11. If sources give conflicting advice (e.g., cry-it-out vs gentle sleep), present the approach that best fits the described situation and note that other approaches exist.

Use the following evidence-based sources to ground your response:

{CONTEXT}`,

  ko: `당신은 실시간으로 상황에 맞는 육아 조언을 제공하는 전문 육아 코치입니다. 스트레스받은 부모님을 돕습니다.

역할:
- 특정 육아 상황에 대해 실용적이고 실행 가능한 조언 제공
- 모든 조언은 과학적 근거에 기반
- 출처를 명확히 표시

응답 형식 — 반드시 다음 구조를 따르세요:

📋 상황: [부모가 설명한 상황을 한 줄로 요약]

✅ 하세요:
• [구체적 행동 1]
• [구체적 행동 2]
• [필요시 행동 3]

❌ 하지 마세요:
• [피해야 할 것 1]
• [피해야 할 것 2]

🧠 이렇게 하는 이유:
[2-3문장으로 이유 설명, 아동 발달 과학 근거 포함]

📖 출처: [책/프로그램 이름과 챕터/섹션]

규칙:
1. 각 항목은 한 문장으로, 최대 15단어.
2. 최대 3개의 '하세요' 항목과 2개의 '하지 마세요' 항목.
3. 간단하고 명확한 언어 사용 — 부모는 스트레스받고 빨리 읽어야 합니다.
4. 따뜻하지만 가르치려 들지 마세요. 부모를 부끄럽게 하거나 판단하지 마세요.
5. "해보세요", "고려해 보세요" 같은 표현을 사용하고, "무조건 ~해야 합니다"라고 명령하지 마세요.
6. 제공된 맥락에서 최소 한 개의 출처를 반드시 인용하세요.
7. 의학적 문제(열, 부상, 질병)인 경우: "⚠️ 의학적 문제일 수 있습니다. 소아과 의사에게 연락하거나 119(한국)/111(영국)에 전화하세요. 의학적 조언을 제공할 수 없습니다."라고 응답하세요.
8. 부모가 위기 상황이거나 아이가 위험에 처한 경우, 위기 지원 정보를 제공하세요.
9. 아이의 나이가 제공되면 그에 맞게 조언을 조정하세요.
10. 어떤 상황에서도 체벌을 권장하지 마세요.
11. 출처가 상충하는 조언을 주면, 설명된 상황에 가장 잘 맞는 접근법을 제시하고 다른 방법도 있다는 점을 언급하세요.
12. 한국의 가족 문화(다세대 가구, 공동 육아 등)를 고려하여 조언을 자연스럽게 조정하세요. 하지만 과학적 근거는 유지하세요.

다음 과학적 근거 자료를 바탕으로 응답하세요:

{CONTEXT}`,
};

const DEFAULT_SYSTEM_PROMPT = SYSTEM_PROMPTS.en;

export interface CoachingRequest {
  query: string;
  childName?: string;
  childAge?: string;
  childNotes?: string;
  language?: Language;
}

export interface CoachingResponse {
  advice: string;
  sources: string[];
  topicCategory: string;
  retrievalScores: { source: string; score: number }[];
}

export async function generateAdvice(
  request: CoachingRequest
): Promise<CoachingResponse> {
  const { query, childName, childAge, childNotes, language = "en" } = request;

  // Build enriched query with child context
  const enrichedQuery = childAge
    ? `${query} [Context: child named ${childName || "the child"} is ${childAge} old${childNotes ? `, ${childNotes}` : ""}]`
    : query;

  // RAG: retrieve relevant knowledge chunks
  const retrieved = await retrieveRelevantChunks(enrichedQuery, 5);
  const contextString = retrieved
    .map(
      (r) =>
        `[${r.chunk.source} — ${r.chunk.sourceDetails}]\n${r.chunk.text}`
    )
    .join("\n\n---\n\n");

  // Build system prompt with context
  const systemPrompt = (SYSTEM_PROMPTS[language] || DEFAULT_SYSTEM_PROMPT).replace("{CONTEXT}", contextString);

  // Build user message
  const userMessage = childAge
    ? `My child ${childName ? `(${childName}) ` : ""}is ${childAge}. ${childNotes ? `Notes: ${childNotes}. ` : ""}${query}`
    : query;

  // Generate advice
  const completion = await getOpenAI().chat.completions.create({
    model: "gpt-4o-mini",
    messages: [
      { role: "system", content: systemPrompt },
      { role: "user", content: userMessage },
    ],
    max_tokens: 500,
    temperature: 0.7,
  });

  const advice = completion.choices[0]?.message?.content || "I'm sorry, I couldn't generate advice right now. Please try again.";

  const sources = retrieved.map((r) => r.chunk.source);
  const uniqueSources = [...new Set(sources)];
  const topicCategory = retrieved[0]?.chunk.category || "general";

  return {
    advice,
    sources: uniqueSources,
    topicCategory,
    retrievalScores: retrieved.map((r) => ({
      source: r.chunk.source,
      score: r.score,
    })),
  };
}

// === Streaming version ===
export async function generateAdviceStream(
  request: CoachingRequest
): Promise<ReadableStream> {
  const { query, childName, childAge, childNotes, language = "en" } = request;

  const enrichedQuery = childAge
    ? `${query} [Context: child named ${childName || "the child"} is ${childAge} old${childNotes ? `, ${childNotes}` : ""}]`
    : query;

  const retrieved = await retrieveRelevantChunks(enrichedQuery, 5);
  const contextString = retrieved
    .map((r) => `[${r.chunk.source} — ${r.chunk.sourceDetails}]\n${r.chunk.text}`)
    .join("\n\n---\n\n");

  const systemPrompt = (SYSTEM_PROMPTS[language] || DEFAULT_SYSTEM_PROMPT).replace("{CONTEXT}", contextString);
  const userMessage = childAge
    ? `My child ${childName ? `(${childName}) ` : ""}is ${childAge}. ${childNotes ? `Notes: ${childNotes}. ` : ""}${query}`
    : query;

  const sources = [...new Set(retrieved.map((r) => r.chunk.source))];
  const topicCategory = retrieved[0]?.chunk.category || "general";

  const completion = await getOpenAI().chat.completions.create({
    model: "gpt-4o-mini",
    messages: [
      { role: "system", content: systemPrompt },
      { role: "user", content: userMessage },
    ],
    max_tokens: 500,
    temperature: 0.7,
    stream: true,
  });

  const encoder = new TextEncoder();
  let fullAdvice = "";

  return new ReadableStream({
    async start(controller) {
      // Send metadata first
      controller.enqueue(
        encoder.encode(`data: ${JSON.stringify({ type: "meta", sources, topicCategory })}\n\n`)
      );

      try {
        for await (const chunk of completion) {
          const token = chunk.choices[0]?.delta?.content || "";
          if (token) {
            fullAdvice += token;
            controller.enqueue(
              encoder.encode(`data: ${JSON.stringify({ type: "token", text: token })}\n\n`)
            );
          }
        }
        controller.enqueue(
          encoder.encode(`data: ${JSON.stringify({ type: "done", advice: fullAdvice })}\n\n`)
        );
      } catch (err) {
        controller.enqueue(
          encoder.encode(`data: ${JSON.stringify({ type: "error", error: "Stream failed" })}\n\n`)
        );
      }
      controller.close();
    },
  });
}
