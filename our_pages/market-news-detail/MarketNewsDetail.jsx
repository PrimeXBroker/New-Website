"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import NewsBody from "./NewsBody";
import { useLocale, useTranslations } from "next-intl";
import axios from "axios";
import Moment from "react-moment";
import { getRegisterUrl } from "@/utilities/getRegisterUrl";

const MarketNewsDetail = ({ slug, date }) => {
  const locale = useLocale();
  const t = useTranslations("marketNewsDetail");
  const [detail, setDetail] = useState(null);
  const [related, setRelated] = useState([]);

  const convertToKebabCase = (str) => {
    return str.toLowerCase().replace(/\s+/g, "-");
  };

  const fetchRelatedBlogs = async () => {
    const res = await axios.get(
      `https://primexbroker.com/api/fetch/publish/related/blogs/1/3/${detail.category._id}/${detail._id}`
    );
    if (res?.data?.success) {
      setRelated(res?.data?.data);
      // setLoading2(false);
    }
  };

  const fetchdetails = async () => {
    // setLoading(true);
    try {
      const res = await axios.get(
        `https://primexbroker.com/api/fetch/one/blog/${slug}`,
        { cache: "no-store" }
      );
      if (res?.data?.success) {
        setDetail(res?.data?.data);
      }
    } catch (error) {
      // setLoading(false);
      console.log(error);
    }
  };

  useEffect(() => {
    fetchdetails();
  }, []);

  useEffect(() => {
    if (detail) {
      fetchRelatedBlogs();
    }
  }, [detail]);

  return (
    <section
      className="bg-[#000000] py-20"
      dir={detail?.language === "ar" ? "rtl" : "ltr"}
    >
      <div className="container">
        <div className="grid grid-cols-12">
          <div className="lg:col-span-12 md:col-span-12 col-span-12">
            <NewsBody slug={slug} date={date} />
          </div>
        </div>
        <div className="bg-[#111111] border-2 border-[#1D1D1D] rounded-[20px] flex p-10 flex-col md:flex-row mb-10 mt-20 relaed-blogs-bg">
          <div className="lg:w-[70%] w-full mb-5 md:mb-0">
            <h2
              className={`text-2xl sm:text-3xl lg:text-4xl font-semibold text-[#ffffff] mb-3 ${
                detail?.language === "ar" || locale === "fa" || locale === "kd"
                  ? "text-center md:text-right"
                  : "text-center md:text-left"
              }`}
            >
              {detail?.language === "ar"
                ? "هل أنت مستعد للاستثمار؟"
                : "Ready to Invest"}
            </h2>
            <p
              className={` text-[#c6c6c6] text-sm sm:text-base ${
                detail?.language === "ar" || locale === "fa" || locale === "kd"
                  ? "text-center md:text-right"
                  : "text-center md:text-left"
              }`}
            >
              {detail?.language === "ar"
                ? "افتح حسابًا حقيقيًا وابدأ الاستثمار الآن! تداول أكثر من 500 من الأدوات المالية العالمية دون أي متاعب."
                : "Open live account & Start investing NOW! Trade 330+ global assets hassle-free."}
            </p>
          </div>
          <div className="w-full lg:w-[30%] flex justify-center md:justify-end items-center">
            <button className="custom-button py-[16px] px-[46px]">
              <a
                href={getRegisterUrl(locale)}
                target="_blank"
                className="text-[#111111] font-semibold"
              >
                {detail?.language === "ar" ? "ابدأ" : "Get Started"}
              </a>
            </button>
          </div>
        </div>
        <div className="pt-10">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-[#FED100] text-center">
            {t("relatedBlogs.title1")}
            <span className="text-[#ffffff]"> {t("relatedBlogs.title2")}</span>
          </h2>
          <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 px-4 mt-10">
            {related.map((blog, i) => (
              <Link
                href={`/${locale}/${convertToKebabCase(
                  blog?.category?.title
                )}/${blog.slug}`}
                key={i}
                className="group h-full bg-[#111111] rounded-xl"
              >
                <div className="single-blog-thumb overflow-hidden transition duration-700 ease-in-out rounded-xl flex flex-col h-full">
                  <div>
                    <img
                      src={blog.image}
                      alt={blog?.title}
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
                          date={
                            blog?.postedOn ? blog?.postedOn : blog?.createdOn
                          }
                          format={
                            locale === "ar" ? "Do MMM YYYY" : "Do MMM YYYY"
                          }
                        />
                      </p>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MarketNewsDetail;
