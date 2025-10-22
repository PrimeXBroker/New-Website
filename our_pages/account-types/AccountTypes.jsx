"use client";
import React from "react";
import Image from "next/image";
import { useLocale, useTranslations } from "next-intl";
import AccountTypesPricingTable from "./AccountTypesPricingTable";
import { getRegisterUrl } from "@/utilities/getRegisterUrl";
import CustomYellowButton from "@/components/common/CustomYellowButton";
import { useRouter } from "next/navigation";

const AccountTypes = ({ accounts }) => {
  const router = useRouter();
  const locale = useLocale();
  const t = useTranslations("accountTypes.accountTypes");

  const handleClick = () => {
    const url = getRegisterUrl(locale);
    router.push(url);
  };

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
                    <div className="flex items-center gap-2">
                      <h3
                        className={`text-xl sm:text-2xl font-semibold text-tm dark:text-tm-dark ${
                          account.id === 3 && locale === "ar" ? "w-[104px]" : ""
                        }`}
                      >
                        {account.title}
                      </h3>
                      <div className="bg-[url(https://primexcapital.s3.eu-north-1.amazonaws.com/website/primex-homepage/ecn-gradient-bg.svg)] bg-cover bg-center text-sm text-nb dark:text-nb font-bold w-[43px] h-[25px] rounded-[4px] flex justify-center items-center">
                        ECN
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
                  onClick={handleClick}
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
