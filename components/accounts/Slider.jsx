"use client";
import React from "react";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/effect-fade";
import "swiper/css/effect-creative";
import "swiper/css/effect-coverflow";
import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import { ImCheckmark } from "react-icons/im";
import { IoIosCheckmarkCircle } from "react-icons/io";
import { useLocale, useTranslations } from "next-intl";

const Slider = () => {
  const locale = useLocale();
  const t = useTranslations("accountTypes");

  const accountsTable = [
    {
      id: 1,
      title: t("card.account1-title"),
      deposition: t("slider.account_t_row_1_2"),
      spreads: t("slider.account_t_row_2_2"),
      commissions: t("slider.account_t_row_3_2"),
      leverage: t("slider.account_t_row_4_2"),
      marginRequired: t("slider.account_t_row_5_2"),
      lotSize: t("slider.account_t_row_6_2"),
      stopLevel: t("slider.account_t_row_7_2"),
      marginCall: t("slider.account_t_row_8_2"),
      executionType: t("slider.account_t_row_9_2"),
      webinars: t("slider.account_t_row_16_2"),
      expertAdvice: t("slider.account_t_row_17_2"),
      swap: t("slider.account_t_row_10_2"),
      automaticTrading: <ImCheckmark className="text-xl text-primary" />,
      vps: <ImCheckmark className="text-xl text-primary" />,
      metatrader: <ImCheckmark className="text-xl text-primary" />,
      applyTitle: t("slider.accounts_apply_title_1"),
      showBadge: false,
    },
    {
      id: 2,
      title: t("card.account2-title"),
      deposition: t("slider.account_t_row_1_3"),
      spreads: t("slider.account_t_row_2_3"),
      commissions: t("slider.account_t_row_3_3"),
      leverage: t("slider.account_t_row_4_3"),
      marginRequired: t("slider.account_t_row_5_3"),
      lotSize: t("slider.account_t_row_6_3"),
      stopLevel: t("slider.account_t_row_7_3"),
      marginCall: t("slider.account_t_row_8_3"),
      executionType: t("slider.account_t_row_9_3"),
      webinars: t("slider.account_t_row_16_3"),
      expertAdvice: t("slider.account_t_row_17_3"),
      swap: t("slider.account_t_row_10_3"),
      automaticTrading: <ImCheckmark className="text-xl text-primary" />,
      vps: <ImCheckmark className="text-xl text-primary" />,
      metatrader: <ImCheckmark className="text-xl text-primary" />,
      applyTitle: t("slider.accounts_apply_title_2"),
      showBadge: true,
    },
    {
      id: 3,
      title: t("card.account3-title"),
      deposition: t("slider.account_t_row_1_4"),
      spreads: t("slider.account_t_row_2_4"),
      commissions: t("slider.account_t_row_3_4"),
      leverage: t("slider.account_t_row_4_4"),
      marginRequired: t("slider.account_t_row_5_4"),
      lotSize: t("slider.account_t_row_6_4"),
      stopLevel: t("slider.account_t_row_7_4"),
      marginCall: t("slider.account_t_row_8_4"),
      executionType: t("slider.account_t_row_9_4"),
      webinars: t("slider.account_t_row_16_4"),
      expertAdvice: t("slider.account_t_row_17_4"),
      swap: t("slider.account_t_row_10_4"),
      automaticTrading: <ImCheckmark className="text-xl text-primary" />,
      vps: <ImCheckmark className="text-xl text-primary" />,
      metatrader: <ImCheckmark className="text-xl text-primary" />,
      applyTitle: t("slider.accounts_apply_title_3"),
      showBadge: true,
    },
    // {
    //   id: 4,
    //   title: t("card.account4-title"),
    //   deposition: t("slider.account_t_row_1_5"),
    //   spreads: t("slider.account_t_row_2_5"),
    //   commissions: t("slider.account_t_row_3_5"),
    //   leverage: t("slider.account_t_row_4_5"),
    //   marginRequired: t("slider.account_t_row_5_5"),
    //   lotSize: t("slider.account_t_row_6_5"),
    //   stopLevel: t("slider.account_t_row_7_5"),
    //   marginCall: t("slider.account_t_row_8_5"),
    //   executionType: t("slider.account_t_row_9_5"),
    //   webinars: t("slider.account_t_row_16_5"),
    //   expertAdvice: t("slider.account_t_row_17_5"),
    //   swap: t("slider.account_t_row_10_5"),
    //   automaticTrading: <ImCheckmark className="text-xl text-primary" />,
    //   vps: <ImCheckmark className="text-xl text-primary" />,
    //   metatrader: <ImCheckmark className="text-xl text-primary" />,
    //   applyTitle: t("slider.accounts_apply_title_4"),
    //   showBadge: false,
    //   accountLink: `https://client.primexbroker.com/${locale}/register`,
    // },
    {
      id: 4,
      title: t("card.account1-title"),
      deposition: t("slider.account_t_row_1_2"),
      spreads: t("slider.account_t_row_2_2"),
      commissions: t("slider.account_t_row_3_2"),
      leverage: t("slider.account_t_row_4_2"),
      marginRequired: t("slider.account_t_row_5_2"),
      lotSize: t("slider.account_t_row_6_2"),
      stopLevel: t("slider.account_t_row_7_2"),
      marginCall: t("slider.account_t_row_8_2"),
      executionType: t("slider.account_t_row_9_2"),
      webinars: t("slider.account_t_row_16_2"),
      expertAdvice: t("slider.account_t_row_17_2"),
      swap: t("slider.account_t_row_10_2"),
      automaticTrading: <ImCheckmark className="text-xl text-primary" />,
      vps: <ImCheckmark className="text-xl text-primary" />,
      metatrader: <ImCheckmark className="text-xl text-primary" />,
      applyTitle: t("slider.accounts_apply_title_1"),
      showBadge: false,
    },
    {
      id: 5,
      title: t("card.account2-title"),
      deposition: t("slider.account_t_row_1_3"),
      spreads: t("slider.account_t_row_2_3"),
      commissions: t("slider.account_t_row_3_3"),
      leverage: t("slider.account_t_row_4_3"),
      marginRequired: t("slider.account_t_row_5_3"),
      lotSize: t("slider.account_t_row_6_3"),
      stopLevel: t("slider.account_t_row_7_3"),
      marginCall: t("slider.account_t_row_8_3"),
      executionType: t("slider.account_t_row_9_3"),
      webinars: t("slider.account_t_row_16_3"),
      expertAdvice: t("slider.account_t_row_17_3"),
      swap: t("slider.account_t_row_10_3"),
      automaticTrading: <ImCheckmark className="text-xl text-primary" />,
      vps: <ImCheckmark className="text-xl text-primary" />,
      metatrader: <ImCheckmark className="text-xl text-primary" />,
      applyTitle: t("slider.accounts_apply_title_2"),
      showBadge: true,
    },
    {
      id: 6,
      title: t("card.account3-title"),
      deposition: t("slider.account_t_row_1_4"),
      spreads: t("slider.account_t_row_2_4"),
      commissions: t("slider.account_t_row_3_4"),
      leverage: t("slider.account_t_row_4_4"),
      marginRequired: t("slider.account_t_row_5_4"),
      lotSize: t("slider.account_t_row_6_4"),
      stopLevel: t("slider.account_t_row_7_4"),
      marginCall: t("slider.account_t_row_8_4"),
      executionType: t("slider.account_t_row_9_4"),
      webinars: t("slider.account_t_row_16_4"),
      expertAdvice: t("slider.account_t_row_17_4"),
      swap: t("slider.account_t_row_10_4"),
      automaticTrading: <ImCheckmark className="text-xl text-primary" />,
      vps: <ImCheckmark className="text-xl text-primary" />,
      metatrader: <ImCheckmark className="text-xl text-primary" />,
      applyTitle: t("slider.accounts_apply_title_3"),
      showBadge: true,
    },
    // {
    //   id: 8,
    //   title: t("card.account4-title"),
    //   deposition: t("slider.account_t_row_1_5"),
    //   spreads: t("slider.account_t_row_2_5"),
    //   commissions: t("slider.account_t_row_3_5"),
    //   leverage: t("slider.account_t_row_4_5"),
    //   marginRequired: t("slider.account_t_row_5_5"),
    //   lotSize: t("slider.account_t_row_6_5"),
    //   stopLevel: t("slider.account_t_row_7_5"),
    //   marginCall: t("slider.account_t_row_8_5"),
    //   executionType: t("slider.account_t_row_9_5"),
    //   webinars: t("slider.account_t_row_16_5"),
    //   expertAdvice: t("slider.account_t_row_17_5"),
    //   swap: t("slider.account_t_row_10_5"),
    //   automaticTrading: <ImCheckmark className="text-xl text-primary" />,
    //   vps: <ImCheckmark className="text-xl text-primary" />,
    //   metatrader: <ImCheckmark className="text-xl text-primary" />,
    //   applyTitle: t("slider.accounts_apply_title_4"),
    //   showBadge: false,
    //   accountLink: `https://client.primexbroker.com/${locale}/register`,
    // },
    {
      id: 7,
      title: t("card.account1-title"),
      deposition: t("slider.account_t_row_1_2"),
      spreads: t("slider.account_t_row_2_2"),
      commissions: t("slider.account_t_row_3_2"),
      leverage: t("slider.account_t_row_4_2"),
      marginRequired: t("slider.account_t_row_5_2"),
      lotSize: t("slider.account_t_row_6_2"),
      stopLevel: t("slider.account_t_row_7_2"),
      marginCall: t("slider.account_t_row_8_2"),
      executionType: t("slider.account_t_row_9_2"),
      webinars: t("slider.account_t_row_16_2"),
      expertAdvice: t("slider.account_t_row_17_2"),
      swap: t("slider.account_t_row_10_2"),
      automaticTrading: <ImCheckmark className="text-xl text-primary" />,
      vps: <ImCheckmark className="text-xl text-primary" />,
      metatrader: <ImCheckmark className="text-xl text-primary" />,
      applyTitle: t("slider.accounts_apply_title_1"),
      showBadge: false,
    },
    {
      id: 8,
      title: t("card.account2-title"),
      deposition: t("slider.account_t_row_1_3"),
      spreads: t("slider.account_t_row_2_3"),
      commissions: t("slider.account_t_row_3_3"),
      leverage: t("slider.account_t_row_4_3"),
      marginRequired: t("slider.account_t_row_5_3"),
      lotSize: t("slider.account_t_row_6_3"),
      stopLevel: t("slider.account_t_row_7_3"),
      marginCall: t("slider.account_t_row_8_3"),
      executionType: t("slider.account_t_row_9_3"),
      webinars: t("slider.account_t_row_16_3"),
      expertAdvice: t("slider.account_t_row_17_3"),
      swap: t("slider.account_t_row_10_3"),
      automaticTrading: <ImCheckmark className="text-xl text-primary" />,
      vps: <ImCheckmark className="text-xl text-primary" />,
      metatrader: <ImCheckmark className="text-xl text-primary" />,
      applyTitle: t("slider.accounts_apply_title_2"),
      showBadge: true,
    },
    {
      id: 9,
      title: t("card.account3-title"),
      deposition: t("slider.account_t_row_1_4"),
      spreads: t("slider.account_t_row_2_4"),
      commissions: t("slider.account_t_row_3_4"),
      leverage: t("slider.account_t_row_4_4"),
      marginRequired: t("slider.account_t_row_5_4"),
      lotSize: t("slider.account_t_row_6_4"),
      stopLevel: t("slider.account_t_row_7_4"),
      marginCall: t("slider.account_t_row_8_4"),
      executionType: t("slider.account_t_row_9_4"),
      webinars: t("slider.account_t_row_16_4"),
      expertAdvice: t("slider.account_t_row_17_4"),
      swap: t("slider.account_t_row_10_4"),
      automaticTrading: <ImCheckmark className="text-xl text-primary" />,
      vps: <ImCheckmark className="text-xl text-primary" />,
      metatrader: <ImCheckmark className="text-xl text-primary" />,
      applyTitle: t("slider.accounts_apply_title_3"),
      showBadge: true,
    },
  ];

  return (
    <section className="container account-swiper-carousel">
      <div className="flex justify-center">
        <div className="grid grid-cols-12">
          <div className="col-span-12 relative">
            <Swiper
              effect={"coverflow"}
              grabCursor={false}
              centeredSlides={true}
              slidesPerView={"auto"}
              coverflowEffect={{
                rotate: 0,
                stretch: 0,
                depth: 100,
                modifier: 2,
                slideShadows: true,
              }}
              loop={true}
              pagination={false}
              navigation={{
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
              }}
              modules={[EffectCoverflow, Pagination, Navigation]}
              className="mySwiper sm:w-[80%] xl:w-[90%] 2xl:w-[100%]"
            >
              {accountsTable.map((acc, index) => {
                return (
                  <SwiperSlide key={index}>
                    <div className="relative z-5 mb-8 flex h-20 items-center justify-center rounded-3xl swiper-account-title-box">
                      <div className="text-2xl text-center text-white font-semibold">
                        <h3 className="mt-0">{acc.title}</h3>
                      </div>
                      <div className="absolute bottom-[-18px] left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-[76px] border-r-[76px] border-l-transparent border-r-transparent swiper-account-angle"></div>
                    </div>
                    <div className="px-6 py-0">
                      <div className="container-fluid">
                        <div className="grid grid-cols-12">
                          <div className="col-span-7">
                            <div className="text-xs sm:text-sm	text-white mb-2">
                              <p className={`flex`}>
                                <IoIosCheckmarkCircle
                                  className={`text-primary text-lg me-2`}
                                />
                                {t("slider.account_t_row_1_1")}
                              </p>
                            </div>
                          </div>
                          <div className="col-span-5">
                            <div className="text-xs sm:text-sm	text-white mb-2">
                              <p className={``}>{acc.deposition}</p>
                            </div>
                          </div>
                        </div>
                        <div className="grid grid-cols-12">
                          <div className="col-span-7">
                            <div className="text-xs sm:text-sm	text-white mb-2">
                              <p className="flex">
                                <IoIosCheckmarkCircle
                                  className={`text-primary text-lg me-2`}
                                />
                                {t("slider.account_t_row_2_1")}
                              </p>
                            </div>
                          </div>
                          <div className="col-span-5">
                            <div className="text-xs sm:text-sm	text-white mb-2">
                              <p>{acc.spreads}</p>
                            </div>
                          </div>
                        </div>
                        <div className="grid grid-cols-12">
                          <div className="col-span-7">
                            <div className="text-xs sm:text-sm	text-white mb-2">
                              <p className="flex">
                                <IoIosCheckmarkCircle
                                  className={`text-primary text-lg me-2 `}
                                />
                                {t("slider.account_t_row_3_1")}
                              </p>
                            </div>
                          </div>
                          <div className="col-span-5">
                            <div className="text-xs sm:text-sm	text-white mb-2">
                              <p>{acc.commissions}</p>
                            </div>
                          </div>
                        </div>
                        <div className="grid grid-cols-12">
                          <div className="col-span-7">
                            <div className="text-xs sm:text-sm	text-white mb-2">
                              <p className="flex">
                                <IoIosCheckmarkCircle
                                  className={`text-primary text-lg me-2`}
                                />
                                {t("slider.account_t_row_4_1")}
                              </p>
                            </div>
                          </div>
                          <div className="col-span-5">
                            <div className="text-xs sm:text-sm	text-white mb-2">
                              <p>{acc.leverage}</p>
                            </div>
                          </div>
                        </div>
                        <div className="grid grid-cols-12">
                          <div className="col-span-7">
                            <div className="text-xs sm:text-sm	text-white mb-2">
                              <p className="flex">
                                <IoIosCheckmarkCircle
                                  className={`text-primary text-lg me-2`}
                                />
                                {t("slider.account_t_row_5_1")}
                              </p>
                            </div>
                          </div>
                          <div className="col-span-5">
                            <div className="text-xs sm:text-sm	text-white mb-2">
                              <p>{acc.marginRequired}</p>
                            </div>
                          </div>
                        </div>
                        <div className="grid grid-cols-12">
                          <div className="col-span-7">
                            <div className="text-xs sm:text-sm	text-white mb-2">
                              <p className="flex">
                                <IoIosCheckmarkCircle
                                  className={`text-primary text-lg me-2`}
                                />
                                {t("slider.account_t_row_6_1")}
                              </p>
                            </div>
                          </div>
                          <div className="col-span-5">
                            <div className="text-xs sm:text-sm	text-white mb-2">
                              <p>{acc.lotSize}</p>
                            </div>
                          </div>
                        </div>
                        <div className="grid grid-cols-12">
                          <div className="col-span-7">
                            <div className="text-xs sm:text-sm	text-white mb-2">
                              <p className="flex">
                                <IoIosCheckmarkCircle
                                  className={`text-primary text-lg me-2`}
                                />
                                {t("slider.account_t_row_7_1")}
                              </p>
                            </div>
                          </div>
                          <div className="col-span-5">
                            <div className="text-xs sm:text-sm	text-white mb-2">
                              <p>{acc.stopLevel}</p>
                            </div>
                          </div>
                        </div>
                        <div className="grid grid-cols-12">
                          <div className="col-span-7">
                            <div className="text-xs sm:text-sm	text-white mb-2">
                              <p className="flex">
                                <IoIosCheckmarkCircle
                                  className={`text-primary text-lg me-2`}
                                />
                                {t("slider.account_t_row_8_1")}
                              </p>
                            </div>
                          </div>
                          <div className="col-span-5">
                            <div className="text-xs sm:text-sm	text-white mb-2">
                              <p>{acc.marginCall}</p>
                            </div>
                          </div>
                        </div>
                        <div className="grid grid-cols-12">
                          <div className="col-span-7">
                            <div className="text-xs sm:text-sm	text-white mb-2">
                              <p className="flex">
                                <IoIosCheckmarkCircle
                                  className={`text-primary text-lg me-2`}
                                />
                                {t("slider.account_t_row_9_1")}
                              </p>
                            </div>
                          </div>
                          <div className="col-span-5">
                            <div className="text-xs sm:text-sm	text-white mb-2">
                              <p>{acc.executionType}</p>
                            </div>
                          </div>
                        </div>
                        <div className="grid grid-cols-12">
                          <div className="col-span-7">
                            <div className="text-xs sm:text-sm	text-white mb-2">
                              <p className="flex">
                                <IoIosCheckmarkCircle
                                  className={`text-primary text-lg me-2`}
                                />
                                {t("slider.account_t_row_13_1")}
                              </p>
                            </div>
                          </div>
                          <div className="col-span-5">
                            <div className="text-xs sm:text-sm	text-white mb-2">
                              {acc.automaticTrading}
                            </div>
                          </div>
                        </div>
                        <div className="grid grid-cols-12">
                          <div className="col-span-7">
                            <div className="text-xs sm:text-sm	text-white mb-2">
                              <p className="flex">
                                <IoIosCheckmarkCircle
                                  className={`text-primary text-lg me-2`}
                                />
                                {t("slider.account_t_row_14_1")}
                              </p>
                            </div>
                          </div>
                          <div className="col-span-5">
                            <div className="text-xs sm:text-sm	text-white mb-2">
                              {acc.vps}
                            </div>
                          </div>
                        </div>
                        <div className="grid grid-cols-12">
                          <div className="col-span-7">
                            <div className="text-xs sm:text-sm	text-white mb-2">
                              <p className="flex">
                                <IoIosCheckmarkCircle
                                  className={`text-primary text-lg me-2`}
                                />
                                {t("slider.account_t_row_12_1")}
                              </p>
                            </div>
                          </div>
                          <div className="col-span-5">
                            <div className="text-xs sm:text-sm	text-white mb-2">
                              {acc.metatrader}
                            </div>
                          </div>
                        </div>
                        <div className="grid grid-cols-12">
                          <div className="col-span-7">
                            <div className="text-xs sm:text-sm	text-white mb-2">
                              <p className="flex">
                                <IoIosCheckmarkCircle
                                  className={`text-primary text-lg me-2`}
                                />
                                {t("slider.account_t_row_16_1")}
                              </p>
                            </div>
                          </div>
                          <div className="col-span-5">
                            <div className="text-xs sm:text-sm	text-white mb-2">
                              <p>{acc.webinars}</p>
                            </div>
                          </div>
                        </div>
                        <div className="grid grid-cols-12">
                          <div className="col-span-7">
                            <div className="text-xs sm:text-sm	text-white mb-2">
                              <p className="flex">
                                <IoIosCheckmarkCircle
                                  className={`text-primary text-lg me-2`}
                                />
                                {t("slider.account_t_row_17_1")}
                              </p>
                            </div>
                          </div>
                          <div className="col-span-5">
                            {" "}
                            <div className="text-xs sm:text-sm	text-white mb-2">
                              <p>{acc.expertAdvice}</p>
                            </div>
                          </div>
                        </div>
                        <div className="grid grid-cols-12">
                          <div className="col-span-7">
                            <div className="text-xs sm:text-sm	text-white mb-2">
                              <p className="flex">
                                <IoIosCheckmarkCircle
                                  className={`text-primary text-lg me-2`}
                                />
                                {t("slider.account_t_row_10_1")}
                              </p>
                            </div>
                          </div>
                          <div className="col-span-5">
                            <div className="text-xs sm:text-sm	text-white mb-2">
                              <p>{acc.swap}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <Link
                      href={`https://client.primexbroker.com/${locale}/register`}
                      target="_blank"
                      className="flex justify-center items-center absolute -bottom-5 left-10 rounded-full w-64 sm:w-80 h-12 swiper-account-box "
                    >
                      <div className="text-center text-primary font-semibold">
                        <h6 className="mt-0 text-sm sm:text-base">
                          {acc.applyTitle}
                        </h6>
                      </div>
                    </Link>
                  </SwiperSlide>
                );
              })}
            </Swiper>
            <div>
              <div
                className={`absolute top-[708px] sm:top-1/2 left-[30%] sm:-left-[9px] md:left-[0] lg:left-[18px] xl:left-[-30px] 2xl:left-[-84px]`}
              >
                <div className="flex justify-center items-center text-lg rounded-full text-white cursor-pointer z-10 -mt-6 h-11 w-11 bg-secondary swiper-button-prev">
                  <FaArrowLeft className="flex items-center justify-center text-white" />
                </div>
              </div>
              <div
                className={`absolute top-[708px] sm:top-1/2 right-[30%] sm:-right-[9px] md:right-[0] lg:right-[18px] xl:right-[-30px] 2xl:right-[-84px]`}
              >
                <div className="flex justify-center items-center text-lg rounded-full text-white cursor-pointer z-10 -mt-6 h-11 w-11 bg-secondary swiper-button-next">
                  <FaArrowRight className="flex items-center justify-center text-white" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Slider;
