"use client";

import { motion } from "framer-motion";
import {
  ExternalLink,
  ChevronRight,
  Sparkles,
  CheckCircle2,
  Rocket,
} from "lucide-react";
import { GithubIcon } from "./icons";
import { useApp } from "@/context/AppContext";
import ScrambleText from "./ScrambleText";
import SectionHeader from "./SectionHeader";
import AnimatedSection from "./AnimatedSection";

const projectMeta = [
  {
    stack: ["React 18", "TypeScript", "Chart.js", "Express", "PostgreSQL", "Zod"],
    github: "https://github.com/Douzone-Keycom-Internship-woohyun-2025",
    demo: "https://techlens-app.vercel.app/",
    color: "#06b6d4",
  },
  {
    stack: ["Next.js", "FastAPI", "LangChain", "Pinecone", "OpenAI", "Docker"],
    github: "https://github.com/neverleaveualong/TechDocs",
    demo: "https://techdocs-app.vercel.app",
    color: "#6366f1",
  },
  {
    stack: ["React 19", "TypeScript", "Zustand", "TanStack Query", "Tailwind", "Vitest"],
    github: "https://github.com/neverleaveualong/PlayceV",
    demo: "https://playce-app.vercel.app",
    color: "#10b981",
  },
  {
    stack: ["React 19", "TypeScript", "Zustand", "React Query", "Tailwind", "AWS"],
    demo: "https://hyper-star.org",
    color: "#f59e0b",
  },
];

export default function Projects() {
  const { t } = useApp();

  return (
    <section id="projects" className="relative px-4 sm:px-6 py-14 sm:py-16">
      <div className="absolute top-0 right-0 h-[500px] w-[500px] rounded-full bg-accent/3 blur-[150px]" />

      <div className="relative mx-auto max-w-5xl">
        <SectionHeader label={t.projects.label} title={t.projects.title} />

        <div className="space-y-6">
          {t.projects.items.map((project, i) => {
            const meta = projectMeta[i];
            return (
              <AnimatedSection key={i} delay={i * 0.1}>
                <motion.div
                  whileHover={{ y: -2 }}
                  transition={{ duration: 0.2 }}
                  className="glass rounded-2xl overflow-hidden transition-all hover:shadow-xl spotlight-card"
                  style={{ "--spotlight-color": `${meta.color}12` } as React.CSSProperties}
                >
                  <div
                    className="h-1 w-full"
                    style={{ background: `linear-gradient(90deg, ${meta.color}, transparent)` }}
                  />

                  <div className="p-5 sm:p-8">
                    <div className="mb-4">
                      <div className="mb-2 flex flex-wrap items-center gap-2">
                        <span className="rounded-full border border-border px-3 py-0.5 text-[11px] text-muted">
                          {project.type}
                        </span>
                        <span
                          className="inline-flex items-center gap-1 rounded-full px-2.5 py-0.5 text-[11px] font-medium"
                          style={{ backgroundColor: `${meta.color}15`, color: meta.color }}
                        >
                          {project.status === "In Progress" ? (
                            <Sparkles size={10} />
                          ) : project.status === "Production" ? (
                            <Rocket size={10} />
                          ) : (
                            <CheckCircle2 size={10} />
                          )}
                          {project.status}
                        </span>
                      </div>
                      <h3 className="text-xl sm:text-2xl font-bold"><ScrambleText text={project.title} speed={25} /></h3>
                      <p className="mt-1 text-xs sm:text-sm text-muted"><ScrambleText text={project.subtitle} speed={12} /></p>

                      <div className="flex items-center gap-2 mt-3">
                        {meta.github && (
                          <a
                            href={meta.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 rounded-lg border border-border px-3 py-1.5 text-xs text-muted transition-all hover:border-muted hover:text-foreground"
                          >
                            <GithubIcon size={13} />
                            Code
                          </a>
                        )}
                        {meta.demo && (
                          <a
                            href={meta.demo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs font-medium text-white transition-all hover:opacity-90"
                            style={{ backgroundColor: meta.color }}
                          >
                            <ExternalLink size={13} />
                            {meta.demo.includes("hyper-star") ? "Site" : "Demo"}
                          </a>
                        )}
                      </div>
                    </div>

                    <p className="mb-4 text-xs sm:text-sm leading-relaxed text-muted">
                      {project.description}
                    </p>

                    <div className="mb-4 grid gap-1.5 sm:gap-2 sm:grid-cols-2">
                      {project.highlights.map((h, j) => (
                        <div
                          key={j}
                          className="flex items-start gap-2 rounded-lg bg-background/40 px-2.5 py-1.5 sm:px-3 sm:py-2 text-[12px] sm:text-[13px] text-muted"
                        >
                          <ChevronRight
                            size={14}
                            className="mt-0.5 shrink-0"
                            style={{ color: meta.color }}
                          />
                          <span>{h}</span>
                        </div>
                      ))}
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {meta.stack.map((tech) => (
                        <span
                          key={tech}
                          className="rounded-md border border-border px-2.5 py-1 text-[11px] font-medium text-muted transition-colors hover:text-foreground"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </AnimatedSection>
            );
          })}
        </div>
      </div>
    </section>
  );
}
