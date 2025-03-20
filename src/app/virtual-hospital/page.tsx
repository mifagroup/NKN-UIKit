import React from "react";
import {
  Connect,
  Hero,
  RequestService,
  ServiceInHome,
  Services,
} from "./components";
import { BranchesAddresses } from "../(home)/_components";

const Page = () => {
  return (
    <div>
      <Hero />
      <div className="max-w-[1125px] mx-auto lg:px-0 px-5 mt-10 pb-[150px]">
        <Services />
        <ServiceInHome />
      </div>
      <RequestService />
      <Connect />
      <BranchesAddresses />
    </div>
  );
};

export default Page;
