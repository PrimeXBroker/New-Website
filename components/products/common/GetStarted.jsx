import React from "react";
import { useLocale } from "next-intl";

const GetStarted = ({ getStarted, main_title1, main_title2 }) => {
  const locale = useLocale();

  return (
    <div className="bg-[#000000] py-16 sm:py-28">
      <div className="container">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-[#ffffff] text-center mb-10">
          {main_title1} <span className="text-[#FED100]">{main_title2}</span>
        </h2>
      </div>
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-[#ffffff]">
        {getStarted.map((step) => (
          <div
            key={step.id}
            className="flex items-center bg-[#111111] border-2 border-[#1D1D1D] rounded-lg p-4"
          >
            <div className="flex-shrink-0 bg-[#1D1D1D] border-2 border-[#222222] text-center rounded-lg text-[#c6c6c6] h-12 w-12 flex items-center justify-center text-3xl font-semibold">
              {step.count}
            </div>
            <div
              className={`${
                locale === "ar" || locale === "fa" || locale === "ku"
                  ? "mr-4"
                  : "ml-4"
              }`}
            >
              <p>{step.title_part1}</p>
              <p className="text-[#FED100]">{step.title_part2}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GetStarted;
