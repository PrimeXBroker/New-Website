import Image from "next/image";
import { useTranslations } from "next-intl";
import LocaleLink from "@/components/LocaleLink";

const AccountTypes1 = () => {
  const t = useTranslations("home.accountTypes");
  const accountTypes = [
    {
      title: t("account_types_card_1_title"),
      description: t("account_types_card_1_desc"),
      imageUrl:
        "https://primexcapital.s3.eu-north-1.amazonaws.com/website/account-types/standard.svg",
      btnHref: "/account-types",
    },
    {
      title: t("account_types_card_2_title"),
      description: t("account_types_card_2_desc"),
      imageUrl:
        "https://primexcapital.s3.eu-north-1.amazonaws.com/website/account-types/narrow.svg",
      btnHref: "/account-types",
    },
    {
      title: t("account_types_card_3_title"),
      description: t("account_types_card_3_desc"),
      imageUrl:
        "https://primexcapital.s3.eu-north-1.amazonaws.com/website/account-types/raw.svg",
      btnHref: "/account-types",
    },
  ];
  return (
    <section className="container py-12">
      <h2 className="sectionHeading">{t("account_types_title")}</h2>
      <div className="grid justify-center place-items-center gap-6 grid-cols-1 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3 lg:gap-4 pt-12">
        {accountTypes.map((account, index) => (
          <div key={index} className="cardBox">
            <div className="card">
              <span className="my_span">
                <Image
                  src={account.imageUrl}
                  width="100"
                  height="100"
                  alt="image"
                />
                <p className="text-white text-lg pt-5">{account.title}</p>
              </span>

              <div className="content">
                <p
                  className="text-white text-[14px] md:text-lg"
                  style={{ lineHeight: "30px" }}
                >
                  {account.description}
                </p>
                <LocaleLink className="text-primary" href="/account-types">
                  {t("account_types_learn_btn")}
                </LocaleLink>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AccountTypes1;
