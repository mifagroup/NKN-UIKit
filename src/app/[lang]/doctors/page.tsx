import React from "react";
import { DoctorsList, Filters } from "./components";
import { components } from "@/lib/api/v1";

const Page = async ({
  params,
  searchParams,
}: {
  params: { terms: string[] };
  searchParams?: { [key: string]: string | string[] | undefined };
}) => {
  const data = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/doctors`, {
    cache: "no-cache",
  }).then((res) => res.json());

  const doctors: components["schemas"]["DoctorResource"][] = data?.data ?? [];

  console.log(searchParams);

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
