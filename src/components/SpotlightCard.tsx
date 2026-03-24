"use client";

import { useRef, ReactNode } from "react";

interface Props {
  children: ReactNode;
  className?: string;
  color?: string;
}

export default function SpotlightCard({
  children,
  className = "",
  color = "rgba(99, 102, 241, 0.08)",
}: Props) {
  const ref = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    el.style.setProperty("--spotlight-x", `${x}px`);
    el.style.setProperty("--spotlight-y", `${y}px`);
  };

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      className={`spotlight-card ${className}`}
      style={
        {
          "--spotlight-color": color,
        } as React.CSSProperties
      }
    >
      {children}
    </div>
  );
}
