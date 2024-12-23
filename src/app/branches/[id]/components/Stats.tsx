"use client";
import React from "react";
import CountUp from "react-countup";

const statsData = [
  {
    id: 1,
    title: "تخت مراقبت و بستری",
    description: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ",
    count: 125,
  },
  {
    id: 2,
    title: "جراحی موفق تاکنون",
    description: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ",
    count: 1285000,
  },
  {
    id: 3,
    title: "ساعت پرستاری",
    description: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ",
    count: 786,
  },
];

const Stats = () => {
  return (
    <div className="pt-[200px] max-w-[834px] w-[834px] mx-auto">
      <div className="grid grid-cols-3">
        {statsData.map((stat, index) => (
          <div
            key={stat.id}
            className={`flex flex-col items-center gap-y-2 ${
              index !== statsData.length - 1 && "border-l"
            } border-l-primary-main py-6`}
          >
            <span className="text-[48px] font-black text-[#5b5b5b]">
              <CountUp duration={4} enableScrollSpy end={stat.count} />+
            </span>
            <span className="text-[20px] text-[#5b5b5b] font-black">
              {stat.title}
            </span>
            <span className="text-[15px] font-light text-[#7d7d7d] text-center max-w-[200px]">
              {stat.description}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Stats;
