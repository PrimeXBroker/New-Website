"use client";
import Banner from "@/our_pages/instruments/common/Banner";
import Faq from "@/our_pages/instruments/common/Faq";
import Featured from "@/our_pages/instruments/common/Featured";
import ReadyToDive from "@/our_pages/instruments/common/ReadyToDive";
import Steps from "@/our_pages/instruments/common/Steps";
import Strategies from "@/our_pages/instruments/common/Strategies";
import WhyTrade from "@/our_pages/instruments/common/WhyTrade";
import ForexTable from "@/our_pages/instruments/forex/ForexTable";
import React, { useState } from "react";

const Forex = () => {
  const [icon1Hovered, setIcon1Hovered] = useState(false);
  const [icon2Hovered, setIcon2Hovered] = useState(false);
  const [icon3Hovered, setIcon3Hovered] = useState(false);
  const [icon4Hovered, setIcon4Hovered] = useState(false);
  const handleIcon1Enter = () => {
    setIcon1Hovered(true);
  };
  const handleIcon1Leave = () => {
    setIcon1Hovered(false);
  };
  const handleIcon2Enter = () => {
    setIcon2Hovered(true);
  };

  const handleIcon2Leave = () => {
    setIcon2Hovered(false);
  };

  const handleIcon3Enter = () => {
    setIcon3Hovered(true);
  };

  const handleIcon3Leave = () => {
    setIcon3Hovered(false);
  };
  const handleIcon4Enter = () => {
    setIcon4Hovered(true);
  };

  const handleIcon4Leave = () => {
    setIcon4Hovered(false);
  };

  const cardsData = [
    {
      title: "Global Access",
      description:
        "Trade major, minor, and exotic currency pairs from around the world.",
      imgUrl: "/images/instruments/forex/global_access.svg",
      imgHoverUrl: "/images/instruments/forex/global_access_hover.svg",
    },
    {
      title: "Tight Spreads",
      description: "Enjoy tight spreads and high trading volumes.",
      imgUrl: "/images/instruments/forex/tight_spreads.svg",
      imgHoverUrl: "/images/instruments/forex/tight_spreads_hover.svg",
    },
    {
      title: "Leverage Opportunities",
      description:
        "Take advantage of our competitive leverage options to maximize your trading potential.",
      imgUrl: "/images/instruments/forex/leverage.svg",
      imgHoverUrl: "/images/instruments/forex/leverage_hover.svg",
    },
    {
      title: "24/7 Customer Service",
      description:
        "Access assistance for any Forex related inquiry any time of the day!",
      imgUrl: "/images/instruments/forex/customer.svg",
      imgHoverUrl: "/images/instruments/forex/customer_hover.svg",
    },
  ];
  const tipsData = [
    {
      title: "Understand Market Trends",
      description:
        "Stay informed about global economic events and market trends.",
      imgUrl:
        "https://primexcapital.s3.eu-north-1.amazonaws.com/website/instruments/forex/tip1.svg",
    },
    {
      title: "Manage Your Risk",
      description:
        "Use stop-loss and take-profit orders to protect your trades.",
      imgUrl:
        "https://primexcapital.s3.eu-north-1.amazonaws.com/website/instruments/forex/tip2.svg",
    },
    {
      title: "Practice with a Demo Account",
      description:
        "Try our demo account to hone your skills before trading live.",
      imgUrl:
        "https://primexcapital.s3.eu-north-1.amazonaws.com/website/instruments/forex/tip3.svg",
    },
  ];
  const forexFaqs = [
    {
      key: 1,
      question: 'What does "Pip" mean in Forex Trading?',
      answer:
        'A pip, short for "price interest point" or "percentage in point," is the smallest price movement possible in the exchange rate of a currency pair according to forex market standards.',
    },
    {
      key: 2,
      question: "Can only professional traders participate in forex trading?",
      answer:
        "No, forex trading is not limited to professional traders. Anyone can participate in forex trading, including beginners. New traders can start with a demo account to practice and gain experience before trading with real money.",
    },
    {
      key: 3,
      question: "What is a ‘Stop Loss’ in Forex Trading?",
      answer:
        "A stop loss in forex trading is a tool recommended by brokers to help traders limit potential losses in a volatile market by automatically closing a position at a predetermined price.",
    },
    {
      key: 4,
      question: "What is Hedging in Forex Trading?",
      answer:
        "Hedging in forex trading involves companies locking in a specific exchange rate for future transactions to mitigate the risk of currency fluctuations when dealing with foreign countries.",
    },
  ];
  return (
    <>
      <Banner
        title="Experience The World’s Largest & Most Liquid Financial Market"
        description="Where Unmatched Opportunities Are Available"
        imgUrl="https://primexcapital.s3.eu-north-1.amazonaws.com/website/instruments/forex/Banner.webp"
      />
      <Featured
        cardsData={cardsData}
        title="Key Features"
        icon1Hovered={icon1Hovered}
        handleIcon1Enter={handleIcon1Enter}
        handleIcon1Leave={handleIcon1Leave}
      />
      <WhyTrade
        title="Why Trade Forex?"
        description="Forex trading offers diverse opportunities. Whether a day trader, swing trader, or long-term investor, you’ll find ample opportunities to trade currency pairs. Analyze market trends, economic indicators, and geopolitical events to make informed trading decisions."
        imgUrl="https://primexcapital.s3.eu-north-1.amazonaws.com/website/instruments/forex/why_forex.webp"
      />
      <Steps title="How to Get Started" />
      <Strategies tipsData={tipsData} />
      <ReadyToDive
        title="Ready to dive into Forex trading?"
        description={
          <>
            Sign Up and start exploring the exciting opportunities in
            <br />
            the Forex market with PrimeX!
          </>
        }
      />
      <Faq forexFaqs={forexFaqs} />
    </>
  );
};

export default Forex;
