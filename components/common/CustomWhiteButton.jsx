import { useLocale } from "next-intl";
import React from "react";
import { FiArrowUpRight, FiArrowUpLeft } from "react-icons/fi";

const CustomWhiteButton = ({ title, className, onClick }) => {
  const locale = useLocale();
  return (
    <button
      className={`${className} transition-colors duration-300 ease-in-out rounded-lg font-bold flex items-center justify-center gap-3 group bg-tm dark:bg-tm-dark hover:bg-pcp dark:hover:bg-pcp-dark text-p dark:text-p-dark group`}
      onClick={onClick}
    >
      {title}
      {locale === "ar" || locale === "ku" ? (
        <div
          className={`w-[20px] h-[20px] flex justify-center items-center rounded-full bg-nb dark:bg-nb-dark`}
        >
          <FiArrowUpLeft className="transition-transform duration-500 ease-in-out group-hover:rotate-[-45deg] text-tm dark:text-tm-dark group-hover:text-pcp dark:group-hover:text-pcp-dark text-xs" />
        </div>
      ) : (
        <div
          className={`w-[20px] h-[20px] flex justify-center items-center rounded-full bg-p dark:bg-p-dark`}
        >
          <FiArrowUpRight className="transition-transform duration-500 ease-in-out group-hover:rotate-[45deg] text-tm dark:text-tm-dark group-hover:text-pcp dark:group-hover:text-pcp-dark text-xs" />
        </div>
      )}
    </button>
  );
};

export default CustomWhiteButton;
