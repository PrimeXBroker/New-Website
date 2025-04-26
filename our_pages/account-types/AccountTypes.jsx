"use client";
import React from "react";
import Image from "next/image";
import { useLocale, useTranslations } from "next-intl";
import AccountTypesPricingTable from "./AccountTypesPricingTable";
import { getRegisterUrl } from "@/utilities/getRegisterUrl";
import CustomYellowButton from "@/components/common/CustomYellowButton";

const AccountTypes = ({ accounts }) => {
  const locale = useLocale();
  const t = useTranslations("accountTypes.accountTypes");

  return (
    <section className="bg-p dark:bg-p-dark text-tm dark:text-tm-dark py-16 sm:py-28 px-4">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="flex items-center justify-center md:justify-start">
            <h2
              className={`text-2xl sm:text-3xl lg:text-4xl font-semibold text-pcp dark:text-pcp-dark`}
            >
              {t("main_title1")} <br className="hidden md:block" />
              <span className="text-tm dark:text-tm-dark">
                {" "}
                {t("main_title2")}
              </span>
            </h2>
          </div>
          {accounts.map((account) => (
            <>
              <div
                key={account.id}
                className={`bg-cc dark:bg-cc-dark p-6 rounded-xl flex flex-col justify-between relative ${
                  account.id !== 3 ? "mb-8 md:mb-0" : ""
                }`}
              >
                <div>
                  <div className="flex justify-between items-center">
                    <div className="flex items-start gap-3">
                      <div>
                        <h3 className="text-xl sm:text-2xl font-semibold text-tm dark:text-tm-dark">
                          {account.title}
                        </h3>
                      </div>
                    </div>
                    <div className="w-[54px] h-[54px]">
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
                  <p className="text-ts dark:text-ts-dark mt-4 text-sm sm:text-base">
                    {account.description}
                  </p>
                </div>
                <CustomYellowButton
                  title={account.btnTxt}
                  onClick={() => window.open(getRegisterUrl(locale))}
                  className="py-5 md:py-4 lg:py-4 text-base w-full justify-between sm:justify-center mt-3"
                />
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
