import Image from "next/image";
import React from "react";

const Reason = () => {
  const reasons = [
    {
      title: "صرفه‌جویی در زمان و هزینه",
      description: "دسترسی به خدمات پزشکی بدون نیاز به حضور فیزیکی",
      image: "/images/icon_1.png",
    },
    {
      title: "دقت و سرعت بالا",
      description: "استفاده از هوش مصنوعی برای تحلیل دقیق‌تر و سریع‌تر نتایج",
      image: "/images/icon_2.png",
    },
    {
      title: "دسترسی آسان",
      description: "امکان استفاده از خدمات در هر زمان و مکان",
      image: "/images/icon_3.png",
    },
    {
      title: "پشتیبانی ۲۴/۷",
      description: " دسترسی به تیم پشتیبانی در تمام ساعات شبانه‌روز",
      image: "/images/icon_4.png",
    },
  ];
  return (
    <div className="container lg:block hidden max-w-[1004px] mt-[100px]">
      <div className="grid grid-cols-2 gap-x-4 gap-y-10">
        {reasons.map((reason, index: number) => (
          <div
            className="flex gap-4 relative bg-[#F5F5F5] rounded-[10px] pt-4 pb-8 pr-[110px]"
            key={index}
          >
            <Image
              className="-mt-2 absolute -top-8 -right-5"
              src={reason.image}
              alt={reason.title}
              width={140}
              height={140}
            />
            <div className="flex flex-col ">
              <p className="text-[#3F3F3F] text-[13px] font-semibold">{reason.title}</p>
              <p className="text-[#3F3F3F] text-[13px] font-light">{reason.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Reason;
