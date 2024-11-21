import { getDictionary } from "@/utils/getServerDictionary";
import { Typography } from "@mui/material";
import Image from "next/image";
import React from "react";

const BranchesAddresses = ({
  dictionary,
}: {
  dictionary: Awaited<ReturnType<typeof getDictionary>>;
}) => {
  const branchesTranslate = dictionary.branches_addresses;

  const branches = [
    {
      id: 1,
      title: branchesTranslate.num1.title,
      address: branchesTranslate.num1.address,
      phone_number: branchesTranslate.num1.phone_number,
      image: "/images/nikan-aghdasieh-icon.png",
    },
    {
      id: 2,
      title: branchesTranslate.num2.title,
      address: branchesTranslate.num2.address,
      phone_number: branchesTranslate.num2.phone_number,
      image: "/images/nikan-west-icon.png",
    },
    {
      id: 3,
      title: branchesTranslate.num3.title,
      address: branchesTranslate.num3.address,
      phone_number: branchesTranslate.num3.phone_number,
      image: "/images/nikan-hakimieh.png",
    },
    {
      id: 4,
      title: branchesTranslate.num4.title,
      address: branchesTranslate.num4.address,
      phone_number: branchesTranslate.num4.phone_number,
      image: "/images/nikan-second-branch.png",
    },
  ];

  return (
    <div className="flex flex-col bg-secondary-100">
      <div className="border-b border-secondary-500">
        <div className="container grid grid-cols-2 max-w-[1092px]">
          <div className="lg:pt-[71px] lg:pb-[74px] pt-[60px] pb-[30px] border-l border-secondary-500 flex lg:flex-row flex-col gap-y-2 items-center gap-x-[23px]">
            <Image
              src={branches[0].image}
              alt={branches[0].title}
              width={107}
              height={90}
            />
            <div className="flex flex-col">
              <Typography className="lg:!text-base !text-[12px] !font-extrabold !leading-[27px] !text-secondary-700">
                {branches[0]?.title}
              </Typography>
              <Typography className="!text-[12px] !font-extralight !leading-[27px] !text-secondary-700 lg:block hidden">
                {branches[0]?.address}
              </Typography>
              <Typography className="!text-base !font-semibold !leading-[27px] !text-secondary-700 lg:block hidden">
                {branches[0]?.phone_number}
              </Typography>
            </div>
          </div>
          <div className="lg:pt-[66px] lg:pb-[74px] pt-[38px] flex lg:flex-row flex-col lg:gap-y-2 items-center gap-x-[26px] lg:pr-[70px]">
            <Image
              src={branches[1].image}
              alt={branches[1].title}
              width={91}
              height={105}
              className="lg:w-[91px] w-[103px] lg:h-[105px] h-[119px]"
            />
            <div className="flex flex-col">
              <Typography className="lg:!text-base !text-[12px] !font-extrabold !leading-[27px] !text-secondary-700">
                {branches[1]?.title}
              </Typography>
              <Typography className="!text-[12px] !font-extralight !leading-[27px] !text-secondary-700 lg:block hidden">
                {branches[1]?.address}
              </Typography>
              <Typography className="!text-base !font-semibold !leading-[27px] !text-secondary-700 lg:block hidden">
                {branches[1]?.phone_number}
              </Typography>
            </div>
          </div>
        </div>
      </div>
      <div className="container grid grid-cols-2 max-w-[1092px]">
        <div className="lg:pt-[50px] pt-[48px] lg:pb-[69px] pb-[46px] border-l border-secondary-500 flex lg:flex-row flex-col gap-y-2 items-center gap-x-[23px]">
          <Image
            src={branches[2].image}
            alt={branches[2].title}
            width={99}
            height={116}
            className="lg:w-[99px] w-[90px] lg:h-[116px] h-[105px]"
          />
          <div className="flex flex-col">
            <Typography className="lg:!text-base !text-[12px] !font-extrabold !leading-[27px] !text-secondary-700">
              {branches[2]?.title}
            </Typography>
            <Typography className="!text-[12px] !font-extralight !leading-[27px] !text-secondary-700 lg:block hidden">
              {branches[2]?.address}
            </Typography>
            <Typography className="!text-base !font-semibold !leading-[27px] !text-secondary-700 lg:block hidden">
              {branches[2]?.phone_number}
            </Typography>
          </div>
        </div>
        <div className="lg:pt-[64px] pt-[55px] lg:pb-[74px] pb-[46px] lg:pr-[55px] flex lg:flex-row flex-col lg:gap-y-2 gap-y-3.5 items-center gap-x-[16px]">
          <Image
            src={branches[3].image}
            alt={branches[3].title}
            width={116}
            height={97}
            className="lg:w-[116px] w-[110px] lg:h-[97px] h-[92px]"
          />
          <div className="flex flex-col">
            <Typography className="lg:!text-base !text-[12px] !font-extrabold !leading-[27px] !text-secondary-700">
              {branches[3]?.title}
            </Typography>
            <Typography className="!text-[12px] !font-extralight !leading-[27px] !text-secondary-700 lg:block hidden">
              {branches[3]?.address}
            </Typography>
            <Typography className="!text-base !font-semibold !leading-[27px] !text-secondary-700 lg:block hidden">
              {branches[3]?.phone_number}
            </Typography>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BranchesAddresses;
