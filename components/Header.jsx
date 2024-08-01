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
import { usePathname,useRouter } from "next/navigation";
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
  const [isRotatedPartners, setIsRotatedPartners] = useState(false);
  const [isRotatedPlatform, setIsRotatedPlatform] = useState(false);
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
      link: "/platform/mt5-platform",
    },
    {
      name: "Partners",
      link: `/partners`,
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
  const handleButtonClickPartners = () => {
    setIsRotatedPartners(!isRotatedPartners);
  };
  const handleButtonClick = () => {
    setIsRotated(!isRotated);
  };
  const handleTradingMenuItemClick = () => {
    setIsRotated(false);
  };

  const handleButtonClickPlatform = ( ) => {
    setIsRotatedPlatform(!isRotatedPlatform);
  }

  const handlePlatformMenuItemClick=()=>{
    setIsRotatedPlatform(false)
  }
  
const router = useRouter()
  return (
    <Navbar
      maxWidth="xl"
      onMenuOpenChange={setIsMenuOpen}
      isBordered
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
            className={`${pathnameWithoutLocale === "" ? "active_link" : ""
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
                className={`p-0 bg-transparent  gap-0 rotatableIcon`}
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
          <DropdownMenu variant="light">
            <DropdownItem className="hover:bg-primary" onClick={handleTradingMenuItemClick}>
              <LocaleLink href="/forex">Forex</LocaleLink>
            </DropdownItem>
            <DropdownItem className="hover:bg-primary" onClick={handleTradingMenuItemClick}> 
            <LocaleLink href="/metals">Metals</LocaleLink>
            </DropdownItem>
            <DropdownItem className="hover:bg-primary" onClick={handleTradingMenuItemClick}>
            <LocaleLink href="/indices">Indices</LocaleLink>
            </DropdownItem>
            <DropdownItem className="hover:bg-primary" onClick={handleTradingMenuItemClick}>
            <LocaleLink href="/commodities">Commodities</LocaleLink>
            </DropdownItem>
            <DropdownItem className="hover:bg-primary" onClick={handleTradingMenuItemClick}>
            <LocaleLink href="/stocks">Stocks</LocaleLink>
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
              
        <Dropdown>
          <NavbarItem className="text-sm">
            <DropdownTrigger>
              <Button
                onClick={handleButtonClickPlatform}
                disableRipple
                className={`p-0 bg-transparent  gap-0 rotatableIcon`}
                endContent={
                  <RiArrowDownSLine
                    size={25}
                    className={isRotatedPlatform ? "rotated" : ""}
                  />
                }
                radius="sm"
                variant="light"
              >
                Platform
              </Button>
            </DropdownTrigger>
          </NavbarItem>
          <DropdownMenu variant="light">
            <DropdownItem className="hover:bg-primary" onClick={handlePlatformMenuItemClick}>
              <LocaleLink href="/platform/mt5-platform">MetaTrader 5</LocaleLink>
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>

        <NavbarItem className="text-sm">
          <LocaleLink
            href="/account-types"
            className={`${pathnameWithoutLocale === "/account-types" ? "active_link" : ""
              } ${NavHoverEffect}`}
          >
            Accounts
          </LocaleLink>
        </NavbarItem>      
        <Dropdown>
          <NavbarItem className="text-sm">
            <DropdownTrigger>
              <Button
                onClick={handleButtonClickPartners}
                disableRipple
                className={`p-0 bg-transparent  gap-0 rotatableIcon`}
                endContent={
                  <RiArrowDownSLine
                    size={25}
                    className={isRotatedPartners ? "rotated" : ""}
                  />
                }
                radius="sm"
                variant="light"
              >
                Partners
              </Button>
            </DropdownTrigger>
          </NavbarItem>
          <DropdownMenu variant="light">
            <DropdownItem className="hover:bg-primary ">
              <LocaleLink href="/ib-program">IB Program</LocaleLink>
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>

        <NavbarItem className="text-sm">
          <LocaleLink
            href="/academy"
            className={`${pathnameWithoutLocale === "/academy" ? "active_link" : ""
              } ${NavHoverEffect}`}
          >
            Education
          </LocaleLink>
        </NavbarItem>

      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem className="text-sm hidden lg:block">
          <GradiantButton onClick={()=>router.push('https://client.primexbroker.com/en/register')} name="Register" />
        </NavbarItem>
        <NavbarItem className="text-sm hidden lg:block">
          <GradiantButton onClick={()=>router.push('https://client.primexbroker.com/en/login')} name="Login" />
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
                  <Image
                    src="/images/flags/gb.svg"
                    width="30"
                    height="8"
                    alt="img"
                  />
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
                  <Image
                    src="/images/flags/arab.svg"
                    width="30"
                    height="8"
                    alt="img"
                  />
                  <p>AR</p>
                </div>
              </Link>
            </div>
          </div>
        </NavbarItem>
        <NavbarItem>
          {/* <ThemeToggle /> */}
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
