"use client";
import React, { useState } from "react";
import { useLocale, useTranslations } from "next-intl";
import { getRegisterUrl } from "@/utilities/getRegisterUrl";
import Image from "next/image";
import {
  BsArrowUpLeftCircleFill,
  BsArrowUpRightCircleFill,
} from "react-icons/bs";

const SpreadAccountMobileTable = () => {
  const locale = useLocale();
  const t = useTranslations("accountTypes.accountsTable");
  const [activeTab, setActiveTab] = useState("standard");
  const o = useTranslations("accountTypes.accountsTable");
  const l = useTranslations("accountTypes.accountTypes");
  const s = useTranslations("spreadPage.accountTypesTable");

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
    <section className="bg-black">
      <div className="container">
        <div className="bg-[#1A1A1A] p-5">
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
                    locale === "ar" || locale === "fa" || locale === "ku"
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
            <div className="text-white text-xl font-semibold bg-[#1A1A1A] px-5 py-6">
              {s("specification1")}{" "}
              <span className="text-[#FED100]">{s("specification2")}</span>
            </div>
            <div className=""></div>

            <div className="text-[#C6C6C6] text-sm sm:text-base font-semibold bg-[#1A1A1A] px-5 py-6">
              {t("minimumDeposit")}
            </div>
            <div className="text-center text-[#C6C6C6] text-sm sm:text-base bg-[#1A1A1A] px-5 py-6">
              {/* <span className="block font-semibold">
              {tabContent[activeTab].depositOffer}
            </span> */}
              <span className={`relative`}>
                {tabContent[activeTab].deposit}
              </span>
            </div>

            <div className="text-[#C6C6C6] text-sm sm:text-base font-semibold bg-[#242424] px-5 py-6">
              {t("spread")}
            </div>
            <div className="text-center text-[#C6C6C6] text-sm sm:text-base bg-[#242424] px-5 py-6">
              {tabContent[activeTab].spread}
            </div>

            <div className="text-[#C6C6C6] text-sm sm:text-base font-semibold bg-[#1A1A1A] px-5 py-6">
              {t("commissions")}
            </div>
            <div className="text-center text-[#C6C6C6] text-sm sm:text-base bg-[#1A1A1A] px-5 py-6">
              {tabContent[activeTab].commissions}
            </div>
            <div className="text-center text-[#C6C6C6] text-sm sm:text-base bg-[#1A1A1A] px-5 py-6">
              {tabContent[activeTab].swap}
            </div>
            <div className="col-span-2 mx-5">
              <button
                onClick={() => window.open(getRegisterUrl(locale))}
                className="py-3 w-full font-semibold text-center custom-button-white-yellow text-sm mt-3 flex items-center gap-3 justify-center"
              >
                {tabContent[activeTab].btnTxt}
                {locale === "ar" || locale === "ku" ? (
                  <BsArrowUpLeftCircleFill />
                ) : (
                  <BsArrowUpRightCircleFill />
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SpreadAccountMobileTable;
