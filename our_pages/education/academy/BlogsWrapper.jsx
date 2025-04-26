"use client";
import React from "react";
import { useTranslations, useLocale } from "next-intl";
import ExpertAnalysis from "../../expert-analysis/ExpertAnalysis";
import MarketNews from "../../market-news/MarketNews";

function BlogsWrapper({
  active,
  setActive,
  startingGatewayBlogs,
  startingGatewayPages,
  pressReleaseBlogs,
  pressReleasePages,
  startingGateway,
  pressRelease,
}) {
  const t = useTranslations("academy.blogsTabs");

  const tabs = [
    {
      key: "Learning Hub",
      title: t("tab1_title"),
      content: <ExpertAnalysis id={`6641f0097c9be5623e10929e`} />,
    },
    {
      key: "Starting Gateway",
      title: t("tab4_title"),
      content: (
        <MarketNews
          news={startingGatewayBlogs}
          totalPages={startingGatewayPages}
          lang={startingGateway}
        />
      ),
    },
    {
      key: "Press Release",
      title: t("tab5_title"),
      content: (
        <MarketNews
          news={pressReleaseBlogs}
          totalPages={pressReleasePages}
          lang={pressRelease}
        />
      ),
    },
  ];

  return (
    <section className="relative bg-p dark:bg-p-dark pt-20 sm:pt-24 pb-10 sm:pb-14">
      <div className="container">
        <div
          className={`tabs-navigation bg-cc dark:bg-cc-dark rounded-lg flex justify-between items-center w-full`}
        >
          {tabs.map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActive(tab.key)}
              className={`tab-title font-medium px-4 py-3 text-sm w-full ${
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
    </section>
  );
}

export default BlogsWrapper;
