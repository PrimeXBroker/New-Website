"use client";
import React, { useState } from "react";
import { useTranslations } from "next-intl";
import { useLocale } from "next-intl";
import Webinars from "@/our_pages/education/academy/Webinars";
import PrivateSessions from "@/our_pages/education/academy/PrivateSessions";
import Banner from "./Banner";

const WebinarsWrapper = () => {
  const t = useTranslations("academy.joinAcademy");
  const [active, setActive] = useState("Webinars");
  const locale = useLocale();

  return (
    <>
      <Banner setActive={setActive} />
      {(locale === "en" || locale === "ar" || locale === "ku") && (
        <>
          <Webinars active={active} setActive={setActive} />
          <PrivateSessions setActive={setActive} />
        </>
      )}
    </>
  );
};

export default WebinarsWrapper;
