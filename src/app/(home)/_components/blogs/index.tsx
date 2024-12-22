"use client";

import { Button, Typography } from "@mui/material";
import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper as SwiperType } from "swiper/types";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import Image from "next/image";

const Blogs = () => {
  const swiperRef = useRef<SwiperType>();

  const prevEl = useRef(null);
  const nextEl = useRef(null);

  return (
    <div className="pt-[150px] pb-[170px] container lg:px-0 px-12">
      <div className="relative">
        <Button
          className="!min-w-fit !p-0 !absolute lg:top-1/2 lg:translate-y-[-50%] top-[25%] right-[-30px] z-10"
          onClick={() => swiperRef.current?.slidePrev()}
        >
          <Image
            src={"/images/arrow-right.png"}
            alt="arrow-right"
            width={23}
            height={63.5}
            className="lg:!h-[63.5px] lg:!w-[23px] !h-[32px] !w-[11px]"
          />
        </Button>
        <div className="flex gap-x-[54px] items-center justify-center max-w-[1106px] mx-auto">
          <Swiper
            onBeforeInit={(swiper) => {
              swiperRef.current = swiper;
            }}
            slidesPerView={1}
            spaceBetween={10}
            modules={[Navigation]}
            navigation={{
              nextEl: nextEl.current,
              prevEl: prevEl.current,
            }}
          >
            {[...Array(3)]?.map((_, index) => (
              <SwiperSlide key={index}>
                <div className="border border-primary-main flex lg:flex-row flex-col">
                  <Image
                    src={"/images/doctor-image.png"}
                    alt="doctor-image"
                    width={553}
                    height={489}
                    className="lg:w-[553px] lg:h-[489px] md:h-auto h-[200px] w-[100%] object-cover object-top"
                  />
                  <div className="lg:my-[38px] lg:mx-10 my-4 mx-2.5 lg:pb-0 pb-8 flex flex-col lg:gap-y-8 gap-y-4 flex-1 relative">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-x-3 lg:justify-start justify-between w-full">
                        <div className="flex gap-x-2 items-center">
                          <Image
                            src={"/images/calendar-icon.png"}
                            alt="calendar"
                            width={21}
                            height={23}
                            className="lg:h-[23px] h-[12px] lg:w-[21px] w-[12px]"
                          />
                          <Typography className="!font-extralight lg:!text-[15px] !text-[11px]">
                            20 شهریور 1403
                          </Typography>
                        </div>
                        <div className="flex gap-x-2 items-center">
                          <Image
                            src={"/images/clock-icon.png"}
                            alt="clock"
                            width={21}
                            height={23}
                            className="lg:h-[23px] h-[12px] lg:w-[21px] w-[12px]"
                          />
                          <Typography className="!font-extralight lg:!text-[15px] !text-[11px]">
                            هشت دقیقه
                          </Typography>
                        </div>
                        <Image
                          src={"/images/share-icon.png"}
                          alt="share"
                          width={21}
                          height={18}
                          className="lg:h-[21px] h-[13px] lg:w-[21px] w-[14px]"
                        />
                      </div>
                      <Image
                        src={"/images/bookmark-icon.png"}
                        alt="bookmark"
                        width={21}
                        height={23}
                        className="lg:block hidden"
                      />
                    </div>
                    <div>
                      <Typography className="lg:!text-[25px] !text-[13px] !font-bold !text-secondary-600">
                        بیش از بیست و پنج درصد بیماران مرد هستند
                      </Typography>
                      <Typography className="lg:!text-[20px] !text-[13px] !text-secondary-600 lg:pt-0 pt-1">
                        گفتگو با دکتر محرابی در خصوص پراکندگی زن و مرد
                      </Typography>
                      <Typography className="!font-extralight lg:!text-[18px] !text-[11px] !text-[#272727] lg:pt-[70px] pt-[15px]">
                        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت
                        چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون
                        بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و
                        برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با
                        هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت
                        و سه درصد گذشته ...
                      </Typography>
                    </div>
                    <button className="absolute left-0 bottom-0 lg:text-[18px] text-[11px] text-black font-thin">
                      مطالعه بیشتر
                    </button>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
