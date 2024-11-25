"use client";
import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper as SwiperType } from "swiper/types";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";
import { Button } from "@mui/material";

const HistorySlider = () => {
  const swiperRef = useRef<SwiperType>();

  const prevEl = useRef(null);
  const nextEl = useRef(null);

  return (
    <div className="max-w-[1240px] container">
      <div className="flex items-center justify-between">
        <Button
          className="!min-w-fit !p-0"
          onClick={() => swiperRef.current?.slidePrev()}
        >
          <Image
            src={"/images/arrow-right.png"}
            alt="arrow-right"
            width={23}
            height={65}
          />
        </Button>
        <div className="max-w-[1091px] grid grid-cols-2 items-center gap-x-[105px]">
          <Image
            src={"/images/history-image.png"}
            alt="history-image"
            height={593}
            width={517}
            quality={100}
            className="border-r-[9px] border-primary-main h-[593px] w-[517px]"
          />
          <div className="h-full pt-[130px]">
            <Swiper
              onBeforeInit={(swiper) => {
                swiperRef.current = swiper;
              }}
              slidesPerView={1}
              spaceBetween={10}
              pagination={{
                clickable: true,
              }}
              modules={[Navigation, Pagination]}
              navigation={{
                nextEl: nextEl.current,
                prevEl: prevEl.current,
              }}
              className="about-us-history-swiper max-w-[496px] h-full"
            >
              {[...Array(3)]?.map((_, index) => (
                <SwiperSlide key={index}>
                  <div className="flex justify-end items-center">
                    <div className="max-w-[496px] flex flex-col pr-[27px] gap-y-6">
                      <span className="text-[#626262] text-[36px] font-black">
                        تاریخچه گروه درمانی نیکان
                      </span>
                      <span className="text-[15px] font-light leading-[27px] text-justify">
                        در اواسط دهه هفتاد شمسی، رویکرد مشتری مداری و بیمارمحوری
                        در کنار فرهنگ ارتقا مستمر کیفیت در خدمات سلامتی مورد
                        توجه دست اندرکاران نظام سلامت کشور قرار گرفت .<br /> این
                        موضوع نگاه بسیاری از مدیران شاغل در بخش های درمانی را به
                        رویکردی نوین که در آن بیماران و پرسنل در کنار کادر
                        درمانی به عنوان مشتری، محور خدمات قرار می گرفت، را به
                        خود جلب نموده و آنان را به توسعه و اشاعه فرهنگ مشتری
                        نوازی در بیمارستان ها سوق داد. اما محدودیت منابع و
                        قوانین دست و پا گیر و ساختار بوروکراسی حاکم بر بیمارستان
                        های دولتی، آموزش کادر درمانی در فضایی آکنده از  فرهنگ و
                        جو مشتری مداری و مشتری نوازی را سخت، و اجرا و پیاده سازی
                        آن را بسیار کند می نمود.
                      </span>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
        <Button
          className="!min-w-fit !p-0"
          onClick={() => swiperRef.current?.slideNext()}
        >
          <Image
            src={"/images/arrow-left.png"}
            alt="arrow-right"
            width={23}
            height={65}
          />
        </Button>
      </div>
    </div>
  );
};

export default HistorySlider;
