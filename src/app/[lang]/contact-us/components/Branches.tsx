import { Button, Divider } from "@mui/material";
import Image from "next/image";
import React from "react";

const branches = [
  {
    id: 1,
    title: "بیمارستان نیکان اقدسیه",
    address:
      "اقدسیه – ابتدای بلوار ارتش – ورودی اراج – خیابان ٢٢ بهمن – شماره ٦ ",
    number: "۰۲۱-۲۹۱۲۰۰۰۰",
    icon: "/images/nikan-aghdasieh-icon.png",
  },
  {
    id: 2,
    title: "بیمارستان نیکان اقدسیه",
    address:
      "اقدسیه – ابتدای بلوار ارتش – ورودی اراج – خیابان ٢٢ بهمن – شماره ٦ ",
    number: "۰۲۱-۲۹۱۲۰۰۰۰",
    icon: "/images/nikan-west-icon.png",
  },
  {
    id: 3,
    title: "بیمارستان نیکان اقدسیه",
    address:
      "اقدسیه – ابتدای بلوار ارتش – ورودی اراج – خیابان ٢٢ بهمن – شماره ٦ ",
    number: "۰۲۱-۲۹۱۲۰۰۰۰",
    icon: "/images/nikan-hakimieh.png",
  },
  {
    id: 4,
    title: "بیمارستان نیکان اقدسیه",
    address:
      "اقدسیه – ابتدای بلوار ارتش – ورودی اراج – خیابان ٢٢ بهمن – شماره ٦ ",
    number: "۰۲۱-۲۹۱۲۰۰۰۰",
    icon: "/images/nikan-second-branch.png",
  },
];

const Branches = () => {
  return (
    <div className="max-w-[1049px] container lg:pt-5 lg:pb-[115px] pb-[84px]">
      <div className="grid lg:grid-cols-1 md:grid-cols-2">
        {branches?.map((branch, index) => (
          <div
            key={branch.id}
            className={`lg:pb-[33px] lg:pt-[60px] pt-[50px] ${
              branches.length - 1 !== index ? "lg:border-b" : ""
            } border-[#A9A9A9] flex lg:flex-row flex-col justify-between lg:items-start items-center gap-y-5 md:col-span-1 sm:px-0 px-5`}
          >
            <div className="flex lg:flex-row flex-col lg:items-end gap-x-[15px] gap-y-2.5">
              <Image
                src={branch.icon}
                alt="icon"
                width={116}
                height={97}
                className="object-contain lg:w-[116px] lg:h-[97px] w-[107px] h-[90px]"
                quality={100}
              />
              <div className="flex lg:gap-y-5 gap-y-1 flex-col">
                <span className="text-[20px] text-[#696969] font-extrabold">
                  {branch.title}
                </span>
                <span className="lg:text-[16px] text-[12px] font-extralight text-[#696969]">
                  {branch.address}
                </span>
              </div>
            </div>
            <div className="flex flex-col gap-y-7 max-w-[375px]">
              <div className="flex gap-x-3">
                <Button className="lg:!w-[200px] !w-[172px] lg:!h-[39px] !h-[33px] !bg-[#EBEBEB] !text-black !rounded-lg lg:!font-normal !font-light">
                  نوبت دهی آنلاین
                </Button>
                <Button className="lg:!w-[162px] !w-[139px] lg:!h-[39px] !h-[33px] !bg-[#31D1B0] !text-white !rounded-lg !flex !items-center !gap-x-2 !pr-[20px] !pl-0 lg:!font-normal !font-light">
                  {branch.number}
                  <Image
                    src={"/images/phone-icon.png"}
                    alt="phone-icon"
                    width={35}
                    height={33}
                  />
                </Button>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-[12px] text-black font-extralight">
                  مسیریابی
                </span>
                <Divider
                  orientation="vertical"
                  className="!w-[1px] !h-[18px] !bg-primary-main"
                />
                <span className="text-[12px] text-black font-extralight">
                  اشتراک گذاری
                </span>
                <Divider
                  orientation="vertical"
                  className="!w-[1px] !h-[18px] !bg-primary-main"
                />
                <span className="text-[12px] text-black font-extralight">
                  فکس
                </span>
                <Divider
                  orientation="vertical"
                  className="!w-[1px] !h-[18px] !bg-primary-main"
                />
                <span className="text-[12px] text-black font-extralight">
                  ایمیل
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Branches;
