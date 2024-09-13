"use client";
import React, { useState, useCallback, useEffect } from "react";
import Image from "next/image";
import Logo from "@/public/images/logos/logo_black_v2.2.svg";
import Link from "next/link";
import { useTranslations } from "next-intl";
import LocaleLink from "./LocaleLink";
import { usePathname, useRouter } from "next/navigation";

const DesktopHeader = ({ locale }) => {
  const t = useTranslations("menu");
  const [activeDropdown, setActiveDropdown] = useState(null);
  const pathname = usePathname();
  const pathnameWithoutLocale = pathname.replace(`/${locale}`, "");
  const [isSticky, setIsSticky] = useState(false);
  const [language, setLanguage] = useState({
    text: locale === "ar" ? "عربي" : locale === "cn" ? "中文" : "English",
    flag:
      locale === "ar"
        ? "https://primexcapital.s3.eu-north-1.amazonaws.com/website/flags/ar-flag.svg"
        : locale === "cn"
        ? "https://primexcapital.s3.eu-north-1.amazonaws.com/website/flags/cn-flag.svg"
        : "https://primexcapital.s3.eu-north-1.amazonaws.com/website/flags/en-flag.svg",
  });
  const router = useRouter();
  let dropdownTimeout;

  const openDropdown = useCallback((index) => {
    clearTimeout(dropdownTimeout);
    setActiveDropdown(index);
  }, []);

  const closeDropdown = useCallback(() => {
    dropdownTimeout = setTimeout(() => {
      setActiveDropdown(null);
    }, 200);
  }, []);

  const currentLocale = pathname.split("/")[1];
  const isLocaleOnly = pathname === `/${currentLocale}`;
  const restOfPath = isLocaleOnly ? "" : pathname.split("/").slice(2).join("/");

  const handleScroll = () => {
    if (window.scrollY > 400) {
      setIsSticky(true);
    } else {
      setIsSticky(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const savedLanguage = localStorage.getItem("language");
    if (savedLanguage) {
      try {
        const parsedLanguage = JSON.parse(savedLanguage);
        if (parsedLanguage.text && parsedLanguage.flag) {
          setLanguage(parsedLanguage);
        }
      } catch (e) {
        console.error("Invalid JSON in localStorage:", e);
        localStorage.removeItem("language");
      }
    }
  }, []);

  const handleClick = (text, flag) => {
    const selectedLanguage = { text, flag };
    setLanguage(selectedLanguage);
    localStorage.setItem("language", JSON.stringify(selectedLanguage));
  };

  useEffect(() => {
    const text =
      locale === "ar" ? "عربي" : locale === "cn" ? "中文" : "English";
    const flag =
      locale === "ar"
        ? "https://primexcapital.s3.eu-north-1.amazonaws.com/website/flags/ar-flag.svg"
        : locale === "cn"
        ? "https://primexcapital.s3.eu-north-1.amazonaws.com/website/flags/cn-flag.svg"
        : "https://primexcapital.s3.eu-north-1.amazonaws.com/website/flags/en-flag.svg";
    const initialLanguage = { text, flag };
    setLanguage(initialLanguage);
    localStorage.setItem("language", JSON.stringify(initialLanguage));
  }, [locale]);

  return (
    <header
      className={`w-full z-50 transition-all duration-300 hidden lg:block ${
        isSticky ? "fixed top-0 left-0" : "absolute top-0 left-0"
      }`}
    >
      <div className="container bg-[#ffffffdb] mt-[14px] h-[51px] rounded-full flex items-center justify-between">
        <div className="flex items-center">
          <LocaleLink href="/" className="logo">
            <Image width="100" height="100" src={Logo} alt="Logo Image" />
          </LocaleLink>
        </div>
        <nav className="flex items-center h-full">
          <ul className="flex gap-[16px] h-full">
            <li className="flex items-center h-full">
              <LocaleLink href="/" className="text-black text-[.8em]">
                {t("home")}
              </LocaleLink>
            </li>
            <li
              className="relative flex items-center h-full"
              onMouseEnter={() => openDropdown(0)}
              onMouseLeave={closeDropdown}
            >
              <button className="text-black text-[.8em] flex items-center">
                {t("trading")}
                <svg
                  className={`fill-current h-4 w-4 ${
                    locale === "ar" ? "mr-1" : "ml-1"
                  }`}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                </svg>
              </button>
              {activeDropdown === 0 && (
                <ul className="absolute top-full mt-[4px] bg-[#ffffffdb] shadow-lg p-[10px] min-w-[150px] rounded-[6px]">
                  <li>
                    <LocaleLink
                      href="/forex"
                      onClick={closeDropdown}
                      className="block p-[10px] text-black text-[.8em] hover:bg-primary rounded-[6px]"
                    >
                      {t("forex")}
                    </LocaleLink>
                  </li>
                  <li>
                    <LocaleLink
                      href="/metals"
                      onClick={closeDropdown}
                      className="block p-[10px] text-black text-[.8em] hover:bg-primary rounded-[6px]"
                    >
                      {t("metals")}
                    </LocaleLink>
                  </li>
                  <li>
                    <LocaleLink
                      href="/indices"
                      onClick={closeDropdown}
                      className="block p-[10px] text-black text-[.8em] hover:bg-primary rounded-[6px]"
                    >
                      {t("indices")}
                    </LocaleLink>
                  </li>
                  <li>
                    <LocaleLink
                      href="/commodities"
                      onClick={closeDropdown}
                      className="block p-[10px] text-black text-[.8em] hover:bg-primary rounded-[6px]"
                    >
                      {t("commodities")}
                    </LocaleLink>
                  </li>
                  <li>
                    <LocaleLink
                      href="/stocks"
                      onClick={closeDropdown}
                      className="block p-[10px] text-black text-[.8em] hover:bg-primary rounded-[6px]"
                    >
                      {t("stocks")}
                    </LocaleLink>
                  </li>
                </ul>
              )}
            </li>
            <li
              className="relative flex items-center h-full"
              onMouseEnter={() => openDropdown(1)}
              onMouseLeave={closeDropdown}
            >
              <button className="text-black text-[.8em] flex items-center">
                {t("platform")}
                <svg
                  className={`fill-current h-4 w-4 ${
                    locale === "ar" ? "mr-1" : "ml-1"
                  }`}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                </svg>
              </button>
              {activeDropdown === 1 && (
                <ul className="absolute top-full mt-[4px] bg-[#ffffffdb] shadow-lg p-[10px] min-w-[150px] rounded-[6px]">
                  <li>
                    <LocaleLink
                      href="/platform/mt5-platform"
                      onClick={closeDropdown}
                      className="block px-4 py-2 text-black text-[.8em] hover:bg-primary rounded-[6px]"
                    >
                      {t("mt5")}
                    </LocaleLink>
                  </li>
                </ul>
              )}
            </li>
            <li className="flex items-center h-full">
              <LocaleLink
                href="/account-types"
                className="text-black text-[.8em]"
              >
                {t("accounts")}
              </LocaleLink>
            </li>
            <li
              className="relative flex items-center h-full"
              onMouseEnter={() => openDropdown(2)}
              onMouseLeave={closeDropdown}
            >
              <button className="text-black text-[.8em] flex items-center">
                {t("partners")}
                <svg
                  className={`fill-current h-4 w-4 ${
                    locale === "ar" ? "mr-1" : "ml-1"
                  }`}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                </svg>
              </button>
              {activeDropdown === 2 && (
                <ul
                  className={`absolute top-full mt-[4px] bg-[#ffffffdb] shadow-lg p-[10px] ${
                    locale === "ar" ? "min-w-[160px]" : "min-w-[150px]"
                  } rounded-[6px]`}
                >
                  <li>
                    <LocaleLink
                      href="/ib-program"
                      onClick={closeDropdown}
                      className="block px-4 py-2 text-black text-[.8em] hover:bg-primary rounded-[6px]"
                    >
                      {t("ib_program")}
                    </LocaleLink>
                  </li>
                </ul>
              )}
            </li>
            <li
              className="relative flex items-center h-full"
              onMouseEnter={() => openDropdown(3)}
              onMouseLeave={closeDropdown}
            >
              <button className="text-black text-[.8em] flex items-center">
                {t("education")}
                <svg
                  className={`fill-current h-4 w-4 ${
                    locale === "ar" ? "mr-1" : "ml-1"
                  }`}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                </svg>
              </button>
              {activeDropdown === 3 && (
                <ul className="absolute top-full mt-[4px] bg-[#ffffffdb] shadow-lg p-[10px] min-w-[150px] rounded-[6px]">
                  <li>
                    <LocaleLink
                      href="/academy"
                      onClick={closeDropdown}
                      className="block px-4 py-2 text-black text-[.8em] hover:bg-primary rounded-[6px]"
                    >
                      {t("academy")}
                    </LocaleLink>
                  </li>
                </ul>
              )}
            </li>
            <li
              className="relative flex items-center h-full"
              onMouseEnter={() => openDropdown(4)}
              onMouseLeave={closeDropdown}
            >
              <button className="text-black text-[.8em] flex items-center">
                {t("promotion")}
                <svg
                  className={`fill-current h-4 w-4 ${
                    locale === "ar" ? "mr-1" : "ml-1"
                  }`}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                </svg>
              </button>
              {activeDropdown === 4 && (
                <ul className="absolute top-full mt-[4px] bg-[#ffffffdb] shadow-lg p-[10px] min-w-[250px] rounded-[6px]">
                  <li>
                    <LocaleLink
                      href="/bonus"
                      onClick={closeDropdown}
                      className="block px-4 py-2 text-black text-[.8em] hover:bg-primary rounded-[6px]"
                    >
                      {t("deposit")}
                    </LocaleLink>
                  </li>
                  <li>
                    <LocaleLink
                      href="/top-trader"
                      onClick={closeDropdown}
                      className="block px-4 py-2 text-black text-[.8em] hover:bg-primary rounded-[6px]"
                    >
                      {t("tradetowin")}
                    </LocaleLink>
                  </li>
                  <li>
                    <LocaleLink
                      href="/funded-account-competition"
                      onClick={closeDropdown}
                      className="block px-4 py-2 text-black text-[.8em] hover:bg-primary rounded-[6px]"
                    >
                      {t("funded_account_competition")}
                    </LocaleLink>
                  </li>
                </ul>
              )}
            </li>
            <li
              className="relative flex items-center h-full"
              onMouseEnter={() => openDropdown(5)}
              onMouseLeave={closeDropdown}
            >
              <button className="text-black text-[.8em] flex items-center">
                <Image
                  unoptimized={true}
                  width="15"
                  height="15"
                  src={language.flag}
                  alt={`${language.text} flag`}
                />
                <span
                  className={`${locale === "ar" ? "mr-[5px]" : "ml-[5px]"}`}
                >
                  {language.text}
                </span>
                <svg
                  className={`fill-current h-4 w-4 ${
                    locale === "ar" ? "mr-1" : "ml-1"
                  }`}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                </svg>
              </button>
              {activeDropdown === 5 && (
                <ul className="absolute top-full mt-[4px] bg-[#ffffffdb] shadow-lg p-[10px] min-w-[150px] rounded-[6px]">
                  <li>
                    <Link
                      href={
                        currentLocale === "en"
                          ? `/${currentLocale}/${restOfPath}`
                          : `/en/${restOfPath}`
                      }
                      onClick={() =>
                        handleClick(
                          "English",
                          "https://primexcapital.s3.eu-north-1.amazonaws.com/website/flags/en-flag.svg"
                        )
                      }
                      className="px-4 py-2 text-black text-[.8em] hover:bg-primary rounded-[6px] flex items-center"
                      dir="ltr"
                    >
                      <Image
                        unoptimized={true}
                        width="15"
                        height="15"
                        src="https://primexcapital.s3.eu-north-1.amazonaws.com/website/flags/en-flag.svg"
                        alt="english flag"
                      />
                      <span className="ml-[5px]">English</span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      href={
                        currentLocale === "ar"
                          ? `/${currentLocale}/${restOfPath}`
                          : `/ar/${restOfPath}`
                      }
                      onClick={() =>
                        handleClick(
                          "عربي",
                          "https://primexcapital.s3.eu-north-1.amazonaws.com/website/flags/ar-flag.svg"
                        )
                      }
                      className="px-4 py-2 text-black text-[.8em] hover:bg-primary rounded-[6px] flex items-center"
                      dir="ltr"
                    >
                      <Image
                        unoptimized={true}
                        width="15"
                        height="15"
                        src="https://primexcapital.s3.eu-north-1.amazonaws.com/website/flags/ar-flag.svg"
                        alt="arabic flag"
                      />
                      <span className="ml-[5px]">عربي</span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      href={
                        currentLocale === "cn"
                          ? `/${currentLocale}/${restOfPath}`
                          : `/cn/${restOfPath}`
                      }
                      onClick={() =>
                        handleClick(
                          "中文",
                          "https://primexcapital.s3.eu-north-1.amazonaws.com/website/flags/cn-flag.svg"
                        )
                      }
                      className="px-4 py-2 text-black text-[.8em] hover:bg-primary rounded-[6px] flex items-center"
                      dir="ltr"
                    >
                      <Image
                        unoptimized={true}
                        width="15"
                        height="15"
                        src="https://primexcapital.s3.eu-north-1.amazonaws.com/website/flags/cn-flag.svg"
                        alt="chinese flag"
                      />
                      <span className="ml-[5px]">中文</span>
                    </Link>
                  </li>
                </ul>
              )}
            </li>
          </ul>
        </nav>
        <div className="flex gap-2">
          <button
            onClick={() =>
              window.open(
                `${
                  locale === "ar"
                    ? "https://client.primexbroker.com/ar/login"
                    : "https://client.primexbroker.com/en/login"
                }`
              )
            }
            className={`group ${
              locale === "ar" ? "w-[140px]" : "w-[120px]"
            } relative overflow-hidden rounded-full bg-transparent border-2 border-[#3F3F3E] py-[6px] text-[#3F3F3E] hover:text-primary transition-all duration-300 ease-out hover:bg-gradient-to-r hover:from-[#3F3F3E] hover:to-[#5B5B5B]`}
          >
            <span className="ease absolute right-0 -mt-12 h-32 w-8 translate-x-12 rotate-12 transform bg-[#e3e4e5] opacity-10 transition-all duration-700 group-hover:-translate-x-40"></span>
            <span className="relative flex items-center justify-center text-[1em]">
              {t("login")}
            </span>
          </button>
          <button
            onClick={() =>
              window.open(
                `${
                  locale === "ar"
                    ? "https://client.primexbroker.com/ar/register"
                    : "https://client.primexbroker.com/en/register"
                }`
              )
            }
            className={`group ${
              locale === "ar" ? "w-[140px]" : "w-[120px]"
            } relative overflow-hidden rounded-full bg-[#3F3F3E] py-[6px] text-[#FFD000] transition-all duration-300 ease-out hover:bg-gradient-to-r hover:from-[#3F3F3E] hover:to-[#5B5B5B]`}
          >
            <span className="ease absolute right-0 -mt-12 h-32 w-8 translate-x-12 rotate-12 transform bg-[#e3e4e5] opacity-10 transition-all duration-700 group-hover:-translate-x-40"></span>
            <span className="relative flex items-center justify-center text-[1em]">
              {t("register")}
            </span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default DesktopHeader;
