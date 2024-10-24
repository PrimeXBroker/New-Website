"use client";
import CareerDetails from "@/our_pages/footer-pages/career-details/CareerDetails";
import React from "react";
import { useParams } from "next/navigation";

const page = () => {
  const { id } = useParams();
  //   const { router } = useRouter();

  return (
    <>
      <CareerDetails id={id} />
    </>
  );
};

export default page;
