"use client";
import { Tabs, Tab } from "@nextui-org/tabs";
import Script from "next/script";
import { useTranslations } from "next-intl";

const TradingOpportunities = () => {
  const t = useTranslations("home.tradingOpportunities");

  return (
    <section className="py-12 bg-accent relative">
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
        <Tabs radius="full" color="primary" className="tabs_custom">
          <Tab title={t("trading_opportunities_tab1")}>
            <div className="pt-8 text-xl">
              <iframe
                src="https://fxpricing.com/fx-widget/ticker-tape-widget.php?id=1,2,3,5,14,20&border=show&speed=50&click_target=blank&theme=light&tm-cr=FFFFFF&hr-cr=00000013&by-cr=28A745&sl-cr=DC3545&flags=circle&d_mode=compact-name&column=ask,bid,spread&lang=en&font=Arial, sans-serif"
                width="100%"
                height="85"
                style={{ border: "unset", position: "absolute", bottom: "0" }}
              ></iframe>
            </div>
          </Tab>
          <Tab title={t("trading_opportunities_tab2")}>
            <div className="pt-8 text-xl">
              <iframe
                src="https://fxpricing.com/fx-widget/ticker-tape-widget.php?id=1,2,3,5,14,20&border=show&speed=50&click_target=blank&theme=light&tm-cr=FFFFFF&hr-cr=00000013&by-cr=28A745&sl-cr=DC3545&flags=circle&d_mode=compact-name&column=ask,bid,spread&lang=en&font=Arial, sans-serif"
                width="100%"
                height="85"
                style={{ border: "unset", position: "absolute", bottom: "0" }}
              ></iframe>
            </div>
          </Tab>
          <Tab title={t("trading_opportunities_tab3")}>
            <div className="pt-8 text-xl">
              <iframe
                src="https://fxpricing.com/fx-widget/ticker-tape-widget.php?id=1,2,3,5,14,20&border=show&speed=50&click_target=blank&theme=light&tm-cr=FFFFFF&hr-cr=00000013&by-cr=28A745&sl-cr=DC3545&flags=circle&d_mode=compact-name&column=ask,bid,spread&lang=en&font=Arial, sans-serif"
                width="100%"
                height="85"
                style={{ border: "unset", position: "absolute", bottom: "0" }}
              ></iframe>
            </div>
          </Tab>
          <Tab title={t("trading_opportunities_tab4")}>
            <div className="pt-8 text-xl">
              <iframe
                src="https://fxpricing.com/fx-widget/ticker-tape-widget.php?id=1,2,3,5,14,20&border=show&speed=50&click_target=blank&theme=light&tm-cr=FFFFFF&hr-cr=00000013&by-cr=28A745&sl-cr=DC3545&flags=circle&d_mode=compact-name&column=ask,bid,spread&lang=en&font=Arial, sans-serif"
                width="100%"
                height="85"
                style={{ border: "unset", position: "absolute", bottom: "0" }}
              ></iframe>
            </div>
          </Tab>
          <Tab title={t("trading_opportunities_tab5")}>
            <div className="pt-8 text-xl">
              <iframe
                src="https://fxpricing.com/fx-widget/ticker-tape-widget.php?id=1,2,3,5,14,20&border=show&speed=50&click_target=blank&theme=light&tm-cr=FFFFFF&hr-cr=00000013&by-cr=28A745&sl-cr=DC3545&flags=circle&d_mode=compact-name&column=ask,bid,spread&lang=en&font=Arial, sans-serif"
                width="100%"
                height="85"
                style={{ border: "unset", position: "absolute", bottom: "0" }}
              ></iframe>
            </div>
          </Tab>
        </Tabs>
      </div>
    </section>
  );
};

export default TradingOpportunities;
