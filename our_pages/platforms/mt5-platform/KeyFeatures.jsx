import React from "react";
import { useLocale } from "next-intl";

const FeatureCard = ({ title, description }) => {
  const locale = useLocale();
  return (
    <div className="bg-[#1D1D1D] rounded-xl border-2 border-[#222222] p-6">
      <h3 className="text-xl font-semibold mb-2 text-[#ffffff]">{title}</h3>
      <p className="text-[#c6c6c6] text-sm sm:text-base">{description}</p>
    </div>
  );
};

const KeyFeatures = ({
  sectionTitle,
  sectionHighlight,
  sectionTitle1,
  features,
  icon,
  titleColor,
  highlightColor,
  titleColor1,
}) => {
  const locale = useLocale();

  return (
    <section className="bg-[#000000] py-5">
      <div className="container">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 py-8 bg-[#111111] border-2 border-[#1D1D1D] rounded-xl">
          <div className="flex justify-between items-center">
            <h2 className="text-2xl font-bold" style={{ color: titleColor }}>
              {sectionTitle}{" "}
              <span style={{ color: highlightColor }}>{sectionHighlight}</span>
              {sectionTitle1 ? (
                <span
                  style={{ color: titleColor1 }}
                  className={`${locale === "ar" ? "hidden" : ""}`}
                >
                  {sectionTitle1}
                </span>
              ) : (
                ""
              )}
            </h2>
            <div className="w-16 h-16 borer-2 border-[#222222] bg-[#1D1D1D] rounded-lg flex items-center justify-center">
              <img src={icon} alt="" className="w-[40px]" />
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-6 mt-6">
            {features.map((feature, index) => (
              <FeatureCard
                key={index}
                title={feature.title}
                description={feature.description}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default KeyFeatures;
