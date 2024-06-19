import { blogPostsModels, getAllPublishedProject } from "@/lib/notion";
import { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = process.env.BASE_URL || "https://ilhammaulana.me";
  const getPosts = await getAllPublishedProject();
  const projects: MetadataRoute.Sitemap = getPosts.map((project) => {
    const data = blogPostsModels(project);
    return {
      url: `${baseUrl}/${data.slug}`,
      lastModified: data.updateAt,
      changeFrequency: "daily",
    };
  });

  return projects;
}
