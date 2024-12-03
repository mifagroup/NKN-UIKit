import React from "react";
import { DoctorsList, Filters } from "./components";

const Page = () => {
  return (
    <div className="bg-[#F3F3F3]">
      <div className="pt-[64px] pb-[80px] container max-w-[1138px]">
        <div className="flex gap-x-[18px]">
          <Filters />
          <DoctorsList />
        </div>
      </div>
    </div>
  );
};

export default Page;
