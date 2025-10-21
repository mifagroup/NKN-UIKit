import React from "react";
import SocialResponsibilityPage from "./components/PageRender";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "مسئولیت اجتماعی بیمارستان نیکان / تعهد به سلامت جامعه و محیط زیست",
  description: "تعهد نیکان به سلامت جامعه و محیط زیست؛ مطالعه گزارش",
};
const Page = () => {
  return <SocialResponsibilityPage />;
};

export default Page;
