"use client";
import React, { useState } from "react";
import { useLocale, useTranslations } from "next-intl";
import { getRegisterUrl } from "@/utilities/getRegisterUrl";
import Image from "next/image";
import CustomYellowButton from "@/components/common/CustomYellowButton";
import { useRouter } from "next/navigation";

const AccountTypesPricingTableMobile = () => {
  const router = useRouter();
  const locale = useLocale();
  const t = useTranslations("accountTypes.accountsTable");
  const [activeTab, setActiveTab] = useState("standard");
  const o = useTranslations("accountTypes.accountsTable");
  const l = useTranslations("accountTypes.accountTypes");

  const handleClick = () => {
    const url = getRegisterUrl(locale);
    router.push(url);
  };

  const tabContent = {
    cent: {
      id: 1,
      deposit: t("standard.deposit"),
      spread: t("standard.spread"),
      commissions: t("standard.commissions"),
      leverage: t("standard.leverage"),
      marginRequired: t("standard.marginRequired"),
      minimumLotSize: t("standard.minimumLotSize"),
      stopOutLevel: t("standard.stopOutLevel"),
      marginCallLevel: t("standard.marginCallLevel"),
      executionType: t("standard.executionType"),
      vps: t("standard.vps"),
      metaTrader5: t("standard.metaTrader5"),
      automaticTrading: t("standard.automaticTrading"),
      demoAccount: t("standard.demoAccount"),
      webinars: t("standard.webinars"),
      expertAdvice: t("standard.expertAdvice"),
      swap: t("swapFreeNote"),
      btnTxt: t("standard.btnTxt"),
    },
    standard: {
      id: 2,
      deposit: t("standard.deposit"),
      spread: t("standard.spread"),
      commissions: t("standard.commissions"),
      leverage: t("standard.leverage"),
      marginRequired: t("standard.marginRequired"),
      minimumLotSize: t("standard.minimumLotSize"),
      stopOutLevel: t("standard.stopOutLevel"),
      marginCallLevel: t("standard.marginCallLevel"),
      executionType: t("standard.executionType"),
      vps: t("standard.vps"),
      metaTrader5: t("standard.metaTrader5"),
      automaticTrading: t("standard.automaticTrading"),
      demoAccount: t("standard.demoAccount"),
      webinars: t("standard.webinars"),
      expertAdvice: t("standard.expertAdvice"),
      swap: t("swapFreeNote"),
      btnTxt: t("standard.btnTxt"),
    },
    narrow: {
      id: 3,
      deposit: t("narrow.deposit"),
      depositOffer: o("narrow.deposit-offer"),
      spread: t("narrow.spread"),
      commissions: t("narrow.commissions"),
      leverage: t("narrow.leverage"),
      marginRequired: t("narrow.marginRequired"),
      minimumLotSize: t("narrow.minimumLotSize"),
      stopOutLevel: t("narrow.stopOutLevel"),
      marginCallLevel: t("narrow.marginCallLevel"),
      executionType: t("narrow.executionType"),
      vps: t("narrow.vps"),
      metaTrader5: t("narrow.metaTrader5"),
      automaticTrading: t("narrow.automaticTrading"),
      demoAccount: t("standard.demoAccount"),
      webinars: t("narrow.webinars"),
      expertAdvice: t("narrow.expertAdvice"),
      btnTxt: t("narrow.btnTxt"),
      swap: t("swapFreeNote"),
    },
    raw: {
      id: 4,
      deposit: t("raw.deposit"),
      depositOffer: o("raw.deposit-offer"),
      spread: t("raw.spread"),
      commissions: t("raw.commissions"),
      leverage: t("raw.leverage"),
      marginRequired: t("raw.marginRequired"),
      minimumLotSize: t("raw.minimumLotSize"),
      stopOutLevel: t("raw.stopOutLevel"),
      marginCallLevel: t("raw.marginCallLevel"),
      executionType: t("raw.executionType"),
      vps: t("raw.vps"),
      metaTrader5: t("raw.metaTrader5"),
      demoAccount: t("standard.demoAccount"),
      automaticTrading: t("raw.automaticTrading"),
      webinars: t("raw.webinars"),
      expertAdvice: t("raw.expertAdvice"),
      btnTxt: t("raw.btnTxt"),
      swap: t("swapFreeNote"),
    },
  };

  return (
    <section className="bg-p dark:bg-p-dark pb-16">
      <div className="container">
        <div className="flex space-x-4 mb-6 flex-wrap">
          {["cent", "standard", "narrow", "raw"].map((tab) => (
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
          <div className="text-ts dark:text-ts-dark text-xl font-semibold bg-p dark:bg-p-dark px-5 py-6">
            {t("specifications")}
          </div>
          <div className=""></div>

          <div className="text-ts dark:text-ts-dark text-sm sm:text-base font-semibold bg-p dark:bg-p-dark px-5 py-6">
            {t("minimumDeposit")}
          </div>
          <div className="text-center text-ts dark:text-ts-dark text-sm sm:text-base bg-p dark:bg-p-dark px-5 py-6">
            <span className={`relative`}>{tabContent[activeTab].deposit}</span>
          </div>

          <div className="text-ts dark:text-ts-dark text-sm sm:text-base font-semibold bg-cc dark:bg-cc-dark px-5 py-6">
            {t("spread")}
          </div>
          <div className="text-center text-ts dark:text-ts-dark text-sm sm:text-base bg-cc dark:bg-cc-dark px-5 py-6">
            {tabContent[activeTab].spread}
          </div>

          <div className="text-ts dark:text-ts-dark text-sm sm:text-base font-semibold bg-p dark:bg-p-dark px-5 py-6">
            {t("commissions")}
          </div>
          <div className="text-center text-ts dark:text-ts-dark text-sm sm:text-base bg-p dark:bg-p-dark px-5 py-6">
            {tabContent[activeTab].commissions}
          </div>

          <div className="text-ts dark:text-ts-dark text-sm sm:text-base font-semibold bg-cc dark:bg-cc-dark px-5 py-6">
            {t("leverage")}
          </div>
          <div className="text-center text-ts dark:text-ts-dark text-sm sm:text-base bg-cc dark:bg-cc-dark px-5 py-6">
            {tabContent[activeTab].leverage}
          </div>

          <div className="text-ts dark:text-ts-dark text-sm sm:text-base font-semibold bg-p dark:bg-p-dark px-5 py-6">
            {t("marginRequired")}
          </div>
          <div className="text-center text-ts dark:text-ts-dark text-sm sm:text-base bg-p dark:bg-p-dark px-5 py-6">
            {tabContent[activeTab].marginRequired}
          </div>

          <div className="text-ts dark:text-ts-dark text-sm sm:text-base font-semibold bg-cc dark:bg-cc-dark px-5 py-6">
            {t("minimumLotSize")}
          </div>
          <div className="text-center text-ts dark:text-ts-dark text-sm sm:text-base bg-cc dark:bg-cc-dark px-5 py-6">
            {tabContent[activeTab].minimumLotSize}
          </div>

          <div className="text-ts dark:text-ts-dark text-sm sm:text-base font-semibold bg-p dark:bg-p-dark px-5 py-6">
            {t("stopOutLevel")}
          </div>
          <div className="text-center text-ts dark:text-ts-dark text-sm sm:text-base bg-p dark:bg-p-dark px-5 py-6">
            {tabContent[activeTab].stopOutLevel}
          </div>

          <div className="text-ts dark:text-ts-dark text-sm sm:text-base font-semibold bg-cc dark:bg-cc-dark px-5 py-6">
            {t("marginCallLevel")}
          </div>
          <div className="text-center text-ts dark:text-ts-dark text-sm sm:text-base bg-cc dark:bg-cc-dark px-5 py-6">
            {tabContent[activeTab].marginCallLevel}
          </div>

          <div className="text-ts dark:text-ts-dark text-sm sm:text-base font-semibold bg-p dark:bg-p-dark px-5 py-6">
            {t("executionType")}
          </div>
          <div className="text-center text-ts dark:text-ts-dark text-sm sm:text-base bg-p dark:bg-p-dark px-5 py-6">
            {tabContent[activeTab].executionType}
          </div>

          <div className="text-ts dark:text-ts-dark text-sm sm:text-base font-semibold bg-cc dark:bg-cc-dark px-5 py-6">
            {t("vps")}
          </div>
          <div className="text-center text-ts dark:text-ts-dark text-sm sm:text-base bg-cc dark:bg-cc-dark px-5 py-6">
            <div className="text-gc dark:text-gc-dark bg-e1 dark:bg-e1-dark h-[28px] w-[28px] mx-auto flex justify-center items-center rounded-lg">
              {tabContent[activeTab].vps}
            </div>
          </div>

          <div className="text-ts dark:text-ts-dark text-sm sm:text-base font-semibold bg-p dark:bg-p-dark px-5 py-6">
            {t("metaTrader5")}
          </div>
          <div className="text-center text-ts dark:text-ts-dark text-sm sm:text-base bg-p dark:bg-p-dark px-5 py-6">
            <div className="text-gc dark:text-gc-dark bg-e1 dark:bg-e1-dark h-[28px] w-[28px] mx-auto flex justify-center items-center rounded-lg">
              {tabContent[activeTab].metaTrader5}
            </div>
          </div>

          <div className="text-ts dark:text-ts-dark text-sm sm:text-base font-semibold bg-cc dark:bg-cc-dark px-5 py-6">
            {t("demo")}
          </div>
          <div className="text-center text-ts dark:text-ts-dark text-sm sm:text-base bg-cc dark:bg-cc-dark px-5 py-6">
            <div className="text-gc dark:text-gc-dark bg-e1 dark:bg-e1-dark h-[28px] w-[28px] mx-auto flex justify-center items-center rounded-lg">
              {tabContent[activeTab].demoAccount}
            </div>
          </div>

          <div className="text-ts dark:text-ts-dark text-sm sm:text-base font-semibold bg-p dark:bg-p-dark px-5 py-6">
            {t("webinars")}
          </div>
          <div className="text-center text-ts dark:text-ts-dark text-sm sm:text-base bg-p dark:bg-p-dark px-5 py-6">
            {tabContent[activeTab].webinars}
          </div>

          <div className="text-ts dark:text-ts-dark text-sm sm:text-base font-semibold bg-cc dark:bg-cc-dark px-5 py-6">
            {t("expertAdvice")}
          </div>
          <div className="text-center text-ts dark:text-ts-dark text-sm sm:text-base bg-cc dark:bg-cc-dark px-5 py-6">
            {tabContent[activeTab].expertAdvice}
          </div>

          <div className="text-ts dark:text-ts-dark text-sm sm:text-base font-semibold bg-p dark:bg-p-dark px-5 py-6">
            {t("swap")}
          </div>
          <div className="text-center text-ts dark:text-ts-dark text-sm sm:text-base bg-p dark:bg-p-dark px-5 py-6">
            {tabContent[activeTab].swap}
          </div>
          <div className="col-span-2 mx-5">
            <CustomYellowButton
              title={tabContent[activeTab].btnTxt}
              onClick={handleClick}
              className="py-4 md:py-3 lg:py-3 text-base w-full justify-between sm:justify-center mt-5 px-5"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AccountTypesPricingTableMobile;
