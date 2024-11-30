import { Divider } from "@mui/material";
import Image from "next/image";
import React from "react";

const Patients = () => {
  return (
    <div className="flex flex-col gap-y-5">
      <Divider className="!mt-10 !mb-0 !bg-[#AFAFAF]" />
      <span className="text-base font-semibold text-black">
        برخی از بیماران و نمونه کارهای دکتر فلانی
      </span>
      <Image
        src={"/images/patients.png"}
        alt="patients"
        width={990}
        height={225}
      />
    </div>
  );
};

export default Patients;
