"use client";
import Image from "next/image";
import { useTranslations } from "next-intl";

const Features = () => {
  const t = useTranslations("productsPageCommon.features");

  const features = [
    {
      id: 1,
      title: t("feature_1_title"),
      description: t("feature_1_desc"),
      imgUrl:
        "https://primexcapital.s3.eu-north-1.amazonaws.com/website/new-instruments/Diverse+Stock+Options.svg",
    },
    {
      id: 1,
      title: t("feature_2_title"),
      description: t("feature_2_desc"),
      imgUrl:
        "https://primexcapital.s3.eu-north-1.amazonaws.com/website/new-instruments/Tight+Spreads.svg",
    },
    {
      id: 3,
      title: t("feature_3_title"),
      description: t("feature_3_desc"),
      imgUrl:
        "https://primexcapital.s3.eu-north-1.amazonaws.com/website/new-instruments/Global+Market.svg",
    },
    {
      id: 4,
      title: t("feature_4_title"),
      description: t("feature_4_desc"),
      imgUrl:
        "https://primexcapital.s3.eu-north-1.amazonaws.com/website/new-instruments/Flexible+Terms.svg",
    },
  ];

  return (
    <section className="bg-[#000000] pt-12 sm:pt-20">
      <div className="container">
        <div className="bg-[#111111] border-2 rounded-2xl border-[#1D1D1D] py-3 sm:py-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-0 items-center justify-center">
            {features.map((feature, index) => (
              <div
                key={feature.id}
                className={`flex md:flex-col gap-4 sm:gap-7 md:gap-0 justify-center items-center md:border-l md:border-l-[#1D1D1D] md:border-r md:border-r-[#1D1D1D] px-2 md:px-2 py-10 md:py-0 group
  ${index === 0 ? "first:border-l-0" : ""} 
  ${index === features.length - 1 ? "last:border-r-0" : ""}
  sm:border-b sm:border-b-[#1D1D1D] xs:border-b xs:border-b-[#1D1D1D] lg:border-b-0 md:border-b-0 last:border-b-0`}
              >
                <div
                  className={`bg-[#1D1D1D] border-2 border-[#222222] w-16 h-16 sm:w-20 sm:h-20 md:w-16 md:h-16 flex justify-center items-center rounded-[6.32px]`}
                >
                  <Image
                    src={feature.imgUrl}
                    alt={feature.title}
                    width="40"
                    height="200"
                    className="w-[34px] sm:w-[40px]"
                  />
                </div>
                <div className="md:text-center">
                  <h3 className="font-semibold text-[#ffffff] text-lg sm:text-xl md:mt-3 mb-1 md:mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-[#c6c6c6] w-[239px] text-sm sm:text-base">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
