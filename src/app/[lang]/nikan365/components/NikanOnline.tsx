import Image from "next/image";
import Link from "next/link";
import React from "react";

const NikanOnline = () => {
  return (
    <div className="h-[368px] bg-[#EEEEEE] mt-[150px] mb-[133px]">
      <div className="container max-w-[1125px] flex gap-x-[23px]">
        <div className="mt-[-50px]">
          <Image
            src={"/images/nikan365-online.png"}
            alt="online"
            width={566}
            height={440}
          />
        </div>
        <div className="mt-[35px] flex flex-col">
          <span className="text-[32px] font-black text-[#575757]">
            آنلاین تر از همیشه
          </span>
          <span className="max-w-[530px] text-[15px] font-light text-[#7D7D7D]">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
            استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و لورم
            ایپسوم متن ساختگی با تولید سادگی{" "}
          </span>
          <Link
            href={""}
            className="w-[267px] h-[44px] rounded-[15px] bg-primary-main text-white text-[15px] font-medium flex justify-center items-center mt-5"
          >
            عضویت در نیکان 365
          </Link>
          <div className="flex items-center gap-x-4 mt-10">
            <span className="text-[11px] text-[#909090]">
              دانلود مستقیم نیکان 365
            </span>
            <Image
              src={"/images/download-icon.png"}
              alt="download"
              width={167}
              height={39}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NikanOnline;
