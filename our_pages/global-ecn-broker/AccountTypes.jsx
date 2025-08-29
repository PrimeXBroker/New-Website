"use client";
import React from "react";
import Image from "next/image";
import { useLocale, useTranslations } from "next-intl";
import { getRegisterUrl } from "@/utilities/getRegisterUrl";
import CustomYellowButton from "@/components/common/CustomYellowButton";
import { useRouter } from "next/navigation";

const AccountTypes = ({ accounts }) => {
  const router = useRouter();
  const locale = useLocale();
  const t = useTranslations("ecnBroker.accountTypes");

  const handleClick = () => {
    const url = getRegisterUrl(locale);
    router.push(url);
  };

  return (
    <section className="bg-p dark:bg-p-dark text-tm dark:text-tm-dark">
      <div className="container">
        <div className="text-center md:text-center mb-10">
          <h2 className="text-3xl sm:text-3xl lg:text-4xl font-bold text-tm dark:text-tm-dark uppercase">
            {t("title1")} <br className="hidden md:block" />
            <span className="text-pcp dark:text-pcp-dark">{t("title2")}</span>
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
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
                        <p className="text-ts dark:text-ts-dark font-semibold text-lg">
                          {account.subtitle}
                        </p>
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
                  <p className="text-ts dark:text-ts-dark my-6 text-sm sm:text-base">
                    {account.description}
                  </p>
                </div>
                <CustomYellowButton
                  title={account.btnTxt}
                  onClick={handleClick}
                  className="px-5 py-4 text-base w-full justify-between sm:justify-center"
                />
              </div>
            </>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AccountTypes;
