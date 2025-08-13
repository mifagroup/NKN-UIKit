"use client";

import Image from "next/image";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import {Autoplay, Pagination} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const AppSlider = () => {
  const items = [
    {
      id: 1,
      image: "/images/nikan365-swiper01.png",
      title: "نیکان 365",
    },
    {
      id: 2,
      image: "/images/nikan365-swiper02.jpg",
      title: "اپلیکشن نیکان",
    },
    {
      id: 2,
      image: "/images/nikan365-swiper03.jpg",
      title: "اپلیکشن نیکان",
    },
    {
      id: 2,
      image: "/images/nikan365-swiper04.jpg",
      title: "اپلیکشن نیکان",
    },
  ];
  const rightItems = [
    {
      title: "دسترسی به پرونده پزشکی",
      desc: "مشاهده و مدیریت سوابق پزشکی به صورت آنلاین",
      image: "/images/nikan365-01.png",
    },
    {
      title: "خدمات درمانی در منزل",
      desc: "ارائه خدمات درمانی در منزل برای راحتی بیماران.",
      image: "/images/nikan365-02.png",
    },
    {
      title: "چکاپ سلامت انفرادی و گروهی",
      desc: "مناسب پایش سلامت برای هر نفر یا سازمان ها و گروه های بزرگ",
      image: "/images/nikan365-03.png",
    },
  ];
  const leftItems = [
    {
      title: "نوبت‌دهی آنلاین",
      desc: "رزرو وقت ملاقات با پزشکان متخصص به صورت آنلاین.",
      image: "/images/nikan365-04.png",
    },
    {
      title: "مشاوره پزشکی",
      desc: "دریافت مشاوره پزشکی از طریق تماس تصویری یا متنی.",
      image: "/images/nikan365-05.png",
    },
    {
      title: "تفسیر آزمایش با هوش مصنوعی و بررسی پزشک",
      desc: "تحلیل نتایج آزمایش‌ها با دقت بالا و سرعت بیشتر",
      image: "/images/nikan365-06.png",
    },
  ];

  return (
    <div className=" relative container mb-[60px] md:justify-items-center">
      <div className="lg:flex hidden flex-col gap-y-5 max-w-[950px]">
        <span className="text-[#383838] text-2xl font-bold">
           نیکان ۳۶۵؛ سلامت دیجیتال در دستان شما
        </span>
        <span className="text-base text-[#383838] font-light">
          نیکان ۳۶۵ یک سوپراپلیکیشن سلامت دیجیتال است که با همکاری مجموعه
          بیمارستان‌های نیکان توسعه یافته تا ارتباط بیمار با خدمات درمانی را به
          ساده‌ترین شکل ممکن برقرار کند. این سامانه، خدماتی مثل نوبت‌گیری، ویزیت
          آنلاین، پرونده سلامت دیجیتال، خدمات در منزل، تفسیر هوشمند آزمایش‌ها و
          مدیریت سلامت خانواده را یکجا و با امنیت بالا ارائه می‌دهد.
        </span>
      </div>

      <div className="lg:flex  items-center justify-center gap-6 mt-10">
        <div className="lg:flex hidden flex-col gap-y-5">
          {rightItems.map((item, index: number) => (
            <div
              className="flex gap-2 items-center self-end"
              key={item.title + (index + 1 * 1000)}
            >
              <div className="flex flex-col gap-y-2 items-end">
                <span className="text-[#323232] text-[13px] font-semibold">
                  {item.title}
                </span>
                <span className="text-[#323232] text-[13px] font-light">
                  {item.desc}
                </span>
              </div>
              <Image
                src={item.image}
                alt={item.title}
                quality={100}
                width={92}
                height={104}
              />
            </div>
          ))}
        </div>
        <div className="md:w-[269px] nikan365_slider">
          <Swiper
            slidesPerView={1}
            spaceBetween={10}
            pagination={{
              clickable: true,
            }}
            loop={true}
            modules={[Pagination , Autoplay]}
            autoplay={{ delay: 5000 }}
            className="md:w-[269px]"
          >
            {items.map((item, index: number) => (
              <SwiperSlide key={item.title + index}>
                <div className="w-full  lg:block flex items-start justify-center h-[540px]">
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={269}
                    height={495}
                    className=" h-[495px]"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <div className="lg:flex hidden flex-col gap-y-5">
          {leftItems.map((item, index: number) => (
            <div className="flex gap-2 items-center self-start" key={item.title + index}>
              <Image
                src={item.image}
                alt={item.title}
                quality={100}
                width={92}
                height={104}
              />
              <div className="flex flex-col gap-y-2 items-start">
                <span className="text-[#323232] text-[13px] font-semibold">
                  {item.title}
                </span>
                <span className="text-[#323232] text-[13px] font-light">
                  {item.desc}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AppSlider;
