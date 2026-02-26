"use client";
import React, { useRef } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import Image from "next/image";
import { Button, Typography, useMediaQuery, useTheme } from "@mui/material";
import { components } from "@/lib/api/v1";
import Link from "next/link";

const Nikan365IntroSlider = ({
  data,
}: {
  data: components["schemas"]["SlideResource"][];
}) => {
  const nextEl = useRef(null);
  const prevEl = useRef(null);

  const theme = useTheme();

  const greaterThanLg = useMediaQuery(theme.breakpoints.up("lg"));

  return (
    <div className="flex items-center lg:gap-x-[60px] gap-x-10">
      {data?.length > 4 ? (
        <Button ref={prevEl} className="!min-w-fit !p-0">
          <Image
            src={"/images/arrow-right.png"}
            alt="arrow-right"
            width={12}
            height={34}
          />
        </Button>
      ) : null}
      <div className="lg:w-auto w-[calc(100vw-85px)]">
        <Swiper
          spaceBetween={45}
          slidesPerView={4}
          breakpoints={{
            1385: {
              slidesPerView: 4,
              spaceBetween: 45,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 45,
            },
            768: {
              slidesPerView: 6,
              spaceBetween: 25,
            },
            300: {
              slidesPerView: 3.9,
              spaceBetween: 25,
            },
          }}
          modules={[Navigation]}
          navigation={{
            nextEl: nextEl.current,
            prevEl: prevEl.current,
          }}
          className="xl:max-w-[560px] lg:max-w-[400px] lg:!mx-0"
        >
          {data?.map((item) => (
            <SwiperSlide key={item.id}>
              {!!item?.link ? (
                <Link
                  className="flex flex-col gap-y-[18px]"
                  href={item.link}
                  target="_blank"
                >
                  <Image
                      unoptimized
                    src={item.image.original_url ?? ""}
                    alt={item.title}
                    width={greaterThanLg ? 70 : 60}
                    height={greaterThanLg ? 79 : 65}
                    className="mx-auto xl:h-[79px] h-[65px] object-contain"
                    quality={100}
                  />
                  <Typography className="!font-medium !text-secondary-400 !text-center whitespace-nowrap lg:!text-base !text-[10px]">
                    {item.title}
                  </Typography>
                </Link>
              ) : (
                <div className="flex flex-col gap-y-[18px]">
                  <Image
                    src={item.image.original_url ?? ""}
                    alt={item.title}
                    width={greaterThanLg ? 70 : 60}
                    height={greaterThanLg ? 79 : 65}
                    className="mx-auto xl:h-[79px] h-[65px] object-contain"
                  />
                  <Typography className="!font-medium !text-secondary-400 !text-center whitespace-nowrap lg:!text-base !text-[10px]">
                    {item.title}
                  </Typography>
                </div>
              )}
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      {data?.length > 4 ? (
        <Button ref={nextEl} className="!min-w-fit !p-0 lg:!block !hidden">
          <Image
            src={"/images/arrow-left.png"}
            alt="arrow-left"
            width={12}
            height={34}
          />
        </Button>
      ) : null}
    </div>
  );
};

export default Nikan365IntroSlider;
