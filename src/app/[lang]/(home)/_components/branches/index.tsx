import Image from "next/image";
import React from "react";

const Branches = () => {
  return (
    <div className="lg:max-h-[630px] grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1">
      <div className="relative">
        <Image
          src={"/images/aghdasieh-branch.png"}
          alt="aghdasieh-branch"
          width={1000}
          height={630}
          quality={100}
          className="object-cover lg:h-[630px] h-full"
        />
        <div className="absolute bottom-[66px] w-full flex flex-col">
          <Image
            src={"/images/aghdasieh-branch-name-and-icon.png"}
            alt="icon"
            width={316}
            height={145}
            className="w-full px-[34px]"
          />
          <span className="text-white xl:text-[24px] text-[20px] px-[34px]">
            نیکان اقدسیه
          </span>
        </div>
      </div>
      <div className="relative">
        <Image
          src={"/images/hakimieh-branch.png"}
          alt="aghdasieh-branch"
          width={1000}
          height={630}
          quality={100}
          className="object-cover lg:h-[630px] h-full"
        />
        <div className="absolute bottom-[66px] w-full flex flex-col">
          <Image
            src={"/images/hakimieh-branch-name-and-icon.png"}
            alt="icon"
            width={316}
            height={145}
            className="w-full px-[34px]"
          />
          <span className="text-white xl:text-[24px] text-[20px] px-[34px]">
            نیکان حکیمیه
          </span>
        </div>
      </div>
      <div className="relative">
        <Image
          src={"/images/second-branch.png"}
          alt="aghdasieh-branch"
          width={1000}
          height={630}
          quality={100}
          className="object-cover lg:h-[630px] h-full"
        />
        <div className="absolute bottom-[66px] w-full flex flex-col">
          <Image
            src={"/images/second-branch-name-and-icon.png"}
            alt="icon"
            width={316}
            height={145}
            className="w-full px-[34px]"
          />
          <span className="text-white xl:text-[24px] text-[20px] px-[34px]">
            نیکان ساختمان شماره دو
          </span>
        </div>
      </div>
      <div className="relative">
        <Image
          src={"/images/aghdasieh-west-branch.png"}
          alt="aghdasieh-branch"
          width={1000}
          height={630}
          quality={100}
          className="object-cover lg:h-[630px] h-full"
        />
        <div className="absolute bottom-[66px] w-full flex flex-col">
          <Image
            src={"/images/aghdasieh-west-branch-name-and-icon.png"}
            alt="icon"
            width={316}
            height={145}
            className="w-full px-[34px]"
          />
          <span className="text-white xl:text-[24px] text-[20px] px-[34px]">
            نیکان ساختمان شماره دو
          </span>
        </div>
      </div>
    </div>
  );
};

export default Branches;
