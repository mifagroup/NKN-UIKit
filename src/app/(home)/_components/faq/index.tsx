"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";

interface FaqItem {
  id?: number;
  title: string;
  content: string;
  href: string;
}

const defaultFaqItems: FaqItem[] = [
  {
    id: 1,
    title: "برای دریافت نوبت از چه طریقی باید اقدام کرد؟",
    content: "برای دریافت نوبت اینجا کلیک کنید",
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
  const { t, dictionary, direction } = useLanguage();
  const faqItems = Array.isArray(dictionary?.home?.faq?.items)
    ? (dictionary.home.faq.items as FaqItem[])
    : defaultFaqItems;
  const normalizedFaqItems = faqItems.map((item, idx) => ({
    ...item,
    id: item.id ?? idx + 1,
  }));
  const isRTL = direction === "rtl";
  const infoBorderClasses = isRTL
    ? "lg:pr-10 lg:border-r-[4px] border-r-primary-main"
    : "lg:pl-10 lg:border-l-[4px] border-l-primary-main";
  const listBorderClasses = isRTL
    ? "lg:pr-10 lg:border-r-[4px] border-r-primary-main"
    : "lg:pl-10 lg:border-l-[4px] border-l-primary-main";
  const titleAlignment = isRTL ? "lg:text-right" : "lg:text-left";
  const collapsedArrowRotation = isRTL ? "rotate-0" : "rotate-180";
  const expandedArrowRotation = isRTL ? "rotate-[-90deg]" : "rotate-[90deg]";

  return (
    <div className="max-w-[1060px] mx-auto pb-[100px] mt-20 lg:px-0 px-5">
      <div className="grid lg:grid-cols-2 grid-cols-1 gap-x-[80px] gap-y-10">
        <div
          className={`flex flex-col gap-y-5 ${infoBorderClasses} pt-1 pb-3`}
        >
          <span
            className={`text-[15px] ${titleAlignment} text-center font-bold text-black`}
          >
            {t("home.faq.title")}
          </span>
          <span className="text-[15px] font-light text-black">
            {t("home.faq.subtitle")}
          </span>
          <div className="flex lg:gap-x-5 gap-x-2 items-center pb-3 border-b border-b-[#E1E1E1]">
            <div className="flex items-center gap-x-2">
              <div className="w-[6px] h-[6px] bg-primary-main rounded-full" />
              <span className="lg:text-xs text-[10px] font-bold text-black">
                {t("home.faq.ward_visiting")}
              </span>
              <div className="w-[2px] h-[22px] bg-primary-main" />
            </div>
            <span className="lg:text-xs text-[10px] font-bold text-black">
              {t("home.faq.everyday")}
            </span>
            <div className="w-[2px] h-[22px] bg-primary-main" />
            <span className="lg:text-xs text-[10px] font-bold text-[#a1a1a1]">
              {t("home.faq.time_slot_1")}
            </span>
          </div>
          <div className="flex lg:gap-x-5 gap-x-2 items-center pb-3 border-b border-b-[#E1E1E1]">
            <div className="flex items-center gap-x-2">
              <div className="w-[6px] h-[6px] bg-primary-main rounded-full" />
              <span className="lg:text-xs text-[10px] font-bold text-black">
                {t("home.faq.special_visiting")}
              </span>
              <div className="w-[2px] h-[22px] bg-primary-main" />
            </div>
            <span className="lg:text-xs text-[10px] font-bold text-black">
              {t("home.faq.everyday")}
            </span>
            <div className="w-[2px] h-[22px] bg-primary-main" />
            <span className="lg:text-xs text-[10px] font-bold text-[#a1a1a1]">
              {t("home.faq.time_slot_2")}
            </span>
            <span className="lg:text-xs text-[10px] font-bold text-[#a1a1a1]">
              {t("home.faq.time_slot_3")}
            </span>
          </div>
          <div className="flex items-center gap-x-2">
            <div className="bg-[#e56366] w-[6px] h-[6px] rounded-full" />
            <span className="text-xs text-[#565656]">
              {t("home.faq.children_warning")}
            </span>
          </div>
        </div>
        <div className={`${listBorderClasses}`}>
          {normalizedFaqItems.map((item) => (
            <div key={item.id}>
              <div
                className={`flex items-center cursor-pointer gap-x-2 pt-3 ${
                  item.id !== active ? "border-b border-b-[#EAEAEA] pb-3" : ""
                } text-[13px] font-light`}
                onClick={() => {
                  setActive(active === item.id ? null : item.id);
                }}
              >
                <div className="relative w-[5px] h-[15px]">
                  <Image
                    src="/images/arrow-left.png"
                    alt="arrow"
                    fill
                    className={`transition-all duration-300 ${
                      item.id !== active
                        ? collapsedArrowRotation
                        : expandedArrowRotation
                    }`}
                  />
                </div>
                <span className={`flex-1 ${isRTL ? "text-right" : "text-left"}`}>
                  {item.title}
                </span>
              </div>
              {item.id === active && (
                <Link
                  className="text-xs font-bold text-black py-2 border-b border-b-[#EAEAEA] block"
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
