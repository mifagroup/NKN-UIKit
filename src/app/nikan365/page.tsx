
import React from "react";
import { Hero, NikanOnline, AppSlider, Video, Reason, Steps, Nikan, Comments } from "./components";
import { BranchesAddresses } from "../(home)/_components";
import "./style.css";

const page = async () => {
  return (
    <div className="overflow-x-hidden">
      <Hero />
      <AppSlider />
      <Video />
      <Reason />
      <Steps />
      <Nikan />
      <Comments />
      <NikanOnline />
      <BranchesAddresses />
    </div>
  );
};

export default page;
