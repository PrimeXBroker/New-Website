"use client";
import { useEffect, useState, useOptimistic } from "react";
import { useTranslations, useLocale } from "next-intl";
import { tradingTabs } from "@/utilities/tradingOpportunity";
import { useAppDispatch, useAppSelector } from "@/redux/store";
import { setTokenData } from "@/redux/slices/workspaceSlice";
import axios from "axios";

const TradingOpportunities = () => {
  const t = useTranslations("home.tradingOpportunities");
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
    setLoading(false); // Stop loading when data is fetched
  };

  useEffect(() => {
    const fetchData = async () => {
      const activeTabData = tradingTabs.find((tab) => tab.name === activeTab);
      if (activeTabData) {
        await handleChange(activeTabData);
      }
    };

    fetchData();

    const interval = setInterval(fetchData, 1000); // Refetch data every second

    return () => clearInterval(interval); // Cleanup on component unmount
  }, [activeTab]);

  return (
    <section className="pt-12 bg-accent relative">
      <h2
        className="sectionHeading px-8 md:px-0"
        data-aos-easing="ease-out"
        data-aos-duration={1000}
        data-aos="slide-up"
      >
        {t("trading_opportunities_title")}
      </h2>
      <p
        className="sectionPara text-center py-4 px-8"
        data-aos-easing="ease-out"
        data-aos-duration={1000}
        data-aos="slide-up"
      >
        {t("trading_opportunities_desc")}
      </p>
      <div className="bg-white grid grid-cols-1 lg:grid-cols-2 items-center px-4 sm:px-10 md:px-[10%] py-10">
        <div className="mb-5">
          <h2 className=" text-xl md:text-4xl lg:text-6xl mb-2 text-secondary font-semibold">
            Unlock Diverse Global Markets
          </h2>
          <p className="mb-1">
            Discover trading opportunities with CFDs on commodities like Oil,
            Gold, and Natural Gas. Explore CFDs in Forex, indices such as S&P
            500, the Dow, Nasdaq, and seize exposure to equity markets with CFDs
            on shares in companies like Amazon and Tesla.
          </p>
        </div>
        <div className="bg-[#111111] border-[3px] border-[#1D1D1D] py-[22px] px-[10px] sm:px-[24px] sm:py-[32px] rounded-[12px] max-w-3xl w-full md:w-[640px] lg:w-[600px] 2xl:w-[640px] mx-auto text-white">
          <div className="grid grid-cols-3 gap-2 mb-6">
            {tradingTabs?.map((tab) => (
              <button
                key={tab.name}
                className={`flex items-center justify-center border-[1px] text-[12px] rounded-[4px] px-[28px] py-[12px] ${
                  activeTab === tab.name
                    ? "bg-[#F9F9F9] text-[#111111] border-[#C6C6C6]"
                    : "bg-[#262525] border-[#333333] text-[#C6C6C6]"
                }`}
                onClick={() => handleChange(tab)}
              >
                <span
                  className={`flex items-center justify-center w-[14.77px] h-[14.77px] border-[1px] rounded-[3.6px] ${
                    activeTab === tab.name
                      ? " bg-[#111111] text-[#F9F9F9]"
                      : "text-[#262525] bg-[#C6C6C6]"
                  }`}
                >
                  {tab.icon}
                </span>
                <span
                  className={`whitespace-nowrap ${
                    locale === "ar" ? "mr-2" : "ml-2"
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
                              className={`w-[40px] h-[40px] bg-[#3C3C3C] rounded-full ${
                                locale === "ar" ? "ml-3" : "mr-3"
                              }`}
                            ></div>
                            {instrument.symbol}
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
                          <div className="block md:hidden w-[32px] h-[32px] bg-[#3C3C3C] rounded-full mr-1"></div>
                          <div className="flex md:hidden items-center justify-between w-10/12">
                            <div className="flex flex-col">
                              <span className="text-[14px] text-[#fff]">
                                {instrument.symbol}
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
                                <button className="bg-gray-800 text-white text-xs py-1 px-3 rounded">
                                  {activeTab}
                                </button>
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
      </div>
    </section>
  );
};

export default TradingOpportunities;
