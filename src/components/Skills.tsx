"use client";

import { Code2, Server, Brain } from "lucide-react";
import Image from "next/image";
import { skills } from "@/data/profile";
import { useApp } from "@/context/AppContext";
import SectionHeader from "./SectionHeader";
import AnimatedSection from "./AnimatedSection";

const iconMap = { frontend: Code2, backend: Server, ai: Brain };
const colorMap: Record<string, string> = {
  frontend: "#6366f1", backend: "#06b6d4", ai: "#a855f7",
};

const techIconMap: Record<string, string> = {
  JavaScript: "https://cdn.simpleicons.org/javascript/F7DF1E",
  TypeScript: "https://cdn.simpleicons.org/typescript/3178C6",
  React: "https://cdn.simpleicons.org/react/61DAFB",
  "Next.js": "https://cdn.simpleicons.org/nextdotjs/FFFFFF",
  "React Query": "https://cdn.simpleicons.org/reactquery/FF4154",
  Zustand: "https://cdn.simpleicons.org/zustand/FFFFFF",
  "Tailwind CSS": "https://cdn.simpleicons.org/tailwindcss/06B6D4",
  Playwright: "https://cdn.simpleicons.org/playwright/2EAD33",
  Express: "https://cdn.simpleicons.org/express/FFFFFF",
  FastAPI: "https://cdn.simpleicons.org/fastapi/009688",
  Python: "https://cdn.simpleicons.org/python/3776AB",
  LangChain: "https://cdn.simpleicons.org/langchain/1C3C3C",
  LangGraph: "https://cdn.simpleicons.org/langchain/1C3C3C",
  Pinecone: "https://cdn.simpleicons.org/pinecone/FFFFFF",
};

const techFallbackMap: Record<string, string> = {
  JavaScript: "JS", TypeScript: "TS", React: "R", "Next.js": "N",
  "React Query": "RQ", Zustand: "Z", "Tailwind CSS": "TW", Playwright: "PW",
  Express: "EX", FastAPI: "FA", Python: "PY", LangChain: "LC", LangGraph: "LG", Pinecone: "PC",
};

export default function Skills() {
  const { t } = useApp();

  return (
    <section id="skills" className="relative px-4 sm:px-6 py-14 sm:py-16">
      <div className="mx-auto max-w-5xl">
        <SectionHeader label={t.skills.label} title={t.skills.title} />

        <div className="grid gap-4">
          {(Object.keys(skills) as Array<keyof typeof skills>).map((key, i) => {
            const category = skills[key];
            const Icon = iconMap[key];
            const color = colorMap[key];

            return (
              <AnimatedSection key={key} delay={i * 0.08}>
                <div className="glass group rounded-2xl p-5 transition-all hover:bg-card-hover sm:p-6">
                  <div className="mb-4 flex items-center gap-3">
                    <div
                      className="flex h-9 w-9 items-center justify-center rounded-lg"
                      style={{ backgroundColor: `${color}15` }}
                    >
                      <Icon size={18} style={{ color }} />
                    </div>
                    <h3 className="text-sm font-semibold">{category.label}</h3>
                  </div>
                  <div className="grid grid-cols-1 gap-2">
                    {category.items.map((item) => (
                      <span
                        key={item}
                        className="skill-tag flex min-h-9 items-center gap-3 rounded-lg bg-background/60 px-3 py-2 text-sm text-muted transition-colors hover:text-foreground"
                      >
                        <span className="relative flex h-6 w-6 shrink-0 items-center justify-center rounded-md border border-border bg-card p-1">
                          <span aria-hidden className="font-mono text-[9px] font-bold text-foreground">
                            {techFallbackMap[item] ?? "•"}
                          </span>
                          <Image
                            src={techIconMap[item]}
                            alt=""
                            width={16}
                            height={16}
                            unoptimized
                            loading="lazy"
                            className="absolute inset-1 h-4 w-4 object-contain"
                          />
                        </span>
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </AnimatedSection>
            );
          })}
        </div>
      </div>
    </section>
  );
}
