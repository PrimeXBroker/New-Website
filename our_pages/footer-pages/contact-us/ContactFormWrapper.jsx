"use client";
import React, { useState } from "react";
import { useTranslations, useLocale } from "next-intl";
import SuggestionForm from "./SuggestionForm";
import { FaArrowRight } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";
import Image from "next/image";
import ComplaintForm from "./ComplaintForm";
import { useTheme } from "next-themes";
import copyEmail from "@/public/animations/contact-us/copy-email.json";
import liveChat from "@/public/animations/contact-us/live-chat.json";
import Lottie from "lottie-react";
import { MdContentCopy } from "react-icons/md";
import { FaCheck } from "react-icons/fa6";
import { FiArrowUpLeft, FiArrowUpRight } from "react-icons/fi";

const ContactFormWrapper = ({ active, setActive }) => {
  const { theme } = useTheme();
  const locale = useLocale();
  const t = useTranslations("contactUs.banner");
  const [copiedEmail, setCopiedEmail] = useState(null);

  const tabs = [
    {
      key: "Suggestion",
      title: t("suggestion_form_title"),
      content: <SuggestionForm />,
    },
    {
      key: "Complaint",
      title: t("complaint_form_title"),
      content: <ComplaintForm />,
    },
  ];

  const complianceDetails = [
    {
      country: "St. Lucia",
      complianceEmail: "IBCA_compliance@primexcapital.com",
      flagUrl:
        "https://primexcapital.s3.eu-north-1.amazonaws.com/website/flags/lucia.png",
    },
    {
      country: "South Africa",
      complianceEmail: "FSCA_compliance@primexcapital.com",
      flagUrl:
        "https://primexcapital.s3.eu-north-1.amazonaws.com/website/flags/south-africa.png",
    },
    {
      country: "Mauritius",
      complianceEmail: "FSC_compliance@primexcapital.com",
      flagUrl:
        "https://primexcapital.s3.eu-north-1.amazonaws.com/website/flags/mauritius.png",
    },
  ];

  const handleCopyEmail = (email) => {
    navigator.clipboard.writeText(email);
    setCopiedEmail(email);
    setTimeout(() => setCopiedEmail(null), 2000);
  };

  return (
    <section className="bg-p dark:bg-p-dark pt-24 sm:pt-28 md:pt-32 pb-16 sm:pb-28">
      <div className="container grid grid-cols-12 items-center">
        <div className="col-span-12 lg:col-span-6 mb-7 lg:mb-0 text-center lg:text-start lg:pe-4">
          <div className="">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold text-tm dark:text-tm-dark md:mt-0 lg:my-1">
              {t("main_title")}
            </h1>
            <p className="text-ts dark:text-ts-dark mt-4 text-xl sm:text-2xl">
              {t("support_title")}
            </p>
            <p className="text-tm dark:text-tm-dark mt-4 text-base sm:text-lg font-medium">
              {t("connect_title")}
            </p>
            <div className="bg-cc dark:bg-cc-dark border border-e1 dark:border-e1-dark rounded-xl px-2 py-4 my-6">
              <div className="flex items-center gap-2">
                <Lottie
                  animationData={copyEmail}
                  loop={true}
                  style={{ width: "36px", height: "36px" }}
                />
                <p className="text-tm dark:text-tm-dark font-bold text-lg">
                  {t("contact_via_email")}
                </p>
              </div>
              <div className="bg-e1 dark:bg-e1-dark border border-e2 dark:border-e2-dark rounded-lg p-2 mt-4">
                {complianceDetails.map((compliance, index) => (
                  <div
                    key={index}
                    className={`${
                      copiedEmail === compliance.complianceEmail
                        ? "bg-gb dark:bg-gb-dark border border-gc dark:border-gc-dark"
                        : "border border-transparent dark:border-transparent hover:bg-e2 hover:dark:bg-e2-dark  hover:border hover:border-tl hover:dark:border-tl-dark"
                    } px-3 sm:px-4 xl:px-2 py-4 rounded-md flex flex-col sm:flex-row lg:flex-col xl:flex-row xl:items-center justify-between ${
                      index === 2 ? "" : "mb-2"
                    }`}
                  >
                    <div className="flex items-center gap-2">
                      <Image
                        unoptimized={true}
                        width="18"
                        height="18"
                        src={compliance.flagUrl}
                        alt="flag"
                      />
                      <p className="text-sm text-tm dark:text-tm-dark font-medium">
                        {compliance.country} Compliance
                      </p>
                    </div>
                    <div className="flex items-center justify-between sm:justify-start sm:gap-2 mt-2 xl:mt-0">
                      <p className="text-sm text-tm dark:text-tm-dark font-medium">
                        {compliance.complianceEmail}
                      </p>
                      <div
                        onClick={() =>
                          handleCopyEmail(compliance.complianceEmail)
                        }
                        className="cursor-pointer"
                      >
                        {copiedEmail === compliance.complianceEmail ? (
                          <FaCheck className="text-gc dark:text-gc-dark text-lg" />
                        ) : (
                          <MdContentCopy className="text-lg text-tm dark:text-tm-dark" />
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <a
              href="https://direct.lc.chat/18955417/"
              target="_blank"
              className="bg-pcp dark:bg-pcp-dark rounded-lg px-4 py-3 flex items-center justify-between w-full text-nb dark:text-nb text-lg group font-bold"
            >
              <div className="flex items-center gap-2">
                <Lottie
                  animationData={liveChat}
                  loop={true}
                  style={{ width: "40px", height: "40px" }}
                />
                {t("live_chat")}
              </div>
              {locale === "ar" || locale === "ku" || locale === "ps" ? (
                <div
                  className={`w-[20px] h-[20px] flex justify-center items-center rounded-full bg-nb dark:bg-nb-dark`}
                >
                  <FiArrowUpLeft className="transition-transform duration-500 ease-in-out group-hover:rotate-[-45deg] text-pcp dark:text-pcp-dark text-xs" />
                </div>
              ) : (
                <div
                  className={`w-[20px] h-[20px] flex justify-center items-center rounded-full bg-nb dark:bg-nb-dark`}
                >
                  <FiArrowUpRight className="transition-transform duration-500 ease-in-out group-hover:rotate-[45deg] text-pcp dark:text-pcp-dark text-xs" />
                </div>
              )}
            </a>
          </div>
        </div>
        <div className="col-span-12 lg:col-span-6">
          <div className="bg-cc dark:bg-cc-dark md:w-[74%] lg:w-[100%] rounded-[12px] p-[24px] ms:p-[40px] mx-auto">
            <div
              className={`tabs-navigation bg-e1 dark:bg-e1-dark rounded-lg mb-2 flex justify-between items-center w-full mx-auto`}
            >
              {tabs.map((tab) => (
                <button
                  key={tab.key}
                  onClick={() => setActive(tab.key)}
                  className={`tab-title font-semibold px-4 py-3 text-sm w-full ${
                    active === tab.key
                      ? "active bg-tm dark:bg-tm-dark text-p dark:text-p-dark rounded-[5px]"
                      : "text-tm dark:text-tm-dark"
                  }`}
                >
                  {tab.title}
                </button>
              ))}
            </div>
            <div className="tab-content">
              {tabs.find((tab) => tab.key === active).content}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactFormWrapper;
