import React from "react";
import { Content, Hero } from "./components";

const page = () => {
  return (
    <div className="lg:max-w-[1107px] w-full mx-auto">
      <Hero />
      <Content />
    </div>
  );
};

export default page;
