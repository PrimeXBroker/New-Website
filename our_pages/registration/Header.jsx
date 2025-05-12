"use client";
import React, { useState, useCallback, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { usePathname, useRouter } from "next/navigation";
import { useTheme } from "next-themes";

const Header = ({ locale, step }) => {
  const { theme } = useTheme();
  const t = useTranslations("menu");
  const [activeDropdown, setActiveDropdown] = useState(null);
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
  }, [locale]);

  return (
    <header>
      <div className="flex items-center justify-between mt-5 sm:mt-9">
        <div
          className={`flex items-center ${
            step === 5 ? "bg-cp dark:bg-cp-dark p-2 rounded" : ""
          }`}
        >
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
            className="w-[88px] sm:w-[138px]"
          />
        </div>
        <div className="flex gap-6">
          <div>
            <ul
              className={`flex gap-[16px] h-10 rounded-lg px-3 ${
                step === 5
                  ? "sm:bg-cp sm:dark:bg-cp-dark sm:border sm:border-ce1 sm:dark:border-ce1-dark"
                  : "sm:bg-ce1 sm:dark:bg-ce1-dark sm:border sm:border-ce2 sm:dark:border-ce2-dark"
              }`}
            >
              <li
                className="relative flex items-center h-full"
                onMouseEnter={() => openDropdown(5)}
                onMouseLeave={closeDropdown}
              >
                <button className="text-ctm dark:text-ctm-dark text-xs sm:text-sm font-medium flex items-center">
                  <Image
                    unoptimized={true}
                    width="15"
                    height="15"
                    src={language.flag}
                    alt={`${language.text} flag`}
                  />
                  <span className={`ms-[5px]`}>{language.text}</span>
                  <svg
                    className={`fill-current h-4 w-4 ms-1`}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                  </svg>
                </button>
                {activeDropdown === 5 && (
                  <ul className="absolute right-0 top-full mt-2 sm:mt-[20px] p-[10px] min-w-[129px] sm:min-w-[150px] rounded-lg bg-ce1 dark:bg-ce1-dark border border-ce2 dark:border-ce2-dark z-10">
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
                        className="px-4 py-2 text-ctm dark:text-ctm-dark hover:text-cnb dark:hover:text-cnb-dark text-xs sm:text-sm font-medium hover:bg-cpc dark:hover:bg-cpc-dark rounded-md flex items-center"
                        dir="ltr"
                      >
                        <Image
                          unoptimized={true}
                          width="15"
                          height="15"
                          src="https://primexcapital.s3.eu-north-1.amazonaws.com/website/flags/en-flag.svg"
                          alt="English Flag"
                        />
                        <span className="ms-[5px]">English</span>
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
                        className="px-4 py-2 text-ctm dark:text-ctm-dark hover:text-cnb dark:hover:text-cnb-dark text-xs sm:text-sm font-medium hover:bg-cpc dark:hover:bg-cpc-dark rounded-md flex items-center"
                        dir="ltr"
                      >
                        <Image
                          unoptimized={true}
                          width="15"
                          height="15"
                          src="https://primexcapital.s3.eu-north-1.amazonaws.com/website/flags/ar-flag.svg"
                          alt="Arabic Flag"
                        />
                        <span className="ms-[5px]">عربي</span>
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
                        className="px-4 py-2 text-ctm dark:text-ctm-dark hover:text-cnb dark:hover:text-cnb-dark text-xs sm:text-sm font-medium hover:bg-cpc dark:hover:bg-cpc-dark rounded-md flex items-center"
                        dir="ltr"
                      >
                        <Image
                          unoptimized={true}
                          width="18"
                          height="18"
                          src="https://primexcapital.s3.eu-north-1.amazonaws.com/website/flags/Khurdish.webp"
                          alt="Kurdish Flag"
                        />
                        <span className="ms-[5px]">کوردی</span>
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
                        className="px-4 py-2 text-ctm dark:text-ctm-dark hover:text-cnb dark:hover:text-cnb-dark text-xs sm:text-sm font-medium hover:bg-cpc dark:hover:bg-cpc-dark rounded-md flex items-center"
                        dir="ltr"
                      >
                        <Image
                          unoptimized={true}
                          width="15"
                          height="15"
                          src="https://primexcapital.s3.eu-north-1.amazonaws.com/website/flags/expanol.png"
                          alt="Chinese Flag"
                        />
                        <span className="ms-[5px]">Español</span>
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
                        className="px-4 py-2 text-ctm dark:text-ctm-dark hover:text-cnb dark:hover:text-cnb-dark text-xs sm:text-sm font-medium hover:bg-cpc dark:hover:bg-cpc-dark rounded-md flex items-center"
                        dir="ltr"
                      >
                        <Image
                          unoptimized={true}
                          width="15"
                          height="15"
                          src="https://primexcapital.s3.eu-north-1.amazonaws.com/website/flags/afghanistan.png"
                          alt="Farsi Flag"
                        />
                        <span className="ms-[5px]">پښتو</span>
                      </Link>
                    </li>
                  </ul>
                )}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
