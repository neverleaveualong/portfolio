"use client";

import { useApp } from "@/context/AppContext";
import ScrambleText from "./ScrambleText";
import SectionHeader from "./SectionHeader";
import AnimatedSection from "./AnimatedSection";

const typeColorMap: Record<string, { bg: string; text: string }> = {
  "정규직": { bg: "bg-accent-emerald/10", text: "text-accent-emerald" },
  "Full-time": { bg: "bg-accent-emerald/10", text: "text-accent-emerald" },
  "正社員": { bg: "bg-accent-emerald/10", text: "text-accent-emerald" },
  "인턴": { bg: "bg-accent-cyan/10", text: "text-accent-cyan" },
  "Intern": { bg: "bg-accent-cyan/10", text: "text-accent-cyan" },
  "インターン": { bg: "bg-accent-cyan/10", text: "text-accent-cyan" },
  "교육": { bg: "bg-accent/10", text: "text-accent" },
  "Program": { bg: "bg-accent/10", text: "text-accent" },
  "教育": { bg: "bg-accent/10", text: "text-accent" },
  "근무": { bg: "bg-amber-500/10", text: "text-amber-400" },
  "Staff": { bg: "bg-amber-500/10", text: "text-amber-400" },
  "勤務": { bg: "bg-amber-500/10", text: "text-amber-400" },
};

const defaultColor = { bg: "bg-muted/10", text: "text-muted" };

const stacks = [
  ["React", "TypeScript", "FastAPI", "GitHub Actions", "Claude Actions", "Playwright"],
  ["React", "TypeScript", "Express", "PostgreSQL", "KIPRIS API", "Zustand"],
];

export default function Career() {
  const { t } = useApp();

  return (
    <section id="career" className="relative px-4 sm:px-6 py-14 sm:py-16">
      <div className="mx-auto max-w-4xl">
        <SectionHeader label={t.career.label} title={t.career.title} />

        <div className="space-y-4">
          {t.career.items.map((career, i) => {
            const colors = typeColorMap[career.type] || defaultColor;
            return (
              <AnimatedSection key={i} delay={i * 0.08}>
                <div className="glass group rounded-2xl p-4 sm:p-6 transition-all hover:bg-card-hover">
                  <div className="flex flex-wrap items-center gap-2 mb-3">
                    <span className={`rounded-full px-3 py-0.5 text-[11px] font-medium ${colors.bg} ${colors.text}`}>
                      {career.type}
                    </span>
                    <span className="font-mono text-[11px] text-muted">
                      {career.period}
                    </span>
                  </div>

                  <div className="mb-1 flex flex-wrap items-baseline gap-3">
                    <h3 className="text-lg font-bold"><ScrambleText text={career.company} speed={20} /></h3>
                    <span className="text-sm font-medium text-accent-cyan">
                      <ScrambleText text={career.role} speed={20} />
                    </span>
                  </div>

                  <div className="mb-4 space-y-3 text-sm leading-6">
                    <div>
                      <p className="mb-1 text-xs font-semibold text-accent">{t.career.overviewLabel}</p>
                      <p className="text-muted">{career.description}</p>
                    </div>
                    <div>
                      <p className="mb-1 text-xs font-semibold text-accent">{t.career.roleLabel}</p>
                      <p className="text-muted">{career.role}</p>
                    </div>
                  </div>

                  <p className="mb-1 text-xs font-semibold text-accent">{t.career.achievementLabel}</p>
                  <ul className="mb-4 grid gap-2">
                    {career.highlights.map((h, j) => (
                      <li key={j} className="list-disc pl-2 text-sm leading-6 text-muted marker:text-accent">
                        {h}
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-1.5">
                    {stacks[i]?.map((s) => (
                      <span key={s} className="rounded-md border border-border/60 px-2 py-0.5 text-[10px] text-muted/70">
                        {s}
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
