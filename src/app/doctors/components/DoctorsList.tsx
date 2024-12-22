import React from "react";
import { DoctorItem, Search } from ".";
import { Divider } from "@mui/material";
import { components } from "@/lib/api/v1";

const DoctorsList = async ({
  doctors,
}: {
  doctors: components["schemas"]["DoctorResource"][];
}) => {
  return (
    <div className="bg-white flex-1 rounded-[16px] h-fit">
      <Search />
      {doctors?.map((doctor, index) => (
        <div key={doctor.id} className="px-[26px]">
          <DoctorItem doctor={doctor} />
          {index !== doctors.length - 1 && (
            <Divider className="!bg-[#E9E9E9]" />
          )}
        </div>
      ))}
    </div>
  );
};

export default DoctorsList;
