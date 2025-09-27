"use client";

import Image from "next/image";
import { useLanguage } from "@/contexts/LanguageContext";

const NikanStatement = () => {
  const { t, direction } = useLanguage();
  const sideBorderClass =
    direction === "rtl" ? "md:border-r md:pr-20" : "md:border-l md:pl-20";

  return (
    <div className="max-w-[1236px] container mt-[100px] lg:mb-[80px] mb-5">
      <div className="flex flex-col md:flex-row md:items-center gap-y-[15px] lg:px-0 px-5">
        <div className="md:px-10 h-full md:border-b-0 lg:pb-0 lg:mb-0 border-b-2 pb-4 mb-4 border-b-[#31D1B0]">
          <h2 className="text-[25px] font-bold text-[#5b5b5b] text-center">
            {t("home.statement.title")}
          </h2>
        </div>

        <p
          className={`max-w-[805px] ${sideBorderClass} md:border-[#31D1B0] text-[#5B5B5B] mx-auto leading-[32.5px] font-light text-justify whitespace-pre-line`}
        >
          {t("home.statement.content")}
        </p>
      </div>
      <Image
        src={"/images/statement-image.png"}
        alt="Nikan Statement"
        width={1236}
        height={452}
        className="mt-20 lg:mb-24 mb-10 object-cover lg:block hidden"
      />
      <Image
        src={"/images/mobileBanner.svg"}
        alt="Nikan Statement Mobile"
        fill
        className="mt-10 w-full mb-10 object-cover !relative block lg:hidden"
      />
    </div>
  );
};

export default NikanStatement;
