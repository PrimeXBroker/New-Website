import { useLocale } from "next-intl";
import Link from "next/link";

const YellowButton = ({ href, children, className, ...props }) => {
  const locale = useLocale();
  const currentLocale = locale || "en";
  const localizedHref = href.startsWith(`/${currentLocale}`)
    ? href
    : `/${currentLocale}${href}`;
  return (
    <Link
      href={localizedHref}
      {...props}
      className={`text-center px-4 py-3 rounded-full shadow-xl bg-gradient-to-l from-[#FFC000]  to-[#FFDA00]${className}`}
    >
      {children}
    </Link>
  );
};

export default YellowButton;

