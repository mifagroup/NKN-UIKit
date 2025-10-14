import React from "react";
import InsurancesContent from "./components/InsurancesContent";
import { BranchesAddresses } from "../(home)/_components";

const page = () => {
  return (
    <div>
      <InsurancesContent />
      <BranchesAddresses />
    </div>
  );
};

export default page;
