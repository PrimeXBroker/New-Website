import HammurabiWrapper from "@/our_pages/hammurabi-account/HammurabiWrapper";
import { createTranslator } from "next-intl";

export async function generateMetadata({ params }) {
  const { locale } = await params;
  const messages = (await import(`../../../../messages/${locale}.json`))
    .default;
  const t = createTranslator({ locale, messages });
  const url = `https://www.primexcapital.com/${locale}/hammurabi-account`;

  return {
    title: t("hammurabiAccount.metaData.title"),
    description: t("hammurabiAccount.metaData.description"),
    alternates: {
      canonical: url,
      languages: {
        en: "https://www.primexcapital.com/en/hammurabi-account",
        ar: "https://www.primexcapital.com/ar/hammurabi-account",
        ku: "https://www.primexcapital.com/ku/hammurabi-account",
        es: "https://www.primexcapital.com/es/hammurabi-account",
        ps: "https://www.primexcapital.com/ps/hammurabi-account",
        pt: "https://www.primexcapital.com/pt/hammurabi-account",
        fa: "https://www.primexcapital.com/fa/hammurabi-account",
      },
    },
    openGraph: {
      type: "website",
      locale: locale,
      url: url,
      title: t("hammurabiAccount.metaData.title"),
      description: t("hammurabiAccount.metaData.description"),
      images: [
        {
          url: "https://primexcapital.s3.eu-north-1.amazonaws.com/website/hammurabic-account/Hero+Image.png",
          width: 1200,
          height: 630,
          alt: t("hammurabiAccount.metaData.title"),
        },
      ],
    },
  };
}

const page = () => {
  return <HammurabiWrapper />;
};

export default page;
