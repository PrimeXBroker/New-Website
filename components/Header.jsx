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
import { useState } from "react";
import LocaleLink from "./LocaleLink";

const Header = () => {
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
  return (
    <Navbar
      maxWidth="xl"
      disableAnimation={true}
      onMenuOpenChange={setIsMenuOpen}
      isBordered
      className="py-5"
    >
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand>
          <Image width="150" src={Logo} alt="Logo Image" />
        </NavbarBrand>
      </NavbarContent>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
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
          <Link className="bg-primary px-4 py-2 rounded-2xl" href="#">
            Register
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link className="bg-primary px-4 py-2 rounded-2xl" href="#">
            Login
          </Link>
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
