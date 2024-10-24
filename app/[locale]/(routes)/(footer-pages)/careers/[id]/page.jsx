"use client";
import React from "react";
import { useParams } from "next/navigation";
import CareersDetailWrapper from "@/our_pages/footer-pages/careers/careers-detail/CareersDetailWrapper";

const page = () => {
  const { id } = useParams();

  return <CareersDetailWrapper id={id} />;
};

export default page;
