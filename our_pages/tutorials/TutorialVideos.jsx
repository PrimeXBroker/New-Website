"use client";
import { Pagination } from "@nextui-org/react";
import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import { BsPlayCircleFill } from "react-icons/bs";
import axios from "axios";
import moment from "moment";

const TutorialVideos = () => {
  const locale = useLocale();
  const t = useTranslations("tutorials.tradingTutorials");
  const [activeTab, setActiveTab] = useState("All");
  const [videos, setVideos] = useState([]);
  const [pagination, setPagination] = useState({});
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchCategories = async () => {
    try {
      const response = await axios.get(
        "https://primexbroker.com/api/fetch/all/lesson/categories",
        { cache: "no-store" }
      );
      if (response.data.success) {
        setCategories([
          { titleEn: "All", titleAr: "الكل", id: "All" },
          ...response.data.data.map((category) => ({
            titleEn: category.titleEn,
            titleAr: category.titleAr,
            id: category._id,
          })),
        ]);
      }
    } catch (error) {
      console.error("Error fetching categories:", error);
    }
  };

  const fetchLessons = async (category = "All", page = 1, limit = 9) => {
    setLoading(true);
    try {
      const categoryId = category === "All" ? "All" : category;
      const response = await axios.get(
        `https://primexbroker.com/api/fetch/all/tutorials/${page}/${limit}/${categoryId}`,
        { cache: "no-store" }
      );

      if (response.data.success) {
        setVideos(response.data.data);
        setPagination(response.data.pagination);
      } else {
        setVideos([]);
      }
    } catch (error) {
      console.error("Error fetching lessons:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  useEffect(() => {
    fetchLessons(activeTab);
  }, [activeTab]);

  const handleTabChange = (catId) => {
    setActiveTab(catId);
    fetchLessons(catId);
  };

  return (
    <section
      className="bg-p dark:bg-p-dark text-tm dark:text-tm-dark py-16 sm:py-28"
      dir={locale === "ar" ? "rtl" : "ltr"}
    >
      <div className="container">
        <div className="text-center md:text-center mb-10">
          <h2 className="text-pcp dark:text-pc-dark text-3xl sm:text-3xl lg:text-4xl font-bold uppercase">
            {t("title_1")}
            <span className="text-tm dark:text-tm-dark">{t("title_2")}</span>
          </h2>
          <p className="text-sm sm:text-base lg:text-lg mt-2 md:w-[75%] mx-auto text-ts dark:text-ts-dark">
            {t("description")}
          </p>
        </div>
        <div className="w-full flex flex-wrap justify-center bg-cc dark:bg-cc-dark border border-e2 dark:border-e2-dark mb-10 rounded-lg p-2 gap-y-2">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => handleTabChange(cat.id)}
              className={`w-full md:w-1/2 text-sm sm:text-base font-normal rounded-[5px] px-2 md:px-4 py-2 md:py-3 ${
                activeTab === cat.id
                  ? "bg-tm dark:bg-tm-dark text-nw dark:text-nb"
                  : "bg-transparent text-tm dark:text-tm-dark"
              }`}
            >
              {locale === "ar" ? cat.titleAr : cat.titleEn}
            </button>
          ))}
        </div>
        {loading ? (
          <div className="flex justify-center items-center min-h-[20vh] bg-p dark:bg-p-dark">
            <div className="ellipsis">
              <span className="dot text-pcp dark:text-pcp-dark">.</span>
              <span className="dot text-pcp dark:text-pcp-dark">.</span>
              <span className="dot text-pcp dark:text-pcp-dark">.</span>
            </div>
          </div>
        ) : (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {videos.map((video) => (
              <a
                key={video.id}
                data-vbtype="youtube"
                data-autoplay="true"
                href={`https://youtu.be/${video.videoId}`}
                className="video-vemo-icon venobox vbox-item relative overflow-hidden bg-e1 dark:bg-e1-dark border border-e2 dark:border-e2-dark rounded-[20px] p-[6px]"
              >
                <div className="relative overflow-hidden h-[266px] rounded-2xl">
                  <Image
                    src={video.image}
                    alt={video.titleEn}
                    fill
                    className="object-cover rounded-2xl"
                    priority
                  />
                  <span
                    className={`absolute ${
                      locale === "ar" ? "left-3" : "right-3"
                    } top-3 bg-tm dark:bg-tm-dark text-nb rounded-[4px] text-[10px] leading-tight font-semibold px-2 py-[5px]`}
                  >
                    {locale === "ar"
                      ? video.category.titleAr
                      : video.category.titleEn}
                  </span>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="flex justify-center items-center rounded-full bg-nw dark:bg-nw-dark border-3 border-nw dark:border-nw-dark">
                      <BsPlayCircleFill className="text-5xl text-tl dark:text-tl-dark" />
                    </div>
                  </div>
                </div>
                <div className="flex flex-col  justify-between bg-e2 dark:bg-e2-dark border border-tl dark:border-tl-dark p-4 rounded-2xl mt-2 h-[157px]">
                  <h3 className="text-tm dark:text-tm-dark font-medium text-lg">
                    {locale === "ar" ? video.titleAr : video.titleEn}
                  </h3>
                  <div className="flex items-center justify-between mt-3 xl:mt-4">
                    <span className="text-ts dark:text-ts-dark font-medium text-base lg:text-sm xl:text-base">
                      {locale === "ar" ? "المبتدئين" : "Beginners"}
                    </span>
                    <div>
                      <span className="text-ts dark:text-ts-dark font-medium text-base lg:text-sm xl:text-base">
                        {video.duration}
                      </span>
                      <span className="text-ts dark:text-ts-dark mx-2">•</span>
                      <span className="text-ts dark:text-ts-dark font-medium text-base lg:text-sm xl:text-base">
                        {moment(video.createdOn).format("DD.MM.YYYY")}
                      </span>
                    </div>
                  </div>
                </div>
              </a>
            ))}
          </div>
        )}
        <div className="flex justify-center mt-10">
          <Pagination
            showControls
            total={pagination.totalPages}
            page={pagination.currentPage}
            onChange={(page) => fetchLessons(activeTab, page)}
          />
        </div>
      </div>
    </section>
  );
};

export default TutorialVideos;
