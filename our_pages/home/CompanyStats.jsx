"use client";
import { useState, useEffect } from "react";
import Aos from "aos";
const useCounter = (targetValue, duration = 3000) => {
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

const CompanyStats = ({ stats }) => {
  const displayStats = stats || statsOne;
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
    if (stat.symbol) {
      formattedValue = stat.prepend
        ? `${stat.symbol}${formattedNumber}`
        : `${formattedNumber}${stat.symbol}`;
    }
    if (stat.prefix) {
      formattedValue = `${stat.prefix}${formattedNumber}`; // Apply the prefix
    }
    return formattedValue;
  };

  return (
    <section className="stat-counter absolute right-0 left-0 bottom-5">
      <div className="py-8 md:py-12 container max-w-[1440px]">
        <div className="grid md:grid-cols-4 grid-cols-2 gap-2">
          {displayStats.map((stat, index) => {
            const animatedValue = useCounter(stat.value);
            const displayValue = formatValue(animatedValue, stat);

            return (
              <div
                key={index}
                className="flex flex-col md:flex-row items-center justify-center md:gap-1"
                // data-aos-easing="ease-out"
                // data-aos-duration={3000}
                // data-aos="zoom-in"
              >
                <p className="text-primary md:text-lg xl:text-xl 3xl:text-[24px] text-base  m-0 p-0 text-center font-bold">
                  {displayValue}
                  <b className="text-primary font-normal md:text-[20px] text-base">
                    {stat.bold}{" "}
                  </b>
                </p>
                <p className="text-[#FFF] md:text-base xl:text-lg 3xl:text-[20px] text-sm  font-[300] m-0 text-center">
                  {stat.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CompanyStats;
