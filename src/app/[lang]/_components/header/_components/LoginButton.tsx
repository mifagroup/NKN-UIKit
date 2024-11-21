"use client";
import { useGetDictionary } from "@/utils/useGetClientDictionary";
import { Button } from "@mui/material";
import React from "react";

const LoginButton = () => {
  const dictionary = useGetDictionary();

  const keywordsTranslate = dictionary?.keywords;
  return (
    <Button className="!bg-secondary-300 !text-secondary-600 lg:!w-[146px] !w-[85px] lg:!h-[43px] !h-[25] lg:!rounded-[8px] !rounded-[5px] lg:!text-[20px] !text-[10px] !font-semibold">
      {keywordsTranslate?.login_and_register}
    </Button>
  );
};

export default LoginButton;
