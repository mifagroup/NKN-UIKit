"use client";
import { components } from "@/lib/api/v1";
import Link from "next/link";
import React from "react";
import { links } from "../../header/_components/Links";

const Links = ({
  footerTerms,
}: {
  footerTerms: components["schemas"]["TermResource"][];
}) => {
  return (
    <div className="flex-col gap-y-6 flex-1 lg:flex hidden">
      <div className="flex items-center gap-x-6 pb-[18px] border-b border-[#626262]">
        {links?.map((link) => (
          <Link
            href={link.href}
            key={link.id}
            className="text-[#F0F0F0] font-semibold"
          >
            {link.label}
          </Link>
        ))}
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