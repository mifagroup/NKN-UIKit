import Image from "next/image";
import React from "react";

const DoctorIntro = () => {
  return (
    <div className="flex lg:justify-between lg:flex-row flex-col gap-y-4 lg:items-stretch items-center lg:px-0 px-5 relative">
      <div className="flex items-center lg:gap-x-3.5 gap-x-2.5">
        <Image
          src={"/images/doc-single-image.png"}
          alt="doc"
          width={144}
          height={188}
          className="lg:w-[144px] lg:h-[188] w-[118px] h-[154px]"
        />
        <div className="flex flex-col">
          <div className="flex items-center justify-between">
            <span className="text-base font-bold text-black">
              دکتر اصلان پایور
            </span>
            <span
              className="cursor-pointer lg:text-[12px] text-[9px] font-extralight text-black lg:hidden block
            "
            >
              اشتراک گذاری پروفایل پزشک
            </span>
          </div>
          <span className="lg:text-base text-[12px] font-medium text-black">
            متخصص مغز و اعصاب ، فلوشیپ ستون فقرات
          </span>
          <span className="lg:pt-1.5 text-base font-extralight text-black">
            شماره نظام پزشکی: 144838
          </span>
          <span className="lg:text-base text-[12px] font-extralight text-black lg:pt-4 pt-1 lg:max-w-max max-w-[234px]">
            درمان جراحی و غیرجراحی امراض سیستم اعصاب مرکزی و محیطی
          </span>
          <div className="pt-[18px] flex items-center gap-x-1.5">
            <span className="lg:px-3.5 px-2.5 py-1 text-black lg:text-[12px] text-[10px] font-extralight bg-[#F3F3F3] rounded-[8px]">
              مغز و اعصاب
            </span>
            <span className="lg:px-3.5 px-2.5 py-1 text-black lg:text-[12px] text-[10px] font-extralight bg-[#F3F3F3] rounded-[8px]">
              ستون فقرات
            </span>
            <span className="lg:px-3.5 px-2.5 py-1 text-black lg:text-[12px] text-[10px] font-extralight bg-[#F3F3F3] rounded-[8px]">
              اعصاب
            </span>
          </div>
        </div>
      </div>
      <div className="flex flex-col lg:justify-between justify-end items-end">
        <span className="cursor-pointer lg:text-[12px] text-[9px] font-extralight text-black lg:block hidden">
          اشتراک گذاری پروفایل پزشک
        </span>
        <div className="flex lg:flex-row flex-col gap-y-3.5 items-center gap-x-2.5">
          <button className="text-[12px] font-extralight text-black lg:w-[200px] w-[350px] h-[40px] rounded-[8px] bg-[#ECECEC]">
            ویزیت و مشاوره آنلاین پزشک
          </button>
          <button className="text-base font-semibold text-white lg:w-[200px] w-[350px] h-[40px] rounded-[8px] bg-[#14D9B0]">
            تعیین نوبت پزشک
          </button>
        </div>
      </div>
    </div>
  );
};

export default DoctorIntro;
