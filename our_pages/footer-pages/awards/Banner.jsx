import React from "react";
import Banner from "@/components/Banner";

const AwardsBanner = () => {
  return (
    <>
      <Banner
        background="bg-accent"
        title="We Are, Where Excellence Is Recognized!"
        description="Explore our award-winning achievements that set us apart as a leading forex brokerage house"
        imgUrl="https://primexcapital.s3.eu-north-1.amazonaws.com/website/footer-pages/awards/Banner.webp"
        imgWidth="150"
        imgHeight="300"
        titleColor="text-secondary"
        descriptionColor="text-secondary"
      />
    </>
  );
};

export default AwardsBanner;
