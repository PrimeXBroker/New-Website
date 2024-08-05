
"use client"
import React, { useEffect } from 'react';

export default function Commodities() {
    useEffect(() => {
        const container = document.getElementById('tradingview-widget-container-commodities');
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
                      "proName": "BLACKBULL:BRENT"
                    },
                    {
                      "description": "",
                      "proName": "FX:NGAS"
                    },
                    {
                      "description": "",
                      "proName": "BLACKBULL:WTI"
                    },
                    {
                      "description": "",
                      "proName": "PEPPERSTONE:COCOA"
                    },
                    {
                      "description": "",
                      "proName": "PEPPERSTONE:COFFEE"
                    },
                    {
                      "description": "",
                      "proName": "FOREXCOM:CORN"
                    },
                    {
                      "description": "",
                      "proName": "FOREXCOM:COTTON"
                    },
                    {
                      "description": "",
                      "proName": "FOREXCOM:SOYBEAN"
                    },
                    {
                      "description": "",
                      "proName": "FOREXCOM:SUGAR"
                    },
                    {
                      "description": "",
                      "proName": "PEPPERSTONE:WHEAT"
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
        <div id="tradingview-widget-container-commodities" className="tradingview-widget-container-commodities">
            {/* The widget will be injected here */}
        </div>
    );
}
