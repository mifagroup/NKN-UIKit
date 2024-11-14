import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { type Locale } from "@/configs/i18n";
import { getDictionary } from "./getServerDictionary";

export const useGetDictionary = () => {
  const { lang } = useParams();
  const [dictionary, setDictionary] =
    useState<Awaited<ReturnType<typeof getDictionary>>>();

  useEffect(() => {
    getDictionary(lang as Locale).then((dic) => setDictionary(dic));
  }, [lang]);

  return dictionary;
};
