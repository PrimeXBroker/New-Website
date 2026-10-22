"use client";
import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";
import { useState } from "react";
import { FiSearch } from "react-icons/fi";
import { IoChevronDownOutline } from "react-icons/io5";

export default function PhoneNumberField({
  value,
  handleInputChange,
  selectedPhone,
  setSelectedPhone,
  countries = [],
}) {
  const locale = useLocale();
  const t = useTranslations("signUpForm.phoneInput");
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const filteredOptions = countries.filter((option) =>
    option.label.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  return (
    <div className="w-full relative">
      <div
        className={`flex w-full border border-e1 dark:border-e1-dark bg-p dark:bg-p-dark cursor-pointer
    ${isOpen ? "rounded-t-lg" : "rounded-lg"}
  `}
      >
        <div
          className={`flex items-center gap-3 p-4 w-auto min-w-[110px] shrink-0 border-e border-e1 dark:border-e1-dark bg-p dark:bg-p-dark
    ${isOpen ? "rounded-tl-lg" : "rounded-s-lg"}
  `}
          onClick={() => setIsOpen(!isOpen)}
        >
          <Image
            src={selectedPhone.flag}
            alt="Flag"
            width={20}
            height={15}
            className="w-[20px] h-auto shrink-0"
          />
          <span className="text-sm sm:text-[15px] font-medium text-tm dark:text-tm-dark whitespace-nowrap">
            {selectedPhone.code}
          </span>
          <IoChevronDownOutline className="text-tm dark:text-tm-dark text-[15px] ml-auto shrink-0" />
        </div>
        <input
          type="tel"
          placeholder={t("placeholder")}
          value={value}
          onChange={(e) => handleInputChange("phone", `${e.target.value}`)}
          className={`w-full p-4 text-sm sm:text-[15px] font-medium bg-p dark:bg-p-dark text-tm dark:text-tm-dark placeholder:text-ts dark:placeholder:text-ts-dark focus:outline-none ${
            isOpen ? "rounded-tr-lg" : "rounded-e-lg"
          }`}
        />
      </div>

      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-p dark:bg-p-dark rounded-b-lg border border-t-0 border-e1 dark:border-e1-dark z-30 max-h-64 overflow-y-auto">
          <div className="flex items-center border-y border-e1 dark:border-e1-dark bg-p dark:bg-p-dark px-4">
            <FiSearch className="text-ts dark:text-ts-dark mr-2" />
            <input
              type="text"
              placeholder={t("search_placeholder")}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full py-[14px] bg-p dark:bg-p-dark text-sm font-medium text-tm dark:text-tm-dark placeholder:text-ts dark:placeholder:text-ts-dark focus:outline-none"
            />
          </div>
          {filteredOptions.length > 0 ? (
            filteredOptions.map((option, i) => (
              <div
                key={i}
                onClick={() => {
                  setSelectedPhone(option);
                  setIsOpen(false);
                }}
                className={`mx-2 px-2 py-[14px] text-tm dark:text-tm-dark flex items-center gap-2 hover:bg-cc dark:hover:bg-cc-dark ${
                  i !== filteredOptions.length - 1
                    ? "border-b border-e1 dark:border-e1-dark"
                    : ""
                } cursor-pointer`}
              >
                <div className="flex items-center gap-2 text-tm dark:text-tm-dark text-sm font-medium">
                  <Image
                    src={option.flag}
                    alt="Flag"
                    width={21}
                    height={16}
                    className="w-[20px] h-full mr-2"
                  />
                  {option.label}
                </div>
                <span className="text-ts dark:text-ts-dark font-medium text-xs">
                  {option.code}
                </span>
              </div>
            ))
          ) : (
            <div className="mx-5 px-2 py-4 text-sm font-medium text-ts dark:text-ts-dark text-center">
              {t("no_results")}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
