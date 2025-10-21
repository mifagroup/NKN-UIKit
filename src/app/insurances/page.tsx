import React from "react";
import InsurancesContent from "./components/InsurancesContent";
import { BranchesAddresses } from "../(home)/_components";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "بیمه‌های طرف قرارداد با بیمارستان نیکان / لیست و جزئیات پوشش",
    description:
        "لیست کامل بیمه‌های طرف قرارداد با بیمارستان‌های نیکان. قبل از نوبت‌دهی، وضعیت بیمه خود را بررسی کنید",
};
const page = () => {
  return (
    <div>
      <InsurancesContent />
      <BranchesAddresses />
    </div>
  );
};

export default page;
