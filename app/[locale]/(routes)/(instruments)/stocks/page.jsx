"use client";
import Banner from '@/our_pages/instruments/common/Banner';
import Faq from '@/our_pages/instruments/common/Faq';
import Featured from '@/our_pages/instruments/common/Featured';
import ReadyToDive from '@/our_pages/instruments/common/ReadyToDive';
import Steps from '@/our_pages/instruments/common/Steps';
import Strategies from '@/our_pages/instruments/common/Strategies';
import WhyTrade from '@/our_pages/instruments/common/WhyTrade';
import React, { useState } from 'react'

const Stocks = () => {
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
          title: "Research Companies",
          description:
            "Perform thorough research on companies before investing.",
          imgUrl:
            "https://primexcapital.s3.eu-north-1.amazonaws.com/website/instruments/stocks/tip1.svg",
        },
        {
          title: "Diversify Your Investments",
          description:
            "Spread your investments across different sectors and companies.",
          imgUrl:
            "https://primexcapital.s3.eu-north-1.amazonaws.com/website/instruments/stocks/tip2.svg",
        },
        {
          title: "Stay Updated",
          description:
            "Keep up with financial news and market trends.",
          imgUrl:
            "https://primexcapital.s3.eu-north-1.amazonaws.com/website/instruments/stocks/tip3.svg",
        },
      ];
      const forexFaqs = [
        {
          key: 1,
          question: 'What are Stock CFDs?',
          answer:
            'Stocks CFDs allow traders to speculate on the price movements of shares without owning the actual shares. They enable trading in both rising and falling markets and are leveraged products, which can amplify both potential profits and losses.',
        },
        {
          key: 2,
          question: "What are some effective stock trading strategies for beginners?",
          answer:
            "Common stock trading strategies for beginners include active trading, day trading, position trading, swing trading, and scalping. It's crucial to identify and time market opportunities and use stop loss orders to minimize losses.",
        },
        {
          key: 3,
          question: "Where can I open trading account to trade stock CFDs?",
          answer:
            "To trade CFD stocks online, you can open a trading account, with us and choose to trade research companies and industries, and then open a position based on your analysis",
        },
        {
          key: 4,
          question: "Is Trading Share CFDs Different from Buying Shares in a Company?",
          answer:
            "Yes, trading share CFDs differs from buying shares as CFDs are leveraged and don't involve ownership of the stock. When you buy shares, you own a part of the company, while trading CFDs involves speculating on price movements with a smaller initial investment.",
        }
      ];
  return (
    <>
    <Banner
    imgUrl='https://primexcapital.s3.eu-north-1.amazonaws.com/website/instruments/stocks/Banner.webp'
    title='Discover How Stocks trading with us Can Open Doors'
    description='To Exciting Investment opportunities for you!'
    />
    <Featured 
    cardsData={cardsData}
    title='Key Features'
    icon1Hovered={icon1Hovered}
    handleIcon1Enter={handleIcon1Enter}
    handleIcon1Leave={handleIcon1Leave}
    />
    <WhyTrade
        title="Trading Opportunities"
        description="Shares trading offers numerous opportunities for investors to profit from market movements and company performance. Analyze financial reports, market conditions, and company news to make strategic investment decisions."
        imgUrl="https://primexcapital.s3.eu-north-1.amazonaws.com/website/instruments/stocks/why_stocks.webp"
      />
       <Steps title="How to Get Started" />
       <Strategies tipsData={tipsData} />
       <ReadyToDive
        title="Get started with shares trading today at PrimeX!"
        description="Open Your Account and explore our range of stock options."
      />
      <Faq forexFaqs={forexFaqs}/>
    </>
  )
}

export default Stocks;