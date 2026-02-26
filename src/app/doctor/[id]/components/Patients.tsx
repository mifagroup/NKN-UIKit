import { components } from "@/lib/api/v1";
import { Divider } from "@mui/material";
import Image from "next/image";
import React from "react";

const Patients = ({
  doctor,
}: {
  doctor: components["schemas"]["DoctorResource"];
}) => {
  return (
    <div className="lg:px-0 px-5">
      <div className="flex flex-col gap-y-5 lg:pt-0 pt-5">
        <Divider className="!mt-10 !mb-0 !bg-[#AFAFAF] lg:block hidden" />
        <span className="text-base font-semibold text-black">
          برخی از بیماران و نمونه کارهای {doctor.full_name}
        </span>
        <div className="grid grid-cols-4 justify-items-center">
          {doctor.portfolio?.map((portfolio, index) => (
            <div key={index} className="md:col-span-1 col-span-2">
              <Image
                  unoptimized
                src={portfolio.original_url ?? ""}
                alt="patients"
                width={246}
                height={150}
                quality={100}
                className="lg:w-[246px] lg:h-[150px]"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Patients;
