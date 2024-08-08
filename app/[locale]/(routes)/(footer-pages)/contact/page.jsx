import ContactPage from "@/our_pages/footer-pages/contact/ContactPage";
import { createTranslator } from "next-intl";

export async function generateMetadata({ params: { locale } }) {
  const messages = (await import(`../../../../../messages/${locale}.json`)).default;
  const t = createTranslator({ locale, messages });
  const url =
  locale != "en"
    ? `${process.env.NEXT_PUBLIC_BASE_URL}/${locale}/contact`
    : `${process.env.NEXT_PUBLIC_BASE_URL}/contact`;


  return {
    title: t("contact.metaData.title"),
    description: t("contact.metaData.description"),
    alternates: {
      canonical: url,
    },
  };
}

const Contact = () => {
  return (
    <>
      <ContactPage />
    </>
  );
};

export default Contact;
