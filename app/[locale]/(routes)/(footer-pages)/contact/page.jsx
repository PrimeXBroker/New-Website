"use client";

import ContactForm from "@/components/forms/ContactForm";
import LocationContextProvider from "@/context/location-context";
import ContactBanner from "@/our_pages/footer-pages/contact/Banner";
import HaveQuestion from "@/our_pages/footer-pages/contact/HaveQuestion";
import React from "react";

const Contact = () => {
  return (
    <>
      <LocationContextProvider>
        <ContactBanner />
        <HaveQuestion />
        <ContactForm />
      </LocationContextProvider>
    </>
  );
};

export default Contact;
