import { Divider } from "@mui/material";
import Image from "next/image";
import React from "react";

const Patients = () => {
  return (
    <div className="lg:px-0 px-5">
      <div className="flex flex-col gap-y-5 lg:pt-0 pt-5">
        <Divider className="!mt-10 !mb-0 !bg-[#AFAFAF] lg:block hidden" />
        <span className="text-base font-semibold text-black">
          برخی از بیماران و نمونه کارهای دکتر فلانی
        </span>
        <div className="grid grid-cols-4 justify-items-center">
          {[...Array(8)]?.map((_, index) => (
            <div key={index} className="md:col-span-1 col-span-2">
              <Image
                src={"/images/patients.png"}
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
