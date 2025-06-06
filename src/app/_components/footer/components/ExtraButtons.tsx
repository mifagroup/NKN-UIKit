"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";

const ExtraButtons = () => {
  return (
    <div className="flex flex-col gap-y-3">
      <Link
        href={
          "https://pa.nikan365.ir/main/expertise"
        }
        target="_blank"
        className="flex items-center gap-x-4 px-[30px] py-3.5 w-[253px] border border-[#274556] rounded-[15px]"
      >
        <Image
          src={"/images/nobat-icon.png"}
          alt="nobat"
          width={32}
          height={32}
        />
        <span className="text-[15px] font-extralight text-white">
          تعیین نوبت
        </span>
      </Link>
      <Link
        href={"/doctors"}
        className="flex items-center gap-x-4 px-[30px] py-3.5 w-[253px] border border-[#274556] rounded-[15px]"
      >
        <Image
          src={"/images/search-doctor.png"}
          alt="search"
          width={32}
          height={32}
        />
        <span className="text-[15px] font-extralight text-white">
          جستجو پزشکان
        </span>
      </Link>
      <button className="flex items-center gap-x-4 px-[30px] py-3.5 w-[253px] border border-[#274556] rounded-[15px]">
        <Image
          src={"/images/nikan-blog-icon.png"}
          alt="blog"
          width={32}
          height={32}
        />
        <span className="text-[15px] font-extralight text-white">
          عضویت در نشریه نیکان
        </span>
      </button>
    </div>
  );
};

export default ExtraButtons;
