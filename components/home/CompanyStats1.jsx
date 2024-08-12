"use client";
import { useState, useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css"; // Ensure to import AOS CSS

const useCounter = (targetValue, duration = 5000) => {
  const [value, setValue] = useState(0);

  useEffect(() => {
    const target = Math.abs(targetValue); // Handle positive values for the counter
    const step = target / ((duration / 1000) * 60); // Determine step size based on animation duration

    let current = 0;
    const timer = setInterval(() => {
      current += step;
      if (current < target) {
        setValue(current);
      } else {
        setValue(targetValue); // Ensure it stops at the exact target value
        clearInterval(timer);
      }
    }, 1000 / 60); // 60 fps for smooth animation

    return () => clearInterval(timer);
  }, [targetValue, duration]);

  return Math.floor(value); // Return the integer part for the counter
};

const CompanyStats1 = ({ stats }) => {
  useEffect(() => {
    Aos.init({ disable: "mobile" });
  }, []);

  const formatValue = (value, stat) => {
    // Determine if the value should be formatted with commas
    const shouldFormatWithCommas =
      typeof value === "number" && !stat.prefix?.includes(":");

    // Format number with commas unless it's a special format like '1:1000'
    const formattedNumber = shouldFormatWithCommas
      ? new Intl.NumberFormat().format(value)
      : value;

    let formattedValue = formattedNumber;

    if (stat.symbol && stat.prepend) {
      formattedValue = `${stat.symbol}${formattedValue}`;
    } else if (stat.symbol) {
      formattedValue = `${formattedValue}${stat.symbol}`;
    }

    if (stat.prefix) {
      formattedValue = `${stat.prefix}${formattedValue}`; // Apply the prefix
    }
    if (stat.suffix) {
      formattedValue = `${formattedValue}${stat.suffix}`; // Apply the suffix
    }
    return formattedValue;
  };

  return (
   
      <div className="pt-4 container z-10">
        <div className="flex flex-col sm:flex-row justify-center items-center flex-wrap z-10">
          {stats.map((stat, index) => {
            const animatedValue = useCounter(stat.value);
            const displayValue = formatValue(animatedValue, stat);

            return (
              <div
              key={index}
              className={`flex relative sm:flex-col items-center sm:gap-0 gap-5 z-10 lg:px-14 sm:px-8 lg:mt-0 mt-5 
                ${ index !== 3 ? "before:content-[''] before:absolute before:right-0 before:top-0 before:h-full before:w-[1px] before:bg-secondary" : ""}`}
            >
              <p className="heart lg:text-secondary text-primary leading-6 text-[1.125rem] md:text-lg xl:text-xl 3xl:text-[24px] m-0 p-0 text-left sm:text-center font-bold">
                {displayValue}
                <b className="text-primary leading-6 font-normal text-[1.125rem] md:text-[20px]">
                  {stat.bold}{" "}
                </b>
              </p>
              <p className="lg:text-secondary text-white text-[1rem] xl:text-lg 3xl:text-[20px] text-sm font-extralight m-0 text-center white">
                {stat.description}
              </p>
            </div>
            );
          })}
        </div>
      </div>
   
  );
};

export default CompanyStats1;