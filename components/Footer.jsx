import Image from "next/image";
import Link from "next/link";
import {
  FaFacebook,
  FaYoutube,
  FaLinkedinIn,
  FaInstagram,
  FaTelegram,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const footerLinks = [
  {
    column: {
      heading: "Company",
      links: [
        { name: "about us", href: "#" },
        { name: "Contact us", href: "#" },
        { name: "Awards", href: "#" },
        { name: "Press release", href: "#" },
        { name: "Careers", href: "#" },
      ],
    },
  },
  {
    column: {
      heading: "Rules",
      links: [
        { name: "Privacy Policy", href: "#" },
        { name: "Risk Disclosure", href: "#" },
        { name: "Client Agreement", href: "#" },
        { name: "Terms and Conditions", href: "#" },
      ],
    },
  },
  {
    column: {
      heading: "Services",
      links: [
        { name: "Account Types", href: "#" },
        { name: "Introducing Brokers", href: "#" },
        { name: "Instrumentsy", href: "#" },
      ],
    },
  },
  {
    column: {
      heading: "Platform",
      links: [
        { name: "MT5 for Desktop", href: "#" },
        { name: "MT5 for Android", href: "#" },
        { name: "MT5 for IOS", href: "#" },
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
        { name: "UAE Rep. Office: Office 2401, Westburry Tower", href: "#" },
        { name: "1, Business Bay, Dubai, UAE.", href: "#" },
      ],
    },
  },
];

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
    heading: "Restricted Regions:",
    paragraph:
      "PrimeX Broker PTY LTD does not provide services for citizens/residents of the United States, Canada, Cuba, Myanmar, North Korea, Iran. The services of PrimeX Broker PTY LTD are not intended for distribution to, or use by, any person in any country or jurisdiction where such distribution or use would be contrary to local law or regulation.",
  },
  {
    heading: "Risk Warning:",
    paragraph:
      "Trading Forex and Leveraged Financial Instruments involves significant risk and can result in the loss of your invested capital. You should not invest more than you can afford to lose and should ensure that you fully understand the risks involved.",
  },
];

const Footer = () => {
  return (
    <footer className="bg-secondary">
      <div className="container flex flex-col pt-10">
        <div className="flex flex-col sm:flex-row justify-between pb-10 border-b border-b-accent">
          <div>
            <Image
              className="block sm:mx-0 mx-auto pb-6 sm:pb-0"
              src="/images/logos/logo.svg"
              alt="footer logo"
              width="150"
              height="200"
            />
          </div>
          <div className="flex gap-4 items-center justify-around">
            <Link href="#">
              <FaFacebook color="#FFF" size={25} />
            </Link>
            <Link href="#">
              <FaXTwitter color="#FFF" size={25} />
            </Link>
            <Link href="#">
              <FaYoutube color="#FFF" size={25} />
            </Link>
            <Link href="#">
              <FaLinkedinIn color="#FFF" size={25} />
            </Link>
            <Link href="#">
              <FaInstagram color="#FFF" size={25} />
            </Link>
            <Link href="#">
              <FaTelegram color="#FFF" size={25} />
            </Link>
          </div>
        </div>
        <div className="py-10 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 border-b border-b-accent sm:text-left text-center">
          {footerLinks.map((el, index) => (
            <div key={index}>
              <p className="text-primary font-semibold md:pt-0 pt-5">
                {el.column.heading}
              </p>
              <ul className="pt-0 md:pt-2">
                {el.column.links.map((el, index) => (
                  <Link key={index} href={el.href}>
                    <li className="text-white py-1">{el.name}</li>
                  </Link>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="py-10 flex flex-col md:flex-row">
          <div className="md:w-[30%] w-full flex flex-col justify-between">
            <div>
              <p className="text-white text-center md:text-left text-[13px] font-semibold">
                We Accept:
              </p>
              <div className="flex flex-col items-center sm:justify-center sm:flex-row md:flex-col md:items-start md:pb-0 pb-4">
                <div className="flex gap-2">
                  <Image
                    unoptimized={true}
                    src="/images/payment/visa.gif"
                    alt="visa"
                    width="100"
                    height="64"
                  />
                  <Image
                    src="/images/payment/perfect_money.svg"
                    alt="perfect money"
                    width="100"
                    height="64"
                  />
                </div>
                <div className="flex gap-4">
                  <Image
                    src="/images/payment/advcash.svg"
                    alt="adv"
                    width="100"
                    height="64"
                  />
                  <Image
                    src="/images/payment/tether.svg"
                    alt="tether"
                    width="100"
                    height="64"
                  />
                </div>
              </div>
            </div>
            <div>
              <p className="pb-5 text-white text-[13px] md:text-left">
                Trading CFDs and FX Options <br className="hidden md:block" />{" "}
                entail risk and could result in{" "}
                <br className="hidden md:block" /> the loss of your capital
              </p>
            </div>
          </div>
          <div className="w-full md:w-[70%]">
            {footerNotice.map((el, index) => (
              <div key={index} className="pb-4">
                <h2 className="text-primary text-[15px] font-semibold">
                  {el.heading}
                </h2>
                <p className="text-white text-[13px]">{el.paragraph}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
