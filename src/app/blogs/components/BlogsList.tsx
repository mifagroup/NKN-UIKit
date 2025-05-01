"use client";
import { components } from "@/lib/api/v1";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Blogs from "./Blogs";
import { useFetch } from "@/utils/clientRequest";
import { useDebounce } from "use-debounce";
import MagazineForm from "./MagazineForm";

type BlogsListProps = {
  blogs: components["schemas"]["BlogResource"][];
};

const BlogsList = (props: BlogsListProps) => {
  const [searchValue, setSearchValue] = React.useState("");

  const [value] = useDebounce(searchValue, 500);

  const { blogs } = props;

  const { data } = useFetch().useQuery("get", "/terms", {
    params: {
      query: {
        per_page: 10,
        "filter[search]": value,
      },
    },
  });

  const terms = data?.data;

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
              <MagazineForm />
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
              placeholder="جستجو...."
              className="text-[20px] text-primary-main placeholder:text-primary-main focus-visible:outline-none"
              onChange={(e) => setSearchValue(e.target.value)}
            />
            <Image
              src={"/images/search-icon.png"}
              alt="search-icon"
              width={47}
              height={47}
            />
          </div>
          <div className="grid grid-cols-2 gap-y-2">
            {terms?.map((term) => (
              <Link
                href={`/doctors?terms=${term.id}`}
                key={term.id}
                className="text-[#5b5b5b] font-light"
              >
                {term.title}
              </Link>
            ))}
          </div>
        </div>
      </div>
      <Blogs blogs={blogs} />
    </div>
  );
};

export default BlogsList;
