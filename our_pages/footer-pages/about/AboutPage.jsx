import AboutBanner from "@/components/footer-pages/about/AboutBanner";
import GlobalMap from "@/components/footer-pages/about/GlobalMap";
import Mission from "@/components/footer-pages/about/Mission";
import Values from "@/components/footer-pages/about/Values";
// import MobileRecognition from "@/our_pages/home/MobileRecognition";
// import Recognition from "@/our_pages/home/Recognition";
import React from "react";

const AboutPage = () => {
  return (
    <>
      <AboutBanner />
      <Mission />
      <GlobalMap />
      <Values />
      {/* <div className="lg:block hidden pb-5 sm:pb-20 bg-[#000000]">
        <Recognition />
      </div>
      <div className="lg:hidden block">
        <MobileRecognition />
      </div> */}
    </>
  );
};

export default AboutPage;
