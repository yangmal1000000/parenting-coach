import OpenAI, { toFile } from "openai";
import { rateLimit } from "@/lib/rateLimit";
import { NextRequest } from "next/server";

let _openai: OpenAI | null = null;
function getOpenAI(): OpenAI {
  if (!_openai) {
    if (!process.env.OPENAI_API_KEY) {
      throw new Error("OpenAI API key not configured.");
    }
    _openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });
  }
  return _openai;
}

export async function POST(request: NextRequest) {
  const limited = await rateLimit(request, { limit: 5, windowSeconds: 60 });
  if (limited) return limited;

  try {
    const formData = await request.formData();
    const audioFile = formData.get("audio") as File;

    if (!audioFile) {
      return Response.json({ error: "No audio file provided" }, { status: 400 });
    }

    const arrayBuffer = await audioFile.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);

    // Use the SDK's toFile() helper — it handles Node.js 22 ByteString issues
    // that crash new File() and raw FormData+Blob approaches.
    const originalName = audioFile.name || "audio.m4a";
    const mimeType = audioFile.type || "audio/m4a";
    const whisperFile = await toFile(buffer, originalName, { type: mimeType });

    const transcription = await getOpenAI().audio.transcriptions.create({
      file: whisperFile,
      model: process.env.OPENAI_TRANSCRIPTION_MODEL || "whisper-1",
    });

    return Response.json({ text: transcription.text });
  } catch (error) {
    const msg = error instanceof Error ? error.message : String(error);
    console.error("[API] Whisper error:", msg);
    return Response.json(
      { error: "Transcription failed", detail: msg },
      { status: 500 }
    );
  }
}
