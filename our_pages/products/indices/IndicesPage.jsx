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

const IndicesPage = () => {
  const t = useTranslations("indicesProduct");
  const [data, setData] = useState([]);
  const [headers, setHeaders] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("/assets/excel/indices.xlsx");
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
    {
      key: 5,
      question: t("faq.question_5"),
      answer: t("faq.answer_5"),
    },
  ];

  const productTickers = [
    {
      tradingSymbol: "PrimeX_REST_RA||US500.spot||US500.spot",
      image:
        "https://primexcapital.s3.eu-north-1.amazonaws.com/website/new-instruments/indices/Indices+Icon+-+US500.svg",
      name: "US500",
      description: "S&P 500",
    },
    {
      tradingSymbol: "PrimeX_REST_RA||US30.spot||US30.spot",
      image:
        "https://primexcapital.s3.eu-north-1.amazonaws.com/website/new-instruments/indices/Indices+Icon+-+US30.svg",
      name: "US30",
      description: "Dow Jones",
    },
    {
      tradingSymbol: "PrimeX_REST_RA||US100.spot||US100.spot",
      image:
        "https://primexcapital.s3.eu-north-1.amazonaws.com/website/new-instruments/indices/Indices+Icon+-+US100.svg",
      name: "US100",
      description: "NASDAQ 100",
    },
    {
      tradingSymbol: "PrimeX_REST_RA||UK100.spot||UK100.spot",
      image:
        "https://primexcapital.s3.eu-north-1.amazonaws.com/website/new-instruments/indices/Indices+Icon+-+UK100.svg",
      name: "UK100",
      description: "FTSE 100",
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
        imgUrl="https://primexcapital.s3.eu-north-1.amazonaws.com/website/new-instruments/indices/Indices.webp"
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
      <div className="pb-8 bg-[#000000]">
        <FAQ faqs={faqs} />
      </div>
    </>
  );
};

export default IndicesPage;
