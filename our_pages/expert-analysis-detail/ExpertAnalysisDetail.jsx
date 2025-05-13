"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useLocale, useTranslations } from "next-intl";
import axios from "axios";
import Moment from "react-moment";
import AnalysisNewsBody from "./AnalysisNewsBody";
import { getRegisterUrl } from "@/utilities/getRegisterUrl";
import CustomYellowButton from "@/components/common/CustomYellowButton";

const ExpertAnalysisDetail = ({ slug }) => {
  const locale = useLocale();
  const t = useTranslations("marketNewsDetail");
  const [detail, setDetail] = useState(null);
  const [related, setRelated] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchRelatedBlogs = async () => {
    const res = await axios.get(
      `https://primexbroker.com/api/fetch/publish/related/market-news/1/3/${detail._id}`
    );
    if (res?.data?.success) {
      setRelated(res?.data?.data);
    }
  };

  const fetchdetails = async () => {
    setLoading(true);
    try {
      const res = await axios.get(
        `https://primexbroker.com/api/fetch/one/market-news/${slug}`,
        { cache: "no-store" }
      );
      console.log(res?.data?.data, "res?.data?.data");
      if (res?.data?.success) {
        setDetail(res?.data?.data);
        setLoading(false);
      }
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  useEffect(() => {
    if (slug) {
      fetchdetails();
    }
  }, []);

  useEffect(() => {
    if (slug) {
      fetchdetails();
    }
  }, [slug]);

  useEffect(() => {
    if (detail) {
      fetchRelatedBlogs();
    }
  }, [detail]);

  if (loading) {
    return (
      <div className="flex items-center justify-center my-48">
        <div className="inline-block h-12 w-12 animate-spin rounded-full border-4 border-solid border-pcp dark:border-pcp-dark border-e-transparent align-[-0.125em] text-surface motion-reduce:animate-[spin_1.5s_linear_infinite] text-tm dark:text-tm-dark">
          <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
            Loading...
          </span>
        </div>
      </div>
    );
  }

  return (
    <section className="bg-p dark:bg-p-dark py-20">
      <div className="container">
        <div className="grid grid-cols-12">
          <div className="lg:col-span-12 md:col-span-12 col-span-12">
            <AnalysisNewsBody slug={slug} />
          </div>
        </div>
        <div className="bg-cc dark:bg-cc-dark rounded-[20px] flex p-10 flex-col md:flex-row mb-10 mt-20 relaed-blogs-bg">
          <div className="lg:w-[70%] w-full mb-5 md:mb-0">
            <h2
              className={`text-2xl sm:text-3xl lg:text-4xl font-semibold text-tm dark:text-tm-dark mb-3 ${
                locale === "ar" || locale === "ku"
                  ? "text-center md:text-right"
                  : "text-center md:text-left"
              }`}
            >
              {locale === "ar"
                ? "هل أنت مستعد للاستثمار؟"
                : locale === "ku"
                ? "ئامادە بۆ سەرمایەکەردن"
                : "Ready to Invest"}
            </h2>
            <p
              className={` text-ts dark:text-ts-dark text-sm sm:text-base ${
                locale === "ar" || locale === "ku"
                  ? "text-center md:text-right"
                  : "text-center md:text-left"
              }`}
            >
              {locale === "ar"
                ? "افتح حسابًا حقيقيًا وابدأ الاستثمار الآن! تداول أكثر من 500 من الأدوات المالية العالمية دون أي متاعب."
                : locale === "ku"
                ? "حسابە کە بەرەوە بکە و ئێستا سەرمایەکەردن پەڕە بکە! 330+ دارایی جیهانی بە بێ مەشقی فەرمی فڕۆشە."
                : "Open live account & Start investing NOW! Trade 330+ global assets hassle-free."}
            </p>
          </div>
          <div className="w-full lg:w-[30%] flex justify-center md:justify-end items-center">
            <CustomYellowButton
              title={
                locale === "ar"
                  ? "ابدأ"
                  : locale === "ku"
                  ? "دەست پێ بکە"
                  : "Get Started"
              }
              onClick={() => window.open(getRegisterUrl(locale))}
              className="py-5 px-9 md:py-4 md:px-7 lg:py-4 lg:px-9 text-lg w-full sm:w-auto justify-between sm:justify-center"
            />
          </div>
        </div>
        {/* <div className="pt-10">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-[#FED100] text-center">
            {t("relatedBlogs.title1")}
            <span className="text-[#ffffff]"> {t("relatedBlogs.title2")}</span>
          </h2>
          <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 px-4 mt-10">
            {related.map((blog, i) => (
              <Link
                href={`/${locale}/market-news-detail/${blog.slug}`}
                key={i}
                className="group h-full bg-[#111111] rounded-xl"
              >
                <div className="single-blog-thumb overflow-hidden transition duration-700 ease-in-out rounded-xl flex flex-col h-full">
                  <div>
                    <img
                      src={blog.image}
                      alt= {blog?.title}
                      className="w-full overflow-hidden transition duration-700 ease-in-out transform group-hover:scale-110"
                    />
                  </div>
                  <div className="px-3 py-5 transition duration-700 ease-in-out">
                    <div>
                      <h4 className="text-xl font-semibold text-[#F9F9F9] group-hover:text-[#FED100] transition duration-700 ease-in-out">
                        {blog?.title}
                      </h4>
                    </div>
                    <div className="mt-3">
                      <p className="text-[#C6C6C6] text-sm group-hover:text-white transition duration-700 ease-in-out">
                        <Moment
                          date={blog?.createdOn}
                          format={locale === "ar" ? "YYYY/MM/DD" : "DD/MM/YYYY"}
                        />
                      </p>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default ExpertAnalysisDetail;
