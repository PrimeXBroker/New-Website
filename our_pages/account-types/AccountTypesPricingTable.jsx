import React from "react";
import { useLocale, useTranslations } from "next-intl";
import Link from "next/link";

const AccountTypesPricingTable = () => {
  const locale = useLocale();
  const t = useTranslations("accountTypes.accountsTable");

  return (
    <div className="container mt-10">
      <div className="grid grid-cols-4 text-white">
        <div className="text-[#C6C6C6] font-semibold bg-[#000000] px-5 py-6 text-2xl">
          {t("specifications")}
        </div>
        <div className=""></div>
        <div className=""></div>
        <div className=""></div>
        {/* First Row - Black Background */}
        <div className="text-[#C6C6C6] font-semibold bg-[#000000] px-5 py-6">
          {t("minimumDeposit")}
        </div>
        <div className="text-center text-[#C6C6C6] bg-[#000000] px-5 py-6">
          {t("standard.deposit")}
        </div>
        <div className="text-center text-[#C6C6C6] bg-[#000000] px-5 py-6">
          {t("narrow.deposit")}
        </div>
        <div className="text-center text-[#C6C6C6] bg-[#000000] px-5 py-6">
          {t("raw.deposit")}
        </div>

        {/* Second Row - Dark Gray Background */}
        <div className="text-[#C6C6C6] font-semibold bg-[#111111] px-5 py-6">
          {t("spread")}
        </div>
        <div className="text-center text-[#C6C6C6] bg-[#111111] px-5 py-6">
          {t("standard.spread")}
        </div>
        <div className="text-center text-[#C6C6C6] bg-[#111111] px-5 py-6">
          {t("narrow.spread")}
        </div>
        <div className="text-center text-[#C6C6C6] bg-[#111111] px-5 py-6">
          {t("raw.spread")}
        </div>

        {/* Third Row - Black Background */}
        <div className="text-[#C6C6C6] font-semibold bg-[#000000] px-5 py-6">
          {t("commissions")}
        </div>
        <div className="text-center text-[#C6C6C6] bg-[#000000] px-5 py-6">
          {t("standard.commissions")}
        </div>
        <div className="text-center text-[#C6C6C6] bg-[#000000] px-5 py-6">
          {t("narrow.commissions")}
        </div>
        <div className="text-center text-[#C6C6C6] bg-[#000000] px-5 py-6">
          {t("raw.commissions")}
        </div>

        {/* Fourth Row - Dark Gray Background */}
        <div className="text-[#C6C6C6] font-semibold bg-[#111111] px-5 py-6">
          {t("leverage")}
        </div>
        <div className="text-center text-[#C6C6C6] bg-[#111111] px-5 py-6">
          {t("standard.leverage")}
        </div>
        <div className="text-center text-[#C6C6C6] bg-[#111111] px-5 py-6">
          {t("narrow.leverage")}
        </div>
        <div className="text-center text-[#C6C6C6] bg-[#111111] px-5 py-6">
          {t("raw.leverage")}
        </div>

        {/* Fifth Row - Black Background */}
        <div className="text-[#C6C6C6] font-semibold bg-[#000000] px-5 py-6">
          {t("marginRequired")}
        </div>
        <div className="text-center text-[#C6C6C6] bg-[#000000] px-5 py-6">
          {t("standard.marginRequired")}
        </div>
        <div className="text-center text-[#C6C6C6] bg-[#000000] px-5 py-6">
          {t("narrow.marginRequired")}
        </div>
        <div className="text-center text-[#C6C6C6] bg-[#000000] px-5 py-6">
          {t("raw.marginRequired")}
        </div>

        {/* Sixth Row - Dark Gray Background */}
        <div className="text-[#C6C6C6] font-semibold bg-[#111111] px-5 py-6">
          {t("minimumLotSize")}
        </div>
        <div className="text-center text-[#C6C6C6] bg-[#111111] px-5 py-6">
          {t("standard.minimumLotSize")}
        </div>
        <div className="text-center text-[#C6C6C6] bg-[#111111] px-5 py-6">
          {t("narrow.minimumLotSize")}
        </div>
        <div className="text-center text-[#C6C6C6] bg-[#111111] px-5 py-6">
          {t("raw.minimumLotSize")}
        </div>

        {/* Seventh Row - Black Background */}
        <div className="text-[#C6C6C6] font-semibold bg-[#000000] px-5 py-6">
          {t("stopOutLevel")}
        </div>
        <div className="text-center text-[#C6C6C6] bg-[#000000] px-5 py-6">
          {t("standard.stopOutLevel")}
        </div>
        <div className="text-center text-[#C6C6C6] bg-[#000000] px-5 py-6">
          {t("narrow.stopOutLevel")}
        </div>
        <div className="text-center text-[#C6C6C6] bg-[#000000] px-5 py-6">
          {t("raw.stopOutLevel")}
        </div>

        {/* Eighth Row - Dark Gray Background */}
        <div className="text-[#C6C6C6] font-semibold bg-[#111111] px-5 py-6">
          {t("marginCallLevel")}
        </div>
        <div className="text-center text-[#C6C6C6] bg-[#111111] px-5 py-6">
          {t("standard.marginCallLevel")}
        </div>
        <div className="text-center text-[#C6C6C6] bg-[#111111] px-5 py-6">
          {t("narrow.marginCallLevel")}
        </div>
        <div className="text-center text-[#C6C6C6] bg-[#111111] px-5 py-6">
          {t("raw.marginCallLevel")}
        </div>

        {/* Ninth Row - Black Background */}
        <div className="text-[#C6C6C6] font-semibold bg-[#000000] px-5 py-6">
          {t("executionType")}
        </div>
        <div className="text-center text-[#C6C6C6] bg-[#000000] px-5 py-6">
          {t("standard.executionType")}
        </div>
        <div className="text-center text-[#C6C6C6] bg-[#000000] px-5 py-6">
          {t("narrow.executionType")}
        </div>
        <div className="text-center text-[#C6C6C6] bg-[#000000] px-5 py-6">
          {t("raw.executionType")}
        </div>

        {/* Tenth Row - Dark Gray Background */}
        <div className="text-[#C6C6C6] font-semibold bg-[#111111] px-5 py-6">
          {t("vps")}
        </div>
        <div className="text-center text-[#C6C6C6] bg-[#111111] px-5 py-6">
          <div className="text-[#04CC00] bg-[#222222] h-[28px] w-[28px] mx-auto flex justify-center items-center rounded-lg">
            {t("standard.vps")}
          </div>
        </div>
        <div className="text-center text-[#C6C6C6] bg-[#111111] px-5 py-6">
          <div className="text-[#04CC00] bg-[#222222] h-[28px] w-[28px] mx-auto flex justify-center items-center rounded-lg">
            {t("narrow.vps")}
          </div>
        </div>
        <div className="text-center text-[#C6C6C6] bg-[#111111] px-5 py-6">
          <div className="text-[#04CC00] bg-[#222222] h-[28px] w-[28px] mx-auto flex justify-center items-center rounded-lg">
            {t("raw.vps")}
          </div>
        </div>

        {/* Eleventh Row - Black Background */}
        <div className=" text-[#C6C6C6] font-semibold bg-[#000000] px-5 py-6">
          {t("metaTrader5")}
        </div>
        <div className="text-center text-[#C6C6C6] bg-[#000000] px-5 py-6">
          <div className="text-[#04CC00] bg-[#222222] h-[28px] w-[28px] mx-auto flex justify-center items-center rounded-lg">
            {t("standard.metaTrader5")}
          </div>
        </div>
        <div className="text-center text-[#C6C6C6] bg-[#000000] px-5 py-6">
          <div className="text-[#04CC00] bg-[#222222] h-[28px] w-[28px] mx-auto flex justify-center items-center rounded-lg">
            {t("narrow.metaTrader5")}
          </div>
        </div>
        <div className="text-center text-[#C6C6C6] bg-[#000000] px-5 py-6">
          <div className="text-[#04CC00] bg-[#222222] h-[28px] w-[28px] mx-auto flex justify-center items-center rounded-lg">
            {t("raw.metaTrader5")}
          </div>
        </div>

        {/* Twelfth Row - Dark Gray Background */}
        <div className="text-[#C6C6C6] font-semibold bg-[#111111] px-5 py-6">
          {t("automaticTrading")}
        </div>
        <div className="text-center text-[#C6C6C6] bg-[#111111] px-5 py-6">
          <div className="text-[#04CC00] bg-[#222222] h-[28px] w-[28px] mx-auto flex justify-center items-center rounded-lg">
            {t("standard.automaticTrading")}
          </div>
        </div>
        <div className="text-center text-[#C6C6C6] bg-[#111111] px-5 py-6">
          <div className="text-[#04CC00] bg-[#222222] h-[28px] w-[28px] mx-auto flex justify-center items-center rounded-lg">
            {t("narrow.automaticTrading")}
          </div>
        </div>
        <div className="text-center text-[#C6C6C6] bg-[#111111] px-5 py-6">
          <div className="text-[#04CC00] bg-[#222222] h-[28px] w-[28px] mx-auto flex justify-center items-center rounded-lg">
            {t("raw.automaticTrading")}
          </div>
        </div>
        {/* Twelfth Row - Dark Gray Background */}
        <div className="text-[#C6C6C6] font-semibold bg-[#111111] px-5 py-6">
          {t("demo")}
        </div>
        <div className="text-center text-[#C6C6C6] bg-[#111111] px-5 py-6">
          <div className="text-[#04CC00] bg-[#222222] h-[28px] w-[28px] mx-auto flex justify-center items-center rounded-lg">
            {t("standard.demoAccount")}
          </div>
        </div>
        <div className="text-center text-[#C6C6C6] bg-[#111111] px-5 py-6">
          <div className="text-[#04CC00] bg-[#222222] h-[28px] w-[28px] mx-auto flex justify-center items-center rounded-lg">
            {t("narrow.demoAccount")}
          </div>
        </div>
        <div className="text-center text-[#C6C6C6] bg-[#111111] px-5 py-6">
          <div className="text-[#04CC00] bg-[#222222] h-[28px] w-[28px] mx-auto flex justify-center items-center rounded-lg">
            {t("raw.demoAccount")}
          </div>
        </div>
        {/* Thirteenth Row - Black Background */}
        <div className="text-[#C6C6C6] font-semibold bg-[#000000] px-5 py-6">
          {t("webinars")}
        </div>
        <div className="text-center text-[#C6C6C6] bg-[#000000] px-5 py-6">
          {t("standard.webinars")}
        </div>
        <div className="text-center text-[#C6C6C6] bg-[#000000] px-5 py-6">
          {t("narrow.webinars")}
        </div>
        <div className="text-center text-[#C6C6C6] bg-[#000000] px-5 py-6">
          {t("raw.webinars")}
        </div>

        {/* Fourteenth Row - Dark Gray Background */}
        <div className="text-[#C6C6C6] font-semibold bg-[#111111] px-5 py-6">
          {t("expertAdvice")}
        </div>
        <div className="text-center text-[#C6C6C6] bg-[#111111] px-5 py-6">
          {t("standard.expertAdvice")}
        </div>
        <div className="text-center text-[#C6C6C6] bg-[#111111] px-5 py-6">
          {t("narrow.expertAdvice")}
        </div>
        <div className="text-center text-[#C6C6C6] bg-[#111111] px-5 py-6">
          {t("raw.expertAdvice")}
        </div>

        {/* Fifteenth Row - Black Background */}
        <div className="text-[#C6C6C6] font-semibold bg-[#000000] px-5 py-6">
          {t("swap")}
        </div>
        <div className="text-center text-[#C6C6C6] bg-[#000000] px-5 py-6">
          {t("swapFreeNote")}
        </div>
        <div className="text-center text-[#C6C6C6] bg-[#000000] px-5 py-6">
          {t("swapFreeNote")}
        </div>
        <div className="text-center text-[#C6C6C6] bg-[#000000] px-5 py-6">
          {t("swapFreeNote")}
        </div>
        <div></div>
        <div className="mx-5">
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
            {t("standard.btnTxt")}
          </button>
        </div>
        <div className="mx-5">
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
            {t("narrow.btnTxt")}
          </button>
        </div>
        <div className="mx-5">
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
            {t("raw.btnTxt")}
          </button>
        </div>
      </div>
    </div>
  );
};

export default AccountTypesPricingTable;
