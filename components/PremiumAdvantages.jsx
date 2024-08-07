"use client";
import React, { useState } from "react";
import Image from "next/image";
import { useLocale } from "next-intl";
import RegButton from "./RegButton";

const PremiumAdvantages = ({ items, data }) => {
  const locale = useLocale();
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const customStyle = {
    btnColor: "primary",
    txtColor1: "text-secondary",
    txtColor2: "text-secondary",
    txtColor3: "text-secondary",
    borderColor: "border-primary",
  };

  return (
    <section className="container mb-20">
      <div className="bg-accent border-b-5 border-b-primary rounded-3xl pb-8 md:pb-4 pt-12 ps-8 pe-0 shadow-lg">
        <div className="grid grid-cols-12">
          <div className="col-span-12 md:col-span-6">
            <div>
              <h2
                className={`sectionHeading inline-block underline-custom ${
                  locale === "ar" ? "text-right" : "text-left"
                }`}
              >
                {data.mainTitle1}
                <br className="hidden md:block" /> {data.mainTitle2}
              </h2>
            </div>
          </div>
          <div className="col-span-12 md:col-span-6 mt-8 md:mt-0">
            <div className="flex justify-end">
              <Image
                src={locale === "ar" ? data.imgAr : data.imgEn}
                width="500"
                height="300"
                alt="img"
              />
            </div>
          </div>
        </div>
        <div className="grid grid-cols-12 mt-5 lg:mt-0">
          {items.map((item, index) => {
            const isSpecialImage = item.img === "/images/adv-logo3.svg";
            return (
              <div
                key={index}
                className="col-span-12 md:col-span-6 mb-9 pe-8 sm:pe-0"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <div className="grid grid-cols-12 justify-items-center sm:justify-items-start">
                  <div className="col-span-12 sm:col-span-2 md:col-span-3 lg:col-span-2">
                    <div className="flex justify-center items-center w-20 h-20 rounded-full bg-secondary mb-4 sm:mb-0">
                      <Image
                        src={
                          hoveredIndex === index ? item.hoveredImg : item.img
                        }
                        width={isSpecialImage ? "34" : "44"}
                        height={isSpecialImage ? "34" : "44"}
                        alt="become ib"
                      />
                    </div>
                  </div>
                  <div className="col-span-12 sm:col-span-8 md:col-span-8 lg:col-span-8">
                    <div className="text-center sm:text-start">
                      <h3 className="text-xl font-semibold mb-1 text-[#232323]">
                        {item.title}
                      </h3>
                      <p className="text-[#232323] px-6 sm:px-0">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default PremiumAdvantages;
