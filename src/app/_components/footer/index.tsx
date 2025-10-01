import React from "react";
import { EndSection, ExtraButtons, Links } from "./components";
import { components } from "@/lib/api/v1";
import { cookies } from "next/headers";
import { i18n } from "@/configs/i18n";
import { resolveLocale } from "@/utils/dictionary";

const Footer = async () => {
  const cookieStore = await cookies();
  const locale = resolveLocale(cookieStore.get("lang")?.value);
  const headers = {
    "Accept-Language": locale ?? i18n.defaultLocale,
  };

  const data = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/home`, {
    cache: "no-cache",
    headers,
  }).then((res) => res.json());

  const homeResponse: components["schemas"]["HomeResource"] = data?.data;

  const footerTerms = homeResponse.footer_terms;

  return (
    <div className="">
      <div className="w-full h-[12px] bg-primary-main" />
      <div className="bg-primary-900">
        <div className="container max-w-[1231px] lg:px-0 px-5">
          <div className="flex gap-x-[66px] py-[60px] items-start lg:justify-between justify-center">
            <div className="flex flex-col gap-y-[22px]">
              {/* <div className="flex gap-x-1.5">
                <LangSwicher />
                <LoginButton />
              </div>*/}
              <ExtraButtons />
            </div>
            {footerTerms && <Links footerTerms={footerTerms} />}
          </div>
          <EndSection />
        </div>
      </div>
    </div>
  );
};

export default Footer;