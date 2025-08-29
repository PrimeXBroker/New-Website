"use client";
import { useTranslations } from "next-intl";
import React from "react";
import Lottie from "lottie-react";

const DifferentTypesBroker = ({ brokerTypes }) => {
  const t = useTranslations("ecnBroker.differentTypesBroker");

  return (
    <section className="bg-p dark:bg-p-dark py-16 sm:py-28">
      <div className="container">
        <div className="text-center md:text-center mb-10">
          <h2 className="text-3xl sm:text-3xl lg:text-4xl font-bold text-tm dark:text-tm-dark uppercase">
            {t("title1")}
            <span className="text-pcp dark:text-pcp-dark">{t("title2")}</span>
            {t("title3")} <br className="hidden md:block" />
            {t("title4")}
            <span className="text-pcp dark:text-pcp-dark">{t("title5")}</span>
          </h2>
          <p className="text-sm sm:text-base lg:text-lg mt-2 md:w-[70%] mx-auto text-ts dark:text-ts-dark">
            {t("description")}
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {brokerTypes.map((account) => (
            <>
              <div
                key={account.id}
                className={`bg-cc dark:bg-cc-dark p-6 rounded-xl flex flex-col justify-between relative ${
                  account.id !== 3 ? "mb-8 md:mb-0" : ""
                }`}
              >
                <div>
                  <div className="flex justify-between items-center">
                    <div className="flex items-start gap-3">
                      <div>
                        <h3 className="text-xl sm:text-2xl font-semibold text-tm dark:text-tm-dark">
                          {account.title}
                        </h3>
                      </div>
                    </div>
                    <div className="w-16 h-16 flex items-center justify-center rounded-lg bg-e1 dark:bg-white/15 border border-e2 dark:border-white/15">
                      <Lottie
                        animationData={account.icon}
                        loop={true}
                        style={{ width: "52px", height: "52px" }}
                      />
                    </div>
                  </div>
                  <p className="text-ts dark:text-ts-dark text-sm sm:text-base py-6">
                    {account.li1}
                  </p>
                  <p className="text-ts dark:text-ts-dark text-sm sm:text-base border-y border-y-e1 dark:border-y-e1-dark py-6">
                    {account.li2}
                  </p>
                  <p className="text-ts dark:text-ts-dark text-sm sm:text-base py-6">
                    {account.li3}
                  </p>
                </div>
              </div>
            </>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DifferentTypesBroker;
