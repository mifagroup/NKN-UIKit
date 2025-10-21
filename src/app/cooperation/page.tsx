import React from "react";
import type { Metadata } from "next";
import RenderPage from "./components/RenderPage";

export const metadata: Metadata = {
  title: "سامانه ثبت درخواست همکاری و استخدام در بیمارستان‌های نیکان	",
  description:
      "فرصت‌های شغلی در بیمارستان نیکان اقدسیه، غرب و سپید. برای تکمیل فرم استخدام و همکاری کلیک کنید.	",
};
const Page = () => {
  return <RenderPage />;
};

export default Page;
