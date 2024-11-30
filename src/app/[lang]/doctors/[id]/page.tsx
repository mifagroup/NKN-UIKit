import React from "react";
import {
  Areas,
  Bio,
  Blogs,
  Certifications,
  DoctorIntro,
  Patients,
  Prices,
  Search,
} from "./components";

const page = () => {
  return (
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
  );
};

export default page;
