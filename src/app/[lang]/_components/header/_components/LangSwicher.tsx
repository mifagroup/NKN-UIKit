"use client";
import { useGetDictionary } from "@/utils/useGetClientDictionary";
import { Button } from "@mui/material";
import React from "react";

const LangSwicher = () => {
  const dictionary = useGetDictionary();

  const keywords = dictionary?.keywords;

  return (
    <Button className="!min-w-fit !bg-primary-300 !text-secondary-600 lg:!rounded-[8px] !rounded-[5px] lg:!text-[20px] !text-[10px] !font-semibold lg:!h-[43px] !h-[25px] lg:!w-[62px] !w-[36px]">
      {keywords?.eng}
    </Button>
  );
};

export default LangSwicher;
