"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@nextui-org/button";
import { IoPerson } from "react-icons/io5";
import { useLocale } from "next-intl";

const PremiumAdvantages = ({ items, data }) => {
  const locale = useLocale();
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <section className="bg-accent container border-b-5 border-b-primary rounded-lg rounded-md-5 pb-8 md:pb-4 pt-12 ps-8 pe-0 shadow-lg my-12">
      <div className="grid grid-cols-12">
        <div className="col-span-6">
          <div>
            <h1
              className={`sectionHeading inline-block underline-custom ${
                locale === "ar" ? "text-right" : "text-left"
              }`}
            >
              {data.mainTitle1}
              <br className="hidden md:block" /> {data.mainTitle2}
            </h1>
          </div>
        </div>
        <div className="col-span-6">
          <div className="flex justify-end">
            <Image
              src={locale === "ar" ? data.imgAr : data.imgEn}
              width="500"
              height="300"
              alt="become ib"
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
                  <div className="flex justify-center items-center w-20 h-20 rounded-full bg-secondary  mb-4 sm:mb-0">
                    <Image
                      src={hoveredIndex === index ? item.hoveredImg : item.img}
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
                    <p className="text-base text-[#232323] px-6 sm:px-0">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
        <div className="col-span-12 md:col-span-6 pe-8 md:pe-0">
          <div className="text-center">
            <Button
              className="text-secondary font-semibold"
              radius="full"
              size="lg"
              color="primary"
            >
              <Link
                href={data.regLink}
                target="_blank"
                className="inline-flex gap-3 items-center justify-center"
              >
                <IoPerson size={"25px"} className="me-0.5" />
                {data.btnTxt}
              </Link>
            </Button>
          </div>
          <p className="text-center mt-1">
            <span className="text-sm italic text-secondary me-1">
              {data.regNow}
            </span>
            <Link
              href={data.loginLink}
              target="_blank"
              className="text-sm text-secondary font-semibold"
            >
              {data.loginHere}
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
};

export default PremiumAdvantages;
