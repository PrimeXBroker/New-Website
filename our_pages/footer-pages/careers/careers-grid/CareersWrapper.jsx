"use client";
import React, { useEffect } from "react";
import Banner from "./Banner";
import DrivingSuccess from "./DrivingSuccess";
import OpenPosition from "./OpenPosition";
import { useLocale } from "next-intl";
import { useRouter } from "next/navigation";

const CareersWrapper = () => {
  const locale = useLocale();
  const router = useRouter();

  // useEffect(() => {
  //   if (locale !== "en") {
  //     router.push(`/${locale}`);
  //   }
  // }, [locale, router]);

  return (
    <>
      <>
        <Banner />
        <DrivingSuccess />
        <OpenPosition />
      </>
    </>
  );
};

export default CareersWrapper;
