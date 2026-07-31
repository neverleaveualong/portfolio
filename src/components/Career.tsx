"use client";

import { useApp } from "@/context/AppContext";
import Image from "next/image";
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

const companyLogoMap = {
  hyperstar: "https://www.hyper-star.org/favicon.ico",
  douzone: "https://en.douzone.com/en/images/img_signature_eng%402x.png",
};

const companyLinkedInMap = {
  hyperstar: "https://www.linkedin.com/company/hyperstar-ai",
  douzone: "https://kr.linkedin.com/company/douzone",
};

const getCompanyBrand = (company: string) => {
  if (company.includes("하이퍼스타") || company.includes("HyperStar")) {
    return { logo: companyLogoMap.hyperstar, linkedIn: companyLinkedInMap.hyperstar };
  }
  if (company.includes("더존") || company.includes("Douzone")) {
    return { logo: companyLogoMap.douzone, linkedIn: companyLinkedInMap.douzone };
  }
  return null;
};

export default function Career() {
  const { t } = useApp();
  const careers = [...t.career.items].sort((a, b) => {
    const getPriority = (period: string) => {
      if (period.includes("예정") || period.includes("Present") || period.includes("現在")) return 0;
      if (period.includes("2025.12") || period.includes("Dec 2025") || period.includes("2025.12")) return 1;
      return 2;
    };

    return getPriority(a.period) - getPriority(b.period);
  });

  return (
    <section id="career" className="relative px-4 sm:px-6 py-14 sm:py-16">
      <div className="mx-auto max-w-4xl">
        <SectionHeader label={t.career.label} title={t.career.title} />

        <div className="space-y-4">
          {careers.map((career, i) => {
            const colors = typeColorMap[career.type] || defaultColor;
            const brand = getCompanyBrand(career.company);
            return (
              <AnimatedSection key={`${career.company}-${career.period}`} delay={i * 0.08}>
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
                    {brand && (
                      <a
                        href={brand.linkedIn}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${career.company} LinkedIn page`}
                        className="flex h-10 w-10 shrink-0 items-center justify-center overflow-hidden rounded-xl border border-border bg-white p-1.5 transition-opacity hover:opacity-80"
                      >
                        <Image
                          src={brand.logo}
                          alt={`${career.company} logo`}
                          width={32}
                          height={32}
                          unoptimized
                          className="h-full w-full object-contain"
                        />
                      </a>
                    )}
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

                </div>
              </AnimatedSection>
            );
          })}
        </div>
      </div>
    </section>
  );
}
