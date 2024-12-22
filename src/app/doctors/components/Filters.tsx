"use client";
import { useFetch } from "@/utils/clientRequest";
import { Checkbox, FormControlLabel } from "@mui/material";
import { useRouter, useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import qs from "qs";

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

// const profissions = [
//   {
//     id: 1,
//     name: "کارشناس",
//   },
//   {
//     id: 2,
//     name: "کارشناس ارشد",
//   },
//   {
//     id: 3,
//     name: "متخصص دکتری",
//   },
//   {
//     id: 4,
//     name: "دکترای تخصصی",
//   },
//   {
//     id: 5,
//     name: "فوق تخصص",
//   },
//   {
//     id: 6,
//     name: "فلوشیپ",
//   },
//   {
//     id: 7,
//     name: "درجه علمی",
//   },
// ];

const Filters = () => {
  const router = useRouter();

  const searchParams = useSearchParams();

  const prevSearchParams = Object.fromEntries(
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    [...searchParams.entries()].filter(([key, value]) => value)
  );

  const [gender, setGender] = useState<string>(
    searchParams.get("gender") ?? ""
  );

  const [selectedTerms, setSelectedTerms] = React.useState<number[]>([]);

  const { data: termsData, isLoading: isLoadingTerms } = useFetch().useQuery(
    "get",
    "/terms"
  );

  const terms = termsData?.data ?? [];

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

  return (
    <div className="bg-white flex flex-col w-[252px] rounded-[16px] h-fit">
      {!isLoadingTerms && (
        <>
          <span className="border-b border-b-[#D9D9D9] text-[14px] font-semibold text-black p-[22px]">
            تخصص ها
          </span>
          <div className="py-[30px]">
            <div className="px-2 max-h-[345px] overflow-y-scroll flex flex-col gap-y-[1.5px]">
              {terms?.map((term) => (
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
                        if (selectedTerms?.includes(term.id)) {
                          setSelectedTerms(
                            selectedTerms.filter((item) => item !== term.id)
                          );
                        } else {
                          setSelectedTerms([...selectedTerms, term.id]);
                        }
                      }}
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
        <span className="text-[14px] font-semibold text-black">جنس پزشک</span>
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
      {/* <span className="border-b border-b-[#D9D9D9] text-[14px] font-semibold text-black p-[22px]">
        سطح تحصیلات
      </span>
      <div className="py-[30px]">
        <div className="px-2 flex flex-col gap-y-[1.5px]">
          {profissions?.map((profission) => (
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
                    if (activeProfissionTypes?.includes(profission.id)) {
                      setActiveProfissionTypes(
                        activeProfissionTypes.filter(
                          (item) => item !== profission.id
                        )
                      );
                    } else {
                      setActiveProfissionTypes([
                        ...activeProfissionTypes,
                        profission.id,
                      ]);
                    }
                  }}
                />
              }
              slotProps={{
                typography: {
                  fontSize: "12px",
                  fontWeight: activeProfissionTypes?.includes(profission.id)
                    ? "500"
                    : "200",
                },
              }}
              className="!m-0"
              label={profission.name}
              key={profission.id}
            />
          ))}
        </div>
      </div> */}
    </div>
  );
};

export default Filters;
