import React from "react";
import { DoctorItem, Search } from ".";
import { Divider } from "@mui/material";
import { components } from "@/lib/api/v1";
import Pagination from "./Pagination";

const DoctorsList = async ({
  doctors,
  hospitals,
  meta,
}: {
  doctors: components["schemas"]["DoctorResource"][];
  hospitals: { id: number; name: string }[];
  meta: components["schemas"]["MetaPaginationResource"];
}) => {
  return (
    <div className="flex flex-col flex-grow">
      <div className="bg-white flex-1 rounded-[16px] h-fit">
        <Search hospitals={hospitals} />
        {doctors?.length ? (
          doctors?.map((doctor, index) => (
            <div key={doctor.id} className="px-[26px]">
              <DoctorItem doctor={doctor} />
              {index !== doctors.length - 1 && (
                <Divider className="!bg-[#E9E9E9]" />
              )}
            </div>
          ))
        ) : (
          <div className="p-10 text-center">دکتری یافت نشد...</div>
        )}
      </div>
      <Pagination meta={meta} />
    </div>
  );
};

export default DoctorsList;
