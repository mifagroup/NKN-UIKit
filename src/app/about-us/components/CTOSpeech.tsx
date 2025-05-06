import Image from "next/image";
import React from "react";

const CTOSpeech = () => {
  return (
    <div className="max-w-[1086px] container">
      <div className="lg:pt-[67px] flex lg:flex-row flex-col justify-between lg:gap-x-[70px] items-center">
        <div className="flex flex-col gap-y-[15px] lg:pl-[45px] lg:pr-[57px] px-5 lg:order-1 order-2 lg:pt-0 pt-[30px]">
          <span className="font-black lg:text-[36px] text-[30px] text-[#626262]">
            سخن مدیر عامل
          </span>
          <span className="leading-[27px] lg:text-[15px] text-[13px] text-black font-light text-justify lg:max-w-fit max-w-[370px]">
            اعتقاد دارم که مهربانی ،احساسی است که از نگاه، گفتار و رفتار انسان ساطع می شود. ما در بیمارستان نیکان، هدفمان آن است که پرسنل بیمارستان نیکان، مهرآفرینی را درک و باور نمایند. اگر باور کنیم که “باید با همه چیز و همه کس مهربان بود  و بی دریغ مهر ورزید” به بیماران عشق می ورزیم و آلام ایشان را صبورانه تسکین می دهیم. در درمان هایمان بهترین و کم عارضه ترین روشهای درمانی را انتخاب خواهیم کرد. با همکاران خود مهربان خواهیم بود و همدیگر را همچون اعضا یک خانواده صمیمانه دوست خواهیم داشت .در این صورت است که بیمارستان به اهداف خود خواهد. 
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
          className="lg:w-[504px] w-[398px] lg:h-[592px] h-[466px] lg:border-l-[9px] border-primary-main lg:order-2 order-1"
        />
      </div>
    </div>
  );
};

export default CTOSpeech;
