// "use client"
import Banner from "@/our_pages/ib/Banner";
import React from "react";
import { useLocale, useTranslations } from "next-intl";

const page = () => {
  const locale = useLocale();
  console.log(locale, "hell");
  const t = useTranslations("ib");

  return (
    <>
      {t("header.title")}
      {/* <Banner /> */}
    </>
  );
};

export default page;
