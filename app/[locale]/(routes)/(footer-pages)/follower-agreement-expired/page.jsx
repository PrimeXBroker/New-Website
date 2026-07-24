import FollowerAgreementPage from "@/our_pages/footer-pages/follower-agreement/FollowerAgreementPage";
import { createTranslator } from "next-intl";
import React from "react";

export async function generateMetadata({ params }) {
  const { locale } = await params;
  const messages = (await import(`../../../../../messages/${locale}.json`))
    .default;
  const t = createTranslator({ locale, messages });
  const url = `https://www.primexcapital.com/${locale}/follower-agreement`;

  return {
    title: t("footer.followerAgreement.metaData.title"),
    description: t("footer.followerAgreement.metaData.description"),
    alternates: {
      canonical: url,
      languages: {
        en: "https://www.primexcapital.com/en/follower-agreement",
        ar: "https://www.primexcapital.com/ar/follower-agreement",
        ku: "https://www.primexcapital.com/ku/follower-agreement",
        es: "https://www.primexcapital.com/es/follower-agreement",
        ps: "https://www.primexcapital.com/ps/follower-agreement",
        pt: "https://www.primexcapital.com/pt/follower-agreement",
        fa: "https://www.primexcapital.com/fa/follower-agreement",
      },
    },
    openGraph: {
      type: "website",
      locale: locale,
      url: url,
      title: t("footer.followerAgreement.metaData.title"),
      description: t("footer.followerAgreement.metaData.description"),
      images: [
        {
          url: "https://primexcapital.s3.eu-north-1.amazonaws.com/website/footer-pages/follower-meta.webp",
          width: 1200,
          height: 630,
          alt: t("footer.followerAgreement.metaData.title"),
        },
      ],
    },
  };
}

const page = () => {
  return <FollowerAgreementPage />;
};

export default page;
