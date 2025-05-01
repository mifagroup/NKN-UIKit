import { components } from "@/lib/api/v1";
import { Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
const BranchesAddresses = async () => {
  const data = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/hospitals`, {
    cache: "no-cache",
  }).then((res) => res.json());

  const hospitals: components["schemas"]["HospitalResource"][] = data?.data;

  if (!hospitals || !Array.isArray(hospitals) || hospitals.length === 0) {
    return null;
  }

  const branches = hospitals.map((hospital) => ({
    image: hospital?.thumbnail?.original_url ?? "",
    title: hospital.name,
    address: hospital.address,
    phone_number: hospital.fax,
    link: hospital?.website_link ?? "#",
    address_link: hospital?.address_link ?? "#",
  }));

  if (branches.length < 4) {
    return null;
  }

  return (
    <div className="flex flex-col bg-secondary-100">
      <div className="border-b border-secondary-500">
        <div className="container grid grid-cols-2 max-w-[1092px]">
          <Link
            href={branches[0].link}
            className="lg:pt-[71px] lg:pb-[74px] pt-[60px] pb-[30px] border-l border-secondary-500 flex lg:flex-row flex-col gap-y-2 items-center gap-x-[23px]"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src={branches[0].image}
              alt={branches[0].title}
              width={107}
              height={90}
            />
            <div className="flex flex-col">
              <Typography className="lg:!text-base !text-[12px] !font-extrabold !leading-[27px] !text-secondary-700">
                {branches[0]?.title}
              </Typography>
              <Typography className="!text-[12px] !font-extralight !leading-[27px] !text-secondary-700 lg:block hidden">
                {branches[0]?.address}
              </Typography>
              <div className="lg:flex hidden items-center mt-4">
                <a
                    href={branches[0]?.address_link}
                    className="text-xs font-extralight cursor-pointer"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                  مسیریابی
                </a>
                <div className="text-xs font-extralight mx-4 px-4 border-r-2 border-l-2 border-[#31D1B0]">
                  اشتراک گذاری
                </div>
                <a
                    href="/insurances"
                    className="text-xs font-extralight cursor-pointer"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                  بیمه های طرف قرارداد
                </a>
              </div>
            </div>
          </Link>
          <Link
              href={branches[1].link}
              className="lg:pt-[66px] lg:pb-[74px] pt-[38px] flex lg:flex-row flex-col lg:gap-y-2 items-center gap-x-[26px] lg:pr-[70px]"
              target="_blank"
          >
            <Image
              src={branches[1].image}
              alt={branches[1].title}
              width={91}
              height={105}
              className="lg:w-[91px] w-[103px] lg:h-[105px] h-[119px]"
            />
            <div className="flex flex-col">
              <Typography className="lg:!text-base !text-[12px] !font-extrabold !leading-[27px] !text-secondary-700">
                {branches[1]?.title}
              </Typography>
              <Typography className="!text-[12px] !font-extralight !leading-[27px] !text-secondary-700 lg:block hidden">
                {branches[1]?.address}
              </Typography>
              {/*     <Typography className="!text-base !font-semibold !leading-[27px] !text-secondary-700 lg:block hidden">
                {branches[1]?.phone_number}
              </Typography> */}
              <div className="lg:flex hidden items-center mt-4">
                <a
                    href={branches[1]?.address_link}
                    className="text-xs font-extralight cursor-pointer"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                  مسیریابی
                </a>
                <div className="text-xs font-extralight mx-4 px-4 border-r-2 border-l-2 border-[#31D1B0]">
                  اشتراک گذاری
                </div>
                <a
                    href="/insurances"
                    className="text-xs font-extralight cursor-pointer"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                  بیمه های طرف قرارداد
                </a>
              </div>
            </div>
          </Link>
        </div>
      </div>
      <div className="container grid grid-cols-2 max-w-[1092px]">
        <Link
            href={branches[2].link}
            className="lg:pt-[50px] pt-[48px] lg:pb-[69px] pb-[46px] border-l border-secondary-500 flex lg:flex-row flex-col gap-y-2 items-center gap-x-[23px]"
          target="_blank"
        >
          <Image
            src={branches[2].image}
            alt={branches[2].title}
            width={99}
            height={116}
            className="lg:w-[99px] w-[90px] lg:h-[116px] h-[105px]"
          />
          <div className="flex flex-col">
            <Typography className="lg:!text-base !text-[12px] !font-extrabold !leading-[27px] !text-secondary-700">
              {branches[2]?.title}
            </Typography>
            <Typography className="!text-[12px] !font-extralight !leading-[27px] !text-secondary-700 lg:block hidden">
              {branches[2]?.address}
            </Typography>
            <div className="lg:flex hidden items-center mt-4">
              <a
                  href={branches[2]?.address_link}
                  className="text-xs font-extralight cursor-pointer"
                  target="_blank"
                  rel="noopener noreferrer"
              >
                مسیریابی
              </a>
              <div className="text-xs font-extralight mx-4 px-4 border-r-2 border-l-2 border-[#31D1B0]">
                اشتراک گذاری
              </div>
              <a
                  href="/insurances"
                  className="text-xs font-extralight cursor-pointer"
                  target="_blank"
                  rel="noopener noreferrer"
              >
                بیمه های طرف قرارداد
              </a>
            </div>
          </div>
        </Link>
        <Link
            href={branches[3].link}
            className="lg:pt-[64px] pt-[55px] lg:pb-[74px] pb-[46px] lg:pr-[55px] flex lg:flex-row flex-col lg:gap-y-2 gap-y-3.5 items-center gap-x-[16px]"
            target="_blank"
        >
          <Image
            src={branches[3].image}
            alt={branches[3].title}
            width={116}
            height={97}
            className="lg:w-[116px] w-[110px] lg:h-[97px] h-[92px]"
          />
          <div className="flex flex-col">
            <Typography className="lg:!text-base !text-[12px] !font-extrabold !leading-[27px] !text-secondary-700">
              {branches[3]?.title}
            </Typography>
            <Typography className="!text-[12px] !font-extralight !leading-[27px] !text-secondary-700 lg:block hidden">
              {branches[3]?.address}
            </Typography>
            <div className="lg:flex hidden items-center mt-4">
              <a
                  href={branches[3]?.address_link}
                  className="text-xs font-extralight cursor-pointer"
                  target="_blank"
                  rel="noopener noreferrer"
              >
                مسیریابی
              </a>
              <div className="text-xs font-extralight mx-4 px-4 border-r-2 border-l-2 border-[#31D1B0]">
                اشتراک گذاری
              </div>
              <a
                  href="/insurances"
                  className="text-xs font-extralight cursor-pointer"
                  target="_blank"
                  rel="noopener noreferrer"
              >
                بیمه های طرف قرارداد
              </a>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default BranchesAddresses;