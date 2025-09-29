"use client";

import { Divider } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/contexts/LanguageContext";

const EndSection = () => {
  const { t , language} = useLanguage();
  const items = [
    {
      id: "cooperation",
      labelKey: "footer.nav.doctors",
      href: "/doctors",
    },
    {
      id: "insurances",
      labelKey: "footer.nav.insurances",
      href: "/insurances",
    },
    {
      id: "social-responsibility",
      labelKey: "footer.nav.social_responsibility",
      href: "/social-responsibility",
    },
    {
      id: "nikan365",
      labelKey: "footer.nav.nikan365",
      href: "/nikan365",
    },
    {
      id: "news",
      labelKey: "footer.nav.news",
      href: "/news",
    },
  ];
  return (
    <div
      dir="rtl"
      className="lg:pt-[66px] lg:pb-[83px] pb-[40px] lg:border-t border-primary-main flex lg:flex-row flex-col gap-y-5 justify-between lg:items-start items-center"
    >
      <div className="flex gap-x-3">
        <Link href={"https://pa.nikan365.ir/auth/register"} target={"_blank"} >
          <Image
              src={`/images/footer_link_${language}.png`}
              alt="nikan365"
              width={309}
              height={125}
              quality={100}
              className="object-contain"
          />
        </Link>
        {/*   <div className="flex flex-col">
          <span className="font-semibold text-white text-[15px]">
            سامانه جامع سلامت نیکان 365
          </span>
          <div className="flex items-center gap-x-2">
            <Image
              src={"/images/download-icon.png"}
              alt="download"
              width={225}
              height={56}
              quality={100}
            />
        </div> */}
      </div>
      <Divider className="lg:!hidden block !h-[1px] !w-full !bg-[#204052]" />
      <div className="flex flex-col gap-y-[25px] lg:items-end items-center">
        <div className="flex">
          <div className="flex flex-col items-center px-3">
            <span className="text-[20px] text-white font-semibold">
              {t("footer.social.title")}
            </span>
            <span className="text-[14px] font-thin text-white">
              {t("footer.social.subtitle")}
            </span>
            <div className="flex gap-0.5 mt-3"> {/* Inline wrapper */}
              <Link href="https://www.instagram.com/nikanhospitaliran?igsh=MTZjb3lid3hzazgzZQ==" target="_blank">
                <Image
                  src={"/images/social_media/instagram.png"}
                  alt="instagram"
                  width={35}
                  height={35}
                  className="mx-auto"
                />
              </Link>
              <Link href="https://www.aparat.com/nikanhospital" target="_blank">
                <Image
                  src={"/images/social_media/aparat.png"}
                  alt="aparat"
                  width={35}
                  height={35}
                  className="mx-auto"
                />
              </Link>
              <Link href="https://x.com/nikanhospital" target="_blank">
                <Image
                  src={"/images/social_media/x.png"}
                  alt="x"
                  width={35}
                  height={35}
                  className="mx-auto"
                />
              </Link>
              <Link href="https://www.linkedin.com/in/nikanhospital-iran-1a8180317?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank">
                <Image
                  src={"/images/social_media/linkedin.png"}
                  alt="linkedin"
                  width={35}
                  height={35}
                  className="mx-auto"
                />
              </Link>
            </div>
          </div>
          <Divider
              orientation="vertical"
              className="!bg-primary-main !h-[90px]"
          />
          <Image
              src={"/images/nikan-white-icon.png"}
              alt="nikan"
              width={112}
              height={91}
              className="mr-5 max-w-[112px] max-h-[91px]"
          />
        </div>
        <div className="flex flex-col gap-y-4 lg:items-end items-center">
          <div
              className="flex items-center lg:gap-x-9 gap-x-2">
            {items.map((item) => (
                <Link
                    key={item.id}
                    href={item.href}
                    className="lg:text-[14px] text-[10px] font-light text-[#81929B]"
                >
                  {t(item.labelKey)}
                </Link>
            ))}
          </div>
          <span className="lg:text-[14px] text-[11px] font-medium text-[#28546D]">
            {t("footer.policy")}
          </span>
        </div>
      </div>
    </div>
  );
};

export default EndSection;
