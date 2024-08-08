import Banner from "@/components/ib-program/Banner";
import BecomeIb from "@/components/ib-program/BecomeIb";
import IbForm from "@/components/ib-program/IbForm";
import Partnership from "@/components/ib-program/Partnership";
import RewardCards from "@/components/ib-program/RewardCards";
import Rewards from "@/components/ib-program/Rewards";
import SatisfactionTabs from "@/components/ib-program/SatisfactionTabs";
import Steps from "@/components/ib-program/Steps";
import React from "react";

const IbPage = () => {
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

export default IbPage;
