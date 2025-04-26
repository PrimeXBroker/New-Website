"use client";
import Banner from "@/components/products/common/Banner";
import React, { useEffect, useState } from "react";
import { useTranslations } from "next-intl";
import Features from "@/components/products/common/Features";
import GetStarted from "@/components/products/common/GetStarted";
import OpenLiveAccount from "@/components/products/common/OpenLiveAccount";
import Strategies from "@/components/products/common/Strategies";
import FAQ from "@/components/NewFaq";
import WhyTrade from "@/components/products/common/WhyTrade";
import ProductTable from "@/components/products/common/ProductTable";
import * as XLSX from "xlsx";

const StocksPage = () => {
  const t = useTranslations("stocksProduct");
  const [data, setData] = useState([]);
  const [headers, setHeaders] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("/assets/excel/stocks.xlsx");
      const arrayBuffer = await response.arrayBuffer();
      const workbook = XLSX.read(arrayBuffer, { type: "array" });
      const worksheet = workbook.Sheets[workbook.SheetNames[0]];
      const jsonData = XLSX.utils.sheet_to_json(worksheet, { header: 1 });

      setHeaders(jsonData[0]);
      setData(jsonData.slice(1));
    };

    fetchData();
  }, []);

  const getStarted = [
    {
      id: 1,
      count: t("getStarted.step1_count"),
      title_part1: t("getStarted.step1_title1"),
      title_part2: t("getStarted.step1_title2"),
    },
    {
      id: 2,
      count: t("getStarted.step2_count"),
      title_part1: t("getStarted.step2_title1"),
      title_part2: t("getStarted.step2_title2"),
    },
    {
      id: 3,
      count: t("getStarted.step3_count"),
      title_part1: t("getStarted.step3_title1"),
      title_part2: t("getStarted.step3_title2"),
    },
    {
      id: 4,
      count: t("getStarted.step4_count"),
      title_part1: t("getStarted.step4_title1"),
      title_part2: t("getStarted.step4_title2"),
    },
  ];

  const faqs = [
    {
      key: 1,
      question: t("faq.question_1"),
      answer: t("faq.answer_1"),
    },
    {
      key: 2,
      question: t("faq.question_2"),
      answer: t("faq.answer_2"),
    },
    {
      key: 3,
      question: t("faq.question_3"),
      answer: t("faq.answer_3"),
    },
    {
      key: 4,
      question: t("faq.question_4"),
      answer: t("faq.answer_4"),
    },
  ];

  const productTickers = [
    {
      tradingSymbol: "PrimeX_REST_RA||APPLE.US||APPLE.US",
      image:
        "https://primexcapital.s3.eu-north-1.amazonaws.com/website/new-instruments/stock/Stock+Icon+-+AAPL.svg",
      name: "AAPL",
      description: "Apple Inc.",
    },
    {
      tradingSymbol: "PrimeX_REST_RA||MSFT.US||MSFT.US",
      image:
        "https://primexcapital.s3.eu-north-1.amazonaws.com/website/new-instruments/stock/Stock+Icon+-+MSFT.svg",
      name: "MSFT",
      description: "Microsoft Corp.",
    },
    {
      tradingSymbol: "PrimeX_REST_RA||GOOGLE.US||GOOGLE.US",
      image:
        "https://primexcapital.s3.eu-north-1.amazonaws.com/website/new-instruments/stock/Stock+Icon+-+GOOGL.svg",
      name: "GOOGL",
      description: "Alphabet Inc.",
    },
    {
      tradingSymbol: "PrimeX_REST_RA||NVDA.US||NVDA.US",
      image:
        "https://primexcapital.s3.eu-north-1.amazonaws.com/website/new-instruments/stock/Stock+Icon+-+NVDA.svg",
      name: "NVDA",
      description: "Nvidia",
    },
  ];

  return (
    <>
      <Banner
        title_part1={t("hero.title1")}
        title_part2={t("hero.title2")}
        title_part3={t("hero.title3")}
        title_part4={t("hero.title4")}
        title_part5={t("hero.title5")}
        imgUrl="https://primexcapital.s3.eu-north-1.amazonaws.com/website/new-instruments/stock/Stocks.webp"
      />
      <ProductTable headers={headers} data={data} />
      <Features />
      <WhyTrade
        title_part1={t("whyTrade.title_part1")}
        title_part2={t("whyTrade.title_part2")}
        description={t("whyTrade.description")}
        productTickers={productTickers}
      />
      <GetStarted
        getStarted={getStarted}
        main_title1={t("getStarted.main_title1")}
        main_title2={t("getStarted.main_title2")}
      />
      <OpenLiveAccount
        title_part1={t("openLiveAccount.title_part1")}
        title_part2={t("openLiveAccount.title_part2")}
        title_part3={t("openLiveAccount.title_part3")}
        title_part4={t("openLiveAccount.title_part4")}
        description={t("openLiveAccount.description")}
      />
      <Strategies />
      <div className="pb-8 bg-p dark:bg-p-dark">
        <FAQ faqs={faqs} />
      </div>
    </>
  );
};

export default StocksPage;
