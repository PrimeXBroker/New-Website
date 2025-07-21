"use client";
import React from "react";
import { useLocale } from "next-intl";
import { useTheme } from "next-themes";
import Lottie from "lottie-react";

const FeatureCard = ({ title, description }) => {
  const locale = useLocale();
  return (
    <div className="bg-e1 dark:bg-e1-dark rounded-xl p-6">
      <h3 className="text-xl font-semibold mb-2 text-tm dark:text-tm-dark">
        {title}
      </h3>
      <p className="text-ts dark:text-ts-dark text-sm sm:text-base">
        {description}
      </p>
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
}) => {
  const locale = useLocale();
  const { theme } = useTheme();

  return (
    <section className="bg-p dark:bg-p-dark py-5">
      <div className="container">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 py-8 bg-cc dark:bg-cc-dark rounded-xl">
          <div className="flex justify-between items-center">
            <h2 className={`text-2xl font-bold ${titleColor}`}>
              {sectionTitle}{" "}
              <span className={`${highlightColor}`}>{sectionHighlight}</span>
              {sectionTitle1 ? (
                <span
                  className={`${locale === "ar" ? "hidden" : ""} ${titleColor}`}
                >
                  {sectionTitle1}
                </span>
              ) : (
                ""
              )}
            </h2>
            <div className="w-16 h-16 bg-e1 dark:bg-white/15 border border-e2 dark:border-white/15 rounded-lg flex items-center justify-center">
              <Lottie
                animationData={icon}
                loop={true}
                style={{ width: "52px", height: "52px" }}
              />
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
