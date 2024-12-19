import React from "react";
import {
  Areas,
  Bio,
  Blogs,
  Booking,
  Certifications,
  DoctorIntro,
  Patients,
  Prices,
  Search,
} from "./components";

const page = () => {
  return (
    <div>
      <div className="container max-w-[990px] lg:pt-[83px] pt-[50px] lg:pb-[109px] pb-[30px]">
        <Search />
        <DoctorIntro />
        <Bio />
        <Certifications />
        <Areas />
        <Patients />
        <Prices />
        <Blogs />
      </div>
      <Booking />
    </div>
  );
};

export default page;
