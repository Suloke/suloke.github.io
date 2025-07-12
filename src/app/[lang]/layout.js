import Footer from "@/components/footer";
import Header from "@/components/header";
import { i18n } from "@/i18n-config";

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }));
}

export default async function RootLayout({ params, children }) {
  const { lang } = await params;

  return (
    <div dir={lang === "ar" ? "rtl" : "ltr"}>
      <Header lang={lang} />
      <main className="flex-1">{children}</main>
      <Footer lang={lang} />
    </div>
  );
}
