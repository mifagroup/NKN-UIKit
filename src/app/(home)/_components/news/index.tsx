"use client";
import { components } from "@/lib/api/v1";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper as SwiperType } from "swiper/types";

// Import Swiper styles
import { useMediaQuery } from "@mui/material";
import "swiper/css";
import "swiper/css/navigation";
import { useLanguage } from "@/contexts/LanguageContext";

const News = ({ news }: { news: components["schemas"]["BlogResource"][] }) => {
  const isMobile = useMediaQuery("(max-width: 768px)");
  const swiperRef = useRef<SwiperType>();
  const { t } = useLanguage();

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

  return (
    <>
      <section className="py-8 max-w-[1100px] mx-auto lg:px-0 px-12">
        <div className="md:flex  md:flex-row gap-6 items-stretch relative">
          {/* Navigation arrows */}
          {isMobile && (
            <button
              className="!min-w-fit !p-0 !absolute lg:top-1/2 lg:translate-y-[-50%] top-[25%] right-[-30px] z-10"
              onClick={() => swiperRef.current?.slidePrev()}
            >
              <Image
                src={"/images/arrow-right.png"}
                alt="arrow-right"
                width={23}
                height={63.5}
                className="lg:!h-[63.5px] lg:!w-[23px] !h-[32px] !w-[11px]"
              />
            </button>
          )}

          <Swiper
            onBeforeInit={(swiper) => {
              swiperRef.current = swiper;
            }}
            slidesPerView={1}
            spaceBetween={20}
            modules={[Navigation]}
            className="w-full"
            breakpoints={{
              768: {
                slidesPerView: 3,
              },
            }}
          >
            {news.map((item, idx) => (
              <SwiperSlide key={idx}>
                <Link
                  href={`/news/${item.slug}`}
                  className="border cursor-pointer border-[#31D1B0] overflow-hidden flex flex-col h-full"
                >
                  <div className="relative w-full h-48">
                    <Image
                        unoptimized
                      src={getImageUrl(item.main_image)}
                      alt={item.title || ""}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="px-2 py-4 flex flex-col flex-grow h-[80px]">
                    <h3 className="font-bold text-xs text-[#3F3F3F] leading-tight mb-1 ellipsis-2">
                      {item.title}
                    </h3>
                    <p className="text-[11px] text-[#3F3F3F] leading-snug ellipsis-2">
                      {item.sub_title}
                    </p>
                  </div>
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>

          {isMobile && (
            <button
              className="!min-w-fit !p-0 !absolute lg:top-1/2 lg:translate-y-[-50%] top-[25%] left-[-30px] z-10"
              onClick={() => swiperRef.current?.slideNext()}
            >
              <Image
                src={"/images/arrow-right.png"}
                alt="arrow-right"
                width={23}
                height={63.5}
                className="lg:!h-[63.5px] lg:!w-[23px] !h-[32px] !w-[11px] rotate-180"
              />
            </button>
          )}

          {/* "See more news" link - hidden on mobile */}

          <Link
            href={"/news"}
            className="bg-gray-100 cursor-pointer hidden md:flex items-center justify-center md:w-1/4 md:h-[274px] text-center font-bold text-gray-700 rounded-md"
          >
            {t("home.news.more_news")}
          </Link>
        </div>
      </section>
    </>
  );
};

export default News;
