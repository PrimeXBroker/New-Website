import React from "react";

const Banner = ({ locale }) => {
  console.log("locale", locale);
  console.log("hello");

  return <>Hello</>;
};

export const getServerSideProps = async (context) => {
  const { locale } = context.query;

  // You can perform any additional data fetching or operations here
  // based on the locale, if needed.

  return {
    props: {
      locale: locale || "en", // Default to 'en' if no locale is specified
    },
  };
};

export default Banner;
