"use client";

import Banner from "@/our_pages/careers/Banner";
import CareerForm from "@/our_pages/careers/CareerForm";
import LocationContextProvider from "@/context/location-context";
import React from "react";

const page = () => {
  return (
    <>
      <LocationContextProvider>
        <Banner />
        <CareerForm />
      </LocationContextProvider>
    </>
  );
};

export default page;
