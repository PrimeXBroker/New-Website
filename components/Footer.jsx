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
  FaWhatsapp,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaDownload } from "react-icons/fa6";
import CustomModal from "./Modal";
import { Button } from "@nextui-org/button";
import LocaleLink from "./LocaleLink";
import { useTranslations, useLocale } from "next-intl";
import { usePathname, useRouter } from "next/navigation";
import GetStarted from "./common/GetStarted";
import { useTheme } from "next-themes";

const Footer = () => {
  const router = useRouter();
  const pathname = usePathname();
  const { theme } = useTheme();
  const language = useLocale();
  const t = useTranslations("footer");
  const locale = useLocale();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isRegisterPage, setIsRegisterPage] = useState(false);

  useEffect(() => {
    setIsRegisterPage(pathname.includes("/registration"));
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
          { name: t("company.title_part1_link7"), href: "/primex-spreads" },
          { name: t("company.title_part1_link6"), href: "/why-choose-us" },
          { name: t("company.title_part1_link1"), href: "/about" },
          { name: t("company.title_part1_link2"), href: "/contact" },
          { name: t("company.title_part1_link3"), href: "/awards" },
          // (locale === "en" || locale === "ar") && {
          //   name: t("company.title_part1_link4"),
          //   href: `/${locale}/press-release/66544954f5b226a0bd9b5813/665448dcf5b226a0bd9b574e/`,
          // },
          // locale === "en" && {
          //   name: t("company.title_part1_link5"),
          //   href: "/careers",
          // },
        ].filter(Boolean),
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
          { name: t("Rules.title_part2_link8"), href: "/follower-agreement" },
          { name: t("Rules.title_part2_link9"), href: "/provider-agreement" },
        ],
      },
    },
    {
      column: {
        heading: t("Services.title_part3"),
        links: [
          { name: t("Services.title_part3_link1"), href: "/account-types" },
          {
            name: t("Services.title_part3_link2"),
            href: "/ib-program",
          },
          {
            name: t("Services.title_part3_link3"),
            href: "/regional-partner",
          },
          // {
          //   name: t("Services.title_part3_link4"),
          //   href: "/grey-label-partner",
          // },
          // {
          //   name: t("Services.title_part3_link5"),
          //   href: "/liquidity-providing",
          // },
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
            href: "https://download.mql5.com/cdn/web/primex.capital.ltd/mt5/primexcapital5setup.exe",
          },
          {
            name: t("Platform.title_part4_link2"),
            target: "_blank",
            href: "https://download.mql5.com/cdn/mobile/mt5/android?server=PrimeXCapital-Live",
          },
          {
            name: t("Platform.title_part4_link3"),
            target: "_blank",
            href: "https://download.mql5.com/cdn/mobile/mt5/ios?server=PrimeXCapital-Live",
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
          // {
          //   name: t("Location.title_part5_link2"),
          //   href: "#",
          // },
        ],
      },
    },
  ];

  const footerNotice = [
    {
      heading: t("footerNotice.heading_1"),
      paragraph: t("footerNotice.para_1"),
    },
    // {
    //   heading: t("footerNotice.heading_6"),
    //   paragraph: t("footerNotice.para_6"),
    // },
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
    // {
    //   id: 1,
    //   name: "master",
    //   imgUrl:
    //     "https://primexcapital.s3.eu-north-1.amazonaws.com/website/homepage/payment/master.webp",
    // },
    // {
    //   id: 2,
    //   name: "visa",
    //   imgUrl:
    //     "https://primexcapital.s3.eu-north-1.amazonaws.com/website/homepage/payment/visa.webp",
    // },
    {
      id: 3,
      name: "tether",
      imgUrl:
        "https://primexcapital.s3.eu-north-1.amazonaws.com/website/homepage/payment/tether+logo+new.svg",
    },
    {
      id: 4,
      name: "depositor",
      imgUrl:
        "https://primexcapital.s3.eu-north-1.amazonaws.com/website/homepage/payment/depositor-payment.webp",
    },
    {
      id: 5,
      name: "amex",
      imgUrl:
        "https://primexcapital.s3.eu-north-1.amazonaws.com/website/homepage/payment/amex.webp",
    },
    // {
    //   id: 6,
    //   name: "tymebank",
    //   imgUrl:
    //     "https://primexcapital.s3.eu-north-1.amazonaws.com/website/homepage/payment/tymebank.webp",
    // },
    // {
    //   id: 7,
    //   name: "fnb",
    //   imgUrl:
    //     "https://primexcapital.s3.eu-north-1.amazonaws.com/website/homepage/payment/fnb.webp",
    // },
    // {
    //   id: 8,
    //   name: "nedbank",
    //   imgUrl:
    //     "https://primexcapital.s3.eu-north-1.amazonaws.com/website/homepage/payment/nedbank.webp",
    // },
    // {
    //   id: 9,
    //   name: "standard",
    //   imgUrl:
    //     "https://primexcapital.s3.eu-north-1.amazonaws.com/website/homepage/payment/standard-bank.webp",
    // },
    // {
    //   id: 10,
    //   name: "absa",
    //   imgUrl:
    //     "https://primexcapital.s3.eu-north-1.amazonaws.com/website/homepage/payment/absa.webp",
    // },
    // {
    //   id: 11,
    //   name: "discovery",
    //   imgUrl:
    //     "https://primexcapital.s3.eu-north-1.amazonaws.com/website/homepage/payment/discovery.webp",
    // },
    // {
    //   id: 12,
    //   name: "capitec",
    //   imgUrl:
    //     "https://primexcapital.s3.eu-north-1.amazonaws.com/website/homepage/payment/capitec.webp",
    // },

    // {
    //   id: 5,
    //   name: "adv_cash",
    //   imgUrl:
    //     "https://primexcapital.s3.eu-north-1.amazonaws.com/website/homepage/payment/adv_cash.webp",
    // },
    // {
    //   id: 6,
    //   name: "perfect_money",
    //   imgUrl:
    //     "https://primexcapital.s3.eu-north-1.amazonaws.com/website/homepage/payment/perfect_money.webp",
    // },
  ];

  return (
    <>
      <div className={`${isRegisterPage ? "hidden" : ""}`}>
        <GetStarted />
      </div>
      <footer className="bg-cc dark:bg-cc-dark">
        <div className="container flex flex-col pt-8">
          <h6 className="text-center pb-4 text-tm dark:text-tm-dark text-xl">
            {t("logos.payment_options")}
          </h6>
          <div className="lg:flex flex-wrap justify-center gap-4 border-b border-b-tl dark:border-b-tl-dark pb-12 hidden">
            {/* First Row */}
            <div className="flex w-full justify-center gap-4">
              {paymentOptions.slice(0, 6).map((el) => (
                <div
                  key={el.id}
                  className="w-1/6 flex justify-center items-center"
                >
                  <Image
                    src={el.imgUrl}
                    alt={el.name}
                    width={120}
                    height={100}
                    className="object-contain"
                  />
                </div>
              ))}
            </div>
            {/* Second Row (Centered with 5 items) */}
            {/* <div className="flex w-full justify-center gap-4">
              {paymentOptions.slice(6).map((el) => (
                <div
                  key={el.id}
                  className="w-1/6 flex justify-center items-center"
                >
                  <Image
                    src={el.imgUrl}
                    alt={el.name}
                    width={120}
                    height={100}
                    className="object-contain"
                  />
                </div>
              ))}
            </div> */}
          </div>
          <div className="flex flex-wrap justify-center gap-4 border-b border-b-tl dark:border-b-tl-dark pb-12 lg:hidden">
            {paymentOptions.map((el) => (
              <div
                key={el.id}
                className={`w-1/3 sm:w-1/4 md:w-1/5 lg:w-1/6 flex justify-center items-center ${
                  el.id === 11 ? "mb-0" : "mb-3"
                }`}
              >
                <Image
                  src={el.imgUrl}
                  alt={el.name}
                  width={120}
                  height={100}
                  className="object-contain"
                />
              </div>
            ))}
          </div>
          <div className="py-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-y-4 md:gap-y-8 lg:gap-y-0 border-b border-b-tl dark:border-b-tl-dark sm:text-left text-center">
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
                  className={`text-pcp dark:text-pcp-dark font-semibold md:pt-0 pt-5 ${
                    locale === "ar" || locale === "ps" || locale === "ku"
                      ? "text-right"
                      : "text-left"
                  }`}
                >
                  {el.column.heading}
                </p>

                {el.column.heading === "Platform" ? (
                  <ul
                    className={`pt-0 md:pt-2 text-sm ${
                      locale === "ar" || locale === "ps" || locale === "ku"
                        ? "text-right"
                        : "text-left"
                    }`}
                  >
                    {el.column.links.map((link, linkIndex) => {
                      return (
                        <li
                          key={linkIndex}
                          className={`text-tm dark:text-tm-dark py-1 ${
                            language === "ar" ||
                            locale === "ps" ||
                            locale === "ku"
                              ? "text-right"
                              : "text-left"
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
                    className={`pt-0 md:pt-2 footer text-sm ${
                      locale === "ar" || locale === "ps" || locale === "ku"
                        ? "text-right"
                        : "text-left"
                    }`}
                  >
                    {el.column.links.map((link, linkIndex) => (
                      <li
                        key={linkIndex}
                        className={`text-tm dark:text-tm-dark py-1 ${
                          language === "ar" ||
                          locale === "ps" ||
                          locale === "ku"
                            ? "text-right"
                            : "text-left"
                        }`}
                      >
                        {el.column.heading === "Our Addresses" ||
                        el.column.heading === "عناويننا" ||
                        el.column.heading === "آدرس‌های ما" ||
                        el.column.heading === "ناونیشانیەکانەمان" ||
                        el.column.heading === "Adreslerimiz" ? (
                          <span>{link.name}</span>
                        ) : (
                          <LocaleLink href={link.href}>{link.name}</LocaleLink>
                        )}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
          <div className="py-10 flex flex-col md:flex-row border-b border-b-tl dark:border-b-tl-dark ">
            <div className="w-full md:w-[100%]">
              {footerNotice.map((el, index) => (
                <div key={index} className="pb-4">
                  <span className="text-tm dark:text-tm-dark text-[14px] font-semibold pr-2">
                    {el.heading}
                  </span>
                  <span className="text-tm dark:text-tm-dark text-[14px]">
                    {el.paragraph}
                  </span>
                </div>
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-5 lg:flex-row lg:gap-0 justify-between items-center py-12 flex-wrap">
            <div>
              <Image
                unoptimized={true}
                width="150"
                height="200"
                src={
                  theme === "dark"
                    ? "https://primexcapital.s3.eu-north-1.amazonaws.com/website/primex-logos/logo-white.webp"
                    : "https://primexcapital.s3.eu-north-1.amazonaws.com/website/primex-logos/logo-black.webp"
                }
                alt="Footer Logo"
                className="block sm:mx-0 mx-auto pb-6 sm:pb-0"
              />
            </div>
            <p className="text-tm dark:text-tm-dark text-center text-sm text-[12px]">
              &copy; {t("copy-right")}
            </p>
            <div className="flex gap-4 items-center justify-around">
              {/* <Link
                href={`${
                  locale === "ar"
                    ? "https://m.facebook.com/primex.capital.ar/ "
                    : "https://www.facebook.com/PrimeX.Capital.En"
                }`}
                target="_blank"
              >
                <FaFacebook
                  color="#FFF"
                  size={30}
                  className="hover:fill-blue-600 transition-all hover:translate-y-[-5px] duration-500"
                />
              </Link> */}
              <Link
                href={`${
                  locale === "ar"
                    ? "https://t.me/PrimeX_Capital_ar"
                    : locale === "ku"
                    ? "https://t.me/primex_capital_kd"
                    : "https://t.me/PrimeX_Capital"
                }`}
                target="_blank"
              >
                <FaTelegram
                  color="#FFF"
                  size={30}
                  className="fill-tm dark:fill-tm-dark hover:fill-[#28a8e9] dark:hover:fill-[#28a8e9] transition-all hover:translate-y-[-5px] duration-500"
                />
              </Link>
              <Link
                href={`${
                  locale === "ar"
                    ? "https://www.instagram.com/primexcapital.ar/"
                    : locale === "ku"
                    ? "https://www.instagram.com/primexcapital.ku/"
                    : "https://www.instagram.com/primexcapital.en/"
                }`}
                target="_blank"
              >
                <FaInstagram
                  color="#FFF"
                  size={30}
                  className="fill-tm dark:fill-tm-dark hover:fill-[#8146ba] dark:hover:fill-[#8146ba] transition-all hover:translate-y-[-5px] duration-500"
                />
              </Link>
              <Link
                href={`${
                  locale === "ar"
                    ? "https://whatsapp.com/channel/0029Vb7M9j5EawdyFPPOWh3L"
                    : locale === "ku"
                    ? "https://whatsapp.com/channel/0029VbB6OC71SWt00NiUAL1t"
                    : locale === "es"
                    ? "https://whatsapp.com/channel/0029Vb5kNFU9xVJcwh9aD90N"
                    : locale === "ps"
                    ? "https://whatsapp.com/channel/0029VbAMPjU3QxS6L63Dh01k"
                    : "https://whatsapp.com/channel/0029VbAjXdhDjiOgrjoD6o2L"
                }`}
                target="_blank"
              >
                <FaWhatsapp
                  color="#FFF"
                  size={30}
                  className="fill-tm dark:fill-tm-dark hover:fill-[#2cd46b] dark:hover:fill-[#2cd46b] transition-all hover:translate-y-[-5px] duration-500"
                />
              </Link>
              <Link
                href="https://www.youtube.com/@primex.capital"
                target="_blank"
              >
                <FaYoutube
                  color="#FFF"
                  size={30}
                  className="fill-tm dark:fill-tm-dark hover:fill-[#ff0033] dark:hover:fill-[#ff0033] transition-all hover:translate-y-[-5px] duration-500"
                />
              </Link>
              <Link
                href={`${
                  locale === "ar"
                    ? "https://x.com/PrimeXCapitalAr"
                    : "https://x.com/PrimeXCapital"
                }`}
                target="_blank"
              >
                <FaXTwitter
                  color="#FFF"
                  size={30}
                  className="fill-tm dark:fill-tm-dark hover:fill-black transition-all hover:translate-y-[-5px] duration-500"
                />
              </Link>
              <Link
                href="https://www.linkedin.com/company/primexcapital/"
                target="_blank"
              >
                <FaLinkedinIn
                  color="#FFF"
                  size={30}
                  className="fill-tm dark:fill-tm-dark hover:fill-[#0a66c2] dark:hover:fill-[#0a66c2] transition-all hover:translate-y-[-5px] duration-500"
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
      </footer>
    </>
  );
};

export default Footer;
