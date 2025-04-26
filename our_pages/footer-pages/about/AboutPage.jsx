import Recognition from "@/components/common/Recognition";
import AboutBanner from "@/components/footer-pages/about/AboutBanner";
import CEOMessage from "@/components/footer-pages/about/CEOMessage";
import Mission from "@/components/footer-pages/about/Mission";
import Values from "@/components/footer-pages/about/Values";
import React from "react";

const AboutPage = () => {
  return (
    <>
      <AboutBanner />
      <Mission />
      <CEOMessage />
      <Values />
      <Recognition />
    </>
  );
};

export default AboutPage;
