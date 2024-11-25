"use client";
import { categories } from "@/app/[lang]/(home)/_components/searchDoctors";
import { useGetDictionary } from "@/utils/useGetClientDictionary";
import Link from "next/link";
import React from "react";

const Links = () => {
  const dictionary = useGetDictionary();

  const keywordsTranslate = dictionary?.keywords;

  return (
    <div className="flex-col gap-y-6 flex-1 lg:flex hidden">
      <div className="flex items-center gap-x-6 pb-[18px] border-b border-[#626262]">
        <Link href={"/"} className="text-[#F0F0F0] font-semibold">
          {keywordsTranslate?.home}
        </Link>
        <Link href={""} className="text-[#F0F0F0] font-semibold">
          {keywordsTranslate?.care_and_cure}
        </Link>
        <Link href={""} className="text-[#F0F0F0] font-semibold">
          {keywordsTranslate?.nikan_structure}
        </Link>
        <Link href={""} className="text-[#F0F0F0] font-semibold">
          {keywordsTranslate?.health_and_life}
        </Link>
        <Link href={""} className="text-[#F0F0F0] font-semibold">
          {keywordsTranslate?.education}
        </Link>
        <Link href={"/about-us"} className="text-[#F0F0F0] font-semibold">
          {keywordsTranslate?.about_nikan}
        </Link>
      </div>
      <div className="grid grid-cols-5 gap-x-5">
        <div className="col-span-1 flex flex-col gap-y-4">
          <span className="text-[16px] font-bold text-white">
            {keywordsTranslate?.care_and_cure}
          </span>
          <div className="flex flex-col gap-y-3.5">
            {categories.slice(0, 5)?.map((cat) => (
              <Link href={""} key={cat.id} className="font-thin text-white">
                {cat.title}
              </Link>
            ))}
          </div>
        </div>
        <div className="col-span-1 flex flex-col gap-y-4">
          <span className="text-[16px] font-bold text-white">
            {keywordsTranslate?.nikan_structure}
          </span>
          <div className="flex flex-col gap-y-3.5">
            {categories.slice(5, 10)?.map((cat) => (
              <Link href={""} key={cat.id} className="font-thin text-white">
                {cat.title}
              </Link>
            ))}
          </div>
        </div>
        <div className="col-span-1 flex flex-col gap-y-4">
          <span className="text-[16px] font-bold text-white">
            {keywordsTranslate?.health_and_life}
          </span>
          <div className="flex flex-col gap-y-3.5">
            {categories.slice(10, 15)?.map((cat) => (
              <Link href={""} key={cat.id} className="font-thin text-white">
                {cat.title}
              </Link>
            ))}
          </div>
        </div>
        <div className="col-span-1 flex flex-col gap-y-4">
          <span className="text-[16px] font-bold text-white">
            {keywordsTranslate?.education}
          </span>
          <div className="flex flex-col gap-y-3.5">
            {categories.slice(15, 20)?.map((cat) => (
              <Link href={""} key={cat.id} className="font-thin text-white">
                {cat.title}
              </Link>
            ))}
          </div>
        </div>
        <div className="col-span-1 flex flex-col gap-y-4">
          <span className="text-[16px] font-bold text-white">
            {keywordsTranslate?.about_nikan}
          </span>
          <div className="flex flex-col gap-y-3.5">
            {categories.slice(20, 25)?.map((cat) => (
              <Link href={""} key={cat.id} className="font-thin text-white">
                {cat.title}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Links;
