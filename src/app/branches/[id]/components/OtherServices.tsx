import Image from "next/image";
import React from "react";

const services = [
  {
    id: 1,
    title: "عینک فروشی",
  },
  {
    id: 2,
    title: "اکوکاردیوگرافی",
  },
  {
    id: 3,
    title: "ام آر آی اسپیرال",
  },
  {
    id: 4,
    title: "سونوگرافی تخصصی",
  },
];

const OtherServices = () => {
  return (
    <div className="pt-[132px] mx-auto max-w-[865px]">
      <div className="flex flex-col gap-y-[68px]">
        <div className="flex flex-col gap-y-4">
          <span className="text-[20px] font-black text-[#5b5b5b]">
            سایر امکانات مرکز جراحی محدود نیکان
          </span>
          <span className="font-light text-[#7d7d7d] text-[15px] text-justify leading-[27px]">
            مرکز چشم‌پزشکی و کلینیک نیکان شامل کلینیک‌های مختلفی مانند ناباروری،
            تست ورزش و چشم‌پزشکی است که در آن از به‌روزترین امکانات و تجهیزات
            پزشکی و درمانی در راستای درمان و رسیدگی به مراجعین محترم استفاده
            می‌شود، از جمله این امکانات می‌توان از سونوگرافی و رادیولوژی نام
            برد. این مرکز دارای پارکینگ اختصاصی، داروخانه، فروشگاه عینک،
            آزمایشگاه پاتولوژی و کافه تریا است که شرایط ویزیتی آسان را برای
            مراجعین به ارمغان می‎آورد.
          </span>
        </div>
        <div className="grid grid-cols-4">
          {services?.map((service, index) => (
            <div
              key={service.id}
              className="flex justify-center flex-col items-center gap-y-5"
            >
              <Image
                src={`/images/services-${index + 1}.png`}
                alt="image"
                width={83}
                height={97}
                className="h-[97px] w-[83px] object-contain"
              />
              <span className="font-medium text-[20px] text-[#5b5b5b]">
                {service.title}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OtherServices;
