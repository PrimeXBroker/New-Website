"use client";
import LocationContextProvider from "@/context/location-context";
import AcademyForm from "@/our_pages/education/academy/AcademyForm";
import Banner from "@/our_pages/education/academy/Banner";
import Featured from "@/our_pages/education/academy/Featured";
import JoinAcademy from "@/our_pages/education/academy/JoinAcademy";
import PrivateSessions from "@/our_pages/education/academy/PrivateSessions";
import SuccessStories from "@/our_pages/education/academy/SuccessStories";
import WebinarLibrary from "@/our_pages/education/academy/WebinarLibrary";
import { useTranslations } from "next-intl";
import React from "react";

const Academy = () => {
  const t = useTranslations("academy.featured");

  const cardsData = [
    {
      title: t("card_1_title"),
      description: t("card_1_desc"),
      imgUrl: "/images/education/academy/icon1.svg",
      imgHoverUrl: "/images/education/academy/icon1_hover.svg",
    },
    {
      title: t("card_2_title"),
      description: t("card_2_desc"),
      imgUrl: "/images/education/academy/icon2.svg",
      imgHoverUrl: "/images/education/academy/icon2_hover.svg",
    },
    {
      title: t("card_3_title"),
      description: t("card_3_desc"),
      imgUrl: "/images/education/academy/icon3.svg",
      imgHoverUrl: "/images/education/academy/icon3_hover.svg",
    },
    {
      title: t("card_4_title"),
      description: t("card_4_desc"),
      imgUrl: "/images/education/academy/icon4.svg",
      imgHoverUrl: "/images/education/academy/icon4_hover.svg",
    },
  ];

  return (
    <>
    <LocationContextProvider>
      <Banner />
      <Featured cardsData={cardsData} />
      <AcademyForm/>
      <PrivateSessions />
      <JoinAcademy />
      <WebinarLibrary />
      <SuccessStories />
      </LocationContextProvider>
    </>
  );
};

export default Academy;
