
export default async function LocaleLayout({ children, params: { locale } }) {
  return (
    <html lang={locale}>

      <body>
        {children}
      </body>
    </html>
  );
}
