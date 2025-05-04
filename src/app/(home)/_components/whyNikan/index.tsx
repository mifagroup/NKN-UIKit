"use client";

import { components } from "@/lib/api/v1";
import { Button, Typography } from "@mui/material";
import Image from "next/image";
import { Fragment, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper as SwiperType } from "swiper/types";

import "swiper/css";
import "swiper/css/autoplay";

const WhyNikan = ({
  data,
}: {
  data: components["schemas"]["SliderResource"];
}) => {
  const swiperRef = useRef<SwiperType>();
  const swiperRef2 = useRef<SwiperType>();

  // Function to chunk the slides array into groups of 3
  //@ts-expect-error - TS is not recognizing the chunkArray function
  const chunkArray = (array, size: number) => {
    const result = [];
    for (let i = 0; i < array.length; i += size) {
      result.push(array.slice(i, i + size));
    }
    return result;
  };

  const chunkedSlides = chunkArray(data?.slides ?? [], 3);

  return (
    <div className="lg:pt-20 pt-[15px] lg:pb-[240px] pb-[34px] flex flex-col gap-y-[70px] container lg:px-0 ">
      <Typography className="!text-center !text-secondary-600 !font-extrabold !text-[25px] !text-xl lg:!block ">
        {data.name}
      </Typography>

      {/* Desktop version - unchanged */}
      <div className="relative lg:block hidden">
        <Button
          className="!min-w-fit !p-0 !absolute top-1/2 translate-y-[-50%] z-10"
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
          />
        </Button>
        <Button
          className="!min-w-fit !p-0 !absolute top-1/2 translate-y-[-50%] left-0 z-10"
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
            className="rotate-180"
          />
        </Button>
        <div className="flex gap-x-[54px] items-center justify-center max-w-[1168px] mx-auto">
          <Swiper
            onBeforeInit={(swiper) => {
              swiperRef2.current = swiper;
            }}
            slidesPerView={1}
            loop
            className="!max-w-[758px]"
          >
            {data?.thumbnails?.concat(data?.thumbnails)?.map((image, index) => (
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
          <div className="relative">
            <div className="h-full w-full z-50 absolute" />
            <Swiper
              onBeforeInit={(swiper) => {
                swiperRef.current = swiper;
              }}
              loop
              slidesPerView={1}
              direction="vertical"
              spaceBetween={30}
              className="max-h-[680px]"
              allowTouchMove={false}
            >
              {chunkedSlides.map((chunk, index) => (
                <SwiperSlide key={index}>
                  <div className="flex flex-col">
                    {/* @ts-expect-error - TS is not recognizing the chunkArray function */}
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
          </div>
        </div>
      </div>

        <div className="lg:hidden flex flex-col gap-y-8">
            {data?.thumbnails &&
                data?.slides &&
                data?.thumbnails.length > 0 &&
                data?.slides.length > 0 && (
                    <>
                        {chunkArray(data.slides, 3).map((chunk, chunkIndex) => (
                            <Fragment key={chunkIndex}>
                                <div className="flex flex-col gap-y-6 px-5">
                                    {chunk.map((slide : components["schemas"]["SlideResource"], index : number) => (
                                        <div key={index} className="flex gap-x-4 w-full mx-auto">
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
                                   src={
                                       data.thumbnails?.[chunkIndex]?.original_url ??
                                       ""
                                   }
                                   alt={
                                       data.thumbnails?.[chunkIndex]?.file_name ??
                                       ""
                                   }
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
