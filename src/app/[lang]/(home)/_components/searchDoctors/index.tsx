import { getDictionary } from "@/utils/getServerDictionary";
import { Button, Divider, TextField, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";

const SearchDoctors = ({
  dictionary,
}: {
  dictionary: Awaited<ReturnType<typeof getDictionary>>;
}) => {
  const searchTranslate = dictionary.home_search;

  const categories = [
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
    {
      id: 6,
      title: "زخم پای دیابتی",
    },
    {
      id: 7,
      title: "فیزیوتراپی در منزل",
    },
    {
      id: 8,
      title: "پوکی استخوان",
    },
    {
      id: 9,
      title: "آرتریت روماتوئید",
    },
    {
      id: 10,
      title: "آنژیوگرافی",
    },
    {
      id: 11,
      title: "کرونا و کویید 19",
    },
    {
      id: 12,
      title: "طب اورژانس",
    },
    {
      id: 13,
      title: "کلینیک خواب",
    },
    {
      id: 14,
      title: "دندان پزشکی",
    },
    {
      id: 15,
      title: "سرطان روده",
    },
    {
      id: 16,
      title: "دندان پزشکی",
    },
    {
      id: 17,
      title: "سرطان روده",
    },
    {
      id: 18,
      title: "تعویض مفصل زانو",
    },
    {
      id: 19,
      title: "زخم پای دیابتی",
    },
    {
      id: 20,
      title: "فیزیوتراپی در منزل",
    },
    {
      id: 21,
      title: "انکولوژی و مراقبت ها",
    },
    {
      id: 22,
      title: "کرونا و کویید 19",
    },
    {
      id: 23,
      title: "طب اورژانس",
    },
    {
      id: 24,
      title: "کلینیک خواب",
    },
    {
      id: 25,
      title: "دندان پزشکی",
    },
  ];

  return (
    <div className="pr-[195px] pl-[140px] bg-secondary-50 max-h-[416px]">
      <div className="relative flex justify-between">
        <div className="max-w-[790px] flex flex-col gap-y-[30px] flex-1 mt-[-100px]">
          <Typography className="!text-grey-800 !text-[20px] !font-extrabold">
            {searchTranslate.title}
          </Typography>
          <div className="border border-primary-main flex gap-x-5 justify-between items-center rounded-[60px] bg-white pr-[36px] pl-[14px] py-2.5">
            <input
              type="text"
              className="w-full !text-[32px] placeholder:!text-[32px] placeholder:!font-light font-light !text-primary-main placeholder:!text-primary-main focus-visible:outline-none"
              placeholder={searchTranslate.search_placeholder}
            />
            <Image
              src={"/images/search-icon.png"}
              alt="search-icon"
              width={74}
              height={74}
            />
          </div>
          <div className="flex gap-x-7">
            <div className="flex flex-col gap-y-5">
              {categories?.slice(0, 5).map((cat) => (
                <Typography
                  key={cat.id}
                  className="!text-base !text-secondary-800 !font-light whitespace-nowrap"
                >
                  {cat.title}
                </Typography>
              ))}
            </div>
            <Divider orientation="vertical" className="!bg-secondary-900" />
            <div className="flex flex-col gap-y-5">
              {categories?.slice(5, 10).map((cat) => (
                <Typography
                  key={cat.id}
                  className="!text-base !text-secondary-800 !font-light whitespace-nowrap"
                >
                  {cat.title}
                </Typography>
              ))}
            </div>
            <Divider orientation="vertical" className="!bg-secondary-900" />
            <div className="flex flex-col gap-y-5">
              {categories?.slice(10, 15).map((cat) => (
                <Typography
                  key={cat.id}
                  className="!text-base !text-secondary-800 !font-light whitespace-nowrap"
                >
                  {cat.title}
                </Typography>
              ))}
            </div>
            <Divider orientation="vertical" className="!bg-secondary-900" />
            <div className="flex flex-col gap-y-5">
              {categories?.slice(15, 20).map((cat) => (
                <Typography
                  key={cat.id}
                  className="!text-base !text-secondary-800 !font-light whitespace-nowrap"
                >
                  {cat.title}
                </Typography>
              ))}
            </div>
            <Divider orientation="vertical" className="!bg-secondary-900" />
            <div className="flex flex-col gap-y-5">
              {categories?.slice(20, 25).map((cat) => (
                <Typography
                  key={cat.id}
                  className="!text-base !text-secondary-800 !font-light whitespace-nowrap"
                >
                  {cat.title}
                </Typography>
              ))}
            </div>
          </div>
          <Button className="!bg-primary-main !text-[24px] !text-grey-800 !font-medium !w-[346px] !h-[57px] !rounded-[15px]">
            {searchTranslate.button_title}
          </Button>
        </div>
        <Image
          src={"/images/search-nikan.png"}
          alt="search-nikan-mobile-image"
          width={355}
          height={594}
          className="mt-[-100px] !h-[594px] !w-[355px]"
        />
      </div>
    </div>
  );
};

export default SearchDoctors;
