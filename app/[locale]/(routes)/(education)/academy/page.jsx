"use client";
import LocationContextProvider from "@/context/location-context";
import AcademyForm from "@/our_pages/education/academy/AcademyForm";
import Banner from "@/our_pages/education/academy/Banner";
import Featured from "@/our_pages/education/academy/Featured";
import JoinAcademy from "@/our_pages/education/academy/JoinAcademy";
import PrivateSessions from "@/our_pages/education/academy/PrivateSessions";
import SuccessStories from "@/our_pages/education/academy/SuccessStories";
import WebinarLibrary from "@/our_pages/education/academy/WebinarLibrary";
import React, { useState } from "react";
import FormWrapper from "@/our_pages/education/academy/FromWarapper";
import Webinars from "@/our_pages/education/academy/Webinars";

const Academy = () => {
  const [active, setActive] = useState("Webinars");

  return (
    <>
      <LocationContextProvider>
        <Banner setActive={setActive} />
        <Featured />
        <Webinars active={active} setActive={setActive} />
        {/* <FormWrapper active={active} setActive={setActive} /> */}
        {/* <AcademyForm/> */}
        <PrivateSessions setActive={setActive} />
        <JoinAcademy setActive={setActive} />
        <WebinarLibrary />
        <SuccessStories />
      </LocationContextProvider>
    </>
  );
};

export default Academy;
