"use client";
import Link from "next/link";
import { useState } from "react";

const data = [
  {
    id: 1,
    title: "برای دریافت نوبت از چه طریقی باید اقدام کرد؟",
    content: "برای دریافت نوبت اینجا کلیک کنید",
    href: "/",
  },
  {
    id: 2,
    title: "هزینه زایمان طبیعی و سزارین چقدر است؟",
    content: "برای اطلاعات بیشتر اینجا کلیک کنید",
    href: "/",
  },
  {
    id: 3,
    title: "بیمه های مکمل طرف قرارداد با بیمارستان نیکان",
    content: "جهت مشاهده بیمه های طرف قرارداد اینجا کلیک کنید.",
    href: "/insurances",
  },
  {
    id: 4,
    title: "هماهنگی خدمات در منزل چگونه است؟",
    content: "برای اطلاع از هماهنگی خدمات در منزل اینجا کلیک کنید.",
    href: "/",
  },
];

const FAQ = () => {
  const [active, setActive] = useState<number | null>(null);

  return (
    <div className="max-w-[1060px] mx-auto pb-[100px] lg:px-0 px-5">
      <div className="grid lg:grid-cols-2 grid-cols-1 gap-x-[80px] gap-y-10">
        <div className="flex flex-col gap-y-5 lg:pr-10 lg:border-r-[4px] border-r-primary-main pt-1 pb-3">
          <span className="text-[15px] lg:text-right text-center font-bold text-black">
            سوالات متداول
          </span>
          <span className="text-[15px] font-light text-black">
            ساعات ملاقات چه زمان هایی است؟
          </span>
          <div className="flex lg:gap-x-5 gap-x-2 items-center pb-3 border-b border-b-[#E1E1E1]">
            <div className="flex items-center gap-x-2">
              <div className="w-[6px] h-[6px] bg-primary-main rounded-full" />
              <span className="lg:text-xs text-[10px] font-bold text-black">
                ملاقات در بخش های بستری
              </span>
              <div className="w-[2px] h-[22px] bg-primary-main" />
            </div>
            <span className="lg:text-xs text-[10px] font-bold text-black">
              همه روزه
            </span>
            <div className="w-[2px] h-[22px] bg-primary-main" />
            <span className="lg:text-xs text-[10px] font-bold text-[#a1a1a1]">
              ۱۵ الی ۱۷ 
            </span>
          </div>
          <div className="flex lg:gap-x-5 gap-x-2 items-center pb-3 border-b border-b-[#E1E1E1]">
            <div className="flex items-center gap-x-2">
              <div className="w-[6px] h-[6px] bg-primary-main rounded-full" />
              <span className="lg:text-xs text-[10px] font-bold text-black">
                ملاقات در بخش های ویژه
              </span>
              <div className="w-[2px] h-[22px] bg-primary-main" />
            </div>
            <span className="lg:text-xs text-[10px] font-bold text-black">
              همه روزه
            </span>
            <div className="w-[2px] h-[22px] bg-primary-main" />
            <span className="lg:text-xs text-[10px] font-bold text-[#a1a1a1]">
              ۱۱ الی ۱۱:۳۰
            </span>
            <div className="w-[2px] h-[22px] bg-primary-main" />
            <span className="lg:text-xs text-[10px] font-bold text-[#a1a1a1]">
              ۱۵:۳۰ الی ۱۶
            </span>
          </div>
          <div className="flex items-center gap-x-2">
            <div className="bg-[#e56366] w-[6px] h-[6px] rounded-full" />
            <span className="text-xs text-[#565656]">
              ورود کودکان زیر ۷ سال جهت ملاقات ممنوع!
            </span>
          </div>
        </div>
        <div>
          <span className="text-[15px] font-bold text-black">
            سوالات متداول
          </span>
          {data.map((item) => (
            <div key={item.id}>
              <div
                className={`flex cursor-pointer gap-x-2 pt-3 ${
                  item.id !== active ? "border-b border-b-[#EAEAEA] pb-3" : ""
                } text-[13px] font-light`}
                onClick={() => {
                  if (active === item.id) {
                    setActive(null);
                  } else {
                    setActive(item.id);
                  }
                }}
              >
                {item.title}
              </div>
              {item.id === active && (
                <Link
                  className={`text-xs font-bold text-black py-2 border-b border-b-[#EAEAEA] block`}
                  href={item.href}
                >
                  {item.content}
                </Link>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;
