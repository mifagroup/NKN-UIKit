"use client";

import { getDictionary } from "@/utils/getServerDictionary";
import { Button, Typography } from "@mui/material";
import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper as SwiperType } from "swiper/types";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import Image from "next/image";

const WhyNikan = ({
  dictionary,
}: {
  dictionary: Awaited<ReturnType<typeof getDictionary>>;
}) => {
  const whyNikanTranslate = dictionary.why_nikan;

  const swiperRef = useRef<SwiperType>();

  const prevEl = useRef(null);
  const nextEl = useRef(null);

  const items = [
    {
      id: 1,
      image: "/images/why-nikan-1.png",
      title: whyNikanTranslate.items.num1.title,
      desc: whyNikanTranslate.items.num1.description,
    },
    {
      id: 2,
      image: "/images/why-nikan-2.png",
      title: whyNikanTranslate.items.num2.title,
      desc: whyNikanTranslate.items.num2.description,
    },
    {
      id: 3,
      image: "/images/why-nikan-3.png",
      title: whyNikanTranslate.items.num3.title,
      desc: whyNikanTranslate.items.num3.description,
    },
  ];

  return (
    <div className="lg:pt-20 pt-[65px] lg:pb-[240px] pb-[34px] flex flex-col gap-y-[70px] container lg:px-0 px-5">
      <Typography className="!text-center !text-secondary-600 !font-extrabold !text-[25px] lg:!block !hidden">
        {whyNikanTranslate.title}
      </Typography>
      <div className="relative">
        <Button
          className="!min-w-fit !p-0 !absolute top-1/2 translate-y-[-50%] z-10 lg:!block !hidden"
          onClick={() => swiperRef.current?.slidePrev()}
        >
          <Image
            src={"/images/arrow-right.png"}
            alt="arrow-right"
            width={23}
            height={63.5}
          />
        </Button>
        <div className="flex gap-x-[54px] items-center justify-center max-w-[1168px] mx-auto">
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
                <div className="flex items-center gap-x-[48px] lg:w-fit w-full mx-auto">
                  <Image
                    src={"/images/why-nikan-image.png"}
                    alt="why-nikan"
                    width={758}
                    height={661}
                    quality={100}
                    className="lg:block hidden"
                  />
                  <div className="flex flex-col gap-y-[40px]">
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
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default WhyNikan;
