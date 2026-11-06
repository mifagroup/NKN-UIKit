"use client";

import { components } from "@/lib/api/v1";
import qs from "qs";
import { useEffect, useState } from "react";
import {
  Content,
  EmptyState,
  ErrorState,
  Hero,
  LoadingState,
  LoadMoreError,
  PageTitle,
} from "./";
import { env } from "@/configs/env";

// Give up on a stalled API instead of showing the skeleton forever.
const REQUEST_TIMEOUT_MS = 15000;

const SocialResponsibilityPage = () => {
  const [data, setData] = useState<components["schemas"]["BlogResource"][]>([]);
  const [slider, setSlider] = useState<components["schemas"]["BlogResource"][]>(
    []
  );
  const [meta, setMeta] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [retryCount, setRetryCount] = useState(0);

  useEffect(() => {
    let cancelled = false;
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), REQUEST_TIMEOUT_MS);

    const fetchData = async () => {
      setLoading(true);
      setError(false);

      const formattedParams = qs.stringify({
        with_slider: true,
        filter: {
          type: "social_responsibility",
          published_at: true,
        },
        page: currentPage,
      });

      try {
        const response = await fetch(
          `${env.API_URL}/blogs?${formattedParams}`,
          {
            cache: "no-cache",
            signal: controller.signal,
          }
        );

        if (!response.ok) {
          throw new Error(`Request failed with status ${response.status}`);
        }

        const result = await response.json();
        if (cancelled) return;

        if (currentPage === 1) {
          setData(result.data || []);
        } else {
          setData((prev) => [...prev, ...(result.data || [])]);
        }

        setSlider(result.slider || []);
        setMeta(result.meta || null);
      } catch {
        // A cleanup abort (unmount or a newer request) is not a failure.
        if (!cancelled) setError(true);
      } finally {
        clearTimeout(timeout);
        if (!cancelled) setLoading(false);
      }
    };

    fetchData();

    return () => {
      cancelled = true;
      clearTimeout(timeout);
      controller.abort();
    };
  }, [currentPage, retryCount]);

  const retry = () => setRetryCount((count) => count + 1);

  const slicedSlider = slider.slice(0, 3);
  const hasNextPage = meta?.current_page < meta?.last_page;

  // Nothing loaded yet: keep the page's height with a placeholder.
  if (data.length === 0) {
    return (
      <div className="lg:max-w-[1107px] w-full mx-auto">
        {loading ? (
          <LoadingState />
        ) : error ? (
          <ErrorState onRetry={retry} />
        ) : (
          <EmptyState />
        )}
      </div>
    );
  }

  return (
    <div className="lg:max-w-[1107px] w-full mx-auto">
      {slicedSlider.length > 0 ? (
        <Hero slider={slicedSlider} />
      ) : (
        <div className="lg:mt-[57px]">
          <PageTitle />
        </div>
      )}
      <Content
        data={data}
        hasNextPage={hasNextPage && !loading && !error}
        handleLoadMore={() => setCurrentPage(currentPage + 1)}
      />
      {loading && (
        <div className="flex justify-center my-8">
          <div className="animate-spin rounded-full h-10 w-10 border-t-2 border-b-2 border-gray-900"></div>
        </div>
      )}
      {error && <LoadMoreError onRetry={retry} />}
    </div>
  );
};

export default SocialResponsibilityPage;
