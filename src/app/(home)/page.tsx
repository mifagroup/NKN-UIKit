import {
  Blogs,
  Branches,
  BranchesAddresses,
  Hero,
  Nikan365Intro,
  SearchDoctors,
  WhyNikan,
} from "./_components";
import { components } from "@/lib/api/v1";

const Page = async () => {
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

  const hospitals = homeResponse?.hospitals;

  return (
    <div className="">
      {mainSlider && <Hero data={mainSlider} />}
      {nikan365Slider && <Nikan365Intro data={nikan365Slider} />}
      <Branches hospitals={hospitals} />
      {whyNikanSlider && <WhyNikan data={whyNikanSlider} />}
      {terms && <SearchDoctors terms={terms} />}
      <Blogs />
      <BranchesAddresses hospitals={hospitals} />
    </div>
  );
};

export default Page;
