import { useTranslations } from "next-intl";
import Image from "next/image";
import React from "react";

const PrizesBreakdown = () => {
  const t = useTranslations("bonusPage.bonusPrizeBreakdown");

  const prizes = [
    {
      title: t("first_prize_title"),
      prize: t("first_prize_cash1"),
      cash: t("first_prize_cash1_title"),
      accountAmount: t("first_prize_cash2"),
      accountType: t("first_prize_cash2_title1"),
      fundType: t("first_prize_cash2_title2"),
      imageUrl:
        "https://primexcapital.s3.eu-north-1.amazonaws.com/website/primex-bonus/images/first-price.svg",
    },
    {
      title: t("second_prize_title"),
      prize: t("second_prize_cash1"),
      cash: t("second_prize_cash1_title"),
      accountAmount: t("second_prize_cash2"),
      accountType: t("second_prize_cash2_title1"),
      fundType: t("second_prize_cash2_title2"),
      imageUrl:
        "https://primexcapital.s3.eu-north-1.amazonaws.com/website/primex-bonus/images/third-prize.svg",
    },
    {
      title: t("third_prize_title"),
      prize: t("third_prize_cash1"),
      cash: t("third_prize_cash1_title"),
      accountAmount: t("third_prize_cash2"),
      accountType: t("third_prize_cash2_title1"),
      fundType: t("third_prize_cash2_title2"),
      imageUrl:
        "https://primexcapital.s3.eu-north-1.amazonaws.com/website/primex-bonus/images/Third-Place.svg",
    },
  ];

  return (
    <section className="bg-[#030303] py-16 sm:py-28">
      <div className="container">
        <div className="text-center md:text-center mb-10">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#F9F9F9] uppercase">
            {t("title")}
          </h2>
        </div>
        <div className="grid grid-cols-12 gap-4">
          {prizes.map((prize, index) => (
            <div key={index} className="col-span-12 sm:col-span-6">
              <div className="bg-[#1A1A1A] rounded-2xl p-10 flex items-center gap-4 min-h-[312px]">
                <div>
                  <Image
                    unoptimized={true}
                    src={prize.imageUrl}
                    width="100"
                    height="100"
                    alt={`${prize.title} Prize`}
                    className="w-full"
                  />
                </div>
                <div>
                  <h3 className="text-[#F9F9F9] font-semibold text-4xl">
                    {prize.title}
                  </h3>
                  <div className="bg-[#F9F9F9] text-[#111111] text-2xl font-semibold rounded-lg p-4 mt-5 flex items-center justify-center gap-3 w-auto">
                    {prize.prize} <span className="text-lg">{prize.cash}</span>
                  </div>
                  <div className="text-[#F9F9F9] text-2xl text-center my-3">
                    &
                  </div>
                  <div className="flex gap-2">
                    <p className="text-[#F9F9F9] mb-0 font-semibold text-2xl">
                      {prize.accountAmount}
                    </p>
                    <p className="text-[#FED100] mb-0 font-semibold text-lg leading-tight">
                      {prize.accountType} <br />
                      <span className="text-base">{prize.fundType}</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
          <div className="col-span-6">
            <div className="bg-[#1A1A1A] rounded-2xl p-10 min-h-[312px]">
              <h3 className="text-[#F9F9F9] font-semibold text-4xl">
                {t("fourth_prize_title")}
              </h3>
              <div className="flex items-center gap-4 mt-12">
                <div>
                  <Image
                    unoptimized={true}
                    src="https://primexcapital.s3.eu-north-1.amazonaws.com/website/primex-bonus/images/fourth-prize.svg"
                    width="100"
                    height="100"
                    alt="4th Place"
                    className="w-full"
                  />
                </div>
                <div className="flex gap-2">
                  <p className="text-[#F9F9F9] mb-0 font-semibold text-2xl">
                    {t("fourth_prize_cash1")}
                  </p>
                  <p className="text-[#FED100] mb-0 font-semibold text-lg leading-tight">
                    {t("fourth_prize_cash2_title1")} <br />
                    <span className="text-base">
                      {t("fourth_prize_cash2_title2")}
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PrizesBreakdown;
