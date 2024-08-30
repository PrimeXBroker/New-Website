"use client";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
} from "@nextui-org/navbar";
import { Badge } from "@nextui-org/badge";
import { Accordion, AccordionItem } from "@nextui-org/accordion";

import Logo from "@/public/images/logos/logo_black_v2.2.svg";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import LocaleLink from "./LocaleLink";
import { usePathname, useRouter } from "next/navigation";
import { RiArrowDownSLine } from "react-icons/ri";
import { useTranslations } from "next-intl";
import GradiantButton from "./GradiantButton";
import {
  DropdownTrigger,
  Dropdown,
  DropdownMenu,
  DropdownItem,
} from "@nextui-org/dropdown";
import { Button } from "@nextui-org/react";
import ThemeToggle from "./ThemeToggle";

const Header = ({ locale }) => {
  const t = useTranslations("menu");
  const pathname = usePathname();
  const pathnameWithoutLocale = pathname.replace(`/${locale}`, "");
  const [buttonText, setButtonText] = useState(
    locale === "ar" ? "عربي" : "English"
  );
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isRotated, setIsRotated] = useState(false);
  const [isRotatedPartners, setIsRotatedPartners] = useState(false);
  const [isRotatedPlatform, setIsRotatedPlatform] = useState(false);
  const menuItems = [
    {
      name: t("home"),
      link: "/",
    },
    {
      name: t("trading"),
      options: [
        { name: t("forex"), link: "/forex" },
        { name: t("metals"), link: "/metals" },
        { name: t("indices"), link: "/indices" },
        { name: t("commodities"), link: "/commodities" },
        { name: t("stocks"), link: "/stocks" },
      ],
    },
    {
      name: t("platform"),
      options: [{ name: t("mt5"), link: "/platform/mt5-platform" }],
    },
    {
      name: t("accounts"),
      link: "/account-types",
    },
    {
      name: t("partners"),
      options: [{ name: t("ib_program"), link: "/ib-program" }],
    },
    {
      name: t("education"),
      options: [{ name: t("academy"), link: "/academy" }],
    },
    {
      name: t("deposit"),
      link: "/bonus",
    },
  ];

  const handleMobileMenuItemClick = () => {
    setIsMenuOpen(false);
  };

  const NavHoverEffect = `relative w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-primary after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center`;
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
    const language = locale === "ar" ? "عربي" : "English";
    localStorage.setItem("language", language);
    setButtonText(language);
  }, []);

  const handleButtonClickPartners = () => {
    setIsRotatedPartners(!isRotatedPartners);
  };
  const handleButtonClick = () => {
    setIsRotated(!isRotated);
  };
  const handleTradingMenuItemClick = () => {
    setIsRotated(false);
  };

  const handleButtonClickPlatform = () => {
    setIsRotatedPlatform(!isRotatedPlatform);
  };

  const handlePlatformMenuItemClick = () => {
    setIsRotatedPlatform(false);
  };

  const router = useRouter();
  const defaultContent =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";

  return (
    <Navbar
      maxWidth="xl"
      onMenuOpenChange={setIsMenuOpen}
      isBordered
      className="navbar bg-white"
      isMenuOpen={isMenuOpen}
      position="sticky"
    >
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="lg:hidden"
        />
        <NavbarBrand>
          <LocaleLink href="/">
            <Image width="130" height={150} src={Logo} alt="Logo Image" />
          </LocaleLink>
        </NavbarBrand>
      </NavbarContent>
      <NavbarContent className="hidden lg:flex gap-4" justify="center">
        <NavbarItem className="text-sm">
          <Link
            className={`${
              pathnameWithoutLocale === "" ? "active_link" : ""
            } ${NavHoverEffect}`}
            color="foreground"
            href="/"
          >
            {t("home")}
          </Link>
        </NavbarItem>
        <NavbarItem>
          <div className="dropdown inline-block relative">
            <button className="bg-white text-secondary text-sm py-2 rounded inline-flex items-center">
              <span>{t("trading")}</span>
              <svg
                className="fill-current h-5 w-5 arrow"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />{" "}
              </svg>
            </button>
            <ul className="dropdown-menu absolute hidden text-secondary pt-3">
              <li>
                <LocaleLink
                  className="bg-white hover:bg-primary text-nowrap py-2 px-4 block text-sm"
                  href="/forex"
                >
                  {t("forex")}
                </LocaleLink>
              </li>
              <li>
                <LocaleLink
                  className="bg-white hover:bg-primary text-nowrap py-2 px-4 block text-sm"
                  href="/metals"
                >
                  {t("metals")}
                </LocaleLink>
              </li>
              <li>
                <LocaleLink
                  className="bg-white hover:bg-primary text-nowrap py-2 px-4 block text-sm"
                  href="/indices"
                >
                  {t("indices")}
                </LocaleLink>
              </li>
              <li>
                <LocaleLink
                  className="bg-white hover:bg-primary text-nowrap py-2 px-4 block text-sm"
                  href="/commodities"
                >
                  {t("commodities")}
                </LocaleLink>
              </li>
              <li>
                <LocaleLink
                  className="bg-white hover:bg-primary text-nowrap py-2 px-4 block text-sm"
                  href="/stocks"
                >
                  {t("stocks")}
                </LocaleLink>
              </li>
            </ul>
          </div>
        </NavbarItem>
        {/* <Dropdown>
          <NavbarItem className="text-sm">
            <DropdownTrigger>
              <Button
                onClick={handleButtonClick}
                disableRipple
                className={`p-0 bg-transparent  gap-0 rotatableIcon`}
                endContent={
                  <RiArrowDownSLine
                    size={25}
                    // className={isRotated ? "rotated" : ""}
                  />
                }
                radius="sm"
                variant="light"
              >
                {t("trading")}
              </Button>
            </DropdownTrigger>
          </NavbarItem>
          <DropdownMenu variant="light">
            <DropdownItem
              className="hover:bg-primary"
              onClick={handleTradingMenuItemClick}
            >
              <LocaleLink href="/forex">{t("forex")}</LocaleLink>
            </DropdownItem>
            <DropdownItem
              className="hover:bg-primary"
              onClick={handleTradingMenuItemClick}
            >
              <LocaleLink href="/metals">{t("metals")}</LocaleLink>
            </DropdownItem>
            <DropdownItem
              className="hover:bg-primary"
              onClick={handleTradingMenuItemClick}
            >
              <LocaleLink href="/indices">{t("indices")}</LocaleLink>
            </DropdownItem>
            <DropdownItem
              className="hover:bg-primary"
              onClick={handleTradingMenuItemClick}
            >
              <LocaleLink href="/commodities">{t("commodities")}</LocaleLink>
            </DropdownItem>
            <DropdownItem
              className="hover:bg-primary"
              onClick={handleTradingMenuItemClick}
            >
              <LocaleLink href="/stocks">{t("stocks")}</LocaleLink>
            </DropdownItem>
          </DropdownMenu>
        </Dropdown> */}
        <NavbarItem>
          {/* <Dropdown>
            <NavbarItem className="text-sm">
              <DropdownTrigger>
                <Button
                  onClick={handleButtonClickPlatform}
                  disableRipple
                  className={`p-0 bg-transparent  gap-0 rotatableIcon`}
                  endContent={
                    <RiArrowDownSLine
                      size={25}
                      // className={isRotatedPlatform ? "rotated" : ""}
                    />
                  }
                  radius="sm"
                  variant="light"
                >
                  {t("platform")}
                </Button>
              </DropdownTrigger>
            </NavbarItem>
            <DropdownMenu variant="light">
              <DropdownItem
                className="hover:bg-primary"
                onClick={handlePlatformMenuItemClick}
              >
                <LocaleLink href="/platform/mt5-platform">
                  {t("mt5")}
                </LocaleLink>
              </DropdownItem>
            </DropdownMenu>
          </Dropdown> */}
          <div className="dropdown inline-block relative">
            <button className="bg-white text-secondary text-sm py-2 rounded inline-flex items-center">
              <span>{t("platform")}</span>
              <svg
                className="fill-current h-5 w-5 arrow"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />{" "}
              </svg>
            </button>
            <ul className="dropdown-menu absolute hidden text-secondary pt-3">
              <li>
                <LocaleLink
                  className="bg-white hover:bg-primary text-nowrap py-2 px-4 block text-sm"
                  href="/platform/mt5-platform"
                >
                  {t("mt5")}
                </LocaleLink>
              </li>
            </ul>
          </div>
        </NavbarItem>
        <NavbarItem className="text-sm hover:bg-white">
          <LocaleLink
            href="/account-types"
            className={`${
              pathnameWithoutLocale === "/account-types" ? "active_link" : ""
            } ${NavHoverEffect}`}
          >
            {t("accounts")}
          </LocaleLink>
        </NavbarItem>
        <NavbarItem>
          <div className="dropdown inline-block relative">
            <button className="bg-white text-secondary text-sm py-2 rounded inline-flex items-center">
              <span>{t("partners")}</span>
              <svg
                className="fill-current h-5 w-5 arrow"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />{" "}
              </svg>
            </button>
            <ul className="dropdown-menu absolute hidden text-secondary pt-3">
              <li>
                <LocaleLink
                  className="bg-white hover:bg-primary text-nowrap py-2 px-4 block text-sm"
                  href="/ib-program"
                >
                  {t("ib_program")}
                </LocaleLink>
              </li>
            </ul>
          </div>
        </NavbarItem>
        <NavbarItem>
          <div className="dropdown inline-block relative">
            <button className="bg-white text-secondary text-sm py-2 rounded inline-flex items-center">
              <span>{t("education")}</span>
              <svg
                className="fill-current h-5 w-5 arrow"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />{" "}
              </svg>
            </button>
            <ul className="dropdown-menu absolute hidden text-secondary pt-3">
              <li>
                <LocaleLink
                  className="bg-white hover:bg-primary text-nowrap py-2 px-4 block text-sm"
                  href="/academy"
                >
                  {t("academy")}
                </LocaleLink>
              </li>
            </ul>
          </div>
        </NavbarItem>
        <NavbarItem className="text-sm">
          <Badge
            content={t("badge_text")}
            color="danger"
            size="sm"
            className="translate-y-[-100%]"
          >
            <LocaleLink
              href="/bonus"
              className={`${
                pathnameWithoutLocale === "/bonus" ? "active_link" : ""
              } ${NavHoverEffect}`}
            >
              {t("deposit")}
            </LocaleLink>
          </Badge>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem className="text-sm hidden lg:block">
          <GradiantButton
            onClick={() =>
              window.open("https://client.primexbroker.com/en/register")
            }
            name={t("register")}
          />
        </NavbarItem>
        <NavbarItem className="text-sm hidden lg:block">
          <GradiantButton
            onClick={() =>
              window.open("https://client.primexbroker.com/en/login")
            }
            name={t("login")}
          />
        </NavbarItem>
        <NavbarItem>
          <div className="dropdown">
            <button className="dropbtn">
              {buttonText}
              <RiArrowDownSLine size={25} className="arrow" />
            </button>
            <div className="dropdown-content">
              <Link
                href={
                  currentLocale === "en"
                    ? `/${currentLocale}/${restOfPath}`
                    : `/en/${restOfPath}`
                }
                onClick={() => handleClick("English")}
              >
                <div>
                  {/* <Image
                    src="https://primexcapital.s3.eu-north-1.amazonaws.com/website/flags/gb.svg"
                    width="30"
                    height="8"
                    alt="img"
                  /> */}
                  <p className="text-md text-secondary text-center">English</p>
                </div>
              </Link>
              <Link
                href={
                  currentLocale === "ar"
                    ? `/${currentLocale}/${restOfPath}`
                    : `/ar/${restOfPath}`
                }
                onClick={() => handleClick("عربي")}
              >
                <div>
                  {/* <Image
                    src="https://primexcapital.s3.eu-north-1.amazonaws.com/website/flags/arab.svg"
                    width="30"
                    height="8"
                    alt="img"
                  /> */}
                  <p className="text-md text-secondary text-center">عربي</p>
                </div>
              </Link>
            </div>
          </div>
        </NavbarItem>
        <NavbarItem>{/* <ThemeToggle /> */}</NavbarItem>
      </NavbarContent>
      <NavbarMenu className="h-[400px] bg-white">
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item.name}-${index}`}>
            {!item.options && (
              <LocaleLink
                className="w-full ml-2"
                href={item.link}
                size="xl"
                onClick={handleMobileMenuItemClick}
              >
                {item.name}
              </LocaleLink>
            )}
          </NavbarMenuItem>
        ))}
        <Accordion className="navbar-accordion">
          {menuItems.map((item, index) => {
            if (item.options) {
              return (
                <AccordionItem key={`${item.name}-${index}`} title={item?.name}>
                  <div className="grid grid-cols-1">
                    {item.options?.map((option, idx) => (
                      <LocaleLink
                        key={`${option.name}-${idx}`}
                        className="grid items-center w-full h-10 pl-3 text-md hover:bg-primary"
                        onClick={handleMobileMenuItemClick}
                        size="md"
                        href={option.link}
                      >
                        <span>{option.name}</span>
                      </LocaleLink>
                    ))}
                  </div>
                </AccordionItem>
              );
            }
          })}
        </Accordion>
        <NavbarMenuItem>
          <div className="flex gap-4">
            <GradiantButton
              name={t("register")}
              onClick={() =>
                router.push("https://client.primexbroker.com/en/register")
              }
            />
            <GradiantButton
              name={t("login")}
              onClick={() =>
                router.push("https://client.primexbroker.com/en/login")
              }
            />
          </div>
        </NavbarMenuItem>
      </NavbarMenu>
    </Navbar>
  );
};

export default Header;
