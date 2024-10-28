"use client";
import React, { useState, useEffect } from "react";
import { useTranslations, useLocale } from "next-intl";
import SuggestionForm from "./SuggestionForm";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";
import Image from "next/image";
import { MdContentCopy } from "react-icons/md";
import ComplaintForm from "./ComplaintForm";
import { useRouter } from "next/navigation";

const ContactFormWrapper = ({ active, setActive }) => {
  const locale = useLocale();
  const router = useRouter();
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

  const handleChatLink = () => {
    window.location.href = `/${locale}/contact-us/?openChat=true`;
  };

  return (
    <section className="bg-[#000000] pt-24 sm:pt-28 md:pt-32 pb-20">
      <div className="container grid grid-cols-12 items-center">
        <div className="col-span-12 lg:col-span-6 mb-7 lg:mb-0 text-center lg:text-start">
          <div className="">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold text-[#ffffff] md:mt-0 lg:my-1">
              {t("main_title")}
            </h1>
            <p className="text-[#c6c6c6] mt-4 text-xl sm:text-2xl">
              {t("support_title")}
            </p>
            <p className="text-[#ffffff] mt-4 text-xl sm:text-2xl w-[96%] sm:w-[70%] mx-auto lg:mx-0">
              {t("connect_title")}
            </p>
            <div className="mt-8 flex flex-wrap justify-center lg:justify-start gap-4">
              {/* <Link
                href="/help-center"
                className="bg-[#111111] text-[#F1F1F1] py-2 px-4 flex items-center rounded-lg border-2 border-[#1D1D1D] hover:text-[#FED100]"
              >
                <span className={`${locale === "ar" || locale === "fa" || locale === "kur" ? "ml-2" : "mr-2"}`}>
                  <Image
                    src="https://primexcapital.s3.eu-north-1.amazonaws.com/website/contact/help+center.svg"
                    alt="help center"
                    width="40"
                    height="200"
                    className="w-[32px]"
                  />
                </span>
                {t("help_center")}
                {locale === "ar" || locale === "fa" || locale === "kur" ? (
                  <FaArrowLeft
                    className={`text-xl text-[#C6C6C6] ${
                      locale === "ar" || locale === "fa" || locale === "kur" ? "mr-2" : "ml-2"
                    }`}
                  />
                ) : (
                  <FaArrowRight
                    className={`text-xl text-[#C6C6C6] ${
                      locale === "ar" || locale === "fa" || locale === "kur" ? "mr-2" : "ml-2"
                    }`}
                  />
                )}
              </Link> */}
              <button
                onClick={handleCopyEmail}
                className="bg-[#111111] text-[#F1F1F1] py-2 px-4 flex items-center rounded-lg border-2 border-[#1D1D1D] hover:text-[#FED100]"
              >
                <span
                  className={`${
                    locale === "ar" || locale === "fa" || locale === "kur"
                      ? "ml-2"
                      : "mr-2"
                  }`}
                >
                  <Image
                    src="https://primexcapital.s3.eu-north-1.amazonaws.com/website/contact/Copy+Email.svg"
                    alt="copy email"
                    width="40"
                    height="200"
                    className="w-[32px]"
                  />
                </span>
                {t("copy_email")}
                <MdContentCopy
                  className={`text-xl text-[#C6C6C6] ${
                    locale === "ar" || locale === "fa" || locale === "kur"
                      ? "mr-2"
                      : "ml-2"
                  }`}
                />
              </button>
              <button
                onClick={handleChatLink}
                className="bg-[#111111] text-[#F1F1F1] py-2 px-4 flex items-center rounded-lg border-2 border-[#1D1D1D] hover:text-[#FED100]"
              >
                <span
                  className={`${
                    locale === "ar" || locale === "fa" || locale === "kur"
                      ? "ml-2"
                      : "mr-2"
                  }`}
                >
                  <Image
                    src="https://primexcapital.s3.eu-north-1.amazonaws.com/website/contact/Live+Chat.svg"
                    alt="live chat"
                    width="40"
                    height="200"
                    className="w-[32px]"
                  />
                </span>
                {t("live_chat")}
                {locale === "ar" || locale === "fa" || locale === "kur" ? (
                  <FaArrowLeft
                    className={`text-xl text-[#C6C6C6] ${
                      locale === "ar" || locale === "fa" || locale === "kur"
                        ? "mr-2"
                        : "ml-2"
                    }`}
                  />
                ) : (
                  <FaArrowRight
                    className={`text-xl text-[#C6C6C6] ${
                      locale === "ar" || locale === "fa" || locale === "kur"
                        ? "mr-2"
                        : "ml-2"
                    }`}
                  />
                )}
              </button>
            </div>
            {copied && (
              <span className="text-[#FED100] text-xs">
                {t("email_copied_message")}
              </span>
            )}
          </div>
        </div>
        <div className="col-span-12 lg:col-span-6 ">
          <div className="bg-[#111111] border-[#1d1d1d] border-3 md:w-[74%] lg:w-[100%] rounded-[12px] p-[24px] ms:p-[40px] mx-auto">
            <div
              className={`tabs-navigation bg-[#1D1D1D] rounded-lg mb-2 flex justify-between items-center w-full mx-auto`}
            >
              {tabs.map((tab) => (
                <button
                  key={tab.key}
                  onClick={() => setActive(tab.key)}
                  className={`tab-title font-semibold px-4 py-3 text-sm w-full ${
                    active === tab.key
                      ? "active bg-[#ffffff] text-[#111111] rounded-[5px]"
                      : "text-[#ffffff]"
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
