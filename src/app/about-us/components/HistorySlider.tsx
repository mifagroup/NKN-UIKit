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
import Link from "next/link";

const HistorySlider = () => {
  const swiperRef = useRef<SwiperType>();

  const prevEl = useRef(null);
  const nextEl = useRef(null);

  return (
    <div className="max-w-[1240px] container lg:pb-0 pb-[28px]">
      <div className="flex items-center justify-between">
        <Button
          className="!min-w-fit !p-0 lg:!block !hidden"
          onClick={() => swiperRef.current?.slidePrev()}
        >
          <Image
            src={"/images/arrow-right.png"}
            alt="arrow-right"
            width={23}
            height={65}
          />
        </Button>
        <div className="max-w-[1091px] w-full grid lg:grid-cols-2 grid-cols-1 justify-items-center items-center lg:gap-x-[105px]">
          <Image
            src={"/images/history-image.png"}
            alt="history-image"
            height={593}
            width={517}
            quality={100}
            className="lg:border-r-[9px] border-r-[7px] border-primary-main lg:h-[593px] lg:max-w-[517px] max-w-[400px] lg:w-[517px] w-full h-[451px] lg:object-cover sm:object-contain object-cover"
          />
          <div className="h-full lg:pt-[130px] pt-[30px]">
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
              className="about-us-history-swiper lg:max-w-[496px] w-screen lg:h-full h-[400px]"
            >
              {[...Array(3)]?.map((_, index) => (
                <SwiperSlide key={index}>
                  <div className="flex lg:justify-end justify-center items-center">
                    <div className="lg:max-w-[496px] max-w-[413px] flex flex-col lg:pr-[27px] lg:gap-y-6 gap-y-3 lg:px-0 px-5">
                      <span className="text-[#626262] lg:text-[36px] text-[30px] font-black">
                        تاریخچه گروه درمانی نیکان
                      </span>
                      <div className="flex flex-col">
                        <span className="lg:text-[15px] text-[12px] font-light leading-[27px] text-justify">
                          در اواسط دهه هفتاد شمسی، رویکرد مشتری مداری و
                          بیمارمحوری در کنار فرهنگ ارتقا مستمر کیفیت در خدمات
                          سلامتی مورد توجه دست اندرکاران نظام سلامت کشور قرار
                          گرفت .<br /> این موضوع نگاه بسیاری از مدیران شاغل در
                          بخش های درمانی را به رویکردی نوین که در آن بیماران و
                          پرسنل در کنار کادر درمانی به عنوان مشتری، محور خدمات
                          قرار می گرفت، را به خود جلب نموده و آنان را به توسعه و
                          اشاعه فرهنگ مشتری نوازی در بیمارستان ها سوق داد. اما
                          محدودیت منابع و قوانین دست و پا گیر و ساختار بوروکراسی
                          حاکم بر بیمارستان های دولتی، آموزش کادر درمانی در
                          فضایی آکنده از  فرهنگ و جو مشتری مداری و مشتری نوازی
                          را سخت، و اجرا و پیاده سازی آن را بسیار کند می نمود.
                        </span>
                        <Link
                          href={""}
                          className="self-end lg:text-[16px] text-[12px]"
                        >
                          ادامه مطلب
                        </Link>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
        <Button
          className="!min-w-fit !p-0 lg:!block !hidden"
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
