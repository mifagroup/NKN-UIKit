"use client";
import { components } from "@/lib/api/v1";
import { Button, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

interface SearchResult {
  id: number;
  name: string;
  type: string;
  url: string;
}

const SearchDoctors = ({
  terms,
}: {
  terms: components["schemas"]["TermResource"][];
}) => {
  const [search, setSearch] = useState("");
  const [searchResults, setSearchResults] = useState<SearchResult[]>([]);
  const [isSearching, setIsSearching] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (search.trim().length > 0) {
        setIsSearching(true);
        fetch(
          `${
            process.env.NEXT_PUBLIC_API_URL
          }/search?search=${encodeURIComponent(search)}`
        )
          .then((response) => response.json())
          .then((data) => {
            setSearchResults(data.results || []);
            setIsSearching(false);
          })
          .catch((error) => {
            console.error("Error fetching search results:", error);
            setIsSearching(false);
          });
      } else {
        setSearchResults([]);
      }
    }, 200);

    return () => clearTimeout(timer);
  }, [search]);

  return (
    <div className="bg-secondary-50 md:max-h-[416px] max-h-[333px]  lg:pt-0 pt-[30px] lg:px-0 px-5">
      <div className="relative flex lg:flex-row flex-col justify-between container max-w-[1108px] lg:items-start items-end">
        <div className="lg:max-w-[790px] max-w-full flex flex-col gap-y-[30px] flex-1 lg:mt-[-100px] lg:w-auto w-full">
          <Typography className="!text-grey-800 !text-[20px] !font-extrabold lg:!block !hidden">
            جستجوی خدمات بر اساس تخصص، مشخصات پزشک و...
          </Typography>
          <div className="border border-primary-main flex gap-x-5 justify-between items-center lg:rounded-[60px] rounded-[18px] bg-white pr-[36px] pl-[14px] py-2.5">
            <input
              type="text"
              className="w-full lg:!text-[32px] !text-[14px] lg:placeholder:!text-[32px] placeholder:!text-[14px] placeholder:!font-light font-light !text-primary-main placeholder:!text-primary-main focus-visible:outline-none"
              placeholder={"اسامی پزشکان ..."}
              onChange={(e) => setSearch(e.target.value)}
            />
            <Image
              src={"/images/search-icon.png"}
              alt="search-icon"
              width={74}
              height={74}
              className="lg:w-[74px] lg:h-[74px] w-[36px] h-[36px]"
            />
          </div>
          <div className="gap-x-7 lg:grid hidden w-[790px] gap-y-5 grid-cols-5">
            {search.trim().length > 0 ? (
              isSearching ? (
                <Typography className="!text-base !text-secondary-800 !font-light">
                  در حال جستجو...
                </Typography>
              ) : searchResults.length > 0 ? (
                searchResults.slice(0, 25).map((result) => (
                  <Link
                    href={result.url}
                    className="flex flex-col gap-y-5"
                    key={result.id}
                  >
                    <Typography className="!text-base !text-secondary-800 !font-light whitespace-nowrap">
                      {result.name}
                    </Typography>
                  </Link>
                ))
              ) : (
                <Typography className="!text-base !text-secondary-800 !font-light">
                  نتیجه‌ای یافت نشد
                </Typography>
              )
            ) : (
              terms.map((cat) => (
                <Link
                  href={`/doctors?terms=${cat.id}`}
                  className="flex flex-col gap-y-5"
                  key={cat.id}
                >
                  <Typography className="!text-base !text-secondary-800 !font-light whitespace-nowrap">
                    {cat.title}
                  </Typography>
                </Link>
              ))
            )}
          </div>
          <Button
            LinkComponent={Link}
            href="https://pa.nikan365.ir/main/expertise"
            className="!bg-primary-main !text-[24px] !text-grey-800 !font-medium !w-[346px] !h-[57px] !rounded-[15px] lg:!flex !hidden justify-center items-center"
            target="_blank"
          >
            تعیین نوبت
          </Button>
        </div>
        <Image
          src={"/images/search-nikan.png"}
          alt="search-nikan-mobile-image"
          width={355}
          height={594}
          className="lg:mt-[-100px] lg:!h-[594px] lg:!w-[355px] !h-[335px] !w-[200px] mx-auto"
        />
      </div>
    </div>
  );
};

export default SearchDoctors;
