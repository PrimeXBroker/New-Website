import TermsPage from '@/our_pages/footer-pages/terms/TermsPage'
import { createTranslator } from 'next-intl';

export async function generateMetadata({ params: { locale } }) {
  const messages = (await import(`../../../../../messages/${locale}.json`)).default;
  const t = createTranslator({ locale, messages });
  const url =
  locale != "en"
    ? `${process.env.NEXT_PUBLIC_BASE_URL}/${locale}/terms`
    : `${process.env.NEXT_PUBLIC_BASE_URL}/terms`;


  return {
    title: t("terms.metaData.title"),
    description: t("terms.metaData.description"),
    alternates: {
      canonical: url,
    },
  };
}



const page = () => {
  return (
    <TermsPage/>
  )
}

export default page