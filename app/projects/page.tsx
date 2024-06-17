import { Card } from "@/components/Card";
import { Post } from "@/types/Notion";
import { blogPostsModels, getAllPublishedProject } from "@/lib/notion";

export const revalidate = 43200;

export default async function Blog() {
  const getProjects = await getAllPublishedProject();
  const projects = getProjects.map((project) => blogPostsModels(project));

  return (
    <section className="mx-auto grid justify-between justify-items-center gap-10 pt-40">
      {projects.map((project: Post) => (
        <Card
          key={project.id}
          title={project.title}
          date={project.updateAt}
          description={project.description}
          tags={project.tags}
          slug={project.slug}
          image={project.thumbnail}
          type="projects"
        />
      ))}
    </section>
  );
}
