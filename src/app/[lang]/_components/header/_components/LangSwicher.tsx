"use client";
import { useGetDictionary } from "@/utils/useGetClientDictionary";
import { Button } from "@mui/material";
import React from "react";

const LangSwicher = () => {
  const dictionary = useGetDictionary();

  const keywords = dictionary?.keywords;

  return (
    <Button className="!min-w-fit !bg-primary-300 !text-secondary-600 !rounded-[8px] !text-[20px] !font-semibold !h-[43px] !w-[62px]">
      {keywords?.eng}
    </Button>
  );
};

export default LangSwicher;
