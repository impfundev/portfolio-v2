export const dynamicParams = false;

import { Card } from "@/components/Card";
import { Tags } from "@/components/Tags";

import dynamic from "next/dynamic";
import {
  blogPostsModels,
  getAllPublishedProject,
  getSingleProject,
} from "@/app/lib/notion";
import { Post } from "@/app/types/Notion";
const Thumbnail = dynamic(
  () => import("@/components/Thumbnail").then((res) => res.Thumbnail),
  { ssr: false }
);

export default async function Project({
  params,
}: {
  params: { slug: string };
}) {
  const getProjects = await getAllPublishedProject();
  const res = getProjects.map((project) => blogPostsModels(project));

  const project: Post = await getSingleProject(params.slug);

  const projects = res
    .filter(
      (p: any) => p.tags.includes(...project.tags) && p.slug !== params.slug
    )
    .slice(0, 6);

  return (
    <article className="grid gap-6 pt-20">
      <h1 className="font-bold text-2xl md:text-4xl lg:text-5xl">
        {project.title}
      </h1>
      <p className="text-lg md:text-xl lg:text-2xl">{project.description}</p>
      <Thumbnail thumbnail={project.thumbnail} alt={project.title} />
      {project.content && (
        <div
          className="prose md:prose-lg"
          dangerouslySetInnerHTML={{ __html: project.content }}
        />
      )}
      <Tags tags={project.tags} />
      {projects.length !== 0 && (
        <div className="grid gap-6 py-10">
          <h2 className="text-center pb-10 font-bold text-2xl md:text-4xl lg:text-5xl">
            Related
          </h2>
          <div className="w-full grid md:grid-cols-2 justify-between justify-items-center gap-10">
            {projects.map((project) => (
              <Card
                key={project.id}
                title={project.title}
                description={project.description}
                tags={project.tags}
                slug={project.slug}
                image={
                  project.thumbnail.external!.url ||
                  project.thumbnail.file!.url ||
                  "https://dummyjson.com/image/400x400"
                }
                type="projects"
              />
            ))}
          </div>
        </div>
      )}
    </article>
  );
}

export async function generateStaticParams() {
  const getProjects = await getAllPublishedProject();
  const projects = getProjects.map((project) => blogPostsModels(project));

  return projects.map((project) => ({
    slug: project.slug,
  }));
}
