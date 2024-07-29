"use client";
import { Tabs, Tab } from "@nextui-org/tabs";
import Image from "next/image";
import { useState } from "react";
import { useTranslations } from "next-intl";

const TabsSection = () => {
  const t = useTranslations("awards.tabs");
  const [selected, setSelected] = useState("2023");

  const awardsData = [
    {
      id: 1,
      year: t("award_year_1"),
      awards: [
        {
          imgSrc:
            "https://primexcapital.s3.eu-north-1.amazonaws.com/website/footer-pages/awards/award1.webp",
          title: t("award_1_title"),
          location: t("award_1_location"),
        },
        {
          imgSrc:
            "https://primexcapital.s3.eu-north-1.amazonaws.com/website/footer-pages/awards/award2.webp",
          title: t("award_2_title"),
          location: t("award_2_location"),
          highlighted: true,
        },
        {
          imgSrc:
            "https://primexcapital.s3.eu-north-1.amazonaws.com/website/footer-pages/awards/award3.webp",
          title: t("award_3_title"),
          location: t("award_3_location"),
        },
      ],
    },
    {
      id: 2,
      year: t("award_year_2"),
      awards: [
        {
          imgSrc:
            "https://primexcapital.s3.eu-north-1.amazonaws.com/website/footer-pages/awards/award1.webp",
          title: t("award_1_title"),
          location: t("award_1_location"),
        },
        {
          imgSrc:
            "https://primexcapital.s3.eu-north-1.amazonaws.com/website/footer-pages/awards/award2.webp",
          title: t("award_2_title"),
          location: t("award_2_location"),
          highlighted: true,
        },
        {
          imgSrc:
            "https://primexcapital.s3.eu-north-1.amazonaws.com/website/footer-pages/awards/award3.webp",
          title: t("award_3_title"),
          location: t("award_3_location"),
        },
        {
          imgSrc:
            "https://primexcapital.s3.eu-north-1.amazonaws.com/website/footer-pages/awards/award4.webp",
          title: t("award_4_title"),
          location: t("award_4_location"),
        },
        {
          imgSrc:
            "https://primexcapital.s3.eu-north-1.amazonaws.com/website/footer-pages/awards/award5.webp",
          title: t("award_5_title"),
          location: t("award_5_location"),
          highlighted: true,
        },
        {
          imgSrc:
            "https://primexcapital.s3.eu-north-1.amazonaws.com/website/footer-pages/awards/award6.webp",
          title: t("award_6_title"),
          location: t("award_6_location"),
        },
        {
          imgSrc:
            "https://primexcapital.s3.eu-north-1.amazonaws.com/website/footer-pages/awards/award1.webp",
          title: t("award_1_title"),
          location: t("award_1_location"),
        },
        {
          imgSrc:
            "https://primexcapital.s3.eu-north-1.amazonaws.com/website/footer-pages/awards/award2.webp",
          title: t("award_2_title"),
          location: t("award_2_location"),
          highlighted: true,
        },
        {
          imgSrc:
            "https://primexcapital.s3.eu-north-1.amazonaws.com/website/footer-pages/awards/award3.webp",
          title: t("award_3_title"),
          location: t("award_3_location"),
        },
      ],
    },
    {
      id: 3,
      year: t("award_year_3"),
      awards: [
        {
          imgSrc:
            "https://primexcapital.s3.eu-north-1.amazonaws.com/website/footer-pages/awards/award4.webp",
          title: t("award_1_title"),
          location: t("award_1_location"),
        },
        {
          imgSrc:
            "https://primexcapital.s3.eu-north-1.amazonaws.com/website/footer-pages/awards/award5.webp",
          title: t("award_2_title"),
          location: t("award_2_location"),
          highlighted: true,
        },
        {
          imgSrc:
            "https://primexcapital.s3.eu-north-1.amazonaws.com/website/footer-pages/awards/award6.webp",
          title: t("award_3_title"),
          location: t("award_3_location"),
        },
      ],
    },
    {
      id: 4,
      year: t("award_year_4"),
      awards: [
        {
          imgSrc:
            "https://primexcapital.s3.eu-north-1.amazonaws.com/website/footer-pages/awards/award1.webp",
          title: t("award_1_title"),
          location: t("award_1_location"),
        },
        {
          imgSrc:
            "https://primexcapital.s3.eu-north-1.amazonaws.com/website/footer-pages/awards/award2.webp",
          title: t("award_2_title"),
          location: t("award_2_location"),
          highlighted: true,
        },
        {
          imgSrc:
            "https://primexcapital.s3.eu-north-1.amazonaws.com/website/footer-pages/awards/award3.webp",
          title: t("award_3_title"),
          location: t("award_3_location"),
        },
      ],
    },
    {
      id: 5,
      year: t("award_year_5"),
      awards: [
        {
          imgSrc:
            "https://primexcapital.s3.eu-north-1.amazonaws.com/website/footer-pages/awards/award4.webp",
          title: t("award_1_title"),
          location: t("award_1_location"),
        },
        {
          imgSrc:
            "https://primexcapital.s3.eu-north-1.amazonaws.com/website/footer-pages/awards/award5.webp",
          title: t("award_2_title"),
          location: t("award_2_location"),
          highlighted: true,
        },
        {
          imgSrc:
            "https://primexcapital.s3.eu-north-1.amazonaws.com/website/footer-pages/awards/award6.webp",
          title: t("award_3_title"),
          location: t("award_3_location"),
        },
      ],
    },
  ];

  return (
    <section className="bg-accent py-12">
      <div className="container text-center">
        <Tabs
          color="secondary"
          className={`text-center ${selected ? "text-primary" : "text-white"}`}
          aria-label="Award Tabs"
          selectedKey={selected}
          onSelectionChange={setSelected}
          classNames={{
            panel: "rounded-none",
            tab: "text-lg px-6 rounded-none",
            tabList:
              "bg-transparent border-b border-b-gray-300 rounded-none p-0 gap-8",
          }}
        >
          {awardsData.map((tab) => (
            <Tab key={tab.year} title={tab.year} className={`awards_tab`}>
              <div className="flex flex-wrap gap-4 justify-center mt-12">
                {tab.awards.map((award, index) => (
                  <div
                    key={index}
                    className={`flex flex-col shadow-lg items-center p-4 
                      border border-gray-300
                       hover:bg-secondary rounded-2xl
                        border-b-3
                        hover:border-b-3
                        hover:border-b-primary group cursor-pointer w-[250px] h-[300px]
                        transition-transform hover:translate-y-[-0.5rem] duration-500
                        `}
                  >
                    <Image
                      src={award.imgSrc}
                      alt={`${award.title} ${award.location}`}
                      width="150"
                      height="150"
                      className=""
                    />
                    <p className="text-center font-semibold mt-2 group-hover:text-primary">
                      {award.title}
                      <br />
                      {award.location}
                    </p>
                  </div>
                ))}
              </div>
            </Tab>
          ))}
        </Tabs>
      </div>
    </section>
  );
};

export default TabsSection;
