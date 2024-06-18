import { Post } from "@/types/Notion";
import Script from "next/script";
import { site_config } from "@/config/site.config";

export function ArticleMarkup({ data }: { data: Post }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: data.title,
    description: data.description,
    thumbnailUrl: data.thumbnail,
    image: data.thumbnail,
    datePublished: data.publishAt,
    dateModified: data.updateAt,
    author: {
      "@type": "Person",
      name: site_config.author.name,
      url: `${process.env.BASE_URL}/about`,
    },
    publisher: {
      "@type": "Person",
      name: site_config.author.name,
      url: `${process.env.BASE_URL}/about`,
    },
    url: `${process.env.BASE_URL}/${data.slug}`,
  };
  return (
    <Script
      id="article-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(jsonLd),
      }}
    />
  );
}
