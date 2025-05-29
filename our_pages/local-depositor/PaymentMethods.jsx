"use client";
import CustomYellowButton from "@/components/common/CustomYellowButton";
import { getRegisterUrl } from "@/utilities/getRegisterUrl";
import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";
import React from "react";

const PaymentMethods = () => {
  const locale = useLocale();
  const t = useTranslations("localDepositor.paymentmethods");

  const paymentOptions = [
    {
      id: 1,
      name: t("title1"),
      imgUrl:
        "https://primexcapital.s3.eu-north-1.amazonaws.com/website/local-depositor/images/FIB.png",
    },
    {
      id: 2,
      name: t("title2"),
      imgUrl:
        "https://primexcapital.s3.eu-north-1.amazonaws.com/website/local-depositor/images/ASIAPAY.png",
    },
    {
      id: 3,
      name: t("title3"),
      imgUrl:
        "https://primexcapital.s3.eu-north-1.amazonaws.com/website/local-depositor/images/zaincash.png",
    },
    {
      id: 4,
      name: t("title4"),
      imgUrl:
        "https://primexcapital.s3.eu-north-1.amazonaws.com/website/local-depositor/images/RAFDEENBANK.png",
    },
    {
      id: 5,
      name: t("title5"),
      imgUrl:
        "https://primexcapital.s3.eu-north-1.amazonaws.com/website/local-depositor/images/TAIF+.png",
    },
    {
      id: 6,
      name: t("title6"),
      imgUrl:
        "https://primexcapital.s3.eu-north-1.amazonaws.com/website/local-depositor/images/icon-for-logo.svg",
    },
  ];

  const getHomeRegisterUrl = (locale) => {
    switch (locale) {
      case "ar":
        return "https://shorturl.at/2hdlM";
      case "ku":
        return "https://shorturl.at/flGCR";
      default:
        return "";
    }
  };

  return (
    <div className="container flex flex-col items-center py-8">
      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-tm dark:text-tm-dark mb-10">
        {t("heading")}
      </h2>
      <div className="flex flex-wrap lg:flex-nowrap w-full justify-center gap-4 pb-12">
        {paymentOptions.map((el) => (
          <div
            key={el.id}
            className="h-28 md:w-1/6 flex flex-col justify-center items-center gap-5"
          >
            <div className="w-20 h-20">
              <Image
                src={el.imgUrl}
                alt={el.name}
                width={70}
                height={80}
                className="object-contain"
              />
            </div>
            <h2 className="text-ts dark:text-ts-dark">{el.name}</h2>
          </div>
        ))}
      </div>
      <CustomYellowButton
        title={t("buttonText")}
        onClick={() => window.open(getRegisterUrl(locale))}
        className="py-5 px-9 md:py-4 md:px-7 lg:py-4 lg:px-9 text-lg w-full sm:w-auto justify-between sm:justify-center mt-4"
      />
    </div>
  );
};

export default PaymentMethods;
