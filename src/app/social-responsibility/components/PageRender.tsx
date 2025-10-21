"use client";

import { components } from "@/lib/api/v1";
import qs from "qs";
import { useEffect, useState } from "react";
import { Content, Hero } from "./";

const SocialResponsibilityPage = () => {
  const [data, setData] = useState<components["schemas"]["BlogResource"][]>([]);
  const [slider, setSlider] = useState<components["schemas"]["BlogResource"][]>(
    []
  );
  const [meta, setMeta] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);

      const formattedParams = qs.stringify({
        with_slider: true,
        filter: {
          type: "social_responsibility",
        },
        page: currentPage,
      });

      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/blogs?${formattedParams}`,
          {
            cache: "no-cache",
          }
        );

        const result = await response.json();

        if (currentPage === 1) {
          setData(result.data || []);
        } else {
          setData((prev) => [...prev, ...(result.data || [])]);
        }

        setSlider(result.slider || []);
        setMeta(result.meta || null);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [currentPage]);

  const slicedSlider = slider.slice(0, 3);
  const hasNextPage = meta?.current_page < meta?.last_page;

  return (
    <div className="lg:max-w-[1107px] w-full mx-auto">

      {slicedSlider.length > 0 ? <Hero slider={slicedSlider} /> : <></>}
      <Content
        data={data}
        hasNextPage={hasNextPage}
        handleLoadMore={() => setCurrentPage(currentPage + 1)}
      />
      {loading && currentPage > 1 && (
        <div className="flex justify-center my-8">
          <div className="animate-spin rounded-full h-10 w-10 border-t-2 border-b-2 border-gray-900"></div>
        </div>
      )}
    </div>
  );
};

export default SocialResponsibilityPage;
