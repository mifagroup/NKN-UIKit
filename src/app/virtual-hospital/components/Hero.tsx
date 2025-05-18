import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <Image
      src={"/images/virtual-hospital-hero.png"}
      alt=""
      width={1920}
      height={600}
      className="object-contain lg:object-center object-left lg:h-[600px] h-[412px]"
    />
  );
};

export default Hero;
