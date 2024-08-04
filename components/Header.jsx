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

import Logo from "@/public/images/logos/logo2.1.svg";
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
  const [buttonText, setButtonText] = useState("English");
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
      name: t("partners"),
      link: `/ib-program`,
    },
    {
      name: t("education"),
      link: "/academy",
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
      className="navbar"
      isMenuOpen={isMenuOpen}

    >
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="lg:hidden"
        />
        <NavbarBrand>
          <LocaleLink href="/">
            <Image width="250" height={150} src={Logo} alt="Logo Image" />
          </LocaleLink>
        </NavbarBrand>
      </NavbarContent>
      <NavbarContent className="hidden lg:flex gap-4" justify="center">
        {menuItems.map((item, index) => (
          <NavbarItem key={index} className="text-sm">
            {item.options ? (
              <Dropdown>
                <DropdownTrigger>
                  <Button
                    onClick={handleButtonClickPlatform}
                    disableRipple
                    className={`p-0 bg-transparent gap-0 rotatableIcon`}
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
                      onClick={handlePlatformMenuItemClick}
                    >
                      <LocaleLink href={option.link}>{option.name}</LocaleLink>
                    </DropdownItem>
                  ))}
                </DropdownMenu>
              </Dropdown>
            ) : (
              <LocaleLink
                className={`w-full ${NavHoverEffect}`}
                href={item.link}
                size="lg"
              >
                {item.name}
              </LocaleLink>
            )}
          </NavbarItem>
        ))}
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
              <RiArrowDownSLine size={30} className="arrow" />
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
                <div className="flex gap-2">
                  <p>English</p>
                </div>
              </Link>
              <Link
                href={
                  currentLocale === "ar"
                    ? `/${currentLocale}/${restOfPath}`
                    : `/ar/${restOfPath}`
                }
                onClick={() => handleClick("العربية")}
              >
                <div className="flex gap-2">
                  <p>عربي</p>
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
                    className={`p-0 bg-transparent gap-0 rotatableIcon`}
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
                      <LocaleLink href={option.link}>{option.name}</LocaleLink>
                    </DropdownItem>
                  ))}
                </DropdownMenu>
              </Dropdown>
            ) : (
              <LocaleLink
                className="w-full"
                href={item.link}
                size="lg"
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
