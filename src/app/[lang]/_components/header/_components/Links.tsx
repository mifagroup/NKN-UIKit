"use client";
import { useGetDictionary } from "@/utils/useGetClientDictionary";
import Link from "next/link";
import React from "react";

const Links = () => {
  const dictionary = useGetDictionary();

  const keywordsTranslate = dictionary?.keywords;

  const links = [
    {
      id: "home",
      label: keywordsTranslate?.home,
      href: "",
    },
    {
      id: "care_and_cure",
      label: keywordsTranslate?.care_and_cure,
      href: "",
    },
    {
      id: "nikan_structure",
      label: keywordsTranslate?.nikan_structure,
      href: "",
    },
    {
      id: "health_and_life",
      label: keywordsTranslate?.health_and_life,
      href: "",
    },
    {
      id: "education",
      label: keywordsTranslate?.education,
      href: "",
    },
    {
      id: "about_nikan",
      label: keywordsTranslate?.about_nikan,
      href: "",
    },
  ];
  return (
    <div className="flex items-center gap-x-5">
      {links?.map((link) => (
        <Link
          href={link.href}
          key={link.id}
          className="text-base text-text-600 font-semibold"
        >
          {link.label}
        </Link>
      ))}
    </div>
  );
};

export default Links;
