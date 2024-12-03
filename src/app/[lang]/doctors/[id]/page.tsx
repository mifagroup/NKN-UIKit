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
      <div className="container max-w-[990px] pt-[83px] pb-[109px]">
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
