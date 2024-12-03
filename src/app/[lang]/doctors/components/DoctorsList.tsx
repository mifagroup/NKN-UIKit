import React from "react";
import { DoctorItem, Search } from ".";
import { Divider } from "@mui/material";

const DoctorsList = () => {
  return (
    <div className="bg-white flex-1 rounded-[16px] h-fit">
      <Search />
      {[...Array(6)]?.map((_, index) => (
        <div key={index} className="px-[26px]">
          <DoctorItem />
          {index !== 5 && <Divider className="!bg-[#E9E9E9]" />}
        </div>
      ))}
    </div>
  );
};

export default DoctorsList;
