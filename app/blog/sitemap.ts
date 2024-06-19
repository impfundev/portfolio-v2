import { blogPostsModels, getAllPublishedBlog } from "@/lib/notion";
import { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = process.env.BASE_URL || "https://ilhammaulana.me";
  const getPosts = await getAllPublishedBlog();
  const posts: MetadataRoute.Sitemap = getPosts.map((post) => {
    const data = blogPostsModels(post);
    return {
      url: `${baseUrl}/${data.slug}`,
      lastModified: data.updateAt,
      changeFrequency: "daily",
    };
  });

  return posts;
}
