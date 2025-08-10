import Image from "next/image";
import Link from "next/link";
import React from "react";

const NikanOnline = () => {
  return (
    <div className="lg:h-[368px] xl:pb-0 pb-5  mt-[150px] mb-[133px]">
      <div className="container max-w-[1125px] flex lg:flex-row flex-col-reverse lg:items-start items-center gap-x-[23px]">
            <div className="lg:mt-[35px] flex flex-col xl:pl-0 md:pl-10 md:pr-0 px-5">
          <span className="lg:text-[32px] text-[20px] font-black text-[#575757]">
          نیکان 365، آنلاین تر از همیشه
          </span>
          <span className="max-w-[530px] lg:text-[15px] text-[14px] font-light text-[#7D7D7D]">
          همین حالا به نیکان ۳۶۵ بپیوندید و سلامت خانواده‌تان را با یک اپ هوشمند مدیریت کنید. نوبت بگیرید، ویزیت شوید، مشاوره بگیرید… از هر جا، در هر زمان.   </span>
          <Link
            href={"https://pa.nikan365.ir/auth/login"}
            className="md:w-[267px] w-full h-[44px] rounded-[15px] bg-primary-main text-white text-[15px] font-medium flex justify-center items-center mt-5"
            target="_blank"
          >
           ثبت‌نام رایگان
          </Link>
        {/*  <div className="items-center gap-x-4 lg:mt-10 mt-4 lg:flex hidden">
            <span className="text-[11px] text-[#909090] lg:block hidden">
              دانلود مستقیم نیکان 365
            </span>
            <Image
              src={"/images/download-icon.png"}
              alt="download"
              width={167}
              height={39}
            />
          </div>
          <div className="flex items-center gap-x-4 mt-4 lg:hidden">
            <Image
              src={"/images/nikan365-download.png"}
              alt="download"
              width={330}
              height={63}
              className="sm:w-[330px] sm:h-[63px] w-[234px] h-[45px]"
            />
            <Link
              href={""}
              className="text-[14px] font-light text-[#6B6B6B] sm:hidden block"
            >
              دانلود مستقیم
            </Link>
          </div>*/}
        </div><div className="xl:mt-[-50px]">
          <Image
            src={"/images/nikan365-online.png"}
            alt="online"
            width={566}
            height={440}
            className="md:block hidden"
          />
          <Image
            src={"/images/nikan365-online-res.png"}
            alt="online"
            width={395}
            height={331}
            className="md:hidden block"
          />
        </div>
    
      </div>
    </div>
  );
};

export default NikanOnline;
