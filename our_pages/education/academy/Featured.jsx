"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import { useLocale, useTranslations } from "next-intl";
import Link from "next/link";
import axios from "axios";
import local from "@next/font/local";

const Featured = () => {
  const locale = useLocale();
  const t = useTranslations("academy.featured");
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [analysisBlogs, setAnalysisBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [marketBlogs, setMarketBlogs] = useState([
    {
      titleEn: "Market News",
      titleAr: "أخبار السوق",
      pagetitle: "market-news",
      enid: "664dd9c93f02939fcd48959e",
      arid: "664de39c3f02939fcd48a1d0",
      slugEn: "all",
      slugAr: "news",
    },
    {
      titleEn: "Starting Gateway",
      titleAr: "بوابتك للبداية",
      enid: "66532f1079afa70a9ae6302e",
      arid: "66532f4e79afa70a9ae6303e",
      slugEn: "starting-gateway-en",
      slugAr: "starting-gateway-ar",
    },
  ]);

  const handleIconEnter = (index) => {
    setHoveredIndex(index);
  };
  const handleIconLeave = () => {
    setHoveredIndex(null);
  };

  useEffect(() => {
    const fetchAnalysisBlogs = async () => {
      try {
        setLoading(true);
        const response = await axios.get(
          `https://primexbroker.com/api/fetch/publish/market-news/1/2`
        );
        if (response.data.success) {
          setAnalysisBlogs(response.data.data);
          setLoading(false);
        }
      } catch (error) {
        console.error(error);
        setLoading(false);
      }
    };

    fetchAnalysisBlogs();
  }, []);

  const formatTitleForURL = (titleEn) =>
    titleEn.toLowerCase().replace(/\s+/g, "-");

  return (
    <section className="bg-[#e4e5e6] pt-12 pb-16">
      <div className="container">
        <div className="flex flex-row gap-8 justify-center flex-wrap xl:flex-wrap">
          {loading ? (
            <div className="w-full flex justify-center">
              <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-secondary border-e-transparent align-[-0.125em] text-surface motion-reduce:animate-[spin_1.5s_linear_infinite] dark:text-white">
                <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
                  Loading...
                </span>
              </div>
            </div>
          ) : (
            analysisBlogs.map((analysis, index) => (
              <Link
                href={`/${locale}/expert-analysis/${formatTitleForURL(
                  analysis.titleEn
                )}/${analysis._id}/`}
                onMouseEnter={() => handleIconEnter(index)}
                onMouseLeave={handleIconLeave}
                key={index}
                className={`flex flex-col justify-center bg-cover bg-center cursor-pointer rounded-2xl shadow-2xl w-[45%] min-h-[180px] group transform translate-y-[1rem] hover:translate-y-0 transition-transform duration-500`}
                style={{
                  backgroundImage: `url(${
                    index === 0
                      ? locale === "ar"
                        ? "https://primexcapital.s3.eu-north-1.amazonaws.com/website/education/academy/fundamental-analysis-ar.webp"
                        : "https://primexcapital.s3.eu-north-1.amazonaws.com/website/education/academy/fundamental-analysis.webp"
                      : locale === "ar"
                      ? "https://primexcapital.s3.eu-north-1.amazonaws.com/website/education/academy/technical-analysis-ar.webp"
                      : "https://primexcapital.s3.eu-north-1.amazonaws.com/website/education/academy/technical-analysis.webp"
                  })`,
                }}
              >
                <h2
                  className={`sectionHeading text-lg md:text-3xl text-white group-hover:text-primary w-[140px] md:w-[234px] ${
                    locale === "ar"
                      ? "text-right pr-4 md:pr-7"
                      : "text-left pl-4 md:pl-7"
                  }`}
                >
                  {locale === "ar" ? analysis?.titleAr : analysis?.titleEn}
                </h2>
              </Link>
            ))
          )}
          {loading ? (
            <div className="w-full flex justify-center">
              <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-secondary border-e-transparent align-[-0.125em] text-surface motion-reduce:animate-[spin_1.5s_linear_infinite] dark:text-white">
                <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
                  Loading...
                </span>
              </div>
            </div>
          ) : (
            marketBlogs.map((market, index) => (
              <>
                <Link
                  href={`/${locale}/${formatTitleForURL(market.titleEn)}/${
                    market.slugEn
                  }/${market.slugAr}`}
                  onMouseEnter={() => handleIconEnter(index)}
                  onMouseLeave={handleIconLeave}
                  className="flex flex-col justify-center bg-cover bg-center cursor-pointer rounded-2xl shadow-2xl w-[45%] min-h-[180px] group transform translate-y-[1rem] hover:translate-y-0 transition-transform duration-500"
                  style={{
                    backgroundImage: `url(${
                      index === 0
                        ? locale === "ar"
                          ? "https://primexcapital.s3.eu-north-1.amazonaws.com/website/education/academy/market-news-ar.webp"
                          : "https://primexcapital.s3.eu-north-1.amazonaws.com/website/education/academy/market-news.webp"
                        : locale === "ar"
                        ? "https://primexcapital.s3.eu-north-1.amazonaws.com/website/education/academy/starting-gateway-ar.webp"
                        : "https://primexcapital.s3.eu-north-1.amazonaws.com/website/education/academy/starting-gateway.webp"
                    })`,
                  }}
                >
                  <h2
                    className={`sectionHeading text-lg md:text-3xl text-white group-hover:text-primary  w-[100px] md:w-[170px] ${
                      locale === "ar"
                        ? "text-right pr-4 md:pr-7"
                        : "text-left pl-4 md:pl-7"
                    }`}
                  >
                    {locale === "ar" ? market?.titleAr : market?.titleEn}
                  </h2>
                </Link>
              </>
            ))
          )}
        </div>
      </div>
    </section>
  );
};

export default Featured;
