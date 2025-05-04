"use client";

import { Button, Typography } from "@mui/material";
import Image from "next/image";
import { useRef } from "react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper as SwiperType } from "swiper/types";

const AppSlider = () => {
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
    <div className="lg:h-[795px] relative lg:mb-0 mb-[60px]">
      <div className="lg:w-[39%] w-full bg-primary-main lg:h-full h-[27%] absolute top-0" />
      <div className="flex relative justify-center">
        <Button
          className="!absolute top-1/2 translate-y-[-50%] lg:left-[15%] left-0 z-10 lg:!block !hidden"
          onClick={() => swiperRef.current?.slidePrev()}
        >
          <Image
            src={"/images/arrow-left.png"}
            alt="arrow-right"
            width={23}
            height={63.5}
          />
        </Button>
        <div className="lg:h-[795px] md:flex items-center lg:w-[700px] w-full lg:mt-0 mt-[70px]">
          <Image
            src={"/images/nikan365-app.png"}
            alt="why-nikan"
            width={260}
            height={502}
            quality={100}
            className="place-self-center"
          />
          <Swiper
            onBeforeInit={(swiper) => {
              swiperRef.current = swiper;
            }}
            slidesPerView={1}
            loop
            modules={[Navigation]}
            navigation={{
              nextEl: nextEl.current,
              prevEl: prevEl.current,
            }}
          >
            {[...Array(2)]?.map((_, index) => (
              <SwiperSlide key={index}>
                <div className="flex lg:flex-row flex-col items-center gap-x-[70px] gap-y-[50px] lg:w-fit w-full mx-auto">
                  <div className="flex flex-col gap-y-[20px] lg:px-0 px-[50px]">
                    {items[index]?.map((item) => (
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
        <Button
          className="!absolute top-1/2 translate-y-[-50%] lg:right-[15%] right-0 z-10 lg:!block !hidden"
          onClick={() => swiperRef.current?.slideNext()}
        >
          <Image
            src={"/images/arrow-right-light.svg"}
            alt="arrow-right"
            width={23}
            height={63.5}
          />
        </Button>
      </div>
    </div>
  );
};

export default AppSlider;
