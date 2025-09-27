"use client";

import { components } from "@/lib/api/v1";
import Image from "next/image";
import { useLanguage } from "@/contexts/LanguageContext";

const Nikan365Intro = ({
  data,
}: {
  data: components["schemas"]["SliderResource"];
}) => {
  const { direction } = useLanguage();
  const isRTL = direction === "rtl";

  const sideBorder = isRTL ? "border-l" : "border-r";
  const lgSideBorder = isRTL ? "lg:border-l" : "lg:border-r";
  const sidePadding = isRTL ? "pl-4 lg:pl-4" : "pr-4 lg:pr-4";
  const sideMargin = isRTL ? "lg:ml-4" : "lg:mr-4";

  const itemClass = (index: number) => {
    const base = `h-[110px] flex flex-col items-center justify-center gap-3 ${sidePadding} ${sideMargin} pb-4 lg:pb-0`;

    switch (index) {
      case 0:
        return `${base} ${sideBorder} ${lgSideBorder} border-b lg:border-b-0`;
      case 1:
        return `${base} ${lgSideBorder} border-b lg:border-b-0`;
      case 2:
        return `${base} ${sideBorder} ${lgSideBorder} lg:border-b-0 lg:pt-0 pt-4`;
      case 3:
        return `${base} lg:border-b-0 pt-4 lg:pt-0`;
      default:
        return base;
    }
  };

  return (
    <div className="max-w-[1236px] container pt-[44px] lg:pb-[27px] lg:px-0 px-10 w-full pb-[46px] flex lg:justify-between lg:items-center lg:flex-row flex-col">
      <Image
        src="/images/slogen.svg"
        fill
        quality={100}
        className="!relative max-w-[400px]"
        alt="slogan"
      />

      <div className="grid lg:grid-cols-4 grid-cols-2 lg:mt-0 mt-10">
        {data.slides?.map((slide, index) => (
          <a key={slide.id} target="_blank" href={slide.link ?? "#"}>
            <div className={itemClass(index)}>
              <Image
                className="w-full max-w-[66px] max-h-[60px] !relative"
                src={slide.image.original_url ?? ""}
                alt={slide.title ?? "nikan-365"}
                fill
                quality={100}
              />
              <p className="lg:text-base text-sm text-center font-light text-[#616161]">
                {slide.title}
              </p>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Nikan365Intro;
