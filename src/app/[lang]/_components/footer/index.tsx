import React from "react";
import {
  EndSection,
  ExtraButtons,
  LangSwicher,
  Links,
  LoginButton,
} from "./components";

const Footer = () => {
  return (
    <div className="">
      <div className="w-full h-[12px] bg-primary-main" />
      <div className="bg-primary-900">
        <div className="container max-w-[1231px] lg:px-0 px-5">
          <div className="flex gap-x-[66px] py-[60px] items-start lg:justify-between justify-center">
            <div className="flex flex-col gap-y-[22px]">
              <div className="flex gap-x-1.5">
                <LangSwicher />
                <LoginButton />
              </div>
              <ExtraButtons />
            </div>
            <Links />
          </div>
          <EndSection />
        </div>
      </div>
    </div>
  );
};

export default Footer;
