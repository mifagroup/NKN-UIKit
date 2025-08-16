import Image from "next/image";

const virtualSlider = () => {
  return (
    <div className="max-w-[1236px] container lg:mb-[150px]">
      <Image
        src={"/images/virtual_slider.png"}
        alt=""
        width={1209}
        height={234}
        quality={100}
        className="mt-10 lg:mb-24 mb-10 object-cover md:block hidden"
      />{" "}
      <Image
        src={"/images/virtual_slider_mobile.png"}
        alt=""
        width={357}
        height={269}
        quality={100}
        className="mt-10 mb-10 object-cover !relative block md:hidden mx-auto"
      />
    </div>
  );
};

export default virtualSlider;
