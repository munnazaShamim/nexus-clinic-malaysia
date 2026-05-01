import Navbar from "@/src/components/navbar/Navbar";
import { Footer } from "@/src/components/Footer";
import { FloatingWhatsapp } from "@/src/components/Whatsapp";

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  return (
    <>
      <Navbar />
      {children}
      <Footer />
      <FloatingWhatsapp isActive={true} hideOnMobile={false} />
    </>
  );
}