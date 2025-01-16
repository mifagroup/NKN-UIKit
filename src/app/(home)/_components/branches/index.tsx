import { components } from "@/lib/api/v1";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Branches = ({
  hospitals,
}: {
  hospitals: components["schemas"]["HospitalResource"][];
}) => {
  return (
    <div className="lg:max-h-[630px] grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1">
      {hospitals?.map((hospital) => (
        <Link className="relative" href={""} key={hospital.id}>
          <div
            className="absolute w-full h-full opacity-50"
            style={{
              background: "linear-gradient(180deg, #A0A0A0 29%, #0D0D0D 87%)",
            }}
          />
          <Image
            src={
              hospital?.image?.original_url ?? "/images/aghdasieh-branch.png"
            }
            alt={hospital.name}
            width={1000}
            height={630}
            quality={100}
            className="object-cover lg:h-[630px] h-full"
          />
          <div className="absolute bottom-[66px] w-full flex flex-col">
            <Image
              src={
                hospital?.main_thumbnail?.original_url ??
                "/images/aghdasieh-branch-name-and-icon.png"
              }
              alt="icon"
              width={316}
              height={160}
              className="px-[34px] w-full h-[160px]"
            />
            <span className="text-white xl:text-[24px] text-[20px] px-[34px]">
              {hospital.name}
            </span>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Branches;
