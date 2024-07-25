import React from "react";
import Image from "next/image";
import { useLocale, useTranslations } from "next-intl";

const Steps = () => {
  const locale = useLocale();
  const t = useTranslations("ib");

  const stepsContent = [
    {
      img: "/images/ib/ib-step1.webp",
      title: t("steps.join_li1"),
      description: t("steps.join_li1_p"),
    },
    {
      img: "/images/ib/ib-step2.webp",
      title: t("steps.join_li2"),
      description: t("steps.join_li2_p"),
    },
    {
      img: "/images/ib/ib-step3.webp",
      title: t("steps.join_li3"),
      description: t("steps.join_li3_p"),
    },
  ];

  return (
    <section>
      <div className="container">
        <h1 className="sectionHeading font-light">
          {t("steps.title1")}{" "}
          <span className="font-semibold">{t("steps.title2")}</span>
          {t("steps.title3")}
        </h1>
        <div className="grid grid-cols-12 justify-center  mt-16">
          {stepsContent.map((item, index) => {
            return (
              <div
                className="col-span-8 col-start-3 sm:col-span-6 md:col-span-4 flex justify-center group mt-8 sm:mt-0"
                key={index}
              >
                <div className="flex flex-col items-center max-w-sm">
                  <div className="w-[126px] h-[126px] flex justify-center items-center rounded-full bg-accent group-hover:border-2 group-hover:border-secondary">
                    <Image
                      src={item.img}
                      width="100"
                      height="100"
                      alt={item.title}
                      className="w-[63%]"
                    />
                  </div>
                  <div className="w-[300px] sm:w-[270px] md:w-[230px] lg:w-[300px] mt-10 mb-5">
                    <div className="bg-primary rounded-3xl py-4 mb-2">
                      <h6 className="md:text-base lg:text-2xl font-semibold m-0 text-center">
                        {item.title}
                      </h6>
                    </div>
                    <p className="text-center px-5 lg:px-8">
                      {item.description}
                    </p>
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

export default Steps;
