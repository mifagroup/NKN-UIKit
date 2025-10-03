"use client";

import { components } from "@/lib/api/v1";
import { Button, Typography } from "@mui/material";
import Image from "next/image";
import { Fragment, useEffect, useMemo, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper as SwiperType } from "swiper/types";
import { useLanguage } from "@/contexts/LanguageContext";

import "swiper/css";
import "swiper/css/autoplay";

const WhyNikan = ({
  data,
}: {
  data: components["schemas"]["SliderResource"];
}) => {
  const swiperRef = useRef<SwiperType>();
  const swiperRef2 = useRef<SwiperType>();
  const { direction, language } = useLanguage();
  const isRTL = direction === "rtl";
  const { prevButtonClasses, nextButtonClasses, prevIconClasses, nextIconClasses } = useMemo(
    () => {
      const baseButton = "!min-w-fit !p-0 !absolute top-1/2 translate-y-[-50%] z-10";
      return {
        prevButtonClasses: `${baseButton} ${isRTL ? "right-0" : "left-0"}`,
        nextButtonClasses: `${baseButton} ${isRTL ? "left-0" : "right-0"}`,
        prevIconClasses: isRTL ? "" : "rotate-180",
        nextIconClasses: isRTL ? "rotate-180" : "",
      };
    },
    [isRTL]
  );

  // Function to chunk the slides array into groups of 3
  const chunkArray = <T,>(array: T[], size: number): T[][] => {
    const result: T[][] = [];
    for (let i = 0; i < array.length; i += size) {
      result.push(array.slice(i, i + size));
    }
    return result;
  };

  const thumbnails = data?.thumbnails ?? [];
  const slides = data?.slides ?? [];
  const chunkedSlides = useMemo(() => chunkArray(slides, 3), [slides]);
  const thumbnailsSignature = useMemo(
    () =>
      thumbnails
        .map((thumb, index) => thumb?.id ?? thumb?.original_url ?? thumb?.file_name ?? index)
        .join("|"),
    [thumbnails]
  );
  const slidesSignature = useMemo(
    () =>
      slides
        .map((slide, index) => slide?.id ?? slide?.title ?? `${index}-${slide?.description?.length ?? 0}`)
        .join("|"),
    [slides]
  );
  const chunkedSignature = useMemo(
    () => chunkedSlides.map((chunk) => chunk.map((item) => item?.id ?? item?.title).join("~")).join("|").trim(),
    [chunkedSlides]
  );
  const imageSliderKey = useMemo(
    () => `${language}-${direction}-${thumbnailsSignature}`,
    [language, direction, thumbnailsSignature]
  );
  const contentSliderKey = useMemo(
    () => `${language}-${direction}-${chunkedSignature}-${slidesSignature}`,
    [language, direction, chunkedSignature, slidesSignature]
  );

  useEffect(() => {
    const primary = swiperRef.current;
    const secondary = swiperRef2.current;

    const refreshSwiper = (swiper?: SwiperType) => {
      if (!swiper) return;
      if (swiper.el && direction) {
        swiper.el.dir = direction;
        const directionalSwiper = swiper as SwiperType & {
          rtlTranslate?: boolean;
          rtl?: boolean;
        };
        directionalSwiper.rtlTranslate = direction === "rtl";
        directionalSwiper.rtl = direction === "rtl";
      }
      swiper.updateSlides();
      swiper.update();
      if (swiper.params.loop) {
        try {
          swiper.loopDestroy();
          swiper.loopCreate();
        } catch {}
      }
      if (typeof swiper.slideToLoop === "function") {
        swiper.slideToLoop(0, 0, false);
      } else {
        swiper.slideTo(0, 0, false);
      }
    };

    refreshSwiper(primary);
    refreshSwiper(secondary);
  }, [imageSliderKey, contentSliderKey, direction]);

  return (
    <div className="lg:pt-20 pt-[15px] lg:pb-[240px] pb-[34px] flex flex-col gap-y-[70px] container lg:px-0 ">
      <div className="text-center lg:text-start !text-[#5B5B5B] !font-extrabold !text-[25px] !text-xl max-w-[1168px] mx-auto w-full lg:!block self-start">
        {data.name}
      </div>

      {/* Desktop version */}
      <div className="relative lg:block hidden">
        <Button
          className={prevButtonClasses}
          onClick={() => {
            swiperRef.current?.slidePrev();
            swiperRef2.current?.slidePrev();
          }}
        >
          <Image
            src={"/images/arrow-right.png"}
            alt="arrow-right"
            width={23}
            height={63.5}
            className={prevIconClasses}
          />
        </Button>
        <Button
          className={nextButtonClasses}
          onClick={() => {
            swiperRef.current?.slideNext();
            swiperRef2.current?.slideNext();
          }}
        >
          <Image
            src={"/images/arrow-right.png"}
            alt="arrow-left"
            width={23}
            height={63.5}
            className={nextIconClasses}
          />
        </Button>
        <div className="flex gap-x-[54px] items-center justify-center max-w-[1168px] mx-auto">
          {thumbnails.length > 0 && (
            <Swiper
              key={imageSliderKey}
              onBeforeInit={(swiper) => {
                swiperRef2.current = swiper;
              }}
              slidesPerView={1}
              loop={thumbnails.length > 1}
              className="!max-w-[758px]"
            >
              {thumbnails.map((image, index) => (
                <SwiperSlide key={index}>
                  <Image
                    src={image.original_url ?? ""}
                    alt={image.file_name ?? ""}
                    width={758}
                    height={661}
                    quality={100}
                    className="w-[758px] h-[661px] object-cover"
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          )}
          <div className="relative">
            <div className="h-full w-full z-50 absolute" />
            {chunkedSlides.length > 0 && (
              <Swiper
                key={contentSliderKey}
                onBeforeInit={(swiper) => {
                  swiperRef.current = swiper;
                }}
                loop={chunkedSlides.length > 1}
                slidesPerView={1}
                direction="vertical"
                spaceBetween={30}
                className="max-h-[680px]"
                allowTouchMove={false}
              >
                {chunkedSlides.map((chunk, index) => (
                  <SwiperSlide key={index}>
                    <div className="flex flex-col">
                      {chunk.map((item) => (
                        <div
                          className="flex gap-x-[48px] w-fit mx-0 h-[226px]"
                          key={item.id}
                        >
                          <div className="flex flex-col gap-y-3">
                            <Image
                              src={item.image.original_url ?? ""}
                              alt={item.title}
                              width={83}
                              height={89}
                            />
                            <div className="flex flex-col gap-y-2">
                              <Typography className="!text-[20px] !font-extrabold !text-secondary-600 max-w-[350px]">
                                {item.title}
                              </Typography>
                              <Typography className="!text-[15px] !font-light !text-secondary-400 max-w-[350px] !text-justify">
                                {item.description}
                              </Typography>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            )}
          </div>
        </div>
      </div>

      <div className="lg:hidden flex flex-col gap-y-8">
        {thumbnails.length > 0 && slides.length > 0 && (
          <>
            {chunkedSlides.map((chunk, chunkIndex) => (
              <Fragment key={chunkIndex}>
                <div className="flex flex-col gap-y-6 px-5">
                  {chunk.map((slide) => (
                    <div key={slide.id} className="flex gap-x-4 w-full mx-auto">
                      <div className="flex flex-col gap-y-3">
                        <Image
                          src={slide.image.original_url ?? ""}
                          alt={slide.title}
                          width={60}
                          height={65}
                          className="w-[60px] h-[65px]"
                        />
                        <div className="flex flex-col gap-y-2">
                          <Typography className="!text-[18px] !font-extrabold !text-secondary-600">
                            {slide.title}
                          </Typography>
                          <Typography className="!text-[14px] !font-light !text-secondary-400 !text-justify">
                            {slide.description}
                          </Typography>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <Image
                  src={thumbnails?.[chunkIndex]?.original_url ?? ""}
                  alt={thumbnails?.[chunkIndex]?.file_name ?? ""}
                  width={758}
                  height={400}
                  quality={100}
                  className="w-full h-auto object-cover"
                />
              </Fragment>
            ))}
          </>
        )}
      </div>
    </div>
  );
};

export default WhyNikan;
