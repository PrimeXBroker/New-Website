"use client";
import React from "react";
import { useLocale, useTranslations } from "next-intl";
import { getRegisterUrl } from "@/utilities/getRegisterUrl";
import CustomYellowButton from "@/components/common/CustomYellowButton";
import { useRouter } from "next/navigation";

const AccountTypesPricingTable = () => {
  const router = useRouter();
  const locale = useLocale();
  const t = useTranslations("accountTypes.accountsTable");

  const handleClick = () => {
    const url = getRegisterUrl(locale);
    router.push(url);
  };

  return (
    <div className="container mt-10">
      <div className="grid grid-cols-5 text-tm dark:text-tm-dark">
        <div className="text-ts dark:text-ts-dark font-semibold bg-p dark:bg-p-dark px-5 py-6 text-2xl">
          {t("specifications")}
        </div>
        <div className="text-ts dark:text-ts-dark font-semibold bg-p dark:bg-p-dark px-5 py-6 text-center">
          {t("cent.btnTxt")}
        </div>
        <div className="text-ts dark:text-ts-dark font-semibold bg-p dark:bg-p-dark px-5 py-6 text-center">
          {t("standard.btnTxt")}
        </div>
        <div className="text-ts dark:text-ts-dark font-semibold bg-p dark:bg-p-dark px-5 py-6 text-center">
          {t("narrow.btnTxt")}
        </div>
        <div className="text-ts dark:text-ts-dark font-semibold bg-p dark:bg-p-dark px-5 py-6 text-center">
          {t("raw.btnTxt")}
        </div>
        {/* First Row - Black Background */}
        <div className="text-ts dark:text-ts-dark font-semibold bg-p dark:bg-p-dark px-5 py-6">
          {t("minimumDeposit")}
        </div>
        <div className="text-center text-ts dark:text-ts-dark bg-p dark:bg-p-dark px-5 py-6">
          {t("cent.deposit")}
        </div>
        <div className="text-center text-ts dark:text-ts-dark bg-p dark:bg-p-dark px-5 py-6">
          {t("standard.deposit")}
        </div>
        <div className="text-center text-ts dark:text-ts-dark bg-p dark:bg-p-dark px-5 py-6">
          {/* <span className="block font-semibold">
            {t("narrow.deposit-offer")}
          </span> */}
          <span className="relative">{t("narrow.deposit")}</span>
        </div>
        <div className="text-center text-ts dark:text-ts-dark bg-p dark:bg-p-dark px-5 py-6">
          {/* <span className="block font-semibold">{t("raw.deposit-offer")}</span> */}
          <span className="relative ">{t("raw.deposit")}</span>
        </div>

        {/* Second Row - Dark Gray Background */}
        <div className="text-ts dark:text-ts-dark font-semibold bg-cc dark:bg-cc-dark px-5 py-6">
          {t("spread")}
        </div>
        <div className="text-center text-ts dark:text-ts-dark bg-cc dark:bg-cc-dark px-5 py-6">
          {t("cent.spread")}
        </div>
        <div className="text-center text-ts dark:text-ts-dark bg-cc dark:bg-cc-dark px-5 py-6">
          {t("standard.spread")}
        </div>
        <div className="text-center text-ts dark:text-ts-dark bg-cc dark:bg-cc-dark px-5 py-6">
          {t("narrow.spread")}
        </div>
        <div className="text-center text-ts dark:text-ts-dark bg-cc dark:bg-cc-dark px-5 py-6">
          {t("raw.spread")}
        </div>

        {/* Third Row - Black Background */}
        <div className="text-ts dark:text-ts-dark font-semibold bg-p dark:bg-p-dark px-5 py-6">
          {t("commissions")}
        </div>
        <div className="text-center text-ts dark:text-ts-dark bg-p dark:bg-p-dark px-5 py-6">
          {t("cent.commissions")}
        </div>
        <div className="text-center text-ts dark:text-ts-dark bg-p dark:bg-p-dark px-5 py-6">
          {t("standard.commissions")}
        </div>
        <div className="text-center text-ts dark:text-ts-dark bg-p dark:bg-p-dark px-5 py-6">
          {t("narrow.commissions")}
        </div>
        <div className="text-center text-ts dark:text-ts-dark bg-p dark:bg-p-dark px-5 py-6">
          {t("raw.commissions")}
        </div>

        {/* Fourth Row - Dark Gray Background */}
        <div className="text-ts dark:text-ts-dark font-semibold bg-cc dark:bg-cc-dark px-5 py-6">
          {t("leverage")}
        </div>
        <div className="text-center text-ts dark:text-ts-dark bg-cc dark:bg-cc-dark px-5 py-6">
          {t("cent.leverage")}
        </div>
        <div className="text-center text-ts dark:text-ts-dark bg-cc dark:bg-cc-dark px-5 py-6">
          {t("standard.leverage")}
        </div>
        <div className="text-center text-ts dark:text-ts-dark bg-cc dark:bg-cc-dark px-5 py-6">
          {t("narrow.leverage")}
        </div>
        <div className="text-center text-ts dark:text-ts-dark bg-cc dark:bg-cc-dark px-5 py-6">
          {t("raw.leverage")}
        </div>

        {/* Fifth Row - Black Background */}
        <div className="text-ts dark:text-ts-dark font-semibold bg-p dark:bg-p-dark px-5 py-6">
          {t("marginRequired")}
        </div>
        <div className="text-center text-ts dark:text-ts-dark bg-p dark:bg-p-dark px-5 py-6">
          {t("cent.marginRequired")}
        </div>
        <div className="text-center text-ts dark:text-ts-dark bg-p dark:bg-p-dark px-5 py-6">
          {t("standard.marginRequired")}
        </div>
        <div className="text-center text-ts dark:text-ts-dark bg-p dark:bg-p-dark px-5 py-6">
          {t("narrow.marginRequired")}
        </div>
        <div className="text-center text-ts dark:text-ts-dark bg-p dark:bg-p-dark px-5 py-6">
          {t("raw.marginRequired")}
        </div>

        {/* Sixth Row - Dark Gray Background */}
        <div className="text-ts dark:text-ts-dark font-semibold bg-cc dark:bg-cc-dark px-5 py-6">
          {t("minimumLotSize")}
        </div>
        <div className="text-center text-ts dark:text-ts-dark bg-cc dark:bg-cc-dark px-5 py-6">
          {t("cent.minimumLotSize")}
        </div>
        <div className="text-center text-ts dark:text-ts-dark bg-cc dark:bg-cc-dark px-5 py-6">
          {t("standard.minimumLotSize")}
        </div>
        <div className="text-center text-ts dark:text-ts-dark bg-cc dark:bg-cc-dark px-5 py-6">
          {t("narrow.minimumLotSize")}
        </div>
        <div className="text-center text-ts dark:text-ts-dark bg-cc dark:bg-cc-dark px-5 py-6">
          {t("raw.minimumLotSize")}
        </div>

        {/* Seventh Row - Black Background */}
        <div className="text-ts dark:text-ts-dark font-semibold bg-p dark:bg-p-dark px-5 py-6">
          {t("stopOutLevel")}
        </div>
        <div className="text-center text-ts dark:text-ts-dark bg-p dark:bg-p-dark px-5 py-6">
          {t("cent.stopOutLevel")}
        </div>
        <div className="text-center text-ts dark:text-ts-dark bg-p dark:bg-p-dark px-5 py-6">
          {t("standard.stopOutLevel")}
        </div>
        <div className="text-center text-ts dark:text-ts-dark bg-p dark:bg-p-dark px-5 py-6">
          {t("narrow.stopOutLevel")}
        </div>
        <div className="text-center text-ts dark:text-ts-dark bg-p dark:bg-p-dark px-5 py-6">
          {t("raw.stopOutLevel")}
        </div>

        {/* Eighth Row - Dark Gray Background */}
        <div className="text-ts dark:text-ts-dark font-semibold bg-cc dark:bg-cc-dark px-5 py-6">
          {t("marginCallLevel")}
        </div>
        <div className="text-center text-ts dark:text-ts-dark bg-cc dark:bg-cc-dark px-5 py-6">
          {t("cent.marginCallLevel")}
        </div>
        <div className="text-center text-ts dark:text-ts-dark bg-cc dark:bg-cc-dark px-5 py-6">
          {t("standard.marginCallLevel")}
        </div>
        <div className="text-center text-ts dark:text-ts-dark bg-cc dark:bg-cc-dark px-5 py-6">
          {t("narrow.marginCallLevel")}
        </div>
        <div className="text-center text-ts dark:text-ts-dark bg-cc dark:bg-cc-dark px-5 py-6">
          {t("raw.marginCallLevel")}
        </div>

        {/* Ninth Row - Black Background */}
        <div className="text-ts dark:text-ts-dark font-semibold bg-p dark:bg-p-dark px-5 py-6">
          {t("executionType")}
        </div>
        <div className="text-center text-ts dark:text-ts-dark bg-p dark:bg-p-dark px-5 py-6">
          {t("cent.executionType")}
        </div>
        <div className="text-center text-ts dark:text-ts-dark bg-p dark:bg-p-dark px-5 py-6">
          {t("standard.executionType")}
        </div>
        <div className="text-center text-ts dark:text-ts-dark bg-p dark:bg-p-dark px-5 py-6">
          {t("narrow.executionType")}
        </div>
        <div className="text-center text-ts dark:text-ts-dark bg-p dark:bg-p-dark px-5 py-6">
          {t("raw.executionType")}
        </div>

        {/* Tenth Row - Dark Gray Background */}
        <div className="text-ts dark:text-ts-dark font-semibold bg-cc dark:bg-cc-dark px-5 py-6">
          {t("vps")}
        </div>
        <div className="text-center text-ts dark:text-ts-dark bg-cc dark:bg-cc-dark px-5 py-6">
          <div className="text-gc dark:text-gc-dark bg-e1 dark:bg-e1-dark h-[28px] w-[28px] mx-auto flex justify-center items-center rounded-lg">
            {t("cent.vps")}
          </div>
        </div>
        <div className="text-center text-ts dark:text-ts-dark bg-cc dark:bg-cc-dark px-5 py-6">
          <div className="text-gc dark:text-gc-dark bg-e1 dark:bg-e1-dark h-[28px] w-[28px] mx-auto flex justify-center items-center rounded-lg">
            {t("standard.vps")}
          </div>
        </div>
        <div className="text-center text-ts dark:text-ts-dark bg-cc dark:bg-cc-dark px-5 py-6">
          <div className="text-gc dark:text-gc-dark bg-e1 dark:bg-e1-dark h-[28px] w-[28px] mx-auto flex justify-center items-center rounded-lg">
            {t("narrow.vps")}
          </div>
        </div>
        <div className="text-center text-ts dark:text-ts-dark bg-cc dark:bg-cc-dark px-5 py-6">
          <div className="text-gc dark:text-gc-dark bg-e1 dark:bg-e1-dark h-[28px] w-[28px] mx-auto flex justify-center items-center rounded-lg">
            {t("raw.vps")}
          </div>
        </div>

        {/* Eleventh Row - Black Background */}
        <div className=" text-ts dark:text-ts-dark font-semibold bg-p dark:bg-p-dark px-5 py-6">
          {t("metaTrader5")}
        </div>
        <div className="text-center text-ts dark:text-ts-dark bg-p dark:bg-p-dark px-5 py-6">
          <div className="text-gc dark:text-gc-dark bg-e1 dark:bg-e1-dark h-[28px] w-[28px] mx-auto flex justify-center items-center rounded-lg">
            {t("cent.metaTrader5")}
          </div>
        </div>
        <div className="text-center text-ts dark:text-ts-dark bg-p dark:bg-p-dark px-5 py-6">
          <div className="text-gc dark:text-gc-dark bg-e1 dark:bg-e1-dark h-[28px] w-[28px] mx-auto flex justify-center items-center rounded-lg">
            {t("standard.metaTrader5")}
          </div>
        </div>
        <div className="text-center text-ts dark:text-ts-dark bg-p dark:bg-p-dark px-5 py-6">
          <div className="text-gc dark:text-gc-dark bg-e1 dark:bg-e1-dark h-[28px] w-[28px] mx-auto flex justify-center items-center rounded-lg">
            {t("narrow.metaTrader5")}
          </div>
        </div>
        <div className="text-center text-ts dark:text-ts-dark bg-p dark:bg-p-dark px-5 py-6">
          <div className="text-gc dark:text-gc-dark bg-e1 dark:bg-e1-dark h-[28px] w-[28px] mx-auto flex justify-center items-center rounded-lg">
            {t("raw.metaTrader5")}
          </div>
        </div>

        {/* Twelfth Row - Dark Gray Background */}
        <div className="text-ts dark:text-ts-dark font-semibold bg-cc dark:bg-cc-dark px-5 py-6">
          {t("automaticTrading")}
        </div>
        <div className="text-center text-ts dark:text-ts-dark bg-cc dark:bg-cc-dark px-5 py-6">
          <div
            className={`${
              t("cent.automaticTrading") === "X"
                ? "text-rc dark:text-rc-dark"
                : "text-gc dark:text-gc-dark"
            } bg-e1 dark:bg-e1-dark h-[28px] w-[28px] mx-auto flex justify-center items-center rounded-lg`}
          >
            {t("cent.automaticTrading")}
          </div>
        </div>
        <div className="text-center text-ts dark:text-ts-dark bg-cc dark:bg-cc-dark px-5 py-6">
          <div className="text-gc dark:text-gc-dark bg-e1 dark:bg-e1-dark h-[28px] w-[28px] mx-auto flex justify-center items-center rounded-lg">
            {t("standard.automaticTrading")}
          </div>
        </div>
        <div className="text-center text-ts dark:text-ts-dark bg-cc dark:bg-cc-dark px-5 py-6">
          <div className="text-gc dark:text-gc-dark bg-e1 dark:bg-e1-dark h-[28px] w-[28px] mx-auto flex justify-center items-center rounded-lg">
            {t("narrow.automaticTrading")}
          </div>
        </div>
        <div className="text-center text-ts dark:text-ts-dark bg-cc dark:bg-cc-dark px-5 py-6">
          <div className="text-gc dark:text-gc-dark bg-e1 dark:bg-e1-dark h-[28px] w-[28px] mx-auto flex justify-center items-center rounded-lg">
            {t("raw.automaticTrading")}
          </div>
        </div>
        {/* Twelfth Row - Dark Gray Background */}
        <div className="text-ts dark:text-ts-dark font-semibold bg-p dark:bg-p-dark px-5 py-6">
          {t("demo")}
        </div>
        <div className="text-center text-ts dark:text-ts-dark bg-p dark:bg-p-dark px-5 py-6">
          <div className="text-gc dark:text-gc-dark bg-e1 dark:bg-e1-dark h-[28px] w-[28px] mx-auto flex justify-center items-center rounded-lg">
            {t("cent.demoAccount")}
          </div>
        </div>
        <div className="text-center text-ts dark:text-ts-dark bg-p dark:bg-p-dark px-5 py-6">
          <div className="text-gc dark:text-gc-dark bg-e1 dark:bg-e1-dark h-[28px] w-[28px] mx-auto flex justify-center items-center rounded-lg">
            {t("standard.demoAccount")}
          </div>
        </div>
        <div className="text-center text-ts dark:text-ts-dark bg-p dark:bg-p-dark px-5 py-6">
          <div className="text-gc dark:text-gc-dark bg-e1 dark:bg-e1-dark h-[28px] w-[28px] mx-auto flex justify-center items-center rounded-lg">
            {t("narrow.demoAccount")}
          </div>
        </div>
        <div className="text-center text-ts dark:text-ts-dark bg-p dark:bg-p-dark px-5 py-6">
          <div className="text-gc dark:text-gc-dark bg-e1 dark:bg-e1-dark h-[28px] w-[28px] mx-auto flex justify-center items-center rounded-lg">
            {t("raw.demoAccount")}
          </div>
        </div>
        {/* Thirteenth Row - Black Background */}
        <div className="text-ts dark:text-ts-dark font-semibold bg-cc dark:bg-cc-dark px-5 py-6">
          {t("webinars")}
        </div>
        <div className="text-center text-ts dark:text-ts-dark bg-cc dark:bg-cc-dark px-5 py-6">
          {t("cent.webinars")}
        </div>
        <div className="text-center text-ts dark:text-ts-dark bg-cc dark:bg-cc-dark px-5 py-6">
          {t("standard.webinars")}
        </div>
        <div className="text-center text-ts dark:text-ts-dark bg-cc dark:bg-cc-dark px-5 py-6">
          {t("narrow.webinars")}
        </div>
        <div className="text-center text-ts dark:text-ts-dark bg-cc dark:bg-cc-dark px-5 py-6">
          {t("raw.webinars")}
        </div>

        {/* Fourteenth Row - Dark Gray Background */}
        <div className="text-ts dark:text-ts-dark font-semibold bg-p dark:bg-p-dark px-5 py-6">
          {t("expertAdvice")}
        </div>
        <div className="text-center text-ts dark:text-ts-dark bg-p dark:bg-p-dark px-5 py-6">
          {t("cent.expertAdvice")}
        </div>
        <div className="text-center text-ts dark:text-ts-dark bg-p dark:bg-p-dark px-5 py-6">
          {t("standard.expertAdvice")}
        </div>
        <div className="text-center text-ts dark:text-ts-dark bg-p dark:bg-p-dark px-5 py-6">
          {t("narrow.expertAdvice")}
        </div>
        <div className="text-center text-ts dark:text-ts-dark bg-p dark:bg-p-dark px-5 py-6">
          {t("raw.expertAdvice")}
        </div>

        {/* Fifteenth Row - Black Background */}
        <div className="text-ts dark:text-ts-dark font-semibold bg-cc dark:bg-cc-dark px-5 py-6">
          {t("swap")}
        </div>
        <div className="text-center text-ts dark:text-ts-dark bg-cc dark:bg-cc-dark px-5 py-6">
          {t("swapFreeNote")}
        </div>
        <div className="text-center text-ts dark:text-ts-dark bg-cc dark:bg-cc-dark px-5 py-6">
          {t("swapFreeNote")}
        </div>
        <div className="text-center text-ts dark:text-ts-dark bg-cc dark:bg-cc-dark px-5 py-6">
          {t("swapFreeNote")}
        </div>
        <div className="text-center text-ts dark:text-ts-dark bg-cc dark:bg-cc-dark px-5 py-6">
          {t("swapFreeNote")}
        </div>
        <div></div>
        <div className="mx-5">
          <CustomYellowButton
            title={t("cent.btnTxt")}
            onClick={handleClick}
            className="py-4 md:py-3 lg:py-3 text-sm w-full justify-between sm:justify-center mt-5"
          />
        </div>
        <div className="mx-5">
          <CustomYellowButton
            title={t("standard.btnTxt")}
            onClick={handleClick}
            className="py-4 md:py-3 lg:py-3 text-sm w-full justify-between sm:justify-center mt-5"
          />
        </div>
        <div className="mx-5">
          <CustomYellowButton
            title={t("narrow.btnTxt")}
            onClick={handleClick}
            className="py-4 md:py-3 lg:py-3 text-sm w-full justify-between sm:justify-center mt-5"
          />
        </div>
        <div className="mx-5">
          <CustomYellowButton
            title={t("raw.btnTxt")}
            onClick={handleClick}
            className="py-4 md:py-3 lg:py-3 text-sm w-full justify-between sm:justify-center mt-5"
          />
        </div>
      </div>
    </div>
  );
};

export default AccountTypesPricingTable;
