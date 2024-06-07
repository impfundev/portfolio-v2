export const runtime = "edge";

import { getSingleProject } from "@/app/lib/notion";

export async function GET(
  request: Request,
  { params }: { params: { slug: string } }
) {
  const slug = params.slug;
  const project = await getSingleProject(slug);

  return Response.json({ project });
}
