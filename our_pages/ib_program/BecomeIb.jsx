import React from "react";
import { Button } from "@nextui-org/button";
import Link from "next/link";
import { FaArrowUp } from "react-icons/fa6";
import { useLocale, useTranslations } from "next-intl";

const BecomeIb = () => {
  const locale = useLocale();
  const t = useTranslations("ib");

  return (
    <section className="mb-20">
      <div className="container">
        <div className="grid grid-cols-12">
          <div className="col-span-12 text-center">
            <Button
              className="text-secondary font-semibold h-14 px-10"
              radius="full"
              size="lg"
              color="primary"
            >
              <Link
                href="#ib-form"
                className="inline-flex gap-3 items-center justify-center text-xl"
              >
                {t("becomeIb.btnTxt")}
                <FaArrowUp size={"24px"} />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BecomeIb;
