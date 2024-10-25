"use client";
import React, { useState } from "react";
import ContactFormWrapper from "./ContactFormWrapper";
import GlobalLocation from "./GlobalLocation";

const ContactUsWrapper = () => {
  const [active, setActive] = useState("Suggestion");

  return (
    <>
      <ContactFormWrapper active={active} setActive={setActive} />
      <div className="pb-20 bg-[#000000]">
        <GlobalLocation />
      </div>
    </>
  );
};

export default ContactUsWrapper;
