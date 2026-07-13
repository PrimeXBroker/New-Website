import { useLocale } from "next-intl";
import React from "react";
import { FiArrowUpRight, FiArrowUpLeft } from "react-icons/fi";

const CustomBrownButton = ({ title, className, onClick }) => {
  const locale = useLocale();
  return (
    <button
      className={`${className} transition-colors duration-300 ease-in-out rounded-lg font-bold flex items-center justify-center gap-3 group bg-cc dark:bg-cc-dark text-tm dark:text-tm-dark group`}
      onClick={onClick}
    >
      {title}
      {locale === "ar" ||
      locale === "ku" ||
      locale === "ps" ||
      locale === "fa" ? (
        <div
          className={`w-[20px] h-[20px] flex justify-center items-center rounded-full bg-tm dark:bg-tm-dark`}
        >
          <FiArrowUpLeft className="transition-transform duration-500 ease-in-out group-hover:rotate-[-45deg] text-cc dark:text-cc-dark text-xs" />
        </div>
      ) : (
        <div
          className={`w-[20px] h-[20px] flex justify-center items-center rounded-full bg-tm dark:bg-tm-dark`}
        >
          <FiArrowUpRight className="transition-transform duration-500 ease-in-out group-hover:rotate-[45deg] text-cc dark:text-cc-dark text-xs" />
        </div>
      )}
    </button>
  );
};

export default CustomBrownButton;
