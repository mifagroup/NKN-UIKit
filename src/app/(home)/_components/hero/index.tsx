"use client";
import { Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import Link from "next/link";
import { components } from "@/lib/api/v1";

const Hero = ({ data }: { data: components["schemas"]["SliderResource"] }) => {
  const slides = data?.slides ?? [];

  return (
    <Swiper className="w-full" loop>
      {slides?.map((slide, index) => (
        <SwiperSlide key={index}>
          <div className="relative">
            {!!slide?.image && (
              <Image
                src={slide?.image.original_url ?? ""}
                alt="hero-image"
                width={2000}
                height={580}
                quality={100}
                className="object-cover lg:!h-[580px] !h-[660px] lg:max-h-[580px] lg:object-top object-[20%]"
              />
            )}
            <div className="bg-[#00000060] absolute w-full h-full top-0"></div>
            <div className="container max-w-[1216px]">
              <div className="absolute lg:top-[184px] bottom-[60px] flex flex-col lg:gap-y-[26px] gap-y-[20px] lg:left-auto lg:right-auto left-5 right-5">
                <div className="flex flex-col">
                  <Typography className="!font-extrabold !text-[32px] !text-white">
                    {slide.title}
                  </Typography>
                  <Typography className="!font-light !text-white lg:!text-[20px] !text-[14px]">
                    {slide.description}
                  </Typography>
                </div>
                <Link
                  className="!bg-primary-main !text-white lg:!w-[346px] !w-full !h-[57px] !rounded-[15px] !text-[24px] !font-medium flex items-center justify-center"
                  href={slide?.button?.link ?? ""}
                  target="_blank"
                >
                  {slide?.button?.title}
                </Link>
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Hero;
