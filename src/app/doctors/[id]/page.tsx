import React from "react";
import { Bio, Blogs, Booking, DoctorIntro, Patients } from "./components";
import { components } from "@/lib/api/v1";

const page = async (props: { params: Promise<{ id: string }> }) => {
  const params = await props.params;

  const data = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/doctors/${params.id}`,
    {
      cache: "no-cache",
    }
  ).then((res) => res.json());

  const doctor: components["schemas"]["DoctorResource"] = data?.data;

  return (
    <div>
      <div className="container max-w-[990px] lg:pt-[83px] pt-[50px] lg:pb-[109px] pb-[30px]">
        {/* <Search /> */}
        <DoctorIntro doctor={doctor} />
        <Bio doctor={doctor} />
        {/* <Certifications /> */}
        {/* <Areas /> */}
        <Patients />
        {/* <Prices /> */}
        <Blogs />
      </div>
      <Booking doctor={doctor} />
    </div>
  );
};

export default page;
