import type { Metadata } from "next";
import { Geist_Mono } from "next/font/google";
import { AppProvider } from "@/context/AppContext";
import "./globals.css";

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const SITE_URL = "https://simwoohyun.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  verification: {
    google: "KsQG-sXZi_XuKDhRFGMviiNTyPpMqA3pf3S0n6AwYG4",
    other: {
      "naver-site-verification": "2a2bb203e6ebe00395768538bd2aa4b700267d65",
    },
  },
  title: {
    default: "심우현 개발자 포트폴리오 | FullStack SW Developer",
    template: "%s | 심우현",
  },
  description:
    "심우현 개발자 포트폴리오입니다. React 프론트엔드, FastAPI, RAG 기반 AI 검색, AI Agent 개발 경험을 정리했습니다.",
  keywords: [
    "심우현",
    "심우현 개발자",
    "심우현 포트폴리오",
    "심우현 이력서",
    "심우현 프론트엔드 개발자",
    "심우현 AI 개발자",
    "심우현 AI Agent Engineer",
    "심우현 프론트엔드",
    "심우현 풀스택",
    "Sim Woohyun",
    "simwoohyun",
    "SimWoohyun",
    "Woohyun Sim",
    "프론트엔드 개발자",
    "풀스택 개발자",
    "React",
    "TypeScript",
    "Next.js",
    "포트폴리오",
    "Claude Code",
    "RAG",
    "B2B SaaS",
    "강원대학교 컴퓨터공학",
    "더존비즈온 인턴",
    "하이퍼스타",
  ],
  authors: [{ name: "심우현", url: SITE_URL }],
  creator: "심우현",
  openGraph: {
    type: "website",
    locale: "ko_KR",
    alternateLocale: ["en_US", "ja_JP"],
    url: SITE_URL,
    siteName: "심우현 개발자 포트폴리오",
    title: "심우현 개발자 포트폴리오 | FullStack SW Developer",
    description:
      "React 프론트엔드, FastAPI, RAG 기반 AI 검색, AI Agent 개발 경험을 정리한 심우현 개발자 포트폴리오입니다.",
  },
  twitter: {
    card: "summary_large_image",
    title: "심우현 개발자 포트폴리오 | FullStack SW Developer",
    description:
      "React 프론트엔드, FastAPI, RAG 기반 AI 검색, AI Agent 개발 경험을 정리한 심우현 개발자 포트폴리오입니다.",
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
  "@graph": [
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: SITE_URL,
      name: "심우현 개발자 포트폴리오",
      alternateName: ["심우현", "심우현 포트폴리오", "Sim Woohyun Portfolio"],
      inLanguage: "ko-KR",
    },
    {
      "@type": "ProfilePage",
      "@id": `${SITE_URL}/#profile`,
      url: SITE_URL,
      name: "심우현 개발자 포트폴리오",
      isPartOf: { "@id": `${SITE_URL}/#website` },
      about: { "@id": `${SITE_URL}/#person` },
      inLanguage: "ko-KR",
    },
    {
      "@type": "Person",
      "@id": `${SITE_URL}/#person`,
      name: "심우현",
      alternateName: [
        "심우현 개발자",
        "심우현 포트폴리오",
        "Sim Woohyun",
        "simwoohyun",
        "Woohyun Sim",
      ],
      url: SITE_URL,
      image: `${SITE_URL}/images/profile.jpg`,
      jobTitle: "FullStack SW Developer",
      description:
        "React 프론트엔드, FastAPI, RAG 기반 AI 검색, AI Agent 개발 경험을 보유한 개발자.",
      email: "wmr06244@gmail.com",
      sameAs: [
        "https://github.com/neverleaveualong",
        SITE_URL,
      ],
      worksFor: {
        "@type": "Organization",
        name: "하이퍼스타",
      },
      hasOccupation: {
        "@type": "Occupation",
        name: "FullStack SW Developer",
        occupationLocation: {
          "@type": "Country",
          name: "South Korea",
        },
        skills:
          "React, TypeScript, Next.js, FastAPI, PostgreSQL, RAG Pipeline, AI Agent",
      },
      knowsAbout: [
        "React",
        "TypeScript",
        "Next.js",
        "FastAPI",
        "PostgreSQL",
        "RAG Pipeline",
        "AI Agent",
        "Claude Code",
        "B2B SaaS",
        "LangChain",
        "Pinecone",
      ],
      alumniOf: {
        "@type": "CollegeOrUniversity",
        name: "강원대학교",
        sameAs: "https://www.kangwon.ac.kr",
      },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ko"
      className={`${geistMono.variable} antialiased`}
    >
      <head>
        <meta name="google-site-verification" content="KsQG-sXZi_XuKDhRFGMviiNTyPpMqA3pf3S0n6AwYG4" />
        <meta name="naver-site-verification" content="2a2bb203e6ebe00395768538bd2aa4b700267d65" />
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
