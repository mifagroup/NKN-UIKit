import Image from "next/image";
import React from "react";

const Branches = () => {
  return (
    <div className="max-h-[630px] flex">
      <Image
        src={"/images/aghdasieh-branch.png"}
        alt="aghdasieh-branch"
        width={600}
        height={630}
        quality={100}
        className="object-cover"
      />
      <Image
        src={"/images/hakimieh-branch.png"}
        alt="aghdasieh-branch"
        width={600}
        height={630}
        quality={100}
        className="object-cover"
      />
      <Image
        src={"/images/second-branch.png"}
        alt="aghdasieh-branch"
        width={600}
        height={630}
        quality={100}
        className="object-cover"
      />
      <Image
        src={"/images/aghdasieh-west-branch.png"}
        alt="aghdasieh-branch"
        width={600}
        height={630}
        quality={100}
        className="object-cover"
      />
    </div>
  );
};

export default Branches;
