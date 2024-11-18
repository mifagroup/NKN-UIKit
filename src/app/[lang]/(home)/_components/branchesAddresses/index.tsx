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
          <div className="pt-[71px] pb-[74px] border-l border-secondary-500 flex items-center gap-x-[23px]">
            <Image
              src={branches[0].image}
              alt={branches[0].title}
              width={107}
              height={90}
            />
            <div className="flex flex-col">
              <Typography className="!text-base !font-extrabold !leading-[27px] !text-secondary-700">
                {branches[0]?.title}
              </Typography>
              <Typography className="!text-[12px] !font-extralight !leading-[27px] !text-secondary-700">
                {branches[0]?.address}
              </Typography>
              <Typography className="!text-base !font-semibold !leading-[27px] !text-secondary-700">
                {branches[0]?.phone_number}
              </Typography>
            </div>
          </div>
          <div className="pt-[66px] pb-[74px] flex items-center gap-x-[26px] pr-[70px]">
            <Image
              src={branches[1].image}
              alt={branches[1].title}
              width={91}
              height={105}
            />
            <div className="flex flex-col">
              <Typography className="!text-base !font-extrabold !leading-[27px] !text-secondary-700">
                {branches[1]?.title}
              </Typography>
              <Typography className="!text-[12px] !font-extralight !leading-[27px] !text-secondary-700">
                {branches[1]?.address}
              </Typography>
              <Typography className="!text-base !font-semibold !leading-[27px] !text-secondary-700">
                {branches[1]?.phone_number}
              </Typography>
            </div>
          </div>
        </div>
      </div>
      <div className="container grid grid-cols-2 max-w-[1092px]">
        <div className="pt-[50px] pb-[69px] border-l border-secondary-500 flex items-center gap-x-[23px]">
          <Image
            src={branches[2].image}
            alt={branches[2].title}
            width={99}
            height={116}
          />
          <div className="flex flex-col">
            <Typography className="!text-base !font-extrabold !leading-[27px] !text-secondary-700">
              {branches[2]?.title}
            </Typography>
            <Typography className="!text-[12px] !font-extralight !leading-[27px] !text-secondary-700">
              {branches[2]?.address}
            </Typography>
            <Typography className="!text-base !font-semibold !leading-[27px] !text-secondary-700">
              {branches[2]?.phone_number}
            </Typography>
          </div>
        </div>
        <div className="pt-[64px] pb-[74px] pr-[55px] flex items-center gap-x-[16px]">
          <Image
            src={branches[3].image}
            alt={branches[3].title}
            width={116}
            height={97}
          />
          <div className="flex flex-col">
            <Typography className="!text-base !font-extrabold !leading-[27px] !text-secondary-700">
              {branches[3]?.title}
            </Typography>
            <Typography className="!text-[12px] !font-extralight !leading-[27px] !text-secondary-700">
              {branches[3]?.address}
            </Typography>
            <Typography className="!text-base !font-semibold !leading-[27px] !text-secondary-700">
              {branches[3]?.phone_number}
            </Typography>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BranchesAddresses;
