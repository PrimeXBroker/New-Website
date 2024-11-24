"use client";
import Image from "next/image";
import StatsCard from "./StatsCard";
import { useLocale, useTranslations } from "next-intl";
import Link from "next/link";
import { getRegisterUrl } from "@/utilities/getRegisterUrl";

const Banner = () => {
  const locale = useLocale();
  const t = useTranslations("home.hero");
  const s = useTranslations("home.stats");

  const statsData = [
    {
      title: s("stat1.title"),
      value1: s("stat1.value1"),
      icon: "https://primexcapital.s3.eu-north-1.amazonaws.com/website/home/Served+Clients.svg",
    },
    {
      title: s("stat2.title"),
      value1: s("stat2.value1"),
      value2: s("stat2.value2"),
      icon: "https://primexcapital.s3.eu-north-1.amazonaws.com/website/home/Paid-up+Capital.svg",
    },
    {
      title: s("stat3.title"),
      value1: s("stat3.value1"),
      icon: "https://primexcapital.s3.eu-north-1.amazonaws.com/website/home/Introducing+Brokers.svg",
    },
    {
      title: s("stat4.title"),
      value1: s("stat4.value1"),
      value2: s("stat4.value2"),
      icon: "https://primexcapital.s3.eu-north-1.amazonaws.com/website/home/Daily+Trades.svg",
    },
  ];

  return (
    <section className="bg-[url('https://primexcapital.s3.eu-north-1.amazonaws.com/website/home/World+map+hero+bg.webp')] h-[760px] bg-center bg-no-repeat bg-cover pt-28">
      <div className="text-center text-[#ffffff] space-y-5">
        <Link
          href={"https://www.trustpilot.com/review/primexbroker.com"}
          target="_blank"
        >
          <div className="rounded-[8px] border-2 border-[#222222] inline-flex items-center text-sm">
            <div className="bg-[#1d1d1d] px-4 py-2">
              <Image
                unoptimized={true}
                src="https://primexcapital.s3.eu-north-1.amazonaws.com/website/home/trustpilot-logo+.svg"
                alt="Trustpilot"
                width={100}
                height={100}
                className="w-[70px] md:w-[100px]"
              />
            </div>
            <div className="px-4">
              <span className="text-xs md:text-base"> {t("review")}</span>
            </div>
          </div>
        </Link>
        <h1 className="text-4xl md:text-4xl lg:text-5xl font-bold text-[#ffffff]">
          {t("title")}
        </h1>
        <p className="text-base md:text-lg lg:text-xl text-[#c6c6c6]">
          {t("desc")}
        </p>
        <div className="px-5">
          <button
            onClick={() => window.open(getRegisterUrl(locale))}
            className="py-[18px] px-[48px] font-semibold mt-5 w-full md:w-auto custom-button"
          >
            {t("btnTxt")}
          </button>
        </div>
      </div>
      <div className="hidden md:block">
        <StatsCard stats={statsData} />
      </div>
    </section>
  );
};

export default Banner;
