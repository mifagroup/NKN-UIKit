import Image from "next/image";
import Link from "next/link";
import React from "react";

const blogs = [
  {
    id: 1,
    image: "/images/doc-blog-1.png",
    title: "بیش از بیست و پنج درصد بیماران مرد هستند",
    description:
      "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و ....",
    date: "20 شهریور 1403",
    min_read: "هشت دقیقه",
  },
  {
    id: 2,
    image: "/images/doc-blog-2.png",
    title: "بیش از بیست و پنج درصد بیماران مرد هستند",
    description:
      "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و ....",
    date: "20 شهریور 1403",
    min_read: "هشت دقیقه",
  },
  {
    id: 3,
    image: "/images/doc-blog-3.png",
    title: "بیش از بیست و پنج درصد بیماران مرد هستند",
    description:
      "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و ....",
    date: "20 شهریور 1403",
    min_read: "هشت دقیقه",
  },
];

const Blogs = () => {
  return (
    <div className="lg:px-0 px-5">
      <div className="flex flex-col lg:gap-y-[50px] gap-y-5 pt-[34px]">
        <span className="text-base lg:text-right text-center font-semibold text-black">
          مطالعات و مقالات دکتر اصلان پایور
        </span>
        <div className="flex flex-col lg:gap-y-8 gap-y-5">
          {blogs?.map((blog) => (
            <div
              key={blog.id}
              className="flex lg:flex-row flex-col items-center gap-x-7"
            >
              <Image
                  unoptimized
                src={blog.image}
                alt={blog.title}
                width={214}
                height={160}
                className="!h-[160px] !w-[214px]"
                quality={100}
              />
              <div className="flex flex-col lg:gap-y-[25px] gap-y-5 lg:pt-0 pt-5">
                <div className="flex flex-col">
                  <span className="lg:text-[20px] lg:text-right text-center text-[18px] text-[#3F3F3F] font-bold">
                    {blog.title}
                  </span>
                  <span className="text-[18px] text-[#272727] font-extralight">
                    {blog.description}
                  </span>
                </div>
                <div
                  className={`flex items-center justify-between border-b pb-5 border-b-[#BABABA]`}
                >
                  <div className="flex items-center gap-x-3">
                    <div className="flex items-center gap-x-2 lg:text-[15px] text-[13px] font-thin text-black">
                      <Image
                        src={"/images/calendar-icon.png"}
                        alt="cal"
                        width={21}
                        height={23}
                      />
                      {blog.date}
                    </div>
                    <div className="flex items-center gap-x-2 lg:text-[15px] text-[13px] font-thin text-black">
                      <Image
                        src={"/images/clock-icon.png"}
                        alt="clock"
                        width={21}
                        height={23}
                      />
                      {blog.min_read}
                    </div>
                  </div>
                  <Link href={""} className="text-[18px] font-thin text-black">
                    مطالعه بیشتر
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blogs;
