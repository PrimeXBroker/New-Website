"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import ComplaintForm from "./ComplaintForm";
import ContactForm from "./ContactForm";

const FormTabs = () => {
  const [activeTab, setActiveTab] = useState("suggestion");
  const t = useTranslations("contact.contactForm");

  const renderForm = () => {
    if (activeTab === "complaint") {
      return <ComplaintForm />;
    }
    return <ContactForm />;
  };

  return (
    <section className="bg-secondary pb-16 px-2 relative">
      <span className="absolute  right-0 w-[170px] h-[180px] border-s-[58px] border-b-[58px] border-[#2C2C2C] rounded-es-full z-0"></span>
      <span className="absolute top-[50%] left-[-60px] transform -translate-y-1/2 w-[150px] h-[300px] border-[58px] border-[#2C2C2C] rounded-ee-full rounded-se-full"></span>
      <h2 className="text-white text-lg md:text-2xl text-center font-semibold mb-10 pt-12 z-10 relative">
        {t("title1")} <br />
        {t("title2")}
      </h2>
      <div className="container max-w-4xl relative">
        <div className="flex gap-3 border-b border-gray-200">
          <button
            className={`flex-1 text-center py-4 rounded-ss-2xl rounded-se-2xl font-semibold ${
              activeTab === "suggestion"
                ? "bg-[#666666] text-white"
                : "bg-white text-black"
            }`}
            onClick={() => setActiveTab("suggestion")}
          >
            {t("tab1")}
          </button>
          <button
            className={`flex-1 text-center py-4 rounded-ss-2xl rounded-se-2xl font-semibold ${
              activeTab === "complaint"
                ? "bg-[#666666] text-white"
                : "bg-white text-black"
            }`}
            onClick={() => setActiveTab("complaint")}
          >
            {t("tab2")}
          </button>
        </div>
        <div className="contact_form_wrapper px-4 pt-10 md:px-10 pb-10 bg-white relative rounded-es-2xl rounded-ee-2xl">
          {renderForm()}
        </div>
      </div>
    </section>
  );
};

export default FormTabs;
