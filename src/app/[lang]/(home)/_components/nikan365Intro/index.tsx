import { Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import Nikan365IntroSlider from "../nikan365IntroSlider";
import { components } from "@/lib/api/v1";

const Nikan365Intro = ({
  data,
}: {
  data: components["schemas"]["SliderResource"];
}) => {
  return (
    <div className="lg:pr-[56px] pr-[30px] lg:pl-[168px] pt-[44px] lg:pb-[27px] pb-[46px] flex justify-between items-center">
      <div className="items-center gap-x-1.5 lg:flex hidden">
        <Image
          src={data?.thumbnails?.[0].original_url ?? ""}
          alt="nikan-365-logo"
          width={210}
          height={149}
          quality={100}
        />
        <div className="flex flex-col gap-y-0.5">
          <Typography className="xl:!text-[36px] !text-[26px] !font-extrabold !text-secondary-600">
            {data?.name}
          </Typography>
          <Typography className="!font-light !text-secondary-200">
            {data?.description}
          </Typography>
        </div>
      </div>
      <Nikan365IntroSlider data={data.slides ?? []} />
    </div>
  );
};

export default Nikan365Intro;
