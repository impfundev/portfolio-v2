export const runtime = "edge";

import { blogPostsModels, getAllPublishedBlog } from "@/app/lib/notion";

export async function GET(request: Request) {
  const getPosts = await getAllPublishedBlog();
  const posts = getPosts.map((post) => blogPostsModels(post));

  return Response.json({ posts });
}
