"use client";

import Image from "next/image";
import { useState } from "react";
import { useTranslations, useLocale } from "next-intl";

const HaveQuestion = () => {
  const locale = useLocale();
  const t = useTranslations("contact.haveQuestion");
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const handleIconEnter = (index) => {
    setHoveredIndex(index);
  };
  const handleIconLeave = () => {
    setHoveredIndex(null);
  };
  const cardsData = [
    // {
    //   title: t("help_li1_title"),
    //   description: t("help_li1_desc"),
    //   imgUrl: "/images/contact/chat.svg",
    //   imgHoverUrl: "/images/contact/chat_hover.svg",
    // },
    {
      title: t("help_li2_title"),
      description: t("help_li2_desc"),
      imgUrl: "/images/contact/email.svg",
      imgHoverUrl: "/images/contact/email_hover.svg",
    },
    {
      title: t("help_li3_title"),
      description: t("help_li3_desc"),
      imgUrl: "/images/contact/headphone.svg",
      imgHoverUrl: "/images/contact/headphone_hover.svg",
    },
    // {
    //   title: t("help_li4_title"),
    //   description: t("help_li4_desc"),
    //   imgUrl: "/images/contact/phone.svg",
    //   imgHoverUrl: "/images/contact/phone_hover.svg",
    // },
    {
      title: t("help_li5_title"),
      description: t("help_li5_desc"),
      imgUrl: "/images/contact/South-Africa.svg",
      imgHoverUrl: "/images/contact/South-Africa.svg",
    },
    {
      title: t("help_li6_title"),
      description: t("help_li6_desc"),
      imgUrl: "/images/contact/UAE.svg",
      imgHoverUrl: "/images/contact/UAE.svg",
    },
  ];
  return (
    <section className="bg-white pt-12 pb-24">
      <div className="max-w-2xl mx-auto px-2">
        <h1
          className={`text-secondary md:text-2xl text-lg font-semibold text-center`}
          style={{ lineHeight: "50px", letterSpacing: "1px" }}
        >
          {t("title")}
        </h1>
        <p
          className="text-secondary md:text-lg text-md font-light text-center"
          style={{ lineHeight: "30px", letterSpacing: "1px" }}
        >
          {t("description")}
        </p>
      </div>
      <div className="max-w-5xl md:bg-gray-300 bg:white m-auto grid grid-cols-1 md:p-0 px-4 sm:grid-cols-2 gap-[0.5px] justify-center flex-wrap xl:flex-wrap mt-8 ">
        {cardsData.map((card, index) => (
          <div
            onMouseEnter={() => handleIconEnter(index)}
            onMouseLeave={handleIconLeave}
            key={index}
            className="flex py-4 justify-center items-center cursor-pointer bg-white    h-auto group
            duration-500"
          >
            <div
              className={`flex ${
                locale === "ar" ? "justify-right" : "justify-end"
              }`}
            >
              <Image
                src={hoveredIndex === index ? card.imgHoverUrl : card.imgUrl}
                alt="academy icon"
                width="100"
                height="80"
                className="block mx-0 academy_img"
              />
            </div>
            <div className="">
            <h1
              className={`sectionHeading text-xl  ${
                locale === "ar" ? "text-right pr-4" : "text-left pl-4 "
              }`}
            >
              {card.title}
            </h1>
            <p
              className={`sectionPara text-sm ${
                locale === "ar" ? "text-right pr-4" : "text-left pl-4 "
              }`}
            >
              {card.description}
            </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HaveQuestion;
