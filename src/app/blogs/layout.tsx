import { NextIntlClientProvider } from "next-intl";
import Navbar from "@/src/components/navbar/Navbar";
import { Footer } from "@/src/components/Footer";
import { loadMessages } from "@/src/i18n/request";

// Blogs live outside [locale] and are always English, but Navbar/Footer use
// next-intl hooks — so we still need to provide a client context.
export default async function BlogsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const messages = await loadMessages("en");

  return (
    <NextIntlClientProvider locale="en" messages={messages}>
      <Navbar />
      {children}
      <Footer />
    </NextIntlClientProvider>
  );
}
