"use client";
import Image from "next/image";
import React from "react";
import { LangSwicher, Links, LoginButton, MenuDrawer } from "./_components";
import { useMediaQuery, useTheme } from "@mui/material";
import Link from "next/link";

const Header = () => {
  const theme = useTheme();

  const greaterThanLg = useMediaQuery(theme.breakpoints.up("lg"));

  return (
    <div className="border-b border-b-[#D6D6D6]">
      <div className="xl:max-w-[1315px] container lg:px-0 px-5">
        <div className="flex items-center justify-between lg:py-[38px] pt-[20px] pb-[14px]">
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
