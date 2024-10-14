import React from "react";
import { useTranslations } from "next-intl";
import ExpertAnalysis from "../../expert-analysis/ExpertAnalysis";
import MarketNews from "../../market-news/MarketNews";

function BlogsWrapper({ active, setActive }) {
  const t = useTranslations("academy.blogsTabs");

  const tabs = [
    {
      key: "Market News",
      title: t("tab3_title"),
      content: <MarketNews slugEn={`all`} slugAr={`news`} />,
    },
    {
      key: "Technical Analysis",
      title: t("tab2_title"),
      content: <ExpertAnalysis id={`6641f01d7c9be5623e1092a4`} />,
    },
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
          slugEn={`starting-gateway-en`}
          slugAr={`starting-gateway-ar`}
        />
      ),
    },
  ];

  return (
    <section className="relative bg-[#000000] py-10">
      <div className="container">
        <div
          className={`tabs-navigation bg-[#1D1D1D] rounded-lg flex justify-between items-center w-full`}
        >
          {tabs.map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActive(tab.key)}
              className={`tab-title font-medium px-4 py-3 text-sm w-full ${
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
    </section>
  );
}

export default BlogsWrapper;
