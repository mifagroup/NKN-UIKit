"use client";
import { components } from "@/lib/api/v1";
import { useGetDictionary } from "@/utils/useGetClientDictionary";
import Link from "next/link";
import React from "react";

const Links = ({
  footerTerms,
}: {
  footerTerms: components["schemas"]["TermResource"][];
}) => {
  const dictionary = useGetDictionary();

  const keywordsTranslate = dictionary?.keywords;

  return (
    <div className="flex-col gap-y-6 flex-1 lg:flex hidden">
      <div className="flex items-center gap-x-6 pb-[18px] border-b border-[#626262]">
        <Link href={"/"} className="text-[#F0F0F0] font-semibold">
          خانه
        </Link>
        <Link href={"/doctors"} className="text-[#F0F0F0] font-semibold">
          پزشکان
        </Link>
        <Link href={"/nikan365"} className="text-[#F0F0F0] font-semibold">
          نیکان 365
        </Link>
        <Link href={"/contact-us"} className="text-[#F0F0F0] font-semibold">
          ساختار نیکان
        </Link>
        <Link href={"/about-us"} className="text-[#F0F0F0] font-semibold">
          {keywordsTranslate?.about_nikan}
        </Link>
      </div>
      <div className="grid grid-cols-5 gap-x-5 gap-y-4">
        {footerTerms.map((term) => (
          <div className="col-span-1 flex flex-col" key={term.id}>
            <div className="flex flex-col gap-y-3.5">
              <Link href={""} className="font-thin text-white">
                {term.title}
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Links;
