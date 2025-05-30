"use client";
import React, { useState } from "react";
import { useLocale, useTranslations } from "next-intl";
import { getRegisterUrl } from "@/utilities/getRegisterUrl";
import CustomWhiteButton from "@/components/common/CustomWhiteButton";
import { useRouter } from "next/navigation";

const SpreadAccountMobileTable = () => {
  const router = useRouter();
  const locale = useLocale();
  const t = useTranslations("accountTypes.accountsTable");
  const [activeTab, setActiveTab] = useState("standard");
  const o = useTranslations("accountTypes.accountsTable");
  const l = useTranslations("accountTypes.accountTypes");
  const s = useTranslations("spreadPage.accountTypesTable");

  const handleClick = () => {
    const url = getRegisterUrl(locale);
    router.push(url);
  };

  const tabContent = {
    standard: {
      id: 1,
      deposit: t("standard.deposit"),
      spread: t("standard.spread"),
      commissions: t("standard.commissions"),
      btnTxt: t("standard.btnTxt"),
    },
    narrow: {
      id: 2,
      deposit: t("narrow.deposit"),
      depositOffer: o("narrow.deposit-offer"),
      spread: t("narrow.spread"),
      commissions: t("narrow.commissions"),
      btnTxt: t("narrow.btnTxt"),
    },
    raw: {
      id: 3,
      deposit: t("raw.deposit"),
      depositOffer: o("raw.deposit-offer"),
      spread: t("raw.spread"),
      commissions: t("raw.commissions"),
      btnTxt: t("raw.btnTxt"),
    },
  };

  return (
    <section className="bg-p dark:bg-p-dark pt-16">
      <div className="container">
        <div className="bg-cc dark:bg-cc-dark p-5">
          <div className="flex space-x-4 mb-6">
            {["standard", "narrow", "raw"].map((tab) => (
              <button
                key={tab}
                className={`px-6 py-3 font-semibold relative ${
                  activeTab === tab
                    ? "text-tm dark:text-tm-dark border-b-4 border-pcp dark:border-pcp-dark"
                    : "text-tm dark:text-tm-dark"
                }`}
                onClick={() => setActiveTab(tab)}
              >
                {t(`${tab}.title`)}
              </button>
            ))}
          </div>
          <div className="grid grid-cols-2 text-tm dark:text-tm-dark">
            <div className="text-tm dark:text-tm-dark text-xl font-semibold bg-cc dark:bg-cc-dark px-5 py-6">
              {s("specification1")}{" "}
              <span className="text-pcp dark:text-pcp-dark">
                {s("specification2")}
              </span>
            </div>
            <div className=""></div>

            <div className="text-ts dark:text-ts-dark text-sm sm:text-base font-semibold bg-cc dark:bg-cc-dark px-5 py-6">
              {t("minimumDeposit")}
            </div>
            <div className="text-center text-ts dark:text-ts-dark text-sm sm:text-base bg-cc dark:bg-cc-dark px-5 py-6">
              <span className={`relative`}>
                {tabContent[activeTab].deposit}
              </span>
            </div>

            <div className="text-ts dark:text-ts-dark text-sm sm:text-base font-semibold bg-e1 dark:bg-e1-dark px-5 py-6">
              {t("spread")}
            </div>
            <div className="text-center text-ts dark:text-ts-dark text-sm sm:text-base bg-e1 dark:bg-e1-dark px-5 py-6">
              {tabContent[activeTab].spread}
            </div>

            <div className="text-ts dark:text-ts-dark text-sm sm:text-base font-semibold bg-cc dark:bg-cc-dark px-5 py-6">
              {t("commissions")}
            </div>
            <div className="text-center text-ts dark:text-ts-dark text-sm sm:text-base bg-cc dark:bg-cc-dark px-5 py-6">
              {tabContent[activeTab].commissions}
            </div>
            <div className="text-center text-ts dark:text-ts-dark text-sm sm:text-base bg-cc dark:bg-cc-dark px-5 py-6">
              {tabContent[activeTab].swap}
            </div>
            <div className="col-span-2 mx-5">
              <CustomWhiteButton
                title={tabContent[activeTab].btnTxt}
                onClick={handleClick}
                className="py-4 md:py-3 lg:py-3 text-base w-full justify-between sm:justify-center mt-5"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SpreadAccountMobileTable;
