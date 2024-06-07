import { Post } from "../types/Notion";

const revalidate = { revalidate: 1 };
const baseApiUrl = `${process.env.BASE_URL}/api`;

export async function getPosts() {
  const res = await fetch(`${baseApiUrl}/posts`, {
    next: revalidate,
  });

  if (!res.ok) throw new Error("Failed to fetch data");
  const data = await res.json();
  const posts: Post[] = data.posts;
  return posts;
}

export async function getPostBySlug(slug: string) {
  const res = await fetch(`${baseApiUrl}/posts/${slug}`, {
    next: revalidate,
  });

  if (!res.ok) throw new Error("Failed to fetch data");
  const data = await res.json();
  const post: Post = data.post;
  return post;
}

export async function getProjects() {
  const res = await fetch(`${baseApiUrl}/projects`, {
    next: revalidate,
  });

  if (!res.ok) throw new Error("Failed to fetch data");
  const data = await res.json();
  const projects: Post[] = data.projects;
  return projects;
}

export async function getProjectBySlug(slug: string) {
  const res = await fetch(`${baseApiUrl}/projects/${slug}`, {
    next: revalidate,
  });

  if (!res.ok) throw new Error("Failed to fetch data");
  const data = await res.json();
  const project: Post = data.project;
  return project;
}
