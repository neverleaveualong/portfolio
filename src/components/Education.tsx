"use client";

import { GraduationCap, Award, BookOpen } from "lucide-react";
import { useApp } from "@/context/AppContext";
import SectionHeader from "./SectionHeader";
import AnimatedSection from "./AnimatedSection";

export default function Education() {
  const { t } = useApp();
  const edu = t.education;

  return (
    <section id="education" className="relative px-4 sm:px-6 py-20 sm:py-24">
      <div className="mx-auto max-w-5xl">
        <SectionHeader label={edu.label} title={edu.title} />

        <div className="grid gap-4 lg:grid-cols-3">
          <AnimatedSection>
            <div className="glass rounded-2xl p-6 transition-all hover:bg-card-hover h-full">
              <div className="mb-5 flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-accent/10">
                  <GraduationCap size={18} className="text-accent" />
                </div>
                <h3 className="text-sm font-semibold">{edu.universityLabel}</h3>
              </div>
              <h4 className="text-base font-bold mb-3">{edu.universityName}</h4>
              <div className="space-y-2">
                <div className="rounded-lg bg-background/40 px-3 py-2.5">
                  <p className="text-xs font-medium">{edu.major}</p>
                  <p className="text-[11px] text-muted mt-0.5">{edu.majorLabel}</p>
                </div>
                <div className="rounded-lg bg-background/40 px-3 py-2.5">
                  <p className="text-xs font-medium">{edu.minor}</p>
                  <p className="text-[11px] text-muted mt-0.5">{edu.minorLabel}</p>
                </div>
              </div>
              <div className="mt-4 flex items-center justify-between">
                <span className="font-mono text-[11px] text-muted">{edu.period}</span>
                <span className="rounded-full bg-accent-emerald/10 px-2.5 py-0.5 text-[11px] font-medium text-accent-emerald">
                  {edu.status}
                </span>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
            <div className="glass rounded-2xl p-6 transition-all hover:bg-card-hover h-full">
              <div className="mb-5 flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-accent-cyan/10">
                  <Award size={18} className="text-accent-cyan" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold">{edu.certificationsLabel}</h3>
                  <p className="text-[10px] text-muted">{edu.certifications.length}{edu.certCount}</p>
                </div>
              </div>
              <div className="space-y-2">
                {edu.certifications.map((cert) => (
                  <div key={cert.name} className="flex items-center justify-between rounded-lg bg-background/40 px-3 py-2.5">
                    <span className="text-xs font-medium">{cert.name}</span>
                    <span className="text-[10px] text-muted whitespace-nowrap ml-2">{cert.org}</span>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <div className="glass rounded-2xl p-6 transition-all hover:bg-card-hover h-full">
              <div className="mb-5 flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-accent-emerald/10">
                  <BookOpen size={18} className="text-accent-emerald" />
                </div>
                <h3 className="text-sm font-semibold">{edu.activitiesLabel}</h3>
              </div>
              <div className="space-y-2">
                {edu.activities.map((act) => (
                  <div key={act.name} className="rounded-lg bg-background/40 px-3 py-2.5">
                    <div className="flex items-start justify-between gap-2">
                      <p className="text-xs font-medium">{act.name}</p>
                      <span className="font-mono text-[10px] text-muted whitespace-nowrap">{act.period}</span>
                    </div>
                    <p className="mt-0.5 text-[11px] text-muted/70">{act.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
