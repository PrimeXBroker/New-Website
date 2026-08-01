"use client";
import CustomYellowButton from "@/components/common/CustomYellowButton";
import { getRegisterUrl } from "@/utilities/getRegisterUrl";
import { useLocale, useTranslations } from "next-intl";
import { useRouter } from "next/navigation";
import React from "react";

const JoinNow = () => {
  const router = useRouter();
  const locale = useLocale();
  const t = useTranslations("bonusPage.bonusJoinNow");

  const handleClick = () => {
    const url = getRegisterUrl(locale);
    router.push(url);
  };

  return (
    <section className="bg-p dark:bg-p-dark pb-16 sm:pb-28">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-pcp dark:text-pcp-dark mb-5">
          {t("title1")}
        </h2>
        <p className="text-lg sm:text-xl font-medium text-tm dark:text-tm-dark mt-4 mb-10 w-full md:w-[45%] mx-auto">
          {t("subtitle")}
        </p>
        <div className="text-center">
          <CustomYellowButton
            title={t("btnTxt")}
            onClick={handleClick}
            className="px-12 py-4 text-lg w-full sm:w-auto mx-auto justify-between sm:justify-center"
          />
        </div>
      </div>
    </section>
  );
};

export default JoinNow;
