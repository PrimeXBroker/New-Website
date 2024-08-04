
"use client"
import React, { useEffect } from 'react';

export default function Indices() {
    useEffect(() => {
        const container = document.getElementById('tradingview-widget-container');
        if (container) {
            container.innerHTML = ''; // Clear the container before appending the new script
            const script = document.createElement('script');
            script.type = 'text/javascript';
            script.async = true;
            script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-ticker-tape.js';
            script.innerHTML = JSON.stringify({
                symbols:
                    [
                        { "description": "", "proName": "CFI:GER30" },
                        { "description": "", "proName": "CFI:AUS200" },
                        { "description": "", "proName": "FOREXCOM:EU50" },
                        { "description": "", "proName": "FOREXCOM:FRA40" },
                        { "description": "", "proName": "ACTIVTRADES:HKIND" },
                        { "description": "", "proName": "SKILLING:ITA40" },
                        { "description": "", "proName": "SKILLING:JAP225" },
                        { "description": "", "proName": "PEPPERSTONE:SPA35" },
                        { "description": "", "proName": "SKILLING:SUI20" },
                        { "description": "", "proName": "CAPITALCOM:UK100" }

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
        <div id="tradingview-widget-container" className="tradingview-widget-container">
            {/* The widget will be injected here */}
        </div>
    );
}

