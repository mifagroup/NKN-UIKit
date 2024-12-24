import { Divider } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const terms = [
  {
    id: 1,
    title: "طب اورژانس",
  },
  {
    id: 2,
    title: "کلینیک خواب",
  },
  {
    id: 3,
    title: "دندان پزشکی",
  },
  {
    id: 4,
    title: "سرطان روده",
  },
  {
    id: 5,
    title: "تعویض مفصل زانو",
  },
];

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
  {
    id: 4,
    image: "/images/doc-blog-3.png",
    title: "بیش از بیست و پنج درصد بیماران مرد هستند",
    description:
      "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و ....",
    date: "20 شهریور 1403",
    min_read: "هشت دقیقه",
  },
];

const BlogsList = () => {
  return (
    <div className="flex lg:flex-row flex-col gap-x-[60px] lg:pt-[88px] pt-10 gap-y-20 lg:px-0 px-5">
      <div className="flex flex-col gap-y-10 lg:w-[336px] w-full lg:order-1 order-2">
        <div className="border-t-[#F56F95] border-t-[6px] bg-[#F1F1F1] lg:px-6 px-[19px] py-[15px] relative">
          <Image
            src={"/images/magazine.png"}
            alt="magazine"
            width={138}
            height={156}
            className="absolute -top-16 lg:-left-6 -left-4"
          />
          <div className="flex flex-col gap-y-6">
            <span className="lg:text-[14px] text-[13px] font-black text-[#636363] lg:tracking-tight tracking-tighter">
              عضویت در خبرنامه مجله ی علمی نیکان
            </span>
            <div className="flex flex-col gap-y-3">
              <div className="flex flex-col gap-y-2">
                <span className="text-[14px] font-light text-[#7c7c7c]">
                  هرهفته دوشنبه ها صبح
                </span>
                <span className="text-[14px] font-light text-[#7c7c7c]">
                  خبرنامه تخصصی نیکان را در ایمیل خود بخوانید
                </span>
              </div>
              <div className="flex flex-col gap-y-1.5">
                <input
                  type="text"
                  placeholder="ایمیل خود را وارد کنید"
                  className="bg-[#e1e1e1] w-full py-2 text-center rounded-[7px] text-[14px] placeholder:text-[14px] focus-visible:outline-none focus-visible:border-[#F56F95] border border-transparent"
                />
                <button className="text-white bg-[#F56F95] w-full py-2.5 rounded-[7px] text-[14px]">
                  عضویت در خبرنامه
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="border-t-primary-main border-t-[6px] bg-[#F1F1F1] lg:px-6 px-[19px] pb-[15px] pt-6 relative">
          <Image
            src={"/images/nikan365-online.png"}
            alt="nikan365-online"
            width={177}
            height={131}
            className="absolute -top-5 left-3.5"
          />
          <div className="flex flex-col gap-y-8">
            <div className="flex flex-col">
              <span className="text-[20px] font-black text-[#636363]">
                نیکان 365
              </span>
              <span className="leading-5 text-[#7c7c7c] text-[14px] font-light">
                سامانه جامع خدمات
                <br />
                آنلاین بیمارستان های نیکان
              </span>
            </div>
            <div className="flex flex-col gap-y-3">
              <span className="text-[14px] font-bold text-[#aaaaaa]">
                انجام کلیه خدمات درمانی نیکان به صورت آنلاین
              </span>
              <Link
                href={""}
                className="bg-primary-main rounded-[7px] w-full font-light text-white text-[14px] h-[33px] flex items-center justify-center"
              >
                ثبت نام در نیکان 365
              </Link>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-y-[30px]">
          <div className="w-full flex items-center justify-between border rounded-[61px] border-primary-main pr-[30px] pl-3 py-1.5">
            <input
              type="text"
              placeholder="زخم پای دیابتی...."
              className="text-[20px] text-primary-main placeholder:text-primary-main focus-visible:outline-none"
            />
            <Image
              src={"/images/search-icon.png"}
              alt="search-icon"
              width={47}
              height={47}
            />
          </div>
          <div className="flex justify-between">
            <div className="flex flex-col gap-y-2">
              {terms?.map((term) => (
                <Link
                  href={""}
                  key={term.id}
                  className="text-[#5b5b5b] font-light"
                >
                  {term.title}
                </Link>
              ))}
            </div>
            <Divider orientation="vertical" />
            <div className="flex flex-col gap-y-2">
              {terms?.map((term) => (
                <Link
                  href={""}
                  key={term.id}
                  className="text-[#5b5b5b] font-light"
                >
                  {term.title}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col lg:gap-y-8 gap-y-5 lg:order-2 order-1">
        {blogs?.map((blog) => (
          <div
            key={blog.id}
            className="flex lg:flex-row flex-col items-center gap-x-7"
          >
            <Image
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
                <span className="text-[18px] text-[#272727] font-extralight max-w-[515px]">
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
  );
};

export default BlogsList;
