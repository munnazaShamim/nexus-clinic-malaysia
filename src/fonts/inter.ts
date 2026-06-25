import { Inter } from "next/font/google";

export const inter = Inter({
  subsets: ["latin"],
  // Weight 300 removed — not used in the design, saves one font file download.
  weight: ["400", "500", "600", "700"],
  display: "swap",
});