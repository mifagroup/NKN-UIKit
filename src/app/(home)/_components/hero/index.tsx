"use client";

import { useState } from "react";
import { Typography } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import Link from "next/link";
import "swiper/css";

import { useLanguage } from "@/contexts/LanguageContext";
import HeroMedia from "./HeroMedia";

export interface SlideButton {
  title: string;
  link: string;
}

export interface Slide {
  image: string;
  mobile_image: string;
  title: string;
  description: string;
  button?: SlideButton;
  link?: string;
}

export interface HeroProps {
  data: {
    slides: Slide[];
  };
}

const Hero = ({ data }: HeroProps) => {
  const slides = data?.slides ?? [];
  const { t } = useLanguage();
  const [activeIndex, setActiveIndex] = useState(0);

  const handleSlideChange = (swiper: SwiperType) => {
    setActiveIndex(swiper.realIndex);
  };

  return (
    <Swiper
      className="w-full"
      loop
      modules={[Autoplay]}
      autoplay={{ delay: 5000, disableOnInteraction: false }}
      onSlideChange={handleSlideChange}
    >
      {slides.map((slide, index) => {
        const isActive = activeIndex === index;

        const content = (
          <>
            <HeroMedia
              image={slide.image?.original_url}
              mobileImage={slide.mobile_image?.original_url ?? slide.image?.original_url}
              title={slide.title}
              isActive={isActive}
              priority={index === 0}
            />

                {/*<div className="bg-[#00000060] absolute w-full h-full top-0" />*/}

            <div className="container max-w-[1216px]">
              <div className="absolute bottom-[60px] lg:top-[184px] flex flex-col gap-y-[20px] lg:gap-y-[26px] left-5 right-5 max-w-[450px]">
                <div>
                  <Typography className="!font-extrabold !text-[32px] !text-white">
                    {slide.title}
                  </Typography>
                  <Typography className="!font-light !text-white lg:!text-[20px] !text-[14px]">
                    {slide.description}
                  </Typography>
                </div>

                {slide?.button && (
                  <Link
                    className="!bg-primary-main !text-white lg:!w-[346px] !w-full !h-[57px] !rounded-[15px] !text-[24px] !font-medium flex items-center justify-center"
                    href={slide.button.link ?? ""}
                    target="_blank"
                  >
                    {slide.button.title || t("home.hero.button")}
                  </Link>
                )}
              </div>
            </div>
          </>
        );

        return (
          <SwiperSlide key={`slide-${index}`}>
            {slide?.link ? (
              <Link href={slide.link} target="_blank" className="relative block">
                {content}
              </Link>
            ) : (
              <div className="relative">{content}</div>
            )}
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default Hero;
