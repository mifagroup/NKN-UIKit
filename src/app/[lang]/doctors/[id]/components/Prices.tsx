import { Divider } from "@mui/material";
import React from "react";

const Prices = () => {
  return (
    <div className="lg:px-0 px-5">
      <div className="flex flex-col gap-y-[25px]">
        <Divider className="!bg-[#AFAFAF] !mt-[34px] !mb-0" />
        <div className="flex flex-col gap-y-1.5">
          <span className="text-base font-semibold text-black">
            هزینه خدمات درمانی دکتر فلانی
          </span>
          <span className="text-base font-light text-black">
            هزینه عمل بینی دکتر یوسف شفائی با در نظر گرفتن هزینه کلینیک از حدود
            ۵۳ میلیون تومان شروع شده و ممکن است با توجه به نوع بینی و میزان
            دشواری عمل افزایش پیدا کند.
          </span>
        </div>
        <Divider className="!bg-[#AFAFAF] !mt-0 !mb-0" />
      </div>
    </div>
  );
};

export default Prices;
