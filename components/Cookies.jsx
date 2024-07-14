"use client";
import LocationContextProvider from "@/context/location-context";
import CookieBanner from "./CookiesBanner";

const Cookies = () => {
  return (
    <LocationContextProvider>
      <CookieBanner />
    </LocationContextProvider>
  );
};

export default Cookies;
