"use client";
import React from "react";
import Image from "next/image";
import { useLocale, useTranslations } from "next-intl";
import { getRegisterUrl } from "@/utilities/getRegisterUrl";
import CustomYellowButton from "@/components/common/CustomYellowButton";
import { useRouter } from "next/navigation";

const AccountTypes = () => {
  const router = useRouter();
  const locale = useLocale();
  const t = useTranslations("newBonusPage.accountTypes");

  const accountTypesData = [
    {
      id: 1,
      title: t("acc1.title"),
      icon: "https://primexcapital.s3.eu-north-1.amazonaws.com/website/primex-homepage/Standard-Account.webp",
      li1_key: t("acc1.li1_key"),
      li1_value: t("acc1.li1_value"),
      li2_key: t("acc1.li2_key"),
      li2_value: t("acc1.li2_value"),
      li3_key: t("acc1.li3_key"),
      li3_value: t("acc1.li3_value"),
      btnTxt: t("acc1.btnTxt"),
    },
    {
      id: 2,
      title: t("acc2.title"),
      icon: "https://primexcapital.s3.eu-north-1.amazonaws.com/website/primex-homepage/Narrow-Account.webp",
      li1_key: t("acc2.li1_key"),
      li1_value: t("acc2.li1_value"),
      li2_key: t("acc2.li2_key"),
      li2_value: t("acc2.li2_value"),
      li3_key: t("acc2.li3_key"),
      li3_value: t("acc2.li3_value"),
      btnTxt: t("acc2.btnTxt"),
    },
    {
      id: 3,
      title: t("acc3.title"),
      icon: "https://primexcapital.s3.eu-north-1.amazonaws.com/website/primex-homepage/Raw-Account.webp",
      li1_key: t("acc3.li1_key"),
      li1_value: t("acc3.li1_value"),
      li2_key: t("acc3.li2_key"),
      li2_value: t("acc3.li2_value"),
      li3_key: t("acc3.li3_key"),
      li3_value: t("acc3.li3_value"),
      btnTxt: t("acc3.btnTxt"),
    },
  ];

  const handleClick = () => {
    const url = getRegisterUrl(locale);
    router.push(url);
  };

  return (
    <section className="bg-p dark:bg-p-dark text-tm dark:text-tm-dark pt-16 sm:pt-28 px-4">
      <div className="container">
        <div className="text-center md:text-center mb-10">
          <h2 className="text-3xl sm:text-3xl lg:text-4xl font-bold text-tm dark:text-tm-dark uppercase leading-tight">
            <span className="text-pcp dark:text-pcp-dark leading-tight">
              {t("main_title1")}
            </span>
            {t("main_title2")} <br className="hidden md:block" />
            {t("main_title3")}
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {accountTypesData.map((account) => (
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
                  <div className="my-6">
                    <div className="flex justify-between items-center">
                      <p className="text-ts dark:text-ts-dark text-sm sm:text-base">
                        {account.li1_key}
                      </p>
                      <p className="text-tm dark:text-tm-dark text-sm sm:text-base">
                        {account.li1_value}
                      </p>
                    </div>
                    <div className="flex justify-between items-center my-6">
                      <p className="text-ts dark:text-ts-dark text-sm sm:text-base">
                        {account.li2_key}
                      </p>
                      <p className="text-tm dark:text-tm-dark text-sm sm:text-base">
                        {account.li2_value}
                      </p>
                    </div>
                    <div className="flex justify-between items-center">
                      <p className="text-ts dark:text-ts-dark text-sm sm:text-base">
                        {account.li3_key}
                      </p>
                      <p className="text-tm dark:text-tm-dark text-sm sm:text-base">
                        {account.li3_value}
                      </p>
                    </div>
                  </div>
                </div>
                <CustomYellowButton
                  title={account.btnTxt}
                  onClick={handleClick}
                  className="px-5 py-4 text-base w-full sm:w-auto justify-between sm:justify-center"
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
