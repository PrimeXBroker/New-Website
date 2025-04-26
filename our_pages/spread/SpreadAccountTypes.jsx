"use client";
import React from "react";
import { useLocale, useTranslations } from "next-intl";
import SpreadAccountsDesktopTable from "./SpreadAccountsDesktopTable";

const AccountTypes = () => {
  const t = useTranslations("spreadPage.accountTypes");

  return (
    <section className="bg-p dark:bg-p-dark text-tm dark:text-tm-dark pt-16 sm:pt-28 px-4">
      <div className="container pb-12">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-pcp dark:text-pcp-dark text-center mb-2">
          {t("title1")}
        </h2>
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-tm dark:text-tm-dark text-center mb-0">
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
