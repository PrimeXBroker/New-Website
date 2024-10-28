"use client"
import React, { useEffect } from 'react'
import Head from 'next/head'
import Script from 'next/script'

function ChatWidget() {

    useEffect(() => {
        const checkAndLoadWidget = () => {
            // Check if the chat widget is already in the DOM
            if (!document.getElementById('chat_app')) {
                // Create the chat widget container
                const chatWidgetContainer = document.createElement('div');
                chatWidgetContainer.id = 'chat_app';
                chatWidgetContainer.setAttribute('dir', 'rtl');
                document.body.appendChild(chatWidgetContainer);

                // Load the chat widget script
                const cssLink = document.createElement('link');
                cssLink.rel = 'stylesheet';
                cssLink.href = 'https://primexbroker.online/static/css/main.css'; // URL to your CSS file
                // cssLink.href = 'https://support.primexbroker.com/static/css/main.css'; 
                cssLink.type = 'text/css';
                document.head.appendChild(cssLink);
                
                // Load the JS file
                const script = document.createElement('script');
                script.src = 'https://primexbroker.online/static/js/main.js'; // URL to your JS file
                // script.src = 'https://support.primexbroker.com/static/js/main.js';
                script.async = true;
                document.body.appendChild(script);
            }
        };

        checkAndLoadWidget();

    }, []);
    return (
        <>

        </>
    )
}

export default ChatWidget