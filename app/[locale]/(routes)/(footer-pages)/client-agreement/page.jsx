import ClientAgreementPage from '@/our_pages/footer-pages/client-agreement/ClientAgreementPage'
import { createTranslator } from 'next-intl';
import React from 'react'

export async function generateMetadata({ params: { locale } }) {
  const messages = (await import(`../../../../../messages/${locale}.json`)).default;
  const t = createTranslator({ locale, messages });
  const url =
  locale != "en"
    ? `${process.env.NEXT_PUBLIC_BASE_URL}/${locale}/client-agreement`
    : `${process.env.NEXT_PUBLIC_BASE_URL}/client-agreement`;


  return {
    title: t("client-agreement.metaData.title"),
    description: t("client-agreement.metaData.description"),
    alternates: {
      canonical: url,
    },
  };
}

const page = () => {
  return (
    <ClientAgreementPage/>
  )
}

export default page;