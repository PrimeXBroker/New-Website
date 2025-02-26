import React from "react";
import Banner from "./Banner";
import Countdown from "./Countdown";
import ExclusivePrizes from "./ExclusivePrizes";
import WinnersAnnounced from "./WinnersAnnounced";
import TermsCondition from "./TermsCondition";
import ParticipateDraw from "./ParticipateDraw";

const RamadanOfferWrappper = () => {
  return (
    <>
      <Banner />
      <Countdown />
      <ExclusivePrizes />
      <ParticipateDraw />
      <WinnersAnnounced />
      <TermsCondition />
    </>
  );
};

export default RamadanOfferWrappper;
