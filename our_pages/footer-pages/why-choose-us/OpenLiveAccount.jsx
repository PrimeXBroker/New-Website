"use client";
import React from "react";
import { useLocale, useTranslations } from "next-intl";
import { getRegisterUrl } from "@/utilities/getRegisterUrl";
import CustomYellowButton from "@/components/common/CustomYellowButton";
import { useTheme } from "next-themes";
import { useRouter } from "next/navigation";

const OpenLiveAccount = () => {
  const router = useRouter();
  const locale = useLocale();
  const { theme } = useTheme();
  const t = useTranslations("whyChooseUs.openLiveAccount");

  const handleClick = () => {
    const url = getRegisterUrl(locale);
    router.push(url);
  };

  return (
    <section className="bg-p dark:bg-p-dark">
      <div className="container mx-auto px-4">
        <div
          className="flex flex-col md:flex-row justify-between items-center gap-6 py-12 px-8 rounded-lg bg-cover bg-center bg-cc dark:bg-cc-dark text-tm dark:text-tm-dark"
          style={
            theme === "dark"
              ? {
                  backgroundImage:
                    "url('https://primexcapital.s3.eu-north-1.amazonaws.com/website/footer-pages/why-choose-us/CTA+BG+Desktop.webp')",
                }
              : {
                  backgroundImage:
                    "url('https://primexcapital.s3.eu-north-1.amazonaws.com/website/light-mode-icons/CTA+Desktop+Light.webp')",
                }
          }
        >
          <div className="text-lg sm:text-2xl font-semibold text-center md:text-start max-w-md">
            {t("title")}
          </div>
          <CustomYellowButton
            title={t("btnTxt")}
            onClick={handleClick}
            className="py-5 px-9 md:py-4 md:px-7 lg:py-4 lg:px-9 text-lg w-full sm:w-auto justify-between sm:justify-center"
          />
        </div>
      </div>
    </section>
  );
};

export default OpenLiveAccount;
