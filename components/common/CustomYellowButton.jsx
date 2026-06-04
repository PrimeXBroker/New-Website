import { useLocale } from "next-intl";
import React from "react";
import { FiArrowUpRight, FiArrowUpLeft } from "react-icons/fi";

const CustomYellowButton = ({ title, className, onClick }) => {
  const locale = useLocale();
  return (
    <button
      className={`${className} transition-colors duration-300 ease-in-out rounded-lg font-bold flex items-center justify-center gap-3 group bg-[url('https://primexcapital.s3.eu-north-1.amazonaws.com/website/home-v2/hero/Button+BG.png')] bg-cover bg-center text-nb dark:text-nb-dark group`}
      onClick={onClick}
    >
      {title}
      {locale === "ar" ||
      locale === "ku" ||
      locale === "ps" ||
      locale === "fa" ? (
        <div
          className={`w-[20px] h-[20px] flex justify-center items-center rounded-full bg-nb dark:bg-nb-dark`}
        >
          <FiArrowUpLeft className="transition-transform duration-500 ease-in-out group-hover:rotate-[-45deg] text-pcp dark:text-pcp-dark text-xs" />
        </div>
      ) : (
        <div
          className={`w-[20px] h-[20px] flex justify-center items-center rounded-full bg-nb dark:bg-nb-dark`}
        >
          <FiArrowUpRight className="transition-transform duration-500 ease-in-out group-hover:rotate-[45deg] text-pcp dark:text-pcp-dark text-xs" />
        </div>
      )}
    </button>
  );
};

export default CustomYellowButton;
