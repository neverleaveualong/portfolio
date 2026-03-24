"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowDown, Mail, Zap } from "lucide-react";
import { GithubIcon } from "./icons";
import { useApp } from "@/context/AppContext";
import TypingText from "./TypingText";
import CountUp from "./CountUp";
import ScrambleText from "./ScrambleText";
import InteractiveOrbs from "./InteractiveOrbs";

const fade = (delay: number) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, delay, ease: "easeOut" as const },
});

export default function Hero() {
  const { t } = useApp();

  return (
    <section
      id="hero"
      className="relative flex min-h-[90vh] flex-col items-center justify-center overflow-hidden px-4 sm:px-6 pt-20 pb-10"
    >
      <div className="grid-pattern absolute inset-0 opacity-40" />
      <InteractiveOrbs />

      <div className="relative z-10 mx-auto max-w-5xl">
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
          <div className="text-center md:text-left">
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

            <motion.p {...fade(0.2)} className="mb-3 font-mono text-sm text-accent">
              <ScrambleText text={t.hero.title} speed={15} />
            </motion.p>

            <motion.div
              {...fade(0.25)}
              className="mb-4 h-8 text-base text-muted sm:text-lg"
            >
              <TypingText texts={t.hero.typingTexts} />
            </motion.div>

            <motion.p
              {...fade(0.3)}
              className="mb-6 max-w-xl text-[13px] leading-relaxed text-muted/70"
            >
              <ScrambleText text={t.hero.description} speed={8} />
            </motion.p>

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
                href="mailto:wmr06244@naver.com"
                className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-2.5 text-sm text-muted transition-all hover:border-muted hover:text-foreground"
              >
                <Mail size={14} />
                {t.hero.email}
              </a>
            </motion.div>
          </div>
        </div>

        {/* Highlights */}
        <motion.div {...fade(0.45)} className="mt-10 glass rounded-2xl p-4 sm:p-5">
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {t.highlights.map((h, i) => (
              <div key={i} className="flex items-start gap-2.5 text-[13px] text-muted">
                <Zap size={14} className="mt-0.5 shrink-0 text-accent" />
                <span>{h}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Stats */}
        <motion.div
          {...fade(0.55)}
          className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-4"
        >
          {t.stats.map((stat, i) => (
            <div
              key={i}
              className="glass rounded-xl px-3 py-3 sm:px-5 sm:py-4 text-center transition-colors hover:bg-card-hover"
            >
              <div className="text-2xl font-bold text-foreground">
                <CountUp value={stat.value} />
                {stat.unit && (
                  <span className="text-xs font-normal text-muted ml-0.5">
                    {stat.unit}
                  </span>
                )}
              </div>
              <div className="mt-1 text-[11px] text-muted">{stat.label}</div>
            </div>
          ))}
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
