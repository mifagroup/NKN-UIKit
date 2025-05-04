import Image from "next/image";

const Directors = () => {
  return (
    <div className="lg:pt-[146px] pt-[100px] lg:pb-[142px] pb-[30px] max-w-[1091px] container">
      <div className="flex flex-col lg:gap-y-10 gap-y-6 lg:px-0 px-5">
        <p className="text-[24px] w-full font-black text-[#626262]  text-center">
          هیئت مدیره گروه درمانی نیکان
        </p>
        <div className="sm:flex grid grid-cols-2 items-center justify-center flex-wrap justify-items-center gap-[22px]">
          {[...Array(10)].map((_, index) => (
            <div className="flex flex-col w-[163px] gap-y-[25px]" key={index}>
              <Image
                src={`/images/director-${index + 1}.png`}
                alt="director"
                width={163}
                height={272}
                className="border-b-[4px] border-primary-main"
              />
              <div className="flex flex-col gap-y-1">
                <span className="text-[14px] font-black text-[#626262] text-center">
                  دکتر سیروس تابش{" "}
                </span>
                <span className="text-[14px] font-extralight text-[#626262] text-center">
                  مدیر عامل هولدینگ
                </span>
              </div>
            </div>
          ))}
          {/*    <div className="col-span-2 max-h-[276px] items-center justify-center bg-primary-main text-white text-[14px] font-black lg:flex hidden">
            آشنایی با تمام مدیران نیکان
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Directors;
