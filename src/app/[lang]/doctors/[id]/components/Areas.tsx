import React from "react";

const Areas = () => {
  return (
    <div className="lg:px-0 px-5">
      <div className="pt-4 flex flex-col lg:max-w-max max-w-[350px] lg:mx-0 mx-auto">
        <span className="text-[15px] font-medium text-black">
          حوزه‌های فعالیت‌ دکتر شفائی
        </span>
        <ul className="list-disc pr-5">
          <li className="text-[15px] font-extralight text-black">جراحی بینی</li>
          <li className="text-[15px] font-extralight text-black">
            جراحی بینی ترمیمی
          </li>
          <li className="text-[15px] font-extralight text-black">جراحی پلک</li>
          <li className="text-[15px] font-extralight text-black">جراحی گوش</li>
          <li className="text-[15px] font-extralight text-black">
            لیفت پیشانی و ابرو
          </li>
          <li className="text-[15px] font-extralight text-black">لیفت گردن</li>
          <li className="text-[15px] font-extralight text-black">لیفت صورت</li>
        </ul>
      </div>
    </div>
  );
};

export default Areas;
