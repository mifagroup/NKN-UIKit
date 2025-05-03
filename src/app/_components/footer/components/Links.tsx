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
      <div className="flex items-center gap-x-3 pb-[18px] border-b border-[#626262] justify-between">
        <div className="flex items-center gap-x-6">
          {links?.map((link) => (
            <Link
              href={link.href}
              key={link.id}
              className="text-[#F0F0F0] font-semibold text-[15px]"
            >
              {link.label}
            </Link>
          ))}
        </div>
          <div>

              <Link
                  href={"/insurances"}
                  className="w-[160px] h-[33px] text-xs rounded-[6px] bg-[#31D1B087] text-white font-medium flex justify-center items-center"
              >
                  لیست بیمه های طرف قرارداد
              </Link>
              <Link
                  href={"/cooperation"}
                  className="w-[160px] h-[33px] text-xs rounded-[6px] bg-[#31D1B087] mt-3 text-white font-medium flex justify-center items-center"
              >

                  درخواست همکاری
              </Link>
          </div>
      </div>
      <div className="grid grid-cols-5 gap-x-5 gap-y-4">
        {footerTerms.map((term) => (
          <div className="col-span-1 flex flex-col" key={term.id}>
            <div className="flex flex-col gap-y-3.5">
              <Link
                href={`/doctors?terms=${term.id}`}
                className="font-thin text-white"
              >
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
