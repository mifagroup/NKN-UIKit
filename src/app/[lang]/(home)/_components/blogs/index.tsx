"use client";

import { getDictionary } from "@/utils/getServerDictionary";
import { Button, Typography } from "@mui/material";
import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper as SwiperType } from "swiper/types";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import Image from "next/image";

const Blogs = ({
  dictionary,
}: {
  dictionary: Awaited<ReturnType<typeof getDictionary>>;
}) => {
  const swiperRef = useRef<SwiperType>();

  const prevEl = useRef(null);
  const nextEl = useRef(null);

  return (
    <div className="pt-[150px] pb-[170px] container">
      <div className="relative">
        <Button
          className="!min-w-fit !p-0 !absolute top-1/2 translate-y-[-50%] z-10"
          onClick={() => swiperRef.current?.slidePrev()}
        >
          <Image
            src={"/images/arrow-right.png"}
            alt="arrow-right"
            width={23}
            height={63.5}
          />
        </Button>
        <div className="flex gap-x-[54px] items-center justify-center max-w-[1106px] mx-auto">
          <Swiper
            onBeforeInit={(swiper) => {
              swiperRef.current = swiper;
            }}
            slidesPerView={1}
            modules={[Navigation]}
            navigation={{
              nextEl: nextEl.current,
              prevEl: prevEl.current,
            }}
          >
            {[...Array(3)]?.map((_, index) => (
              <SwiperSlide key={index}>
                <div className="border border-primary-main flex">
                  <Image
                    src={"/images/doctor-image.png"}
                    alt="doctor-image"
                    width={553}
                    height={489}
                  />
                  <div className="my-[38px] mx-10 flex flex-col gap-y-8 flex-1 relative">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-x-3">
                        <div className="flex gap-x-2">
                          <Image
                            src={"/images/calendar-icon.png"}
                            alt="calendar"
                            width={21}
                            height={23}
                          />
                          <Typography className="!font-extralight !text-[15px]">
                            20 شهریور 1403
                          </Typography>
                        </div>
                        <div className="flex gap-x-2">
                          <Image
                            src={"/images/clock-icon.png"}
                            alt="clock"
                            width={21}
                            height={23}
                          />
                          <Typography className="!font-extralight !text-[15px]">
                            هشت دقیقه
                          </Typography>
                        </div>
                        <Image
                          src={"/images/share-icon.png"}
                          alt="share"
                          width={21}
                          height={18}
                        />
                      </div>
                      <Image
                        src={"/images/bookmark-icon.png"}
                        alt="bookmark"
                        width={21}
                        height={23}
                      />
                    </div>
                    <div>
                      <Typography className="!text-[25px] !font-bold !text-secondary-600">
                        بیش از بیست و پنج درصد بیماران مرد هستند
                      </Typography>
                      <Typography className="!text-[20px] !text-secondary-600">
                        گفتگو با دکتر محرابی در خصوص پراکندگی زن و مرد
                      </Typography>
                      <Typography className="!font-extralight !text-[18px] !text-[#272727] pt-[70px]">
                        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت
                        چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون
                        بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و
                        برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با
                        هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت
                        و سه درصد گذشته ...
                      </Typography>
                    </div>
                    <button className="absolute left-0 bottom-0 text-[18px] font-thin">
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
