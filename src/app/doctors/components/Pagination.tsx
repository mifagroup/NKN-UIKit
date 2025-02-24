"use client";
import React, { useEffect, useState } from "react";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { useRouter, useSearchParams } from "next/navigation";
import qs from "qs";
import { components } from "@/lib/api/v1";

const Pagination = ({
  meta,
}: {
  meta: components["schemas"]["MetaPaginationResource"];
}) => {
  const [currentPage, setCurrentPage] = useState<string>("1");

  const router = useRouter();

  const searchParams = useSearchParams();

  const prevSearchParams = Object.fromEntries(
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    [...searchParams.entries()].filter(([key, value]) => value)
  );

  useEffect(() => {
    const updatedParams = { ...prevSearchParams };
    if (updatedParams.hospital) {
      delete updatedParams.hospital;
    }

    if (currentPage) {
      updatedParams.page = currentPage;
    }

    const newUrl = `?${qs.stringify(updatedParams)}`;
    router.push(newUrl);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentPage]);

  useEffect(() => {
    if (prevSearchParams.page) {
      setCurrentPage(prevSearchParams.page);
    }
  }, []);

  const handlePrevPage = () => {
    if (currentPage > "1") {
      setCurrentPage((parseInt(currentPage) - 1).toString());
    }
  };

  const handleNextPage = () => {
    setCurrentPage((parseInt(currentPage) + 1).toString());
  };

  const handlePageClick = (page: number) => {
    setCurrentPage(page.toString());
  };

  const renderPageButtons = () => {
    const totalPages = meta.last_page;
    const currentPageNumber = parseInt(currentPage);
    const maxButtons = 5;
    let startPage = Math.max(1, currentPageNumber - Math.floor(maxButtons / 2));
    let endPage = startPage + maxButtons - 1;

    if (endPage > totalPages) {
      endPage = totalPages;
      startPage = Math.max(1, endPage - maxButtons + 1);
    }

    const pageButtons = [];
    for (let i = startPage; i <= endPage; i++) {
      pageButtons.push(
        <button
          key={i}
          onClick={() => handlePageClick(i)}
          className={`flex items-center justify-center h-[40px] w-[40px] rounded-[6px] ${
            currentPageNumber === i ? "bg-[#31D1B0] text-black" : "text-black"
          }`}
        >
          {i}
        </button>
      );
    }
    return pageButtons;
  };

  return (
    <div className="flex justify-center items-center mt-5 gap-x-2">
      <button
        onClick={handlePrevPage}
        disabled={currentPage === "1"}
        className=""
      >
        <ArrowForwardIosIcon
          className={`${
            currentPage === "1" ? "opacity-50" : ""
          } text-[#DFDFDF]`}
        />
      </button>
      <div className="flex gap-x-2">{renderPageButtons()}</div>
      <button
        onClick={handleNextPage}
        disabled={+currentPage === meta.last_page}
      >
        <ArrowBackIosNewIcon
          className={`${
            +currentPage === meta.last_page ? "opacity-50" : ""
          } text-[#DFDFDF]`}
        />
      </button>
    </div>
  );
};

export default Pagination;
