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
      name: "Trading",
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
              router.push("https://client.primexbroker.com/en/register")
            }
            name={t("register")}
          />
        </NavbarItem>
        <NavbarItem className="text-sm hidden lg:block">
          <GradiantButton
            onClick={() =>
              router.push("https://client.primexbroker.com/en/login")
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
                    src="/images/flags/gb.svg"
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
                    src="/images/flags/arab.svg"
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
      <NavbarMenu className="h-[400px] bg-white gap-[2rem]">
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item.name}-${index}`}>
            {item.options ? (
              <Dropdown>
                <DropdownTrigger>
                  <Button
                    onClick={handleButtonClickPlatform}
                    disableRipple
                    className={`p-0 bg-transparent gap-0 rotatableIcon text-lg h-auto`}
                    endContent={<RiArrowDownSLine size={25} />}
                    radius="sm"
                    variant="light"
                  >
                    {item.name}
                  </Button>
                </DropdownTrigger>
                <DropdownMenu variant="light">
                  {item.options.map((option, idx) => (
                    <DropdownItem
                      key={`${option.name}-${idx}`}
                      className="hover:bg-primary"
                      onClick={handleMobileMenuItemClick}
                    >
                      <LocaleLink
                        className="w-full text-lg"
                        size="lg"
                        href={option.link}
                      >
                        {option.name}
                      </LocaleLink>
                    </DropdownItem>
                  ))}
                </DropdownMenu>
              </Dropdown>
            ) : (
              <LocaleLink
                className="w-full"
                href={item.link}
                size="xl"
                onClick={handleMobileMenuItemClick}
              >
                {item.name}
              </LocaleLink>
            )}
          </NavbarMenuItem>
        ))}
        <NavbarMenuItem>
          <div className="flex gap-4">
            <GradiantButton
              name={t("register")}
              onClick={handleMobileMenuItemClick}
            />
            <GradiantButton
              name={t("login")}
              onClick={handleMobileMenuItemClick}
            />
          </div>
        </NavbarMenuItem>
      </NavbarMenu>
    </Navbar>
  );
};

export default Header;
