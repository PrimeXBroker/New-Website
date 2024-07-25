"use client";
import Banner from '@/our_pages/instruments/common/Banner';
import Faq from '@/our_pages/instruments/common/Faq';
import Featured from '@/our_pages/instruments/common/Featured';
import ReadyToDive from '@/our_pages/instruments/common/ReadyToDive';
import Steps from '@/our_pages/instruments/common/Steps';
import Strategies from '@/our_pages/instruments/common/Strategies';
import WhyTrade from '@/our_pages/instruments/common/WhyTrade';
import React, { useState } from 'react'

const Indices = () => {
    const [icon1Hovered, setIcon1Hovered] = useState(false);
 
    const handleIcon1Enter = () => {
      setIcon1Hovered(true);
    };
    const handleIcon1Leave = () => {
      setIcon1Hovered(false);
    };
    const cardsData = [
        {
          title: "Diverse Metal Options",
          description:
            "Trade precious metals like gold and silver or explore industrial metals.",
          imgUrl: "/images/instruments/metals/metals_options.svg",
          imgHoverUrl: "/images/instruments/metals/metals_options_hover.svg",
        },
        {
          title: "Tight Spreads",
          description: "Enjoy tight spreads and high trading volumes.",
          imgUrl: "/images/instruments/forex/tight_spreads.svg",
          imgHoverUrl: "/images/instruments/forex/tight_spreads_hover.svg",
        },
        {
          title: "Global Market",
          description:
            " Access a broad range of metal markets from around the world.",
          imgUrl: "/images/instruments/metals/global_access.svg",
          imgHoverUrl: "/images/instruments/metals/global_access_hover.svg",
        },
        {
          title: "Flexible Trading Conditions",
          description:
            "Benefit from competitive spreads and various trading options.",
          imgUrl: "/images/instruments/metals/flexible.svg",
          imgHoverUrl: "/images/instruments/metals/flexible_hover.svg",
        },
      ];
      const tipsData = [
        {
          title: "Understand Market Trends",
          description:
            "Follow market trends and economic indicators.",
          imgUrl:
            "https://primexcapital.s3.eu-north-1.amazonaws.com/website/instruments/indices/Tips1.svg",
        },
        {
          title: "Monitor Economic Events",
          description:
            "Stay updated on events that could impact market indices.",
          imgUrl:
            "https://primexcapital.s3.eu-north-1.amazonaws.com/website/instruments/indices/Tips2.svg",
        },
        {
          title: "Leverage Wisely",
          description:
            "Use leverage to enhance your trading potential.",
          imgUrl:
            "https://primexcapital.s3.eu-north-1.amazonaws.com/website/instruments/indices/Tips3.svg",
        },
      ];
      const forexFaqs = [
        {
          key: 1,
          question: 'What Does it Mean to Trade an Index?',
          answer:
            'Trading an index involves buying or selling a specific stock market index, which measures the performance of a group of stocks within a particular market.',
        },
        {
          key: 2,
          question: "Can I Profit from Index Trading?",
          answer:
            "Yes, you can profit from index trading, but there is also the potential for losses, similar to trading other instruments.",
        },
        {
          key: 3,
          question: "Which Are the Most Popular Stock Indices?",
          answer:
            "Popular stock indices include the S&P 500, Nasdaq, Dow Jones, FTSE 100, Nifty 50, and Nikkei 225.",
        },
        {
          key: 4,
          question: "What Moves the Index Price?",
          answer:
            "Index prices are influenced by the price changes of the index's constituent stocks.",
        },
        {
            key: 5,
            question: "What is the Best Time to Trade Indices?",
            answer:
              "The best time to trade indices is during the respective market's trading hours. For example, trade the Nasdaq when the US markets are open. Whether to trade stocks or indices depends on an individual's risk appetite and financial goals. There is no universal answer.",
          }
      ];
  return (
    <>
    <Banner
    title="Experience the excitement of indices trading and"
    description='take advantage of a range of opportunities to grow your investment portfolio!'
    imgUrl='https://primexcapital.s3.eu-north-1.amazonaws.com/website/instruments/indices/Banner.webp'
    />
   <Featured 
    cardsData={cardsData}
    title='Key Features'
    icon1Hovered={icon1Hovered}
    handleIcon1Enter={handleIcon1Enter}
    handleIcon1Leave={handleIcon1Leave}
    />
     <WhyTrade
        title="Why Trade Stocks?"
        description="Indices trading provides a way to invest in the performance of entire markets rather than individual stocks. Capitalize on market trends, economic data, and geopolitical events."
        imgUrl="https://primexcapital.s3.eu-north-1.amazonaws.com/website/instruments/indices/why_indices.webp"
      />
       <Steps title="How to Get Started" />
       <Strategies tipsData={tipsData} />
       <ReadyToDive
        title="Start trading indices with PrimeX today!"
        description="Get Started and explore our diverse range of indices."
      />
      <Faq forexFaqs={forexFaqs}/>
    </>
  )
}

export default Indices;