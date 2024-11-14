"use client";
import { useGetDictionary } from "@/utils/useGetClientDictionary";
import { Button } from "@mui/material";
import React from "react";

const LoginButton = () => {
  const dictionary = useGetDictionary();

  const keywordsTranslate = dictionary?.keywords;
  return (
    <Button className="!bg-secondary-300 !text-secondary-600 !w-[146px] !h-[43px] !rounded-[8px] !text-[20px] !font-semibold">
      {keywordsTranslate?.login_and_register}
    </Button>
  );
};

export default LoginButton;
