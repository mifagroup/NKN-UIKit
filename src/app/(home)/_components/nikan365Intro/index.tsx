import {components} from "@/lib/api/v1";
import Image from "next/image";

const Nikan365Intro = ({data}: {
    data: components["schemas"]["SliderResource"];
}) => {
    return (
        <>
            {/* <div key={data.id} className="max-w-[1236px] container pt-[44px] lg:pb-[27px] lg:px-0 px-10 w-full pb-[46px] flex lg:justify-between lg:items-center lg:flex-row flex-col">
          <Image src="/images/slogen.svg" fill className="!relative max-w-[400px]" alt="slogen" />

        <Nikan365IntroSlider data={data.slides ?? []} />
      </div>*/}
            <div
                className="max-w-[1236px] container pt-[44px] lg:pb-[27px] lg:px-0 px-10 w-full pb-[46px] flex lg:justify-between lg:items-center lg:flex-row flex-col">
                <Image src="/images/slogen.svg" fill className="!relative max-w-[400px]" alt="slogen"/>

                <div className="grid lg:grid-cols-4 grid-cols-2 lg:mt-0 mt-10">
                    {data.slides?.map((slide , index) => (
                        <a key={slide.id} target="_blank" href={slide.link ?? "#"}>
                            <div className={`
                                        h-[110px] flex flex-col items-center justify-center gap-3 lg:pl-4 lg:ml-4 pl-4 pb-4 lg:pb-0
                                        ${index === 0 ? "border-l lg:border-l lg:border-b-0 border-b" : ""}
                                        ${index === 1 ? " lg:border-l lg:border-b-0 border-b" : ""}
                                        ${index === 2 ? "border-l lg:border-l lg:border-b-0 lg:pt-0 pt-4 " : ""}
                                        ${index === 3 ? "lg:border-b-0 pt-4 lg:pt-0" : ""}
                                        `}>
                                <Image
                                    className="w-full max-w-[66px] max-h-[60px] !relative"
                                    src={slide.image.original_url ?? ""}
                                    alt="slogen"
                                    fill
                                />
                                <p className="lg:text-base text-sm text-center font-light text-[#616161]">
                                    {slide.title}
                                </p>
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </>
    );
};

export default Nikan365Intro;
