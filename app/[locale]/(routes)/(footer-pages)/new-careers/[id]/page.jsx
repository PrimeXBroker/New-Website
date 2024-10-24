"use client";
import CareersDetail from "@/our_pages/footer-pages/new-careers-detail/CareersDetail";
import React from "react";
import { useParams } from "next/navigation";

const page = () => {
  const { id } = useParams();

  return <CareersDetail id={id} />;
};

export default page;
