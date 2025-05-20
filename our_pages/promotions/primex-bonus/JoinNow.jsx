"use client";
import CustomYellowButton from "@/components/common/CustomYellowButton";
import { getRegisterUrl } from "@/utilities/getRegisterUrl";
import { useLocale, useTranslations } from "next-intl";
import React from "react";

const JoinNow = () => {
  const locale = useLocale();
  const t = useTranslations("bonusPage.bonusJoinNow");

  return (
    <section className="bg-p dark:bg-p-dark py-16 sm:py-28">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-tm dark:text-tm-dark">
          {t("title1")}
        </h2>
        <p className="text-xl sm:text-2xl font-semibold text-pcp dark:text-pcp-dark mt-4 mb-10">
          {t("subtitle")}
        </p>
        <div className="text-center">
          <CustomYellowButton
            title={t("btnTxt")}
            onClick={() => window.open(getRegisterUrl(locale))}
            className="sm:px-12 py-4 text-lg w-full sm:w-auto mx-auto justify-between sm:justify-center"
          />
        </div>
      </div>
    </section>
  );
};

export default JoinNow;
