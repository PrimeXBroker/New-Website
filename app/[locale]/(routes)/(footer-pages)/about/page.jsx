import AboutPage from "@/our_pages/footer-pages/about/AboutPage";
import { createTranslator } from "next-intl";

export async function generateMetadata({ params }) {
  const { locale } = await params;
  const messages = (await import(`../../../../../messages/${locale}.json`))
    .default;
  const t = createTranslator({ locale, messages });
  const url = `https://www.primexcapital.com/${locale}/about`;

  return {
    title: t("about.metaData.title"),
    description: t("about.metaData.description"),
    alternates: {
      canonical: url,
      languages: {
        en: "https://www.primexcapital.com/en/about",
        ar: "https://www.primexcapital.com/ar/about",
        ku: "https://www.primexcapital.com/ku/about",
        es: "https://www.primexcapital.com/es/about",
        ps: "https://www.primexcapital.com/ps/about",
        pt: "https://www.primexcapital.com/pt/about",
        fa: "https://www.primexcapital.com/fa/about",
      },
    },
    openGraph: {
      type: "website",
      locale: locale,
      url: url,
      title: t("about.metaData.title"),
      description: t("about.metaData.description"),
      images: [
        {
          url: "https://primexcapital.s3.eu-north-1.amazonaws.com/website/about/about-us-hero.webp",
          width: 1200,
          height: 630,
          alt: t("about.metaData.title"),
        },
      ],
    },
  };
}

const About = () => {
  return <AboutPage />;
};

export default About;
