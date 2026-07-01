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

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Check if the path already starts with a locale
  const hasLocale = locales.some(l => pathname === `/${l}` || pathname.startsWith(`/${l}/`));

  if (!hasLocale) {
    // Redirect to appropriate locale
    const preferred = getPreferredLocale(request.headers.get("accept-language"));
    const newUrl = request.nextUrl.clone();
    newUrl.pathname = `/${preferred}${pathname === "/" ? "" : pathname}`;
    return NextResponse.redirect(newUrl);
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    // Skip API routes, admin, static files, etc.
    "/((?!api|admin|_next/static|_next/image|favicon.ico).*)",
  ],
};
