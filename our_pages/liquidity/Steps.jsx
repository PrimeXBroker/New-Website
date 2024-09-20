"use client";
import React from "react";
import Image from "next/image";
import { useTranslations, useLocale } from "next-intl";

const Steps = () => {
  const locale = useLocale();
  const t = useTranslations("liquidity.steps");

  return (
    <section className="bg-[#000000]">
      <div className="container mx-auto">
        <div className="p-6 flex flex-col md:flex-row justify-between items-center gap-[18px] md:gap-0 px-4 bg-[#111111] shadow-[#000000] border-2 border-[#1D1D1D] rounded-[20px]">
          <div className="w-full md:w-0 md:flex-1 flex items-center justify-start md:justify-center gap-6 md:gap-3 lg:gap-6 px-2 md:px-0 group">
            <Image
              src="https://primexcapital.s3.eu-north-1.amazonaws.com/website/liquidity/fast.svg"
              alt="Experience Real Trading"
              width={64}
              height={64}
            />
            <p className="text-sm lg:text-base text-[#c6c6c6] group-hover:text-primary">
              {t("step1_p1")} <br /> {t("step1_p2")}
            </p>
          </div>
          <div className="border-b md:border-l border-[#1D1D1D] w-full md:w-0 md:h-16"></div>
          <div className="w-full md:w-0 md:flex-1 flex items-center justify-start md:justify-center gap-6 md:gap-3 lg:gap-6 px-2 md:px-0 group">
            <Image
              src="https://primexcapital.s3.eu-north-1.amazonaws.com/website/liquidity/Drop+Header.svg"
              alt="Test your Strategies"
              width={64}
              height={64}
            />
            <p className="text-sm lg:text-base text-[#c6c6c6] group-hover:text-primary">
              {t("step2_p1")} <br />
              {t("step2_p2")}
            </p>
          </div>
          <div className="border-b md:border-l border-[#1D1D1D] w-full md:w-0 md:h-16"></div>
          <div className="w-full md:w-0 md:flex-1 flex items-center justify-start md:justify-center gap-6 md:gap-3 lg:gap-6 px-2 md:px-0 group">
            <Image
              src="https://primexcapital.s3.eu-north-1.amazonaws.com/website/liquidity/Sheild+Header.svg"
              alt="Unlock Rewards"
              width={64}
              height={64}
            />
            <p className="text-sm lg:text-base text-[#c6c6c6] group-hover:text-primary">
              {t("step3_p1")} <br />
              {t("step3_p2")}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Steps;
