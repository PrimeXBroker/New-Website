"use client";
import Image from "next/image";
import { useLocale, useTranslations } from "next-intl";
import { useTheme } from "next-themes";

const Mission = () => {
  const locale = useLocale();
  const { theme } = useTheme();
  const t = useTranslations("about.mission");

  const missionCards = [
    {
      id: 1,
      title: t("mission_title"),
      description: t("mission_desc"),
      imgUrlDark:
        "https://primexcapital.s3.eu-north-1.amazonaws.com/website/about/new-about/Mission.svg",
      imgUrlLight:
        "https://primexcapital.s3.eu-north-1.amazonaws.com/website/light-mode-icons/about-us/low-price_8922469.svg",
    },
    {
      id: 2,
      title: t("vision_title"),
      description: t("vision_desc"),
      imgUrlDark:
        "https://primexcapital.s3.eu-north-1.amazonaws.com/website/about/new-about/Vision.svg",
      imgUrlLight:
        "https://primexcapital.s3.eu-north-1.amazonaws.com/website/light-mode-icons/about-us/growth_10106238.svg",
    },
  ];

  return (
    <section className="bg-p dark:bg-p-dark py-16 sm:py-28">
      <div className="container">
        <div className="py-4 flex flex-col justify-center items-center md:flex-row bg-cc dark:bg-cc-dark rounded-2xl">
          {missionCards.map((card, index) => (
            <div
              key={card.id}
              className={`flex items-center group p-8 ${
                index === 0
                  ? `${
                      locale === "ar" || locale === "ps" || locale === "ku"
                        ? "md:border-l-2 md:border-e1 md:dark:border-e1-dark md:pl-12"
                        : "md:border-r-2 md:border-e1 md:dark:border-e1-dark md:pr-12"
                    }`
                  : "md:pl-12"
              } ${
                index !== missionCards.length - 1
                  ? "border-b-2 md:border-b-0 border-e1 dark:border-e1-dark"
                  : ""
              }`}
            >
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <h2
                    className="text-tm dark:text-tm-dark text-2xl sm:text-3xl font-semibold"
                    style={{ letterSpacing: "1.2px" }}
                  >
                    {card.title}
                  </h2>
                  <div className="w-14 h-14 bg-e1 dark:bg-e1-dark rounded-lg flex items-center justify-center">
                    <Image
                      src={
                        theme === "dark" ? card.imgUrlDark : card.imgUrlLight
                      }
                      alt={card.title}
                      width="500"
                      height="100"
                      className="w-[46px]"
                    />
                  </div>
                </div>
                <p className="text-ts dark:text-ts-dark text-sm sm:text-[15px]">
                  {card.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Mission;
