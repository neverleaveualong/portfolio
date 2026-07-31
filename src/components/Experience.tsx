"use client";

import { useApp } from "@/context/AppContext";
import SectionHeader from "./SectionHeader";
import AnimatedSection from "./AnimatedSection";

const typeColorMap: Record<string, { bg: string; text: string }> = {
  "교육": { bg: "bg-accent/10", text: "text-accent" },
  "Program": { bg: "bg-accent/10", text: "text-accent" },
  "教育": { bg: "bg-accent/10", text: "text-accent" },
  "근무": { bg: "bg-amber-500/10", text: "text-amber-400" },
  "Staff": { bg: "bg-amber-500/10", text: "text-amber-400" },
  "勤務": { bg: "bg-amber-500/10", text: "text-amber-400" },
};

const defaultColor = { bg: "bg-muted/10", text: "text-muted" };

export default function Experience() {
  const { t } = useApp();

  return (
    <section id="experience" className="relative px-4 sm:px-6 py-14 sm:py-16">
      <div className="mx-auto max-w-4xl">
        <SectionHeader label={t.experience.label} title={t.experience.title} />

        <div className="grid gap-4 md:grid-cols-2">
          {t.experience.items.map((item, i) => {
            const colors = typeColorMap[item.type] || defaultColor;
            return (
              <AnimatedSection key={item.title} delay={i * 0.08}>
                <div className="glass h-full rounded-2xl p-4 sm:p-6 transition-all hover:bg-card-hover">
                  <div className="mb-3 flex flex-wrap items-center gap-2">
                    <span className={`rounded-full px-3 py-0.5 text-[11px] font-medium ${colors.bg} ${colors.text}`}>
                      {item.type}
                    </span>
                    <span className="font-mono text-[11px] text-muted">{item.period}</span>
                  </div>

                  <div className="mb-1 flex flex-wrap items-baseline gap-3">
                    <h3 className="text-lg font-bold">{item.title}</h3>
                    <span className="text-sm font-medium text-accent-cyan">{item.role}</span>
                  </div>

                  <div className="mb-4 space-y-3 text-sm leading-6">
                    <div>
                      <p className="mb-1 text-xs font-semibold text-accent">{t.experience.overviewLabel}</p>
                      <p className="text-muted">{item.description}</p>
                    </div>
                    <div>
                      <p className="mb-1 text-xs font-semibold text-accent">{t.experience.roleLabel}</p>
                      <p className="text-muted">{item.role}</p>
                    </div>
                  </div>

                  <p className="mb-1 text-xs font-semibold text-accent">{t.experience.achievementLabel}</p>
                  <ul className="grid gap-2">
                    {item.highlights.map((h) => (
                      <li key={h} className="list-disc pl-2 text-sm leading-6 text-muted marker:text-accent">
                        {h}
                      </li>
                    ))}
                  </ul>
                </div>
              </AnimatedSection>
            );
          })}
        </div>
      </div>
    </section>
  );
}
