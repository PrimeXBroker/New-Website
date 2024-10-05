"use client";
import Image from "next/image";
import { useState } from "react";
import { useTranslations } from "next-intl";

const Values = () => {
  const t = useTranslations("about.coreValues");
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const valuesCards = [
    {
      id: 1,
      title: t("value_1_title"),
      description: t("value_1_desc"),
      imgUrl:
        "https://primexcapital.s3.eu-north-1.amazonaws.com/website/about/integrity_hover.svg",
      imgHoverUrl:
        "https://primexcapital.s3.eu-north-1.amazonaws.com/website/about/integrity_hover.svg",
    },
    {
      id: 1,
      title: t("value_2_title"),
      description: t("value_2_desc"),
      imgUrl:
        "https://primexcapital.s3.eu-north-1.amazonaws.com/website/about/innovation_hover.svg",
      imgHoverUrl:
        "https://primexcapital.s3.eu-north-1.amazonaws.com/website/about/innovation_hover.svg",
    },
    {
      id: 3,
      title: t("value_3_title"),
      description: t("value_3_desc"),
      imgUrl:
        "https://primexcapital.s3.eu-north-1.amazonaws.com/website/about/customer_hover.svg",
      imgHoverUrl:
        "https://primexcapital.s3.eu-north-1.amazonaws.com/website/about/customer_hover.svg",
    },
    {
      id: 4,
      title: t("value_4_title"),
      description: t("value_4_desc"),
      imgUrl:
        "https://primexcapital.s3.eu-north-1.amazonaws.com/website/about/excellence_hover.svg",
      imgHoverUrl:
        "https://primexcapital.s3.eu-north-1.amazonaws.com/website/about/excellence_hover.svg",
    },
  ];

  const handleIconEnter = (index) => {
    setHoveredIndex(index);
  };
  const handleIconLeave = () => {
    setHoveredIndex(null);
  };
  return (
    <section className="bg-[#000000]">
      <div className="container pt-6 pb-20">
        <h2 className="text-center text-[#FED100] font-bold text-3xl pb-8 md:pb-12">
          {t("title")}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-0 items-center justify-center">
          {valuesCards.map((card, index) => (
            <div
              key={card.id}
              onMouseEnter={() => handleIconEnter(index)}
              onMouseLeave={handleIconLeave}
              className={`flex flex-col justify-center items-center cursor-pointer border-l border-l-[#1D1D1D] border-r border-r-[#1D1D1D] px-2 md:px-0 ${
                index === 0
              }`}
            >
              <Image
                src={hoveredIndex === index ? card.imgHoverUrl : card.imgUrl}
                alt={card.title}
                width="80"
                height="200"
                className={`transition-all ${
                  hoveredIndex === index
                    ? "translate-y-[-10px] duration-500"
                    : "translate-y-0"
                } `}
              />
              <h3 className="font-semibold text-[#ffffff] text-xl mt-3 mb-2">
                {card.title}
              </h3>
              <p className="text-[#c6c6c6] text-center text-sm">
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Values;
