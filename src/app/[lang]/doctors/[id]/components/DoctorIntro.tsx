import Image from "next/image";
import React from "react";

const DoctorIntro = () => {
  return (
    <div className="flex justify-between items-stretch">
      <div className="flex items-center gap-x-3.5">
        <Image
          src={"/images/doc-single-image.png"}
          alt="doc"
          width={144}
          height={188}
        />
        <div className="flex flex-col">
          <span className="text-base font-bold text-black">
            دکتر اصلان پایور
          </span>
          <span className="text-base font-medium text-black">
            متخصص مغز و اعصاب ، فلوشیپ ستون فقرات
          </span>
          <span className="pt-1.5 text-base font-extralight text-black">
            شماره نظام پزشکی: 144838
          </span>
          <span className="text-base font-extralight text-black pt-4">
            درمان جراحی و غیرجراحی امراض سیستم اعصاب مرکزی و محیطی
          </span>
          <div className="pt-[18px] flex items-center gap-x-1.5">
            <span className="px-3.5 py-1 text-black text-[12px] font-extralight bg-[#F3F3F3] rounded-[8px]">
              مغز و اعصاب
            </span>
            <span className="px-3.5 py-1 text-black text-[12px] font-extralight bg-[#F3F3F3] rounded-[8px]">
              ستون فقرات
            </span>
            <span className="px-3.5 py-1 text-black text-[12px] font-extralight bg-[#F3F3F3] rounded-[8px]">
              اعصاب
            </span>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-between items-end">
        <span className="cursor-pointer text-[12px] font-extralight text-black">
          اشتراک گذاری پروفایل پزشک
        </span>
        <div className="flex items-center gap-x-2.5">
          <button className="text-[12px] font-extralight text-black w-[200px] h-[40px] rounded-[8px] bg-[#ECECEC]">
            ویزیت و مشاوره آنلاین پزشک
          </button>
          <button className="text-base font-semibold text-white w-[200px] h-[40px] rounded-[8px] bg-[#14D9B0]">
            تعیین نوبت پزشک
          </button>
        </div>
      </div>
    </div>
  );
};

export default DoctorIntro;
