import { Divider } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const DoctorItem = () => {
  return (
    <div className="flex justify-between items-stretch py-5">
      <div className="flex items-center gap-x-3.5">
        <Image
          src={"/images/doc-single-image.png"}
          alt="doc"
          width={144}
          height={188}
          className="h-[188px] w-[144px]"
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
      <div className="flex flex-col justify-center gap-y-[13px] items-center">
        <button className="text-[12px] font-extralight text-black w-[200px] h-[40px] rounded-[8px] bg-[#B9F4E8]">
          تعیین نوبت پزشک
        </button>
        <button className="text-[12px] font-extralight text-black w-[200px] h-[40px] rounded-[8px] bg-[#ECECEC]">
          ویزیت و مشاوره آنلاین پزشک
        </button>
        <div className="pt-2.5 flex items-center gap-x-[15px] justify-center">
          <Link href={""} className="text-[12px] font-extralight text-black">
            بازدید صفحه پزشک
          </Link>
          <Divider orientation="vertical" className="!bg-[#D9D9D9]" />
          <Link href={""} className="text-[12px] font-extralight text-black">
            اشتراک گذاری
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DoctorItem;
