"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper as SwiperType } from "swiper/types";
import { Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

const OpticServices = () => {
  const swiperRef = useRef<SwiperType>();

  return (
    <div className="items-center justify-between flex pt-[106px]">
      <div className="flex flex-col justify-center items-center flex-grow">
        <div className="max-w-[430px] w-[430px] flex flex-col gap-y-2">
          <Image
            alt="image"
            src={"/images/optic-service.png"}
            width={109}
            height={127}
          />
          <span className="text-[20px] font-black text-[#5b5b5b]">
            خدمات مرکز چشم نیکان
          </span>
          <span className="text-[15px] font-light text-[#7d7d7d] text-justify">
            مركز جراحي محدود و سرپايي نیکان با نظر به اهمیت والای بینایی به
            عنوان مهم‌ترین عضو ارتباطی بشر با جهان پیرامون و اهمیت استفاده از
            پیشرفته‌ترین امکانات و ارائه بهترین خدمات
          </span>
        </div>
        <Link
          href={""}
          className="text-[15px] text-[#323232] font-medium w-[346px] h-[57px] rounded-[15px] bg-[#dfdfdf] flex justify-center items-center mt-[44px]"
        >
          تعیین وقت چشم پزشکی
        </Link>
      </div>
      <div className="max-w-[720px]">
        <Swiper
          onBeforeInit={(swiper) => {
            swiperRef.current = swiper;
          }}
          slidesPerView={1}
          modules={[Pagination]}
          pagination={{
            clickable: true,
          }}
          className="optic-slider-swiper"
        >
          {[...Array(5)]?.map((_, index) => (
            <SwiperSlide key={index}>
              <Image
                src={"/images/optic-slider-image.png"}
                alt="image"
                width={720}
                height={458}
                quality={100}
                className=""
                key={index}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default OpticServices;
