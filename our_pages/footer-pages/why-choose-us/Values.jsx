"use client";
import Image from "next/image";
import { useState } from "react";
import { useTranslations } from "next-intl";

const Values = () => {
  const t = useTranslations("whyChooseUs.values");
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const features = [
    {
      id: 1,
      description1: t("value_1_desc1"),
      description2: t("value_1_desc2"),
      description3: t("value_1_desc3"),
      imgUrl:
        "https://primexcapital.s3.eu-north-1.amazonaws.com/website/footer-pages/why-choose-us/Over+%24330M++Paid-Up+Capital.svg",
      imgHoverUrl:
        "https://primexcapital.s3.eu-north-1.amazonaws.com/website/footer-pages/why-choose-us/Over+%24330M++Paid-Up+Capital.svg",
      desc1_color: "#C6C6C6",
      desc2_color: "#FED100",
      desc3_color: "#C6C6C6",
    },
    {
      id: 1,
      description1: t("value_2_desc1"),
      description2: t("value_2_desc2"),
      description3: t("value_2_desc3"),
      imgUrl:
        "https://primexcapital.s3.eu-north-1.amazonaws.com/website/footer-pages/why-choose-us/Automated+Trading+Spreads+from+0.1+Pips.svg",
      imgHoverUrl:
        "https://primexcapital.s3.eu-north-1.amazonaws.com/website/footer-pages/why-choose-us/Automated+Trading+Spreads+from+0.1+Pips.svg",
      desc1_color: "#C6C6C6",
      desc2_color: "#C6C6C6",
      desc3_color: "#FED100",
    },
    {
      id: 3,
      description1: t("value_3_desc1"),
      description2: t("value_3_desc2"),
      description3: t("value_3_desc3"),
      imgUrl:
        "https://primexcapital.s3.eu-north-1.amazonaws.com/website/footer-pages/why-choose-us/Access+to+330%2B++Trading+Instruments.svg",
      imgHoverUrl:
        "https://primexcapital.s3.eu-north-1.amazonaws.com/website/footer-pages/why-choose-us/Access+to+330%2B++Trading+Instruments.svg",
      desc1_color: "#C6C6C6",
      desc2_color: "#FED100",
      desc3_color: "#C6C6C6",
    },
    {
      id: 4,
      description1: t("value_4_desc1"),
      description2: t("value_4_desc2"),
      description3: t("value_4_desc3"),
      imgUrl:
        "https://primexcapital.s3.eu-north-1.amazonaws.com/website/footer-pages/why-choose-us/Leverage+Up+to+1_500+Maximum+Flexibility.svg",
      imgHoverUrl:
        "https://primexcapital.s3.eu-north-1.amazonaws.com/website/footer-pages/why-choose-us/Leverage+Up+to+1_500+Maximum+Flexibility.svg",
      desc1_color: "#C6C6C6",
      desc2_color: "#FED100",
      desc3_color: "#C6C6C6",
    },
  ];

  return (
    <section className="bg-[#000000] sm:pt-10">
      <div className="container">
        <div className="bg-[#111111] border-2 rounded-2xl border-[#1D1D1D] py-3 sm:py-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-0 items-center justify-center">
            {features.map((feature, index) => (
              <div
                key={feature.id}
                className={`flex md:flex-col gap-4 sm:gap-7 md:gap-0 justify-center items-center cursor-pointer md:border-l md:border-l-[#1D1D1D] md:border-r md:border-r-[#1D1D1D] px-2 md:px-2 py-10 md:py-0 group
${index === 0 ? "first:border-l-0" : ""} 
${index === features.length - 1 ? "last:border-r-0" : ""}
sm:border-b sm:border-b-[#1D1D1D] xs:border-b xs:border-b-[#1D1D1D] lg:border-b-0 md:border-b-0 last:border-b-0`}
              >
                <div
                  className={`transition-all bg-[#1D1D1D] border-2 border-[#222222] w-16 h-16 sm:w-20 sm:h-20 md:w-16 md:h-16 flex justify-center items-center rounded-[6.32px] ${
                    hoveredIndex === index
                      ? "translate-y-[-10px] duration-500"
                      : "translate-y-0"
                  } `}
                >
                  <Image
                    src={
                      hoveredIndex === index
                        ? feature.imgHoverUrl
                        : feature.imgUrl
                    }
                    alt={feature.title}
                    width="40"
                    height="200"
                  />
                </div>
                <p
                  className="md:text-center text-[15px] w-[173px] mt-4"
                  style={{ color: feature.desc1_color }}
                >
                  {feature.description1}{" "}
                  <span style={{ color: feature.desc2_color }}>
                    {feature.description2}
                  </span>
                  <span style={{ color: feature.desc3_color }}>
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
