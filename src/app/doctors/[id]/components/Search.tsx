"use client";
import { Divider, MenuItem, Select } from "@mui/material";
import Image from "next/image";
import React from "react";

const Search = () => {
  return (
    <div className="flex flex-col lg:px-0 px-6">
      <div className="flex lg:flex-row flex-col justify-between items-center gap-y-4">
        <span className="text-base font-semibold text-black">
          فهرست پزشکان و متخصصان مجموعه درمانی نیکان
        </span>
        <div className="flex items-center justify-between gap-x-2.5">
          <span className="text-base text-black font-semibold">
            جستجوی پزشک
          </span>
          <input
            type="text"
            placeholder=""
            className="lg:w-[171px] w-[175px] h-[26px] bg-[#F1F1F1] rounded-[7px] px-2"
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
      <div className="flex lg:justify-end justify-evenly gap-x-[15px]">
        <div className="flex lg:flex-row flex-col gap-y-1.5 items-center gap-x-2.5">
          <span className="text-[13px] text-black font-semibold">
            مرتب سازی بر اساس
          </span>
          <Select
            slotProps={{
              root: {
                style: {
                  minWidth: "133px",
                  maxHeight: "26px",
                  border: "none",
                },
              },
            }}
            sx={{
              "& .MuiOutlinedInput-notchedOutline": {
                border: "none",
              },
              "& .MuiSelect-select": {
                maxHeight: "26px !important",
                backgroundColor: "#F3F3F3",
                paddingY: "4px",
                borderRadius: "7px",
                fontSize: "13px",
              },
            }}
            value={10}
          >
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </div>
        <div className="flex lg:flex-row flex-col gap-y-1.5 items-center gap-x-2.5">
          <span className="text-[13px] text-black font-semibold">
            شعبه درمانی
          </span>
          <Select
            slotProps={{
              input: {
                style: {
                  minWidth: "120px",
                },
              },
              root: {
                style: {
                  minWidth: "111px",
                  maxHeight: "26px",
                  border: "none",
                },
              },
            }}
            sx={{
              "& .MuiOutlinedInput-notchedOutline": {
                border: "none",
              },
              "& .MuiSelect-select": {
                maxHeight: "26px !important",
                backgroundColor: "#F3F3F3",
                paddingY: "4px",
                borderRadius: "7px",
                fontSize: "13px",
              },
            }}
            value={10}
          >
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </div>
      </div>
      <Divider className="!bg-[#E9E9E9] w-full lg:!my-[18px] !mt-[18px] !mb-[30px]" />
    </div>
  );
};

export default Search;
