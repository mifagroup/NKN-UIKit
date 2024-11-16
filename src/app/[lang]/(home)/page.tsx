import { Locale } from "@/configs/i18n";
import {
  Branches,
  BranchesAddresses,
  Hero,
  Nikan365Intro,
  SearchDoctors,
  WhyNikan,
} from "./_components";
import { getDictionary } from "@/utils/getServerDictionary";

interface PageProps {
  params: Promise<{
    lang: Locale;
  }>;
}

const Page = async (props: PageProps) => {
  const params = await props.params;
  const dictionary = await getDictionary(params.lang);

  return (
    <div className="">
      <Hero dictionary={dictionary} />
      <Nikan365Intro />
      <Branches />
      <WhyNikan dictionary={dictionary} />
      <SearchDoctors dictionary={dictionary} />
      <BranchesAddresses dictionary={dictionary} />
    </div>
  );
};

export default Page;
