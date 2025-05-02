import Image from "next/image";
import Link from "next/link";
import React from "react";

const Hero = () => {
  return (
    <div className="lg:h-[559px] md:h-[350px] sm:h-[350px] h-[408px] bg-primary-main flex items-end sm:mb-[245px] mb-[410px]">
      <div className="flex justify-center md:items-end items-center w-full sm:flex-row flex-col">
        <div className=" flex flex-col md:mr-auto lg:pr-0 sm:pr-5 w-fit max-w-[390px] sm:mb-5 sm:order-1 order-2 mb-[-350px]">
          <span className="lg:text-[32px] sm:text-[24px] text-[20px] font-black text-[#575757]">
            آنلاین تر از همیشه
          </span>
          <span className="lg:text-[20px] sm:text-[15px] text-[14px] font-light text-[#6B6B6B] whitespace-nowrap">
            نیکان خانه است و شما عضوی از خانوده ما...
          </span>
          <Link
            href={"https://pa.nikan365.ir/auth/login"}
            className="mb-[100px] w-[346px] h-[57px] sm:bg-white bg-primary-main rounded-[15px] text-[24px] font-medium sm:text-[#626262] text-white flex items-center justify-center mt-5"
            target="_blank"
          >
            عضویت در نیکان 365
          </Link>
        </div>
        <div className="md:mb-[-180px] sm:mb-[-50px] sm:order-2 order-1 sm:self-center self-end">
          <Image
            src={"/images/nikan365-hero.svg"}
            alt="hero"
            width={735}
            height={657}
            className="xl:w-[735px] xl:h-[657px] lg:w-[650px] lg:h-[585px] md:w-[450px] md:h-[550px] sm:block hidden"
            quality={100}
          />
          <Image
            src={"/images/nikan365-hero-res.svg"}
            alt="hero"
            width={390}
            height={510}
            className="sm:hidden block"
            quality={100}
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
