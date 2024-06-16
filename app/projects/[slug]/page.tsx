export const revalidate = 10;

import { RelatedContent } from "@/components/Related";
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
      <p className="text-lg lg:text-xl max-w-xl">{project.description}</p>
      <img
        src={project.thumbnail}
        className="animate-fade-left animate-delay-700 w-full max-w-[720px] max-h-[480px] object-cover rounded-2xl"
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
      {projects.length !== 0 && <RelatedContent data={projects} />}
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
