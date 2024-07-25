"use client";
import Banner from '@/our_pages/instruments/common/Banner';
import Faq from '@/our_pages/instruments/common/Faq';
import Featured from '@/our_pages/instruments/common/Featured';
import ReadyToDive from '@/our_pages/instruments/common/ReadyToDive';
import Steps from '@/our_pages/instruments/common/Steps';
import Strategies from '@/our_pages/instruments/common/Strategies';
import WhyTrade from '@/our_pages/instruments/common/WhyTrade';
import React, { useState } from 'react'

const Commodities = () => {
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
          title: "Analyze Supply and Demand",
          description:
            "Understand factors affecting commodity prices.",
          imgUrl:
            "https://primexcapital.s3.eu-north-1.amazonaws.com/website/instruments/commodities/tip1.svg",
        },
        {
          title: "Stay Informed",
          description:
            "Keep up with market news and events impacting commodities.",
          imgUrl:
            "https://primexcapital.s3.eu-north-1.amazonaws.com/website/instruments/commodities/tip2.svg",
        },
        {
          title: "Use Risk Management Tools",
          description:
            "Protect your trades with stop-loss and take-profit orders.",
          imgUrl:
            "https://primexcapital.s3.eu-north-1.amazonaws.com/website/instruments/commodities/tip3.svg",
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
    title="Immerse Yourself in New Trading Avenues and"
    description='Explore Growth with Commodities!'
    imgUrl='https://primexcapital.s3.eu-north-1.amazonaws.com/website/instruments/commodities/Banner.webp'
    />
   <Featured 
    cardsData={cardsData}
    title='Key Features'
    icon1Hovered={icon1Hovered}
    handleIcon1Enter={handleIcon1Enter}
    handleIcon1Leave={handleIcon1Leave}
    />
     <WhyTrade
        title="Why Trade Commodities?"
        description="Commodities trading offers opportunities based on supply and demand factors, geopolitical events, and market trends. Explore the potential for profit through strategic trading and market analysis."
        imgUrl="https://primexcapital.s3.eu-north-1.amazonaws.com/website/instruments/commodities/why_commodities.webp"
      />
       <Steps title="How to Get Started" />
       <Strategies tipsData={tipsData} />
       <ReadyToDive
        title="Explore the world of commodities trading with PrimeX!"
        description="Join Us and start your trading journey."
      />
      <Faq forexFaqs={forexFaqs}/>
    </>
  )
}

export default Commodities;