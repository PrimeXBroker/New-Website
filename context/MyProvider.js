"use client"
import React, { useState } from "react";
import MyContext from "./MyContext";
// import English from "../../languages/en.json";
// import Arabic from "../../languages/ar.json";

const MyProvider = ({ children }) => {
  const [locale, setLocale] = useState("en");
//   const [messages, setMessages] = useState(English);
  const [auto, setAuto] = useState(false);
  const [socket, setSocket] = useState(null);
  const [queue, setQueue] = useState(null);
  const [isChatOpen, SetChatOpen] = useState(false);
  const [isGreetingVisible, setIsGreetingVisible] = useState(false);
  const [language, setLanguage] = useState("");




  return (
    <MyContext.Provider
      value={{
        locale,
        setLocale,
        // messages,
        // setMessages,
        auto,
        setAuto,
        socket,
        setSocket,
        queue,
        setQueue,
        isChatOpen,
        SetChatOpen,
        isGreetingVisible,
        setIsGreetingVisible,
        language,
        setLanguage,
      }}
    >
      {children}
    </MyContext.Provider>
  );
};

export default MyProvider;
