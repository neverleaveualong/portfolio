"use client";

import { useEffect, useRef, useState } from "react";

interface Props {
  value: string;
  className?: string;
}

export default function CountUp({ value, className = "" }: Props) {
  const [display, setDisplay] = useState("0");
  const ref = useRef<HTMLSpanElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    hasAnimated.current = false;
    setDisplay("0");
  }, [value]);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          animate();
        }
      },
      { threshold: 0.5 }
    );

    observer.observe(el);
    return () => observer.disconnect();

    function animate() {
      // Extract number and suffix (e.g. "4+" -> 4, "+")
      const match = value.match(/^(\d+)(.*)$/);
      if (!match) {
        setDisplay(value);
        return;
      }

      const target = parseInt(match[1]);
      const suffix = match[2];
      const duration = 1200;
      const steps = 30;
      const stepTime = duration / steps;
      let current = 0;

      const timer = setInterval(() => {
        current += Math.ceil(target / steps);
        if (current >= target) {
          current = target;
          clearInterval(timer);
        }
        setDisplay(`${current}${suffix}`);
      }, stepTime);
    }
  }, [value]);

  return (
    <span ref={ref} className={className}>
      {display}
    </span>
  );
}
