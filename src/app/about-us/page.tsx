import React from "react";
import {
  CTOSpeech,
  Directors,
  HistorySlider,
  NikanIntroduction,
  Trophies,
} from "./components";
import "./styles.css";
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
