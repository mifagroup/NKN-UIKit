"use client";
import { useMediaQuery, useTheme } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { Links, MenuDrawer } from "./_components";
import { useLanguage } from "@/contexts/LanguageContext";

const Header = () => {
  const theme = useTheme();
  const { direction } = useLanguage();

  const greaterThanLg = useMediaQuery(theme.breakpoints.up("lg"));

  return (
    <div className="border-b border-b-[#D6D6D6]">
      <div className="xl:max-w-[1315px] container lg:px-0 px-5">
        <div className="flex items-center justify-between lg:h-[12vh] h-[10vh]">
          <div className="flex items-center gap-x-10">
            <Link href={"/"}>
              <Image
                src={
                  greaterThanLg
                    ? "/images/logo.svg"
                    : "/images/header-responsive-logo.svg"
                }
                alt="logo"
                width={greaterThanLg ? 87 : 136}
                height={greaterThanLg ? 70 : 40}
                quality={100}
              />
            </Link>
            {greaterThanLg && <Links />}
          </div>
          <div className="flex items-center gap-x-[22px]">
            <div className="flex items-center gap-x-1.5">
              {/*<LangSwicher />
               <LoginButton /> */}
            </div>
            <MenuDrawer />
            <div
              className={`lg:block hidden px-2 mx-2 w-[180px] ${
                direction === "rtl" ? "border-r" : "border-l"
              }`}
            >
              <a href="tel:02129129">
                <img src="/images/contact4.png" alt="ourTell" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;