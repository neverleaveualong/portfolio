"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  ExternalLink,
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
    image: "/project-images/techlens.jpg",
    color: "#06b6d4",
  },
  {
    stack: ["Next.js", "FastAPI", "LangChain", "Pinecone", "OpenAI", "Docker"],
    github: "https://github.com/neverleaveualong/TechDocs",
    demo: "https://techdocs-app.vercel.app",
    image: "/project-images/techdocs.jpg",
    color: "#6366f1",
  },
  {
    stack: ["React 19", "TypeScript", "Zustand", "TanStack Query", "Tailwind", "Vitest"],
    github: "https://github.com/neverleaveualong/PlayceV",
    demo: "https://playce-app.vercel.app",
    image: "/project-images/playce.jpg",
    color: "#10b981",
  },
  {
    stack: ["React 19", "TypeScript", "Zustand", "React Query", "Tailwind", "AWS"],
    demo: "https://hyper-star.org",
    image: "/project-images/hyperstar.jpg",
    color: "#f59e0b",
  },
];

const projectOrder = [3, 1, 0, 2];

export default function Projects() {
  const { t } = useApp();

  return (
    <section id="projects" className="relative px-4 sm:px-6 py-14 sm:py-16">
      <div className="absolute top-0 right-0 h-[500px] w-[500px] rounded-full bg-accent/3 blur-[150px]" />

      <div className="relative mx-auto max-w-5xl">
        <SectionHeader label={t.projects.label} title={t.projects.title} />

        <div className="space-y-6">
          {projectOrder.map((projectIndex, i) => {
            const project = t.projects.items[projectIndex];
            const meta = projectMeta[projectIndex];
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
                      <p className="mt-1 text-sm text-muted"><ScrambleText text={project.subtitle} speed={12} /></p>

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

                    {meta.image && (
                      <div className="mb-5 overflow-hidden rounded-xl border border-border bg-background/40">
                        <Image
                          src={meta.image}
                          alt={`${project.title} screenshot`}
                          width={1280}
                          height={720}
                          className="h-auto w-full object-cover"
                          sizes="(max-width: 768px) 100vw, 896px"
                        />
                      </div>
                    )}

                    <div className="mb-2 text-xs font-semibold uppercase tracking-[0.18em] text-accent">
                      {t.projects.overviewLabel}
                    </div>
                    <p className="mb-4 text-sm leading-7 text-muted sm:text-base">
                      {project.description}
                    </p>

                    <div className="mb-2 text-xs font-semibold uppercase tracking-[0.18em] text-accent">
                      {t.projects.currentStateLabel}
                    </div>
                    <p className="mb-4 rounded-lg bg-background/40 px-3 py-2 text-sm leading-6 text-foreground/80 sm:text-base">
                      {project.achievements[0]}
                    </p>

                    <div className="mb-2 text-xs font-semibold uppercase tracking-[0.18em] text-accent">
                      {t.projects.problemLabel}
                    </div>
                    <p className="mb-4 rounded-lg bg-background/40 px-3 py-2 text-sm leading-6 text-foreground/80 sm:text-base">
                      {project.achievements[1]}
                    </p>

                    <div className="mb-2 text-xs font-semibold uppercase tracking-[0.18em] text-accent">
                      {t.projects.solutionLabel}
                    </div>
                    <ul className="mb-4 grid gap-2">
                      {project.achievements.slice(2).map((h, j) => (
                        <li
                          key={j}
                          className="list-disc rounded-lg bg-background/40 px-3 py-2 pl-7 text-sm leading-6 text-foreground/80 marker:text-accent sm:text-base"
                        >
                          {h}
                        </li>
                      ))}
                    </ul>

                    <div className="mb-2 text-xs font-semibold uppercase tracking-[0.18em] text-accent">
                      {t.projects.impactLabel}
                    </div>
                    <ul className="mb-4 grid gap-2">
                      {project.role.map((h, j) => (
                        <li
                          key={j}
                          className="list-disc rounded-lg bg-background/40 px-3 py-2 pl-7 text-sm leading-6 text-foreground/80 marker:text-accent sm:text-base"
                        >
                          {h}
                        </li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap gap-2">
                      {meta.stack.map((tech) => (
                        <span
                          key={tech}
                          className="rounded-md border border-border px-2.5 py-1 text-xs font-medium text-muted transition-colors hover:text-foreground"
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
