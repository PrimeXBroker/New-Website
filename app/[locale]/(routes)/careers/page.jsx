import CareersPage from "@/our_pages/footer-pages/careers/CareersPage";
import { createTranslator } from "next-intl";

export async function generateMetadata({ params: { locale } }) {
  const messages = (await import(`../../../../messages/${locale}.json`))
    .default;
  const t = createTranslator({ locale, messages });
  const url =
    locale != "en"
      ? `${process.env.NEXT_PUBLIC_BASE_URL}/${locale}/careers`
      : `${process.env.NEXT_PUBLIC_BASE_URL}/careers`;

  return {
    title: t("careers.metaData.title"),
    description: t("careers.metaData.description"),
    alternates: {
      canonical: url,
    },
    openGraph: {
      type: "website",
      locale: locale,
      url: url,
      title: t("careers.metaData.title"),
      description: t("careers.metaData.description"),
      images: [
        {
          url: "https://primexcapital.s3.eu-north-1.amazonaws.com/website/careers/careers_img.webp",
          width: 1200,
          height: 630,
          alt: t("careers.metaData.title"),
        },
      ],
    },
  };
}

const page = () => {
  return (
    <>
      <CareersPage />
    </>
  );
};

export default page;
