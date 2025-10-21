import React from "react";
import { ContactInfo, Hero, Info, Services } from "./components";
import { Connect } from "../branches/[id]/components";
import { BranchesAddresses } from "../(home)/_components";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "واحد بین‌الملل بیمارستان نیکان / خدمات درمانی برای بیماران خارجی",
    description:
        "خدمات درمانی توریست سلامت در بیمارستان نیکان؛ مشاوره، اقامت و برنامه‌ریزی درمانی ویژه بیماران خارجی. تماس بگیرید.",
};
const page = () => {
  return (
    <>
      <div className="max-w-[1100px] mx-auto lg:px-0 px-5">
        <Hero />
        <ContactInfo />
        <Info />
        <Services />
      </div>
      <Connect />
      <BranchesAddresses />
    </>
  );
};

export default page;
