"use client";
import { useMediaQuery, useTheme } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { Links, MenuDrawer } from "./_components";

const Header = () => {
  const theme = useTheme();

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
            {/* <div className="flex items-center gap-x-1.5">
              <LangSwicher />
              <LoginButton />
            </div> */}
            <MenuDrawer />
            <div className="lg:block hidden border-r pr-4 mr-4">
              <a href="tel:02112129">
                <img src="/images/ourTell.png" alt="ourTell" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
