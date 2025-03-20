import Image from "next/image";
import React from "react";

const Services = () => {
  return (
    <div className="flex flex-col gap-y-[130px]">
      <div className="lg:flex-row flex-col flex justify-between items-center gap-y-2.5">
        <div className="lg:flex-row flex-col flex items-center gap-x-3.5">
          <Image
            src={"/images/virtual-services.png"}
            alt=""
            width={142}
            height={115}
          />
          <div className="flex flex-col gap-y-2">
            <span className="text-[32px] font-black text-[#595959] lg:text-right text-center">
              بیمارستان مجازی نیکان
            </span>
            <span className="md:text-sm text-[10px] lg:text-right text-center font-light text-[#787878]">
              تهران، اقدسیه ، ابتدای بلوار ارتش، ورودی اراج ، خیابان ۲۲ بهمن
              ،روبه روی بیمارستان نیکان
            </span>
          </div>
        </div>
        <button className="text-[#323232] bg-primary-main md:w-[346px] w-full h-[57px] flex justify-center items-center text-[24px] font-medium rounded-[15px]">
          درخواست خدمات
        </button>
      </div>
      <div className="flex flex-col lg:gap-y-[60px] gap-y-6 items-center">
        <span className="text-xl font-black text-[#5b5b5b]">
          خدمات بیمارستان مجازی نیکان
        </span>
        <div className="flex-col gap-y-10 md:flex hidden">
          {[...Array(5)]?.map((_, index) => (
            <Image
              src={`/images/virtual-service-${index + 1}.png`}
              key={index}
              alt=""
              height={458}
              width={1126}
              className="object-cover"
            />
          ))}
        </div>
        <div className="flex-col gap-y-5 md:hidden flex">
          {[...Array(5)]?.map((_, index) => (
            <Image
              src={`/images/virtual-service-res-${index + 1}.png`}
              key={index}
              alt=""
              height={458}
              width={1126}
              className="object-cover"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
