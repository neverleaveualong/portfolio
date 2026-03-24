"use client";

import {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";
import { Locale, locales, Translations } from "@/i18n";

type Theme = "dark" | "light";

interface AppContextType {
  locale: Locale;
  setLocale: (l: Locale) => void;
  t: Translations;
  theme: Theme;
  toggleTheme: () => void;
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

  const toggleTheme = () =>
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));

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
