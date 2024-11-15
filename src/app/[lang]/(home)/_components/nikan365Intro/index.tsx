import { Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import Nikan365IntroSlider from "../nikan365IntroSlider";

const Nikan365Intro = () => {
  return (
    <div className="pr-[56px] pl-[168px] pt-[44px] pb-[27px] flex justify-between items-center">
      <div className="flex items-center gap-x-1.5">
        <Image
          src={"/images/nikan365-logo.png"}
          alt="nikan-365-logo"
          width={210}
          height={149}
          quality={100}
        />
        <div className="flex flex-col gap-y-0.5">
          <Typography className="!text-[36px] !font-extrabold !text-secondary-600">
            نیکان 365
          </Typography>
          <Typography className="!font-light !text-secondary-200">
            سامانه آنلاین جامع بیمارستان نیکان
          </Typography>
        </div>
      </div>
      <Nikan365IntroSlider />
    </div>
  );
};

export default Nikan365Intro;
