import React from "react";
import { useTranslations } from "next-intl";
import MobileExpertAnalysis from "../../expert-analysis/MobileExpertAnalysis";
import MobileMarketNews from "../../market-news/MobileMarketNews";

function MobileBlogWrapper({
  active,
  setActive,
  marketNewsBlogs,
  marketNewsPages,
  startingGatewayBlogs,
  startingGatewayPages,
  marketNews,
  startingGateway,
}) {
  const t = useTranslations("academy.blogsTabs");

  const tabs = [
    {
      key: "Market News",
      title: t("tab3_title"),
      content: (
        <MobileMarketNews
          news={marketNewsBlogs}
          totalPages={marketNewsPages}
          lang={marketNews}
        />
      ),
    },
    {
      key: "Technical Analysis",
      title: t("tab2_title"),
      content: <MobileExpertAnalysis id={`6641f01d7c9be5623e1092a4`} />,
    },
    {
      key: "Learning Hub",
      title: t("tab1_title"),
      content: <MobileExpertAnalysis id={`6641f0097c9be5623e10929e`} />,
    },

    {
      key: "Starting Gateway",
      title: t("tab4_title"),
      content: (
        <MobileMarketNews
          news={startingGatewayBlogs}
          totalPages={startingGatewayPages}
          lang={startingGateway}
        />
      ),
    },
  ];

  return (
    <section className="relative bg-[#000000] pt-10">
      <div className="container">
        <div
          className={`tabs-navigation rounded-lg grid grid-cols-1 xs:grid-cols-2 gap-4`}
        >
          {tabs.map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActive(tab.key)}
              className={`tab-title font-semibold px-4 py-3 text-xs md:text-sm w-full ${
                active === tab.key
                  ? "active bg-[#ffffff] text-[#111111] rounded-[5px]"
                  : "text-[#ffffff] bg-[#1D1D1D] rounded-[5px]"
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

export default MobileBlogWrapper;
