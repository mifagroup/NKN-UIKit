"use client";
import { MenuItem, Select } from "@mui/material";
import Image from "next/image";
import React from "react";

const branches = [
  {
    id: 1,
    title: "بیمارستان نیکان اقدسیه",
    desc: "اقدسیه – ابتدای بلوار ارتش – ورودی اراج – خیابان ٢٢ بهمن – شماره ٦ ",
  },
  {
    id: 2,
    title: "بیمارستان نیکان غرب",
    desc: "اقدسیه – ابتدای بلوار ارتش – ورودی اراج – خیابان ٢٢ بهمن – شماره ٦ ",
  },
  {
    id: 3,
    title: "بیمارستان نیکان حکیمیه",
    desc: "اقدسیه – ابتدای بلوار ارتش – ورودی اراج – خیابان ٢٢ بهمن – شماره ٦ ",
  },
  {
    id: 4,
    title: "بیمارستان نیکان شماره 2",
    desc: "اقدسیه – ابتدای بلوار ارتش – ورودی اراج – خیابان ٢٢ بهمن – شماره ٦ ",
  },
];

const Page = () => {
  const [selectedBranch, setSelectedBranch] = React.useState(1);

  return (
    <div className="lg:pt-[57px] pt-[25px] max-w-[790px] mx-auto lg:px-0 px-5">
      <div className="flex flex-col gap-y-5">
        <div className="flex flex-col items-center gap-y-1">
          <h1 className="lg:text-xl text-base font-semibold">
            سامانه ثبت درخواست همکاری
          </h1>
          <span className="text-sm font-light">
            تکمیل تمامی فیلد ها برای بررسی بهتر درخواست شما ضروری است
          </span>
        </div>
        <span className="lg:text-xl text-base font-semibold lg:font-light lg:text-right text-center">
          شعبه مورد نظر خود را انتخاب کنید
        </span>
        <div className="py-[38px] border-y border-y-[#ACACAC] grid grid-cols-2 gap-y-6">
          {branches?.map((branch) => (
            <div
              className="flex items-center gap-x-6 cursor-pointer lg:col-span-1 col-span-2"
              key={branch.id}
              onClick={() => setSelectedBranch(branch.id)}
            >
              <div
                className={`w-[22px] h-[22px] rounded-[3px] ${
                  branch.id === selectedBranch ? "bg-[#31D1B0]" : "bg-[#D9D9D9]"
                }`}
              />
              <div className="flex flex-col gap-y-1">
                <span className="text-base font-extrabold text-[#696969]">
                  {branch.title}
                </span>
                <span className="text-xs font-extralight text-[#696969]">
                  {branch.desc}
                </span>
              </div>
            </div>
          ))}
        </div>
        <div className="flex flex-col gap-y-5 border-b border-b-[#ACACAC] pb-6">
          <span className="lg:text-xl text-base font-semibold lg:font-light lg:text-right text-center">
            اطلاعات شخصی خود را تکمیل کنید
          </span>
          <div className="grid grid-cols-12 gap-2.5">
            <input
              type="text"
              className="lg:col-span-4 col-span-12 px-3 py-2.5 bg-[#EDEDED] rounded-[5px] focus-visible:outline-none"
              placeholder="نام و نام خانوادگی"
            />
            <input
              type="text"
              className="lg:col-span-4 col-span-12 px-3 py-2.5 bg-[#EDEDED] rounded-[5px] focus-visible:outline-none"
              placeholder="کد ملی"
            />
            <div className="lg:col-span-1 lg:h-auto h-[44px] col-span-6 bg-[#EBEBEB] rounded-[5px] flex items-center justify-center cursor-pointer">
              مرد
            </div>
            <div className="lg:col-span-1 lg:h-auto h-[44px] col-span-6 bg-[#EBEBEB] rounded-[5px] flex items-center justify-center cursor-pointer">
              زن
            </div>
            <div className="lg:col-span-1 lg:h-auto h-[44px] col-span-6 bg-[#EBEBEB] rounded-[5px] flex items-center justify-center cursor-pointer">
              مجرد
            </div>
            <div className="lg:col-span-1 lg:h-auto h-[44px] col-span-6 bg-[#EBEBEB] rounded-[5px] flex items-center justify-center cursor-pointer">
              متاهل
            </div>
            <input
              type="text"
              className="lg:col-span-2 col-span-6 px-3 py-2.5 bg-[#EDEDED] rounded-[5px] focus-visible:outline-none"
              placeholder="ملیت"
            />
            <input
              type="text"
              className="lg:col-span-2 col-span-6 px-3 py-2.5 bg-[#EDEDED] rounded-[5px] focus-visible:outline-none"
              placeholder="سن"
            />
            <input
              type="text"
              className="lg:col-span-4 col-span-12 px-3 py-2.5 bg-[#EDEDED] rounded-[5px] focus-visible:outline-none"
              placeholder="شماره تماس"
            />
            <input
              type="text"
              className="lg:col-span-2 col-span-6 px-3 py-2.5 bg-[#EDEDED] rounded-[5px] focus-visible:outline-none"
              placeholder="استان"
            />
            <input
              type="text"
              className="lg:col-span-2 col-span-6 px-3 py-2.5 bg-[#EDEDED] rounded-[5px] focus-visible:outline-none"
              placeholder="شهر"
            />
            <input
              type="text"
              className="lg:col-span-4 col-span-12 px-3 py-2.5 bg-[#EDEDED] rounded-[5px] focus-visible:outline-none"
              placeholder="ایمیل"
            />
            <input
              type="text"
              className="lg:col-span-4 col-span-12 px-3 py-2.5 bg-[#EDEDED] rounded-[5px] focus-visible:outline-none"
              placeholder="شماره تماس ثابت"
            />
            <div className="cursor-pointer lg:col-span-4 col-span-12 flex items-center justify-between py-2.5 px-3 rounded-[5px] bg-[#EEE3CB]">
              <span className="text-sm font-light">
                بارگذاری تصویر کارت ملی
              </span>
              <Image
                src={"/images/upload-icon.png"}
                alt=""
                width={17}
                height={19}
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-y-5 pb-6">
          <span className="lg:text-xl text-base font-semibold lg:font-light lg:text-right text-center">
            درخواست و تخصص مورد نظر خود را دقیقا وارد نمایید
          </span>
          <div className="grid grid-cols-12 gap-4">
            <div className="lg:col-span-4 col-span-12 flex flex-col gap-y-4">
              <div className="flex justify-between items-center">
                <span className="text-sm font-light">واحد مورد نظر:</span>
                <Select
                  slotProps={{
                    input: {
                      style: {
                        minWidth: "120px",
                      },
                    },
                    root: {
                      style: {
                        minWidth: "111px",
                        maxHeight: "26px",
                        border: "none",
                      },
                    },
                  }}
                  sx={{
                    "& .MuiOutlinedInput-notchedOutline": {
                      border: "none",
                    },
                    "& .MuiSelect-select": {
                      maxHeight: "26px !important",
                      backgroundColor: "#F3F3F3",
                      paddingY: "4px",
                      borderRadius: "7px",
                      fontSize: "13px",
                    },
                  }}
                  value={"1"}
                  //   onChange={(event) => setSelectedHospital(event.target.value)}
                >
                  <MenuItem value={"1"}>تصویربرداری</MenuItem>
                </Select>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm font-light">زیرمجموعه مورد نظر:</span>
                <Select
                  slotProps={{
                    input: {
                      style: {
                        minWidth: "120px",
                      },
                    },
                    root: {
                      style: {
                        minWidth: "111px",
                        maxHeight: "26px",
                        border: "none",
                      },
                    },
                  }}
                  sx={{
                    "& .MuiOutlinedInput-notchedOutline": {
                      border: "none",
                    },
                    "& .MuiSelect-select": {
                      maxHeight: "26px !important",
                      backgroundColor: "#F3F3F3",
                      paddingY: "4px",
                      borderRadius: "7px",
                      fontSize: "13px",
                    },
                  }}
                  value={"1"}
                  //   onChange={(event) => setSelectedHospital(event.target.value)}
                >
                  <MenuItem value={"1"}>ام آر ای</MenuItem>
                </Select>
              </div>
              <div className="cursor-pointer flex items-center justify-between py-2.5 px-3 rounded-[5px] bg-[#EEE3CB]">
                <span className="text-sm font-light">بارگذاری رزومه</span>
                <Image
                  src={"/images/upload-icon.png"}
                  alt=""
                  width={17}
                  height={19}
                />
              </div>
            </div>
            <textarea
              name=""
              id=""
              placeholder="توضیحات درخواست خود را بنویسید"
              className="lg:col-span-8 col-span-12 py-1.5 px-3 bg-[#EBEBEB] rounded-[5px] focus-visible:outline-none resize-none lg:h-auto h-[100px]"
            />
            <div className="col-span-4 lg:block hidden"></div>
            <div className="lg:col-span-8 col-span-12 flex lg:flex-row flex-col gap-y-2 items-center justify-between">
              <span className="text-xs font-extralight">
                با قوانین استخدامی مجموعه درمانی نیکان موافقم
              </span>
              <button className="w-[257px] h-[37px] flex justify-center items-center bg-primary-main text-white font-extrabold text-xs rounded-[5px]">
                ثبت درخواست
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
