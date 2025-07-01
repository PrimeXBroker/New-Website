import AccountTypesWrapper from "@/our_pages/account-types/AccountTypesWrapper";
import { createTranslator } from "next-intl";

export async function generateMetadata({ params: { locale } }) {
  const messages = (await import(`../../../../messages/${locale}.json`))
    .default;
  const t = createTranslator({ locale, messages });
  const url = `https://www.primexcapital.com/${locale}/account-types`;

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
          url: "https://primexcapital.s3.eu-north-1.amazonaws.com/website/new-account-types/accounttypes-header-img.webp",
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
      <AccountTypesWrapper />
    </>
  );
};

export default page;
