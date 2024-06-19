import { site_config } from "@/config/site.config";

export function SiteMarkup() {
  const baseUrl = process.env.BASE_URL || "https://ilhammaulana.me";
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    url: baseUrl,
    name: site_config.title,
    potentialAction: {
      "@type": "SearchAction",
      target: `${baseUrl}/blog/#search?q=`,
      queryInput: "search_term_string",
    },
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(jsonLd),
      }}
    />
  );
}
