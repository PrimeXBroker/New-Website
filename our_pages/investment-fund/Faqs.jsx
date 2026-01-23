"use client";
import React, { useEffect, useState } from "react";
import { useLocale, useTranslations } from "next-intl";
import axios from "axios";

const Faqs = () => {
  const locale = useLocale();
  const [activeIndex, setActiveIndex] = useState(null);
  const f = useTranslations("accountTypes");
  const [faqs, setFaqs] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchFAQs = async () => {
    try {
      setLoading(true);
      const response = await axios.get(
        `https://primexbroker.com/api/fetch/publish/investment-faqs`,
      );

      const data = await response.data;
      console.log(data, "data");

      if (data.success) {
        setFaqs(data.data);
      }
    } catch (error) {
      console.error("Error fetching reviews:", error);
      setError(error.message);
      setFaqs([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchFAQs();
  }, [locale]);

  const toggleFAQ = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  const parseContent = (contentString) => {
    try {
      const rawData = JSON.parse(contentString);
      return rawData.blocks.map((block) => block.text).join("\n");
    } catch (e) {
      return contentString;
    }
  };

  return (
    <section className="bg-p dark:bg-p-dark">
      <div className="container">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold mb-10 text-tm dark:text-tm-dark text-center capitalize">
          {f("faq.title")}{" "}
          <span className="text-pcp dark:text-pcp-dark">{f("faq.title1")}</span>
        </h2>
      </div>
      <div className="container">
        <div className="space-y-4 bg-cc dark:bg-cc-dark rounded-xl p-8">
          {faqs?.map((faq, index) => {
            const rawContent =
              locale === "ar"
                ? faq?.contentAr
                : locale === "ku"
                  ? faq?.contentKu
                  : locale === "es"
                    ? faq?.contentEs
                    : locale === "ps"
                      ? faq?.contentPs
                      : locale === "pt"
                        ? faq?.contentPt
                        : locale === "fa"
                          ? faq?.contentFa
                          : faq?.contentEn;
            const cleanContent = parseContent(rawContent);
            return (
              <div key={index}>
                <div
                  onClick={() => toggleFAQ(index)}
                  className="cursor-pointer flex justify-between items-center py-2"
                >
                  <h3 className="text-lg font-semibold text-ts dark:text-ts-dark">
                    {locale === "ar"
                      ? faq?.titleAr
                      : locale === "ku"
                        ? faq?.titleKu
                        : locale === "es"
                          ? faq?.titleEs
                          : locale === "ps"
                            ? faq?.titlePs
                            : locale === "pt"
                              ? faq?.titlePt
                              : locale === "fa"
                                ? faq?.titleFa
                                : faq?.titleEn}
                  </h3>
                  <span className="text-ts dark:text-ts-dark text-2xl">
                    {activeIndex === index ? "-" : "+"}
                  </span>
                </div>
                {activeIndex === index && (
                  <div className="p-[24px] bg-e1 dark:bg-e1-dark rounded-xl">
                    {cleanContent.split("\n").map((line, idx) => {
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
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Faqs;
