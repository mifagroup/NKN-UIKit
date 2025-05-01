import { components } from "@/lib/api/v1";
import Image from "next/image";

const Nikan365Intro = ({

}: {
  data: components["schemas"]["SliderResource"];
}) => {
  return (
    <div className="max-w-[1236px] container pt-[44px] lg:pb-[27px] lg:px-0 px-10 w-full pb-[46px] flex lg:justify-between lg:items-center lg:flex-row flex-col">
      {/*  <div className="items-center gap-x-1.5 lg:flex hidden">
        <Image
          src={data?.thumbnails?.[0].original_url ?? ""}
          alt="nikan-365-logo"
          width={210}
          height={149}
          quality={100}
        />
        <div className="flex flex-col gap-y-0.5">
          <Typography component={"h1"} className="xl:!text-[36px] !text-[26px] !font-extrabold !text-secondary-600">
            {data?.name}
          </Typography>
          <Typography className="!font-light !text-secondary-200">
            {data?.description}
          </Typography>
        </div>
      </div>
      <Nikan365IntroSlider data={data.slides ?? []} /> */}
      <Image src="/images/slogen.svg" alt="slogen" />
      <div className="grid lg:grid-cols-4 grid-cols-2 lg:mt-0 mt-10">
        <div className="flex flex-col items-center justify-center gap-3 lg:border-l lg:pl-4 lg:ml-4 border-l  lg:pb-0 lg:border-b-0 border-b pl-4 pb-4">
          <Image
            className="w-full max-w-[66px]"
            src="/images/calendar.png"
            alt="slogen"
          />
          <p className="lg:text-base text-sm text-center font-light text-[#616161]">
            برنامه کلینیک‌های تخصصی
          </p>
        </div>
        <div className="flex flex-col items-center justify-center gap-3 lg:border-l lg:pl-4 lg:ml-4  lg:pb-0 lg:border-b-0 border-b pl-4 pb-4">
          <Image
            className="w-full max-w-[66px]"
            src="/images/appointment.png"
            alt="slogen"
          />
          <p className="lg:text-base text-sm text-center font-light text-[#616161]">
            نوبت دهی
          </p>
        </div>
        <div className="flex flex-col items-center justify-center gap-3 lg:border-l lg:pl-4  lg:pb-0 lg:pt-0 lg:border-b-0 lg:ml-4 border-l  pt-4 pb-4">
          <Image
            className="w-full max-w-[66px]"
            src="/images/checkup.png"
            alt="slogen"
          />
          <p className="lg:text-base text-sm text-center font-light text-[#616161]">
            پایش سلامت(چکاپ)
          </p>
        </div>
        <div className="flex flex-col items-center justify-center gap-3  lg:pl-0 lg:pt-0 lg:pb-0 pt-4 lg:border-b-0 pb-4">
          <Image
            className="w-full max-w-[66px]"
            src="/images/javab.png"
            alt="slogen"
          />
          <p className="lg:text-base text-sm text-center font-light text-[#616161]">
            جواب دهی انلاین
          </p>
        </div>
      </div>
    </div>
  );
};

export default Nikan365Intro;
