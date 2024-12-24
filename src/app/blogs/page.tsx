import React from "react";
import { BlogsList, TopBlog } from "./components";

const page = () => {
  return (
    <div className="max-w-[1150px] container lg:pt-[87px] pt-10 lg:pb-[134px] pb-[60px]">
      <TopBlog />
      <BlogsList />
    </div>
  );
};

export default page;
