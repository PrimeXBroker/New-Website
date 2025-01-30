"use client";
import React from "react";
import Image from "next/image";
import { useLocale, useTranslations } from "next-intl";
import AccountTypesPricingTable from "./AccountTypesPricingTable";
import { getRegisterUrl } from "@/utilities/getRegisterUrl";

const AccountTypes = ({ accounts }) => {
  const locale = useLocale();
  const t = useTranslations("accountTypes.accountTypes");

  return (
    <section className="bg-black text-white pt-10 pb-20 px-4">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="flex items-center justify-center md:justify-start">
            <h2
              className={`text-2xl sm:text-3xl lg:text-4xl font-semibold text-[#FED100]`}
            >
              {t("main_title1")} <br className="hidden md:block" />
              <span className="text-[#ffffff]"> {t("main_title2")}</span>
            </h2>
          </div>
          {accounts.map((account) => (
            <>
              <div
                key={account.id}
                className={`bg-[#111111] p-6 rounded-xl border-2 border-[#1d1d1d] hover:shadow-xl flex flex-col justify-between relative ${
                  account.id !== 3 ? "mb-8 md:mb-0" : ""
                }`}
              >
                {/* {(account.id === 2 || account.id === 3) && (
                  <div
                    className={`absolute ${
                      locale === "ar" || locale === "fa" || locale === "kd"
                        ? "top-[-36px] right-0"
                        : "top-[-36px] left-0"
                    } flex justify-center items-center w-[58px] h-[58px]`}
                  >
                    <Image
                      src="https://primexcapital.s3.eu-north-1.amazonaws.com/website/account-types/Offer.svg"
                      alt="Offer"
                      width={58}
                      height={58}
                    />
                    <span className="absolute inset-0 flex justify-center items-center text-[#ffffff] font-bold text-xs">
                      {t("offer")}
                    </span>
                  </div>
                )} */}
                <div>
                  <div className="flex justify-between items-center">
                    <div className="flex items-start gap-3">
                      <div>
                        <h3 className="text-xl sm:text-2xl font-semibold text-[#ffffff]">
                          {account.title}
                        </h3>
                      </div>
                    </div>
                    <div className="w-[58px] h-[58px]">
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
                  <p className="text-[#c6c6c6] mt-4 text-sm sm:text-base">
                    {account.description}
                  </p>
                </div>
                <button
                  onClick={() => window.open(getRegisterUrl(locale))}
                  className="py-3 w-full block font-semibold text-center custom-button text-sm mt-3"
                >
                  {account.btnTxt}
                </button>
              </div>
            </>
          ))}
        </div>
      </div>
      <div className="hidden lg:block">
        <AccountTypesPricingTable />
      </div>
    </section>
  );
};

export default AccountTypes;
