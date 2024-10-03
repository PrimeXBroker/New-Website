"use client";
import React, { useState } from "react";
import { useLocale, useTranslations } from "next-intl";

const AccountTypesPricingTableMobile = () => {
  const locale = useLocale();
  const t = useTranslations("newAccountTypes.accountsTable");
  const [activeTab, setActiveTab] = useState("standard");

  const tabContent = {
    standard: {
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
      webinars: t("standard.webinars"),
      expertAdvice: t("standard.expertAdvice"),
      swap: t("swapFreeNote"),
      btnTxt: t("standard.btnTxt"),
    },
    narrow: {
      deposit: t("narrow.deposit"),
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
      webinars: t("narrow.webinars"),
      expertAdvice: t("narrow.expertAdvice"),
      btnTxt: t("narrow.btnTxt"),
      swap: t("swapFreeNote"),
    },
    raw: {
      deposit: t("raw.deposit"),
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
      automaticTrading: t("raw.automaticTrading"),
      webinars: t("raw.webinars"),
      expertAdvice: t("raw.expertAdvice"),
      btnTxt: t("raw.btnTxt"),
      swap: t("swapFreeNote"),
    },
  };

  return (
    <section className="bg-[#000000] pb-10">
      <div className="container">
        <div className="flex space-x-4 mb-6">
          {["standard", "narrow", "raw"].map((tab) => (
            <button
              key={tab}
              className={`px-6 py-3 font-bold ${
                activeTab === tab
                  ? "text-[#ffffff] border-b-4 border-[#FED100]"
                  : "text-[#ffffff]"
              }`}
              onClick={() => setActiveTab(tab)}
            >
              {t(`${tab}.title`)}
            </button>
          ))}
        </div>
        <div className="grid grid-cols-2 text-white">
          <div className="text-[#C6C6C6] text-sm sm:text-base font-bold bg-[#000000] px-5 py-6">
            {t("minimumDeposit")}
          </div>
          <div className="text-center text-[#C6C6C6] text-sm sm:text-base bg-[#000000] px-5 py-6">
            {tabContent[activeTab].deposit}
          </div>

          <div className="text-[#C6C6C6] text-sm sm:text-base font-bold bg-[#111111] px-5 py-6">
            {t("spread")}
          </div>
          <div className="text-center text-[#C6C6C6] text-sm sm:text-base bg-[#111111] px-5 py-6">
            {tabContent[activeTab].spread}
          </div>

          <div className="text-[#C6C6C6] text-sm sm:text-base font-bold bg-[#000000] px-5 py-6">
            {t("commissions")}
          </div>
          <div className="text-center text-[#C6C6C6] text-sm sm:text-base bg-[#000000] px-5 py-6">
            {tabContent[activeTab].commissions}
          </div>

          <div className="text-[#C6C6C6] text-sm sm:text-base font-bold bg-[#111111] px-5 py-6">
            {t("leverage")}
          </div>
          <div className="text-center text-[#C6C6C6] text-sm sm:text-base bg-[#111111] px-5 py-6">
            {tabContent[activeTab].leverage}
          </div>

          <div className="text-[#C6C6C6] text-sm sm:text-base font-bold bg-[#111111] px-5 py-6">
            {t("marginRequired")}
          </div>
          <div className="text-center text-[#C6C6C6] text-sm sm:text-base bg-[#111111] px-5 py-6">
            {tabContent[activeTab].marginRequired}
          </div>

          <div className="text-[#C6C6C6] text-sm sm:text-base font-bold bg-[#111111] px-5 py-6">
            {t("minimumLotSize")}
          </div>
          <div className="text-center text-[#C6C6C6] text-sm sm:text-base bg-[#111111] px-5 py-6">
            {tabContent[activeTab].minimumLotSize}
          </div>

          <div className="text-[#C6C6C6] text-sm sm:text-base font-bold bg-[#111111] px-5 py-6">
            {t("stopOutLevel")}
          </div>
          <div className="text-center text-[#C6C6C6] text-sm sm:text-base bg-[#111111] px-5 py-6">
            {tabContent[activeTab].stopOutLevel}
          </div>

          <div className="text-[#C6C6C6] text-sm sm:text-base font-bold bg-[#111111] px-5 py-6">
            {t("marginCallLevel")}
          </div>
          <div className="text-center text-[#C6C6C6] text-sm sm:text-base bg-[#111111] px-5 py-6">
            {tabContent[activeTab].marginCallLevel}
          </div>

          <div className="text-[#C6C6C6] text-sm sm:text-base font-bold bg-[#111111] px-5 py-6">
            {t("executionType")}
          </div>
          <div className="text-center text-[#C6C6C6] text-sm sm:text-base bg-[#111111] px-5 py-6">
            {tabContent[activeTab].executionType}
          </div>

          <div className="text-[#C6C6C6] text-sm sm:text-base font-bold bg-[#111111] px-5 py-6">
            {t("vps")}
          </div>
          <div className="text-center text-[#C6C6C6] text-sm sm:text-base bg-[#111111] px-5 py-6">
            <div className="text-[#04CC00] bg-[#222222] h-[28px] w-[28px] mx-auto flex justify-center items-center rounded-lg">
              {tabContent[activeTab].vps}
            </div>
          </div>

          <div className="text-[#C6C6C6] text-sm sm:text-base font-bold bg-[#111111] px-5 py-6">
            {t("metaTrader5")}
          </div>
          <div className="text-center text-[#C6C6C6] text-sm sm:text-base bg-[#111111] px-5 py-6">
            <div className="text-[#04CC00] bg-[#222222] h-[28px] w-[28px] mx-auto flex justify-center items-center rounded-lg">
              {tabContent[activeTab].metaTrader5}
            </div>
          </div>

          <div className="text-[#C6C6C6] text-sm sm:text-base font-bold bg-[#111111] px-5 py-6">
            {t("automaticTrading")}
          </div>
          <div className="text-center text-[#C6C6C6] text-sm sm:text-base bg-[#111111] px-5 py-6">
            <div className="text-[#04CC00] bg-[#222222] h-[28px] w-[28px] mx-auto flex justify-center items-center rounded-lg">
              {tabContent[activeTab].automaticTrading}
            </div>
          </div>

          <div className="text-[#C6C6C6] text-sm sm:text-base font-bold bg-[#111111] px-5 py-6">
            {t("webinars")}
          </div>
          <div className="text-center text-[#C6C6C6] text-sm sm:text-base bg-[#111111] px-5 py-6">
            {tabContent[activeTab].webinars}
          </div>

          <div className="text-[#C6C6C6] text-sm sm:text-base font-bold bg-[#111111] px-5 py-6">
            {t("expertAdvice")}
          </div>
          <div className="text-center text-[#C6C6C6] text-sm sm:text-base bg-[#111111] px-5 py-6">
            {tabContent[activeTab].expertAdvice}
          </div>

          <div className="text-[#C6C6C6] text-sm sm:text-base font-bold bg-[#111111] px-5 py-6">
            {t("swap")}
          </div>
          <div className="text-center text-[#C6C6C6] text-sm sm:text-base bg-[#111111] px-5 py-6">
            {tabContent[activeTab].swap}
          </div>
          <div className="col-span-2 mx-5">
            <button
              onClick={() =>
                window.open(
                  `${
                    locale === "ar"
                      ? "https://client.primexbroker.com/ar/register"
                      : "https://client.primexbroker.com/en/register"
                  }`
                )
              }
              className="py-3 w-full block font-semibold text-center custom-button text-sm mt-3"
            >
              {tabContent[activeTab].btnTxt}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AccountTypesPricingTableMobile;
