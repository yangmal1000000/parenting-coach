import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#6366f1" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Calm Parent" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="description" content="Evidence-based AI parenting coach. Get real-time advice grounded in 15+ parenting books. Free, bilingual English & Korean." />
        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Calm Parent — AI Parenting Coach" />
        <meta property="og:description" content="Get evidence-based parenting advice in seconds. Grounded in 15+ expert books. Free." />
        <meta property="og:image" content="/icon-512.png" />
        <meta property="og:url" content="https://parenting-coach-two.vercel.app" />
        {/* Twitter */}
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="Calm Parent — AI Parenting Coach" />
        <meta name="twitter:description" content="Evidence-based parenting advice in seconds. Free." />
        <meta name="twitter:image" content="/icon-512.png" />
      </head>
      <body className="min-h-full flex flex-col">{children}<Analytics /></body>
    </html>
  );
}
