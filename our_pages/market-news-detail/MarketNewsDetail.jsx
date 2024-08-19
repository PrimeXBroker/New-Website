"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import NewsBody from "./NewsBody";
import { useLocale, useTranslations } from "next-intl";
import axios from "axios";
import Moment from "react-moment";
const MarketNewsDetail = ({ slug }) => {
  const locale = useLocale();
  const t = useTranslations("marketNewsDetail");
  const [detail, setDetail] = useState(null);
  const [related, setRelated] = useState([]);

  const fetchRelatedBlogs = async () => {
    const res = await axios.get(
      `https://primexbroker.com/api/fetch/publish/related/blogs/1/3/${detail.category._id}/${detail._id}`
    );
    if (res?.data?.success) {
      console.log(res?.data?.data, "blogfryyy");
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
        console.log(res?.data, "parsing");
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
      className="container py-20"
      dir={detail?.language === "ar" ? "rtl" : "ltr"}
    >
      <div className="grid grid-cols-12">
        <div className=" lg:col-span-8 md:col-span-12 col-span-12">
          <NewsBody slug={slug} />
        </div>
        <div className="lg:col-span-4 col-span-12 px-6">
          <div className="border-1 border-accent p-[30px]">
            <div className="flex justify-center">
              <img
                src="https://primexcapital.s3.eu-north-1.amazonaws.com/website/market-news/profile-img.png"
                alt=""
                className="w-[65%]"
              />
            </div>
            <div className="mt-5">
              <h6 className="text-center text-base font-semibold text-black">
                {detail?.language === "ar"
                  ? "هل أنت مستعد للاستثمار؟"
                  : "Ready to Invest"}
              </h6>
            </div>
            <div className="blog-invest-box-text mt-4">
              <p className="text-center text-sm">
                {detail?.language === "ar"
                  ? "افتح حسابًا حقيقيًا وابدأ الاستثمار الآن! تداول أكثر من 500 من الأدوات المالية العالمية دون أي متاعب."
                  : "Open live account & Start investing NOW! Trade 500+ global assets hassle-free."}
              </p>
            </div>
            <button className="bg-primary w-full h-10 rounded-xl mt-6 text-secondary font-semibold">
              <Link
                href={`https://client.primexbroker.com/${locale}/register`}
                target="_blank"
              >
                {detail?.language === "ar" ? "ابدأ" : "GET STARTED"}
              </Link>
            </button>
          </div>
          <div
            className="bg-white px-6 py-8 mt-8"
            style={{ boxShadow: "0 0 5px rgba(0, 0, 0, .2)" }}
          >
            <div className="widget-title relative mb-10">
              <h2 className="text-2xl text-black font-semibold">
                {detail?.language === "ar" ? "مقالات ذات صلة" : "Related Blogs"}
              </h2>
            </div>

            <div>
              {related.map((blog, i) => (
                <Link
                  href={`/${locale}/market-news-detail/${blog.slug}`}
                  key={i}
                >
                  <div className="single-blog-thumb group overflow-hidden transition duration-700  mb-2 ease-in-out">
                    <div key={i} mb-2>
                      <img
                        src={blog.image}
                        alt="PrimeX Capital"
                        className="w-full overflow-hidden transition duration-700 ease-in-out transform group-hover:scale-110"
                      />
                    </div>
                    <div className="px-3 py-5 group-hover:bg-secondary transition duration-700 ease-in-out">
                      <div className="mb-3">
                        <p className="text-black text-sm group-hover:text-white transition duration-700 ease-in-out">
                          <Moment
                            date={blog?.createdOn}
                            format="Do MMMM YYYY"
                          />
                        </p>
                      </div>
                      <div>
                        <h4 className="text-xl font-semibold text-black group-hover:text-primary transition duration-700 ease-in-out">
                          {blog.title}
                        </h4>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MarketNewsDetail;
