import AboutPage from "@/our_pages/footer-pages/about/AboutPage";
import { createTranslator } from "next-intl";

export async function generateMetadata({ params: { locale } }) {
  const messages = (await import(`../../../../../messages/${locale}.json`))
    .default;
  const t = createTranslator({ locale, messages });
  const url =
    locale != "en"
      ? `${process.env.NEXT_PUBLIC_BASE_URL}/${locale}/about`
      : `${process.env.NEXT_PUBLIC_BASE_URL}/about`;

  return {
    title: t("about.metaData.title"),
    description: t("about.metaData.description"),
    alternates: {
      canonical: url,
    },
    openGraph: {
      type: "website",
      locale: locale,
      url: url,
      title: t("about.metaData.title"),
      description: t("about.metaData.description"),
      images: [
        {
          url: "https://primexcapital.s3.eu-north-1.amazonaws.com/website/about/Banner.webp",
          width: 1200,
          height: 630,
          alt: t("about.metaData.title"),
        },
      ],
    },
  };
}

const About = () => {
  return (
    <>
      <AboutPage />
    </>
  );
};

export default About;
