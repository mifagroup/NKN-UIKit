import { Button } from "@mui/material";
import Image from "next/image";
import React from "react";

const NikanIntroduction = () => {
  return (
    <div className="max-w-[1086px] container">
      <div className="flex gap-x-[70px] justify-between items-center">
        <div className="flex flex-col gap-y-[85px] pr-[60px] pl-[42px]">
          <div className="flex flex-col gap-y-3">
            <span className="text-[36px] font-black !text-[#626262]">
              گروه درمانی نیکان
            </span>
            <span className="max-w-[413px] font-light text-[15px] leading-[27px] text-justify">
              در اواسط دهه هفتاد شمسی، رویکرد مشتری مداری و بیمارمحوری در کنار
              فرهنگ ارتقا مستمر کیفیت در خدمات سلامتی مورد توجه دست اندرکاران
              نظام سلامت کشور قرار گرفت .
              <br />
              این موضوع نگاه بسیاری از مدیران شاغل در بخش های درمانی را به
              رویکردی نوین که در آن بیماران و پرسنل در کنار کادر درمانی به عنوان
              مشتری، محور خدمات قرار می گرفت، را به خود جلب نموده و آنان را به
              توسعه و اشاعه فرهنگ مشتری نوازی در بیمارستان ها سوق داد.
            </span>
          </div>
          <Button
            className="!text-[#626262] !p-0 !text-[15px] !font-medium !bg-transparent !border !border-primary-main !rounded-[7px] !w-[258px] !h-[35px] !self-end"
            variant="outlined"
          >
            دانلود کاتالوگ معرفی گروه درمانی نیکان
          </Button>
        </div>
        <Image
          src={"/images/about-us-hero.png"}
          alt="about-us-hero"
          width={502}
          height={592}
          quality={100}
        />
      </div>
    </div>
  );
};

export default NikanIntroduction;
