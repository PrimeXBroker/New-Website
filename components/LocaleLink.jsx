import { useLocale } from "next-intl";
import Link from "next/link";

const LocaleLink = ({ href, children, ...props }) => {
  const locale = useLocale();
  const currentLocale = locale || "en"; // Default to 'en' if locale is not defined

  // Ensure the href includes the locale only once
  const localizedHref = href.startsWith(`/${currentLocale}`)
    ? href
    : `/${currentLocale}${href}`;

  return (
    <Link className="w-full flex" href={localizedHref} {...props}>
      {children}
    </Link>
  );
};

export default LocaleLink;
