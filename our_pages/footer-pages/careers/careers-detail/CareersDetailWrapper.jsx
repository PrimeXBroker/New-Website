"use client";
import React, { useEffect } from "react";
import CareersDetail from "./CareersDetail";
import { useLocale } from "next-intl";
import { useRouter } from "next/navigation";

const CareersDetailWrapper = ({ id }) => {
  const locale = useLocale();
  const router = useRouter();

  // useEffect(() => {
  //   if (locale !== "en") {
  //     router.push(`/${locale}`);
  //   }
  // }, [locale, router]);

  return (
    <>
      <CareersDetail id={id} />
    </>
  );
};

export default CareersDetailWrapper;
