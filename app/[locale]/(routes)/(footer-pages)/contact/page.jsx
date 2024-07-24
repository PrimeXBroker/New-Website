import ContactForm from "@/components/forms/ContactForm";
import ContactBanner from "@/our_pages/footer-pages/contact/Banner";
import HaveQuestion from "@/our_pages/footer-pages/contact/HaveQuestion";
import React from "react";

const Contact = () => {
  return (
    <>
      <ContactBanner />
      <HaveQuestion />
      <ContactForm />
    </>
  );
};

export default Contact;
