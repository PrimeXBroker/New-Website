"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useLocale, useTranslations } from "next-intl";
import { RiArrowRightUpLine } from "react-icons/ri";
import { RiArrowLeftUpLine } from "react-icons/ri";

const AccountTypes = ({ accounts }) => {
  const locale = useLocale();
  const t = useTranslations("home.accountTypes");
  const [hovered, setHovered] = useState(null);

  return (
    <div className="bg-p dark:bg-p-dark">
      <div className="container">
        <div className="text-center md:text-center mb-10">
          <h2 className="text-3xl sm:text-3xl lg:text-4xl font-bold">
            <span className="text-tm dark:text-tm-dark">{t("title1")}</span>{" "}
            <br className="block sm:hidden" />
            <span className="text-pcp dark:text-pcp-dark">{t("title2")}</span>
          </h2>
          <p className="text-sm sm:text-base lg:text-lg mt-2 md:w-[540px] mx-auto text-ts dark:text-ts-dark">
            {t("desc")}
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {accounts.map((account) => (
            <div
              key={account.id}
              className="bg-cc dark:bg-cc-dark p-6 rounded-xl border-2 border-cc dark:border-cc-dark hover:shadow-xl hover:border-tl dark:hover:border-tl-dark group transition-all duration-500 ease-in-out"
              onMouseEnter={() => setHovered(account.id)}
              onMouseLeave={() => setHovered(null)}
            >
              <Link href={`/${locale}/account-types`}>
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
                      <h3 className="text-xl sm:text-2xl font-semibold text-tm dark:text-tm-dark">
                        {account.title}
                      </h3>
                      <p className="text-sm text-ts dark:text-ts-dark mt-1">
                        {t("deposit")}
                        <span className="font-bold text-base text-tm dark:text-tm-dark">
                          {account.minimumDeposit}
                        </span>
                      </p>
                    </div>
                  </div>
                  <Link href={`/${locale}/account-types`}>
                    <div className="w-[33px] h-[33px] rounded-[5.73px] bg-e1 dark:bg-e1-dark flex justify-center items-center group-hover:bg-tm dark:group-hover:bg-tm-dark transition-all duration-500 ease-in-out">
                      {locale === "ar" || locale === "ps" || locale === "ku" ? (
                        <RiArrowLeftUpLine
                          className={`text-xl transition-transform duration-500 ease-in-out ${
                            hovered === account.id
                              ? "rotate-[-45deg] text-p dark:text-p-dark"
                              : "text-ts dark:text-ts-dark"
                          }`}
                        />
                      ) : (
                        <RiArrowRightUpLine
                          className={`text-xl transition-transform duration-500 ease-in-out ${
                            hovered === account.id
                              ? "rotate-45 text-p dark:text-p-dark"
                              : "text-ts dark:text-ts-dark"
                          }`}
                        />
                      )}
                    </div>
                  </Link>
                </div>
                <p className="text-ts dark:text-ts-dark mt-4 text-sm sm:text-base">
                  {account.description}
                </p>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AccountTypes;
