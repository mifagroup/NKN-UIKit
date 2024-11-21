import Image from "next/image";
import React from "react";

const Branches = () => {
  return (
    <div className="lg:max-h-[630px] grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1">
      <Image
        src={"/images/aghdasieh-branch.png"}
        alt="aghdasieh-branch"
        width={600}
        height={630}
        quality={100}
        className="object-cover lg:h-[630px] h-full"
      />
      <Image
        src={"/images/hakimieh-branch.png"}
        alt="aghdasieh-branch"
        width={600}
        height={630}
        quality={100}
        className="object-cover lg:h-[630px] h-full"
      />
      <Image
        src={"/images/second-branch.png"}
        alt="aghdasieh-branch"
        width={600}
        height={630}
        quality={100}
        className="object-cover lg:h-[630px] h-full"
      />
      <Image
        src={"/images/aghdasieh-west-branch.png"}
        alt="aghdasieh-branch"
        width={600}
        height={630}
        quality={100}
        className="object-cover lg:h-[630px] h-full"
      />
    </div>
  );
};

export default Branches;
