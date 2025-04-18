"use client";
import React, { useState } from "react";
import { useLocale, useTranslations } from "next-intl";
import { getRegisterUrl } from "@/utilities/getRegisterUrl";
import Image from "next/image";

const AccountTypesPricingTableMobile = () => {
  const locale = useLocale();
  const t = useTranslations("accountTypes.accountsTable");
  const [activeTab, setActiveTab] = useState("standard");
  const o = useTranslations("accountTypes.accountsTable");
  const l = useTranslations("accountTypes.accountTypes");

  const tabContent = {
    standard: {
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
    narrow: {
      id: 2,
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
      id: 3,
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
    <section className="bg-[#000000] pb-10">
      <div className="container">
        <div className="flex space-x-4 mb-6">
          {["standard", "narrow", "raw"].map((tab) => (
            <button
              key={tab}
              className={`px-6 py-3 font-semibold relative ${
                activeTab === tab
                  ? "text-[#ffffff] border-b-4 border-[#FED100]"
                  : "text-[#ffffff]"
              }`}
              onClick={() => setActiveTab(tab)}
            >
              {/* {tab !== "standard" && (
                <div
                  className={`absolute ${
                    locale === "ar" || locale === "fa" || locale === "kd"
                      ? "top-[-42px] right-0"
                      : "top-[-42px] left-0"
                  } flex justify-center items-center w-[58px] h-[58px]`}
                >
                  <Image
                    src="https://primexcapital.s3.eu-north-1.amazonaws.com/website/account-types/Offer.svg"
                    alt="Offer"
                    width={58}
                    height={58}
                  />
                  <span className="absolute inset-0 flex justify-center items-center text-[#ffffff] font-bold text-xs">
                    {l("offer")}
                  </span>
                </div>
              )} */}
              {t(`${tab}.title`)}
            </button>
          ))}
        </div>
        <div className="grid grid-cols-2 text-white">
          <div className="text-[#C6C6C6] text-xl font-semibold bg-[#000000] px-5 py-6">
            {t("specifications")}
          </div>
          <div className=""></div>

          <div className="text-[#C6C6C6] text-sm sm:text-base font-semibold bg-[#000000] px-5 py-6">
            {t("minimumDeposit")}
          </div>
          <div className="text-center text-[#C6C6C6] text-sm sm:text-base bg-[#000000] px-5 py-6">
            {/* <span className="block font-semibold">
              {tabContent[activeTab].depositOffer}
            </span> */}
            <span className={`relative`}>{tabContent[activeTab].deposit}</span>
          </div>

          <div className="text-[#C6C6C6] text-sm sm:text-base font-semibold bg-[#111111] px-5 py-6">
            {t("spread")}
          </div>
          <div className="text-center text-[#C6C6C6] text-sm sm:text-base bg-[#111111] px-5 py-6">
            {tabContent[activeTab].spread}
          </div>

          <div className="text-[#C6C6C6] text-sm sm:text-base font-semibold bg-[#000000] px-5 py-6">
            {t("commissions")}
          </div>
          <div className="text-center text-[#C6C6C6] text-sm sm:text-base bg-[#000000] px-5 py-6">
            {tabContent[activeTab].commissions}
          </div>

          <div className="text-[#C6C6C6] text-sm sm:text-base font-semibold bg-[#111111] px-5 py-6">
            {t("leverage")}
          </div>
          <div className="text-center text-[#C6C6C6] text-sm sm:text-base bg-[#111111] px-5 py-6">
            {tabContent[activeTab].leverage}
          </div>

          <div className="text-[#C6C6C6] text-sm sm:text-base font-semibold bg-[#000000] px-5 py-6">
            {t("marginRequired")}
          </div>
          <div className="text-center text-[#C6C6C6] text-sm sm:text-base bg-[#000000] px-5 py-6">
            {tabContent[activeTab].marginRequired}
          </div>

          <div className="text-[#C6C6C6] text-sm sm:text-base font-semibold bg-[#111111] px-5 py-6">
            {t("minimumLotSize")}
          </div>
          <div className="text-center text-[#C6C6C6] text-sm sm:text-base bg-[#111111] px-5 py-6">
            {tabContent[activeTab].minimumLotSize}
          </div>

          <div className="text-[#C6C6C6] text-sm sm:text-base font-semibold bg-[#000000] px-5 py-6">
            {t("stopOutLevel")}
          </div>
          <div className="text-center text-[#C6C6C6] text-sm sm:text-base bg-[#000000] px-5 py-6">
            {tabContent[activeTab].stopOutLevel}
          </div>

          <div className="text-[#C6C6C6] text-sm sm:text-base font-semibold bg-[#111111] px-5 py-6">
            {t("marginCallLevel")}
          </div>
          <div className="text-center text-[#C6C6C6] text-sm sm:text-base bg-[#111111] px-5 py-6">
            {tabContent[activeTab].marginCallLevel}
          </div>

          <div className="text-[#C6C6C6] text-sm sm:text-base font-semibold bg-[#000000] px-5 py-6">
            {t("executionType")}
          </div>
          <div className="text-center text-[#C6C6C6] text-sm sm:text-base bg-[#000000] px-5 py-6">
            {tabContent[activeTab].executionType}
          </div>

          <div className="text-[#C6C6C6] text-sm sm:text-base font-semibold bg-[#111111] px-5 py-6">
            {t("vps")}
          </div>
          <div className="text-center text-[#C6C6C6] text-sm sm:text-base bg-[#111111] px-5 py-6">
            <div className="text-[#04CC00] bg-[#222222] h-[28px] w-[28px] mx-auto flex justify-center items-center rounded-lg">
              {tabContent[activeTab].vps}
            </div>
          </div>

          <div className="text-[#C6C6C6] text-sm sm:text-base font-semibold bg-[#000000] px-5 py-6">
            {t("metaTrader5")}
          </div>
          <div className="text-center text-[#C6C6C6] text-sm sm:text-base bg-[#000000] px-5 py-6">
            <div className="text-[#04CC00] bg-[#222222] h-[28px] w-[28px] mx-auto flex justify-center items-center rounded-lg">
              {tabContent[activeTab].metaTrader5}
            </div>
          </div>

          <div className="text-[#C6C6C6] text-sm sm:text-base font-semibold bg-[#111111] px-5 py-6">
            {t("demo")}
          </div>
          <div className="text-center text-[#C6C6C6] text-sm sm:text-base bg-[#111111] px-5 py-6">
            <div className="text-[#04CC00] bg-[#222222] h-[28px] w-[28px] mx-auto flex justify-center items-center rounded-lg">
              {tabContent[activeTab].demoAccount}
            </div>
          </div>

          <div className="text-[#C6C6C6] text-sm sm:text-base font-semibold bg-[#000000] px-5 py-6">
            {t("webinars")}
          </div>
          <div className="text-center text-[#C6C6C6] text-sm sm:text-base bg-[#000000] px-5 py-6">
            {tabContent[activeTab].webinars}
          </div>

          <div className="text-[#C6C6C6] text-sm sm:text-base font-semibold bg-[#111111] px-5 py-6">
            {t("expertAdvice")}
          </div>
          <div className="text-center text-[#C6C6C6] text-sm sm:text-base bg-[#111111] px-5 py-6">
            {tabContent[activeTab].expertAdvice}
          </div>

          <div className="text-[#C6C6C6] text-sm sm:text-base font-semibold bg-[#000000] px-5 py-6">
            {t("swap")}
          </div>
          <div className="text-center text-[#C6C6C6] text-sm sm:text-base bg-[#000000] px-5 py-6">
            {tabContent[activeTab].swap}
          </div>
          <div className="col-span-2 mx-5">
            <button
              onClick={() => window.open(getRegisterUrl(locale))}
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
