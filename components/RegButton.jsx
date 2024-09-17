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
        className={`text-primary font-semibold border-1 border-[#111111] h-14 px-10 bg-[#111111] hover:bg-[#111111]`}
        radius="full"
        size="lg"
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
        <span className={`text-sm italic text-[#111111] me-2`}>
          {t("reg_now")}
        </span>
        <Link
          href={`https://client.primexbroker.com/${locale}/auth/sign-in`}
          target="_blank"
          className={`text-sm text-[#111111] font-semibold`}
        >
          {t("login_here")}
        </Link>
      </p>
    </>
  );
};

export default RegButton;
