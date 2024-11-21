import { getDictionary } from "@/utils/getServerDictionary";
import { Button, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";

const Hero = ({
  dictionary,
}: {
  dictionary: Awaited<ReturnType<typeof getDictionary>>;
}) => {
  const homeHeroTranslate = dictionary.home_hero;

  const keywordsTranslate = dictionary.keywords;

  return (
    <div className="relative">
      <Image
        src={"/images/hero-image.png"}
        alt="hero-image"
        width={2000}
        height={580}
        quality={100}
        className="object-cover lg:!h-[580px] !h-[660px] lg:max-h-[580px] lg:object-top object-[20%]"
      />
      <div className="bg-[#00000060] absolute w-full h-full top-0"></div>
      <div className="container max-w-[1216px]">
        <div className="absolute lg:top-[184px] bottom-[60px] flex flex-col lg:gap-y-[26px] gap-y-[20px] lg:left-auto lg:right-auto left-5 right-5">
          <div className="flex flex-col">
            <Typography className="!font-extrabold !text-[32px] !text-white">
              {homeHeroTranslate.title}
            </Typography>
            <Typography className="!font-light !text-white lg:!text-[20px] !text-[14px]">
              {homeHeroTranslate.subtitle}
            </Typography>
          </div>
          <Button className="!bg-primary-main !text-white lg:!w-[346px] !w-full !h-[57px] !rounded-[15px] !text-[24px] !font-medium">
            {keywordsTranslate.online_reserve}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
