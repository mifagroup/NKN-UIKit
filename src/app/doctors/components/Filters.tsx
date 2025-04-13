"use client";
import { components } from "@/lib/api/v1";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import { Checkbox, FormControlLabel } from "@mui/material";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import qs from "qs";
import React, { useEffect, useState } from "react";
const genders = [
  {
    id: 1,
    name: "مرد",
    value: "male",
  },
  {
    id: 2,
    name: "زن",
    value: "female",
  },
  {
    id: 3,
    name: "هر دو",
    value: "",
  },
];

type FilterProps = {
  degrees: components["schemas"]["TaxonomyResource"];
  expertises: components["schemas"]["TaxonomyResource"];
};

const Filters = (props: FilterProps) => {
  const { degrees, expertises } = props;

  const router = useRouter();
  const pathname = usePathname();
  const encodedSlug = pathname.split("/")[2];
  const currentSlug = encodedSlug ? decodeURIComponent(encodedSlug) : "";

  const searchParams = useSearchParams();

  const prevSearchParams = Object.fromEntries(
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    [...searchParams.entries()].filter(([key, value]) => value)
  );
  const [gender, setGender] = useState<string>(
    searchParams.get("gender") ?? ""
  );

  const [selectedTerms, setSelectedTerms] = React.useState<number[]>([]);

  const [selectedDegrees, setSelectedDegrees] = React.useState<number[]>([]);

  const [isExpertisesOpen, setIsExpertisesOpen] = useState<boolean>(false);
  useEffect(() => {
    // Create a copy of the previous params and remove 'gender' if it exists
    const updatedParams = { ...prevSearchParams };
    if (updatedParams.gender) {
      delete updatedParams.gender; // Remove gender if it already exists
    }

    // Add the new gender to the params
    if (gender) {
      updatedParams.gender = gender;
    }

    // Generate the query string and push it to the URL
    const newUrl = `?${qs.stringify(updatedParams)}`;
    router.push(newUrl);
  }, [gender]);

  useEffect(() => {
    const updatedParams = { ...prevSearchParams };
    if (updatedParams.terms) {
      delete updatedParams.terms;
    }

    if (selectedTerms) {
      updatedParams.terms = selectedTerms.join(",");
    }

    const newUrl = `?${qs.stringify(updatedParams)}`;
    router.push(newUrl);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedTerms]);

  useEffect(() => {
    const updatedParams = { ...prevSearchParams };
    if (updatedParams.degrees) {
      delete updatedParams.degrees;
    }

    if (selectedDegrees) {
      updatedParams.degrees = selectedDegrees.join(",");
    }

    const newUrl = `?${qs.stringify(updatedParams)}`;
    router.push(newUrl);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedDegrees]);
  useEffect(() => {
    if (prevSearchParams.degrees) {
      setSelectedDegrees(
        prevSearchParams.degrees.split(",").map((degree) => parseInt(degree))
      );
    }
    if (prevSearchParams.terms) {
      setSelectedTerms(
        prevSearchParams.terms.split(",").map((term) => parseInt(term))
      );
    }
  }, []);
  return (
    <div className="bg-white flex flex-col lg:w-[252px] w-full rounded-[16px] h-fit lg:sticky lg:top-5">
      {expertises?.terms?.length && (
        <>
          <span
            className="border-b border-b-[#D9D9D9] text-[14px] font-semibold text-black p-[22px] cursor-pointer lg:cursor-default flex justify-between items-center"
            onClick={() => setIsExpertisesOpen(!isExpertisesOpen)}
          >
            تخصص ها
            {isExpertisesOpen ? (
              <ArrowBackIosNewIcon className="lg:!hidden rotate-90 !text-sm" />
            ) : (
              <ArrowBackIosNewIcon className="lg:!hidden rotate-[270deg] !text-sm" />
            )}
          </span>
          <div
            className={`py-[30px] ${
              isExpertisesOpen ? "block" : "hidden"
            } lg:block`}
          >
            <div className="px-2 max-h-[345px] overflow-y-scroll flex flex-col gap-y-[1.5px]">
              {expertises?.terms?.map((term) => (
                <FormControlLabel
                  control={
                    <Checkbox
                      className="!p-0"
                      sx={{
                        "& .MuiSvgIcon-root": {
                          width: "15px",
                          height: "15px",
                          marginX: "5px",
                        },
                      }}
                      onChange={() => {
                        // if (selectedTerms?.includes(term.id)) {
                        //   setSelectedTerms(
                        //     selectedTerms.filter((item) => item !== term.id)
                        //   );
                        // } else {
                        // setSelectedTerms([term.id]);
                        // }
                        router.push(
                          `/doctors/${term.slug}?${qs.stringify(
                            prevSearchParams
                          )}`
                        );
                      }}
                      checked={term.slug === currentSlug}
                    />
                  }
                  slotProps={{
                    typography: {
                      fontSize: "12px",
                      fontWeight: selectedTerms?.includes(term.id)
                        ? "500"
                        : "200",
                    },
                  }}
                  className="!m-0"
                  label={term.title}
                  key={term.id}
                />
              ))}
            </div>
          </div>
        </>
      )}
      <div className="flex items-center gap-x-2.5 p-[22px] border-y border-y-[#ECECEC]">
        <span className="text-[14px] font-semibold text-black">جنسیت</span>
        <div className="flex items-center">
          {genders?.map((gen) => (
            <FormControlLabel
              control={
                <Checkbox
                  className="!p-0"
                  sx={{
                    "& .MuiSvgIcon-root": {
                      width: "15px",
                      height: "15px",
                      marginX: "5px",
                    },
                  }}
                  value={gen.value}
                  onChange={(event) => {
                    setGender(event.target.value);
                    if (!event.target.value) {
                      router.push("?gender=");
                    }
                  }}
                  checked={gender === gen.value}
                />
              }
              slotProps={{
                typography: {
                  fontSize: "12px",
                  fontWeight: "300",
                },
              }}
              className="!m-0"
              label={gen.name}
              key={gen.id}
            />
          ))}
        </div>
      </div>
      <span className="border-b border-b-[#D9D9D9] text-[14px] font-semibold text-black p-[22px]">
        سطح تحصیلات
      </span>
      {degrees?.terms?.length ? (
        <div className="py-[30px]">
          <div className="px-2 flex flex-col gap-y-[1.5px]">
            {degrees?.terms?.map((degree) => (
              <FormControlLabel
                control={
                  <Checkbox
                    className="!p-0"
                    sx={{
                      "& .MuiSvgIcon-root": {
                        width: "15px",
                        height: "15px",
                        marginX: "5px",
                      },
                    }}
                    onChange={() => {
                      // if (selectedDegrees?.includes(degree.id)) {
                      //   setSelectedDegrees(
                      //     selectedDegrees.filter((item) => item !== degree.id)
                      //   );
                      // } else {
                      setSelectedDegrees([degree.id]);
                      // }
                    }}
                    checked={selectedDegrees.includes(degree.id)}
                  />
                }
                slotProps={{
                  typography: {
                    fontSize: "12px",
                    fontWeight: selectedDegrees?.includes(degree.id)
                      ? "500"
                      : "200",
                  },
                }}
                className="!m-0"
                label={degree.title}
                key={degree.id}
              />
            ))}
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default Filters;
