export const revalidate = 10;

import { Content } from "@/components/Content";

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

  return <Content item={project} lists={projects} />;
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
