"use client";
import { Button } from "@mui/material";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper as SwiperType } from "swiper/types";

interface HistoryItem {
  year: string;
  title: string;
  content: string;
  image: string;
}

const HistorySlider = () => {
  const swiperRef = useRef<SwiperType>();
  const [activeIndex, setActiveIndex] = useState(0);
  const timelineRef = useRef<HTMLDivElement>(null);
  const yearRefs = useRef<(HTMLDivElement | null)[]>([]);

  const prevEl = useRef(null);
  const nextEl = useRef(null);

  const historyData: HistoryItem[] = [
    {
      year: "1375",
      title: "تاریخچه نیکان",
      content:
        "در اواسط دهه هفتاد شمسی، رویکرد مشتری مداری و بیمارمحوری در کنار فرهنگ ارتقا مستمر کیفیت در خدمات سلامتی مورد توجه دست اندرکاران نظام سلامت کشور قرار گرفت .\n این موضوع نگاه بسیاری از مدیران شاغل در بخش های درمانی را به رویکردی نوین که در آن بیماران و پرسنل در کنار کادر درمانی به عنوان مشتری، محور خدمات قرار می گرفت، را به خود جلب نموده و آنان را به توسعه و اشاعه فرهنگ مشتری نوازی در بیمارستان ها سوق داد. اما محدودیت منابع و قوانین دست و پا گیر و ساختار بوروکراسی حاکم بر بیمارستان های دولتی، آموزش کادر درمانی در فضایی آکنده از  فرهنگ و جو مشتری مداری و مشتری نوازی را سخت، و اجرا و پیاده سازی آن را بسیار کند می نمود.",
      image: "/images/history-image.png",
    },
    {
      year: "1380",
      title: "پیش از طوفان",
      content:
        "در اواسط دهه هشتاد شمسی، رویکرد مشتری مداری و بیمارمحوری در کنار فرهنگ ارتقا مستمر کیفیت در خدمات سلامتی مورد توجه دست اندرکاران نظام سلامت کشور قرار گرفت. این دوره شاهد تحولات مهمی در زمینه خدمات درمانی و توسعه زیرساخت های بیمارستانی بود.",
      image: "/images/aboutNikan.svg",
    },
    {
      year: "1387",
      title: "توسعه و گسترش",
      content:
        "در سال 1387، گروه درمانی نیکان وارد مرحله جدیدی از توسعه و گسترش شد. در این دوره، استانداردهای جدید خدمات درمانی پیاده‌سازی شد و تجهیزات پیشرفته‌ای به مجموعه اضافه گردید که منجر به ارتقای کیفیت خدمات و رضایت بیماران شد.",
      image: "/images/history-image.png",
    },
    {
      year: "1393",
      title: "دوران تحول",
      content:
        "سال 1393 نقطه عطفی در تاریخ گروه درمانی نیکان محسوب می‌شود. در این سال، طرح تحول نظام سلامت تأثیر قابل توجهی بر فعالیت‌های این مجموعه گذاشت و باعث شد تا خدمات درمانی با کیفیت بالاتر و دسترسی آسان‌تر به بیماران ارائه شود.",
      image: "/images/aboutNikan.svg",
    },
    {
      year: "1400",
      title: "عصر نوآوری",
      content:
        "با آغاز قرن جدید، گروه درمانی نیکان وارد عصر نوآوری و فناوری‌های پیشرفته شد. در این دوره، استفاده از تکنولوژی‌های نوین در تشخیص و درمان بیماری‌ها، پزشکی از راه دور و سیستم‌های مدیریت یکپارچه بیمارستانی در دستور کار قرار گرفت.",
      image: "/images/history-image.png",
    },
    {
      year: "1404",
      title: "نیکان امروز",
      content:
        "امروز، گروه درمانی نیکان به عنوان یکی از پیشگامان ارائه خدمات درمانی با کیفیت در کشور شناخته می‌شود. با تکیه بر تجربه چندین ساله و بهره‌گیری از دانش روز دنیا، این مجموعه همچنان به مسیر خود در جهت ارتقای سلامت جامعه ادامه می‌دهد.",
      image: "/images/aboutNikan.svg",
    },
  ];

  const handleYearClick = (index: number) => {
    swiperRef.current?.slideTo(index);
    setActiveIndex(index);
  };

  useEffect(() => {
    if (timelineRef.current && yearRefs.current[activeIndex]) {
      const container = timelineRef.current;
      const activeYearElement = yearRefs.current[activeIndex];

      if (activeYearElement) {
        const containerWidth = container.offsetWidth;
        const yearWidth = activeYearElement.offsetWidth;
        const yearLeft = activeYearElement.offsetLeft;

        const scrollPosition =
          yearLeft - containerWidth / 2 + yearWidth / 2 - 300;

        container.scrollTo({
          left: scrollPosition,
          behavior: "smooth",
        });
      }
    }
  }, [activeIndex]);

  return (
    <div className="max-w-[1240px] container lg:pb-0 pb-[28px] mt-10">
      <div className="relative mb-8 mt-4 overflow-x-auto" ref={timelineRef}>
        <div className="min-w-[700px] lg:mx-0 mx-10 md:min-w-0 md:w-full relative pb-4">
          <div className="h-[2px] bg-gray-300 absolute top-1/2 left-0 right-0 -translate-y-1/2"></div>
          <div className="flex md:px-10 justify-between relative">
            {historyData.reverse().map((item, index) => (
              <div
                key={index}
                className="flex flex-col items-center cursor-pointer"
                onClick={() => handleYearClick(index)}
                ref={(el) => (yearRefs.current[index] = el)}
              >
                <div
                  className={`w-[24px] h-[24px] rounded-full ${
                    activeIndex === index ? "bg-primary-main" : "bg-gray-300"
                  } z-10 lg:translate-y-[34px] translate-y-[34px]`}
                >

                </div>
                <div className="text-sm h-10 mt-4 flex items-end text-[16px] !font-bold ">
                  {index + historyData.length == historyData.length ? 'امروز' : 'سال ' +  item.year}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between">
        <Button
          className="!min-w-fit !p-0 lg:!block !hidden"
          onClick={() => {
            swiperRef.current?.slidePrev();
            if (activeIndex > 0) {
              setActiveIndex(activeIndex - 1);
            }
          }}
        >
          <Image
            src={"/images/arrow-right.png"}
            alt="arrow-right"
            width={23}
            height={65}
          />
        </Button>
        <div className="max-w-[1091px] w-full grid lg:grid-cols-2 grid-cols-1 justify-items-center items-center lg:gap-x-[105px]">
          <Image
            src={"/images/history-image.png"}
            alt="history-image"
            height={593}
            width={517}
            quality={100}
            className="lg:border-r-[9px] lg:block hidden border-r-[7px] border-primary-main lg:h-[593px] lg:max-w-[517px] max-w-[400px] lg:w-[517px] w-full h-[451px] lg:object-cover sm:object-contain object-cover"
          />
          <div className="h-full lg:pt-[130px] pt-[30px]">
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
              onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
              className="about-us-history-swiper lg:max-w-[496px] w-screen lg:h-full h-[400px]"
            >
              {historyData.map((item, index) => (
                <SwiperSlide key={index}>
                  <div className="flex lg:justify-end justify-center items-center">
                    <div className="lg:max-w-[496px] max-w-[413px] flex flex-col lg:pr-[27px] lg:gap-y-6 gap-y-3 lg:px-0 px-5">
                      <span className="text-end lg:text-[36px] text-[30px] text-[#D8D8D8]">
                        تاریخچه نیکان
                      </span>
                      <span className="text-end text-[#626262] lg:text-[36px] text-[30px] font-black">
                        {item.title}
                      </span>
                      <div className="flex flex-col">
                        <span className="lg:text-[15px] text-[12px] font-light leading-[27px] text-justify">
                          {item.content.split("\n").map((paragraph, i) => (
                            <React.Fragment key={i}>
                              {paragraph}
                              {i < item.content.split("\n").length - 1 && (
                                <br />
                              )}
                            </React.Fragment>
                          ))}
                        </span>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          <Image
            src={"/images/history-image.png"}
            alt="history-image"
            height={593}
            width={517}
            quality={100}
            className="lg:border-r-[9px] block lg:hidden border-r-[7px] border-primary-main lg:h-[593px] lg:max-w-[517px] max-w-[400px] lg:w-[517px] w-full h-[451px] lg:object-cover sm:object-contain object-cover"
          />
        </div>
        <Button
          className="!min-w-fit !p-0 lg:!block !hidden"
          onClick={() => {
            swiperRef.current?.slideNext();
            if (activeIndex < historyData.length - 1) {
              setActiveIndex(activeIndex + 1);
            }
          }}
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

export default HistorySlider;
