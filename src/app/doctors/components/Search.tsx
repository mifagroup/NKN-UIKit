"use client";
import { Checkbox, Divider, FormControlLabel } from "@mui/material";
import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import { useDebounce } from "use-debounce";
import qs from "qs";

const Search = ({
                  hospitals,
                  h1Tag,
                }: {
  hospitals: { id: number; name: string }[];
  h1Tag?: string;
}) => {
  const router = useRouter();

  const searchParams = useSearchParams();

  const prevSearchParams = React.useMemo(
      () =>
          Object.fromEntries(
              // eslint-disable-next-line @typescript-eslint/no-unused-vars
              [...searchParams.entries()].filter(([key, value]) => value)
          ),
      [searchParams]
  );

  const [searchValue, setSearchValue] = useState<string>(
      searchParams.get("search") ?? ""
  );

  const hospitalIdsSet = React.useMemo(
      () => new Set(hospitals.map((hospital) => String(hospital.id))),
      [hospitals]
  );

  const [selectedHospitals, setSelectedHospitals] = useState<string[]>([]);

  const handleHospitalChange = (hospitalId: string) => {
    setSelectedHospitals((prev) =>
        prev.includes(hospitalId)
            ? prev.filter((id) => id !== hospitalId)
            : [...prev, hospitalId]
    );
  };

  const [enableSearch, setEnableSearch] = useState<boolean>(false);

  const [debouncedSearchValue] = useDebounce(searchValue, 500);

  const sanitizeParams = React.useCallback((params: Record<string, string>) => {
    const sanitized: Record<string, string> = { ...params };

    if (sanitized.page) {
      delete sanitized.page;
    }

    return sanitized;
  }, []);

  const stringifyForCompare = React.useCallback(
      (params: Record<string, string>) =>
          qs.stringify(params, {
            encode: false,
            sort: (a, b) => a.localeCompare(b),
          }),
      []
  );

  // Helper function to update URL params and remove page parameter
  const updateUrlParams = React.useCallback(
      (updatedParams: Record<string, string>) => {
        const sanitizedNext = sanitizeParams(updatedParams);
        const sanitizedPrev = sanitizeParams(prevSearchParams);

        const nextComparable = stringifyForCompare(sanitizedNext);
        const prevComparable = stringifyForCompare(sanitizedPrev);

        if (nextComparable === prevComparable) {
          return;
        }

        const encodedQuery = qs.stringify(sanitizedNext);
        router.push(encodedQuery ? `?${encodedQuery}` : "?");
      },
      [prevSearchParams, router, sanitizeParams, stringifyForCompare]
  );

  useEffect(() => {
    const updatedParams = { ...prevSearchParams };
    if (updatedParams.search) {
      delete updatedParams.search;
    }

    if (debouncedSearchValue) {
      updatedParams.search = debouncedSearchValue;
    }

    // Update URL and remove page parameter
    updateUrlParams(updatedParams);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [debouncedSearchValue, enableSearch]);

  useEffect(() => {
    const updatedParams = { ...prevSearchParams };
    if (updatedParams.hospital) {
      delete updatedParams.hospital;
    }

    const existingTerms = updatedParams.terms
        ? updatedParams.terms.split(",").filter(Boolean)
        : [];

    const nonHospitalTerms = existingTerms.filter(
        (termId) => !hospitalIdsSet.has(termId)
    );

    if (selectedHospitals.length) {
      const mergedTerms = [
        ...new Set([...nonHospitalTerms, ...selectedHospitals]),
      ];
      updatedParams.terms = mergedTerms.join(",");
    } else if (nonHospitalTerms.length) {
      updatedParams.terms = nonHospitalTerms.join(",");
    } else {
      delete updatedParams.terms;
    }

    // Update URL and remove page parameter
    updateUrlParams(updatedParams);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedHospitals, hospitalIdsSet]);

  useEffect(() => {
    const hospitalParam = prevSearchParams.hospital;

    const termParams = prevSearchParams.terms;
    const termIds = termParams ? termParams.split(",").filter(Boolean) : [];
    const hospitalTermIds = termIds.filter((termId) =>
        hospitalIdsSet.has(termId)
    );

    if (hospitalParam && hospitalIdsSet.has(hospitalParam)) {
      hospitalTermIds.push(hospitalParam);
    }

    const uniqueHospitals = Array.from(new Set(hospitalTermIds));

    setSelectedHospitals((prev) => {
      if (prev.length !== uniqueHospitals.length) {
        return uniqueHospitals;
      }

      const prevSorted = [...prev].sort();
      const nextSorted = [...uniqueHospitals].sort();

      if (prevSorted.every((value, index) => value === nextSorted[index])) {
        return prev;
      }

      return uniqueHospitals;
    });
  }, [prevSearchParams, hospitalIdsSet]);

  return (
      <div className="flex flex-col">
        <div className="flex lg:flex-row flex-col gap-y-5 justify-between items-center px-[26px] pt-5">
          <h1 className="lg:text-base text-sm font-semibold text-black">
            {h1Tag || " فهرست پزشکان و متخصصان مجموعه درمانی نیکان"}
          </h1>
          <div className="flex items-center gap-x-2.5">
          <span className="text-base text-black font-semibold">
            جستجوی پزشک
          </span>
            <input
                type="text"
                placeholder="جستجوی پزشک و تخصص ..."
                className="w-[171px] h-[26px] bg-[#F1F1F1] rounded-[7px] px-2 text-[9px]"
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
              {selectedHospitals.length > 0 && (
                  <button
                      onClick={() => setSelectedHospitals([])}
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
                            checked={selectedHospitals.includes(String(hospital.id))}
                            onChange={() => handleHospitalChange(String(hospital.id))}
                            size="small"
                            sx={{
                              "& .MuiSvgIcon-root": {
                                fontSize: "18px",
                              },
                            }}
                        />
                      }
                      label={
                        <span style={{ fontSize: "13px" }}>{hospital.name}</span>
                      }
                      sx={{
                        margin: "0",
                        padding: "4px",
                        backgroundColor: selectedHospitals.includes(
                            String(hospital.id)
                        )
                            ? "#F3F3F3"
                            : "transparent",
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
