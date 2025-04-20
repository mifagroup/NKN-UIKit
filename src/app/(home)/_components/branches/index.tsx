import { components } from "@/lib/api/v1";
import Image from "next/image";
import Link from "next/link";
import { Fragment } from "react";

const Branches = ({
  hospitals,
}: {
  hospitals: components["schemas"]["HospitalResource"][];
}) => {
  return (
    /* md:bg-[#EBEBEB] */
    <div className=" py-5">
      <div className="max-w-[1236px] container">
        {" "}
        {/*    <h2 className="text-[#6D6D6D] md:block hidden font-bold text-[24px] my-5">
          شعب بیمارستان های نیکان
        </h2> */}
        <div className=" grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1">
          {hospitals?.map((hospital) => (
            <Fragment key={hospital.id}>
              {" "}
              {/*      <Link
                className="relative hidden lg:flex flex-col items-center gap-4 bg-white p-4 rounded-[14px]"
                href={hospital.website_link ?? ""}
                target="_blank"
              >
                <Image
                  src={
                    hospital?.image?.original_url ??
                    "/images/aghdasieh-branch.png"
                  }
                  layout="fill"
                  alt={hospital.name}
                  className=" w-full !h-[287px] !relative rounded-[14px]"
                />
                <>
                  {" "}
                  <Image
                    src={
                      hospital?.thumbnail?.original_url ??
                      "/images/aghdasieh-branch-name-and-icon.png"
                    }
                    alt="icon"
                    width={78}
                    height={98}
                    className="!h-[98px] w-[78px] "
                  />
                  <span className="text-[#696969] text-xl">
                    {hospital.name}
                  </span>
                </>{" "}
              </Link> */}
              <Link
                className="relative"
                href={hospital.website_link ?? ""}
                key={hospital.id}
                target="_blank"
              >
                <div
                  className="absolute w-full h-full opacity-50"
                  style={{
                    background:
                      "linear-gradient(180deg, #A0A0A0 29%, #0D0D0D 87%)",
                  }}
                />
                <Image
                  src={
                    hospital?.image?.original_url ??
                    "/images/aghdasieh-branch.png"
                  }
                  alt={hospital.name}
                  width={1000}
                  height={630}
                  quality={100}
                  className="object-cover lg:h-[630px] h-full"
                />
                <div className="absolute bottom-[66px] w-full flex flex-col">
                  <Image
                    src={
                      hospital?.main_thumbnail?.original_url ??
                      "/images/aghdasieh-branch-name-and-icon.png"
                    }
                    alt="icon"
                    width={316}
                    height={160}
                    className="px-[34px] w-full h-[160px]"
                  />
                  <span className="text-white xl:text-[24px] text-[20px] px-[34px]">
                    {hospital.name}
                  </span>
                </div>
              </Link>
            </Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Branches;
/* 
   <Fragment key={hospital.id}>
              {" "}
              <Link
                className="relative hidden lg:flex flex-col items-center gap-4 bg-white p-4 rounded-[14px]"
                href={hospital.website_link ?? ""}
                target="_blank"
              >
                <Image
                  src={
                    hospital?.image?.original_url ??
                    "/images/aghdasieh-branch.png"
                  }
                  layout="fill"
                  alt={hospital.name}
                  className=" w-full !h-[287px] !relative rounded-[14px]"
                />
                <>
                  {" "}
                  <Image
                    src={
                      hospital?.thumbnail?.original_url ??
                      "/images/aghdasieh-branch-name-and-icon.png"
                    }
                    alt="icon"
                    width={78}
                    height={98}
                    className="!h-[98px] w-[78px] "
                  />
                  <span className="text-[#696969] text-xl">
                    {hospital.name}
                  </span>
                </>{" "}
              </Link>
              <Link
                className="relative lg:hidden "
                href={hospital.website_link ?? ""}
                key={hospital.id}
                target="_blank"
              >
                <div
                  className="absolute w-full h-full opacity-50"
                  style={{
                    background:
                      "linear-gradient(180deg, #A0A0A0 29%, #0D0D0D 87%)",
                  }}
                />
                <Image
                  src={
                    hospital?.image?.original_url ??
                    "/images/aghdasieh-branch.png"
                  }
                  alt={hospital.name}
                  width={1000}
                  height={630}
                  quality={100}
                  className="object-cover lg:h-[630px] h-full"
                />
                <div className="absolute bottom-[66px] w-full flex flex-col">
                  <Image
                    src={
                      hospital?.main_thumbnail?.original_url ??
                      "/images/aghdasieh-branch-name-and-icon.png"
                    }
                    alt="icon"
                    width={316}
                    height={160}
                    className="px-[34px] w-full h-[160px]"
                  />
                  <span className="text-white xl:text-[24px] text-[20px] px-[34px]">
                    {hospital.name}
                  </span>
                </div>
              </Link>
            </Fragment> */
