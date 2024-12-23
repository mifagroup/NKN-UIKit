import Image from "next/image";
import React from "react";

const Connect = () => {
  return (
    <div className="mt-[132px] w-full bg-[#4D4D4D] mb-[30px]">
      <div className="flex justify-between items-center">
        <div className="max-w-[861px] flex flex-col gap-y-[50px] mx-auto">
          <div className="flex flex-col">
            <span className="text-white font-black text-[20px]">
              مرکز جراحی محدود نیکان
            </span>
            <span className="text-[15px] text-[#c9c9c9] font-light">
              تهران، اقدسیه ، ابتدای بلوار ارتش، ورودی اراج ، خیابان ۲۲ بهمن
              ،روبه روی بیمارستان نیکان
            </span>
          </div>
          <div className="grid grid-cols-3 gap-y-[40px]">
            <div className="col-span-1 flex items-center gap-x-2.5 border-l border-l-primary-main">
              <Image
                src={"/images/car-icon.svg"}
                alt="car-icon"
                width={45}
                height={45}
                className="object-contain"
              />
              <span className="text-[15px] font-medium text-white">
                پارکینگ شبانه روزی
              </span>
            </div>
            <div className="col-span-1 justify-center flex items-center gap-x-2.5 border-l border-l-primary-main">
              <Image
                src={"/images/coffee-icon.svg"}
                alt="coffee-icon"
                width={45}
                height={45}
                className="object-contain"
              />
              <span className="text-[15px] font-medium text-white">
                کافه شبانه روزی
              </span>
            </div>
            <div className="col-span-1 justify-center flex items-center gap-x-2.5">
              <Image
                src={"/images/food-icon.svg"}
                alt="food-icon"
                width={45}
                height={45}
                className="object-contain"
              />
              <span className="text-[15px] font-medium text-white">
                رستوران و پذیرایی
              </span>
            </div>
            <div className="col-span-1 flex items-center gap-x-2.5 border-l border-l-primary-main">
              <Image
                src={"/images/food-icon.svg"}
                alt="food-icon"
                width={45}
                height={45}
                className="object-contain"
              />
              <span className="text-[15px] font-medium text-white">
                رستوران و پذیرایی
              </span>
            </div>
            <div className="col-span-2 flex items-center pr-[30px]">
              <span className="text-[15px] font-semibold text-white">
                روزها و ساعات پذیرش: همه روزه از ساعت 08:00 الی 24:00
              </span>
            </div>
          </div>
        </div>
        <div className="relative">
          <Image
            src={"/images/map.png"}
            alt="map-image"
            width={596}
            height={349}
            className="h-full"
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
