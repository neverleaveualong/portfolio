"use client";

import { useState, useEffect } from "react";

interface Props {
  texts: readonly string[];
  className?: string;
}

export default function TypingText({ texts, className = "" }: Props) {
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = texts[textIndex];
    let timeout: NodeJS.Timeout;

    if (!isDeleting && charIndex < current.length) {
      timeout = setTimeout(() => setCharIndex((c) => c + 1), 50);
    } else if (!isDeleting && charIndex === current.length) {
      timeout = setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && charIndex > 0) {
      timeout = setTimeout(() => setCharIndex((c) => c - 1), 30);
    } else if (isDeleting && charIndex === 0) {
      setIsDeleting(false);
      setTextIndex((i) => (i + 1) % texts.length);
    }

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, textIndex, texts]);

  // Reset when texts change (language switch)
  useEffect(() => {
    setTextIndex(0);
    setCharIndex(0);
    setIsDeleting(false);
  }, [texts]);

  return (
    <span className={className}>
      {texts[textIndex].slice(0, charIndex)}
      <span className="typing-cursor" />
    </span>
  );
}
