"use client";

import { Code2, Server, Brain, Cloud } from "lucide-react";
import { skills } from "@/data/profile";
import { useApp } from "@/context/AppContext";
import SectionHeader from "./SectionHeader";
import AnimatedSection from "./AnimatedSection";

const iconMap = { frontend: Code2, backend: Server, ai: Brain, devops: Cloud };
const colorMap: Record<string, string> = {
  frontend: "#6366f1", backend: "#06b6d4", ai: "#a855f7", devops: "#10b981",
};

export default function Skills() {
  const { t } = useApp();

  return (
    <section id="skills" className="relative px-4 sm:px-6 py-14 sm:py-16">
      <div className="mx-auto max-w-5xl">
        <SectionHeader label={t.skills.label} title={t.skills.title} />

        <div className="grid gap-4 sm:grid-cols-2">
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
                  <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
                    {category.items.map((item) => (
                      <span
                        key={item}
                        className="skill-tag flex min-h-8 items-center justify-center rounded-lg bg-background/60 px-2.5 py-1.5 text-center text-[11px] leading-tight text-muted transition-colors hover:text-foreground sm:text-xs"
                      >
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
