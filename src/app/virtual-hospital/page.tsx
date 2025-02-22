import React from "react";
import { Hero, ServiceInHome, Services } from "./components";

const Page = () => {
  return (
    <div>
      <Hero />
      <div className="max-w-[1125px] mx-auto lg:px-0 px-5 mt-10">
        <Services />
        <ServiceInHome />
      </div>
    </div>
  );
};

export default Page;
