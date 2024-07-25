import Banner from "@/our_pages/ib_program/Banner";
import BecomeIb from "@/our_pages/ib_program/BecomeIb";
import IbForm from "@/our_pages/ib_program/IbForm";
import Partnership from "@/our_pages/ib_program/Partnership";
import RewardCards from "@/our_pages/ib_program/RewardCards";
import Rewards from "@/our_pages/ib_program/Rewards";
import SatisfactionTabs from "@/our_pages/ib_program/SatisfactionTabs";
import Steps from "@/our_pages/ib_program/Steps";
import React from "react";

const page = () => {
  return (
    <>
      <Banner />
      <Partnership />
      <Steps />
      <IbForm />
      <Rewards />
      <RewardCards />
      <SatisfactionTabs />
      <BecomeIb />
    </>
  );
};

export default page;
