import Image from "next/image";

const page = () => {
  const cards = [
    {
      title: "بیمه های طرف قرارداد با بیمارستان نیکان غرب",
      image: "/images/h1.png",
      href: "/insurances/aghdasieh-insurance.xlsx",
    },
    {
      title: "بیمه های طرف قرارداد با بیمارستان نیکان سپید",
      image: "/images/h2.png",
      href: "/insurances/sepid-insurance.jpg",
    },
    {
      title: "بیمه های طرف قرارداد با مرکز جراحی محدود نیکان",
      image: "/images/h3.png",
      href: "/insurances/jarahi-mahdod-insurance.pdf",
    },
    {
      title: "بیمه های طرف قرارداد با بیمارستان نیکان اقدسیه",
      image: "/images/h4.png",
      href: "/insurances/aghdasieh-insurance.pdf",
    },
  ];
  return (
    <>
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 py-20 max-w-5xl mx-auto">
          {cards.map((card, idx) => (
            <div
              key={idx}
              className={`flex flex-col items-center text-center  border-gray-200 p-6  transition ${
                idx === 0
                  ? "lg:border-l border-b"
                  : idx === 1
                  ? "border-b"
                  : idx === 2
                  ? "border-b lg:border-b-0 lg:border-l"
                  : ""
              }  `}
            >
              <Image
                src={card.image}
                alt="icon"
                className="!w-[122px] !h-[105px] mb-4 !relative"
                quality={100}
                fill
              />
              <h3 className="text-xl font-semibold text-black mb-2">
                {card.title}
              </h3>
              <a
                href={card.href}
                download
                target="_blank"
                className="text-sm text-black font-light bg-[#F3F3F3] px-4 py-1 mt-6 rounded  transition"
              >
                دانلود لیست بیمه این مرکز
              </a>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default page;
/* 
  <div className="pt-[50px] pb-[120px] max-w-[1168px] mx-auto lg:px-0 px-5 flex flex-col gap-y-16">
      <div className="flex flex-col gap-y-[30px]">
        <h2 className="text-xl font-semibold lg:text-right text-center">
          بیمه های مکمل طرف قرارداد با بیمارستان نیکان
        </h2>
        <div className="flex flex-col gap-y-[66px]">
          <div className="md:bg-[#F6F6F6] bg-transparent rounded-[26px] lg:flex grid grid-cols-3 justify-items-center gap-y-8 justify-between lg:flex-nowrap flex-wrap items-center lg:px-[35px] py-3">
            <Image
              src={"/images/insurances/kar-afarin.png"}
              alt=""
              width={111}
              height={122}
              className="object-contain h-[122px] w-[111px]"
            />
            <Divider
              orientation="vertical"
              className="!bg-[#A1A1A1] !w-[1px] !h-[113px] lg:!block hidden"
            />
            <Image
              src={"/images/insurances/asia.png"}
              alt=""
              width={111}
              height={122}
              className="object-contain h-[122px] w-[111px]"
            />
            <Divider
              orientation="vertical"
              className="!bg-[#A1A1A1] !w-[1px] !h-[113px] lg:!block hidden"
            />
            <Image
              src={"/images/insurances/novin.png"}
              alt=""
              width={111}
              height={122}
              className="object-contain h-[122px] w-[111px]"
            />
            <Divider
              orientation="vertical"
              className="!bg-[#A1A1A1] !w-[1px] !h-[113px] lg:!block hidden"
            />
            <div className="w-full col-span-3 lg:hidden block">
              <Divider
                orientation="horizontal"
                className="!bg-[#A1A1A1] !w-full !h-[1px] lg:!hidden !block"
              />
            </div>
            <Image
              src={"/images/insurances/alborz.png"}
              alt=""
              width={111}
              height={122}
              className="object-contain h-[122px] w-[111px]"
            />
            <Divider
              orientation="vertical"
              className="!bg-[#A1A1A1] !w-[1px] !h-[113px] lg:!block hidden"
            />
            <Image
              src={"/images/insurances/komak-resan.png"}
              alt=""
              width={111}
              height={122}
              className="object-contain h-[122px] w-[111px]"
            />
            <Divider
              orientation="vertical"
              className="!bg-[#A1A1A1] !w-[1px] !h-[113px] lg:!block hidden"
            />
            <Image
              src={"/images/insurances/raze.png"}
              alt=""
              width={111}
              height={122}
              className="object-contain h-[122px] w-[111px]"
            />
          </div>
          <div className="md:bg-[#F6F6F6] bg-transparent rounded-[26px] lg:flex grid grid-cols-3 justify-items-center gap-y-8 justify-between lg:flex-nowrap flex-wrap items-center lg:px-[35px] py-3">
            <Image
              src={"/images/insurances/atieh-sazan-hafez.png"}
              alt=""
              width={111}
              height={122}
              className="object-contain h-[122px] w-[111px]"
            />
            <Divider
              orientation="vertical"
              className="!bg-[#A1A1A1] !w-[1px] !h-[113px] lg:!block hidden"
            />
            <Image
              src={"/images/insurances/dey.png"}
              alt=""
              width={111}
              height={122}
              className="object-contain h-[122px] w-[111px]"
            />
            <Divider
              orientation="vertical"
              className="!bg-[#A1A1A1] !w-[1px] !h-[113px] lg:!block hidden"
            />
            <Image
              src={"/images/insurances/parsian.png"}
              alt=""
              width={111}
              height={122}
              className="object-contain h-[122px] w-[111px]"
            />
            <Divider
              orientation="vertical"
              className="!bg-[#A1A1A1] !w-[1px] !h-[113px] lg:!block hidden"
            />
            <div className="w-full col-span-3 lg:hidden block">
              <Divider
                orientation="horizontal"
                className="!bg-[#A1A1A1] !w-full !h-[1px] lg:!hidden !block"
              />
            </div>
            <Image
              src={"/images/insurances/tejarat-no.png"}
              alt=""
              width={111}
              height={122}
              className="object-contain h-[122px] w-[111px]"
            />
            <Divider
              orientation="vertical"
              className="!bg-[#A1A1A1] !w-[1px] !h-[113px] lg:!block hidden"
            />
            <Image
              src={"/images/insurances/taavon.png"}
              alt=""
              width={111}
              height={122}
              className="object-contain h-[122px] w-[111px]"
            />
            <Divider
              orientation="vertical"
              className="!bg-[#A1A1A1] !w-[1px] !h-[113px] lg:!block hidden"
            />
            <Image
              src={"/images/insurances/sahami.png"}
              alt=""
              width={111}
              height={122}
              className="object-contain h-[122px] w-[111px]"
            />
          </div>
          <div className="md:bg-[#F6F6F6] bg-transparent rounded-[26px] lg:flex grid grid-cols-3 justify-items-center gap-y-8 justify-between lg:flex-nowrap flex-wrap items-center lg:px-[35px] py-3">
            <Image
              src={"/images/insurances/dana.png"}
              alt=""
              width={111}
              height={122}
              className="object-contain h-[122px] w-[111px]"
            />
            <Divider
              orientation="vertical"
              className="!bg-[#A1A1A1] !w-[1px] !h-[113px] lg:!block hidden"
            />
            <Image
              src={"/images/insurances/mellat.png"}
              alt=""
              width={111}
              height={122}
              className="object-contain h-[122px] w-[111px]"
            />
            <Divider
              orientation="vertical"
              className="!bg-[#A1A1A1] !w-[1px] !h-[113px] lg:!block hidden"
            />
            <Image
              src={"/images/insurances/moaalem.png"}
              alt=""
              width={111}
              height={122}
              className="object-contain h-[122px] w-[111px]"
            />
            <Divider
              orientation="vertical"
              className="!bg-[#A1A1A1] !w-[1px] !h-[113px] lg:!block hidden"
            />
            <div className="w-full col-span-3 lg:hidden block">
              <Divider
                orientation="horizontal"
                className="!bg-[#A1A1A1] !w-full !h-[1px] lg:!hidden !block"
              />
            </div>
            <Image
              src={"/images/insurances/ma.png"}
              alt=""
              width={111}
              height={122}
              className="object-contain h-[122px] w-[111px]"
            />
            <Divider
              orientation="vertical"
              className="!bg-[#A1A1A1] !w-[1px] !h-[113px] lg:!block hidden"
            />
            <Image
              src={"/images/insurances/sina.png"}
              alt=""
              width={111}
              height={122}
              className="object-contain h-[122px] w-[111px]"
            />
            <Divider
              orientation="vertical"
              className="!bg-[#A1A1A1] !w-[1px] !h-[113px] lg:!block hidden"
            />
            <Image
              src={"/images/insurances/sarmad.png"}
              alt=""
              width={111}
              height={122}
              className="object-contain h-[122px] w-[111px]"
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-y-[30px]">
        <h2 className="text-xl font-semibold lg:text-right text-center">
          بیمه های بانک طرف قرارداد با بیمارستان نیکان
        </h2>
        <div className="flex flex-col gap-y-[66px]">
          <div className="md:bg-[#F6F6F6] bg-transparent rounded-[26px] lg:flex grid grid-cols-3 justify-items-center gap-y-8 justify-between lg:flex-nowrap flex-wrap items-center lg:px-[35px] py-3">
            <Image
              src={"/images/insurances/refah-kargaran.png"}
              alt=""
              width={111}
              height={122}
              className="object-contain h-[122px] w-[111px]"
            />
            <Divider
              orientation="vertical"
              className="!bg-[#A1A1A1] !w-[1px] !h-[113px] lg:!block hidden"
            />
            <Image
              src={"/images/insurances/markazi.png"}
              alt=""
              width={111}
              height={122}
              className="object-contain h-[122px] w-[111px]"
            />
            <Divider
              orientation="vertical"
              className="!bg-[#A1A1A1] !w-[1px] !h-[113px] lg:!block hidden"
            />
            <Image
              src={"/images/insurances/sanat-madan.png"}
              alt=""
              width={111}
              height={122}
              className="object-contain h-[122px] w-[111px]"
            />
            <Divider
              orientation="vertical"
              className="!bg-[#A1A1A1] !w-[1px] !h-[113px] lg:!block hidden"
            />
            <div className="w-full col-span-3 lg:hidden block">
              <Divider
                orientation="horizontal"
                className="!bg-[#A1A1A1] !w-full !h-[1px] lg:!hidden !block"
              />
            </div>
            <Image
              src={"/images/insurances/keshavarzi.png"}
              alt=""
              width={111}
              height={122}
              className="object-contain h-[122px] w-[111px]"
            />
            <Divider
              orientation="vertical"
              className="!bg-[#A1A1A1] !w-[1px] !h-[113px] lg:!block hidden"
            />
            <Image
              src={"/images/insurances/bank-mellat.png"}
              alt=""
              width={111}
              height={122}
              className="object-contain h-[122px] w-[111px]"
            />
            <Divider
              orientation="vertical"
              className="!bg-[#A1A1A1] !w-[1px] !h-[113px] lg:!block hidden"
            />
            <Image
              src={"/images/insurances/tejarat.png"}
              alt=""
              width={111}
              height={122}
              className="object-contain h-[122px] w-[111px]"
            />
          </div>
        </div>
        <div className="flex flex-col gap-y-[66px]">
          <div className="md:bg-[#F6F6F6] bg-transparent rounded-[26px] lg:flex grid grid-cols-3 justify-items-center gap-y-8 justify-evenly lg:flex-nowrap flex-wrap items-center lg:px-[35px] py-3">
            <Image
              src={"/images/insurances/tosee-saderat.png"}
              alt=""
              width={111}
              height={122}
              className="object-contain h-[122px] w-[111px]"
            />
            <Divider
              orientation="vertical"
              className="!bg-[#A1A1A1] !w-[1px] !h-[113px] lg:!block hidden"
            />
            <Image
              src={"/images/insurances/maskan.png"}
              alt=""
              width={111}
              height={122}
              className="object-contain h-[122px] w-[111px]"
            />
            <Divider
              orientation="vertical"
              className="!bg-[#A1A1A1] !w-[1px] !h-[113px] lg:!block hidden"
            />
            <Image
              src={"/images/insurances/sepah.png"}
              alt=""
              width={111}
              height={122}
              className="object-contain h-[122px] w-[111px]"
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-y-[30px]">
        <h2 className="text-xl font-semibold lg:text-right text-center">
          بیمه های بیمه وزارتخانه ها ، سازمان ها و شرکت ها طرف قرارداد با
          بیمارستان نیکان
        </h2>
        <div className="flex flex-col gap-y-[66px]">
          <div className="md:bg-[#F6F6F6] bg-transparent rounded-[26px] lg:flex grid grid-cols-3 justify-items-center gap-y-8 justify-between lg:flex-nowrap flex-wrap items-center lg:px-[35px] py-3">
            <Image
              src={"/images/insurances/markaz-pazouhesh.png"}
              alt=""
              width={111}
              height={122}
              className="object-contain h-[122px] w-[111px]"
            />
            <Divider
              orientation="vertical"
              className="!bg-[#A1A1A1] !w-[1px] !h-[113px] lg:!block hidden"
            />
            <Image
              src={"/images/insurances/melli-naft.png"}
              alt=""
              width={111}
              height={122}
              className="object-contain h-[122px] w-[111px]"
            />
            <Divider
              orientation="vertical"
              className="!bg-[#A1A1A1] !w-[1px] !h-[113px] lg:!block hidden"
            />
            <Image
              src={"/images/insurances/majles-shora.png"}
              alt=""
              width={111}
              height={122}
              className="object-contain h-[122px] w-[111px]"
            />
            <Divider
              orientation="vertical"
              className="!bg-[#A1A1A1] !w-[1px] !h-[113px] lg:!block hidden"
            />
            <div className="w-full col-span-3 lg:hidden block">
              <Divider
                orientation="horizontal"
                className="!bg-[#A1A1A1] !w-full !h-[1px] lg:!hidden !block"
              />
            </div>
            <Image
              src={"/images/insurances/naft-falat.png"}
              alt=""
              width={111}
              height={122}
              className="object-contain h-[122px] w-[111px]"
            />
            <Divider
              orientation="vertical"
              className="!bg-[#A1A1A1] !w-[1px] !h-[113px] lg:!block hidden"
            />
            <Image
              src={"/images/insurances/sandogh-bazneshastegi.png"}
              alt=""
              width={111}
              height={122}
              className="object-contain h-[122px] w-[111px]"
            />
            <Divider
              orientation="vertical"
              className="!bg-[#A1A1A1] !w-[1px] !h-[113px] lg:!block hidden"
            />
            <Image
              src={"/images/insurances/ketabkhane.png"}
              alt=""
              width={111}
              height={122}
              className="object-contain h-[122px] w-[111px]"
            />
          </div>
          <div className="md:bg-[#F6F6F6] bg-transparent rounded-[26px] lg:flex grid grid-cols-3 justify-items-center gap-y-8 justify-between lg:flex-nowrap flex-wrap items-center lg:px-[35px] py-3">
            <Image
              src={"/images/insurances/shora-negahban.png"}
              alt=""
              width={111}
              height={122}
              className="object-contain h-[122px] w-[111px]"
            />
            <Divider
              orientation="vertical"
              className="!bg-[#A1A1A1] !w-[1px] !h-[113px] lg:!block hidden"
            />
            <Image
              src={"/images/insurances/bonyad-15-khordad.png"}
              alt=""
              width={111}
              height={122}
              className="object-contain h-[122px] w-[111px]"
            />
            <Divider
              orientation="vertical"
              className="!bg-[#A1A1A1] !w-[1px] !h-[113px] lg:!block hidden"
            />
            <Image
              src={"/images/insurances/shahrdari-tehran.png"}
              alt=""
              width={111}
              height={122}
              className="object-contain h-[122px] w-[111px]"
            />
            <Divider
              orientation="vertical"
              className="!bg-[#A1A1A1] !w-[1px] !h-[113px] lg:!block hidden"
            />
            <div className="w-full col-span-3 lg:hidden block">
              <Divider
                orientation="horizontal"
                className="!bg-[#A1A1A1] !w-full !h-[1px] lg:!hidden !block"
              />
            </div>
            <Image
              src={"/images/insurances/ab-fazelab.png"}
              alt=""
              width={111}
              height={122}
              className="object-contain h-[122px] w-[111px]"
            />
            <Divider
              orientation="vertical"
              className="!bg-[#A1A1A1] !w-[1px] !h-[113px] lg:!block hidden"
            />
            <Image
              src={"/images/insurances/sanaye-mes.png"}
              alt=""
              width={111}
              height={122}
              className="object-contain h-[122px] w-[111px]"
            />
            <Divider
              orientation="vertical"
              className="!bg-[#A1A1A1] !w-[1px] !h-[113px] lg:!block hidden"
            />
            <Image
              src={"/images/insurances/mina.png"}
              alt=""
              width={111}
              height={122}
              className="object-contain h-[122px] w-[111px]"
            />
          </div>
        </div>
      </div>
    </div> */
