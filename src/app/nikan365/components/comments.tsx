"use client";
import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper as SwiperType } from "swiper/types";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { Button } from "@mui/material";
import Image from "next/image";

const Comments = () => {
  const swiperRef = useRef<SwiperType>();

  const prevEl = useRef(null);
  const nextEl = useRef(null);
  const items = [
    {
      id: 1,
      title: "«همه نسخه‌ها و آزمایش‌های دخترم را یکجا در اپ می‌بینم. عالیه!»",
      desc: "امیر، پدر یک کودک ۷ ساله",
    },
  ];

  return (
    <div className="bg-[#31D1B0] py-10 md:py-20 mt-[100px] lg:block hidden">
      <div className="container max-w-[1004px]">
        <div className="flex items-center md:gap-20 justify-center">
          <h2 className="text-[#fff] text-[32px] font-semibold">نظرات کاربران نیکان 365</h2>
          <div className="flex relative justify-center">
            <Button className="" onClick={() => swiperRef.current?.slidePrev()}>
              <svg
                width="23"
                height="57"
                viewBox="0 0 23 57"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1 1L21 27.4173C21 27.4173 4.91304 53.4016 3.17391 56"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </Button>
            <Swiper
              onBeforeInit={(swiper) => {
                swiperRef.current = swiper;
              }}
              slidesPerView={1}
              modules={[Navigation]}
              loop
              navigation={{
                nextEl: nextEl.current,
                prevEl: prevEl.current,
              }}
            >
              {items.map((item) => (
                <SwiperSlide className="pb-4" key={item.id}>
                  <div className="relative justify-end items-end bg-white rounded-lg p-6 shadow-sm after:content-[''] after:absolute after:right-4 after:-bottom-4 after:border-l-[18px] after:border-r-[18px] after:border-t-[18px] after:border-l-transparent after:border-r-transparent after:border-t-white">
                    <h3 className="text-[#000000] text-end text-[20px] ">{item.title}</h3>
                    <p className="text-[#000000] text-end text-[20px] font-light mt-2">{item.desc}</p>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>{" "}
            <Button onClick={() => swiperRef.current?.slideNext()}>
              <svg
                width="19"
                height="45"
                viewBox="0 0 19 45"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M18 44L2 23.3465C2 23.3465 14.8696 3.03149 16.2609 0.999999"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Comments;
