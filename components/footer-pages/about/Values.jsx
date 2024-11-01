"use client";
import Image from "next/image";
import { useTranslations } from "next-intl";

const Values = () => {
  const t = useTranslations("about.coreValues");

  const valuesCards = [
    {
      id: 1,
      title: t("value_1_title"),
      description: t("value_1_desc"),
      imgUrl:
        "https://primexcapital.s3.eu-north-1.amazonaws.com/website/about/new-about/Integrity.svg",
      imgHoverUrl:
        "https://primexcapital.s3.eu-north-1.amazonaws.com/website/about/new-about/Integrity.svg",
    },
    {
      id: 1,
      title: t("value_2_title"),
      description: t("value_2_desc"),
      imgUrl:
        "https://primexcapital.s3.eu-north-1.amazonaws.com/website/about/new-about/Innovation.svg",
      imgHoverUrl:
        "https://primexcapital.s3.eu-north-1.amazonaws.com/website/about/new-about/Innovation.svg",
    },
    {
      id: 3,
      title: t("value_3_title"),
      description: t("value_3_desc"),
      imgUrl:
        "https://primexcapital.s3.eu-north-1.amazonaws.com/website/about/new-about/Customer+Focus.svg",
      imgHoverUrl:
        "https://primexcapital.s3.eu-north-1.amazonaws.com/website/about/new-about/Customer+Focus.svg",
    },
    {
      id: 4,
      title: t("value_4_title"),
      description: t("value_4_desc"),
      imgUrl:
        "https://primexcapital.s3.eu-north-1.amazonaws.com/website/about/new-about/Excellence.svg",
      imgHoverUrl:
        "https://primexcapital.s3.eu-north-1.amazonaws.com/website/about/new-about/Excellence.svg",
    },
  ];

  return (
    <section className="bg-[#000000] py-5 sm:py-20">
      <div className="container pt-6 sm:pb-20">
        <h2 className="text-center text-[#ffffff] text-2xl sm:text-3xl lg:text-4xl font-semibold md:pb-12">
          {t("title1")} <span className="text-[#FED100]">{t("title2")}</span>
        </h2>
        <div className="md:bg-[#111111] md:border-2 md:rounded-2xl md:border-[#1D1D1D] py-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-0 items-center justify-center">
            {valuesCards.map((card, index) => (
              <div
                key={card.id}
                className={`flex flex-col justify-center items-center md:border-l md:border-l-[#1D1D1D] md:border-r md:border-r-[#1D1D1D] px-2 md:px-2 py-10 md:py-0 group
  ${index === 0 ? "first:border-l-0" : ""} 
  ${index === valuesCards.length - 1 ? "last:border-r-0" : ""}
  sm:border-b sm:border-b-[#1D1D1D] xs:border-b xs:border-b-[#1D1D1D] lg:border-b-0 md:border-b-0 last:border-b-0`}
              >
                <div
                  className={`transition-all bg-[#1D1D1D] border-2 border-[#222222] rounded-xl`}
                >
                  <Image
                    src={card.imgUrl}
                    alt={card.title}
                    width="80"
                    height="200"
                  />
                </div>
                <h3 className="font-semibold text-[#ffffff] text-xl mt-3 mb-2">
                  {card.title}
                </h3>
                <p className="text-[#c6c6c6] text-center text-sm w-[239px] md:w-full">
                  {card.description}
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
