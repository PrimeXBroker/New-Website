"use client";
import React, { useState, useEffect } from "react";
import { Tabs, Tab, Card, CardBody } from "@nextui-org/react";
import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";

const SatisfactionTabs = () => {
  const locale = useLocale();
  const t = useTranslations("ib");
  const [isVertical, setIsVertical] = useState(true);

  const tabData = [
    {
      key: "Explore",
      tabTitle: "Explore",
      contentTitle1: t("tabs.li1_title1"),
      contentTitle2: t("tabs.li1_title2"),
      contentPoint1: t("tabs.li1_1"),
      contentPoint2: t("tabs.li1_2"),
      contentPoint3: t("tabs.li1_3"),
    },
    {
      key: "Discover",
      tabTitle: "Discover",
      contentTitle1: t("tabs.li1_title1"),
      contentTitle2: t("tabs.li1_title2"),
      contentPoint1: t("tabs.li1_1"),
      contentPoint2: t("tabs.li1_2"),
      contentPoint3: t("tabs.li1_3"),
    },
    {
      key: "Benefit",
      tabTitle: "Benefit",
      contentTitle1: t("tabs.li1_title1"),
      contentTitle2: t("tabs.li1_title2"),
      contentPoint1: t("tabs.li1_1"),
      contentPoint2: t("tabs.li1_2"),
      contentPoint3: t("tabs.li1_3"),
    },
    {
      key: "Experience",
      tabTitle: "Experience",
      contentTitle1: t("tabs.li1_title1"),
      contentTitle2: t("tabs.li1_title2"),
      contentPoint1: t("tabs.li1_1"),
      contentPoint2: t("tabs.li1_2"),
      contentPoint3: t("tabs.li1_3"),
    },
    {
      key: "Enjoy",
      tabTitle: "Enjoy",
      contentTitle1: t("tabs.li1_title1"),
      contentTitle2: t("tabs.li1_title2"),
      contentPoint1: t("tabs.li1_1"),
      contentPoint2: t("tabs.li1_2"),
      contentPoint3: t("tabs.li1_3"),
    },
    {
      key: "Count",
      tabTitle: "Count on",
      contentTitle1: t("tabs.li1_title1"),
      contentTitle2: t("tabs.li1_title2"),
      contentPoint1: t("tabs.li1_1"),
      contentPoint2: t("tabs.li1_2"),
      contentPoint3: t("tabs.li1_3"),
    },
  ];

  return (
    <section className="bg-secondary my-20 py-28">
      <div className="container">
        <h2 className="sectionHeading font-normal text-white">
          {t("tabs.title1")}{" "}
          <span className="font-semibold">{t("tabs.title2")}</span>
          <br />
          {t("tabs.title3")}{" "}
          <span className="font-semibold">{t("tabs.title4")}</span>
          {t("tabs.title5")}
        </h2>
        <div className="flex flex-col sm:flex-row items-center gap-4 justify-center mt-16 satisfaction-tabs">
          <Tabs aria-label="Options" color="primary">
            {tabData.map((tab, index) => (
              <Tab key={index} title={tab.tabTitle}>
                <div className="border-1 border-accent rounded-3xl p-9 min-h-[300px] w-full sm:w-[450px] md:w-[550px] lg:w-[650px]">
                  <div>
                    <h3 className="text-2xl md:text-3xl text-white font-normal">
                      {tab.contentTitle1}
                      <span className="text-primary font-semibold">
                        {tab.contentTitle2}
                      </span>
                    </h3>
                  </div>
                  <div className="mt-10">
                    <div className="flex items-center gap-4 mb-6">
                      <Image
                        src="/images/ib/ib-new-menu.webp"
                        unoptimized={true}
                        width="100"
                        height="100"
                        alt="img"
                        className="w-7 md:w-8"
                      />
                      <div>
                        <p className="mt-0 text-xl md:text-2xl font-normal text-white">
                          {tab.contentPoint1}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4 mb-6">
                      <Image
                        src="/images/ib/ib-new-menu.webp"
                        unoptimized={true}
                        width="100"
                        height="100"
                        alt="img"
                        className="w-7 md:w-8"
                      />
                      <div>
                        <p className="mt-0 text-xl md:text-2xl font-normal text-white">
                          {tab.contentPoint2}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <Image
                        src="/images/ib/ib-new-menu.webp"
                        unoptimized={true}
                        width="100"
                        height="100"
                        alt="img"
                        className="w-7 md:w-8"
                      />
                      <div>
                        <p className="mt-0 text-xl md:text-2xl font-normal text-white">
                          {tab.contentPoint3}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </Tab>
            ))}
          </Tabs>
        </div>
      </div>
    </section>
  );
};

export default SatisfactionTabs;
