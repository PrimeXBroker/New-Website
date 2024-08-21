"use client";
import Banner from "@/components/ib-program/Banner";
import BecomeIb from "@/components/ib-program/BecomeIb";
import IbForm from "@/components/ib-program/IbForm";
import Partnership from "@/components/ib-program/Partnership";
import RewardCards from "@/components/ib-program/RewardCards";
import Rewards from "@/components/ib-program/Rewards";
import SatisfactionTabs from "@/components/ib-program/SatisfactionTabs";
import Steps from "@/components/ib-program/Steps";
import React, { useEffect } from "react";

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
      <Partnership />
      <Steps />
      <IbForm />
      <Rewards />
      <RewardCards />
      <SatisfactionTabs />
      {/* <BecomeIb /> */}
    </>
  );
};

export default IbPage;
