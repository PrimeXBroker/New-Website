import React from "react";
import { useTranslations } from "next-intl";
import Link from "next/link";
import Image from "next/image";

const TrustPilot = () => {
  const t = useTranslations("trustPilot");

  return (
    <div>
      <Link
        href={"https://www.trustpilot.com/review/primexbroker.com"}
        target="_blank"
      >
        <div className="rounded-[8px] border-2 border-[#222222] inline-flex items-center text-sm">
          <div className="bg-[#1d1d1d] px-4 py-2">
            <Image
              unoptimized={true}
              src="https://primexcapital.s3.eu-north-1.amazonaws.com/website/home/trustpilot-logo+.svg"
              alt="Trustpilot"
              width={100}
              height={100}
              className="w-[70px] md:w-[50px] lg:w-[100px]"
            />
          </div>
          <div className="px-4">
            <span className="text-xs lg:text-sm xl:text-base text-[#ffffff]">
              {t("review")}
            </span>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default TrustPilot;
