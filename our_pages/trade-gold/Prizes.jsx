"use client";
import React from "react";
import Image from "next/image";
import { useLocale, useTranslations } from "next-intl";
import { useRouter } from "next/navigation";

const Prizes = () => {
  const router = useRouter();
  const locale = useLocale();
  const t = useTranslations("trdaeGold.prizes");

  const accountTypesData = [
    {
      id: 1,
      title: t("step1_place"),
      icon: "https://primexcapital.s3.eu-north-1.amazonaws.com/website/trade-gold/first-prize.svg",
      count: t("step1_count"),
      goldBar: t("step1"),
      description: t("step1_desc"),
    },
    {
      id: 2,
      title: t("step2_place"),
      icon: "https://primexcapital.s3.eu-north-1.amazonaws.com/website/trade-gold/second-place.svg",
      count: t("step2_count"),
      goldBar: t("step2"),
      description: t("step2_desc"),
    },
    {
      id: 3,
      title: t("step3_place"),
      icon: "https://primexcapital.s3.eu-north-1.amazonaws.com/website/trade-gold/third-place.svg",
      count: t("step3_count"),
      goldBar: t("step3"),
      description: t("step3_desc"),
    },
  ];

  return (
    <section className="bg-p dark:bg-p-dark text-tm dark:text-tm-dark px-4 pb-16 sm:pb-28">
      <div className="container">
        <div className="text-center md:text-center mb-10">
          <div className="text-center md:text-center mb-10">
            <h2 className="text-3xl sm:text-3xl lg:text-4xl font-bold text-tm dark:text-tm-dark uppercase">
              <span className="text-pcp dark:text-pcp-dark">{t("title1")}</span>
              {t("title2")}
              <br className="hidden md:block" />
              {t("title3")}
            </h2>
            <p className="text-sm sm:text-base lg:text-lg mt-2 md:w-[540px] mx-auto text-ts dark:text-ts-dark">
              {t("description")}
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {accountTypesData.map((account) => (
            <>
              <div
                key={account.id}
                className={`bg-cc dark:bg-cc-dark p-6 rounded-xl flex flex-col justify-between relative h-full ${
                  account.id !== 3 ? "mb-8 md:mb-0" : ""
                }`}
              >
                <div>
                  <div className="flex justify-between items-center">
                    <div className="flex items-start gap-3">
                      <div>
                        <h3 className="text-xl sm:text-2xl font-semibold text-ts dark:text-ts-dark">
                          {account.title}
                        </h3>
                      </div>
                    </div>
                    <div className="w-[54px] h-[54px]">
                      <Image
                        unoptimized={true}
                        src={account.icon}
                        alt={account.title}
                        width={100}
                        height={100}
                        className="w-full"
                      />
                    </div>
                  </div>
                  <div className="bg-e1 dark:bg-e1-dark px-5 pb-5 pt-7 rounded-xl mt-6">
                    <p className="text-tm dark:text-tm-dark text-5xl font-semibold">
                      {account.count}
                    </p>
                    <p className="text-tm dark:text-tm-dark text-xl font-semibold pt-2 pb-1">
                      {account.goldBar}
                    </p>
                    <p className="text-ts dark:text-ts-dark text-sm sm:text-base">
                      {account.description}
                    </p>
                  </div>
                </div>
              </div>
            </>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Prizes;
