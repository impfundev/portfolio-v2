import { NextSeo } from "next-seo";
import { site_config } from "@/config/site.config";

export function BlogMarkup() {
  const baseUrl = process.env.BASE_URL || "https://ilhammp.netlify.app";
  const jsonLd = {
    "@type": "Blog",
    "@id": `${baseUrl}/about/#publisherBlog`,
    name: site_config.blog.title,
    url: "https://www.theverge.com",
    description: site_config.blog.description,
    alternateName: ["Ilham Maulana Pratama Blog", "impblog"],
    logo: {
      "@type": "ImageObject",
      url: `${baseUrl}/favicon.ico`,
      height: "128",
      width: "128",
    },
    masthead: `${baseUrl}/about`,
    foundingDate: "2024-17-06",
    founder: {
      "@type": "Person",
      name: site_config.author.name,
      url: `${baseUrl}/about`,
    },
    ownershipFundingInfo:
      "impblog is owned by Ilham Maulana Pratama, a full-stack web developer where experienced in building web aplication using React, Node.js, and Next.js. Expertised in Javascript and Typescript, but also enthusias learning and using PHP and Python, including the framworks such as Laravel and Django to developed backend side.",
    sameAs: [
      "https://www.github.com/impfundev",
      "https://www.linkedin.com/in/ilhammp",
    ],
    knowsAbout: [
      { "@type": "Thing", name: "technology" },
      { "@type": "Thing", name: "next.js" },
      { "@type": "Thing", name: "react" },
      { "@type": "Thing", name: "javascript" },
      { "@type": "Thing", name: "typescript" },
      { "@type": "Thing", name: "php" },
      { "@type": "Thing", name: "laravel" },
      { "@type": "Thing", name: "python" },
      { "@type": "Thing", name: "django" },
      { "@type": "Thing", name: "web development" },
      { "@type": "Thing", name: "ai integeration" },
      { "@type": "Thing", name: "artificial intelligence" },
      { "@type": "Thing", name: "cybersecurity news" },
      { "@type": "Thing", name: "tech news" },
      { "@type": "Thing", name: "gadgets" },
      { "@type": "Thing", name: "software news" },
      { "@type": "Thing", name: "social media platforms" },
      { "@type": "Thing", name: "streaming platforms" },
    ],
  };
  return <NextSeo {...jsonLd} />;
}
