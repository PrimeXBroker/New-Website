"use client";
import React from "react";
import { useLocale, useTranslations } from "next-intl";
import { getRegisterUrl } from "@/utilities/getRegisterUrl";
import Image from "next/image";
import CustomWhiteButton from "@/components/common/CustomWhiteButton";
import { useRouter } from "next/navigation";

const SpreadAccountsDesktopTable = () => {
  const router = useRouter();
  const locale = useLocale();
  const t = useTranslations("accountTypes.accountsTable");
  const s = useTranslations("spreadPage.accountTypesTable");

  const handleClick = () => {
    const url = getRegisterUrl(locale);
    router.push(url);
  };

  return (
    <div className="container">
      <div className="grid grid-cols-4 text-tm dark:text-tm-dark bg-cc dark:bg-cc-dark p-10 rounded-2xl">
        <div className="text-pcp dark:text-pcp-dark font-semibold bg-cc dark:bg-cc-dark px-5 py-7 text-2xl">
          {s("specification1")}{" "}
          <span className="text-[#ffffff]">{s("specification2")}</span>
        </div>
        <div className="text-tm dark:text-tm-dark font-semibold px-5 py-7 text-2xl text-center flex justify-center gap-2">
          <Image
            unoptimized={true}
            src="https://primexcapital.s3.eu-north-1.amazonaws.com/website/primex-homepage/Standard-Account.webp"
            alt="Standard"
            width={100}
            height={100}
            className="w-[30px] h-[30px]"
          />
          {s("type1")}
        </div>
        <div className="text-tm dark:text-tm-dark font-semibold px-5 py-7 text-2xl text-center flex justify-center gap-2">
          <Image
            unoptimized={true}
            src="https://primexcapital.s3.eu-north-1.amazonaws.com/website/primex-homepage/Narrow-Account.webp"
            alt="Standard"
            width={100}
            height={100}
            className="w-[30px] h-[30px]"
          />
          {s("type2")}
        </div>
        <div className="text-tm dark:text-tm-dark font-semibold px-5 py-7 text-2xl text-center flex justify-center gap-2">
          <Image
            unoptimized={true}
            src="https://primexcapital.s3.eu-north-1.amazonaws.com/website/primex-homepage/Raw-Account.webp"
            alt="Standard"
            width={100}
            height={100}
            className="w-[30px] h-[30px]"
          />
          {s("type3")}
        </div>
        {/* Second Row - Dark Gray Background */}
        <div className="text-ts dark:text-ts-dark font-semibold bg-cc dark:bg-cc-dark px-5 py-7">
          {t("spread")}
        </div>
        <div className="text-center text-ts dark:text-ts-dark bg-cc dark:bg-cc-dark px-5 py-7">
          {t("standard.spread")}
        </div>
        <div className="text-center text-ts dark:text-ts-dark bg-cc dark:bg-cc-dark px-5 py-7">
          {t("narrow.spread")}
        </div>
        <div className="text-center text-ts dark:text-ts-dark bg-cc dark:bg-cc-dark px-5 py-7">
          {t("raw.spread")}
        </div>
        {/* First Row - Black Background */}
        <div className="text-ts dark:text-ts-dark font-semibold bg-e1 dark:bg-e1-dark px-5 py-7">
          {t("minimumDeposit")}
        </div>
        <div className="text-center text-ts dark:text-ts-dark bg-e1 dark:bg-e1-dark px-5 py-7">
          {t("standard.deposit")}
        </div>
        <div className="text-center text-ts dark:text-ts-dark bg-e1 dark:bg-e1-dark px-5 py-7">
          {/* <span className="block font-semibold">
            {t("narrow.deposit-offer")}
          </span> */}
          <span className="relative">{t("narrow.deposit")}</span>
        </div>
        <div className="text-center text-ts dark:text-ts-dark bg-e1 dark:bg-e1-dark px-5 py-7">
          {/* <span className="block font-semibold">{t("raw.deposit-offer")}</span> */}
          <span className="relative ">{t("raw.deposit")}</span>
        </div>
        {/* Third Row - Black Background */}
        <div className="text-ts dark:text-ts-dark font-semibold bg-cc dark:bg-cc-dark px-5 py-7">
          {t("commissions")}
        </div>
        <div className="text-center text-ts dark:text-ts-dark bg-cc dark:bg-cc-dark px-5 py-7">
          {t("standard.commissions")}
        </div>
        <div className="text-center text-ts dark:text-ts-dark bg-cc dark:bg-cc-dark px-5 py-7">
          {t("narrow.commissions")}
        </div>
        <div className="text-center text-ts dark:text-ts-dark bg-cc dark:bg-cc-dark px-5 py-7">
          {t("raw.commissions")}
        </div>
        <div></div>
        <div className="mx-5">
          <CustomWhiteButton
            title={t("standard.btnTxt")}
            onClick={handleClick}
            className="py-4 md:py-3 lg:py-3 text-base w-full justify-between sm:justify-center mt-5"
          />
        </div>
        <div className="mx-5">
          <CustomWhiteButton
            title={t("narrow.btnTxt")}
            onClick={handleClick}
            className="py-4 md:py-3 lg:py-3 text-base w-full justify-between sm:justify-center mt-5"
          />
        </div>
        <div className="mx-5">
          <CustomWhiteButton
            title={t("raw.btnTxt")}
            onClick={handleClick}
            className="py-4 md:py-3 lg:py-3 text-base w-full justify-between sm:justify-center mt-5"
          />
        </div>
      </div>
    </div>
  );
};

export default SpreadAccountsDesktopTable;
