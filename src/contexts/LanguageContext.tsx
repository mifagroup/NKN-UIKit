"use client";

import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  useTransition,
} from "react";
import { i18n, type Locale } from "@/configs/i18n";
import faDict from "@/data/dictionaries/fa.json";
import enDict from "@/data/dictionaries/en.json";
import { useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/navigation";

// Types
interface LanguageContextValue {
  language: Locale;
  direction: "rtl" | "ltr";
  dictionary: typeof faDict;
  fallbackDictionary: typeof faDict;
  setLanguage: (lang: Locale) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextValue | undefined>(undefined);

const STORAGE_KEY = "app_language";

function getFromPath(obj: any, path: string): any {
  return path.split(".").reduce((acc: any, part: string) => (acc ? acc[part] : undefined), obj);
}

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const queryClient = useQueryClient();
  const router = useRouter();
  const [, startTransition] = useTransition();
  const [language, setLanguageState] = useState<Locale>(() => {
    if (typeof window === "undefined") return i18n.defaultLocale;
    const saved = window.localStorage.getItem(STORAGE_KEY) as Locale | null;
    return saved && i18n.locales.includes(saved) ? saved : i18n.defaultLocale;
  });

  const direction = i18n.langDirection[language] as "rtl" | "ltr";

  useEffect(() => {
    if (typeof document !== "undefined") {
      document.documentElement.lang = language;
      document.documentElement.dir = direction;
      document.body && (document.body.dir = direction);
    }
  }, [language, direction]);

  const setLanguage = useCallback(
    (lang: Locale) => {
      if (!i18n.locales.includes(lang)) return;
      setLanguageState(lang);
      if (typeof window !== "undefined") {
        window.localStorage.setItem(STORAGE_KEY, lang);
        // Persist to cookie for server-side reads (SSR fetch)
        try {
          document.cookie = `lang=${lang}; path=/; max-age=${60 * 60 * 24 * 365}`;
        } catch {}
      }
      // Invalidate cached queries so data refetches with new language header
      queryClient.invalidateQueries();
      // Refresh current route asynchronously so server components pick up updated cookie
      startTransition(() => {
        router.refresh();
      });
    },
    [queryClient, router, startTransition]
  );

  const t = useCallback(
    (key: string): string => {
      const dict = language === "en" ? enDict : faDict;
      const fallbackDict = faDict;
      const fromPrimary = getFromPath(dict, key);
      if (typeof fromPrimary === "string") return fromPrimary;
      const fromFallback = getFromPath(fallbackDict, key);
      if (typeof fromFallback === "string") return fromFallback;
      return key;
    },
    [language]
  );

  const value = useMemo<LanguageContextValue>(
    () => ({
      language,
      direction,
      dictionary: language === "en" ? enDict : faDict,
      fallbackDictionary: faDict,
      setLanguage,
      t,
    }),
    [language, direction, setLanguage, t]
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
};

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within LanguageProvider");
  return ctx;
}
