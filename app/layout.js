import ReduxProvider from "@/redux/ReduxProvider";

export default async function LocaleLayout({ children, params: { locale } }) {
  return (
    <html lang={locale}>
      <body>
        <ReduxProvider>{children}</ReduxProvider>
      </body>
    </html>
  );
}
