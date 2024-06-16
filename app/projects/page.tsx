export const revalidate = 10;

import { Card } from "@/components/Card";
import { Post } from "../../types/Notion";
import { blogPostsModels, getAllPublishedProject } from "../../lib/notion";

export default async function Blog() {
  const getProjects = await getAllPublishedProject();
  const projects = getProjects.map((project) => blogPostsModels(project));
  return (
    <section className="mx-auto grid justify-between justify-items-center gap-10 pt-40">
      {projects.map((project: Post) => (
        <Card
          key={project.id}
          title={project.title}
          description={project.description}
          tags={project.tags}
          slug={project.slug}
          image={
            project.thumbnail.external?.url ||
            project.thumbnail.file?.url ||
            "https://dummyjson.com/image/400x400"
          }
          type="projects"
        />
      ))}
    </section>
  );
}
