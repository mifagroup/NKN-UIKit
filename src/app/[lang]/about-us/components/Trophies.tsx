"use client";
import { Button } from "@mui/material";
import Image from "next/image";
import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper as SwiperType } from "swiper/types";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Trophies = () => {
  const swiperRef = useRef<SwiperType>();

  const prevEl = useRef(null);
  const nextEl = useRef(null);

  return (
    <div className="max-w-[1106px] container pt-[118px]">
      <div className="flex justify-between items-center">
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
          className="about-us-trophies-swiper"
        >
          {[...Array(3)]?.map((_, index) => (
            <SwiperSlide key={index}>
              <div className="flex items-center justify-center gap-x-[90px]">
                <div className="flex justify-end items-center max-w-[604px]">
                  <div className="flex flex-col pr-[27px] gap-y-6">
                    <span className="text-black text-[20px] font-black">
                      برگزیده بهترین بیمارستان دنیا در تهران 1403
                    </span>
                    <span className="text-base font-light text-black text-justify">
                      و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با
                      نرم افزارها شناخت بیشتری را برای طراحان رایانه ای به پایان
                      رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و
                      جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد
                      استفاده قرار گیرد.
                    </span>
                  </div>
                </div>
                <Image
                  src={"/images/trophy.png"}
                  alt="trophy"
                  width={151}
                  height={347}
                  className="w-[151px] h-[347px]"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
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

export default Trophies;
