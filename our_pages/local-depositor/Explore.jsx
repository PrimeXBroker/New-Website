"use client";
import CustomYellowButton from "@/components/common/CustomYellowButton";
import { getRegisterUrl } from "@/utilities/getRegisterUrl";
import { useLocale, useTranslations } from "next-intl";
import React from "react";

const Explore = () => {
  const locale = useLocale();
  const h = useTranslations("localDepositor.explore");

  return (
    <section className="bg-p dark:bg-p-dark py-3">
      <div className="container">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 py-8 bg-cc dark:bg-cc-dark border-2 border-cc dark:border-cc-dark rounded-xl">
          <div className="grid grid-cols-2 items-center text-tm dark:text-tm-dark">
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold">
              {h("title1")}
              <span className="text-pcp dark:text-pcp-dark"> 330+ </span>
              {h("title2")}
            </h2>
            <div className="">
              <p>{h("description")}</p>
              <CustomYellowButton
                title={h("buttonText")}
                onClick={() => window.open(getRegisterUrl(locale))}
                className="py-5 px-9 md:py-4 md:px-7 lg:py-4 lg:px-9 text-lg w-full sm:w-auto justify-between sm:justify-center mt-4"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Explore;
