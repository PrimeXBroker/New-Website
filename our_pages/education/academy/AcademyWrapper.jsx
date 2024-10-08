"use client";
import LocationContextProvider from "@/context/location-context";
import React, { useState } from "react";
import Banner from "./Banner";
import Featured from "./Featured";
import Webinars from "./Webinars";
import PrivateSessions from "./PrivateSessions";
import JoinAcademy from "./JoinAcademy";
import WebinarLibrary from "./WebinarLibrary";
import SuccessStories from "./SuccessStories";
import { useLocale } from "next-intl";

const AcademyWrapper = () => {
  const [active, setActive] = useState("Webinars");
  const locale = useLocale();

  return (
    <LocationContextProvider>
      <Banner setActive={setActive} />
      {(locale === "en" || locale === "ar") && (
        <>
          <Featured />
          <Webinars active={active} setActive={setActive} />
          {/* <FormWrapper active={active} setActive={setActive} /> */}
          {/* <AcademyForm/> */}
          <PrivateSessions setActive={setActive} />
        </>
      )}
      <JoinAcademy setActive={setActive} />
      <WebinarLibrary />
      <SuccessStories />
    </LocationContextProvider>
  );
};

export default AcademyWrapper;
