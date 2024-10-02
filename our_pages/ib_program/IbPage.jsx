"use client";
import React, { useEffect } from "react";
import Banner from "../ib/Banner";
import PartnerFeatures from "../ib/PartnerFeatures";
import EasySteps from "../ib/EasySteps";
import EasyStepsMobile from "../ib/EasyStepsMobile";
import IbForm from "../ib/IbForm";
import Rewards from "../ib/Rewards";
import RewardsSlider from "../ib/RewardsSlider";
import ClientSatisfaction from "../ib/ClientSatisfaction";

const IbPage = () => {
  useEffect(() => {
    const handleScrollToHash = () => {
      if (window.location.hash) {
        const target = document.querySelector(window.location.hash);
        if (target) {
          // setTimeout(() => {
          target.scrollIntoView({ behavior: "smooth" });
          // }, 2000); // 2-second delay
        }
      }
    };

    // Call the function immediately after the component mounts
    handleScrollToHash();

    // Optional: Re-run when the hash changes
    window.addEventListener("hashchange", handleScrollToHash);

    // Clean up the event listener when the component unmounts
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
