"use client";

import Image from "next/image";
import React, { useState } from "react";
import { useLocale } from "next-intl";

const Featured = ({ title, cardsData }) => {
  const locale = useLocale();
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const handleIconEnter = (index) => {
    setHoveredIndex(index);
  };
  const handleIconLeave = () => {
    setHoveredIndex(null);
  };
  return (
    <section className="bg-[#e4e5e6] pt-8 pb-10">
      <div className="container">
        <h2 className="sectionHeading">{title}</h2>
        <div className="flex flex-row mt-10 gap-12 justify-center flex-wrap xl:flex-wrap">
          {cardsData.map((card, index) => (
            <div
              onMouseEnter={() => handleIconEnter(index)}
              onMouseLeave={handleIconLeave}
              key={index}
              className="bg-accent cursor-pointer rounded-2xl shadow-2xl border-b-5 w-[320px] h-[220px] sm:w-[250px] sm:h-[250px] group
           hover:bg-[#3F3F3E] border-black hover:border-primary px-4 py-7 sm:px-4 sm:py-4 transform translate-y-[1rem] hover:translate-y-0 transition-transform duration-500"
            >
              <div
                className={`flex mb-4 ${
                  locale === "ar" || locale === "fa" || locale === "kur"
                    ? "justify-center sm:justify-right"
                    : "justify-center sm:justify-left"
                }`}
              >
                <Image
                  src={hoveredIndex === index ? card.imgHoverUrl : card.imgUrl}
                  alt="academy icon"
                  width="70"
                  height="70"
                  className="block mx-0 academy_img"
                />
              </div>
              <h3
                className={`sectionHeading text-xl group-hover:text-white ${
                  locale === "ar" || locale === "fa" || locale === "kur"
                    ? "text-center sm:text-right"
                    : "text-center sm:text-left"
                }`}
              >
                {card.title}
              </h3>
              <p
                className={`sectionPara text-sm group-hover:text-white ${
                  locale === "ar" || locale === "fa" || locale === "kur"
                    ? "text-center md:text-right"
                    : "text-center md:text-left"
                }`}
              >
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Featured;
