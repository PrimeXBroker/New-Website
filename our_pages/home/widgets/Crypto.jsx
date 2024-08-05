
"use client"
import React, { useEffect } from 'react';

export default function Crypto() {
    useEffect(() => {
        const container = document.getElementById('tradingview-widget-container-crypto');
        if (container) {
            container.innerHTML = ''; // Clear the container before appending the new script
            const script = document.createElement('script');
            script.type = 'text/javascript';
            script.async = true;
            script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-ticker-tape.js';
            script.innerHTML = JSON.stringify({
                "symbols": [
                    {
                        "description": "",
                        "proName": "BINANCE:ADAUSD"
                    },
                    {
                        "description": "",
                        "proName": "SKILLING:AVEUSD"
                    },
                    {
                        "description": "",
                        "proName": "BITSTAMP:BCHBTC"
                    },
                    {
                        "description": "",
                        "proName": "COINBASE:BCHUSD"
                    },
                    {
                        "description": "",
                        "proName": "BINANCE:BNBUSD"
                    },
                    {
                        "description": "",
                        "proName": "CRYPTO:BSVUSD"
                    },
                    {
                        "description": "",
                        "proName": "COINBASE:BTCEUR"
                    },
                    {
                        "description": "",
                        "proName": "BITSTAMP:BTCUSD"
                    },
                    {
                        "description": "",
                        "proName": "EASYMARKETS:DOGUSD"
                    },
                    {
                        "description": "",
                        "proName": "COINBASE:DOTUSD"
                    }
                ],
                showSymbolLogo: true,
                colorTheme: "light",
                isTransparent: false,
                displayMode: "compact",
                locale: "en"
            });
            container.appendChild(script);
        }
    }, []);

    return (
        <div id="tradingview-widget-container-crypto" className="tradingview-widget-container-crypto">
        </div>
    );
}




// <!-- TradingView Widget BEGIN -->
// <div class="tradingview-widget-container">
//   <div class="tradingview-widget-container__widget"></div>
//   <div class="tradingview-widget-copyright"><a href="https://www.tradingview.com/" rel="noopener nofollow" target="_blank"><span class="blue-text">Track all markets on TradingView</span></a></div>
//   <script type="text/javascript" src="https://s3.tradingview.com/external-embedding/embed-widget-tickers.js" async>
//   {
//   "symbols": [
//     {
//       "description": "",
//       "proName": "BINANCE:ADAUSD"
//     },
//     {
//       "description": "",
//       "proName": "SKILLING:AVEUSD"
//     },
//     {
//       "description": "",
//       "proName": "BITSTAMP:BCHBTC"
//     },
//     {
//       "description": "",
//       "proName": "COINBASE:BCHUSD"
//     },
//     {
//       "description": "",
//       "proName": "BINANCE:BNBUSD"
//     },
//     {
//       "description": "",
//       "proName": "CRYPTO:BSVUSD"
//     },
//     {
//       "description": "",
//       "proName": "COINBASE:BTCEUR"
//     },
//     {
//       "description": "",
//       "proName": "BITSTAMP:BTCUSD"
//     },
//     {
//       "description": "",
//       "proName": "EASYMARKETS:DOGUSD"
//     },
//     {
//       "description": "",
//       "proName": "COINBASE:DOTUSD"
//     }
//   ],
//   "isTransparent": false,
//   "showSymbolLogo": true,
//   "colorTheme": "light",
//   "locale": "en"
// }
//   </script>
// </div>
// <!-- TradingView Widget END -->