import { components } from "@/lib/api/v1";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import ShareLink from "./../../../(home)/_components/branchesAddresses/share";
const DoctorIntro = ({
  doctor,
}: {
  doctor: components["schemas"]["DoctorResource"];
}) => {
  return (
    <div className="flex lg:justify-between lg:flex-row flex-col gap-y-4 lg:items-stretch items-center lg:px-0 px-5 relative">
      <div className="flex items-center lg:gap-x-3.5 gap-x-2.5">
        <Image
          src={doctor.image.original_url ?? ""}
          alt="doc"
          width={144}
          height={188}
          className="lg:w-[144px] lg:h-[188] w-[118px] h-[154px]"
        />
        <div className="flex flex-col">
          <div className="flex items-center justify-between">
            <span className="text-base font-bold text-black">
              {doctor.full_name}
            </span>
       {/*     <span
              className="cursor-pointer lg:text-[12px] text-[9px] font-extralight text-black lg:hidden block
            "
            >
              اشتراک گذاری پروفایل پزشک
            </span>*/}
          </div>
          <span className="lg:text-base text-[12px] font-medium text-black">
            {doctor.sub_title}
          </span>
          <span className="lg:pt-1.5 text-base font-extralight text-black">
            شماره نظام پزشکی: {doctor.code}
          </span>
          <span className="lg:text-base text-[12px] font-extralight text-black lg:pt-4 pt-1 lg:max-w-max max-w-[234px]">
            {doctor.short_description}
          </span>
          <div className="pt-[18px] flex items-center gap-x-1.5">
            {doctor.terms?.slice(0, 3)?.map((term , index) => (
              <span
                className="lg:px-3.5 px-2.5 py-1 text-black lg:text-[12px] text-[10px] font-extralight bg-[#F3F3F3] rounded-[8px]"
                key={index}
              >
                {term.title}
              </span>
            ))}
          </div>
        </div>
      </div>
      <div className="flex flex-col lg:justify-between justify-end items-end">
        <ShareLink
            url={`${process.env.NEXT_PUBLIC_APP_URL}/doctor/${doctor.id}`}
            title={doctor.full_name}
            label={
              <span className="cursor-pointer lg:text-[12px] text-[9px] font-extralight text-black lg:block hidden">
          اشتراک گذاری پروفایل پزشک
        </span>
            }
        />
        {doctor.redirect && (
            <div className="flex lg:flex-row flex-col gap-y-3.5 items-center gap-x-2.5">
              <ShareLink
                  url={`${process.env.NEXT_PUBLIC_APP_URL}/doctor/${doctor.id}`}
                  title={doctor.full_name}
                  label={
                    <button
                        className="text-[12px] font-extralight text-black lg:w-[200px] w-[350px] h-[40px] rounded-[8px] bg-[#ECECEC] lg:hidden block">
                      اشتراک گذاری پروفایل پزشک
                    </button>
                  }
                />
              <Link
                  className="text-base font-semibold text-white lg:w-[200px] w-[350px] h-[40px] rounded-[8px] bg-[#14D9B0] flex justify-center items-center"
                  href={doctor.redirect}
                  target="_blank"
              >
                تعیین نوبت پزشک
              </Link>
            </div>
        )}

      </div>
    </div>
  );
};

export default DoctorIntro;
