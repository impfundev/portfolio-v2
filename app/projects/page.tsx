import { Card } from "@/components/Card";
import { getProjects } from "../lib/data";
import { Post } from "../types/Notion";

export default async function Blog() {
  const projects = await getProjects();
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
