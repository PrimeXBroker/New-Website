"use client";
import React from "react";
import { useTranslations } from "next-intl";

const AccountDetails = () => {
  const t = useTranslations("competitions.accountDetails");

  return (
    <section className="bg-p dark:bg-p-dark">
      <div className="container">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-pcp dark:text-pcp-dark text-center mb-10">
          {t("title_part1")}
          <span className="text-tm dark:text-tm-dark">{t("title_part2")}</span>
        </h2>

        <div className="bg-cc dark:bg-cc-dark rounded-xl px-10 py-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6 divide-y md:divide-y-0 md:divide-x divide-e1 dark:divide-e1-dark">
            <div className="flex flex-col justify-between pt-6 md:pt-0 md:pr-6 first:pt-0">
              <div>
                <span className="block text-xs uppercase tracking-wider text-ts dark:text-ts-dark font-medium mb-3">
                  {t("col1_label")}
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-pcp dark:text-pcp-dark leading-snug mb-3">
                  {t("col1_value")}
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-ts dark:text-ts-dark leading-relaxed">
                {t("col1_desc")}
              </p>
            </div>

            {/* Column 2: Initial Balance */}
            <div className="flex flex-col justify-between pt-6 md:pt-0 md:px-6">
              <div>
                <span className="block text-xs uppercase tracking-wider text-ts dark:text-ts-dark font-medium mb-3">
                  {t("col2_label")}
                </span>
                <h3 className="text-3xl sm:text-4xl font-bold text-pcp dark:text-pcp-dark leading-none mb-3">
                  {t("col2_value")}
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-ts dark:text-ts-dark leading-relaxed">
                {t("col2_desc")}
              </p>
            </div>
            <div className="flex flex-col justify-between pt-6 md:pt-0 md:pl-6">
              <div>
                <span className="block text-xs uppercase tracking-wider text-ts dark:text-ts-dark font-medium mb-3">
                  {t("col3_label")}
                </span>
                <h3 className="text-3xl sm:text-4xl font-bold text-pcp dark:text-pcp-dark leading-none mb-3">
                  {t("col3_value")}
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-ts dark:text-ts-dark leading-relaxed">
                {t("col3_desc")}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AccountDetails;
