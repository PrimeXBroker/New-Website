import LocalDepositorWrapper from "@/our_pages/local-depositor/LocalDepositorWrapper";
import { redirect } from "next/navigation";
import React from "react";

const LocalDepositor = ({ params: { locale } }) => {
  if (locale !== "ar") {
    redirect("/");
  }
  return <LocalDepositorWrapper />;
};

export default LocalDepositor;
