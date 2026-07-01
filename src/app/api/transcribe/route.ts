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

    const arrayBuffer = await audioFile.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);
    const whisperFile = new File([buffer], "audio.webm", {
      type: audioFile.type || "audio/webm",
    });

    const transcription = await getOpenAI().audio.transcriptions.create({
      file: whisperFile,
      model: "whisper-1",
    });

    return Response.json({ text: transcription.text });
  } catch (error) {
    console.error("[API] Whisper error:", error);
    return Response.json(
      { error: "Failed to transcribe audio" },
      { status: 500 }
    );
  }
}
