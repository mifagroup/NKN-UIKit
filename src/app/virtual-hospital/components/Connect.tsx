import Image from "next/image";
import React from "react";

const Connect = () => {
  return (
    <div className="mt-[132px] w-full bg-[#4D4D4D] mb-[30px]">
      <div className="flex lg:flex-row flex-col justify-between items-center">
        <div className="max-w-[861px] flex flex-col lg:gap-y-[50px] gap-y-5 mx-auto px-5 lg:py-0 py-6 lg:order-1 order-2">
          <div className="flex flex-col">
            <span className="text-white font-black lg:text-right text-center text-[20px]">
              مرکز جراحی محدود نیکان
            </span>
            <span className="lg:text-[15px] text-xs text-[#c9c9c9] font-light lg:text-right text-center">
              تهران، اقدسیه ، ابتدای بلوار ارتش، ورودی اراج ، خیابان ۲۲ بهمن
              ،روبه روی بیمارستان نیکان
            </span>
          </div>
          <div className="grid lg:grid-cols-3 grid-cols-2 lg:gap-y-[40px]">
            <div className="col-span-1 flex items-center gap-x-2.5 border-l border-l-primary-main">
              <Image
                src={"/images/car-icon.svg"}
                alt="car-icon"
                width={45}
                height={45}
                className="object-contain"
              />
              <span className="lg:text-[15px] text-xs font-medium text-white">
                پارکینگ شبانه روزی
              </span>
            </div>
            <div className="col-span-1 justify-center flex items-center gap-x-2.5 lg:border-l border-l-primary-main">
              <Image
                src={"/images/coffee-icon.svg"}
                alt="coffee-icon"
                width={45}
                height={45}
                className="object-contain"
              />
              <span className="lg:text-[15px] text-xs font-medium text-white">
                کافه شبانه روزی
              </span>
            </div>
            <div className="col-span-1 lg:justify-center flex items-center gap-x-2.5 lg:border-none border-l border-l-primary-main">
              <Image
                src={"/images/food-icon.svg"}
                alt="food-icon"
                width={45}
                height={45}
                className="object-contain"
              />
              <span className="lg:text-[15px] text-xs font-medium text-white">
                رستوران و پذیرایی
              </span>
            </div>
            <div className="col-span-1 flex lg:justify-start justify-center items-center gap-x-2.5 lg:border-l border-l-primary-main">
              <Image
                src={"/images/food-icon.svg"}
                alt="food-icon"
                width={45}
                height={45}
                className="object-contain"
              />
              <span className="lg:text-[15px] text-xs font-medium text-white">
                رستوران و پذیرایی
              </span>
            </div>
            <div className="col-span-2 lg:pt-0 pt-5 flex items-center lg:pr-[30px] lg:ml-auto mx-auto">
              <span className="lg:text-[15px] text-xs font-semibold text-white">
                روزها و ساعات پذیرش: همه روزه از ساعت 08:00 الی 24:00
              </span>
            </div>
          </div>
        </div>
        <div className="relative lg:order-2 order-1 lg:w-auto w-full">
          <Image
            src={"/images/map.png"}
            alt="map-image"
            width={596}
            height={349}
            className="lg:h-full lg:w-[596px] w-full h-[250px] object-cover"
          />
          <button className="w-[219px] h-[52px] bg-primary-main rounded-[9px] text-white font-semibold text-[20px] absolute top-1/2 right-[50%] translate-x-[50%]">
            مسیریابی
          </button>
        </div>
      </div>
    </div>
  );
};

export default Connect;
