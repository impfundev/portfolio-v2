export const runtime = "edge";

import { blogPostsModels, getAllPublishedProject } from "@/app/lib/notion";

export async function GET(request: Request) {
  const getProjects = await getAllPublishedProject();
  const projects = getProjects.map((project) => blogPostsModels(project));

  return Response.json({ projects });
}
