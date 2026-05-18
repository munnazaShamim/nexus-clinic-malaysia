import { faceTreatmentsMetadata } from "@/src/config/faceTreatments";
import { hairTreatmentsMetadata } from "@/src/config/hairTreatments";
import { skinTreatmentsMetadata } from "@/src/config/skinTreatments";
import { regenerativeTreatmentsMetadata } from "@/src/config/regenerativeTreatments";
import { weightlossTreatmentsMetadata } from "@/src/config/weightlossTreatments";
import { wordpressService } from "@/src/services/wordpress";
import { doctors } from "@/src/data/doctorProfiles";
import { routing } from "@/src/i18n/routing";
import { BASE_URL, localizedUrl } from "@/src/lib/seo";

export async function GET() {
  const withSlash = (url: string) => (url.endsWith("/") ? url : `${url}/`);
  const now = new Date();

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

  // Emit one URL per locale for every non-blog route.
  const localizedRoutes = (paths: string[]) => {
    const out: Array<{ url: string; lastModified: Date }> = [];
    for (const path of paths) {
      for (const locale of routing.locales) {
        out.push({ url: localizedUrl(locale, path), lastModified: now });
      }
    }
    return out;
  };

  const staticUrls = localizedRoutes(staticRoutes);

  const treatmentPaths = (items: { slug: string }[], basePath: string) =>
    items.map((item) => `/${basePath}/${item.slug}`);

  const faceUrls = localizedRoutes(treatmentPaths(faceTreatmentsMetadata, "face"));
  const hairUrls = localizedRoutes(treatmentPaths(hairTreatmentsMetadata, "hair"));
  const skinUrls = localizedRoutes(treatmentPaths(skinTreatmentsMetadata, "skin"));
  const regenerativeUrls = localizedRoutes(treatmentPaths(regenerativeTreatmentsMetadata, "regenerative"));
  const weightLossUrls = localizedRoutes(treatmentPaths(weightlossTreatmentsMetadata, "weight-loss"));
  const doctorUrls = localizedRoutes(treatmentPaths(doctors, "doctors"));

  // Blogs are English-only (not under [locale]) — never emit locale variants.
  let blogUrls: Array<{ url: string; lastModified: Date }> = [];
  try {
    const posts = await wordpressService.getAllPosts();
    blogUrls = posts.map((post) => ({
      url: withSlash(`${BASE_URL}/blogs/${post.slug}`),
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
