"use client";
import Image from "next/image";
import { useState } from "react";
import { useTranslations } from "next-intl";
import { useTheme } from "next-themes";

const Values = () => {
  const { theme } = useTheme();
  const t = useTranslations("whyChooseUs.values");
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const features = [
    {
      id: 1,
      description1: t("value_1_desc1"),
      description2: t("value_1_desc2"),
      description3: t("value_1_desc3"),
      imgDark:
        "https://primexcapital.s3.eu-north-1.amazonaws.com/website/footer-pages/why-choose-us/Over+%24330M++Paid-Up+Capital.svg",
      imgLight:
        "https://primexcapital.s3.eu-north-1.amazonaws.com/website/light-mode-icons/why-choose-us/Over+%24330M++Paid-Up+Capital.svg",
      desc1_color: "text-ts dark:text-ts-dark",
      desc2_color: "text-pcp dark:text-pcp-dark",
      desc3_color: "text-ts dark:text-ts-dark",
    },
    {
      id: 1,
      description1: t("value_2_desc1"),
      description2: t("value_2_desc2"),
      description3: t("value_2_desc3"),
      imgDark:
        "https://primexcapital.s3.eu-north-1.amazonaws.com/website/footer-pages/why-choose-us/Automated+Trading+Spreads+from+0.1+Pips.svg",
      imgLight:
        "https://primexcapital.s3.eu-north-1.amazonaws.com/website/light-mode-icons/why-choose-us/Automated+Trading+Spreads+from+0.1+Pips.svg",
      desc1_color: "text-ts dark:text-ts-dark",
      desc2_color: "text-ts dark:text-ts-dark",
      desc3_color: "text-pcp dark:text-pcp-dark",
    },
    {
      id: 3,
      description1: t("value_3_desc1"),
      description2: t("value_3_desc2"),
      description3: t("value_3_desc3"),
      imgDark:
        "https://primexcapital.s3.eu-north-1.amazonaws.com/website/footer-pages/why-choose-us/Access+to+330%2B++Trading+Instruments.svg",
      imgLight:
        "https://primexcapital.s3.eu-north-1.amazonaws.com/website/light-mode-icons/why-choose-us/Access+to+330%2B++Trading+Instruments.svg",
      desc1_color: "text-ts dark:text-ts-dark",
      desc2_color: "text-pcp dark:text-pcp-dark",
      desc3_color: "text-ts dark:text-ts-dark",
    },
    {
      id: 4,
      description1: t("value_4_desc1"),
      description2: t("value_4_desc2"),
      description3: t("value_4_desc3"),
      imgDark:
        "https://primexcapital.s3.eu-north-1.amazonaws.com/website/footer-pages/why-choose-us/Leverage+Up+to+1_500+Maximum+Flexibility.svg",
      imgLight:
        "https://primexcapital.s3.eu-north-1.amazonaws.com/website/light-mode-icons/why-choose-us/Leverage+Up+to+1_500+Maximum+Flexibility.svg",
      desc1_color: "text-ts dark:text-ts-dark",
      desc2_color: "text-pcp dark:text-pcp-dark",
      desc3_color: "text-ts dark:text-ts-dark",
    },
  ];

  return (
    <section className="bg-p dark:bg-p-dark pt-16 sm:pt-28">
      <div className="container">
        <div className="bg-cc dark:bg-cc-dark rounded-2xl py-3 sm:py-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-0 items-center justify-center">
            {features.map((feature, index) => (
              <div
                key={feature.id}
                className={`flex md:flex-col gap-4 sm:gap-7 md:gap-0 justify-center items-center cursor-pointer md:border-l md:border-l-e1 md:dark:border-l-e1-dark md:border-r md:border-r-e1 md:dark:border-r-e1-dark px-2 md:px-2 py-10 md:py-0 group
${index === 0 ? "first:border-l-0" : ""} 
${index === features.length - 1 ? "last:border-r-0" : ""}
sm:border-b sm:border-b-e1 sm:dark:border-b-e1-dark xs:border-b xs:border-b-e1 xs:dark:border-b-e1-dark lg:border-b-0 md:border-b-0 last:border-b-0`}
              >
                <div
                  className={`transition-all bg-e1 dark:bg-e1-dark w-16 h-16 sm:w-20 sm:h-20 md:w-16 md:h-16 flex justify-center items-center rounded-[6.32px] ${
                    hoveredIndex === index
                      ? "translate-y-[-10px] duration-500"
                      : "translate-y-0"
                  } `}
                >
                  <Image
                    src={theme === "dark" ? feature.imgDark : feature.imgLight}
                    alt={feature.title}
                    width="40"
                    height="200"
                  />
                </div>
                <p
                  className={`md:text-center text-[15px] w-[173px] mt-4 ${feature.desc1_color}`}
                >
                  {feature.description1}{" "}
                  <span className={`${feature.desc2_color}`}>
                    {feature.description2}
                  </span>
                  <span className={`${feature.desc3_color}`}>
                    {feature.description3}
                  </span>
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Values;
