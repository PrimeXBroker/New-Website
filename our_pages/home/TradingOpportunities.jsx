"use client";
import { Tabs, Tab } from "@nextui-org/tabs";
import Script from "next/script";

const TradingOpportunities = () => {
  return (
    <section className="py-12 bg-accent relative">
      <h1
        className="sectionHeading"
        data-aos-easing="ease-out"
        data-aos-duration={1000}
        data-aos="slide-up"
      >
        Explore 500+ Trading Opportunities
      </h1>
      <p
        className="sectionPara text-center py-4"
        data-aos-easing="ease-out"
        data-aos-duration={1000}
        data-aos="slide-up"
      >
        Dive into a diverse array of assets including forex, indices,
        commodities, cryptocurrencies, and stocks
      </p>
      <div className="text-center mt-8">
        <Tabs radius="full" color="primary" className="tabs_custom">
          <Tab title="Forex">
            <div className="pt-8 text-xl">
              <iframe
                src="https://fxpricing.com/fx-widget/ticker-tape-widget.php?id=1,2,3,5,14,20&border=show&speed=50&click_target=blank&theme=light&tm-cr=FFFFFF&hr-cr=00000013&by-cr=28A745&sl-cr=DC3545&flags=circle&d_mode=compact-name&column=ask,bid,spread&lang=en&font=Arial, sans-serif"
                width="100%"
                height="85"
                style={{ border: "unset", position: "absolute", bottom: "0" }}
              ></iframe>
            </div>
          </Tab>
          <Tab title="Indicies">
            <div className="pt-8 text-xl">
              <iframe
                src="https://fxpricing.com/fx-widget/ticker-tape-widget.php?id=1,2,3,5,14,20&border=show&speed=50&click_target=blank&theme=light&tm-cr=FFFFFF&hr-cr=00000013&by-cr=28A745&sl-cr=DC3545&flags=circle&d_mode=compact-name&column=ask,bid,spread&lang=en&font=Arial, sans-serif"
                width="100%"
                height="85"
                style={{ border: "unset", position: "absolute", bottom: "0" }}
              ></iframe>
            </div>
          </Tab>
          <Tab title="Commodities">
            <div className="pt-8 text-xl">
              <iframe
                src="https://fxpricing.com/fx-widget/ticker-tape-widget.php?id=1,2,3,5,14,20&border=show&speed=50&click_target=blank&theme=light&tm-cr=FFFFFF&hr-cr=00000013&by-cr=28A745&sl-cr=DC3545&flags=circle&d_mode=compact-name&column=ask,bid,spread&lang=en&font=Arial, sans-serif"
                width="100%"
                height="85"
                style={{ border: "unset", position: "absolute", bottom: "0" }}
              ></iframe>
            </div>
          </Tab>
          <Tab title="Stocks">
            <div className="pt-8 text-xl">
              <iframe
                src="https://fxpricing.com/fx-widget/ticker-tape-widget.php?id=1,2,3,5,14,20&border=show&speed=50&click_target=blank&theme=light&tm-cr=FFFFFF&hr-cr=00000013&by-cr=28A745&sl-cr=DC3545&flags=circle&d_mode=compact-name&column=ask,bid,spread&lang=en&font=Arial, sans-serif"
                width="100%"
                height="85"
                style={{ border: "unset", position: "absolute", bottom: "0" }}
              ></iframe>
            </div>
          </Tab>
          <Tab title="Crypto">
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
