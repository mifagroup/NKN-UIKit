import { i18n, type Locale } from "@/configs/i18n";
import faDictionary from "@/data/dictionaries/fa.json";
import enDictionary from "@/data/dictionaries/en.json";

type Dictionaries = {
  [key in Locale]: typeof faDictionary;
};

const dictionaries: Dictionaries = {
  fa: faDictionary,
  en: enDictionary,
};

const normalizeLocale = (locale?: string): Locale => {
  if (locale && (locale === "fa" || locale === "en")) {
    return locale;
  }
  return i18n.defaultLocale;
};

export const getDictionary = (locale?: string) => {
  const normalized = normalizeLocale(locale);
  return dictionaries[normalized];
};

export const getFallbackDictionary = () => dictionaries[i18n.defaultLocale];

export const getFromDictionary = (dict: any, path: string): any => {
  if (!dict) return undefined;
  return path.split(".").reduce((acc: any, part: string) => {
    if (acc && typeof acc === "object") {
      return acc[part];
    }
    return undefined;
  }, dict);
};

export const resolveLocale = (locale?: string): Locale => normalizeLocale(locale);
