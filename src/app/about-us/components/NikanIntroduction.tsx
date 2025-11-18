import Image from "next/image";

const NikanIntroduction = () => {
  return (
    <div className="max-w-[1086px] container lg:pt-[50px] lg:mb-0 mb-6">
      <div className="flex lg:flex-row flex-col lg:gap-x-[70px] justify-between items-center gap-y-[20px]">
        <div className="flex flex-col lg:gap-y-[85px] gap-y-4 lg:pr-[60px] lg:pl-[42px] px-5 lg:order-1 order-2">
          <div className="flex flex-col gap-y-3">
            <span className="lg:text-[36px] text-[30px] font-black !text-[#626262]">
              گروه درمانی نیکان
            </span>
            <span className="max-w-[413px] font-light lg:text-[15px] text-[12px] leading-[27px] text-justify">
             نیکان در کلام و صفات جمع خوبی‌هاست و &#34;خوب بودن&#34; روح نیکان است.
تجربه ما در مجموعه بیمارستا‌ن‌های نیکان همواره به ما این جمله را یادآور می‌شود که &#34;زندگی هنوز زیباست و زیبایی انتها ندارد&#34; و تلاش همیشگی و باور قلبی ما اشاعه همین زیبایی‌هاست. ما در مجموعه نیکان با هم عهد بسته‌ایم که با تعهد و تخصصِ آمیتخه با عشق میزبان خوبی برای مهمانان عزیزمان باشیم.
            </span>
          </div>
     {/*     <a
            className="!text-[#626262] !p-0 lg:!text-[15px] flex items-center justify-center !text-[14px] !font-medium !bg-transparent !border !border-primary-main !rounded-[7px] !w-[258px] !h-[35px] !self-end"
            href="/images/B_Nikan_Hospital_Catalogue.pdf"
            download
          >
            دانلود کاتالوگ معرفی گروه درمانی نیکان
          </a>*/}
        </div>
        <Image
          src={"/images/aboutNikan.svg"}
          alt="about-us-hero"
          width={502}
          height={592}
          quality={100}
          className="lg:order-2 order-1 lg:w-[502px] lg:h-[592px] w-full h-[467px] object-contain"
        />
      </div>
    </div>
  );
};

export default NikanIntroduction;
