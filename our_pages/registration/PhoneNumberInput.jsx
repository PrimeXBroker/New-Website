"use client";
import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";
import { useState } from "react";
import { FiSearch } from "react-icons/fi";
import { IoChevronDownOutline } from "react-icons/io5";

export default function PhoneNumberField() {
  const locale = useLocale();
  const t = useTranslations("registration.signUpStep");
  const [error, setError] = useState(false);
  const phoneOptions = [
    {
      label: "Afghanistan",
      code: "+93",
      flag: "https://primexcapital.s3.eu-north-1.amazonaws.com/website/primex-registeration/Samoa+Am%C3%A9ricaines.svg",
    },
    {
      label: "Albania",
      code: "+355",
      flag: "https://primexcapital.s3.eu-north-1.amazonaws.com/website/primex-registeration/Albanie.svg",
    },
    {
      label: "Algeria",
      code: "+213",
      flag: "https://primexcapital.s3.eu-north-1.amazonaws.com/website/primex-registeration/Alg%C3%A9rie.svg",
    },
    {
      label: "Andorra",
      code: "+376",
      flag: "https://primexcapital.s3.eu-north-1.amazonaws.com/website/primex-registeration/Afghanistan.svg",
    },
  ];

  const [selectedPhone, setSelectedPhone] = useState(phoneOptions[0]);
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [phoneInput, setPhoneInput] = useState("");

  const filteredOptions = phoneOptions.filter((option) =>
    option.label.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="w-full relative mt-1 sm:mt-2">
      <div
        className={`flex w-full border border-ce2 dark:border-ce2-dark bg-ce1 dark:bg-ce1-dark cursor-pointer
    ${isOpen ? "rounded-t-md sm:rounded-t-lg" : "rounded-md sm:rounded-lg"}
  `}
        onClick={() => setIsOpen(!isOpen)}
      >
        <div
          className={`flex items-center gap-2 p-4 w-[140px] border-e border-ce2 dark:border-ce2-dark bg-ce2 dark:bg-ce2-dark
    ${
      isOpen ? "rounded-tl-md sm:rounded-tl-lg" : "rounded-s-md sm:rounded-s-lg"
    }
  `}
        >
          <Image
            src={selectedPhone.flag}
            alt="Flag"
            width={20}
            height={15}
            className="w-[20px] h-auto"
          />
          <span className="text-sm sm:text-base font-medium text-ctm dark:text-ctm-dark">
            {selectedPhone.code}
          </span>
          <IoChevronDownOutline className="text-cts dark:text-cts-dark ml-auto" />
        </div>
        <input
          type="tel"
          placeholder={t("phone_number_placeholder")}
          value={phoneInput}
          onClick={(e) => e.stopPropagation()}
          onChange={(e) => setPhoneInput(e.target.value)}
          className={`w-full font-medium p-4 text-sm sm:text-base bg-ce1 dark:bg-ce1-dark text-ctm dark:text-ctm-dark placeholder:text-cts dark:placeholder:text-cts-dark focus:outline-none ${
            isOpen
              ? "rounded-tr-md sm:rounded-tr-lg"
              : "rounded-e-md sm:rounded-e-lg"
          }`}
        />
      </div>

      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-ce1 dark:bg-ce1-dark rounded-b-md sm:rounded-b-lg border border-t-0 border-ce2 dark:border-ce2-dark z-30 max-h-64 overflow-y-auto">
          <div className="flex items-center border-y border-ce3 dark:border-ce3-dark bg-ce2 dark:bg-ce2-dark px-3">
            <FiSearch className="text-cts dark:text-cts-dark mr-2" />
            <input
              type="text"
              placeholder="Search"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full py-3 bg-ce2 dark:bg-ce2-dark text-sm font-medium text-ctm dark:text-ctm-dark placeholder:text-cts dark:placeholder:text-cts-dark focus:outline-none"
            />
          </div>
          {filteredOptions.map((option, i) => (
            <div
              key={option.code}
              onClick={() => {
                setSelectedPhone(option);
                setIsOpen(false);
              }}
              className={`px-5 py-3 text-sm font-medium text-ctm dark:text-ctm-dark flex items-center gap-3 ${
                i !== filteredOptions.length - 1
                  ? "border-b border-ce2 dark:border-ce2-dark"
                  : ""
              } cursor-pointer`}
            >
              <div className="flex items-center gap-2">
                <Image
                  src={option.flag}
                  alt="Flag"
                  width={21}
                  height={16}
                  className="w-[21px] h-full mr-2"
                />
                {option.label}
              </div>
              <span>{option.code}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
