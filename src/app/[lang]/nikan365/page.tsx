import React from "react";
import { AppSlider, Hero, NikanOnline, WebsiteSlider } from "./components";
import { BranchesAddresses } from "../(home)/_components";
import { Locale } from "@/configs/i18n";
import { getDictionary } from "@/utils/getServerDictionary";

interface PageProps {
  params: Promise<{
    lang: Locale;
  }>;
}

const page = async (props: PageProps) => {
  const params = await props.params;
  const dictionary = await getDictionary(params.lang);

  return (
    <div>
      <Hero />
      <AppSlider />
      <WebsiteSlider />
      <NikanOnline />
      <BranchesAddresses dictionary={dictionary} />
    </div>
  );
};

export default page;
