"use client";
import Image from "next/image";
import { useState } from "react";
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
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const filteredOptions = options.filter((option) =>
    option.label.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="w-full">
      <label className="text-ts dark:text-ts-dark text-xs sm:text-sm font-medium">
        {label}
      </label>
      <div className="relative">
        <button
          type="button"
          className={`w-full mt-1 sm:mt-2 font-medium bg-ce1 dark:bg-ce1-dark focus:outline-none border border-ce2 dark:border-ce2-dark text-left p-4 text-sm sm:text-base hover:cursor-pointer flex justify-between items-center 
            ${
              isOpen
                ? "rounded-t-md sm:rounded-t-lg"
                : "rounded-md sm:rounded-lg"
            } ${
            selected
              ? "text-ctm dark:text-ctm-dark"
              : "text-cts dark:text-cts-dark"
          }`}
          onClick={() => setIsOpen(!isOpen)}
        >
          {selected ? (
            <div className="flex items-center gap-2">
              {flag && (
                <Image
                  src={options.find((o) => o.value === selected)?.flag}
                  alt="Flag"
                  width={20}
                  height={15}
                  className="w-[20px] h-auto"
                />
              )}
              <span>{options.find((o) => o.value === selected)?.label}</span>
            </div>
          ) : (
            "Select..."
          )}
          <IoChevronDownOutline className="text-cts dark:text-cts-dark text-base sm:text-xl" />
        </button>
        {isOpen && (
          <div className="absolute top-full left-0 w-full bg-ce1 dark:bg-ce1-dark rounded-b-md sm:rounded-b-lg border border-t-0 border-ce2 dark:border-ce2-dark z-10 hover:cursor-pointer">
            {searchInput && (
              <div
                className={`flex items-center justify-between border-y border-ce3 dark:border-ce3-dark w-full bg-ce2 dark:bg-ce2-dark px-3`}
              >
                <FiSearch className="text-cts dark:text-cts-dark text-sm sm:text-base mr-2" />
                <input
                  type="text"
                  placeholder="Search"
                  className={`appearance-none font-medium text-ctm dark:text-ctm-dark placeholder:text-cts dark:placeholder:text-cts-dark w-full py-3 bg-ce2 dark:bg-ce2-dark focus:outline-none text-sm`}
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            )}
            {filteredOptions.map((option, i) => (
              <div
                key={option.value}
                onClick={() => {
                  onChange(option.value);
                  setIsOpen(false);
                }}
                className={`px-5 py-3 text-sm font-medium text-ctm dark:text-ctm-dark flex items-center ${
                  i !== filteredOptions.length - 1
                    ? "border-b border-ce2 dark:border-ce2-dark"
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
