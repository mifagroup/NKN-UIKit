import React from "react";

const Certifications = () => {
  return (
    <div className="pt-6 flex flex-col">
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
  );
};

export default Certifications;
