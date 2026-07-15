# ParentKin QA Report — 2026-07-15 20:27

## CRITICAL

### 1. ✅ FIXED: Voice recording "couldn't transcribe"
**File:** `mobile/src/screens/HomeScreen.tsx:251`
**Bug:** `recorder.stop()` is async but wasn't awaited. `recorder.uri` read before it's populated.
**Fix:** Added `await` before `recorder.stop()`. Deployed to phone at 20:06.

### 2. ✅ FIXED: Admin password hardcoded fallback
**File:** `web/src/app/api/admin/route.ts:5`
**Bug:** `process.env.ADMIN_PASSWORD || "calm-parent-admin-2026"` — anyone could access analytics.
**Fix:** Removed fallback. Now requires env var. Pushed to GitHub.

## HIGH

### 3. ✅ FIXED: TTS continues after navigation away
**File:** `mobile/src/screens/HomeScreen.tsx:113`
**Bug:** Unmount cleanup didn't call `stopSpeaking()` — audio would keep playing if user navigated away mid-speech.
**Fix:** Added `stopSpeaking()` to cleanup return. Committed.

### 4. ⚠️ OPEN: Hardcoded English strings in mobile (KO users see English)
**File:** `mobile/src/screens/HomeScreen.tsx`
- Line 250: `"Could not start recording."` — no i18n
- Line 442: `"Select child"` — no i18n
- Line 664: Feedback reasons array `["Too generic", "Doesn't fit my situation", ...]` — no i18n

**File:** `mobile/src/components/ProfileScreen.tsx`
- Line 186: `"● ACTIVE"` — no i18n
- Line 265: `"Set Active"` — no i18n

### 5. ⚠️ OPEN: Coach endpoint doesn't guard missing OPENAI_API_KEY
**File:** `web/src/lib/coaching.ts:9`
**Bug:** If env var is missing, OpenAI SDK throws cryptic error instead of user-friendly message.
**Fix needed:** Add early check: `if (!process.env.OPENAI_API_KEY) throw new Error("Service not configured")`

## MEDIUM

### 6. ⚠️ OPEN: Web Onboarding uses emoji-based slide keys
**File:** `web/src/components/WebOnboarding.tsx`
Already converted to Lucide icons, but the `STORAGE_KEY = "***"` looks like a redacted placeholder — verify this is intentional.

### 7. ⚠️ OPEN: Formspree placeholder still in production
**File:** `web/src/app/page.tsx:723`
`action="https://formspree.io/f/xyzplaceholder"` — email capture form doesn't actually submit anywhere.

### 8. ⚠️ OPEN: Mobile Supabase anon key hardcoded
**File:** `mobile/src/lib/supabase.ts:15`
Anon key is public by design (RLS protected), but should ideally come from app.json extra config only.

## LOW

### 9. ✅ FIXED: Broken image path
5 references to `/logo/parentkin-icon.jpg` → `/icon.png` (file didn't exist)

### 10. ✅ FIXED: Stale static sitemap/robots
Removed `public/sitemap.xml` + `public/robots.txt` — dynamic Next.js routes now serve these.

### 11. ✅ FIXED: Streak counter SSR risk
Was calling `loadFromStorage()` during render. Now uses state.

### 12. NOTE: Sitemap CDN cache
Dynamic sitemap deployed but Vercel CDN may serve stale cache for up to 5 min.

## i18n Completeness
- Web: EN=150 keys, KO=150 keys ✅ (balanced)
- Mobile: EN=84 keys, KO=84 keys ✅ (balanced)
- Gap: 5 hardcoded English strings in mobile components (see #4)

## Security Summary
- No API keys in client-side code ✅
- Supabase anon key is public-by-design (RLS) ✅
- Admin password: fixed ✅
- Input validation: query length validated, feedback validated, admin authed ✅
- No rate limiting on API endpoints ⚠️ (acceptable for current scale)

## Build Status
- Mobile: TypeScript clean, device build succeeds ✅
- Web: Next.js build clean, all pages 200 ✅
