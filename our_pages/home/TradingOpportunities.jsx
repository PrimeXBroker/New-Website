"use client";
import { Tabs, Tab } from "@nextui-org/tabs";
import Script from "next/script";
import { useTranslations } from "next-intl";
import Indices from "./widgets/Indices";
import Forex from "./widgets/forex";
import Commodities from "./widgets/Commodities";
import Stocks from "./widgets/Stocks";
import Crypto from "./widgets/Crypto";

const TradingOpportunities = () => {
  const t = useTranslations("home.tradingOpportunities");

  return (
    <section className="pt-12 bg-accent relative">
      <h1
        className="sectionHeading"
        data-aos-easing="ease-out"
        data-aos-duration={1000}
        data-aos="slide-up"
      >
        {t("trading_opportunities_title")}
      </h1>
      <p
        className="sectionPara text-center py-4"
        data-aos-easing="ease-out"
        data-aos-duration={1000}
        data-aos="slide-up"
      >
        {t("trading_opportunities_desc")}
      </p>
      <div className="text-center mt-8">
        <Tabs classNames={{
          panel:'p-0',
        }} radius="full" color="primary" className="tabs_custom">
          <Tab title={t("trading_opportunities_tab1")}>
            <div className="pt-8 text-xl">
              <Forex />
            </div>
          </Tab>
          <Tab title={t("trading_opportunities_tab2")}>
            <div className="pt-8 text-xl">
              <Indices />
            </div>
          </Tab>
          <Tab title={t("trading_opportunities_tab3")}>
            <div className="pt-8 text-xl">
              <Commodities />
            </div>
          </Tab>
          <Tab title={t("trading_opportunities_tab4")}>
            <div className="pt-8 text-xl">
              <Stocks />
            </div>
          </Tab>
          <Tab title={t("trading_opportunities_tab5")}>
            <div className="pt-8 text-xl">
              <Crypto />
            </div>
          </Tab>
        </Tabs>
      </div>
    </section>
  );
};

export default TradingOpportunities;
