"use client";
import Image from "next/image";
import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper as SwiperType } from "swiper/types";
import "swiper/css";
import ArrowForwardIosOutlinedIcon from "@mui/icons-material/ArrowForwardIosOutlined";
import ArrowBackIosOutlinedIcon from "@mui/icons-material/ArrowBackIosOutlined";

const data = [
  {
    id: 1,
    title: "آموزش مادران باردار",
    image: "/images/service-slide-1.png",
  },
  {
    id: 2,
    title: "خدمات آزمایشگاهی در منزل",
    image: "/images/service-slide-2.png",
  },
  {
    id: 3,
    title: "پرستاری در منزل",
    image: "/images/service-slide-3.png",
  },
  {
    id: 4,
    title: "خدمات پزشکی در منزل",
    image: "/images/service-slide-4.png",
  },
  {
    id: 5,
    title: "اجاره تجهیزات پزشکی",
    image: "/images/service-slide-5.png",
  },
  {
    id: 6,
    title: "فالو آپ و بعد از ترخیص",
    image: "/images/service-slide-6.png",
  },
  {
    id: 7,
    title: "آموزش مادران باردار",
    image: "/images/service-slide-1.png",
  },
  {
    id: 8,
    title: "خدمات آزمایشگاهی در منزل",
    image: "/images/service-slide-2.png",
  },
  {
    id: 9,
    title: "پرستاری در منزل",
    image: "/images/service-slide-3.png",
  },
  {
    id: 10,
    title: "خدمات پزشکی در منزل",
    image: "/images/service-slide-4.png",
  },
  {
    id: 11,
    title: "اجاره تجهیزات پزشکی",
    image: "/images/service-slide-5.png",
  },
  {
    id: 12,
    title: "فالو آپ و بعد از ترخیص",
    image: "/images/service-slide-6.png",
  },
];

const RequestService = () => {
  const swiperRef = useRef<SwiperType>();

  return (
    <div className="py-[60px] bg-[#EDEDED]">
      <div className="max-w-[1000px] flex flex-col gap-y-10 mx-auto lg:px-0 px-5">
        <div className="flex flex-col gap-y-5">
          <span className="text-[24px] font-black text-[#3E3E3E]">
            فرم درخواست و دریافت خدمات
          </span>
          <span className="text-[15px] text-[#7D7D7D] font-light">
            این مجموعه از به‌روزترین امکانات و تجهیزات حال حاضر دنیا استفاده
            می‌کند و مجهز به بخش‌های تحت نظر یا Day Care است که آماده‌سازی بیمار
            برای عمل جراحی ومراقبت‌های پس از عمل تا ترخیص در آن صورت می‌گیرد.
            این مجموعه شامل کلینیک‌های گوارش، پستان، اورولوژی، داخلی مغز و
            اعصاب، فوق‌تخصص ارتوپدی،{" "}
          </span>
        </div>
        <div className="grid lg:grid-cols-3 grid-cols-1 gap-x-3 lg:gap-y-5 gap-y-3 border-b border-b-[#ACACAC] pb-10">
          <input
            type="text"
            placeholder="نام و نام خانوادگی"
            className="col-span-1 h-[45px] bg-white text-black px-4 py-3 rounded-[12px] focus-visible:outline-none placeholder:text-black text-sm"
          />
          <input
            type="text"
            placeholder="شماره تماس"
            className="col-span-1 h-[45px] bg-white text-black px-4 py-3 rounded-[12px] focus-visible:outline-none placeholder:text-black text-sm"
          />
          <div className="col-span-1 grid grid-cols-4 gap-3">
            <div className="col-span-1 h-[45px] bg-white rounded-[12px] text-black text-sm flex items-center justify-center">
              مرد
            </div>
            <div className="col-span-1 h-[45px] bg-white rounded-[12px] text-black text-sm flex items-center justify-center">
              زن
            </div>
            <div className="col-span-2 h-[45px] bg-white rounded-[12px] text-black text-sm flex items-center justify-center">
              سن
            </div>
          </div>
          <input
            type="text"
            placeholder="ایمیل"
            className="col-span-1 h-[45px] bg-white text-black px-4 py-3 rounded-[12px] focus-visible:outline-none placeholder:text-black text-sm lg:block hidden"
          />
          <input
            type="text"
            placeholder="شماره تماس ثابت"
            className="col-span-1 h-[45px] bg-white text-black px-4 py-3 rounded-[12px] focus-visible:outline-none placeholder:text-black text-sm lg:block hidden"
          />
          <div className="flex justify-between font-light items-center col-span-1 p-3 rounded-[12px] bg-[#D9D9D9]">
            بارگذاری تصویر
            <Image
              src={"/images/upload-icon.png"}
              alt=""
              height={22}
              width={22}
            />
          </div>
        </div>
        <div className="flex flex-col gap-y-10">
          <span className="text-xl font-light text-black">
            درخواست و تخصص مورد نظر خود را دقیقا وارد نمایید
          </span>
          <div className="flex items-center gap-x-3 relative lg:w-full w-fit mx-auto">
            <ArrowForwardIosOutlinedIcon
              className="absolute lg:right-[-30px] right-[-50px] cursor-pointer"
              onClick={() => swiperRef.current?.slidePrev()}
            />
            <Swiper
              slidesPerView={6}
              spaceBetween={16}
              onBeforeInit={(swiper) => {
                swiperRef.current = swiper;
              }}
              breakpoints={{
                0: {
                  slidesPerView: 1,
                },

                1024: {
                  slidesPerView: 6,
                },
              }}
              className="lg:max-w-full max-w-[150px]"
            >
              {data?.map((item, index) => (
                <SwiperSlide key={index}>
                  <div className="flex flex-col bg-white items-center justify-center h-[182px] rounded-[12px] gap-y-3">
                    <div className="border-b border-b-[#8B8B8B] w-full flex justify-center">
                      <Image
                        src={item.image}
                        alt=""
                        width={78}
                        height={78}
                        className="object-contain h-[78px] w-[78px] pb-5"
                      />
                    </div>

                    <span className="text-[11px] text-[#686868] font-black">
                      {item.title}
                    </span>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
            <ArrowBackIosOutlinedIcon
              className="absolute lg:left-[-30px] left-[-50px] cursor-pointer"
              onClick={() => swiperRef.current?.slideNext()}
            />
          </div>
        </div>
        <button className="md:w-[420px] w-[250px] md:h-[62px] h-[50px] bg-primary-main text-white rounded-[12px] md:mr-auto mx-auto">
          ثبت و ارسال درخواست
        </button>
      </div>
    </div>
  );
};

export default RequestService;
