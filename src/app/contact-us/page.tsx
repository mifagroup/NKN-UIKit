import React from "react";
import { Branches, Contact } from "./components";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "تماس با بیمارستان نیکان / آدرس و تلفن شعب اقدسیه، غرب و سپید	",
    description:
        "راه‌های ارتباط با بیمارستان نیکان (اقدسیه و غرب). مشاهده آدرس فیزیکی و شماره‌های تماس مستقیم.	",
};
const page = () => {
  return (
    <div>
      <Branches />
      <Contact />
    </div>
  );
};

export default page;
