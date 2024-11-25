import Image from "next/image";
import React from "react";

const CTOSpeech = () => {
  return (
    <div className="max-w-[1086px] container">
      <div className="pt-[67px] flex justify-between gap-x-[70px] items-center">
        <div className="flex flex-col gap-y-[15px] pl-[45px] pr-[57px]">
          <span className="font-black text-[36px] text-[#626262]">
            سخن مدیر عامل
          </span>
          <span className="leading-[27px] text-[15px] text-black font-light text-justify">
            بی گمان برخورداری از سلامتی، آرزوی مشترک تمامی انسانها است ،به همین
            دلیل روزهای بیماری از سخت ترین و تلخ ترین خاطرات هر شخصی است، به
            خصوص اگر این روزها در بیمارستان و دور از خانواده سپری گردد. و ما تیم
            پزشکی ،یاران این روزگاران سخت و تلخ بیماران در بیمارستان هستیم. 
          </span>
          <Image
            src={"/images/signiture.png"}
            alt="signiture"
            width={341}
            height={176}
            className="mr-auto"
          />
        </div>
        <Image
          src={"/images/CTO.png"}
          alt="cto"
          width={504}
          height={592}
          className="w-[504px] h-[592px] border-l-[9px] border-primary-main"
        />
      </div>
    </div>
  );
};

export default CTOSpeech;
