import TermsPage from "@/our_pages/footer-pages/terms/TermsPage";
import { createTranslator } from "next-intl";

export async function generateMetadata({ params: { locale } }) {
  const messages = (await import(`../../../../../messages/${locale}.json`))
    .default;
  const t = createTranslator({ locale, messages });
  const url =
    locale != "en"
      ? `${process.env.NEXT_PUBLIC_BASE_URL}/${locale}/terms`
      : `${process.env.NEXT_PUBLIC_BASE_URL}/terms`;

  return {
    title: t("footer.termsCondition.metaData.title"),
    description: t("footer.termsCondition.metaData.description"),
    alternates: {
      canonical: url,
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
