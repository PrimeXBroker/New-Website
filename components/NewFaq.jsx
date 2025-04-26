import React, { useState } from "react";
import { useTranslations } from "next-intl";

const FAQ = ({ faqs }) => {
  const [activeIndex, setActiveIndex] = useState(null);
  const f = useTranslations("accountTypes");

  const toggleFAQ = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <section className="bg-p dark:bg-p-dark">
      <div className="container">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold mb-10 text-tm dark:text-tm-dark text-center">
          {f("faq.title")}{" "}
          <span className="text-pcp dark:text-pcp-dark">{f("faq.title1")}</span>
        </h2>
      </div>
      <div className="container">
        <div className="space-y-4 bg-cc dark:bg-cc-dark rounded-xl p-8">
          {faqs.map((faq, index) => (
            <div key={index}>
              <div
                onClick={() => toggleFAQ(index)}
                className="cursor-pointer flex justify-between items-center py-2"
              >
                <h3 className="text-lg font-semibold text-ts dark:text-ts-dark">
                  {faq.question}
                </h3>
                <span className="text-ts dark:text-ts-dark text-2xl">
                  {activeIndex === index ? "-" : "+"}
                </span>
              </div>
              {activeIndex === index && (
                <div className="p-[24px] bg-e1 dark:bg-e1-dark rounded-xl">
                  {faq.answer.split("\n").map((line, idx) => {
                    if (line.startsWith(".")) {
                      return (
                        <ul
                          key={idx}
                          className="list-disc ml-5 text-tm dark:text-tm-dark"
                        >
                          <li>{line.substring(1).trim()}</li>
                        </ul>
                      );
                    } else {
                      return (
                        <p
                          key={idx}
                          className="text-tm dark:text-tm-dark text-sm sm:text-base"
                        >
                          {line.trim()}
                        </p>
                      );
                    }
                  })}
                </div>
              )}
              {index < faqs.length - 1 && (
                <hr className="border-e1 dark:border-e1-dark border my-4" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
