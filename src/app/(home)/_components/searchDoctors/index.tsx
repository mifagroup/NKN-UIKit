import { components } from "@/lib/api/v1";
import { Button, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";

export const categories = [
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

const SearchDoctors = ({
  terms,
}: {
  terms: components["schemas"]["TermResource"][];
}) => {
  return (
    <div className="bg-secondary-50 md:max-h-[416px] max-h-[333px]  lg:pt-0 pt-[30px] lg:px-0 px-5">
      <div className="relative flex lg:flex-row flex-col justify-between container max-w-[1108px] lg:items-start items-end">
        <div className="lg:max-w-[790px] max-w-full flex flex-col gap-y-[30px] flex-1 lg:mt-[-100px] lg:w-auto w-full">
          <Typography className="!text-grey-800 !text-[20px] !font-extrabold lg:!block !hidden">
            جستجوی خدمات بر اساس شرایط و بیماری، مشخصات پزشک و...
          </Typography>
          <div className="border border-primary-main flex gap-x-5 justify-between items-center lg:rounded-[60px] rounded-[18px] bg-white pr-[36px] pl-[14px] py-2.5">
            <input
              type="text"
              className="w-full lg:!text-[32px] !text-[14px] lg:placeholder:!text-[32px] placeholder:!text-[14px] placeholder:!font-light font-light !text-primary-main placeholder:!text-primary-main focus-visible:outline-none"
              placeholder={"زخم پای دیابتی...."}
            />
            <Image
              src={"/images/search-icon.png"}
              alt="search-icon"
              width={74}
              height={74}
              className="lg:w-[74px] lg:h-[74px] w-[36px] h-[36px]"
            />
          </div>
          <div className="gap-x-7 lg:grid hidden w-[790px] gap-y-5 grid-cols-5">
            {terms.map((cat) => (
              <div className="flex flex-col gap-y-5" key={cat.id}>
                <Typography className="!text-base !text-secondary-800 !font-light whitespace-nowrap">
                  {cat.title}
                </Typography>
              </div>
            ))}
          </div>
          <Button className="!bg-primary-main !text-[24px] !text-grey-800 !font-medium !w-[346px] !h-[57px] !rounded-[15px] lg:!block !hidden">
            تعیین نوبت
          </Button>
        </div>
        <Image
          src={"/images/search-nikan.png"}
          alt="search-nikan-mobile-image"
          width={355}
          height={594}
          className="lg:mt-[-100px] lg:!h-[594px] lg:!w-[355px] !h-[335px] !w-[200px]"
        />
      </div>
    </div>
  );
};

export default SearchDoctors;
