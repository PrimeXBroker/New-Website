// [locale] layout — no <html> or <body> tags (those live in the root layout).
// This file exists only so Next.js can resolve the [locale] segment.

export default function LocaleLayout({ children }) {
  return <>{children}</>;
}
