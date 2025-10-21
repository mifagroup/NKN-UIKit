import React from "react";
import {
  CTOSpeech,
  Directors,
  HistorySlider,
  NikanIntroduction,
  Trophies,
} from "./components";
import "./styles.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "درباره بیمارستان نیکان / سوابق، افتخارات و استانداردهای درمانی",
    description:
        "با تاریخچه و تیم مدیریت بیمارستان نیکان آشنا شوید؛ سوابق درخشان، گواهینامه‌های معتبر و رسالت ما.",
};
const page = () => {
  return (
    <div>
      <NikanIntroduction />
      <HistorySlider />
      <CTOSpeech />
      <Trophies />
      <Directors />
    </div>
  );
};

export default page;
