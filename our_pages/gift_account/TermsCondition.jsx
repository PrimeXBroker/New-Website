"use client";
import React from "react";
import { Button } from "@nextui-org/button";
import { useLocale, useTranslations } from "next-intl";
import RegButton from "@/components/RegButton";

const TermsCondition = () => {
  const locale = useLocale();
  const t = useTranslations("gift.terms");

  const customStyle = {
    btnColor: "primary",
    txtColor1: "text-secondary",
    txtColor2: "text-secondary",
    txtColor3: "text-secondary",
    borderColor: "border-primary",
  };

  const handleDownload = (loc, name) => {
    const anchor = document.createElement("a");
    anchor.href = loc;
    anchor.download = `${name}.pdf`;
    anchor.click();
  };

  return (
    <section className="py-20 container">
      <div className="text-center pb-20">
        <RegButton customStyle={customStyle} />
      </div>
      <div className="bg-accent flex px-10 py-8 flex-col md:flex-row rounded-3xl sm:rounded-full items-center">
        <div className="md:w-[60%] w-full mb-5 md:mb-0">
          <h6 className="text-xl text-secondary font-semibold text-center md:text-left mb-0">
            {t("title")}
          </h6>
        </div>
        <div className="w-full md:w-[40%] flex justify-center md:justify-end items-center">
          <Button radius="full" size="lg" color="primary">
            <a
              onClick={() =>
                handleDownload(
                  `${
                    locale === "ar"
                      ? "/pdf/Gift_Account_Ar.pdf"
                      : "/pdf/Gift_Account_En.pdf"
                  }`,
                  "Gift Account"
                )
              }
              className="text-secondary font-semibold px-6"
            >
              {t("btnTxt")}
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default TermsCondition;
