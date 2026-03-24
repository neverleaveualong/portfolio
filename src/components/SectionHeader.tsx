"use client";

import AnimatedSection from "./AnimatedSection";
import ScrambleText from "./ScrambleText";

interface Props {
  label: string;
  title: string;
}

export default function SectionHeader({ label, title }: Props) {
  return (
    <AnimatedSection className="mb-12 text-center">
      <span className="mb-3 inline-block font-mono text-xs uppercase tracking-widest text-accent">
        <ScrambleText text={label} speed={20} />
      </span>
      <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
        <ScrambleText text={title} speed={18} />
      </h2>
    </AnimatedSection>
  );
}
