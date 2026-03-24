import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { AppProvider } from "@/context/AppContext";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const SITE_URL = "https://simwoohyun.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "심우현 | Frontend-focused Full-stack Developer",
    template: "%s | 심우현",
  },
  description:
    "React + TypeScript 기반 프로덕션 서비스를 설계하고, Claude Code를 활용해 개발 자동화를 구현하는 풀스택 개발자 심우현의 포트폴리오입니다.",
  keywords: [
    "심우현",
    "Sim Woohyun",
    "프론트엔드 개발자",
    "풀스택 개발자",
    "React",
    "TypeScript",
    "Next.js",
    "포트폴리오",
    "Claude Code",
    "RAG",
    "B2B SaaS",
  ],
  authors: [{ name: "심우현", url: SITE_URL }],
  creator: "심우현",
  openGraph: {
    type: "website",
    locale: "ko_KR",
    alternateLocale: ["en_US", "ja_JP"],
    url: SITE_URL,
    siteName: "심우현 포트폴리오",
    title: "심우현 | Frontend-focused Full-stack Developer",
    description:
      "Claude Code를 무기로, 시니어처럼 사고하는 주니어. B2B SaaS, 특허 분석, RAG 파이프라인까지.",
  },
  twitter: {
    card: "summary_large_image",
    title: "심우현 | Frontend-focused Full-stack Developer",
    description:
      "Claude Code를 무기로, 시니어처럼 사고하는 주니어. B2B SaaS, 특허 분석, RAG 파이프라인까지.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: SITE_URL,
  },
};

// JSON-LD structured data
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "심우현",
  alternateName: "Sim Woohyun",
  url: SITE_URL,
  jobTitle: "Frontend-focused Full-stack Developer",
  email: "wmr06244@naver.com",
  sameAs: ["https://github.com/neverleaveualong"],
  knowsAbout: [
    "React",
    "TypeScript",
    "Next.js",
    "Node.js",
    "PostgreSQL",
    "RAG Pipeline",
    "Claude Code",
  ],
  alumniOf: {
    "@type": "CollegeOrUniversity",
    name: "강원대학교",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ko"
      className={`${geistSans.variable} ${geistMono.variable} antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen bg-background text-foreground">
        <div className="noise" />
        <AppProvider>{children}</AppProvider>
      </body>
    </html>
  );
}
