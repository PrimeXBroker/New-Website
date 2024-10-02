import Banner from "@/our_pages/ib/Banner";
import ClientSatisfaction from "@/our_pages/ib/ClientSatisfaction";
import EasySteps from "@/our_pages/ib/EasySteps";
import EasyStepsMobile from "@/our_pages/ib/EasyStepsMobile";
import IbForm from "@/our_pages/ib/IbForm";
import PartnerFeatures from "@/our_pages/ib/PartnerFeatures";
import Rewards from "@/our_pages/ib/Rewards";
import RewardsSlider from "@/our_pages/ib/RewardsSlider";
import React from "react";

const page = () => {
  return (
    <>
      <Banner />
      <PartnerFeatures />
      <div className="sm:block hidden">
        <EasySteps />
      </div>
      <div className="sm:hidden block">
        <EasyStepsMobile />
      </div>
      <IbForm />
      <div className="lg:block hidden">
        <Rewards />
      </div>
      <div className="lg:hidden block">
        <RewardsSlider />
      </div>
      <ClientSatisfaction />
    </>
  );
};

export default page;
