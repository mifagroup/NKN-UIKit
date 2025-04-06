"use client";

import { Button } from "@mui/material";
import Image from "next/image";
import React from "react";
import toast from "react-hot-toast";

const Contact = () => {
  const [form, setForm] = React.useState({
    firstName: "",
    lastName: "",
    category: "",
    message: "",
  });

  const handleSubmit = () => {
    if (!form.firstName || !form.lastName || !form.category || !form.message) {
      toast.error("لطفا تمام فیلدها را پر کنید");
      return;
    }
    toast.success("پیام شما با موفقیت ارسال شد");
    setForm({
      firstName: "",
      lastName: "",
      category: "",
      message: "",
    });
  };

  return (
    <div className="w-full bg-[#A433A6] lg:mb-[175px] mb-[42px] flex lg:flex-row flex-col justify-between">
      <div className="lg:max-w-[430px] w-full xl:px-0 px-5 mx-auto xl:pb-[100px] pb-[46px] xl:pt-[90px] lg:pt-[50px] pt-5 flex-1 flex flex-col gap-y-[15px] lg:order-1 order-2">
        <div className="flex flex-col">
          <span className="text-[24px] font-black text-white tracking-tight">
            همیشه پاسخگوی شماییم
          </span>
          <span className="text-[15px] text-white font-light tracking-wider">
            هفت روز هفته و بیست و چهار ساعت شبانه روز
          </span>
        </div>
        <div className="grid grid-cols-3 gap-x-1 gap-y-1.5">
          <div className="col-span-1">
            <input
              type="text"
              placeholder={"نام"}
              className="bg-[#C889ED] placeholder:!text-[15px] text-[15px] w-full placeholder:!font-light font-light placeholder:!text-[#8F1EA6] text-[#8F1EA6] py-1.5 px-2 rounded-[8px] focus-visible:outline-none h-[28px]"
              value={form.firstName}
              onChange={(e) => setForm({ ...form, firstName: e.target.value })}
            />
          </div>
          <div className="col-span-2">
            <input
              type="text"
              placeholder={"نام خانوادگی"}
              className="bg-[#C889ED] placeholder:!text-[15px] text-[15px] w-full placeholder:!font-light font-light placeholder:!text-[#8F1EA6] text-[#8F1EA6] py-1.5 px-2 rounded-[8px] focus-visible:outline-none h-[28px]"
              value={form.lastName}
              onChange={(e) => setForm({ ...form, lastName: e.target.value })}
            />
          </div>
          <div className="col-span-3">
            <input
              type="text"
              placeholder={"دسته‌بندی عنوان"}
              className="bg-[#C889ED] placeholder:!text-[15px] text-[15px] w-full placeholder:!font-light font-light placeholder:!text-[#8F1EA6] text-[#8F1EA6] py-1.5 px-2 rounded-[8px] focus-visible:outline-none h-[28px]"
              value={form.category}
              onChange={(e) => setForm({ ...form, category: e.target.value })}
            />
          </div>
          <div className="col-span-3">
            <textarea
              placeholder={"متن پیام"}
              className="bg-[#C889ED] placeholder:!text-[15px] text-[15px] w-full placeholder:!font-light font-light placeholder:!text-[#8F1EA6] text-[#8F1EA6] py-1.5 
              px-2 rounded-[8px] focus-visible:outline-none h-[150px] resize-none"
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
            />
          </div>
          <div className="col-span-2" />
          <div className="col-span-1">
            <Button
              className="!bg-white !text-[#8824C2] !font-medium !text-base !rounded-[8px] !w-full !max-h-[30px] !h-[30px]"
              onClick={handleSubmit}
            >
              ثبت پیام
            </Button>
          </div>
        </div>
      </div>
      <div className="relative lg:order-2 order-1">
        <Image
          src={"/images/contact.png"}
          alt="contact-us-image"
          width={727}
          height={534}
          className="xl:w-[727px] lg:w-[600px] w-full lg:h-auto h-[534px] lg:object-contain object-cover object-[63%_0px]"
        />
        <div className="absolute lg:top-[50%] top-[65%] translate-y-[-50%] w-full text-center">
          <span className="lg:text-[96px] text-[50px] text-white font-black">
            Get in touch
          </span>
        </div>
      </div>
    </div>
  );
};

export default Contact;
