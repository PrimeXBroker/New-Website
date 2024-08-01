"use client";
import React, { useEffect } from "react";
import Aos from "aos";
import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@nextui-org/react";
import { VscTriangleRight } from "react-icons/vsc";
import { VscTriangleLeft } from "react-icons/vsc";

const AdvancedPlatforms = () => {
  const t = useTranslations("home.advancedPlatforms");
  const leftList = [
    {
      id: 1,
      text: t("li1"),
    },
    {
      id: 2,
      text: t("li2"),
    },
    {
      id: 3,
      text: t("li3"),
    },
    {
      id: 4,
      text: t("li4"),
    },
  ];

  const rightList = [
    {
      id: 1,
      text: t("li5"),
    },
    {
      id: 2,
      text: t("li6"),
    },
    {
      id: 3,
      text: t("li7"),
    },
    {
      id: 4,
      text: t("li8"),
    },
  ];

  useEffect(() => {
    Aos.init({ disable: "mobile" });
  }, []);
  return (
    <section
      className="py-12 container justify-around items-center"
      data-aos-easing="ease-out"
      data-aos-duration={2000}
      data-aos="slide-up"
    >
      <h1
        className="sectionHeading"
        data-aos-easing="ease-out"
        data-aos-duration={1100}
        data-aos="slide-up"
      >
        {t("title")}
      </h1>
      <div className="grid grid-cols-12 mt-14">
        <div className="col-span-12 md:col-span-4 flex justify-center">
          <div>
            {leftList.map((item, index) => {
              return (
                <div className="relative flex flex-row items-center mb-5 group">
                  <div
                    className="bg-accent hover:bg-secondary hover:text-white min-h-[90px] w-[280px] border border-solid border-secondary  rounded-xl py-4 px-9 text-xl font-semibold flex justify-center items-center text-center"
                    key={index}
                  >
                    {item.text}
                  </div>
                  <VscTriangleRight className="absolute right-[-40px] text-4xl text-primary group-hover:block hidden" />
                </div>
              );
            })}
          </div>
        </div>
        <div className="col-span-12 md:col-span-4 flex justify-center my-8 md:my-0">
          <div className="flex justify-center">
            <Image
              unoptimized={true}
              src="https://primexcapital.s3.eu-north-1.amazonaws.com/website/homepage/mt5-home.webp"
              width="50"
              height="100"
              className="w-[50%]"
              alt="account logo"
            />
          </div>
        </div>
        <div className="col-span-12 md:col-span-4 flex justify-center">
          <div>
            {rightList.map((item, index) => {
              return (
                <div className="relative flex flex-row items-center mb-5 group">
                  <VscTriangleLeft className="absolute left-[-40px] text-4xl text-primary group-hover:block hidden" />
                  <div
                    className="bg-accent hover:bg-secondary hover:text-white min-h-[90px] w-[280px] border border-solid border-secondary  rounded-xl py-4 px-2 text-xl font-semibold flex justify-center items-center text-center"
                    key={index}
                  >
                    {item.text}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="col-span-12 flex justify-center my-8">
          <Button
            radius="full"
            variant="solid"
            color="primary"
            className="w-[190px] h-[60px] text-center mt-2"
          >
            <p className="text-secondary text-lg font-semibold mt-4">{t("btnTxt")}</p>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default AdvancedPlatforms;
