"use client";
import React, { useEffect, useState } from "react";
import { useTranslations } from "next-intl";
import { useLocale } from "next-intl";
import Webinars from "@/our_pages/education/academy/Webinars";
import PrivateSessions from "@/our_pages/education/academy/PrivateSessions";
import Banner from "./Banner";
import { useSearchParams } from "next/navigation";

const WebinarsWrapper = () => {
  const t = useTranslations("academy.joinAcademy");
  const searchParams = useSearchParams();
  const tabParam = searchParams.get("tab");
  const [active, setActive] = useState("Webinars");
  const locale = useLocale();

  useEffect(() => {
    if (tabParam === "session") {
      setActive("Session");
      const section = document.getElementById("academy-form");
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [tabParam]);

  return (
    <>
      <Banner setActive={setActive} />
      {(locale === "en" || locale === "ar") && (
        <>
          <Webinars active={active} setActive={setActive} />
          <PrivateSessions setActive={setActive} />
        </>
      )}
    </>
  );
};

export default WebinarsWrapper;
