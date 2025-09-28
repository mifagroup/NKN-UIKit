import { components } from "@/lib/api/v1";
import Image from "next/image";
import Link from "next/link";
import ShareLink from "@/app/(home)/_components/branchesAddresses/share";
import React from "react";

const DoctorItem = ({
  doctor,
}: {
  doctor: components["schemas"]["DoctorResource"];
}) => {
  return (
    <div className="flex md:flex-row flex-col gap-y-4 items-stretch py-5">
      <div className="flex items-center gap-x-3.5 w-full">
        <Link href={`/doctor/${doctor.id}`} className={"!h-[188px] !w-[144px]"}>
          <Image
            src={doctor.image.original_url ?? ""}
            alt="doc"
            width={144}
            height={188}
            className="!h-[188px] !w-[144px] rounded-[17px] max-w-[144px]"
          />
        </Link>
        <div className="flex flex-col w-full">
          <Link
              href={`/doctor/${doctor.id}`}
              className="text-base font-bold text-black"
          >
            {doctor.full_name}
          </Link>
          <span className="text-base text-black">
            {doctor.sub_title}
          </span>
          <span className="pt-1.5 text-base font-extralight text-black">
            شماره نظام پزشکی: {doctor.code}
          </span>
          <span className="text-base font-extralight text-black pt-4">
            {doctor.short_description}
          </span>
          <div className="flex flex-col sm:flex-row justify-between">
            <div className={`flex flex-wrap pt-[18px] items-center gap-x-1.5`}>
              {doctor.hospitals?.length ? (
                  doctor.hospitals?.map((hospital, index) => (

                      <span key={index} className={` mt-1 px-3.5 py-1 text-white text-[12px] font-medium  rounded-[8px]  ${
                          hospital?.title == "اقدسیه" ? "bg-[#E43C7F]" :
                              hospital?.title == 'سپید' ? "bg-[#F4DE63]" :
                                  hospital?.title == 'مرکز جراحی محدود نیکان' ? "bg-[#4CC5AC]" :
                                      hospital?.title == 'غرب' ? "bg-[#4CB1DD]" : ""

                      }`}>
                             {hospital?.title}
                           </span>

                ))
                ) : null}
            </div>
          </div>

              {/*            <div className="pt-[18px] items-center ml-3 gap-x-1.5">
              {doctor.terms?.slice(0, 3)?.map((term) => (
                  <span
                      className="px-3.5 py-1 text-black text-[12px] font-extralight bg-[#F3F3F3] rounded-[8px]"
                      key={term.id}
                  >
                {term.title}
              </span>
              ))}
            </div>*/}
            </div>
          </div>
          <div className="flex flex-col justify-center gap-y-[13px] items-center">
            {doctor.redirect && (
                <Link
                    href={doctor.redirect}
                    className="text-[12px] font-extralight text-black lg:w-[200px] w-full h-[40px] rounded-[8px] bg-[#B9F4E8] flex items-center justify-center"
                    target="_blank"
                >
                  تعیین نوبت پزشک
                </Link>
            )}
            <button
                className="text-[12px] font-extralight text-black lg:w-[200px] w-full h-[40px] rounded-[8px] bg-[#ECECEC]">
              <Link
                  href={`/doctor/${doctor.id}`}
                  className="text-[12px] font-extralight text-black"
              >
                بازدید صفحه پزشک
              </Link>
            </button>
            <div className="pt-2.5 flex items-center gap-x-[15px] justify-center">
              {/*          <Link
            href={`/doctor/${doctor.id}`}
            className="text-[12px] font-extralight text-black"
          >
            بازدید صفحه پزشک
          </Link>
          <Divider orientation="vertical" className="!bg-[#D9D9D9] !w-[1px]" />*/}
              <ShareLink
                  url={`${process.env.NEXT_PUBLIC_APP_URL}/doctor/${doctor.id}`}
                  title={doctor?.full_name}
                  label={
                    <div className="text-[12px] font-extralight text-black">
                      اشتراک گذاری
                    </div>
                  }
              />
            </div>
          </div>
        </div>
        );
        };

export default DoctorItem;
