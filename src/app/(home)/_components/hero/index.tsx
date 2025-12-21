"use client";

import { Typography } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import Link from "next/link";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import { useLanguage } from "@/contexts/LanguageContext";
import { components } from "@/lib/api/v1";

const isVideo = (url?: string) =>
    !!url && /\.(mp4|webm|ogg)$/i.test(url);

const SlideMedia = ({ url, title }: { url?: string; title: string }) => {
  if (!url) return null;

  return isVideo(url) ? (
      <video
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          className="lg:h-[83vh] h-[460px] w-full object-cover"
      >
        <source src={url} />
      </video>
  ) : (
      <img
          src={url}
          alt={title}
          loading="eager"
          className="lg:h-[83vh] h-[460px] w-full object-cover"
      />
  );
};

const Hero = ({ data }: { data: components["schemas"]["SliderResource"] }) => {
  const slides = data?.slides ?? [];
  const { t } = useLanguage();

  return (
      <Swiper
          className="w-full"
          loop
          modules={[Autoplay]}
          autoplay={{ delay: 5000 }}
      >
        {slides.map((slide, index) => {
          const content = (
              <>
                <SlideMedia
                    url={slide?.image?.original_url}
                    title={slide.title}
                />

                <div className="bg-[#00000060] absolute w-full h-full top-0" />

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
                    <Link href={slide.link} target="_blank" className="relative">
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
