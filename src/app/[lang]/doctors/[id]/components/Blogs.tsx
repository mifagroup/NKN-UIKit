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
    <div className="flex flex-col gap-y-[50px] pt-[34px]">
      <span className="text-base font-semibold text-black">
        مطالعات و مقالات دکتر اصلان پایور
      </span>
      <div className="flex flex-col gap-y-8">
        {blogs?.map((blog) => (
          <div key={blog.id} className="flex items-center gap-x-7">
            <Image
              src={blog.image}
              alt={blog.title}
              width={214}
              height={160}
              className="!h-[160px] !w-[214px]"
              quality={100}
            />
            <div className="flex flex-col gap-y-[25px]">
              <div className="flex flex-col">
                <span className="text-[20px] text-[#3F3F3F] font-bold">
                  {blog.title}
                </span>
                <span className="text-[18px] text-[#272727] font-extralight">
                  {blog.description}
                </span>
              </div>
              <div className="flex items-center justify-between border-b pb-5 border-b-[#BABABA]">
                <div className="flex items-center gap-x-3">
                  <div className="flex items-center gap-x-2 text-[15px] font-thin text-black">
                    <Image
                      src={"/images/calendar-icon.png"}
                      alt="cal"
                      width={21}
                      height={23}
                    />
                    {blog.date}
                  </div>
                  <div className="flex items-center gap-x-2 text-[15px] font-thin text-black">
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
  );
};

export default Blogs;