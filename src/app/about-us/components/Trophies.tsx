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
    <div className="max-w-[1106px] container lg:pt-[118px] hidden">
      <div className="flex justify-between items-center">
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
              <div className="flex lg:flex-row flex-col items-center justify-center lg:gap-x-[90px]">
                <div className="flex justify-end items-center max-w-[604px] lg:order-1 order-2">
                  <div className="flex flex-col lg:pr-[27px] lg:pl-0 lg:gap-y-6 gap-y-2 lg:max-w-fit max-w-[370px] px-5">
                    <span className="text-black lg:text-[20px] text-[18px] font-black">
                      برگزیده بهترین بیمارستان دنیا در تهران 1403
                    </span>
                    <span className="lg:text-base text-[15px] font-light text-black text-justify">
                      بیمارستان نیکان، به عنوان بیمارستان برگزیده دنیا در سال
                      ۱۴۰۳، نمادی از تعالی در حوزه خدمات درمانی و مراقبت‌های
                      بهداشتی است. این بیمارستان با بهره‌گیری از فناوری‌های
                      پیشرفته پزشکی، کادر درمانی مجرب و استانداردهای جهانی،
                      توانسته است خدمات بی‌نظیری را به بیماران ارائه دهد.
                      بیمارستان نیکان با تمرکز بر بهبود تجربه بیماران، محیطی
                      امن، آرام و مدرن را فراهم کرده است که در آن تشخیص، درمان و
                      مراقبت‌های پس از آن با بالاترین کیفیت انجام می‌شود. این
                      افتخار بزرگ، نتیجه تلاش‌های مستمر تیم نیکان در راستای
                      ارتقای سلامت و رفاه جامعه در سطح جهانی است.
                    </span>
                  </div>
                </div>
                <Image
                  src={"/images/trophy.png"}
                  alt="trophy"
                  width={151}
                  height={347}
                  className="lg:w-[151px] lg:h-[347px] w-[132px] h-[302px] lg:order-2 order-1"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
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

export default Trophies;
