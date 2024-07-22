import React from "react";
import Link from "next/link";
import { Button } from "@nextui-org/button";
import { IoPerson } from "react-icons/io5";
import { useLocale, useTranslations } from "next-intl";

const RegButton = ({ customStyle }) => {
  const locale = useLocale();
  const t = useTranslations("regBtn");
  return (
    <>
      <Button
        className={`${customStyle.txtColor1} font-semibold border-1 ${customStyle.borderColor} h-14 px-10`}
        radius="full"
        size="lg"
        color={customStyle.btnColor}
      >
        <Link
          href={`https://client.primexbroker.com/${locale}/register`}
          target="_blank"
          className="inline-flex gap-3 items-center justify-center"
        >
          <IoPerson size={"25px"} className="me-0.5" />
          {t("btnTxt")}
        </Link>
      </Button>
      <p className="mt-1 ms-7">
        <span className={`text-sm italic ${customStyle.txtColor2} me-2`}>
          {t("reg_now")}
        </span>
        <Link
          href={`https://client.primexbroker.com/${locale}/auth/sign-in`}
          target="_blank"
          className={`text-sm ${customStyle.txtColor3} font-semibold`}
        >
          {t("login_here")}
        </Link>
      </p>
    </>
  );
};

export default RegButton;
