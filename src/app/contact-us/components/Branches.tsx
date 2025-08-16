import { components } from "@/lib/api/v1";
import { Button, Divider } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import ShareLink from "@/app/(home)/_components/branchesAddresses/share";


const Branches = async () => {
  const hospitals: components["schemas"]["HospitalResource"][] = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/hospitals`,
    {
      cache: "no-cache",
    }
  )
    .then((res) => res.json())
    .then((res) => res.data);

  return (
    <div className="max-w-[1049px] container lg:pt-5 lg:pb-[115px] pb-[84px]">
      <div className="grid lg:grid-cols-1 md:grid-cols-2">
        {hospitals?.map((branch, index) => (
          <div
            key={branch.id}
            className={`lg:pb-[33px] lg:pt-[60px] pt-[50px] ${
                hospitals.length - 1 !== index ? "lg:border-b" : ""
            } border-[#A9A9A9] flex lg:flex-row flex-col justify-between lg:items-start items-center gap-y-5 md:col-span-1 sm:px-0 px-5`}
          >
            <div className="flex lg:flex-row flex-col lg:items-end gap-x-[15px] gap-y-2.5">
              <Image
                src={
                  branch.thumbnail?.original_url ??
                  "/images/nikan-aghdasieh-icon.png"
                }
                alt="icon"
                width={116}
                height={97}
                className="object-contain lg:w-[116px] lg:h-[97px] w-[107px] h-[90px]"
                quality={100}
              />
              <div className="flex lg:gap-y-5 gap-y-1 flex-col">
                <span className="text-[20px] text-[#696969] font-extrabold">
                  بیمارستان {branch.name}
                </span>
                <span className="lg:text-[16px] text-[12px] font-extralight text-[#696969]">
                  {branch.address}
                </span>
              </div>
            </div>
            <div className="flex flex-col gap-y-7 max-w-[375px]">
              <div className="flex gap-x-3">
                <Button
                  LinkComponent={Link}
                  href={`/doctors?hospital=${branch.id}`}
                  className="lg:!w-[200px] !w-[172px] lg:!h-[39px] !h-[33px] !bg-[#EBEBEB] !text-black !rounded-lg lg:!font-normal !font-light"
                >
                  نوبت دهی آنلاین
                </Button>
                <Button
                  LinkComponent={Link}
                  href={`tel:${branch.fax}`}
                  className="lg:!w-[162px] !w-[139px] lg:!h-[39px] !h-[33px] !bg-[#31D1B0] !text-white !rounded-lg !flex !items-center !gap-x-2 !pr-[20px] !pl-0 lg:!font-normal !font-light"
                >
                  <span>{branch.fax}</span>
                  <Image
                    src={"/images/phone-icon.png"}
                    alt="phone-icon"
                    width={35}
                    height={33}
                  />
                </Button>
              </div>
              <div className="flex items-center justify-between">
                <Link
                  href={branch.address_link ?? ""}
                  className="text-[12px] text-black font-extralight"
                >
                  مسیریابی
                </Link>
                <Divider
                  orientation="vertical"
                  className="!w-[2px] !h-[18px] !bg-primary-main"
                />
                <ShareLink
                    url={branch?.website_link ?? "#"}
                    title={branch.name}
                    label={
                      <div className="text-[12px] text-black font-extralight">
                        اشتراک گذاری
                      </div>
                    }
                />
                <Divider
                  orientation="vertical"
                  className="!w-[2px] !h-[18px] !bg-primary-main"
                />
                <Link
                  href={"/insurances"}
                  className="text-[12px] text-black font-extralight"
                >
                  بیمه های طرف قرارداد
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Branches;
