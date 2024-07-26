import Image from "next/image";
import Link from "next/link";
import { useTranslations } from "next-intl";

const AccountTtpes = () => {
  const t = useTranslations("home.accountTypes");

  const accountTypes = [
    {
      title: t("account_types_card_1_title"),
      description: t("account_types_card_1_desc"),
      imageUrl:
        "https://primexcapital.s3.eu-north-1.amazonaws.com/website/homepage/account_types/standard.svg",
      btnHref: "#",
    },
    {
      title: t("account_types_card_2_title"),
      description: t("account_types_card_2_desc"),
      imageUrl:
        "https://primexcapital.s3.eu-north-1.amazonaws.com/website/homepage/account_types/narrow.svg",
      btnHref: "#",
    },
    {
      title: t("account_types_card_3_title"),
      description: t("account_types_card_3_desc"),
      imageUrl:
        "https://primexcapital.s3.eu-north-1.amazonaws.com/website/homepage/account_types/zero.svg",
      btnHref: "#",
    },
  ];
  return (
    <section className="pt-12 pb-8 container">
      <h1 className="sectionHeading">{t("account_types_title")}</h1>
      <div className="grid justify-center place-items-center gap-6 grid-cols-1 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3 lg:gap-4 pt-12">
        {accountTypes.map((account, index) => (
          <div key={index} className="flip-card cursor-pointer">
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <Image
                  src={account.imageUrl}
                  width="50"
                  height="100"
                  alt="account logo"
                />
                <p className="text-lg md:text-2xl font-semibold text-secondary pt-5">
                  {account.title}
                </p>
              </div>
              <div className="flip-card-back">
                <p className="text-sm text-[#FFF] text-center px-2 pb-3">
                  {account.description}
                </p>
                <Link
                  href={account.btnHref}
                  className="underline text-sm text-[#FFD000]"
                >
                  {t("account_types_learn_btn")}
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AccountTtpes;
