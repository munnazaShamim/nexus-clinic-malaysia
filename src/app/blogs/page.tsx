import BlogPage from "@/src/components/blog/BlogsPage";
import { FloatingWhatsapp } from "@/src/components/Whatsapp";
import { wordpressService } from "@/src/services/wordpress";
import type { WordPressPost } from "@/src/types/wordpress";
import { Metadata } from "next";

const baseurl = process.env.BASE_URL || "https://www.nexus-clinic.com"
export const metadata: Metadata = {
  title: "Nexus Clinic Blog – Aesthetic & Weight Loss Insights",
  description: "MOH-certified clinic blog featuring expert advice on aesthetic, anti-aging, and weight loss treatments designed for safe, effective results.",
  alternates: {
    canonical: `${baseurl}/blogs`,
  },
};


export default async function Page() {
  let initialPosts: WordPressPost[] = [];
  try {
    initialPosts = await wordpressService.getPosts({ perPage: 9 });
  } catch {
    // fall through — client will fetch on mount
  }

  return (
    <>
      <BlogPage initialPosts={initialPosts} />
      <FloatingWhatsapp isActive={true} hideOnMobile={false} />
    </>
  );
}