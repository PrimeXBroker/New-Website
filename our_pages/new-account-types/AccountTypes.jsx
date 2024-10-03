"use client";
import React from "react";
import Image from "next/image";
import { useLocale, useTranslations } from "next-intl";
import AccountTypesPricingTable from "./AccountTypesPricingTable";

const AccountTypes = ({ accounts }) => {
  const locale = useLocale();
  const t = useTranslations("newAccountTypes.accountTypes");

  return (
    <section className="bg-black text-white pt-10 pb-20 px-4">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="hidden lg:block"></div>

          {accounts.map((account, index) => (
            <>
              <div
                key={account.id}
                className="bg-[#111111] p-6 rounded-xl border-2 border-[#1d1d1d] hover:shadow-xl transform translate-y-[1rem] hover:translate-y-0 transition-transform duration-500 group flex flex-col justify-between"
              >
                <div>
                  <div className="flex justify-between items-center">
                    <div className="flex items-start gap-3">
                      <div>
                        <h3 className="text-xl sm:text-2xl font-semibold text-[#ffffff] group-hover:text-[#FED100]">
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
                  onClick={() =>
                    window.open(
                      `${
                        locale === "ar"
                          ? "https://client.primexbroker.com/ar/register"
                          : "https://client.primexbroker.com/en/register"
                      }`
                    )
                  }
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
