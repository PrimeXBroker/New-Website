import Banner from "@/our_pages/bonus/Banner";
import BonusForm from "@/our_pages/bonus/BonusForm";
import MaximizeProfit from "@/our_pages/bonus/MaximizeProfit";
import PremiumAdvantages from "@/our_pages/bonus/PremiumAdvantages";
import PromotionApplicable from "@/our_pages/bonus/PromotionApplicable";
import Steps from "@/our_pages/bonus/Steps";
import StepsMobile from "@/our_pages/bonus/StepsMobile";
import TermsCondition from "@/our_pages/bonus/TermsCondition";
import React from "react";

const page = () => {
  return (
    <>
      <Banner />
      <Steps />
      <StepsMobile />
      <PromotionApplicable />
      <PremiumAdvantages />
      <BonusForm />
      <MaximizeProfit />
      <TermsCondition />
    </>
  );
};

export default page;
