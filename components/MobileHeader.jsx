"use client";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import LocaleLink from "./LocaleLink";
import { useTranslations } from "next-intl";
import Logo from "@/public/images/logos/primex-logo.webp";
import Image from "next/image";
import { FaBars, FaChevronDown, FaChevronUp } from "react-icons/fa";
import { usePathname, useRouter } from "next/navigation";
import { RxCross1 } from "react-icons/rx";

const MobileHeader = ({ locale }) => {
  const t = useTranslations("menu");
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [openSubMenu, setOpenSubMenu] = useState(null);
  const pathname = usePathname();
  const pathnameWithoutLocale = pathname.replace(`/${locale}`, "");
  const [buttonText, setButtonText] = useState(
    locale === "ar" ? "عربي" : locale === "cn" ? "中文" : "English"
  );

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };

  const toggleSubMenu = (index) => {
    setOpenSubMenu(openSubMenu === index ? null : index);
  };

  const currentLocale = pathname.split("/")[1];
  const isLocaleOnly = pathname === `/${currentLocale}`;
  const restOfPath = isLocaleOnly ? "" : pathname.split("/").slice(2).join("/");

  useEffect(() => {
    const savedLanguage = localStorage.getItem("language");
    if (savedLanguage) {
      setButtonText(savedLanguage);
    }
  }, []);

  const handleClick = (language) => {
    setButtonText(language);
    localStorage.setItem("language", language);
  };

  useEffect(() => {
    const language =
      locale === "ar" ? "عربي" : locale === "cn" ? "中文" : "English";
    localStorage.setItem("language", language);
    setButtonText(language);
  }, [locale]);

  return (
    <header className="container w-full z-50 transition-all duration-300 block lg:hidden fixed top-0 left-0">
      <div className="container bg-[#ffffff] mt-[14px] h-[51px] rounded-full flex items-center justify-between px-4">
        <div className="flex items-center">
          <LocaleLink href="/" className="logo" onClick={toggleDrawer}>
            <Image width="100" height="100" src={Logo} alt="Logo Image" />
          </LocaleLink>
        </div>
        <div className="">
          <div
            className="w-[38px] h-[38px] rounded-full flex justify-center items-center bg-primary opacity-bg-40"
            onClick={toggleDrawer}
          >
            <FaBars size={20} className="text-secondary" />
          </div>
        </div>
      </div>
      <div
        className={`fixed top-0 right-0 h-full w-full bg-[#fff] text-black z-40 transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center py-7 ps-[6%] pe-[5%]">
          <Image width="100" height="100" src={Logo} alt="Logo Image" />
          <div className="w-[38px] h-[38px] rounded-full flex justify-center items-center bg-primary opacity-bg-40">
            <RxCross1
              size={16}
              className="cursor-pointer"
              onClick={toggleDrawer}
            />
          </div>
        </div>
        <nav className="flex flex-col space-y-4 py-4 ps-[6%] pe-[5%]">
          <LocaleLink
            href="/"
            className="text-black text-base"
            onClick={toggleDrawer}
          >
            {t("home")}
          </LocaleLink>
          <div>
            <button
              onClick={() => toggleSubMenu(0)}
              className="text-black text-base flex justify-between items-center w-full pt-[3px]"
            >
              {t("trading")}
              {openSubMenu === 0 ? (
                <FaChevronUp size={16} />
              ) : (
                <FaChevronDown size={16} />
              )}
            </button>
            {openSubMenu === 0 && (
              <div className="">
                <LocaleLink
                  href="/forex"
                  className="block text-black text-base pt-[16px]"
                  onClick={toggleDrawer}
                >
                  {t("forex")}
                </LocaleLink>
                <LocaleLink
                  href="/metals"
                  className="block text-black text-base pt-[16px]"
                  onClick={toggleDrawer}
                >
                  {t("metals")}
                </LocaleLink>
                <LocaleLink
                  href="/indices"
                  className="block text-black text-base pt-[16px]"
                  onClick={toggleDrawer}
                >
                  {t("indices")}
                </LocaleLink>
                <LocaleLink
                  href="/commodities"
                  className="block text-black text-base pt-[16px]"
                  onClick={toggleDrawer}
                >
                  {t("commodities")}
                </LocaleLink>
                <LocaleLink
                  href="/stocks"
                  className="block text-black text-base pt-[16px]"
                  onClick={toggleDrawer}
                >
                  {t("stocks")}
                </LocaleLink>
              </div>
            )}
          </div>
          <div>
            <button
              onClick={() => toggleSubMenu(1)}
              className="text-black text-base flex justify-between items-center w-full pt-[3px]"
            >
              {t("platform")}
              {openSubMenu === 1 ? (
                <FaChevronUp size={16} />
              ) : (
                <FaChevronDown size={16} />
              )}
            </button>
            {openSubMenu === 1 && (
              <div className="mt-2">
                <LocaleLink
                  href="/platform/mt5-platform"
                  className="block text-black text-base pt-[16px]"
                  onClick={toggleDrawer}
                >
                  {t("mt5")}
                </LocaleLink>
              </div>
            )}
          </div>
          <LocaleLink
            href="/account-types"
            className="text-black text-base pt-[3px]"
            onClick={toggleDrawer}
          >
            {t("accounts")}
          </LocaleLink>
          <div>
            <button
              onClick={() => toggleSubMenu(3)}
              className="text-black text-base flex justify-between items-center w-full pt-[3px]"
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
                  href="/ib-program"
                  className="block text-black text-base pt-[16px]"
                  onClick={toggleDrawer}
                >
                  {t("ib_program")}
                </LocaleLink>
                <LocaleLink
                  href="/liquidity"
                  className="block text-black text-base pt-[16px]"
                  onClick={toggleDrawer}
                >
                  {t("liquidity")}
                </LocaleLink>
              </div>
            )}
          </div>
          <div>
            <button
              onClick={() => toggleSubMenu(4)}
              className="text-black text-base flex justify-between items-center w-full pt-[3px]"
            >
              {t("education")}
              {openSubMenu === 4 ? (
                <FaChevronUp size={16} />
              ) : (
                <FaChevronDown size={16} />
              )}
            </button>
            {openSubMenu === 4 && (
              <div className="mt-2">
                <LocaleLink
                  href="/academy"
                  className="block text-black text-base pt-[16px]"
                  onClick={toggleDrawer}
                >
                  {t("academy")}
                </LocaleLink>
              </div>
            )}
          </div>
          <div>
            <button
              onClick={() => toggleSubMenu(5)}
              className="text-black text-base flex justify-between items-center w-full pt-[3px]"
            >
              {t("promotion")}
              {openSubMenu === 5 ? (
                <FaChevronUp size={16} />
              ) : (
                <FaChevronDown size={16} />
              )}
            </button>
            {openSubMenu === 5 && (
              <div className="mt-2">
                <LocaleLink
                  href="/bonus"
                  className="block text-black text-base pt-[16px]"
                  onClick={toggleDrawer}
                >
                  {t("deposit")}
                </LocaleLink>
                <LocaleLink
                  href="/top-trader"
                  className="block text-black text-base pt-[16px]"
                  onClick={toggleDrawer}
                >
                  {t("tradetowin")}
                </LocaleLink>
                <LocaleLink
                  href="/funded-account-competition"
                  className="block text-black text-base pt-[16px]"
                  onClick={toggleDrawer}
                >
                  {t("funded_account_competition")}
                </LocaleLink>
              </div>
            )}
          </div>
          <div>
            <button
              onClick={() => toggleSubMenu(6)}
              className="text-black text-base flex justify-between items-center w-full pt-[3px]"
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
                  className="block text-black text-base pt-[16px]"
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
                  className="block text-black text-base pt-[16px]"
                >
                  عربي
                </Link>
                <Link
                  href={
                    currentLocale === "cn"
                      ? `/${currentLocale}/${restOfPath}`
                      : `/cn/${restOfPath}`
                  }
                  onClick={() => {
                    handleClick("中文");
                    toggleDrawer();
                  }}
                  className="block text-black text-base pt-[16px]"
                >
                  中文
                </Link>
              </div>
            )}
          </div>
        </nav>
        <div className="flex flex-col items-center mt-6 mb-4">
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
            className="w-[90%] mb-2 py-3 text-[#111111] bg-transparent border-2 border-[#111111] hover:bg-[#111111] hover:text-primary rounded-full font-semibold"
          >
            {t("login")}
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
            className="w-[90%] py-3 text-primary bg-[#111111] border-2 border-[#111111] rounded-full font-semibold"
          >
            {t("register")}
          </button>
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
