import { Post } from "@/types/Notion";
import Script from "next/script";
import { site_config } from "@/config/site.config";

export function ArticleMarkup({ data }: { data: Post }) {
  const json = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: data.title,
    description: data.description,
    thumbnailUrl: data.thumbnail,
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
      id="article-markup"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(json),
      }}
    />
  );
}
