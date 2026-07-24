"use client";
import { useLocale, useTranslations } from "next-intl";
import { useTheme } from "next-themes";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

const PaymentMethods = () => {
  const router = useRouter();
  const locale = useLocale();
  const { theme } = useTheme();
  const t = useTranslations("localDepositor.paymentmethods");

  const iraqPaymentOptions = [
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

  const syriaPaymentOptions = [
    {
      id: 1,
      name: t("title7"),
      imgUrlDark:
        "https://primexcapital.s3.eu-north-1.amazonaws.com/website/local-depositor/Icon+3.png",
      imgUrlLight:
        "https://primexcapital.s3.eu-north-1.amazonaws.com/website/local-depositor/Icon+3.png",
    },
    {
      id: 2,
      name: t("title8"),
      imgUrlDark:
        "https://primexcapital.s3.eu-north-1.amazonaws.com/website/local-depositor/Icon+2.png",
      imgUrlLight:
        "https://primexcapital.s3.eu-north-1.amazonaws.com/website/local-depositor/Icon+2+Light+Mode.png",
    },
    {
      id: 3,
      name: t("title9"),
      imgUrlDark:
        "https://primexcapital.s3.eu-north-1.amazonaws.com/website/local-depositor/Icon+1.png",
      imgUrlLight:
        "https://primexcapital.s3.eu-north-1.amazonaws.com/website/local-depositor/Icon+1+Light+Mode.png",
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
    <section className="bg-p dark:bg-p-dark">
      <div className="container flex flex-col items-center">
        <h2 className="text-3xl sm:text-3xl lg:text-4xl font-semibold text-tm dark:text-tm-dark mb-14 text-center">
          {t("heading1")}
        </h2>
        <div className="flex flex-wrap lg:flex-nowrap w-full justify-center gap-4 pb-12">
          {iraqPaymentOptions.map((el, index) => (
            <div
              key={index}
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
      </div>
      <div className="container flex flex-col items-center py-16 sm:py-28">
        <h2 className="text-3xl sm:text-3xl lg:text-4xl font-semibold text-tm dark:text-tm-dark text-center mb-14">
          {t("heading2")}
        </h2>
        <div className="flex flex-wrap lg:flex-nowrap w-full justify-center gap-4 pb-12">
          {syriaPaymentOptions.map((el, index) => (
            <div
              key={index}
              className="h-28 md:w-1/6 flex flex-col justify-center items-center gap-5"
            >
              <div className="w-20 h-20">
                <Image
                  src={theme === "dark" ? el.imgUrlDark : el.imgUrlLight}
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
      </div>
    </section>
  );
};

export default PaymentMethods;
