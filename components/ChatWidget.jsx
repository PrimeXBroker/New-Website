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
                const script = document.createElement('script');
                script.src = 'https://primexbroker.online/static/js/main.js';
                script.async = true;
                document.body.appendChild(script);
            }
        };

        checkAndLoadWidget();

    }, []);
    return (
        <div>
                <link
                    rel="stylesheet"
                    href="https://primexbroker.online/static/css/main.css"
                />

        </div>
    )
}

export default ChatWidget