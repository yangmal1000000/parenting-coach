// Incremental embedding: only embed chunks not already in embeddings.json
const OpenAI = require("openai");
const { readFileSync, writeFileSync } = require("fs");
const { join } = require("path");

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });
const { KNOWLEDGE_BASE } = require("../src/lib/knowledge-base");

const embeddingsPath = join(__dirname, "..", "src", "data", "embeddings.json");
const existing = JSON.parse(readFileSync(embeddingsPath, "utf-8"));
const existingIds = new Set(existing.map(e => e.id));

const newChunks = KNOWLEDGE_BASE.filter(c => !existingIds.has(c.id));
console.log(`[embed] ${existing.length} existing, ${newChunks.length} new chunks to embed`);

async function main() {
  for (const chunk of newChunks) {
    try {
      const response = await openai.embeddings.create({
        model: "text-embedding-3-small",
        input: chunk.text,
      });
      existing.push({ id: chunk.id, embedding: response.data[0].embedding });
      console.log(`[embed] Added ${chunk.id}: ${chunk.source}`);
    } catch (e) {
      console.error(`[embed] Failed ${chunk.id}:`, e.message);
      await new Promise(r => setTimeout(r, 2000));
      const response = await openai.embeddings.create({
        model: "text-embedding-3-small",
        input: chunk.text,
      });
      existing.push({ id: chunk.id, embedding: response.data[0].embedding });
      console.log(`[embed] Retry OK: ${chunk.id}`);
    }
    await new Promise(r => setTimeout(r, 200));
  }

  writeFileSync(embeddingsPath, JSON.stringify(existing));
  console.log(`[embed] Done! Total: ${existing.length} embeddings`);
}

main().catch(console.error);
