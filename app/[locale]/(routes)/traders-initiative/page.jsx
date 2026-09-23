import FundedAccountWrapper from "@/our_pages/funded-account-page/FundedAccountWrapper";
import { createTranslator } from "next-intl";

export async function generateMetadata({ params }) {
  const { locale } = await params;
  const messages = (await import(`../../../../messages/${locale}.json`))
    .default;
  const t = createTranslator({ locale, messages });
  const url = `https://www.primexcapital.com/${locale}/traders-initiative`;

  return {
    title: t("fundedAccountPage.metaData.title"),
    description: t("fundedAccountPage.metaData.description"),
    alternates: {
      canonical: url,
      languages: {
        en: "https://www.primexcapital.com/en/traders-initiative",
        ar: "https://www.primexcapital.com/ar/traders-initiative",
        ku: "https://www.primexcapital.com/ku/traders-initiative",
        es: "https://www.primexcapital.com/es/traders-initiative",
        ps: "https://www.primexcapital.com/ps/traders-initiative",
        pt: "https://www.primexcapital.com/pt/traders-initiative",
        fa: "https://www.primexcapital.com/fa/traders-initiative",
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
