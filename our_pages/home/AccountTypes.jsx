"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useLocale, useTranslations } from "next-intl";
import { RiArrowRightUpLine } from "react-icons/ri";
import { RiArrowRightLine } from "react-icons/ri";

const AccountTypes = ({ accounts }) => {
  const locale = useLocale();
  const t = useTranslations("home.accountTypes");
  const [hovered, setHovered] = useState(null);

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
            className="bg-[#111111] p-6 rounded-xl border-2 border-[#1d1d1d] hover:shadow-xl group"
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
                    <h3 className="text-xl sm:text-2xl font-semibold text-[#ffffff]">
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
                <Link href={`/${locale}/account-types`}>
                  <div className="w-[33px] h-[33px] rounded-[5.73px] bg-[#1D1D1D] flex justify-center items-center group-hover:bg-[#F9F9F9] transition-all duration-500 ease-in-out">
                    <RiArrowRightUpLine
                      className={`text-xl transition-transform duration-500 ease-in-out ${
                        hovered === account.id
                          ? "rotate-45 text-[#1D1D1D]"
                          : "text-[#C6C6C6]"
                      }`}
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
