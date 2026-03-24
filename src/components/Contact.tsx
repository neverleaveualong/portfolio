"use client";

import { useState } from "react";
import { Mail, ArrowUpRight, Copy, Check } from "lucide-react";
import { GithubIcon } from "./icons";
import { useApp } from "@/context/AppContext";
import ScrambleText from "./ScrambleText";
import AnimatedSection from "./AnimatedSection";

const EMAIL = "wmr06244@naver.com";

export default function Contact() {
  const { t } = useApp();
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      window.location.href = `mailto:${EMAIL}`;
    }
  };

  return (
    <section id="contact" className="relative px-4 sm:px-6 py-14 sm:py-16">
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 h-[400px] w-[400px] rounded-full bg-accent/5 blur-[120px]" />

      <div className="relative mx-auto max-w-2xl text-center">
        <AnimatedSection>
          <span className="mb-3 inline-block font-mono text-xs uppercase tracking-widest text-accent">
            {t.contact.label}
          </span>
          <h2 className="mb-4 text-2xl font-bold tracking-tight sm:text-4xl">
            <ScrambleText text={t.contact.title} speed={15} />
          </h2>
          <p className="mb-2 text-muted">{t.contact.description}</p>
          <p className="mb-10 text-sm text-muted/70">{t.contact.sub}</p>

          <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center gap-3 w-full sm:w-auto">
            <a
              href={`mailto:${EMAIL}`}
              className="group inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background transition-all hover:shadow-lg hover:shadow-accent/10"
            >
              <Mail size={16} />
              {t.contact.emailBtn}
              <ArrowUpRight
                size={14}
                className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </a>
            <button
              onClick={handleCopyEmail}
              className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-3 text-sm text-muted transition-all hover:border-muted hover:text-foreground"
            >
              {copied ? (
                <>
                  <Check size={14} className="text-accent-emerald" />
                  {t.contact.copied}
                </>
              ) : (
                <>
                  <Copy size={14} />
                  {EMAIL}
                </>
              )}
            </button>
            <a
              href="https://github.com/neverleaveualong"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-3 text-sm text-muted transition-all hover:border-muted hover:text-foreground"
            >
              <GithubIcon size={16} />
              GitHub
            </a>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
