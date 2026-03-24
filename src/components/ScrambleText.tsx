"use client";

import { useState, useEffect, useRef, useCallback } from "react";

const CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%&*";

interface Props {
  text: string;
  className?: string;
  as?: "span" | "h1" | "h2" | "h3" | "p" | "div";
  speed?: number; // ms per character settle (default 25)
}

export default function ScrambleText({
  text,
  className = "",
  as: Tag = "span",
  speed = 25,
}: Props) {
  const [display, setDisplay] = useState(text);
  const prevText = useRef(text);
  const frameRef = useRef<number | null>(null);

  const scramble = useCallback(
    (from: string, to: string) => {
      // Cancel any running animation
      if (frameRef.current) cancelAnimationFrame(frameRef.current);

      const maxLen = Math.max(from.length, to.length);
      let settled = 0;
      const startTime = performance.now();

      const step = (now: number) => {
        const elapsed = now - startTime;
        // How many characters should be settled by now
        settled = Math.min(Math.floor(elapsed / speed), maxLen);

        let result = "";
        for (let i = 0; i < maxLen; i++) {
          if (i < settled) {
            // Settled — show target character
            result += to[i] ?? "";
          } else if (i < to.length) {
            // Still scrambling — show random char (preserve spaces)
            result += to[i] === " " ? " " : CHARS[Math.floor(Math.random() * CHARS.length)];
          }
        }

        setDisplay(result);

        if (settled < maxLen) {
          frameRef.current = requestAnimationFrame(step);
        } else {
          setDisplay(to);
        }
      };

      frameRef.current = requestAnimationFrame(step);
    },
    [speed]
  );

  useEffect(() => {
    if (text !== prevText.current) {
      scramble(prevText.current, text);
      prevText.current = text;
    }
  }, [text, scramble]);

  // Cleanup
  useEffect(() => {
    return () => {
      if (frameRef.current) cancelAnimationFrame(frameRef.current);
    };
  }, []);

  return <Tag className={className}>{display}</Tag>;
}
