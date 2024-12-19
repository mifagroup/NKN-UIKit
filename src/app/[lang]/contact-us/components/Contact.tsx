"use client";
import { useGetDictionary } from "@/utils/useGetClientDictionary";
import { Button } from "@mui/material";
import Image from "next/image";
import React from "react";

const Contact = () => {
  const dictionary = useGetDictionary();

  const contactTranslate = dictionary?.contact_us;

  return (
    <div className="w-full bg-[#A433A6] lg:mb-[175px] mb-[42px] flex lg:flex-row flex-col justify-between">
      <div className="lg:max-w-[430px] w-full xl:px-0 px-5 mx-auto xl:pb-[100px] pb-[46px] xl:pt-[90px] lg:pt-[50px] pt-5 flex-1 flex flex-col gap-y-[15px] lg:order-1 order-2">
        <div className="flex flex-col">
          <span className="text-[24px] font-black text-white tracking-tight">
            {contactTranslate?.contact_section.title}
          </span>
          <span className="text-[15px] text-white font-light tracking-wider">
            {contactTranslate?.contact_section.subtitle}
          </span>
        </div>
        <div className="grid grid-cols-3 gap-x-1 gap-y-1.5">
          <div className="col-span-1">
            <input
              type="text"
              placeholder={contactTranslate?.contact_section.name}
              className="bg-[#C889ED] placeholder:!text-[15px] text-[15px] w-full placeholder:!font-light font-light placeholder:!text-[#8F1EA6] text-[#8F1EA6] py-1.5 px-2 rounded-[8px] focus-visible:outline-none h-[28px]"
            />
          </div>
          <div className="col-span-2">
            <input
              type="text"
              placeholder={contactTranslate?.contact_section.lastname}
              className="bg-[#C889ED] placeholder:!text-[15px] text-[15px] w-full placeholder:!font-light font-light placeholder:!text-[#8F1EA6] text-[#8F1EA6] py-1.5 px-2 rounded-[8px] focus-visible:outline-none h-[28px]"
            />
          </div>
          <div className="col-span-3">
            <input
              type="text"
              placeholder={contactTranslate?.contact_section.title_category}
              className="bg-[#C889ED] placeholder:!text-[15px] text-[15px] w-full placeholder:!font-light font-light placeholder:!text-[#8F1EA6] text-[#8F1EA6] py-1.5 px-2 rounded-[8px] focus-visible:outline-none h-[28px]"
            />
          </div>
          <div className="col-span-3">
            <textarea
              placeholder={contactTranslate?.contact_section.content}
              className="bg-[#C889ED] placeholder:!text-[15px] text-[15px] w-full placeholder:!font-light font-light placeholder:!text-[#8F1EA6] text-[#8F1EA6] py-1.5 px-2 rounded-[8px] focus-visible:outline-none h-[150px] resize-none"
            />
          </div>
          <div className="col-span-2" />
          <div className="col-span-1">
            <Button className="!bg-white !text-[#8824C2] !font-medium !text-base !rounded-[8px] !w-full !max-h-[30px] !h-[30px]">
              {contactTranslate?.contact_section.submit}
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
