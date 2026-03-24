import ko from "./ko";
import en from "./en";
import ja from "./ja";
import type { Translations } from "./ko";

export type Locale = "ko" | "en" | "ja";

export const locales: Record<Locale, { label: string; dict: Translations }> = {
  ko: { label: "한국어", dict: ko },
  en: { label: "English", dict: en },
  ja: { label: "日本語", dict: ja },
};

export type { Translations };
