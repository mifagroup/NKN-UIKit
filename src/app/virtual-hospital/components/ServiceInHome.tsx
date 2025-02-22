import Image from "next/image";
import React from "react";

const ServiceInHome = () => {
  return (
    <div className="py-[150px] flex items-center justify-between gap-x-[68px]">
      <div className="flex flex-col">
        <span className="font-black text-[#595959] text-[32px]">
          بیمارستان مجازی نیکان
        </span>
        <p className="text-base font-light text-[#7d7d7d] mt-6 text-justify">
          این مجموعه از به‌روزترین امکانات و تجهیزات حال حاضر دنیا استفاده
          می‌کند و مجهز به بخش‌های تحت نظر یا Day Care است که آماده‌سازی بیمار
          برای عمل جراحی ومراقبت‌های پس از عمل تا ترخیص در آن صورت می‌گیرد. این
          مجموعه شامل کلینیک‌های گوارش، پستان، اورولوژی، داخلی مغز و اعصاب،
          فوق‌تخصص ارتوپدی، دندان‌پزشکی، کلینیک تخصصی ریه، تخصصی غدد، فوق‎تخصص
          اطفال، فوق‌تخصص داخلی، روانپزشکی، کلینیک تخصصی زنان و زایمان ، تخصصی
          قلب و عروق، گوش و حلق و بینی و چکاپ کامل بدن است.
        </p>
        <button className="text-base font-medium text-[#323232] w-[346px] h-[57px] bg-[#dfdfdf] rounded-[15px] flex justify-center items-center mt-[40px] mx-auto">
          درخواست خدمات در منزل
        </button>
      </div>
      <Image
        src={"/images/service-in-home.png"}
        alt=""
        width={596}
        height={350}
        className="h-[350px] object-cover w-[596px]"
      />
    </div>
  );
};

export default ServiceInHome;
