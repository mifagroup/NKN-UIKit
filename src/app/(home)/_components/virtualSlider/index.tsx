"use client";

import Image from "next/image";
import Link from "next/link";
import {useLanguage} from "@/contexts/LanguageContext";

const VirtualSlider = () => {
    const {language} = useLanguage();
    return (
      <Link href={"https://nikanvirtual.com/"} target={"_blank"}>
          <div className="max-w-[1236px] container lg:mb-[150px]">
              <Image
                  src={`/images/virtual_slider-${language}.png`}
                  alt=""
                  width={1209}
                  height={234}
                  quality={100}
                  className="mt-10 lg:mb-24 mb-10 object-cover md:block hidden mx-auto"
              />{" "}
              <Image
                  src={`/images/virtual_slider_mobile-${language}.png`}
                  alt=""
                  width={357}
                  height={269}
                  quality={100}
                  className="mt-10 mb-10 object-cover !relative block md:hidden mx-auto"
              />
          </div>
      </Link>
  );
};

export default VirtualSlider;
