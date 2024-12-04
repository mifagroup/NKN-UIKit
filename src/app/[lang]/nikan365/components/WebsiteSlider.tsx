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
    {
      id: 1,
      image: "/images/why-nikan-1.png",
      title: "پیشگیری و مراقبت متمایز",
      desc: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و لورم ایپسوم متن ساختگی با تولید سادگی ",
    },
    {
      id: 2,
      image: "/images/why-nikan-2.png",
      title: "پیشگیری و مراقبت متمایز",
      desc: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و لورم ایپسوم متن ساختگی با تولید سادگی ",
    },
  ];

  return (
    <div className="h-[795px] relative">
      <div className="2xl:w-[20%] w-[17%] bg-[#E9E9E9] h-full absolute bottom-0 left-0" />
      <div className="flex relative justify-center">
        <Button
          className="!absolute top-1/2 translate-y-[-50%] 2xl:left-[10%] left-[4%] z-10"
          onClick={() => swiperRef.current?.slideNext()}
        >
          <Image
            src={"/images/arrow-left.png"}
            alt="arrow-right"
            width={23}
            height={63.5}
          />
        </Button>
        <div className="h-[795px] flex items-center w-[1113px]">
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
                <div className="flex items-center gap-x-[70px] lg:w-fit w-full mx-auto">
                  <div className="flex gap-x-[66px]">
                    <div className="flex flex-col gap-y-[20px]">
                      {items?.map((item) => (
                        <div className="flex flex-col gap-y-3" key={item.id}>
                          <Image
                            src={item.image}
                            alt={item.title}
                            width={83}
                            height={89}
                          />
                          <div className="flex flex-col gap-y-2">
                            <Typography className="!text-[20px] !font-extrabold !text-secondary-600 max-w-[350px]">
                              {item.title}
                            </Typography>
                            <Typography className="!text-[15px] !font-light !text-secondary-400 max-w-[350px] !text-justify">
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
                      className="lg:block hidden"
                    />
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

export default WebsiteSlider;
