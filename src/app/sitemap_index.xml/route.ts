import { MetadataRoute } from "next";
import { faceTreatmentsMetadata } from "@/src/config/faceTreatments";
import { hairTreatmentsMetadata } from "@/src/config/hairTreatments";
import { skinTreatmentsMetadata } from "@/src/config/skinTreatments";
import { regenerativeTreatmentsMetadata } from "@/src/config/regenerativeTreatments";
import { weightlossTreatmentsMetadata } from "@/src/config/weightlossTreatments";
import { wordpressService } from "@/src/services/wordpress";
import { doctors } from "@/src/data/doctorProfiles";

export async function GET() {
  const baseUrl = process.env.BASE_URL || "https://www.nexus-clinic.com";
  
  const withSlash = (url: string) => {
    return url.endsWith("/") ? url : `${url}/`;
  };
  
  const staticRoutes = [
    "",
    "/about-us",
    "/contact-us",
    "/doctors",
    "/gallery",
    "/products",
    "/face",
    "/hair",
    "/skin",
    "/regenerative",
    "/weight-loss",
    "/consultation",
    "/awards-and-certifications",
    "/fraqtional-laser-resurfacing",
  ];

  const staticUrls = staticRoutes.map((route) => ({
    url: withSlash(`${baseUrl}${route}`),
    lastModified: new Date(),
  }));

  const generateDynamicUrls = (items: { slug: string }[], basePath: string) => {
    return items.map((item) => ({
      url: withSlash(`${baseUrl}/${basePath}/${item.slug}`),
      lastModified: new Date(),
    }));
  };

  const faceUrls = generateDynamicUrls(faceTreatmentsMetadata, "face");
  const hairUrls = generateDynamicUrls(hairTreatmentsMetadata, "hair");
  const skinUrls = generateDynamicUrls(skinTreatmentsMetadata, "skin");
  const regenerativeUrls = generateDynamicUrls(regenerativeTreatmentsMetadata, "regenerative");
  const weightLossUrls = generateDynamicUrls(weightlossTreatmentsMetadata, "weight-loss");
  const doctorUrls = generateDynamicUrls(doctors, "doctors");

  // Fix: Add explicit type
  let blogUrls: Array<{ url: string; lastModified: Date }> = [];

  try {
    const posts = await wordpressService.getAllPosts();
    blogUrls = posts.map((post) => ({
      url: withSlash(`${baseUrl}/blogs/${post.slug}`),
      lastModified: new Date(post.modified || post.date),
    }));
  } catch (err) {
    console.error("Blog sitemap error:", err);
  }

  const allUrls = [
    ...staticUrls,
    ...faceUrls,
    ...hairUrls,
    ...skinUrls,
    ...regenerativeUrls,
    ...weightLossUrls,
    ...doctorUrls,
    ...blogUrls,
  ];

  // Generate XML
  const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${allUrls.map((url) => `
        <url>
          <loc>${url.url}</loc>
          <lastmod>${url.lastModified.toISOString()}</lastmod>
        </url>
      `).join('')}
    </urlset>
  `;

  return new Response(sitemapXml, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=3600',
    },
  });
}