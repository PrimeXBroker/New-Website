"use client";
import Link from "next/link";
import React, { useState, useEffect, useCallback, useRef } from "react";
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
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const t = useTranslations("menu");
  const nav = useTranslations("navMenu");
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [openSubMenu, setOpenSubMenu] = useState(null);
  const [platformsOpen, setPlatformsOpen] = useState(false);
  const [marketOpen, setMarketOpen] = useState(false);
  const [subGroupOpen, setSubGroupOpen] = useState(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isSticky, setIsSticky] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const pathname = usePathname();
  const pathnameWithoutLocale = pathname.replace(`/${locale}`, "");
  const [language, setLanguage] = useState({
    text:
      locale === "ar"
        ? "عربي"
        : // : locale === "es"
          //   ? "Español"
          //   : locale === "ps"
          //     ? "پښتو"
          locale === "ku"
          ? "کوردی"
          : // : locale === "pt"
            //   ? "Português"
            //   : locale === "fa"
            //     ? "Persian"
            "English",
    flag:
      locale === "ar"
        ? "https://primexcapital.s3.eu-north-1.amazonaws.com/website/flags/ar-flag.svg"
        : // : locale === "es"
          //   ? "https://primexcapital.s3.eu-north-1.amazonaws.com/website/flags/expanol.png"
          //   : locale === "ps"
          //     ? "https://primexcapital.s3.eu-north-1.amazonaws.com/website/flags/afghanistan.png"
          locale === "ku"
          ? "https://primexcapital.s3.eu-north-1.amazonaws.com/website/flags/Khurdish.webp"
          : // : locale === "pt"
            //   ? "https://primexcapital.s3.eu-north-1.amazonaws.com/website/flags/portugal.png"
            //   : locale === "fa"
            //     ? "https://primexcapital.s3.eu-north-1.amazonaws.com/website/flags/iran.png"
            "https://primexcapital.s3.eu-north-1.amazonaws.com/website/flags/en-flag.svg",
  });
  const [selectedLocation, setSelectedLocation] = useState({
    name: "CMA UAE",
    code: "uae",
    flag: "https://primexcapital.s3.eu-north-1.amazonaws.com/website/flags/united-arab-emirates.png",
  });

  const dropdownTimeout = useRef(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  const openDropdown = useCallback((index) => {
    clearTimeout(dropdownTimeout.current);
    setActiveDropdown(index);
  }, []);

  const closeDropdown = useCallback(() => {
    dropdownTimeout.current = setTimeout(() => {
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

  const toggleSubGroup = (key) => {
    setSubGroupOpen(subGroupOpen === key ? null : key);
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
    setActiveDropdown(null);
  };

  useEffect(() => {
    const text =
      locale === "ar"
        ? "عربي"
        : // : locale === "es"
          //   ? "Español"
          //   : locale === "ps"
          //     ? "پښتو"
          locale === "ku"
          ? "کوردی"
          : // : locale === "pt"
            //   ? "Português"
            //   : locale === "fa"
            //     ? "Persian"
            "English";
    const flag =
      locale === "ar"
        ? "https://primexcapital.s3.eu-north-1.amazonaws.com/website/flags/ar-flag.svg"
        : // : locale === "es"
          //   ? "https://primexcapital.s3.eu-north-1.amazonaws.com/website/flags/expanol.png"
          //   : locale === "ps"
          //     ? "https://primexcapital.s3.eu-north-1.amazonaws.com/website/flags/afghanistan.png"
          locale === "ku"
          ? "https://primexcapital.s3.eu-north-1.amazonaws.com/website/flags/Khurdish.webp"
          : // : locale === "pt"
            //   ? "https://primexcapital.s3.eu-north-1.amazonaws.com/website/flags/portugal.png"
            //   : locale === "fa"
            //     ? "https://primexcapital.s3.eu-north-1.amazonaws.com/website/flags/iran.png"
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

  const locations = [
    {
      name: "CMA UAE",
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
    setActiveDropdown(null);
    setIsOpen(false);
  };

  return (
    <header className="container w-full z-50 transition-all duration-300 block xl:hidden fixed top-0 left-0">
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
        <div className="flex gap-5">
          <div>
            <ul className=" h-full">
              <li
                className="relative flex items-center h-full"
                onMouseEnter={() => openDropdown(1)}
                onMouseLeave={closeDropdown}
              >
                <button
                  onClick={() => openDropdown(1)}
                  className="text-tm dark:text-tm-dark text-[.8em] flex items-center"
                >
                  <Image
                    unoptimized={true}
                    width="15"
                    height="15"
                    src={language.flag}
                    alt={`${language.text} Flag`}
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
                    {/* <li>
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
                    </li> */}
                    {/* <li>
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
                    </li> */}
                    {/* <li>
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
                    </li> */}
                    {/* <li>
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
        className={`fixed top-0 right-0 h-full w-full bg-p dark:bg-p-dark text-tm dark:text-tm-dark z-40 transition-transform duration-300 ${
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
                !mounted
                  ? "https://primexcapital.s3.eu-north-1.amazonaws.com/website/primex-logos/logo-white.webp"
                  : resolvedTheme === "dark"
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
                  <button
                    onClick={() => openDropdown(1)}
                    className="text-tm dark:text-tm-dark text-[.8em] flex items-center"
                  >
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
                      {/* <li>
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
                      </li> */}
                      {/* <li>
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
                      </li> */}
                      {/* <li>
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
                      </li> */}
                      {/* <li>
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
        <div className="flex items-center justify-between gap-3 mt-6 mb-4 ps-[6%] pe-[5%]">
          <button
            onClick={() => window.open(getLoginUrl(locale))}
            className="w-full mb-2 py-3 rounded-md font-bold flex items-center justify-center bg-pcp dark:bg-pcp-dark text-nb dark:text-nb-dark"
          >
            {t("login")}
          </button>
          <button
            onClick={handleRegisterClick}
            className="w-full mb-2 py-3 rounded-md font-bold flex items-center justify-center bg-pcp dark:bg-pcp-dark text-nb dark:text-nb-dark"
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
              {nav("trading")}
              {openSubMenu === 0 ? (
                <FaChevronUp size={16} />
              ) : (
                <FaChevronDown size={16} />
              )}
            </button>
            {openSubMenu === 0 && (
              <ul className="pl-4 mt-2">
                <li>
                  <LocaleLink
                    href="/account-types"
                    onClick={toggleDrawer}
                    className="block text-tm dark:text-tm-dark text-base pt-[10px]"
                  >
                    {nav("accountTypes")}
                  </LocaleLink>
                </li>
                <li className="mt-2">
                  <button
                    onClick={togglePlatforms}
                    className="text-tm dark:text-tm-dark text-base flex justify-between items-center w-full pt-[3px]"
                  >
                    {nav("tradingPlatforms")}
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
                          href="/platform/mt5-platform"
                          onClick={toggleDrawer}
                          className="block text-tm dark:text-tm-dark text-base pt-[10px]"
                        >
                          {nav("metaTrader5")}
                        </LocaleLink>
                      </li>
                      <li>
                        <LocaleLink
                          href="/app"
                          onClick={toggleDrawer}
                          className="block text-tm dark:text-tm-dark text-base pt-[16px]"
                        >
                          {nav("primexMobileApp")}
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
                    {nav("markets")}
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
                          href="/fx-cfds"
                          onClick={toggleDrawer}
                          className="block text-tm dark:text-tm-dark text-base pt-[10px]"
                        >
                          {nav("fxCfds")}
                        </LocaleLink>
                      </li>
                      <li>
                        <LocaleLink
                          href="/metals"
                          onClick={toggleDrawer}
                          className="block text-tm dark:text-tm-dark text-base pt-[16px]"
                        >
                          {nav("metals")}
                        </LocaleLink>
                      </li>
                      <li>
                        <LocaleLink
                          href="/indices"
                          onClick={toggleDrawer}
                          className="block text-tm dark:text-tm-dark text-base pt-[16px]"
                        >
                          {nav("indices")}
                        </LocaleLink>
                      </li>
                      <li>
                        <LocaleLink
                          href="/commodities"
                          onClick={toggleDrawer}
                          className="block text-tm dark:text-tm-dark text-base pt-[16px]"
                        >
                          {nav("commodities")}
                        </LocaleLink>
                      </li>
                      <li>
                        <LocaleLink
                          href="/stocks"
                          onClick={toggleDrawer}
                          className="block text-tm dark:text-tm-dark text-base pt-[16px]"
                        >
                          {nav("stocks")}
                        </LocaleLink>
                      </li>
                      {/* <li>
                        <LocaleLink
                          href="/crypto"
                          onClick={toggleDrawer}
                          className="block text-tm dark:text-tm-dark text-base pt-[16px]"
                        >
                          {t("crypto")}
                        </LocaleLink>
                      </li> */}
                    </ul>
                  )}
                </li>
                <li>
                  <LocaleLink
                    href="/primex-spreads"
                    onClick={toggleDrawer}
                    className="block text-tm dark:text-tm-dark text-base pt-[16px]"
                  >
                    {nav("primexSpread")}
                  </LocaleLink>
                </li>
                <li>
                  <LocaleLink
                    href="/local-depositor"
                    onClick={toggleDrawer}
                    className="block text-tm dark:text-tm-dark text-base pt-[16px]"
                  >
                    {nav("localDeposit")}
                  </LocaleLink>
                </li>
              </ul>
            )}
          </div>
          <div>
            <button
              onClick={() => toggleSubMenu(1)}
              className="text-tm dark:text-tm-dark text-base relative flex justify-between items-center w-full pt-[3px]"
            >
              {nav("offersAndInvestment")}
              {openSubMenu === 1 ? (
                <FaChevronUp size={16} />
              ) : (
                <FaChevronDown size={16} />
              )}
            </button>
            {openSubMenu === 1 && (
              <ul className="pl-4 mt-2">
                <li>
                  <button
                    onClick={() => toggleSubGroup("promotions")}
                    className="text-tm dark:text-tm-dark text-base flex justify-between items-center w-full pt-[3px]"
                  >
                    {nav("promotionsAndRewards")}
                    {subGroupOpen === "promotions" ? (
                      <FaChevronUp size={16} />
                    ) : (
                      <FaChevronDown size={16} />
                    )}
                  </button>
                  {subGroupOpen === "promotions" && (
                    <ul className="pl-4">
                      <li>
                        <LocaleLink
                          href="/demo-account-competition"
                          onClick={toggleDrawer}
                          className="block text-tm dark:text-tm-dark text-base pt-[10px]"
                        >
                          <span className="flex items-center gap-2">
                            {nav("demoAccountContest")}
                            <Image
                              unoptimized={true}
                              width="20"
                              height="20"
                              src="https://primexcapital.s3.eu-north-1.amazonaws.com/website/homepage/Hot.webp"
                              alt="Hot"
                              className="h-4 w-auto object-contain"
                            />
                          </span>
                        </LocaleLink>
                      </li>
                      <li>
                        <LocaleLink
                          href="/bonus"
                          onClick={toggleDrawer}
                          className="block text-tm dark:text-tm-dark text-base pt-[16px]"
                        >
                          {nav("thirtyPercentDepositBonus")}
                        </LocaleLink>
                      </li>
                      <li>
                        <LocaleLink
                          href="/cashback"
                          onClick={toggleDrawer}
                          className="block text-tm dark:text-tm-dark text-base pt-[16px]"
                        >
                          {nav("cashbackProgram")}
                        </LocaleLink>
                      </li>
                    </ul>
                  )}
                </li>
                <li className="mt-2">
                  <button
                    onClick={() => toggleSubGroup("managed")}
                    className="text-tm dark:text-tm-dark text-base flex justify-between items-center w-full pt-[3px]"
                  >
                    {nav("managedAccounts")}
                    {subGroupOpen === "managed" ? (
                      <FaChevronUp size={16} />
                    ) : (
                      <FaChevronDown size={16} />
                    )}
                  </button>
                  {subGroupOpen === "managed" && (
                    <ul className="pl-4">
                      <li>
                        <LocaleLink
                          href="/investment-fund"
                          onClick={toggleDrawer}
                          className="block text-tm dark:text-tm-dark text-base pt-[10px]"
                        >
                          {nav("primexInvestmentFund")}
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
              onClick={() => toggleSubMenu(2)}
              className="text-tm dark:text-tm-dark text-base flex justify-between items-center w-full pt-[3px]"
            >
              {nav("partners")}
              {openSubMenu === 2 ? (
                <FaChevronUp size={16} />
              ) : (
                <FaChevronDown size={16} />
              )}
            </button>
            {openSubMenu === 2 && (
              <div className="mt-2">
                <LocaleLink
                  href="/ib-program"
                  className="block text-tm dark:text-tm-dark text-base pt-[16px]"
                  onClick={toggleDrawer}
                >
                  {nav("introducingBroker")}
                </LocaleLink>
                <LocaleLink
                  href="/regional-partner"
                  className="block text-tm dark:text-tm-dark text-base pt-[16px]"
                  onClick={toggleDrawer}
                >
                  {nav("regionalPartnerProgram")}
                </LocaleLink>
              </div>
            )}
          </div>
          <div className="relative">
            <button
              onClick={() => toggleSubMenu(3)}
              className="text-tm dark:text-tm-dark text-base flex justify-between items-center w-full pt-[3px]"
            >
              {nav("researchAndEducation")}
              {openSubMenu === 3 ? (
                <FaChevronUp size={16} />
              ) : (
                <FaChevronDown size={16} />
              )}
            </button>
            {openSubMenu === 3 && (
              <ul className="pl-4 mt-2">
                <li>
                  <button
                    onClick={() => toggleSubGroup("insights")}
                    className="text-tm dark:text-tm-dark text-base flex justify-between items-center w-full pt-[3px]"
                  >
                    {nav("marketInsights")}
                    {subGroupOpen === "insights" ? (
                      <FaChevronUp size={16} />
                    ) : (
                      <FaChevronDown size={16} />
                    )}
                  </button>
                  {subGroupOpen === "insights" && (
                    <ul className="pl-4">
                      <li>
                        <LocaleLink
                          href="/technical-analysis"
                          onClick={toggleDrawer}
                          className="block text-tm dark:text-tm-dark text-base pt-[10px]"
                        >
                          {nav("dailyAnalysis")}
                        </LocaleLink>
                      </li>
                      <li>
                        <LocaleLink
                          href="/economic-calendar"
                          onClick={toggleDrawer}
                          className="block text-tm dark:text-tm-dark text-base pt-[16px]"
                        >
                          {nav("economicCalendar")}
                        </LocaleLink>
                      </li>
                      <li>
                        <LocaleLink
                          href="/market-news"
                          onClick={toggleDrawer}
                          className="block text-tm dark:text-tm-dark text-base pt-[16px]"
                        >
                          {nav("marketNews")}
                        </LocaleLink>
                      </li>
                      <li>
                        <LocaleLink
                          href="/blogs"
                          onClick={toggleDrawer}
                          className="block text-tm dark:text-tm-dark text-base pt-[16px]"
                        >
                          {nav("blog")}
                        </LocaleLink>
                      </li>
                    </ul>
                  )}
                </li>
                <li className="mt-2">
                  <button
                    onClick={() => toggleSubGroup("academy")}
                    className="text-tm dark:text-tm-dark text-base flex justify-between items-center w-full pt-[3px]"
                  >
                    {nav("traderAcademy")}
                    {subGroupOpen === "academy" ? (
                      <FaChevronUp size={16} />
                    ) : (
                      <FaChevronDown size={16} />
                    )}
                  </button>
                  {subGroupOpen === "academy" && (
                    <ul className="pl-4">
                      <li>
                        <LocaleLink
                          href="/forex-in-three-steps"
                          onClick={toggleDrawer}
                          className="block text-tm dark:text-tm-dark text-base pt-[10px]"
                        >
                          {nav("educationalCourses")}
                        </LocaleLink>
                      </li>
                      <li>
                        <LocaleLink
                          href="/webinars"
                          onClick={toggleDrawer}
                          className="block text-tm dark:text-tm-dark text-base pt-[16px]"
                        >
                          {nav("webinars")}
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
              onClick={() => toggleSubMenu(4)}
              className="text-tm dark:text-tm-dark text-base flex justify-between items-center w-full pt-[3px]"
            >
              {nav("aboutUs")}
              {openSubMenu === 4 ? (
                <FaChevronUp size={16} />
              ) : (
                <FaChevronDown size={16} />
              )}
            </button>
            {openSubMenu === 4 && (
              <div className="mt-2">
                <LocaleLink
                  href="/about"
                  className="block text-tm dark:text-tm-dark text-base pt-[16px]"
                  onClick={toggleDrawer}
                >
                  {nav("aboutUs")}
                </LocaleLink>
                <LocaleLink
                  href="/why-choose-us"
                  className="block text-tm dark:text-tm-dark text-base pt-[16px]"
                  onClick={toggleDrawer}
                >
                  {nav("whyPrimexCapital")}
                </LocaleLink>
                <LocaleLink
                  href="/regulation-and-compliance"
                  className="block text-tm dark:text-tm-dark text-base pt-[16px]"
                  onClick={toggleDrawer}
                >
                  {nav("regulationsAndLicensing")}
                </LocaleLink>
                <LocaleLink
                  href="/awards"
                  className="block text-tm dark:text-tm-dark text-base pt-[16px]"
                  onClick={toggleDrawer}
                >
                  {nav("awardsAndRecognition")}
                </LocaleLink>
                <LocaleLink
                  href="/contact"
                  className="block text-tm dark:text-tm-dark text-base pt-[16px]"
                  onClick={toggleDrawer}
                >
                  {nav("contactUs")}
                </LocaleLink>
              </div>
            )}
          </div>
        </nav>
        <div className="relative w-full pt-4 ps-[6%] pe-[5%]" dir="ltr">
          <div className="w-full rounded-xl overflow-hidden bg-cc dark:bg-cc-dark border border-e1 dark:border-e1-dark">
            <button
              onClick={() =>
                setActiveDropdown(activeDropdown === 10 ? null : 10)
              }
              className="w-full flex items-center justify-between p-4"
            >
              <span className="flex items-center gap-2">
                <Image
                  unoptimized
                  width="18"
                  height="18"
                  src={selectedLocation.flag}
                  alt={`${selectedLocation.name} flag`}
                  className="rounded-full"
                />
                <span className="text-base text-tm dark:text-tm-dark">
                  {selectedLocation.name}
                </span>
              </span>
              {activeDropdown === 10 ? (
                <div className="w-5 h-5 bg-tm dark:bg-tm-dark rounded-full flex items-center self-center justify-center">
                  <FaChevronUp className="text-nw dark:text-nb text-xs" />
                </div>
              ) : (
                <div className="w-5 h-5 bg-tm dark:bg-tm-dark rounded-full flex items-center self-center justify-center">
                  <FaChevronDown className="text-nw dark:text-nb text-xs" />
                </div>
              )}
            </button>
            {activeDropdown === 10 && (
              <div className="px-4 pb-4">
                <ul className="w-full bg-e1 dark:bg-e1-dark border border-e2 dark:border-e2-dark p-2 rounded-lg">
                  {locations.map((loc, index) => {
                    const isActive = loc.code === selectedLocation.code;
                    return (
                      <li key={index} className="mb-1 last:mb-0">
                        <button
                          onClick={() => handleLocationPick(loc)}
                          className={`w-full flex items-center justify-between p-4 rounded-md text-base
                            ${
                              isActive
                                ? "bg-e2 dark:bg-e2-dark border border-tl dark:border-tl-dark"
                                : "hover:bg-e2 dark:hover:bg-e2-dark hover:border hover:border-tl dark:hover:border-tl-dark"
                            }`}
                        >
                          <span className="flex items-center gap-2">
                            <Image
                              unoptimized
                              width="18"
                              height="18"
                              src={loc.flag}
                              alt={`${loc.name} flag`}
                            />
                            {loc.name}
                          </span>
                          {isActive && (
                            <div className="w-4 h-4 bg-tm dark:bg-tm-dark rounded-full flex items-center self-center justify-center">
                              <svg
                                viewBox="0 0 20 20"
                                width="14"
                                height="14"
                                className="fill-current text-nw dark:text-nb"
                                aria-hidden="true"
                              >
                                <path d="M7.629 14.314l-3.95-3.95 1.414-1.414 2.536 2.536 6.364-6.364 1.414 1.414z" />
                              </svg>
                            </div>
                          )}
                        </button>
                      </li>
                    );
                  })}
                </ul>
              </div>
            )}
          </div>
        </div>
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
