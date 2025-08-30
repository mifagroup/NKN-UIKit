"use client";
import {Checkbox, Divider, FormControlLabel} from "@mui/material";
import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import { useDebounce } from "use-debounce";
import qs from "qs";

const Search = ({
  hospitals,
}: {
  hospitals: { id: number; name: string }[];
}) => {
  const router = useRouter();

  const searchParams = useSearchParams();

  const prevSearchParams = Object.fromEntries(
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    [...searchParams.entries()].filter(([key, value]) => value)
  );

  const [searchValue, setSearchValue] = useState<string>(
    searchParams.get("search") ?? ""
  );

  const [selectedHospital, setSelectedHospital] = useState<string>(
    searchParams.get("hospital") ?? ""
  );

  const handleHospitalChange = (hospitalId: string) => {
    setSelectedHospital(hospitalId);
  };

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

  useEffect(() => {
    const updatedParams = { ...prevSearchParams };
    if (updatedParams.hospital) {
      delete updatedParams.hospital;
    }

    if (selectedHospital) {
      updatedParams.hospital = selectedHospital;
    }

    const newUrl = `?${qs.stringify(updatedParams)}`;
    router.push(newUrl);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedHospital]);

  useEffect(() => {
    if (prevSearchParams.hospital) {
      setSelectedHospital(prevSearchParams.hospital);
    }
  }, []);

  return (
    <div className="flex flex-col">
      <div className="flex lg:flex-row flex-col gap-y-5 justify-between items-center px-[26px] pt-5">
        <span className="lg:text-base text-sm font-semibold text-black">
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
      <div className="flex justify-start gap-x-[15px] px-[26px]">
        <div className="flex lg:flex-row flex-col gap-y-1.5 items-center gap-x-2.5">
          <div className="flex items-center gap-x-2">
            <span className="text-[13px] text-black font-semibold">
              شعبه درمانی
            </span>
            {selectedHospital && (
              <button
                onClick={() => setSelectedHospital("")}
                className="text-[11px] text-red-500 hover:text-red-700 px-2 py-1 rounded border border-red-200 hover:border-red-300 transition-colors"
              >
                پاک کردن
              </button>
            )}
          </div>
          <div className="flex gap-2 flex-wrap justify-start">
            {hospitals?.map((hospital) => (
              <FormControlLabel
                key={hospital.id}
                control={
                  <Checkbox
                    checked={selectedHospital === String(hospital.id)}
                    onChange={() => handleHospitalChange(String(hospital.id))}
                    size="small"
                    sx={{
                      '& .MuiSvgIcon-root': {
                        fontSize: '18px',
                      }
                    }}
                  />
                }
                label={
                  <span style={{ fontSize: '13px' }}>
                    {hospital.name}
                  </span>
                }
                sx={{
                  margin: '0',
                  padding: '4px',
                  backgroundColor: selectedHospital === String(hospital.id) ? "#F3F3F3" : "transparent",
                  borderRadius: "7px",
                }}
              />
            ))}
          </div>
        </div>
      </div>
      <Divider className="!bg-[#E9E9E9] w-full !mt-[18px] !mb-0" />
    </div>
  );
};

export default Search;
