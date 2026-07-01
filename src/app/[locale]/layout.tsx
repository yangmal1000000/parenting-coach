import type { Metadata } from "next";
import { UI, type Language } from "@/lib/i18n";

const locales: Language[] = ["en", "ko"];

export async function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const lang = (locales.includes(locale as Language) ? locale : "en") as Language;
  const t = UI[lang];
  return {
    title: `${t.appName} — AI Parenting Advice`,
    description: lang === "ko"
      ? "몇 초 안이면 과학적 육아 조언을 받으세요. 상황을 말하거나 입력하세요."
      : "Evidence-based parenting advice in seconds. Speak or type what's happening.",
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const lang = (locales.includes(locale as Language) ? locale : "en") as Language;
  return (
    <div data-lang={lang}>
      {children}
    </div>
  );
}
