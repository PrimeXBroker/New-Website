"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useLocale, useTranslations } from "next-intl";
import axios from "axios";
import Moment from "react-moment";
import { getRegisterUrl } from "@/utilities/getRegisterUrl";
import CustomYellowButton from "@/components/common/CustomYellowButton";
import { useParams, useRouter } from "next/navigation";
import BlogsNewsBody from "./BlogsNewsBody";

const BlogDetail = () => {
  const { slug } = useParams();
  const router = useRouter();
  const locale = useLocale();
  const t = useTranslations("marketNewsDetail");
  const [detail, setDetail] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchdetails = async () => {
    setLoading(true);
    try {
      const res = await axios.get(
        `https://primexbroker.com/api/fetch/one/all-blog/${slug}`,
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

  const handleClick = () => {
    const url = getRegisterUrl(locale);
    router.push(url);
  };

  return (
    <section className="bg-p dark:bg-p-dark py-20">
      <div className="container">
        <div className="flex justify-center">
          <div className="w-full lg:w-7/12 md:w-full">
            <BlogsNewsBody slug={slug} />
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
              onClick={handleClick}
              className="py-5 px-9 md:py-4 md:px-7 lg:py-4 lg:px-9 text-lg w-full sm:w-auto justify-between sm:justify-center"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogDetail;
