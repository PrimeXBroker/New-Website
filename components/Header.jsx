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

import Logo from "@/public/images/logos/logo.webp";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import LocaleLink from "./LocaleLink";
import { usePathname } from "next/navigation";
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
  const t = useTranslations("home.menu");
  const pathname = usePathname();
  const pathnameWithoutLocale = pathname.replace(`/${locale}`, "");
  const [buttonText, setButtonText] = useState("EN");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isRotated, setIsRotated] = useState(false);
  const menuItems = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "Trading",
      link: "/trading",
    },
    {
      name: "Platform",
      link: "/platform",
    },
    {
      name: "Partners",
      link: `/partners`,
    },
    {
      name: "Trade To Win",
      link: "/trade-to-win",
    },
    {
      name: "Education",
      link: "/education",
    },
    {
      name: "Gift Account",
      link: "/gift-account",
    },
  ];

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
  const handleButtonClick = () => {
    setIsRotated(!isRotated);
  };

  return (
    <Navbar
      maxWidth="xl"
      onMenuOpenChange={setIsMenuOpen}
      isBordered
      // className="py-5"
    >
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="lg:hidden"
        />
        <NavbarBrand>
          <LocaleLink href="/">
            <Image width="150" height={150} src={Logo} alt="Logo Image" />
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
            Home
          </Link>
        </NavbarItem>

        <Dropdown>
          <NavbarItem className="text-sm">
            <DropdownTrigger>
              <Button
                onClick={handleButtonClick}
                disableRipple
                className={`p-0 bg-transparent data-[hover]:bg-transparent gap-0 rotatableIcon`}
                endContent={
                  <RiArrowDownSLine
                    size={25}
                    className={isRotated ? "rotated" : ""}
                  />
                }
                radius="sm"
                variant="light"
              >
                Trading
              </Button>
            </DropdownTrigger>
          </NavbarItem>
          <DropdownMenu>
            <DropdownItem>
              <div className="flex w-[100%] h-[300px] justify-between cursor-default hover:bg-transparent text-[16px] pt-5">
                <ul className="w-[30%]">
                  <p className="font-semibold pb-4">Instruments</p>
                  <div className="flex flex-col gap-3">
                    <li>Forex</li>
                    <li>Metals</li>
                    <li>Indicies</li>
                    <li>Commodities</li>
                    <li>Stocks</li>
                    <li>Cryptocurrencies</li>
                  </div>
                </ul>
                <ul className="w-[30%]">
                  <p className="font-semibold pb-4"> Account Types</p>
                  <div className="flex flex-col gap-3">
                    <li>Standard Account</li>
                    <li>Narrow Account</li>
                    <li>Zero Account</li>
                    <li>Crypto Account</li>
                    <li>Delete Account Request</li>
                  </div>
                </ul>
                <ul className="w-[30%]">
                  <p className="font-semibold pb-4"> Learn The Trading</p>
                  <div className="flex flex-col gap-3 text-wrap">
                    <li>First Step:Introduction to financial market</li>
                    <li>
                      Second Step:Basic Info about broker and technical and
                      fundamental analysis
                    </li>
                    <li>Third Step:Proffesional Strategies for Trading</li>
                  </div>
                </ul>
              </div>
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
        <NavbarItem className="text-sm">
          <LocaleLink
            href="/platform"
            className={`${
              pathnameWithoutLocale === "/platform" ? "active_link" : ""
            } ${NavHoverEffect}`}
          >
            Platform
          </LocaleLink>
        </NavbarItem>
        <NavbarItem className="text-sm">
          <LocaleLink
            href="/partners"
            className={`${
              pathnameWithoutLocale === "/partners" ? "active_link" : ""
            } ${NavHoverEffect}`}
          >
            Partners
          </LocaleLink>
        </NavbarItem>
        <NavbarItem className="text-sm">
          <LocaleLink
            href="/trade-to-Win"
            className={`${
              pathnameWithoutLocale === "/trade-to-Win" ? "active_link" : ""
            } ${NavHoverEffect}`}
          >
            Trade To Win
          </LocaleLink>
        </NavbarItem>
        <NavbarItem className="text-sm">
          <LocaleLink
            href="/education"
            className={`${
              pathnameWithoutLocale === "/education" ? "active_link" : ""
            } ${NavHoverEffect}`}
          >
            Education
          </LocaleLink>
        </NavbarItem>
        <NavbarItem className="text-sm">
          <LocaleLink
            color="foreground"
            href="/gift-account"
            className={`${
              pathnameWithoutLocale === "/gift-account" ? "active_link" : ""
            } ${NavHoverEffect}`}
          >
            Gift Account
          </LocaleLink>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem className="text-sm hidden lg:block">
          <GradiantButton name="Register" />
        </NavbarItem>
        <NavbarItem className="text-sm hidden lg:block">
          <GradiantButton name="Login" />
        </NavbarItem>
        <NavbarItem>
          <div className="dropdown">
            <button className="dropbtn">
              {buttonText}
              <RiArrowDownSLine size={30} className="arrow" />
            </button>
            <div className="dropdown-content">
              <Link
                href={
                  currentLocale === "en"
                    ? `/${currentLocale}/${restOfPath}`
                    : `/en/${restOfPath}`
                }
                onClick={() => handleClick("EN")}
              >
                <div className="flex gap-2">
                  <Image src="/images/flags/gb.svg" width="30" height="8" />
                  <p>EN</p>
                </div>
              </Link>
              <Link
                href={
                  currentLocale === "ar"
                    ? `/${currentLocale}/${restOfPath}`
                    : `/ar/${restOfPath}`
                }
                onClick={() => handleClick("AR")}
              >
                <div className="flex gap-2">
                  <Image src="/images/flags/arab.svg" width="30" height="8" />
                  <p>AR</p>
                </div>
              </Link>
            </div>
          </div>
        </NavbarItem>
        <NavbarItem>
          <ThemeToggle />
        </NavbarItem>
      </NavbarContent>
      <NavbarMenu className="h-56 !important">
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <LocaleLink className="w-full" href={item.link} size="lg">
              {item.name}
            </LocaleLink>
          </NavbarMenuItem>
        ))}
        <NavbarMenuItem>
          <div className="flex gap-4">
            <GradiantButton name="Register" />
            <GradiantButton name="Login" />
          </div>
        </NavbarMenuItem>
      </NavbarMenu>
    </Navbar>
  );
};

export default Header;
