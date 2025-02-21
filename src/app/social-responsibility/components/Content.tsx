import Image from "next/image";
import React from "react";

const Content = () => {
  return (
    <>
      {[...Array(3)].map((_, index) => (
        <div
          className={`lg:mt-16 flex flex-col lg:gap-y-7 gap-y-3 pb-[34px] ${
            index !== 2 && "lg:border-b border-[#ACACAC]"
          }`}
          key={index}
        >
          <Image
            src={`/images/social-content-${index + 1}.png`}
            alt=""
            width={1103}
            height={310}
          />
          <div className="flex justify-between items-center lg:px-0 px-4">
            <div className="flex flex-col ggap-y-2">
              <span className="text-xl font-semibold">
                نیکان و مسئولیت اجتماعی
              </span>
              <span className="text-sm font-light">
                محتوای مورد نیاز برای ساب تایتل محتوای مورد نیاز برای ساب تایتل
              </span>
            </div>
            <div className="items-center gap-x-2 lg:flex hidden">
              <Image
                src={"/images/share-icon.png"}
                alt=""
                width={20}
                height={18}
              />
              <span className="text-xl font-semibold">گزارش کامل رویداد</span>
            </div>
          </div>
          <p className="text-sm font-light leading-[24px] lg:px-0 px-4">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
            استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در
            ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و
            کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی
            در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را
            می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی
            الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. در این
            صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها و
            شرایط سخت تایپ به پایان رسد وزمان مورد نیاز شامل حروفچینی دستاوردهای
            اصلی و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد
            استفاده قرار گیرد.
          </p>
          <div className="self-end lg:px-0 px-4 flex items-center gap-x-2.5 lg:hidden">
            <Image
              src={"/images/share-icon.png"}
              alt=""
              width={20}
              height={18}
            />
            <span className="text-sm font-semibold bg-[#F0F0F0] rounded-md p-2">
              گزارش کامل رویداد
            </span>
          </div>
        </div>
      ))}
      <div className="flex justify-center mt-9 mb-16 lg:mx-0 mx-4">
        <button className="text-sm text-[#696969] bg-[#f2f2f2] sm:w-[360px] w-full rounded-[11px] h-[52px]">
          موارد بیشتر
        </button>
      </div>
    </>
  );
};

export default Content;
