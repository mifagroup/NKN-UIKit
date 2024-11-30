import { Divider } from "@mui/material";
import Image from "next/image";
import React from "react";

const Search = () => {
  return (
    <div className="flex flex-col">
      <div className="flex justify-between items-center">
        <span className="text-base font-semibold text-black">
          فهرست پزشکان و متخصصان مجموعه درمانی نیکان
        </span>
        <div className="flex items-center gap-x-2.5">
          <span className="text-base text-black font-semibold">
            جستجوی پزشک
          </span>
          <input
            type="text"
            placeholder=""
            className="w-[171px] h-[26px] bg-[#F1F1F1] rounded-[7px] px-2"
          />
          <Image
            src={"/images/search-icon-small.png"}
            alt="search-icon"
            width={16}
            height={16}
            quality={100}
            className="cursor-pointer"
          />
        </div>
      </div>
      <Divider className="!bg-[#e3e3e3] w-full !mt-3.5 !mb-5" />
      <div className="flex justify-end gap-x-[15px]">
        <div className="flex items-center gap-x-2.5">
          <span className="text-[13px] text-black font-semibold">
            مرتب سازی بر اساس
          </span>
          {/*   */}
        </div>
        <div className="flex items-center gap-x-2.5">
          <span className="text-[13px] text-black font-semibold">
            شعبه درمانی
          </span>
          {/* <Select>
            <option>پزشکان</option>
            <option>متخصصان</option>
          </Select> */}
        </div>
      </div>
      <Divider className="!bg-[#E9E9E9] w-full !my-[18px]" />
    </div>
  );
};

export default Search;
