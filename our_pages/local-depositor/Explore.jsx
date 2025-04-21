"use client";
import { useLocale, useTranslations } from "next-intl";
import React from "react";

const Explore = () => {
  const locale = useLocale();
  const h = useTranslations("localDepositor.explore");

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
    <section className="bg-[#000000] py-3">
      <div className="container">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 py-8 bg-[#111111] border-2 border-[#1D1D1D] rounded-xl">
          <div className="grid grid-cols-2 items-center text-[#ffffff]">
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold">
              {h("title1")}
              <span className="text-[#FED100]"> 330+ </span>
              {h("title2")}
            </h2>
            <div className="">
              <p>{h("description")}</p>
              <button
                onClick={() => window.open(getHomeRegisterUrl(locale))}
                className="custom-button px-7 py-2 rounded-md mt-4 text-secondary font-semibold"
              >
                {h("buttonText")}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Explore;
