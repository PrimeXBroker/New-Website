"use client";
import React, { useEffect, useState } from "react";
import { useTranslations, useLocale } from "next-intl";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import Image from "next/image";
import { TiArrowLeftThick, TiArrowRightThick } from "react-icons/ti";
import { RiEdit2Line } from "react-icons/ri";
import {
  Modal,
  ModalContent,
  ModalBody,
  useDisclosure,
} from "@nextui-org/react";
import RatingFormWrapper from "./RatingFormWrapper";
import axios from "axios";

const ClientReviews = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const locale = useLocale();
  const t = useTranslations("investmentFunds.successStories");
  const r = useTranslations("home.testimonial");

  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [, setError] = useState(null);
  const [pagination, setPagination] = useState({
    page: 1,
    limit: 10,
    total: 0,
    totalPages: 0,
    hasMore: true,
  });

  useEffect(() => {
    const swiperPrevButton = document.querySelector(
      ".promotions-swiper-button-prev"
    );
    const swiperNextButton = document.querySelector(
      ".promotions-swiper-button-next"
    );

    if (swiperPrevButton && swiperNextButton) {
      swiperPrevButton.addEventListener("click", () => {
        console.log("Prev clicked");
      });
      swiperNextButton.addEventListener("click", () => {
        console.log("Next clicked");
      });
    }
  }, []);

  const fetchReviews = async (page = 1) => {
    try {
      setLoading(true);
      const response = await axios.get(
        `https://primexbroker.com/api/rating?page=${page}&limit=${pagination.limit}&status=approved`
      );

      const data = await response.data;
      console.log(data, "data");

      if (data.success) {
        if (page === 1) {
          setReviews(data.result);
        } else {
          setReviews((prev) => [...prev, ...data.result]);
        }

        setPagination({
          page: data.pagination.currentPage,
          limit: data.pagination.limit,
          total: data.pagination.total,
          totalPages: data.pagination.totalPages,
          hasMore: data.pagination.currentPage < data.pagination.totalPages,
        });
      }
    } catch (error) {
      console.error("Error fetching reviews:", error);
      setError(error.message);
      // Fallback to static reviews if API fails
      setReviews(getFallbackReviews());
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchReviews(1);
  }, []);

  // Load more reviews for infinite scroll
  const loadMoreReviews = () => {
    if (pagination.hasMore && !loading) {
      fetchReviews(pagination.page + 1);
    }
  };

  const handleSwiperReachEnd = (swiper) => {
    if (pagination.hasMore && !loading) {
      loadMoreReviews();
    }
  };

  return (
    <section className="bg-p dark:bg-p-dark">
      <div className="container">
        <div className="text-center mb-10">
          <h2 className="text-3xl sm:text-3xl lg:text-4xl font-semibold">
            <span className="text-tm dark:text-tm-dark">{r("title1")}</span>
            <span className="text-pcp dark:text-pcp-dark">{r("title2")}</span>
            <span className="text-tm dark:text-tm-dark">{r("title3")}</span>
          </h2>
          <p className="text-sm sm:text-base lg:text-lg mt-2 md:w-[600px] mx-auto text-ts dark:text-ts-dark">
            {t("description")}
          </p>
          <button
            className={`text-sm sm:px-5 py-2 w-full sm:w-auto mx-auto sm:justify-center rounded-lg font-medium flex items-center justify-center gap-2 group bg-pcp dark:bg-pcp-dark text-nb dark:text-nb-dark group mt-3`}
            onClick={onOpen}
          >
            <RiEdit2Line size={15} />
            {t("createReviewBtn")}
          </button>
        </div>
        {reviews?.length ? (
          <>
            <Swiper
              breakpoints={{
                200: {
                  slidesPerView: 1,
                  spaceBetween: 20,
                },
                300: {
                  slidesPerView: 1,
                  spaceBetween: 0,
                },
                400: {
                  slidesPerView: 1,
                  spaceBetween: 10,
                },
                640: {
                  slidesPerView: 2,
                  spaceBetween: 10,
                },
                768: {
                  slidesPerView: 2,
                  spaceBetween: 10,
                },
                1024: {
                  slidesPerView: 3,
                  spaceBetween: 20,
                },
                1440: {
                  slidesPerView: 3,
                  spaceBetween: 20,
                },
              }}
              slidesPerView={"auto"}
              centeredSlides={true}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
              }}
              spaceBetween={20}
              loop
              pagination={{
                clickable: true,
              }}
              navigation={{
                nextEl: ".promotions-swiper-button-next",
                prevEl: ".promotions-swiper-button-prev",
              }}
              modules={[Autoplay, Pagination, Navigation]}
              className="home-testimonial-pagination"
              onReachEnd={handleSwiperReachEnd}
            >
              {reviews.map((review, index) => (
                <SwiperSlide key={index}>
                  <div className="max-w-sm mx-auto bg-cc dark:bg-cc-dark rounded-xl p-6 min-h-[210px] sm:min-h-[229px] mb-9">
                    <div className="flex justify-between items-center mb-3">
                      <div className="flex gap-2 items-center">
                        <div className="font-semibold text-tm dark:text-tm-dark text-xl">
                          {review?.full_name}
                        </div>
                        <div className="text-lg text-ts dark:text-ts-dark font-medium flex">
                          <Image
                            unoptimized={true}
                            src="https://primexcapital.s3.eu-north-1.amazonaws.com/website/home/Location+Icon.svg"
                            alt="Location Icon"
                            width={24}
                            height={24}
                          />
                          <span className="">{review?.country}</span>
                        </div>
                      </div>
                      <div className="flex items-center gap-1">
                        <Image
                          unoptimized={true}
                          src="https://primexcapital.s3.eu-north-1.amazonaws.com/website/primex-homepage/Star-Review.svg"
                          alt="Location Icon"
                          width={24}
                          height={24}
                        />
                        <span className="text-tm dark:text-tm-dark font-normal text-lg">
                          {review?.rating}
                        </span>
                      </div>
                    </div>
                    <div className="">
                      <div className="text-ts dark:text-ts-dark text-sm sm:text-base font-medium">
                        {review?.reason}
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
            <div
              className={`promotion-swiper-navigation-buttons flex gap-4 w-fit float-right relative bottom-[37px] z-[10] ${
                locale === "ar" ||
                locale === "ps" ||
                locale === "ku" ||
                locale === "fa"
                  ? "float-left"
                  : "float-right"
              }`}
              dir={
                locale === "ar" ||
                locale === "ps" ||
                locale === "ku" ||
                locale === "fa"
                  ? "ltr"
                  : ""
              }
            >
              <button className="promotions-swiper-button-prev group !bg-tl dark:!bg-tl-dark hover:!bg-pcp dark:hover:!bg-pcp group transition-colors duration-300 ease-in-out">
                <TiArrowLeftThick className="text-nw dark:text-nw-dark group-hover:text-nb dark:group-hover:text-nb-dark transition-transform duration-500 ease-in-out" />
              </button>
              <button className="promotions-swiper-button-next group !bg-tl dark:!bg-tl-dark hover:!bg-pcp dark:hover:!bg-pcp group transition-colors duration-300 ease-in-out">
                <TiArrowRightThick
                  className="text-nw dark:text-nw-dark group-hover:text-nb dark:group-hover:text-nb-dark"
                  transition-transform
                  duration-500
                  ease-in-out
                />
              </button>
            </div>
          </>
        ) : null}
      </div>

      <Modal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        placement="center"
        size="4xl"
        scrollBehavior="inside"
        className="border border-e2 dark:border-white/15 rounded-lg bg-p dark:bg-p-dark"
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalBody className="">
                <RatingFormWrapper isOpen={isOpen} onClose={onClose} />
              </ModalBody>
            </>
          )}
        </ModalContent>
      </Modal>
    </section>
  );
};

export default ClientReviews;
