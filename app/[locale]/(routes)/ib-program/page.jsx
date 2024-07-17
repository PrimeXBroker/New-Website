import Banner from "@/our_pages/ib/Banner";
import React from "react";

const page = ({ params: locale }) => {
  console.log(locale, "locale");
  return (
    <>
      <Banner />
    </>
  );
};

export default page;
