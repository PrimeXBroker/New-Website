import AccountTypesPage from "@/our_pages/account_types/AccountTypesPage";
import { createTranslator } from "next-intl";

export async function generateMetadata({ params: { locale } }) {
  const messages = (await import(`../../../../messages/${locale}.json`))
    .default;
  const t = createTranslator({ locale, messages });
  const url =
    locale != "en"
      ? `${process.env.NEXT_PUBLIC_BASE_URL}/${locale}/account-types`
      : `${process.env.NEXT_PUBLIC_BASE_URL}/account-types`;

  return {
    title: t("accountTypes.metaData.title"),
    description: t("accountTypes.metaData.description"),
    alternates: {
      canonical: url,
    },
    openGraph: {
      type: "website",
      locale: locale,
      url: url,
      title: t("accountTypes.metaData.title"),
      description: t("accountTypes.metaData.description"),
      images: [
        {
          url: "https://primexcapital.s3.eu-north-1.amazonaws.com/website/account-types/acc-banner.webp",
          width: 1200,
          height: 630,
          alt: t("accountTypes.metaData.title"),
        },
      ],
    },
  };
}

const page = () => {
  return (
    <>
      <AccountTypesPage />
    </>
  );
};

export default page;
