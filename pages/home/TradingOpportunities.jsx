"use client";
import { Tabs, Tab } from "@nextui-org/tabs";
const TradingOpportunities = () => {
  return (
    <section className="py-12">
      <h1 className="sectionHeading">Explore 500+ Trading Opportunities</h1>
      <p className="sectionPara text-center py-4">
        Dive into a diverse array of assets including forex, indices,
        commodities, cryptocurrencies, and stocks
      </p>
      <div className="text-center mt-8">
        <Tabs radius="full" color="primary">
          <Tab title="Forex">
            <div className="py-24 text-xl">Forex Ticker Heree</div>
          </Tab>
          <Tab title="Indicies">
            <div className="py-24 text-xl">Indicies Ticker Heree</div>
          </Tab>
          <Tab title="Commodities">
            <div className="py-24 text-xl">Commodities Ticker Heree</div>
          </Tab>
          <Tab title="Stocks">
            <div className="py-24 text-xl">Stocks Ticker Heree</div>
          </Tab>
          <Tab title="Crypto">
            <div className="py-24 text-xl">Crypto Ticker Heree</div>
          </Tab>
        </Tabs>
      </div>
    </section>
  );
};

export default TradingOpportunities;
