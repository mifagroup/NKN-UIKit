import React from "react";
import {
  Connect,
  HealthServices,
  Hero,
  OnlineReservation,
  OpticServices,
  OtherServices,
  Services,
  Stats,
} from "./components";
import "./styles.css";
import { BranchesAddresses } from "@/app/(home)/_components";
const page = async () => {
  return (
    <div>
      <Hero />
      <OnlineReservation />
      <Services />
      <Stats />
      <OpticServices />
      <HealthServices />
      <OtherServices />
      <Connect />
      <BranchesAddresses />
    </div>
  );
};

export default page;
