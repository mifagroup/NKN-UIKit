import {
  Blogs,
  Branches,
  BranchesAddresses,
  FAQ,
  Hero,
  Nikan365Intro,
  NikanStatement,
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

  const blogs = homeResponse?.blogs ?? [];

  return (
    <div className="">
      {mainSlider && <Hero data={mainSlider} />}
      {nikan365Slider && <Nikan365Intro data={nikan365Slider} />}
      <Branches hospitals={hospitals ?? []} />
      <NikanStatement />
      {whyNikanSlider && <WhyNikan data={whyNikanSlider} />}
      {terms && <SearchDoctors terms={terms} />}
      <Blogs blogs={blogs} />
      <FAQ />
      <BranchesAddresses />
    </div>
  );
};

export default Page;
