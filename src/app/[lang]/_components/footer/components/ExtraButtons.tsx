"use client";
import { useGetDictionary } from "@/utils/useGetClientDictionary";
import Image from "next/image";
import React from "react";

const ExtraButtons = () => {
  const dictionary = useGetDictionary();

  return (
    <div className="flex flex-col gap-y-3">
      <button className="flex items-center gap-x-4 px-[30px] py-3.5 w-[253px] border border-[#274556] rounded-[15px]">
        <Image
          src={"/images/nobat-icon.png"}
          alt="nobat"
          width={32}
          height={32}
        />
        <span className="text-[15px] font-extralight text-white">
          {dictionary?.keywords.get_token}
        </span>
      </button>
      <button className="flex items-center gap-x-4 px-[30px] py-3.5 w-[253px] border border-[#274556] rounded-[15px]">
        <Image
          src={"/images/search-doctor.png"}
          alt="search"
          width={32}
          height={32}
        />
        <span className="text-[15px] font-extralight text-white">
          {dictionary?.keywords.search_doctors}
        </span>
      </button>
      <button className="flex items-center gap-x-4 px-[30px] py-3.5 w-[253px] border border-[#274556] rounded-[15px]">
        <Image
          src={"/images/nikan-blog-icon.png"}
          alt="blog"
          width={32}
          height={32}
        />
        <span className="text-[15px] font-extralight text-white">
          {dictionary?.keywords.participate_in_nikan_blog}
        </span>
      </button>
    </div>
  );
};

export default ExtraButtons;
