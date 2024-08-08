import AboutPage from "@/our_pages/footer-pages/about/AboutPage";
import { createTranslator } from "next-intl";


export async function generateMetadata({ params: { locale } }) {
  const messages = (await import(`../../../../../messages/${locale}.json`)).default;
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
  };
}

const About = () => {
  return (
    <>
      <AboutPage/>
    </>
  );
};

export default About;
