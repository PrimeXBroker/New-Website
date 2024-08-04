import Image from "next/image";
import { useTranslations } from "next-intl";
import LocaleLink from "@/components/LocaleLink";

const AccountTypes1 = () => {
  const t = useTranslations("home.accountTypes");
  const accountTypes = [
    {
      title: t("account_types_card_1_title"),
      description: t("account_types_card_1_desc"),
      imageUrl: "images/accounts/standard.svg",
      btnHref: "/account-types",
    },
    {
      title: t("account_types_card_2_title"),
      description: t("account_types_card_2_desc"),
      imageUrl: "images/accounts/narrow.svg",
      btnHref: "/account-types",
    },
    {
      title: t("account_types_card_3_title"),
      description: t("account_types_card_3_desc"),
      imageUrl: "images/accounts/raw.svg",
      btnHref: "/account-types",
    },
  ];
  return (
    <section className="container py-12">
      <h1 className="sectionHeading">Account Types</h1>
      <div className="grid justify-center place-items-center gap-6 grid-cols-1 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3 lg:gap-4 pt-12">
        {accountTypes.map((account, index) => (
          <div class="cardBox">
            <div class="card">
              <span className="my_span">
                <Image
                  src={account.imageUrl}
                  width="100"
                  height="100"
                  alt="image"
                />
                <p className="text-white text-lg pt-5">{account.title}</p>
              </span>

              <div class="content">
                <p
                  className="text-white text-lg"
                  style={{ lineHeight: "30px" }}
                >
                  {account.description}
                </p>
                <LocaleLink className="text-primary" href="/account-types">
                  Learn More
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
