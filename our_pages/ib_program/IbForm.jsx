import React from "react";
import { useLocale, useTranslations } from "next-intl";
import { Button } from "@nextui-org/button";
import { Input } from "@nextui-org/react";

const IbForm = () => {
  const locale = useLocale();
  const t = useTranslations("ib");

  return (
    <section className="my-20">
      <div className="container">
        <div className="grid grid-cols-12 relative">
          <div className="col-span-12 sm:col-span-12 md:col-span-6 lg:col-span-7 xl:col-span-8 flex flex-col justify-center">
            <div
              className={`h-[500px] bg-no-repeat bg-cover bg-center sm:bg-inherit ${
                locale === "ar"
                  ? "bg-[url(/images/ib/ib-new-form.webp)]"
                  : "bg-[url(/images/ib/ib-new-form.webp)]"
              }`}
            ></div>
          </div>
          <div className="col-span-12 sm:col-span-12 md:col-span-6 lg:col-span-5 xl:col-span-4 flex justify-center md:justify-end">
            <form className="bg-secondary h-[auto] px-8 py-10 rounded-3xl w-[394px]">
              <h2 className="text-3xl mb-10 text-accent font-semibold text-center">
                {t("form.title")}
              </h2>
              <div className="grid grid-cols-12 gap-y-4">
                <div className="col-span-12 bonus-claim-form-mbl">
                  <div>
                    <Input
                      size="lg"
                      type="text"
                      label={t("form.f_name")}
                      errorMessage="Please enter a first name"
                    />
                  </div>
                </div>
                <div className="col-span-12 bonus-claim-form-mbl">
                  <div>
                    <Input
                      size="lg"
                      type="text"
                      label={t("form.l_name")}
                      errorMessage="Please enter a last name"
                    />
                  </div>
                </div>
                <div className="col-span-12 bonus-claim-form-mbl">
                  <div>
                    <Input
                      size="lg"
                      type="email"
                      label={t("form.email")}
                      errorMessage="Please enter an email address"
                    />
                  </div>
                </div>
                <div className="col-span-12 bonus-claim-form-mbl">
                  <div>
                    <Input
                      size="lg"
                      type="number"
                      label={t("form.phone_number")}
                      errorMessage="Please enter a phone number"
                    />
                  </div>
                </div>
                <div className="col-span-12">
                  <div className="text-center">
                    <Button
                      className="text-secondary font-semibold h-12 px-10"
                      radius="full"
                      size="lg"
                      color="primary"
                    >
                      {t("form.form_btn")}
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

export default IbForm;
