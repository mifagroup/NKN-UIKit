import { Locale } from "@/configs/i18n";
import {
  Blogs,
  Branches,
  BranchesAddresses,
  Hero,
  Nikan365Intro,
  SearchDoctors,
  WhyNikan,
} from "./_components";
import { getDictionary } from "@/utils/getServerDictionary";
import { components } from "@/lib/api/v1";

interface PageProps {
  params: Promise<{
    lang: Locale;
  }>;
}

const Page = async (props: PageProps) => {
  const params = await props.params;
  const dictionary = await getDictionary(params.lang);

  const data = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/home`, {
    cache: "no-cache",
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

  return (
    <div className="">
      {mainSlider && <Hero data={mainSlider} />}
      {nikan365Slider && <Nikan365Intro data={nikan365Slider} />}
      <Branches />
      {whyNikanSlider && <WhyNikan data={whyNikanSlider} />}
      {terms && <SearchDoctors dictionary={dictionary} terms={terms} />}
      <Blogs />
      <BranchesAddresses dictionary={dictionary} />
    </div>
  );
};

export default Page;
