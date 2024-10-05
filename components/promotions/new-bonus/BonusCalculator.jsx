"use client";
import { useLocale, useTranslations } from "next-intl";
import React, { useState, useEffect } from "react";

function BonusCalculator() {
  // const [profitAmount, setProfitAmount] = useState("");
  // const [numberOfLots, setNumberOfLots] = useState("");
  // const [bonus, setBonus] = useState("");
  // const handleProfitAmountChange = (e) => {
  //   const value = e.target.value;
  //   if (/^\d*\.?\d*$/.test(value)) {
  //     setProfitAmount(value);
  //   }
  // };

  // const handleNumberOfLotsChange = (e) => {
  //   const value = e.target.value;
  //   if (/^\d*\.?\d*$/.test(value)) {
  //     setNumberOfLots(value);
  //   }
  // };

  // useEffect(() => {
  //   const profit = parseFloat(profitAmount);
  //   const lots = parseFloat(numberOfLots);
  //   if (lots !== 0 && !isNaN(lots) && !isNaN(profit)) {
  //     setBonus(profit / lots);
  //   } else {
  //     setBonus("");
  //   }
  // }, [profitAmount, numberOfLots]);
  const locale = useLocale();
  const t = useTranslations("newBonus.calculator");
  const [profitAmount, setProfitAmount] = useState("");
  const [bonus, setBonus] = useState("");
  const [numberOfLots, setNumberOfLots] = useState("");
  const [lastChanged, setLastChanged] = useState("");

  useEffect(() => {
    if (lastChanged === "profitAmount") {
      if (profitAmount !== "") {
        const newBonus = parseFloat(profitAmount) * 0.2;
        setBonus(newBonus.toFixed(2));
      } else {
        setBonus("");
      }
    }
  }, [profitAmount, lastChanged]);

  // Update profitAmount whenever bonus changes
  useEffect(() => {
    if (lastChanged === "bonus") {
      if (bonus !== "") {
        const newProfitAmount = parseFloat(bonus) / 0.2;
        setProfitAmount(newProfitAmount.toFixed(2));
      } else {
        setProfitAmount("");
      }
    }
  }, [bonus, lastChanged]);

  // Update numberOfLots whenever bonus changes
  useEffect(() => {
    if (bonus !== "") {
      setNumberOfLots(parseFloat(bonus) / 4);
    } else {
      setNumberOfLots(0);
    }
  }, [bonus]);

  const handleProfitAmountChange = (e) => {
    const value = e.target.value;
    const numberPattern = /^[0-9]*\.?[0-9]*$/;

    if (numberPattern.test(value)) {
      setProfitAmount(value);
      setLastChanged("profitAmount");
    }
  };

  const handleBonusChange = (e) => {
    const value = e.target.value;
    const numberPattern = /^[0-9]*\.?[0-9]*$/;

    if (numberPattern.test(value)) {
      setBonus(value);
      setLastChanged("bonus");
    }
  };
  const handleNumberOfLotsChange = () => {
    console.log("Changed");
  };

  return (
    <section className="bg-[#000000] py-10">
      <div className="container">
        <div className="flex flex-col gap-8 lg:gap-0 lg:flex-row py-8">
          <div className="flex flex-col justify-center flex-1">
            <h2
              className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-[#ffffff] md:mb-2 ${
                locale === "ar"
                  ? "text-center lg:text-right"
                  : "text-center lg:text-left"
              }`}
            >
              {t("title1_1")}
            </h2>
            <h2
              className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-[#FED100] ${
                locale === "ar"
                  ? "text-center lg:text-right"
                  : "text-center lg:text-left"
              }`}
            >
              {t("title1_2")}
            </h2>
            <p
              className={`text-[#c6c6c6] mt-4 w-[90%] sm:w-[60%] mx-auto lg:mx-0 ${
                locale === "ar"
                  ? "text-center lg:text-right"
                  : "text-center lg:text-left"
              }`}
            >
              {t("para1_1")}
            </p>
          </div>
          <div className="flex flex-col flex-1 gap-12 justify-between bg-[#111111] border-3 border-[#1D1D1D] py-8 px-8 rounded-lg">
            <h2 className="text-[24px] font-semibold text-[#ffffff]">
              {t("deposit_calculator")}{" "}
              <span className="text-[#FED100]">{t("deposit_calculator1")}</span>
            </h2>
            <div>
              <label className="text-xs text-[#c6c6c6]">
                {t("deposit_amount")}
              </label>
              <input
                className="appearance-none outline-none text-[#ffffff] placeholder:text-[#ffffff] bg-[#1d1d1d] border-2 border-[#222222] rounded-[4px] focus:outline-1 w-full mx-auto block text-base py-[16px] px-[12px] border-none"
                placeholder={t("enter_deposit_amount")}
                type="text"
                value={profitAmount}
                onChange={handleProfitAmountChange}
              />
            </div>
            <div className="flex ">
              <div
                className={`text-center ${
                  locale === "ar"
                    ? "border-l-1 border-l-[#2D2D2D]"
                    : "border-r-1 border-r-[#2D2D2D]"
                }`}
              >
                <input
                  className="appearance-none outline-none focus:outline-1 px-5 py-3 w-[90%] sm:w-[70%] mx-auto block text-[#ffffff] bg-transparent text-xl sm:text-4xl text-center"
                  placeholder={t("lots")}
                  type="text"
                  value={numberOfLots}
                  onChange={handleNumberOfLotsChange}
                />
                <label className="text-xs text-center text-[#c6c6c6]">
                  {t("no_of_lots")}
                </label>
              </div>
              <div className="text-center">
                <input
                  onChange={handleBonusChange}
                  className="appearance-none outline-none focus:outline-1 px-5 py-3 w-[90%] sm:w-[70%] mx-auto block text-[#ffffff] placeholder:text-[#ffffff] bg-transparent text-xl sm:text-4xl text-center"
                  placeholder={t("bonus")}
                  value={bonus === 0 ? "" : bonus}
                  type="text"
                />
                <label className="text-xs text-[#c6c6c6]">
                  {t("bonus_amount")}
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default BonusCalculator;
