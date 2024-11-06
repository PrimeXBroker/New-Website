import AwardsTimeline from "@/our_pages/footer-pages/awards/AwardsTimeline";
import AwardsTimelineMobile from "@/our_pages/footer-pages/awards/AwardsTimelineMobile";
import Banner from "@/our_pages/footer-pages/awards/Banner";
import React from "react";

const AwardsPage = () => {
  return (
    <>
      <Banner />
      <div className="hidden md:block">
        <AwardsTimeline />
      </div>
      <div className="block md:hidden">
        <AwardsTimelineMobile />
      </div>
    </>
  );
};
export default AwardsPage;
