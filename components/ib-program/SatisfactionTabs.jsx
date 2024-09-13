"use client";
import React, { useState, useRef, useEffect } from "react";
import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";

const SatisfactionTabs = () => {
  const locale = useLocale();
  const t = useTranslations("ib");
  const [activeTab, setActiveTab] = useState("Discover");
  const [isUserInteracted, setIsUserInteracted] = useState(false);
  const timerRef = useRef();

  const tabData = [
    // {
    //   key: "Explore",
    //   tabTitle: t("tabs.tab_title1"),
    //   contentTitle1: t("tabs.li1_title1"),
    //   contentPoint1: t("tabs.li1_1"),
    //   contentPoint2: t("tabs.li1_2"),
    //   contentPoint3: t("tabs.li1_3"),
    //   imgUrl:
    //     "https://primexcapital.s3.eu-north-1.amazonaws.com/website/ib/Uncover.webp",
    // },
    {
      key: "Discover",
      tabTitle: t("tabs.tab_title2"),
      contentTitle1: t("tabs.li2_title1"),
      contentPoint1: t("tabs.li2_1"),
      contentPoint2: t("tabs.li2_2"),
      contentPoint3: t("tabs.li2_3"),
      contentPoint4: t("tabs.li2_4"),
      imgUrl:
        "https://primexcapital.s3.eu-north-1.amazonaws.com/website/ib/Discover.webp",
    },
    {
      key: "Benefit",
      tabTitle: t("tabs.tab_title3"),
      contentTitle1: t("tabs.li3_title1"),
      contentPoint1: t("tabs.li3_1"),
      contentPoint2: t("tabs.li3_2"),
      contentPoint3: t("tabs.li3_3"),
      contentPoint4: t("tabs.li3_4"),
      imgUrl:
        "https://primexcapital.s3.eu-north-1.amazonaws.com/website/ib/Benefit.webp",
    },
    {
      key: "Experience",
      tabTitle: t("tabs.tab_title4"),
      contentTitle1: t("tabs.li4_title1"),
      contentPoint1: t("tabs.li4_1"),
      contentPoint2: t("tabs.li4_2"),
      contentPoint3: t("tabs.li4_3"),
      imgUrl:
        "https://primexcapital.s3.eu-north-1.amazonaws.com/website/ib/Experience.webp",
    },
    {
      key: "Enjoy",
      tabTitle: t("tabs.tab_title5"),
      contentTitle1: t("tabs.li5_title1"),
      contentPoint1: t("tabs.li5_1"),
      contentPoint2: t("tabs.li5_2"),
      contentPoint3: t("tabs.li5_3"),
      imgUrl:
        "https://primexcapital.s3.eu-north-1.amazonaws.com/website/ib/Enjoy.webp",
    },
    {
      key: "Count",
      tabTitle: t("tabs.tab_title6"),
      contentTitle1: t("tabs.li6_title1"),
      contentPoint1: t("tabs.li6_1"),
      contentPoint2: t("tabs.li6_2"),
      contentPoint3: t("tabs.li6_3"),
      imgUrl:
        "https://primexcapital.s3.eu-north-1.amazonaws.com/website/ib/Count.webp",
    },
  ];

  const cycleTabs = () => {
    const currentIndex = tabData.findIndex((tab) => tab.key === activeTab);
    const nextIndex = (currentIndex + 1) % tabData.length;
    setActiveTab(tabData[nextIndex].key);
  };

  useEffect(() => {
    if (!isUserInteracted) {
      timerRef.current = setInterval(cycleTabs, 7000);
    }
    return () => clearInterval(timerRef.current);
  }, [activeTab, isUserInteracted]);

  const handleTabClick = (key) => {
    setActiveTab(key);
    setIsUserInteracted(true);
    clearInterval(timerRef.current);
  };

  return (
    <section className="bg-secondary mt-20 py-16 lg:py-28">
      <div className="container">
        <h2 className="sectionHeading font-semibold text-primary">
          {t("tabs.title1")}
        </h2>
        <div className="grid grid-cols-12 xl:w-[90%] xl:mx-auto">
          <div className="col-span-12">
            {/* Tab headers */}
            <div className="flex flex-wrap justify-between mt-10 mb-14 gap-4">
              {tabData.map((tab) => (
                <button
                  key={tab.key}
                  onClick={() => handleTabClick(tab.key)}
                  className={`px-2 sm:px-8 py-2 text-sm sm:text-lg border border-accent ${
                    activeTab === tab.key
                      ? "text-secondary bg-accent font-semibold"
                      : "text-accent bg-transparent font-light"
                  } rounded-full transition-all duration-300 ease-in-out min-w-[30%] md:min-w-[15%]`}
                >
                  {tab.tabTitle}
                </button>
              ))}
            </div>
            {/* Tab content */}
            <div className="grid grid-cols-12 w-[90%] mx-auto">
              {tabData.map(
                (tab) =>
                  activeTab === tab.key && (
                    <React.Fragment key={tab.key}>
                      <div className="col-span-12 lg:col-span-6">
                        <h3 className="text-2xl font-semibold mb-5 text-white">
                          {tab.contentTitle1}
                        </h3>
                        <ul className="space-y-3">
                          {[
                            tab.contentPoint1,
                            tab.contentPoint2,
                            tab.contentPoint3,
                            tab.contentPoint4,
                          ].map(
                            (point, index) =>
                              point && (
                                <li
                                  key={index}
                                  className="text-xl font-light text-white flex items-center"
                                >
                                  <Image
                                    src="https://primexcapital.s3.eu-north-1.amazonaws.com/website/ib/ib-new-menu.webp"
                                    unoptimized={true}
                                    width="30"
                                    height="30"
                                    alt="img"
                                    className={`w-5 ${
                                      locale === "ar" ? "ml-4" : "mr-4"
                                    }`}
                                  />
                                  {point}
                                </li>
                              )
                          )}
                        </ul>
                      </div>
                      <div className="col-span-12 lg:col-span-6">
                        <div className="flex justify-center lg:justify-end mt-10 lg:mt-0">
                          <Image
                            unoptimized={true}
                            src={tab.imgUrl}
                            width="100"
                            height="100"
                            alt="image"
                            className="w-[300px]"
                          />
                        </div>
                      </div>
                    </React.Fragment>
                  )
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SatisfactionTabs;
