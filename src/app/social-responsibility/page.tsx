import { components } from "@/lib/api/v1";
import qs from "qs";
import { Content, Hero } from "./components";
const page = async () => {
  const formattedParams = qs.stringify({
    with_slider: true,
  });

  const data = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/blogs?${formattedParams}`,
    {
      cache: "no-cache",
    }
  ).then((res) => res.json());

  const datas: components["schemas"]["BlogResource"][] = data?.data;
  const slider: components["schemas"]["BlogResource"][] = data?.slider ?? [];

  const slicedSlider = slider.slice(0, 3);

  return (
    <div className="lg:max-w-[1107px] w-full mx-auto">
      {slicedSlider.length > 0 ? <Hero slider={slicedSlider} /> : <></>}

      <Content data={datas} />
    </div>
  );
};

export default page;
