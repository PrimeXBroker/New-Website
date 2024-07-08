import { useTranslations } from "next-intl";

export default function Home() {
  const t = useTranslations("Index");

  return (
    <>
      <h1 className="text-6xl text-center my-5">This is the Home Page</h1>
    </>
  );
}
