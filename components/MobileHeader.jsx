"use client";
import Link from "next/link";
import React, { useState, useEffect, useCallback } from "react";
import LocaleLink from "./LocaleLink";
import { useTranslations } from "next-intl";
import Logo from "@/public/images/logos/logo-white.webp";
import Image from "next/image";
import { FaBars, FaChevronDown, FaChevronUp } from "react-icons/fa";
import { usePathname, useRouter } from "next/navigation";
import { getRegisterUrl } from "@/utilities/getRegisterUrl";
import { getLoginUrl } from "@/utilities/getLoginUrl";
import { useTheme } from "next-themes";

const MobileHeader = ({ locale }) => {
  const { theme } = useTheme();
  const t = useTranslations("menu");
  const foo = useTranslations("footer");
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [openSubMenu, setOpenSubMenu] = useState(null);
  const [platformsOpen, setPlatformsOpen] = useState(false);
  const [marketOpen, setMarketOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isSticky, setIsSticky] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const pathname = usePathname();
  const pathnameWithoutLocale = pathname.replace(`/${locale}`, "");
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
        : // : locale === "tr"
          // ? "Türkçe"
          "English",
    flag:
      locale === "ar"
        ? "https://primexcapital.s3.eu-north-1.amazonaws.com/website/flags/ar-flag.svg"
        : locale === "es"
        ? "https://primexcapital.s3.eu-north-1.amazonaws.com/website/flags/expanol.png"
        : locale === "ps"
        ? "https://primexcapital.s3.eu-north-1.amazonaws.com/website/flags/afghanistan.png"
        : locale === "ku"
        ? "https://primexcapital.s3.eu-north-1.amazonaws.com/website/flags/Khurdish.webp"
        : // : locale === "tr"
          // ? "https://primexcapital.s3.eu-north-1.amazonaws.com/website/flags/turkey.webp"
          "https://primexcapital.s3.eu-north-1.amazonaws.com/website/flags/en-flag.svg",
  });

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

  const togglePlatforms = () => {
    setPlatformsOpen(!platformsOpen);
    if (marketOpen) setMarketOpen(false);
  };

  const toggleMarket = () => {
    setMarketOpen(!marketOpen);
    if (platformsOpen) setPlatformsOpen(false);
  };

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };

  const toggleSubMenu = (index) => {
    setOpenSubMenu(openSubMenu === index ? null : index);
  };

  const currentLocale = pathname.split("/")[1];
  const isLocaleOnly = pathname === `/${currentLocale}`;
  const restOfPath = isLocaleOnly ? "" : pathname.split("/").slice(2).join("/");

  const handleScroll = () => {
    if (window.scrollY > 400) {
      setIsSticky(true);
    } else {
      setIsSticky(false);
    }
    const scrollTop = window.scrollY;
    const docHeight =
      document.documentElement.scrollHeight - window.innerHeight;
    const progress = (scrollTop / docHeight) * 100;
    setScrollProgress(progress);
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
      locale === "ar"
        ? "عربي"
        : locale === "es"
        ? "Español"
        : locale === "ps"
        ? "پښتو"
        : locale === "ku"
        ? "کوردی"
        : // : locale === "tr"
          // ? "Türkçe"
          "English";
    const flag =
      locale === "ar"
        ? "https://primexcapital.s3.eu-north-1.amazonaws.com/website/flags/ar-flag.svg"
        : locale === "es"
        ? "https://primexcapital.s3.eu-north-1.amazonaws.com/website/flags/expanol.png"
        : locale === "ps"
        ? "https://primexcapital.s3.eu-north-1.amazonaws.com/website/flags/afghanistan.png"
        : locale === "ku"
        ? "https://primexcapital.s3.eu-north-1.amazonaws.com/website/flags/Khurdish.webp"
        : // : locale === "tr"
          // ? "https://primexcapital.s3.eu-north-1.amazonaws.com/website/flags/turkey.webp"
          "https://primexcapital.s3.eu-north-1.amazonaws.com/website/flags/en-flag.svg";
    const initialLanguage = { text, flag };
    setLanguage(initialLanguage);
    localStorage.setItem("language", JSON.stringify(initialLanguage));
  }, [locale]);

  const handleRegisterClick = () => {
    const url = getRegisterUrl(locale);
    router.push(url);
    setIsOpen(false);
  };

  return (
    <header className="container w-full z-50 transition-all duration-300 block lg:hidden fixed top-0 left-0">
      <div
        className="fixed top-0 left-0 h-[4px] bg-pcp dark:bg-pcp-dark z-50"
        style={{ width: `${scrollProgress}%` }}
      ></div>
      <div className="container bg-cc dark:bg-cc-dark mt-[14px] h-[51px] rounded-[8px] flex items-center justify-between px-4">
        <div className="flex items-center">
          <LocaleLink href="/" className="logo">
            <Image
              unoptimized={true}
              width="120"
              height="120"
              src={
                theme === "dark"
                  ? "https://primexcapital.s3.eu-north-1.amazonaws.com/website/primex-logos/logo-white.webp"
                  : "https://primexcapital.s3.eu-north-1.amazonaws.com/website/primex-logos/logo-black.webp"
              }
              alt="Logo Image"
            />
          </LocaleLink>
        </div>

        <div className="flex gap-5">
          <div>
            <ul className=" h-full">
              <li
                className="relative flex items-center h-full"
                onMouseEnter={() => openDropdown(1)}
                onMouseLeave={closeDropdown}
              >
                <button className="text-tm dark:text-tm-dark text-[.8em] flex items-center">
                  <Image
                    unoptimized={true}
                    width="15"
                    height="15"
                    src={language.flag}
                    alt={`${language.text} Flag`}
                  />
                  <span
                    className={`${
                      locale === "ar" || locale === "ps" || locale === "ku"
                        ? "mr-[5px]"
                        : "ml-[5px]"
                    }`}
                  >
                    {language.text}
                  </span>
                  <svg
                    className={`fill-current h-4 w-4 ${
                      locale === "ar" || locale === "ps" || locale === "ku"
                        ? "mr-1"
                        : "ml-1"
                    }`}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                  </svg>
                </button>
                {activeDropdown === 1 && (
                  <ul className="absolute top-full mt-[4px] bg-cc dark:bg-cc-dark shadow-lg p-[10px] min-w-[150px] rounded-[6px]">
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
                            "https://primexcapital.s3.eu-north-1.amazonaws.com/website/flags/ar-flag.svg"
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
                            "https://primexcapital.s3.eu-north-1.amazonaws.com/website/flags/Khurdish.webp"
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
                        <span
                          className={`${
                            locale === "ar" ||
                            locale === "ps" ||
                            locale === "ku"
                              ? "mr-[5px]"
                              : "ml-[5px]"
                          }`}
                        >
                          کوردی
                        </span>
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
                            "https://primexcapital.s3.eu-north-1.amazonaws.com/website/flags/expanol.png"
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
                            "https://primexcapital.s3.eu-north-1.amazonaws.com/website/flags/afghanistan.png"
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
                        <span
                          className={`${
                            locale === "ar" ||
                            locale === "ps" ||
                            locale === "ku"
                              ? "mr-[5px]"
                              : "ml-[5px]"
                          }`}
                        >
                          پښتو
                        </span>
                      </Link>
                    </li>
                    {/* <li>
                      <Link
                        href={
                          currentLocale === "tr"
                            ? `/${currentLocale}/${restOfPath}`
                            : `/tr/${restOfPath}`
                        }
                        onClick={() =>
                          handleClick(
                            "Türkçe",
                            "https://primexcapital.s3.eu-north-1.amazonaws.com/website/flags/turkey.webp"
                          )
                        }
                        className="px-4 py-2 text-tm dark:text-tm-dark hover:text-nb dark:hover:text-nb-dark text-[.8em] hover:bg-pcp dark:hover:bg-pcp-dark rounded-[6px] flex items-center"
                        dir="ltr"
                      >
                        <Image
                          unoptimized={true}
                          width="15"
                          height="15"
                          src="https://primexcapital.s3.eu-north-1.amazonaws.com/website/flags/turkey.webp"
                          alt="Turkish Flag"
                        />
                        <span className="ml-[5px]">Türkçe</span>
                      </Link>
                    </li> */}
                  </ul>
                )}
              </li>
            </ul>
          </div>
          <div
            className="w-[38px] h-[38px] rounded-[8px] flex justify-center items-center opacity-bg-40"
            onClick={toggleDrawer}
          >
            <FaBars size={20} className="text-tm dark:text-tm-dark" />
          </div>
        </div>
      </div>
      <div
        className={`fixed top-0 right-0 h-full w-full bg-cc dark:bg-cc-dark text-tm dark:text-tm-dark z-40 transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center py-7 ps-[6%] pe-[5%]">
          <LocaleLink href="/" className="logo" onClick={toggleDrawer}>
            <Image
              unoptimized={true}
              width="120"
              height="120"
              src={
                theme === "dark"
                  ? "https://primexcapital.s3.eu-north-1.amazonaws.com/website/primex-logos/logo-white.webp"
                  : "https://primexcapital.s3.eu-north-1.amazonaws.com/website/primex-logos/logo-black.webp"
              }
              alt="Logo Image"
            />
          </LocaleLink>
          <div className="flex gap-5">
            <div>
              <ul className=" h-full">
                <li
                  className="relative flex items-center h-full"
                  onMouseEnter={() => openDropdown(1)}
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
                        locale === "ar" || locale === "ps" || locale === "ku"
                          ? "mr-[5px]"
                          : "ml-[5px]"
                      }`}
                    >
                      {language.text}
                    </span>
                    <svg
                      className={`fill-current h-4 w-4 ${
                        locale === "ar" || locale === "ps" || locale === "ku"
                          ? "mr-1"
                          : "ml-1"
                      }`}
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                    </svg>
                  </button>
                  {activeDropdown === 1 && (
                    <ul className="absolute top-full mt-[4px] bg-cc dark:bg-cc-dark shadow-lg p-[10px] min-w-[150px] rounded-[6px]">
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
                              "https://primexcapital.s3.eu-north-1.amazonaws.com/website/flags/ar-flag.svg"
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
                              "https://primexcapital.s3.eu-north-1.amazonaws.com/website/flags/Khurdish.webp"
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
                          <span
                            className={`${
                              locale === "ar" ||
                              locale === "ps" ||
                              locale === "ku"
                                ? "mr-[5px]"
                                : "ml-[5px]"
                            }`}
                          >
                            کوردی
                          </span>
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
                              "https://primexcapital.s3.eu-north-1.amazonaws.com/website/flags/expanol.png"
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
                              "https://primexcapital.s3.eu-north-1.amazonaws.com/website/flags/afghanistan.png"
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
                          <span
                            className={`${
                              locale === "ar" ||
                              locale === "ps" ||
                              locale === "ku"
                                ? "mr-[5px]"
                                : "ml-[5px]"
                            }`}
                          >
                            پښتو
                          </span>
                        </Link>
                      </li>
                      {/* <li>
                        <Link
                          href={
                            currentLocale === "tr"
                              ? `/${currentLocale}/${restOfPath}`
                              : `/tr/${restOfPath}`
                          }
                          onClick={() =>
                            handleClick(
                              "Türkçe",
                              "https://primexcapital.s3.eu-north-1.amazonaws.com/website/flags/turkey.webp"
                            )
                          }
                          className="px-4 py-2 text-tm dark:text-tm-dark hover:text-nb dark:hover:text-nb-dark text-[.8em] hover:bg-pcp dark:hover:bg-pcp-dark rounded-[6px] flex items-center"
                          dir="ltr"
                        >
                          <Image
                            unoptimized={true}
                            width="15"
                            height="15"
                            src="https://primexcapital.s3.eu-north-1.amazonaws.com/website/flags/turkey.webp"
                            alt="Turkish Flag"
                          />
                          <span className="ml-[5px]">Türkçe</span>
                        </Link>
                      </li> */}
                    </ul>
                  )}
                </li>
              </ul>
            </div>
            <div className="w-[38px] h-[38px] rounded-[8px] flex justify-center items-center bg-[#ffffff] opacity-bg-40">
              <FaBars
                size={16}
                className="cursor-pointer text-[#111111]"
                onClick={toggleDrawer}
              />
            </div>
          </div>
        </div>
        <div className="flex items-center gap-4 mt-6 mb-4 ps-[6%] pe-[5%]">
          <button
            onClick={() => window.open(getLoginUrl(locale))}
            className="w-[30%] mb-2 py-3 rounded-lg font-bold flex items-center justify-center bg-pcp dark:bg-pcp-dark text-nb dark:text-nb-dark"
          >
            {t("login")}
          </button>
          <button
            onClick={handleRegisterClick}
            className="w-[30%] mb-2 py-3 rounded-lg font-bold flex items-center justify-center bg-pcp dark:bg-pcp-dark text-nb dark:text-nb-dark"
          >
            {t("register")}
          </button>
        </div>
        <nav className="flex flex-col space-y-4 py-4 ps-[6%] pe-[5%]">
          {/* <LocaleLink
            href="/"
            className="text-tm dark:text-tm-dark text-base"
            onClick={toggleDrawer}
          >
            {t("home")}
          </LocaleLink> */}
          <div>
            <button
              onClick={() => toggleSubMenu(0)}
              className="text-tm dark:text-tm-dark text-base flex justify-between items-center w-full pt-[3px]"
            >
              {t("trading")}
              {openSubMenu === 0 ? (
                <FaChevronUp size={16} />
              ) : (
                <FaChevronDown size={16} />
              )}
            </button>
            {openSubMenu === 0 && (
              <ul className="pl-4 mt-2">
                <li>
                  <button
                    onClick={togglePlatforms}
                    className="text-tm dark:text-tm-dark text-base flex justify-between items-center w-full pt-[3px]"
                  >
                    {t("platforms")}
                    {platformsOpen ? (
                      <FaChevronUp size={16} />
                    ) : (
                      <FaChevronDown size={16} />
                    )}
                  </button>
                  {platformsOpen && (
                    <ul className="pl-4">
                      <li>
                        <LocaleLink
                          href="/app"
                          onClick={toggleDrawer}
                          className="block text-tm dark:text-tm-dark text-base pt-[10px]"
                        >
                          {t("primex-app")}
                        </LocaleLink>
                      </li>
                      <li>
                        <LocaleLink
                          href="/platform/mt5-platform"
                          onClick={toggleDrawer}
                          className="block text-tm dark:text-tm-dark text-base pt-[16px]"
                        >
                          {t("platform")}
                        </LocaleLink>
                      </li>
                    </ul>
                  )}
                </li>

                <li className="mt-2">
                  <button
                    onClick={toggleMarket}
                    className="text-tm dark:text-tm-dark text-base flex justify-between items-center w-full pt-[3px]"
                  >
                    {t("market")}
                    {marketOpen ? (
                      <FaChevronUp size={16} />
                    ) : (
                      <FaChevronDown size={16} />
                    )}
                  </button>
                  {marketOpen && (
                    <ul className="pl-4 mt-2">
                      <li>
                        <LocaleLink
                          href="/forex"
                          onClick={toggleDrawer}
                          className="block text-tm dark:text-tm-dark text-base pt-[10px]"
                        >
                          {t("forex")}
                        </LocaleLink>
                      </li>
                      <li>
                        <LocaleLink
                          href="/metals"
                          onClick={toggleDrawer}
                          className="block text-tm dark:text-tm-dark text-base pt-[16px]"
                        >
                          {t("metals")}
                        </LocaleLink>
                      </li>
                      <li>
                        <LocaleLink
                          href="/indices"
                          onClick={toggleDrawer}
                          className="block text-tm dark:text-tm-dark text-base pt-[16px]"
                        >
                          {t("indices")}
                        </LocaleLink>
                      </li>
                      <li>
                        <LocaleLink
                          href="/commodities"
                          onClick={toggleDrawer}
                          className="block text-tm dark:text-tm-dark text-base pt-[16px]"
                        >
                          {t("commodities")}
                        </LocaleLink>
                      </li>
                      <li>
                        <LocaleLink
                          href="/stocks"
                          onClick={toggleDrawer}
                          className="block text-tm dark:text-tm-dark text-base pt-[16px]"
                        >
                          {t("stocks")}
                        </LocaleLink>
                      </li>
                      <li>
                        <LocaleLink
                          href="/crypto"
                          onClick={toggleDrawer}
                          className="block text-tm dark:text-tm-dark text-base pt-[16px]"
                        >
                          {t("crypto")}
                        </LocaleLink>
                      </li>
                    </ul>
                  )}
                </li>
              </ul>
            )}
          </div>
          <div>
            <button
              onClick={() => toggleSubMenu(7)}
              className="text-tm dark:text-tm-dark text-base flex justify-between items-center w-full pt-[3px]"
            >
              {t("accounts")}
              {openSubMenu === 7 ? (
                <FaChevronUp size={16} />
              ) : (
                <FaChevronDown size={16} />
              )}
            </button>
            {openSubMenu === 7 && (
              <div className="">
                <LocaleLink
                  href="/account-types"
                  className="block text-tm dark:text-tm-dark text-base pt-[16px]"
                  onClick={toggleDrawer}
                >
                  {t("account_types")}
                </LocaleLink>
                <LocaleLink
                  href="/primex-spreads"
                  className="block text-tm dark:text-tm-dark text-base pt-[16px]"
                  onClick={toggleDrawer}
                >
                  {foo("company.title_part1_link7")}
                </LocaleLink>
                <LocaleLink
                  href="/local-depositor"
                  className="block text-tm dark:text-tm-dark text-base pt-[16px]"
                  onClick={toggleDrawer}
                >
                  {t("local_depositor")}
                </LocaleLink>
              </div>
            )}
          </div>
          <LocaleLink
            href="/bonus"
            className="text-tm dark:text-tm-dark text-base relative pt-[3px]"
            onClick={toggleDrawer}
          >
            <Image
              unoptimized={true}
              width="20"
              height="20"
              src="https://primexcapital.s3.eu-north-1.amazonaws.com/website/homepage/Hot.webp"
              alt="Hot Image"
              className={`absolute ${
                locale === "ar" || locale === "ps" || locale === "ku"
                  ? "right-[41px]"
                  : "left-[59px]"
              }`}
            />
            {t("bonus")}
          </LocaleLink>
          {/* <LocaleLink
            href="/ramadan-contest"
            className="text-tm dark:text-tm-dark text-base relative"
            onClick={toggleDrawer}
          >
            <Image
              unoptimized={true}
              width="20"
              height="20"
              src="https://primexcapital.s3.eu-north-1.amazonaws.com/website/homepage/Hot.webp"
              alt="Hot Image"
              className={`absolute top-[-15px] ${
                locale === "ar" || locale === "ps" || locale === "ku"
                  ? "right-[60px]"
                  : "left-[124px]"
              }`}
            />
            {t("ramadan-contest")}
          </LocaleLink> */}
          <div>
            <button
              onClick={() => toggleSubMenu(3)}
              className="text-tm dark:text-tm-dark text-base flex justify-between items-center w-full pt-[3px]"
            >
              {t("partners")}
              {openSubMenu === 3 ? (
                <FaChevronUp size={16} />
              ) : (
                <FaChevronDown size={16} />
              )}
            </button>
            {openSubMenu === 3 && (
              <div className="mt-2">
                <LocaleLink
                  href="/social-trading"
                  className="block text-tm dark:text-tm-dark text-base pt-[16px]"
                  onClick={toggleDrawer}
                >
                  {t("social_trading")}
                </LocaleLink>
                <LocaleLink
                  href="/ib-program"
                  className="block text-tm dark:text-tm-dark text-base pt-[16px]"
                  onClick={toggleDrawer}
                >
                  {t("ib_program")}
                </LocaleLink>
                <LocaleLink
                  href="/regional-partner"
                  className="block text-tm dark:text-tm-dark text-base pt-[16px]"
                  onClick={toggleDrawer}
                >
                  {t("regional")}
                </LocaleLink>
                {/* <LocaleLink
                  href="/grey-label-partner"
                  className="block text-tm dark:text-tm-dark text-base pt-[16px]"
                  onClick={toggleDrawer}
                >
                  {t("grey_label")}
                </LocaleLink> */}
                {/* <LocaleLink
                  href="/liquidity-providing"
                  className="block text-tm dark:text-tm-dark text-base pt-[16px]"
                  onClick={toggleDrawer}
                >
                  {t("liquidity")}
                </LocaleLink> */}
              </div>
            )}
          </div>
          {/* <LocaleLink
            href="/academy"
            className="text-tm dark:text-tm-dark text-base"
            onClick={toggleDrawer}
          >
            {t("academy")}
          </LocaleLink> */}
          <div className="relative">
            <button
              onClick={() => toggleSubMenu(5)}
              className="text-tm dark:text-tm-dark text-base flex justify-between items-center w-full pt-[3px]"
            >
              {t("knowledge-hub")}
              {openSubMenu === 5 ? (
                <FaChevronUp size={16} />
              ) : (
                <FaChevronDown size={16} />
              )}
            </button>
            {/* <Image
              unoptimized={true}
              width="20"
              height="20"
              src="https://primexcapital.s3.eu-north-1.amazonaws.com/website/homepage/Hot.webp"
              alt="Hot Image"
              className={`absolute top-[-15px] ${
                locale === "ar" || locale === "ps" || locale === "ku"
                  ? "right-[60px]"
                  : "left-[59px]"
              }`}
            /> */}
            {openSubMenu === 5 && (
              <div className="mt-2">
                {(locale === "en" || locale === "ar" || locale === "ku") && (
                  <>
                    <LocaleLink
                      href="/technical-analysis"
                      className="block text-tm dark:text-tm-dark text-base pt-[16px]"
                      onClick={toggleDrawer}
                    >
                      {t("technical-analysis")}
                    </LocaleLink>
                    <LocaleLink
                      href="/market-news"
                      className="block text-tm dark:text-tm-dark text-base pt-[16px]"
                      onClick={toggleDrawer}
                    >
                      {t("market-news")}
                    </LocaleLink>
                  </>
                )}
                <LocaleLink
                  href="/webinars"
                  className="block text-tm dark:text-tm-dark text-base pt-[16px]"
                  onClick={toggleDrawer}
                >
                  {t("webinars")}
                </LocaleLink>
                <LocaleLink
                  href="/economic-calender"
                  className="block text-tm dark:text-tm-dark text-base pt-[16px]"
                  onClick={toggleDrawer}
                >
                  {t("economic-calendar")}
                </LocaleLink>
                {(locale === "en" || locale === "ar" || locale === "ku") && (
                  <LocaleLink
                    href="/blogs"
                    className="block text-tm dark:text-tm-dark text-base pt-[16px]"
                    onClick={toggleDrawer}
                  >
                    {t("blog")}
                  </LocaleLink>
                )}
              </div>
            )}
          </div>
          {/* <div>
            <button
              onClick={() => toggleSubMenu(6)}
              className="text-tm dark:text-tm-dark text-base flex justify-between items-center w-full pt-[3px]"
            >
              {buttonText}
              {openSubMenu === 6 ? (
                <FaChevronUp size={16} />
              ) : (
                <FaChevronDown size={16} />
              )}
            </button>
            {openSubMenu === 6 && (
              <div className="mt-2">
                <Link
                  href={
                    currentLocale === "en"
                      ? `/${currentLocale}/${restOfPath}`
                      : `/en/${restOfPath}`
                  }
                  onClick={() => {
                    handleClick("English");
                    toggleDrawer();
                  }}
                  className="block text-tm dark:text-tm-dark text-base pt-[16px]"
                >
                  English
                </Link>
                <Link
                  href={
                    currentLocale === "ar"
                      ? `/${currentLocale}/${restOfPath}`
                      : `/ar/${restOfPath}`
                  }
                  onClick={() => {
                    handleClick("عربي");
                    toggleDrawer();
                  }}
                  className="block text-tm dark:text-tm-dark text-base pt-[16px]"
                >
                  عربي
                </Link>
                <Link
                  href={
                    currentLocale === "es"
                      ? `/${currentLocale}/${restOfPath}`
                      : `/es/${restOfPath}`
                  }
                  onClick={() => {
                    handleClick("Español");
                    toggleDrawer();
                  }}
                  className="block text-tm dark:text-tm-dark text-base pt-[16px]"
                >
                  Español
                </Link>
              </div>
            )}
          </div> */}
          <div>
            <button
              onClick={() => toggleSubMenu(6)}
              className="text-tm dark:text-tm-dark text-base flex justify-between items-center w-full pt-[3px]"
            >
              {t("company")}
              {openSubMenu === 6 ? (
                <FaChevronUp size={16} />
              ) : (
                <FaChevronDown size={16} />
              )}
            </button>
            {openSubMenu === 6 && (
              <div className="">
                <LocaleLink
                  href="/why-choose-us"
                  className="block text-tm dark:text-tm-dark text-base pt-[16px]"
                  onClick={toggleDrawer}
                >
                  {t("choose_us")}
                </LocaleLink>
                <LocaleLink
                  href="/about"
                  className="block text-tm dark:text-tm-dark text-base pt-[16px]"
                  onClick={toggleDrawer}
                >
                  {t("about")}
                </LocaleLink>
                <LocaleLink
                  href="/awards"
                  className="block text-tm dark:text-tm-dark text-base pt-[16px]"
                  onClick={toggleDrawer}
                >
                  {t("awards")}
                </LocaleLink>
                <LocaleLink
                  href="/contact"
                  className="block text-tm dark:text-tm-dark text-base pt-[16px]"
                  onClick={toggleDrawer}
                >
                  {t("contact")}
                </LocaleLink>
                {/* <LocaleLink
                  href="/press-release/66544954f5b226a0bd9b5813/665448dcf5b226a0bd9b574e"
                  className="block text-tm dark:text-tm-dark text-base pt-[16px]"
                  onClick={toggleDrawer}
                >
                  {t("press_release")}
                </LocaleLink> */}
                {locale === "en" && (
                  <LocaleLink
                    href="/careers"
                    className="block text-tm dark:text-tm-dark text-base pt-[16px]"
                    onClick={toggleDrawer}
                  >
                    {t("careers")}
                  </LocaleLink>
                )}
              </div>
            )}
          </div>
        </nav>
      </div>
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-30"
          onClick={toggleDrawer}
        ></div>
      )}
    </header>
  );
};

export default MobileHeader;
