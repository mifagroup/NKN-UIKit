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
    <div className="relative max-h-[580px]">
      <Image
        src={"/images/hero-image.png"}
        alt="hero-image"
        width={2000}
        height={580}
        quality={100}
        className="object-cover max-h-[580px] object-top"
      />
      <div className="absolute top-[184px] pr-[112px] flex flex-col gap-y-[26px]">
        <div className="flex flex-col">
          <Typography className="!font-extrabold !text-[32px] !text-white">
            {homeHeroTranslate.title}
          </Typography>
          <Typography className="!font-light !text-white !text-[20px]">
            {homeHeroTranslate.subtitle}
          </Typography>
        </div>
        <Button className="!bg-primary-main !text-white !w-[346px] !h-[57px] !rounded-[15px] !text-[24px] !font-medium">
          {keywordsTranslate.online_reserve}
        </Button>
      </div>
    </div>
  );
};

export default Hero;
