"use client";
import { useGetDictionary } from "@/utils/useGetClientDictionary";
import React from "react";

const LangSwicher = () => {
  const dictionary = useGetDictionary();

  return (
    <button className="text-[#9A9A9A] bg-[#19313F] rounded-[8px] font-semibold text-[15px] w-[62px] h-[43px]">
      {dictionary?.keywords.eng}
    </button>
  );
};

export default LangSwicher;
