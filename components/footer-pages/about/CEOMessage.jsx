"use client";
import React from "react";
import { useTranslations, useLocale } from "next-intl";
import { useTheme } from "next-themes";

const CEOMessage = () => {
  const locale = useLocale();
  const { theme } = useTheme();
  const t = useTranslations("about.ceoMessage");

  return (
    <section className="bg-p dark:bg-p-dark">
      <div className="container">
        <div
          className="p-8 rounded-[20px] bg-cover bg-center"
          style={
            theme === "dark"
              ? {
                  backgroundImage:
                    "url('https://primexcapital.s3.eu-north-1.amazonaws.com/website/about/new-about/Background+CEO+Message.webp')",
                }
              : {
                  backgroundImage:
                    "url('https://primexcapital.s3.eu-north-1.amazonaws.com/website/light-mode-icons/about-us/Background-CEO-Message-Light.webp')",
                }
          }
        >
          <p className="text-lg text-tm dark:text-tm-dark">{t("message")}</p>
          <p
            className={`text-tm dark:text-tm-dark font-semibold mt-4 text-2xl ${
              locale === "ar" ||
              locale === "ps" ||
              locale === "ku" ||
              locale === "fa"
                ? "text-left"
                : "text-right"
            }`}
          >
            {t("title")}
          </p>
        </div>
      </div>
    </section>
  );
};

export default CEOMessage;
