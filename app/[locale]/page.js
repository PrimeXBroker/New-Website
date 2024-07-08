import Hero from "@/pages/home/Hero";
import { useTranslations } from "next-intl";

export default function Home() {
  const t = useTranslations("Index");

  return (
    <>
      <Hero />
    </>
  );
}
