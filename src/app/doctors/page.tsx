import React from "react";
import { DoctorsList, Filters } from "./components";
import { components } from "@/lib/api/v1";
import qs from "qs";

const Page = async (props: {
  searchParams?: Promise<{ [key: string]: string | string[] | undefined }>;
}) => {
  const searchParams = await props.searchParams;

  const formattedParams = qs.stringify({
    filter: {
      search: searchParams?.search,
      gender: searchParams?.gender,
      terms: searchParams?.terms,
    },
  });

  const data = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/doctors?${formattedParams}`,
    {
      cache: "no-cache",
    }
  ).then((res) => res.json());

  const doctors: components["schemas"]["DoctorResource"][] = data?.data ?? [];

  return (
    <div className="bg-[#F3F3F3]">
      <div className="pt-[64px] pb-[80px] container max-w-[1138px]">
        <div className="flex gap-x-[18px]">
          <Filters />
          <DoctorsList doctors={doctors} />
        </div>
      </div>
    </div>
  );
};

export default Page;
