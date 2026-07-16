# ParentKin Voice Mode — Hybrid Real-time Architecture

## Overview

Real-time conversational voice using **Gemini Live API** with hybrid routing: Gemini handles the conversation, calls back to our existing RAG pipeline for evidence-based advice.

**Levels:**
- Level 2: Real-time voice conversation (this doc)
- Level 3: Wake word "Hey ParentKin" (future, builds on Level 2)

---

## Architecture (Option C: Hybrid Routing)

```
┌─────────────┐     WebSocket (audio)      ┌──────────────────┐
│   Client     │ ◄─────────────────────────►│  Gemini Live API  │
│  (Web/RN)    │     PCM 16-bit bidir       │  (gemini-2.5-flash)│
│              │                            │                    │
│  - Mic capture│                           │  System Instruction:│
│  - Audio playback│                        │  - Coaching persona │
│  - Voice UI   │                            │  - Child profile    │
│  - Wake word  │                            │  - Response format  │
│  (Level 3)    │                            │                    │
└──────┬───────┘                            │  Tools declared:   │
       │                                     │  - get_parenting_advice│
       │  HTTP (tool results)                │  - save_session_note   │
       └─────────────────────────────────────►│                    │
                                             └─────────┬──────────┘
                                                       │
                                          Tool call (function)│
                                                       ▼
                                             ┌──────────────────┐
                                             │  /api/voice-tools │
                                             │  (Next.js route)  │
                                             │                    │
                                             │  - RAG retrieval   │
                                             │    (embeddings +   │
                                             │     cosine sim)    │
                                             │  - Returns chunks  │
                                             │    as JSON         │
                                             │  - Child context   │
                                             └──────────────────────┘
```

## How Hybrid Routing Works

### Flow
1. User opens Voice Mode → client requests a session from `/api/voice-session`
2. Server creates Gemini Live connection with:
   - System instruction (coaching persona + child profile + format rules)
   - Tool declaration: `get_parenting_advice(query: string)`
3. User speaks → audio streams to Gemini → Gemini processes
4. For general conversation (empathy, follow-up questions, validation):
   - Gemini responds directly with voice — no tool call needed
5. For structured advice (techniques, strategies, evidence):
   - Gemini calls `get_parenting_advice("my 3yo won't stay in bed")` 
   - Our `/api/voice-tools` endpoint:
     - Embeds the query
     - Runs cosine similarity against 85+ knowledge chunks
     - Returns top 6 chunks + sources as JSON
   - Gemini incorporates the RAG results into its spoken response
   - Sources are also displayed in the UI

### Why Hybrid
- **Gemini's voice** is natural, empathetic, handles interruptions
- **Our RAG** has 85+ curated evidence-based chunks from parenting books
- **Best of both**: real-time conversation + evidence-based advice
- Gemini decides when it needs research vs when it's just conversing

---

## System Instruction Design

```
You are ParentKin Voice, a real-time parenting coach.

Context about this parent:
- Child: {name}, {age}
- Temperament: {temperament_tags}
- Notes: {child_notes}
- Language: {language}

Your role:
- Listen actively, show empathy, validate feelings
- When the parent describes a specific challenge, CALL get_parenting_advice 
  with a summary of their question
- Use the returned evidence-based strategies in your response
- Always cite the source naturally ("According to...")
- Keep responses concise for voice — 2-3 sentences for follow-ups, 
  longer only when giving specific techniques
- Match the parent's emotional tone
- Never give medical advice — suggest seeing a pediatrician

Response guidelines:
- Speak naturally, not in lists (this is voice, not text)
- One key technique at a time — don't overwhelm
- Ask if they want to try it or want another approach
```

---

## Tool Declaration

```json
{
  "functionDeclarations": [
    {
      "name": "get_parenting_advice",
      "description": "Retrieve evidence-based parenting strategies from the knowledge base. Call this when the parent describes a specific behavioural challenge and you need concrete techniques grounded in published parenting research.",
      "parameters": {
        "type": "object",
        "properties": {
          "query": {
            "type": "string",
            "description": "A clear summary of the parenting question, e.g. '3 year old having tantrums at bedtime'"
          },
          "category": {
            "type": "string",
            "enum": ["tantrums", "sleep", "eating", "screen-time", "sibling", "discipline", "emotional", "general"],
            "description": "Best guess category"
          }
        },
        "required": ["query"]
      }
    }
  ]
}
```

---

## API Endpoints

### 1. `POST /api/voice-session` (new)
Creates a Gemini Live session.

**Request:**
```json
{
  "childProfile": { "name": "Theo", "age": "3 years", "temperament": ["sensitive"], "notes": "" },
  "language": "en",
  "recentTopics": ["tantrums", "sleep"]
}
```

**Response:**
```json
{
  "sessionToken": "pk_live_xxx",
  "wsUrl": "/api/voice-ws?token=pk_live_xxx"
}
```

Server stores session config (child profile, system instruction) keyed by token. The WebSocket handler reads it on connect.

### 2. `WebSocket /api/voice-ws` (new)
Bidirectional audio proxy between client and Gemini Live.

**Client → Server:** Raw PCM audio chunks (16-bit, 16kHz, mono)
**Server → Gemini:** Forwards audio + handles tool calls
**Gemini → Server:** Audio response chunks + tool call requests
**Server → Client:** Audio chunks + tool call metadata (for UI)

### 3. `POST /api/voice-tools` (new)
Handles Gemini's function calls.

**Request:**
```json
{
  "tool": "get_parenting_advice",
  "args": { "query": "3yo tantrums at bedtime", "category": "tantrums" }
}
```

**Response:**
```json
{
  "strategies": [
    {
      "source": "The Whole-Brain Child",
      "sourceDetails": "Siegel & Bryson, Ch. 3",
      "technique": "Connect and Redirect: First validate the emotion...",
      "why": "When a child is having a tantrum, their right brain..."
    },
    ...
  ],
  "summary": "6 chunks retrieved from knowledge base"
}
```

---

## Client Implementation

### Web (first — easier audio streaming)
- `WebSocket` API for connection
- `AudioWorkletNode` (or `ScriptProcessorNode`) for real-time mic capture → PCM
- `AudioBufferSourceNode` for playing incoming PCM
- Web Audio API handles sample rate conversion

**Files:**
- `src/hooks/useVoiceSession.ts` — WebSocket + audio pipeline
- `src/components/VoiceModeOverlay.tsx` — full-screen voice UI
- `src/lib/voice-utils.ts` — PCM conversion utilities

### Mobile (second — needs native audio streaming)
Options:
1. **`react-native-live-audio-stream`** — captures PCM in real-time ✓
2. **`expo-audio`** — current setup, but only record-then-send (no streaming)
3. **Custom native module** — full control, most work

**Plan:** Use `react-native-live-audio-stream` for capture + a custom WebSocket client for streaming.

**Files:**
- `src/screens/VoiceModeScreen.tsx` — voice UI
- `src/lib/voice-session.ts` — WebSocket + audio pipeline
- `src/lib/pcm-utils.ts` — PCM conversion

### Voice UI Design
- Full-screen overlay with animated breathing orb (reuse existing BreathingCircle)
- Status states: listening → thinking → speaking
- Live transcript (Gemini returns text alongside audio)
- Sources panel (when RAG results come back)
- "Tap to interrupt" anywhere on screen
- Mute button + End session button

---

## Level 3: Wake Word (Future)

- **Porcupine** (Picovoice) — on-device wake word detection
  - Custom "Hey ParentKin" keyword trained
  - Runs in background when app is open
  - Low battery impact (< 3% per hour)
- Alternative: **react-native-voice** for continuous recognition
- When wake word fires → opens Voice Mode overlay → starts Level 2 session

---

## Technical Constraints

### Gemini Live API
- **Model:** `gemini-2.5-flash-preview-native-audio-dialog` (or latest Live-capable model)
- **Audio format:** PCM 16-bit, 16kHz or 24kHz, mono, little-endian
- **WebSocket:** `wss://generativelanguage.googleapis.com/ws/google.ai.generativelanguage.v1alpha.GenerativeService.BidiGenerateContent`
- **Auth:** API key passed as query param (`?key=GEMINI_API_KEY`)
- **Session limit:** ~15 minutes per connection (reconnect if needed)
- **Tool calls:** Gemini sends `toolCall` message → server executes → sends `toolResponse`

### Latency budget
| Step | Target |
|------|--------|
| Mic → WebSocket | < 50ms |
| WebSocket → Gemini | < 100ms |
| Gemini processing | 300-800ms |
| Tool call (RAG) | 200-500ms |
| Gemini audio → speaker | < 100ms |
| **Total round-trip** | **~1-2s** |

### Costs
- Gemini Live: ~$0.50/hour for audio (varies by model)
- RAG tool calls: embedding cost (~$0.0001 per call)
- Estimate: ~$0.50-1.00 per active voice session hour

---

## Implementation Plan

### Phase 1: Server Foundation (web first)
1. `/api/voice-tools` endpoint — RAG retrieval as JSON
2. `/api/voice-session` — session creation + Gemini Live config
3. WebSocket proxy — audio forwarding + tool call handling
4. System instruction builder — child profile injection

### Phase 2: Web Client
5. `useVoiceSession` hook — WebSocket + Web Audio API
6. `VoiceModeOverlay` component — full-screen voice UI
7. PCM streaming pipeline — mic → WebSocket → speaker
8. Live transcript + sources panel

### Phase 3: Polish + Test
9. Interruption handling (barge-in)
10. Reconnection logic (15-min session limit)
11. Error handling + graceful degradation
12. Build, test, commit

### Phase 4: Mobile Client
13. `react-native-live-audio-stream` integration
14. Voice session screen
15. Same WebSocket protocol, different audio layer
16. Build, test, commit

### Phase 5: Wake Word (Level 3)
17. Porcupine keyword training
18. Background detection service
19. Trigger voice overlay from background

---

## What We Need From Harry
- [ ] Google AI Studio API key with Gemini access (or GCP project with Gemini API)
- [ ] Confirm: which Gemini model to target for Live API?
- [ ] Test device: which iPhone for mobile testing?
