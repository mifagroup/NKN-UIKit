"use client";

import { Divider } from "@mui/material";
import Image from "next/image";
import Link from "next/link";

const EndSection = () => {
  return (
    <div className="lg:pt-[66px] lg:pb-[83px] pb-[40px] lg:border-t border-primary-main flex lg:flex-row flex-col gap-y-5 justify-between lg:items-start items-center">
      <div className="flex gap-x-3">
        <Image
          src={"/images/footer_link.png"}
          alt="nikan365"
          width={309}
          height={125}
          quality={100}
          className="object-contain"
        />
        {/*   <div className="flex flex-col">
          <span className="font-semibold text-white text-[15px]">
            سامانه جامع سلامت نیکان 365
          </span>
          <div className="flex items-center gap-x-2">
            <Image
              src={"/images/download-icon.png"}
              alt="download"
              width={225}
              height={56}
              quality={100}
            />
          </div>
        </div> */}
      </div>
      <Divider className="lg:!hidden block !h-[1px] !w-full !bg-[#204052]" />
      <div className="flex flex-col gap-y-[25px] lg:items-end items-center">
        <div className="flex">
          <div className="flex flex-col items-center px-3">
            <span className="text-[20px] text-white font-semibold">
              Nikan Health Family
            </span>
            <span className="text-[14px] font-thin text-white">
              Organizational Health System
            </span>
            <Image
              src={"/images/social-media-icons.png"}
              alt="social-media"
              width={210}
              height={40}
              className="mx-auto"
            />
          </div>
          <Divider
            orientation="vertical"
            className="!bg-primary-main !h-[90px]"
          />
          <Image
            src={"/images/nikan-white-icon.png"}
            alt="nikan"
            width={112}
            height={91}
            className="mr-5"
          />
        </div>
        <div className="flex flex-col gap-y-4 lg:items-end items-center">
          <div className="flex items-center lg:gap-x-9 gap-x-2">
            <Link
              href={""}
              className="lg:text-[14px] text-[10px] font-light text-[#81929B]"
            >
              چارت سازمانی
            </Link>
            <Link
              href={""}
              className="lg:text-[14px] text-[10px] font-light text-[#81929B]"
            >
              اخبار
            </Link>
            <Link
              href={""}
              className="lg:text-[14px] text-[10px] font-light text-[#81929B]"
            >
              سوالات متداول
            </Link>
            <Link
              href={"/about-us"}
              className="lg:text-[14px] text-[10px] font-light text-[#81929B]"
            >
              درباره نیکان
            </Link>
            <Link
              href={""}
              className="lg:text-[14px] text-[10px] font-light text-[#81929B]"
            >
              روابط عمومی
            </Link>
            <Link
              href={""}
              className="lg:text-[14px] text-[10px] font-light text-[#81929B]"
            >
              ضوابط و قوانین
            </Link>
          </div>
          <span className="lg:text-[14px] text-[11px] font-medium text-[#28546D]">
            تمامی حقوق برای بیمارستان نیکان محفوظ است
          </span>
        </div>
      </div>
    </div>
  );
};

export default EndSection;
