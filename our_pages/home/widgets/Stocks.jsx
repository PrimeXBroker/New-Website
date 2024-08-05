
"use client"
import React, { useEffect } from 'react';

export default function Stocks() {
    useEffect(() => {
        const container = document.getElementById('tradingview-widget-container-stocks');
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
                      "proName": "OTC:AAGIY"
                    },
                    {
                      "description": "",
                      "proName": "NASDAQ:AAL"
                    },
                    {
                      "description": "",
                      "proName": "NYSE:ABT"
                    },
                    {
                      "description": "",
                      "proName": "NASDAQ:ADBE"
                    },
                    {
                      "description": "",
                      "proName": "XETR:ADS"
                    },
                    {
                      "description": "",
                      "proName": "OTC:AHCHY"
                    },
                    {
                      "description": "",
                      "proName": "NYSE:AIG"
                    },
                    {
                      "description": "",
                      "proName": "NYSE:AIR"
                    },
                    {
                      "description": "",
                      "proName": "MILSEDEX:F41971"
                    },
                    {
                      "description": "",
                      "proName": "NASDAQ:AKAM"
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
        <div id="tradingview-widget-container-stocks" className="tradingview-widget-container-stocks">
            {/* The widget will be injected here */}
        </div>
    );
}
