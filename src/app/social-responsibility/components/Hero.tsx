import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <div className="lg:mt-[57px] flex flex-col gap-y-8 lg:pb-[57px] pb-[46px] lg:border-b border-b-[#ACACAC]">
      <div className="flex-col items-center gap-y-1 lg:flex hidden">
        <h1 className="text-xl leading-[33px] font-semibold text-center">
          نیکان و مسئولیت اجتماعی
        </h1>
        <h2 className="text-sm font-light text-center">
          محتوای مورد نیاز برای ساب تایتل محتوای مورد نیاز برای ساب تایتل
        </h2>
      </div>
      <div className="grid lg:grid-cols-7 grid-cols-1 lg:gap-3">
        <div className="relative lg:col-span-7">
          <div className="absolute lg:bottom-6 bottom-0 lg:p-0 pb-6 pr-4 pt-2 lg:right-8 right-0 flex flex-col gap-y-2 lg:bg-transparent bg-[#00000067]">
            <span className="text-white text-xl font-semibold">
              نیکان و مسئولیت اجتماعی
            </span>
            <span className="text-sm font-light text-white">
              محتوای مورد نیاز برای ساب تایتل محتوای مورد نیاز برای ساب تایتل
            </span>
          </div>
          <Image
            src={"/images/social-hero-1.png"}
            alt=""
            width={1107}
            height={346}
            className="lg:h-[346px] h-[456px] object-cover"
          />
        </div>
        <div className="relative lg:col-span-4 lg:h-[333px] h-[400px]">
          <div className="absolute lg:bottom-2 bottom-0 lg:p-0 pb-6 pr-4 pt-2 lg:right-8 right-0 flex flex-col gap-y-2 z-10 lg:bg-transparent bg-[#00000067]">
            <span className="text-white text-xl font-semibold">
              نیکان و مسئولیت اجتماعی
            </span>
            <span className="text-sm font-light text-white">
              محتوای مورد نیاز برای ساب تایتل محتوای مورد نیاز برای ساب تایتل
            </span>
          </div>
          <Image
            src={"/images/social-hero-2.png"}
            alt=""
            fill
            className="object-cover"
          />
        </div>
        <div className="relative lg:col-span-3 h-[333px]">
          <div className="absolute lg:bottom-2 bottom-0 lg:p-0 pb-6 pr-4 pt-2 lg:bg-transparent bg-[#00000067] lg:right-8 right-0 flex flex-col gap-y-2 z-10">
            <span className="text-white text-xl font-semibold">
              نیکان و مسئولیت اجتماعی
            </span>
            <span className="text-sm font-light text-white">
              محتوای مورد نیاز برای ساب تایتل محتوای مورد نیاز برای ساب تایتل
            </span>
          </div>
          <Image
            src={"/images/social-hero-3.png"}
            alt=""
            fill
            className="object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
