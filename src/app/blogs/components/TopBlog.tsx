import { Divider } from "@mui/material";
import Image from "next/image";
import React from "react";

const TopBlog = () => {
  return (
    <div className="lg:border border-primary-main flex lg:flex-row flex-col">
      <Image
        src={"/images/doctor-image.png"}
        alt="doctor-image"
        width={553}
        height={489}
        className="lg:w-[553px] lg:h-[489px] md:h-auto h-[394px] w-[100%] object-cover object-top"
      />
      <div className="lg:my-[38px] lg:mx-10 mt-4 mx-5 lg:pb-0 pb-8 flex flex-col lg:gap-y-8 gap-y-4 flex-1 relative">
        <div className="flex items-center justify-between lg:order-1 order-2 gap-x-5">
          <div className="flex items-center lg:gap-x-3 lg:justify-start justify-between lg:w-full gap-x-7">
            <div className="flex gap-x-2 items-center">
              <Image
                src={"/images/calendar-icon.png"}
                alt="calendar"
                width={21}
                height={23}
                className="lg:h-[23px] h-[12px] lg:w-[21px] w-[12px]"
              />
              <span className="font-extralight lg:text-[15px] text-[11px]">
                20 شهریور 1403
              </span>
            </div>
            <div className="flex gap-x-2 items-center">
              <Image
                src={"/images/clock-icon.png"}
                alt="clock"
                width={21}
                height={23}
                className="lg:h-[23px] h-[12px] lg:w-[21px] w-[12px]"
              />
              <span className="font-extralight lg:text-[15px] text-[11px]">
                هشت دقیقه
              </span>
            </div>
            <Image
              src={"/images/share-icon.png"}
              alt="share"
              width={21}
              height={18}
              className="lg:h-[21px] h-[13px] lg:w-[21px] w-[14px]"
            />
          </div>
          <Image
            src={"/images/bookmark-icon.png"}
            alt="bookmark"
            width={21}
            height={23}
            className=""
          />
        </div>
        <div className="lg:order-2 order-1">
          <div className="flex flex-col">
            <span className="lg:text-[25px] text-[13px] font-bold text-secondary-600">
              بیش از بیست و پنج درصد بیماران مرد هستند
            </span>
            <span className="lg:text-[20px] text-[13px] text-secondary-600 lg:pt-0 pt-1">
              گفتگو با دکتر محرابی در خصوص پراکندگی زن و مرد
            </span>
            <span className="font-extralight lg:text-[18px] text-[11px] text-[#272727] lg:pt-[70px] pt-[15px]">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
              استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله
              در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد
              نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد،
              کتابهای زیادی در شصت و سه درصد گذشته ...
            </span>
          </div>
          <button className="lg:absolute left-0 bottom-0 lg:text-[18px] text-[11px] text-black font-thin w-full text-left">
            مطالعه بیشتر
          </button>
        </div>
      </div>
      <Divider className="!mx-5 mt-7 lg:!hidden block" />
    </div>
  );
};

export default TopBlog;
