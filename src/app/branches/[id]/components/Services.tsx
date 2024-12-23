import Image from "next/image";
import Link from "next/link";
import React from "react";

const Services = () => {
  return (
    <div className="pt-[260px] max-w-[1126px] container">
      <div className="flex gap-x-[77px]">
        <div className="flex flex-col gap-y-[50px] pt-[35px]">
          <div className="flex flex-col gap-y-3">
            <span className="text-[20px] text-[#5b5b5b] font-black">
              بخش ها و خدمات اصلی
            </span>
            <span className="text-[15px] font-light text-[#7d7d7d] max-w-[393px] text-justify">
              این مجموعه از به‌روزترین امکانات و تجهیزات حال حاضر دنیا استفاده
              می‌کند و مجهز به بخش‌های تحت نظر یا Day Care است که آماده‌سازی
              بیمار برای عمل جراحی ومراقبت‌های پس از عمل تا ترخیص در آن صورت
              می‌گیرد. این مجموعه شامل کلینیک‌های گوارش، پستان، اورولوژی، داخلی
              مغز و اعصاب، فوق‌تخصص ارتوپدی، دندان‌پزشکی، کلینیک تخصصی ریه،
              تخصصی غدد، فوق‎تخصص اطفال، فوق‌تخصص داخلی، روانپزشکی، کلینیک تخصصی
              زنان و زایمان ، تخصصی قلب و عروق، گوش و حلق و بینی و چکاپ کامل بدن
              است.
            </span>
          </div>
          <Link
            href={""}
            className="text-[#323232] font-medium text-[24px] bg-primary-main w-[346px] h-[57px] flex justify-center items-center rounded-[15px]"
          >
            پذیرش آنلاین
          </Link>
        </div>
        <div className="flex-grow flex gap-y-4 flex-col">
          {[...Array(2)]?.map((_, index) => (
            <div className="grid grid-cols-4 gap-4" key={index}>
              {[...Array(4)]?.map((_, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center justify-center gap-y-4 h-[219px] bg-[#F5F5F5] rounded-[15px]"
                >
                  <Image
                    src={`/images/services-${index + 1}.png`}
                    alt="service"
                    width={83}
                    height={99}
                    className="object-contain h-[83px] w-[99px]"
                    quality={100}
                  />
                  <span className="text-[15px] font-black text-[#5b5b5b]">
                    مرکز ناباروری
                  </span>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
