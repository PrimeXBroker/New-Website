import {
  BarChart2,
  DollarSign,
  LineChart,
  Package,
  TrendingUp,
} from "lucide-react";

export const tradingTabs = [
  {
    name: "Popular",
    icon: "https://primexcapital.s3.eu-north-1.amazonaws.com/website/homepage/trading-widget/Popular.svg",
    iconActive:
      "https://primexcapital.s3.eu-north-1.amazonaws.com/website/homepage/trading-widget/Popular-Active.svg",
    symbol: [
      {
        tradingSymbol: "PrimeX_REST_RA||EURUSD||EURUSD",
        image:
          "https://primexcapital.s3.eu-north-1.amazonaws.com/website/homepage/trading-widget/EURUSD.svg",
        name: "EURUSD",
      },
      {
        tradingSymbol: "PrimeX_REST_RA||XAUUSD||XAUUSD",
        image:
          "https://primexcapital.s3.eu-north-1.amazonaws.com/website/homepage/trading-widget/Gold.svg",
        name: "GOLD",
      },
      {
        tradingSymbol: "PrimeX_REST_RA||US30.spot||US30.spot",
        image:
          "https://primexcapital.s3.eu-north-1.amazonaws.com/website/homepage/trading-widget/US30-new.svg",
        name: "US30",
      },
      {
        tradingSymbol: "PrimeX_REST_RA||US100.spot||US100.spot",
        image:
          "https://primexcapital.s3.eu-north-1.amazonaws.com/website/homepage/trading-widget/US100-new.svg",
        name: "US100",
      },
      {
        tradingSymbol: "PrimeX_REST_RA||WTI.spot||WTI.spot",
        image:
          "https://primexcapital.s3.eu-north-1.amazonaws.com/website/homepage/trading-widget/Oil.svg",
        name: "Oil",
      },
      {
        tradingSymbol: "PrimeX_REST_RA||NGAS.spot||NGAS.spot",
        image:
          "https://primexcapital.s3.eu-north-1.amazonaws.com/website/homepage/trading-widget/Natural+Gas.svg",
        name: "Natural GAS",
      },
      
      {
        tradingSymbol: "PrimeX_REST_RA||BTCUSD||BTCUSD",
        image:
          "https://primexcapital.s3.eu-north-1.amazonaws.com/website/homepage/trading-widget/Bitcoin.svg",
        name: "Bitcoin",
      },
    ],
  },
  {
    name: "Forex",
    icon: "https://primexcapital.s3.eu-north-1.amazonaws.com/website/homepage/trading-widget/Forex.svg",
    iconActive:
      "https://primexcapital.s3.eu-north-1.amazonaws.com/website/homepage/trading-widget/Forex-Active.svg",
    symbol: [
      {
        tradingSymbol: "PrimeX_REST_RA||GBPUSD||GBPUSD",
        image:
          "https://primexcapital.s3.eu-north-1.amazonaws.com/website/homepage/trading-widget/GBPUSD.svg",
        name: "GBPUSD",
      },
      {
        tradingSymbol: "PrimeX_REST_RA||AUDUSD||AUDUSD",
        image:
          "https://primexcapital.s3.eu-north-1.amazonaws.com/website/homepage/trading-widget/AUDUSD.svg",
        name: "AUDUSD",
      },
      {
        tradingSymbol: "PrimeX_REST_RA||USDJPY||USDJPY",
        image:
          "https://primexcapital.s3.eu-north-1.amazonaws.com/website/homepage/trading-widget/USDJPY.svg",
        name: "USDJPY",
      },
      
      {
        tradingSymbol: "PrimeX_REST_RA||USDCHF||USDCHF",
        image:
          "https://primexcapital.s3.eu-north-1.amazonaws.com/website/homepage/trading-widget/USDCHF.svg",
        name: "USDCHF",
      },
      {
        tradingSymbol: "PrimeX_REST_RA||USDCAD||USDCAD",
        image:
          "https://primexcapital.s3.eu-north-1.amazonaws.com/website/homepage/trading-widget/USDCAD.svg",
        name: "USDCAD",
      },
      {
        tradingSymbol: "PrimeX_REST_RA||GBPJPY||GBPJPY",
        image:
          "https://primexcapital.s3.eu-north-1.amazonaws.com/website/homepage/trading-widget/GBPJPY.svg",
        name: "GBPJPY",
      },
      {
        tradingSymbol: "PrimeX_REST_RA||EURGBP||EURGBP",
        image:
          "https://primexcapital.s3.eu-north-1.amazonaws.com/website/homepage/trading-widget/EURGBP.svg",
        name: "EURGBP",
      },
    ],
  },
  {
    name: "Crypto",
    icon: "https://primexcapital.s3.eu-north-1.amazonaws.com/website/homepage/trading-widget/Crypto.svg",
    iconActive:
      "https://primexcapital.s3.eu-north-1.amazonaws.com/website/homepage/trading-widget/Crypto-Active.svg",
    symbol: [
      {
        tradingSymbol: "PrimeX_REST_RA||BTCUSD||BTCUSD",
        image:
          "https://primexcapital.s3.eu-north-1.amazonaws.com/website/homepage/trading-widget/BTCEUR.svg",
        name: "BTCUSD",
      },
      {
        tradingSymbol: "PrimeX_REST_RA||DOGUSD||DOGUSD",
        image:
          "https://primexcapital.s3.eu-north-1.amazonaws.com/website/homepage/trading-widget/DOGUSD.svg",
        name: "DOGUSD",
      },
      {
        tradingSymbol: "PrimeX_REST_RA||DOTUSD||DOTUSD",
        image:
          "https://primexcapital.s3.eu-north-1.amazonaws.com/website/homepage/trading-widget/DOTUSD.svg",
        name: "DOTUSD",
      },
      {
        tradingSymbol: "PrimeX_REST_RA||ETHUSD||ETHUSD",
        image:
          "https://primexcapital.s3.eu-north-1.amazonaws.com/website/homepage/trading-widget/ETHUSD.svg",
        name: "ETHUSD",
      },
      {
        tradingSymbol: "PrimeX_REST_RA||TRXUSD||TRXUSD",
        image:
          "https://primexcapital.s3.eu-north-1.amazonaws.com/website/homepage/trading-widget/TRXUSD.svg",
        name: "TRXUSD",
      },
      {
        tradingSymbol: "PrimeX_REST_RA||XLMUSD||XLMUSD",
        image:
          "https://primexcapital.s3.eu-north-1.amazonaws.com/website/homepage/trading-widget/XLMUSD.svg",
        name: "XLMUSD",
      },
      {
        tradingSymbol: "PrimeX_REST_RA||XRPUSD||XRPUSD",
        image:
          "https://primexcapital.s3.eu-north-1.amazonaws.com/website/homepage/trading-widget/XPRUSD.svg",
        name: "XRPUSD",
      },
    ],
  },
  {
    name: "Metals",
    icon: "https://primexcapital.s3.eu-north-1.amazonaws.com/website/homepage/trading-widget/Metals.svg",
    iconActive:
      "https://primexcapital.s3.eu-north-1.amazonaws.com/website/homepage/trading-widget/Metals-Active.svg",
    symbol: [
      {
        tradingSymbol: "PrimeX_REST_RA||XAUUSD||XAUUSD",
        image:
          "https://primexcapital.s3.eu-north-1.amazonaws.com/website/homepage/trading-widget/Gold.svg",
        name: "GOLD",
      },
      {
        tradingSymbol: "PrimeX_REST_RA||XAGUSD||XAGUSD",
        image:
          "https://primexcapital.s3.eu-north-1.amazonaws.com/website/homepage/trading-widget/Silver.svg",
        name: "Silver",
      },
      {
        tradingSymbol: "PrimeX_REST_RA||ALUMINIUM||ALUMINIUM",
        image:
          "https://primexcapital.s3.eu-north-1.amazonaws.com/website/homepage/trading-widget/Aluminum.svg",
        name: "ALUMINIUM",
      },
      {
        tradingSymbol: "PrimeX_REST_RA||COPPER||COPPER",
        image:
          "https://primexcapital.s3.eu-north-1.amazonaws.com/website/homepage/trading-widget/Copper.svg",
        name: "COPPER",
      },
      {
        tradingSymbol: "PrimeX_REST_RA||XPDUSD||XPDUSD",
        image:
          "https://primexcapital.s3.eu-north-1.amazonaws.com/website/homepage/trading-widget/Palladium.svg",
        name: "Palladium",
      },
      {
        tradingSymbol: "PrimeX_REST_RA||XPTUSD||XPTUSD",
        image:
          "https://primexcapital.s3.eu-north-1.amazonaws.com/website/homepage/trading-widget/Platinum.svg",
        name: "Platinum",
      },
      {
        tradingSymbol: "PrimeX_REST_RA||ZINC||ZINC",
        image:
          "https://primexcapital.s3.eu-north-1.amazonaws.com/website/homepage/trading-widget/ZINC.svg",
        name: "ZINC",
      },
    ],
  },
  {
    name: "Indices",
    icon: "https://primexcapital.s3.eu-north-1.amazonaws.com/website/homepage/trading-widget/Indices.svg",
    iconActive:
      "https://primexcapital.s3.eu-north-1.amazonaws.com/website/homepage/trading-widget/Indices-Active.svg",
    symbol: [
      {
        tradingSymbol: "PrimeX_REST_RA||AUS200.spot||AUS200.spot",
        image:
          "https://primexcapital.s3.eu-north-1.amazonaws.com/website/homepage/trading-widget/AUS200.spot.svg",
        name: "AUS200.spot",
      },
      {
        tradingSymbol: "PrimeX_REST_RA||EU50.spot||EU50.spot",
        image:
          "https://primexcapital.s3.eu-north-1.amazonaws.com/website/homepage/trading-widget/EU50.spot.svg",
        name: "EU50.spot",
      },
      {
        tradingSymbol: "PrimeX_REST_RA||FRA40.spot||FRA40.spot",
        image:
          "https://primexcapital.s3.eu-north-1.amazonaws.com/website/homepage/trading-widget/FRA40.svg",
        name: "FRA40.spot",
      },
      {
        tradingSymbol: "PrimeX_REST_RA||GER30.spot||GER30.spot",
        image:
          "https://primexcapital.s3.eu-north-1.amazonaws.com/website/homepage/trading-widget/Ger30.svg",
        name: "GER30.spot",
      },
      {
        tradingSymbol: "PrimeX_REST_RA||ITA40.spot||ITA40.spot",
        image:
          "https://primexcapital.s3.eu-north-1.amazonaws.com/website/homepage/trading-widget/ITA40.svg",
        name: "ITA40.spot",
      },
      {
        tradingSymbol: "PrimeX_REST_RA||JAP225.spot||JAP225.spot",
        image:
          "https://primexcapital.s3.eu-north-1.amazonaws.com/website/homepage/trading-widget/JAP225.svg",
        name: "JAP225.spot",
      },
      {
        tradingSymbol: "PrimeX_REST_RA||UK100.spot||UK100.spot",
        image:
          "https://primexcapital.s3.eu-north-1.amazonaws.com/website/homepage/trading-widget/UK100.svg",
        name: "UK100.spot",
      },
     
    ],
  },
  {
    name: "Commodities",
    icon: "https://primexcapital.s3.eu-north-1.amazonaws.com/website/homepage/trading-widget/Commodities.svg",
    iconActive:
      "https://primexcapital.s3.eu-north-1.amazonaws.com/website/homepage/trading-widget/Commodities-Active.svg",
    symbol: [
      {
        tradingSymbol: "PrimeX_REST_RA||BRENT.spot||BRENT.spot",
        image:
          "https://primexcapital.s3.eu-north-1.amazonaws.com/website/homepage/trading-widget/BRENT.svg",
        name: "BRENT",
      },
      {
        tradingSymbol: "PrimeX_REST_RA||COCOA.spot||COCOA.spot",
        image:
          "https://primexcapital.s3.eu-north-1.amazonaws.com/website/homepage/trading-widget/COCOA.svg",
        name: "COCOA",
      },
      {
        tradingSymbol: "PrimeX_REST_RA||COFFEE.spot||COFFEE.spot",
        image:
          "https://primexcapital.s3.eu-north-1.amazonaws.com/website/homepage/trading-widget/COFFEE.svg",
        name: "COFFEE",
      },
      {
        tradingSymbol: "PrimeX_REST_RA||CORN.spot||CORN.spot",
        image:
          "https://primexcapital.s3.eu-north-1.amazonaws.com/website/homepage/trading-widget/CORN.svg",
        name: "CORN",
      },
      
      {
        tradingSymbol: "PrimeX_REST_RA||SOYBEAN.spot||SOYBEAN.spot",
        image:
          "https://primexcapital.s3.eu-north-1.amazonaws.com/website/homepage/trading-widget/SOYBEAN.svg",
        name: "SOYBEAN",
      },
      {
        tradingSymbol: "PrimeX_REST_RA||SUGAR.spot||SUGAR.spot",
        image:
          "https://primexcapital.s3.eu-north-1.amazonaws.com/website/homepage/trading-widget/SUGAR.svg",
        name: "SUGAR",
      },
      {
        tradingSymbol: "PrimeX_REST_RA||WHEAT.spot||WHEAT.spot",
        image:
          "https://primexcapital.s3.eu-north-1.amazonaws.com/website/homepage/trading-widget/WHEAT.svg",
        name: "WHEAT",
      },
    ],
  },
];
