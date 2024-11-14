import { Locale } from "@/configs/i18n";
import { Hero } from "./_components";
import { getDictionary } from "@/utils/getServerDictionary";

interface PageProps {
  params: {
    lang: Locale;
  };
}

const Page = async ({ params }: PageProps) => {
  const dictionary = await getDictionary(params.lang);

  return (
    <div className="">
      <Hero dictionary={dictionary} />
    </div>
  );
};

export default Page;
