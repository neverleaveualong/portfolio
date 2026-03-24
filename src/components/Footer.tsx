"use client";

import { useApp } from "@/context/AppContext";

export default function Footer() {
  const { t } = useApp();

  return (
    <footer className="border-t border-border px-6 py-8">
      <div className="mx-auto flex max-w-5xl items-center justify-between">
        <p className="font-mono text-xs text-muted">
          &copy; {new Date().getFullYear()} Sim Woohyun
        </p>
        <p className="font-mono text-[10px] text-muted/50">{t.footer.built}</p>
      </div>
    </footer>
  );
}
