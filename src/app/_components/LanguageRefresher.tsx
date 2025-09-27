"use client";

import { useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import { useLanguage } from "@/contexts/LanguageContext";

const LanguageRefresher = () => {
  const { language } = useLanguage();
  const router = useRouter();
  const prev = useRef(language);

  useEffect(() => {
    if (prev.current !== language) {
      prev.current = language;
      // Refresh server components to respect updated lang cookie
      router.refresh();
    }
  }, [language, router]);

  return null;
};

export default LanguageRefresher;
