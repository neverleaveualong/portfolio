"use client";

import { useApp } from "@/context/AppContext";

export default function Footer() {
  const { t } = useApp();

  return (
    <footer className="border-t border-border px-4 sm:px-6 py-6 sm:py-8">
      <div className="mx-auto flex max-w-5xl flex-col sm:flex-row items-center justify-between gap-2">
        <p className="font-mono text-xs text-muted">
          &copy; {new Date().getFullYear()} Sim Woohyun
        </p>
        <p className="font-mono text-[10px] text-muted/50">{t.footer.built}</p>
      </div>
    </footer>
  );
}
