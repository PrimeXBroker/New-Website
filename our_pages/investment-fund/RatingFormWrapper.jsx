import React, { useState } from "react";
import { useLocale, useTranslations } from "next-intl";
import RatingForm from "./RatingForm";
import ThankYouModal from "./ThankYouModal";

const RatingFormWrapper = ({ isOpen }) => {
  const locale = useLocale();
  const t = useTranslations("investmentFunds.successStories");
  const [isSuccess, setIsSuccess] = useState(false);

  return (
    <section className="">
      <div
        className="grid grid-cols-12 items-center"
        dir={
          locale === "ar" ||
          locale === "ps" ||
          locale === "ku" ||
          locale === "fa"
            ? "rtl"
            : "ltr"
        }
      >
        {isSuccess ? (
          <ThankYouModal isOpen={isOpen} />
        ) : (
          <>
            <div className="col-span-12 md:col-span-6 mb-7 lg:mb-0 text-center lg:text-start">
              <div className="">
                <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-tm dark:text-tm-dark mb-2">
                  {t("modal.title1")}
                  <br />
                  <span className="text-pcp dark:text-pcp-dark inline-block my-1">
                    {t("modal.title2")}
                  </span>
                </h2>
                <p className="text-ts dark:text-ts-dark text-md sm:w-[80%] mx-auto lg:mx-0 font-medium">
                  {t("modal.description")}
                </p>
              </div>
            </div>
            <div className="col-span-12 md:col-span-6 py-5">
              <RatingForm setIsSuccess={setIsSuccess} />
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default RatingFormWrapper;
