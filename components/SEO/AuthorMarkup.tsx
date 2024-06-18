import Script from "next/script";
import { site_config } from "@/config/site.config";

export function AuthorMarkup() {
  const baseUrl = process.env.BASE_URL || "https://ilhammp.netlify.app";
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": `${baseUrl}/#about`,
    address: {
      "@type": "PostalAddress",
      addressLocality: "West Java",
      addressRegion: "Indonesia",
    },
    email: "mailto:ilhammaulana.dev@gmail.com",
    image: `${baseUrl}/profile.png`,
    jobTitle: "Full-Stack Developer",
    name: site_config.author.name,
    url: baseUrl,
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
