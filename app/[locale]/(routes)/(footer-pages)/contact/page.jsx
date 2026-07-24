import ContactUsWrapper from "@/our_pages/footer-pages/contact-us/ContactUsWrapper";
import { createTranslator } from "next-intl";

export async function generateMetadata({ params }) {
  const { locale } = await params;
  const messages = (await import(`../../../../../messages/${locale}.json`))
    .default;
  const t = createTranslator({ locale, messages });
  const url = `https://www.primexcapital.com/${locale}/contact`;

  return {
    title: t("contactUs.metaData.title"),
    description: t("contactUs.metaData.description"),
    alternates: {
      canonical: url,
      languages: {
        en: "https://www.primexcapital.com/en/contact",
        ar: "https://www.primexcapital.com/ar/contact",
        ku: "https://www.primexcapital.com/ku/contact",
        es: "https://www.primexcapital.com/es/contact",
        ps: "https://www.primexcapital.com/ps/contact",
        pt: "https://www.primexcapital.com/pt/contact",
        fa: "https://www.primexcapital.com/fa/contact",
      },
    },
    openGraph: {
      type: "website",
      locale: locale,
      url: url,
      title: t("contactUs.metaData.title"),
      description: t("contactUs.metaData.description"),
      images: [
        {
          url: "https://primexcapital.s3.eu-north-1.amazonaws.com/website/contact-us/main-contact-banner.webp",
          width: 1200,
          height: 630,
          alt: t("contactUs.metaData.title"),
        },
      ],
    },
  };
}

const Contact = () => {
  return <ContactUsWrapper />;
};

export default Contact;
