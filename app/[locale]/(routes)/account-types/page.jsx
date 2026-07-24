import AccountTypesWrapper from "@/our_pages/account-types/AccountTypesWrapper";
import { createTranslator } from "next-intl";

export async function generateMetadata({ params }) {
  const { locale } = await params;
  const messages = (await import(`../../../../messages/${locale}.json`))
    .default;
  const t = createTranslator({ locale, messages });
  const url = `https://www.primexcapital.com/${locale}/account-types`;

  return {
    title: t("accountTypes.metaData.title"),
    description: t("accountTypes.metaData.description"),
    alternates: {
      canonical: url,
      languages: {
        en: "https://www.primexcapital.com/en/account-types",
        ar: "https://www.primexcapital.com/ar/account-types",
        ku: "https://www.primexcapital.com/ku/account-types",
        es: "https://www.primexcapital.com/es/account-types",
        ps: "https://www.primexcapital.com/ps/account-types",
        pt: "https://www.primexcapital.com/pt/account-types",
        fa: "https://www.primexcapital.com/fa/account-types",
      },
    },
    openGraph: {
      type: "website",
      locale: locale,
      url: url,
      title: t("accountTypes.metaData.title"),
      description: t("accountTypes.metaData.description"),
      images: [
        {
          url: "https://primexcapital.s3.eu-north-1.amazonaws.com/website/new-account-types/acc-type-hero.png",
          width: 1200,
          height: 630,
          alt: t("accountTypes.metaData.title"),
        },
      ],
    },
  };
}

const page = () => {
  return <AccountTypesWrapper />;
};

export default page;
