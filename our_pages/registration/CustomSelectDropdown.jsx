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
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const dropdownRef = useRef(null); // Reference for dropdown container

  const filteredOptions = options?.filter((option) =>
    option.label.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Close the dropdown when clicked outside
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
    <div className="w-full ">
      <label className="text-ts dark:text-ts-dark text-xs sm:text-sm font-medium">
        {label}
      </label>
      <div className="relative" ref={dropdownRef}>
        <button
          type="button"
          className={`w-full mt-1 sm:mt-2 font-medium bg-cc dark:bg-cc-dark focus:outline-none border border-e2 dark:border-e2-dark text-left p-4 text-sm sm:text-base hover:cursor-pointer flex justify-between items-center 
            ${
              isOpen
                ? "rounded-t-md sm:rounded-t-lg"
                : "rounded-md sm:rounded-lg"
            } ${
            selected ? "text-tm dark:text-tm-dark" : "text-ts dark:text-ts-dark"
          }`}
          onClick={() => setIsOpen(!isOpen)}
        >
          {selected ? (
            <div className="flex items-center gap-2">
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
                  className="w-[20px] h-auto"
                />
              )}
              <span>
                {flag
                  ? typeof selected === "object" && selected.label
                    ? selected.label
                    : options.find(
                        (o) => o.value === (selected?.value || selected)
                      )?.label || t("select_placeholder")
                  : options.find(
                      (o) => o.value === (selected?.value || selected)
                    )?.label || t("select_placeholder")}
              </span>
            </div>
          ) : (
            t("select_placeholder")
          )}

          <IoChevronDownOutline className="text-ts dark:text-ts-dark text-base sm:text-xl" />
        </button>
        {isOpen && (
          <div
            className="absolute h-60 overflow-scroll top-full left-0 w-full bg-cc dark:bg-cc-dark rounded-b-md sm:rounded-b-lg border border-t-0 border-e2 dark:border-e2-dark z-10 hover:cursor-pointer"
            dir="ltr"
          >
            {searchInput && (
              <div
                className={`flex items-center border-y border-e2 dark:border-e2-dark bg-cc dark:bg-cc-dark px-3`}
              >
                <FiSearch className="text-ts dark:text-ts-dark text-sm sm:text-base mr-2" />
                <input
                  type="text"
                  placeholder="Search"
                  className={`appearance-none font-medium text-tm dark:text-tm-dark placeholder:text-ts dark:placeholder:text-ts-dark w-full py-4 bg-cc dark:bg-cc-dark focus:outline-none text-sm`}
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            )}
            {filteredOptions.map((option, i) => (
              <div
                key={option.value}
                onClick={() => {
                  if (flag) onChange(option);
                  else onChange(option.value);
                  setIsOpen(false);
                }}
                className={`mx-5 px-2 py-4 text-sm font-medium text-tm dark:text-tm-dark flex items-center hover:bg-e1 dark:hover:bg-e1-dark ${
                  i !== filteredOptions.length - 1
                    ? "border-b border-e2 dark:border-e2-dark"
                    : ""
                }`}
              >
                {flag && (
                  <Image
                    src={option.flag}
                    alt="Flag"
                    width={32}
                    height={32}
                    className="w-[21px] h-full mr-2"
                  />
                )}
                {option.label}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
