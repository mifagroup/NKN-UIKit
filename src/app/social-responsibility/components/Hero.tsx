import Image from "next/image";
import React from "react";
import { components } from "@/lib/api/v1";
import Link from "next/link";

interface HeroProps {
  slider: components["schemas"]["BlogResource"][];
}

const Hero = ({ slider = [] }: HeroProps) => {
  return (
    <div className="lg:mt-[57px] flex flex-col gap-y-8 lg:pb-[57px] pb-[46px] lg:border-b border-b-[#ACACAC]">
      <div className="flex-col items-center gap-y-1 lg:flex hidden">
        <h1 className="text-xl leading-[33px] font-semibold text-center">
          نیکان و مسئولیت اجتماعی
        </h1>
      </div>
      <div className="grid lg:grid-cols-7 grid-cols-1 lg:gap-3">
        {slider[0] && (
          <div className="relative lg:col-span-7">
            <div className="absolute lg:bottom-6 bottom-0 lg:p-0 pb-6 pr-4 pt-2 lg:right-8 right-0 flex flex-col gap-y-2 lg:bg-transparent bg-[#00000067]">
              <span className="text-white text-xl font-semibold">
                {slider[0].title}
              </span>
              <span className="text-sm font-light text-white">
                {slider[0].sub_title}
              </span>
            </div>
              <Link
                  href={`/social-responsibility/${slider[0].slug}`}
              >
                  <Image
                      src={slider[0].main_image?.original_url || ""}
                      alt={slider[0].title || ""}
                      width={1107}
                      height={346}
                      className="lg:h-[346px] h-[456px] object-cover"
                  />
              </Link>

          </div>
        )}
        
        {slider[1] && (
          <div className="relative lg:col-span-4 lg:h-[333px] h-[400px]">
            <div className="absolute lg:bottom-2 bottom-0 lg:p-0 pb-6 pr-4 pt-2 lg:right-8 right-0 flex flex-col gap-y-2 z-10 lg:bg-transparent bg-[#00000067]">
              <span className="text-white text-xl font-semibold">
                {slider[1].title}
              </span>
              <span className="text-sm font-light text-white">
                {slider[1].sub_title}
              </span>
            </div>
              <Link
                  href={`/social-responsibility/${slider[1].slug}`}
              >
                <Image
                  src={slider[1].main_image?.original_url || ""}
                  alt={slider[1].title || ""}
                  fill
                  className="object-cover"
                />
              </Link>
          </div>
        )}
        
        {slider[2] && (
          <div className="relative lg:col-span-3 h-[333px]">
            <div className="absolute lg:bottom-2 bottom-0 lg:p-0 pb-6 pr-4 pt-2 lg:bg-transparent bg-[#00000067] lg:right-8 right-0 flex flex-col gap-y-2 z-10">
              <span className="text-white text-xl font-semibold">
                {slider[2].title}
              </span>
              <span className="text-sm font-light text-white">
                {slider[2].sub_title}
              </span>
            </div>
              <Link
                  href={`/social-responsibility/${slider[2].slug}`}
              >
                  <Image
                      src={slider[2].main_image?.original_url || ""}
                      alt={slider[2].title || ""}
                      fill
                      className="object-cover"
                  />
              </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Hero;
