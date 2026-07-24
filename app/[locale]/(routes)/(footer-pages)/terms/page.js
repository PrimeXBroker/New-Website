import TermsPage from "@/our_pages/footer-pages/terms/TermsPage";
import { createTranslator } from "next-intl";

export async function generateMetadata({ params }) {
  const { locale } = await params;
  const messages = (await import(`../../../../../messages/${locale}.json`))
    .default;
  const t = createTranslator({ locale, messages });
  const url = `https://www.primexcapital.com/${locale}/terms`;

  return {
    title: t("footer.termsCondition.metaData.title"),
    description: t("footer.termsCondition.metaData.description"),
    alternates: {
      canonical: url,
      languages: {
        en: "https://www.primexcapital.com/en/terms",
        ar: "https://www.primexcapital.com/ar/terms",
        ku: "https://www.primexcapital.com/ku/terms",
        es: "https://www.primexcapital.com/es/terms",
        ps: "https://www.primexcapital.com/ps/terms",
        pt: "https://www.primexcapital.com/pt/terms",
        fa: "https://www.primexcapital.com/fa/terms",
      },
    },
    openGraph: {
      type: "website",
      locale: locale,
      url: url,
      title: t("footer.termsCondition.metaData.title"),
      description: t("footer.termsCondition.metaData.description"),
      images: [
        {
          url: "https://primexcapital.s3.eu-north-1.amazonaws.com/website/footer-pages/terms/Banner.webp",
          width: 1200,
          height: 630,
          alt: t("footer.termsCondition.metaData.title"),
        },
      ],
    },
  };
}

const page = () => {
  return <TermsPage />;
};

export default page;
