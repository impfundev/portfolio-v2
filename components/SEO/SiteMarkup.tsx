import { site_config } from "@/config/site.config";
import { SiteLinksSearchBoxJsonLd } from "next-seo";

export function SiteMarkup() {
  const baseUrl = process.env.BASE_URL || "https://ilhammp.netlify.app";
  return (
    <SiteLinksSearchBoxJsonLd
      url={baseUrl}
      name={site_config.title}
      potentialActions={[
        {
          target: `${baseUrl}/blog/#search?q=`,
          queryInput: "search_term_string",
        },
        {
          target: `${baseUrl}/projects/#search?q=`,
          queryInput: "search_term_string",
        },
      ]}
    />
  );
}
