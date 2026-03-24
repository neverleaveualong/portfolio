"use client";

import {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
  ReactNode,
} from "react";
import { Locale, locales, Translations } from "@/i18n";

type Theme = "dark" | "light";

interface AppContextType {
  locale: Locale;
  setLocale: (l: Locale) => void;
  t: Translations;
  theme: Theme;
  toggleTheme: (e?: React.MouseEvent) => void;
}

const AppContext = createContext<AppContextType | null>(null);

export function AppProvider({ children }: { children: ReactNode }) {
  const [locale, setLocale] = useState<Locale>("ko");
  const [theme, setTheme] = useState<Theme>("dark");

  useEffect(() => {
    const saved = localStorage.getItem("portfolio-locale") as Locale | null;
    if (saved && locales[saved]) setLocale(saved);
    const savedTheme = localStorage.getItem("portfolio-theme") as Theme | null;
    if (savedTheme) setTheme(savedTheme);
  }, []);

  useEffect(() => {
    localStorage.setItem("portfolio-locale", locale);
    document.documentElement.lang = locale;
  }, [locale]);

  useEffect(() => {
    localStorage.setItem("portfolio-theme", theme);
    document.documentElement.classList.toggle("light", theme === "light");
  }, [theme]);

  const toggleTheme = useCallback(
    (e?: React.MouseEvent) => {
      const x = e?.clientX ?? window.innerWidth / 2;
      const y = e?.clientY ?? 0;

      // Max radius to cover entire screen from click point
      const maxRadius = Math.hypot(
        Math.max(x, window.innerWidth - x),
        Math.max(y, window.innerHeight - y)
      );

      const doc = document.documentElement;

      // Use View Transitions API if available
      if ("startViewTransition" in document) {
        doc.style.setProperty("--reveal-x", `${x}px`);
        doc.style.setProperty("--reveal-y", `${y}px`);
        doc.style.setProperty("--reveal-r", `${maxRadius}px`);

        const transition = (document as unknown as { startViewTransition: (cb: () => void) => { ready: Promise<void> } }).startViewTransition(() => {
          setTheme((prev) => (prev === "dark" ? "light" : "dark"));
        });

        transition.ready.then(() => {
          doc.animate(
            [
              { clipPath: `circle(0px at ${x}px ${y}px)` },
              { clipPath: `circle(${maxRadius}px at ${x}px ${y}px)` },
            ],
            {
              duration: 500,
              easing: "ease-in-out",
              pseudoElement: "::view-transition-new(root)",
            }
          );
        });
      } else {
        // Fallback: just toggle instantly
        setTheme((prev) => (prev === "dark" ? "light" : "dark"));
      }
    },
    []
  );

  return (
    <AppContext.Provider
      value={{
        locale,
        setLocale,
        t: locales[locale].dict,
        theme,
        toggleTheme,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export function useApp() {
  const ctx = useContext(AppContext);
  if (!ctx) throw new Error("useApp must be used within AppProvider");
  return ctx;
}
