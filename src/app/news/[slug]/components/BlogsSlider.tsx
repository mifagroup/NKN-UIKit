"use client";
import Image from "next/image";
import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";
import { components } from "@/lib/api/v1";
import Link from "next/link";

type BlogsSliderProps = {
  blogs: components["schemas"]["BlogResource"][];
};

const BlogsSlider = (props: BlogsSliderProps) => {
  const { blogs } = props;

  if (blogs.length)
    return (
      <div className="mt-[70px] mb-[100px]">
        <Swiper
          modules={[Autoplay]}
          autoplay={{ delay: 5000 }}
          slidesPerView={1.2}
          spaceBetween={16}
          breakpoints={{
            640: { slidesPerView: 2, spaceBetween: 20 },
            1024: { slidesPerView: 3, spaceBetween: 24 },
          }}
          className="w-full"
        >
          {blogs.map((blog) => (
            <SwiperSlide key={blog.id} className="!h-auto">
              <Link
                href={`/news/${blog.slug}`}
                className="flex h-full flex-col gap-y-[5px] border border-[#31D1B0]"
              >
                {/* Fixed frame so every card's image has the same size, whatever the source ratio. */}
                <div className="relative aspect-[353/263] w-full overflow-hidden bg-[#f2f2f2]">
                  <Image
                    unoptimized
                    src={blog?.main_image?.original_url ?? ""}
                    alt={blog.title ?? ""}
                    fill
                    sizes="353px"
                    className="object-cover"
                  />
                </div>
                <div className="flex flex-col gap-y-2 px-2.5 pb-10">
                  <span className="line-clamp-1 text-[12px] font-bold text-[#3f3f3f]">
                    {blog.title}
                  </span>
                  {/* <span className="text-[11px] text-[#3f3f3f]">
                    گفتگو با دکتر محرابی در خصوص پراکندگی زن و مرد
                  </span> */}
                  <span
                    className="text-[12px] font-extralight text-[#272727]"
                    title={blog?.sub_title}
                  >
                    {blog?.sub_title?.substring(0, 60)}...
                  </span>
                </div>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    );
};

export default BlogsSlider;
