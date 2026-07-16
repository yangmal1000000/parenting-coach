import { NextRequest, NextResponse } from "next/server";

const locales = ["en", "ko"];
const defaultLocale = "en";

function getPreferredLocale(acceptLang: string | null): string {
  if (!acceptLang) return defaultLocale;
  // Parse Accept-Language header — simple version
  const langs = acceptLang.split(",").map(l => {
    const [code, q] = l.trim().split(";q=");
    return { code: code.split("-")[0].toLowerCase(), q: q ? parseFloat(q) : 1 };
  }).sort((a, b) => b.q - a.q);

  for (const l of langs) {
    if (locales.includes(l.code)) return l.code;
  }
  return defaultLocale;
}

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Apply security headers to all responses
  const applySecurityHeaders = (response: NextResponse) => {
    const csp = [
      "default-src 'self'",
      "script-src 'self' 'unsafe-inline' 'unsafe-eval' blob:",
      "style-src 'self' 'unsafe-inline'",
      "img-src 'self' data: https:",
      "font-src 'self' data:",
      "connect-src 'self' https://*.supabase.co https://*.upstash.io wss://*.supabase.co wss://generativelanguage.googleapis.com https://generativelanguage.googleapis.com",
      "media-src 'self' blob: data:",
      "frame-ancestors 'none'",
      "base-uri 'self'",
      "form-action 'self'",
    ].join("; ");
    response.headers.set("Content-Security-Policy", csp);
    response.headers.set("X-Frame-Options", "DENY");
    response.headers.set("X-Content-Type-Options", "nosniff");
    response.headers.set("Strict-Transport-Security", "max-age=31536000; includeSubDomains; preload");
    response.headers.set("Referrer-Policy", "strict-origin-when-cross-origin");
    return response;
  };

  // Don't redirect the root path — it's the landing page
  if (pathname === "/") {
    return applySecurityHeaders(NextResponse.next());
  }

  // Don't redirect /learn and its sub-pages — these are standalone SEO pages
  if (pathname === "/learn" || pathname.startsWith("/learn/")) {
    return applySecurityHeaders(NextResponse.next());
  }

  // Don't redirect /privacy — standalone page
  if (pathname === "/privacy") {
    return applySecurityHeaders(NextResponse.next());
  }

  // Check if the path already starts with a locale
  const hasLocale = locales.some(l => pathname === `/${l}` || pathname.startsWith(`/${l}/`));

  if (!hasLocale) {
    // Redirect to appropriate locale
    const preferred = getPreferredLocale(request.headers.get("accept-language"));
    const newUrl = request.nextUrl.clone();
    newUrl.pathname = `/${preferred}${pathname === "/" ? "" : pathname}`;
    return applySecurityHeaders(NextResponse.redirect(newUrl));
  }

  return applySecurityHeaders(NextResponse.next());
}

export const config = {
  matcher: [
    // Skip API, admin, Next internals, and all static file extensions in public/
    "/((?!api|admin|_next|favicon.ico|manifest.json|robots.txt|sitemap.xml|.*\\.(?:png|jpg|jpeg|gif|svg|ico|webp|css|js|txt|xml)|icon-.*|apple-touch-icon.*|file.svg|globe.svg|next.svg|vercel.svg|window.svg).*)",
  ],
};
