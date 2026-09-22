import FundedAccountWrapper from "@/our_pages/funded-account-page/FundedAccountWrapper";
import { createTranslator } from "next-intl";

export async function generateMetadata({ params }) {
  const { locale } = await params;
  const messages = (await import(`../../../../messages/${locale}.json`))
    .default;
  const t = createTranslator({ locale, messages });
  const url = `https://www.primexcapital.com/${locale}/funded-account`;

  return {
    title: t("fundedAccountPage.metaData.title"),
    description: t("fundedAccountPage.metaData.description"),
    alternates: {
      canonical: url,
      languages: {
        en: "https://www.primexcapital.com/en/funded-account",
        ar: "https://www.primexcapital.com/ar/funded-account",
        ku: "https://www.primexcapital.com/ku/funded-account",
        es: "https://www.primexcapital.com/es/funded-account",
        ps: "https://www.primexcapital.com/ps/funded-account",
        pt: "https://www.primexcapital.com/pt/funded-account",
        fa: "https://www.primexcapital.com/fa/funded-account",
      },
    },
    openGraph: {
      type: "website",
      locale: locale,
      url: url,
      title: t("fundedAccountPage.metaData.title"),
      description: t("fundedAccountPage.metaData.description"),
      images: [
        {
          url: "https://primexcapital.s3.eu-north-1.amazonaws.com/website/funded-account-page/funded-account-hero.webp",
          width: 1200,
          height: 630,
          alt: t("fundedAccountPage.metaData.title"),
        },
      ],
    },
  };
}

const page = () => {
  return <FundedAccountWrapper />;
};

export default page;
