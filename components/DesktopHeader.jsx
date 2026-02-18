"use client";
import React, { useState, useCallback, useEffect } from "react";
import Image from "next/image";
import Logo from "@/public/images/logos/logo-white.webp";
import Link from "next/link";
import { useTranslations } from "next-intl";
import LocaleLink from "./LocaleLink";
import { usePathname, useRouter } from "next/navigation";
import { getRegisterUrl } from "@/utilities/getRegisterUrl";
import { getLoginUrl } from "@/utilities/getLoginUrl";
import { useTheme } from "next-themes";

const DesktopHeader = ({ locale }) => {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const t = useTranslations("menu");
  const foo = useTranslations("footer");
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [activeSubDropdown, setActiveSubDropdown] = useState(null);
  const pathname = usePathname();
  const [scrollProgress, setScrollProgress] = useState(0);
  const pathnameWithoutLocale = pathname.replace(`/${locale}`, "");
  const [isSticky, setIsSticky] = useState(false);
  const [language, setLanguage] = useState({
    text:
      locale === "ar"
        ? "عربي"
        : locale === "es"
          ? "Español"
          : locale === "ps"
            ? "پښتو"
            : locale === "ku"
              ? "کوردی"
              : locale === "pt"
                ? "Português"
                : locale === "fa"
                  ? "Persian"
                  : "English",
    flag:
      locale === "ar"
        ? "https://primexcapital.s3.eu-north-1.amazonaws.com/website/flags/ar-flag.svg"
        : locale === "es"
          ? "https://primexcapital.s3.eu-north-1.amazonaws.com/website/flags/expanol.png"
          : locale === "ps"
            ? "https://primexcapital.s3.eu-north-1.amazonaws.com/website/flags/afghanistan.png"
            : locale === "ku"
              ? "https://primexcapital.s3.eu-north-1.amazonaws.com/website/flags/Khurdish.webp"
              : locale === "pt"
                ? "https://primexcapital.s3.eu-north-1.amazonaws.com/website/flags/portugal.png"
                : locale === "fa"
                  ? "https://primexcapital.s3.eu-north-1.amazonaws.com/website/flags/iran.png"
                  : "https://primexcapital.s3.eu-north-1.amazonaws.com/website/flags/en-flag.svg",
  });
  const [selectedLocation, setSelectedLocation] = useState({
    name: "SCA UAE",
    code: "uae",
    flag: "https://primexcapital.s3.eu-north-1.amazonaws.com/website/flags/united-arab-emirates.png",
  });

  const router = useRouter();
  let dropdownTimeout;

  useEffect(() => {
    setMounted(true);
  }, []);

  const openDropdown = useCallback((index) => {
    clearTimeout(dropdownTimeout);
    setActiveDropdown(index);
  }, []);

  const closeDropdown = useCallback(() => {
    dropdownTimeout = setTimeout(() => {
      setActiveDropdown(null);
      setActiveSubDropdown(null);
    }, 200);
  }, []);

  const currentLocale = pathname.split("/")[1];
  const isLocaleOnly = pathname === `/${currentLocale}`;
  const restOfPath = isLocaleOnly ? "" : pathname.split("/").slice(2).join("/");

  const handleScroll = () => {
    if (window?.scrollY > 400) {
      setIsSticky(true);
    } else {
      setIsSticky(false);
    }
    const scrollTop = window?.scrollY;
    const docHeight =
      document.documentElement.scrollHeight - window?.innerHeight;
    const progress = (scrollTop / docHeight) * 100;
    setScrollProgress(progress);
  };

  useEffect(() => {
    window?.addEventListener("scroll", handleScroll);
    return () => {
      window?.removeEventListener("scroll", handleScroll);
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
      locale === "ar"
        ? "عربي"
        : locale === "es"
          ? "Español"
          : locale === "ps"
            ? "پښتو"
            : locale === "ku"
              ? "کوردی"
              : locale === "pt"
                ? "Português"
                : locale === "fa"
                  ? "Persian"
                  : "English";
    const flag =
      locale === "ar"
        ? "https://primexcapital.s3.eu-north-1.amazonaws.com/website/flags/ar-flag.svg"
        : locale === "es"
          ? "https://primexcapital.s3.eu-north-1.amazonaws.com/website/flags/expanol.png"
          : locale === "ps"
            ? "https://primexcapital.s3.eu-north-1.amazonaws.com/website/flags/afghanistan.png"
            : locale === "ku"
              ? "https://primexcapital.s3.eu-north-1.amazonaws.com/website/flags/Khurdish.webp"
              : locale === "pt"
                ? "https://primexcapital.s3.eu-north-1.amazonaws.com/website/flags/portugal.png"
                : locale === "fa"
                  ? "https://primexcapital.s3.eu-north-1.amazonaws.com/website/flags/iran.png"
                  : "https://primexcapital.s3.eu-north-1.amazonaws.com/website/flags/en-flag.svg";
    const initialLanguage = { text, flag };
    setLanguage(initialLanguage);
    localStorage.setItem("language", JSON.stringify(initialLanguage));
  }, [locale]);

  const handleRegisterClick = () => {
    const url = getRegisterUrl(locale);
    router.push(url);
  };

  const locations = [
    {
      name: "SCA UAE",
      code: "uae",
      flag: "https://primexcapital.s3.eu-north-1.amazonaws.com/website/flags/united-arab-emirates.png",
    },
    {
      name: "FSC Mauritius",
      code: "mu",
      flag: "https://primexcapital.s3.eu-north-1.amazonaws.com/website/flags/mauritius.png",
    },
    {
      name: "St. Lucia",
      code: "lc",
      flag: "https://primexcapital.s3.eu-north-1.amazonaws.com/website/flags/lucia.png",
    },
  ];

  useEffect(() => {
    const saved = localStorage.getItem("selectedLocation");
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        if (parsed?.name && parsed?.flag) setSelectedLocation(parsed);
      } catch {}
    } else {
      localStorage.setItem(
        "selectedLocation",
        JSON.stringify(selectedLocation),
      );
    }
  }, []);

  const handleLocationPick = (loc) => {
    setSelectedLocation(loc);
    localStorage.setItem("selectedLocation", JSON.stringify(loc));
    closeDropdown();
  };

  return (
    <header
      className={`w-full z-50 transition-all duration-300 hidden xl:block ${
        isSticky ? "fixed top-0 left-0" : "absolute top-0 left-0"
      }`}
    >
      <div
        className="fixed top-0 left-0 h-[4px] bg-pcp dark:bg-pcp-dark z-50"
        style={{ width: `${scrollProgress}%` }}
      ></div>
      <div className="container bg-cc dark:bg-cc-dark mt-[14px] h-[55px] rounded-[8px] flex items-center justify-between">
        <div className="flex items-center">
          <LocaleLink href="/" className="logo">
            <Image
              unoptimized={true}
              width="120"
              height="120"
              src={
                !mounted
                  ? "https://primexcapital.s3.eu-north-1.amazonaws.com/website/primex-logos/logo-white.webp"
                  : resolvedTheme === "dark"
                    ? "https://primexcapital.s3.eu-north-1.amazonaws.com/website/primex-logos/logo-white.webp"
                    : "https://primexcapital.s3.eu-north-1.amazonaws.com/website/primex-logos/logo-black.webp"
              }
              alt="Logo Image"
            />
          </LocaleLink>
        </div>
        <nav className="flex items-center h-full">
          <ul
            className={`flex h-full ${
              locale === "ar" ||
              locale === "ku" ||
              locale === "ps" ||
              locale === "fa"
                ? "gap-4"
                : locale === "pt"
                  ? "gap-0"
                  : "gap-3"
            }`}
          >
            {/* <li className="flex items-center h-full">
              <LocaleLink href="/" className="text-tm dark:text-tm-dark text-[.8em]">
                {t("home")}
              </LocaleLink>
            </li> */}
            <li
              className="relative flex items-center h-full"
              onMouseEnter={() => openDropdown(0)}
              onMouseLeave={closeDropdown}
            >
              <button className="text-tm dark:text-tm-dark text-[.8em] flex items-center">
                {t("trading")}
                <svg
                  className={`fill-current h-4 w-4 ${
                    locale === "ar" ||
                    locale === "ps" ||
                    locale === "ku" ||
                    locale === "fa"
                      ? "mr-1"
                      : "ml-1"
                  }`}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                </svg>
              </button>
              {activeDropdown === 0 && (
                <ul className="absolute top-full mt-[4px] bg-cc dark:bg-cc-dark shadow-lg p-[10px] min-w-[200px] rounded-[6px]">
                  <li>
                    <ul>
                      <li
                        onMouseEnter={() => setActiveSubDropdown("platforms")}
                        // onMouseLeave={() => setActiveSubDropdown(null)}
                      >
                        <div className="flex items-center justify-between cursor-pointer p-[8px] text-tm dark:text-tm-dark hover:text-nb dark:hover:text-nb-dark text-[.8em] hover:bg-pcp dark:hover:bg-pcp-dark rounded-[6px]">
                          {t("platforms")}
                          <svg
                            className={`fill-current h-4 w-4 ${
                              locale === "ar" ||
                              locale === "ps" ||
                              locale === "ku"
                                ? "mr-1"
                                : "ml-1"
                            }`}
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            style={
                              locale === "ar" ||
                              locale === "ps" ||
                              locale === "ku"
                                ? {}
                                : { transform: "scaleX(-1)" }
                            }
                          >
                            <path d="M7.05 4.293L8.464 5.707 4.222 10l4.242 4.293-1.414 1.414L1.394 10 7.05 4.293z" />
                          </svg>
                        </div>

                        {activeSubDropdown === "platforms" && (
                          <ul
                            onMouseEnter={() =>
                              setActiveSubDropdown("platforms")
                            }
                            onMouseLeave={() => setActiveSubDropdown(null)}
                            className="absolute top-0 start-full ms-2 bg-cc dark:bg-cc-dark shadow-lg p-[10px] min-w-[180px] rounded-[6px] z-50"
                          >
                            <li>
                              <LocaleLink
                                href="/app"
                                onClick={() => {
                                  closeDropdown();
                                  setActiveSubDropdown(null);
                                }}
                                className="block p-[8px] text-tm dark:text-tm-dark hover:text-nb dark:hover:text-nb-dark text-[.8em] hover:bg-pcp dark:hover:bg-pcp-dark rounded-[6px]"
                              >
                                {t("primex-app")}
                              </LocaleLink>
                            </li>
                            <li>
                              <LocaleLink
                                href="/platform/mt5-platform"
                                onClick={() => {
                                  closeDropdown();
                                  setActiveSubDropdown(null);
                                }}
                                className="block p-[8px] text-tm dark:text-tm-dark hover:text-nb dark:hover:text-nb-dark text-[.8em] hover:bg-pcp dark:hover:bg-pcp-dark rounded-[6px]"
                              >
                                {t("platform")}
                              </LocaleLink>
                            </li>
                          </ul>
                        )}
                      </li>
                      <li
                        onMouseEnter={() => setActiveSubDropdown("market")}
                        // onMouseLeave={() => setActiveSubDropdown(null)}
                      >
                        <div className="cursor-pointer flex items-center justify-between p-[8px] text-tm dark:text-tm-dark hover:text-nb dark:hover:text-nb-dark text-[.8em] hover:bg-pcp dark:hover:bg-pcp-dark rounded-[6px]">
                          {t("market")}
                          <svg
                            className={`fill-current h-4 w-4 ${
                              locale === "ar" ||
                              locale === "ps" ||
                              locale === "ku"
                                ? "mr-1"
                                : "ml-1"
                            }`}
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            style={
                              locale === "ar" ||
                              locale === "ps" ||
                              locale === "ku"
                                ? {}
                                : { transform: "scaleX(-1)" }
                            }
                          >
                            <path d="M7.05 4.293L8.464 5.707 4.222 10l4.242 4.293-1.414 1.414L1.394 10 7.05 4.293z" />
                          </svg>
                        </div>
                        {activeSubDropdown === "market" && (
                          <ul
                            onMouseEnter={() => setActiveSubDropdown("market")}
                            onMouseLeave={() => setActiveSubDropdown(null)}
                            className="absolute top-0 start-full ms-2 bg-cc dark:bg-cc-dark shadow-lg p-[10px] min-w-[180px] rounded-[6px] z-50"
                          >
                            <li>
                              <LocaleLink
                                href="/forex"
                                onClick={() => {
                                  closeDropdown();
                                  setActiveSubDropdown(null);
                                }}
                                className="block p-[8px] text-tm dark:text-tm-dark hover:text-nb dark:hover:text-nb-dark text-[.8em] hover:bg-pcp dark:hover:bg-pcp-dark rounded-[6px]"
                              >
                                {t("forex")}
                              </LocaleLink>
                            </li>
                            <li>
                              <LocaleLink
                                href="/metals"
                                onClick={() => {
                                  closeDropdown();
                                  setActiveSubDropdown(null);
                                }}
                                className="block p-[8px] text-tm dark:text-tm-dark hover:text-nb dark:hover:text-nb-dark text-[.8em] hover:bg-pcp dark:hover:bg-pcp-dark rounded-[6px]"
                              >
                                {t("metals")}
                              </LocaleLink>
                            </li>
                            <li>
                              <LocaleLink
                                href="/indices"
                                onClick={() => {
                                  closeDropdown();
                                  setActiveSubDropdown(null);
                                }}
                                className="block p-[8px] text-tm dark:text-tm-dark hover:text-nb dark:hover:text-nb-dark text-[.8em] hover:bg-pcp dark:hover:bg-pcp-dark rounded-[6px]"
                              >
                                {t("indices")}
                              </LocaleLink>
                            </li>
                            <li>
                              <LocaleLink
                                href="/commodities"
                                onClick={() => {
                                  closeDropdown();
                                  setActiveSubDropdown(null);
                                }}
                                className="block p-[8px] text-tm dark:text-tm-dark hover:text-nb dark:hover:text-nb-dark text-[.8em] hover:bg-pcp dark:hover:bg-pcp-dark rounded-[6px]"
                              >
                                {t("commodities")}
                              </LocaleLink>
                            </li>
                            <li>
                              <LocaleLink
                                href="/stocks"
                                onClick={() => {
                                  closeDropdown();
                                  setActiveSubDropdown(null);
                                }}
                                className="block p-[8px] text-tm dark:text-tm-dark hover:text-nb dark:hover:text-nb-dark text-[.8em] hover:bg-pcp dark:hover:bg-pcp-dark rounded-[6px]"
                              >
                                {t("stocks")}
                              </LocaleLink>
                            </li>
                            <li>
                              <LocaleLink
                                href="/crypto"
                                onClick={() => {
                                  closeDropdown();
                                  setActiveSubDropdown(null);
                                }}
                                className="block p-[8px] text-tm dark:text-tm-dark hover:text-nb dark:hover:text-nb-dark text-[.8em] hover:bg-pcp dark:hover:bg-pcp-dark rounded-[6px]"
                              >
                                {t("crypto")}
                              </LocaleLink>
                            </li>
                          </ul>
                        )}
                      </li>
                    </ul>
                  </li>
                </ul>
              )}
            </li>

            <li
              className="relative flex items-center h-full"
              onMouseEnter={() => openDropdown(7)}
              onMouseLeave={closeDropdown}
            >
              <button className="text-tm dark:text-tm-dark text-[.8em] flex items-center">
                {t("accounts")}
                <svg
                  className={`fill-current h-4 w-4 ${
                    locale === "ar" ||
                    locale === "ps" ||
                    locale === "ku" ||
                    locale === "fa"
                      ? "mr-1"
                      : "ml-1"
                  }`}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                </svg>
              </button>
              {activeDropdown === 7 && (
                <ul
                  className={`absolute top-full mt-[4px] bg-cc dark:bg-cc-dark shadow-lg p-[10px] min-w-[250px] ${
                    locale === "ar" ||
                    locale === "ps" ||
                    locale === "ku" ||
                    locale === "fa"
                      ? "min-w-[180px]"
                      : "min-w-[180px]"
                  } rounded-[6px]`}
                >
                  <li>
                    <LocaleLink
                      href="/account-types"
                      onClick={closeDropdown}
                      className="block px-4 py-2 text-tm dark:text-tm-dark hover:text-nb dark:hover:text-nb-dark text-[.8em] hover:bg-pcp dark:hover:bg-pcp-dark rounded-[6px]"
                    >
                      {t("account_types")}
                    </LocaleLink>
                  </li>
                  <li>
                    <LocaleLink
                      href="/hammurabi-account"
                      onClick={closeDropdown}
                      className="block px-4 py-2 text-tm dark:text-tm-dark hover:text-nb dark:hover:text-nb-dark text-[.8em] hover:bg-pcp dark:hover:bg-pcp-dark rounded-[6px]"
                    >
                      {t("hammurabi_account")}
                    </LocaleLink>
                  </li>
                  <li>
                    <LocaleLink
                      href="/primex-spreads"
                      onClick={closeDropdown}
                      className="block px-4 py-2 text-tm dark:text-tm-dark hover:text-nb dark:hover:text-nb-dark text-[.8em] hover:bg-pcp dark:hover:bg-pcp-dark rounded-[6px]"
                    >
                      {foo("company.title_part1_link7")}
                    </LocaleLink>
                  </li>
                </ul>
              )}
            </li>
            <li
              className="relative flex items-center h-full"
              onMouseEnter={() => openDropdown(8)}
              onMouseLeave={closeDropdown}
            >
              <Image
                unoptimized={true}
                width="18"
                height="18"
                src="https://primexcapital.s3.eu-north-1.amazonaws.com/website/homepage/Hot.webp"
                alt="Hot Image"
                className={`absolute top-1 ${
                  locale === "ar" ||
                  locale === "ps" ||
                  locale === "ku" ||
                  locale === "fa"
                    ? "-left-0"
                    : "-right-0"
                }`}
              />
              <button className="text-tm dark:text-tm-dark text-[.8em] flex items-center">
                {t("offers")}
                <svg
                  className={`fill-current h-4 w-4 ${
                    locale === "ar" ||
                    locale === "ps" ||
                    locale === "ku" ||
                    locale === "fa"
                      ? "mr-1"
                      : "ml-1"
                  }`}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                </svg>
              </button>
              {activeDropdown === 8 && (
                <ul
                  className={`absolute top-full mt-[4px] bg-cc dark:bg-cc-dark shadow-lg p-[10px] ${
                    locale === "ar" ||
                    locale === "ps" ||
                    locale === "ku" ||
                    locale === "fa"
                      ? "min-w-[180px]"
                      : "min-w-[180px]"
                  } rounded-[6px]`}
                >
                  <li>
                    <LocaleLink
                      href="/ramadan-contest"
                      onClick={closeDropdown}
                      className="block px-4 py-2 text-tm dark:text-tm-dark hover:text-nb dark:hover:text-nb-dark text-[.8em] hover:bg-pcp dark:hover:bg-pcp-dark rounded-[6px]"
                    >
                      {t("ramadan-contest")}
                    </LocaleLink>
                  </li>
                  <li>
                    <LocaleLink
                      href="/bonus"
                      onClick={closeDropdown}
                      className="block px-4 py-2 text-tm dark:text-tm-dark hover:text-nb dark:hover:text-nb-dark text-[.8em] hover:bg-pcp dark:hover:bg-pcp-dark rounded-[6px]"
                    >
                      {t("bonus")}
                    </LocaleLink>
                  </li>
                  {/* <li>
                    <LocaleLink
                      href="/trade-gold"
                      onClick={closeDropdown}
                      className="block px-4 py-2 text-tm dark:text-tm-dark hover:text-nb dark:hover:text-nb-dark text-[.8em] hover:bg-pcp dark:hover:bg-pcp-dark rounded-[6px]"
                    >
                      {t("contest")}
                    </LocaleLink>
                  </li> */}
                  <li>
                    <LocaleLink
                      href="/investment-fund"
                      onClick={closeDropdown}
                      className="block px-4 py-2 text-tm dark:text-tm-dark hover:text-nb dark:hover:text-nb-dark text-[.8em] hover:bg-pcp dark:hover:bg-pcp-dark rounded-[6px]"
                    >
                      {t("investment")}
                    </LocaleLink>
                  </li>
                  <li>
                    <LocaleLink
                      href="/local-depositor"
                      onClick={closeDropdown}
                      className="block px-4 py-2 text-tm dark:text-tm-dark hover:text-nb dark:hover:text-nb-dark text-[.8em] hover:bg-pcp dark:hover:bg-pcp-dark rounded-[6px]"
                    >
                      {t("local_depositor")}
                    </LocaleLink>
                  </li>
                </ul>
              )}
            </li>
            {/* <li className="flex items-center h-full relative">
              <LocaleLink
                href="/ramadan-contest"
                className="text-tm dark:text-tm-dark text-[.8em]"
              >
                {t("ramadan-contest")}
              </LocaleLink>
              <Image
                unoptimized={true}
                width="18"
                height="18"
                src="https://primexcapital.s3.eu-north-1.amazonaws.com/website/homepage/Hot.webp"
                alt="Hot Image"
                className={`absolute top-1 ${
                  locale === "ar" || locale === "ps" || locale === "ku" || locale === "fa"
                    ? "-left-0"
                    : "-right-0"
                }`}
              />
            </li> */}
            <li
              className="relative flex items-center h-full"
              onMouseEnter={() => openDropdown(2)}
              onMouseLeave={closeDropdown}
            >
              <button className="text-tm dark:text-tm-dark text-[.8em] flex items-center">
                {t("partners")}
                <svg
                  className={`fill-current h-4 w-4 ${
                    locale === "ar" ||
                    locale === "ps" ||
                    locale === "ku" ||
                    locale === "fa"
                      ? "mr-1"
                      : "ml-1"
                  }`}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                </svg>
              </button>
              {activeDropdown === 2 && (
                <ul
                  className={`absolute top-full mt-[4px] bg-cc dark:bg-cc-dark shadow-lg p-[10px] ${
                    locale === "ar" ||
                    locale === "ps" ||
                    locale === "ku" ||
                    locale === "fa"
                      ? "min-w-[250px]"
                      : "min-w-[250px]"
                  } rounded-[6px]`}
                >
                  <li>
                    <LocaleLink
                      href="/ib-program"
                      onClick={closeDropdown}
                      className="block px-4 py-2 text-tm dark:text-tm-dark hover:text-nb dark:hover:text-nb-dark text-[.8em] hover:bg-pcp dark:hover:bg-pcp-dark rounded-[6px]"
                    >
                      {t("ib_program")}
                    </LocaleLink>
                  </li>
                  <li>
                    <LocaleLink
                      href="/regional-partner"
                      onClick={closeDropdown}
                      className="block px-4 py-2 text-tm dark:text-tm-dark hover:text-nb dark:hover:text-nb-dark text-[.8em] hover:bg-pcp dark:hover:bg-pcp-dark rounded-[6px]"
                    >
                      {t("regional")}
                    </LocaleLink>
                  </li>
                  <li>
                    <LocaleLink
                      href="/social-trading"
                      onClick={closeDropdown}
                      className="block px-4 py-2 text-tm dark:text-tm-dark hover:text-nb dark:hover:text-nb-dark text-[.8em] hover:bg-pcp dark:hover:bg-pcp-dark rounded-[6px]"
                    >
                      {t("social_trading")}
                    </LocaleLink>
                  </li>
                  {/* <li>
                    <LocaleLink
                      href="/grey-label-partner"
                      onClick={closeDropdown}
                      className="block px-4 py-2 text-tm dark:text-tm-dark hover:text-nb dark:hover:text-nb-dark text-[.8em] hover:bg-pcp dark:hover:bg-pcp-dark rounded-[6px]"
                    >
                      {t("grey_label")}
                    </LocaleLink>
                  </li> */}
                  {/* <li>
                    <LocaleLink
                      href="/liquidity-providing"
                      onClick={closeDropdown}
                      className="block px-4 py-2 text-tm dark:text-tm-dark hover:text-nb dark:hover:text-nb-dark text-[.8em] hover:bg-pcp dark:hover:bg-pcp-dark rounded-[6px]"
                    >
                      {t("liquidity")}
                    </LocaleLink>
                  </li> */}
                </ul>
              )}
            </li>
            {/* <li className="flex items-center h-full">
              <LocaleLink
                href="/academy"
                className="text-tm dark:text-tm-dark text-[.8em]"
              >
                {t("academy")}
              </LocaleLink>
            </li> */}
            <li
              className="relative flex items-center h-full"
              onMouseEnter={() => openDropdown(4)}
              onMouseLeave={closeDropdown}
            >
              <button className="text-tm dark:text-tm-dark text-[.8em] flex items-center relative">
                {t("knowledge-hub")}
                <svg
                  className={`fill-current h-4 w-4 ${
                    locale === "ar" ||
                    locale === "ps" ||
                    locale === "ku" ||
                    locale === "fa"
                      ? "mr-1"
                      : "ml-1"
                  }`}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                </svg>
              </button>
              {/* <Image
                unoptimized={true}
                width="18"
                height="18"
                src="https://primexcapital.s3.eu-north-1.amazonaws.com/website/homepage/Hot.webp"
                alt="Hot Image"
                className={`absolute top-1 ${
                  locale === "ar" || locale === "ps" || locale === "ku" || locale === "fa"
                    ? "left-[16px]"
                    : "right-[16px]"
                }`}
              /> */}
              {activeDropdown === 4 && (
                <ul className="absolute top-full mt-[4px] bg-cc dark:bg-cc-dark shadow-lg p-[10px] min-w-[250px] rounded-[6px]">
                  {/* {(locale === "en" || locale === "ar" || locale === "ku") && ( */}
                  <>
                    <li>
                      <LocaleLink
                        href="/technical-analysis"
                        onClick={closeDropdown}
                        className="block px-4 py-2 text-tm dark:text-tm-dark hover:text-nb dark:hover:text-nb-dark text-[.8em] hover:bg-pcp dark:hover:bg-pcp-dark rounded-[6px]"
                      >
                        {t("technical-analysis")}
                      </LocaleLink>
                    </li>
                    <li>
                      <LocaleLink
                        href="/market-news"
                        onClick={closeDropdown}
                        className="block px-4 py-2 text-tm dark:text-tm-dark hover:text-nb dark:hover:text-nb-dark text-[.8em] hover:bg-pcp dark:hover:bg-pcp-dark rounded-[6px]"
                      >
                        {t("market-news")}
                      </LocaleLink>
                    </li>
                  </>
                  {/* )} */}
                  <li>
                    <LocaleLink
                      href="/webinars"
                      onClick={closeDropdown}
                      className="block px-4 py-2 text-tm dark:text-tm-dark hover:text-nb dark:hover:text-nb-dark text-[.8em] hover:bg-pcp dark:hover:bg-pcp-dark rounded-[6px]"
                    >
                      {t("webinars")}
                    </LocaleLink>
                  </li>
                  <li>
                    <LocaleLink
                      href="/economic-calender"
                      onClick={closeDropdown}
                      className="block px-4 py-2 text-tm dark:text-tm-dark hover:text-nb dark:hover:text-nb-dark text-[.8em] hover:bg-pcp dark:hover:bg-pcp-dark rounded-[6px]"
                    >
                      {t("economic-calendar")}
                    </LocaleLink>
                  </li>
                  {/* {(locale === "en" || locale === "ar" || locale === "ku") && ( */}
                  <li>
                    <LocaleLink
                      href="/blogs"
                      onClick={closeDropdown}
                      className="block px-4 py-2 text-tm dark:text-tm-dark hover:text-nb dark:hover:text-nb-dark text-[.8em] hover:bg-pcp dark:hover:bg-pcp-dark rounded-[6px]"
                    >
                      {t("blog")}
                    </LocaleLink>
                  </li>
                  {/* )} */}
                  <li>
                    <LocaleLink
                      href="/ecn-broker"
                      onClick={closeDropdown}
                      className="block px-4 py-2 text-tm dark:text-tm-dark hover:text-nb dark:hover:text-nb-dark text-[.8em] hover:bg-pcp dark:hover:bg-pcp-dark rounded-[6px]"
                    >
                      {t("ecn_broker")}
                    </LocaleLink>
                  </li>
                  <li>
                    <LocaleLink
                      href="/forex-in-three-steps"
                      onClick={closeDropdown}
                      className="block px-4 py-2 text-tm dark:text-tm-dark hover:text-nb dark:hover:text-nb-dark text-[.8em] hover:bg-pcp dark:hover:bg-pcp-dark rounded-[6px]"
                    >
                      {t("courses")}
                    </LocaleLink>
                  </li>
                </ul>
              )}
            </li>
            <li
              className="relative flex items-center h-full"
              onMouseEnter={() => openDropdown(6)}
              onMouseLeave={closeDropdown}
            >
              <button className="text-tm dark:text-tm-dark text-[.8em] flex items-center">
                {t("company")}
                <svg
                  className={`fill-current h-4 w-4 ${
                    locale === "ar" ||
                    locale === "ps" ||
                    locale === "ku" ||
                    locale === "fa"
                      ? "mr-1"
                      : "ml-1"
                  }`}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                </svg>
              </button>
              {activeDropdown === 6 && (
                <ul
                  className={`absolute top-full mt-[4px] bg-cc dark:bg-cc-dark shadow-lg p-[10px] ${
                    locale === "ar" ||
                    locale === "ps" ||
                    locale === "ku" ||
                    locale === "fa"
                      ? "min-w-[180px]"
                      : "min-w-[180px]"
                  } rounded-[6px]`}
                >
                  <li>
                    <LocaleLink
                      href="/why-choose-us"
                      onClick={closeDropdown}
                      className="block px-4 py-2 text-tm dark:text-tm-dark hover:text-nb dark:hover:text-nb-dark text-[.8em] hover:bg-pcp dark:hover:bg-pcp-dark rounded-[6px]"
                    >
                      {t("choose_us")}
                    </LocaleLink>
                  </li>
                  <li>
                    <LocaleLink
                      href="/about"
                      onClick={closeDropdown}
                      className="block px-4 py-2 text-tm dark:text-tm-dark hover:text-nb dark:hover:text-nb-dark text-[.8em] hover:bg-pcp dark:hover:bg-pcp-dark rounded-[6px]"
                    >
                      {t("about")}
                    </LocaleLink>
                  </li>
                  <li>
                    <LocaleLink
                      href="/awards"
                      onClick={closeDropdown}
                      className="block px-4 py-2 text-tm dark:text-tm-dark hover:text-nb dark:hover:text-nb-dark text-[.8em] hover:bg-pcp dark:hover:bg-pcp-dark rounded-[6px]"
                    >
                      {t("awards")}
                    </LocaleLink>
                  </li>
                  <li>
                    <LocaleLink
                      href="/contact"
                      onClick={closeDropdown}
                      className="block px-4 py-2 text-tm dark:text-tm-dark hover:text-nb dark:hover:text-nb-dark text-[.8em] hover:bg-pcp dark:hover:bg-pcp-dark rounded-[6px]"
                    >
                      {t("contact")}
                    </LocaleLink>
                  </li>
                  <li>
                    <LocaleLink
                      href="/regulation-and-compliance"
                      onClick={closeDropdown}
                      className="block px-4 py-2 text-tm dark:text-tm-dark hover:text-nb dark:hover:text-nb-dark text-[.8em] hover:bg-pcp dark:hover:bg-pcp-dark rounded-[6px]"
                    >
                      {t("regulations")}
                    </LocaleLink>
                  </li>
                  {/* <li>
                    <LocaleLink
                      href="/press-release/66544954f5b226a0bd9b5813/665448dcf5b226a0bd9b574e"
                      onClick={closeDropdown}
                      className="block px-4 py-2 text-tm dark:text-tm-dark hover:text-nb dark:hover:text-nb-dark text-[.8em] hover:bg-pcp dark:hover:bg-pcp-dark rounded-[6px]"
                    >
                      {t("press_release")}
                    </LocaleLink>
                  </li> */}
                  {/* {locale === "en" && (
                    <li>
                      <LocaleLink
                        href="/careers"
                        onClick={closeDropdown}
                        className="block px-4 py-2 text-tm dark:text-tm-dark hover:text-nb dark:hover:text-nb-dark text-[.8em] hover:bg-pcp dark:hover:bg-pcp-dark rounded-[6px]"
                      >
                        {t("careers")}
                      </LocaleLink>
                    </li>
                  )} */}
                </ul>
              )}
            </li>
          </ul>
        </nav>
        <div className="flex gap-2">
          <button
            onClick={() => window.open(getLoginUrl(locale))}
            className={`group ${
              locale === "ar" ||
              locale === "ps" ||
              locale === "ku" ||
              locale === "fa"
                ? "w-[140px]"
                : "w-[120px]"
            }   py-[6px] rounded-lg font-bold flex items-center justify-center bg-pcp dark:bg-pcp-dark text-nb dark:text-nb-dark`}
          >
            {t("login")}
          </button>
          <button
            onClick={handleRegisterClick}
            className={`group ${
              locale === "ar" ||
              locale === "ps" ||
              locale === "ku" ||
              locale === "fa"
                ? "w-[140px]"
                : "w-[120px]"
            }   py-[6px] rounded-lg font-bold flex items-center justify-center bg-pcp dark:bg-pcp-dark text-nb dark:text-nb-dark`}
          >
            {t("register")}
          </button>
        </div>
        <div>
          <ul className="flex gap-[16px] h-full">
            <li
              className="relative flex items-center h-full"
              onMouseEnter={() => openDropdown(5)}
              onMouseLeave={closeDropdown}
            >
              <button className="text-tm dark:text-tm-dark text-[.8em] flex items-center">
                <Image
                  unoptimized={true}
                  width="15"
                  height="15"
                  src={language.flag}
                  alt={`${language.text} flag`}
                />
                <span
                  className={`${
                    locale === "ar" ||
                    locale === "ps" ||
                    locale === "ku" ||
                    locale === "fa"
                      ? "mr-[5px]"
                      : "ml-[5px]"
                  }`}
                >
                  {language.text}
                </span>
                <svg
                  className={`fill-current h-4 w-4 ${
                    locale === "ar" ||
                    locale === "ps" ||
                    locale === "ku" ||
                    locale === "fa"
                      ? "mr-1"
                      : "ml-1"
                  }`}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                </svg>
              </button>
              {activeDropdown === 5 && (
                <ul className="absolute top-full mt-[20px] bg-cc dark:bg-cc-dark shadow-lg p-[10px] min-w-[150px] rounded-[6px]">
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
                          "https://primexcapital.s3.eu-north-1.amazonaws.com/website/flags/en-flag.svg",
                        )
                      }
                      className="px-4 py-2 text-tm dark:text-tm-dark text-[.8em] hover:text-nb dark:hover:text-nb-dark hover:bg-pcp dark:hover:bg-pcp-dark rounded-[6px] flex items-center"
                      dir="ltr"
                    >
                      <Image
                        unoptimized={true}
                        width="15"
                        height="15"
                        src="https://primexcapital.s3.eu-north-1.amazonaws.com/website/flags/en-flag.svg"
                        alt="English Flag"
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
                          "https://primexcapital.s3.eu-north-1.amazonaws.com/website/flags/ar-flag.svg",
                        )
                      }
                      className="px-4 py-2 text-tm dark:text-tm-dark hover:text-nb dark:hover:text-nb-dark text-[.8em] hover:bg-pcp dark:hover:bg-pcp-dark rounded-[6px] flex items-center"
                      dir="ltr"
                    >
                      <Image
                        unoptimized={true}
                        width="15"
                        height="15"
                        src="https://primexcapital.s3.eu-north-1.amazonaws.com/website/flags/ar-flag.svg"
                        alt="Arabic Flag"
                      />
                      <span className="ml-[5px]">عربي</span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      href={
                        currentLocale === "ku"
                          ? `/${currentLocale}/${restOfPath}`
                          : `/ku/${restOfPath}`
                      }
                      onClick={() =>
                        handleClick(
                          "Kurdish",
                          "https://primexcapital.s3.eu-north-1.amazonaws.com/website/flags/Khurdish.webp",
                        )
                      }
                      className="px-4 py-2 text-tm dark:text-tm-dark hover:text-nb dark:hover:text-nb-dark text-[.8em] hover:bg-pcp dark:hover:bg-pcp-dark rounded-[6px] flex items-center"
                      dir="ltr"
                    >
                      <Image
                        unoptimized={true}
                        width="18"
                        height="18"
                        src="https://primexcapital.s3.eu-north-1.amazonaws.com/website/flags/Khurdish.webp"
                        alt="Kurdish Flag"
                      />
                      <span className="ml-[5px]">کوردی</span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      href={
                        currentLocale === "es"
                          ? `/${currentLocale}/${restOfPath}`
                          : `/es/${restOfPath}`
                      }
                      onClick={() =>
                        handleClick(
                          "Español",
                          "https://primexcapital.s3.eu-north-1.amazonaws.com/website/flags/expanol.png",
                        )
                      }
                      className="px-4 py-2 text-tm dark:text-tm-dark hover:text-nb dark:hover:text-nb-dark text-[.8em] hover:bg-pcp dark:hover:bg-pcp-dark rounded-[6px] flex items-center"
                      dir="ltr"
                    >
                      <Image
                        unoptimized={true}
                        width="15"
                        height="15"
                        src="https://primexcapital.s3.eu-north-1.amazonaws.com/website/flags/expanol.png"
                        alt="Chinese Flag"
                      />
                      <span className="ml-[5px]">Español</span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      href={
                        currentLocale === "ps"
                          ? `/${currentLocale}/${restOfPath}`
                          : `/ps/${restOfPath}`
                      }
                      onClick={() =>
                        handleClick(
                          "پښتو",
                          "https://primexcapital.s3.eu-north-1.amazonaws.com/website/flags/afghanistan.png",
                        )
                      }
                      className="px-4 py-2 text-tm dark:text-tm-dark hover:text-nb dark:hover:text-nb-dark text-[.8em] hover:bg-pcp dark:hover:bg-pcp-dark rounded-[6px] flex items-center"
                      dir="ltr"
                    >
                      <Image
                        unoptimized={true}
                        width="15"
                        height="15"
                        src="https://primexcapital.s3.eu-north-1.amazonaws.com/website/flags/afghanistan.png"
                        alt="Farsi Flag"
                      />
                      <span className="ml-[5px]">پښتو</span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      href={
                        currentLocale === "pt"
                          ? `/${currentLocale}/${restOfPath}`
                          : `/pt/${restOfPath}`
                      }
                      onClick={() =>
                        handleClick(
                          "Português",
                          "https://primexcapital.s3.eu-north-1.amazonaws.com/website/flags/portugal.png",
                        )
                      }
                      className="px-4 py-2 text-tm dark:text-tm-dark hover:text-nb dark:hover:text-nb-dark text-[.8em] hover:bg-pcp dark:hover:bg-pcp-dark rounded-[6px] flex items-center"
                      dir="ltr"
                    >
                      <Image
                        unoptimized={true}
                        width="15"
                        height="15"
                        src="https://primexcapital.s3.eu-north-1.amazonaws.com/website/flags/portugal.png"
                        alt="Português Flag"
                      />
                      <span className="ml-[5px]">Português</span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      href={
                        currentLocale === "fa"
                          ? `/${currentLocale}/${restOfPath}`
                          : `/fa/${restOfPath}`
                      }
                      onClick={() =>
                        handleClick(
                          "Persian",
                          "https://primexcapital.s3.eu-north-1.amazonaws.com/website/flags/iran.png",
                        )
                      }
                      className="px-4 py-2 text-tm dark:text-tm-dark hover:text-nb dark:hover:text-nb-dark text-[.8em] hover:bg-pcp dark:hover:bg-pcp-dark rounded-[6px] flex items-center"
                      dir="ltr"
                    >
                      <Image
                        unoptimized={true}
                        width="15"
                        height="15"
                        src="https://primexcapital.s3.eu-north-1.amazonaws.com/website/flags/iran.png"
                        alt="Persian Flag"
                      />
                      <span className="ml-[5px]">Persian</span>
                    </Link>
                  </li>
                </ul>
              )}
            </li>
          </ul>
        </div>
        <div>
          <ul className="flex gap-[16px] h-full">
            <li
              className="relative flex items-center h-full"
              onMouseEnter={() => openDropdown(9)}
              onMouseLeave={closeDropdown}
            >
              <button className="text-tm dark:text-tm-dark text-[.8em] flex items-center">
                <Image
                  unoptimized={true}
                  width="15"
                  height="15"
                  src={selectedLocation.flag}
                  alt={`${selectedLocation.name} flag`}
                />
                <span
                  className={`${
                    locale === "ar" ||
                    locale === "ps" ||
                    locale === "ku" ||
                    locale === "fa"
                      ? "mr-[5px]"
                      : "ml-[5px]"
                  }`}
                >
                  {selectedLocation.name}
                </span>
                <svg
                  className={`fill-current h-4 w-4 ${
                    locale === "ar" ||
                    locale === "ps" ||
                    locale === "ku" ||
                    locale === "fa"
                      ? "mr-1"
                      : "ml-1"
                  }`}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                </svg>
              </button>
              {activeDropdown === 9 && (
                <ul
                  className="absolute top-full mt-[20px] bg-cc dark:bg-cc-dark shadow-lg p-[10px] min-w-[170px] rounded-[6px] z-50"
                  dir="ltr"
                >
                  {locations.map((loc) => (
                    <li key={loc.code}>
                      <button
                        onClick={() => handleLocationPick(loc)}
                        className="w-full text-left px-4 py-2 text-tm dark:text-tm-dark text-[.8em] hover:text-nb dark:hover:text-nb-dark hover:bg-pcp dark:hover:bg-pcp-dark rounded-[6px] flex items-center"
                      >
                        <Image
                          unoptimized={true}
                          width="15"
                          height="15"
                          src={loc.flag}
                          alt={`${loc.name} flag`}
                        />
                        <span className="ml-[8px]">{loc.name}</span>
                      </button>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default DesktopHeader;
