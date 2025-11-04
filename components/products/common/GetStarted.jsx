import React from "react";
import { useLocale } from "next-intl";

const GetStarted = ({ getStarted, main_title1, main_title2 }) => {
  const locale = useLocale();

  return (
    <div className="bg-p dark:bg-p-dark py-16 sm:py-28">
      <div className="container">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-tm dark:text-tm-dark text-center mb-10">
          {main_title1}{" "}
          <span className="text-pcp dark:text-pcp-dark">{main_title2}</span>
        </h2>
      </div>
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-tm dark:text-tm-dark">
        {getStarted.map((step) => (
          <div
            key={step.id}
            className="flex items-center bg-cc dark:bg-cc-dark rounded-lg p-4"
          >
            <div className="flex-shrink-0 bg-e1 dark:bg-e1-dark text-center rounded-lg text-tm dark:text-tm-dark h-12 w-12 flex items-center justify-center text-3xl font-semibold">
              {step.count}
            </div>
            <div
              className={`${
                locale === "ar" ||
                locale === "ps" ||
                locale === "ku" ||
                locale === "fa"
                  ? "mr-4"
                  : "ml-4"
              }`}
            >
              <p>{step.title_part1}</p>
              <p className="text-pcp dark:text-pcp-dark">{step.title_part2}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GetStarted;
