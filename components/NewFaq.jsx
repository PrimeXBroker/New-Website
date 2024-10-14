import React, { useState } from "react";
import { useTranslations } from "next-intl";

const FAQ = ({ faqs }) => {
  const [activeIndex, setActiveIndex] = useState(null);
  const f = useTranslations("accountTypes");

  const toggleFAQ = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <section className="bg-[#000000] pt-10 pb-20">
      <div className="container">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold mb-10 text-[#ffffff] text-center">
          {f("faq.title")}{" "}
          <span className="text-[#FED100]">{f("faq.title1")}</span>
        </h2>
      </div>
      <div className="container">
        <div className="space-y-4 bg-[#111111] border-[#1D1D1D] border-2 rounded-xl p-8">
          {faqs.map((faq, index) => (
            <div key={index}>
              <div
                onClick={() => toggleFAQ(index)}
                className="cursor-pointer flex justify-between items-center py-2"
              >
                <h3 className="text-lg font-semibold text-[#c6c6c6]">
                  {faq.question}
                </h3>
                <span className="text-[#ffffff] text-2xl">
                  {activeIndex === index ? "-" : "+"}
                </span>
              </div>
              {activeIndex === index && (
                <div className="p-[24px] border-[#1D1D1D] bg-[#1A1A1A] rounded-xl">
                  {faq.answer.split("\n").map((line, idx) => {
                    if (line.startsWith(".")) {
                      return (
                        <ul key={idx} className="list-disc ml-5 text-[#F9F9F9]">
                          <li>{line.substring(1).trim()}</li>
                        </ul>
                      );
                    } else {
                      return (
                        <p
                          key={idx}
                          className="text-[#F9F9F9] text-sm sm:text-base"
                        >
                          {line.trim()}
                        </p>
                      );
                    }
                  })}
                </div>
              )}
              {index < faqs.length - 1 && (
                <hr className="border-[#1D1D1D] border-2 my-4" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
