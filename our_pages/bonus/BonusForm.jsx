"use client";
import { useLocale, useTranslations } from "next-intl";
import { Button } from "@nextui-org/button";
import { Input } from "@nextui-org/react";
import { Checkbox } from "@nextui-org/react";
import Link from "next/link";
import React, { useState } from "react";

const BonusForm = () => {
  const locale = useLocale();
  const t = useTranslations("bonus.form");
  const [isSelected, setIsSelected] = useState(false);

  return (
    <section className="container my-20">
      <div className="bg-secondary p-10 rounded-3xl">
        <div className="grid grid-cols-12">
          <div className="col-span-12 mb-8">
            <h1 className="sectionHeading  text-accent font-semibold text-center">
              <span className="font-normal">{t("title1")}</span>
              {t("title2")}
            </h1>
          </div>
          <div className="col-span-12">
            <form>
              <div className="grid grid-cols-12 gap-y-4">
                <div className="col-span-12 sm:col-span-6 bonus-claim-form-mbl">
                  <div className="w-[90%] m-auto">
                    <Input
                      size="lg"
                      type="text"
                      label={t("name")}
                      errorMessage="Please enter a name"
                    />
                  </div>
                </div>
                <div className="col-span-12 sm:col-span-6 bonus-claim-form-mbl">
                  <div className="w-[90%] m-auto">
                    <Input
                      size="lg"
                      type="number"
                      label={t("profit_number")}
                      errorMessage="Please enter a profit amount"
                    />
                  </div>
                </div>
                <div className="col-span-12 sm:col-span-6 bonus-claim-form-mbl">
                  <div className="w-[90%] m-auto">
                    <Input
                      size="lg"
                      type="email"
                      label={t("email")}
                      errorMessage="Please enter an email"
                    />
                  </div>
                </div>
                <div className="col-span-12 sm:col-span-6 bonus-claim-form-mbl">
                  <div className="w-[90%] m-auto">
                    <Input
                      size="lg"
                      type="number"
                      label={t("account_number")}
                      errorMessage="Please enter a account number"
                    />
                  </div>
                </div>
                <div className="col-span-12 sm:col-span-10 md:col-span-8 lg:col-span-6 bonus-claim-form-mbl">
                  <div className="w-[90%] m-auto">
                    <Checkbox
                      isSelected={isSelected}
                      onValueChange={setIsSelected}
                      color="accent"
                    >
                      <span className="text-white">{t("condition1")}</span>
                      <Link href={""} className="text-primary">
                        {t("condition2")}
                      </Link>
                    </Checkbox>
                  </div>
                </div>
                <div className="col-span-12 mt-3">
                  <div className="text-center">
                    <Button
                      className="text-secondary font-semibold h-12 px-10"
                      radius="full"
                      size="lg"
                      color="primary"
                    >
                      {t("form_btn")}
                    </Button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BonusForm;
