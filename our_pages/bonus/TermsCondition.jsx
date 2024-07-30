"use client";
import { Button } from "@nextui-org/button";
import { useLocale, useTranslations } from "next-intl";
import React from "react";

const TermsCondition = () => {
  const locale = useLocale();
  const t = useTranslations("bonus.terms");

  const handleDownload = (loc, name) => {
    const anchor = document.createElement("a");
    anchor.href = loc;
    anchor.download = `${name}.pdf`;
    anchor.click();
  };

  return (
    <section className="container my-20">
      <div className="bg-accent flex p-10 flex-col md:flex-row rounded-3xl">
        <div className="md:w-[70%] w-full mb-5 md:mb-0">
          <h1
            className={`sectionHeading text-3xl text-secondary font-semibold ${
              locale === "ar"
                ? "text-center md:text-right"
                : "text-center md:text-left"
            }`}
          >
            {t("title")}
          </h1>
          <p
            className={`sectionPara text-secondary ${
              locale === "ar"
                ? "text-center md:text-right"
                : "text-center md:text-left"
            }`}
          >
            {t("desc_part_1")} <br />
            {t("desc_part_2")}
          </p>
        </div>
        <div className="w-full md:w-[30%] flex justify-center md:justify-end items-center">
          <Button
            radius="full"
            size="lg"
            color="primary"
            className="h-14 px-14"
          >
            <a
              onClick={() =>
                handleDownload(
                  `${
                    locale === "ar"
                      ? "/pdf/30_Bonus_Ar.pdf"
                      : "/pdf/30_Bonus_En.pdf"
                  }`,
                  "Gift Account"
                )
              }
              className="text-secondary font-semibold"
            >
              {t("title")}
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default TermsCondition;
