import React from "react";
import { useLocale, useTranslations } from "next-intl";
import { getRegisterUrl } from "@/utilities/getRegisterUrl";
import Image from "next/image";
import {
  BsArrowUpLeftCircleFill,
  BsArrowUpRightCircleFill,
} from "react-icons/bs";

const SpreadAccountsDesktopTable = () => {
  const locale = useLocale();
  const t = useTranslations("accountTypes.accountsTable");
  const s = useTranslations("spreadPage.accountTypesTable");

  return (
    <div className="container mt-10">
      <div className="grid grid-cols-4 text-white bg-[#1A1A1A] p-10 rounded-2xl">
        <div className="text-[#FED100] font-semibold bg-[#1A1A1A] px-5 py-7 text-2xl">
          {s("specification1")}{" "}
          <span className="text-[#ffffff]">{s("specification2")}</span>
        </div>
        <div className="text-white font-semibold px-5 py-7 text-2xl text-center flex justify-center gap-2">
          <Image
            unoptimized={true}
            src="https://primexcapital.s3.eu-north-1.amazonaws.com/website/home/Standard+Account.svg"
            alt="Standard"
            width={100}
            height={100}
            className="w-[30px] h-[30px]"
          />
          {s("type1")}
        </div>
        <div className="text-white font-semibold px-5 py-7 text-2xl text-center flex justify-center gap-2">
          <Image
            unoptimized={true}
            src="https://primexcapital.s3.eu-north-1.amazonaws.com/website/home/Narrow+Account.svg"
            alt="Standard"
            width={100}
            height={100}
            className="w-[30px] h-[30px]"
          />
          {s("type2")}
        </div>
        <div className="text-white font-semibold px-5 py-7 text-2xl text-center flex justify-center gap-2">
          <Image
            unoptimized={true}
            src="https://primexcapital.s3.eu-north-1.amazonaws.com/website/home/Raw+Account.svg"
            alt="Standard"
            width={100}
            height={100}
            className="w-[30px] h-[30px]"
          />
          {s("type3")}
        </div>
        {/* Second Row - Dark Gray Background */}
        <div className="text-[#C6C6C6] font-semibold bg-[#1A1A1A] px-5 py-7">
          {t("spread")}
        </div>
        <div className="text-center text-[#C6C6C6] bg-[#1A1A1A] px-5 py-7">
          {t("standard.spread")}
        </div>
        <div className="text-center text-[#C6C6C6] bg-[#1A1A1A] px-5 py-7">
          {t("narrow.spread")}
        </div>
        <div className="text-center text-[#C6C6C6] bg-[#1A1A1A] px-5 py-7">
          {t("raw.spread")}
        </div>
        {/* First Row - Black Background */}
        <div className="text-[#C6C6C6] font-semibold bg-[#242424] px-5 py-7">
          {t("minimumDeposit")}
        </div>
        <div className="text-center text-[#C6C6C6] bg-[#242424] px-5 py-7">
          {t("standard.deposit")}
        </div>
        <div className="text-center text-[#C6C6C6] bg-[#242424] px-5 py-7">
          {/* <span className="block font-semibold">
            {t("narrow.deposit-offer")}
          </span> */}
          <span className="relative">{t("narrow.deposit")}</span>
        </div>
        <div className="text-center text-[#C6C6C6] bg-[#242424] px-5 py-7">
          {/* <span className="block font-semibold">{t("raw.deposit-offer")}</span> */}
          <span className="relative ">{t("raw.deposit")}</span>
        </div>
        {/* Third Row - Black Background */}
        <div className="text-[#C6C6C6] font-semibold bg-[#1A1A1A] px-5 py-7">
          {t("commissions")}
        </div>
        <div className="text-center text-[#C6C6C6] bg-[#1A1A1A] px-5 py-7">
          {t("standard.commissions")}
        </div>
        <div className="text-center text-[#C6C6C6] bg-[#1A1A1A] px-5 py-7">
          {t("narrow.commissions")}
        </div>
        <div className="text-center text-[#C6C6C6] bg-[#1A1A1A] px-5 py-7">
          {t("raw.commissions")}
        </div>
        <div></div>
        <div className="mx-5">
          <button
            onClick={() => window.open(getRegisterUrl(locale))}
            className="py-3 w-full font-semibold text-center custom-button-white-yellow text-sm mt-3 flex items-center gap-3 justify-center"
          >
            {t("standard.btnTxt")}
            {locale === "ar" || locale === "kd" ? (
              <BsArrowUpLeftCircleFill />
            ) : (
              <BsArrowUpRightCircleFill />
            )}
          </button>
        </div>
        <div className="mx-5">
          <button
            onClick={() => window.open(getRegisterUrl(locale))}
            className="py-3 w-full font-semibold text-center custom-button-white-yellow text-sm mt-3 flex items-center gap-3 justify-center"
          >
            {t("narrow.btnTxt")}
            {locale === "ar" || locale === "kd" ? (
              <BsArrowUpLeftCircleFill />
            ) : (
              <BsArrowUpRightCircleFill />
            )}
          </button>
        </div>
        <div className="mx-5">
          <button
            onClick={() => window.open(getRegisterUrl(locale))}
            className="py-3 w-full font-semibold text-center custom-button-white-yellow text-sm mt-3 flex items-center gap-3 justify-center"
          >
            {t("raw.btnTxt")}
            {locale === "ar" || locale === "kd" ? (
              <BsArrowUpLeftCircleFill />
            ) : (
              <BsArrowUpRightCircleFill />
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default SpreadAccountsDesktopTable;
