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
                    {data.slides?.map((slide) => (
                        <a key={slide.id} target="_blank" href={slide.link ?? "#"}>
                            <div className={`
                                        flex flex-col items-center justify-center gap-3 lg:pl-4 lg:ml-4 pl-4 pb-4 lg:pb-0
                                        ${slide.id !== (data.slides?.length ?? 0) + 1 ? "border-l lg:border-l lg:border-b-0 border-b" : ""}
                                        `}>
                                <Image
                                    className="w-full max-w-[66px] !relative"
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
