import Banner from "@/our_pages/education/academy/Banner";
import Featured from "@/our_pages/education/academy/Featured";
import JoinAcademy from "@/our_pages/education/academy/JoinAcademy";
import PrivateSessions from "@/our_pages/education/academy/PrivateSessions";
import SuccessStories from "@/our_pages/education/academy/SuccessStories";
import WebinarLibrary from "@/our_pages/education/academy/WebinarLibrary";
import React from "react";

const cardsData = [
  {
    title: "Fundamental Analysis",
    description: "Rose Shaweesh",
    imgUrl: "/images/education/academy/icon1.svg",
    imgHoverUrl: "/images/education/academy/icon1_hover.svg",
  },
  {
    title: "Technical Analysis",
    description: "Ahmed Alsajadi",
    imgUrl: "/images/education/academy/icon2.svg",
    imgHoverUrl: "/images/education/academy/icon2_hover.svg",
  },
  {
    title: "Market News",
    description: "Our Experts",
    imgUrl: "/images/education/academy/icon3.svg",
    imgHoverUrl: "/images/education/academy/icon3_hover.svg",
  },
  {
    title: "Starting Gateway",
    description: "Hafsa Munir",
    imgUrl: "/images/education/academy/icon4.svg",
    imgHoverUrl: "/images/education/academy/icon4_hover.svg",
  },
];
const Academy = () => {
  return (
    <>
      <Banner />
      <Featured cardsData={cardsData}/>
      <PrivateSessions />
      <JoinAcademy/>
      <WebinarLibrary/>
      <SuccessStories />
    </>
  );
};

export default Academy;
