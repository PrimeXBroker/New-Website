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
          url: "https://primexcapital.s3.eu-north-1.amazonaws.com/website/about/about-us-hero.webp",
          width: 1200,
          height: 630,
          alt: t("about.metaData.title"),
        },
      ],
    },
  };
}

const About = ({ params: { locale } }) => {
  const hreflangLocales = [
    { lng: "en", url: "en" },
    { lng: "ar", url: "ar" },
    { lng: "ku", url: "ku" },
    { lng: "es", url: "es" },
    { lng: "ps", url: "ps" },
  ];

  return (
    <>
      <head>
        {hreflangLocales
          .filter((item) => item.lng === locale)
          .map((item) => (
            <link
              key={item.lng}
              rel="canonical"
              href={`https://www.primexcapital.com/${item.url}/about`}
            />
          ))}
      </head>
      <AboutPage />
    </>
  );
};

export default About;
