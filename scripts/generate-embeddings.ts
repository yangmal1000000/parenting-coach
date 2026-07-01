// One-time script: pre-compute all knowledge base embeddings and save to file
// Run: npx tsx scripts/generate-embeddings.ts

import OpenAI from "openai";
import { writeFileSync } from "fs";
import { join } from "path";

// We need to import the knowledge base — use require for the ts file
const { KNOWLEDGE_BASE } = require("../src/lib/knowledge-base");

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

interface StoredEmbedding {
  id: string;
  embedding: number[];
}

async function main() {
  console.log(`[embed] Starting to embed ${KNOWLEDGE_BASE.length} chunks...`);
  
  const results: StoredEmbedding[] = [];
  let count = 0;

  for (const chunk of KNOWLEDGE_BASE) {
    try {
      const response = await openai.embeddings.create({
        model: "text-embedding-3-small",
        input: chunk.text,
      });
      results.push({
        id: chunk.id,
        embedding: response.data[0].embedding,
      });
      count++;
      
      if (count % 50 === 0) {
        console.log(`[embed] ${count}/${KNOWLEDGE_BASE.length} done...`);
      }
      
      // Small delay to avoid rate limits
      if (count % 100 === 0) {
        await new Promise(r => setTimeout(r, 500));
      }
    } catch (e) {
      console.error(`[embed] Failed on chunk ${chunk.id}:`, e);
      // Retry after delay
      await new Promise(r => setTimeout(r, 2000));
      try {
        const response = await openai.embeddings.create({
          model: "text-embedding-3-small",
          input: chunk.text,
        });
        results.push({
          id: chunk.id,
          embedding: response.data[0].embedding,
        });
        count++;
        console.log(`[embed] Retry succeeded for ${chunk.id}`);
      } catch (e2) {
        console.error(`[embed] Retry also failed for ${chunk.id}:`, e2);
      }
    }
  }

  // Save to file
  const outputPath = join(__dirname, "..", "src", "data", "embeddings.json");
  writeFileSync(outputPath, JSON.stringify(results));
  console.log(`[embed] Done! ${results.length}/${KNOWLEDGE_BASE.length} embeddings saved to ${outputPath}`);
}

main().catch(console.error);
