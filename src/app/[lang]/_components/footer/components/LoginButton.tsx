"use client";
import { useGetDictionary } from "@/utils/useGetClientDictionary";
import React from "react";

const LoginButton = () => {
  const dictionary = useGetDictionary();

  return (
    <button className="text-[#9A9A9A] font-semibold bg-[#19313F] rounded-[8px] w-[182px] h-[43px]">
      {dictionary?.keywords.login_and_register}
    </button>
  );
};

export default LoginButton;
