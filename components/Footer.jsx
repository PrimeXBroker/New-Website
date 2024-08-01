"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import {
  FaFacebook,
  FaYoutube,
  FaLinkedinIn,
  FaInstagram,
  FaTelegram,
  FaRegEye,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaDownload } from "react-icons/fa6";
import CustomModal from "./Modal";
import { Button } from "@nextui-org/button";
import LocaleLink from "./LocaleLink";
import { useTranslations } from "next-intl";


const footerNotice = [
  {
    heading: "PRIMEX BROKER (PTY) LTD",
    paragraph:
      "company registered in South Africa with registration number 2021/590477/07 and register address : 74 Walmer Street, Sydenham, Johannesburg, Gauteng , 2192, South Africa.",
  },
  {
    heading: "PRIMEX BROKER (PTY) LTD",
    paragraph:
      "regulated and authorized to provide financial services by South Africa Financial Sector Conduct Authority (FSCA) under license number (FSP No. 51864).",
  },
  {
    heading: "Restricted Regions :",
    paragraph:
      "PrimeX Broker PTY LTD does not provide services for citizens/residents of the United States, Canada, Cuba, Myanmar, North Korea, Iran. The services of PrimeX Broker PTY LTD are not intended for distribution to, or use by, any person in any country or jurisdiction where such distribution or use would be contrary to local law or regulation.",
  },
  {
    heading: "Risk Warning :",
    paragraph:
      "Trading Forex and Leveraged Financial Instruments involves significant risk and can result in the loss of your invested capital. You should not invest more than you can afford to lose and should ensure that you fully understand the risks involved.",
  },
];

const Footer = () => {
  const t = useTranslations("home.getStarted");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = (e) => {
    e.preventDefault();
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };
  const handleModalOpenChange = (isOpen) => {
    setIsModalOpen(isOpen);
  };
  const footerLinks = [
    {
      column: {
        heading: "Company",
        links: [
          { name: "About Us", href: "/about" },
          { name: "Contact Us", href: "/contact" },
          { name: "Awards", href: "/awards" },
          { name: "Press Release", href: "#" },
          { name: "Careers", href: "/careers" },
        ],
      },
    },
    {
      column: {
        heading: "Rules",
        links: [
          { name: "Privacy Policy", href: "/privacy-policy" },
          { name: "Risk Disclosure", href: "#" },
          { name: "Client Agreement", href: "client-agreement" },
          { name: "Terms and Conditions", href: "/terms" },
        ],
      },
    },
    {
      column: {
        heading: "Services",
        links: [
          { name: "Account Types", href: "/account-types" },
          { name: "Introducing Brokers", href: "/ib-program" },
        ],
      },
    },
    {
      column: {
        heading: "Platform",
        links: [
          { name: "MT5 for Desktop", target: "_blank", href: "https://download.mql5.com/cdn/web/22640/mt5/primexbroker5setup.exe" },
          { name: "MT5 for Android", target: "_blank", href: "https://download.mql5.com/cdn/mobile/mt5/android?server=PrimeXBroker-Demo,PrimeXBroker-Live" },
          { name: "MT5 for IOS", target: "_blank", href: "https://download.mql5.com/cdn/mobile/mt5/ios?server=PrimeXBroker-Live" },
        ],
      },
    },
    {
      column: {
        heading: "Location",
        links: [
          {
            name: "South Africa HQ: Suit no 8 , First floor, Katherine and West building ,114 West Street, Sandown ,Sandton 2196, South Africa.",
            href: "#",
          },
          {
            name: "UAE Rep. Office: Office 2401, Westburry Tower 1, Business Bay, Dubai, UAE.",
            href: "#",
          },
        ],
      },
    },
  ];

  const paymentOptions = [
    {
      id: 1,
      name: "master",
      imgUrl:
        "https://primexcapital.s3.eu-north-1.amazonaws.com/website/homepage/payment/master.webp",
    },
    {
      id: 2,
      name: "visa",
      imgUrl:
        "https://primexcapital.s3.eu-north-1.amazonaws.com/website/homepage/payment/visa.webp",
    },
    {
      id: 3,
      name: "tether",
      imgUrl:
        "https://primexcapital.s3.eu-north-1.amazonaws.com/website/homepage/payment/tether.webp",
    },
    {
      id: 4,
      name: "amex",
      imgUrl:
        "https://primexcapital.s3.eu-north-1.amazonaws.com/website/homepage/payment/amex.webp",
    },
    {
      id: 5,
      name: "adv_cash",
      imgUrl:
        "https://primexcapital.s3.eu-north-1.amazonaws.com/website/homepage/payment/adv_cash.webp",
    },
    {
      id: 6,
      name: "perfect_money",
      imgUrl:
        "https://primexcapital.s3.eu-north-1.amazonaws.com/website/homepage/payment/perfect_money.webp",
    },
  ];

  return (
    <>
     <section
      className="bg-primary relative z-0">
      <div className="container flex p-10 flex-col md:flex-row">
      <div className="md:w-[60%] w-full mb-5 md:mb-0">
        <h1 className="sectionHeading text-3xl text-secondary font-semibold text-center md:text-left">
          {t("get_started_title")}
        </h1>
        <p className="sectionPara  text-secondary text-center md:text-left">
          {t("get_started_desc_1")}
          <br />
          {t("get_started_desc_2")}
        </p>
      </div>
      <div className="w-full md:w-[30%] flex justify-center items-center">
        <Button as={Link} href="https://client.primexbroker.com/en/register" radius="full" size="lg" color="secondary">
          <p className="text-white font-semibold">Open Live Account</p>
        </Button>
      </div>
      </div>
      <Image 
      src='https://primexcapital.s3.eu-north-1.amazonaws.com/website/homepage/x-transparent.svg' 
      width='210' 
      height='200' 
      alt="logo coin"
      className="absolute xl:right-[25%] lg:right-[20%] md:right-[20%] right-[50%] top-0 -z-10"
      />
    </section>
    <footer className="bg-secondary">
      <div className="container flex flex-col pt-12">
        <div className="flex flex-row justify-center lg:gap-0 gap-5 lg:justify-around items-center border-b border-b-gray-500 pb-12 flex-wrap">
          <p className="text-white text-sm font-[200]">We Accept:</p>
          {paymentOptions.map((el) => (
            <Image
              key={el.id}
              src={el.imgUrl}
              alt={el.name}
              width={120}
              height={100}
            />
          ))}
        </div>
        <div className="py-10 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 border-b border-b-gray-500 sm:text-left text-center">
          {footerLinks.map((el, index) => (
            <div key={index}>
              <p className="text-primary font-semibold md:pt-0 pt-5">
                {el.column.heading}
              </p>

              {
                el.column.heading === "Platform" ?
                  <ul className="pt-0 md:pt-2">
                    {console.log(el.column.heading, "el.column.heading")}
                    {el.column.links.map((link, linkIndex) => {
                      console.log("el.column.heading -----");
                      return <li key={linkIndex} className="text-white py-1">
                        <a target="_blank" href={link.href}>{link.name}</a>
                      </li>
                    }

                    )}
                  </ul> :
                  <ul className="pt-0 md:pt-2">
                    {el.column.links.map((link, linkIndex) =>
                      link.name === "Client Agreement" ? (
                        <li key={linkIndex} className="text-white py-1">
                          <Link href={link.href} onClick={handleOpenModal}>
                            {link.name}
                          </Link>
                        </li>
                      ) : (
                        <li key={linkIndex} className="text-white py-1">
                          <LocaleLink href={link.href}>{link.name}</LocaleLink>
                        </li>
                      )
                    )}
                  </ul>

              }

            </div>
          ))}
        </div>
        <div className="py-10 flex flex-col md:flex-row border-b border-b-gray-500">
          <div className="w-full md:w-[100%]">
            {footerNotice.map((el, index) => (
              <div key={index} className="pb-4">
                <span className="text-white text-[14px] font-semibold pr-2">
                  {el.heading}
                </span>
                <span className="text-white text-[14px]">{el.paragraph}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-5 lg:flex-row lg:gap-0 justify-between items-center py-12 flex-wrap">
          <div>
            <Image
              className="block sm:mx-0 mx-auto pb-6 sm:pb-0"
              src="/images/logos/logo2.2.svg"
              alt="footer logo"
              width="150"
              height="200"
            />
          </div>
          <p className="text-white text-center text-[12px]">
            Trading CFDs and FX options entail risk and could result in the loss
            of your capital
          </p>
          <div className="flex gap-4 items-center justify-around">
            <Link href="https://www.facebook.com/primex.brokers?mibextid=LQQJ4d" target="_blank">
              <FaFacebook
                color="#FFF"
                size={30}
                className="hover:fill-blue-600 transition-all hover:translate-y-[-5px] duration-500"
              />
            </Link>
            <Link href="https://x.com/PrimeXCapital" target="_blank">
              <FaXTwitter
                color="#FFF"
                size={30}
                className="hover:fill-black transition-all hover:translate-y-[-5px] duration-500"
              />
            </Link>
            <Link href="https://www.youtube.com/channel/UC_B3x7k-gNQpDW7YEB8Lg0g" target="_blank">
              <FaYoutube
                color="#FFF"
                size={30}
                className="hover:fill-red-700 transition-all hover:translate-y-[-5px] duration-500"
              />
            </Link>
            <Link href="https://www.linkedin.com/company/primex-broker" target="_blank">
              <FaLinkedinIn
                color="#FFF"
                size={30}
                className="hover:fill-blue-700 transition-all hover:translate-y-[-5px] duration-500"
              />
            </Link>
            <Link href="https://www.instagram.com/primexcapital.en?igsh=empvdXJ3aDRlZTBn" target="_blank">
              <FaInstagram
                color="#FFF"
                size={30}
                className="hover:fill-purple-500 transition-all hover:translate-y-[-5px] duration-500"
              />
            </Link>
            <Link href="https://t.me/PrimeX_Broker" target="_blank">
              <FaTelegram
                color="#FFF"
                size={30}
                className="hover:fill-blue-400 transition-all hover:translate-y-[-5px] duration-500"
              />
            </Link>
          </div>
        </div>
      </div>
      <CustomModal
        isOpen={isModalOpen}
        onOpen={handleOpenModal}
        onClose={handleCloseModal}
        onOpenChange={handleModalOpenChange}
        modalPlacement="auto"
      >
        <div className="flex justify-evenly">
          <Button
            as="a"
            href="https://primexcapital.s3.eu-north-1.amazonaws.com/website/assets/PDF/client_agreement.pdf"
            endContent={<FaDownload size={20} />}
          >
            Download as PDF
          </Button>
          <Button
            as="a"
            href="https://drive.google.com/file/d/1mNGtSnTp8h11o8exI8dVqfxsfQGD41MU/view?usp=sharing"
            endContent={<FaRegEye size={20} target="_blank" />}
          >
            View Document
          </Button>
        </div>
      </CustomModal>
      <p className="bg-accent text-secondary text-sm py-3 text-center font-semibold drop-shadow-sm">
        &copy; 2022 - 2024 Primex Broker (PTY) LTD all rights reserved.{" "}
      </p>
    </footer>
    </>
  );
};

export default Footer;
