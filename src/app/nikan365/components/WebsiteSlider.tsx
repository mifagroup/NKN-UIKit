"use client";

import { Button, Typography } from "@mui/material";
import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper as SwiperType } from "swiper/types";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import Image from "next/image";

const WebsiteSlider = () => {
  const swiperRef = useRef<SwiperType>();

  const prevEl = useRef(null);
  const nextEl = useRef(null);

  const items = [
    [
      {
        id: 1,
        image: "/images/why-nikan-1.png",
        title: "خدمات در منزل",
        desc: "انجام امور درمانی در منزل",
      },
      {
        id: 2,
        image: "/images/why-nikan-2.png",
        title: "جواب آزمایش",
        desc: "دریافت اینترنتی گزارشات",
      },
    ],
    [
      {
        id: 1,
        image: "/images/why-nikan-1.png",
        title: "ویزیت مجازی",
        desc: "مشاوره با متخصص در هرجا",
      },
      {
        id: 2,
        image: "/images/why-nikan-2.png",
        title: "خدمات در منزل",
        desc: "انجام امور درمانی در منزل",
      },
    ],
  ];

  return (
    <div className="h-[795px] relative lg:block hidden">
      <div className="2xl:w-[20%] w-[17%] bg-[#E9E9E9] h-full absolute bottom-0 left-0" />
      <div className="flex relative justify-center">
        <Button
          className="!absolute top-1/2 translate-y-[-50%] 2xl:left-[10%] xl:left-[4%] left-0 z-10"
          onClick={() => swiperRef.current?.slideNext()}
        >
          <Image
            src={"/images/arrow-left.png"}
            alt="arrow-right"
            width={23}
            height={63.5}
          />
        </Button>
        <div className="h-[795px] flex items-center xl:w-[1113px] w-full">
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
            {[...Array(2)]?.map((_, index) => (
              <SwiperSlide key={index}>
                <div className="flex items-center xl:gap-x-[70px] gap-x-2 lg:w-fit w-full mx-auto">
                  <div className="flex xl:gap-x-[66px] items-center">
                    <div className="flex flex-col gap-y-[20px]">
                      {items[index]?.map((item) => (
                        <div className="flex flex-col gap-y-3" key={item.id}>
                          <Image
                            src={item.image}
                            alt={item.title}
                            width={83}
                            height={89}
                          />
                          <div className="flex flex-col gap-y-2">
                            <Typography className="!text-[20px] !font-extrabold !text-secondary-600 xl:max-w-[350px] max-w-[300px]">
                              {item.title}
                            </Typography>
                            <Typography className="!text-[15px] !font-light !text-secondary-400 xl:max-w-[350px] max-w-[300px] !text-justify">
                              {item.desc}
                            </Typography>
                          </div>
                        </div>
                      ))}
                    </div>
                    <Image
                      src={"/images/nikan365-web.png"}
                      alt="why-nikan"
                      width={689}
                      height={446}
                      quality={100}
                      className="lg:block hidden xl:w-[689px] xl:h-[446px] w-[600px] h-[356px]"
                    />
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <Button
            className="!absolute top-1/2 translate-y-[-50%] 2xl:right-[10%] xl:right-[4%] right-0 z-10"
            onClick={() => swiperRef.current?.slideNext()}
        >
          <Image
              src={"/images/arrow-right.png"}
              alt="arrow-right"
              width={23}
              height={63.5}
          />
        </Button>
      </div>
    </div>
  );
};

export default WebsiteSlider;
