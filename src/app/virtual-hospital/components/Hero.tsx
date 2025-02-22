import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <Image
      src={"/images/virtual-hospital-hero.png"}
      alt=""
      width={1920}
      height={600}
      className="object-cover h-[600px]"
    />
  );
};

export default Hero;
