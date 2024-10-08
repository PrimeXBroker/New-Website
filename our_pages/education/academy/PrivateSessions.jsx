import Image from "next/image";
import React, { useState } from "react";
import { useTranslations } from "next-intl";
import Link from "next/link";
const PrivateSessions = ({ setActive }) => {
  const t = useTranslations("academy.privateSessions");
  const [loading, setLoading] = useState(false);

  const expertCards = [
    {
      name: t("expert_1_name"),
      position: t("expert_1_position"),
      imgUrl:
        "https://primexcapital.s3.eu-north-1.amazonaws.com/website/education/academy/rose.webp",
    },
    {
      name: t("expert_2_name"),
      position: t("expert_2_position"),
      imgUrl:
        "https://primexcapital.s3.eu-north-1.amazonaws.com/website/education/academy/ahmed.webp",
    },
  ];
  return (
    <section className="relative mt-12 mb-64 container bg-accent px-8 pt-8 pb-40">
      <h2
        className="text-secondary text-2xl font-semibold"
        style={{ letterSpacing: "1px", lineHeight: "50px" }}
      >
        {t("title")}
      </h2>
      <p className="text-secondary text-lg pb-6">{t("description")}</p>
      <p className="text-secondary text-sm">{t("eligibility_criteria_li1")}</p>
      <p className="text-secondary text-sm">{t("eligibility_criteria_li2")}</p>
      <div className="absolute flex flex-row justify-center items-center right-0 left-0 md:bottom-[-60%]">
        {expertCards.map((card, index) => (
          <div
            key={index}
            className="transform translate-y-[1rem] hover:translate-y-0 transition-transform duration-500 cursor-pointer"
          >
            <Image
              src={card.imgUrl}
              width="250"
              height="200"
              alt="expert image"
            />
            <h3 className="text-secondary text-center text-lg">{card.name}</h3>
            <h4 className="text-secondary text-center text-sm">
              {card.position}
            </h4>
            <Link
              href="#academy-form"
              onClick={() => setActive("Session")}
              className="bg-primary py-2 px-6 rounded-full w-[160px] shadow-xl text-secondary text-sm mx-auto block mt-4"
            >
              {t("book_session_btn")}
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PrivateSessions;
