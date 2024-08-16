"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useLocale, useTranslations } from "next-intl";
import axios from "axios";
import Moment from "react-moment";
import AnalysisNewsBody from "./AnalysisNewsBody";

const ExpertAnalysisDetail = ({ slug }) => {
  const locale = useLocale();
  const t = useTranslations("marketNewsDetail");
  const [detail, setDetail] = useState(null);
  const [related, setRelated] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchRelatedBlogs = async () => {
    console.log(detail._id, "detail_id");
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
      if (res?.data?.success) {
        setDetail(res?.data?.data);
        setLoading(false);
      }
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  console.log("slug content", slug);

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
        <div className="inline-block h-12 w-12 animate-spin rounded-full border-4 border-solid border-primary border-e-transparent align-[-0.125em] text-surface motion-reduce:animate-[spin_1.5s_linear_infinite] dark:text-white">
          <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
            Loading...
          </span>
        </div>
      </div>
    );
  }

  return (
    <section className="container py-20">
      <div className="grid grid-cols-12">
        <div className="lg:col-span-8 md:col-span-12 col-span-12">
          <AnalysisNewsBody slug={slug} />
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
                {t("readyToInvest.title")}
              </h6>
            </div>
            <div className="blog-invest-box-text mt-4">
              <p className="text-center text-sm">
                {t("readyToInvest.description")}
              </p>
            </div>
            <button className="bg-primary w-full h-10 rounded-xl mt-6 text-secondary font-semibold">
              <Link
                href={`https://client.primexbroker.com/${locale}/register`}
                target="_blank"
              >
                {t("readyToInvest.btnText")}
              </Link>
            </button>
          </div>
          <div
            className="bg-white px-6 py-8 mt-8"
            style={{ boxShadow: "0 0 5px rgba(0, 0, 0, .2)" }}
          >
            <div className="widget-title relative mb-10">
              <h2 className="text-2xl text-black font-semibold">
                {t("relatedBlogs.title")}
              </h2>
            </div>
            <div>
              {related.map((blog, i) => (
                <Link href={`/${locale}/market-news/${blog.slug}`} key={i}>
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
                          {locale === "ar" ? blog.titleAr : blog.titleEn}
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

export default ExpertAnalysisDetail;
