"use client";
import React from "react";
import { useLocale, useTranslations } from "next-intl";
import SpreadAccountsDesktopTable from "./SpreadAccountsDesktopTable";

const AccountTypes = () => {
  const t = useTranslations("spreadPage.accountTypes");

  return (
    <section className="bg-black text-white pt-16 m:pt-28 pb-8 px-4">
      <div className="container pb-7">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-[#FED100] text-center mb-2">
          {t("title1")}
        </h2>
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-[#ffffff] text-center mb-0">
          {t("title2")}
        </h2>
      </div>
      <div className="hidden lg:block">
        <SpreadAccountsDesktopTable />
      </div>
    </section>
  );
};

export default AccountTypes;
