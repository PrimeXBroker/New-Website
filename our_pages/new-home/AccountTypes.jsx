"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useLocale, useTranslations } from "next-intl";

const AccountTypes = ({ accounts }) => {
  const locale = useLocale();
  const t = useTranslations("newHomePage.accountTypes");

  return (
    <div className="bg-black text-white pt-10 pb-20 px-4">
      <div className="text-center md:text-center mb-10">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold">
          <span className="text-white">{t("title1")}</span>{" "}
          <br className="block sm:hidden" />
          <span className="text-[#FED100]">{t("title2")}</span>
        </h2>
        <p className="text-sm sm:text-base lg:text-lg mt-2 md:w-[540px] mx-auto">
          {t("desc")}
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {accounts.map((account) => (
          <div
            key={account.id}
            className="bg-[#111111] p-6 rounded-xl border-2 border-[#1d1d1d] hover:shadow-xl transform translate-y-[1rem] hover:translate-y-0 transition-transform duration-500 group"
          >
            <Link href={`https://primexcapital.com/${locale}/account-types`}>
              <div className="flex justify-between items-start">
                <div className="flex items-start gap-3">
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
                  <div>
                    <h3 className="text-xl sm:text-2xl font-semibold text-[#ffffff] group-hover:text-[#FED100]">
                      {account.title}
                    </h3>
                    <p className="text-sm text-[#c6c6c6] mt-1">
                      {t("deposit")}
                      <span className="font-bold text-base">
                        {account.minimumDeposit}
                      </span>
                    </p>
                  </div>
                </div>
                <Link
                  href={`https://primexcapital.com/${locale}/account-types`}
                >
                  <div className="w-[33px] h-[33px]">
                    <Image
                      unoptimized={true}
                      src="https://primexcapital.s3.eu-north-1.amazonaws.com/website/home/Arrow.svg"
                      alt="Trustpilot"
                      width={100}
                      height={100}
                      className={account.title}
                    />
                  </div>
                </Link>
              </div>
              <p className="text-[#c6c6c6] mt-4 text-sm sm:text-base">
                {account.description}
              </p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AccountTypes;
