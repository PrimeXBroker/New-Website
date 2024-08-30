"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useTranslations, useLocale } from "next-intl";

const Banner = ({ setActive }) => {
  const locale = useLocale();
  const h = useTranslations("academy.hero");
  const f = useTranslations("academy.unlimitedFeatures");

  return (
    <section className="">
      <div
        style={{
          backgroundImage:
            "url('https://primexcapital.s3.eu-north-1.amazonaws.com/website/top-trader/top-trader-bg.webp')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="container flex flex-col md:flex-row justify-around pb-16">
          <div className="max-w-2xl flex flex-col justify-center items-start gap-8 md:w-[70%] pt-16">
            <h1
              className={`text-secondary text-xl md:text-3xl font-semibold ${
                locale === "ar"
                  ? "text-center md:text-right"
                  : "text-center md:text-left"
              }`}
              style={{ lineHeight: "45px", letterSpacing: "1px" }}
            >
              <span className="font-light block text-lg md:text-4xl">
                Compete to become
              </span>
              <span className="text-xl md:text-5xl font-semibold block">
                Trader of the Month
              </span>
            </h1>
            <p
              className={`text-secondary md:text-base text-light md:max-w-xl ${
                locale === "ar"
                  ? "text-center md:text-right"
                  : "text-center md:text-left"
              }`}
              style={{ letterSpacing: "0.7px" }}
            >
              Showcase your trading skills, climb the leaderboard, and become
              PrimeX Capital's Trader of the Month for a chance to win
              increadible prizes.
            </p>
            <div className="flex gap-6">
              <div className="flex flex-col">
                <Link
                  href="#"
                  className={`${
                    locale === "ar" ? "mr-3" : "ml-3"
                  } mb-1 text-xs italic`}
                >
                  Already a member?
                </Link>
                <Link
                  href="#academy-form"
                  onClick={() => setActive("Webinars")}
                  className="bg-secondary text-white border-1 border-secondary text-center px-4 py-3 rounded-full w-[280px] shadow-xl md:m-0 mx-auto"
                >
                  Join the competition Now!
                </Link>
              </div>
              <div className="flex flex-col">
                <Link
                  href="#"
                  className={`${
                    locale === "ar" ? "mr-3" : "ml-3"
                  } mb-1 text-xs italic`}
                >
                  New Here?
                </Link>
                <Link
                  href="#academy-form"
                  onClick={() => setActive("Webinars")}
                  className="bg-transparent hover:bg-secondary border-1 border-secondary text-secondary hover:text-white text-center px-4 py-3 rounded-full w-[280px] shadow-xl md:m-0 mx-auto"
                >
                  Open an Account Today!
                </Link>
              </div>
            </div>
            <Link href={""} className="text-secondary">
              *T&C applies
            </Link>
          </div>
          <div className="flex">
            <Image
              unoptimized={true}
              className="mx-auto md:m-0 block"
              src="https://primexcapital.s3.eu-north-1.amazonaws.com/website/top-trader/top-trader-banner.webp"
              alt="Banner Image"
              width="250"
              height="250"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
