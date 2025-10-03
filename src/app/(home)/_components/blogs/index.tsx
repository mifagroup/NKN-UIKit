"use client";

import { components } from "@/lib/api/v1";
import { Button, Divider } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useMemo, useRef } from "react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { NavigationOptions, Swiper as SwiperType } from "swiper/types";
import { useLanguage } from "@/contexts/LanguageContext";

const Blogs = ({
  blogs,
}: {
  blogs: components["schemas"]["BlogResource"][];
}) => {
  const swiperRef = useRef<SwiperType>();
  const prevEl = useRef(null);
  const nextEl = useRef(null);
  const { language, t, direction } = useLanguage();
  const blogSlides = blogs ?? [];

  const formatDate = (dateString?: string | null) => {
    const locale = language === "en" ? "en-US" : "fa-IR";
    const date = new Date(dateString ?? Date.now());
    return new Intl.DateTimeFormat(locale, {
      day: "2-digit",
      month: "long",
      year: "numeric",
    }).format(date);
  };

  const getImageUrl = (
    image:
      | components["schemas"]["FileResource"]
      | components["schemas"]["FileResource"][]
      | null
      | undefined
  ) => {
    if (!image) return "";
    if (Array.isArray(image)) {
      return image[0]?.original_url ?? "";
    }
    return image.original_url ?? "";
  };

  const isRTL = direction === "rtl";
  const {
    prevButtonClasses,
    nextButtonClasses,
    prevIconClasses,
    nextIconClasses,
  } = useMemo(() => {
    const baseButton =
      "!min-w-fit !p-0 !absolute top-1/2 translate-y-[-50%] z-10";
    return {
      prevButtonClasses: `${baseButton} ${isRTL ? "right-0" : "left-0"}`,
      nextButtonClasses: `${baseButton} ${isRTL ? "left-0" : "right-0"}`,
      prevIconClasses: isRTL ? "" : "rotate-180",
      nextIconClasses: isRTL ? "rotate-180" : "",
    };
  }, [isRTL]);

  const sliderKey = useMemo(
    () => `${direction}-${blogSlides.length}`,
    [direction, blogSlides.length]
  );

  useEffect(() => {
    const swiper = swiperRef.current;
    const prev = prevEl.current;
    const next = nextEl.current;
    if (!swiper || !prev || !next) return;

    const navigationParams = (swiper.params.navigation ?? {}) as NavigationOptions;
    navigationParams.prevEl = prev;
    navigationParams.nextEl = next;
    swiper.params.navigation = navigationParams;

    if (swiper.navigation) {
      swiper.navigation.destroy();
      swiper.navigation.init();
      swiper.navigation.update();
    }
  }, [direction, blogSlides.length]);

  return (
    <div className="pt-[150px] lg:pb-[30px] pb-10 container lg:px-0 px-12">
      <div className="relative">
        <Button
          ref={prevEl}
          className={prevButtonClasses}
          onClick={() => {
            swiperRef.current?.slidePrev();
          }}
        >
          <Image
            src={"/images/arrow-right.png"}
            alt="arrow-right"
            width={23}
            height={63.5}
            className={prevIconClasses}
          />
        </Button>
        <Button
          ref={nextEl}
          className={nextButtonClasses}
          onClick={() => {
            swiperRef.current?.slideNext();
          }}
        >
          <Image
            src={"/images/arrow-right.png"}
            alt="arrow-left"
            width={23}
            height={63.5}
            className={nextIconClasses}
          />
        </Button>
        <div className="flex gap-x-[54px] items-center justify-center max-w-[1106px] mx-auto">
          <Swiper
            key={sliderKey}
            onBeforeInit={(swiper) => {
              swiperRef.current = swiper;
            }}
            loop={blogSlides.length > 1}
            slidesPerView={1}
            spaceBetween={0}
            modules={[Navigation]}
            navigation={{
              nextEl: nextEl.current,
              prevEl: prevEl.current,
            }}
            className="!overflow-hidden w-full h-full"
          >
            {blogSlides.map((blog) => (
              <SwiperSlide key={blog.id}>
                <div className="lg:border border-primary-main flex lg:flex-row flex-col">
                  <Image
                    src={getImageUrl(blog?.main_image)}
                    alt={blog.title ?? ""}
                    width={553}
                    height={489}
                    className="lg:w-[553px] lg:h-[489px] md:h-auto h-[394px] w-[100%] object-cover object-center"
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
                            {formatDate(blog?.published_at)}
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
                            {blog.duration} {t("home.blogs.duration_suffix")}
                          </span>
                        </div>
                        {/* <Image
                    src={"/images/share-icon.png"}
                    alt="share"
                    width={21}
                    height={18}
                    className="lg:h-[21px] h-[13px] lg:w-[21px] w-[14px]"
                  /> */}
                      </div>
                      {/* <Image
                  src={"/images/bookmark-icon.png"}
                  alt="bookmark"
                  width={21}
                  height={23}
                  className=""
                /> */}
                    </div>
                    <div className="lg:order-2 order-1">
                      <div className="flex flex-col">
                        <span className="lg:text-[25px] text-[13px] font-bold text-secondary-600">
                          {blog.title}
                        </span>
                        {/* <span className="lg:text-[20px] text-[13px] text-secondary-600 lg:pt-0 pt-1">
                    گفتگو با دکتر محرابی در خصوص پراکندگی زن و مرد
                  </span> */}
                        <span
                          className="font-extralight lg:text-[18px] text-[11px] text-[#272727] lg:pt-[70px] pt-[15px]"
                          title={blog.sub_title}
                        >
                          {blog.sub_title?.substring(0, 200)}...
                        </span>
                      </div>
                      <Link
                        href={`/blogs/${blog.slug}`}
                        className="lg:absolute left-0 bottom-0 lg:text-[18px] text-[11px] text-black font-thin w-full text-left"
                      >
                        {t("home.blogs.read_more")}
                      </Link>
                    </div>
                  </div>
                  <Divider className="!mx-5 mt-7 lg:!hidden block" />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

      </div>
    </div>
  );
};

export default Blogs;
