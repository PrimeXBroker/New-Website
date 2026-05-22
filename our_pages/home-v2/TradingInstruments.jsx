"use client";
import { useEffect, useState, useOptimistic } from "react";
import { tradingInstrumentsTabs } from "@/utilities/tradingInstruments";
import { useAppDispatch, useAppSelector } from "@/redux/store";
import { setTokenData } from "@/redux/slices/workspaceSlice";
import axios from "axios";
import Image from "next/image";
import { useTheme } from "next-themes";
import { useTranslations } from "next-intl";

const TradingInstruments = () => {
  const { theme } = useTheme();
  const t = useTranslations("home.tradingInstruments");
  const { tokenData } = useAppSelector((state) => state.auth);
  const dispatch = useAppDispatch();
  const [activeTab, setActiveTab] = useState("Trending");
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
          }),
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
      const activeTabData = tradingInstrumentsTabs.find(
        (tab) => tab.name === activeTab,
      );
      if (activeTabData) {
        await handleChange(activeTabData);
      }
    };

    fetchData();

    const interval = setInterval(fetchData, 1000);

    return () => clearInterval(interval);
  }, [activeTab]);

  return (
    <div className="bg-p dark:bg-p-dark">
      <div className="container">
        <div className="text-center md:text-center mb-10">
          <h2 className="text-3xl sm:text-3xl lg:text-4xl font-bold">
            {t("title1")}
            <br className="block sm:hidden" />
            <span className="text-pcp dark:text-pcp-dark">{t("title2")}</span>
            {t("title3")}
          </h2>
        </div>
        <div className="w-full mb-10">
          <div className="flex items-center justify-center flex-wrap gap-x-4 sm:gap-x-6">
            {tradingInstrumentsTabs.map((tab) => {
              return (
                <button
                  key={tab.name}
                  onClick={() => handleChange(tab)}
                  className="relative text-xl md:text-2xl font-light tracking-wide transition-colors duration-200 focus:outline-none mb-2 sm:mb-0"
                >
                  <span className="text-tm dark:text-tm-dark text-base sm:text-lg font-light">
                    {tab.name}
                  </span>
                  <span
                    className={`absolute left-1/2 -translate-x-1/2 -bottom-[4px] h-[2px] bg-pcp dark:bg-pcp-dark rounded-full transition-all duration-300 ease-in-out ${
                      activeTab === tab.name
                        ? "w-[50%] opacity-100 scale-100"
                        : "w-0 opacity-0 scale-0"
                    }`}
                  />
                </button>
              );
            })}
          </div>
        </div>
        {loading && !symbolList?.length ? (
          <div className="flex justify-center items-center min-h-[30vh]">
            <div className="ellipsis">
              <span className="dot">.</span>
              <span className="dot">.</span>
              <span className="dot">.</span>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {symbolList?.length
              ? symbolList.map((instrument) => {
                  const displayPrice = instrument?.bid_price
                    ? parseFloat(instrument.bid_price).toFixed(3)
                    : "0.000";
                  const displaySpeed = instrument?.speed
                    ? parseFloat(instrument.speed).toFixed(3)
                    : "0.000";
                  return (
                    <div
                      key={instrument.symbol}
                      className="relative flex flex-col justify-between bg-cc dark:bg-cc-dark rounded-xl p-6 overflow-hidden"
                    >
                      <div className="absolute top-0 end-0 w-[100px] h-[113px] pointer-events-none select-none">
                        <img
                          src={
                            theme === "dark"
                              ? "https://primexcapital.s3.eu-north-1.amazonaws.com/website/home-v2/trading-instruments/Background+X.png"
                              : "https://primexcapital.s3.eu-north-1.amazonaws.com/website/home-v2/trading-instruments/X+Light.png"
                          }
                          alt="X overlay"
                          className="w-full h-full object-contain object-right-top"
                        />
                      </div>
                      <div className="relative z-10">
                        <Image
                          unoptimized={true}
                          src={instrument.image}
                          width="40"
                          height="40"
                          alt={instrument.name}
                          className="w-[40px] h-[40px]"
                        />
                        <h3 className="text-xl sm:text-2xl font-semibold text-pcp dark:text-pcp-dark uppercase mt-6 mb-3">
                          {instrument.name}
                        </h3>
                        <div className="flex items-center gap-x-1">
                          <span className="px-3 py-1 bg-[url(https://primexcapital.s3.eu-north-1.amazonaws.com/website/home-v2/trading-instruments/category-bg.png)] bg-cover bg-center rounded text-nb dark:text-nb-dark font-medium text-xs">
                            {activeTab}
                          </span>
                          <span className="px-3 py-1 bg-[#f5f5f5] dark:bg-white dark:bg-opacity-[0.12] border-[0.7px] border-[#f5f5f5] dark:border-white dark:border-opacity-[0.15] rounded text-ts dark:text-ts-dark font-medium text-xs">
                            Popular
                          </span>
                        </div>
                      </div>
                      <div className="relative z-10 border-t border-[#ececec] dark:border-[#262626] pt-4 mt-8 flex items-center justify-between">
                        <div>
                          <span className="block text-xs text-ts dark:text-ts-dark font-medium mb-[2px]">
                            {t("latestPrice")}
                          </span>
                          <span className="text-base font-medium text-tm dark:text-tm-dark">
                            {displayPrice}
                          </span>
                        </div>
                        <div>
                          <span className="block text-xs text-ts dark:text-ts-dark font-medium mb-[2px]">
                            {t("speed")}
                          </span>
                          <span className="text-base font-medium text-pcp dark:text-pcp-dark">
                            {displaySpeed}
                          </span>
                        </div>
                      </div>
                    </div>
                  );
                })
              : null}
          </div>
        )}
      </div>
    </div>
  );
};

export default TradingInstruments;
