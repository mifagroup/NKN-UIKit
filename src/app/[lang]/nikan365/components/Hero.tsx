import Image from "next/image";
import Link from "next/link";
import React from "react";

const Hero = () => {
  return (
    <div className="h-[559px] bg-primary-main flex items-end mb-[245px]">
      <div className="flex justify-center items-end w-full">
        <div className="flex flex-col mr-auto w-fit max-w-[390px] mb-5">
          <span className="text-[32px] font-black text-[#575757]">
            آنلاین تر از همیشه
          </span>
          <span className="text-[20px] font-light text-[#6B6B6B]">
            لورم ایپسوم متن ساختگی با تولید سادگی از صنعت{" "}
          </span>
          <Link
            href={""}
            className="w-[346px] h-[57px] bg-white rounded-[15px] text-[24px] font-medium text-[#626262] flex items-center justify-center mt-5"
          >
            عضویت در نیکان 365
          </Link>
          <Image
            src={"/images/nikan365-download.png"}
            alt="download"
            width={330}
            height={63}
            className="mt-5"
          />
        </div>
        <div className="mb-[-180px]">
          <Image
            src={"/images/nikan365-hero.svg"}
            alt="hero"
            width={735}
            height={657}
            className="w-[735px] h-[657px]"
            quality={100}
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
