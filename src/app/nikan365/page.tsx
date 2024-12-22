import React from "react";
import { AppSlider, Hero, NikanOnline, WebsiteSlider } from "./components";
import { BranchesAddresses } from "../(home)/_components";

const page = async () => {
  return (
    <div>
      <Hero />
      <AppSlider />
      <WebsiteSlider />
      <NikanOnline />
      <BranchesAddresses />
    </div>
  );
};

export default page;
