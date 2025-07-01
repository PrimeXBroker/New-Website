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
  const t = useTranslations("registration.signUpStep");
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const filteredOptions = countries.filter((option) =>
    option.label.toLowerCase().includes(searchTerm.toLowerCase())
  );
  // console.log(filteredOptions, "countries");

  return (
    <div className="w-full relative mt-1 sm:mt-2">
      <div
        className={`flex w-full border border-e2 dark:border-e2-dark bg-cc dark:bg-cc-dark cursor-pointer
    ${isOpen ? "rounded-t-md sm:rounded-t-lg" : "rounded-md sm:rounded-lg"}
  `}
      >
        <div
          className={`flex items-center gap-2 p-4 w-[140px] border-e border-e2 dark:border-e2-dark bg-e2 dark:bg-e2-dark
    ${
      isOpen ? "rounded-tl-md sm:rounded-tl-lg" : "rounded-s-md sm:rounded-s-lg"
    }
  `}
          onClick={() => setIsOpen(!isOpen)}
        >
          <Image
            src={selectedPhone.flag}
            alt="Flag"
            width={20}
            height={15}
            className="w-[20px] h-auto"
          />
          <span className="text-sm sm:text-base font-medium text-tm dark:text-tm-dark">
            {selectedPhone.code}
          </span>
          <IoChevronDownOutline className="text-ts dark:text-ts-dark ml-auto" />
        </div>
        <input
          type="tel"
          placeholder={t("phone_number_placeholder")}
          value={value}
          onChange={(e) => handleInputChange("phone", `${e.target.value}`)}
          className={`w-full font-medium p-4 text-sm sm:text-base bg-cc dark:bg-cc-dark text-tm dark:text-tm-dark placeholder:text-ts dark:placeholder:text-ts-dark focus:outline-none ${
            isOpen
              ? "rounded-tr-md sm:rounded-tr-lg"
              : "rounded-e-md sm:rounded-e-lg"
          }`}
        />
      </div>

      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-cc dark:bg-cc-dark rounded-b-md sm:rounded-b-lg border border-t-0 border-e2 dark:border-e2-dark z-30 max-h-64 overflow-y-auto">
          <div className="flex items-center border-y border-e2 dark:border-e2-dark bg-cc dark:bg-cc-dark px-3">
            <FiSearch className="text-ts dark:text-ts-dark mr-2" />
            <input
              type="text"
              placeholder="Search"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full py-3 bg-cc dark:bg-cc-dark text-sm font-medium text-ctm dark:text-tm-dark placeholder:text-ts dark:placeholder:text-ts-dark focus:outline-none"
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
                className={`mx-5 px-2 py-4 text-sm font-medium text-ctm dark:text-ctm-dark flex items-center gap-2 hover:bg-e1 dark:hover:bg-e1-dark ${
                  i !== filteredOptions.length - 1
                    ? "border-b border-e2 dark:border-e2-dark"
                    : ""
                } cursor-pointer`}
              >
                <div className="flex items-center gap-2 text-tm dark:text-tm-dark text-sm font-medium">
                  <Image
                    src={option.flag}
                    alt="Flag"
                    width={21}
                    height={16}
                    className="w-[21px] h-full mr-2"
                  />
                  {option.label}
                </div>
                <span className="text-ts dark:text-ts-dark font-medium text-xs">
                  {option.code}
                </span>
              </div>
            ))
          ) : (
            <div className="mx-5 px-2 py-4 text-sm font-medium text-gray-500">
              No results found
            </div>
          )}
        </div>
      )}
    </div>
  );
}
