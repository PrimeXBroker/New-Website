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

const Header = () => {
  const pathname = usePathname();
  const [buttonText, setButtonText] = useState("EN");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuItems = [
    {
      name: "Home",
      link: "/",
    },
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

  return (
    <Navbar
      maxWidth="xl"
      onMenuOpenChange={setIsMenuOpen}
      isBordered
      className="py-5"
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
        <NavbarItem>
          <Link color="foreground" href="/">
            Home
          </Link>
        </NavbarItem>
        <NavbarItem>
          <LocaleLink href="/trading">Trading</LocaleLink>
        </NavbarItem>
        <NavbarItem>
          <LocaleLink href="/platform">Platform</LocaleLink>
        </NavbarItem>
        <NavbarItem>
          <LocaleLink href="/partners">Partners</LocaleLink>
        </NavbarItem>
        <NavbarItem>
          <LocaleLink href="/trade-to-Win">Trade To Win</LocaleLink>
        </NavbarItem>
        <NavbarItem>
          <LocaleLink href="/education">Education</LocaleLink>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#">
            Gift Account
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem>
          <Link href="#">
            <button class="group rounded-full relative min-h-[40px] w-32 overflow-hidden border border-[#3F3F3E] bg-white text-[#FFD000] shadow-2xl transition-all before:absolute before:left-0 before:top-0 before:h-0 before:w-1/4 before:bg-[#FFD000] before:duration-500 after:absolute after:bottom-0 after:right-0 after:h-0 after:w-1/4 after:bg-[#FFD000] after:duration-500 hover:text-white hover:before:h-full hover:after:h-full">
              <span class="top-0 flex h-full w-full items-center justify-center before:absolute before:bottom-0 before:left-1/4 before:z-0 before:h-0 before:w-1/4 before:bg-[#FFD000] before:duration-500 after:absolute after:right-1/4 after:top-0 after:z-0 after:h-0 after:w-1/4 after:bg-[#FFD000] after:duration-500 hover:text-secondary hover:font-semibold group-hover:before:h-full group-hover:after:h-full"></span>
              <span class="absolute bottom-0 left-0 right-0 top-0 z-10 flex h-full w-full items-center justify-center group-hover:text-secondary group-hover:font-semibold">
                Register
              </span>
            </button>
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link href="#">
            <button class="group rounded-full relative min-h-[40px] w-32 overflow-hidden border border-[#3F3F3E] bg-white text-[#FFD000] shadow-2xl transition-all before:absolute before:left-0 before:top-0 before:h-0 before:w-1/4 before:bg-[#FFD000] before:duration-500 after:absolute after:bottom-0 after:right-0 after:h-0 after:w-1/4 after:bg-[#FFD000] after:duration-500 hover:text-white hover:before:h-full hover:after:h-full">
              <span class="top-0 flex h-full w-full items-center justify-center before:absolute before:bottom-0 before:left-1/4 before:z-0 before:h-0 before:w-1/4 before:bg-[#FFD000] before:duration-500 after:absolute after:right-1/4 after:top-0 after:z-0 after:h-0 after:w-1/4 after:bg-[#FFD000] after:duration-500 hover:text-secondary hover:font-semibold group-hover:before:h-full group-hover:after:h-full"></span>
              <span class="absolute bottom-0 left-0 right-0 top-0 z-10 flex h-full w-full items-center justify-center group-hover:text-secondary group-hover:font-semibold">
                Login
              </span>
            </button>
          </Link>
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
      </NavbarContent>
      <NavbarMenu className="h-56 !important">
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <LocaleLink className="w-full" href={item.link} size="lg">
              {item.name}
            </LocaleLink>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
};

export default Header;
