"use client";
import { components } from "@/lib/api/v1";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
const Blogs = ({
  blogs,
}: {
  blogs: components["schemas"]["BlogResource"][];
}) => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const totalPages = Math.ceil(blogs.length / itemsPerPage);

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handlePageClick = (page: number) => {
    setCurrentPage(page);
  };

  const currentBlogs = blogs.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div className="flex flex-col lg:gap-y-8 gap-y-5 lg:order-2 order-1 flex-grow">
      {currentBlogs.map((blog) => (
        <div
          key={blog.id}
          className="flex lg:flex-row flex-col items-center gap-x-7"
        >
          <Image
              unoptimized
            src={blog?.main_image?.original_url ?? ""}
            alt={blog.title ?? ""}
            width={214}
            height={160}
            className="!h-[160px] !w-[214px] rounded-[12px] object-cover"
            quality={100}
          />
          <div className="flex flex-col lg:gap-y-[25px] gap-y-5 lg:pt-0 pt-5 flex-grow">
            <div className="flex flex-col">
              <span className="lg:text-[20px] lg:text-right text-center text-[18px] text-[#3F3F3F] font-bold">
                {blog.title}
              </span>
              <span
                className="text-[18px] text-[#272727] font-extralight max-w-[515px]"
                title={blog.sub_title}
              >
                {blog.sub_title?.substring(0, 100)}...
              </span>
            </div>
            <div
              className={`flex items-center justify-between border-b pb-5 border-b-[#BABABA]`}
            >
              <div className="flex items-center gap-x-3">
                <div className="flex items-center gap-x-2 lg:text-[15px] text-[13px] font-light text-gray-400">
                  <Image
                    src={"/images/calendar-icon.png"}
                    alt="cal"
                    width={21}
                    height={23}
                  />
                  {new Date(
                    blog?.published_at ?? Date.now()
                  ).toLocaleDateString("fa-IR", {
                    day: "2-digit",
                    month: "long",
                    year: "numeric",
                  })}
                </div>
                <div className="flex items-center gap-x-2 lg:text-[15px] text-[13px] font-light text-gray-400">
                  <Image
                    src={"/images/clock-icon.png"}
                    alt="clock"
                    width={21}
                    height={23}
                  />
                  {blog.duration} دقیقه
                </div>
              </div>
              <Link
                href={`/blogs/${blog.slug}`}
                className="text-[18px] font-thin text-black"
              >
                مطالعه بیشتر
              </Link>
            </div>
          </div>
        </div>
      ))}
      <div className="flex justify-end items-center mt-5 gap-x-2">
        <button
          onClick={handlePrevPage}
          disabled={currentPage === 1}
          className=""
        >
          <ArrowForwardIosIcon
            className={`${
              currentPage === 1 ? "opacity-50" : ""
            } text-[#DFDFDF]`}
          />
        </button>
        <div className="flex gap-x-2">
          {Array.from({ length: totalPages }, (_, index) => (
            <button
              key={index + 1}
              onClick={() => handlePageClick(index + 1)}
              className={`flex items-center justify-center h-[40px] w-[40px] rounded-[6px] ${
                currentPage === index + 1
                  ? "bg-[#31D1B0] text-black"
                  : "text-black"
              }`}
            >
              {index + 1}
            </button>
          ))}
        </div>
        <button onClick={handleNextPage} disabled={currentPage === totalPages}>
          <ArrowBackIosNewIcon
            className={`${
              currentPage === totalPages ? "opacity-50" : ""
            } text-[#DFDFDF]`}
          />
        </button>
      </div>
    </div>
  );
};

export default Blogs;
