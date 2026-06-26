import "./globals.css";
import Script from "next/script";
import { inter } from "@/src/fonts/inter";

export const metadata = {
  metadataBase: new URL("https://www.nexus-clinic.com"),
  title: {
    default: "Nexus Clinic - Weight Loss & Aesthetic Clinic Kuala Lumpur",
    template: "%s | Nexus Clinic",
  },
  description:
    "Nexus Clinic Kuala Lumpur provides weight loss, aesthetic, and skin treatments with experienced medical professionals.",
  alternates: {
    canonical: "https://www.nexus-clinic.com",
  },
  openGraph: {
    title: "Nexus Clinic - Weight Loss & Aesthetic Clinic Kuala Lumpur",
    description:
      "Professional aesthetic and weight loss treatments in Kuala Lumpur.",
    url: "https://www.nexus-clinic.com",
    siteName: "Nexus Clinic",
    locale: "en_MY",
    type: "website",
    images: [
      {
        url: "https://www.nexus-clinic.com/logo.png",
        width: 1200,
        height: 630,
        alt: "Nexus Clinic",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Nexus Clinic - Weight Loss & Aesthetic Clinic Kuala Lumpur",
    description:
      "Professional aesthetic and weight loss treatments in Kuala Lumpur.",
    images: ["https://www.nexus-clinic.com/logo.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "MedicalClinic",
    "@id": "https://www.nexus-clinic.com/#medicalclinic",
    name: "Nexus Clinic - Weight Loss & Aesthetic Clinic Kuala Lumpur",
    url: "https://www.nexus-clinic.com/",
    telephone: "+60167745699",
    image: "https://www.nexus-clinic.com/logo.png",
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      streetAddress: "LG 10, Lower Ground Floor, Wisma UOA 2",
      addressLocality: "Kuala Lumpur",
      postalCode: "50450",
      addressRegion: "Federal Territory of Kuala Lumpur",
      addressCountry: "MY",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: 4.7,
      reviewCount: 483,
      bestRating: 5,
      worstRating: 1,
    },
  };

  return (
    <html lang="en">
      <head>
        <meta name="google-site-verification" content="m2Jx5XHGk5VfQM86pq0VleG_ctP1wwrtGNvsy2jT86o"/>
        {/* Preconnect for GTM – saves ~100 ms on cold connections before first user interaction */}
        <link rel="preconnect" href="https://www.googletagmanager.com"/>
        <link rel="dns-prefetch" href="https://www.google-analytics.com"/>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
        />
        <Script
          id="gtm-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                var loaded = false;
                function loadGTM() {
                  if (loaded) return;
                  loaded = true;
                  window.dataLayer = window.dataLayer || [];
                  window.dataLayer.push({ 'gtm.start': new Date().getTime(), event: 'gtm.js' });
                  var s = document.createElement('script');
                  s.async = true;
                  s.src = 'https://www.googletagmanager.com/gtm.js?id=GTM-PRRSXZ2';
                  document.head.appendChild(s);
                  ['mousedown','keydown','touchstart','scroll'].forEach(function(e) {
                    window.removeEventListener(e, loadGTM, { passive: true });
                  });
                }
                window.addEventListener('load', function() { setTimeout(loadGTM, 3500); });
                ['mousedown','keydown','touchstart','scroll'].forEach(function(e) {
                  window.addEventListener(e, loadGTM, { passive: true, once: true });
                });
              })();
            `,
          }}
        />
      </head>

      <body className={inter.className}>
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-PRRSXZ2"
            height="0"
            width="0"
            style={{
              display: "none",
              visibility: "hidden",
            }}
          />
        </noscript>

        {children}
      </body>
    </html>
  );
}