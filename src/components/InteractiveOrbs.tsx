"use client";

import { useEffect, useRef } from "react";

export default function InteractiveOrbs() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const orb1 = container.querySelector(".orb-1") as HTMLElement;
      const orb2 = container.querySelector(".orb-2") as HTMLElement;

      if (orb1) {
        orb1.style.transform = `translate(${x * 0.04}px, ${y * 0.04}px)`;
      }
      if (orb2) {
        orb2.style.transform = `translate(${-x * 0.03}px, ${-y * 0.03}px)`;
      }
    };

    container.addEventListener("mousemove", handleMouseMove);
    return () => container.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div ref={containerRef} className="absolute inset-0 overflow-hidden">
      <div className="orb orb-1 top-[15%] left-[20%] h-[350px] w-[350px] bg-accent" />
      <div className="orb orb-2 top-[40%] right-[15%] h-[300px] w-[300px] bg-accent-cyan" />
      <div className="orb top-[60%] left-[50%] h-[200px] w-[200px] bg-accent-emerald" />
    </div>
  );
}
