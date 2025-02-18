import React from "react";
import { ContactInfo, Hero, Info, Services } from "./components";
import { Connect } from "../branches/[id]/components";
import { BranchesAddresses } from "../(home)/_components";

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
