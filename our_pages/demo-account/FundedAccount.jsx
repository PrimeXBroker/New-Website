"use client";
import React from "react";
import Image from "next/image";
import { useTranslations, useLocale } from "next-intl";

const FundedAccount = () => {
  const locale = useLocale();
  const t = useTranslations("demoAccount.fundedAccount");

  return (
    <section className="py-8">
      <div className="container mx-auto px-4">
        <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col md:flex-row justify-between items-center gap-[18px] md:gap-0">
          <div className="w-full md:w-0 md:flex-1 flex items-center justify-start md:justify-center gap-6 md:gap-3 lg:gap-6 px-2 md:px-0">
            <div className="w-16 h-16 mb-4">
              <Image
                src="https://primexcapital.s3.eu-north-1.amazonaws.com/website/demo-account/fac-step1.svg"
                alt="Experience Real Trading"
                width={64}
                height={64}
              />
            </div>
            <p className="text-sm lg:text-base">
              {t("step1_p1")} <br /> {t("step1_p2")}
            </p>
          </div>
          <div className="border-b md:border-l border-gray-300 w-full md:w-0 md:h-16"></div>
          <div className="w-full md:w-0 md:flex-1 flex items-center justify-start md:justify-center gap-6 md:gap-3 lg:gap-6 px-2 md:px-0">
            <div className="w-16 h-16 mb-4">
              <Image
                src="https://primexcapital.s3.eu-north-1.amazonaws.com/website/demo-account/fac-step2.svg"
                alt="Test your Strategies"
                width={64}
                height={64}
              />
            </div>
            <p className="text-sm lg:text-base">
              {t("step2_p1")} <br />
              {t("step2_p2")}
            </p>
          </div>
          <div className="border-b md:border-l border-gray-300 w-full md:w-0 md:h-16"></div>
          <div className="w-full md:w-0 md:flex-1 flex items-center justify-start md:justify-center gap-6 md:gap-3 lg:gap-6 px-2 md:px-0">
            <div className="w-16 h-16 mb-4">
              <Image
                src="https://primexcapital.s3.eu-north-1.amazonaws.com/website/demo-account/fac-step3.svg"
                alt="Unlock Rewards"
                width={64}
                height={64}
              />
            </div>
            <p className="text-sm lg:text-base">
              {t("step3_p1")} <br />
              {t("step3_p2")}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FundedAccount;
