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
    <div className="max-w-[1049px] container pt-5 pb-[115px]">
      {branches?.map((branch, index) => (
        <div
          key={branch.id}
          className={`pb-[33px] pt-[60px] ${
            branches.length - 1 !== index ? "border-b" : ""
          } border-[#A9A9A9] flex justify-between items-start`}
        >
          <div className="flex items-end gap-x-[15px]">
            <Image
              src={branch.icon}
              alt="icon"
              width={116}
              height={97}
              className="object-contain w-[116px] h-[97px]"
              quality={100}
            />
            <div className="flex gap-y-5 flex-col">
              <span className="text-[20px] text-[#696969] font-extrabold">
                {branch.title}
              </span>
              <span className="text-[16px] font-extralight text-[#696969]">
                {branch.address}
              </span>
            </div>
          </div>
          <div className="flex flex-col gap-y-7 max-w-[375px]">
            <div className="flex gap-x-3">
              <Button className="!w-[200px] !h-[39px] !bg-[#EBEBEB] !text-black !rounded-lg">
                نوبت دهی آنلاین
              </Button>
              <Button className="!w-[162px] !h-[39px] !bg-[#31D1B0] !text-white !rounded-lg !flex !items-center !gap-x-2 !pr-[20px] !pl-0">
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
  );
};

export default Branches;
