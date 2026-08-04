"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowDown, ExternalLink, Mail } from "lucide-react";
import { GithubIcon, LinkedInIcon } from "./icons";
import { useApp } from "@/context/AppContext";
import TypingText from "./TypingText";
import ScrambleText from "./ScrambleText";
import InteractiveOrbs from "./InteractiveOrbs";

const fade = (delay: number) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, delay, ease: "easeOut" as const },
});

export default function Hero() {
  const { t } = useApp();
  const quickProjects = [
    {
      name: "HyperStar",
      description: "AI 인플루언서 마케팅 SaaS",
      github: null,
      demo: "https://hyper-star.org",
    },
    {
      name: "TechDocs",
      description: "AI 특허 검색 플랫폼",
      github: "https://github.com/neverleaveualong/TechDocs",
      demo: "https://techdocs-app.vercel.app",
    },
    {
      name: "TechLens",
      description: "특허 분석 B2B 솔루션",
      github: "https://github.com/Douzone-Keycom-Internship-woohyun-2025",
      demo: "https://techlens-app.vercel.app/",
    },
    {
      name: "PlayceV",
      description: "스포츠 중계 식당 탐색 서비스",
      github: "https://github.com/neverleaveualong/PlayceV",
      demo: "https://playce-app.vercel.app",
    },
  ];

  return (
    <section
      id="hero"
      className="relative flex min-h-[90vh] flex-col items-center justify-center overflow-hidden px-4 sm:px-6 pt-20 pb-10"
    >
      <div className="grid-pattern absolute inset-0 opacity-40" />
      <InteractiveOrbs />

      <div className="relative z-10 mx-auto w-[calc(100vw-2rem)] max-w-5xl min-w-0">
        <div className="flex flex-col items-center gap-6 sm:gap-10 md:flex-row md:items-start md:gap-14">
          {/* Photo */}
          <motion.div {...fade(0)} className="shrink-0">
            <div className="gradient-border relative h-44 w-34 sm:h-64 sm:w-48">
              <Image
                src="/images/profile.jpg"
                alt={t.hero.name}
                fill
                className="rounded-2xl object-cover object-top"
                priority
              />
            </div>
          </motion.div>

          {/* Text */}
          <div className="w-full min-w-0 text-center md:text-left">
            <motion.div
              {...fade(0.1)}
              className="mb-4 inline-flex items-center gap-2 rounded-full border border-border bg-card/50 px-4 py-1.5 text-xs text-muted backdrop-blur-sm"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-accent-emerald animate-pulse" />
              <ScrambleText text={t.hero.badge} speed={30} />
            </motion.div>

            <motion.h1
              {...fade(0.15)}
              className="mb-2 text-3xl font-bold tracking-tight sm:text-5xl lg:text-6xl"
            >
              <span className="gradient-text">
                <ScrambleText text={t.hero.name} speed={40} />
              </span>
            </motion.h1>

            <motion.p {...fade(0.2)} className="mb-3 font-mono text-xs text-accent sm:text-sm">
              <ScrambleText text={t.hero.title} speed={15} />
            </motion.p>

            <motion.div
              {...fade(0.25)}
              className="mb-4 h-8 text-base text-muted sm:text-lg"
            >
              <TypingText texts={t.hero.typingTexts} />
            </motion.div>

            <motion.ul
              {...fade(0.3)}
              className="hero-bullet-list mb-6 w-full max-w-xl space-y-2 text-left text-sm leading-7 text-muted sm:text-base"
            >
              {t.hero.descriptionBullets.map((bullet) => (
                <li key={bullet} className="flex min-w-0 items-start gap-2">
                  <span aria-hidden className="shrink-0 text-accent">•</span>
                  <span className="min-w-0 break-words">{bullet}</span>
                </li>
              ))}
            </motion.ul>

            <motion.div
              {...fade(0.35)}
              className="flex flex-col sm:flex-row flex-wrap items-center gap-2 sm:gap-3 justify-center md:justify-start w-full sm:w-auto"
            >
              <a
                href="#projects"
                className="group inline-flex items-center gap-2 rounded-full bg-foreground px-5 py-2.5 text-sm font-medium text-background transition-all hover:shadow-lg hover:shadow-accent/10"
              >
                <ScrambleText text={t.hero.cta} speed={30} />
                <ArrowDown
                  size={14}
                  className="transition-transform group-hover:translate-y-0.5"
                />
              </a>
              <a
                href="https://github.com/neverleaveualong"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-2.5 text-sm text-muted transition-all hover:border-muted hover:text-foreground"
              >
                <GithubIcon size={14} />
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/%EC%9A%B0%ED%98%84-%EC%8B%AC-456796324/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn profile"
                className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-2.5 text-sm text-muted transition-all hover:border-muted hover:text-foreground"
              >
                <LinkedInIcon size={14} />
                LinkedIn
              </a>
              <a
                href="mailto:wmr06244@gmail.com"
                className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-2.5 text-sm text-muted transition-all hover:border-muted hover:text-foreground"
              >
                <Mail size={14} />
                {t.hero.email}
              </a>
            </motion.div>
          </div>
        </div>

        <motion.div {...fade(0.45)} className="mt-10">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-accent">
            {t.hero.quickLinksLabel}
          </p>
          <div className="grid gap-2">
            {quickProjects.map((project) => (
              <div
                key={project.name}
                className="glass grid min-w-0 gap-2 rounded-xl px-4 py-3 transition-colors hover:bg-card-hover sm:grid-cols-[1fr_auto] sm:items-center"
              >
                <div className="min-w-0">
                  <p className="truncate text-sm font-semibold text-foreground">{project.name}</p>
                  <p className="text-sm leading-6 text-muted">{project.description}</p>
                </div>
                <div className="flex shrink-0 items-center gap-1">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${project.name} GitHub`}
                      className="flex h-8 w-8 items-center justify-center rounded-lg text-muted transition-colors hover:bg-card-hover hover:text-foreground"
                    >
                      <GithubIcon size={15} />
                    </a>
                  )}
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${project.name} Demo`}
                    className="flex h-8 w-8 items-center justify-center rounded-lg text-muted transition-colors hover:bg-card-hover hover:text-foreground"
                  >
                    <ExternalLink size={15} />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center gap-2 text-muted/30"
        >
          <span className="text-[10px] uppercase tracking-widest">Scroll</span>
          <ArrowDown size={12} />
        </motion.div>
      </motion.div>
    </section>
  );
}
