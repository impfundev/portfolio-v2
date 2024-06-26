import { Post } from "@/types/Notion";
import { site_config } from "@/config/site.config";

export function ArticleMarkup({ data }: { data: Post }) {
  const baseUrl = process.env.BASE_URL || "https://ilhammaulana.me";
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "@id": `${baseUrl}/${data.slug}`,
    headline: data.title,
    description: data.description,
    thumbnailUrl: data.thumbnail,
    image: data.thumbnail,
    datePublished: data.publishAt,
    dateModified: data.updateAt,
    author: {
      "@type": "Person",
      name: site_config.author.name,
      url: `${baseUrl}/about`,
    },
    publisher: {
      "@type": "Person",
      name: site_config.author.name,
      url: `${baseUrl}/about`,
    },
    url: `${baseUrl}/${data.slug}`,
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
