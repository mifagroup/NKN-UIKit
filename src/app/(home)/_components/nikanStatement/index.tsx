import Image from "next/image";
import Link from "next/link";
import React from "react";

const NikanStatement = () => {
  return (
    <div className="max-w-[1236px] container mt-[35px] lg:mb-[70px] mb-5">
      <div className="flex flex-col gap-y-[15px] lg:px-0 px-5">
        <h2 className="text-[25px] font-bold text-[#5b5b5b] text-center">
          بیانیه خانواده درمانی نیکان
        </h2>
        <p className="max-w-[805px] mx-auto leading-[32.5px] font-light lg:text-center text-justify">
          نیکان در کلام و صفات جمع خوبی‌هاست و &quot;خوب بودن&quot; روح نیکان
          است.
          <br /> تجربه ما در مجموعه بیمارستا‌ن‌های نیکان همواره به ما این جمله
          را یادآور می‌شود که &quot;زندگی هنوز زیباست و زیبایی انتها ندارد&quot;
          و تلاش همیشگی و باور قلبی ما اشاعه همین زیبایی‌هاست. ما در مجموعه
          نیکان با هم عهد بسته‌ایم که با تعهد و تخصصِ آمیخته با عشق میزبان خوبی
          برای مهمانان عزیزمان باشیم.بیمارستان نیکان در راستای التیام آلام
          بیماران، خدمات بهداشتی درمانی ایمن و اثر بخش را در حوزه‌های تخصصی و
          فوق تخصصی ارائه می‌دهد. این خدمات، با کیفیت، در حداقل زمان و فارغ از
          سن، جنس، نژاد، رنگ، مذهب و یا موقعیت اجتماعی افراد ارائه می‌شود.
        </p>
      </div>
      <Image
        src={"/images/statement-image.png"}
        alt=""
        width={1236}
        height={452}
        className="mt-10 lg:mb-24 mb-10 object-cover"
      />
      <div className="max-w-[1036px] mx-auto grid lg:grid-cols-6 sm:grid-cols-3 grid-cols-2 lg:gap-8 gap-4 lg:px-0 px-5">
        <Link
          href={"https://pa.nikan365.ir"}
          className="lg:pt-[27px] pt-4 px-2 lg:pb-10 pb-5 bg-[#f4f4f4] rounded-[16px] flex flex-col lg:gap-y-[27px] gap-y-4 justify-center items-center"
        >
          <Image src={"/images/calendar.png"} alt="" width={88} height={100} />
          <span className="text-base font-bold text-[#616161] text-center">
            برنامه کلینیک‌های تخصصی
          </span>
        </Link>
        <Link
          href={"https://pa.nikan365.ir"}
          className="lg:pt-[27px] pt-4 px-2 lg:pb-10 pb-5 bg-[#f4f4f4] rounded-[16px] flex flex-col lg:gap-y-[27px] gap-y-4 justify-center items-center"
        >
          <Image
            src={"/images/appointment.png"}
            alt=""
            width={88}
            height={100}
          />
          <span className="text-base font-bold text-[#616161] text-center">
            نوبت دهی
          </span>
        </Link>
        <Link
          href={"https://pa.nikan365.ir"}
          className="lg:pt-[27px] pt-4 px-2 lg:pb-10 pb-5 bg-[#f4f4f4] rounded-[16px] flex flex-col lg:gap-y-[27px] gap-y-4 justify-center items-center"
        >
          <Image src={"/images/checkup.png"} alt="" width={88} height={100} />
          <span className="text-base font-bold text-[#616161] text-center">
            پایش سلامت (چکاپ)
          </span>
        </Link>
        <Link
          href={"https://pa.nikan365.ir"}
          className="lg:pt-[27px] pt-4 px-2 lg:pb-10 pb-5 bg-[#f4f4f4] rounded-[16px] flex flex-col lg:gap-y-[27px] gap-y-4 justify-center items-center"
        >
          <Image
            src={"/images/answer-online.png"}
            alt=""
            width={88}
            height={100}
          />
          <span className="text-base font-bold text-[#616161] text-center">
            جواب دهی انلاین
          </span>
        </Link>
        <Link
          href={"https://pa.nikan365.ir"}
          className="lg:pt-[27px] pt-4 px-2 lg:pb-10 pb-5 bg-[#f4f4f4] rounded-[16px] flex flex-col lg:gap-y-[27px] gap-y-4 justify-center items-center"
        >
          <Image
            src={"/images/pishpaziresh.png"}
            alt=""
            width={88}
            height={82}
          />
          <span className="text-base font-bold text-[#616161] text-center">
            سامانه پیش پذیرش
          </span>
        </Link>
        <Link
          href={"https://pa.nikan365.ir"}
          className="lg:pt-[27px] pt-4 px-2 lg:pb-10 pb-5 bg-[#f4f4f4] rounded-[16px] flex flex-col lg:gap-y-[27px] gap-y-4 justify-center items-center"
        >
          <Image src={"/images/homecare.png"} alt="" width={88} height={100} />
          <span className="text-base font-bold text-[#616161] text-center">
            خدمات درمانی در منزل
          </span>
        </Link>
      </div>
    </div>
  );
};

export default NikanStatement;
