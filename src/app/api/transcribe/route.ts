import OpenAI from "openai";

let _openai: OpenAI | null = null;
function getOpenAI(): OpenAI {
  if (!_openai) {
    _openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });
  }
  return _openai;
}

export async function POST(request: Request) {
  try {
    const formData = await request.formData();
    const audioFile = formData.get("audio") as File;

    if (!audioFile) {
      return Response.json({ error: "No audio file provided" }, { status: 400 });
    }

    // Preserve original filename + MIME type — Whisper uses the extension to determine format
    const originalName = audioFile.name || "audio.m4a";
    const arrayBuffer = await audioFile.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);
    const whisperFile = new File([buffer], originalName, {
      type: audioFile.type || "audio/m4a",
    });

    const transcription = await getOpenAI().audio.transcriptions.create({
      file: whisperFile,
      model: "whisper-1",
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
