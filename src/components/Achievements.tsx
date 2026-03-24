"use client";

import { Trophy, GraduationCap, Cloud } from "lucide-react";
import { useApp } from "@/context/AppContext";
import ScrambleText from "./ScrambleText";
import SectionHeader from "./SectionHeader";
import AnimatedSection from "./AnimatedSection";

const iconMap: Record<string, typeof Trophy> = {
  scholarship: GraduationCap,
  prize: Trophy,
  cloud: Cloud,
};
const colorMap: Record<string, string> = {
  scholarship: "#6366f1",
  prize: "#f59e0b",
  cloud: "#10b981",
};

export default function Achievements() {
  const { t } = useApp();

  return (
    <section className="relative px-4 sm:px-6 py-10 sm:py-12">
      <div className="mx-auto max-w-5xl">
        <SectionHeader label={t.achievements.label} title={t.achievements.title} />

        <div className="grid gap-4 sm:grid-cols-3">
          {t.achievements.items.map((item, i) => {
            const Icon = iconMap[item.icon] || Trophy;
            const color = colorMap[item.icon] || "#6366f1";
            return (
              <AnimatedSection key={i} delay={i * 0.1}>
                <div className="glass rounded-2xl p-6 text-center transition-all hover:bg-card-hover">
                  <div
                    className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl"
                    style={{ backgroundColor: `${color}15` }}
                  >
                    <Icon size={22} style={{ color }} />
                  </div>
                  <h3 className="mb-2 text-sm font-bold"><ScrambleText text={item.title} speed={18} /></h3>
                  <p className="text-xs text-muted">{item.description}</p>
                </div>
              </AnimatedSection>
            );
          })}
        </div>
      </div>
    </section>
  );
}
