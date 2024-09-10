"use client";
import React from "react";
import CompetitionForm from "./CompetitionForm";
import { useTranslations, useLocale } from "next-intl";

const ParticipateForm = () => {
  const locale = useLocale();
  const t = useTranslations("demoAccount.participateForm");
  return (
    <section className="bg-accent py-12">
      <div className="container mx-auto">
        <div className="grid grid-cols-12 items-center">
          <div className="col-span-12 sm:col-start-2 lg:col-start-0 sm:col-span-10 lg:col-span-6 flex flex-col items-center justify-center">
            <h1 className="text-secondary text-3xl font-semibold text-center mb-8">
              {t("title")}
            </h1>
            <div className="relative flex items-center justify-between w-[100%] sm:w-[70%]">
              <div className="flex flex-col items-center z-10">
                <div className="steps-point bg-yellow-500 text-secondary rounded-full h-[70px] w-[70px] sm:h-[100px] sm:w-[100px] flex justify-center items-center text-3xl sm:text-5xl font-bold border-8 border-secondary">
                  {t("step1_count")}
                </div>
                <p
                  className="mt-4 text-base font-semibold text-center"
                  style={{ lineHeight: "19px" }}
                >
                  {t("step1_p1")} <br /> {t("step1_p2")}
                </p>
              </div>
              <div className="absolute top-[37px] sm:top-[55px] transform -translate-y-1/2 left-[90px] right-[64px] sm:left-[104px] sm:right-[94px]">
                <div className="border-t-8 border-dashed border-secondary w-full"></div>
              </div>
              <div className="flex flex-col items-center z-10">
                <div className="steps-point bg-white text-secondary rounded-full h-[70px] w-[70px] sm:h-[100px] sm:w-[100px] flex justify-center items-center text-3xl sm:text-5xl font-bold border-8 border-secondary">
                  {t("step2_count")}
                </div>
                <p
                  className="mt-4 text-base font-semibold text-center"
                  style={{ lineHeight: "19px" }}
                >
                  {t("step2_p1")} <br /> {t("step2_p2")}
                </p>
              </div>
            </div>
          </div>
          <div className="col-span-12 sm:col-start-3 lg:col-start-0 sm:col-span-8 lg:col-span-6 mt-8 lg:mt-0">
            <CompetitionForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ParticipateForm;
