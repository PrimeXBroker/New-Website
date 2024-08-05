"use client";
import { useTranslations } from "next-intl";
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
  const t = useTranslations('bonus.calculator');
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
  const handleNumberOfLotsChange = ()=>{
    console.log('Changed');
  }

  return (
    <section className="py-8 font-sans">
      <div className="flex flex-col gap-8 lg:gap-0 container bg-[#e4e5e6] lg:flex-row py-8">
        <div className="flex flex-col justify-center flex-1 space-y-12">
          <h1 className="text-3xl lg:text-5xl text-center text-[#232323]">
            {t("title1_1")}
            <br /> <strong>{t("title1_2")}</strong>
          </h1>
          <h2 className="text-center text-2xl lg:text-3xl text-[#232323]">
            {t("para1_1")}
          </h2>
          <h2 className="text-center text-2xl lg:text-3xl text-[#232323]">
           {t("para2_1")}{" "}
            <strong>
            {t("para2_2")}
              <br />{" "}
            </strong>
            {t("para2_3")} <br />
            {t("para2_4")}
          </h2>
        </div>
        <div className="flex flex-col flex-1 gap-12 justify-between bg-[#3f3f3e] py-12 rounded-3xl">
          <h1 className="text-center text-3xl text-[#FFF]">{t("deposit_calculator:")}</h1>
          <div>
            <label className="w-[70%] mx-auto block px-5 text-[#FFF]">
             {t("deposit_amount")}
            </label>
            <input
              className="appearance-none outline-none focus:outline-1 focus:outline-primary px-5 py-3 rounded-2xl w-[70%] mx-auto block text-[#3f3f3e] text-xl border-none"
              placeholder={t("enter_deposit_amount")}
              type="text"
              value={profitAmount}
              onChange={handleProfitAmountChange}
            />
          </div>
          <div>
            <label className="w-[70%] mx-auto block px-5 text-[#FFF]">
             {t("no_of_lots")}
            </label>
            <input
              className="appearance-none outline-none focus:outline-1 focus:outline-primary px-5 py-3 rounded-2xl w-[70%] mx-auto block text-[#3f3f3e] text-xl"
              placeholder={t("no_of_lots")}
              type="text"
              value={numberOfLots}
              onChange={handleNumberOfLotsChange}
            />
          </div>
          <div>
            <label className="w-[70%] mx-auto block px-5 text-[#FFF]">
             {t("bonus_amount")}
            </label>
            <input
              onChange={handleBonusChange}
              className="appearance-none outline-none focus:outline-1 focus:outline-primary px-5 py-3 rounded-2xl w-[70%] mx-auto block text-[#3f3f3e] text-xl"
              placeholder={t("bonus")}
              value={bonus === 0 ? "" : bonus}
              type="text"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default BonusCalculator;
