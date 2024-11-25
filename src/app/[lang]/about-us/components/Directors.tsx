import Image from "next/image";
import React from "react";

const Directors = () => {
  return (
    <div className="pt-[146px] pb-[142px] max-w-[1091px] container">
      <div className="flex flex-col gap-y-10">
        <span className="text-[24px] font-black text-[#626262]">
          هیئت مدیره گروه درمانی نیکان
        </span>
        <div className="grid grid-cols-6 gap-[22px]">
          {[...Array(10)].map((_, index) => (
            <div className="flex flex-col gap-y-[25px]" key={index}>
              <Image
                src={`/images/director-${index + 1}.png`}
                alt="director"
                width={163}
                height={272}
                className="border-b-[4px] border-primary-main"
              />
              <div className="flex flex-col gap-y-1">
                <span className="text-[14px] font-black text-[#626262] text-center">
                  دکتر سیروس تابش{" "}
                </span>
                <span className="text-[14px] font-extralight text-[#626262] text-center">
                  مدیر عامل هولدینگ
                </span>
              </div>
            </div>
          ))}
          <div className="col-span-2 max-h-[276px] flex items-center justify-center bg-primary-main text-white text-[14px] font-black">
            آشنایی با تمام مدیران نیکان
          </div>
        </div>
      </div>
    </div>
  );
};

export default Directors;
