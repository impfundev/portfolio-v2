export const revalidate = 10;

import { Card } from "@/components/Card";
import { Tags } from "@/components/Tags";

import {
  blogPostsModels,
  getAllPublishedProject,
  getSingleProject,
} from "@/lib/notion";
import { Post } from "@/types/Notion";

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
      <img
        src={project.thumbnail}
        className="animate-fade-left animate-delay-700 w-full object-cover rounded-lg"
        width={720}
        height={480}
        alt={project.title}
      />
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
                image={project.thumbnail}
                type="projects"
              />
            ))}
          </div>
        </div>
      )}
    </article>
  );
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}) {
  const project: Post = await getSingleProject(params.slug);

  return {
    title: project.title,
    description: project.description,
    openGraph: {
      title: project.title,
      description: project.description,
      images: project.thumbnail,
    },
  };
}

export async function generateStaticParams() {
  const getProjects = await getAllPublishedProject();
  const projects = getProjects.map((project) => blogPostsModels(project));

  return projects.map((project) => ({
    slug: project.slug,
  }));
}
