"use client";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, useMemo } from "react";
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
import { useTranslations, useLocale } from "next-intl";
import Logo from "@/public/images/logos/logo-white.webp";
import { usePathname, useRouter } from "next/navigation";

const Footer = () => {
  const router = useRouter();
  const pathname = usePathname();
  const language = useLocale();
  const t = useTranslations("footer");
  const locale = useLocale();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLiquidityPage, setIsLiquidityPage] = useState(false);

  useEffect(() => {
    setIsLiquidityPage(pathname.includes("/liquidity"));
  }, [pathname]);

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
        heading: t("company.title_part1"),
        links: [
          { name: t("company.title_part1_link1"), href: "/about" },
          { name: t("company.title_part1_link2"), href: "/contact" },
          { name: t("company.title_part1_link3"), href: "/awards" },
          {
            name: t("company.title_part1_link4"),
            href: `/${locale}/press-release/66544954f5b226a0bd9b5813/665448dcf5b226a0bd9b574e/`,
          },
          { name: t("company.title_part1_link5"), href: "/careers" },
        ],
      },
    },
    {
      column: {
        heading: t("Rules.title_part2"),
        links: [
          { name: t("Rules.title_part2_link1"), href: "/client-agreement" },
          { name: t("Rules.title_part2_link2"), href: "/terms" },
          { name: t("Rules.title_part2_link3"), href: "/policy-statement" },
          { name: t("Rules.title_part2_link4"), href: "/risk-disclosure" },
          {
            name: t("Rules.title_part2_link5"),
            href: "/complaints-management",
          },
          { name: t("Rules.title_part2_link6"), href: "/cookie-policy" },
          { name: t("Rules.title_part2_link7"), href: "/policy-of-aml" },
        ],
      },
    },
    {
      column: {
        heading: t("Services.title_part3"),
        links: [
          { name: t("Services.title_part3_link1"), href: "/account-types" },
          { name: t("Services.title_part3_link2"), href: "/ib-program" },
        ],
      },
    },
    {
      column: {
        heading: t("Platform.title_part4"),
        links: [
          {
            name: t("Platform.title_part4_link1"),
            target: "_blank",
            href: "https://download.mql5.com/cdn/web/primex.broker.pty/mt5/primexbroker5setup.exe",
          },
          {
            name: t("Platform.title_part4_link2"),
            target: "_blank",
            href: "https://download.mql5.com/cdn/mobile/mt5/android?server=PrimeXBroker-Demo,PrimeXBroker-Live",
          },
          {
            name: t("Platform.title_part4_link3"),
            target: "_blank",
            href: "https://download.mql5.com/cdn/mobile/mt5/ios?server=PrimeXBroker-Live",
          },
        ],
      },
    },
    {
      column: {
        heading: t("Location.title_part5"),
        links: [
          {
            name: t("Location.title_part5_link1"),
            href: "#",
          },
          {
            name: t("Location.title_part5_link2"),
            href: "#",
          },
        ],
      },
    },
  ];

  const footerNotice = [
    {
      heading: t("footerNotice.heading_1"),
      paragraph: t("footerNotice.para_1"),
    },
    {
      heading: t("footerNotice.heading_2"),
      paragraph: t("footerNotice.para_2"),
    },
    {
      heading: t("footerNotice.heading_3"),
      paragraph: t("footerNotice.para_3"),
    },
    {
      heading: t("footerNotice.heading_4"),
      paragraph: t("footerNotice.para_4"),
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
        className={`${
          isLiquidityPage
            ? "bg-[#1d1d1d] hidden"
            : "bg-[url('https://primexcapital.s3.eu-north-1.amazonaws.com/website/homepage/live-account-gray.webp')] bg-cover bg-no-repeat bg-center"
        } relative z-0 overflow-hidden`}
      >
        <div className={`container flex p-10 flex-col md:flex-row`}>
          <div
            className={`${
              isLiquidityPage ? "md:w-full" : "md:w-[60%]"
            } w-full mb-5 md:mb-0 mx-auto`}
          >
            <h1
              className={`sectionHeading text-xl ${
                isLiquidityPage ? "text-[#ffffff]" : "text-secondary"
              } font-semibold ${
                locale === "ar"
                  ? "text-center md:text-right"
                  : "text-center md:text-left"
              }`}
            >
              {t("getStarted.get_started_title")}
            </h1>
            <p
              className={`sectionPara ${
                isLiquidityPage ? "text-[#dfdfdf]" : "text-secondary"
              } ${
                locale === "ar"
                  ? "text-center md:text-right"
                  : "text-center md:text-left"
              }`}
            >
              {t("getStarted.get_started_desc_1")}
              {t("getStarted.get_started_desc_2")}
            </p>
          </div>
          <div className="w-full md:w-[30%] flex justify-center items-center">
            <Button
              as={Link}
              href="https://client.primexbroker.com/en/register"
              size="lg"
              color="primary"
              className={`${
                isLiquidityPage ? "rounded-[12px]" : "rounded-full"
              }`}
            >
              <p className="text-secondary font-semibold">
                {t("getStarted.get_started_btn")}
              </p>
            </Button>
          </div>
        </div>
      </section>
      <footer className="bg-[#000000]">
        <div className="container flex flex-col pt-8">
          <h6 className="text-center pb-4 text-[#fff] text-xl">
            {t("logos.payment_options")}
          </h6>
          <div className="flex flex-row justify-center lg:gap-0 gap-5 lg:justify-around items-center border-b border-b-gray-500 pb-12 flex-wrap">
            {/* <p className="text-white text-sm font-[200]">{t("logos.title")}</p> */}
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
          <div className="py-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-y-4 md:gap-y-8 lg:gap-y-0 border-b border-b-gray-500 sm:text-left text-center">
            {footerLinks.map((el, index) => (
              <div
                key={index}
                className={`footer ${
                  el.column.heading === t("Location.title_part5")
                    ? "col-span-2 sm:col-span-1 xs:col-span-2"
                    : ""
                }`}
              >
                <p
                  className={`text-primary font-semibold md:pt-0 pt-5 ${
                    locale === "ar" ? "text-right" : "text-left"
                  }`}
                >
                  {el.column.heading}
                </p>

                {el.column.heading === "Platform" ? (
                  <ul
                    className={`pt-0 md:pt-2 ${
                      locale === "ar" ? "text-right" : "text-left"
                    }`}
                  >
                    {el.column.links.map((link, linkIndex) => {
                      return (
                        <li
                          key={linkIndex}
                          className={`text-white py-1 ${
                            language === "ar" ? "text-right" : "text-left"
                          }`}
                        >
                          <a target="_blank" href={link.href}>
                            {link.name}
                          </a>
                        </li>
                      );
                    })}
                  </ul>
                ) : (
                  <ul
                    className={`pt-0 md:pt-2 footer ${
                      locale === "ar" ? "text-right" : "text-left"
                    }`}
                  >
                    {el.column.links.map((link, linkIndex) => (
                      <li
                        key={linkIndex}
                        className={`text-white py-1 ${
                          language === "ar" ? "text-right" : "text-left"
                        }`}
                      >
                        <LocaleLink href={link.href}>{link.name}</LocaleLink>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
          <div className="py-10 flex flex-col md:flex-row border-b border-b-gray-500 ">
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
                src={Logo}
                alt="footer logo"
                width="150"
                height="200"
              />
            </div>
            <p className="text-white text-center text-[12px]">
              {t("footerNotice.para_5")}
            </p>
            <div className="flex gap-4 items-center justify-around">
              <Link
                href="https://www.facebook.com/primex.brokers?mibextid=LQQJ4d"
                target="_blank"
              >
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
              <Link
                href="https://www.youtube.com/channel/UC_B3x7k-gNQpDW7YEB8Lg0g"
                target="_blank"
              >
                <FaYoutube
                  color="#FFF"
                  size={30}
                  className="hover:fill-red-700 transition-all hover:translate-y-[-5px] duration-500"
                />
              </Link>
              <Link
                href="https://www.linkedin.com/company/primex-broker"
                target="_blank"
              >
                <FaLinkedinIn
                  color="#FFF"
                  size={30}
                  className="hover:fill-blue-700 transition-all hover:translate-y-[-5px] duration-500"
                />
              </Link>
              <Link
                href="https://www.instagram.com/primexcapital.en?igsh=empvdXJ3aDRlZTBn"
                target="_blank"
              >
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
          &copy; {t("copy-right")}
        </p>
      </footer>
    </>
  );
};

export default Footer;
