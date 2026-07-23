import { notFound } from "next/navigation";
import { getRequestConfig } from "next-intl/server";
import { hasLocale } from "next-intl";

// Can be imported from a shared config
const locales = ["en", "ar", "ku", "es", "ps", "pt", "fa"];

export default getRequestConfig(async ({ requestLocale }) => {
  const requested = await requestLocale;
  const locale = hasLocale(locales, requested) ? requested : locales[0];

  return {
    locale,
    messages: (await import(`../messages/${locale}.json`)).default,
  };
});
