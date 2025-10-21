import { components } from "@/lib/api/v1";
import {
  Blogs,
  Branches,
  BranchesAddresses,
  FAQ,
  Hero,
  Nikan365Intro,
  NikanStatement,
  SearchDoctors,
  VirtualSlider,
  WhyNikan,
} from "./_components";
import News from "./_components/news";
import { cookies } from "next/headers";
import { i18n } from "@/configs/i18n";
import { resolveLocale } from "@/utils/dictionary";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "بیمارستان نیکان /  مرجع خدمات درمانی تخصصی در تهران | Nikan Hospital",
  description: "پیشرو در سلامت و درمان کشور؛ دسترسی به متخصصین فوق حرفه‌ای، نوبت‌دهی آنلاین و مراقبت‌های ۲۴ ساعته؛ بفرمایید داخل...",
};
const Page = async () => {
  const cookieStore = await cookies();
  const locale = resolveLocale(cookieStore.get("lang")?.value);
  const headers = {
    "Accept-Language": locale ?? i18n.defaultLocale,
  };

  const data = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/home`, {
    cache: "no-cache",
    headers,
  }).then((res) => res.json());

  const homeResponse: components["schemas"]["HomeResource"] = data?.data;

  const mainSlider = homeResponse?.sliders?.find(
    (slide) => slide.key === "MAIN_SLIDER"
  );

  const nikan365Slider = homeResponse?.sliders?.find(
    (slide) => slide.key === "SECTION_TWO"
  );

  const whyNikanSlider = homeResponse?.sliders?.find(
    (slide) => slide.key === "SECTION_THREE"
  );

  const terms = homeResponse?.main_terms;

  const hospitals = homeResponse?.hospitals;

  const blogs = homeResponse?.blogs ?? [];
  const news = homeResponse?.news ?? [];

  return (
    <div className="">
      {mainSlider && <Hero data={mainSlider} />}
      {nikan365Slider && <Nikan365Intro data={nikan365Slider} />}
      <Branches hospitals={hospitals ?? []} />
      <VirtualSlider />
      <NikanStatement />
      {whyNikanSlider && <WhyNikan data={whyNikanSlider} />}
      {terms && <SearchDoctors terms={terms} />}
      <Blogs blogs={blogs} />
      <News news={news} />
      <FAQ />
      <BranchesAddresses />
    </div>
  );
};

export default Page;
