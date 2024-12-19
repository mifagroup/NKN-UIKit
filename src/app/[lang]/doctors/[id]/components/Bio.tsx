import { Divider } from "@mui/material";
import React from "react";

const Bio = () => {
  return (
    <div className="lg:px-0 px-5">
      <Divider className="!my-5 !bg-[#AFAFAF] !h-[1px] lg:block hidden" />
      <div className="flex flex-col lg:gap-y-1 lg:pt-0 pt-7 mx-auto lg:max-w-max max-w-[350px]">
        <span className="font-bold text-[15px] text-black">
          بیوگرافی دکتر اصلان پایور
        </span>
        <span className="text-black font-extralight text-[15px] text-justify lg:leading-normal leading-[23px]">
          دکتر یوسف شفائی دارای مدرک فوق تخصص جراحی پلاستیک، زیبایی و ترمیمی در
          لیست بهترین جراح بینی تهران قرار دارند. ایشان علاوه بر عمل زیبایی
          بینی، در زمینه جراحی زیبایی صورت، بدن و… هم فعالیت می‌کنند. پزشک 24 با
          بیش از 3 سال سابقه همکاری با دکتر شفایی شاهد رضایتمندی بالای
          مراجعین ایشان بوده است. 
        </span>
      </div>
    </div>
  );
};

export default Bio;
