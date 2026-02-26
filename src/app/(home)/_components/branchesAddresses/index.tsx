import { components } from "@/lib/api/v1";
import { Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import ShareLink from "./share";
import { cookies } from "next/headers";
import {
  getDictionary,
  getFallbackDictionary,
  getFromDictionary,
  resolveLocale,
} from "@/utils/dictionary";
import { i18n } from "@/configs/i18n";

const BranchesAddresses = async () => {
  const cookieStore = await cookies();
  const locale = resolveLocale(cookieStore.get("lang")?.value);
  const dictionary = getDictionary(locale);
  const fallbackDictionary = getFallbackDictionary();
  const direction = i18n.langDirection[locale] ?? "rtl";
  const sideBorderSecondary = `${direction === "rtl" ? "border-l" : "border-r"} border-secondary-500`;
  const reverseSideBorderSecondary = `${direction === "rtl" ? "border-r" : "border-l"} border-secondary-500`;

  const translate = (path: string) =>
    (getFromDictionary(dictionary, path) as string | undefined) ??
    (getFromDictionary(fallbackDictionary, path) as string | undefined) ??
    path;

  const data = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/hospitals`, {
    cache: "no-cache",
    headers: {
      "Accept-Language": locale ?? i18n.defaultLocale,
    },
  }).then((res) => res.json());

  const hospitals: components["schemas"]["HospitalResource"][] = data?.data;

  if (!hospitals || !Array.isArray(hospitals) || hospitals.length === 0) {
    return null;
  }

  const branches = hospitals.map((hospital) => ({
    image: hospital?.thumbnail?.original_url ?? "",
    title: hospital.full_name,
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
          <div
            className={`lg:pt-[71px] lg:pb-[74px] pt-[60px] pb-[30px] ${sideBorderSecondary} flex lg:flex-row flex-col gap-y-2 items-center gap-x-[23px]`}
          >
            <Link
              href={branches[0].link}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                  unoptimized
                src={branches[0].image}
                alt={branches[0].title}
                width={122}
                height={105}
                className="max-h-[105px] max-w-[122px]"
              />
            </Link>
            <div className="flex flex-col">
              <Link
                href={branches[0].link}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Typography className="lg:!text-base !text-[12px] !font-extrabold !leading-[27px] !text-secondary-700">
                  {branches[0]?.title}
                </Typography>
              </Link>
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
                  {translate("home.branches_addresses.navigate")}
                </a>
                <ShareLink
                  url={branches[0].link}
                  title={branches[0]?.title}
                  label={
                    <div className="text-xs font-extralight mx-4 px-4 border-r-2 border-l-2 border-[#31D1B0]">
                      {translate("home.branches_addresses.share")}
                    </div>
                  }
                />

                <a
                  href="/insurances"
                  className="text-xs font-extralight cursor-pointer"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {translate("home.branches_addresses.insurances")}
                </a>
              </div>
            </div>
          </div>
          <div
            className={`lg:pt-[71px] lg:pb-[74px] pt-[60px] pb-[30px] flex lg:flex-row flex-col lg:gap-y-2 items-center gap-x-[26px] lg:pr-[70px] ${reverseSideBorderSecondary}`}
          >
            <Link href={branches[1].link} target="_blank">
              <Image
                  unoptimized
                src={branches[1].image}
                alt={branches[1].title}
                width={122}
                height={105}
                quality={100}
                className="max-h-[105px] max-w-[122px]"
              />
            </Link>
            <div className="flex flex-col">
              <Link href={branches[1].link} target="_blank">
                <Typography className="lg:!text-base !text-[12px] !font-extrabold !leading-[27px] !text-secondary-700">
                  {branches[1]?.title}
                </Typography>
              </Link>
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
                  {translate("home.branches_addresses.navigate")}
                </a>
                <ShareLink
                    url={branches[1].link}
                    title={branches[1]?.title}
                    label={
                      <div className="text-xs font-extralight mx-4 px-4 border-r-2 border-l-2 border-[#31D1B0]">
                        {translate("home.branches_addresses.share")}
                      </div>
                    }
                />
                <a
                  href="/insurances"
                  className="text-xs font-extralight cursor-pointer"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {translate("home.branches_addresses.insurances")}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container grid grid-cols-2 max-w-[1092px]">
        <div
          className={`lg:pt-[50px] pt-[48px] lg:pb-[74px] pb-[46px] ${sideBorderSecondary} flex lg:flex-row flex-col gap-y-2 items-center gap-x-[23px]`}
        >
          <Link href={branches[2].link} target="_blank">
            <Image
                unoptimized
              src={branches[2].image}
              alt={branches[2].title}
              width={122}
              height={105}
              className="max-h-[105px] max-w-[122px]"
            />
          </Link>
          <div className="flex flex-col">
            <Link href={branches[2].link} target="_blank">
              <Typography className="lg:!text-base !text-[12px] !font-extrabold !leading-[27px] !text-secondary-700">
                {branches[2]?.title}
              </Typography>
            </Link>
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
                {translate("home.branches_addresses.navigate")}
              </a>
              <ShareLink
                url={branches[2].link}
                title={branches[2]?.title}
                label={
                  <div className="text-xs font-extralight mx-4 px-4 border-r-2 border-l-2 border-[#31D1B0]">
                    {translate("home.branches_addresses.share")}
                  </div>
                }
              />

              <a
                href="/insurances"
                className="text-xs font-extralight cursor-pointer"
                target="_blank"
                rel="noopener noreferrer"
              >
                {translate("home.branches_addresses.insurances")}
              </a>
            </div>
          </div>
        </div>
        <div
          className={`lg:pt-[50px] pt-[48px] lg:pb-[74px] pb-[46px] lg:pr-[55px] flex lg:flex-row flex-col lg:gap-y-2 gap-y-3.5 items-center gap-x-[16px] ${reverseSideBorderSecondary}`}
        >
          <Link href={branches[3].link} target="_blank">
            <Image
                unoptimized
              src={branches[3].image}
              alt={branches[3].title}
              width={122}
              height={1055}
              className="max-h-[105px] max-w-[122px]"
            />
          </Link>
          <div className="flex flex-col">
            <Link href={branches[3].link} target="_blank">
              <Typography className="lg:!text-base !text-[12px] !font-extrabold !leading-[27px] !text-secondary-700">
                {branches[3]?.title}
              </Typography>
            </Link>
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
                {translate("home.branches_addresses.navigate")}
              </a>
              <ShareLink
                url={branches[3].link}
                title={branches[3]?.title}
                label={
                  <div className="text-xs font-extralight mx-4 px-4 border-r-2 border-l-2 border-[#31D1B0]">
                    {translate("home.branches_addresses.share")}
                  </div>
                }
              />

              <a
                href="/insurances"
                className="text-xs font-extralight cursor-pointer"
                target="_blank"
                rel="noopener noreferrer"
              >
                {translate("home.branches_addresses.insurances")}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BranchesAddresses;
