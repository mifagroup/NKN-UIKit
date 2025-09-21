import { components } from "@/lib/api/v1";
import { Divider } from "@mui/material";
import React from "react";

const Bio = ({
  doctor,
}: {
  doctor: components["schemas"]["DoctorResource"];
}) => {
  return (
    <div className="lg:px-0 px-5">
      <Divider className="!my-5 !bg-[#AFAFAF] !h-[1px] lg:block hidden" />
      <div className="flex flex-col lg:gap-y-1 lg:pt-0 pt-7 mx-auto lg:max-w-max max-w-[350px]">
        <div
            className="prose prose-sm prose-neutral max-w-none"
          dangerouslySetInnerHTML={{ __html: doctor?.description ?? "" }}
        />
      </div>
    </div>
  );
};

export default Bio;
