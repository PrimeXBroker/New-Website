"use client";

import React, { useState, useEffect, useRef } from "react";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { FiSearch } from "react-icons/fi";
import { IoChevronDownOutline } from "react-icons/io5";

export default function CustomSelectDropdown({
  label,
  options,
  selected,
  onChange,
  searchInput,
  flag,
}) {
  const t = useTranslations("registration.personalInfoStep");
  const tSignUpForm = useTranslations("signUpForm.selectDropdown");
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const dropdownRef = useRef(null);

  const filteredOptions = options?.filter((option) =>
    option.label.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="w-full">
      <label className="text-xs sm:text-[13px] text-ts dark:text-ts-dark">
        {label}
      </label>
      <div className="relative" ref={dropdownRef}>
        <button
          type="button"
          className={`w-full mt-2 bg-p dark:bg-p-dark border border-e1 dark:border-e1-dark rounded-lg text-start px-4 py-4 text-sm sm:text-[15px] font-medium focus:outline-none hover:cursor-pointer flex justify-between items-center gap-2 overflow-hidden
            ${isOpen ? "rounded-t-lg" : "rounded-lg"} ${
              selected
                ? "text-tm dark:text-tm-dark"
                : "text-ts dark:text-ts-dark"
            }`}
          onClick={() => setIsOpen(!isOpen)}
        >
          {selected ? (
            <div className="flex items-center gap-3 min-w-0 flex-1">
              {flag && selected && (
                <Image
                  src={
                    typeof selected === "object" && selected.flag
                      ? selected.flag
                      : options.find((o) => o.value === selected)?.flag || ""
                  }
                  alt="Flag"
                  width={20}
                  height={15}
                  className="w-[20px] h-auto shrink-0"
                />
              )}
              <span className="truncate block min-w-0 flex-1">
                {flag
                  ? typeof selected === "object" && selected.label
                    ? selected.label
                    : options.find(
                        (o) => o.value === (selected?.value || selected),
                      )?.label || t("select_placeholder")
                  : options.find(
                      (o) => o.value === (selected?.value || selected),
                    )?.label || t("select_placeholder")}
              </span>
            </div>
          ) : (
            <span className="truncate block min-w-0 flex-1 text-ts dark:text-ts-dark">
              {t("select_placeholder")}
            </span>
          )}
          <IoChevronDownOutline className="text-ts dark:text-ts-dark text-[15px] shrink-0 ml-2" />
        </button>
        {isOpen && (
          <div
            className="absolute h-60 overflow-y-scroll top-full left-0 w-full bg-p dark:bg-p-dark rounded-b-lg border border-t-0 border-e1 dark:border-e1-dark z-10 hover:cursor-pointer "
            dir="ltr"
          >
            {searchInput && (
              <div className="flex items-center border-y border-e1 dark:border-e1-dark bg-p dark:bg-p-dark px-4">
                <FiSearch className="text-ts dark:text-ts-dark mr-2 shrink-0" />
                <input
                  type="text"
                  placeholder={tSignUpForm("search_placeholder")}
                  className="w-full py-[14px] text-sm font-medium bg-p dark:bg-p-dark text-tm dark:text-tm-dark placeholder:text-ts dark:placeholder:text-ts-dark focus:outline-none"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            )}
            {filteredOptions.map((option, i) => (
              <div
                key={i}
                onClick={() => {
                  if (flag) onChange(option);
                  else onChange(option.value);
                  setIsOpen(false);
                }}
                className={`mx-2 px-2 py-[14px] gap-2 text-sm font-medium text-tm dark:text-tm-dark flex items-center hover:bg-cc dark:hover:bg-cc-dark ${
                  i !== filteredOptions.length - 1
                    ? "border-b border-e1 dark:border-e1-dark"
                    : ""
                }`}
              >
                {flag && (
                  <Image
                    src={option.flag}
                    alt="Flag"
                    width={32}
                    height={32}
                    className="w-[20px] h-auto shrink-0 mr-2"
                  />
                )}
                <span className="truncate">{option.label}</span>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
