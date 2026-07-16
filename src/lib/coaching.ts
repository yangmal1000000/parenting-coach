import OpenAI from "openai";
import { KNOWLEDGE_BASE, KnowledgeChunk } from "./knowledge-base";
import { Language } from "./i18n";
import storedEmbeddings from "../data/embeddings.json";

let _openai: OpenAI | null = null;
function getOpenAI(): OpenAI {
  if (!_openai) {
    if (!process.env.OPENAI_API_KEY) {
      throw new Error("OpenAI API key not configured. Set OPENAI_API_KEY env var.");
    }
    _openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });
  }
  return _openai;
}

// In-memory embedding cache (loaded from pre-computed file)
interface StoredEmbedding { id: string; embedding: number[]; }
const storedEmbeddingsData = storedEmbeddings as StoredEmbedding[];

// Build a lookup map: chunk id → embedding
const embeddingMap = new Map<string, number[]>(
  storedEmbeddingsData.map(e => [e.id, e.embedding])
);

// Pre-build the embedded knowledge base from file (no API calls!)
const chunkEmbeddings: { chunk: KnowledgeChunk; embedding: number[] }[] = KNOWLEDGE_BASE
  .filter(chunk => embeddingMap.has(chunk.id))
  .map(chunk => ({ chunk, embedding: embeddingMap.get(chunk.id)! }));

if (process.env.NODE_ENV !== 'production') console.log(`[RAG] Loaded ${chunkEmbeddings.length} pre-computed embeddings from file`);

async function getEmbeddings(text: string): Promise<number[]> {
  const response = await getOpenAI().embeddings.create({
    model: process.env.OPENAI_EMBEDDING_MODEL || "text-embedding-3-small",
    input: text,
  });
  return response.data[0].embedding;
}

async function ensureKnowledgeBaseEmbedded() {
  return chunkEmbeddings;
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

export async function retrieveRelevantChunks(query: string, topK: number = 6) {
  const embedded = await ensureKnowledgeBaseEmbedded();
  const queryEmbedding = await getEmbeddings(query);

  const scored = embedded.map(({ chunk, embedding }) => ({
    chunk,
    score: cosineSimilarity(queryEmbedding, embedding),
  }));

  scored.sort((a, b) => b.score - a.score);

  // Source diversity boost: don't return more than 3 chunks from the same source
  // This ensures the LLM sees multiple perspectives
  const result: typeof scored = [];
  const sourceCount: Record<string, number> = {};
  for (const item of scored) {
    const src = item.chunk.source;
    if ((sourceCount[src] || 0) >= 3) continue;
    sourceCount[src] = (sourceCount[src] || 0) + 1;
    result.push(item);
    if (result.length >= topK) break;
  }
  return result;
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
[6-8 sentences. Go deep into the mechanism. Cover ALL of these:
- Name the specific developmental or psychological mechanism (e.g., "their prefrontal cortex is still developing impulse control")
- Explain what's happening in the child's brain or body at this age/stage
- Reference the research finding or evidence base concretely
- Explain why the OPPOSITE approach fails or backfires
- Help the parent understand the 'why' so they can apply this principle to future situations
This section should feel like a mini-lesson from a child psychologist — specific, educational, and grounded in research, not generic reassurance.]

📖 SOURCE: [Book/program name and chapter/section]

RULES:
1. Each DO bullet should be a SPECIFIC, CONCRETE action — include a mini-script or exact words to say when possible. Instead of "Use clear instructions" write "Try saying: 'I need you to put your shoes on now. Shoes on, then we go outside.'" Maximum 20 words per bullet.
2. Maximum 3 DO bullets and 2 DON'T bullets.
3. Use simple, direct language — the parent may be stressed and reading fast.
4. Be warm but not patronizing. Never shame or judge the parent.
5. Use "try" and "consider" language, not "you must" commands.
6. ALWAYS cite at least one source from the provided context. If the context does not contain a directly relevant source, cite the closest related source and note how it applies. NEVER omit the 📖 SOURCE line — if you cannot find any source, write 📖 SOURCE: General child development principles (no specific source in knowledge base for this topic).
7. If the situation involves medical concerns (fever, injury, illness), respond with: "⚠️ This sounds like it may be a medical concern. Please contact your pediatrician or call 111 (UK) / your doctor (US). I'm not able to provide medical advice."
8. If the situation suggests the parent is in crisis or the child is in danger, respond with crisis resources.
9. Tailor advice to the child's age if provided.
10. Do NOT recommend physical punishment under any circumstances.
11. If sources give conflicting advice (e.g., cry-it-out vs gentle sleep), present the approach that best fits the described situation and note that other approaches exist.
12. Do NOT give contradictory advice. Every DO and DON'T must be consistent with each other and directly address the parent's described situation. Do not suggest avoiding the problem as a "DO" — address it constructively.

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
[6-8문장. 메커니즘을 깊이 설명하세요. 다음을 모두 포함하세요:
- 구체적인 발달적, 심리적 메커니즘 언급 (예: "전두엽은 아직 충동 조절 능력을 발달시키는 중입니다")
- 이 나이/단계에서 아이의 뇌나 몸에서 무슨 일이 일어나고 있는지 설명
- 연구 결과나 근거 기반을 구체적으로 언급
- 반대 접근법이 왜 실패하거나 역효과가 나는지 설명
- 부모가 이 원리를 미래의 상황에도 적용할 수 있도록 '왜'를 이해하게 하세요
이 섹션은 아동 심리 전문가의 미니 레슨처럼 느껴져야 합니다 — 구체적이고, 교육적이며, 연구에 기반한 내용이어야 합니다. 그냥 일반적인 안심의 문장이 아니라.]

📖 출처: [책/프로그램 이름과 챕터/섹션]

규칙:
1. 각 '하세요' 항목은 구체적이고 실행 가능한 행동이어야 합니다 — 가능하면 정확한 대화 스크립트를 포함하세요. "명확한 지시를 사용하세요" 대신 "이렇게 말해보세요: '신발 신어요. 신발 신으면 밖에 나갈 수 있어요.'"라고 쓰세요. 항목당 최대 20단어.
2. 최대 3개의 '하세요' 항목과 2개의 '하지 마세요' 항목.
3. 간단하고 명확한 언어 사용 — 부모는 스트레스받고 빨리 읽어야 합니다.
4. 따뜻하지만 가르치려 들지 마세요. 부모를 부끄럽게 하거나 판단하지 마세요.
5. "해보세요", "고려해 보세요" 같은 표현을 사용하고, "무조건 ~해야 합니다"라고 명령하지 마세요.
6. 제공된 맥락에서 최소 한 개의 출처를 반드시 인용하세요. 맥락에 직접 관련된 출처가 없으면 가장 가까운 관련 출처를 인용하고 어떻게 적용되는지 설명하세요. 📖 출처 줄을 절대 생략하지 마세요 — 출처를 찾을 수 없으면 📖 출처: 일반 아동 발달 원칙 (이 주제에 대한 지식 베이스에 구체적 출처 없음)이라고 쓰세요.
7. 의학적 문제(열, 부상, 질병)인 경우: "⚠️ 의학적 문제일 수 있습니다. 소아과 의사에게 연락하거나 119(한국)/111(영국)에 전화하세요. 의학적 조언을 제공할 수 없습니다."라고 응답하세요.
8. 부모가 위기 상황이거나 아이가 위험에 처한 경우, 위기 지원 정보를 제공하세요.
9. 아이의 나이가 제공되면 그에 맞게 조언을 조정하세요.
10. 어떤 상황에서도 체벌을 권장하지 마세요.
11. 출처가 상충하는 조언을 주면, 설명된 상황에 가장 잘 맞는 접근법을 제시하고 다른 방법도 있다는 점을 언급하세요.
12. 한국의 가족 문화(다세대 가구, 공동 육아 등)를 고려하여 조언을 자연스럽게 조정하세요. 하지만 과학적 근거는 유지하세요.
13. 모순된 조언을 하지 마세요. 모든 '하세요'와 '하지 마세요'는 서로 일치해야 하며, 부모가 설명한 상황에 직접적으로 다루세요. 문제를 피하는 것을 '하세요'로 제안하지 말고, 건설적으로 다루세요.

다음 과학적 근거 자료를 바탕으로 응답하세요:

{CONTEXT}`,
};

const DEFAULT_SYSTEM_PROMPT = SYSTEM_PROMPTS.en;

// === Deep Dive Prompts ===
const DEEP_DIVE_PROMPTS: Record<Language, string> = {
  en: `You are an expert parenting coach writing a personalized deep-dive report for a parent who has already received initial advice and wants to go deeper. They need to feel HEARD, understood, and given real educational depth — not another list of quick tips.

Write a 750-900 word personalized report. Use warm, direct, professional language — like a skilled child psychologist writing a letter to this specific parent.

FORMAT — follow this exact structure:

### 💙 I Hear You
[120-140 words. Mirror their exact situation back to them with empathy. Name the specific emotion they and their child are likely feeling. Don't jump to solutions. Make them feel seen and understood. Use their words.]

### 🧠 What's Likely Happening
[180-200 words. Explain the developmental or psychological mechanism in plain language. Use one clear analogy. Name the specific concept (brain development, attachment pattern, behavioral science, etc.) and explain how it works in THIS situation. Reference the research base.]

### 🪞 What Might Be Going On for Both of You
[140-160 words. Explore 2-3 plausible dynamics from both parent's AND child's perspectives. Use "might" and "could" language — never diagnose. Show empathy for both. Help the parent see the pattern from outside it.]

### 🤔 Questions to Sit With
[100-120 words. Present 4-5 reflective questions that build parental self-awareness. Non-judgmental, open-ended, specific to their situation. These should prompt insight, not guilt.]

### 🌱 Gentle Experiments
[180-200 words. Offer 2-3 deeper, workbook-style practices. Each should include: what to do, what to notice in your child and yourself, and how to process it afterward. These are NOT quick tips — they are reflective practices. Write in second person ("you").]

### 📈 What This Could Mean Over Time
[80-100 words. Realistic, non-catastrophic framing of how this behavior typically evolves as the child grows. Both what happens if it's addressed and what happens if it continues. Hopeful but honest.]

### 🔗 Want to Go Further?
[40-60 words. One reflective sentence + a soft offer to explore a specific related angle.]

RULES:
1. Write in flowing paragraphs, NOT bullet lists (except for Questions section).
2. Be warm but never patronizing. This parent is doing their best.
3. Never shame or judge the parent.
4. Use evidence-based concepts from the provided sources.
5. Speak directly to THIS parent's specific situation — no generic advice.
6. If medical concerns are indicated, prioritize medical resources.
7. Do NOT recommend physical punishment under any circumstances.

Use the following evidence-based sources:

{CONTEXT}`,

  ko: `당신은 육아 전문 코치로서, 이미 초기 조언을 받은 부모님에게 더 깊이 있는 개인화 리포트를 작성합니다. 이 부모님은 자신의 이야기를 **들어주고**, 이해해주고, 깊이 있는 지식을 제공받고 싶어합니다. 빠른 팁 목록이 아닙니다.

750-900단어 분량의 개인화된 리포트를 작성하세요. 따뜻하고 직접적이며 전문적인 언어를 사용하세요 — 숙련된 아동 심리 전문가가 이 부모님에게 편지를 쓰는 것처럼.

형식 — 반드시 다음 구조를 따르세요:

### 💙 선생님의 마음을 알아요
[120-140단어. 부모님의 상황을 공감적으로 그대로 비춰주세요. 부모님과 아이가 느끼고 있을 감정을 구체적으로 이름 지어주세요. 해결책으로 넘어가지 마세요. 부모님이 보이고 들렸다고 느끼게 하세요.]

### 🧠 무슨 일이 일어나고 있을까요
[180-200단어. 발달적, 심리적 메커니즘을 평이한 언어로 설명하세요. 명확한 비유를 하나 사용하세요. 구체적인 개념(뇌 발달, 애착 유형, 행동 과학 등)을 언급하고 이 상황에서 어떻게 작동하는지 설명하세요. 연구 근거를 참조하세요.]

### 🪞 두 사람에게 무슨 일이 일어나고 있을까요
[140-160단어. 부모님과 아이 양쪽 관점에서 2-3가지 가능한 역학을 탐색하세요. "~일 수도"라는 언어를 사용하세요 — 절대 진단하지 마세요. 양쪽 모두에게 공감을 보여주세요.]

### 🤔 곰곰이 생각해 볼 질문들
[100-120단어. 부모로서의 자기 인식을 높이는 4-5개의 성찰 질문을 제시하세요. 비판적이지 않고, 개방적이며, 상황에 맞는 질문.]

### 🌱 가벼운 실험
[180-200단어. 2-3개의 워크북 스타일 실천을 제안하세요. 각각은 무엇을 할지, 아이와 자신에서 무엇을 알아차릴지, 이후에 어떻게 처리할지를 포함해야 합니다.]

### 📈 시간이 지나면 어떻게 될까요
[80-100단어. 아이가 자라면서 이 행동이 일반적으로 어떻게 발전하는지 현실적인 관점. 해결되는 경우와 계속되는 경우 모두. 희망적이지만 정직하게.]

### 🔗 더 깊이 알고 싶으신가요?
[40-60단어. 성찰적 문장 하나 + 특정 관련 주제를 탐색하겠다는 부드러운 제안.]

규칙:
1. 흐르는 단락으로 작성하세요. bullet 목록이 아닙니다 (질문 섹션 제외).
2. 따뜻하지만 가르치지 마세요.
3. 부모를 부끄럽게 하거나 판단하지 마세요.
4. 제공된 출처에서 증거 기반 개념을 사용하세요.
5. 이 부모님의 구체적인 상황에 직접 말하세요.
6. 의학적 문제가 의심되면 의료 자원을 최우선으로 하세요.
7. 어떤 상황에서도 체벌을 권장하지 마세요.

다음 증거 기반 자료를 사용하세요:

{CONTEXT}`,
};

export interface ConversationTurn {
  role: "user" | "assistant";
  content: string;
}

export interface CoachingRequest {
  query: string;
  childName?: string;
  childAge?: string;
  childNotes?: string;
  childContext?: string;  // structured context from childProfile.buildChildContext()
  language?: Language;
  userId?: string;
  deepDive?: boolean;
  conversationHistory?: ConversationTurn[];
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
  const { query, childName, childAge, childNotes, childContext, language = "en", conversationHistory = [] } = request;

  // Use structured childContext if available, otherwise build from individual fields
  const childInfo = childContext
    || (childAge
      ? `Child: ${childName || "the child"}. Age: ${childAge}${childNotes ? `. Additional context: ${childNotes}` : ""}`
      : "");

  // Build enriched query with child context
  const enrichedQuery = childInfo
    ? `${query} [Context: ${childInfo}]`
    : query;

  // RAG: retrieve relevant knowledge chunks
  const retrieved = await retrieveRelevantChunks(enrichedQuery, 6);
  const contextString = retrieved
    .map(
      (r) =>
        `[${r.chunk.source} — ${r.chunk.sourceDetails}]\n${r.chunk.text}`
    )
    .join("\n\n---\n\n");

  // Build system prompt with context
  const basePrompt = (SYSTEM_PROMPTS[language] || DEFAULT_SYSTEM_PROMPT).replace("{CONTEXT}", contextString);
  const systemPrompt = conversationHistory.length > 0
    ? basePrompt + (language === "ko" ? "\n\n중요: 이전 대화의 맥락을 고려하여 답변하세요. 부모가 추가 질문을 하면 이전 조언을 참고하고 일관성을 유지하세요." : "\n\nIMPORTANT: Consider the conversation history. When the parent asks a follow-up, reference and build on previous advice. Maintain consistency with earlier guidance.")
    : basePrompt;

  // Build user message
  const userMessage = childInfo
    ? `${childInfo}. ${query}`
    : query;

  // Build conversation messages with history
  const messages: Array<{ role: "system" | "user" | "assistant"; content: string }> = [
    { role: "system", content: systemPrompt },
  ];

  // Add conversation history for follow-up context
  for (const turn of conversationHistory.slice(-6)) {
    messages.push({
      role: turn.role === "user" ? "user" : "assistant",
      content: turn.content.slice(0, 1000), // truncate to control token usage
    });
  }

  messages.push({ role: "user", content: userMessage });

  // Generate advice — use gpt-4o-mini for standard, gpt-4o for deep dive
  const chatModel = request.deepDive
    ? (process.env.OPENAI_CHAT_MODEL || "gpt-4o")
    : (process.env.OPENAI_CHAT_MINI_MODEL || "gpt-4o-mini");
  const completion = await getOpenAI().chat.completions.create({
    model: chatModel,
    messages,
    max_tokens: 650,
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
  const { query, childName, childAge, childNotes, childContext, language = "en", conversationHistory = [] } = request;

  const childInfo = childContext
    || (childAge
      ? `Child: ${childName || "the child"}. Age: ${childAge}${childNotes ? `. Additional context: ${childNotes}` : ""}`
      : "");

  const enrichedQuery = childInfo
    ? `${query} [Context: ${childInfo}]`
    : query;

  const retrieved = await retrieveRelevantChunks(enrichedQuery, 6);
  const contextString = retrieved
    .map((r) => `[${r.chunk.source} — ${r.chunk.sourceDetails}]\n${r.chunk.text}`)
    .join("\n\n---\n\n");

  const isDeepDive = request.deepDive || false;
  const promptTemplate = isDeepDive
    ? (DEEP_DIVE_PROMPTS[language] || DEEP_DIVE_PROMPTS.en)
    : (SYSTEM_PROMPTS[language] || DEFAULT_SYSTEM_PROMPT);
  const baseStreamPrompt = promptTemplate.replace("{CONTEXT}", contextString);
  const systemPrompt = conversationHistory.length > 0
    ? baseStreamPrompt + (language === "ko" ? "\n\n중요: 이전 대화의 맥락을 고려하여 답변하세요. 부모가 추가 질문을 하면 이전 조언을 참고하고 일관성을 유지하세요." : "\n\nIMPORTANT: Consider the conversation history. When the parent asks a follow-up, reference and build on previous advice. Maintain consistency with earlier guidance.")
    : baseStreamPrompt;
  const userMessage = childInfo
    ? `${childInfo}. ${query}`
    : query;

  const sources = [...new Set(retrieved.map((r) => r.chunk.source))];
  const topicCategory = retrieved[0]?.chunk.category || "general";

  // Build conversation messages with history
  const messages: Array<{ role: "system" | "user" | "assistant"; content: string }> = [
    { role: "system", content: systemPrompt },
  ];

  // Add conversation history for follow-up context
  for (const turn of conversationHistory.slice(-6)) {
    messages.push({
      role: turn.role === "user" ? "user" : "assistant",
      content: turn.content.slice(0, 1000),
    });
  }

  messages.push({ role: "user", content: userMessage });

  // Use gpt-4o-mini for standard queries, gpt-4o for deep dive
  const chatModel = isDeepDive
    ? (process.env.OPENAI_CHAT_MODEL || "gpt-4o")
    : (process.env.OPENAI_CHAT_MINI_MODEL || "gpt-4o-mini");
  const completion = await getOpenAI().chat.completions.create({
    model: chatModel,
    messages,
    max_tokens: isDeepDive ? 2000 : 650,
    temperature: isDeepDive ? 0.8 : 0.7,
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
      } catch {
        controller.enqueue(
          encoder.encode(`data: ${JSON.stringify({ type: "error", error: "Stream failed" })}\n\n`)
        );
      }
      controller.close();
    },
  });
}
