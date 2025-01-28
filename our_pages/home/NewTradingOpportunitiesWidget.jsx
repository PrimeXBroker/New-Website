"use client";
import { useEffect, useState, useOptimistic } from "react";
import { useTranslations, useLocale } from "next-intl";
import { tradingTabs } from "@/utilities/tradingOpportunity";
import { useAppDispatch, useAppSelector } from "@/redux/store";
import { setTokenData } from "@/redux/slices/workspaceSlice";
import axios from "axios";
import Image from "next/image";

const TradingOpportunitiesWidget = () => {
  const t = useTranslations("home.tradingWidget");
  const locale = useLocale();
  const { tokenData } = useAppSelector((state) => state.auth);
  const dispatch = useAppDispatch();
  const [activeTab, setActiveTab] = useState("Popular");
  const [symbolList, setSymbolList] = useState([]);
  const [loading, setLoading] = useOptimistic(true);

  const handleChange = async (tab) => {
    setLoading(true);

    setActiveTab(tab.name);
    const tokenExpireTime = new Date(tokenData?.expire).getTime();
    const currentTime = new Date().getTime();
    const tokenExpirationThreshold = 5 * 60 * 1000;

    let newTokenData = tokenData;
    if (tokenExpireTime - currentTime < tokenExpirationThreshold) {
      try {
        const res = await axios.post(`https://primexbroker.com/api/v1/price`, {
          token: "",
          expire: false,
          symbol: tab?.symbol,
        });
        newTokenData = res?.data?.data;
        setSymbolList(res?.data?.data?.feedSymbols);
        dispatch(
          setTokenData({
            token: newTokenData?.token,
            expire: newTokenData?.expire,
          })
        );
      } catch (error) {
        console.error("Error getting new token and price data:", error);
      }
    } else {
      try {
        const res = await axios.post(`https://primexbroker.com/api/v1/price`, {
          ...newTokenData,
          symbol: tab?.symbol,
        });
        setSymbolList(res?.data?.data?.feedSymbols);
      } catch (error) {
        console.error("Failed to send request with current token", error);
      }
    }
    setLoading(false);
  };

  useEffect(() => {
    const fetchData = async () => {
      const activeTabData = tradingTabs.find((tab) => tab.name === activeTab);
      if (activeTabData) {
        await handleChange(activeTabData);
      }
    };

    fetchData();

    const interval = setInterval(fetchData, 1000);

    return () => clearInterval(interval);
  }, [activeTab]);

  return (
    <section className="pt-20 pb-10 relative">
      <div className="container bg-[#000000] grid grid-cols-1 lg:grid-cols-2 items-center">
        <div
          className={`mb-5 text-center md:text-center block lg:hidden ${
            locale === "ar" || locale === "fa" || locale === "kd"
              ? "lg:mr-[120px]"
              : "lg:ml-[120px]"
          }`}
        >
          <h2 className="text-2xl md:text-3xl lg:text-7xl xl:text-8xl mb-2 text-[#ffffff] font-semibold">
            {t("title1")} <br className="hidden lg:block" />
            <span className="text-[#FED100]">{t("title2")}</span>{" "}
            <br className="md:hidden lg:block" />
            <span className="text-[#FED100]">{t("title3")}</span>{" "}
            <br className="hidden lg:block" />
            <span>{t("title4")}</span>
          </h2>
          <p className="mb-1 text-[#c6c6c6] text-sm md:text-base">
            {t("desc")}
          </p>
        </div>
        <div className="bg-[#111111] border-[3px] border-[#1D1D1D] py-[22px] px-[10px] sm:px-[24px] sm:py-[32px] rounded-[12px] max-w-3xl w-full md:w-[640px] lg:w-[600px] 2xl:w-[640px] mx-auto text-white">
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 mb-6">
            {tradingTabs?.map((tab) => (
              <button
                key={tab.name}
                className={`flex items-center justify-center border-[1px] text-[12px] rounded-[4px] sm:px-[28px] py-[12px] ${
                  activeTab === tab.name
                    ? "bg-[#FED100] text-[#111111] border-[#C6C6C6]"
                    : "bg-[#262525] border-[#333333] text-[#C6C6C6]"
                }`}
                onClick={() => handleChange(tab)}
              >
                <span
                  className={`flex items-center justify-center w-[14.77px] h-[14.77px] border-[1px] rounded-[3.6px] ${
                    activeTab === tab.name
                      ? "text-[#F9F9F9]"
                      : "text-[#262525] "
                  }`}
                >
                  <img
                    src={activeTab === tab.name ? tab.iconActive : tab.icon}
                    alt={`${tab.name} icon`}
                    className="w-full h-full"
                  />
                </span>
                <span
                  className={`whitespace-nowrap ${
                    locale === "ar" || locale === "fa" || locale === "kd"
                      ? "mr-2"
                      : "ml-2"
                  }`}
                  style={{ fontWeight: "500" }}
                >
                  {tab.name}
                </span>
              </button>
            ))}
          </div>
          <div className="bg-[#1D1D1D] border-[3px] border-[#222222] py-[12px] px-[12px] sm:py-[24px] sm:px-[24px] rounded-[8px]">
            <div
              className="hidden md:flex text-[#C6C6C6] text-[14px] pb-[24px]"
              style={{ fontWeight: "500" }}
            >
              <div className="w-[236px]">Name</div>
              <div className="w-[80px]">Price</div>
              <div className="w-[134px] text-center">Spread</div>
            </div>
            {loading && !symbolList.length ? (
              <div className="flex justify-center items-center min-h-[70vh]">
                <div className="ellipsis">
                  <span className="dot">.</span>
                  <span className="dot">.</span>
                  <span className="dot">.</span>
                </div>
              </div>
            ) : (
              <>
                {symbolList?.length
                  ? symbolList?.map((instrument) => (
                      <div
                        key={instrument.symbol}
                        className="flex gap-4 px-[14px] py-[8px] border-[1px] bg-[#262525] border-[#333333] text-[#C6C6C6] rounded-[4px] mb-3"
                      >
                        <>
                          <div
                            className="hidden md:flex items-center text-[#ffffff] text-[14px] w-[236px]"
                            style={{ fontWeight: "500" }}
                          >
                            <div
                              className={`w-[40px] h-[40px] bg-[#3C3C3C] ${
                                locale === "ar" ||
                                locale === "fa" ||
                                locale === "kd"
                                  ? "ml-3"
                                  : "mr-3"
                              }`}
                            >
                              <Image
                                unoptimized={true}
                                src={instrument.image}
                                width="100"
                                height="100"
                                alt={instrument.name}
                                className="w-[100%]"
                              />
                            </div>
                            {instrument.name}
                          </div>
                          <div
                            className="hidden md:flex items-center text-[#ffffff] text-[14px] w-[80px] justify-center"
                            style={{ fontWeight: "500" }}
                          >
                            {parseFloat(instrument?.bid_price)?.toFixed(3)}
                          </div>
                          <div className="hidden md:flex items-center justify-between">
                            <span
                              className={`text-[#FED100] text-[14px] w-[134px] flex justify-center`}
                              style={{ fontWeight: "500" }}
                            >
                              {(
                                instrument?.ask_price - instrument.bid_price
                              )?.toFixed(3)}
                            </span>
                            <button
                              className="bg-[#333333] text-[#C6C6C6] text-[14px] py-[4px] px-[12px] rounded-[100px]"
                              style={{ fontWeight: "500" }}
                            >
                              {activeTab}
                            </button>
                          </div>
                        </>

                        {/* mobile view  */}
                        <>
                          <div className="block md:hidden w-[32px] h-[32px] bg-[#3C3C3C] mr-1">
                            <Image
                              unoptimized={true}
                              src={instrument.image}
                              width="100"
                              height="100"
                              alt={instrument.name}
                              className="w-[100%]"
                            />
                          </div>
                          <div className="flex md:hidden items-center justify-between w-10/12">
                            <div className="flex flex-col">
                              <span className="text-[14px] text-[#fff]">
                                {instrument.name}
                              </span>
                              <div className="flex items-center gap-5 text-xs">
                                <div className="text-[12px] text-[#fff]">
                                  {parseFloat(instrument?.bid_price)?.toFixed(
                                    3
                                  )}
                                </div>
                                <span className={`text-[12px] text-[#FED100]`}>
                                  {(
                                    instrument?.ask_price - instrument.bid_price
                                  )?.toFixed(3)}
                                </span>
                              </div>
                            </div>
                            <button className="bg-[#333333] text-[#C6C6C6] text-[10px] py-[4px] px-[12px] rounded-[100px]">
                              {activeTab}
                            </button>
                          </div>
                        </>
                      </div>
                    ))
                  : null}
              </>
            )}
          </div>
        </div>
        <div
          className={`mb-5 hidden lg:block ${
            locale === "ar" || locale === "fa" || locale === "kd"
              ? "lg:mr-[120px]"
              : "lg:ml-[120px]"
          }`}
        >
          <h2 className=" text-3xl md:text-4xl lg:text-7xl xl:text-8xl mb-2 text-[#ffffff] font-semibold">
            {t("title1")} <br className="hidden lg:block" />
            <span className="text-[#FED100]">{t("title2")}</span>{" "}
            <br className="md:hidden lg:block" />
            <span className="text-[#FED100]">{t("title3")}</span>{" "}
            <br className="hidden lg:block" />
            <span>{t("title4")}</span>
          </h2>
          <p className="mb-1 text-[#c6c6c6]">{t("desc")}</p>
        </div>
      </div>
    </section>
  );
};

export default TradingOpportunitiesWidget;
