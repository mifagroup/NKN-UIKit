import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <div className="lg:pt-[120px] pt-6">
      <div className="flex flex-col items-center lg:gap-y-1">
        <h1 className="text-xl font-semibold text-center">
          واحد بین الملل نیکان
        </h1>
        <h2 className="text-sm font-light text-center">
          واحد بین‌المللی گردشگری سلامت بیمارستان نیکان
        </h2>
      </div>
      <Image
        src={"/images/inter-hero.png"}
        alt=""
        width={968}
        height={496}
        className="pt-5"
      />
    </div>
  );
};

export default Hero;
