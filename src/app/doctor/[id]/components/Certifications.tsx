import React from "react";

const Certifications = () => {
  return (
    <div className="lg:px-0 px-5">
      <div className="lg:pt-6 pt-3.5 flex flex-col lg:max-w-max max-w-[350px] lg:mx-0 mx-auto">
        <span className="text-[15px] font-medium text-black">
          گواهینامه‌ها و افتخارات پزشک
        </span>
        <ul className="list-disc pr-5">
          <li className="text-[15px] font-extralight text-black">
            فوق تخصص بورد (دانشنامه) جراحی پلاستیک، ترمیمی و سوختگی
          </li>
          <li className="text-[15px] font-extralight text-black">
            تخصص جراحی عمومی
          </li>
          <li className="text-[15px] font-extralight text-black">
            دکترای حرفه‌ای پزشکی
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Certifications;
