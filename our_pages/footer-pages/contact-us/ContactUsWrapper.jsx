"use client";
import React, { useState } from "react";
import ContactFormWrapper from "./ContactFormWrapper";

const ContactUsWrapper = () => {
  const [active, setActive] = useState("Suggestion");

  return (
    <>
      <ContactFormWrapper active={active} setActive={setActive} />
    </>
  );
};

export default ContactUsWrapper;
