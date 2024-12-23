import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <Image
      src={"/images/branch.png"}
      alt="branch"
      width={3000}
      height={610}
      className="object-cover h-[610px] object-bottom"
    />
  );
};

export default Hero;
