import Image from "next/image";
import React from "react";
import { LangSwicher, Links, LoginButton } from "./_components";

const Header = () => {
  return (
    <div className="pr-[75px] pl-[50px]">
      <div className="flex items-center justify-between py-[38px]">
        <div className="flex items-center gap-x-10">
          <Image src={"/images/logo.svg"} alt="logo" width={87} height={70} />
          <Links />
        </div>
        <div className="flex items-center gap-x-1.5">
          <LangSwicher />
          <LoginButton />
        </div>
      </div>
    </div>
  );
};

export default Header;
