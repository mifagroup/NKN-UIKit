"use client";
import React, { useRef } from "react";
import { useGetDictionary } from "@/utils/useGetClientDictionary";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import Image from "next/image";
import { Button, Typography } from "@mui/material";

const Nikan365IntroSlider = () => {
  const nextEl = useRef(null);
  const prevEl = useRef(null);

  const dictionary = useGetDictionary();

  const nikan365IntroTranslate = dictionary?.nikan365_intro;

  const sliderItems = [
    {
      id: 1,
      title: nikan365IntroTranslate?.electrnic_document,
      image: "/images/electric-document.png",
      width: 75,
    },
    {
      id: 2,
      title: nikan365IntroTranslate?.work_in_home,
      image: "/images/work-in-home.png",
      width: 59,
    },
    {
      id: 3,
      title: nikan365IntroTranslate?.expreriment_result,
      image: "/images/experiment-result.png",
      width: 99,
    },
    {
      id: 4,
      title: nikan365IntroTranslate?.phisyotherapy,
      image: "/images/phisyotherapy.png",
      width: 71,
    },
    {
      id: 5,
      title: nikan365IntroTranslate?.electrnic_document,
      image: "/images/electric-document.png",
      width: 75,
    },
    {
      id: 6,
      title: nikan365IntroTranslate?.work_in_home,
      image: "/images/work-in-home.png",
      width: 59,
    },
    {
      id: 7,
      title: nikan365IntroTranslate?.expreriment_result,
      image: "/images/experiment-result.png",
      width: 99,
    },
    {
      id: 8,
      title: nikan365IntroTranslate?.phisyotherapy,
      image: "/images/phisyotherapy.png",
      width: 71,
    },
  ];

  return (
    <div className="flex items-center gap-x-[60px]">
      {sliderItems?.length > 4 ? (
        <Button ref={prevEl} className="!min-w-fit !p-0">
          <Image
            src={"/images/arrow-right.png"}
            alt="arrow-right"
            width={12}
            height={34}
          />
        </Button>
      ) : null}
      <Swiper
        spaceBetween={45}
        slidesPerView={4}
        modules={[Navigation]}
        navigation={{
          nextEl: nextEl.current,
          prevEl: prevEl.current,
        }}
        className="max-w-[560px] !mx-0"
      >
        {sliderItems?.map((item) => (
          <SwiperSlide key={item.id}>
            <div className="flex flex-col gap-y-[18px]">
              <Image
                src={item.image}
                alt={item.image}
                width={item.width}
                height={79}
                className="mx-auto"
              />
              <Typography className="!font-medium !text-secondary-400 !text-center whitespace-nowrap">
                {item.title}
              </Typography>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      {sliderItems?.length > 4 ? (
        <Button ref={nextEl} className="!min-w-fit !p-0">
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
