import { components } from "@/lib/api/v1";
import qs from "qs";
import { BlogsList, TopBlog } from "./components";
const page = async () => {
  const formattedParams = qs.stringify({
    with_slider: true,
    filter: {
      type: "news",
    },
  });

  const data = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/blogs?${formattedParams}`,
    {
      cache: "no-cache",
    }
  ).then((res) => res.json());

  const blogs: components["schemas"]["BlogResource"][] = data?.data;

  const slider: components["schemas"]["BlogResource"][] = data?.slider ?? [];
 // console.log(data, "data");
  return (
    <div className="max-w-[1150px] container lg:pt-[87px] pt-10 lg:pb-[134px] pb-[60px]">
      <TopBlog slider={slider} />
      <BlogsList blogs={blogs} />
    </div>
  );
};

export default page;
