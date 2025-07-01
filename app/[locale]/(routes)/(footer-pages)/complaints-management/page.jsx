import ComplaintsManagementPage from "@/our_pages/footer-pages/complaints-management/ComplaintsManagementPage";
import React from "react";
import { createTranslator } from "next-intl";

export async function generateMetadata({ params: { locale } }) {
  const messages = (await import(`../../../../../messages/${locale}.json`))
    .default;
  const t = createTranslator({ locale, messages });
  const url = `https://www.primexcapital.com/${locale}/complaints-management`;

  return {
    title: t("footer.complaintsManagement.metaData.title"),
    description: t("footer.complaintsManagement.metaData.description"),
    alternates: {
      canonical: url,
    },
    openGraph: {
      type: "website",
      locale: locale,
      url: url,
      title: t("footer.complaintsManagement.metaData.title"),
      description: t("footer.complaintsManagement.metaData.description"),
      images: [
        {
          url: "https://primexcapital.s3.eu-north-1.amazonaws.com/website/footer-pages/risk/complaints.webp",
          width: 1200,
          height: 630,
          alt: t("footer.complaintsManagement.metaData.title"),
        },
      ],
    },
  };
}

const page = () => {
  return (
    <>
      <ComplaintsManagementPage />
    </>
  );
};

export default page;
