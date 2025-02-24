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
      hospital: searchParams?.hospital,
    },
    page: searchParams?.page,
    per_page: 6,
  });

  const data = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/doctors?${formattedParams}`,
    {
      cache: "no-cache",
    }
  ).then((res) => res.json());

  const doctors: components["schemas"]["DoctorResource"][] = data?.data ?? [];

  const hospitals: { id: number; name: string }[] = data.hospitals ?? [];

  const expertises: components["schemas"]["TaxonomyResource"] =
    data?.taxonomies?.find(
      (tax: components["schemas"]["TaxonomyResource"]) =>
        tax.key === "expertise"
    );

  const degrees: components["schemas"]["TaxonomyResource"] =
    data?.taxonomies?.find(
      (tax: components["schemas"]["TaxonomyResource"]) =>
        tax.key === "degree_level"
    );

  return (
    <div className="bg-[#F3F3F3]">
      <div className="lg:pt-[64px] pb-[80px] container max-w-[1138px]">
        <div className="flex gap-x-[18px] lg:flex-row flex-col">
          <Filters degrees={degrees} expertises={expertises} />

          <DoctorsList
            doctors={doctors}
            hospitals={hospitals}
            meta={data?.meta}
          />
        </div>
      </div>
    </div>
  );
};

export default Page;
