"use client";
import React, { useState } from "react";
import { useTranslations, useLocale } from "next-intl";
import SuggestionForm from "./SuggestionForm";
import { FaArrowRight } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";
import Image from "next/image";
import { MdContentCopy } from "react-icons/md";
import ComplaintForm from "./ComplaintForm";
import { useTheme } from "next-themes";

const ContactFormWrapper = ({ active, setActive }) => {
  const { theme } = useTheme();
  const locale = useLocale();
  const t = useTranslations("contactUs.banner");
  const [copied, setCopied] = useState(false);

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

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("support@primexcapital.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="bg-p dark:bg-p-dark pt-24 sm:pt-28 md:pt-32 pb-16 sm:pb-28">
      <div className="container grid grid-cols-12 items-center">
        <div className="col-span-12 lg:col-span-6 mb-7 lg:mb-0 text-center lg:text-start">
          <div className="">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold text-tm dark:text-tm-dark md:mt-0 lg:my-1">
              {t("main_title")}
            </h1>
            <p className="text-ts dark:text-ts-dark mt-4 text-xl sm:text-2xl">
              {t("support_title")}
            </p>
            <p className="text-tm dark:text-tm-dark mt-4 text-xl sm:text-2xl w-[96%] sm:w-[70%] mx-auto lg:mx-0">
              {t("connect_title")}
            </p>
            <div className="mt-8 flex flex-wrap justify-center lg:justify-start gap-4">
              <button
                onClick={handleCopyEmail}
                className="bg-cc dark:bg-cc-dark text-tm dark:text-tm-dark py-2 px-4 flex items-center rounded-lg border-2 border-cc dark:border-cc-dark hover:border-e1 dark:hover:border-e1-dark group transition-all duration-500 ease-in-out"
              >
                <span
                  className={`${
                    locale === "ar" || locale === "ps" || locale === "ku"
                      ? "ml-2"
                      : "mr-2"
                  }`}
                >
                  <Image
                    src={
                      theme === "dark"
                        ? "https://primexcapital.s3.eu-north-1.amazonaws.com/website/contact/Copy+Email.svg"
                        : "https://primexcapital.s3.eu-north-1.amazonaws.com/website/light-mode-icons/contact-us/Copy+Email.svg"
                    }
                    alt="Copy Email"
                    width="40"
                    height="200"
                    className="w-[32px]"
                  />
                </span>
                {t("copy_email")}
                <MdContentCopy
                  className={`text-xl text-ts dark:text-ts-dark ${
                    locale === "ar" || locale === "ps" || locale === "ku"
                      ? "mr-2"
                      : "ml-2"
                  }`}
                />
              </button>
              <a
                href="https://direct.lc.chat/18955417/"
                target="_blank"
                className="bg-cc dark:bg-cc-dark text-tm dark:text-tm-dark py-2 px-4 flex items-center rounded-lg border-2 border-cc dark:border-cc-dark hover:border-e1 dark:hover:border-e1-dark group transition-all duration-500 ease-in-out"
              >
                <span
                  className={`${
                    locale === "ar" || locale === "ps" || locale === "ku"
                      ? "ml-2"
                      : "mr-2"
                  }`}
                >
                  <Image
                    src={
                      theme === "dark"
                        ? "https://primexcapital.s3.eu-north-1.amazonaws.com/website/contact/Live+Chat.svg"
                        : "https://primexcapital.s3.eu-north-1.amazonaws.com/website/light-mode-icons/contact-us/Live+Chat.svg"
                    }
                    alt="Live Chat"
                    width="40"
                    height="200"
                    className="w-[32px]"
                  />
                </span>
                {t("live_chat")}
                {locale === "ar" || locale === "ps" || locale === "ku" ? (
                  <FaArrowLeft
                    className={`text-xl text-ts dark:text-ts-dark ${
                      locale === "ar" || locale === "ps" || locale === "ku"
                        ? "mr-2"
                        : "ml-2"
                    }`}
                  />
                ) : (
                  <FaArrowRight
                    className={`text-xl text-ts dark:text-ts-dark ${
                      locale === "ar" || locale === "ps" || locale === "ku"
                        ? "mr-2"
                        : "ml-2"
                    }`}
                  />
                )}
              </a>
            </div>
            {copied && (
              <span className="text-pcp dark:text-pcp-dark text-xs">
                {t("email_copied_message")}
              </span>
            )}
          </div>
        </div>
        <div className="col-span-12 lg:col-span-6 ">
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
