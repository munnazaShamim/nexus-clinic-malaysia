import { NextIntlClientProvider } from "next-intl";
import { getMessages, setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/src/i18n/routing";
import Navbar from "@/src/components/navbar/Navbar";
import { Footer } from "@/src/components/Footer";
import { FloatingWhatsapp } from "@/src/components/Whatsapp";

export function generateStaticParams() {
  return (routing.locales as readonly string[]).map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!(routing.locales as readonly string[]).includes(locale)) {
    notFound();
  }

  // Required for static rendering — primes the locale for server components below.
  setRequestLocale(locale);

  const messages = await getMessages();

  return (
    <NextIntlClientProvider locale={locale} messages={messages}>
      <Navbar />
      {children}
      <Footer />
      <FloatingWhatsapp isActive={true} hideOnMobile={false} />
    </NextIntlClientProvider>
  );
}
