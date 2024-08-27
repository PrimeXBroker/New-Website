import IbPage from "@/our_pages/ib_program/IbPage";
import { createTranslator } from "next-intl";

export async function generateMetadata({ params: { locale } }) {
  const messages = (await import(`../../../../messages/${locale}.json`))
    .default;
  const t = createTranslator({ locale, messages });
  const url =
    locale != "en"
      ? `${process.env.NEXT_PUBLIC_BASE_URL}/${locale}/ib-program`
      : `${process.env.NEXT_PUBLIC_BASE_URL}/ib-program`;

  return {
    title: t("ib.metaData.title"),
    description: t("ib.metaData.description"),
    alternates: {
      canonical: url,
    },
    openGraph: {
      type: "website",
      locale: locale,
      url: url,
      title: t("ib.metaData.title"),
      description: t("ib.metaData.description"),
      images: [
        {
          url: "https://primexcapital.s3.eu-north-1.amazonaws.com/website/ib/ib-new-reward.webp",
          width: 1200,
          height: 630,
          alt: t("ib.metaData.title"),
        },
      ],
    },
  };
}

const page = () => {
  return (
    <>
      <IbPage />
    </>
  );
};

export default page;
