import React from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";

const Instruments = () => {
  const t = useTranslations("gift.instruments");

  const instrumentsContent = [
    {
      img: "/images/gift/forex.webp",
      title: t("instruments_0_h"),
      description: t("card.account1-desc"),
      desc1: t("ins1_card_para_1"),
      desc2: t("ins1_card_para_2"),
      desc3: t("ins1_card_para_3"),
    },
    {
      img: "/images/gift/metals.webp",
      title: t("instruments_1_h"),
      desc1: t("ins2_card_para_3"),
      desc2: t("ins2_card_para_1"),
      desc3: t("ins2_card_para_2"),
    },
    {
      img: "/images/gift/indices.webp",
      title: t("instruments_2_h"),
      desc1: t("ins3_card_para_1"),
      desc2: t("ins3_card_para_2"),
    },
    {
      img: "/images/gift/commodities.webp",
      title: t("instruments_3_h"),
      desc1: t("ins4_card_para_1"),
      desc2: t("ins4_card_para_2"),
      desc3: t("ins4_card_para_3"),
    },
    {
      img: "/images/gift/stock.webp",
      title: t("instruments_4_h"),
      desc1: t("ins5_card_para_1"),
      desc2: t("ins5_card_para_2"),
      desc3: t("ins5_card_para_3"),
    },
    {
      img: "/images/gift/crypto.webp",
      title: t("instruments_5_h"),
      desc1: t("ins6_card_para_1"),
      desc2: t("ins6_card_para_2"),
      desc3: t("ins6_card_para_3"),
    },
  ];

  return (
    <section className="container">
      <h2 className="sectionHeading">
        <span className="font-light">{t("title")}</span>{" "}
        <span className="underline-custom inline-block">{t("title_2")}</span>
      </h2>
      <div className="flex flex-row mt-12 gap-12 justify-center flex-wrap">
        {instrumentsContent.map((ins) => {
          return (
            <div className="bg-secondary rounded-3xl shadow-2xl shadow-secondary p-8 pb-10 w-[350px] transform transition-transform duration-300 hover:scale-105 group">
              <div className="flex gap-3">
                <div className="w-20 h-20 flex justify-center items-center rounded-full bg-accent group-hover:bg-primary">
                  <Image
                    src={ins.img}
                    width="46"
                    height="46"
                    alt="img"
                    className="block mx-0"
                  />
                </div>
                <h1 className="sectionHeading text-2xl text-center my-4 text-accent">
                  {ins.title}
                </h1>
              </div>
              <p className="text-base text-center text-accent mt-5">
                {ins.desc1} <span className="text-primary"> {ins.desc2} </span>
                {ins.desc3}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Instruments;
