import { components } from "@/lib/api/v1";
import Image from "next/image";
import qs from "qs";
import { BlogsSlider, MagazineForm } from "./components";
import Link from "next/link";
import React from "react";

const page = async (props: { params: Promise<{ slug: string }> }) => {
  const params = await props.params;

  const data = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/blogs/${params.slug}`,
    {
      cache: "no-cache",
    }
  ).then((res) => res.json());

  const blog: components["schemas"]["BlogResource"] = data?.data;

  const formattedParams = qs.stringify({
    filter: {
      user_id: blog.user?.id,
      type: "social_responsibility",
    },
    sort: "created_at",
  });

  const blogs = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/blogs?${formattedParams}`,
    {
      cache: "no-cache",
    }
  ).then((res) => res.json());

  const blogsList: components["schemas"]["BlogResource"][] = blogs?.data ?? [];

  return (
      <div className="max-w-[1106px] container mt-[88px]">
          <div className="flex flex-col gap-y-[15px]">
              {/* Main Image */}
              <Image
                  src={blog?.main_image?.original_url ?? ""}
                  alt={blog?.title ?? ""}
                  width={1106}
                  height={489}
                  className="object-cover lg:!h-[489px] lg:!w-[1106px]"
              />

              {/* Content Wrapper */}
              <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center gap-y-4">

                  {/* Title + Subtitle */}
                  <div className="flex flex-col gap-y-1">
                        <span className="text-[25px] text-[#3F3F3F] font-bold">
                          {blog?.title}
                        </span>
                                        <span className="text-[20px] text-[#3F3F3F]">
                          {blog?.sub_title}
                        </span>
                  </div>

                  {/* Meta Info (Calendar + Clock) */}
                  <div className="flex flex-col xs:flex-row items-start lg:items-center gap-y-2 gap-x-7 lg:gap-x-3">

                      {/* Calendar */}
                      <div className="flex gap-x-2 items-center">
                          <Image
                              src={"/images/calendar-icon.png"}
                              alt="calendar"
                              width={21}
                              height={23}
                              className="h-[12px] w-[12px] lg:h-[23px] lg:w-[21px]"
                          />
                          <span className="font-extralight text-[11px] lg:text-[15px]">
                             {new Date(blog?.published_at ?? Date.now()).toLocaleDateString(
                                 "fa-IR",
                                 {
                                     day: "2-digit",
                                     month: "long",
                                     year: "numeric",
                                 }
                             )}
                          </span>
                      </div>
                      {blog?.duration && (
                          <div className="flex gap-x-2 items-center">
                              <Image
                                  src={"/images/clock-icon.png"}
                                  alt="clock"
                                  width={21}
                                  height={23}
                                  className="h-[12px] w-[12px] lg:h-[23px] lg:w-[21px]"
                              />
                              <span className="font-extralight text-[11px] lg:text-[15px]">
                                  {blog?.duration} دقیقه

                              </span>
                          </div>
                      )}

                  </div>
              </div>
          </div>

          <div className="h-[1px] bg-[#D9D9D9] mt-[32px] mb-[28px]"/>
          <div
              className="text-[18px] text-[#272727]"
              dangerouslySetInnerHTML={{__html: blog?.description ?? ""}}
          />
          {/* <div className="text-[18px] text-[#272727]">
        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده
        از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و
        سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای
        متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه
        درصد گذشته ...
      </div>
      <br />
      <div className="text-[20px] text-black font-light">
        متداول‌ترین نشانه‌های ماندگار کووید-۱۹ طول دوره بهبودی کووید-
        <br />
        ۱۹ بین چند هفته تا چند ماه در افراد مختلف با ویژگی‌های بدنی و در سنین
        گوناگون متفاوت است. با این وجود، برخی علائم و نشانه‌ها تا مدت زمانی به
        نسبت طولانی پس از بهبود یافتن مبتلایان به کووید-۱۹ در بدن آن‌ها باقی
        می‌ماند، موردی که میان افراد مسن و کسانی که بیماری‌های دیگری جز کووید-۱۹
        نیز دارند، بیش‌تر دیده می‌شود. از جمله این علائم و نشانه‌ها، می‌توان به
        موارد زیر اشاره کرد:
      </div>
      <ul className="list-disc pr-5 font-light">
        <li>تب</li>
        <li>خستگی</li>
        <li>سرگیجه</li>
        <li>سرفه</li>
        <li>درد در قفسه سینه، مفاصل، سر و دردهای عضلانی</li>
        <li>تنگی نفس</li>
        <li>از دست دادن قدرت بویایی و چشایی</li>
        <li>اختلال خواب و حافظه</li>
        <li>افسردگی و اضطراب</li>
      </ul>
      <div className="text-[24px] text-black font-bold mt-[30px]">
        تاثیر طولانی‌مدت کووید-۱۹ بر اندام‌های مختلف بدن
      </div>
      <div className="text-[20px] font-light">
        علائم ذکرشده در قسمت قبل، تنها نشانه‌ها و تاثیراتی نیستند که ویروس کرونا
        در بدن مبتلایان باقی می‌گذارد. همان‌طور که پیش‌تر نیز بدان اشاره شد،
        ویروس کرونا توانایی تاثیر گذاشتن بر اندام‌های متفاوتی از بدن، آسیب
        رساندن به آن‌ها و افزایش احتمال ابتلا به بیماری‌های دیگر را در آینده نیز
        دارد.
      </div>
      <div className="text-[20px] font-light">
        در درجه اول، ویروس کرونا به ریه افراد وارد شده و آن عضو از بدن را
        تحت‌تاثیر قرار می‌دهد، اما در طولانی‌مدت ممکن است به قلب و مغز نیز آسیب
        برساند.
      </div>
      <div className="text-[20px] font-light">
        بر اساس تحقیقات انجام‌شده و بررسی آزمایشات تصویربرداری که ماه‌ها پس از
        بهبود یافتن بعضی مبتلایان به کووید-۱۹ انجام شده است، آسیبی دائمی به عضله
        قلب آن‌ها وارد شده است. بنابراین، پزشکان و متخصصان بر این باور هستند که
        ویروس کرونا ممکن است خطر نارسایی قلبی یا سایر عوارض قلبی را در بدن افراد
        بالا ببرد.
      </div>
      <div className="text-[20px] font-light">
        عضو بعدی که از تاثیرات ویروس کرونا مصون نیست، مغز است. بر اساس تحقیقات و
        بررسی‌های انجام‌شده، این ویروس توانایی ایجاد سکته مغزی، تشنج و سندرم
        گلین حتی در افراد جوان را نیز دارد. علاوه‌بر این، خطر ابتلا به
        بیماری‌هایی مانند پارکینسون، آلزایمر و سندرم التهابی چند سیستم که در آن
        برخی اندام‌ها و بافت‌ها به شدت ملتهب می‌شوند نیز افزایش می‌یابد.
      </div>
      <div className="text-[20px] font-light">
        در بعضی موارد، کووید-۱۹ احتمال تجمع سلول‌های خونی و تشکیل لخته را بالا
        می‌برد که حملات قلبی و سکته را به دنبال خواهد داشت. در آخر، باید به
        وضعیت روحی و تاثیر طولانی‌مدت کووید-۱۹ و طی دوره درمان آن بر افراد
        گوناگون می‌گذارد، بپردازیم. افرادی که با علائم حاد کووید-۱۹ به بیمارستان
        مراجعه می‌کنند، به طور معمول در بخش مراقبت‌های ویژه بستری می‌شوند و تنفس
        آن‌ها وابسته به دستگاه است. احتمال ابتلای این افراد به سندرم استرس پس از
        حادثه، افسردگی و اضطراب بسیار بالا است.
      </div>
      <Image
        src={"/images/single-blog-1.png"}
        alt=""
        width={1106}
        height={390}
        className="mt-14 mb-10"
      />
      <div className="text-[24px] text-black font-bold">
        واکسن کرونا و عواقب آن
      </div>
      <div className="text-[20px] font-light">
        مدتی کوتاه پس از پیدایش و همه‌گیری کووید-۱۹، واکسن‌هایی برای مقابله با
        آن در سراسر جهان ابداع شد. با وجودی که سه واکسن فایزر، مدرنا و جانسون
        اند جانسون از بسیاری از تست‌ها موفق بیرون آمدند، این روزها واکسیناسیون
        سراسری با انواع گوناگون واکسن کرونا مانند آسترازنکا، اسپوتنیک، سینوفارم
        و برکت در تمامی کشورهای جهان در دست انجام است و نتایج چشمگیری را نیز به
        ارمغان آورده است.
      </div>
      <div className="text-[20px] font-light">
        با این وجود، عده‌ای نیز هستند که نسبت به عواقب تزریق واکسن کرونا نگران
        هستند. بر اساس تحقیقات انجام‌شده، عوارض جانبی تزریق واکسن کرونا در جوامع
        مختلف در آن حدی بالا و متداول نیست که پزشکان و متخصصان را نسبت به ادامه
        واکسیناسیون سراسری دچار تردید کند و همگی آن‌ها در رابطه با لزوم تزریق
        واکسن، اتفاق نظر دارند.
      </div>
      <div className="text-[20px] font-light">
        آن‌چه لازم است همگان در کنار فواید تزریق واکسن کرونا در خاطر داشته
        باشند، لزوم رعایت پروتکل‌های بهداشتی حتی پس از تزریق واکسن است تا شاهد
        بروز پیک جدیدی از کووید-۱۹ در جوامع مختلف نباشیم.
      </div>
      <div className="text-[20px] font-light">
        بیمارستان مجازی نیکان با تیمی مجرب آماده ارائه خدمات به شما عزیزان
        می‌باشد. برای دریافت خدمات پزشکی، پرستاری، چکاپ، آزمایشگاهی، فالو آپ،
        تصویر برداری، اجاره و فروش تجهیزات پزشکی، فیزیوتراپی و خدمات گردشگری
        سلامت و کسب اطلاعات بیشتر با شماره ۰۹۹۲۱۵۸۲۲۳۸ تماس بگیرید.
      </div> */}

          {blog?.gallery&& (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-10">
                  {blog.gallery.map((item, index) => (
                      <div key={index} className="w-full">
                          <Image
                              src={item?.original_url ?? ""}
                              alt={`blog-gallery-${index}`}
                              width={500}
                              height={500}
                              className="w-full h-full object-cover"
                          />
                      </div>
                  ))}
              </div>
          )}
          <div className="border-t-[#F56F95] border-t-[6px] bg-[#F1F1F1] lg:px-6 px-[19px] py-[15px] lg:py-0 relative mt-20 ">
              <div className="flex flex-col lg:flex-row lg:items-center lg:gap-x-6">
                  <Image
                      src={"/images/magazine.png"}
                      alt="magazine"
                      width={178}
                      height={201}
                      className="w-[138px] h-[156px] lg:w-[178px] lg:h-[201px] -top-16 -left-0 absolute lg:static lg:mt-[-45px]"
                  />
                  <div className="flex flex-col gap-y-6 mt-20 sm:mt-0">
                    <span
                        className="lg:text-[14px] text-[13px] font-black text-[#636363] lg:tracking-tight tracking-tighter">
                      عضویت در خبرنامه مجله ی علمی نیکان
                    </span>
                      <div className="flex flex-col gap-y-3">
                          <div className="flex flex-col ">
                              <span className="text-[14px] font-light text-[#7c7c7c]">
                              هرهفته دوشنبه ها صبح خبرنامه تخصصی نیکان را در ایمیل خود بخوانید
                            </span>
                          </div>
                          <MagazineForm/>
                      </div>
                  </div>
              </div>
          </div>

          <div
              className="border-t-primary-main border-t-[6px] bg-[#F1F1F1] lg:px-6 px-[19px] pb-[15px] pt-6 relative mt-32 lg:flex justify-between">

              <div className="flex flex-col gap-y-8">
                  {/* <div className="flex flex-col  ">

                      <span className="leading-5 text-[#7c7c7c] text-[14px] font-light">
                        سامانه جامع خدمات
                          <br/>
                        آنلاین بیمارستان های نیکان
                      </span>
                  </div>*/}
                  <div className="flex flex-col lg:gap-y-3 lg:pr-[126px] mt-20 lg:mt-0">
                      <span className="text-[14px] font-bold text-[#aaaaaa]">
                          انجام کلیه خدمات درمانی نیکان به صورت آنلاین
                      </span>
                      <Link
                          href={""}
                          className="bg-primary-main rounded-[7px] w-full font-light text-white text-[14px] h-[33px] flex items-center justify-center"
                      >
                          ثبت نام در نیکان 365
                      </Link>
                  </div>
              </div>
              <Image
                  src={"/images/nikan365-online.png"}
                  alt="nikan365-online"
                  width={177}
                  height={131}
                  className="absolute -top-5 left-3.5 lg:static lg:mt-[-125px]  lg:h-[237px] lg:w-[320px] lg:object-cover"
              />
          </div>
          <BlogsSlider blogs={blogsList}/>
      </div>
  );
};

export default page;
