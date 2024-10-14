"use client";
import React, { useEffect } from "react";
import Banner from "./Banner";
import PartnerFeatures from "./PartnerFeatures";
import EasySteps from "./EasySteps";
import EasyStepsMobile from "./EasyStepsMobile";
import IbForm from "./IbForm";
import Rewards from "./Rewards";
import RewardsSlider from "./RewardsSlider";
import ClientSatisfaction from "./ClientSatisfaction";

const IbPage = () => {
  useEffect(() => {
    const handleScrollToHash = () => {
      if (window.location.hash) {
        const target = document.querySelector(window.location.hash);
        if (target) {
          target.scrollIntoView({ behavior: "smooth" });
        }
      }
    };
    handleScrollToHash();
    window.addEventListener("hashchange", handleScrollToHash);
    return () => {
      window.removeEventListener("hashchange", handleScrollToHash);
    };
  }, []);

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

export default IbPage;
