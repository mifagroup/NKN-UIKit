import Image from "next/image";
import Link from "next/link";
import React from "react";

const OnlineReservation = () => {
  return (
    <div className="max-w-[1144px] container pt-[35px]">
      <div className="flex items-center gap-x-2.5">
        <Image
          src={"/images/nikan-second-branch.png"}
          alt="branch"
          height={115}
          width={142}
          className="object-cover"
        />
        <div className="flex-grow flex justify-between items-center">
          <div className="flex flex-col gap-y-1">
            <span className="text-[32px] font-black text-[#595959]">
              مركز جراحی محدود و سرپايی نیکان
            </span>
            <span className="text-[15px] font-light text-[#787878]">
              تهران، اقدسیه ، ابتدای بلوار ارتش، ورودی اراج ، خیابان ۲۲ بهمن
              ،روبه روی بیمارستان نیکان
            </span>
          </div>
          <Link
            href={""}
            className="text-[#323232] font-medium text-[24px] bg-primary-main w-[346px] h-[57px] flex justify-center items-center rounded-[15px]"
          >
            پذیرش آنلاین
          </Link>
        </div>
      </div>
    </div>
  );
};

export default OnlineReservation;
