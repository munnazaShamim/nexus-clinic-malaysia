import Navbar from "@/src/components/navbar/Navbar";
import { Footer } from "@/src/components/Footer";
export default function BlogsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
    <Navbar />
    {children}
    <Footer />
    </>
  );
}