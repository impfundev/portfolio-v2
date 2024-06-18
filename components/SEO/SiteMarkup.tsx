import Script from "next/script";
import { site_config } from "@/config/site.config";

export function SiteMarkup() {
  const baseUrl = process.env.BASE_URL || "https://ilhammp.netlify.app";
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    url: baseUrl,
    name: site_config.title,
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${baseUrl}/blog/#search?q={search_term_string}`,
      },
    },
  };
  return (
    <Script
      id="author-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(jsonLd),
      }}
    />
  );
}
