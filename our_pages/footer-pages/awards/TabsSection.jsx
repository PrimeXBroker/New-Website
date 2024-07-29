"use client";
import { Tabs, Tab } from "@nextui-org/tabs";
import Image from "next/image";
import { useState } from "react";
import { useTranslations } from "next-intl";

const awardsData = [
  {
    id: 1,
    year: "2024",
    awards: [
      {
        imgSrc:
          "https://primexcapital.s3.eu-north-1.amazonaws.com/website/footer-pages/awards/award1.webp",
        title: "Best Copy Trading Program",
        location: "UAE 2023",
      },
      {
        imgSrc:
          "https://primexcapital.s3.eu-north-1.amazonaws.com/website/footer-pages/awards/award2.webp",
        title: "Best Copy Trading Program",
        location: "UAE 2023",
        highlighted: true,
      },
      {
        imgSrc:
          "https://primexcapital.s3.eu-north-1.amazonaws.com/website/footer-pages/awards/award3.webp",
        title: "Best Copy Trading Program",
        location: "UAE 2023",
      },
    ],
  },
  {
    id: 2,
    year: "2023",
    awards: [
      {
        imgSrc:
          "https://primexcapital.s3.eu-north-1.amazonaws.com/website/footer-pages/awards/award1.webp",
        title: "Best Copy Trading Program",
        location: "UAE 2023",
      },
      {
        imgSrc:
          "https://primexcapital.s3.eu-north-1.amazonaws.com/website/footer-pages/awards/award2.webp",
        title: "Best Copy Trading Program",
        location: "UAE 2023",
        highlighted: true,
      },
      {
        imgSrc:
          "https://primexcapital.s3.eu-north-1.amazonaws.com/website/footer-pages/awards/award3.webp",
        title: "Best Copy Trading Program",
        location: "UAE 2023",
      },
      {
        imgSrc:
          "https://primexcapital.s3.eu-north-1.amazonaws.com/website/footer-pages/awards/award4.webp",
        title: "Best Copy Trading Program",
        location: "UAE 2023",
      },
      {
        imgSrc:
          "https://primexcapital.s3.eu-north-1.amazonaws.com/website/footer-pages/awards/award5.webp",
        title: "Best Copy Trading Program",
        location: "UAE 2023",
        highlighted: true,
      },
      {
        imgSrc:
          "https://primexcapital.s3.eu-north-1.amazonaws.com/website/footer-pages/awards/award6.webp",
        title: "Best Copy Trading Program",
        location: "UAE 2023",
      },
      {
        imgSrc:
          "https://primexcapital.s3.eu-north-1.amazonaws.com/website/footer-pages/awards/award1.webp",
        title: "Best Copy Trading Program",
        location: "UAE 2023",
      },
      {
        imgSrc:
          "https://primexcapital.s3.eu-north-1.amazonaws.com/website/footer-pages/awards/award2.webp",
        title: "Best Copy Trading Program",
        location: "UAE 2023",
        highlighted: true,
      },
      {
        imgSrc:
          "https://primexcapital.s3.eu-north-1.amazonaws.com/website/footer-pages/awards/award3.webp",
        title: "Best Copy Trading Program",
        location: "UAE 2023",
      },
    ],
  },
  {
    id: 3,
    year: "2022",
    awards: [
      {
        imgSrc:
          "https://primexcapital.s3.eu-north-1.amazonaws.com/website/footer-pages/awards/award4.webp",
        title: "Best Copy Trading Program",
        location: "UAE 2023",
      },
      {
        imgSrc:
          "https://primexcapital.s3.eu-north-1.amazonaws.com/website/footer-pages/awards/award5.webp",
        title: "Best Copy Trading Program",
        location: "UAE 2023",
        highlighted: true,
      },
      {
        imgSrc:
          "https://primexcapital.s3.eu-north-1.amazonaws.com/website/footer-pages/awards/award6.webp",
        title: "Best Copy Trading Program",
        location: "UAE 2023",
      },
    ],
  },
  {
    id: 4,
    year: "2021",
    awards: [
      {
        imgSrc:
          "https://primexcapital.s3.eu-north-1.amazonaws.com/website/footer-pages/awards/award1.webp",
        title: "Best Copy Trading Program",
        location: "UAE 2023",
      },
      {
        imgSrc:
          "https://primexcapital.s3.eu-north-1.amazonaws.com/website/footer-pages/awards/award2.webp",
        title: "Best Copy Trading Program",
        location: "UAE 2023",
        highlighted: true,
      },
      {
        imgSrc:
          "https://primexcapital.s3.eu-north-1.amazonaws.com/website/footer-pages/awards/award3.webp",
        title: "Best Copy Trading Program",
        location: "UAE 2023",
      },
    ],
  },
  {
    id: 5,
    year: "2020",
    awards: [
      {
        imgSrc:
          "https://primexcapital.s3.eu-north-1.amazonaws.com/website/footer-pages/awards/award4.webp",
        title: "Best Copy Trading Program",
        location: "UAE 2023",
      },
      {
        imgSrc:
          "https://primexcapital.s3.eu-north-1.amazonaws.com/website/footer-pages/awards/award5.webp",
        title: "Best Copy Trading Program",
        location: "UAE 2023",
        highlighted: true,
      },
      {
        imgSrc:
          "https://primexcapital.s3.eu-north-1.amazonaws.com/website/footer-pages/awards/award6.webp",
        title: "Best Copy Trading Program",
        location: "UAE 2023",
      },
    ],
  },
];

const TabsSection = () => {
  const t = useTranslations("awards.tabs");
  const [selected, setSelected] = useState("2023");
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
