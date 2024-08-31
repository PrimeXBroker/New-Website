import React from "react";
import Image from "next/image";
import TraderForm from "./TraderForm";
import { useTranslations, useLocale } from "next-intl";

const TopTraderForm = () => {
  const locale = useLocale();
  const t = useTranslations("topTrader.steps");

  return (
    <section className="container">
      <div className="grid grid-cols-12">
        <div className="col-span-12 lg:col-span-6 flex justify-center">
          <div className="relative w-[400px] mx-auto block">
            <div className="lg:absolute top-0 left-0 w-full">
              <Image
                unoptimized={true}
                src="https://primexcapital.s3.eu-north-1.amazonaws.com/website/top-trader/steps.webp"
                alt="Step Image"
                width={400}
                height={500}
                className="w-full h-auto"
              />
            </div>
            <div
              className={`flex flex-row items-center gap-2 md:gap-4 absolute top-[6%] md:w-full ${
                locale === "ar"
                  ? "right-[27%] lg:right-[27%]"
                  : "left-[27%] lg:left-[27%]"
              }`}
            >
              <div className="text-4xl sm:text-6xl font-semibold text-secondary">
                {t("step_1")}
              </div>
              <div
                className="text-base sm:text-xl text-secondary font-semibold"
                style={{ lineHeight: "1.5" }}
              >
                {t("step_1_title_p1")} <br /> {t("step_1_title_p2")}
              </div>
            </div>
            <div
              className={`flex flex-row items-center gap-2 md:gap-4 absolute top-[43%] md:w-full ${
                locale === "ar"
                  ? "right-[27%] lg:right-[27%]"
                  : "left-[27%] lg:left-[27%]"
              }`}
            >
              <div className="text-4xl sm:text-6xl font-semibold text-white">
                {t("step_2")}
              </div>
              <div
                className="text-base sm:text-xl text-white font-semibold"
                style={{ lineHeight: "1.5" }}
              >
                {t("step_2_title_p1")} <br />
                {t("step_2_title_p2")}
              </div>
            </div>
            <div
              className={`flex flex-row items-center gap-2 md:gap-4 absolute top-[81%] md:w-full ${
                locale === "ar"
                  ? "right-[27%] lg:right-[27%]"
                  : "left-[27%] lg:left-[27%]"
              }`}
            >
              <div className="text-4xl sm:text-6xl font-semibold text-secondary">
                {t("step_3")}
              </div>
              <div
                className="text-base sm:text-xl text-secondary font-semibold"
                style={{ lineHeight: "1.5" }}
              >
                {t("step_3_title_p1")} <br /> {t("step_3_title_p2")}
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-12 lg:col-span-6 mt-20 lg:mt-0">
          <TraderForm />
        </div>
      </div>
    </section>
  );
};

export default TopTraderForm;
