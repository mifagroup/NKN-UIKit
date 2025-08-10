import Image from "next/image";
import React from "react";

const Nikan = () => {
  const nikanGates = [
    {
      title: "پشتیبانی ۲۴/۷",
      description: "تیم پشتیبانی حرفه‌ای، آماده پاسخگویی به شما در هر ساعت از شبانه‌روز",
      image: "/images/nikan365-ipd-01.png",
    },
    {
      title: "امنیت سطح بالا",
      description: "اطلاعات پزشکی شما با رمزگذاری پیشرفته محافظت می‌شود و فقط توسط خودتان یا با رضایت شما قابل مشاهده است.",
      image: "/images/nikan365-ipd-02.png",
    },
    {
      title: "یکپارچگی با بیمارستان نیکان",
      description: "تمامی خدمات با سیستم HIS بیمارستان‌های نیکان هماهنگ است و نیاز به ورود مجدد اطلاعات نیست.",
      image: "/images/nikan365-ipd-03.png",
    },
    {
      title: "قابلیت ارجاع تخصصی بین پزشکان",
      description: "پزشک شما می‌تواند مستقیماً شما را به همکار متخصص خود ارجاع دهد، با پرونده و سوابق کامل.",
      image: "/images/nikan365-ipd-04.png",
    },
  ];
  return (
    <div className="mt-[100px] lg:block hidden">
      <div className="flex justify-center items-center text-[#424242] text-[32px] font-bold">
        ویژگی‌های متمایز نیکان ۳۶۵
      </div>
      <div className="md:grid mt-20 md:grid-cols-2 gap-x-4 gap-y-10">
        <Image
          src="/images/nikanGates.jpg"
          alt="nikan"
          className="w-full h-full object-cover !relative"
          layout="fill"
        />
        <div className="flex flex-col gap-4">
            {
                nikanGates.map((gate, index) => (
                    <div className="flex gap-4 items-center" key={index}>
                        <Image src={gate.image} alt={gate.title} width={130} height={130} />
                        <div className="flex flex-col gap-2">
                            <h3 className="text-[#161616] text-[24px] font-semibold">{gate.title}</h3>
                            <p className="text-[#161616] text-[13px] font-light">{gate.description}</p>
                        </div>
                    </div>
                ))
            }
        </div>
      </div>
    </div>
  );
};

export default Nikan;
