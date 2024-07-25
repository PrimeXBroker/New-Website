"use client";
import Banner from '@/our_pages/instruments/common/Banner';
import Faq from '@/our_pages/instruments/common/Faq';
import Featured from '@/our_pages/instruments/common/Featured';
import ReadyToDive from '@/our_pages/instruments/common/ReadyToDive';
import Steps from '@/our_pages/instruments/common/Steps';
import Strategies from '@/our_pages/instruments/common/Strategies';
import WhyTrade from '@/our_pages/instruments/common/WhyTrade';
import React, { useState } from 'react'


const Metals = () => {
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
      title: "Follow Market Trends",
      description:
        "Stay informed about global economic events and market trends.",
      imgUrl:
        "https://primexcapital.s3.eu-north-1.amazonaws.com/website/instruments/metals/tip1.svg",
    },
    {
      title: "Diversify Your Portfolio",
      description:
        "Use stop-loss and take-profit orders to protect your trades.",
      imgUrl:
        "https://primexcapital.s3.eu-north-1.amazonaws.com/website/instruments/metals/tip2.svg",
    },
    {
      title: "Use Technical Analysis",
      description:
        "Try our demo account to hone your skills before trading live.",
      imgUrl:
        "https://primexcapital.s3.eu-north-1.amazonaws.com/website/instruments/metals/tip3.svg",
    },
  ];
  const forexFaqs = [
    {
      key: 1,
      question: 'Why Invest in Precious Metals?',
      answer:
        'Investing in precious metals provides diversification, serves as a hedge against inflation and currency devaluation, and offers the potential for significant returns during market volatility.',
    },
    {
      key: 2,
      question: "How Can I Start Trading Precious Metals?",
      answer:
        "To begin trading precious metals, open a trading account with a broker, research the market, choose your preferred metals, and place your trades based on market analysis.",
    },
    {
      key: 3,
      question: "What Factors Influence Precious Metal Prices?",
      answer:
        "Prices of precious metals are influenced by factors such as supply and demand, geopolitical events, inflation rates, and changes in currency values.",
    },
    {
      key: 4,
      question: "What is the Difference Between Physical and Paper Precious Metals?",
      answer:
        "Physical precious metals refer to tangible assets like gold bars and silver coins, whereas paper precious metals involve financial instruments like ETFs and futures contracts that track the value of these metals.",
    },
    {
      key: 5,
      question: "What is the Role of Precious Metals in Portfolio Diversification?",
      answer:
        "Precious metals can enhance portfolio diversification by providing a non-correlated asset class, reducing overall risk, and potentially improving returns during economic downturns.",
    },
  ];
  return (
    <>
    <Banner
    imgUrl='https://primexcapital.s3.eu-north-1.amazonaws.com/website/instruments/metals/Banner.webp'
    title='Diversify With Primex And Explore The Vast Opportunities In Metals Trading'
    description='Dabble With Gold, Silver, And Platinum, Key Commodities With Both Investment And Industrial Applications!'

    />
    <Featured 
    cardsData={cardsData} 
    title='Key Features'
    icon1Hovered={icon1Hovered}
    handleIcon1Enter={handleIcon1Enter}
    handleIcon1Leave={handleIcon1Leave}
    />
     <WhyTrade
        title="Why Trade Metals?"
        description="Metals offer a range of trading opportunities, from hedging against inflation to speculating on price movements. Take advantage of market fluctuations and invest in metals for both short-term gains and long-term growth."
        imgUrl="https://primexcapital.s3.eu-north-1.amazonaws.com/website/instruments/metals/why_metals.webp"
      />
       <Steps title="How to Get Started" />
       <Strategies tipsData={tipsData} />
       <ReadyToDive
        title="Start trading metals today with PrimeX!"
        description="Join Us and take advantage of our robust trading platform."
      />
      <Faq forexFaqs={forexFaqs}/>
    </>
  )
}

export default Metals;