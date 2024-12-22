"use client";
import { Divider } from "@mui/material";
import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import { useDebounce } from "use-debounce";
import qs from "qs";

const Search = () => {
  const router = useRouter();

  const searchParams = useSearchParams();

  const prevSearchParams = Object.fromEntries(
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    [...searchParams.entries()].filter(([key, value]) => value)
  );

  const [searchValue, setSearchValue] = useState<string>(
    searchParams.get("search") ?? ""
  );

  const [enableSearch, setEnableSearch] = useState<boolean>(false);
  const [debouncedSearchValue] = useDebounce(searchValue, 500);

  useEffect(() => {
    const updatedParams = { ...prevSearchParams };
    if (updatedParams.search) {
      delete updatedParams.search;
    }

    if (debouncedSearchValue) {
      updatedParams.search = debouncedSearchValue;
    }

    const newUrl = `?${qs.stringify(updatedParams)}`;
    router.push(newUrl);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [debouncedSearchValue, enableSearch]);

  return (
    <div className="flex flex-col">
      <div className="flex justify-between items-center px-[26px] pt-5">
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
            onChange={(event) => {
              setSearchValue(event.target.value);
              setEnableSearch(true);
            }}
            value={searchValue}
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
      <Divider className="!bg-[#e3e3e3] w-full !my-5" />
      {/* <div className="flex justify-end gap-x-[15px] px-[26px]">
        <div className="flex items-center gap-x-2.5">
          <span className="text-[13px] text-black font-semibold">
            مرتب سازی بر اساس
          </span>
        </div>
        <div className="flex items-center gap-x-2.5">
          <span className="text-[13px] text-black font-semibold">
            شعبه درمانی
          </span>
          
        </div>
      </div>
      <Divider className="!bg-[#E9E9E9] w-full !mt-[18px] !mb-0" /> */}
    </div>
  );
};

export default Search;
