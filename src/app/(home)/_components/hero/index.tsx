"use client";
import { Typography } from "@mui/material";
import Image from "next/image";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import { components } from "@/lib/api/v1";
import Link from "next/link";
import "swiper/css";
import { Autoplay } from "swiper/modules";

const Hero = ({ data }: { data: components["schemas"]["SliderResource"] }) => {
  const slides = data?.slides ?? [];

  return (
    <Swiper
      className="w-full"
      loop
      modules={[Autoplay]}
      autoplay={{ delay: 5000 }}
    >
      {slides?.map((slide, index) =>
        slide?.image?.extension === "mp4" ? (
          <SwiperSlide key={`slide-${index}`}>
            <video
              autoPlay
              loop
              muted
              className="lg:h-[83vh] h-[460px] w-full object-cover"
            >
              <source src={slide?.image?.original_url} type="video/mp4" />
            </video>
          </SwiperSlide>
        ) : (
          <SwiperSlide key={`slide-${index}`}>
            {!!slide?.link ? (
              <Link className="relative" href={slide.link} target="_blank">
                {!!slide?.image && (
                  <Image
                    src={slide?.image.original_url ?? ""}
                    alt="hero-image"
                    width={1920}
                    height={580}
                    quality={100}
                    className="object-cover lg:h-[580px] h-[460px]"
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
                    {slide?.button && (
                      <Link
                        className="!bg-primary-main !text-white lg:!w-[346px] !w-full !h-[57px] !rounded-[15px] !text-[24px] !font-medium flex items-center justify-center"
                        href={slide?.button?.link ?? ""}
                        target="_blank"
                      >
                        {slide?.button?.title}
                      </Link>
                    )}
                  </div>
                </div>
              </Link>
            ) : (
              <div className="relative">
                {!!slide?.image && (
                  <Image
                    src={slide?.image.original_url ?? ""}
                    alt="hero-image"
                    width={1920}
                    height={580}
                    quality={100}
                    className="object-cover lg:h-[580px] h-[460px]"
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
                    {slide?.button && (
                      <Link
                        className="!bg-primary-main !text-white lg:!w-[346px] !w-full !h-[57px] !rounded-[15px] !text-[24px] !font-medium flex items-center justify-center"
                        href={slide?.button?.link ?? ""}
                        target="_blank"
                      >
                        {slide?.button?.title}
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            )}
          </SwiperSlide>
        )
      )}
    </Swiper>
  );
};

export default Hero;
